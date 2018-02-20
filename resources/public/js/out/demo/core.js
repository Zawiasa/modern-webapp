// Compiled by ClojureScript 1.9.946 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('re_frame.core');
goog.require('demo.handlers');
goog.require('demo.views');
goog.require('demo.subs');
goog.require('demo.ws');
goog.require('goog.History');
demo.core.mount_root = (function demo$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.views.main_panel], null),document.getElementById("app"));
});
demo.core.init_BANG_ = (function demo$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

demo.core.mount_root.call(null);

return demo.ws.start_router_BANG_.call(null);
});

//# sourceMappingURL=core.js.map
