// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49553 = arguments.length;
var i__41949__auto___49554 = (0);
while(true){
if((i__41949__auto___49554 < len__41948__auto___49553)){
args__41955__auto__.push((arguments[i__41949__auto___49554]));

var G__49555 = (i__41949__auto___49554 + (1));
i__41949__auto___49554 = G__49555;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49552){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49552));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49557 = arguments.length;
var i__41949__auto___49558 = (0);
while(true){
if((i__41949__auto___49558 < len__41948__auto___49557)){
args__41955__auto__.push((arguments[i__41949__auto___49558]));

var G__49559 = (i__41949__auto___49558 + (1));
i__41949__auto___49558 = G__49559;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49556){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49556));
});

var g_QMARK__49560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_49561 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49560){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__49560))
,null));
var mkg_49562 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49560,g_49561){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__49560,g_49561))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49560,g_49561,mkg_49562){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49560).call(null,x);
});})(g_QMARK__49560,g_49561,mkg_49562))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49560,g_49561,mkg_49562){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49562).call(null,gfn);
});})(g_QMARK__49560,g_49561,mkg_49562))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49560,g_49561,mkg_49562){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49561).call(null,generator);
});})(g_QMARK__49560,g_49561,mkg_49562))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42051__auto___49582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42051__auto___49582){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49583 = arguments.length;
var i__41949__auto___49584 = (0);
while(true){
if((i__41949__auto___49584 < len__41948__auto___49583)){
args__41955__auto__.push((arguments[i__41949__auto___49584]));

var G__49585 = (i__41949__auto___49584 + (1));
i__41949__auto___49584 = G__49585;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49582))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49582),args);
});})(g__42051__auto___49582))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42051__auto___49582){
return (function (seq49563){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49563));
});})(g__42051__auto___49582))
;


var g__42051__auto___49586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42051__auto___49586){
return (function cljs$spec$gen$alpha$list(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49587 = arguments.length;
var i__41949__auto___49588 = (0);
while(true){
if((i__41949__auto___49588 < len__41948__auto___49587)){
args__41955__auto__.push((arguments[i__41949__auto___49588]));

var G__49589 = (i__41949__auto___49588 + (1));
i__41949__auto___49588 = G__49589;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49586))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49586),args);
});})(g__42051__auto___49586))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42051__auto___49586){
return (function (seq49564){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49564));
});})(g__42051__auto___49586))
;


var g__42051__auto___49590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42051__auto___49590){
return (function cljs$spec$gen$alpha$map(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49591 = arguments.length;
var i__41949__auto___49592 = (0);
while(true){
if((i__41949__auto___49592 < len__41948__auto___49591)){
args__41955__auto__.push((arguments[i__41949__auto___49592]));

var G__49593 = (i__41949__auto___49592 + (1));
i__41949__auto___49592 = G__49593;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49590))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49590),args);
});})(g__42051__auto___49590))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42051__auto___49590){
return (function (seq49565){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49565));
});})(g__42051__auto___49590))
;


var g__42051__auto___49594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42051__auto___49594){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49595 = arguments.length;
var i__41949__auto___49596 = (0);
while(true){
if((i__41949__auto___49596 < len__41948__auto___49595)){
args__41955__auto__.push((arguments[i__41949__auto___49596]));

var G__49597 = (i__41949__auto___49596 + (1));
i__41949__auto___49596 = G__49597;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49594))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49594),args);
});})(g__42051__auto___49594))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42051__auto___49594){
return (function (seq49566){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49566));
});})(g__42051__auto___49594))
;


var g__42051__auto___49598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42051__auto___49598){
return (function cljs$spec$gen$alpha$set(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49599 = arguments.length;
var i__41949__auto___49600 = (0);
while(true){
if((i__41949__auto___49600 < len__41948__auto___49599)){
args__41955__auto__.push((arguments[i__41949__auto___49600]));

var G__49601 = (i__41949__auto___49600 + (1));
i__41949__auto___49600 = G__49601;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49598))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49598),args);
});})(g__42051__auto___49598))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42051__auto___49598){
return (function (seq49567){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49567));
});})(g__42051__auto___49598))
;


