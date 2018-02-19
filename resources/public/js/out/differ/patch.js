// Compiled by ClojureScript 1.7.122 {}
goog.provide('differ.patch');
goog.require('cljs.core');
goog.require('clojure.set');
differ.patch.alterations;

differ.patch.removals;
differ.patch.map_alterations = (function differ$patch$map_alterations(state,diff){
var G__32235 = cljs.core.keys.call(null,diff);
var vec__32236 = G__32235;
var k = cljs.core.nth.call(null,vec__32236,(0),null);
var ks = cljs.core.nthnext.call(null,vec__32236,(1));
var result = cljs.core.transient$.call(null,state);
var G__32235__$1 = G__32235;
var result__$1 = result;
while(true){
var vec__32237 = G__32235__$1;
var k__$1 = cljs.core.nth.call(null,vec__32237,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__32237,(1));
var result__$2 = result__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.persistent_BANG_.call(null,result__$2);
} else {
var old_val = cljs.core.get.call(null,result__$2,k__$1);
var diff_val = cljs.core.get.call(null,diff,k__$1);
var G__32238 = ks__$1;
var G__32239 = cljs.core.assoc_BANG_.call(null,result__$2,k__$1,differ.patch.alterations.call(null,old_val,diff_val));
G__32235__$1 = G__32238;
result__$1 = G__32239;
continue;
}
break;
}
});
differ.patch.vec_alterations = (function differ$patch$vec_alterations(state,diff){
var idx = (0);
var G__32250 = state;
var vec__32252 = G__32250;
var old_val = cljs.core.nth.call(null,vec__32252,(0),null);
var old_rest = cljs.core.nthnext.call(null,vec__32252,(1));
var old_coll = vec__32252;
var G__32251 = diff;
var vec__32253 = G__32251;
var diff_idx = cljs.core.nth.call(null,vec__32253,(0),null);
var diff_val = cljs.core.nth.call(null,vec__32253,(1),null);
var diff_rest = cljs.core.nthnext.call(null,vec__32253,(2));
var diff_coll = vec__32253;
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var idx__$1 = idx;
var G__32250__$1 = G__32250;
var G__32251__$1 = G__32251;
var result__$1 = result;
while(true){
var idx__$2 = idx__$1;
var vec__32254 = G__32250__$1;
var old_val__$1 = cljs.core.nth.call(null,vec__32254,(0),null);
var old_rest__$1 = cljs.core.nthnext.call(null,vec__32254,(1));
var old_coll__$1 = vec__32254;
var vec__32255 = G__32251__$1;
var diff_idx__$1 = cljs.core.nth.call(null,vec__32255,(0),null);
var diff_val__$1 = cljs.core.nth.call(null,vec__32255,(1),null);
var diff_rest__$1 = cljs.core.nthnext.call(null,vec__32255,(2));
var diff_coll__$1 = vec__32255;
var result__$2 = result__$1;
var old_empty_QMARK_ = cljs.core.empty_QMARK_.call(null,old_coll__$1);
var diff_empty_QMARK_ = cljs.core.empty_QMARK_.call(null,diff_coll__$1);
if((old_empty_QMARK_) && (diff_empty_QMARK_)){
return cljs.core.persistent_BANG_.call(null,result__$2);
} else {
if(diff_empty_QMARK_){
var G__32256 = (idx__$2 + (1));
var G__32257 = old_rest__$1;
var G__32258 = diff_rest__$1;
var G__32259 = cljs.core.conj_BANG_.call(null,result__$2,old_val__$1);
idx__$1 = G__32256;
G__32250__$1 = G__32257;
G__32251__$1 = G__32258;
result__$1 = G__32259;
continue;
} else {
if((cljs.core._EQ_.call(null,idx__$2,diff_idx__$1)) || (old_empty_QMARK_)){
var G__32260 = (idx__$2 + (1));
var G__32261 = old_rest__$1;
var G__32262 = diff_rest__$1;
var G__32263 = cljs.core.conj_BANG_.call(null,result__$2,differ.patch.alterations.call(null,old_val__$1,diff_val__$1));
idx__$1 = G__32260;
G__32250__$1 = G__32261;
G__32251__$1 = G__32262;
result__$1 = G__32263;
continue;
} else {
var G__32264 = (idx__$2 + (1));
var G__32265 = old_rest__$1;
var G__32266 = diff_coll__$1;
var G__32267 = cljs.core.conj_BANG_.call(null,result__$2,old_val__$1);
idx__$1 = G__32264;
G__32250__$1 = G__32265;
G__32251__$1 = G__32266;
result__$1 = G__32267;
continue;

}
}
}
break;
}
});
/**
 * Returns a new datastructure, containing the changes in the provided diff.
 */
