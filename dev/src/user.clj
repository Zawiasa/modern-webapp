(ns user
  (:require [clojure.tools.namespace.repl :as tn]
            [mount.core :as m]))

(defn stop []
  (m/stop))

(defn reset
  []
  (stop)
  (tn/refresh :after 'webtemp.core/start))
