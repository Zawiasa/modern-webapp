(defproject webtemp "0.0.1-SNAPSHOT"
  :description "FIXME"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/tools.logging "0.4.0"]
                 [cheshire "5.8.0"]
                 [circleci/clj-yaml "0.5.5"]
                 [compojure "1.6.0"]
                 [environ "1.1.0"]
                 [mount "0.1.11"]
                 [hiccup "1.0.5"]
                 [com.taoensso/sente "1.11.0"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-jetty-adapter "1.6.2"]
                 [duratom "0.3.7"]

                 [spootnik/unilog "0.7.22"]
                 ;;client-side
                 [re-frame "0.9.4"]
                 [lein-figwheel "0.5.14"]
                 [reagent "0.7.0"]
                 [secretary "1.2.3"]
                 [jayq "2.5.4"]
                 [com.google.guava/guava "19.0"]
                 [org.clojure/core.async    "0.4.474"]
                 [org.clojure/clojurescript "1.9.229"]
                 [venantius/accountant "0.1.7"
                  :exclusions [org.clojure/tools.reader]]]
  :ring {:handler webtemp.handlers/app}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :uberjar-name "webtemp.jar"
  :main webtemp.core
  :source-paths ["src"]
  :resource-paths ["resources" "target/cljsbuild"]

  :plugins [[lein-environ "1.0.2"]
            [lein-cljsbuild "1.1.1"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :cljsbuild
  {:builds {:app
              {:source-paths ["src/webtemp-client"]
               :compiler
               {:main "webtemp-client.dev"
                :asset-path "/js/out"
                :output-to "resources/public/js/app.1.20.js"
                :output-dir "target/cljsbuild/public/js/out"
                :source-map true
                :optimizations :none
                :pretty-print  true}}
            :min
            {
              :source-paths ["src/webtemp-client"]
              :compiler
               {
                :output-to "resources/public/js/app.1.20.js"
                :output-dir "target/uberjar"
                :optimizations :simple
                :externs ["externs/jquery.js"]

                :pretty-print  false}}}}


  :figwheel
  {:http-server-root "public"
   :server-port 3449
   :nrepl-port 7002
   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]

   :css-dirs ["resources/public/css"]
   :ring-handler webtemp.handlers/app}

  :profiles {:dev {:repl-options {:init-ns user
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :dependencies [[ring/ring-mock "0.3.0"]
                                  [ring/ring-devel "1.5.0"]
                                  [prone "1.1.4"]
                                  [figwheel-sidecar "0.5.8"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                                  [pjstadig/humane-test-output "0.8.1"]]

                   :plugins [[lein-figwheel "0.5.8"]
                             [lein-ring "0.12.2"]
                             [lein-environ "1.1.0"]
                             [lein-cljsbuild "1.1.1"]]
                   :env {:config-path "dev/resources/config.yml" :dev true}
                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :source-paths ["dev/src" "test/webtemp"]}})
