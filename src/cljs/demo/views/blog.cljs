(ns demo.views.blog
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [reagent.core :as reagent :refer [atom]]

            [cljs.reader :refer [read-string]]))

(defn quill-component [class quill-atom]
  (let []
    (reagent/create-class
     {:component-did-mount #(.initQuill js/window (str "#" class))
      :reagent-render
      (fn [class]
        [:div {:id class :style {:height "500px"}}
         [:div
          {:dangerouslySetInnerHTML
           {:__html "<div>Hello  <div/>"}}]])})))

(defn add-blog []
  (let [quill (atom nil)
        chosen-language (atom :hu)
        input-atom (atom
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
    (reagent/create-class
     {;:component-did-mount #(js/Quill. "#editor" (clj->js {"theme" "snow"}))
      ;:component-did-update #(js/Quill. "#editor" (clj->js {"theme" "snow"}))

      :reagent-render
      (fn []
        [:div#my-id
         {:data-uk-modal "bg-close:	false" :style {:opacity 0.95}}
         [:div.uk-modal-dialog
          [:button.uk-modal-close-default
           {:data-uk-close true :type "button"}]
          [:div.uk-modal-header [:h2.uk-modal-title "Add new blog entry"]]
          [:div.uk-modal-body
           [:div
            {:data-uk-grid true}
            [:button {:on-click #(.notification js/UIkit (str (.getQuill js/window)))}
             "Show editor content"]
            [:div.uk-width-1-1
             [:ul
              {:data-uk-tab true}
              (for [language (:languages @input-atom)]
                (-> ^{:key (first language)}
                 [:li.choose-language.uk-width-1-4 {:on-click #(reset! chosen-language (first language))}
                  [:img.uk-align-center.uk-margin-remove-bottom
                   {:alt ""
                    :width "40"
                    :src (str "/img/icons/" (name (first language)) ".svg")}]]))]]
            [:div.uk-width-1-1
             [:form.uk-form
              [:div.uk-margin [:input.uk-input {:placeholder (str (:title (get (:languages @input-atom) @chosen-language)))}]]
              [:div.uk-margin
               ;(str @chosen-language)
               [quill-component "quill" quill]]]]]]

          [:div.uk-modal-footer.uk-text-right
           [:button.uk-button.uk-button-default.uk-modal-close
            {:type "button"}
            "Cancel"]
           [:button.uk-button.uk-button-primary
            {:type "button"}
            "Save"]]]])})))

(defn one-blog [post]
  (let [language-key (subscribe [:data "active-language"])
        the-post (fn [a b] (get (:languages a) @b))]
    (fn [post]
      [:div.uk-width-1-1
       ;(str @language-key)

       [:article.uk-article.uk-card.uk-card-default.uk-padding-small.uk-margin-small
        {:style {:border-radius "10px"}}

        [:div
         [:h1.uk-article-title
          [:a.uk-link-reset {:href ""} (:title (the-post post language-key))]]
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

         ;(str (the-post post language-key))

        ;(read-string data-hiccup)
        [:p
         (:content (the-post post language-key))]
        [:div.uk-grid-small.uk-child-width-auto.uk-padding-small
         {:data-uk-grid true}
         [:div [:a.uk-button.uk-button-text {:href "#"} "Read more"]]
         [:div [:a.uk-button.uk-button-text {:href "#"} "5 Comments"]]]]])))

(defn blogs []
  (let [the-blogs (subscribe [:data "blogs"])
        language-key (subscribe [:data "active-language"])]
    (reagent/create-class
     {:component-did-update #(dispatch [:blogs/get 0])
      :component-did-mount #(dispatch [:blogs/get 0])
      :reagent-render
      (fn []
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
           @the-blogs)]])})))

(defn blog []
  [:div
   [add-blog]

   [blogs]])
