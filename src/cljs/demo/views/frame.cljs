(ns demo.views.frame
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [reagent.session :as session]
            [demo.views.home-page :refer [home-page]]
            [demo.views.about :refer [about]]
            [demo.views.four-o-four :refer [four-o-four]]
            [demo.views.blog :refer [blog]]))

            ;[taoensso.encore :as encore :refer (debugf)]))


(defn disconnected []
  (fn []
    [:div "You are not connected"]))

(defn footer []
  [:footer
   [:div.uk-width-1-1.uk-card.uk-card-default.uk-position-bottom
    [:h2.uk-heading-bullet.uk-padding-small.uk-padding-remove-vertical.uk-margin-small-top.uk-margin-small
     "Footer"]
    [:div.uk-position-right
     [:a.uk-padding-small {:data-uk-icon "icon: facebook; ratio: 1.7" :href "https://facebook.com"}]
     [:a.uk-padding-small {:data-uk-icon "icon: linkedin; ratio: 1.7" :href "https://linkedin.com"}]
     [:a.uk-padding-small {:data-uk-icon "icon: twitter; ratio: 1.7"  :href "https://twitter.com"}]]]])

(defn language-menu-item [[the-key item]]
  (let [title (:item item)]
    [:li.uk-grid-medium.uk-flex-middle.uk-margin-small
     {:data-uk-grid true}

     [:div.uk-width-auto
      [:img.uk-comment-avatar
       {:alt ""
        :width "40"
        :src (str "/img/icons/" (name the-key) ".svg")}]]
     [:div.uk-width-expand
      [:a.uk-link-reset {:href "#"
                         :on-click #(dispatch [:assoc-state :active-language the-key])}
       title]]]))

(defn language-menu []
  (let [languages (subscribe [:data "languages"])
        active-language (subscribe [:data "active-language"])
        get-title (fn [] (str (:title (get @languages @active-language))))]
    (fn []
      [:li.uk-grid-medium.uk-flex-middle.uk-margin-small
       {:data-uk-grid true :style {:height "40px"}}

       [:div.uk-width-auto
        [:a.uk-link-reset.uk-padding-small.uk-text-middle {:href "#"} (get-title)]
        [:img.uk-margin-small-top
         {:alt ""
          :width "40"
          :src (str "/img/icons/" (name @active-language) ".svg")}]]

       [:div.uk-navbar-dropdown.uk-padding-small
        [:ul.uk-nav.uk-navbar-dropdown-nav
         (for [item @languages]
           ^{:key (first item)} [language-menu-item item])]]])))

(defn navbar []
  [:nav.uk-navbar-container
   {:data-uk-navbar true}
   [:div.uk-navbar-left
    [:ul.uk-navbar-nav
     [:li
      [:a {:href "#" :style {:height "20px"}}
       [:h3.uk-heading-bullet.uk-padding-remove.uk-margin-remove

        "Modern-WebApp"]]
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
          [:li [:a {:href "#"} "Item"]]]]]]]]]
   [:div.uk-navbar-right
    [:ul.uk-navbar-nav
     [language-menu]]]])

(defn frame []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [navbar]
       (case page
         :home-page  [home-page]
         :about [about]
         :blog  [blog]
         :four-o-four [four-o-four])
       [footer]])))
