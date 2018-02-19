(ns demo.handlers
  (:require [re-frame.core :as re-frame]
            [differ.core :as differ]
            [taoensso.encore :as encore :refer (debugf)]
            [demo.ws :as ws]
            ))


(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    {:ws/connected false
     :shared {:count 0}}))


(re-frame/register-handler
  :increment-count
  (fn [db [_ delta]]
    (ws/chsk-send! [:counter/incr {:delta delta}])
    (update-in db [:shared :count] + delta)))


(re-frame/register-handler
  :ws/connected
  (fn [db [_ connected?]]
    (if connected? (ws/chsk-send! [:state/sync]))
    (assoc db :ws/connected connected?)))


(re-frame/register-handler
  :ws/send
  (fn [db [_  command & data]]
    (debugf "Sending: %s %s" command data)
    (ws/chsk-send! [command data])))


(re-frame/register-handler
  :state/sync
  (fn [db [_ new-db]]
    (debugf "Syncing state %s" new-db)
    (assoc db :shared new-db)))


(re-frame/register-handler
  :state/diff
  (fn [db [_ diff]]
    (assoc db :shared (differ/patch (:shared db) diff))))
