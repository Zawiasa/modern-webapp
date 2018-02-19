// Compiled by ClojureScript 1.7.122 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__30166 = x;
var ev_id = cljs.core.nth.call(null,vec__30166,(0),null);
var _ = cljs.core.nth.call(null,vec__30166,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__30168 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__30168) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__21693__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21693__auto__){
var and__21693__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__21693__auto____$1)){
var map__30172 = x;
var map__30172__$1 = ((((!((map__30172 == null)))?((((map__30172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30172):map__30172);
var ch_recv = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__21693__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__21693__auto____$2)){
var and__21693__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__21693__auto____$3){
var and__21693__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__21693__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__21693__auto____$4;
}
} else {
return and__21693__auto____$3;
}
} else {
return and__21693__auto____$2;
}
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,taoensso.encore.hcond.call(null,false,"taoensso.sente",179,(new cljs.core.Delay((function (){
return pstr;
}),null)),new cljs.core.Symbol(null,"pstr","pstr",221763868,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)));
}catch (e30175){var t = e30175;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args30176 = [];
var len__22763__auto___30179 = arguments.length;
var i__22764__auto___30180 = (0);
while(true){
if((i__22764__auto___30180 < len__22763__auto___30179)){
args30176.push((arguments[i__22764__auto___30180]));

var G__30181 = (i__22764__auto___30180 + (1));
i__22764__auto___30180 = G__30181;
continue;
} else {
}
break;
}

var G__30178 = args30176.length;
switch (G__30178) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30176.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30184 = arguments.length;
var i__22764__auto___30185 = (0);
while(true){
if((i__22764__auto___30185 < len__22763__auto___30184)){
args__22770__auto__.push((arguments[i__22764__auto___30185]));

var G__30186 = (i__22764__auto___30185 + (1));
i__22764__auto___30185 = G__30186;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq30183){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30183));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return prefixed_pstr;
}),null)),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__30190 = prefix;
switch (G__30190) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__30189 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__30189,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30189,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__30189,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__30189,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__22360__auto__ = (((chsk == null))?null:chsk);
var m__22361__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,chsk);
} else {
var m__22361__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__22360__auto__ = (((chsk == null))?null:chsk);
var m__22361__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,chsk);
} else {
var m__22361__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__22360__auto__ = (((chsk == null))?null:chsk);
var m__22361__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,chsk);
} else {
var m__22361__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__22360__auto__ = (((chsk == null))?null:chsk);
var m__22361__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,chsk,ev,opts);
} else {
var m__22361__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args30192 = [];
var len__22763__auto___30195 = arguments.length;
var i__22764__auto___30196 = (0);
while(true){
if((i__22764__auto___30196 < len__22763__auto___30195)){
args30192.push((arguments[i__22764__auto___30196]));

var G__30197 = (i__22764__auto___30196 + (1));
i__22764__auto___30196 = G__30197;
continue;
} else {
}
break;
}

var G__30194 = args30192.length;
switch (G__30194) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30192.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__21705__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__21705__auto__){
return or__21705__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__21705__auto__ = (_QMARK_cb == null);
if(or__21705__auto__){
return or__21705__auto__;
} else {
var or__21705__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__21705__auto____$1){
return or__21705__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4425__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto__)){
var cb_uuid = temp__4425__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4425__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4425__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__30199,merge_state){
var map__30203 = p__30199;
var map__30203__$1 = ((((!((map__30203 == null)))?((((map__30203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30203):map__30203);
var chsk = map__30203__$1;
var chs = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__30205 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__30203,map__30203__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__21693__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__21693__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__30203,map__30203__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__30205,(0),null);
var new_state = cljs.core.nth.call(null,vec__30205,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
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
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return _QMARK_cb;
}),null)),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),taoensso.encore.chan_QMARK_,new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null));


taoensso.sente.assert_event.call(null,ev);

