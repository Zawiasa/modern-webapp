// Compiled by ClojureScript 1.9.946 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(91),(1)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__44232 = arguments.length;
switch (G__44232) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__44233 = (((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__44233,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__44233,(1),null);
var vec__44236 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__44236,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__44236,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__44241 = arguments.length;
switch (G__44241) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__44244 = arguments.length;
switch (G__44244) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_44245 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_44246 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_44246;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_44245;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__30704__auto__ = (function (){var or__40669__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__30704__auto__)){
var data_map = b2__30704__auto__;
return cljs.core.conj.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__40657__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__40657__auto__){
var and__40657__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__40657__auto____$1)){
return true;
} else {
return and__40657__auto____$1;
}
} else {
return and__40657__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__40657__auto__ = (x instanceof cljs.core.Symbol);
if(and__40657__auto__){
var and__40657__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__40657__auto____$1)){
return true;
} else {
return and__40657__auto____$1;
}
} else {
return and__40657__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__40657__auto__ = (x instanceof cljs.core.Keyword);
if(and__40657__auto__){
var and__40657__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__40657__auto____$1)){
return true;
} else {
return and__40657__auto____$1;
}
} else {
return and__40657__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__40657__auto__ = typeof x === 'number';
if(and__40657__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__40657__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
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
if(taoensso.encore.named_QMARK_.call(null,x)){
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
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__30704__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var ns = b2__30704__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
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

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
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
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__30704__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var n = b2__30704__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__30704__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var n = b2__30704__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__30704__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var n = b2__30704__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__30704__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var n = b2__30704__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__30704__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var n = b2__30704__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__30704__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__30704__auto__)){
var f = b2__30704__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
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

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__30704__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__30704__auto__)){
var email = b2__30704__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e44252){if((e44252 instanceof Error)){
var _ = e44252;
return false;
} else {
throw e44252;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__44254 = arguments.length;
switch (G__44254) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x)),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__40669__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__44257 = arguments.length;
switch (G__44257) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__44261){
var vec__44262 = p__44261;
var k = cljs.core.nth.call(null,vec__44262,(0),null);
var v = cljs.core.nth.call(null,vec__44262,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
var inc_44265 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_44265){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,inc_44265){
return (function (acc,in$){
return rf.call(null,acc,cljs.core._vreset_BANG_.call(null,i,inc_44265.call(null,cljs.core._deref.call(null,i))),in$);
});})(i,inc_44265))
,init,coll);
});})(inc_44265))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__44267_SHARP_,p2__44266_SHARP_){
return proc.call(null,p2__44266_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__44270_SHARP_,p2__44268_SHARP_,p3__44269_SHARP_){
return proc.call(null,p2__44268_SHARP_,p3__44269_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__44273_SHARP_,p2__44271_SHARP_,p3__44272_SHARP_){
return proc.call(null,p2__44271_SHARP_,p3__44272_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__44276_SHARP_,p2__44274_SHARP_,p3__44275_SHARP_){
return proc.call(null,p2__44274_SHARP_,p3__44275_SHARP_);
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var b2__30704__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__30704__auto__)){
var p = b2__30704__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var b2__30704__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__30704__auto__)){
var p = b2__30704__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
var inc_44278 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_44278){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (idx_,inc_44278){
return (function (){
return cljs.core._vreset_BANG_.call(null,idx_,inc_44278.call(null,cljs.core._deref.call(null,idx_)));
});
;})(idx_,inc_44278))
});})(inc_44278))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__44280 = arguments.length;
switch (G__44280) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

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
var G__44283 = arguments.length;
switch (G__44283) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__44284 = type;
var G__44284__$1 = (((G__44284 instanceof cljs.core.Keyword))?G__44284.fqn:null);
switch (G__44284__$1) {
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
throw cljs.core.ex_info.call(null,"Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__44288 = arguments.length;
switch (G__44288) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__44289){
var map__44290 = p__44289;
var map__44290__$1 = ((((!((map__44290 == null)))?((((map__44290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44290):map__44290);
var min = cljs.core.get.call(null,map__44290__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__44290__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__44290__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__44298 = arguments.length;
switch (G__44298) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44300 = arguments.length;
var i__41949__auto___44301 = (0);
while(true){
if((i__41949__auto___44301 < len__41948__auto___44300)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44301]));

var G__44302 = (i__41949__auto___44301 + (1));
i__41949__auto___44301 = G__44302;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41972__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__40657__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__40657__auto__){
var and__40657__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__40657__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__40657__auto____$1,and__40657__auto__){
return (function (p1__44293_SHARP_){
return cljs.core._EQ_.call(null,p1__44293_SHARP_,x);
});})(and__40657__auto____$1,and__40657__auto__))
,more);
} else {
return and__40657__auto____$1;
}
} else {
return and__40657__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq44295){
var G__44296 = cljs.core.first.call(null,seq44295);
var seq44295__$1 = cljs.core.next.call(null,seq44295);
var G__44297 = cljs.core.first.call(null,seq44295__$1);
var seq44295__$2 = cljs.core.next.call(null,seq44295__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__44296,G__44297,seq44295__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__44308 = arguments.length;
switch (G__44308) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44310 = arguments.length;
var i__41949__auto___44311 = (0);
while(true){
if((i__41949__auto___44311 < len__41948__auto___44310)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44311]));

var G__44312 = (i__41949__auto___44311 + (1));
i__41949__auto___44311 = G__44312;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41972__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq44304){
var G__44305 = cljs.core.first.call(null,seq44304);
var seq44304__$1 = cljs.core.next.call(null,seq44304);
var G__44306 = cljs.core.first.call(null,seq44304__$1);
var seq44304__$2 = cljs.core.next.call(null,seq44304__$1);
var G__44307 = cljs.core.first.call(null,seq44304__$2);
var seq44304__$3 = cljs.core.next.call(null,seq44304__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__44305,G__44306,G__44307,seq44304__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__44313 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__44313,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__44313,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__30704__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__30704__auto__)){
var s = b2__30704__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__30704__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__30704__auto__)){
var s = b2__30704__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__44317 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__44317,(0),null);
var yc = cljs.core.nth.call(null,vec__44317,(1),null);
var zc = cljs.core.nth.call(null,vec__44317,(2),null);
var vec__44320 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__44320,(0),null);
var ym = cljs.core.nth.call(null,vec__44320,(1),null);
var zm = cljs.core.nth.call(null,vec__44320,(2),null);
var vec__44323 = cljs.core.mapv.call(null,((function (vec__44317,xc,yc,zc,vec__44320,xm,ym,zm){
return (function (p1__44316_SHARP_){
var or__40669__auto__ = p1__44316_SHARP_;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return (0);
}
});})(vec__44317,xc,yc,zc,vec__44320,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__44323,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__44323,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__44323,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__44327 = arguments.length;
switch (G__44327) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44330 = arguments.length;
var i__41949__auto___44331 = (0);
while(true){
if((i__41949__auto___44331 < len__41948__auto___44330)){
args__41955__auto__.push((arguments[i__41949__auto___44331]));

var G__44332 = (i__41949__auto___44331 + (1));
i__41949__auto___44331 = G__44332;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq44329){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44329));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__44334 = arguments.length;
switch (G__44334) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_44340 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_44340){
return (function taoensso$encore$oget_in(var_args){
var G__44339 = arguments.length;
switch (G__44339) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_44340))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_44340){
return (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
});})(sentinel_44340))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_44340){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.first.call(null,ks__$1),sentinel_44340);
if((o__$2 === sentinel_44340)){
return not_found;
} else {
var G__44342 = o__$2;
var G__44343 = cljs.core.next.call(null,ks__$1);
o__$1 = G__44342;
ks__$1 = G__44343;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_44340))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__44348 = arguments.length;
switch (G__44348) {
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
var args_arr__41971__auto__ = [];
var len__41948__auto___44355 = arguments.length;
var i__41949__auto___44356 = (0);
while(true){
if((i__41949__auto___44356 < len__41948__auto___44355)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44356]));

