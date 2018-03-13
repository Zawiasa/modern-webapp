(ns demo.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [potpuri.core :refer [map-of]]
            ;;MVC
            [re-frame.core :as re-frame :refer [dispatch-sync dispatch subscribe]]
            [demo.handlers]
            [demo.subs :as subs]
            ;;View-components
            [demo.views.home-page :refer [home-page]]
            [demo.views.about :refer [about]]
            [demo.views.four-o-four :refer [four-o-four]]
            [demo.views.blog :refer [blog]]
            ;;Routing
            [bidi.bidi :as bidi]
            ;;[schema.core :as s] ;For when defining routes get tricky
            ;;[bidi.schema]
            [accountant.core :as accountant]
            [demo.ws :as ws])
  (:import goog.History))

(def app-titles
  {:home-page "Home-page"
   :about "About"
   :blog  "Blog"
   :four-o-four ":("})

(def app-views
  (map-of
   home-page
   about
   blog
   four-o-four))

(def app-routes
  ["/" {"" :home-page
        "blog" :blog
        "about" :about
        "section-a" {"" :section-a
                     ["/item-" :item-id] :a-item}
        "section-b" :section-b
        "missing-route" :missing-route
        true :four-o-four}])

(defn footer []
  [:footer.footer
   [:div.uk-width-1-1.uk-card.uk-card-default.uk-position-bottom
    [:div.uk-float-left [:h3.uk-heading-bullet.uk-padding-small.uk-margin-remove "Modern-webapp"]]
    [:div.uk-float-right
     [:a.uk-padding-small {:data-uk-icon "icon: facebook; ratio: 1.4" :href "https://facebook.com"}]
     [:a.uk-padding-small {:data-uk-icon "icon: linkedin; ratio: 1.4" :href "https://linkedin.com"}]
     [:a.uk-padding-small {:data-uk-icon "icon: twitter; ratio: 1.4"  :href "https://twitter.com"}]]]])

(defn language-menu-item [[the-key item]]
  (let [title (:item item)]
    [:li.uk-grid-medium.uk-flex-middle.uk-margin-small
     {:data-uk-grid true
      :style {:cursor "pointer"}
      :on-click #(dispatch [:assoc-state :active-language the-key])}

     [:div.uk-width-auto
      [:img
       {:alt ""
        :width "40"
        :src (str "/img/icons/" (name the-key) ".svg")}]]
     [:div.uk-width-expand
      [:a.uk-link-reset {:href "#"}

       title]]]))

(defn language-menu []
  (let [languages (subscribe [:data "languages"])
        active-language (subscribe [:data "active-language"])]
        ;get-title (fn [] (str (:title (get @languages @active-language))))]
    (fn []
      [:li.uk-grid-medium.uk-flex-middle.uk-margin-small
       {:data-uk-grid true :style {:height "40px"}}

       [:div.uk-width-auto
        [:a.uk-link-reset.uk-padding-small.uk-text-middle {:href "#"}] ;(get-title)]
        [:img.uk-margin-small-top
         {:alt ""
          :width "40"
          :src (str "/img/icons/" (name @active-language) ".svg")}]]

       [:div.uk-navbar-dropdown.uk-padding-small
        [:ul.uk-nav.uk-navbar-dropdown-nav
         (for [item @languages]
           ^{:key (first item)} [language-menu-item item])]]])))

(defn navbar []
  (let [title (get app-titles (:handler (session/get :route)))]
    ;    language-key (subscribe [:data "active-language"])]
      ;  dictionary (subscribe [:data "dictionary"])
    ;    get-content (fn [the-keys] (get-in (conj @dictionary @language-key) the-keys))]
    [:nav.uk-navbar-container
     {:data-uk-navbar true}
     [:div.uk-navbar-left
      [:ul.uk-navbar-nav
       [:li
        [:a.uk-margin-small-top {:href "#" :style {:height "20px"}}
         [:img
          {:height "40"
           :width "40"
           :src "/img/icons/triangle.png"}]]
        [:div.uk-navbar-dropdown.uk-width-1-2 {:data-uk-dropdown true
                                               :style {:top "50px"}} ;TODO fixme
         [:div.uk-navbar-dropdown-grid.uk-child-width-1-2
          {:data-uk-grid true}
          [:div
           [:ul.uk-nav.uk-navbar-dropdown-nav
            [:li.uk-active
             [:a.uk-dropdown-close {:href (bidi/path-for app-routes :home-page)} "Home-page"]]
            [:li.uk-active
             [:a.uk-dropdown-close {:href (bidi/path-for app-routes :blog)} "Blog"]]]]
            ;[:li [:a {:href "#"} "Featured"]]

            ;[:li [:a {:href "#"} "Item"]]
            ;[:li [:a {:href "#"} "Item"]]
            ;[:li.uk-nav-divider]]]
            ;[:li [:a {:href "#"} "Item"]]]]
          [:div
           [:ul.uk-nav.uk-navbar-dropdown-nav
            [:li.uk-active
             [:a.uk-dropdown-close {:href (bidi/path-for app-routes :about)} "About"]]]]]]]
       [:li
        [:h3.uk-heading-bullet.uk-padding-remove.uk-margin-remove title]]]]
            ;[:li.uk-active [:a {:href (bidi/path-for app-routes :four-o-four)} "404"]]]]]]]]]
            ;[:li [:a {:href "#"} "Item"]]
            ;[:li.uk-nav-header "Header"]]]]]]]]
            ;[:li [:a {:href "#"} "Item"]]
            ;[:li [:a {:href "#"} "Item"]]
            ;[:li er]
            ;[:li [:a {:href "#"} "Item"]]]]]]]]]
     [:div.uk-navbar-right
      [:ul.uk-navbar-nav.uk-padding-small.uk-padding-remove-vertical
       [language-menu]]]]))

(defn frame
  "Main Reagent Component"
  []
  [:div.app-layout {:style {:position "relative"}}
   [navbar]
   [:div  [((get (session/get :route) :handler) app-views)]]
   [footer]])

(defn mount-root []
  (reagent/render [frame] (.getElementById js/document "app")))

(defn init! []
  (let [nav-handler (fn [path] (session/put! :route (bidi/match-route app-routes path)))
        path-exists? (fn [path] (boolean (bidi/match-route app-routes path)))]
    (accountant/configure-navigation! (map-of nav-handler path-exists?))
    (accountant/dispatch-current!)
    (dispatch-sync [:initialize-db])
    (mount-root)
    (ws/start-router!)))

  ;;(s/check bidi.schema/RoutePair app-routes)
  ;;(s/validate bidi.schema/RoutePair app-routes)
