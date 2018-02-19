// Compiled by ClojureScript 1.7.122 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.format;
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 2.6;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
taoensso.encore.read_edn_str = (function taoensso$encore$read_edn_str(s){
return cljs.reader.read_string.call(null,s);
});
taoensso.encore.read_edn = taoensso.encore.read_edn_str;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args30686 = [];
var len__22763__auto___30691 = arguments.length;
var i__22764__auto___30692 = (0);
while(true){
if((i__22764__auto___30692 < len__22763__auto___30691)){
args30686.push((arguments[i__22764__auto___30692]));

var G__30693 = (i__22764__auto___30692 + (1));
i__22764__auto___30692 = G__30693;
continue;
} else {
}
break;
}

var G__30688 = args30686.length;
switch (G__30688) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30686.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
var _STAR_print_level_STAR_30689 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_30690 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_30690;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_30689;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__30697 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__30697,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__30697,(1),null);
var vec__30698 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__30698,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__30698,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__21705__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.set_STAR_;
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4425__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4425__auto__)){
var email = temp__4425__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args30703 = [];
var len__22763__auto___30709 = arguments.length;
var i__22764__auto___30710 = (0);
while(true){
if((i__22764__auto___30710 < len__22763__auto___30709)){
args30703.push((arguments[i__22764__auto___30710]));

var G__30711 = (i__22764__auto___30710 + (1));
i__22764__auto___30710 = G__30711;
continue;
} else {
}
break;
}

var G__30708 = args30703.length;
switch (G__30708) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30703.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22782__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__21693__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__21693__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__21693__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__21693__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq30704){
var G__30705 = cljs.core.first.call(null,seq30704);
var seq30704__$1 = cljs.core.next.call(null,seq30704);
var G__30706 = cljs.core.first.call(null,seq30704__$1);
var seq30704__$2 = cljs.core.next.call(null,seq30704__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30705,G__30706,seq30704__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__30713_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__30713_SHARP_));
}),ks);
});
taoensso.encore.format;
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 */
taoensso.encore.hthrow = (function taoensso$encore$hthrow(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30722 = arguments.length;
var i__22764__auto___30723 = (0);
while(true){
if((i__22764__auto___30723 < len__22763__auto___30722)){
args__22770__auto__.push((arguments[i__22764__auto___30723]));

var G__30724 = (i__22764__auto___30723 + (1));
i__22764__auto___30723 = G__30724;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((5) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((5)),(0))):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__22771__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__30720){
var vec__30721 = p__30720;
var _QMARK_err = cljs.core.nth.call(null,vec__30721,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__21705__auto__ = _QMARK_line;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str((function (){var or__21705__auto__ = form;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return "<nil>";
}
})())].join('');
var val_str = [cljs.core.str((function (){var or__21705__auto__ = val;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return "<nil>";
}
})())].join('');
var _QMARK_err_str = (function (){var temp__4425__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return [cljs.core.str(_QMARK_err)].join('');
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
});

taoensso.encore.hthrow.cljs$lang$maxFixedArity = (5);

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq30714){
var G__30715 = cljs.core.first.call(null,seq30714);
var seq30714__$1 = cljs.core.next.call(null,seq30714);
var G__30716 = cljs.core.first.call(null,seq30714__$1);
var seq30714__$2 = cljs.core.next.call(null,seq30714__$1);
var G__30717 = cljs.core.first.call(null,seq30714__$2);
var seq30714__$3 = cljs.core.next.call(null,seq30714__$2);
var G__30718 = cljs.core.first.call(null,seq30714__$3);
var seq30714__$4 = cljs.core.next.call(null,seq30714__$3);
var G__30719 = cljs.core.first.call(null,seq30714__$4);
var seq30714__$5 = cljs.core.next.call(null,seq30714__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__30715,G__30716,G__30717,G__30718,G__30719,seq30714__$5);
});
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__30727 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e30728){if((e30728 instanceof Error)){
var e__16475__auto__ = e30728;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__16475__auto__], null);
} else {
throw e30728;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__30727,(0),null);
var _ = cljs.core.nth.call(null,vec__30727,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__30734 = pred_form;
var type = cljs.core.nth.call(null,vec__30734,(0),null);
var p1 = cljs.core.nth.call(null,vec__30734,(1),null);
var p2 = cljs.core.nth.call(null,vec__30734,(2),null);
var more = cljs.core.nthnext.call(null,vec__30734,(3));
var G__30735 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30735) {
case "el":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "not=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "or":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
var or__21705__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var or__21705__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__21705__auto____$1)){
return or__21705__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__21705__auto____$1,or__21705__auto__,G__30735,vec__30734,type,p1,p2,more){
return (function (p1__30730_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__30730_SHARP_)).call(null,x);
});})(or__21705__auto____$1,or__21705__auto__,G__30735,vec__30734,type,p1,p2,more))
,more);
}
}
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "not":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
var and__21693__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__21693__auto__){
var and__21693__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__21693__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__21693__auto____$1,and__21693__auto__,G__30735,vec__30734,type,p1,p2,more){
return (function (p1__30729_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__30729_SHARP_).call(null,x));
});})(and__21693__auto____$1,and__21693__auto__,G__30735,vec__30734,type,p1,p2,more))
,more);
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "ks=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "and":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
var and__21693__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__21693__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__21693__auto____$1,and__21693__auto__,G__30735,vec__30734,type,p1,p2,more){
return (function (p1__30731_SHARP_){
return taoensso$encore$hpred.call(null,p1__30731_SHARP_).call(null,x);
});})(and__21693__auto____$1,and__21693__auto__,G__30735,vec__30734,type,p1,p2,more))
,more);
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "not-in":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "not-el":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "set<=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return clojure.set.subset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "set>=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return clojure.set.superset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "set=":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
case "in":
return ((function (G__30735,vec__30734,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__30735,vec__30734,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Implementation detail.
 */
taoensso.encore.hcond = (function taoensso$encore$hcond(hard_QMARK_,ns_str,line,x_,x_form,pred,pred_form){
var vec__30741 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,x_)], null);
}catch (e30743){if((e30743 instanceof Error)){
var e__16475__auto__ = e30743;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__16475__auto__], null);
} else {
throw e30743;

}
}})();
var _QMARK_x = cljs.core.nth.call(null,vec__30741,(0),null);
var _QMARK_x_err = cljs.core.nth.call(null,vec__30741,(1),null);
var have_x_QMARK_ = (_QMARK_x_err == null);
var vec__30742 = ((have_x_QMARK_)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,pred).call(null,_QMARK_x)], null);
}catch (e30744){if((e30744 instanceof Error)){
var e__16475__auto__ = e30744;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__16475__auto__], null);
} else {
throw e30744;

}
}})():null);
var pass_QMARK_ = cljs.core.nth.call(null,vec__30742,(0),null);
var _QMARK_pred_err = cljs.core.nth.call(null,vec__30742,(1),null);
if(cljs.core.truth_(pass_QMARK_)){
return _QMARK_x;
} else {
return taoensso.encore.hthrow.call(null,hard_QMARK_,ns_str,line,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x_form),pred_form),((have_x_QMARK_)?_QMARK_x:_QMARK_x_err),_QMARK_pred_err);
}
});
/**
 * Like `name` but includes keyword namespaces in name string.
 */