var G__44357 = (i__41949__auto___44356 + (1));
i__41949__auto___44356 = G__44357;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41972__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq44345){
var G__44346 = cljs.core.first.call(null,seq44345);
var seq44345__$1 = cljs.core.next.call(null,seq44345);
var G__44347 = cljs.core.first.call(null,seq44345__$1);
var seq44345__$2 = cljs.core.next.call(null,seq44345__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__44346,G__44347,seq44345__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__44353 = arguments.length;
switch (G__44353) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44359 = arguments.length;
var i__41949__auto___44360 = (0);
while(true){
if((i__41949__auto___44360 < len__41948__auto___44359)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44360]));

var G__44361 = (i__41949__auto___44360 + (1));
i__41949__auto___44360 = G__44361;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41972__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq44350){
var G__44351 = cljs.core.first.call(null,seq44350);
var seq44350__$1 = cljs.core.next.call(null,seq44350);
var G__44352 = cljs.core.first.call(null,seq44350__$1);
var seq44350__$2 = cljs.core.next.call(null,seq44350__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__44351,G__44352,seq44350__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__44367 = arguments.length;
switch (G__44367) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44381 = arguments.length;
var i__41949__auto___44382 = (0);
while(true){
if((i__41949__auto___44382 < len__41948__auto___44381)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44382]));

var G__44383 = (i__41949__auto___44382 + (1));
i__41949__auto___44382 = G__44383;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41972__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq44363){
var G__44364 = cljs.core.first.call(null,seq44363);
var seq44363__$1 = cljs.core.next.call(null,seq44363);
var G__44365 = cljs.core.first.call(null,seq44363__$1);
var seq44363__$2 = cljs.core.next.call(null,seq44363__$1);
var G__44366 = cljs.core.first.call(null,seq44363__$2);
var seq44363__$3 = cljs.core.next.call(null,seq44363__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__44364,G__44365,G__44366,seq44363__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__44373 = arguments.length;
switch (G__44373) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44385 = arguments.length;
var i__41949__auto___44386 = (0);
while(true){
if((i__41949__auto___44386 < len__41948__auto___44385)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44386]));

var G__44387 = (i__41949__auto___44386 + (1));
i__41949__auto___44386 = G__44387;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41972__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq44369){
var G__44370 = cljs.core.first.call(null,seq44369);
var seq44369__$1 = cljs.core.next.call(null,seq44369);
var G__44371 = cljs.core.first.call(null,seq44369__$1);
var seq44369__$2 = cljs.core.next.call(null,seq44369__$1);
var G__44372 = cljs.core.first.call(null,seq44369__$2);
var seq44369__$3 = cljs.core.next.call(null,seq44369__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__44370,G__44371,G__44372,seq44369__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__44379 = arguments.length;
switch (G__44379) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44389 = arguments.length;
var i__41949__auto___44390 = (0);
while(true){
if((i__41949__auto___44390 < len__41948__auto___44389)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44390]));

var G__44391 = (i__41949__auto___44390 + (1));
i__41949__auto___44390 = G__44391;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41972__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq44375){
var G__44376 = cljs.core.first.call(null,seq44375);
var seq44375__$1 = cljs.core.next.call(null,seq44375);
var G__44377 = cljs.core.first.call(null,seq44375__$1);
var seq44375__$2 = cljs.core.next.call(null,seq44375__$1);
var G__44378 = cljs.core.first.call(null,seq44375__$2);
var seq44375__$3 = cljs.core.next.call(null,seq44375__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__44376,G__44377,G__44378,seq44375__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__44393 = arguments.length;
switch (G__44393) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__44396 = arguments.length;
switch (G__44396) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
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
var vec__44398 = v;
var v1 = cljs.core.nth.call(null,vec__44398,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__44401 = xs__$1;
var seq__44402 = cljs.core.seq.call(null,vec__44401);
var first__44403 = cljs.core.first.call(null,seq__44402);
var seq__44402__$1 = cljs.core.next.call(null,seq__44402);
var x1 = first__44403;
var xn = seq__44402__$1;
if(xn){
var G__44404 = cljs.core.conj.call(null,butlast,x1);
var G__44405 = xn;
butlast = G__44404;
xs__$1 = G__44405;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44408 = arguments.length;
var i__41949__auto___44409 = (0);
while(true){
if((i__41949__auto___44409 < len__41948__auto___44408)){
args__41955__auto__.push((arguments[i__41949__auto___44409]));

var G__44410 = (i__41949__auto___44409 + (1));
i__41949__auto___44409 = G__44410;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs.call(null,lx));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq44406){
var G__44407 = cljs.core.first.call(null,seq44406);
var seq44406__$1 = cljs.core.next.call(null,seq44406);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__44407,seq44406__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__44415 = arguments.length;
switch (G__44415) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44417 = arguments.length;
var i__41949__auto___44418 = (0);
while(true){
if((i__41949__auto___44418 < len__41948__auto___44417)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44418]));

var G__44419 = (i__41949__auto___44418 + (1));
i__41949__auto___44418 = G__44419;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41972__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq44412){
var G__44413 = cljs.core.first.call(null,seq44412);
var seq44412__$1 = cljs.core.next.call(null,seq44412);
var G__44414 = cljs.core.first.call(null,seq44412__$1);
var seq44412__$2 = cljs.core.next.call(null,seq44412__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__44413,G__44414,seq44412__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__44421 = arguments.length;
switch (G__44421) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__44424 = arguments.length;
switch (G__44424) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__44426 = null;
var G__44426__0 = (function (){
return rf.call(null);
});
var G__44426__1 = (function (acc){
return rf.call(null,acc);
});
var G__44426__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__44426 = function(acc,input){
switch(arguments.length){
case 0:
return G__44426__0.call(this);
case 1:
return G__44426__1.call(this,acc);
case 2:
return G__44426__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__44426.cljs$core$IFn$_invoke$arity$0 = G__44426__0;
G__44426.cljs$core$IFn$_invoke$arity$1 = G__44426__1;
G__44426.cljs$core$IFn$_invoke$arity$2 = G__44426__2;
return G__44426;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
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
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,x){
return cljs.core.assoc_BANG_.call(null,acc,f.call(null,x),x);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
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
return taoensso.encore.revery_QMARK_.call(null,(function (p1__44427_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__44427_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__44429 = arguments.length;
switch (G__44429) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__30704__auto__ = cljs.core.seq.call(null,ks);
if(b2__30704__auto__){
var ks_seq = b2__30704__auto__;
var k = cljs.core.nth.call(null,ks,(0));
var b2__30704__auto____$1 = cljs.core.next.call(null,ks_seq);
if(b2__30704__auto____$1){
var ks__$1 = b2__30704__auto____$1;
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in.call(null,cljs.core.get.call(null,m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
var v = f.call(null,cljs.core.get.call(null,m,k,not_found));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}
}
} else {
return f.call(null,m);
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__44432 = arguments.length;
switch (G__44432) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq.call(null,ks)){
return taoensso.encore.fsplit_last.call(null,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__44439 = arguments.length;
switch (G__44439) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44441 = arguments.length;
var i__41949__auto___44442 = (0);
while(true){
if((i__41949__auto___44442 < len__41948__auto___44441)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44442]));

var G__44443 = (i__41949__auto___44442 + (1));
i__41949__auto___44442 = G__44443;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41972__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq44435){
var G__44436 = cljs.core.first.call(null,seq44435);
var seq44435__$1 = cljs.core.next.call(null,seq44435);
var G__44437 = cljs.core.first.call(null,seq44435__$1);
var seq44435__$2 = cljs.core.next.call(null,seq44435__$1);
var G__44438 = cljs.core.first.call(null,seq44435__$2);
var seq44435__$3 = cljs.core.next.call(null,seq44435__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__44436,G__44437,G__44438,seq44435__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__44448 = arguments.length;
switch (G__44448) {
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
var args_arr__41971__auto__ = [];
var len__41948__auto___44450 = arguments.length;
var i__41949__auto___44451 = (0);
while(true){
if((i__41949__auto___44451 < len__41948__auto___44450)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44451]));

var G__44452 = (i__41949__auto___44451 + (1));
i__41949__auto___44451 = G__44452;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41972__auto__);

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

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq44445){
var G__44446 = cljs.core.first.call(null,seq44445);
var seq44445__$1 = cljs.core.next.call(null,seq44445);
var G__44447 = cljs.core.first.call(null,seq44445__$1);
var seq44445__$2 = cljs.core.next.call(null,seq44445__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__44446,G__44447,seq44445__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__44453 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__44454 = cljs.core.next.call(null,s1);
var G__44455 = cljs.core.next.call(null,s2);
v = G__44453;
s1 = G__44454;
s2 = G__44455;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
var not_found_44458 = {};
taoensso.encore._merge_with = ((function (not_found_44458){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,((function (not_found_44458){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv.call(null,((function (not_found_44458){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.call(null,acc__$1,k,not_found_44458);
if((lv === not_found_44458)){
return cljs.core.assoc.call(null,acc__$1,k,rv);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__40657__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__40657__auto__)){
return (cljs.core.map_QMARK_.call(null,rv)) && (cljs.core.map_QMARK_.call(null,lv));
} else {
return and__40657__auto__;
}
})())){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
}
});})(not_found_44458))
,(function (){var or__40669__auto__ = acc;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_44458))
,null,maps);
});})(not_found_44458))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44465 = arguments.length;
var i__41949__auto___44466 = (0);
while(true){
if((i__41949__auto___44466 < len__41948__auto___44465)){
args__41955__auto__.push((arguments[i__41949__auto___44466]));

var G__44467 = (i__41949__auto___44466 + (1));
i__41949__auto___44466 = G__44467;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq44459){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44459));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44468 = arguments.length;
var i__41949__auto___44469 = (0);
while(true){
if((i__41949__auto___44469 < len__41948__auto___44468)){
args__41955__auto__.push((arguments[i__41949__auto___44469]));

var G__44470 = (i__41949__auto___44469 + (1));
i__41949__auto___44469 = G__44470;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq44460){
var G__44461 = cljs.core.first.call(null,seq44460);
var seq44460__$1 = cljs.core.next.call(null,seq44460);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__44461,seq44460__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44471 = arguments.length;
var i__41949__auto___44472 = (0);
while(true){
if((i__41949__auto___44472 < len__41948__auto___44471)){
args__41955__auto__.push((arguments[i__41949__auto___44472]));

var G__44473 = (i__41949__auto___44472 + (1));
i__41949__auto___44472 = G__44473;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq44462){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44462));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44474 = arguments.length;
var i__41949__auto___44475 = (0);
while(true){
if((i__41949__auto___44475 < len__41948__auto___44474)){
args__41955__auto__.push((arguments[i__41949__auto___44475]));

var G__44476 = (i__41949__auto___44475 + (1));
i__41949__auto___44475 = G__44476;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq44463){
var G__44464 = cljs.core.first.call(null,seq44463);
var seq44463__$1 = cljs.core.next.call(null,seq44463);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__44464,seq44463__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
return return$.call(null,v0,v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__30704__auto__ = cljs.core.seq.call(null,ks);
if(b2__30704__auto__){
var ks_seq = b2__30704__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.fsplit_last.call(null,((function (m0,ks_seq,b2__30704__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,ks_seq,b2__30704__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.fsplit_last.call(null,((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__30704__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__30704__auto__))
,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__30704__auto__ = cljs.core.seq.call(null,ks);
if(b2__30704__auto__){
var ks_seq = b2__30704__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),v1);
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_44479 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_44479){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__44478 = arguments.length;
switch (G__44478) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_44479))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_44479){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_44479,atom_,k,null,f);
});})(return_44479))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_44479){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_44479,atom_,k,not_found,f);
});})(return_44479))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_44483 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_44483){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__44482 = arguments.length;
switch (G__44482) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_44483))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_44483){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_44483,atom_,k,null,val);
});})(return_44483))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_44483){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_44483,atom_,k,not_found,val);
});})(return_44483))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_44487 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_44487){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__44486 = arguments.length;
switch (G__44486) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_44487))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_44487){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_44487,atom_,k,null,f);
});})(return_44487))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_44487){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_44487,atom_,k,not_found,f);
});})(return_44487))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__44490 = arguments.length;
switch (G__44490) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__44491 = taoensso.encore.swap_val_BANG__STAR_.call(null,atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.call(null,vec__44491,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_44497 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_44497){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,not_found_44497,new_val);
if(cljs.core._EQ_.call(null,v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_44497))
;
var return_44500 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_44500){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__44499 = arguments.length;
switch (G__44499) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_44500))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_44500){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_44500,atom_,f);
});})(return_44500))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_44500){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_44500,atom_,ks,null,f);
});})(return_44500))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_44500){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_44500,atom_,ks,not_found,f);
});})(return_44500))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_44504 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_44504){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__44503 = arguments.length;
switch (G__44503) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_44504))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_44504){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_44504,atom_,val);
});})(return_44504))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_44504){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_44504,atom_,ks,null,val);
});})(return_44504))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_44504){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_44504,atom_,ks,not_found,val);
});})(return_44504))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_44508 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_44508){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__44507 = arguments.length;
switch (G__44507) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_44508))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_44508){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_44508,atom_,f);
});})(return_44508))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_44508){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_44508,atom_,ks,null,f);
});})(return_44508))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_44508){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_44508,atom_,ks,not_found,f);
});})(return_44508))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__30704__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__30704__auto__)){
var perf = b2__30704__auto__;
var b2__30704__auto____$1 = (function (){var or__40669__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
var or__40669__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__40669__auto____$2)){
return or__40669__auto____$2;
} else {
var or__40669__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__40669__auto____$3)){
return or__40669__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__30704__auto____$1)){
var f = b2__30704__auto____$1;
return ((function (f,b2__30704__auto____$1,perf,b2__30704__auto__){
return (function (){
return ((1000000) * cljs.core.long$.call(null,f.call(perf)));
});
;})(f,b2__30704__auto____$1,perf,b2__30704__auto__))
} else {
return ((function (b2__30704__auto____$1,perf,b2__30704__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__30704__auto____$1,perf,b2__30704__auto__))
}
} else {
return ((function (b2__30704__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__30704__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__44512__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__44512 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__44513__i = 0, G__44513__a = new Array(arguments.length -  0);
while (G__44513__i < G__44513__a.length) {G__44513__a[G__44513__i] = arguments[G__44513__i + 0]; ++G__44513__i;}
  xs = new cljs.core.IndexedSeq(G__44513__a,0,null);
} 
return G__44512__delegate.call(this,xs);};
G__44512.cljs$lang$maxFixedArity = 0;
G__44512.cljs$lang$applyTo = (function (arglist__44514){
var xs = cljs.core.seq(arglist__44514);
return G__44512__delegate(xs);
});
G__44512.cljs$core$IFn$_invoke$arity$variadic = G__44512__delegate;
return G__44512;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__44515__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__40669__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__40669__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__40669__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__40669__auto__,cache_))
,null))]);
}
});})(or__40669__auto__,cache_))
),args);
}
})());
};
var G__44515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44516__i = 0, G__44516__a = new Array(arguments.length -  0);
while (G__44516__i < G__44516__a.length) {G__44516__a[G__44516__i] = arguments[G__44516__i + 0]; ++G__44516__i;}
  args = new cljs.core.IndexedSeq(G__44516__a,0,null);
} 
return G__44515__delegate.call(this,args);};
G__44515.cljs$lang$maxFixedArity = 0;
G__44515.cljs$lang$applyTo = (function (arglist__44517){
var args = cljs.core.seq(arglist__44517);
return G__44515__delegate(args);
});
G__44515.cljs$core$IFn$_invoke$arity$variadic = G__44515__delegate;
return G__44515;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__44519 = arguments.length;
switch (G__44519) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_44523 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44520){if((e44520 instanceof Error)){
var e = e44520;
return e;
} else {
throw e44520;

}
}})();
if((e_44523 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1739,"(pos-int? ttl-ms)",ttl_ms,e_44523,null);
}

