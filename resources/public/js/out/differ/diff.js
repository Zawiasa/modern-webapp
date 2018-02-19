// Compiled by ClojureScript 1.7.122 {}
goog.provide('differ.diff');
goog.require('cljs.core');
goog.require('clojure.set');
differ.diff.alterations;

differ.diff.removals;
differ.diff.map_alterations = (function differ$diff$map_alterations(state,new_state){
var G__32153 = cljs.core.keys.call(null,new_state);
var vec__32154 = G__32153;
var k = cljs.core.nth.call(null,vec__32154,(0),null);
var ks = cljs.core.nthnext.call(null,vec__32154,(1));
var diff = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__32153__$1 = G__32153;
var diff__$1 = diff;
while(true){
var vec__32155 = G__32153__$1;
var k__$1 = cljs.core.nth.call(null,vec__32155,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__32155,(1));
var diff__$2 = diff__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.persistent_BANG_.call(null,diff__$2);
} else {
var old_val = cljs.core.get.call(null,state,k__$1);
var new_val = differ.diff.alterations.call(null,old_val,cljs.core.get.call(null,new_state,k__$1));
if((cljs.core.coll_QMARK_.call(null,new_val)) && (cljs.core.empty_QMARK_.call(null,new_val)) && (!((old_val == null)))){
var G__32156 = ks__$1;
var G__32157 = diff__$2;
G__32153__$1 = G__32156;
diff__$1 = G__32157;
continue;
} else {
if((cljs.core._EQ_.call(null,old_val,new_val)) && (!((old_val == null)))){
var G__32158 = ks__$1;
var G__32159 = diff__$2;
G__32153__$1 = G__32158;
diff__$1 = G__32159;
continue;
} else {
var G__32160 = ks__$1;
var G__32161 = cljs.core.assoc_BANG_.call(null,diff__$2,k__$1,new_val);
G__32153__$1 = G__32160;
diff__$1 = G__32161;
continue;

}
}
}
break;
}
});
differ.diff.vec_alterations = (function differ$diff$vec_alterations(state,new_state){
var idx = (0);
var G__32172 = state;
var vec__32174 = G__32172;
var old_val = cljs.core.nth.call(null,vec__32174,(0),null);
var old_rest = cljs.core.nthnext.call(null,vec__32174,(1));
var old_coll = vec__32174;
var G__32173 = new_state;
var vec__32175 = G__32173;
var new_val = cljs.core.nth.call(null,vec__32175,(0),null);
var new_rest = cljs.core.nthnext.call(null,vec__32175,(1));
var new_coll = vec__32175;
var diff = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var idx__$1 = idx;
var G__32172__$1 = G__32172;
var G__32173__$1 = G__32173;
var diff__$1 = diff;
while(true){
var idx__$2 = idx__$1;
var vec__32176 = G__32172__$1;
var old_val__$1 = cljs.core.nth.call(null,vec__32176,(0),null);
var old_rest__$1 = cljs.core.nthnext.call(null,vec__32176,(1));
var old_coll__$1 = vec__32176;
var vec__32177 = G__32173__$1;
var new_val__$1 = cljs.core.nth.call(null,vec__32177,(0),null);
var new_rest__$1 = cljs.core.nthnext.call(null,vec__32177,(1));
var new_coll__$1 = vec__32177;
var diff__$2 = diff__$1;
if(cljs.core.not.call(null,cljs.core.seq.call(null,new_coll__$1))){
return cljs.core.persistent_BANG_.call(null,diff__$2);
} else {
var val_diff = differ.diff.alterations.call(null,old_val__$1,new_val__$1);
if(cljs.core.empty_QMARK_.call(null,old_coll__$1)){
var G__32178 = (idx__$2 + (1));
var G__32179 = old_rest__$1;
var G__32180 = new_rest__$1;
var G__32181 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,diff__$2,new cljs.core.Keyword(null,"+","+",1913524883)),val_diff);
idx__$1 = G__32178;
G__32172__$1 = G__32179;
G__32173__$1 = G__32180;
diff__$1 = G__32181;
continue;
} else {
if(cljs.core._EQ_.call(null,old_val__$1,new_val__$1)){
var G__32182 = (idx__$2 + (1));
var G__32183 = old_rest__$1;
var G__32184 = new_rest__$1;
var G__32185 = diff__$2;
idx__$1 = G__32182;
G__32172__$1 = G__32183;
G__32173__$1 = G__32184;
diff__$1 = G__32185;
continue;
} else {
var G__32186 = (idx__$2 + (1));
var G__32187 = old_rest__$1;
var G__32188 = new_rest__$1;
var G__32189 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,diff__$2,idx__$2),val_diff);
idx__$1 = G__32186;
G__32172__$1 = G__32187;
G__32173__$1 = G__32188;
diff__$1 = G__32189;
continue;

}
}
}
break;
}
});
/**
 * Find elements that are different in new-state, when compared to state.
 *   The datastructure returned will be of the same type as the first argument
 *   passed. Works recursively on nested datastructures.
 */
