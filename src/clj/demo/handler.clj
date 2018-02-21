(ns demo.handler
  (:require [demo.ws :as ws]
            ;[demo.db :as db]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js include-css]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.reload :refer [wrap-reload]]
            [bidi.ring :refer (make-handler)]
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
  (res/response home-page))

(defn article-handler
  [{:keys [route-params]}]
  (res/response (str "You are viewing article: " (:id route-params))))
  ;(GET  "/chsk" req (ws/ring-ajax-get-or-ws-handshake req)
  ;           (POST "/chsk" req (ws/ring-ajax-post req))))
(def routes
  ["/"
   {"" (fn [req] {:status 200 :body home-page})
    "hmm" (fn [req] {:status 200 :body "hmm"})
    "chsk" {:get (fn [req] (res/response (ws/ring-ajax-get-or-ws-handshake req)))
            :post (fn [req] (res/response (ws/ring-ajax-post req)))}}])
    ;"chsk" ws/ring-ajax-get-or-ws-handshake}])

(def app
  (let [handler (make-handler routes)]
    (if (env :dev)
      (-> handler
          wrap-exceptions
          wrap-params
          wrap-keyword-params
          wrap-reload)
      (->
       wrap-params
       wrap-keyword-params
       handler))))
