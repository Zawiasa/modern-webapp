(ns demo.views.four-o-four)

(defn four-o-four []
  [:div
   [:div.uk-position-center.uk-card-default
    [:h1.uk-heading-hero "404 "
     [:a {:href "/" :style {:text-decoration "underline"}}
      "Back to Home"]]]])
