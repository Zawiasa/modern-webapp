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
    :shared  {:count 0
              :blogs [{:hu {:date "2017-01-22" :title "1Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                       :en {:date "2017-01-22" :title "English" :content "Here will..."}
                       :fr {:date "2017-01-22" :title "French" :content "vole vu"}
                       :de {:date "2017-01-22" :title "German" :content "nein nein"}}
                      {:hu {:date "2017-01-22" :title "2Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                       :en {:date "2017-01-22" :title "English" :content "Here will..."}
                       :fr {:date "2017-01-22" :title "French" :content "vole vu"}
                       :de {:date "2017-01-22" :title "German" :content "nein nein"}}
                      {:hu {:date "2017-01-22" :title "3Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                       :en {:date "2017-01-22" :title "English" :content "Here will..."}
                       :fr {:date "2017-01-22" :title "French" :content "vole vu"}
                       :de {:date "2017-01-22" :title "German" :content "nein nein"}}
                      {:hu {:date "2017-01-22" :title "4Magyar" :content "Ide fog kerulni a html amit kesobb injectelunk a domba"}
                       :en {:date "2017-01-22" :title "English" :content "Here will..."}
                       :fr {:date "2017-01-22" :title "French" :content "vole vu"}
                       :de {:date "2017-01-22" :title "German" :content "nein nein"}}]}
    }))

(reg-event-db
 :assoc-state
 (fn [db [_ the-key package]]
   ;(ws/chsk-send! [:counter/incr {:delta delta}])
   (assoc db the-key package)))

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
