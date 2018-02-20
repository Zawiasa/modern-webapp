// Compiled by ClojureScript 1.9.946 {}
goog.provide('differ.core');
goog.require('cljs.core');
goog.require('differ.diff');
goog.require('differ.patch');
/**
 * Returns a vector containing the differing, and non-existant elements, of
 *   two clojure datastructures.
 */
differ.core.diff = (function differ$core$diff(state,new_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [differ.diff.alterations.call(null,state,new_state),differ.diff.removals.call(null,state,new_state)], null);
});
/**
 * Applies a diff, as created by the diff function, to any datastructure.
 */
differ.core.patch = (function differ$core$patch(state,p__53089){
var vec__53090 = p__53089;
var alterations = cljs.core.nth.call(null,vec__53090,(0),null);
var removals = cljs.core.nth.call(null,vec__53090,(1),null);
return differ.patch.alterations.call(null,differ.patch.removals.call(null,state,removals),alterations);
});

//# sourceMappingURL=core.js.map
