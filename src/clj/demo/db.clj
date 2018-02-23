(ns demo.db
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as s]
   [duratom.core :refer [duratom]]
   [mpg.core :as mpg]
   [spec-tools.core :as st]
   [spec-tools.data-spec :as ds]
   [spec-tools.json-schema :as jsc]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; PostgreSQL Database                              ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def postgres-db nil)

(mpg/patch)

;THIS IS JUST AN EXAMPLE
(def db-spec {:network.users
              {:id string?
               (ds/req :email) string?
               :admin boolean?
               :devices {}
               :contracts [string?]
               (ds/req :password) string?
               :date string?}})

(defn create-schema! [kv] (jdbc/query postgres-db [(str "CREATE SCHEMA " (name kv))]))

(defn drop-schema! [kv] (jdbc/query postgres-db [(str "DROP SCHEMA " (name kv) " CASCADE")]))

(defn create-table! [kv schema] (jdbc/db-do-commands postgres-db
                                                     (jdbc/create-table-ddl kv schema)))

(defn drop-table! [kv] (jdbc/db-do-commands postgres-db
                                            (jdbc/drop-table-ddl kv)))

(defn alter-table! [kv new-column typ]
  (jdbc/query postgres-db [(str "ALTER TABLE " kv " ADD " new-column " " typ)]))

(defn insert! [kv insert-map] (jdbc/insert! postgres-db kv insert-map))
(defn insert-multi! [kv vector-of-maps] (jdbc/insert-multi! postgres-db kv vector-of-maps))

(defn dump! [kv]
  (jdbc/query postgres-db [(str "SELECT * FROM " (name kv))]))

(defn dumpwhere! [kv prop equal]
  (jdbc/query postgres-db [(str "SELECT * FROM " (name kv) " WHERE " (name prop) " = ?") equal]))

(defn read-all! [kv id]
  (jdbc/query postgres-db
              [(str "SELECT * FROM " (name kv) " WHERE id = ?") id]))

(defn read! [kv prop id]
  (get (first (jdbc/query postgres-db
                          [(str "SELECT " (name prop) " FROM " (name kv) " WHERE id = ?") id]))
       prop))

(defn what? [kv prop something id]
  (get (first (jdbc/query postgres-db
                          [(str "SELECT " (name prop) " FROM " (name kv) " WHERE " (name something) " = ?") id]))
       prop))

(defn update! [kv id data]
  (jdbc/update! postgres-db kv data ["id = ?" id]))

(defn delete! [kv id]
  (jdbc/delete! postgres-db kv ["id = ?" id]))

(defn delete-where! [kv what id]
  (jdbc/delete! postgres-db kv [(str what " = ?") id]))

(defn row [kv function] (jdbc/query postgres-db [(str "SELECT * FROM " (name kv))] {:row-fn function}))

(defn select [kv] (jdbc/query postgres-db [(str "SELECT '" (name kv) "'")]))

;Converters:
(defn spec->schema
  "This is just a handwritten sketch with the must haves for Postgres"
  [spec]
  (vec (map-indexed (fn [index [e s]] (->> [(keyword (cond (keyword? e) (name e) :else (-> e first second name)))
                                            (cond (vector? s) :jsonb
                                                  (map? s) :json
                                                  :else :varchar)
                                            (cond (= ::id e) "PRIMARY KEY"
                                                  (keyword? e) nil
                                                  :else "NOT NULL")] ;TODO <- this is not good

                                           (keep identity) vec))
                    (vec spec))))

(defn spec->json [spec] (jsc/transform spec))

(defn spec-of [k] (ds/spec :messages (:messages db-spec)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Duratomic Database                               ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def shared (duratom :local-file
                     :file-path "db/shared"
                     :init {:count 0
                            :blogs [{:hu
                                     {:date "2017-01-22" :title "1Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                                     :en
                                     {:date "2017-01-22" :title "English" :content "Here will..."}
                                     :fr
                                     {:date "2017-01-22" :title "French" :content "vole vu"}
                                     :de
                                     {:date "2017-01-22" :title "German" :content "nein nein"}}
                                    {:hu
                                     {:date "2017-01-22" :title "2Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                                     :en
                                     {:date "2017-01-22" :title "English" :content "Here will..."}
                                     :fr
                                     {:date "2017-01-22" :title "French" :content "vole vu"}
                                     :de
                                     {:date "2017-01-22" :title "German" :content "nein nein"}}
                                    {:hu
                                     {:date "2017-01-22" :title "3Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                                     :en
                                     {:date "2017-01-22" :title "English" :content "Here will..."}
                                     :fr
                                     {:date "2017-01-22" :title "French" :content "vole vu"}
                                     :de
                                     {:date "2017-01-22" :title "German" :content "nein nein"}}
                                    {:hu
                                     {:date "2017-01-22" :title "4Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                                     :en
                                     {:date "2017-01-22" :title "English" :content "Here will..."}
                                     :fr
                                     {:date "2017-01-22" :title "French" :content "vole vu"}
                                     :de
                                     {:date "2017-01-22" :title "German" :content "nein nein"}}]}))

;; backed by postgres-db
;(def strong (duratom :postgres-db
;                     :db-config "any db-spec understood by clojure.java.jdbc"
;                     :table-name "my_table"
;                     :row-id 0
;                     :init {:x 1 :y 2}))