var g__42051__auto___49602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42051__auto___49602){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49603 = arguments.length;
var i__41949__auto___49604 = (0);
while(true){
if((i__41949__auto___49604 < len__41948__auto___49603)){
args__41955__auto__.push((arguments[i__41949__auto___49604]));

var G__49605 = (i__41949__auto___49604 + (1));
i__41949__auto___49604 = G__49605;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49602))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49602),args);
});})(g__42051__auto___49602))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42051__auto___49602){
return (function (seq49568){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49568));
});})(g__42051__auto___49602))
;


var g__42051__auto___49606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42051__auto___49606){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49607 = arguments.length;
var i__41949__auto___49608 = (0);
while(true){
if((i__41949__auto___49608 < len__41948__auto___49607)){
args__41955__auto__.push((arguments[i__41949__auto___49608]));

var G__49609 = (i__41949__auto___49608 + (1));
i__41949__auto___49608 = G__49609;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49606))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49606){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49606),args);
});})(g__42051__auto___49606))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42051__auto___49606){
return (function (seq49569){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49569));
});})(g__42051__auto___49606))
;


var g__42051__auto___49610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42051__auto___49610){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49611 = arguments.length;
var i__41949__auto___49612 = (0);
while(true){
if((i__41949__auto___49612 < len__41948__auto___49611)){
args__41955__auto__.push((arguments[i__41949__auto___49612]));

var G__49613 = (i__41949__auto___49612 + (1));
i__41949__auto___49612 = G__49613;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49610))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49610){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49610),args);
});})(g__42051__auto___49610))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42051__auto___49610){
return (function (seq49570){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49570));
});})(g__42051__auto___49610))
;


var g__42051__auto___49614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42051__auto___49614){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49615 = arguments.length;
var i__41949__auto___49616 = (0);
while(true){
if((i__41949__auto___49616 < len__41948__auto___49615)){
args__41955__auto__.push((arguments[i__41949__auto___49616]));

var G__49617 = (i__41949__auto___49616 + (1));
i__41949__auto___49616 = G__49617;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49614))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49614),args);
});})(g__42051__auto___49614))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42051__auto___49614){
return (function (seq49571){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49571));
});})(g__42051__auto___49614))
;


var g__42051__auto___49618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42051__auto___49618){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49619 = arguments.length;
var i__41949__auto___49620 = (0);
while(true){
if((i__41949__auto___49620 < len__41948__auto___49619)){
args__41955__auto__.push((arguments[i__41949__auto___49620]));

var G__49621 = (i__41949__auto___49620 + (1));
i__41949__auto___49620 = G__49621;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49618))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49618),args);
});})(g__42051__auto___49618))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42051__auto___49618){
return (function (seq49572){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49572));
});})(g__42051__auto___49618))
;


var g__42051__auto___49622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42051__auto___49622){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49623 = arguments.length;
var i__41949__auto___49624 = (0);
while(true){
if((i__41949__auto___49624 < len__41948__auto___49623)){
args__41955__auto__.push((arguments[i__41949__auto___49624]));

var G__49625 = (i__41949__auto___49624 + (1));
i__41949__auto___49624 = G__49625;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49622))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49622),args);
});})(g__42051__auto___49622))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42051__auto___49622){
return (function (seq49573){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49573));
});})(g__42051__auto___49622))
;


var g__42051__auto___49626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42051__auto___49626){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49627 = arguments.length;
var i__41949__auto___49628 = (0);
while(true){
if((i__41949__auto___49628 < len__41948__auto___49627)){
args__41955__auto__.push((arguments[i__41949__auto___49628]));

var G__49629 = (i__41949__auto___49628 + (1));
i__41949__auto___49628 = G__49629;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49626))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49626),args);
});})(g__42051__auto___49626))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42051__auto___49626){
return (function (seq49574){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49574));
});})(g__42051__auto___49626))
;


