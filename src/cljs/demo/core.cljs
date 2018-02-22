(ns demo.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [re-frame.core :as re-frame]
            [demo.handlers]
            [demo.subs :as subs]
            [demo.views.frame :as frame]

            [bidi.bidi :as bidi]
            ;;[schema.core :as s] ;For when defining routes get tricky
            ;;[bidi.schema]

            [accountant.core :as accountant]
            [demo.ws :as ws])
  (:import goog.History))

;; -------------------------
;; Initialize app

(def app-routes
  ["/" {"" :home-page
        "blog" :blog
        "about" :about
        "section-a" {"" :section-a
                     ["/item-" :item-id] :a-item}
        "section-b" :section-b
        "missing-route" :missing-route
        true :four-o-four}])

(defn mount-root []
  (reagent/render [frame/frame] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler (fn
                   [path]
                   (let [match (bidi/match-route app-routes path)
                         current-page (:handler match)
                         route-params (:route-params match)]
                     (session/put! :route {:current-page current-page
                                           :route-params route-params})))
    :path-exists? (fn [path]
                    (boolean (bidi/match-route app-routes path)))})
  (accountant/dispatch-current!)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root)
  (ws/start-router!));;(s/check bidi.schema/RoutePair app-routes)
  ;;(s/validate bidi.schema/RoutePair app-routes)
