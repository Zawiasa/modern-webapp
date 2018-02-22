(ns demo.views.home-page
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]))
            ;[reagent.session :as session]))

(defn counter []
  (let [c (subscribe [:data "shared"])]
    (fn []
      [:div
       [:h3.uk-heading-bullet (str "Count: " (:count @c))]
       [:button.uk-button-default.uk-button {:on-click #(re-frame/dispatch [:increment-count 1])}
        [:span {:data-uk-icon "plus"}]]
       [:button.uk-button-default.uk-button {:on-click #(re-frame/dispatch [:increment-count -1])}
        [:span {:data-uk-icon "minus"}]]])))

(defn demo-component []
  [:div.uk-container
   [:div.uk-grid {:data-uk-grid true}
    [:div.uk-width-1-1.uk-padding
     [:div.uk-card-secondary.uk-card.uk-padding
      [:h1.uk-heading-bullet "Welcome to modern-webapp."]
      [:h3.uk-float-right "You are connected." [:span {:data-uk-icon "icon: check; ratio: 1.7"}]]
      [counter]]]]])

(defn home-page []
  [:div [demo-component]])
