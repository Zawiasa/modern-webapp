(ns demo.views
  (:require [re-frame.core :as re-frame]))
            ;[taoensso.encore :as encore :refer (debugf)]))


(defn disconnected []
  (fn []
    [:div "You are not connected"]))

(defn navbar []
  [:nav.uk-navbar-container
   {:data-uk-navbar true}
   [:div.uk-navbar-left
    [:ul.uk-navbar-nav
     [:li
      [:a {:href "#"} "Modern-webApp"]
      [:div.uk-navbar-dropdown.uk-navbar-dropdown-width-2
       [:div.uk-navbar-dropdown-grid.uk-child-width-1-2
        {:data-uk-grid true}
        [:div
         [:ul.uk-nav.uk-navbar-dropdown-nav
          [:li.uk-active [:a {:href "#"} "Blogs"]]
          [:li [:a {:href "#"} "Featured"]]
          [:li.uk-nav-header "Header"]
          [:li [:a {:href "#"} "Item"]]
          [:li [:a {:href "#"} "Item"]]
          [:li.uk-nav-divider]
          [:li [:a {:href "#"} "Item"]]]]
        [:div
         [:ul.uk-nav.uk-navbar-dropdown-nav
          [:li.uk-active [:a {:href "#"} "Active"]]
          [:li [:a {:href "#"} "Item"]]
          [:li.uk-nav-header "Header"]
          [:li [:a {:href "#"} "Item"]]
          [:li [:a {:href "#"} "Item"]]
          [:li.uk-nav-divider]
          [:li [:a {:href "#"} "Item"]]]]]]]]]])

(defn counter []
  (let [c (re-frame/subscribe [:data "shared"])]
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

(defn modern-app []
  [:div
   [navbar]
   [demo-component]])

(defn main-panel []
  (let [connected? (re-frame/subscribe [:data "ws/connected"])]
    (fn []
      (if @connected?
        [modern-app]
        [:div [disconnected]]))))