var vec__30207 = ev;
var ev_id = cljs.core.nth.call(null,vec__30207,(0),null);
var _ = cljs.core.nth.call(null,vec__30207,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__30207,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__30207,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",711,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__30212 = cljs.core.seq.call(null,buffered_evs);
var chunk__30213 = null;
var count__30214 = (0);
var i__30215 = (0);
while(true){
if((i__30215 < count__30214)){
var ev = cljs.core._nth.call(null,chunk__30213,i__30215);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__30216 = seq__30212;
var G__30217 = chunk__30213;
var G__30218 = count__30214;
var G__30219 = (i__30215 + (1));
seq__30212 = G__30216;
chunk__30213 = G__30217;
count__30214 = G__30218;
i__30215 = G__30219;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30212);
if(temp__4425__auto__){
var seq__30212__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30212__$1)){
var c__22508__auto__ = cljs.core.chunk_first.call(null,seq__30212__$1);
var G__30220 = cljs.core.chunk_rest.call(null,seq__30212__$1);
var G__30221 = c__22508__auto__;
var G__30222 = cljs.core.count.call(null,c__22508__auto__);
var G__30223 = (0);
seq__30212 = G__30220;
chunk__30213 = G__30221;
count__30214 = G__30222;
i__30215 = G__30223;
continue;
} else {
var ev = cljs.core.first.call(null,seq__30212__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__30224 = cljs.core.next.call(null,seq__30212__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__30212 = G__30224;
chunk__30213 = G__30225;
count__30214 = G__30226;
i__30215 = G__30227;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__30230 = clj;
var _ = cljs.core.nth.call(null,vec__30230,(0),null);
var vec__30231 = cljs.core.nth.call(null,vec__30230,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__30231,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__30231,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__30231,(2),null);
var handshake_ev = vec__30230;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__30230,_,vec__30231,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__30230,_,vec__30231,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30237 = arguments.length;
var i__22764__auto___30238 = (0);
while(true){
if((i__22764__auto___30238 < len__22763__auto___30237)){
args__22770__auto__.push((arguments[i__22764__auto___30238]));

var G__30239 = (i__22764__auto___30238 + (1));
i__22764__auto___30238 = G__30239;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,nattempt,p__30235){
var vec__30236 = p__30235;
var backoff_ms_fn = cljs.core.nth.call(null,vec__30236,(0),null);
var timeout_ms = backoff_ms_fn.call(null,(function (){var or__21705__auto__ = nattempt;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return (0);
}
})());
return window.setTimeout(nullary_f,timeout_ms);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq30232){
var G__30233 = cljs.core.first.call(null,seq30232);
var seq30232__$1 = cljs.core.next.call(null,seq30232);
var G__30234 = cljs.core.first.call(null,seq30232__$1);
var seq30232__$2 = cljs.core.next.call(null,seq30232__$1);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30233,G__30234,seq30232__$2);
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
taoensso.sente.ChWebSocket = (function (client_id,url,params,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.params = params;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22319__auto__,k__22320__auto__){
var self__ = this;
var this__22319__auto____$1 = this;
return cljs.core._lookup.call(null,this__22319__auto____$1,k__22320__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22321__auto__,k30241,else__22322__auto__){
var self__ = this;
var this__22321__auto____$1 = this;
var G__30243 = (((k30241 instanceof cljs.core.Keyword))?k30241.fqn:null);
switch (G__30243) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30241,else__22322__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22333__auto__,writer__22334__auto__,opts__22335__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
var pr_pair__22336__auto__ = ((function (this__22333__auto____$1){
return (function (keyval__22337__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22334__auto__,cljs.core.pr_writer,""," ","",opts__22335__auto__,keyval__22337__auto__);
});})(this__22333__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22334__auto__,pr_pair__22336__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__22335__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30240){
var self__ = this;
var G__30240__$1 = this;
return (new cljs.core.RecordIter((0),G__30240__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22317__auto__){
var self__ = this;
var this__22317__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22313__auto__){
var self__ = this;
var this__22313__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22323__auto__){
var self__ = this;
var this__22323__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22314__auto__){
var self__ = this;
var this__22314__auto____$1 = this;
var h__22140__auto__ = self__.__hash;
if(!((h__22140__auto__ == null))){
return h__22140__auto__;
} else {
var h__22140__auto____$1 = cljs.core.hash_imap.call(null,this__22314__auto____$1);
self__.__hash = h__22140__auto____$1;

return h__22140__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22315__auto__,other__22316__auto__){
var self__ = this;
var this__22315__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21693__auto__ = other__22316__auto__;
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = (this__22315__auto____$1.constructor === other__22316__auto__.constructor);
if(and__21693__auto____$1){
return cljs.core.equiv_map.call(null,this__22315__auto____$1,other__22316__auto__);
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22328__auto__,k__22329__auto__){
var self__ = this;
var this__22328__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22329__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22328__auto____$1),self__.__meta),k__22329__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22329__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22326__auto__,k__22327__auto__,G__30240){
var self__ = this;
var this__22326__auto____$1 = this;
var pred__30244 = cljs.core.keyword_identical_QMARK_;
var expr__30245 = k__22327__auto__;
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__30245))){
return (new taoensso.sente.ChWebSocket(G__30240,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__30240,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__30240,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,G__30240,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,G__30240,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,G__30240,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,G__30240,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__30240,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__30240,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__30240,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__30240,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__30240,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30244.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__30245))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__30240,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22327__auto__,G__30240),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22331__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22318__auto__,G__30240){
var self__ = this;
var this__22318__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,G__30240,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22324__auto__,entry__22325__auto__){
var self__ = this;
var this__22324__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22325__auto__)){
return cljs.core._assoc.call(null,this__22324__auto____$1,cljs.core._nth.call(null,entry__22325__auto__,(0)),cljs.core._nth.call(null,entry__22325__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22324__auto____$1,entry__22325__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__30247){
var self__ = this;
var map__30248 = p__30247;
var map__30248__$1 = ((((!((map__30248 == null)))?((((map__30248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30248):map__30248);
var opts = map__30248__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___30282 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___30282)){
var cb_uuid_30283 = temp__4425__auto___30282;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_30283], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",777,(new cljs.core.Delay(((function (cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4425__auto___30284__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___30284__$1)){
var timeout_ms_30285 = temp__4425__auto___30284__$1;
var c__24785__auto___30286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___30286,timeout_ms_30285,temp__4425__auto___30284__$1,cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___30286,timeout_ms_30285,temp__4425__auto___30284__$1,cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_30260){
var state_val_30261 = (state_30260[(1)]);
if((state_val_30261 === (1))){
var inst_30250 = cljs.core.async.timeout.call(null,timeout_ms_30285);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(2),inst_30250);
} else {
if((state_val_30261 === (2))){
var inst_30253 = (state_30260[(7)]);
var inst_30252 = (state_30260[(2)]);
var inst_30253__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_30260__$1 = (function (){var statearr_30262 = state_30260;
(statearr_30262[(7)] = inst_30253__$1);

(statearr_30262[(8)] = inst_30252);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30253__$1)){
var statearr_30263_30287 = state_30260__$1;
(statearr_30263_30287[(1)] = (3));

} else {
var statearr_30264_30288 = state_30260__$1;
(statearr_30264_30288[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (3))){
var inst_30253 = (state_30260[(7)]);
var inst_30255 = inst_30253.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_30260__$1 = state_30260;
var statearr_30265_30289 = state_30260__$1;
(statearr_30265_30289[(2)] = inst_30255);

(statearr_30265_30289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (4))){
var state_30260__$1 = state_30260;
var statearr_30266_30290 = state_30260__$1;
(statearr_30266_30290[(2)] = null);

(statearr_30266_30290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (5))){
var inst_30258 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30260__$1,inst_30258);
} else {
return null;
}
}
}
}
}
});})(c__24785__auto___30286,timeout_ms_30285,temp__4425__auto___30284__$1,cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__24720__auto__,c__24785__auto___30286,timeout_ms_30285,temp__4425__auto___30284__$1,cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__24721__auto__ = null;
var taoensso$sente$state_machine__24721__auto____0 = (function (){
var statearr_30270 = [null,null,null,null,null,null,null,null,null];
(statearr_30270[(0)] = taoensso$sente$state_machine__24721__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var taoensso$sente$state_machine__24721__auto____1 = (function (state_30260){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_30260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e30271){if((e30271 instanceof Object)){
var ex__24724__auto__ = e30271;
var statearr_30272_30291 = state_30260;
(statearr_30272_30291[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30292 = state_30260;
state_30260 = G__30292;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
taoensso$sente$state_machine__24721__auto__ = function(state_30260){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__24721__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__24721__auto____1.call(this,state_30260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__24721__auto____0;
taoensso$sente$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__24721__auto____1;
return taoensso$sente$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___30286,timeout_ms_30285,temp__4425__auto___30284__$1,cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__24787__auto__ = (function (){var statearr_30273 = f__24786__auto__.call(null);
(statearr_30273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___30286);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___30286,timeout_ms_30285,temp__4425__auto___30284__$1,cb_uuid_30283,temp__4425__auto___30282,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e30274){if((e30274 instanceof Error)){
var e = e30274;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___30293 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___30293)){
var cb_uuid_30294 = temp__4425__auto___30293;
var cb_fn_STAR__30295 = (function (){var or__21705__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_30294);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",791,(new cljs.core.Delay(((function (or__21705__auto__,cb_uuid_30294,temp__4425__auto___30293,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(or__21705__auto__,cb_uuid_30294,temp__4425__auto___30293,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30248,map__30248__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__30295.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e30274;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__21705__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_,self__.backoff_ms_fn);
});})(WebSocket,temp__4425__auto__,chsk__$1))
;
var temp__4423__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e30278){if((e30278 instanceof Error)){
var e = e30278;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e30278;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var socket = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__30279 = socket;
(G__30279["onerror"] = ((function (G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__30279["onmessage"] = ((function (G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__30280 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__30280,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30280,(1),null);
var or__21705__auto__ = (function (){var and__21693__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__21693__auto__;
}
})();
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var temp__4423__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_uuid = temp__4423__auto____$1;
var temp__4423__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$2)){
var cb_fn = temp__4423__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__21705__auto__,ppstr,vec__30280,clj,_QMARK_cb_uuid,G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__21705__auto__,ppstr,vec__30280,clj,_QMARK_cb_uuid,G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__30279["onopen"] = ((function (G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__30279["onclose"] = ((function (G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__30279,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__30279;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4425__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__22353__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__22353__auto__,writer__22354__auto__){
return cljs.core._write.call(null,writer__22354__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,params,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChWebSocket(client_id,url,params,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__30242){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__30242),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__30242),null,cljs.core.dissoc.call(null,G__30242,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
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
taoensso.sente.ChAjaxSocket = (function (client_id,url,params,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.params = params;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22319__auto__,k__22320__auto__){
var self__ = this;
var this__22319__auto____$1 = this;
return cljs.core._lookup.call(null,this__22319__auto____$1,k__22320__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22321__auto__,k30297,else__22322__auto__){
var self__ = this;
var this__22321__auto____$1 = this;
var G__30299 = (((k30297 instanceof cljs.core.Keyword))?k30297.fqn:null);
switch (G__30299) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30297,else__22322__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22333__auto__,writer__22334__auto__,opts__22335__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
var pr_pair__22336__auto__ = ((function (this__22333__auto____$1){
return (function (keyval__22337__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22334__auto__,cljs.core.pr_writer,""," ","",opts__22335__auto__,keyval__22337__auto__);
});})(this__22333__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22334__auto__,pr_pair__22336__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__22335__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30296){
var self__ = this;
var G__30296__$1 = this;
return (new cljs.core.RecordIter((0),G__30296__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22317__auto__){
var self__ = this;
var this__22317__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22313__auto__){
var self__ = this;
var this__22313__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22323__auto__){
var self__ = this;
var this__22323__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22314__auto__){
var self__ = this;
var this__22314__auto____$1 = this;
var h__22140__auto__ = self__.__hash;
if(!((h__22140__auto__ == null))){
return h__22140__auto__;
} else {
var h__22140__auto____$1 = cljs.core.hash_imap.call(null,this__22314__auto____$1);
self__.__hash = h__22140__auto____$1;

return h__22140__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22315__auto__,other__22316__auto__){
var self__ = this;
var this__22315__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21693__auto__ = other__22316__auto__;
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = (this__22315__auto____$1.constructor === other__22316__auto__.constructor);
if(and__21693__auto____$1){
return cljs.core.equiv_map.call(null,this__22315__auto____$1,other__22316__auto__);
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22328__auto__,k__22329__auto__){
var self__ = this;
var this__22328__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__22329__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22328__auto____$1),self__.__meta),k__22329__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22329__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22326__auto__,k__22327__auto__,G__30296){
var self__ = this;
var this__22326__auto____$1 = this;
var pred__30300 = cljs.core.keyword_identical_QMARK_;
var expr__30301 = k__22327__auto__;
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(G__30296,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__30296,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__30296,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,G__30296,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,G__30296,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,G__30296,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,G__30296,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__30296,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__30296,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30300.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__30301))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__30296,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22327__auto__,G__30296),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22331__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22318__auto__,G__30296){
var self__ = this;
var this__22318__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,G__30296,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22324__auto__,entry__22325__auto__){
var self__ = this;
var this__22324__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22325__auto__)){
return cljs.core._assoc.call(null,this__22324__auto____$1,cljs.core._nth.call(null,entry__22325__auto__,(0)),cljs.core._nth.call(null,entry__22325__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22324__auto____$1,entry__22325__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__30303){
var self__ = this;
var map__30304 = p__30303;
var map__30304__$1 = ((((!((map__30304 == null)))?((((map__30304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30304):map__30304);
var opts = map__30304__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__30304,map__30304__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__30304,map__30304__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__30304,map__30304__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__30306){
var map__30310 = p__30306;
var map__30310__$1 = ((((!((map__30310 == null)))?((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);
var _QMARK_error = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__30312 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__30312,(0),null);
var _ = cljs.core.nth.call(null,vec__30312,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (content,resp_ppstr,vec__30312,resp_clj,_,map__30310,map__30310__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__30304,map__30304__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__30312,resp_clj,_,map__30310,map__30310__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__30304,map__30304__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__30304,map__30304__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(chsk__$1))
,null)),null);

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_,self__.backoff_ms_fn);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__30320){
var map__30324 = p__30320;
var map__30324__$1 = ((((!((map__30324 == null)))?((((map__30324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30324):map__30324);
var _QMARK_error = cljs.core.get.call(null,map__30324__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__30324__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__30326 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__30326,(0),null);
var _ = cljs.core.nth.call(null,vec__30326,(1),null);
var or__21705__auto___30328 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__21705__auto___30328)){
} else {
var buffered_evs_30329 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_30329);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__22353__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__22353__auto__,writer__22354__auto__){
return cljs.core._write.call(null,writer__22354__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,params,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,url,params,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__30298){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__30298),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__30298),null,cljs.core.dissoc.call(null,G__30298,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__30331 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30331) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket!`.
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30343 = arguments.length;
var i__22764__auto___30344 = (0);
while(true){
if((i__22764__auto___30344 < len__22763__auto___30343)){
args__22770__auto__.push((arguments[i__22764__auto___30344]));

var G__30345 = (i__22764__auto___30344 + (1));
i__22764__auto___30344 = G__30345;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__30336){
var vec__30337 = p__30336;
var map__30338 = cljs.core.nth.call(null,vec__30337,(0),null);
var map__30338__$1 = ((((!((map__30338 == null)))?((((map__30338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30338):map__30338);
var opts = map__30338__$1;
var ajax_opts = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__21705__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__30337,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return type;
});})(vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),taoensso.encore.nblank_str_QMARK_,new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__21705__auto__ = host;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__21705__auto__ = path;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__21705__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__21705__auto__){
return or__21705__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__30340 = ev;
var id = cljs.core.nth.call(null,vec__30340,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__30340,(1),null);
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__30340,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return cljs.core.namespace.call(null,id);
});})(vec__30340,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"id","id",252129435,null)),((function (vec__30340,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__30333_SHARP_){
return cljs.core.not_EQ_.call(null,p1__30333_SHARP_,"chsk");
});})(vec__30340,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30333#","p1__30333#",-545517673,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__30333#","p1__30333#",-545517673,null),"chsk")));


return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__21705__auto__ = (function (){var and__21693__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__21693__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,params,backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__21693__auto__;
}
})();
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var and__21693__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__21693__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__21693__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__30342 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__30342,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__30342,(1),null);
var ev__$1 = vec__30342;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__30337,map__30338,map__30338__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq30334){
var G__30335 = cljs.core.first.call(null,seq30334);
var seq30334__$1 = cljs.core.next.call(null,seq30334);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30335,seq30334__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 *   `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 *   write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30512 = arguments.length;
var i__22764__auto___30513 = (0);
while(true){
if((i__22764__auto___30513 < len__22763__auto___30512)){
args__22770__auto__.push((arguments[i__22764__auto___30513]));

var G__30514 = (i__22764__auto___30513 + (1));
i__22764__auto___30513 = G__30514;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30349){
var vec__30350 = p__30349;
var map__30351 = cljs.core.nth.call(null,vec__30350,(0),null);
var map__30351__$1 = ((((!((map__30351 == null)))?((((map__30351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);
var opts = map__30351__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__24785__auto___30515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function (state_30455){
var state_val_30456 = (state_30455[(1)]);
if((state_val_30456 === (7))){
var inst_30451 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
var statearr_30457_30516 = state_30455__$1;
(statearr_30457_30516[(2)] = inst_30451);

(statearr_30457_30516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (20))){
var inst_30362 = (state_30455[(7)]);
var inst_30387 = (state_30455[(8)]);
var inst_30359 = (state_30455[(9)]);
var inst_30386 = (state_30455[(10)]);
var inst_30361 = (state_30455[(11)]);
var inst_30360 = (state_30455[(12)]);
var inst_30397 = (function (){var vec__30354 = inst_30359;
var v = inst_30360;
var p = inst_30361;
var stop_QMARK_ = inst_30362;
var map__30365 = inst_30386;
var event_msg = inst_30386;
var event = inst_30387;
return ((function (vec__30354,v,p,stop_QMARK_,map__30365,event_msg,event,inst_30362,inst_30387,inst_30359,inst_30386,inst_30361,inst_30360,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__30354,v,p,stop_QMARK_,map__30365,event_msg,event,inst_30362,inst_30387,inst_30359,inst_30386,inst_30361,inst_30360,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_30398 = (new cljs.core.Delay(inst_30397,null));
var inst_30399 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_30398,null);
var state_30455__$1 = state_30455;
var statearr_30458_30517 = state_30455__$1;
(statearr_30458_30517[(2)] = inst_30399);

(statearr_30458_30517[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (27))){
var inst_30417 = (state_30455[(2)]);
var inst_30418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30419 = [null,inst_30417];
var inst_30420 = (new cljs.core.PersistentVector(null,2,(5),inst_30418,inst_30419,null));
var state_30455__$1 = state_30455;
var statearr_30459_30518 = state_30455__$1;
(statearr_30459_30518[(2)] = inst_30420);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30455__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (1))){
var state_30455__$1 = state_30455;
var statearr_30460_30519 = state_30455__$1;
(statearr_30460_30519[(2)] = null);

(statearr_30460_30519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (24))){
var state_30455__$1 = state_30455;
var statearr_30461_30520 = state_30455__$1;
(statearr_30461_30520[(2)] = null);

(statearr_30461_30520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (4))){
var inst_30362 = (state_30455[(7)]);
var inst_30359 = (state_30455[(9)]);
var inst_30361 = (state_30455[(11)]);
var inst_30359__$1 = (state_30455[(2)]);
var inst_30360 = cljs.core.nth.call(null,inst_30359__$1,(0),null);
var inst_30361__$1 = cljs.core.nth.call(null,inst_30359__$1,(1),null);
var inst_30362__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_30361__$1,ch_ctrl);
var state_30455__$1 = (function (){var statearr_30462 = state_30455;
(statearr_30462[(7)] = inst_30362__$1);

(statearr_30462[(9)] = inst_30359__$1);

(statearr_30462[(11)] = inst_30361__$1);

(statearr_30462[(12)] = inst_30360);

return statearr_30462;
})();
if(cljs.core.truth_(inst_30362__$1)){
var statearr_30463_30521 = state_30455__$1;
(statearr_30463_30521[(1)] = (5));

} else {
var statearr_30464_30522 = state_30455__$1;
(statearr_30464_30522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (15))){
var inst_30360 = (state_30455[(12)]);
var state_30455__$1 = state_30455;
var statearr_30465_30523 = state_30455__$1;
(statearr_30465_30523[(2)] = inst_30360);

(statearr_30465_30523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (21))){
var state_30455__$1 = state_30455;
var statearr_30466_30524 = state_30455__$1;
(statearr_30466_30524[(2)] = null);

(statearr_30466_30524[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (31))){
var inst_30424 = (state_30455[(13)]);
var inst_30432 = (state_30455[(2)]);
var inst_30433 = [inst_30432];
var inst_30434 = (new cljs.core.PersistentVector(null,1,(5),inst_30424,inst_30433,null));
var state_30455__$1 = state_30455;
var statearr_30467_30525 = state_30455__$1;
(statearr_30467_30525[(2)] = inst_30434);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30455__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (32))){
var inst_30362 = (state_30455[(7)]);
var inst_30387 = (state_30455[(8)]);
var inst_30436 = (state_30455[(14)]);
var inst_30359 = (state_30455[(9)]);
var inst_30438 = (state_30455[(15)]);
var inst_30414 = (state_30455[(16)]);
var inst_30386 = (state_30455[(10)]);
var inst_30437 = (state_30455[(17)]);
var inst_30361 = (state_30455[(11)]);
var inst_30360 = (state_30455[(12)]);
var inst_30412 = (state_30455[(18)]);
var inst_30440 = (function (){var p = inst_30361;
var _QMARK_error = inst_30414;
var vec__30416 = inst_30436;
var vec__30366 = inst_30412;
var temp__4425__auto__ = inst_30438;
var map__30365 = inst_30386;
var v = inst_30360;
var _ = inst_30437;
var e2 = inst_30438;
var _QMARK_error2 = inst_30438;
var event_msg = inst_30386;
var e = inst_30414;
var vec__30354 = inst_30359;
var event = inst_30387;
var stop_QMARK_ = inst_30362;
return ((function (p,_QMARK_error,vec__30416,vec__30366,temp__4425__auto__,map__30365,v,_,e2,_QMARK_error2,event_msg,e,vec__30354,event,stop_QMARK_,inst_30362,inst_30387,inst_30436,inst_30359,inst_30438,inst_30414,inst_30386,inst_30437,inst_30361,inst_30360,inst_30412,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__30416,vec__30366,temp__4425__auto__,map__30365,v,_,e2,_QMARK_error2,event_msg,e,vec__30354,event,stop_QMARK_,inst_30362,inst_30387,inst_30436,inst_30359,inst_30438,inst_30414,inst_30386,inst_30437,inst_30361,inst_30360,inst_30412,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_30441 = (new cljs.core.Delay(inst_30440,null));
var inst_30442 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_30441,null);
var state_30455__$1 = state_30455;
var statearr_30468_30526 = state_30455__$1;
(statearr_30468_30526[(2)] = inst_30442);

(statearr_30468_30526[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (33))){
var state_30455__$1 = state_30455;
var statearr_30469_30527 = state_30455__$1;
(statearr_30469_30527[(2)] = null);

(statearr_30469_30527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (13))){
var inst_30378 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
var statearr_30470_30528 = state_30455__$1;
(statearr_30470_30528[(2)] = inst_30378);

(statearr_30470_30528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (22))){
var inst_30362 = (state_30455[(7)]);
var inst_30387 = (state_30455[(8)]);
var inst_30359 = (state_30455[(9)]);
var inst_30386 = (state_30455[(10)]);
var inst_30361 = (state_30455[(11)]);
var inst_30360 = (state_30455[(12)]);
var inst_30395 = (state_30455[(19)]);
var inst_30402 = (state_30455[(2)]);
var inst_30403 = (function (){var vec__30354 = inst_30359;
var v = inst_30360;
var p = inst_30361;
var stop_QMARK_ = inst_30362;
var map__30365 = inst_30386;
var event_msg = inst_30386;
var event = inst_30387;
return ((function (vec__30354,v,p,stop_QMARK_,map__30365,event_msg,event,inst_30362,inst_30387,inst_30359,inst_30386,inst_30361,inst_30360,inst_30395,inst_30402,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return event_msg;
});
;})(vec__30354,v,p,stop_QMARK_,map__30365,event_msg,event,inst_30362,inst_30387,inst_30359,inst_30386,inst_30361,inst_30360,inst_30395,inst_30402,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_30404 = (new cljs.core.Delay(inst_30403,null));
var inst_30405 = new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null);
var inst_30406 = new cljs.core.Symbol(null,"event-msg?","event-msg?",-567075451,null);
var inst_30407 = taoensso.encore.hcond.call(null,true,"taoensso.sente",1163,inst_30404,inst_30405,taoensso.sente.event_msg_QMARK_,inst_30406);
var inst_30408 = event_msg_handler.call(null,inst_30407);
var inst_30409 = [inst_30408];
var inst_30410 = (new cljs.core.PersistentVector(null,1,(5),inst_30395,inst_30409,null));
var state_30455__$1 = (function (){var statearr_30471 = state_30455;
(statearr_30471[(20)] = inst_30402);

return statearr_30471;
})();
var statearr_30472_30529 = state_30455__$1;
(statearr_30472_30529[(2)] = inst_30410);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30455__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (29))){
var inst_30414 = (state_30455[(16)]);
var inst_30386 = (state_30455[(10)]);
var inst_30426 = error_handler.call(null,inst_30414,inst_30386);
var state_30455__$1 = state_30455;
var statearr_30473_30530 = state_30455__$1;
(statearr_30473_30530[(2)] = inst_30426);

(statearr_30473_30530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (6))){
var inst_30360 = (state_30455[(12)]);
var inst_30368 = (inst_30360 == null);
var inst_30369 = cljs.core.not.call(null,inst_30368);
var state_30455__$1 = state_30455;
if(inst_30369){
var statearr_30474_30531 = state_30455__$1;
(statearr_30474_30531[(1)] = (8));

} else {
var statearr_30475_30532 = state_30455__$1;
(statearr_30475_30532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (28))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30455,(27),Error,null,(26));
var inst_30424 = cljs.core.PersistentVector.EMPTY_NODE;
var state_30455__$1 = (function (){var statearr_30476 = state_30455;
(statearr_30476[(13)] = inst_30424);

return statearr_30476;
})();
if(cljs.core.truth_(error_handler)){
var statearr_30477_30533 = state_30455__$1;
(statearr_30477_30533[(1)] = (29));

} else {
var statearr_30478_30534 = state_30455__$1;
(statearr_30478_30534[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (25))){
var inst_30448 = (state_30455[(2)]);
var state_30455__$1 = (function (){var statearr_30479 = state_30455;
(statearr_30479[(21)] = inst_30448);

return statearr_30479;
})();
var statearr_30480_30535 = state_30455__$1;
(statearr_30480_30535[(2)] = null);

(statearr_30480_30535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (34))){
var inst_30445 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
var statearr_30481_30536 = state_30455__$1;
(statearr_30481_30536[(2)] = inst_30445);

(statearr_30481_30536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (17))){
var inst_30414 = (state_30455[(16)]);
var inst_30412 = (state_30455[(18)]);
var inst_30412__$1 = (state_30455[(2)]);
var inst_30413 = cljs.core.nth.call(null,inst_30412__$1,(0),null);
var inst_30414__$1 = cljs.core.nth.call(null,inst_30412__$1,(1),null);
var state_30455__$1 = (function (){var statearr_30482 = state_30455;
(statearr_30482[(22)] = inst_30413);

(statearr_30482[(16)] = inst_30414__$1);

(statearr_30482[(18)] = inst_30412__$1);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30414__$1)){
var statearr_30483_30537 = state_30455__$1;
(statearr_30483_30537[(1)] = (23));

} else {
var statearr_30484_30538 = state_30455__$1;
(statearr_30484_30538[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (3))){
var inst_30453 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30455__$1,inst_30453);
} else {
if((state_val_30456 === (12))){
var state_30455__$1 = state_30455;
var statearr_30485_30539 = state_30455__$1;
(statearr_30485_30539[(2)] = false);

(statearr_30485_30539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (2))){
var inst_30355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30356 = [ch_recv,ch_ctrl];
var inst_30357 = (new cljs.core.PersistentVector(null,2,(5),inst_30355,inst_30356,null));
var state_30455__$1 = state_30455;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30455__$1,(4),inst_30357);
} else {
if((state_val_30456 === (23))){
var state_30455__$1 = state_30455;
var statearr_30486_30540 = state_30455__$1;
(statearr_30486_30540[(2)] = null);

(statearr_30486_30540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30455,(18),Error,null,(17));
var inst_30395 = cljs.core.PersistentVector.EMPTY_NODE;
var state_30455__$1 = (function (){var statearr_30487 = state_30455;
(statearr_30487[(19)] = inst_30395);

return statearr_30487;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_30488_30541 = state_30455__$1;
(statearr_30488_30541[(1)] = (20));

} else {
var statearr_30489_30542 = state_30455__$1;
(statearr_30489_30542[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (11))){
var state_30455__$1 = state_30455;
var statearr_30490_30543 = state_30455__$1;
(statearr_30490_30543[(2)] = true);

(statearr_30490_30543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (9))){
var state_30455__$1 = state_30455;
var statearr_30491_30544 = state_30455__$1;
(statearr_30491_30544[(2)] = false);

(statearr_30491_30544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (5))){
var state_30455__$1 = state_30455;
var statearr_30492_30545 = state_30455__$1;
(statearr_30492_30545[(2)] = null);

(statearr_30492_30545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (14))){
var inst_30360 = (state_30455[(12)]);
var inst_30383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30360);
var state_30455__$1 = state_30455;
var statearr_30493_30546 = state_30455__$1;
(statearr_30493_30546[(2)] = inst_30383);

(statearr_30493_30546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (26))){
var inst_30436 = (state_30455[(14)]);
var inst_30438 = (state_30455[(15)]);
var inst_30436__$1 = (state_30455[(2)]);
var inst_30437 = cljs.core.nth.call(null,inst_30436__$1,(0),null);
var inst_30438__$1 = cljs.core.nth.call(null,inst_30436__$1,(1),null);
var state_30455__$1 = (function (){var statearr_30494 = state_30455;
(statearr_30494[(14)] = inst_30436__$1);

(statearr_30494[(15)] = inst_30438__$1);

(statearr_30494[(17)] = inst_30437);

return statearr_30494;
})();
if(cljs.core.truth_(inst_30438__$1)){
var statearr_30495_30547 = state_30455__$1;
(statearr_30495_30547[(1)] = (32));

} else {
var statearr_30496_30548 = state_30455__$1;
(statearr_30496_30548[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (16))){
var inst_30386 = (state_30455[(10)]);
var inst_30386__$1 = (state_30455[(2)]);
var inst_30387 = cljs.core.get.call(null,inst_30386__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_30455__$1 = (function (){var statearr_30497 = state_30455;
(statearr_30497[(8)] = inst_30387);

(statearr_30497[(10)] = inst_30386__$1);

return statearr_30497;
})();
var statearr_30498_30549 = state_30455__$1;
(statearr_30498_30549[(2)] = null);

(statearr_30498_30549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (30))){
var inst_30362 = (state_30455[(7)]);
var inst_30413 = (state_30455[(22)]);
var inst_30387 = (state_30455[(8)]);
var inst_30359 = (state_30455[(9)]);
var inst_30414 = (state_30455[(16)]);
var inst_30386 = (state_30455[(10)]);
var inst_30361 = (state_30455[(11)]);
var inst_30360 = (state_30455[(12)]);
var inst_30412 = (state_30455[(18)]);
var inst_30428 = (function (){var p = inst_30361;
var _QMARK_error = inst_30414;
var vec__30366 = inst_30412;
var temp__4425__auto__ = inst_30414;
var map__30365 = inst_30386;
var v = inst_30360;
var temp__4423__auto__ = error_handler;
var _ = inst_30413;
var event_msg = inst_30386;
var e = inst_30414;
var vec__30354 = inst_30359;
var event = inst_30387;
var stop_QMARK_ = inst_30362;
return ((function (p,_QMARK_error,vec__30366,temp__4425__auto__,map__30365,v,temp__4423__auto__,_,event_msg,e,vec__30354,event,stop_QMARK_,inst_30362,inst_30413,inst_30387,inst_30359,inst_30414,inst_30386,inst_30361,inst_30360,inst_30412,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__30366,temp__4425__auto__,map__30365,v,temp__4423__auto__,_,event_msg,e,vec__30354,event,stop_QMARK_,inst_30362,inst_30413,inst_30387,inst_30359,inst_30414,inst_30386,inst_30361,inst_30360,inst_30412,state_val_30456,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_30429 = (new cljs.core.Delay(inst_30428,null));
var inst_30430 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/24/8xlgb98n7m9grqc1hk34n0h00000gn/T/form-init1910160290252545888.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_30429,null);
var state_30455__$1 = state_30455;
var statearr_30499_30550 = state_30455__$1;
(statearr_30499_30550[(2)] = inst_30430);

(statearr_30499_30550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (10))){
var inst_30381 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
if(cljs.core.truth_(inst_30381)){
var statearr_30500_30551 = state_30455__$1;
(statearr_30500_30551[(1)] = (14));

} else {
var statearr_30501_30552 = state_30455__$1;
(statearr_30501_30552[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (18))){
var inst_30388 = (state_30455[(2)]);
var inst_30389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30390 = [null,inst_30388];
var inst_30391 = (new cljs.core.PersistentVector(null,2,(5),inst_30389,inst_30390,null));
var state_30455__$1 = state_30455;
var statearr_30502_30553 = state_30455__$1;
(statearr_30502_30553[(2)] = inst_30391);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30455__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (8))){
var inst_30360 = (state_30455[(12)]);
var inst_30371 = inst_30360.cljs$lang$protocol_mask$partition0$;
var inst_30372 = (inst_30371 & (64));
var inst_30373 = inst_30360.cljs$core$ISeq$;
var inst_30374 = (inst_30372) || (inst_30373);
var state_30455__$1 = state_30455;
if(cljs.core.truth_(inst_30374)){
var statearr_30503_30554 = state_30455__$1;
(statearr_30503_30554[(1)] = (11));

} else {
var statearr_30504_30555 = state_30455__$1;
(statearr_30504_30555[(1)] = (12));

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
}
}
});})(c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
;
return ((function (switch__24720__auto__,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function() {
var taoensso$sente$state_machine__24721__auto__ = null;
var taoensso$sente$state_machine__24721__auto____0 = (function (){
var statearr_30508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30508[(0)] = taoensso$sente$state_machine__24721__auto__);

(statearr_30508[(1)] = (1));

return statearr_30508;
});
var taoensso$sente$state_machine__24721__auto____1 = (function (state_30455){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_30455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e30509){if((e30509 instanceof Object)){
var ex__24724__auto__ = e30509;
var statearr_30510_30556 = state_30455;
(statearr_30510_30556[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30557 = state_30455;
state_30455 = G__30557;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
taoensso$sente$state_machine__24721__auto__ = function(state_30455){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__24721__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__24721__auto____1.call(this,state_30455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__24721__auto____0;
taoensso$sente$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__24721__auto____1;
return taoensso$sente$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
})();
var state__24787__auto__ = (function (){var statearr_30511 = f__24786__auto__.call(null);
(statearr_30511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___30515);

return statearr_30511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___30515,ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
);


return ((function (ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__30350,map__30351,map__30351__$1,opts,trace_evs_QMARK_,error_handler))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30346){
var G__30347 = cljs.core.first.call(null,seq30346);
var seq30346__$1 = cljs.core.next.call(null,seq30346);
var G__30348 = cljs.core.first.call(null,seq30346__$1);
var seq30346__$2 = cljs.core.next.call(null,seq30346__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30347,G__30348,seq30346__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED. Please use `taoensso.encore/ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__30558,websocket_QMARK_){
var map__30561 = p__30558;
var map__30561__$1 = ((((!((map__30561 == null)))?((((map__30561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30561):map__30561);
var location = map__30561__$1;
var adjusted_protocol = cljs.core.get.call(null,map__30561__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__30561__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__30561__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__21705__auto__ = path;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map