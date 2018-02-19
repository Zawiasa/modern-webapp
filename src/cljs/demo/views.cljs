(ns demo.views
  (:require [re-frame.core :as re-frame]
            [taoensso.encore :as encore :refer (debugf)]))



(defn disconnected []
  (fn []
    [:div "You are not connected"]))


(defn counter []
  (let [c (re-frame/subscribe [:count])]
    (fn []
      [:div
       [:h3.uk-heading-bullet (str "Count: " @c)]
       [:button.uk-button-default.uk-button {:on-click #(re-frame/dispatch [:increment-count 1])}
                              [:span {:data-uk-icon "plus"}]]
       [:button.uk-button-default.uk-button {:on-click #(re-frame/dispatch [:increment-count -1])}
                              [:span {:data-uk-icon "minus"}]]])))


(defn main-panel []
  (let [connected? (re-frame/subscribe [:ws/connected])]
    (fn []
      (if @connected?
        [:div.uk-container
          [:div.uk-grid {:data-uk-grid true}
             [:div.uk-width-1-1.uk-padding
                [:div.uk-card-secondary.uk-card.uk-padding
                   [:h1.uk-heading-bullet "Welcome to modern-webapp."]
                   [:h3.uk-float-right "You are connected." [:span {:data-uk-icon "icon: check; ratio: 1.7"}]]
                   [counter]]]]]
        [:div [disconnected]]))))
