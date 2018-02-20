// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52371){
var map__52372 = p__52371;
var map__52372__$1 = ((((!((map__52372 == null)))?((((map__52372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52372):map__52372);
var operation = cljs.core.get.call(null,map__52372__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__52372__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__52372__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__52372__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__40669__auto__ = child_of;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__52374_52386 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__52375_52387 = null;
var count__52376_52388 = (0);
var i__52377_52389 = (0);
while(true){
if((i__52377_52389 < count__52376_52388)){
var vec__52378_52390 = cljs.core._nth.call(null,chunk__52375_52387,i__52377_52389);
var k_52391 = cljs.core.nth.call(null,vec__52378_52390,(0),null);
var cb_52392 = cljs.core.nth.call(null,vec__52378_52390,(1),null);
try{cb_52392.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e52381){var e_52393 = e52381;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_52391,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_52393);
}
var G__52394 = seq__52374_52386;
var G__52395 = chunk__52375_52387;
var G__52396 = count__52376_52388;
var G__52397 = (i__52377_52389 + (1));
seq__52374_52386 = G__52394;
chunk__52375_52387 = G__52395;
count__52376_52388 = G__52396;
i__52377_52389 = G__52397;
continue;
} else {
var temp__5457__auto___52398 = cljs.core.seq.call(null,seq__52374_52386);
if(temp__5457__auto___52398){
var seq__52374_52399__$1 = temp__5457__auto___52398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52374_52399__$1)){
var c__41600__auto___52400 = cljs.core.chunk_first.call(null,seq__52374_52399__$1);
var G__52401 = cljs.core.chunk_rest.call(null,seq__52374_52399__$1);
var G__52402 = c__41600__auto___52400;
var G__52403 = cljs.core.count.call(null,c__41600__auto___52400);
var G__52404 = (0);
seq__52374_52386 = G__52401;
chunk__52375_52387 = G__52402;
count__52376_52388 = G__52403;
i__52377_52389 = G__52404;
continue;
} else {
var vec__52382_52405 = cljs.core.first.call(null,seq__52374_52399__$1);
var k_52406 = cljs.core.nth.call(null,vec__52382_52405,(0),null);
var cb_52407 = cljs.core.nth.call(null,vec__52382_52405,(1),null);
try{cb_52407.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e52385){var e_52408 = e52385;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_52406,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_52408);
}
var G__52409 = cljs.core.next.call(null,seq__52374_52399__$1);
var G__52410 = null;
var G__52411 = (0);
var G__52412 = (0);
seq__52374_52386 = G__52409;
chunk__52375_52387 = G__52410;
count__52376_52388 = G__52411;
i__52377_52389 = G__52412;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
