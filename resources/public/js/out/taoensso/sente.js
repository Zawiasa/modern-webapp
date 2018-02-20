// Compiled by ClojureScript 1.9.946 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__51205 = x;
var ev_id = cljs.core.nth.call(null,vec__51205,(0),null);
var _ = cljs.core.nth.call(null,vec__51205,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5457__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5457__auto__)){
var errs = temp__5457__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5455__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5455__auto__)){
var errs = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__40657__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__40657__auto__){
var and__40657__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__40657__auto____$1){
var map__51212 = x;
var map__51212__$1 = ((((!((map__51212 == null)))?((((map__51212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51212):map__51212);
var ch_recv = cljs.core.get.call(null,map__51212__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__51212__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__51212__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__51212__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__40657__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__40657__auto____$2){
var and__40657__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__40657__auto____$3){
var and__40657__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__40657__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__40657__auto____$4;
}
} else {
return and__40657__auto____$3;
}
} else {
return and__40657__auto____$2;
}
} else {
return and__40657__auto____$1;
}
} else {
return and__40657__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__40657__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__40657__auto__){
var and__40657__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__40657__auto____$1){
var map__51218 = x;
var map__51218__$1 = ((((!((map__51218 == null)))?((((map__51218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51218):map__51218);
var ch_recv = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__51218__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__40657__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__40657__auto____$2){
var and__40657__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__40657__auto____$3){
var and__40657__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__40657__auto____$4){
var and__40657__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__40657__auto____$5){
var and__40657__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__40657__auto____$6){
var and__40657__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__40657__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__40657__auto____$7;
}
} else {
return and__40657__auto____$6;
}
} else {
return and__40657__auto____$5;
}
} else {
return and__40657__auto____$4;
}
} else {
return and__40657__auto____$3;
}
} else {
return and__40657__auto____$2;
}
} else {
return and__40657__auto____$1;
}
} else {
return and__40657__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__51220){
var map__51221 = p__51220;
var map__51221__$1 = ((((!((map__51221 == null)))?((((map__51221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51221):map__51221);
var ev_msg = map__51221__$1;
var event = cljs.core.get.call(null,map__51221__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__51221__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__51223 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__51223,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__51223,(1),null);
var valid_event = vec__51223;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51223,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__51221,map__51221__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__51223,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__51221,map__51221__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,812564203);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e51229){var t = e51229;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init92783305977134254.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1389108827);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__51226 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__51226,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__51226,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__51226,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__51226,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-1187007397);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__51231 = arguments.length;
switch (G__51231) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,clj))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,939431227);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",230,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,396155533);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__51233_SHARP_){
if(!((p1__51233_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__51233_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__51233_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__51233_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__51233_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51234){if((e51234 instanceof Error)){
var e = e51234;
return e;
} else {
throw e51234;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",243,"((fn* [p1__51233#] (satisfies? interfaces/IPacker p1__51233#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___51524 = arguments.length;
var i__41949__auto___51525 = (0);
while(true){
if((i__41949__auto___51525 < len__41948__auto___51524)){
args__41955__auto__.push((arguments[i__41949__auto___51525]));

var G__51526 = (i__41949__auto___51525 + (1));
i__41949__auto___51525 = G__51526;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__51239){
var vec__51240 = p__51239;
var map__51243 = cljs.core.nth.call(null,vec__51240,(0),null);
var map__51243__$1 = ((((!((map__51243 == null)))?((((map__51243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51243):map__51243);
var recv_buf_or_n = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__40669__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__51243__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51245){if((e51245 instanceof Error)){
var e = e51245;
return e;
} else {
throw e51245;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51246){if((e51246 instanceof Error)){
var e = e51246;
return e;
} else {
throw e51246;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_51527 = (function (){try{if(((function (vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__51236_SHARP_){
if(!((p1__51236_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__51236_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__51236_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__51236_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__51236_SHARP_);
}
});})(vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51247){if((e51247 instanceof Error)){
var e = e51247;
return e;
} else {
throw e51247;

}
}})();
if((e_51527 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",314,"((fn* [p1__51236#] (satisfies? interfaces/IServerChanAdapter p1__51236#)) web-server-ch-adapter)",web_server_ch_adapter,e_51527,null);
}

var max_ms_51528 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_51528)){
throw cljs.core.ex_info.call(null,[":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_51528)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_51528], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__40669__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__51529 = null;
var G__51529__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__51249 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__51249,(0),null);
var _udt = cljs.core.nth.call(null,vec__51249,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__51529__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__51529 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__51529__3.call(this,conn_type,uid,client_id);
case 4:
return G__51529__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__51529.cljs$core$IFn$_invoke$arity$3 = G__51529__3;
G__51529.cljs$core$IFn$_invoke$arity$4 = G__51529__4;
return G__51529;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51252){if((e51252 instanceof Error)){
var e = e51252;
return e;
} else {
throw e51252;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",358,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__51253){
var map__51254 = p__51253;
var map__51254__$1 = ((((!((map__51254 == null)))?((((map__51254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51254):map__51254);
var old_m = map__51254__$1;
var ws = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__51256 = conn_type;
var G__51256__$1 = (((G__51256 instanceof cljs.core.Keyword))?G__51256.fqn:null);
switch (G__51256__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51256__$1)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51257){if((e51257 instanceof Error)){
var e = e51257;
return e;
} else {
throw e51257;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",375,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__51258){
var map__51259 = p__51258;
var map__51259__$1 = ((((!((map__51259 == null)))?((((map__51259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51259):map__51259);
var old_m = map__51259__$1;
var ws = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__51531__delegate = function (user_id,ev,p__51261){
var vec__51262 = p__51261;
var map__51265 = cljs.core.nth.call(null,vec__51262,(0),null);
var map__51265__$1 = ((((!((map__51265 == null)))?((((map__51265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51265):map__51265);
var opts = map__51265__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__51265__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_51532 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __51533 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",401,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_51532,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_51532,ev], null);
});})(uid_51532,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-905253771);
var __51534__$1 = (cljs.core.truth_(uid_51532)?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join('')),"\n","uid"].join('')))})());
var __51535__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_51536 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__51537 = ((function (uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__5457__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__51267 = cljs.core.get.call(null,m,uid_51532);
var ___$3 = cljs.core.nth.call(null,vec__51267,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__51267,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_51536)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_51532),cljs.core.get.call(null,m,uid_51532));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__5457__auto__)){
var pulled = temp__5457__auto__;
var vec__51270 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__51270,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__51270,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",428,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",429,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",432,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__51270,buffered_evs,ev_uuids,pulled,temp__5457__auto__,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__51270,buffered_evs,ev_uuids,pulled,temp__5457__auto__,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,578338803);

var G__51273 = conn_type;
var G__51273__$1 = (((G__51273 instanceof cljs.core.Keyword))?G__51273.fqn:null);
switch (G__51273__$1) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_51532,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_51532,buffered_evs_ppstr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51273__$1)].join('')));

}
} else {
return null;
}
});})(uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init92783305977134254.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_51532], null);
});})(uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1708453849);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__51537.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__51537.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__51274_51539 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_51532], null))));
var chunk__51275_51540 = null;
var count__51276_51541 = (0);
var i__51277_51542 = (0);
while(true){
if((i__51277_51542 < count__51276_51541)){
var vec__51278_51543 = cljs.core._nth.call(null,chunk__51275_51540,i__51277_51542);
var _QMARK_sch_51544 = cljs.core.nth.call(null,vec__51278_51543,(0),null);
var _udt_51545 = cljs.core.nth.call(null,vec__51278_51543,(1),null);
var temp__5457__auto___51546 = _QMARK_sch_51544;
if(cljs.core.truth_(temp__5457__auto___51546)){
var sch_51547 = temp__5457__auto___51546;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_51547);
} else {
}

var G__51548 = seq__51274_51539;
var G__51549 = chunk__51275_51540;
var G__51550 = count__51276_51541;
var G__51551 = (i__51277_51542 + (1));
seq__51274_51539 = G__51548;
chunk__51275_51540 = G__51549;
count__51276_51541 = G__51550;
i__51277_51542 = G__51551;
continue;
} else {
var temp__5457__auto___51552 = cljs.core.seq.call(null,seq__51274_51539);
if(temp__5457__auto___51552){
var seq__51274_51553__$1 = temp__5457__auto___51552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51274_51553__$1)){
var c__41600__auto___51554 = cljs.core.chunk_first.call(null,seq__51274_51553__$1);
var G__51555 = cljs.core.chunk_rest.call(null,seq__51274_51553__$1);
var G__51556 = c__41600__auto___51554;
var G__51557 = cljs.core.count.call(null,c__41600__auto___51554);
var G__51558 = (0);
seq__51274_51539 = G__51555;
chunk__51275_51540 = G__51556;
count__51276_51541 = G__51557;
i__51277_51542 = G__51558;
continue;
} else {
var vec__51281_51559 = cljs.core.first.call(null,seq__51274_51553__$1);
var _QMARK_sch_51560 = cljs.core.nth.call(null,vec__51281_51559,(0),null);
var _udt_51561 = cljs.core.nth.call(null,vec__51281_51559,(1),null);
var temp__5457__auto___51562__$1 = _QMARK_sch_51560;
if(cljs.core.truth_(temp__5457__auto___51562__$1)){
var sch_51563 = temp__5457__auto___51562__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_51563);
} else {
}

var G__51564 = cljs.core.next.call(null,seq__51274_51553__$1);
var G__51565 = null;
var G__51566 = (0);
var G__51567 = (0);
seq__51274_51539 = G__51564;
chunk__51275_51540 = G__51565;
count__51276_51541 = G__51566;
i__51277_51542 = G__51567;
continue;
}
} else {
}
}
break;
}

var seq__51284_51568 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_51532], null))));
var chunk__51285_51569 = null;
var count__51286_51570 = (0);
var i__51287_51571 = (0);
while(true){
if((i__51287_51571 < count__51286_51570)){
var vec__51288_51572 = cljs.core._nth.call(null,chunk__51285_51569,i__51287_51571);
var _QMARK_sch_51573 = cljs.core.nth.call(null,vec__51288_51572,(0),null);
var _udt_51574 = cljs.core.nth.call(null,vec__51288_51572,(1),null);
var temp__5457__auto___51575 = _QMARK_sch_51573;
if(cljs.core.truth_(temp__5457__auto___51575)){
var sch_51576 = temp__5457__auto___51575;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_51576);
} else {
}

var G__51577 = seq__51284_51568;
var G__51578 = chunk__51285_51569;
var G__51579 = count__51286_51570;
var G__51580 = (i__51287_51571 + (1));
seq__51284_51568 = G__51577;
chunk__51285_51569 = G__51578;
count__51286_51570 = G__51579;
i__51287_51571 = G__51580;
continue;
} else {
var temp__5457__auto___51581 = cljs.core.seq.call(null,seq__51284_51568);
if(temp__5457__auto___51581){
var seq__51284_51582__$1 = temp__5457__auto___51581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51284_51582__$1)){
var c__41600__auto___51583 = cljs.core.chunk_first.call(null,seq__51284_51582__$1);
var G__51584 = cljs.core.chunk_rest.call(null,seq__51284_51582__$1);
var G__51585 = c__41600__auto___51583;
var G__51586 = cljs.core.count.call(null,c__41600__auto___51583);
var G__51587 = (0);
seq__51284_51568 = G__51584;
chunk__51285_51569 = G__51585;
count__51286_51570 = G__51586;
i__51287_51571 = G__51587;
continue;
} else {
var vec__51291_51588 = cljs.core.first.call(null,seq__51284_51582__$1);
var _QMARK_sch_51589 = cljs.core.nth.call(null,vec__51291_51588,(0),null);
var _udt_51590 = cljs.core.nth.call(null,vec__51291_51588,(1),null);
var temp__5457__auto___51591__$1 = _QMARK_sch_51589;
if(cljs.core.truth_(temp__5457__auto___51591__$1)){
var sch_51592 = temp__5457__auto___51591__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_51592);
} else {
}

var G__51593 = cljs.core.next.call(null,seq__51284_51582__$1);
var G__51594 = null;
var G__51595 = (0);
var G__51596 = (0);
seq__51284_51568 = G__51593;
chunk__51285_51569 = G__51594;
count__51286_51570 = G__51595;
i__51287_51571 = G__51596;
continue;
}
} else {
}
}
break;
}
} else {
var seq__51294_51597 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__51295_51598 = null;
var count__51296_51599 = (0);
var i__51297_51600 = (0);
while(true){
if((i__51297_51600 < count__51296_51599)){
var conn_type_51601 = cljs.core._nth.call(null,chunk__51295_51598,i__51297_51600);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_51601,uid_51532], null),((function (seq__51294_51597,chunk__51295_51598,count__51296_51599,i__51297_51600,conn_type_51601,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_51536])], null);
} else {
var vec__51298 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__51298,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__51298,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_51536)], null);
}
});})(seq__51294_51597,chunk__51295_51598,count__51296_51599,i__51297_51600,conn_type_51601,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__51602 = seq__51294_51597;
var G__51603 = chunk__51295_51598;
var G__51604 = count__51296_51599;
var G__51605 = (i__51297_51600 + (1));
seq__51294_51597 = G__51602;
chunk__51295_51598 = G__51603;
count__51296_51599 = G__51604;
i__51297_51600 = G__51605;
continue;
} else {
var temp__5457__auto___51606 = cljs.core.seq.call(null,seq__51294_51597);
if(temp__5457__auto___51606){
var seq__51294_51607__$1 = temp__5457__auto___51606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51294_51607__$1)){
var c__41600__auto___51608 = cljs.core.chunk_first.call(null,seq__51294_51607__$1);
var G__51609 = cljs.core.chunk_rest.call(null,seq__51294_51607__$1);
var G__51610 = c__41600__auto___51608;
var G__51611 = cljs.core.count.call(null,c__41600__auto___51608);
var G__51612 = (0);
seq__51294_51597 = G__51609;
chunk__51295_51598 = G__51610;
count__51296_51599 = G__51611;
i__51297_51600 = G__51612;
continue;
} else {
var conn_type_51613 = cljs.core.first.call(null,seq__51294_51607__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_51613,uid_51532], null),((function (seq__51294_51597,chunk__51295_51598,count__51296_51599,i__51297_51600,conn_type_51613,seq__51294_51607__$1,temp__5457__auto___51606,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_51536])], null);
} else {
var vec__51301 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__51301,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__51301,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_51536)], null);
}
});})(seq__51294_51597,chunk__51295_51598,count__51296_51599,i__51297_51600,conn_type_51613,seq__51294_51607__$1,temp__5457__auto___51606,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__51614 = cljs.core.next.call(null,seq__51294_51607__$1);
var G__51615 = null;
var G__51616 = (0);
var G__51617 = (0);
seq__51294_51597 = G__51614;
chunk__51295_51598 = G__51615;
count__51296_51599 = G__51616;
i__51297_51600 = G__51617;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__51537.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__51537.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_51618 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_51619 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__46898__auto___51620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___51620,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___51620,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_51308){
var state_val_51309 = (state_51308[(1)]);
if((state_val_51309 === (1))){
var state_51308__$1 = state_51308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51308__$1,(2),ws_timeout_51618);
} else {
if((state_val_51309 === (2))){
var inst_51305 = (state_51308[(2)]);
var inst_51306 = flush_buffer_BANG__51537.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_51308__$1 = (function (){var statearr_51310 = state_51308;
(statearr_51310[(7)] = inst_51305);

return statearr_51310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51308__$1,inst_51306);
} else {
return null;
}
}
});})(c__46898__auto___51620,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__46808__auto__,c__46898__auto___51620,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51311 = [null,null,null,null,null,null,null,null];
(statearr_51311[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51311[(1)] = (1));

return statearr_51311;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51308){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51312){if((e51312 instanceof Object)){
var ex__46812__auto__ = e51312;
var statearr_51313_51621 = state_51308;
(statearr_51313_51621[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51622 = state_51308;
state_51308 = G__51622;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51308){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___51620,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__46900__auto__ = (function (){var statearr_51314 = f__46899__auto__.call(null);
(statearr_51314[(6)] = c__46898__auto___51620);

return statearr_51314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___51620,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__46898__auto___51623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___51623,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___51623,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_51319){
var state_val_51320 = (state_51319[(1)]);
if((state_val_51320 === (1))){
var state_51319__$1 = state_51319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51319__$1,(2),ajax_timeout_51619);
} else {
if((state_val_51320 === (2))){
var inst_51316 = (state_51319[(2)]);
var inst_51317 = flush_buffer_BANG__51537.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_51319__$1 = (function (){var statearr_51321 = state_51319;
(statearr_51321[(7)] = inst_51316);

return statearr_51321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51319__$1,inst_51317);
} else {
return null;
}
}
});})(c__46898__auto___51623,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__46808__auto__,c__46898__auto___51623,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51322 = [null,null,null,null,null,null,null,null];
(statearr_51322[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51322[(1)] = (1));

return statearr_51322;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51319){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51323){if((e51323 instanceof Object)){
var ex__46812__auto__ = e51323;
var statearr_51324_51624 = state_51319;
(statearr_51324_51624[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51625 = state_51319;
state_51319 = G__51625;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51319){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___51623,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__46900__auto__ = (function (){var statearr_51325 = f__46899__auto__.call(null);
(statearr_51325[(6)] = c__46898__auto___51623);

return statearr_51325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___51623,ws_timeout_51618,ajax_timeout_51619,uid_51532,__51533,__51534__$1,__51535__$2,ev_uuid_51536,flush_buffer_BANG__51537,vec__51262,map__51265,map__51265__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__51531 = function (user_id,ev,var_args){
var p__51261 = null;
if (arguments.length > 2) {
var G__51626__i = 0, G__51626__a = new Array(arguments.length -  2);
while (G__51626__i < G__51626__a.length) {G__51626__a[G__51626__i] = arguments[G__51626__i + 2]; ++G__51626__i;}
  p__51261 = new cljs.core.IndexedSeq(G__51626__a,0,null);
} 
return G__51531__delegate.call(this,user_id,ev,p__51261);};
G__51531.cljs$lang$maxFixedArity = 2;
G__51531.cljs$lang$applyTo = (function (arglist__51627){
var user_id = cljs.core.first(arglist__51627);
arglist__51627 = cljs.core.next(arglist__51627);
var ev = cljs.core.first(arglist__51627);
var p__51261 = cljs.core.rest(arglist__51627);
return G__51531__delegate(user_id,ev,p__51261);
});
G__51531.cljs$core$IFn$_invoke$arity$variadic = G__51531__delegate;
return G__51531;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__51326 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__51326,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__51326,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",510,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-570080763);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5457__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_51334){
var state_val_51335 = (state_51334[(1)]);
if((state_val_51335 === (1))){
var inst_51329 = cljs.core.async.timeout.call(null,ms);
var state_51334__$1 = state_51334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51334__$1,(2),inst_51329);
} else {
if((state_val_51335 === (2))){
var inst_51331 = (state_51334[(2)]);
var inst_51332 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_51334__$1 = (function (){var statearr_51336 = state_51334;
(statearr_51336[(7)] = inst_51331);

return statearr_51336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51334__$1,inst_51332);
} else {
return null;
}
}
});})(c__46898__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__46808__auto__,c__46898__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51337 = [null,null,null,null,null,null,null,null];
(statearr_51337[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51337[(1)] = (1));

return statearr_51337;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51334){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51338){if((e51338 instanceof Object)){
var ex__46812__auto__ = e51338;
var statearr_51339_51628 = state_51334;
(statearr_51339_51628[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51629 = state_51334;
state_51334 = G__51629;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51334){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__46900__auto__ = (function (){var statearr_51340 = f__46899__auto__.call(null);
(statearr_51340[(6)] = c__46898__auto__);

return statearr_51340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__51326,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__46898__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1873374711);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1660480512);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",575,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-639713918);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__5457__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_51376){
var state_val_51377 = (state_51376[(1)]);
if((state_val_51377 === (7))){
var inst_51372 = (state_51376[(2)]);
var state_51376__$1 = state_51376;
var statearr_51378_51630 = state_51376__$1;
(statearr_51378_51630[(2)] = inst_51372);

(statearr_51378_51630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (1))){
var inst_51341 = udt_open;
var state_51376__$1 = (function (){var statearr_51379 = state_51376;
(statearr_51379[(7)] = inst_51341);

return statearr_51379;
})();
var statearr_51380_51631 = state_51376__$1;
(statearr_51380_51631[(2)] = null);

(statearr_51380_51631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (4))){
var inst_51350 = (state_51376[(8)]);
var inst_51345 = (state_51376[(2)]);
var inst_51346 = cljs.core.deref.call(null,conns_);
var inst_51347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51348 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_51349 = (new cljs.core.PersistentVector(null,3,(5),inst_51347,inst_51348,null));
var inst_51350__$1 = cljs.core.get_in.call(null,inst_51346,inst_51349);
var state_51376__$1 = (function (){var statearr_51381 = state_51376;
(statearr_51381[(9)] = inst_51345);

(statearr_51381[(8)] = inst_51350__$1);

return statearr_51381;
})();
if(cljs.core.truth_(inst_51350__$1)){
var statearr_51382_51632 = state_51376__$1;
(statearr_51382_51632[(1)] = (5));

} else {
var statearr_51383_51633 = state_51376__$1;
(statearr_51383_51633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (13))){
var inst_51356 = (state_51376[(10)]);
var inst_51365 = (state_51376[(2)]);
var inst_51341 = inst_51356;
var state_51376__$1 = (function (){var statearr_51384 = state_51376;
(statearr_51384[(7)] = inst_51341);

(statearr_51384[(11)] = inst_51365);

return statearr_51384;
})();
var statearr_51385_51634 = state_51376__$1;
(statearr_51385_51634[(2)] = null);

(statearr_51385_51634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (6))){
var state_51376__$1 = state_51376;
var statearr_51386_51635 = state_51376__$1;
(statearr_51386_51635[(2)] = null);

(statearr_51386_51635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (3))){
var inst_51374 = (state_51376[(2)]);
var state_51376__$1 = state_51376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51376__$1,inst_51374);
} else {
if((state_val_51377 === (12))){
var state_51376__$1 = state_51376;
var statearr_51387_51636 = state_51376__$1;
(statearr_51387_51636[(2)] = null);

(statearr_51387_51636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (2))){
var inst_51343 = cljs.core.async.timeout.call(null,ms);
var state_51376__$1 = state_51376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51376__$1,(4),inst_51343);
} else {
if((state_val_51377 === (11))){
var inst_51361 = taoensso.sente.pack.call(null,packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_51362 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_51361);
var state_51376__$1 = state_51376;
var statearr_51388_51637 = state_51376__$1;
(statearr_51388_51637[(2)] = inst_51362);

(statearr_51388_51637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (9))){
var state_51376__$1 = state_51376;
var statearr_51389_51638 = state_51376__$1;
(statearr_51389_51638[(2)] = null);

(statearr_51389_51638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (5))){
var inst_51350 = (state_51376[(8)]);
var inst_51355 = cljs.core.nth.call(null,inst_51350,(0),null);
var inst_51356 = cljs.core.nth.call(null,inst_51350,(1),null);
var inst_51357 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_51376__$1 = (function (){var statearr_51390 = state_51376;
(statearr_51390[(10)] = inst_51356);

(statearr_51390[(12)] = inst_51355);

return statearr_51390;
})();
if(cljs.core.truth_(inst_51357)){
var statearr_51391_51639 = state_51376__$1;
(statearr_51391_51639[(1)] = (8));

} else {
var statearr_51392_51640 = state_51376__$1;
(statearr_51392_51640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (10))){
var inst_51369 = (state_51376[(2)]);
var state_51376__$1 = state_51376;
var statearr_51393_51641 = state_51376__$1;
(statearr_51393_51641[(2)] = inst_51369);

(statearr_51393_51641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51377 === (8))){
var inst_51341 = (state_51376[(7)]);
var inst_51356 = (state_51376[(10)]);
var inst_51359 = cljs.core._EQ_.call(null,inst_51356,inst_51341);
var state_51376__$1 = state_51376;
if(inst_51359){
var statearr_51394_51642 = state_51376__$1;
(statearr_51394_51642[(1)] = (11));

} else {
var statearr_51395_51643 = state_51376__$1;
(statearr_51395_51643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__46808__auto__,c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51396 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51396[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51396[(1)] = (1));

return statearr_51396;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51376){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51397){if((e51397 instanceof Object)){
var ex__46812__auto__ = e51397;
var statearr_51398_51644 = state_51376;
(statearr_51398_51644[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51645 = state_51376;
state_51376 = G__51645;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51376){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__46900__auto__ = (function (){var statearr_51399 = f__46899__auto__.call(null);
(statearr_51399[(6)] = c__46898__auto__);

return statearr_51399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__46898__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",604,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-181467893);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__40669__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__5457__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_51425){
var state_val_51426 = (state_51425[(1)]);
if((state_val_51426 === (1))){
var inst_51400 = cljs.core.async.timeout.call(null,ms);
var state_51425__$1 = state_51425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51425__$1,(2),inst_51400);
} else {
if((state_val_51426 === (2))){
var inst_51407 = (state_51425[(7)]);
var inst_51402 = (state_51425[(2)]);
var inst_51403 = cljs.core.deref.call(null,conns_);
var inst_51404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51405 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_51406 = (new cljs.core.PersistentVector(null,3,(5),inst_51404,inst_51405,null));
var inst_51407__$1 = cljs.core.get_in.call(null,inst_51403,inst_51406);
var state_51425__$1 = (function (){var statearr_51427 = state_51425;
(statearr_51427[(8)] = inst_51402);

(statearr_51427[(7)] = inst_51407__$1);

return statearr_51427;
})();
if(cljs.core.truth_(inst_51407__$1)){
var statearr_51428_51646 = state_51425__$1;
(statearr_51428_51646[(1)] = (3));

} else {
var statearr_51429_51647 = state_51425__$1;
(statearr_51429_51647[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51426 === (3))){
var inst_51407 = (state_51425[(7)]);
var inst_51412 = cljs.core.nth.call(null,inst_51407,(0),null);
var inst_51413 = cljs.core.nth.call(null,inst_51407,(1),null);
var inst_51414 = cljs.core._EQ_.call(null,inst_51413,udt_open);
var state_51425__$1 = (function (){var statearr_51430 = state_51425;
(statearr_51430[(9)] = inst_51412);

return statearr_51430;
})();
if(inst_51414){
var statearr_51431_51648 = state_51425__$1;
(statearr_51431_51648[(1)] = (6));

} else {
var statearr_51432_51649 = state_51425__$1;
(statearr_51432_51649[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51426 === (4))){
var state_51425__$1 = state_51425;
var statearr_51433_51650 = state_51425__$1;
(statearr_51433_51650[(2)] = null);

(statearr_51433_51650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51426 === (5))){
var inst_51423 = (state_51425[(2)]);
var state_51425__$1 = state_51425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51425__$1,inst_51423);
} else {
if((state_val_51426 === (6))){
var inst_51416 = taoensso.sente.pack.call(null,packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_51417 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_51416);
var state_51425__$1 = state_51425;
var statearr_51434_51651 = state_51425__$1;
(statearr_51434_51651[(2)] = inst_51417);

(statearr_51434_51651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51426 === (7))){
var state_51425__$1 = state_51425;
var statearr_51435_51652 = state_51425__$1;
(statearr_51435_51652[(2)] = null);

(statearr_51435_51652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51426 === (8))){
var inst_51420 = (state_51425[(2)]);
var state_51425__$1 = state_51425;
var statearr_51436_51653 = state_51425__$1;
(statearr_51436_51653[(2)] = inst_51420);

(statearr_51436_51653[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__46808__auto__,c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51437[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51437[(1)] = (1));

return statearr_51437;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51425){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51438){if((e51438 instanceof Object)){
var ex__46812__auto__ = e51438;
var statearr_51439_51654 = state_51425;
(statearr_51439_51654[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51655 = state_51425;
state_51425 = G__51655;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51425){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__46900__auto__ = (function (){var statearr_51440 = f__46899__auto__.call(null);
(statearr_51440[(6)] = c__46898__auto__);

return statearr_51440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__46898__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__51441 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__51441,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__51441,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__51441,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",634,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51441,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__51441,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1615280632);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__51441,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",643,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1264325512);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_51495){
var state_val_51496 = (state_51495[(1)]);
if((state_val_51496 === (7))){
var state_51495__$1 = state_51495;
var statearr_51497_51656 = state_51495__$1;
(statearr_51497_51656[(2)] = null);

(statearr_51497_51656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (1))){
var inst_51444 = cljs.core.async.timeout.call(null,(5000));
var state_51495__$1 = state_51495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51495__$1,(2),inst_51444);
} else {
if((state_val_51496 === (4))){
var state_51495__$1 = state_51495;
var statearr_51498_51657 = state_51495__$1;
(statearr_51498_51657[(2)] = null);

(statearr_51498_51657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (13))){
var state_51495__$1 = state_51495;
var statearr_51499_51658 = state_51495__$1;
(statearr_51499_51658[(2)] = null);

(statearr_51499_51658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (6))){
var inst_51454 = (state_51495[(7)]);
var inst_51456 = (state_51495[(8)]);
var inst_51472 = (state_51495[(9)]);
var inst_51455 = (state_51495[(10)]);
var inst_51467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51468 = [conn_type,uid,client_id];
var inst_51469 = (new cljs.core.PersistentVector(null,3,(5),inst_51467,inst_51468,null));
var inst_51471 = (function (){var vec__51447 = inst_51454;
var __QMARK_sch = inst_51455;
var udt_t1 = inst_51456;
return ((function (vec__51447,__QMARK_sch,udt_t1,inst_51454,inst_51456,inst_51472,inst_51455,inst_51467,inst_51468,inst_51469,state_val_51496,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__51470){
var vec__51500 = p__51470;
var _sch = cljs.core.nth.call(null,vec__51500,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__51500,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__51447,__QMARK_sch,udt_t1,inst_51454,inst_51456,inst_51472,inst_51455,inst_51467,inst_51468,inst_51469,state_val_51496,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_51472__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_51469,inst_51471);
var state_51495__$1 = (function (){var statearr_51503 = state_51495;
(statearr_51503[(9)] = inst_51472__$1);

return statearr_51503;
})();
if(cljs.core.truth_(inst_51472__$1)){
var statearr_51504_51659 = state_51495__$1;
(statearr_51504_51659[(1)] = (9));

} else {
var statearr_51505_51660 = state_51495__$1;
(statearr_51505_51660[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (3))){
var inst_51454 = (state_51495[(7)]);
var inst_51456 = (state_51495[(8)]);
var inst_51455 = (state_51495[(10)]);
var inst_51459 = (function (){var vec__51447 = inst_51454;
var __QMARK_sch = inst_51455;
var udt_t1 = inst_51456;
return ((function (vec__51447,__QMARK_sch,udt_t1,inst_51454,inst_51456,inst_51455,state_val_51496,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__51447,__QMARK_sch,udt_t1,inst_51454,inst_51456,inst_51455,state_val_51496,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_51460 = (new cljs.core.Delay(inst_51459,null));
var inst_51461 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init92783305977134254.clj",657,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51460,null,1558370031);
var state_51495__$1 = state_51495;
var statearr_51506_51661 = state_51495__$1;
(statearr_51506_51661[(2)] = inst_51461);

(statearr_51506_51661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (12))){
var inst_51481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51482 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_51483 = (new cljs.core.PersistentVector(null,2,(5),inst_51481,inst_51482,null));
var inst_51484 = receive_event_msg_BANG_.call(null,inst_51483);
var state_51495__$1 = state_51495;
var statearr_51507_51662 = state_51495__$1;
(statearr_51507_51662[(2)] = inst_51484);

(statearr_51507_51662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (2))){
var inst_51454 = (state_51495[(7)]);
var inst_51446 = (state_51495[(2)]);
var inst_51450 = cljs.core.deref.call(null,conns_);
var inst_51451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51452 = [conn_type,uid,client_id];
var inst_51453 = (new cljs.core.PersistentVector(null,3,(5),inst_51451,inst_51452,null));
var inst_51454__$1 = cljs.core.get_in.call(null,inst_51450,inst_51453);
var inst_51455 = cljs.core.nth.call(null,inst_51454__$1,(0),null);
var inst_51456 = cljs.core.nth.call(null,inst_51454__$1,(1),null);
var inst_51457 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_51495__$1 = (function (){var statearr_51508 = state_51495;
(statearr_51508[(7)] = inst_51454__$1);

(statearr_51508[(8)] = inst_51456);

(statearr_51508[(11)] = inst_51446);

(statearr_51508[(10)] = inst_51455);

return statearr_51508;
})();
if(cljs.core.truth_(inst_51457)){
var statearr_51509_51663 = state_51495__$1;
(statearr_51509_51663[(1)] = (3));

} else {
var statearr_51510_51664 = state_51495__$1;
(statearr_51510_51664[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (11))){
var inst_51490 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51511_51665 = state_51495__$1;
(statearr_51511_51665[(2)] = inst_51490);

(statearr_51511_51665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (9))){
var inst_51454 = (state_51495[(7)]);
var inst_51456 = (state_51495[(8)]);
var inst_51472 = (state_51495[(9)]);
var inst_51455 = (state_51495[(10)]);
var inst_51474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51475 = [conn_type,uid];
var inst_51476 = (new cljs.core.PersistentVector(null,2,(5),inst_51474,inst_51475,null));
var inst_51477 = (function (){var vec__51447 = inst_51454;
var __QMARK_sch = inst_51455;
var udt_t1 = inst_51456;
var disconnect_QMARK_ = inst_51472;
return ((function (vec__51447,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_51454,inst_51456,inst_51472,inst_51455,inst_51474,inst_51475,inst_51476,state_val_51496,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__51447,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_51454,inst_51456,inst_51472,inst_51455,inst_51474,inst_51475,inst_51476,state_val_51496,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_51478 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_51476,inst_51477);
var inst_51479 = upd_connected_uid_BANG_.call(null,uid);
var state_51495__$1 = (function (){var statearr_51512 = state_51495;
(statearr_51512[(12)] = inst_51478);

return statearr_51512;
})();
if(cljs.core.truth_(inst_51479)){
var statearr_51513_51666 = state_51495__$1;
(statearr_51513_51666[(1)] = (12));

} else {
var statearr_51514_51667 = state_51495__$1;
(statearr_51514_51667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (5))){
var inst_51456 = (state_51495[(8)]);
var inst_51464 = (state_51495[(2)]);
var inst_51465 = cljs.core._EQ_.call(null,inst_51456,udt_close);
var state_51495__$1 = (function (){var statearr_51515 = state_51495;
(statearr_51515[(13)] = inst_51464);

return statearr_51515;
})();
if(inst_51465){
var statearr_51516_51668 = state_51495__$1;
(statearr_51516_51668[(1)] = (6));

} else {
var statearr_51517_51669 = state_51495__$1;
(statearr_51517_51669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (14))){
var inst_51487 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51518_51670 = state_51495__$1;
(statearr_51518_51670[(2)] = inst_51487);

(statearr_51518_51670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (10))){
var state_51495__$1 = state_51495;
var statearr_51519_51671 = state_51495__$1;
(statearr_51519_51671[(2)] = null);

(statearr_51519_51671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51496 === (8))){
var inst_51493 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51495__$1,inst_51493);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__46808__auto__,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51520[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51520[(1)] = (1));

return statearr_51520;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51495){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51521){if((e51521 instanceof Object)){
var ex__46812__auto__ = e51521;
var statearr_51522_51672 = state_51495;
(statearr_51522_51672[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51673 = state_51495;
state_51495 = G__51673;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51495){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51495);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__46900__auto__ = (function (){var statearr_51523 = f__46899__auto__.call(null);
(statearr_51523[(6)] = c__46898__auto__);

return statearr_51523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__46898__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",679,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1359042316);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__51240,map__51243,map__51243__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq51237){
var G__51238 = cljs.core.first.call(null,seq51237);
var seq51237__$1 = cljs.core.next.call(null,seq51237);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51238,seq51237__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",685,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1846450050);

var seq__51674 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__51675 = null;
var count__51676 = (0);
var i__51677 = (0);
while(true){
if((i__51677 < count__51676)){
var vec__51678 = cljs.core._nth.call(null,chunk__51675,i__51677);
var client_id = cljs.core.nth.call(null,vec__51678,(0),null);
var vec__51681 = cljs.core.nth.call(null,vec__51678,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__51681,(0),null);
var _udt = cljs.core.nth.call(null,vec__51681,(1),null);
var temp__5457__auto___51690 = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto___51690)){
var sch_51691 = temp__5457__auto___51690;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_51691,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__51692 = seq__51674;
var G__51693 = chunk__51675;
var G__51694 = count__51676;
var G__51695 = (i__51677 + (1));
seq__51674 = G__51692;
chunk__51675 = G__51693;
count__51676 = G__51694;
i__51677 = G__51695;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51674);
if(temp__5457__auto__){
var seq__51674__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51674__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__51674__$1);
var G__51696 = cljs.core.chunk_rest.call(null,seq__51674__$1);
var G__51697 = c__41600__auto__;
var G__51698 = cljs.core.count.call(null,c__41600__auto__);
var G__51699 = (0);
seq__51674 = G__51696;
chunk__51675 = G__51697;
count__51676 = G__51698;
i__51677 = G__51699;
continue;
} else {
var vec__51684 = cljs.core.first.call(null,seq__51674__$1);
var client_id = cljs.core.nth.call(null,vec__51684,(0),null);
var vec__51687 = cljs.core.nth.call(null,vec__51684,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__51687,(0),null);
var _udt = cljs.core.nth.call(null,vec__51687,(1),null);
var temp__5457__auto___51700__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto___51700__$1)){
var sch_51701 = temp__5457__auto___51700__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_51701,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__51702 = cljs.core.next.call(null,seq__51674__$1);
var G__51703 = null;
var G__51704 = (0);
var G__51705 = (0);
seq__51674 = G__51702;
chunk__51675 = G__51703;
count__51676 = G__51704;
i__51677 = G__51705;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",695,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-608465620);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_51752){
var state_val_51753 = (state_51752[(1)]);
if((state_val_51753 === (7))){
var inst_51708 = (state_51752[(7)]);
var inst_51707 = (state_51752[(8)]);
var inst_51714 = (state_51752[(9)]);
var inst_51724 = (function (){var n = inst_51707;
var client_ids_satisfied = inst_51708;
var _QMARK_pulled = inst_51714;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_51708,inst_51707,inst_51714,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__51723){
var vec__51754 = p__51723;
var _QMARK_sch = cljs.core.nth.call(null,vec__51754,(0),null);
var _udt = cljs.core.nth.call(null,vec__51754,(1),null);
var sent_QMARK_ = (function (){var temp__5457__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto__)){
var sch = temp__5457__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_51708,inst_51707,inst_51714,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_51725 = cljs.core.PersistentHashSet.EMPTY;
var inst_51726 = cljs.core.reduce_kv.call(null,inst_51724,inst_51725,inst_51714);
var state_51752__$1 = state_51752;
var statearr_51757_51787 = state_51752__$1;
(statearr_51757_51787[(2)] = inst_51726);

(statearr_51757_51787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (1))){
var inst_51706 = cljs.core.PersistentHashSet.EMPTY;
var inst_51707 = (0);
var inst_51708 = inst_51706;
var state_51752__$1 = (function (){var statearr_51758 = state_51752;
(statearr_51758[(7)] = inst_51708);

(statearr_51758[(8)] = inst_51707);

return statearr_51758;
})();
var statearr_51759_51788 = state_51752__$1;
(statearr_51759_51788[(2)] = null);

(statearr_51759_51788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (4))){
var state_51752__$1 = state_51752;
var statearr_51760_51789 = state_51752__$1;
(statearr_51760_51789[(2)] = true);

(statearr_51760_51789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (15))){
var inst_51745 = (state_51752[(2)]);
var state_51752__$1 = state_51752;
var statearr_51761_51790 = state_51752__$1;
(statearr_51761_51790[(2)] = inst_51745);

(statearr_51761_51790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (13))){
var inst_51731 = (state_51752[(10)]);
var inst_51736 = cljs.core.rand_int.call(null,inst_51731);
var inst_51737 = (inst_51731 + inst_51736);
var inst_51738 = cljs.core.async.timeout.call(null,inst_51737);
var state_51752__$1 = state_51752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51752__$1,(16),inst_51738);
} else {
if((state_val_51753 === (6))){
var inst_51714 = (state_51752[(9)]);
var inst_51721 = (state_51752[(2)]);
var state_51752__$1 = (function (){var statearr_51762 = state_51752;
(statearr_51762[(11)] = inst_51721);

return statearr_51762;
})();
if(cljs.core.truth_(inst_51714)){
var statearr_51763_51791 = state_51752__$1;
(statearr_51763_51791[(1)] = (7));

} else {
var statearr_51764_51792 = state_51752__$1;
(statearr_51764_51792[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (3))){
var inst_51750 = (state_51752[(2)]);
var state_51752__$1 = state_51752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51752__$1,inst_51750);
} else {
if((state_val_51753 === (12))){
var inst_51748 = (state_51752[(2)]);
var state_51752__$1 = state_51752;
var statearr_51765_51793 = state_51752__$1;
(statearr_51765_51793[(2)] = inst_51748);

(statearr_51765_51793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (2))){
var inst_51708 = (state_51752[(7)]);
var inst_51707 = (state_51752[(8)]);
var inst_51714 = (state_51752[(9)]);
var inst_51710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51711 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_51712 = (new cljs.core.PersistentVector(null,2,(5),inst_51710,inst_51711,null));
var inst_51713 = (function (){var n = inst_51707;
var client_ids_satisfied = inst_51708;
return ((function (n,client_ids_satisfied,inst_51708,inst_51707,inst_51714,inst_51710,inst_51711,inst_51712,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_51708,inst_51707,inst_51714,inst_51710,inst_51711,inst_51712,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__51766 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__51766,(0),null);
var udt = cljs.core.nth.call(null,vec__51766,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_51708,inst_51707,inst_51714,inst_51710,inst_51711,inst_51712,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_51708,inst_51707,inst_51714,inst_51710,inst_51711,inst_51712,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_51714__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_51712,inst_51713);
var inst_51715 = (function (){var n = inst_51707;
var client_ids_satisfied = inst_51708;
var _QMARK_pulled = inst_51714__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_51708,inst_51707,inst_51714,inst_51710,inst_51711,inst_51712,inst_51713,inst_51714__$1,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__40669__auto__ = (x == null);
if(or__40669__auto__){
return or__40669__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_51708,inst_51707,inst_51714,inst_51710,inst_51711,inst_51712,inst_51713,inst_51714__$1,state_val_51753,c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_51716 = inst_51715.call(null,inst_51714__$1);
var state_51752__$1 = (function (){var statearr_51769 = state_51752;
(statearr_51769[(9)] = inst_51714__$1);

return statearr_51769;
})();
if(cljs.core.truth_(inst_51716)){
var statearr_51770_51794 = state_51752__$1;
(statearr_51770_51794[(1)] = (4));

} else {
var statearr_51771_51795 = state_51752__$1;
(statearr_51771_51795[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (11))){
var state_51752__$1 = state_51752;
var statearr_51772_51796 = state_51752__$1;
(statearr_51772_51796[(2)] = null);

(statearr_51772_51796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (9))){
var inst_51708 = (state_51752[(7)]);
var inst_51731 = (state_51752[(10)]);
var inst_51707 = (state_51752[(8)]);
var inst_51729 = (state_51752[(2)]);
var inst_51730 = cljs.core.into.call(null,inst_51708,inst_51729);
var inst_51731__$1 = cljs.core.get.call(null,ms_backoffs,inst_51707);
var state_51752__$1 = (function (){var statearr_51773 = state_51752;
(statearr_51773[(10)] = inst_51731__$1);

(statearr_51773[(12)] = inst_51730);

return statearr_51773;
})();
if(cljs.core.truth_(inst_51731__$1)){
var statearr_51774_51797 = state_51752__$1;
(statearr_51774_51797[(1)] = (10));

} else {
var statearr_51775_51798 = state_51752__$1;
(statearr_51775_51798[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (5))){
var inst_51714 = (state_51752[(9)]);
var inst_51719 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",722,"([:or nil? map?] ?pulled)",inst_51714,null,null);
var state_51752__$1 = state_51752;
var statearr_51776_51799 = state_51752__$1;
(statearr_51776_51799[(2)] = inst_51719);

(statearr_51776_51799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (14))){
var state_51752__$1 = state_51752;
var statearr_51777_51800 = state_51752__$1;
(statearr_51777_51800[(2)] = null);

(statearr_51777_51800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (16))){
var inst_51707 = (state_51752[(8)]);
var inst_51730 = (state_51752[(12)]);
var inst_51740 = (state_51752[(2)]);
var inst_51741 = (inst_51707 + (1));
var inst_51707__$1 = inst_51741;
var inst_51708 = inst_51730;
var state_51752__$1 = (function (){var statearr_51778 = state_51752;
(statearr_51778[(7)] = inst_51708);

(statearr_51778[(13)] = inst_51740);

(statearr_51778[(8)] = inst_51707__$1);

return statearr_51778;
})();
var statearr_51779_51801 = state_51752__$1;
(statearr_51779_51801[(2)] = null);

(statearr_51779_51801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (10))){
var inst_51730 = (state_51752[(12)]);
var inst_51733 = cljs.core.complement.call(null,inst_51730);
var inst_51734 = taoensso.encore.rsome.call(null,inst_51733,client_ids_unsatisfied);
var state_51752__$1 = state_51752;
if(cljs.core.truth_(inst_51734)){
var statearr_51780_51802 = state_51752__$1;
(statearr_51780_51802[(1)] = (13));

} else {
var statearr_51781_51803 = state_51752__$1;
(statearr_51781_51803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51753 === (8))){
var state_51752__$1 = state_51752;
var statearr_51782_51804 = state_51752__$1;
(statearr_51782_51804[(2)] = null);

(statearr_51782_51804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__46808__auto__,c__46898__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto____0 = (function (){
var statearr_51783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51783[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto__);

(statearr_51783[(1)] = (1));

return statearr_51783;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto____1 = (function (state_51752){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51784){if((e51784 instanceof Object)){
var ex__46812__auto__ = e51784;
var statearr_51785_51805 = state_51752;
(statearr_51785_51805[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51806 = state_51752;
state_51752 = G__51806;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto__ = function(state_51752){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto____1.call(this,state_51752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__46900__auto__ = (function (){var statearr_51786 = f__46899__auto__.call(null);
(statearr_51786[(6)] = c__46898__auto__);

return statearr_51786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__46898__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__41402__auto__ = (((chsk == null))?null:chsk);
var m__41403__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,chsk);
} else {
var m__41403__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__41402__auto__ = (((chsk == null))?null:chsk);
var m__41403__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,chsk,reason);
} else {
var m__41403__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__41402__auto__ = (((chsk == null))?null:chsk);
var m__41403__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,chsk);
} else {
var m__41403__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__41402__auto__ = (((chsk == null))?null:chsk);
var m__41403__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,chsk,ev,opts);
} else {
var m__41403__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__51808 = arguments.length;
switch (G__51808) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",772,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1623864551);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",777,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,532477675);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,_QMARK_cb))].join('')),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5457__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto__)){
var cb_uuid = temp__5457__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5457__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__5457__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__51810 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__51810,(0),null);
var new_state = cljs.core.nth.call(null,vec__51810,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_51815 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51813){if((e51813 instanceof Error)){
var e = e51813;
return e;
} else {
throw e51813;

}
}})();
if((e_51815 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",824,"(map? state)",state,e_51815,null);
}

var e_51816 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51814){if((e51814 instanceof Error)){
var e = e51814;
return e;
} else {
throw e51814;

}
}})();
if((e_51816 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",825,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_51816,null);
}

if(cljs.core.truth_((function (){var or__40669__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_51821 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51817){if((e51817 instanceof Error)){
var e = e51817;
return e;
} else {
throw e51817;

}
}})();
if((e_51821 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",846,"(enc/chan? ?cb)",_QMARK_cb,e_51821,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__51818 = ev;
var ev_id = cljs.core.nth.call(null,vec__51818,(0),null);
var _ = cljs.core.nth.call(null,vec__51818,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__51818,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname.call(null,ev_id)),".cb"].join('')),reply], null));
});
;})(vec__51818,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",857,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,684557588);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",858,"(vector? clj)",clj,null,null));
var seq__51822 = cljs.core.seq.call(null,buffered_evs);
var chunk__51823 = null;
var count__51824 = (0);
var i__51825 = (0);
while(true){
if((i__51825 < count__51824)){
var ev = cljs.core._nth.call(null,chunk__51823,i__51825);
taoensso.sente.assert_event.call(null,ev);

var vec__51826_51832 = ev;
var id_51833 = cljs.core.nth.call(null,vec__51826_51832,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_51833),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__51834 = seq__51822;
var G__51835 = chunk__51823;
var G__51836 = count__51824;
var G__51837 = (i__51825 + (1));
seq__51822 = G__51834;
chunk__51823 = G__51835;
count__51824 = G__51836;
i__51825 = G__51837;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51822);
if(temp__5457__auto__){
var seq__51822__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51822__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__51822__$1);
var G__51838 = cljs.core.chunk_rest.call(null,seq__51822__$1);
var G__51839 = c__41600__auto__;
var G__51840 = cljs.core.count.call(null,c__41600__auto__);
var G__51841 = (0);
seq__51822 = G__51838;
chunk__51823 = G__51839;
count__51824 = G__51840;
i__51825 = G__51841;
continue;
} else {
var ev = cljs.core.first.call(null,seq__51822__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__51829_51842 = ev;
var id_51843 = cljs.core.nth.call(null,vec__51829_51842,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_51843),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__51844 = cljs.core.next.call(null,seq__51822__$1);
var G__51845 = null;
var G__51846 = (0);
var G__51847 = (0);
seq__51822 = G__51844;
chunk__51823 = G__51845;
count__51824 = G__51846;
i__51825 = G__51847;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__40657__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__40657__auto__){
var vec__51851 = x;
var x1 = cljs.core.nth.call(null,vec__51851,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__40657__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_51865 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51855){if((e51855 instanceof Error)){
var e = e51855;
return e;
} else {
throw e51855;

}
}})();
if((e_51865 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",872,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_51865,null);
}

var e_51866 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51856){if((e51856 instanceof Error)){
var e = e51856;
return e;
} else {
throw e51856;

}
}})();
if((e_51866 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",873,"(handshake? clj)",clj,e_51866,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",874,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1855937880);

var vec__51857 = clj;
var _ = cljs.core.nth.call(null,vec__51857,(0),null);
var vec__51860 = cljs.core.nth.call(null,vec__51857,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__51860,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__51860,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__51860,(2),null);
var map__51863 = chsk;
var map__51863__$1 = ((((!((map__51863 == null)))?((((map__51863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51863):map__51863);
var chs = cljs.core.get.call(null,map__51863__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__51863__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",893,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51857,_,vec__51860,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__51863,map__51863__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__51857,_,vec__51860,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__51863,map__51863__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1688431354);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__51857,_,vec__51860,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__51863,map__51863__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__51854_SHARP_){
return cljs.core.merge.call(null,p1__51854_SHARP_,new_state);
});})(vec__51857,_,vec__51860,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__51863,map__51863__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e51867){var e = e51867;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41357__auto__,k__41358__auto__){
var self__ = this;
var this__41357__auto____$1 = this;
return this__41357__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41358__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41359__auto__,k51874,else__41360__auto__){
var self__ = this;
var this__41359__auto____$1 = this;
var G__51878 = k51874;
var G__51878__$1 = (((G__51878 instanceof cljs.core.Keyword))?G__51878.fqn:null);
switch (G__51878__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51874,else__41360__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41371__auto__,writer__41372__auto__,opts__41373__auto__){
var self__ = this;
var this__41371__auto____$1 = this;
var pr_pair__41374__auto__ = ((function (this__41371__auto____$1){
return (function (keyval__41375__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,cljs.core.pr_writer,""," ","",opts__41373__auto__,keyval__41375__auto__);
});})(this__41371__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,pr_pair__41374__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__41373__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51873){
var self__ = this;
var G__51873__$1 = this;
return (new cljs.core.RecordIter((0),G__51873__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41355__auto__){
var self__ = this;
var this__41355__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41352__auto__){
var self__ = this;
var this__41352__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41361__auto__){
var self__ = this;
var this__41361__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41353__auto__){
var self__ = this;
var this__41353__auto____$1 = this;
var h__41125__auto__ = self__.__hash;
if(!((h__41125__auto__ == null))){
return h__41125__auto__;
} else {
var h__41125__auto____$1 = ((function (h__41125__auto__,this__41353__auto____$1){
return (function (coll__41354__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll.call(null,coll__41354__auto__));
});})(h__41125__auto__,this__41353__auto____$1))
.call(null,this__41353__auto____$1);
self__.__hash = h__41125__auto____$1;

return h__41125__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51875,other51876){
var self__ = this;
var this51875__$1 = this;
return (!((other51876 == null))) && ((this51875__$1.constructor === other51876.constructor)) && (cljs.core._EQ_.call(null,this51875__$1.client_id,other51876.client_id)) && (cljs.core._EQ_.call(null,this51875__$1.chs,other51876.chs)) && (cljs.core._EQ_.call(null,this51875__$1.params,other51876.params)) && (cljs.core._EQ_.call(null,this51875__$1.packer,other51876.packer)) && (cljs.core._EQ_.call(null,this51875__$1.url,other51876.url)) && (cljs.core._EQ_.call(null,this51875__$1.ws_kalive_ms,other51876.ws_kalive_ms)) && (cljs.core._EQ_.call(null,this51875__$1.state_,other51876.state_)) && (cljs.core._EQ_.call(null,this51875__$1.instance_handle_,other51876.instance_handle_)) && (cljs.core._EQ_.call(null,this51875__$1.retry_count_,other51876.retry_count_)) && (cljs.core._EQ_.call(null,this51875__$1.ever_opened_QMARK__,other51876.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this51875__$1.backoff_ms_fn,other51876.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this51875__$1.cbs_waiting_,other51876.cbs_waiting_)) && (cljs.core._EQ_.call(null,this51875__$1.socket_,other51876.socket_)) && (cljs.core._EQ_.call(null,this51875__$1.udt_last_comms_,other51876.udt_last_comms_)) && (cljs.core._EQ_.call(null,this51875__$1.__extmap,other51876.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41366__auto__,k__41367__auto__){
var self__ = this;
var this__41366__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__41367__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41366__auto____$1),self__.__meta),k__41367__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41367__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41364__auto__,k__41365__auto__,G__51873){
var self__ = this;
var this__41364__auto____$1 = this;
var pred__51879 = cljs.core.keyword_identical_QMARK_;
var expr__51880 = k__41365__auto__;
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__51880))){
return (new taoensso.sente.ChWebSocket(G__51873,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__51873,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__51873,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__51873,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__51873,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__51873,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__51873,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__51873,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__51873,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__51873,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__51873,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__51873,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__51873,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51879.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__51880))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__51873,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41365__auto__,G__51873),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41369__auto__){
var self__ = this;
var this__41369__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41356__auto__,G__51873){
var self__ = this;
var this__41356__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__51873,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41362__auto__,entry__41363__auto__){
var self__ = this;
var this__41362__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41363__auto__)){
return this__41362__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41363__auto__,(0)),cljs.core._nth.call(null,entry__41363__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41362__auto____$1,entry__41363__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__51868_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__51868_SHARP_,reason);
});})(chsk__$1))
);

var temp__5457__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__51882 = opts;
var map__51882__$1 = ((((!((map__51882 == null)))?((((map__51882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51882):map__51882);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__51882__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__51882__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__51882__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,ev,_QMARK_cb_uuid);
var temp__5457__auto___51961 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto___51961)){
var cb_uuid_51962 = temp__5457__auto___51961;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_51962], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51884){if((e51884 instanceof Error)){
var e = e51884;
return e;
} else {
throw e51884;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",963,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5457__auto___51963__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5457__auto___51963__$1)){
var timeout_ms_51964 = temp__5457__auto___51963__$1;
var c__46898__auto___51965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___51965,timeout_ms_51964,temp__5457__auto___51963__$1,cb_uuid_51962,temp__5457__auto___51961,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___51965,timeout_ms_51964,temp__5457__auto___51963__$1,cb_uuid_51962,temp__5457__auto___51961,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_51895){
var state_val_51896 = (state_51895[(1)]);
if((state_val_51896 === (1))){
var inst_51885 = cljs.core.async.timeout.call(null,timeout_ms_51964);
var state_51895__$1 = state_51895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51895__$1,(2),inst_51885);
} else {
if((state_val_51896 === (2))){
var inst_51888 = (state_51895[(7)]);
var inst_51887 = (state_51895[(2)]);
var inst_51888__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_51895__$1 = (function (){var statearr_51897 = state_51895;
(statearr_51897[(8)] = inst_51887);

(statearr_51897[(7)] = inst_51888__$1);

return statearr_51897;
})();
if(cljs.core.truth_(inst_51888__$1)){
var statearr_51898_51966 = state_51895__$1;
(statearr_51898_51966[(1)] = (3));

} else {
var statearr_51899_51967 = state_51895__$1;
(statearr_51899_51967[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (3))){
var inst_51888 = (state_51895[(7)]);
var inst_51890 = inst_51888.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_51895__$1 = state_51895;
var statearr_51900_51968 = state_51895__$1;
(statearr_51900_51968[(2)] = inst_51890);

(statearr_51900_51968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (4))){
var state_51895__$1 = state_51895;
var statearr_51901_51969 = state_51895__$1;
(statearr_51901_51969[(2)] = null);

(statearr_51901_51969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (5))){
var inst_51893 = (state_51895[(2)]);
var state_51895__$1 = state_51895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51895__$1,inst_51893);
} else {
return null;
}
}
}
}
}
});})(c__46898__auto___51965,timeout_ms_51964,temp__5457__auto___51963__$1,cb_uuid_51962,temp__5457__auto___51961,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__46808__auto__,c__46898__auto___51965,timeout_ms_51964,temp__5457__auto___51963__$1,cb_uuid_51962,temp__5457__auto___51961,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51902 = [null,null,null,null,null,null,null,null,null];
(statearr_51902[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51902[(1)] = (1));

return statearr_51902;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51895){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51903){if((e51903 instanceof Object)){
var ex__46812__auto__ = e51903;
var statearr_51904_51970 = state_51895;
(statearr_51904_51970[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51971 = state_51895;
state_51895 = G__51971;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51895){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___51965,timeout_ms_51964,temp__5457__auto___51963__$1,cb_uuid_51962,temp__5457__auto___51961,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__46900__auto__ = (function (){var statearr_51905 = f__46899__auto__.call(null);
(statearr_51905[(6)] = c__46898__auto___51965);

return statearr_51905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___51965,timeout_ms_51964,temp__5457__auto___51963__$1,cb_uuid_51962,temp__5457__auto___51961,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e51906){var e = e51906;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",975,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__51882,map__51882__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1599897657);

var temp__5457__auto___51972 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto___51972)){
var cb_uuid_51973 = temp__5457__auto___51972;
var cb_fn_STAR__51974 = (function (){var or__40669__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_51973);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51907){if((e51907 instanceof Error)){
var e__$1 = e51907;
return e__$1;
} else {
throw e51907;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",978,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__51974.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = (function (){var or__40669__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var WebSocket = temp__5457__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__5457__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1000,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-1085097240);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__51869_SHARP_){
return cljs.core.assoc.call(null,p1__51869_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e51908){var e = e51908;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",1014,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-1555590172);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__51909 = _QMARK_socket;
(G__51909["onerror"] = ((function (G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",1024,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e51910){var _ = e51910;
return ws_ev;
}})()], null);
});})(G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-836987656);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__51870_SHARP_){
return cljs.core.assoc.call(null,p1__51870_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
});})(G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

(G__51909["onmessage"] = ((function (G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__51911 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__51911,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__51911,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__40669__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
var temp__5455__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5455__auto__)){
var cb_uuid = temp__5455__auto__;
var temp__5455__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5455__auto____$1)){
var cb_fn = temp__5455__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1060,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5455__auto____$1,cb_uuid,temp__5455__auto__,or__40669__auto____$1,or__40669__auto__,ppstr,vec__51911,clj,_QMARK_cb_uuid,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5455__auto____$1,cb_uuid,temp__5455__auto__,or__40669__auto____$1,or__40669__auto__,ppstr,vec__51911,clj,_QMARK_cb_uuid,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-1381602591);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

(G__51909["onclose"] = ((function (G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init92783305977134254.clj",1082,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-1227440083);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__51871_SHARP_){
return cljs.core.assoc.call(null,p1__51871_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__51872_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__51872_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__51909,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

return G__51909;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
;
var temp__5457__auto___51975__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5457__auto___51975__$1)){
var ms_51976 = temp__5457__auto___51975__$1;
var c__46898__auto___51977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___51977,ms_51976,temp__5457__auto___51975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___51977,ms_51976,temp__5457__auto___51975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function (state_51941){
var state_val_51942 = (state_51941[(1)]);
if((state_val_51942 === (7))){
var inst_51937 = (state_51941[(2)]);
var state_51941__$1 = state_51941;
var statearr_51943_51978 = state_51941__$1;
(statearr_51943_51978[(2)] = inst_51937);

(statearr_51943_51978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (1))){
var state_51941__$1 = state_51941;
var statearr_51944_51979 = state_51941__$1;
(statearr_51944_51979[(2)] = null);

(statearr_51944_51979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (4))){
var inst_51918 = (state_51941[(2)]);
var inst_51919 = have_handle_QMARK_.call(null);
var state_51941__$1 = (function (){var statearr_51945 = state_51941;
(statearr_51945[(7)] = inst_51918);

return statearr_51945;
})();
if(cljs.core.truth_(inst_51919)){
var statearr_51946_51980 = state_51941__$1;
(statearr_51946_51980[(1)] = (5));

} else {
var statearr_51947_51981 = state_51941__$1;
(statearr_51947_51981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (6))){
var state_51941__$1 = state_51941;
var statearr_51948_51982 = state_51941__$1;
(statearr_51948_51982[(2)] = null);

(statearr_51948_51982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (3))){
var inst_51939 = (state_51941[(2)]);
var state_51941__$1 = state_51941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51941__$1,inst_51939);
} else {
if((state_val_51942 === (2))){
var inst_51915 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_51916 = cljs.core.async.timeout.call(null,ms_51976);
var state_51941__$1 = (function (){var statearr_51949 = state_51941;
(statearr_51949[(8)] = inst_51915);

return statearr_51949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51941__$1,(4),inst_51916);
} else {
if((state_val_51942 === (9))){
var state_51941__$1 = state_51941;
var statearr_51950_51983 = state_51941__$1;
(statearr_51950_51983[(2)] = null);

(statearr_51950_51983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (5))){
var inst_51915 = (state_51941[(8)]);
var inst_51921 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_51922 = cljs.core._EQ_.call(null,inst_51915,inst_51921);
var state_51941__$1 = state_51941;
if(inst_51922){
var statearr_51951_51984 = state_51941__$1;
(statearr_51951_51984[(1)] = (8));

} else {
var statearr_51952_51985 = state_51941__$1;
(statearr_51952_51985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (10))){
var inst_51933 = (state_51941[(2)]);
var state_51941__$1 = (function (){var statearr_51953 = state_51941;
(statearr_51953[(9)] = inst_51933);

return statearr_51953;
})();
var statearr_51954_51986 = state_51941__$1;
(statearr_51954_51986[(2)] = null);

(statearr_51954_51986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51942 === (8))){
var inst_51924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51925 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_51926 = (new cljs.core.PersistentVector(null,1,(5),inst_51924,inst_51925,null));
var inst_51927 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_51928 = [true];
var inst_51929 = cljs.core.PersistentHashMap.fromArrays(inst_51927,inst_51928);
var inst_51930 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_51926,inst_51929);
var state_51941__$1 = state_51941;
var statearr_51955_51987 = state_51941__$1;
(statearr_51955_51987[(2)] = inst_51930);

(statearr_51955_51987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__46898__auto___51977,ms_51976,temp__5457__auto___51975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
;
return ((function (switch__46808__auto__,c__46898__auto___51977,ms_51976,temp__5457__auto___51975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__46809__auto__ = null;
var taoensso$sente$state_machine__46809__auto____0 = (function (){
var statearr_51956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51956[(0)] = taoensso$sente$state_machine__46809__auto__);

(statearr_51956[(1)] = (1));

return statearr_51956;
});
var taoensso$sente$state_machine__46809__auto____1 = (function (state_51941){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51957){if((e51957 instanceof Object)){
var ex__46812__auto__ = e51957;
var statearr_51958_51988 = state_51941;
(statearr_51958_51988[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51989 = state_51941;
state_51941 = G__51989;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$state_machine__46809__auto__ = function(state_51941){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__46809__auto____1.call(this,state_51941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__46809__auto____0;
taoensso$sente$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__46809__auto____1;
return taoensso$sente$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___51977,ms_51976,temp__5457__auto___51975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
})();
var state__46900__auto__ = (function (){var statearr_51959 = f__46899__auto__.call(null);
(statearr_51959[(6)] = c__46898__auto___51977);

return statearr_51959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___51977,ms_51976,temp__5457__auto___51975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__41395__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__41395__auto__,writer__41396__auto__){
return cljs.core._write.call(null,writer__41396__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__51877){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__51877),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__51877),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__51877,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639))),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41357__auto__,k__41358__auto__){
var self__ = this;
var this__41357__auto____$1 = this;
return this__41357__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41358__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41359__auto__,k51997,else__41360__auto__){
var self__ = this;
var this__41359__auto____$1 = this;
var G__52001 = k51997;
var G__52001__$1 = (((G__52001 instanceof cljs.core.Keyword))?G__52001.fqn:null);
switch (G__52001__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51997,else__41360__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41371__auto__,writer__41372__auto__,opts__41373__auto__){
var self__ = this;
var this__41371__auto____$1 = this;
var pr_pair__41374__auto__ = ((function (this__41371__auto____$1){
return (function (keyval__41375__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,cljs.core.pr_writer,""," ","",opts__41373__auto__,keyval__41375__auto__);
});})(this__41371__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,pr_pair__41374__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__41373__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51996){
var self__ = this;
var G__51996__$1 = this;
return (new cljs.core.RecordIter((0),G__51996__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41355__auto__){
var self__ = this;
var this__41355__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41352__auto__){
var self__ = this;
var this__41352__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41361__auto__){
var self__ = this;
var this__41361__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41353__auto__){
var self__ = this;
var this__41353__auto____$1 = this;
var h__41125__auto__ = self__.__hash;
if(!((h__41125__auto__ == null))){
return h__41125__auto__;
} else {
var h__41125__auto____$1 = ((function (h__41125__auto__,this__41353__auto____$1){
return (function (coll__41354__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll.call(null,coll__41354__auto__));
});})(h__41125__auto__,this__41353__auto____$1))
.call(null,this__41353__auto____$1);
self__.__hash = h__41125__auto____$1;

return h__41125__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51998,other51999){
var self__ = this;
var this51998__$1 = this;
return (!((other51999 == null))) && ((this51998__$1.constructor === other51999.constructor)) && (cljs.core._EQ_.call(null,this51998__$1.client_id,other51999.client_id)) && (cljs.core._EQ_.call(null,this51998__$1.chs,other51999.chs)) && (cljs.core._EQ_.call(null,this51998__$1.params,other51999.params)) && (cljs.core._EQ_.call(null,this51998__$1.packer,other51999.packer)) && (cljs.core._EQ_.call(null,this51998__$1.url,other51999.url)) && (cljs.core._EQ_.call(null,this51998__$1.state_,other51999.state_)) && (cljs.core._EQ_.call(null,this51998__$1.instance_handle_,other51999.instance_handle_)) && (cljs.core._EQ_.call(null,this51998__$1.ever_opened_QMARK__,other51999.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this51998__$1.backoff_ms_fn,other51999.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this51998__$1.ajax_opts,other51999.ajax_opts)) && (cljs.core._EQ_.call(null,this51998__$1.curr_xhr_,other51999.curr_xhr_)) && (cljs.core._EQ_.call(null,this51998__$1.__extmap,other51999.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41366__auto__,k__41367__auto__){
var self__ = this;
var this__41366__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__41367__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41366__auto____$1),self__.__meta),k__41367__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41367__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41364__auto__,k__41365__auto__,G__51996){
var self__ = this;
var this__41364__auto____$1 = this;
var pred__52002 = cljs.core.keyword_identical_QMARK_;
var expr__52003 = k__41365__auto__;
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(G__51996,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__51996,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__51996,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__51996,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__51996,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__51996,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__51996,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__51996,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__51996,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__51996,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52002.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__52003))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__51996,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41365__auto__,G__51996),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41369__auto__){
var self__ = this;
var this__41369__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41356__auto__,G__51996){
var self__ = this;
var this__41356__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__51996,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41362__auto__,entry__41363__auto__){
var self__ = this;
var this__41362__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41363__auto__)){
return this__41362__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41363__auto__,(0)),cljs.core._nth.call(null,entry__41363__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41362__auto____$1,entry__41363__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__51990_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__51990_SHARP_,reason);
});})(chsk__$1))
);

var temp__5457__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__5457__auto__)){
var x = temp__5457__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__52005 = opts;
var map__52005__$1 = ((((!((map__52005 == null)))?((((map__52005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52005):map__52005);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__52005__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__52005__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__52005__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__40669__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__52007){
var map__52008 = p__52007;
var map__52008__$1 = ((((!((map__52008 == null)))?((((map__52008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52008):map__52008);
var _QMARK_error = cljs.core.get.call(null,map__52008__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__52008__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__52008,map__52008__$1,_QMARK_error,_QMARK_content,csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__51991_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__51991_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__52008,map__52008__$1,_QMARK_error,_QMARK_content,csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__52010 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__52010,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__52010,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1202,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__52010,resp_clj,___$1,map__52008,map__52008__$1,_QMARK_error,_QMARK_content,csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__52010,resp_clj,___$1,map__52008,map__52008__$1,_QMARK_error,_QMARK_content,csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1691100142);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__52010,resp_clj,___$1,map__52008,map__52008__$1,_QMARK_error,_QMARK_content,csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__51992_SHARP_){
return cljs.core.assoc.call(null,p1__51992_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__52010,resp_clj,___$1,map__52008,map__52008__$1,_QMARK_error,_QMARK_content,csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__52005,map__52005__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",1212,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,122878496);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1220,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-136540308);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__51993_SHARP_){
return cljs.core.assoc.call(null,p1__51993_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__40669__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__52013){
var map__52014 = p__52013;
var map__52014__$1 = ((((!((map__52014 == null)))?((((map__52014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52014):map__52014);
var _QMARK_error = cljs.core.get.call(null,map__52014__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__52014__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__52014,map__52014__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__51994_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__51994_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__52014,map__52014__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__52016 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__52016,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__52016,clj,handshake_QMARK_,map__52014,map__52014__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__51995_SHARP_){
return cljs.core.assoc.call(null,p1__51995_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__52016,clj,handshake_QMARK_,map__52014,map__52014__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__40669__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__41395__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__41395__auto__,writer__41396__auto__){
return cljs.core._write.call(null,writer__41396__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__52000){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__52000),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52000,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696))),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41357__auto__,k__41358__auto__){
var self__ = this;
var this__41357__auto____$1 = this;
return this__41357__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41358__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41359__auto__,k52021,else__41360__auto__){
var self__ = this;
var this__41359__auto____$1 = this;
var G__52025 = k52021;
var G__52025__$1 = (((G__52025 instanceof cljs.core.Keyword))?G__52025.fqn:null);
switch (G__52025__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52021,else__41360__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41371__auto__,writer__41372__auto__,opts__41373__auto__){
var self__ = this;
var this__41371__auto____$1 = this;
var pr_pair__41374__auto__ = ((function (this__41371__auto____$1){
return (function (keyval__41375__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,cljs.core.pr_writer,""," ","",opts__41373__auto__,keyval__41375__auto__);
});})(this__41371__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,pr_pair__41374__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__41373__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52020){
var self__ = this;
var G__52020__$1 = this;
return (new cljs.core.RecordIter((0),G__52020__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41355__auto__){
var self__ = this;
var this__41355__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41352__auto__){
var self__ = this;
var this__41352__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41361__auto__){
var self__ = this;
var this__41361__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41353__auto__){
var self__ = this;
var this__41353__auto____$1 = this;
var h__41125__auto__ = self__.__hash;
if(!((h__41125__auto__ == null))){
return h__41125__auto__;
} else {
var h__41125__auto____$1 = ((function (h__41125__auto__,this__41353__auto____$1){
return (function (coll__41354__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll.call(null,coll__41354__auto__));
});})(h__41125__auto__,this__41353__auto____$1))
.call(null,this__41353__auto____$1);
self__.__hash = h__41125__auto____$1;

return h__41125__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52022,other52023){
var self__ = this;
var this52022__$1 = this;
return (!((other52023 == null))) && ((this52022__$1.constructor === other52023.constructor)) && (cljs.core._EQ_.call(null,this52022__$1.ws_chsk_opts,other52023.ws_chsk_opts)) && (cljs.core._EQ_.call(null,this52022__$1.ajax_chsk_opts,other52023.ajax_chsk_opts)) && (cljs.core._EQ_.call(null,this52022__$1.state_,other52023.state_)) && (cljs.core._EQ_.call(null,this52022__$1.impl_,other52023.impl_)) && (cljs.core._EQ_.call(null,this52022__$1.__extmap,other52023.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41366__auto__,k__41367__auto__){
var self__ = this;
var this__41366__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__41367__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41366__auto____$1),self__.__meta),k__41367__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41367__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41364__auto__,k__41365__auto__,G__52020){
var self__ = this;
var this__41364__auto____$1 = this;
var pred__52026 = cljs.core.keyword_identical_QMARK_;
var expr__52027 = k__41365__auto__;
if(cljs.core.truth_(pred__52026.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__52027))){
return (new taoensso.sente.ChAutoSocket(G__52020,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52026.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__52027))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__52020,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52026.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__52027))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__52020,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52026.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__52027))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__52020,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41365__auto__,G__52020),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41369__auto__){
var self__ = this;
var this__41369__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41356__auto__,G__52020){
var self__ = this;
var this__41356__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__52020,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41362__auto__,entry__41363__auto__){
var self__ = this;
var this__41362__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41363__auto__)){
return this__41362__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41363__auto__,(0)),cljs.core._nth.call(null,entry__41363__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41362__auto____$1,entry__41363__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5455__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5455__auto__)){
var impl = temp__5455__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__52029 = opts;
var map__52029__$1 = ((((!((map__52029 == null)))?((((map__52029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52029):map__52029);
var _QMARK_cb = cljs.core.get.call(null,map__52029__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___52032 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___52032,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__5457__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
var temp__5457__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ever_opened_QMARK__ = temp__5457__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___52032,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1348,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5457__auto____$1,impl,temp__5457__auto__,downgraded_QMARK___52032,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5457__auto____$1,impl,temp__5457__auto__,downgraded_QMARK___52032,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-142583280);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___52032,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__40669__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__41395__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__41395__auto__,writer__41396__auto__){
return cljs.core._write.call(null,writer__41396__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__52024){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__52024),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__52024),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__52024),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__52024),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52024,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179))),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__52033 = protocol;
var G__52033__$1 = (((G__52033 instanceof cljs.core.Keyword))?G__52033.fqn:null);
switch (G__52033__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52034){if((e52034 instanceof Error)){
var e = e52034;
return e;
} else {
throw e52034;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1368,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__52035 = type;
var G__52035__$1 = (((G__52035 instanceof cljs.core.Keyword))?G__52035.fqn:null);
switch (G__52035__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__52036 = protocol__$2;
switch (G__52036) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52036)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52035__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52057 = arguments.length;
var i__41949__auto___52058 = (0);
while(true){
if((i__41949__auto___52058 < len__41948__auto___52057)){
args__41955__auto__.push((arguments[i__41949__auto___52058]));

var G__52059 = (i__41949__auto___52058 + (1));
i__41949__auto___52058 = G__52059;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__52042){
var vec__52043 = p__52042;
var map__52046 = cljs.core.nth.call(null,vec__52043,(0),null);
var map__52046__$1 = ((((!((map__52046 == null)))?((((map__52046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52046):map__52046);
var opts = map__52046__$1;
var ajax_opts = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__40669__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__52043,(1),null);
var e_52060 = (function (){try{if(((function (vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52048){if((e52048 instanceof Error)){
var e = e52048;
return e;
} else {
throw e52048;

}
}})();
if((e_52060 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1410,"([:in #{:ws :ajax :auto}] type)",type,e_52060,null);
}

var e_52061 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52049){if((e52049 instanceof Error)){
var e = e52049;
return e;
} else {
throw e52049;

}
}})();
if((e_52061 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1411,"(enc/nblank-str? client-id)",client_id,e_52061,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1413,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,465182732);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1414,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1385590997);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__52050 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__40669__auto__ = path;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5455__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__40669__auto__ = protocol;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__40669__auto__ = host;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__52050,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__52050,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__52050,ws_url,ajax_url,vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__52050,ws_url,ajax_url,vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__52053 = type;
var G__52053__$1 = (((G__52053 instanceof cljs.core.Keyword))?G__52053.fqn:null);
switch (G__52053__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52053__$1)].join('')));

}
})());
var temp__5455__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5455__auto__)){
var chsk = temp__5455__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5455__auto__,packer__$1,vec__52050,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__52054 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__52054,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__52054,(1),null);
var ev__$1 = vec__52054;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5455__auto__,packer__$1,vec__52050,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init92783305977134254.clj",1502,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5455__auto__,packer__$1,vec__52050,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5455__auto__,packer__$1,vec__52050,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__52043,map__52046,map__52046__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1146009772);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq52040){
var G__52041 = cljs.core.first.call(null,seq52040);
var seq52040__$1 = cljs.core.next.call(null,seq52040);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52041,seq52040__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__52063 = opts;
var map__52063__$1 = ((((!((map__52063 == null)))?((((map__52063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52063):map__52063);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__46898__auto___52140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_52110){
var state_val_52111 = (state_52110[(1)]);
if((state_val_52111 === (7))){
var inst_52106 = (state_52110[(2)]);
var state_52110__$1 = state_52110;
var statearr_52112_52141 = state_52110__$1;
(statearr_52112_52141[(2)] = inst_52106);

(statearr_52112_52141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (1))){
var state_52110__$1 = state_52110;
var statearr_52113_52142 = state_52110__$1;
(statearr_52113_52142[(2)] = null);

(statearr_52113_52142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (4))){
var inst_52073 = (state_52110[(7)]);
var inst_52075 = (state_52110[(8)]);
var inst_52076 = (state_52110[(9)]);
var inst_52073__$1 = (state_52110[(2)]);
var inst_52074 = cljs.core.nth.call(null,inst_52073__$1,(0),null);
var inst_52075__$1 = cljs.core.nth.call(null,inst_52073__$1,(1),null);
var inst_52076__$1 = cljs.core._EQ_.call(null,inst_52075__$1,ch_ctrl);
var state_52110__$1 = (function (){var statearr_52114 = state_52110;
(statearr_52114[(7)] = inst_52073__$1);

(statearr_52114[(8)] = inst_52075__$1);

(statearr_52114[(10)] = inst_52074);

(statearr_52114[(9)] = inst_52076__$1);

return statearr_52114;
})();
if(inst_52076__$1){
var statearr_52115_52143 = state_52110__$1;
(statearr_52115_52143[(1)] = (5));

} else {
var statearr_52116_52144 = state_52110__$1;
(statearr_52116_52144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (15))){
var inst_52074 = (state_52110[(10)]);
var state_52110__$1 = state_52110;
var statearr_52117_52145 = state_52110__$1;
(statearr_52117_52145[(2)] = inst_52074);

(statearr_52117_52145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (13))){
var inst_52092 = (state_52110[(2)]);
var state_52110__$1 = state_52110;
var statearr_52118_52146 = state_52110__$1;
(statearr_52118_52146[(2)] = inst_52092);

(statearr_52118_52146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (6))){
var inst_52074 = (state_52110[(10)]);
var inst_52081 = (inst_52074 == null);
var inst_52082 = cljs.core.not.call(null,inst_52081);
var state_52110__$1 = state_52110;
if(inst_52082){
var statearr_52119_52147 = state_52110__$1;
(statearr_52119_52147[(1)] = (8));

} else {
var statearr_52120_52148 = state_52110__$1;
(statearr_52120_52148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (3))){
var inst_52108 = (state_52110[(2)]);
var state_52110__$1 = state_52110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52110__$1,inst_52108);
} else {
if((state_val_52111 === (12))){
var state_52110__$1 = state_52110;
var statearr_52121_52149 = state_52110__$1;
(statearr_52121_52149[(2)] = false);

(statearr_52121_52149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (2))){
var inst_52069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52070 = [ch_recv,ch_ctrl];
var inst_52071 = (new cljs.core.PersistentVector(null,2,(5),inst_52069,inst_52070,null));
var state_52110__$1 = state_52110;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52110__$1,(4),inst_52071);
} else {
if((state_val_52111 === (11))){
var state_52110__$1 = state_52110;
var statearr_52122_52150 = state_52110__$1;
(statearr_52122_52150[(2)] = true);

(statearr_52122_52150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (9))){
var state_52110__$1 = state_52110;
var statearr_52123_52151 = state_52110__$1;
(statearr_52123_52151[(2)] = false);

(statearr_52123_52151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (5))){
var state_52110__$1 = state_52110;
var statearr_52124_52152 = state_52110__$1;
(statearr_52124_52152[(2)] = null);

(statearr_52124_52152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (14))){
var inst_52074 = (state_52110[(10)]);
var inst_52097 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52074);
var state_52110__$1 = state_52110;
var statearr_52125_52153 = state_52110__$1;
(statearr_52125_52153[(2)] = inst_52097);

(statearr_52125_52153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (16))){
var inst_52073 = (state_52110[(7)]);
var inst_52075 = (state_52110[(8)]);
var inst_52074 = (state_52110[(10)]);
var inst_52076 = (state_52110[(9)]);
var inst_52100 = (state_52110[(2)]);
var inst_52101 = cljs.core.get.call(null,inst_52100,new cljs.core.Keyword(null,"event","event",301435442));
var inst_52102 = (function (){var vec__52066 = inst_52073;
var v = inst_52074;
var p = inst_52075;
var stop_QMARK_ = inst_52076;
var map__52079 = inst_52100;
var event_msg = inst_52100;
var event = inst_52101;
return ((function (vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init92783305977134254.clj",1529,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-639830113);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52128){if((e52128 instanceof Error)){
var e = e52128;
return e;
} else {
throw e52128;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1532,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52129){if((e52129 instanceof Error)){
var e = e52129;
return e;
} else {
throw e52129;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1533,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e52126){if((e52126 instanceof Error)){
var e1 = e52126;
try{var temp__5455__auto__ = error_handler;
if(cljs.core.truth_(temp__5455__auto__)){
var eh = temp__5455__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",1538,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5455__auto__,e1,vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5455__auto__,e1,vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1425267822);
}
}catch (e52127){if((e52127 instanceof Error)){
var e2 = e52127;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init92783305977134254.clj",1539,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-716027753);
} else {
throw e52127;

}
}} else {
throw e52126;

}
}});
;})(vec__52066,v,p,stop_QMARK_,map__52079,event_msg,event,inst_52073,inst_52075,inst_52074,inst_52076,inst_52100,inst_52101,state_val_52111,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_52103 = execute1.call(null,inst_52102);
var state_52110__$1 = (function (){var statearr_52130 = state_52110;
(statearr_52130[(11)] = inst_52103);

return statearr_52130;
})();
var statearr_52131_52154 = state_52110__$1;
(statearr_52131_52154[(2)] = null);

(statearr_52131_52154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (10))){
var inst_52095 = (state_52110[(2)]);
var state_52110__$1 = state_52110;
if(cljs.core.truth_(inst_52095)){
var statearr_52132_52155 = state_52110__$1;
(statearr_52132_52155[(1)] = (14));

} else {
var statearr_52133_52156 = state_52110__$1;
(statearr_52133_52156[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52111 === (8))){
var inst_52074 = (state_52110[(10)]);
var inst_52084 = inst_52074.cljs$lang$protocol_mask$partition0$;
var inst_52085 = (inst_52084 & (64));
var inst_52086 = inst_52074.cljs$core$ISeq$;
var inst_52087 = (cljs.core.PROTOCOL_SENTINEL === inst_52086);
var inst_52088 = (inst_52085) || (inst_52087);
var state_52110__$1 = state_52110;
if(cljs.core.truth_(inst_52088)){
var statearr_52134_52157 = state_52110__$1;
(statearr_52134_52157[(1)] = (11));

} else {
var statearr_52135_52158 = state_52110__$1;
(statearr_52135_52158[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__46808__auto__,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto____0 = (function (){
var statearr_52136 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52136[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto__);

(statearr_52136[(1)] = (1));

return statearr_52136;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto____1 = (function (state_52110){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_52110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e52137){if((e52137 instanceof Object)){
var ex__46812__auto__ = e52137;
var statearr_52138_52159 = state_52110;
(statearr_52138_52159[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52160 = state_52110;
state_52110 = G__52160;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto__ = function(state_52110){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto____1.call(this,state_52110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__46900__auto__ = (function (){var statearr_52139 = f__46899__auto__.call(null);
(statearr_52139[(6)] = c__46898__auto___52140);

return statearr_52139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___52140,map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__52063,map__52063__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52170 = arguments.length;
var i__41949__auto___52171 = (0);
while(true){
if((i__41949__auto___52171 < len__41948__auto___52170)){
args__41955__auto__.push((arguments[i__41949__auto___52171]));

var G__52172 = (i__41949__auto___52171 + (1));
i__41949__auto___52171 = G__52172;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__52164){
var vec__52165 = p__52164;
var map__52168 = cljs.core.nth.call(null,vec__52165,(0),null);
var map__52168__$1 = ((((!((map__52168 == null)))?((((map__52168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52168):map__52168);
var opts = map__52168__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__52168__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__52168__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__52168__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq52161){
var G__52162 = cljs.core.first.call(null,seq52161);
var seq52161__$1 = cljs.core.next.call(null,seq52161);
var G__52163 = cljs.core.first.call(null,seq52161__$1);
var seq52161__$2 = cljs.core.next.call(null,seq52161__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52162,G__52163,seq52161__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52182 = arguments.length;
var i__41949__auto___52183 = (0);
while(true){
if((i__41949__auto___52183 < len__41948__auto___52182)){
args__41955__auto__.push((arguments[i__41949__auto___52183]));

var G__52184 = (i__41949__auto___52183 + (1));
i__41949__auto___52183 = G__52184;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__52176){
var vec__52177 = p__52176;
var map__52180 = cljs.core.nth.call(null,vec__52177,(0),null);
var map__52180__$1 = ((((!((map__52180 == null)))?((((map__52180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52180):map__52180);
var opts = map__52180__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__52180__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__52180__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq52173){
var G__52174 = cljs.core.first.call(null,seq52173);
var seq52173__$1 = cljs.core.next.call(null,seq52173);
var G__52175 = cljs.core.first.call(null,seq52173__$1);
var seq52173__$2 = cljs.core.next.call(null,seq52173__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52174,G__52175,seq52173__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__52185,websocket_QMARK_){
var map__52186 = p__52185;
var map__52186__$1 = ((((!((map__52186 == null)))?((((map__52186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52186):map__52186);
var location = map__52186__$1;
var protocol = cljs.core.get.call(null,map__52186__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__52186__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__52186__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__40669__auto__ = path;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map
