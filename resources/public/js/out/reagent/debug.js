// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__45067__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45068__i = 0, G__45068__a = new Array(arguments.length -  0);
while (G__45068__i < G__45068__a.length) {G__45068__a[G__45068__i] = arguments[G__45068__i + 0]; ++G__45068__i;}
  args = new cljs.core.IndexedSeq(G__45068__a,0,null);
} 
return G__45067__delegate.call(this,args);};
G__45067.cljs$lang$maxFixedArity = 0;
G__45067.cljs$lang$applyTo = (function (arglist__45069){
var args = cljs.core.seq(arglist__45069);
return G__45067__delegate(args);
});
G__45067.cljs$core$IFn$_invoke$arity$variadic = G__45067__delegate;
return G__45067;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45070__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45071__i = 0, G__45071__a = new Array(arguments.length -  0);
while (G__45071__i < G__45071__a.length) {G__45071__a[G__45071__i] = arguments[G__45071__i + 0]; ++G__45071__i;}
  args = new cljs.core.IndexedSeq(G__45071__a,0,null);
} 
return G__45070__delegate.call(this,args);};
G__45070.cljs$lang$maxFixedArity = 0;
G__45070.cljs$lang$applyTo = (function (arglist__45072){
var args = cljs.core.seq(arglist__45072);
return G__45070__delegate(args);
});
G__45070.cljs$core$IFn$_invoke$arity$variadic = G__45070__delegate;
return G__45070;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