differ.diff.alterations = (function differ$diff$alterations(state,new_state){
if((cljs.core.map_QMARK_.call(null,state)) && (cljs.core.map_QMARK_.call(null,new_state))){
return differ.diff.map_alterations.call(null,state,new_state);
} else {
if((cljs.core.sequential_QMARK_.call(null,state)) && (cljs.core.sequential_QMARK_.call(null,new_state))){
if(cljs.core.vector_QMARK_.call(null,new_state)){
return differ.diff.vec_alterations.call(null,state,new_state);
} else {
return cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.reverse.call(null,differ.diff.vec_alterations.call(null,state,new_state)));
}
} else {
if((cljs.core.set_QMARK_.call(null,state)) && (cljs.core.set_QMARK_.call(null,new_state))){
return clojure.set.difference.call(null,new_state,state);
} else {
return new_state;

}
}
}
});
differ.diff.map_removals = (function differ$diff$map_removals(state,new_state){
var new_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_state));
var G__32195 = cljs.core.keys.call(null,state);
var vec__32196 = G__32195;
var k = cljs.core.nth.call(null,vec__32196,(0),null);
var ks = cljs.core.nthnext.call(null,vec__32196,(1));
var diff = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__32195__$1 = G__32195;
var diff__$1 = diff;
while(true){
var vec__32197 = G__32195__$1;
var k__$1 = cljs.core.nth.call(null,vec__32197,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__32197,(1));
var diff__$2 = diff__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.persistent_BANG_.call(null,diff__$2);
} else {
if(!(cljs.core.contains_QMARK_.call(null,new_keys,k__$1))){
var G__32198 = ks__$1;
var G__32199 = cljs.core.assoc_BANG_.call(null,diff__$2,k__$1,(0));
G__32195__$1 = G__32198;
diff__$1 = G__32199;
continue;
} else {
var old_val = cljs.core.get.call(null,state,k__$1);
var new_val = cljs.core.get.call(null,new_state,k__$1);
var rms = differ.diff.removals.call(null,old_val,new_val);
if((cljs.core.coll_QMARK_.call(null,rms)) && (cljs.core.seq.call(null,rms))){
var G__32200 = ks__$1;
var G__32201 = cljs.core.assoc_BANG_.call(null,diff__$2,k__$1,rms);
G__32195__$1 = G__32200;
diff__$1 = G__32201;
continue;
} else {
var G__32202 = ks__$1;
var G__32203 = diff__$2;
G__32195__$1 = G__32202;
diff__$1 = G__32203;
continue;
}
}
}
break;
}
});
differ.diff.vec_removals = (function differ$diff$vec_removals(state,new_state){
var diff = (cljs.core.count.call(null,state) - cljs.core.count.call(null,new_state));
var empty_state = cljs.core.PersistentVector.EMPTY;
var idx = (0);
var G__32214 = state;
var vec__32216 = G__32214;
var old_val = cljs.core.nth.call(null,vec__32216,(0),null);
var old_rest = cljs.core.nthnext.call(null,vec__32216,(1));
var old_coll = vec__32216;
var G__32215 = new_state;
var vec__32217 = G__32215;
var new_val = cljs.core.nth.call(null,vec__32217,(0),null);
var new_rest = cljs.core.nthnext.call(null,vec__32217,(1));
var new_coll = vec__32217;
var rem = cljs.core.transient$.call(null,cljs.core.conj.call(null,empty_state,diff));
var idx__$1 = idx;
var G__32214__$1 = G__32214;
var G__32215__$1 = G__32215;
var rem__$1 = rem;
while(true){
var idx__$2 = idx__$1;
var vec__32218 = G__32214__$1;
var old_val__$1 = cljs.core.nth.call(null,vec__32218,(0),null);
var old_rest__$1 = cljs.core.nthnext.call(null,vec__32218,(1));
var old_coll__$1 = vec__32218;
var vec__32219 = G__32215__$1;
var new_val__$1 = cljs.core.nth.call(null,vec__32219,(0),null);
var new_rest__$1 = cljs.core.nthnext.call(null,vec__32219,(1));
var new_coll__$1 = vec__32219;
var rem__$2 = rem__$1;
if(!((cljs.core.seq.call(null,old_coll__$1)) && (cljs.core.seq.call(null,new_coll__$1)))){
var base = cljs.core.persistent_BANG_.call(null,rem__$2);
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,base))) && (((0) >= cljs.core.first.call(null,base)))){
return empty_state;
} else {
return base;
}
} else {
var new_rem = differ.diff.removals.call(null,old_val__$1,new_val__$1);
if(((cljs.core.coll_QMARK_.call(null,new_rem)) && (cljs.core.empty_QMARK_.call(null,new_rem))) || (cljs.core._EQ_.call(null,old_val__$1,new_rem))){
var G__32220 = (idx__$2 + (1));
var G__32221 = old_rest__$1;
var G__32222 = new_rest__$1;
var G__32223 = rem__$2;
idx__$1 = G__32220;
G__32214__$1 = G__32221;
G__32215__$1 = G__32222;
rem__$1 = G__32223;
continue;
} else {
var G__32224 = (idx__$2 + (1));
var G__32225 = old_rest__$1;
var G__32226 = new_rest__$1;
var G__32227 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,rem__$2,idx__$2),new_rem);
idx__$1 = G__32224;
G__32214__$1 = G__32225;
G__32215__$1 = G__32226;
rem__$1 = G__32227;
continue;
}
}
break;
}
});
/**
 * Find elements that are in state, but not in new-state.
 *   The datastructure returned will be of the same type as the first argument
 *   passed. Works recursively on nested datastructures.
 */
differ.diff.removals = (function differ$diff$removals(state,new_state){
if(!((cljs.core.coll_QMARK_.call(null,state)) && (cljs.core.coll_QMARK_.call(null,new_state)))){
return state;
} else {
if((cljs.core.map_QMARK_.call(null,state)) && (cljs.core.map_QMARK_.call(null,new_state))){
return differ.diff.map_removals.call(null,state,new_state);
} else {
if((cljs.core.sequential_QMARK_.call(null,state)) && (cljs.core.sequential_QMARK_.call(null,new_state))){
if(cljs.core.vector_QMARK_.call(null,new_state)){
return differ.diff.vec_removals.call(null,state,new_state);
} else {
return cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.reverse.call(null,differ.diff.vec_removals.call(null,state,new_state)));
}
} else {
if((cljs.core.set_QMARK_.call(null,state)) && (cljs.core.set_QMARK_.call(null,new_state))){
return clojure.set.difference.call(null,state,new_state);
} else {
return cljs.core.empty.call(null,state);

}
}
}
}
});

//# sourceMappingURL=diff.js.map