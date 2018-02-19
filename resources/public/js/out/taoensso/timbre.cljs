(ns taoensso.timbre
  "Simple, flexible logging for Clojure/Script. No XML."
  {:author "Peter Taoussanis"}
       
           
                               
                                    
                                                      
                                                       

        
  (:require
   [clojure.string  :as str]
   [taoensso.encore :as enc :refer () :refer-macros (have have?)]
   [taoensso.timbre.appenders.core :as core-appenders])

        
  (:require-macros [taoensso.timbre :as timbre-macros :refer ()]))

;;;; Encore version check

     
                              
                                                                            
                                
          
              
               
                                                                                                                                                  
                             
                                             

;;;; Config

     
                           
                                
                                    
                                        
                                                      
                                                 

(declare stacktrace)
(defn default-output-fn
  "Default (fn [data]) -> string output fn.
  You can modify default options with `(partial default-output-fn <opts-map>)`."
  ([data] (default-output-fn nil data))
  ([{:keys [no-stacktrace? stacktrace-fonts] :as opts} data]
   (let [{:keys [level ?err_ vargs_ msg_ ?ns-str hostname_ timestamp_]} data]
     (str
                                         
                                         
       (str/upper-case (name level))  " "
       "[" (or ?ns-str "?ns") "] - "
       (force msg_)
       (when-not no-stacktrace?
         (when-let [err (force ?err_)]
           (str "\n" (stacktrace err opts))))))))

;;; Alias core appenders here for user convenience
(declare default-err default-out)
                                                              
                                                           
       (def println-appender  core-appenders/println-appender)
       (def console-?appender core-appenders/console-?appender)

(def example-config
  "Example (+default) Timbre v4 config map.

  APPENDERS
    An appender is a map with keys:
      :min-level       ; Level keyword, or nil (=> no minimum level)
      :enabled?        ;
      :async?          ; Dispatch using agent? Useful for slow appenders
      :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
      :output-fn       ; Optional override for inherited (fn [data]) -> string
      :fn              ; (fn [data]) -> side effects, with keys described below

    An appender's fn takes a single data map with keys:
      :config          ; Entire config map (this map, etc.)
      :appender-id     ; Id of appender currently dispatching
      :appender        ; Entire map of appender currently dispatching

      :instant         ; Platform date (java.util.Date or js/Date)
      :level           ; Keyword
      :error-level?    ; Is level e/o #{:error :fatal}?
      :?ns-str         ; String, or nil
      :?file           ; String, or nil  ; Waiting on CLJ-865
      :?line           ; Integer, or nil ; Waiting on CLJ-865

      :?err_           ; Delay - first-arg platform error, or nil
      :vargs_          ; Delay - raw args vector
      :hostname_       ; Delay - string (clj only)
      :msg_            ; Delay - args string
      :timestamp_      ; Delay - string
      :output-fn       ; (fn [data]) -> formatted output string
                       ; (see `default-output-fn` for details)

      :context         ; *context* value at log time (see `with-context`)
      :profile-stats   ; From `profile` macro

  MIDDLEWARE
    Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
    transform the data map dispatched to appender fns. If any middleware returns
    nil, NO dispatching will occur (i.e. the event will be filtered).

  The `example-config` source code contains further settings and details.
  See also `set-config!`, `merge-config!`, `set-level!`."

  {:level :debug  ; e/o #{:trace :debug :info :warn :error :fatal :report}

   ;; Control log filtering by namespaces/patterns. Useful for turning off
   ;; logging in noisy libraries, etc.:
   :ns-whitelist  [] #_["my-app.foo-ns"]
   :ns-blacklist  [] #_["taoensso.*"]

   :middleware [] ; (fns [data]) -> ?data, applied left->right

                        
                                ; {:pattern _ :locale _ :timezone _}

   :output-fn default-output-fn ; (fn [data]) -> string

   :appenders
        
                                               
                                                         
     

         
   {;; :println (println-appender {})
    :console (console-?appender {})}})

(comment
  (set-config! example-config)
  (infof "Hello %s" "world :-)"))

(enc/defonce* ^:dynamic *config* "See `example-config` for info." example-config)
                                                                                  
                                            
                                                                   

(defn swap-config! [f]
         (set!             *config* (f *config*))
                                       )

(defn   set-config! [m] (swap-config! (fn [_old] m)))
(defn merge-config! [m] (swap-config! (fn [old] (enc/nested-merge old m))))

(defn     set-level! [level] (swap-config! (fn [m] (merge m {:level level}))))
                                   
                                                                

(comment (set-level! :info) *config*)

;;;; Levels

(def ordered-levels [:trace :debug :info :warn :error :fatal :report])
(def ^:private scored-levels (zipmap ordered-levels (next (range))))
(def ^:private valid-levels  (set ordered-levels))
(def ^:private valid-level
  (fn [level]
    (or (valid-levels level)
        (throw (ex-info (str "Invalid logging level: " level) {:level level})))))

(comment (valid-level :info))

(defn level>= [x y] (>= (long (scored-levels (valid-level x)))
                        (long (scored-levels (valid-level y)))))

