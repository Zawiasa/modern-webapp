(ns webtemp.handlers
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [duratom.core :refer [duratom]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def posts 
  (duratom :local-file
           :file-path "db/posts"
           :init [{:id 0 :title "First Post"}]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/posts" [] (str @posts))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))

(defn get-handler
  []
  app)
