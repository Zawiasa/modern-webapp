// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_52509 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__52510 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52511 = null;
var count__52512 = (0);
var i__52513 = (0);
while(true){
if((i__52513 < count__52512)){
var vec__52514 = cljs.core._nth.call(null,chunk__52511,i__52513);
var effect_key = cljs.core.nth.call(null,vec__52514,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52514,(1),null);
var temp__5455__auto___52530 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___52530)){
var effect_fn_52531 = temp__5455__auto___52530;
effect_fn_52531.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__52532 = seq__52510;
var G__52533 = chunk__52511;
var G__52534 = count__52512;
var G__52535 = (i__52513 + (1));
seq__52510 = G__52532;
chunk__52511 = G__52533;
count__52512 = G__52534;
i__52513 = G__52535;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52510);
if(temp__5457__auto__){
var seq__52510__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52510__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__52510__$1);
var G__52536 = cljs.core.chunk_rest.call(null,seq__52510__$1);
var G__52537 = c__41600__auto__;
var G__52538 = cljs.core.count.call(null,c__41600__auto__);
var G__52539 = (0);
seq__52510 = G__52536;
chunk__52511 = G__52537;
count__52512 = G__52538;
i__52513 = G__52539;
continue;
} else {
var vec__52517 = cljs.core.first.call(null,seq__52510__$1);
var effect_key = cljs.core.nth.call(null,vec__52517,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52517,(1),null);
var temp__5455__auto___52540 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___52540)){
var effect_fn_52541 = temp__5455__auto___52540;
effect_fn_52541.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__52542 = cljs.core.next.call(null,seq__52510__$1);
var G__52543 = null;
var G__52544 = (0);
var G__52545 = (0);
seq__52510 = G__52542;
chunk__52511 = G__52543;
count__52512 = G__52544;
i__52513 = G__52545;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52349__auto___52546 = re_frame.interop.now.call(null);
var duration__52350__auto___52547 = (end__52349__auto___52546 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52350__auto___52547,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__52349__auto___52546);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_52509;
}} else {
var seq__52520 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52521 = null;
var count__52522 = (0);
var i__52523 = (0);
while(true){
if((i__52523 < count__52522)){
var vec__52524 = cljs.core._nth.call(null,chunk__52521,i__52523);
var effect_key = cljs.core.nth.call(null,vec__52524,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52524,(1),null);
var temp__5455__auto___52548 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___52548)){
var effect_fn_52549 = temp__5455__auto___52548;
effect_fn_52549.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__52550 = seq__52520;
var G__52551 = chunk__52521;
var G__52552 = count__52522;
var G__52553 = (i__52523 + (1));
seq__52520 = G__52550;
chunk__52521 = G__52551;
count__52522 = G__52552;
i__52523 = G__52553;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52520);
if(temp__5457__auto__){
var seq__52520__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52520__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__52520__$1);
var G__52554 = cljs.core.chunk_rest.call(null,seq__52520__$1);
var G__52555 = c__41600__auto__;
var G__52556 = cljs.core.count.call(null,c__41600__auto__);
var G__52557 = (0);
seq__52520 = G__52554;
chunk__52521 = G__52555;
count__52522 = G__52556;
i__52523 = G__52557;
continue;
} else {
var vec__52527 = cljs.core.first.call(null,seq__52520__$1);
var effect_key = cljs.core.nth.call(null,vec__52527,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52527,(1),null);
var temp__5455__auto___52558 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___52558)){
var effect_fn_52559 = temp__5455__auto___52558;
effect_fn_52559.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__52560 = cljs.core.next.call(null,seq__52520__$1);
var G__52561 = null;
var G__52562 = (0);
var G__52563 = (0);
seq__52520 = G__52560;
chunk__52521 = G__52561;
count__52522 = G__52562;
i__52523 = G__52563;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52564 = cljs.core.seq.call(null,value);
var chunk__52565 = null;
var count__52566 = (0);
var i__52567 = (0);
while(true){
if((i__52567 < count__52566)){
var map__52568 = cljs.core._nth.call(null,chunk__52565,i__52567);
var map__52568__$1 = ((((!((map__52568 == null)))?((((map__52568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52568):map__52568);
var effect = map__52568__$1;
var ms = cljs.core.get.call(null,map__52568__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__52568__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__52564,chunk__52565,count__52566,i__52567,map__52568,map__52568__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__52564,chunk__52565,count__52566,i__52567,map__52568,map__52568__$1,effect,ms,dispatch))
,ms);
}

var G__52572 = seq__52564;
var G__52573 = chunk__52565;
var G__52574 = count__52566;
var G__52575 = (i__52567 + (1));
seq__52564 = G__52572;
chunk__52565 = G__52573;
count__52566 = G__52574;
i__52567 = G__52575;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52564);
if(temp__5457__auto__){
var seq__52564__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52564__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__52564__$1);
var G__52576 = cljs.core.chunk_rest.call(null,seq__52564__$1);
var G__52577 = c__41600__auto__;
var G__52578 = cljs.core.count.call(null,c__41600__auto__);
var G__52579 = (0);
seq__52564 = G__52576;
chunk__52565 = G__52577;
count__52566 = G__52578;
i__52567 = G__52579;
continue;
} else {
var map__52570 = cljs.core.first.call(null,seq__52564__$1);
var map__52570__$1 = ((((!((map__52570 == null)))?((((map__52570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52570):map__52570);
var effect = map__52570__$1;
var ms = cljs.core.get.call(null,map__52570__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__52570__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__52564,chunk__52565,count__52566,i__52567,map__52570,map__52570__$1,effect,ms,dispatch,seq__52564__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__52564,chunk__52565,count__52566,i__52567,map__52570,map__52570__$1,effect,ms,dispatch,seq__52564__$1,temp__5457__auto__))
,ms);
}

var G__52580 = cljs.core.next.call(null,seq__52564__$1);
var G__52581 = null;
var G__52582 = (0);
var G__52583 = (0);
seq__52564 = G__52580;
chunk__52565 = G__52581;
count__52566 = G__52582;
i__52567 = G__52583;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__52584 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__52585 = null;
var count__52586 = (0);
var i__52587 = (0);
while(true){
if((i__52587 < count__52586)){
var event = cljs.core._nth.call(null,chunk__52585,i__52587);
re_frame.router.dispatch.call(null,event);

var G__52588 = seq__52584;
var G__52589 = chunk__52585;
var G__52590 = count__52586;
var G__52591 = (i__52587 + (1));
seq__52584 = G__52588;
chunk__52585 = G__52589;
count__52586 = G__52590;
i__52587 = G__52591;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52584);
if(temp__5457__auto__){
var seq__52584__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52584__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__52584__$1);
var G__52592 = cljs.core.chunk_rest.call(null,seq__52584__$1);
var G__52593 = c__41600__auto__;
var G__52594 = cljs.core.count.call(null,c__41600__auto__);
var G__52595 = (0);
seq__52584 = G__52592;
chunk__52585 = G__52593;
count__52586 = G__52594;
i__52587 = G__52595;
continue;
} else {
var event = cljs.core.first.call(null,seq__52584__$1);
re_frame.router.dispatch.call(null,event);

var G__52596 = cljs.core.next.call(null,seq__52584__$1);
var G__52597 = null;
var G__52598 = (0);
var G__52599 = (0);
seq__52584 = G__52596;
chunk__52585 = G__52597;
count__52586 = G__52598;
i__52587 = G__52599;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__52600 = cljs.core.seq.call(null,value);
var chunk__52601 = null;
var count__52602 = (0);
var i__52603 = (0);
while(true){
if((i__52603 < count__52602)){
var event = cljs.core._nth.call(null,chunk__52601,i__52603);
clear_event.call(null,event);

var G__52604 = seq__52600;
var G__52605 = chunk__52601;
var G__52606 = count__52602;
var G__52607 = (i__52603 + (1));
seq__52600 = G__52604;
chunk__52601 = G__52605;
count__52602 = G__52606;
i__52603 = G__52607;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52600);
if(temp__5457__auto__){
var seq__52600__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52600__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__52600__$1);
var G__52608 = cljs.core.chunk_rest.call(null,seq__52600__$1);
var G__52609 = c__41600__auto__;
var G__52610 = cljs.core.count.call(null,c__41600__auto__);
var G__52611 = (0);
seq__52600 = G__52608;
chunk__52601 = G__52609;
count__52602 = G__52610;
i__52603 = G__52611;
continue;
} else {
var event = cljs.core.first.call(null,seq__52600__$1);
clear_event.call(null,event);

var G__52612 = cljs.core.next.call(null,seq__52600__$1);
var G__52613 = null;
var G__52614 = (0);
var G__52615 = (0);
seq__52600 = G__52612;
chunk__52601 = G__52613;
count__52602 = G__52614;
i__52603 = G__52615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
