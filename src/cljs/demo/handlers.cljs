(ns demo.handlers
  (:require [re-frame.core :as re-frame]
            [differ.core :as differ]
            [taoensso.encore :as encore :refer (debugf)]
            [demo.ws :as ws]))

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   {:ws/connected false
    :shared {:count 0}}))

(re-frame/reg-event-db
 :increment-count
 (fn [db [_ delta]]
   (ws/chsk-send! [:counter/incr {:delta delta}])
   (update-in db [:shared :count] + delta)))

(re-frame/reg-event-db
 :ws/connected
 (fn [db [_ connected?]]
   (if connected? (ws/chsk-send! [:state/sync]))
   (assoc db :ws/connected connected?)))

(re-frame/reg-event-db
 :ws/send
 (fn [db [_  command & data]]
   (debugf "Sending: %s %s" command data)
   (ws/chsk-send! [command data])))

(re-frame/reg-event-db
 :state/sync
 (fn [db [_ new-db]]
   (debugf "Syncing state %s" new-db)
   (assoc db :shared new-db)))

(re-frame/reg-event-db
 :state/diff
 (fn [db [_ diff]]
   (.log js/console "Itt a kutya elásva")
   (assoc db :shared (differ/patch (:shared db) diff))))