var g__42051__auto___49630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42051__auto___49630){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49631 = arguments.length;
var i__41949__auto___49632 = (0);
while(true){
if((i__41949__auto___49632 < len__41948__auto___49631)){
args__41955__auto__.push((arguments[i__41949__auto___49632]));

var G__49633 = (i__41949__auto___49632 + (1));
i__41949__auto___49632 = G__49633;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49630))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49630),args);
});})(g__42051__auto___49630))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42051__auto___49630){
return (function (seq49575){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49575));
});})(g__42051__auto___49630))
;


var g__42051__auto___49634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42051__auto___49634){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49635 = arguments.length;
var i__41949__auto___49636 = (0);
while(true){
if((i__41949__auto___49636 < len__41948__auto___49635)){
args__41955__auto__.push((arguments[i__41949__auto___49636]));

var G__49637 = (i__41949__auto___49636 + (1));
i__41949__auto___49636 = G__49637;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49634))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49634),args);
});})(g__42051__auto___49634))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42051__auto___49634){
return (function (seq49576){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49576));
});})(g__42051__auto___49634))
;


var g__42051__auto___49638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42051__auto___49638){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49639 = arguments.length;
var i__41949__auto___49640 = (0);
while(true){
if((i__41949__auto___49640 < len__41948__auto___49639)){
args__41955__auto__.push((arguments[i__41949__auto___49640]));

var G__49641 = (i__41949__auto___49640 + (1));
i__41949__auto___49640 = G__49641;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49638))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49638),args);
});})(g__42051__auto___49638))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42051__auto___49638){
return (function (seq49577){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49577));
});})(g__42051__auto___49638))
;


var g__42051__auto___49642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42051__auto___49642){
return (function cljs$spec$gen$alpha$return(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49643 = arguments.length;
var i__41949__auto___49644 = (0);
while(true){
if((i__41949__auto___49644 < len__41948__auto___49643)){
args__41955__auto__.push((arguments[i__41949__auto___49644]));

var G__49645 = (i__41949__auto___49644 + (1));
i__41949__auto___49644 = G__49645;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49642))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49642),args);
});})(g__42051__auto___49642))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42051__auto___49642){
return (function (seq49578){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49578));
});})(g__42051__auto___49642))
;


var g__42051__auto___49646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42051__auto___49646){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49647 = arguments.length;
var i__41949__auto___49648 = (0);
while(true){
if((i__41949__auto___49648 < len__41948__auto___49647)){
args__41955__auto__.push((arguments[i__41949__auto___49648]));

var G__49649 = (i__41949__auto___49648 + (1));
i__41949__auto___49648 = G__49649;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49646))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49646),args);
});})(g__42051__auto___49646))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42051__auto___49646){
return (function (seq49579){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49579));
});})(g__42051__auto___49646))
;


var g__42051__auto___49650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42051__auto___49650){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49651 = arguments.length;
var i__41949__auto___49652 = (0);
while(true){
if((i__41949__auto___49652 < len__41948__auto___49651)){
args__41955__auto__.push((arguments[i__41949__auto___49652]));

var G__49653 = (i__41949__auto___49652 + (1));
i__41949__auto___49652 = G__49653;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49650))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49650),args);
});})(g__42051__auto___49650))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42051__auto___49650){
return (function (seq49580){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49580));
});})(g__42051__auto___49650))
;


var g__42051__auto___49654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42051__auto___49654){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49655 = arguments.length;
var i__41949__auto___49656 = (0);
while(true){
if((i__41949__auto___49656 < len__41948__auto___49655)){
args__41955__auto__.push((arguments[i__41949__auto___49656]));

var G__49657 = (i__41949__auto___49656 + (1));
i__41949__auto___49656 = G__49657;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42051__auto___49654))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42051__auto___49654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42051__auto___49654),args);
});})(g__42051__auto___49654))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42051__auto___49654){
return (function (seq49581){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49581));
});})(g__42051__auto___49654))
;

