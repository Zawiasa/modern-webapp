// Compiled by ClojureScript 1.7.122 {}
goog.provide('demo.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('differ.core');
goog.require('taoensso.encore');
goog.require('demo.ws');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),false,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null)], null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"increment-count","increment-count",964902522),(function (db,p__24897){
var vec__24898 = p__24897;
var _ = cljs.core.nth.call(null,vec__24898,(0),null);
var delta = cljs.core.nth.call(null,vec__24898,(1),null);
demo.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","incr","counter/incr",1370974522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delta","delta",108939957),delta], null)], null));

return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core._PLUS_,delta);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,p__24899){
var vec__24900 = p__24899;
var _ = cljs.core.nth.call(null,vec__24900,(0),null);
var connected_QMARK_ = cljs.core.nth.call(null,vec__24900,(1),null);
if(cljs.core.truth_(connected_QMARK_)){
demo.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","sync","state/sync",-665682605)], null));
} else {
}

return cljs.core.assoc.call(null,db,new cljs.core.Keyword("ws","connected","ws/connected",-169836913),connected_QMARK_);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("ws","send","ws/send",-652154486),(function (db,p__24901){
var vec__24902 = p__24901;
var _ = cljs.core.nth.call(null,vec__24902,(0),null);
var command = cljs.core.nth.call(null,vec__24902,(1),null);
var data = cljs.core.nthnext.call(null,vec__24902,(2));
taoensso.encore.debugf.call(null,"Sending: %s %s",command,data);

return demo.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command,data], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("state","sync","state/sync",-665682605),(function (db,p__24903){
var vec__24904 = p__24903;
var _ = cljs.core.nth.call(null,vec__24904,(0),null);
var new_db = cljs.core.nth.call(null,vec__24904,(1),null);
taoensso.encore.debugf.call(null,"Syncing state %s",new_db);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"shared","shared",-384145993),new_db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("state","diff","state/diff",-2000248304),(function (db,p__24905){
var vec__24906 = p__24905;
var _ = cljs.core.nth.call(null,vec__24906,(0),null);
var diff = cljs.core.nth.call(null,vec__24906,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"shared","shared",-384145993),differ.core.patch.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(db),diff));
}));

//# sourceMappingURL=handlers.js.map