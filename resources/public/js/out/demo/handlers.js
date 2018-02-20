// Compiled by ClojureScript 1.9.946 {}
goog.provide('demo.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('differ.core');
goog.require('taoensso.encore');
goog.require('demo.ws');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),false,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"increment-count","increment-count",964902522),(function (db,p__45110){
var vec__45111 = p__45110;
var _ = cljs.core.nth.call(null,vec__45111,(0),null);
var delta = cljs.core.nth.call(null,vec__45111,(1),null);
demo.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","incr","counter/incr",1370974522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delta","delta",108939957),delta], null)], null));

return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core._PLUS_,delta);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,p__45114){
var vec__45115 = p__45114;
var _ = cljs.core.nth.call(null,vec__45115,(0),null);
var connected_QMARK_ = cljs.core.nth.call(null,vec__45115,(1),null);
if(cljs.core.truth_(connected_QMARK_)){
demo.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","sync","state/sync",-665682605)], null));
} else {
}

return cljs.core.assoc.call(null,db,new cljs.core.Keyword("ws","connected","ws/connected",-169836913),connected_QMARK_);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ws","send","ws/send",-652154486),(function (db,p__45118){
var vec__45119 = p__45118;
var seq__45120 = cljs.core.seq.call(null,vec__45119);
var first__45121 = cljs.core.first.call(null,seq__45120);
var seq__45120__$1 = cljs.core.next.call(null,seq__45120);
var _ = first__45121;
var first__45121__$1 = cljs.core.first.call(null,seq__45120__$1);
var seq__45120__$2 = cljs.core.next.call(null,seq__45120__$1);
var command = first__45121__$1;
var data = seq__45120__$2;
taoensso.encore.debugf.call(null,"Sending: %s %s",command,data);

return demo.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command,data], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("state","sync","state/sync",-665682605),(function (db,p__45122){
var vec__45123 = p__45122;
var _ = cljs.core.nth.call(null,vec__45123,(0),null);
var new_db = cljs.core.nth.call(null,vec__45123,(1),null);
taoensso.encore.debugf.call(null,"Syncing state %s",new_db);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"shared","shared",-384145993),new_db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("state","diff","state/diff",-2000248304),(function (db,p__45126){
var vec__45127 = p__45126;
var _ = cljs.core.nth.call(null,vec__45127,(0),null);
var diff = cljs.core.nth.call(null,vec__45127,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"shared","shared",-384145993),differ.core.patch.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(db),diff));
}));

//# sourceMappingURL=handlers.js.map