var g__42064__auto___49679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42064__auto___49679){
return (function cljs$spec$gen$alpha$any(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49680 = arguments.length;
var i__41949__auto___49681 = (0);
while(true){
if((i__41949__auto___49681 < len__41948__auto___49680)){
args__41955__auto__.push((arguments[i__41949__auto___49681]));

var G__49682 = (i__41949__auto___49681 + (1));
i__41949__auto___49681 = G__49682;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49679))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49679){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49679);
});})(g__42064__auto___49679))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42064__auto___49679){
return (function (seq49658){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49658));
});})(g__42064__auto___49679))
;


var g__42064__auto___49683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42064__auto___49683){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49684 = arguments.length;
var i__41949__auto___49685 = (0);
while(true){
if((i__41949__auto___49685 < len__41948__auto___49684)){
args__41955__auto__.push((arguments[i__41949__auto___49685]));

var G__49686 = (i__41949__auto___49685 + (1));
i__41949__auto___49685 = G__49686;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49683))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49683){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49683);
});})(g__42064__auto___49683))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42064__auto___49683){
return (function (seq49659){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49659));
});})(g__42064__auto___49683))
;


var g__42064__auto___49687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42064__auto___49687){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49688 = arguments.length;
var i__41949__auto___49689 = (0);
while(true){
if((i__41949__auto___49689 < len__41948__auto___49688)){
args__41955__auto__.push((arguments[i__41949__auto___49689]));

var G__49690 = (i__41949__auto___49689 + (1));
i__41949__auto___49689 = G__49690;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49687))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49687){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49687);
});})(g__42064__auto___49687))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42064__auto___49687){
return (function (seq49660){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49660));
});})(g__42064__auto___49687))
;


var g__42064__auto___49691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42064__auto___49691){
return (function cljs$spec$gen$alpha$char(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49692 = arguments.length;
var i__41949__auto___49693 = (0);
while(true){
if((i__41949__auto___49693 < len__41948__auto___49692)){
args__41955__auto__.push((arguments[i__41949__auto___49693]));

var G__49694 = (i__41949__auto___49693 + (1));
i__41949__auto___49693 = G__49694;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49691))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49691){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49691);
});})(g__42064__auto___49691))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42064__auto___49691){
return (function (seq49661){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49661));
});})(g__42064__auto___49691))
;


var g__42064__auto___49695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42064__auto___49695){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49696 = arguments.length;
var i__41949__auto___49697 = (0);
while(true){
if((i__41949__auto___49697 < len__41948__auto___49696)){
args__41955__auto__.push((arguments[i__41949__auto___49697]));

var G__49698 = (i__41949__auto___49697 + (1));
i__41949__auto___49697 = G__49698;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49695))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49695){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49695);
});})(g__42064__auto___49695))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42064__auto___49695){
return (function (seq49662){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49662));
});})(g__42064__auto___49695))
;


var g__42064__auto___49699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42064__auto___49699){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49700 = arguments.length;
var i__41949__auto___49701 = (0);
while(true){
if((i__41949__auto___49701 < len__41948__auto___49700)){
args__41955__auto__.push((arguments[i__41949__auto___49701]));

var G__49702 = (i__41949__auto___49701 + (1));
i__41949__auto___49701 = G__49702;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49699))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49699){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49699);
});})(g__42064__auto___49699))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42064__auto___49699){
return (function (seq49663){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49663));
});})(g__42064__auto___49699))
;


var g__42064__auto___49703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42064__auto___49703){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49704 = arguments.length;
var i__41949__auto___49705 = (0);
while(true){
if((i__41949__auto___49705 < len__41948__auto___49704)){
args__41955__auto__.push((arguments[i__41949__auto___49705]));

var G__49706 = (i__41949__auto___49705 + (1));
i__41949__auto___49705 = G__49706;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49703))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49703){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49703);
});})(g__42064__auto___49703))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42064__auto___49703){
return (function (seq49664){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49664));
});})(g__42064__auto___49703))
;


var g__42064__auto___49707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42064__auto___49707){
return (function cljs$spec$gen$alpha$double(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49708 = arguments.length;
var i__41949__auto___49709 = (0);
while(true){
if((i__41949__auto___49709 < len__41948__auto___49708)){
args__41955__auto__.push((arguments[i__41949__auto___49709]));

var G__49710 = (i__41949__auto___49709 + (1));
i__41949__auto___49709 = G__49710;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49707))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49707){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49707);
});})(g__42064__auto___49707))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42064__auto___49707){
return (function (seq49665){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49665));
});})(g__42064__auto___49707))
;


