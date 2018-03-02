(ns demo.views.blog
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]))

(defn add-blog []
  (let [input-atom (atom
                    {:date "2017-12-24"
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

(defn blog []
  (let [c (subscribe [:data "shared"])]
    [:div
     [add-blog]
     [:button.uk-button.uk-button-primary {:data-uk-toggle "target: #my-id"} "Add blog entry"]]))
     ;(str @c)]))
