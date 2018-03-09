(defproject demo "0.1.0-SNAPSHOT"
            :description "FIXME: write description"
            :url "http://example.com/FIXME"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}

            :dependencies [[org.clojure/clojure "1.9.0"]

                           [http-kit "2.2.0"]
                           [reagent "0.8.0-alpha2"]
                           [reagent-utils "0.3.0"]
                           [re-frame "0.10.5"]
                           [differ "0.3.2"]
                           [ring "1.6.3"]
                           [ring/ring-defaults "0.3.1"]
                           [prone "1.5.0"]
                           [compojure "1.6.0"]
                           [hiccup "1.0.5"]
                           [bidi "2.1.3"]
                           [environ "1.1.0"]
                           [cljsjs/quill "1.3.5-0"]
                           [org.clojure/clojurescript "1.9.946"]
                           [venantius/accountant "0.2.3"]
                           [com.taoensso/sente "1.12.0"]

                           [org.clojure/java.jdbc "0.7.3"]
                           [mpg "1.3.0"]
                           [hikari-cp "1.8.1"]
                           [metosin/spec-tools "0.6.1"]
                           [duratom "0.3.5"]]

            :plugins [[lein-environ "1.1.0"]
                      [lein-asset-minifier "0.4.4"]]

            :ring {:handler demo.handler/app
                   :uberwar-name "demo.war"}

            :min-lein-version "2.5.0"

            :uberjar-name "demo.jar"

            :main demo.server

            :clean-targets ^{:protect false} [:target-path
                                              [:cljsbuild :builds :app :compiler :output-dir]
                                              [:cljsbuild :builds :app :compiler :output-to]]

            :source-paths ["src/clj" "src/cljc"]

            :minify-assets
            {:assets
             {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

            :cljsbuild {:builds {:app {:source-paths ["src/cljs" "src/cljc"]
                                       :compiler {:output-to     "resources/public/js/app.js"
                                                  :output-dir    "resources/public/js/out"
                                                  :asset-path   "js/out"
                                                  :optimizations :none
                                                  :pretty-print  true}}}}

            :profiles {:dev {:repl-options {:init-ns demo.repl
                                            :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                             :dependencies [[ring/ring-mock "0.3.2"]
                                            [ring/ring-devel "1.4.0"]
                                            [lein-figwheel "0.5.14"]
                                            [org.clojure/tools.nrepl "0.2.10"]
                                            [com.cemerick/piggieback "0.2.2"]
                                            [day8.re-frame/re-frame-10x "0.2.0-react16"]
                                            [pjstadig/humane-test-output "0.7.0"]]

                             :source-paths ["env/dev/clj"]
                             :plugins [[lein-figwheel "0.5.14"]
                                       [lein-cljsbuild "1.1.7"]]

                             :injections [(require 'pjstadig.humane-test-output)
                                          (pjstadig.humane-test-output/activate!)]

                             :figwheel {:http-server-root "public"
                                        :server-port 3449
                                        :nrepl-port 7002
                                        :css-dirs ["resources/public/css"]
                                        :ring-handler demo.handler/app}

                             :env {:dev true}

                             :cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]

                                                        :compiler {:main "demo.dev"
                                                                   :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                                                                   :preloads             [day8.re-frame-10x.preload]
                                                                   :source-map true}}}}
                             :uberjar {:hooks [leiningen.cljsbuild minify-assets.plugin/hooks]
                                       :env {:production true}
                                       :aot :all
                                       :omit-source true
                                       :cljsbuild {:jar true
                                                   :builds {:app
                                                            {:source-paths ["env/prod/cljs"]
                                                             :compiler
                                                             {:optimizations :advanced
                                                              :pretty-print false}}}}}}})
