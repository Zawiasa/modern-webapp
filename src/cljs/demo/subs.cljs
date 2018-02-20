(ns demo.subs

  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :data
  (fn [db [_ the-key]]

      (get
           db
           (keyword the-key))))