differ.patch.alterations = (function differ$patch$alterations(state,diff){
if((cljs.core.map_QMARK_.call(null,state)) && (cljs.core.map_QMARK_.call(null,diff))){
return differ.patch.map_alterations.call(null,state,diff);
} else {
if((cljs.core.sequential_QMARK_.call(null,state)) && (cljs.core.sequential_QMARK_.call(null,diff))){
if(cljs.core.vector_QMARK_.call(null,diff)){
return differ.patch.vec_alterations.call(null,state,diff);
} else {
return cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.reverse.call(null,differ.patch.vec_alterations.call(null,state,diff)));
}
} else {
if((cljs.core.set_QMARK_.call(null,state)) && (cljs.core.set_QMARK_.call(null,diff))){
return clojure.set.union.call(null,state,diff);
} else {
return diff;

}
}
}
});
differ.patch.map_removals = (function differ$patch$map_removals(state,diff){
var G__32273 = cljs.core.keys.call(null,diff);
var vec__32274 = G__32273;
var k = cljs.core.nth.call(null,vec__32274,(0),null);
var ks = cljs.core.nthnext.call(null,vec__32274,(1));
var result = cljs.core.transient$.call(null,state);
var G__32273__$1 = G__32273;
var result__$1 = result;
while(true){
var vec__32275 = G__32273__$1;
var k__$1 = cljs.core.nth.call(null,vec__32275,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__32275,(1));
var result__$2 = result__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.persistent_BANG_.call(null,result__$2);
} else {
var old_val = cljs.core.get.call(null,result__$2,k__$1);
var diff_val = cljs.core.get.call(null,diff,k__$1);
if(cljs.core._EQ_.call(null,(0),diff_val)){
var G__32276 = ks__$1;
var G__32277 = cljs.core.dissoc_BANG_.call(null,result__$2,k__$1);
G__32273__$1 = G__32276;
result__$1 = G__32277;
continue;
} else {
var G__32278 = ks__$1;
var G__32279 = cljs.core.assoc_BANG_.call(null,result__$2,k__$1,differ.patch.removals.call(null,old_val,diff_val));
G__32273__$1 = G__32278;
result__$1 = G__32279;
continue;
}
}
break;
}
});
differ.patch.vec_removals = (function differ$patch$vec_removals(state,diff){
var max_index = (cljs.core.count.call(null,state) - cljs.core.first.call(null,diff));
var index = (0);
var G__32290 = state;
var vec__32292 = G__32290;
var old_val = cljs.core.nth.call(null,vec__32292,(0),null);
var old_rest = cljs.core.nthnext.call(null,vec__32292,(1));
var old_coll = vec__32292;
var G__32291 = cljs.core.rest.call(null,diff);
var vec__32293 = G__32291;
var diff_index = cljs.core.nth.call(null,vec__32293,(0),null);
var diff_val = cljs.core.nth.call(null,vec__32293,(1),null);
var diff_rest = cljs.core.nthnext.call(null,vec__32293,(2));
var diff_coll = vec__32293;
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var index__$1 = index;
var G__32290__$1 = G__32290;
var G__32291__$1 = G__32291;
var result__$1 = result;
while(true){
var index__$2 = index__$1;
var vec__32294 = G__32290__$1;
var old_val__$1 = cljs.core.nth.call(null,vec__32294,(0),null);
var old_rest__$1 = cljs.core.nthnext.call(null,vec__32294,(1));
var old_coll__$1 = vec__32294;
var vec__32295 = G__32291__$1;
var diff_index__$1 = cljs.core.nth.call(null,vec__32295,(0),null);
var diff_val__$1 = cljs.core.nth.call(null,vec__32295,(1),null);
var diff_rest__$1 = cljs.core.nthnext.call(null,vec__32295,(2));
var diff_coll__$1 = vec__32295;
var result__$2 = result__$1;
if((cljs.core._EQ_.call(null,index__$2,max_index)) || (cljs.core.empty_QMARK_.call(null,old_coll__$1))){
return cljs.core.persistent_BANG_.call(null,result__$2);
} else {
if(cljs.core._EQ_.call(null,index__$2,diff_index__$1)){
var G__32296 = (index__$2 + (1));
var G__32297 = old_rest__$1;
var G__32298 = diff_rest__$1;
var G__32299 = cljs.core.conj_BANG_.call(null,result__$2,differ.patch.removals.call(null,old_val__$1,diff_val__$1));
index__$1 = G__32296;
G__32290__$1 = G__32297;
G__32291__$1 = G__32298;
result__$1 = G__32299;
continue;
} else {
var G__32300 = (index__$2 + (1));
var G__32301 = old_rest__$1;
var G__32302 = diff_coll__$1;
var G__32303 = cljs.core.conj_BANG_.call(null,result__$2,old_val__$1);
index__$1 = G__32300;
G__32290__$1 = G__32301;
G__32291__$1 = G__32302;
result__$1 = G__32303;
continue;

}
}
break;
}
});
/**
 * Returns a new datastructure, not containing the elements in the
 *   provided diff.
 */
differ.patch.removals = (function differ$patch$removals(state,diff){
if((cljs.core.map_QMARK_.call(null,state)) && (cljs.core.map_QMARK_.call(null,diff))){
return differ.patch.map_removals.call(null,state,diff);
} else {
if((cljs.core.sequential_QMARK_.call(null,state)) && (cljs.core.sequential_QMARK_.call(null,diff))){
if(cljs.core.vector_QMARK_.call(null,diff)){
return differ.patch.vec_removals.call(null,state,diff);
} else {
return cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.reverse.call(null,differ.patch.vec_removals.call(null,state,diff)));
}
} else {
if((cljs.core.set_QMARK_.call(null,state)) && (cljs.core.set_QMARK_.call(null,diff))){
return clojure.set.difference.call(null,state,diff);
} else {
return state;

}
}
}
});

//# sourceMappingURL=patch.js.map