(comment (qb 10000 (level>= :info :debug)))

                                                                             
                                       
                                    
                                               
                                                       

;;;; ns filter

(def ^:private compile-ns-filters
  "(fn [whitelist blacklist]) -> (fn [ns]) -> ?unfiltered-ns"
  (let [->re-pattern
        (fn [x]
          (enc/cond!
            (enc/re-pattern? x) x
            (string? x)
            (let [s (-> (str "^" x "$")
                        (str/replace "." "\\.")
                        (str/replace "*" "(.*)"))]
              (re-pattern s))))]

    (enc/memoize_
      (fn [whitelist blacklist]
        (let [whitelist* (mapv ->re-pattern whitelist)
              blacklist* (mapv ->re-pattern blacklist)

              white-filter
              (cond
                ;; (nil? whitelist)  (fn [ns] false) ; Might be surprising
                (empty?  whitelist*) (fn [ns] true)
                :else (fn [ns] (some #(re-find % ns) whitelist*)))

              black-filter
              (cond
                (empty? blacklist*) (fn [ns] true)
                :else (fn [ns] (not (some #(re-find % ns) blacklist*))))]

          (fn [ns] (when (and (white-filter ns) (black-filter ns)) ns)))))))

(def ^:private ns-filter
  "(fn [whitelist blacklist ns]) -> ?unfiltered-ns"
  (enc/memoize_
    (fn [whitelist blacklist ns]
      ((compile-ns-filters whitelist blacklist) ns))))

(comment (qb 10000 (ns-filter ["foo.*"] ["foo.baz"] "foo.bar")))

     
                                     
                                                                           
                                                                            

                            
                                                                                 
                   
                                                                               
                   
                                                                               

                                             

;;;; Utils

(defn- ->delay [x] (if (delay? x) x (delay x)))
(defn- vsplit-err1 [[v1 :as v]] (if-not (enc/error? v1) [nil v] (enc/vsplit-first v)))
(comment
  (vsplit-err1 [:a :b :c])
  (vsplit-err1 [(Exception.) :a :b :c]))

(defn default-data-hash-fn
  "Used for rate limiters, some appenders (e.g. Carmine), etc.
  Goal: (hash data-1) = (hash data-2) iff data-1 \"the same\" as data-2 for
  rate-limiting purposes, etc."
  [data]
  (let [{:keys [?ns-str ?line vargs_]} data
        vargs (force vargs_)]
    (str
      (or (some #(and (map? %) (:timbre/hash %)) vargs) ; Explicit hash given
          #_[?ns-str ?line] ; TODO Waiting on http://goo.gl/cVVAYA
          [?ns-str vargs]))))

(comment (default-data-hash-fn {}))

     
                                 
                                                                      

(comment (get-agent :my-appender))

(enc/defonce* ^:private get-rate-limiter
  (enc/memoize_ (fn [appender-id specs] (enc/rate-limiter* specs))))

(comment (def rf (get-rate-limiter :my-appender [[10 5000]])))

;;;; Internal logging core

(defn log?
  "Would Timbre currently log at the given logging level?
    * Compile-time `?ns-str` arg required to support ns filtering.
    * `config` arg required to support non-global config."
  [level & [?ns-str config]]
  (let [config (or config *config*)
        active-level (or (:level config) :report)]
    (and (level>= level active-level)
         (ns-filter (:ns-whitelist config) (:ns-blacklist config) (or ?ns-str ""))
         true)))

(comment
  (set-level! :debug)
  (log? :trace)
  (with-level :trace (log? :trace))
  (qb 10000 (log? :trace))       ; ~2.5ms
  (qb 10000 (log? :trace "foo")) ; ~6ms
  (qb 10000 (tracef "foo"))      ; ~7.5ms
  (qb 10000 (when false "foo"))  ; ~0.5ms

  ;;; Full benchmarks
                                                
                                                                            

  (with-sole-appender {:enabled? true :fn (fn [data] nil)}
    (qb 10000 (info "foo"))) ; ~88ms ; Time to delays ready

  (with-sole-appender {:enabled? true :fn (fn [data] ((:output-fn data) data))}
    (qb 10000 (info "foo"))) ; ~218ms ; Time to output ready
  )

(def ^:dynamic *context*
  "General-purpose dynamic logging context. Context will be included in appender
  data map at logging time." nil)
                                                                               

(declare get-hostname)

(defn- inherit-over [k appender config default]
  (or
    (let [a (get appender k)] (when-not (enc/kw-identical? a :inherit) a))
    (get config k)
    default))

(defn- inherit-into [k appender config default]
  (merge default
    (get config k)
    (let [a (get appender k)] (when-not (enc/kw-identical? a :inherit) a))))

(comment
  (inherit-over :foo {:foo :inherit} {:foo :bar} nil)
  (inherit-into :foo {:foo {:a :A :b :B :c :C}} {:foo {:a 1 :b 2 :c 3 :d 4}} nil))

(defn log1-fn
  "Core fn-level logger. Implementation detail!"
  [config level ?ns-str ?file ?line msg-type vargs_ ?base-data]
  (when (log? level ?ns-str config)
    (let [instant (enc/now-dt)
          vargs*_ (delay (vsplit-err1 (force vargs_)))
          ?err_   (delay (get @vargs*_ 0))
          vargs_  (delay (get @vargs*_ 1))
          context *context*
          data    (merge ?base-data
                    ;; No, better nest than merge (appenders may want to pass
                    ;; along arb context w/o knowing context keys, etc.):
                    (when (map? context) context) ; DEPRECATED, for back compat
                    {:config  config ; Entire config!
                     :context context
                     :instant instant
                     :level   level
                     :?ns-str ?ns-str
                     :?file   ?file
                     :?line   ?line
                     :?err_   ?err_
                     :vargs_  vargs_
                                                                  
                     :error-level? (#{:error :fatal} level)})
          msg-fn
          (fn [vargs_] ; For use *after* middleware, etc.
            (when-not (nil? msg-type)
              (when-let [vargs (have [:or nil? vector?] (force vargs_))]
                (case msg-type
                  :p (enc/spaced-str vargs)
                  :f (let [[fmt args] (enc/vsplit-first vargs)]
                       (enc/format* fmt args))))))
          ?data
          (reduce ; Apply middleware: data->?data
            (fn [acc mf]
              (let [result (mf acc)]
                (if (nil? result)
                  (reduced nil)
                  result)))
            data
            (:middleware config))]

      (when-let [data ?data] ; Not filtered by middleware
        (reduce-kv
          (fn [_ id appender]
            (when (and (:enabled? appender)
                       (level>= level (or (:min-level appender) :trace)))

              (let [rate-limit-specs (:rate-limit appender)
                    data-hash-fn (inherit-over :data-hash-fn appender config
                                   default-data-hash-fn)
                    rate-limit-okay?
                    (or (empty? rate-limit-specs)
                        (let [rl-fn     (get-rate-limiter id rate-limit-specs)
                              data-hash (data-hash-fn data)]
                          (not (rl-fn data-hash))))]

                (when rate-limit-okay?
                  (let [{:keys [async?] apfn :fn} appender
                        msg_      (delay (or (msg-fn (:vargs_ data)) #_""))
                        output-fn (inherit-over :output-fn appender config
                                    default-output-fn)

                                        
                             
                              
                                                                            
                                                                
                                                                        
                                                                                 
                                                                    
                                                                           
                                                

                        data ; Final data prep before going to appender
                        (merge data
                          {:appender-id  id
                           :appender     appender
                           ;; :appender-opts (:opts appender) ; For convenience
                           :msg_         msg_
                           :msg-fn       msg-fn
                           :output-fn    output-fn
                           :data-hash-fn data-hash-fn
                                                             })]

                    (if-not async?
                      (apfn data) ; Allow errors to throw
                             (apfn data)
                                                                           ))))))
          nil
          (enc/clj1098 (:appenders config))))))
  nil)

(comment
  (log1-fn *config* :info nil nil nil :p (delay [(do (println "hi") :x) :y]) nil))

                    
                                                   
                                             

                          
                                     
                                                                 
                                               

                                             

                             
                                                                      
                                                                          
                                        
                                                                
                                            

;;;; API-level stuff

;;; Log using print-style args
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             

;;; Log using format-style args
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              

(comment
  (infof "hello %s" "world")
  (infof (Exception.) "hello %s" "world")
  (infof (Exception.)))

                             
                                                      
                                       
               

                                         
                                                      
                                                  
               

                                                               

     
                                     
                                                    
               
               
                   
                                        
                                                                
                                   

                                              
                                            
                                                                                  

(comment
  (log-errors             (/ 0))
  (log-and-rethrow-errors (/ 0))
  (logged-future          (/ 0))
  (handle-uncaught-jvm-exceptions!))

             
                                                                             
                                                                       
                                                
                                                       
                                                               
                           
                           
                          
                                                                     
                                        
            

                                                             
                 
                         
                                                         
                                         
                                                
                                                        
                                                                    

(comment
  (macroexpand '(log-env))
  (defn foo [x y] (log-env) (+ x y))
  (foo 5 10))

     
                  
                 
                                       
                                                                        
                                                                         
                                           
                                                    
                                                      
    
                                       
                                                                        
                                                                         
                                           
                                                    
                                                      

;;;; Misc public utils

     
                            
                                        
                                                                   
                                                                   
                                                                   
                                    
                                                                 

                                                                
                                                                
                                    
                                                           

     
                 
                                                                      
                                
          
                                                                     
                                                                        
                                                                              
                                         

(comment (get-hostname))

(defn stacktrace [err & [{:keys [stacktrace-fonts] :as opts}]]
         (str err) ; TODO Alternatives?
       
                                                         
                                                                     
                                                
                                    
                                                                        
                                       )

(comment (stacktrace (Exception. "Boo") {:stacktrace-fonts nil}))

                                                     
                      
                                                                 
                                               

;;;; Deprecated

(defn str-println [& xs] (enc/spaced-str xs))
                                                                            
                                                                            
(defn logging-enabled? [level compile-time-ns] (log? level (str compile-time-ns)))

;;;;;;;;;;;; This file autogenerated from src/taoensso/timbre.cljx
