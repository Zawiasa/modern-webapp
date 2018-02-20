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
var G__42451__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42452__i = 0, G__42452__a = new Array(arguments.length -  0);
while (G__42452__i < G__42452__a.length) {G__42452__a[G__42452__i] = arguments[G__42452__i + 0]; ++G__42452__i;}
  args = new cljs.core.IndexedSeq(G__42452__a,0,null);
} 
return G__42451__delegate.call(this,args);};
G__42451.cljs$lang$maxFixedArity = 0;
G__42451.cljs$lang$applyTo = (function (arglist__42453){
var args = cljs.core.seq(arglist__42453);
return G__42451__delegate(args);
});
G__42451.cljs$core$IFn$_invoke$arity$variadic = G__42451__delegate;
return G__42451;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42454__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42455__i = 0, G__42455__a = new Array(arguments.length -  0);
while (G__42455__i < G__42455__a.length) {G__42455__a[G__42455__i] = arguments[G__42455__i + 0]; ++G__42455__i;}
  args = new cljs.core.IndexedSeq(G__42455__a,0,null);
} 
return G__42454__delegate.call(this,args);};
G__42454.cljs$lang$maxFixedArity = 0;
G__42454.cljs$lang$applyTo = (function (arglist__42456){
var args = cljs.core.seq(arglist__42456);
return G__42454__delegate(args);
});
G__42454.cljs$core$IFn$_invoke$arity$variadic = G__42454__delegate;
return G__42454;
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