var g__42064__auto___49711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42064__auto___49711){
return (function cljs$spec$gen$alpha$int(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49712 = arguments.length;
var i__41949__auto___49713 = (0);
while(true){
if((i__41949__auto___49713 < len__41948__auto___49712)){
args__41955__auto__.push((arguments[i__41949__auto___49713]));

var G__49714 = (i__41949__auto___49713 + (1));
i__41949__auto___49713 = G__49714;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49711))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49711){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49711);
});})(g__42064__auto___49711))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42064__auto___49711){
return (function (seq49666){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49666));
});})(g__42064__auto___49711))
;


var g__42064__auto___49715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42064__auto___49715){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49716 = arguments.length;
var i__41949__auto___49717 = (0);
while(true){
if((i__41949__auto___49717 < len__41948__auto___49716)){
args__41955__auto__.push((arguments[i__41949__auto___49717]));

var G__49718 = (i__41949__auto___49717 + (1));
i__41949__auto___49717 = G__49718;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49715))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49715){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49715);
});})(g__42064__auto___49715))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42064__auto___49715){
return (function (seq49667){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49667));
});})(g__42064__auto___49715))
;


var g__42064__auto___49719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42064__auto___49719){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49720 = arguments.length;
var i__41949__auto___49721 = (0);
while(true){
if((i__41949__auto___49721 < len__41948__auto___49720)){
args__41955__auto__.push((arguments[i__41949__auto___49721]));

var G__49722 = (i__41949__auto___49721 + (1));
i__41949__auto___49721 = G__49722;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49719))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49719){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49719);
});})(g__42064__auto___49719))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42064__auto___49719){
return (function (seq49668){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49668));
});})(g__42064__auto___49719))
;


var g__42064__auto___49723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42064__auto___49723){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49724 = arguments.length;
var i__41949__auto___49725 = (0);
while(true){
if((i__41949__auto___49725 < len__41948__auto___49724)){
args__41955__auto__.push((arguments[i__41949__auto___49725]));

var G__49726 = (i__41949__auto___49725 + (1));
i__41949__auto___49725 = G__49726;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49723))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49723){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49723);
});})(g__42064__auto___49723))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42064__auto___49723){
return (function (seq49669){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49669));
});})(g__42064__auto___49723))
;


var g__42064__auto___49727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42064__auto___49727){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49728 = arguments.length;
var i__41949__auto___49729 = (0);
while(true){
if((i__41949__auto___49729 < len__41948__auto___49728)){
args__41955__auto__.push((arguments[i__41949__auto___49729]));

var G__49730 = (i__41949__auto___49729 + (1));
i__41949__auto___49729 = G__49730;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49727))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49727){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49727);
});})(g__42064__auto___49727))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42064__auto___49727){
return (function (seq49670){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49670));
});})(g__42064__auto___49727))
;


var g__42064__auto___49731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42064__auto___49731){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49732 = arguments.length;
var i__41949__auto___49733 = (0);
while(true){
if((i__41949__auto___49733 < len__41948__auto___49732)){
args__41955__auto__.push((arguments[i__41949__auto___49733]));

var G__49734 = (i__41949__auto___49733 + (1));
i__41949__auto___49733 = G__49734;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49731))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49731){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49731);
});})(g__42064__auto___49731))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42064__auto___49731){
return (function (seq49671){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49671));
});})(g__42064__auto___49731))
;


var g__42064__auto___49735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42064__auto___49735){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49736 = arguments.length;
var i__41949__auto___49737 = (0);
while(true){
if((i__41949__auto___49737 < len__41948__auto___49736)){
args__41955__auto__.push((arguments[i__41949__auto___49737]));

var G__49738 = (i__41949__auto___49737 + (1));
i__41949__auto___49737 = G__49738;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49735))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49735){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49735);
});})(g__42064__auto___49735))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42064__auto___49735){
return (function (seq49672){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49672));
});})(g__42064__auto___49735))
;