taoensso.encore.qname = (function taoensso$encore$qname(x){
var or__21705__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad `qname` argument type: "),cljs.core.str(cljs.core.type.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30749 = arguments.length;
var i__22764__auto___30750 = (0);
while(true){
if((i__22764__auto___30750 < len__22763__auto___30749)){
args__22770__auto__.push((arguments[i__22764__auto___30750]));

var G__30751 = (i__22764__auto___30750 + (1));
i__22764__auto___30750 = G__30751;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__30747){
var vec__30748 = p__30747;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__30748,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__30748,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__30748,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq30745){
var G__30746 = cljs.core.first.call(null,seq30745);
var seq30745__$1 = cljs.core.next.call(null,seq30745);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__30746,seq30745__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args30752 = [];
var len__22763__auto___30756 = arguments.length;
var i__22764__auto___30757 = (0);
while(true){
if((i__22764__auto___30757 < len__22763__auto___30756)){
args30752.push((arguments[i__22764__auto___30757]));

var G__30758 = (i__22764__auto___30757 + (1));
i__22764__auto___30757 = G__30758;
continue;
} else {
}
break;
}

var G__30754 = args30752.length;
switch (G__30754) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30752.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__30755 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30755) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30767 = arguments.length;
var i__22764__auto___30768 = (0);
while(true){
if((i__22764__auto___30768 < len__22763__auto___30767)){
args__22770__auto__.push((arguments[i__22764__auto___30768]));

var G__30769 = (i__22764__auto___30768 + (1));
i__22764__auto___30768 = G__30769;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__30763){
var vec__30764 = p__30763;
var map__30765 = cljs.core.nth.call(null,vec__30764,(0),null);
var map__30765__$1 = ((((!((map__30765 == null)))?((((map__30765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30765):map__30765);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__22036__auto__ = min_SINGLEQUOTE_;
var y__22037__auto__ = time;
return ((x__22036__auto__ > y__22037__auto__) ? x__22036__auto__ : y__22037__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__22043__auto__ = max_SINGLEQUOTE_;
var y__22044__auto__ = time__$1;
return ((x__22043__auto__ < y__22044__auto__) ? x__22043__auto__ : y__22044__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq30761){
var G__30762 = cljs.core.first.call(null,seq30761);
var seq30761__$1 = cljs.core.next.call(null,seq30761);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__30762,seq30761__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30773 = arguments.length;
var i__22764__auto___30774 = (0);
while(true){
if((i__22764__auto___30774 < len__22763__auto___30773)){
args__22770__auto__.push((arguments[i__22764__auto___30774]));

var G__30775 = (i__22764__auto___30774 + (1));
i__22764__auto___30774 = G__30775;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__30771){
var vec__30772 = p__30771;
var mock_udts = cljs.core.nth.call(null,vec__30772,(0),null);
var mock_udts__$1 = (function (){var or__21705__auto__ = mock_udts;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__30772,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__30772,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq30770){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30770));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return cljs.core.long$.call(null,(secs * 1000.0));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30781 = arguments.length;
var i__22764__auto___30782 = (0);
while(true){
if((i__22764__auto___30782 < len__22763__auto___30781)){
args__22770__auto__.push((arguments[i__22764__auto___30782]));

var G__30783 = (i__22764__auto___30782 + (1));
i__22764__auto___30782 = G__30783;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__30777){
var map__30778 = p__30777;
var map__30778__$1 = ((((!((map__30778 == null)))?((((map__30778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);
var opts = map__30778__$1;
var years = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__30778,map__30778__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (have_in__30780){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",696,(new cljs.core.Delay(((function (map__30778,map__30778__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (){
return have_in__30780;
});})(map__30778,map__30778__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,null)),new cljs.core.Symbol(null,"have-in__30780","have-in__30780",1927554555,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null));
});})(map__30778,map__30778__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):0.0) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):0.0)) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):0.0)) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):0.0)) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):0.0)) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq30776){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30776));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY. Unlike `aget`,
 *   returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args30788 = [];
