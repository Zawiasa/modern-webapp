(ns webtemp-client.core
    (:require [reagent.core :as reagent :refer [atom]]
              ;[reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              ;[clojure.string :as string]
              ;[lvlup.crusader.sente :refer [start-router! chsk-send! chsk-reconnect! chsk-disconnect!]]
              ;[lvlup.crusader.sente :refer [chsk-send! start-router! chsk-reconnect! chsk-disconnect!]]
              ;[lvlup.crusader.reservation :refer [reservation]]
              ;[lvlup.crusader.crusader :refer [crusader]]
              ;[lvlup.crusader.dungeon :refer [dungeon checkout registration filter-by-name-and-id sidenav]]
              ;[ajax.core :refer [GET POST]]
              [re-frame.core :refer [dispatch-sync dispatch subscribe]]))
              ;[jayq.core :refer [$ css html]]))



;; -------------------------
;; Routes

;(secretary/defroute "/" []
;   (dispatch [:set-actual-page "home-page" :hu]))

;(secretary/defroute "/hu" [a]
;  (dispatch [:set-actual-page "home-page" :en]))




(defn current-page []
  [:div "Nem gondolnád! :D"])




;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  ;(dispatch-sync [:initialize])
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
