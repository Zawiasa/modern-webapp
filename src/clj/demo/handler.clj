(ns demo.handler
  (:require [demo.ws :as ws]
            ;[demo.db :as db]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.defaults :refer [api-defaults site-defaults wrap-defaults]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js include-css]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.reload :refer [wrap-reload]]
            [bidi.ring :refer [make-handler ->ResourcesMaybe]]
            [ring.util.response :as res]
            [environ.core :refer [env]]))

(def home-page
  (html
   [:html
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     (include-css (if (env :dev) "css/site.css" "css/site.min.css"))
     (include-css "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css")]
    [:body.full-page
     [:div#app
      [:h3 "Loading..."]]]
    (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js")
    (include-js "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js")
    (include-js "js/app.js")]))

(defn index-handler
  [request]
  (res/response "Homepage"))

(def routes
  [""
   [["/" (fn [req] {:status 200 :body home-page :headers {"Content-Type" "text/html"}})]
    ["/chsk" {:get (fn [req] (ws/ring-ajax-get-or-ws-handshake req))
              :post (fn [req] (ws/ring-ajax-post req))}]]])

(def app
  (let [handler (make-handler routes)]
    (if (env :dev)
      (-> handler
          (wrap-defaults site-defaults)
          wrap-exceptions
          wrap-keyword-params
          wrap-keyword-params
          wrap-reload)

      handler)))
