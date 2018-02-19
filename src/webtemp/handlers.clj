(ns webtemp.handlers
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [duratom.core :refer [duratom]]
            [ring.middleware.transit :refer [wrap-transit]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.transit :refer [wrap-transit]]
            [ring-transit-middleware "0.1.3"]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.params :refer [wrap-params]]
            [hiccup.page :refer [include-js include-css html5]]
            [hiccup.element :refer [javascript-tag]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def posts
  (duratom :local-file
           :file-path "db/posts"
           :init [{:id 0 :title "First Post"}]))


(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:title "Modern Webapp"]
   [:link {:rel "icon" :href "/favicon.png"}]
   (include-css "/css/style.css")
   (include-css "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css")
   (include-css "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css")])


(defn client-html []
  (html5
    (head)
    [:body {:class "body-container"}
     [:div#app]

     (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js")
     (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js")
     (include-js "/js/app.1.20.js")]))

(defroutes app-routes
  (GET "/" [] "hmm")
  (GET "/posts" [] (str @posts))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-defaults
          (assoc (assoc-in site-defaults [:security :anti-forgery] false) :proxy true))
      (wrap-reload)
      (wrap-transit)
      (wrap-params)
      (wrap-multipart-params)

      (wrap-session)
      (wrap-gzip)
      (wrap-defaults site-defaults)))

(defn get-handler
  []
  app)
