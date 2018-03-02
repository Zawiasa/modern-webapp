(ns demo.views.blog
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]))

(defn add-blog []
  (let [input-atom (atom
                    {:author "Martin Paul Cristian"
                     :date "2017-12-24"
                     :languages
                     {:hu {:title "hu"
                           :content "Magyar"}
                      :en
                      {:title "en"
                       :content "English"}
                      :fr
                      {:title "fr"
                       :content "French"}
                      :de
                      {:title "de"
                       :content "German"}}})]
    [:div#my-id
     {:data-uk-modal "bg-close:	false" :style {:opacity 0.95}}
     [:div.uk-modal-dialog
      [:button.uk-modal-close-default
       {:data-uk-close true :type "button"}]
      [:div.uk-modal-header [:h2.uk-modal-title "Add new blog entry"]]
      [:div.uk-modal-body
       [:div
        {:data-uk-grid true}
        [:div.uk-width-auto
         [:ul.uk-tab-left
          {:data-uk-tab
           "connect: #component-tab-left; animation: uk-animation-fade"}
          (for [language (:languages @input-atom)]
            (-> ^{:key (first language)}
             [:li.choose-language
              [:img.uk-comment-avatar
               {:alt ""
                :width "40"
                :src (str "/img/icons/" (name (first language)) ".svg")}]]))]]
        [:div.uk-width-expand
         [:ul#component-tab-left.uk-switcher
          (for [language (:languages @input-atom)]
            (-> ^{:key (first language)}
             [:li
              [:form.uk-form
               [:div.uk-margin [:input.uk-input {:placeholder (str (first language) " title")}]]
               [:div.uk-margin [:textarea.uk-textarea {:placeholder (str (first language) " content")}]]]]))]]]]

      [:div.uk-modal-footer.uk-text-right
       [:button.uk-button.uk-button-default.uk-modal-close
        {:type "button"}
        "Cancel"]
       [:button.uk-button.uk-button-primary
        {:type "button"}
        "Save"]]]]))

(defn one-blog [post]
  (let [language-key (subscribe [:data "active-language"])
        the-post (fn [] (get (:languages post) @language-key))]
    (fn [post]
      [:div.uk-width-1-1
       ;(str post)
       [:article.uk-article.uk-card.uk-card-default.uk-padding-small.uk-margin-small
        {:style {:border-radius "10px"}}

        [:div
         [:h1.uk-article-title
          [:a.uk-link-reset {:href ""} (:title (the-post))]]
         [:div.uk-position-top-right
          [:ul.uk-iconnav
           [:li.uk-padding-small [:a {:data-uk-icon "icon: twitter; ratio: 1.4", :href "#"}]]
           [:li.uk-padding-small [:a {:data-uk-icon "icon: instagram; ratio: 1.4", :href "#"}]]
           [:li.uk-padding-small [:a {:data-uk-icon "icon: facebook; ratio: 1.4", :href "#"}]]]]]
                       ;[:li [:a {:data-uk-icon "icon: trash", :href "#"}]]]]]

        [:p.uk-article-meta
         "Written by "
         [:a {:href "#"} (:author post)]
         " on 12 April 2012. Posted in "
         [:a {:href "#"} "Blog"]]
        [:p.uk-text-lead
         (str (:content (the-post)))]
        [:p]
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        [:div.uk-grid-small.uk-child-width-auto.uk-padding-small
         {:data-uk-grid true}
         [:div [:a.uk-button.uk-button-text {:href "#"} "Read more"]]
         [:div [:a.uk-button.uk-button-text {:href "#"} "5 Comments"]]]]])))

(defn blogs []
  (let [c (subscribe [:data "shared"])
        language-key (subscribe [:data "active-language"])]
    [:div.uk-container
     [:div.uk-grid {:data-uk-grid true}
      [:div.uk-width-1-1
       ;(str @c)
       [:button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-remove
        {:data-uk-toggle "target: #my-id"}
        "Add blog entry"]]

      (map-indexed
       (fn [index post]
         (-> ^{:key index}
          [one-blog post]))
       (:blogs @c))]]))

(defn blog []
  [:div
   [add-blog]

   [blogs]])
