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

    [:div
     {:data-uk-grid true}
     [:div.uk-width-auto
      [:ul.uk-tab-left
       {:data-uk-tab
        "connect: #component-tab-left; animation: uk-animation-fade"}
       (for [language (:languages @input-atom)]
         (-> ^{:key (first language)}
          [:li [:a {:href "#"} (first language)]]))]]
     [:div.uk-width-expand
      [:ul#component-tab-left.uk-switcher
       (for [language (:languages @input-atom)]
         (-> ^{:key (first language)}
          [:li
           "Legend"]))]]]))

(defn blog []
  (let [c (subscribe [:data "shared"])]
    [:div
     [add-blog]]))
     ;(str @c)]))