var g__42064__auto___49739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42064__auto___49739){
return (function cljs$spec$gen$alpha$string(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49740 = arguments.length;
var i__41949__auto___49741 = (0);
while(true){
if((i__41949__auto___49741 < len__41948__auto___49740)){
args__41955__auto__.push((arguments[i__41949__auto___49741]));

var G__49742 = (i__41949__auto___49741 + (1));
i__41949__auto___49741 = G__49742;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49739))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49739){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49739);
});})(g__42064__auto___49739))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42064__auto___49739){
return (function (seq49673){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49673));
});})(g__42064__auto___49739))
;


var g__42064__auto___49743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42064__auto___49743){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49744 = arguments.length;
var i__41949__auto___49745 = (0);
while(true){
if((i__41949__auto___49745 < len__41948__auto___49744)){
args__41955__auto__.push((arguments[i__41949__auto___49745]));

var G__49746 = (i__41949__auto___49745 + (1));
i__41949__auto___49745 = G__49746;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49743))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49743){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49743);
});})(g__42064__auto___49743))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42064__auto___49743){
return (function (seq49674){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49674));
});})(g__42064__auto___49743))
;


var g__42064__auto___49747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42064__auto___49747){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49748 = arguments.length;
var i__41949__auto___49749 = (0);
while(true){
if((i__41949__auto___49749 < len__41948__auto___49748)){
args__41955__auto__.push((arguments[i__41949__auto___49749]));

var G__49750 = (i__41949__auto___49749 + (1));
i__41949__auto___49749 = G__49750;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49747))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49747){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49747);
});})(g__42064__auto___49747))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42064__auto___49747){
return (function (seq49675){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49675));
});})(g__42064__auto___49747))
;


var g__42064__auto___49751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42064__auto___49751){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49752 = arguments.length;
var i__41949__auto___49753 = (0);
while(true){
if((i__41949__auto___49753 < len__41948__auto___49752)){
args__41955__auto__.push((arguments[i__41949__auto___49753]));

var G__49754 = (i__41949__auto___49753 + (1));
i__41949__auto___49753 = G__49754;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49751))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49751){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49751);
});})(g__42064__auto___49751))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42064__auto___49751){
return (function (seq49676){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49676));
});})(g__42064__auto___49751))
;


var g__42064__auto___49755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42064__auto___49755){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49756 = arguments.length;
var i__41949__auto___49757 = (0);
while(true){
if((i__41949__auto___49757 < len__41948__auto___49756)){
args__41955__auto__.push((arguments[i__41949__auto___49757]));

var G__49758 = (i__41949__auto___49757 + (1));
i__41949__auto___49757 = G__49758;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49755))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49755){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49755);
});})(g__42064__auto___49755))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42064__auto___49755){
return (function (seq49677){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49677));
});})(g__42064__auto___49755))
;


var g__42064__auto___49759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42064__auto___49759){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49760 = arguments.length;
var i__41949__auto___49761 = (0);
while(true){
if((i__41949__auto___49761 < len__41948__auto___49760)){
args__41955__auto__.push((arguments[i__41949__auto___49761]));

var G__49762 = (i__41949__auto___49761 + (1));
i__41949__auto___49761 = G__49762;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});})(g__42064__auto___49759))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42064__auto___49759){
return (function (args){
return cljs.core.deref.call(null,g__42064__auto___49759);
});})(g__42064__auto___49759))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42064__auto___49759){
return (function (seq49678){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49678));
});})(g__42064__auto___49759))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49765 = arguments.length;
var i__41949__auto___49766 = (0);
while(true){
if((i__41949__auto___49766 < len__41948__auto___49765)){
args__41955__auto__.push((arguments[i__41949__auto___49766]));

var G__49767 = (i__41949__auto___49766 + (1));
i__41949__auto___49766 = G__49767;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__49763_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__49763_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq49764){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49764));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__49768_SHARP_){
return (new Date(p1__49768_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
