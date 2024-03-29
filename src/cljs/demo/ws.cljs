(ns demo.ws
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.encore :as encore :refer (debugf)]
            [taoensso.encore :as encore :refer-macros (have have?)]
            [taoensso.sente :as sente :refer (cb-success?)]
            [re-frame.core :as re-frame :refer [dispatch]]))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
                                  {:type :auto})] ; e/o #{:auto :ajax :ws}

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))   ; Watchable, read-only atom


(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event]}]
  (debugf "Unandled event: %s" event))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data open?]}]
  (let [[old-state-map new-state-map] (have vector? ?data)]

    (debugf "%s" ?data)
    ;(.notification js/UIkit (str "What's the problem" (:open? ?data)))
    (re-frame/dispatch [:ws/connected (:open? new-state-map)])))

(defmethod event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (dispatch [:blogs/get])
  (js/console.log (str "Handshake happened" ?data)))
  ; ???


(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (debugf "%s" ?data)
  (.log js/console (str ?data))
;  (.notification js/UIkit (str "What's the problem" (:open? ?data)))
  (re-frame/dispatch ?data))

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))

(def router (atom nil))
(defn stop-router! [] (when-let [stop-f @router] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router (sente/start-chsk-router! ch-chsk event-msg-handler*)))