var len__22763__auto___30795 = arguments.length;
var i__22764__auto___30796 = (0);
while(true){
if((i__22764__auto___30796 < len__22763__auto___30795)){
args30788.push((arguments[i__22764__auto___30796]));

var G__30797 = (i__22764__auto___30796 + (1));
i__22764__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var G__30794 = args30788.length;
switch (G__30794) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30788.slice((3)),(0)));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22782__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq30789){
var G__30790 = cljs.core.first.call(null,seq30789);
var seq30789__$1 = cljs.core.next.call(null,seq30789);
var G__30791 = cljs.core.first.call(null,seq30789__$1);
var seq30789__$2 = cljs.core.next.call(null,seq30789__$1);
var G__30792 = cljs.core.first.call(null,seq30789__$2);
var seq30789__$3 = cljs.core.next.call(null,seq30789__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__30790,G__30791,G__30792,seq30789__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__30800 = coll;
var c1 = cljs.core.nth.call(null,vec__30800,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__30802 = v;
var v1 = cljs.core.nth.call(null,vec__30802,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args30803 = [];
var len__22763__auto___30809 = arguments.length;
var i__22764__auto___30810 = (0);
while(true){
if((i__22764__auto___30810 < len__22763__auto___30809)){
args30803.push((arguments[i__22764__auto___30810]));

var G__30811 = (i__22764__auto___30810 + (1));
i__22764__auto___30810 = G__30811;
continue;
} else {
}
break;
}

var G__30808 = args30803.length;
switch (G__30808) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30803.slice((2)),(0)));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22782__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq30804){
var G__30805 = cljs.core.first.call(null,seq30804);
var seq30804__$1 = cljs.core.next.call(null,seq30804);
var G__30806 = cljs.core.first.call(null,seq30804__$1);
var seq30804__$2 = cljs.core.next.call(null,seq30804__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__30805,G__30806,seq30804__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * `run!` from Clojure 1.7+
 */
taoensso.encore.backport_run_BANG_ = (function taoensso$encore$backport_run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__30814_SHARP_,p2__30813_SHARP_){
return proc.call(null,p2__30813_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`.
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4425__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous).
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__30816 = ks;
var k = cljs.core.nth.call(null,vec__30816,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__30816,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__22043__auto__ = signed_idx;
var y__22044__auto__ = max_idx;
return ((x__22043__auto__ < y__22044__auto__) ? x__22043__auto__ : y__22044__auto__);
} else {
var x__22036__auto__ = (0);
var y__22037__auto__ = (signed_idx + max_idx);
return ((x__22036__auto__ > y__22037__auto__) ? x__22036__auto__ : y__22037__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30823 = arguments.length;
var i__22764__auto___30824 = (0);
while(true){
if((i__22764__auto___30824 < len__22763__auto___30823)){
args__22770__auto__.push((arguments[i__22764__auto___30824]));

var G__30825 = (i__22764__auto___30824 + (1));
i__22764__auto___30824 = G__30825;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__30820){
var map__30821 = p__30820;
var map__30821__$1 = ((((!((map__30821 == null)))?((((map__30821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30821):map__30821);
var max_len = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__30821,map__30821__$1,max_len,end_idx){
return (function (){
return max_len;
});})(map__30821,map__30821__$1,max_len,end_idx))
,null)),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__16659__auto__ = (start_idx_STAR_ + max_len);
var n2__16660__auto__ = xlen;
if((n1__16659__auto__ > n2__16660__auto__)){
return n2__16660__auto__;
} else {
return n1__16659__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq30817){
var G__30818 = cljs.core.first.call(null,seq30817);
var seq30817__$1 = cljs.core.next.call(null,seq30817);
var G__30819 = cljs.core.first.call(null,seq30817__$1);
var seq30817__$2 = cljs.core.next.call(null,seq30817__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__30818,G__30819,seq30817__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30832 = arguments.length;
var i__22764__auto___30833 = (0);
while(true){
if((i__22764__auto___30833 < len__22763__auto___30832)){
args__22770__auto__.push((arguments[i__22764__auto___30833]));

var G__30834 = (i__22764__auto___30833 + (1));
i__22764__auto___30833 = G__30834;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__30829){
var vec__30830 = p__30829;
var _QMARK_max_len = cljs.core.nth.call(null,vec__30830,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__30830,_QMARK_max_len){
return (function (){
return v;
});})(vec__30830,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__30831 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__30831,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__30831,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq30826){
var G__30827 = cljs.core.first.call(null,seq30826);
var seq30826__$1 = cljs.core.next.call(null,seq30826);
var G__30828 = cljs.core.first.call(null,seq30826__$1);
var seq30826__$2 = cljs.core.next.call(null,seq30826__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30827,G__30828,seq30826__$2);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22319__auto__,k__22320__auto__){
var self__ = this;
var this__22319__auto____$1 = this;
return cljs.core._lookup.call(null,this__22319__auto____$1,k__22320__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22321__auto__,k30836,else__22322__auto__){
var self__ = this;
var this__22321__auto____$1 = this;
var G__30838 = (((k30836 instanceof cljs.core.Keyword))?k30836.fqn:null);
switch (G__30838) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30836,else__22322__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22333__auto__,writer__22334__auto__,opts__22335__auto__){
var self__ = this;
var this__22333__auto____$1 = this;
var pr_pair__22336__auto__ = ((function (this__22333__auto____$1){
return (function (keyval__22337__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22334__auto__,cljs.core.pr_writer,""," ","",opts__22335__auto__,keyval__22337__auto__);
});})(this__22333__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22334__auto__,pr_pair__22336__auto__,"#taoensso.encore.Swapped{",", ","}",opts__22335__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30835){
var self__ = this;
var G__30835__$1 = this;
return (new cljs.core.RecordIter((0),G__30835__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22317__auto__){
var self__ = this;
var this__22317__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22313__auto__){
var self__ = this;
var this__22313__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22323__auto__){
var self__ = this;
var this__22323__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22314__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22315__auto__,other__22316__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22328__auto__,k__22329__auto__){
var self__ = this;
var this__22328__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__22329__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22328__auto____$1),self__.__meta),k__22329__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22329__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22326__auto__,k__22327__auto__,G__30835){
var self__ = this;
var this__22326__auto____$1 = this;
var pred__30839 = cljs.core.keyword_identical_QMARK_;
var expr__30840 = k__22327__auto__;
if(cljs.core.truth_(pred__30839.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__30840))){
return (new taoensso.encore.Swapped(G__30835,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30839.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__30840))){
return (new taoensso.encore.Swapped(self__.new_val,G__30835,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22327__auto__,G__30835),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22331__auto__){
var self__ = this;
var this__22331__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22318__auto__,G__30835){
var self__ = this;
var this__22318__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__30835,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22324__auto__,entry__22325__auto__){
var self__ = this;
var this__22324__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22325__auto__)){
return cljs.core._assoc.call(null,this__22324__auto____$1,cljs.core._nth.call(null,entry__22325__auto__,(0)),cljs.core._nth.call(null,entry__22325__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22324__auto____$1,entry__22325__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__22353__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__22353__auto__,writer__22354__auto__){
return cljs.core._write.call(null,writer__22354__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__30837){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__30837),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__30837),null,cljs.core.dissoc.call(null,G__30837,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
taoensso.encore.dissoc_in;
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__30844 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__30844,(0),null);
var return_val = cljs.core.nth.call(null,vec__30844,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__30847 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__30847,(0),null);
var ks = cljs.core.nth.call(null,vec__30847,(1),null);
var valf = cljs.core.nth.call(null,vec__30847,(2),null);
var G__30848 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__30848) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30852 = arguments.length;
var i__22764__auto___30853 = (0);
while(true){
if((i__22764__auto___30853 < len__22763__auto___30852)){
args__22770__auto__.push((arguments[i__22764__auto___30853]));

var G__30854 = (i__22764__auto___30853 + (1));
i__22764__auto___30853 = G__30854;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq30850){
var G__30851 = cljs.core.first.call(null,seq30850);
var seq30850__$1 = cljs.core.next.call(null,seq30850);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__30851,seq30850__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args30855 = [];
var len__22763__auto___30864 = arguments.length;
var i__22764__auto___30865 = (0);
while(true){
if((i__22764__auto___30865 < len__22763__auto___30864)){
args30855.push((arguments[i__22764__auto___30865]));

var G__30866 = (i__22764__auto___30865 + (1));
i__22764__auto___30865 = G__30866;
continue;
} else {
}
break;
}

var G__30861 = args30855.length;
switch (G__30861) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30855.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22782__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__30862 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__30862,(0),null);
var return_val = cljs.core.nth.call(null,vec__30862,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__30863 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__30863,(0),null);
var return_val = cljs.core.nth.call(null,vec__30863,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq30856){
var G__30857 = cljs.core.first.call(null,seq30856);
var seq30856__$1 = cljs.core.next.call(null,seq30856);
var G__30858 = cljs.core.first.call(null,seq30856__$1);
var seq30856__$2 = cljs.core.next.call(null,seq30856__$1);
var G__30859 = cljs.core.first.call(null,seq30856__$2);
var seq30856__$3 = cljs.core.next.call(null,seq30856__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30857,G__30858,G__30859,seq30856__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args30868 = [];
var len__22763__auto___30875 = arguments.length;
var i__22764__auto___30876 = (0);
while(true){
if((i__22764__auto___30876 < len__22763__auto___30875)){
args30868.push((arguments[i__22764__auto___30876]));

var G__30877 = (i__22764__auto___30876 + (1));
i__22764__auto___30876 = G__30877;
continue;
} else {
}
break;
}

var G__30874 = args30868.length;
switch (G__30874) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30868.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22782__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq30869){
var G__30870 = cljs.core.first.call(null,seq30869);
var seq30869__$1 = cljs.core.next.call(null,seq30869);
var G__30871 = cljs.core.first.call(null,seq30869__$1);
var seq30869__$2 = cljs.core.next.call(null,seq30869__$1);
var G__30872 = cljs.core.first.call(null,seq30869__$2);
var seq30869__$3 = cljs.core.next.call(null,seq30869__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30870,G__30871,G__30872,seq30869__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30882 = arguments.length;
var i__22764__auto___30883 = (0);
while(true){
if((i__22764__auto___30883 < len__22763__auto___30882)){
args__22770__auto__.push((arguments[i__22764__auto___30883]));

var G__30884 = (i__22764__auto___30883 + (1));
i__22764__auto___30883 = G__30884;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq30879){
var G__30880 = cljs.core.first.call(null,seq30879);
var seq30879__$1 = cljs.core.next.call(null,seq30879);
var G__30881 = cljs.core.first.call(null,seq30879__$1);
var seq30879__$2 = cljs.core.next.call(null,seq30879__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__30880,G__30881,seq30879__$2);
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30895 = arguments.length;
var i__22764__auto___30896 = (0);
while(true){
if((i__22764__auto___30896 < len__22763__auto___30895)){
args__22770__auto__.push((arguments[i__22764__auto___30896]));

var G__30897 = (i__22764__auto___30896 + (1));
i__22764__auto___30896 = G__30897;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__21705__auto__ = m;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__22477__auto__ = (function taoensso$encore$iter__30887(s__30888){
return (new cljs.core.LazySeq(null,(function (){
var s__30888__$1 = s__30888;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30888__$1);
if(temp__4425__auto__){
var s__30888__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30888__$2)){
var c__22475__auto__ = cljs.core.chunk_first.call(null,s__30888__$2);
var size__22476__auto__ = cljs.core.count.call(null,c__22475__auto__);
var b__30890 = cljs.core.chunk_buffer.call(null,size__22476__auto__);
if((function (){var i__30889 = (0);
while(true){
if((i__30889 < size__22476__auto__)){
var vec__30893 = cljs.core._nth.call(null,c__22475__auto__,i__30889);
var k = cljs.core.nth.call(null,vec__30893,(0),null);
var v = cljs.core.nth.call(null,vec__30893,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__30890,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30898 = (i__30889 + (1));
i__30889 = G__30898;
continue;
} else {
var G__30899 = (i__30889 + (1));
i__30889 = G__30899;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30890),taoensso$encore$iter__30887.call(null,cljs.core.chunk_rest.call(null,s__30888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30890),null);
}
} else {
var vec__30894 = cljs.core.first.call(null,s__30888__$2);
var k = cljs.core.nth.call(null,vec__30894,(0),null);
var v = cljs.core.nth.call(null,vec__30894,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__30887.call(null,cljs.core.rest.call(null,s__30888__$2)));
} else {
var G__30900 = cljs.core.rest.call(null,s__30888__$2);
s__30888__$1 = G__30900;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22477__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq30885){
var G__30886 = cljs.core.first.call(null,seq30885);
var seq30885__$1 = cljs.core.next.call(null,seq30885);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__30886,seq30885__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30911 = arguments.length;
var i__22764__auto___30912 = (0);
while(true){
if((i__22764__auto___30912 < len__22763__auto___30911)){
args__22770__auto__.push((arguments[i__22764__auto___30912]));

var G__30913 = (i__22764__auto___30912 + (1));
i__22764__auto___30912 = G__30913;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__21705__auto__ = m;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__22477__auto__ = (function taoensso$encore$iter__30903(s__30904){
return (new cljs.core.LazySeq(null,(function (){
var s__30904__$1 = s__30904;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30904__$1);
if(temp__4425__auto__){
var s__30904__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30904__$2)){
var c__22475__auto__ = cljs.core.chunk_first.call(null,s__30904__$2);
var size__22476__auto__ = cljs.core.count.call(null,c__22475__auto__);
var b__30906 = cljs.core.chunk_buffer.call(null,size__22476__auto__);
if((function (){var i__30905 = (0);
while(true){
if((i__30905 < size__22476__auto__)){
var vec__30909 = cljs.core._nth.call(null,c__22475__auto__,i__30905);
var k = cljs.core.nth.call(null,vec__30909,(0),null);
var v = cljs.core.nth.call(null,vec__30909,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__30906,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30914 = (i__30905 + (1));
i__30905 = G__30914;
continue;
} else {
var G__30915 = (i__30905 + (1));
i__30905 = G__30915;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30906),taoensso$encore$iter__30903.call(null,cljs.core.chunk_rest.call(null,s__30904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30906),null);
}
} else {
var vec__30910 = cljs.core.first.call(null,s__30904__$2);
var k = cljs.core.nth.call(null,vec__30910,(0),null);
var v = cljs.core.nth.call(null,vec__30910,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__30903.call(null,cljs.core.rest.call(null,s__30904__$2)));
} else {
var G__30916 = cljs.core.rest.call(null,s__30904__$2);
s__30904__$1 = G__30916;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22477__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq30901){
var G__30902 = cljs.core.first.call(null,seq30901);
var seq30901__$1 = cljs.core.next.call(null,seq30901);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__30902,seq30901__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args30917 = [];
var len__22763__auto___30920 = arguments.length;
var i__22764__auto___30921 = (0);
while(true){
if((i__22764__auto___30921 < len__22763__auto___30920)){
args30917.push((arguments[i__22764__auto___30921]));

var G__30922 = (i__22764__auto___30921 + (1));
i__22764__auto___30921 = G__30922;
continue;
} else {
}
break;
}

var G__30919 = args30917.length;
switch (G__30919) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30917.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30925 = arguments.length;
var i__22764__auto___30926 = (0);
while(true){
if((i__22764__auto___30926 < len__22763__auto___30925)){
args__22770__auto__.push((arguments[i__22764__auto___30926]));

var G__30927 = (i__22764__auto___30926 + (1));
i__22764__auto___30926 = G__30927;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq30924){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30924));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30930 = arguments.length;
var i__22764__auto___30931 = (0);
while(true){
if((i__22764__auto___30931 < len__22763__auto___30930)){
args__22770__auto__.push((arguments[i__22764__auto___30931]));

var G__30932 = (i__22764__auto___30931 + (1));
i__22764__auto___30931 = G__30932;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq30928){
var G__30929 = cljs.core.first.call(null,seq30928);
var seq30928__$1 = cljs.core.next.call(null,seq30928);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__30929,seq30928__$1);
});
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 *   against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__21705__auto__ = x;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__21693__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__21693__auto__)){
return predv.call(null,v);
} else {
return and__21693__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30941 = arguments.length;
var i__22764__auto___30942 = (0);
while(true){
if((i__22764__auto___30942 < len__22763__auto___30941)){
args__22770__auto__.push((arguments[i__22764__auto___30942]));

var G__30943 = (i__22764__auto___30942 + (1));
i__22764__auto___30942 = G__30943;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__30935){
var vec__30936 = p__30935;
var kf = cljs.core.nth.call(null,vec__30936,(0),null);
var vf = cljs.core.nth.call(null,vec__30936,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__30936,kf,vf){
return (function (){
return kvs;
});})(vec__30936,kf,vf))
,null)),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__30936,kf,vf){
return (function (){
return kf;
});})(vec__30936,kf,vf))
,null)),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__30936,kf,vf){
return (function (){
return vf;
});})(vec__30936,kf,vf))
,null)),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null))], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__30936,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__30936,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__30938 = kvs;
var vec__30939 = G__30938;
var k = cljs.core.nth.call(null,vec__30939,(0),null);
var v = cljs.core.nth.call(null,vec__30939,(1),null);
var s = vec__30939;
var m__$1 = m;
var G__30938__$1 = G__30938;
while(true){
var m__$2 = m__$1;
var vec__30940 = G__30938__$1;
var k__$1 = cljs.core.nth.call(null,vec__30940,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__30940,(1),null);
var s__$1 = vec__30940;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4423__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
var G__30944 = new_m;
var G__30945 = n;
m__$1 = G__30944;
G__30938__$1 = G__30945;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__30936,kf,vf){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__30936,kf,vf))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq30933){
var G__30934 = cljs.core.first.call(null,seq30933);
var seq30933__$1 = cljs.core.next.call(null,seq30933);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__30934,seq30933__$1);
});
/**
 * Faster `zipmap` using transients.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__30946 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__30947 = cljs.core.next.call(null,ks__$1);
var G__30948 = cljs.core.next.call(null,vs__$1);
m = G__30946;
ks__$1 = G__30947;
vs__$1 = G__30948;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args30949 = [];
var len__22763__auto___30955 = arguments.length;
var i__22764__auto___30956 = (0);
while(true){
if((i__22764__auto___30956 < len__22763__auto___30955)){
args30949.push((arguments[i__22764__auto___30956]));

var G__30957 = (i__22764__auto___30956 + (1));
i__22764__auto___30956 = G__30957;
continue;
} else {
}
break;
}

var G__30954 = args30949.length;
switch (G__30954) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30949.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22782__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq30950){
var G__30951 = cljs.core.first.call(null,seq30950);
var seq30950__$1 = cljs.core.next.call(null,seq30950);
var G__30952 = cljs.core.first.call(null,seq30950__$1);
var seq30950__$2 = cljs.core.next.call(null,seq30950__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__30951,G__30952,seq30950__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args30959 = [];
var len__22763__auto___30965 = arguments.length;
var i__22764__auto___30966 = (0);
while(true){
if((i__22764__auto___30966 < len__22763__auto___30965)){
args30959.push((arguments[i__22764__auto___30966]));

var G__30967 = (i__22764__auto___30966 + (1));
i__22764__auto___30966 = G__30967;
continue;
} else {
}
break;
}

var G__30964 = args30959.length;
switch (G__30964) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22782__auto__ = (new cljs.core.IndexedSeq(args30959.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22782__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq30960){
var G__30961 = cljs.core.first.call(null,seq30960);
var seq30960__$1 = cljs.core.next.call(null,seq30960);
var G__30962 = cljs.core.first.call(null,seq30960__$1);
var seq30960__$2 = cljs.core.next.call(null,seq30960__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__30961,G__30962,seq30960__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__30975,seen__$1){
while(true){
var vec__30976 = p__30975;
var v = cljs.core.nth.call(null,vec__30976,(0),null);
var xs__$1 = vec__30976;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__30977 = cljs.core.rest.call(null,s);
var G__30978 = seen__$1;
p__30975 = G__30977;
seen__$1 = G__30978;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args30979 = [];
var len__22763__auto___30986 = arguments.length;
var i__22764__auto___30987 = (0);
while(true){
if((i__22764__auto___30987 < len__22763__auto___30986)){
args30979.push((arguments[i__22764__auto___30987]));

var G__30988 = (i__22764__auto___30987 + (1));
i__22764__auto___30987 = G__30988;
continue;
} else {
}
break;
}

var G__30981 = args30979.length;
switch (G__30981) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30979.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__30982,in$){
var vec__30983 = p__30982;
var v = cljs.core.nth.call(null,vec__30983,(0),null);
var seen = cljs.core.nth.call(null,vec__30983,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__30984,in$){
var vec__30985 = p__30984;
var v = cljs.core.nth.call(null,vec__30985,(0),null);
var seen = cljs.core.nth.call(null,vec__30985,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args30994 = [];
var len__22763__auto___30997 = arguments.length;
var i__22764__auto___30998 = (0);
while(true){
if((i__22764__auto___30998 < len__22763__auto___30997)){
args30994.push((arguments[i__22764__auto___30998]));

var G__30999 = (i__22764__auto___30998 + (1));
i__22764__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var G__30996 = args30994.length;
switch (G__30996) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30994.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__31001 = null;
var G__31001__0 = (function (){
return rf.call(null);
});
var G__31001__1 = (function (acc){
return rf.call(null,acc);
});
var G__31001__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__31001 = function(acc,input){
switch(arguments.length){
case 0:
return G__31001__0.call(this);
case 1:
return G__31001__1.call(this,acc);
case 2:
return G__31001__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31001.cljs$core$IFn$_invoke$arity$0 = G__31001__0;
G__31001.cljs$core$IFn$_invoke$arity$1 = G__31001__1;
G__31001.cljs$core$IFn$_invoke$arity$2 = G__31001__2;
return G__31001;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31004 = arguments.length;
var i__22764__auto___31005 = (0);
while(true){
if((i__22764__auto___31005 < len__22763__auto___31004)){
args__22770__auto__.push((arguments[i__22764__auto___31005]));

var G__31006 = (i__22764__auto___31005 + (1));
i__22764__auto___31005 = G__31006;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__21705__auto__ = m1;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq31002){
var G__31003 = cljs.core.first.call(null,seq31002);
var seq31002__$1 = cljs.core.next.call(null,seq31002);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__31003,seq31002__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31013 = arguments.length;
var i__22764__auto___31014 = (0);
while(true){
if((i__22764__auto___31014 < len__22763__auto___31013)){
args__22770__auto__.push((arguments[i__22764__auto___31014]));

var G__31015 = (i__22764__auto___31014 + (1));
i__22764__auto___31014 = G__31015;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__31011){
var vec__31012 = p__31011;
var _QMARK_comparator = cljs.core.nth.call(null,vec__31012,(0),null);
var comparator = (function (){var or__21705__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__31012,_QMARK_comparator){
return (function (p1__31007_SHARP_,p2__31008_SHARP_){
if((comparator.call(null,p1__31007_SHARP_,p2__31008_SHARP_) > (0))){
return p2__31008_SHARP_;
} else {
return p1__31007_SHARP_;
}
});})(comparator,vec__31012,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq31009){
var G__31010 = cljs.core.first.call(null,seq31009);
var seq31009__$1 = cljs.core.next.call(null,seq31009);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__31010,seq31009__$1);
});
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31022 = arguments.length;
var i__22764__auto___31023 = (0);
while(true){
if((i__22764__auto___31023 < len__22763__auto___31022)){
args__22770__auto__.push((arguments[i__22764__auto___31023]));

var G__31024 = (i__22764__auto___31023 + (1));
i__22764__auto___31023 = G__31024;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__31020){
var vec__31021 = p__31020;
var _QMARK_comparator = cljs.core.nth.call(null,vec__31021,(0),null);
var comparator = (function (){var or__21705__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__31021,_QMARK_comparator){
return (function (p1__31016_SHARP_,p2__31017_SHARP_){
if((comparator.call(null,p1__31016_SHARP_,p2__31017_SHARP_) < (0))){
return p2__31017_SHARP_;
} else {
return p1__31016_SHARP_;
}
});})(comparator,vec__31021,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq31018){
var G__31019 = cljs.core.first.call(null,seq31018);
var seq31018__$1 = cljs.core.next.call(null,seq31018);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__31019,seq31018__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__31025 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__31026 = (idx + (1));
v = G__31025;
idx = G__31026;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__31027 = cljs.core.conj.call(null,v,f.call(null));
var G__31028 = (idx + (1));
v = G__31027;
idx = G__31028;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__21705__auto__ = fmt;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31031 = arguments.length;
var i__22764__auto___31032 = (0);
while(true){
if((i__22764__auto___31032 < len__22763__auto___31031)){
args__22770__auto__.push((arguments[i__22764__auto___31032]));

var G__31033 = (i__22764__auto___31032 + (1));
i__22764__auto___31032 = G__31033;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq31029){
var G__31030 = cljs.core.first.call(null,seq31029);
var seq31029__$1 = cljs.core.next.call(null,seq31029);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__31030,seq31029__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
var replacement__$1 = ((!(cljs.core.fn_QMARK_.call(null,replacement)))?replacement:(function() { 
var G__31034__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__31034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31035__i = 0, G__31035__a = new Array(arguments.length -  0);
while (G__31035__i < G__31035__a.length) {G__31035__a[G__31035__i] = arguments[G__31035__i + 0]; ++G__31035__i;}
  args = new cljs.core.IndexedSeq(G__31035__a,0);
} 
return G__31034__delegate.call(this,args);};
G__31034.cljs$lang$maxFixedArity = 0;
G__31034.cljs$lang$applyTo = (function (arglist__31036){
var args = cljs.core.seq(arglist__31036);
return G__31034__delegate(args);
});
G__31034.cljs$core$IFn$_invoke$arity$variadic = G__31034__delegate;
return G__31034;
})()
);
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement__$1);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31043 = arguments.length;
var i__22764__auto___31044 = (0);
while(true){
if((i__22764__auto___31044 < len__22763__auto___31043)){
args__22770__auto__.push((arguments[i__22764__auto___31044]));

var G__31045 = (i__22764__auto___31044 + (1));
i__22764__auto___31044 = G__31045;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__31040){
var vec__31041 = p__31040;
var _QMARK_max_len = cljs.core.nth.call(null,vec__31041,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__31041,_QMARK_max_len){
return (function (){
return s;
});})(vec__31041,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"s","s",-948495851,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__31042 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__31042,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__31042,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq31037){
var G__31038 = cljs.core.first.call(null,seq31037);
var seq31037__$1 = cljs.core.next.call(null,seq31037);
var G__31039 = cljs.core.first.call(null,seq31037__$1);
var seq31037__$2 = cljs.core.next.call(null,seq31037__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__31038,G__31039,seq31037__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31051 = arguments.length;
var i__22764__auto___31052 = (0);
while(true){
if((i__22764__auto___31052 < len__22763__auto___31051)){
args__22770__auto__.push((arguments[i__22764__auto___31052]));

var G__31053 = (i__22764__auto___31052 + (1));
i__22764__auto___31052 = G__31053;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__31049){
var vec__31050 = p__31049;
var start_idx = cljs.core.nth.call(null,vec__31050,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__31050,(1),null);
var start_idx__$1 = ((function (){var or__21705__auto__ = start_idx;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq31046){
var G__31047 = cljs.core.first.call(null,seq31046);
var seq31046__$1 = cljs.core.next.call(null,seq31046);
var G__31048 = cljs.core.first.call(null,seq31046__$1);
var seq31046__$2 = cljs.core.next.call(null,seq31046__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__31047,G__31048,seq31046__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31056 = arguments.length;
var i__22764__auto___31057 = (0);
while(true){
if((i__22764__auto___31057 < len__22763__auto___31056)){
args__22770__auto__.push((arguments[i__22764__auto___31057]));

var G__31058 = (i__22764__auto___31057 + (1));
i__22764__auto___31057 = G__31058;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq31054){
var G__31055 = cljs.core.first.call(null,seq31054);
var seq31054__$1 = cljs.core.next.call(null,seq31054);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__31055,seq31054__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31060 = arguments.length;
var i__22764__auto___31061 = (0);
while(true){
if((i__22764__auto___31061 < len__22763__auto___31060)){
args__22770__auto__.push((arguments[i__22764__auto___31061]));

var G__31062 = (i__22764__auto___31061 + (1));
i__22764__auto___31061 = G__31062;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq31059){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31059));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args31063 = [];
var len__22763__auto___31066 = arguments.length;
var i__22764__auto___31067 = (0);
while(true){
if((i__22764__auto___31067 < len__22763__auto___31066)){
args31063.push((arguments[i__22764__auto___31067]));

var G__31068 = (i__22764__auto___31067 + (1));
i__22764__auto___31067 = G__31068;
continue;
} else {
}
break;
}

var G__31065 = args31063.length;
switch (G__31065) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31063.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(15)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(14)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 *   Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * As `clojure.core/memoize` but uses delays to avoid write races.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__31070__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__21705__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__21705__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__21705__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__21705__auto__,cache_))
,null));
}
});})(or__21705__auto__,cache_))
);
}
})());
};
var G__31070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31071__i = 0, G__31071__a = new Array(arguments.length -  0);
while (G__31071__i < G__31071__a.length) {G__31071__a[G__31071__i] = arguments[G__31071__i + 0]; ++G__31071__i;}
  args = new cljs.core.IndexedSeq(G__31071__a,0);
} 
return G__31070__delegate.call(this,args);};
G__31070.cljs$lang$maxFixedArity = 0;
G__31070.cljs$lang$applyTo = (function (arglist__31072){
var args = cljs.core.seq(arglist__31072);
return G__31070__delegate(args);
});
G__31070.cljs$core$IFn$_invoke$arity$variadic = G__31070__delegate;
return G__31070;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__31073__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__21705__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__21705__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__21705__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__21705__auto__,cache_))
,null))], true, false);
}
});})(or__21705__auto__,cache_))
),args);
}
})());
};
var G__31073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31074__i = 0, G__31074__a = new Array(arguments.length -  0);
while (G__31074__i < G__31074__a.length) {G__31074__a[G__31074__i] = arguments[G__31074__i + 0]; ++G__31074__i;}
  args = new cljs.core.IndexedSeq(G__31074__a,0);
} 
return G__31073__delegate.call(this,args);};
G__31073.cljs$lang$maxFixedArity = 0;
G__31073.cljs$lang$applyTo = (function (arglist__31075){
var args = cljs.core.seq(arglist__31075);
return G__31073__delegate(args);
});
G__31073.cljs$core$IFn$_invoke$arity$variadic = G__31073__delegate;
return G__31073;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31080 = arguments.length;
var i__22764__auto___31081 = (0);
while(true){
if((i__22764__auto___31081 < len__22763__auto___31080)){
args__22770__auto__.push((arguments[i__22764__auto___31081]));

var G__31082 = (i__22764__auto___31081 + (1));
i__22764__auto___31081 = G__31082;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__31076_SHARP_){
if(cljs.core.truth_(p1__31076_SHARP_)){
return p1__31076_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq31077){
var G__31078 = cljs.core.first.call(null,seq31077);
var seq31077__$1 = cljs.core.next.call(null,seq31077);
var G__31079 = cljs.core.first.call(null,seq31077__$1);
var seq31077__$2 = cljs.core.next.call(null,seq31077__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__31078,G__31079,seq31077__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args31085 = [];
var len__22763__auto___31108 = arguments.length;
var i__22764__auto___31109 = (0);
while(true){
if((i__22764__auto___31109 < len__22763__auto___31108)){
args31085.push((arguments[i__22764__auto___31109]));

var G__31110 = (i__22764__auto___31109 + (1));
i__22764__auto___31109 = G__31110;
continue;
} else {
}
break;
}

var G__31087 = args31085.length;
switch (G__31087) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31085.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__31112__delegate = function (p__31088){
var vec__31089 = p__31088;
var arg1 = cljs.core.nth.call(null,vec__31089,(0),null);
var argn = cljs.core.nthnext.call(null,vec__31089,(1));
var args = vec__31089;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__21705__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__21705__auto__,fresh_QMARK_,args__$1,vec__31089,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__21693__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__21693__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__21705__auto__,fresh_QMARK_,args__$1,vec__31089,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__21705__auto__,fresh_QMARK_,args__$1,vec__31089,arg1,argn,args,cache_))
,null));
}
});})(or__21705__auto__,fresh_QMARK_,args__$1,vec__31089,arg1,argn,args,cache_))
);
}
})());
}
};
var G__31112 = function (var_args){
var p__31088 = null;
if (arguments.length > 0) {
var G__31113__i = 0, G__31113__a = new Array(arguments.length -  0);
while (G__31113__i < G__31113__a.length) {G__31113__a[G__31113__i] = arguments[G__31113__i + 0]; ++G__31113__i;}
  p__31088 = new cljs.core.IndexedSeq(G__31113__a,0);
} 
return G__31112__delegate.call(this,p__31088);};
G__31112.cljs$lang$maxFixedArity = 0;
G__31112.cljs$lang$applyTo = (function (arglist__31114){
var p__31088 = cljs.core.seq(arglist__31114);
return G__31112__delegate(p__31088);
});
G__31112.cljs$core$IFn$_invoke$arity$variadic = G__31112__delegate;
return G__31112;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__31115__delegate = function (p__31090){
var vec__31091 = p__31090;
var arg1 = cljs.core.nth.call(null,vec__31091,(0),null);
var argn = cljs.core.nthnext.call(null,vec__31091,(1));
var args = vec__31091;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_31116 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_31116,vec__31091,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_31116,vec__31091,arg1,argn,args,cache){
return (function (m_STAR_,k,p__31092){
var vec__31093 = p__31092;
var dv = cljs.core.nth.call(null,vec__31093,(0),null);
var udt = cljs.core.nth.call(null,vec__31093,(1),null);
var cv = vec__31093;
if(((instant_31116 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_31116,vec__31091,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_31116,vec__31091,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__31094 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__31091,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__21693__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__21693__auto____$1){
var vec__31096 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__31096,(0),null);
var udt = cljs.core.nth.call(null,vec__31096,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__31091,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__31091,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__31091,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__31094,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__31115 = function (var_args){
var p__31090 = null;
if (arguments.length > 0) {
var G__31117__i = 0, G__31117__a = new Array(arguments.length -  0);
while (G__31117__i < G__31117__a.length) {G__31117__a[G__31117__i] = arguments[G__31117__i + 0]; ++G__31117__i;}
  p__31090 = new cljs.core.IndexedSeq(G__31117__a,0);
} 
return G__31115__delegate.call(this,p__31090);};
G__31115.cljs$lang$maxFixedArity = 0;
G__31115.cljs$lang$applyTo = (function (arglist__31118){
var p__31090 = cljs.core.seq(arglist__31118);
return G__31115__delegate(p__31090);
});
G__31115.cljs$core$IFn$_invoke$arity$variadic = G__31115__delegate;
return G__31115;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cache_size;
}),null)),new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null),taoensso.encore.pos_int_QMARK_,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null));


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__31119__delegate = function (p__31097){
var vec__31098 = p__31097;
var arg1 = cljs.core.nth.call(null,vec__31098,(0),null);
var argn = cljs.core.nthnext.call(null,vec__31098,(1));
var args = vec__31098;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_31120 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_31120,vec__31098,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_31120,vec__31098,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__31099){
var vec__31100 = p__31099;
var dv = cljs.core.nth.call(null,vec__31100,(0),null);
var udt = cljs.core.nth.call(null,vec__31100,(1),null);
var _ = cljs.core.nth.call(null,vec__31100,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__31100,(3),null);
var cv = vec__31100;
if(((instant_31120 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_31120,vec__31098,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_31120,vec__31098,arg1,argn,args,state){
return (function (p1__31084_SHARP_){
return cljs.core.nth.call(null,p1__31084_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_31120,vec__31098,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_31120,vec__31098,arg1,argn,args,state){
return (function (p1__31083_SHARP_){
return cljs.core.nth.call(null,p1__31083_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_31120,vec__31098,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_31120,vec__31098,arg1,argn,args,state){
return (function (k){
var vec__31101 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__31101,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31101,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__31101,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__31101,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_31120,vec__31098,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_31120,vec__31098,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__31102 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__31098,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__21693__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__21693__auto____$1){
var or__21705__auto__ = (_QMARK_instant == null);
if(or__21705__auto__){
return or__21705__auto__;
} else {
var vec__31106 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__31106,(0),null);
var udt = cljs.core.nth.call(null,vec__31106,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__31098,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__31098,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__31098,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__31102,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__31102,dv,vec__31098,arg1,argn,args,state){
return (function (m){
var temp__4425__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__31107 = temp__4425__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__31107,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__31107,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__31107,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__31107,(3),null);
var cv = vec__31107;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__31102,dv,vec__31098,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__31119 = function (var_args){
var p__31097 = null;
if (arguments.length > 0) {
var G__31121__i = 0, G__31121__a = new Array(arguments.length -  0);
while (G__31121__i < G__31121__a.length) {G__31121__a[G__31121__i] = arguments[G__31121__i + 0]; ++G__31121__i;}
  p__31097 = new cljs.core.IndexedSeq(G__31121__a,0);
} 
return G__31119__delegate.call(this,p__31097);};
G__31119.cljs$lang$maxFixedArity = 0;
G__31119.cljs$lang$applyTo = (function (arglist__31122){
var p__31097 = cljs.core.seq(arglist__31122);
return G__31119__delegate(p__31097);
});
G__31119.cljs$core$IFn$_invoke$arity$variadic = G__31119__delegate;
return G__31119;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__31158){
var vec__31159 = p__31158;
var _ = cljs.core.nth.call(null,vec__31159,(0),null);
var win_ms = cljs.core.nth.call(null,vec__31159,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__31159,(2),null);
var spec = vec__31159;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__31160){
var vec__31161 = p__31160;
var _ = cljs.core.nth.call(null,vec__31161,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31161,(1),null);
var id = cljs.core.nth.call(null,vec__31161,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__31162){
var vec__31178 = p__31162;
var req_id = cljs.core.nth.call(null,vec__31178,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__21693__auto__ = req_id;
if(cljs.core.truth_(and__21693__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__21693__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__31181){
var vec__31182 = p__31181;
var ___$1 = cljs.core.nth.call(null,vec__31182,(0),null);
var udt = cljs.core.nth.call(null,vec__31182,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__31182,(2),null);
var x__22036__auto__ = acc;
var y__22037__auto__ = udt;
return ((x__22036__auto__ > y__22037__auto__) ? x__22036__auto__ : y__22037__auto__);
});})(m__$1,instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__31183 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__31184 = in_vspecs;
var vec__31185 = cljs.core.nth.call(null,vec__31184,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__31185,(0),null);
var win_ms = cljs.core.nth.call(null,vec__31185,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__31185,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__31184,(1));
var vec__31186 = in_vstate;
var vec__31187 = cljs.core.nth.call(null,vec__31186,(0),null);
var ncalls = cljs.core.nth.call(null,vec__31187,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__31187,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__31186,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__21705__auto__ = (_QMARK_worst_limit_offence == null);
if(or__21705__auto__){
return or__21705__auto__;
} else {
var vec__31189 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__31189,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31189,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__31193 = next_in_vspecs;
var G__31194 = next_in_vstate;
var G__31195 = new_out_vstate;
var G__31196 = new__QMARK_worst_limit_offence;
in_vspecs = G__31193;
in_vstate = G__31194;
out_vstate = G__31195;
_QMARK_worst_limit_offence = G__31196;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__31183,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__31183,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__31183,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__31190){
var vec__31191 = p__31190;
var ncalls = cljs.core.nth.call(null,vec__31191,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__31191,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__31183,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__31192 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__31192,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31192,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__31178,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__31162 = null;
if (arguments.length > 0) {
var G__31197__i = 0, G__31197__a = new Array(arguments.length -  0);
while (G__31197__i < G__31197__a.length) {G__31197__a[G__31197__i] = arguments[G__31197__i + 0]; ++G__31197__i;}
  p__31162 = new cljs.core.IndexedSeq(G__31197__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__31162);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__31198){
var p__31162 = cljs.core.seq(arglist__31198);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__31162);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__31199__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__31199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31200__i = 0, G__31200__a = new Array(arguments.length -  0);
while (G__31200__i < G__31200__a.length) {G__31200__a[G__31200__i] = arguments[G__31200__i + 0]; ++G__31200__i;}
  args = new cljs.core.IndexedSeq(G__31200__a,0);
} 
return G__31199__delegate.call(this,args);};
G__31199.cljs$lang$maxFixedArity = 0;
G__31199.cljs$lang$applyTo = (function (arglist__31201){
var args = cljs.core.seq(arglist__31201);
return G__31199__delegate(args);
});
G__31199.cljs$core$IFn$_invoke$arity$variadic = G__31199__delegate;
return G__31199;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__21693__auto__ = typeof window !== 'undefined';
if(and__21693__auto__){
return (window["performance"]);
} else {
return and__21693__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__21705__auto__ = (perf["now"]);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var or__21705__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__21705__auto____$1)){
return or__21705__auto____$1;
} else {
var or__21705__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__21705__auto____$2)){
return or__21705__auto____$2;
} else {
var or__21705__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__21705__auto____$3)){
return or__21705__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__21693__auto__ = typeof console !== 'undefined';
if(and__21693__auto__){
return console.log;
} else {
return and__21693__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4423__auto__))
} else {
return ((function (temp__4423__auto__){
return (function (xs){
return null;
});
;})(temp__4423__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31209 = arguments.length;
var i__22764__auto___31210 = (0);
while(true){
if((i__22764__auto___31210 < len__22763__auto___31209)){
args__22770__auto__.push((arguments[i__22764__auto___31210]));

var G__31211 = (i__22764__auto___31210 + (1));
i__22764__auto___31210 = G__31211;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq31202){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31202));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31212 = arguments.length;
var i__22764__auto___31213 = (0);
while(true){
if((i__22764__auto___31213 < len__22763__auto___31212)){
args__22770__auto__.push((arguments[i__22764__auto___31213]));

var G__31214 = (i__22764__auto___31213 + (1));
i__22764__auto___31213 = G__31214;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq31203){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31203));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31215 = arguments.length;
var i__22764__auto___31216 = (0);
while(true){
if((i__22764__auto___31216 < len__22763__auto___31215)){
args__22770__auto__.push((arguments[i__22764__auto___31216]));

var G__31217 = (i__22764__auto___31216 + (1));
i__22764__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq31204){
var G__31205 = cljs.core.first.call(null,seq31204);
var seq31204__$1 = cljs.core.next.call(null,seq31204);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__31205,seq31204__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31218 = arguments.length;
var i__22764__auto___31219 = (0);
while(true){
if((i__22764__auto___31219 < len__22763__auto___31218)){
args__22770__auto__.push((arguments[i__22764__auto___31219]));

var G__31220 = (i__22764__auto___31219 + (1));
i__22764__auto___31219 = G__31220;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq31206){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31206));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31221 = arguments.length;
var i__22764__auto___31222 = (0);
while(true){
if((i__22764__auto___31222 < len__22763__auto___31221)){
args__22770__auto__.push((arguments[i__22764__auto___31222]));

var G__31223 = (i__22764__auto___31222 + (1));
i__22764__auto___31222 = G__31223;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq31207){
var G__31208 = cljs.core.first.call(null,seq31207);
var seq31207__$1 = cljs.core.next.call(null,seq31207);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__31208,seq31207__$1);
});
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return params;
}),null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__31225 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__31225) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__31229,callback){
var map__31247 = p__31229;
var map__31247__$1 = ((((!((map__31247 == null)))?((((map__31247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
var opts = map__31247__$1;
var method = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (){
return timeout_ms;
});})(map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
,null)),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__21705__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__31251 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__31251) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__31250 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__31250,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__31250,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__31252_31265 = xhr;
goog.events.listenOnce(G__31252_31265,goog.net.EventType.READY,((function (G__31252_31265,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__31252_31265,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__31252_31265,goog.net.EventType.COMPLETE,((function (G__31252_31265,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__31258 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__31252_31265,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__31228_SHARP_,p2__31227_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__31227_SHARP_,p1__31228_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__31252_31265,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__31259 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__31258.call(null,"/edn",expr__31259))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__31258.call(null,"/json",expr__31259))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__31258.call(null,"/xml",expr__31259))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__31258.call(null,"/html",expr__31259))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__31262 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__31262) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e31261){if((e31261 instanceof Error)){
var e = e31261;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e31261;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__21705__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__31252_31265,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___31267 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___31267)){
var pf_31268 = temp__4425__auto___31267;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_31268,temp__4425__auto___31267,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__21693__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__21693__auto__;
}
})())?(loaded / total):null);
return pf_31268.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_31268,temp__4425__auto___31267,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__31250,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__31247,map__31247__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__31263_31269 = xhr;
var temp__4425__auto___31270 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___31270)){
var x_31271 = temp__4425__auto___31270;
G__31263_31269.setTimeoutInterval((function (){var or__21705__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___31272 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___31272)){
var x_31273 = temp__4425__auto___31272;
G__31263_31269.setWithCredentials(true);
} else {
}

var temp__4425__auto___31274 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___31274)){
var x_31275 = temp__4425__auto___31274;
G__31263_31269.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e31249){if((e31249 instanceof Error)){
var e = e31249;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e31249;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31280 = arguments.length;
var i__22764__auto___31281 = (0);
while(true){
if((i__22764__auto___31281 < len__22763__auto___31280)){
args__22770__auto__.push((arguments[i__22764__auto___31281]));

var G__31282 = (i__22764__auto___31281 + (1));
i__22764__auto___31281 = G__31282;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__31278){
var vec__31279 = p__31278;
var encoding = cljs.core.nth.call(null,vec__31279,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq31276){
var G__31277 = cljs.core.first.call(null,seq31276);
var seq31276__$1 = cljs.core.next.call(null,seq31276);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__31277,seq31276__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__21705__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__22477__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__31291(s__31292){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__31292__$1 = s__31292;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31292__$1);
if(temp__4425__auto__){
var s__31292__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31292__$2)){
var c__22475__auto__ = cljs.core.chunk_first.call(null,s__31292__$2);
var size__22476__auto__ = cljs.core.count.call(null,c__22475__auto__);
var b__31294 = cljs.core.chunk_buffer.call(null,size__22476__auto__);
if((function (){var i__31293 = (0);
while(true){
if((i__31293 < size__22476__auto__)){
var vec__31297 = cljs.core._nth.call(null,c__22475__auto__,i__31293);
var k = cljs.core.nth.call(null,vec__31297,(0),null);
var v = cljs.core.nth.call(null,vec__31297,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__31294,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__21705__auto__ = cljs.core.seq.call(null,v);
if(or__21705__auto__){
return or__21705__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__31299 = (i__31293 + (1));
i__31293 = G__31299;
continue;
} else {
var G__31300 = (i__31293 + (1));
i__31293 = G__31300;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31294),taoensso$encore$format_query_string_$_iter__31291.call(null,cljs.core.chunk_rest.call(null,s__31292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31294),null);
}
} else {
var vec__31298 = cljs.core.first.call(null,s__31292__$2);
var k = cljs.core.nth.call(null,vec__31298,(0),null);
var v = cljs.core.nth.call(null,vec__31298,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__21705__auto__ = cljs.core.seq.call(null,v);
if(or__21705__auto__){
return or__21705__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__31291.call(null,cljs.core.rest.call(null,s__31292__$2)));
} else {
var G__31301 = cljs.core.rest.call(null,s__31292__$2);
s__31292__$1 = G__31301;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__22477__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31307 = arguments.length;
var i__22764__auto___31308 = (0);
while(true){
if((i__22764__auto___31308 < len__22763__auto___31307)){
args__22770__auto__.push((arguments[i__22764__auto___31308]));

var G__31309 = (i__22764__auto___31308 + (1));
i__22764__auto___31308 = G__31309;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__31304){
var vec__31305 = p__31304;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__31305,(0),null);
var encoding = cljs.core.nth.call(null,vec__31305,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__31305,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31306 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__31306,(0),null);
var v = cljs.core.nth.call(null,vec__31306,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__31305,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__31305,keywordize_QMARK_,encoding){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__31305,keywordize_QMARK_,encoding))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.map_QMARK_,new cljs.core.Symbol(null,"map?","map?",-1780568534,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq31302){
var G__31303 = cljs.core.first.call(null,seq31302);
var seq31302__$1 = cljs.core.next.call(null,seq31302);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__31303,seq31302__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__31311 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__31311,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__31311,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4423__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4423__auto__)){
var qstr = temp__4423__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31316 = arguments.length;
var i__22764__auto___31317 = (0);
while(true){
if((i__22764__auto___31317 < len__22763__auto___31316)){
args__22770__auto__.push((arguments[i__22764__auto___31317]));

var G__31318 = (i__22764__auto___31317 + (1));
i__22764__auto___31317 = G__31318;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__31314){
var vec__31315 = p__31314;
var type = cljs.core.nth.call(null,vec__31315,(0),null);
var nplaces = cljs.core.nth.call(null,vec__31315,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__21705__auto__ = type;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq31312){
var G__31313 = cljs.core.first.call(null,seq31312);
var seq31312__$1 = cljs.core.next.call(null,seq31312);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__31313,seq31312__$1);
});
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31323 = arguments.length;
var i__22764__auto___31324 = (0);
while(true){
if((i__22764__auto___31324 < len__22763__auto___31323)){
args__22770__auto__.push((arguments[i__22764__auto___31324]));

var G__31325 = (i__22764__auto___31324 + (1));
i__22764__auto___31324 = G__31325;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__31321){
var vec__31322 = p__31321;
var nattempt = cljs.core.nth.call(null,vec__31322,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__21705__auto__ = nattempt;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq31319){
var G__31320 = cljs.core.first.call(null,seq31319);
var seq31319__$1 = cljs.core.next.call(null,seq31319);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31320,seq31319__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2251,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_bool.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2252,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_int.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2253,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_float.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__31326__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__31326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31327__i = 0, G__31327__a = new Array(arguments.length -  0);
while (G__31327__i < G__31327__a.length) {G__31327__a[G__31327__i] = arguments[G__31327__i + 0]; ++G__31327__i;}
  args = new cljs.core.IndexedSeq(G__31327__a,0);
} 
return G__31326__delegate.call(this,args);};
G__31326.cljs$lang$maxFixedArity = 0;
G__31326.cljs$lang$applyTo = (function (arglist__31328){
var args = cljs.core.seq(arglist__31328);
return G__31326__delegate(args);
});
G__31326.cljs$core$IFn$_invoke$arity$variadic = G__31326__delegate;
return G__31326;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31343 = arguments.length;
var i__22764__auto___31344 = (0);
while(true){
if((i__22764__auto___31344 < len__22763__auto___31343)){
args__22770__auto__.push((arguments[i__22764__auto___31344]));

var G__31345 = (i__22764__auto___31344 + (1));
i__22764__auto___31344 = G__31345;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq31329){
var G__31330 = cljs.core.first.call(null,seq31329);
var seq31329__$1 = cljs.core.next.call(null,seq31329);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__31330,seq31329__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31346 = arguments.length;
var i__22764__auto___31347 = (0);
while(true){
if((i__22764__auto___31347 < len__22763__auto___31346)){
args__22770__auto__.push((arguments[i__22764__auto___31347]));

var G__31348 = (i__22764__auto___31347 + (1));
i__22764__auto___31347 = G__31348;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq31331){
var G__31332 = cljs.core.first.call(null,seq31331);
var seq31331__$1 = cljs.core.next.call(null,seq31331);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__31332,seq31331__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31349 = arguments.length;
var i__22764__auto___31350 = (0);
while(true){
if((i__22764__auto___31350 < len__22763__auto___31349)){
args__22770__auto__.push((arguments[i__22764__auto___31350]));

var G__31351 = (i__22764__auto___31350 + (1));
i__22764__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq31333){
var G__31334 = cljs.core.first.call(null,seq31333);
var seq31333__$1 = cljs.core.next.call(null,seq31333);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__31334,seq31333__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31352 = arguments.length;
var i__22764__auto___31353 = (0);
while(true){
if((i__22764__auto___31353 < len__22763__auto___31352)){
args__22770__auto__.push((arguments[i__22764__auto___31353]));

var G__31354 = (i__22764__auto___31353 + (1));
i__22764__auto___31353 = G__31354;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq31335){
var G__31336 = cljs.core.first.call(null,seq31335);
var seq31335__$1 = cljs.core.next.call(null,seq31335);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__31336,seq31335__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31355 = arguments.length;
var i__22764__auto___31356 = (0);
while(true){
if((i__22764__auto___31356 < len__22763__auto___31355)){
args__22770__auto__.push((arguments[i__22764__auto___31356]));

var G__31357 = (i__22764__auto___31356 + (1));
i__22764__auto___31356 = G__31357;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq31337){
var G__31338 = cljs.core.first.call(null,seq31337);
var seq31337__$1 = cljs.core.next.call(null,seq31337);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__31338,seq31337__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31358 = arguments.length;
var i__22764__auto___31359 = (0);
while(true){
if((i__22764__auto___31359 < len__22763__auto___31358)){
args__22770__auto__.push((arguments[i__22764__auto___31359]));

var G__31360 = (i__22764__auto___31359 + (1));
i__22764__auto___31359 = G__31360;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq31339){
var G__31340 = cljs.core.first.call(null,seq31339);
var seq31339__$1 = cljs.core.next.call(null,seq31339);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__31340,seq31339__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31361 = arguments.length;
var i__22764__auto___31362 = (0);
while(true){
if((i__22764__auto___31362 < len__22763__auto___31361)){
args__22770__auto__.push((arguments[i__22764__auto___31362]));

var G__31363 = (i__22764__auto___31362 + (1));
i__22764__auto___31362 = G__31363;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq31341){
var G__31342 = cljs.core.first.call(null,seq31341);
var seq31341__$1 = cljs.core.next.call(null,seq31341);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__31342,seq31341__$1);
});

//# sourceMappingURL=encore.js.map