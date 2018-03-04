(ns demo.handlers
  (:require [re-frame.core :as re-frame :refer [reg-event-db]]
            [differ.core :as differ]
            [taoensso.encore :as encore :refer (debugf)]
            [demo.ws :as ws]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:ws/connected false
    :active-language :hu
    :languages {:hu {:item "Magyar" :title "Nyelvek"}
                :fr {:item "Français" :title "Lagues"}
                :de {:item "Deutsche" :title "Sprachen"}
                :en {:item "English" :title "Languages"}}
    :shared  {:blogs []}}))

(reg-event-db
 :assoc-state
 (fn [db [_ the-key package]]
   ;(ws/chsk-send! [:counter/incr {:delta delta}])
   (assoc db the-key package)))

(reg-event-db
 :blog/get
 (fn [db [_ content]]
   (js/console.log (str "Halimali" content))
   (assoc-in db
             [:shared :blogs]
             (conj (:shared (:blogs db))
                   (assoc-in {:uuid "84c24f6c-694c-45a5-b85f-03f48b0adece"
                              :author "Zawiasa2"
                              :date "2017-12-24"
                              :languages
                              {:hu {:title "hu"
                                    :content "paprikás krumpli"}
                               :en
                               {:title "en"
                                :content "Tea"}
                               :fr
                               {:title "fr"
                                :content "Bagett"}
                               :de
                               {:title "de"
                                :content "Sör"}}}
                             [:languages :hu :content]
                             content)))))

(reg-event-db
 :increment-count
 (fn [db [_ delta]]
   (ws/chsk-send! [:counter/incr {:delta delta}])
   (update-in db [:shared :count] + delta)))

(reg-event-db
 :ws/connected
 (fn [db [_ connected?]]
   (if connected? (ws/chsk-send! [:state/sync]))
   (assoc db :ws/connected connected?)))

(reg-event-db
 :ws/send
 (fn [db [_  command & data]]
   (debugf "Sending: %s %s" command data)
   (ws/chsk-send! [command data])))

(reg-event-db
 :state/sync
 (fn [db [_ new-db]]
   (debugf "Syncing state %s" new-db)
   (assoc db :shared new-db)))

(reg-event-db
 :state/diff
 (fn [db [_ diff]]
   (.log js/console "Itt a kutya elásva")
   (assoc db :shared (differ/patch (:shared db) diff))))