var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__44524__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_44525 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_44525);

return true;
})()
){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_44525,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_44525,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_44525,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$.call(null,(function (){var or__40669__auto__ = m;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_44525,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__40669__auto__ = (_QMARK_e == null);
if(or__40669__auto__){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__44524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44526__i = 0, G__44526__a = new Array(arguments.length -  0);
while (G__44526__i < G__44526__a.length) {G__44526__a[G__44526__i] = arguments[G__44526__i + 0]; ++G__44526__i;}
  args = new cljs.core.IndexedSeq(G__44526__a,0,null);
} 
return G__44524__delegate.call(this,args);};
G__44524.cljs$lang$maxFixedArity = 0;
G__44524.cljs$lang$applyTo = (function (arglist__44527){
var args = cljs.core.seq(arglist__44527);
return G__44524__delegate(args);
});
G__44524.cljs$core$IFn$_invoke$arity$variadic = G__44524__delegate;
return G__44524;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__40669__auto__ = (x == null);
if(or__40669__auto__){
return or__40669__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1790,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_44528 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44521){if((e44521 instanceof Error)){
var e = e44521;
return e;
} else {
throw e44521;

}
}})();
if((e_44528 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1791,"(pos-int? cache-size)",cache_size,e_44528,null);
}

var tick_ = cljs.core.atom.call(null,(0));
var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__40669__auto__ = ttl_ms;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__44529__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_44530 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_44530);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__40669__auto__ = m;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_44531 = cljs.core.deref.call(null,cache_);
var n_to_gc_44532 = (cljs.core.count.call(null,snapshot_44531) - cache_size__$1);
if((n_to_gc_44532 > (64))){
var ks_to_gc_44533 = taoensso.encore.top.call(null,n_to_gc_44532,((function (snapshot_44531,n_to_gc_44532,latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.call(null,snapshot_44531,k);
return (e.tick_lru + e.tick_lfu);
});})(snapshot_44531,n_to_gc_44532,latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.keys.call(null,snapshot_44531));
cljs.core.swap_BANG_.call(null,cache_,((function (ks_to_gc_44533,snapshot_44531,n_to_gc_44532,latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_44533,snapshot_44531,n_to_gc_44532,latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_44533,snapshot_44531,n_to_gc_44532,latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__40669__auto__ = m;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_44533));
});})(ks_to_gc_44533,snapshot_44531,n_to_gc_44532,latch_44530,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = cljs.core.swap_BANG_.call(null,tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__40669__auto__ = (_QMARK_e == null);
if(or__40669__auto__){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__44529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44534__i = 0, G__44534__a = new Array(arguments.length -  0);
while (G__44534__i < G__44534__a.length) {G__44534__a[G__44534__i] = arguments[G__44534__i + 0]; ++G__44534__i;}
  args = new cljs.core.IndexedSeq(G__44534__a,0,null);
} 
return G__44529__delegate.call(this,args);};
G__44529.cljs$lang$maxFixedArity = 0;
G__44529.cljs$lang$applyTo = (function (arglist__44535){
var args = cljs.core.seq(arglist__44535);
return G__44529__delegate(args);
});
G__44529.cljs$core$IFn$_invoke$arity$variadic = G__44529__delegate;
return G__44529;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_44546 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44536){if((e44536 instanceof Error)){
var e = e44536;
return e;
} else {
throw e44536;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1891,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44537){if((e44537 instanceof Error)){
var e = e44537;
return e;
} else {
throw e44537;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1891,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_44546){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,((function (limit_spec_44546){
return (function (acc,sid,p__44538){
var vec__44539 = p__44538;
var n = cljs.core.nth.call(null,vec__44539,(0),null);
var ms = cljs.core.nth.call(null,vec__44539,(1),null);
return cljs.core.assoc.call(null,acc,sid,limit_spec_44546.call(null,n,ms));
});})(limit_spec_44546))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,limit_spec_44546){
return (function (acc,p__44542){
var vec__44543 = p__44542;
var n = cljs.core.nth.call(null,vec__44543,(0),null);
var ms = cljs.core.nth.call(null,vec__44543,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__44543,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__40669__auto__ = _QMARK_id;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core._vreset_BANG_.call(null,i,((function (or__40669__auto__,vec__44543,n,ms,_QMARK_id,i,limit_spec_44546){
return (function (i__$1){
return (i__$1 + (1));
});})(or__40669__auto__,vec__44543,n,ms,_QMARK_id,i,limit_spec_44546))
.call(null,cljs.core._deref.call(null,i)));
}
})(),limit_spec_44546.call(null,n,ms));
});})(i,limit_spec_44546))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_44546))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = cljs.core.atom.call(null,null);
var reqs_ = cljs.core.atom.call(null,null);
var specs__$1 = taoensso.encore.coerce_limit_specs.call(null,specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not.call(null,peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_44547 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_44547);

return true;
})()
){
cljs.core.swap_BANG_.call(null,reqs_,((function (latch_44547,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_44547,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,((function (latch_44547,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__30704__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__30704__auto__)){
var s = b2__30704__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,sid);
}
});})(latch_44547,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
});})(latch_44547,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$.call(null,(function (){var or__40669__auto__ = reqs;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_44547,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref.call(null,reqs_);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__30704__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__30704__auto__)){
var s = b2__30704__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__40669__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__30704__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__30704__auto__)){
var h = b2__30704__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__30704__auto__ = cljs.core.deref.call(null,latch_);
if(cljs.core.truth_(b2__30704__auto__)){
var l = b2__30704__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__30704__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.call(null,acc,sid,(function (){var b2__30704__auto____$1 = cljs.core.get.call(null,entries,sid);
if(cljs.core.truth_(b2__30704__auto____$1)){
var e = b2__30704__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__30704__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_.call(null,reqs_,cljs.core.assoc.call(null,reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1.call(null,null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1.call(null,req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
cljs.core.swap_BANG_.call(null,reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)))){
return f1.call(null,req_id,true);
} else {
throw cljs.core.ex_info.call(null,"Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__44548 = taoensso.encore.limiter_STAR_.call(null,specs);
var _ = cljs.core.nth.call(null,vec__44548,(0),null);
var f = cljs.core.nth.call(null,vec__44548,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__44555 = arguments.length;
switch (G__44555) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__41971__auto__ = [];
var len__41948__auto___44557 = arguments.length;
var i__41949__auto___44558 = (0);
while(true){
if((i__41949__auto___44558 < len__41948__auto___44557)){
args_arr__41971__auto__.push((arguments[i__41949__auto___44558]));

var G__44559 = (i__41949__auto___44558 + (1));
i__41949__auto___44558 = G__44559;
continue;
} else {
}
break;
}

var argseq__41972__auto__ = (new cljs.core.IndexedSeq(args_arr__41971__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41972__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq44552){
var G__44553 = cljs.core.first.call(null,seq44552);
var seq44552__$1 = cljs.core.next.call(null,seq44552);
var G__44554 = cljs.core.first.call(null,seq44552__$1);
var seq44552__$2 = cljs.core.next.call(null,seq44552__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__44553,G__44554,seq44552__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__44561 = arguments.length;
switch (G__44561) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__40657__auto__ = separator;
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__40657__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

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
var G__44564 = arguments.length;
switch (G__44564) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__44567 = arguments.length;
switch (G__44567) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__44570 = arguments.length;
switch (G__44570) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__44572__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__44572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44573__i = 0, G__44573__a = new Array(arguments.length -  0);
while (G__44573__i < G__44573__a.length) {G__44573__a[G__44573__i] = arguments[G__44573__i + 0]; ++G__44573__i;}
  args = new cljs.core.IndexedSeq(G__44573__a,0,null);
} 
return G__44572__delegate.call(this,args);};
G__44572.cljs$lang$maxFixedArity = 0;
G__44572.cljs$lang$applyTo = (function (arglist__44574){
var args = cljs.core.seq(arglist__44574);
return G__44572__delegate(args);
});
G__44572.cljs$core$IFn$_invoke$arity$variadic = G__44572__delegate;
return G__44572;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__40669__auto__ = fmt;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44577 = arguments.length;
var i__41949__auto___44578 = (0);
while(true){
if((i__41949__auto___44578 < len__41948__auto___44577)){
args__41955__auto__.push((arguments[i__41949__auto___44578]));

var G__44579 = (i__41949__auto___44578 + (1));
i__41949__auto___44578 = G__44579;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq44575){
var G__44576 = cljs.core.first.call(null,seq44575);
var seq44575__$1 = cljs.core.next.call(null,seq44575);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__44576,seq44575__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__40669__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44581 = arguments.length;
var i__41949__auto___44582 = (0);
while(true){
if((i__41949__auto___44582 < len__41948__auto___44581)){
args__41955__auto__.push((arguments[i__41949__auto___44582]));

var G__44583 = (i__41949__auto___44582 + (1));
i__41949__auto___44582 = G__44583;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq44580){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44580));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__44585 = arguments.length;
switch (G__44585) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44588 = arguments.length;
var i__41949__auto___44589 = (0);
while(true){
if((i__41949__auto___44589 < len__41948__auto___44588)){
args__41955__auto__.push((arguments[i__41949__auto___44589]));

var G__44590 = (i__41949__auto___44589 + (1));
i__41949__auto___44589 = G__44590;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.call(null),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq44587){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44587));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
var sentinel_44595 = {};
var nil__GT_sentinel_44596 = ((function (sentinel_44595){
return (function (x){
if((x == null)){
return sentinel_44595;
} else {
return x;
}
});})(sentinel_44595))
;
var sentinel__GT_nil_44597 = ((function (sentinel_44595,nil__GT_sentinel_44596){
return (function (x){
if((x === sentinel_44595)){
return null;
} else {
return x;
}
});})(sentinel_44595,nil__GT_sentinel_44596))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597){
return (function taoensso$encore$reduce_top(var_args){
var G__44594 = arguments.length;
switch (G__44594) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__41028__auto__ = coll_size;
var y__41029__auto__ = cljs.core.long$.call(null,n);
return ((x__41028__auto__ < y__41029__auto__) ? x__41028__auto__ : y__41029__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.call(null,cljs.core.take.call(null,n__$1),cljs.core.completing.call(null,rf),init,cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_44595,nil__GT_sentinel_44596,sentinel__GT_nil_44597))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__44600 = arguments.length;
switch (G__44600) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_.call(null,to)){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$.call(null,to),coll));
} else {
return taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__44603 = arguments.length;
switch (G__44603) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44621 = arguments.length;
var i__41949__auto___44622 = (0);
while(true){
if((i__41949__auto___44622 < len__41948__auto___44621)){
args__41955__auto__.push((arguments[i__41949__auto___44622]));

var G__44623 = (i__41949__auto___44622 + (1));
i__41949__auto___44622 = G__44623;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__44618){
var map__44619 = p__44618;
var map__44619__$1 = ((((!((map__44619 == null)))?((((map__44619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44619):map__44619);
var opts = map__44619__$1;
var years = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
taoensso.truss.impl.revery_QMARK_.call(null,((function (map__44619,map__44619__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2394,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__44619,map__44619__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts));

return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq44617){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44617));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__44634__delegate = function (xs){
var b2__30704__auto__ = console.log;
if(cljs.core.truth_(b2__30704__auto__)){
var f = b2__30704__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__44634 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__44635__i = 0, G__44635__a = new Array(arguments.length -  0);
while (G__44635__i < G__44635__a.length) {G__44635__a[G__44635__i] = arguments[G__44635__i + 0]; ++G__44635__i;}
  xs = new cljs.core.IndexedSeq(G__44635__a,0,null);
} 
return G__44634__delegate.call(this,xs);};
G__44634.cljs$lang$maxFixedArity = 0;
G__44634.cljs$lang$applyTo = (function (arglist__44636){
var xs = cljs.core.seq(arglist__44636);
return G__44634__delegate(xs);
});
G__44634.cljs$core$IFn$_invoke$arity$variadic = G__44634__delegate;
return G__44634;
})()
:(function() { 
var G__44637__delegate = function (xs){
return null;
};
var G__44637 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__44638__i = 0, G__44638__a = new Array(arguments.length -  0);
while (G__44638__i < G__44638__a.length) {G__44638__a[G__44638__i] = arguments[G__44638__i + 0]; ++G__44638__i;}
  xs = new cljs.core.IndexedSeq(G__44638__a,0,null);
} 
return G__44637__delegate.call(this,xs);};
G__44637.cljs$lang$maxFixedArity = 0;
G__44637.cljs$lang$applyTo = (function (arglist__44639){
var xs = cljs.core.seq(arglist__44639);
return G__44637__delegate(xs);
});
G__44637.cljs$core$IFn$_invoke$arity$variadic = G__44637__delegate;
return G__44637;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44640 = arguments.length;
var i__41949__auto___44641 = (0);
while(true){
if((i__41949__auto___44641 < len__41948__auto___44640)){
args__41955__auto__.push((arguments[i__41949__auto___44641]));

var G__44642 = (i__41949__auto___44641 + (1));
i__41949__auto___44641 = G__44642;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq44628){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44628));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44643 = arguments.length;
var i__41949__auto___44644 = (0);
while(true){
if((i__41949__auto___44644 < len__41948__auto___44643)){
args__41955__auto__.push((arguments[i__41949__auto___44644]));

var G__44645 = (i__41949__auto___44644 + (1));
i__41949__auto___44644 = G__44645;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq44629){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44629));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44646 = arguments.length;
var i__41949__auto___44647 = (0);
while(true){
if((i__41949__auto___44647 < len__41948__auto___44646)){
args__41955__auto__.push((arguments[i__41949__auto___44647]));

var G__44648 = (i__41949__auto___44647 + (1));
i__41949__auto___44647 = G__44648;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq44630){
var G__44631 = cljs.core.first.call(null,seq44630);
var seq44630__$1 = cljs.core.next.call(null,seq44630);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__44631,seq44630__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44649 = arguments.length;
var i__41949__auto___44650 = (0);
while(true){
if((i__41949__auto___44650 < len__41948__auto___44649)){
args__41955__auto__.push((arguments[i__41949__auto___44650]));

var G__44651 = (i__41949__auto___44650 + (1));
i__41949__auto___44650 = G__44651;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq44632){
var G__44633 = cljs.core.first.call(null,seq44632);
var seq44632__$1 = cljs.core.next.call(null,seq44632);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__44633,seq44632__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__30704__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__30704__auto__)){
var js_win = b2__30704__auto__;
var b2__30704__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__30704__auto____$1)){
var loc = b2__30704__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_.call(null,params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_44664 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44652){if((e44652 instanceof Error)){
var e = e44652;
return e;
} else {
throw e44652;

}
}})();
if((e_44664 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2697,"(map? params)",params,e_44664,null);
}

if(cljs.core.truth_((function (){var and__40657__auto__ = typeof FormData !== 'undefined';
if(and__40657__auto__){
return taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params));
} else {
return and__40657__auto__;
}
})())){
var form_data = (new FormData());
var seq__44653_44665 = cljs.core.seq.call(null,params);
var chunk__44654_44666 = null;
var count__44655_44667 = (0);
var i__44656_44668 = (0);
while(true){
if((i__44656_44668 < count__44655_44667)){
var vec__44657_44669 = cljs.core._nth.call(null,chunk__44654_44666,i__44656_44668);
var k_44670 = cljs.core.nth.call(null,vec__44657_44669,(0),null);
var v_44671 = cljs.core.nth.call(null,vec__44657_44669,(1),null);
form_data.append(cljs.core.name.call(null,k_44670),v_44671);

var G__44672 = seq__44653_44665;
var G__44673 = chunk__44654_44666;
var G__44674 = count__44655_44667;
var G__44675 = (i__44656_44668 + (1));
seq__44653_44665 = G__44672;
chunk__44654_44666 = G__44673;
count__44655_44667 = G__44674;
i__44656_44668 = G__44675;
continue;
} else {
var temp__5457__auto___44676 = cljs.core.seq.call(null,seq__44653_44665);
if(temp__5457__auto___44676){
var seq__44653_44677__$1 = temp__5457__auto___44676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44653_44677__$1)){
var c__41600__auto___44678 = cljs.core.chunk_first.call(null,seq__44653_44677__$1);
var G__44679 = cljs.core.chunk_rest.call(null,seq__44653_44677__$1);
var G__44680 = c__41600__auto___44678;
var G__44681 = cljs.core.count.call(null,c__41600__auto___44678);
var G__44682 = (0);
seq__44653_44665 = G__44679;
chunk__44654_44666 = G__44680;
count__44655_44667 = G__44681;
i__44656_44668 = G__44682;
continue;
} else {
var vec__44660_44683 = cljs.core.first.call(null,seq__44653_44677__$1);
var k_44684 = cljs.core.nth.call(null,vec__44660_44683,(0),null);
var v_44685 = cljs.core.nth.call(null,vec__44660_44683,(1),null);
form_data.append(cljs.core.name.call(null,k_44684),v_44685);

var G__44686 = cljs.core.next.call(null,seq__44653_44677__$1);
var G__44687 = null;
var G__44688 = (0);
var G__44689 = (0);
seq__44653_44665 = G__44686;
chunk__44654_44666 = G__44687;
count__44655_44667 = G__44688;
i__44656_44668 = G__44689;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.call(null,params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__40669__auto__ = (x == null);
if(or__40669__auto__){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.js_form_data_QMARK_).call(null,x);
}
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2709,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__44663 = method;
var G__44663__$1 = (((G__44663 instanceof cljs.core.Keyword))?G__44663.fqn:null);
switch (G__44663__$1) {
case "get":
return url_encode.call(null,uri,params);

break;
case "post":
return adaptive_encode.call(null,uri,params);

break;
case "put":
return adaptive_encode.call(null,uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44663__$1)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__44692,callback_fn){
var map__44693 = p__44692;
var map__44693__$1 = ((((!((map__44693 == null)))?((((map__44693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44693):map__44693);
var opts = map__44693__$1;
var method = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_(((function (map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__40669__auto__ = (x == null);
if(or__40669__auto__){
return or__40669__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2741,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__30704__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(b2__30704__auto__)){
var xhr = b2__30704__auto__;
try{var timeout_ms__$1 = (function (){var or__40669__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__44699 = method;
var G__44699__$1 = (((G__44699 instanceof cljs.core.Keyword))?G__44699.fqn:null);
switch (G__44699__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44699__$1)].join('')));

}
})();
var vec__44696 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params);
var xhr_uri = cljs.core.nth.call(null,vec__44696,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__44696,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,((function (timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__44691_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__44691_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__30704__auto____$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__30704__auto____$1)){
var pf = b2__30704__auto____$1;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf,b2__30704__auto____$1,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__40657__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__40657__auto__;
}
})())?(loaded / total):null);
return pf.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf,b2__30704__auto____$1,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);
} else {
return null;
}
})();
var G__44700_44707 = xhr;
goog.events.listenOnce(G__44700_44707,goog.net.EventType.READY,((function (G__44700_44707,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__44700_44707,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);

goog.events.listenOnce(G__44700_44707,goog.net.EventType.COMPLETE,((function (G__44700_44707,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__44701 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__44700_44707,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__44700_44707,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_.call(null,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__44705 = resp_type__$1;
var G__44705__$1 = (((G__44705 instanceof cljs.core.Keyword))?G__44705.fqn:null);
switch (G__44705__$1) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44705__$1)].join('')));

}
}catch (e44704){if((e44704 instanceof Error)){
var _e = e44704;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e44704;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__44701,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__44701,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__44701,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
});})(G__44700_44707,timeout_ms__$1,xhr_method,vec__44696,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__30704__auto__,map__44693,map__44693__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);


xhr.setTimeoutInterval((function (){var or__40669__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e44695){if((e44695 instanceof Error)){
var e = e44695;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
} else {
throw e44695;

}
}} else {
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44715 = arguments.length;
var i__41949__auto___44716 = (0);
while(true){
if((i__41949__auto___44716 < len__41948__auto___44715)){
args__41955__auto__.push((arguments[i__41949__auto___44716]));

var G__44717 = (i__41949__auto___44716 + (1));
i__41949__auto___44716 = G__44717;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__44711){
var vec__44712 = p__44711;
var encoding = cljs.core.nth.call(null,vec__44712,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq44709){
var G__44710 = cljs.core.first.call(null,seq44709);
var seq44709__$1 = cljs.core.next.call(null,seq44709);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__44710,seq44709__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,(function (){var or__40669__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
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
return join.call(null,(function (){var iter__41551__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__44718(s__44719){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__44719__$1 = s__44719;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44719__$1);
if(temp__5457__auto__){
var s__44719__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44719__$2)){
var c__41549__auto__ = cljs.core.chunk_first.call(null,s__44719__$2);
var size__41550__auto__ = cljs.core.count.call(null,c__41549__auto__);
var b__44721 = cljs.core.chunk_buffer.call(null,size__41550__auto__);
if((function (){var i__44720 = (0);
while(true){
if((i__44720 < size__41550__auto__)){
var vec__44722 = cljs.core._nth.call(null,c__41549__auto__,i__44720);
var k = cljs.core.nth.call(null,vec__44722,(0),null);
var v = cljs.core.nth.call(null,vec__44722,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__44721,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__40669__auto__ = cljs.core.seq.call(null,v);
if(or__40669__auto__){
return or__40669__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__44728 = (i__44720 + (1));
i__44720 = G__44728;
continue;
} else {
var G__44729 = (i__44720 + (1));
i__44720 = G__44729;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44721),taoensso$encore$format_query_string_$_iter__44718.call(null,cljs.core.chunk_rest.call(null,s__44719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44721),null);
}
} else {
var vec__44725 = cljs.core.first.call(null,s__44719__$2);
var k = cljs.core.nth.call(null,vec__44725,(0),null);
var v = cljs.core.nth.call(null,vec__44725,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__40669__auto__ = cljs.core.seq.call(null,v);
if(or__40669__auto__){
return or__40669__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__44718.call(null,cljs.core.rest.call(null,s__44719__$2)));
} else {
var G__44730 = cljs.core.rest.call(null,s__44719__$2);
s__44719__$1 = G__44730;
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
return iter__41551__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__30704__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__30704__auto__)){
var cur = b2__30704__auto__;
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
var args__41955__auto__ = [];
var len__41948__auto___44740 = arguments.length;
var i__41949__auto___44741 = (0);
while(true){
if((i__41949__auto___44741 < len__41948__auto___44740)){
args__41955__auto__.push((arguments[i__41949__auto___44741]));

var G__44742 = (i__41949__auto___44741 + (1));
i__41949__auto___44741 = G__44742;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__44733){
var vec__44734 = p__44733;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__44734,(0),null);
var encoding = cljs.core.nth.call(null,vec__44734,(1),null);
if((clojure.string.blank_QMARK_.call(null,s)) || (!(taoensso.encore.str_contains_QMARK_.call(null,s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,((function (s__$1,vec__44734,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__30704__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__30704__auto__)){
var vec__44737 = b2__30704__auto__;
var k = cljs.core.nth.call(null,vec__44737,(0),null);
var v = cljs.core.nth.call(null,vec__44737,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__44734,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq44731){
var G__44732 = cljs.core.first.call(null,seq44731);
var seq44731__$1 = cljs.core.next.call(null,seq44731);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__44732,seq44731__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__44743 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__44743,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__44743,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__30704__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__30704__auto__)){
var qstr = b2__30704__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__44746__delegate = function (args){
throw cljs.core.ex_info.call(null,"Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__44746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44747__i = 0, G__44747__a = new Array(arguments.length -  0);
while (G__44747__i < G__44747__a.length) {G__44747__a[G__44747__i] = arguments[G__44747__i + 0]; ++G__44747__i;}
  args = new cljs.core.IndexedSeq(G__44747__a,0,null);
} 
return G__44746__delegate.call(this,args);};
G__44746.cljs$lang$maxFixedArity = 0;
G__44746.cljs$lang$applyTo = (function (arglist__44748){
var args = cljs.core.seq(arglist__44748);
return G__44746__delegate(args);
});
G__44746.cljs$core$IFn$_invoke$arity$variadic = G__44746__delegate;
return G__44746;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_.call(null,f)){
return f;
} else {
throw cljs.core.ex_info.call(null,"Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return (function (ns_str){
return cljs.core.re_find.call(null,x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_.call(null,x,"*")){
var re = cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find.call(null,re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.call(null,ns_str,x);
});
}
} else {
throw cljs.core.ex_info.call(null,"Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_.call(null,x)){
return taoensso$encore$self.call(null,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x))){
return taoensso$encore$self.call(null,x,null);
} else {
if(cljs.core._EQ_.call(null,x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1.call(null,x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(match_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq.call(null,whitelist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,whitelist);
var vec__44751 = match_fns;
var seq__44752 = cljs.core.seq.call(null,vec__44751);
var first__44753 = cljs.core.first.call(null,seq__44752);
var seq__44752__$1 = cljs.core.next.call(null,seq__44752);
var m1 = first__44753;
var mn = seq__44752__$1;
if(mn){
return ((function (match_fns,vec__44751,seq__44752,first__44753,seq__44752__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome.call(null,((function (match_fns,vec__44751,seq__44752,first__44753,seq__44752__$1,m1,mn,compile1){
return (function (p1__44749_SHARP_){
return p1__44749_SHARP_.call(null,ns_str);
});})(match_fns,vec__44751,seq__44752,first__44753,seq__44752__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__44751,seq__44752,first__44753,seq__44752__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__44751,seq__44752,first__44753,seq__44752__$1,m1,mn,compile1){
return (function (ns_str){
return m1.call(null,ns_str);
});
;})(match_fns,vec__44751,seq__44752,first__44753,seq__44752__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq.call(null,blacklist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,blacklist);
var vec__44754 = match_fns;
var seq__44755 = cljs.core.seq.call(null,vec__44754);
var first__44756 = cljs.core.first.call(null,seq__44755);
var seq__44755__$1 = cljs.core.next.call(null,seq__44755);
var m1 = first__44756;
var mn = seq__44755__$1;
if(mn){
return ((function (match_fns,vec__44754,seq__44755,first__44756,seq__44755__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,taoensso.encore.rsome.call(null,((function (match_fns,vec__44754,seq__44755,first__44756,seq__44755__$1,m1,mn,white,compile1){
return (function (p1__44750_SHARP_){
return p1__44750_SHARP_.call(null,ns_str);
});})(match_fns,vec__44754,seq__44755,first__44756,seq__44755__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__44754,seq__44755,first__44756,seq__44755__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__44754,seq__44755,first__44756,seq__44755__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,m1.call(null,ns_str));
});
;})(match_fns,vec__44754,seq__44755,first__44756,seq__44755__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__40657__auto__ = white;
if(cljs.core.truth_(and__40657__auto__)){
return black;
} else {
return and__40657__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_(white.call(null,ns_str))){
if(cljs.core.truth_(black.call(null,ns_str))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(white.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(black.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_,msecs,f);
} else {
var m__41403__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref.call(null,result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result.call(null,cljs.core.deref.call(null,self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__44762 = arguments.length;
switch (G__44762) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.call(null,taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return f.call(null);
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_44764 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout.call(null,impl_44764,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__44766){
var map__44767 = p__44766;
var map__44767__$1 = ((((!((map__44767 == null)))?((((map__44767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44767):map__44767);
var before = cljs.core.get.call(null,map__44767__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__44767__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__41623__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__44765__auto__","f__44765__auto__",2122463328,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41623__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__44765__auto__","f__44765__auto__",2122463328,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41623__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
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

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44877 = arguments.length;
var i__41949__auto___44878 = (0);
while(true){
if((i__41949__auto___44878 < len__41948__auto___44877)){
args__41955__auto__.push((arguments[i__41949__auto___44878]));

var G__44879 = (i__41949__auto___44878 + (1));
i__41949__auto___44878 = G__44879;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__44775){
var vec__44776 = p__44775;
var type = cljs.core.nth.call(null,vec__44776,(0),null);
var nplaces = cljs.core.nth.call(null,vec__44776,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__40669__auto__ = type;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq44773){
var G__44774 = cljs.core.first.call(null,seq44773);
var seq44773__$1 = cljs.core.next.call(null,seq44773);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__44774,seq44773__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__44780 = arguments.length;
switch (G__44780) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44881 = arguments.length;
var i__41949__auto___44882 = (0);
while(true){
if((i__41949__auto___44882 < len__41948__auto___44881)){
args__41955__auto__.push((arguments[i__41949__auto___44882]));

var G__44883 = (i__41949__auto___44882 + (1));
i__41949__auto___44882 = G__44883;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq44781){
var G__44782 = cljs.core.first.call(null,seq44781);
var seq44781__$1 = cljs.core.next.call(null,seq44781);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__44782,seq44781__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
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

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.call(null,(function (p__44783){
var vec__44784 = p__44783;
var _ = cljs.core.nth.call(null,vec__44784,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__44784,(1),null);
var id = cljs.core.nth.call(null,vec__44784,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.call(null,specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__44884__delegate = function (args){
var b2__30704__auto__ = cljs.core.apply.call(null,lfn,args);
if(cljs.core.truth_(b2__30704__auto__)){
var vec__44787 = b2__30704__auto__;
var worst_sid = cljs.core.nth.call(null,vec__44787,(0),null);
var backoff_ms = cljs.core.nth.call(null,vec__44787,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__44884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44885__i = 0, G__44885__a = new Array(arguments.length -  0);
while (G__44885__i < G__44885__a.length) {G__44885__a[G__44885__i] = arguments[G__44885__i + 0]; ++G__44885__i;}
  args = new cljs.core.IndexedSeq(G__44885__a,0,null);
} 
return G__44884__delegate.call(this,args);};
G__44884.cljs$lang$maxFixedArity = 0;
G__44884.cljs$lang$applyTo = (function (arglist__44886){
var args = cljs.core.seq(arglist__44886);
return G__44884__delegate(args);
});
G__44884.cljs$core$IFn$_invoke$arity$variadic = G__44884__delegate;
return G__44884;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__44887__delegate = function (args){
var b2__30704__auto__ = rl.call(null);
if(cljs.core.truth_(b2__30704__auto__)){
var backoff = b2__30704__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__44887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44888__i = 0, G__44888__a = new Array(arguments.length -  0);
while (G__44888__i < G__44888__a.length) {G__44888__a[G__44888__i] = arguments[G__44888__i + 0]; ++G__44888__i;}
  args = new cljs.core.IndexedSeq(G__44888__a,0,null);
} 
return G__44887__delegate.call(this,args);};
G__44887.cljs$lang$maxFixedArity = 0;
G__44887.cljs$lang$applyTo = (function (arglist__44889){
var args = cljs.core.seq(arglist__44889);
return G__44887__delegate(args);
});
G__44887.cljs$core$IFn$_invoke$arity$variadic = G__44887__delegate;
return G__44887;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__44890__delegate = function (args){
var b2__30704__auto__ = rl.call(null);
if(cljs.core.truth_(b2__30704__auto__)){
var backoff_ms = b2__30704__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__44890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44891__i = 0, G__44891__a = new Array(arguments.length -  0);
while (G__44891__i < G__44891__a.length) {G__44891__a[G__44891__i] = arguments[G__44891__i + 0]; ++G__44891__i;}
  args = new cljs.core.IndexedSeq(G__44891__a,0,null);
} 
return G__44890__delegate.call(this,args);};
G__44890.cljs$lang$maxFixedArity = 0;
G__44890.cljs$lang$applyTo = (function (arglist__44892){
var args = cljs.core.seq(arglist__44892);
return G__44890__delegate(args);
});
G__44890.cljs$core$IFn$_invoke$arity$variadic = G__44890__delegate;
return G__44890;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44893 = arguments.length;
var i__41949__auto___44894 = (0);
while(true){
if((i__41949__auto___44894 < len__41948__auto___44893)){
args__41955__auto__.push((arguments[i__41949__auto___44894]));

var G__44895 = (i__41949__auto___44894 + (1));
i__41949__auto___44894 = G__44895;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__44792){
var vec__44793 = p__44792;
var nattempt = cljs.core.nth.call(null,vec__44793,(0),null);
var b2__30704__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__30704__auto__)){
var js_win = b2__30704__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__40669__auto__ = nattempt;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq44790){
var G__44791 = cljs.core.first.call(null,seq44790);
var seq44790__$1 = cljs.core.next.call(null,seq44790);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44791,seq44790__$1);
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
var args__41955__auto__ = [];
var len__41948__auto___44896 = arguments.length;
var i__41949__auto___44897 = (0);
while(true){
if((i__41949__auto___44897 < len__41948__auto___44896)){
args__41955__auto__.push((arguments[i__41949__auto___44897]));

var G__44898 = (i__41949__auto___44897 + (1));
i__41949__auto___44897 = G__44898;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq44796){
var G__44797 = cljs.core.first.call(null,seq44796);
var seq44796__$1 = cljs.core.next.call(null,seq44796);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__44797,seq44796__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44899 = arguments.length;
var i__41949__auto___44900 = (0);
while(true){
if((i__41949__auto___44900 < len__41948__auto___44899)){
args__41955__auto__.push((arguments[i__41949__auto___44900]));

var G__44901 = (i__41949__auto___44900 + (1));
i__41949__auto___44900 = G__44901;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq44798){
var G__44799 = cljs.core.first.call(null,seq44798);
var seq44798__$1 = cljs.core.next.call(null,seq44798);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__44799,seq44798__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44902 = arguments.length;
var i__41949__auto___44903 = (0);
while(true){
if((i__41949__auto___44903 < len__41948__auto___44902)){
args__41955__auto__.push((arguments[i__41949__auto___44903]));

var G__44904 = (i__41949__auto___44903 + (1));
i__41949__auto___44903 = G__44904;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq44800){
var G__44801 = cljs.core.first.call(null,seq44800);
var seq44800__$1 = cljs.core.next.call(null,seq44800);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__44801,seq44800__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44905 = arguments.length;
var i__41949__auto___44906 = (0);
while(true){
if((i__41949__auto___44906 < len__41948__auto___44905)){
args__41955__auto__.push((arguments[i__41949__auto___44906]));

var G__44907 = (i__41949__auto___44906 + (1));
i__41949__auto___44906 = G__44907;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq44802){
var G__44803 = cljs.core.first.call(null,seq44802);
var seq44802__$1 = cljs.core.next.call(null,seq44802);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__44803,seq44802__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44908 = arguments.length;
var i__41949__auto___44909 = (0);
while(true){
if((i__41949__auto___44909 < len__41948__auto___44908)){
args__41955__auto__.push((arguments[i__41949__auto___44909]));

var G__44910 = (i__41949__auto___44909 + (1));
i__41949__auto___44909 = G__44910;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq44804){
var G__44805 = cljs.core.first.call(null,seq44804);
var seq44804__$1 = cljs.core.next.call(null,seq44804);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__44805,seq44804__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44911 = arguments.length;
var i__41949__auto___44912 = (0);
while(true){
if((i__41949__auto___44912 < len__41948__auto___44911)){
args__41955__auto__.push((arguments[i__41949__auto___44912]));

var G__44913 = (i__41949__auto___44912 + (1));
i__41949__auto___44912 = G__44913;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq44806){
var G__44807 = cljs.core.first.call(null,seq44806);
var seq44806__$1 = cljs.core.next.call(null,seq44806);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__44807,seq44806__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44914 = arguments.length;
var i__41949__auto___44915 = (0);
while(true){
if((i__41949__auto___44915 < len__41948__auto___44914)){
args__41955__auto__.push((arguments[i__41949__auto___44915]));

var G__44916 = (i__41949__auto___44915 + (1));
i__41949__auto___44915 = G__44916;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq44808){
var G__44809 = cljs.core.first.call(null,seq44808);
var seq44808__$1 = cljs.core.next.call(null,seq44808);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__44809,seq44808__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44917 = arguments.length;
var i__41949__auto___44918 = (0);
while(true){
if((i__41949__auto___44918 < len__41948__auto___44917)){
args__41955__auto__.push((arguments[i__41949__auto___44918]));

var G__44919 = (i__41949__auto___44918 + (1));
i__41949__auto___44918 = G__44919;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__44812){
var vec__44813 = p__44812;
var _QMARK_comparator = cljs.core.nth.call(null,vec__44813,(0),null);
var comparator = (function (){var or__40669__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__44813,_QMARK_comparator){
return (function (p1__44769_SHARP_,p2__44770_SHARP_){
if((comparator.call(null,p1__44769_SHARP_,p2__44770_SHARP_) > (0))){
return p2__44770_SHARP_;
} else {
return p1__44769_SHARP_;
}
});})(comparator,vec__44813,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq44810){
var G__44811 = cljs.core.first.call(null,seq44810);
var seq44810__$1 = cljs.core.next.call(null,seq44810);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__44811,seq44810__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44920 = arguments.length;
var i__41949__auto___44921 = (0);
while(true){
if((i__41949__auto___44921 < len__41948__auto___44920)){
args__41955__auto__.push((arguments[i__41949__auto___44921]));

var G__44922 = (i__41949__auto___44921 + (1));
i__41949__auto___44921 = G__44922;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__44818){
var vec__44819 = p__44818;
var _QMARK_comparator = cljs.core.nth.call(null,vec__44819,(0),null);
var comparator = (function (){var or__40669__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__44819,_QMARK_comparator){
return (function (p1__44771_SHARP_,p2__44772_SHARP_){
if((comparator.call(null,p1__44771_SHARP_,p2__44772_SHARP_) < (0))){
return p2__44772_SHARP_;
} else {
return p1__44771_SHARP_;
}
});})(comparator,vec__44819,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq44816){
var G__44817 = cljs.core.first.call(null,seq44816);
var seq44816__$1 = cljs.core.next.call(null,seq44816);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__44817,seq44816__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__40669__auto__ = x;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__44822,seen__$1){
while(true){
var vec__44823 = p__44822;
var v = cljs.core.nth.call(null,vec__44823,(0),null);
var xs__$1 = vec__44823;
var b2__30704__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__30704__auto__){
var s = b2__30704__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__44923 = cljs.core.rest.call(null,s);
var G__44924 = seen__$1;
p__44822 = G__44923;
seen__$1 = G__44924;
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

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__44827 = arguments.length;
switch (G__44827) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__44828,in$){
var vec__44829 = p__44828;
var v = cljs.core.nth.call(null,vec__44829,(0),null);
var seen = cljs.core.nth.call(null,vec__44829,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44926 = arguments.length;
var i__41949__auto___44927 = (0);
while(true){
if((i__41949__auto___44927 < len__41948__auto___44926)){
args__41955__auto__.push((arguments[i__41949__auto___44927]));

var G__44928 = (i__41949__auto___44927 + (1));
i__41949__auto___44927 = G__44928;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__44834){
var vec__44835 = p__44834;
var kf = cljs.core.nth.call(null,vec__44835,(0),null);
var vf = cljs.core.nth.call(null,vec__44835,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__44835,kf,vf){
return (function (_,v){
return v;
});})(vec__44835,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__44835,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__44835,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__44835,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__44835,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__44835,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__44835,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq44832){
var G__44833 = cljs.core.first.call(null,seq44832);
var seq44832__$1 = cljs.core.next.call(null,seq44832);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__44833,seq44832__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44929 = arguments.length;
var i__41949__auto___44930 = (0);
while(true){
if((i__41949__auto___44930 < len__41948__auto___44929)){
args__41955__auto__.push((arguments[i__41949__auto___44930]));

var G__44931 = (i__41949__auto___44930 + (1));
i__41949__auto___44930 = G__44931;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq44838){
var G__44839 = cljs.core.first.call(null,seq44838);
var seq44838__$1 = cljs.core.next.call(null,seq44838);
var G__44840 = cljs.core.first.call(null,seq44838__$1);
var seq44838__$2 = cljs.core.next.call(null,seq44838__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__44839,G__44840,seq44838__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__41028__auto__ = signed_idx;
var y__41029__auto__ = max_idx;
return ((x__41028__auto__ < y__41029__auto__) ? x__41028__auto__ : y__41029__auto__);
} else {
var x__41021__auto__ = (0);
var y__41022__auto__ = (signed_idx + max_idx);
return ((x__41021__auto__ > y__41022__auto__) ? x__41021__auto__ : y__41022__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44932 = arguments.length;
var i__41949__auto___44933 = (0);
while(true){
if((i__41949__auto___44933 < len__41948__auto___44932)){
args__41955__auto__.push((arguments[i__41949__auto___44933]));

var G__44934 = (i__41949__auto___44933 + (1));
i__41949__auto___44933 = G__44934;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__44844){
var map__44845 = p__44844;
var map__44845__$1 = ((((!((map__44845 == null)))?((((map__44845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44845):map__44845);
var max_len = cljs.core.get.call(null,map__44845__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__44845__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__31163__auto__ = (start_idx_STAR_ + max_len);
var n2__31164__auto__ = xlen;
if((n1__31163__auto__ > n2__31164__auto__)){
return n2__31164__auto__;
} else {
return n1__31163__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq44841){
var G__44842 = cljs.core.first.call(null,seq44841);
var seq44841__$1 = cljs.core.next.call(null,seq44841);
var G__44843 = cljs.core.first.call(null,seq44841__$1);
var seq44841__$2 = cljs.core.next.call(null,seq44841__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__44842,G__44843,seq44841__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44935 = arguments.length;
var i__41949__auto___44936 = (0);
while(true){
if((i__41949__auto___44936 < len__41948__auto___44935)){
args__41955__auto__.push((arguments[i__41949__auto___44936]));

var G__44937 = (i__41949__auto___44936 + (1));
i__41949__auto___44936 = G__44937;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__44850){
var vec__44851 = p__44850;
var _QMARK_max_len = cljs.core.nth.call(null,vec__44851,(0),null);
var vec__44854 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__44854,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__44854,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq44847){
var G__44848 = cljs.core.first.call(null,seq44847);
var seq44847__$1 = cljs.core.next.call(null,seq44847);
var G__44849 = cljs.core.first.call(null,seq44847__$1);
var seq44847__$2 = cljs.core.next.call(null,seq44847__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__44848,G__44849,seq44847__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44938 = arguments.length;
var i__41949__auto___44939 = (0);
while(true){
if((i__41949__auto___44939 < len__41948__auto___44938)){
args__41955__auto__.push((arguments[i__41949__auto___44939]));

var G__44940 = (i__41949__auto___44939 + (1));
i__41949__auto___44939 = G__44940;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__44860){
var vec__44861 = p__44860;
var _QMARK_max_len = cljs.core.nth.call(null,vec__44861,(0),null);
var vec__44864 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__44864,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__44864,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq44857){
var G__44858 = cljs.core.first.call(null,seq44857);
var seq44857__$1 = cljs.core.next.call(null,seq44857);
var G__44859 = cljs.core.first.call(null,seq44857__$1);
var seq44857__$2 = cljs.core.next.call(null,seq44857__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__44858,G__44859,seq44857__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__44869 = coll;
var c1 = cljs.core.nth.call(null,vec__44869,(0),null);
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

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__44941 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__44942 = cljs.core.next.call(null,ks__$1);
var G__44943 = cljs.core.next.call(null,vs__$1);
m = G__44941;
ks__$1 = G__44942;
vs__$1 = G__44943;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__41955__auto__ = [];
var len__41948__auto___44944 = arguments.length;
var i__41949__auto___44945 = (0);
while(true){
if((i__41949__auto___44945 < len__41948__auto___44944)){
args__41955__auto__.push((arguments[i__41949__auto___44945]));

var G__44946 = (i__41949__auto___44945 + (1));
i__41949__auto___44945 = G__44946;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__44874 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__44874,(0),null);
var ks = cljs.core.nth.call(null,vec__44874,(1),null);
var valf = cljs.core.nth.call(null,vec__44874,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?((function (vec__44874,type,ks,valf){
return (function (_){
return valf;
});})(vec__44874,type,ks,valf))
:valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq44872){
var G__44873 = cljs.core.first.call(null,seq44872);
var seq44872__$1 = cljs.core.next.call(null,seq44872);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__44873,seq44872__$1);
});


//# sourceMappingURL=encore.js.map
