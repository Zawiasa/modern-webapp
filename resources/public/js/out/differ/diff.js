// Compiled by ClojureScript 1.9.946 {}
goog.provide('differ.diff');
goog.require('cljs.core');
goog.require('clojure.set');

differ.diff.map_alterations = (function differ$diff$map_alterations(state,new_state){
var G__52998 = cljs.core.keys.call(null,new_state);
var vec__52999 = G__52998;
var seq__53000 = cljs.core.seq.call(null,vec__52999);
var first__53001 = cljs.core.first.call(null,seq__53000);
var seq__53000__$1 = cljs.core.next.call(null,seq__53000);
var k = first__53001;
var ks = seq__53000__$1;
var diff = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__52998__$1 = G__52998;
var diff__$1 = diff;
while(true){
var vec__53002 = G__52998__$1;
var seq__53003 = cljs.core.seq.call(null,vec__53002);
var first__53004 = cljs.core.first.call(null,seq__53003);
var seq__53003__$1 = cljs.core.next.call(null,seq__53003);
var k__$1 = first__53004;
var ks__$1 = seq__53003__$1;
var diff__$2 = diff__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.persistent_BANG_.call(null,diff__$2);
} else {
var old_val = cljs.core.get.call(null,state,k__$1,new cljs.core.Keyword("differ.diff","none","differ.diff/none",-969692099));
var new_val = differ.diff.alterations.call(null,old_val,cljs.core.get.call(null,new_state,k__$1));
if((cljs.core.coll_QMARK_.call(null,old_val)) && (cljs.core.coll_QMARK_.call(null,new_val)) && (cljs.core.empty_QMARK_.call(null,new_val))){
var G__53005 = ks__$1;
var G__53006 = diff__$2;
G__52998__$1 = G__53005;
diff__$1 = G__53006;
continue;
} else {
if(cljs.core._EQ_.call(null,old_val,new_val)){
var G__53007 = ks__$1;
var G__53008 = diff__$2;
G__52998__$1 = G__53007;
diff__$1 = G__53008;
continue;
} else {
var G__53009 = ks__$1;
var G__53010 = cljs.core.assoc_BANG_.call(null,diff__$2,k__$1,new_val);
G__52998__$1 = G__53009;
diff__$1 = G__53010;
continue;

}
}
}
break;
}
});
differ.diff.vec_alterations = (function differ$diff$vec_alterations(state,new_state){
var idx = (0);
var G__53017 = state;
var vec__53019 = G__53017;
var seq__53020 = cljs.core.seq.call(null,vec__53019);
var first__53021 = cljs.core.first.call(null,seq__53020);
var seq__53020__$1 = cljs.core.next.call(null,seq__53020);
var old_val = first__53021;
var old_rest = seq__53020__$1;
var old_coll = vec__53019;
var G__53018 = new_state;
var vec__53022 = G__53018;
var seq__53023 = cljs.core.seq.call(null,vec__53022);
var first__53024 = cljs.core.first.call(null,seq__53023);
var seq__53023__$1 = cljs.core.next.call(null,seq__53023);
var new_val = first__53024;
var new_rest = seq__53023__$1;
var new_coll = vec__53022;
var diff = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var idx__$1 = idx;
var G__53017__$1 = G__53017;
var G__53018__$1 = G__53018;
var diff__$1 = diff;
while(true){
var idx__$2 = idx__$1;
var vec__53025 = G__53017__$1;
var seq__53026 = cljs.core.seq.call(null,vec__53025);
var first__53027 = cljs.core.first.call(null,seq__53026);
var seq__53026__$1 = cljs.core.next.call(null,seq__53026);
var old_val__$1 = first__53027;
var old_rest__$1 = seq__53026__$1;
var old_coll__$1 = vec__53025;
var vec__53028 = G__53018__$1;
var seq__53029 = cljs.core.seq.call(null,vec__53028);
var first__53030 = cljs.core.first.call(null,seq__53029);
var seq__53029__$1 = cljs.core.next.call(null,seq__53029);
var new_val__$1 = first__53030;
var new_rest__$1 = seq__53029__$1;
var new_coll__$1 = vec__53028;
var diff__$2 = diff__$1;
if(cljs.core.not.call(null,cljs.core.seq.call(null,new_coll__$1))){
return cljs.core.persistent_BANG_.call(null,diff__$2);
} else {
var val_diff = differ.diff.alterations.call(null,old_val__$1,new_val__$1);
if(cljs.core.empty_QMARK_.call(null,old_coll__$1)){
var G__53031 = (idx__$2 + (1));
var G__53032 = old_rest__$1;
var G__53033 = new_rest__$1;
var G__53034 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,diff__$2,new cljs.core.Keyword(null,"+","+",1913524883)),val_diff);
idx__$1 = G__53031;
G__53017__$1 = G__53032;
G__53018__$1 = G__53033;
diff__$1 = G__53034;
continue;
} else {
if(cljs.core._EQ_.call(null,old_val__$1,new_val__$1)){
var G__53035 = (idx__$2 + (1));
var G__53036 = old_rest__$1;
var G__53037 = new_rest__$1;
var G__53038 = diff__$2;
idx__$1 = G__53035;
G__53017__$1 = G__53036;
G__53018__$1 = G__53037;
diff__$1 = G__53038;
continue;
} else {
var G__53039 = (idx__$2 + (1));
var G__53040 = old_rest__$1;
var G__53041 = new_rest__$1;
var G__53042 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,diff__$2,idx__$2),val_diff);
idx__$1 = G__53039;
G__53017__$1 = G__53040;
G__53018__$1 = G__53041;
diff__$1 = G__53042;
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
var G__53046 = cljs.core.keys.call(null,state);
var vec__53047 = G__53046;
var seq__53048 = cljs.core.seq.call(null,vec__53047);
var first__53049 = cljs.core.first.call(null,seq__53048);
var seq__53048__$1 = cljs.core.next.call(null,seq__53048);
var k = first__53049;
var ks = seq__53048__$1;
var diff = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__53046__$1 = G__53046;
var diff__$1 = diff;
while(true){
var vec__53050 = G__53046__$1;
var seq__53051 = cljs.core.seq.call(null,vec__53050);
var first__53052 = cljs.core.first.call(null,seq__53051);
var seq__53051__$1 = cljs.core.next.call(null,seq__53051);
var k__$1 = first__53052;
var ks__$1 = seq__53051__$1;
var diff__$2 = diff__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.persistent_BANG_.call(null,diff__$2);
} else {
if(!(cljs.core.contains_QMARK_.call(null,new_keys,k__$1))){
var G__53053 = ks__$1;
var G__53054 = cljs.core.assoc_BANG_.call(null,diff__$2,k__$1,(0));
G__53046__$1 = G__53053;
diff__$1 = G__53054;
continue;
} else {
var old_val = cljs.core.get.call(null,state,k__$1);
var new_val = cljs.core.get.call(null,new_state,k__$1);
var rms = differ.diff.removals.call(null,old_val,new_val);
if((cljs.core.coll_QMARK_.call(null,rms)) && (cljs.core.seq.call(null,rms))){
var G__53055 = ks__$1;
var G__53056 = cljs.core.assoc_BANG_.call(null,diff__$2,k__$1,rms);
G__53046__$1 = G__53055;
diff__$1 = G__53056;
continue;
} else {
var G__53057 = ks__$1;
var G__53058 = diff__$2;
G__53046__$1 = G__53057;
diff__$1 = G__53058;
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
var G__53065 = state;
var vec__53067 = G__53065;
var seq__53068 = cljs.core.seq.call(null,vec__53067);
var first__53069 = cljs.core.first.call(null,seq__53068);
var seq__53068__$1 = cljs.core.next.call(null,seq__53068);
var old_val = first__53069;
var old_rest = seq__53068__$1;
var old_coll = vec__53067;
var G__53066 = new_state;
var vec__53070 = G__53066;
var seq__53071 = cljs.core.seq.call(null,vec__53070);
var first__53072 = cljs.core.first.call(null,seq__53071);
var seq__53071__$1 = cljs.core.next.call(null,seq__53071);
var new_val = first__53072;
var new_rest = seq__53071__$1;
var new_coll = vec__53070;
var rem = cljs.core.transient$.call(null,cljs.core.conj.call(null,empty_state,diff));
var idx__$1 = idx;
var G__53065__$1 = G__53065;
var G__53066__$1 = G__53066;
var rem__$1 = rem;
while(true){
var idx__$2 = idx__$1;
var vec__53073 = G__53065__$1;
var seq__53074 = cljs.core.seq.call(null,vec__53073);
var first__53075 = cljs.core.first.call(null,seq__53074);
var seq__53074__$1 = cljs.core.next.call(null,seq__53074);
var old_val__$1 = first__53075;
var old_rest__$1 = seq__53074__$1;
var old_coll__$1 = vec__53073;
var vec__53076 = G__53066__$1;
var seq__53077 = cljs.core.seq.call(null,vec__53076);
var first__53078 = cljs.core.first.call(null,seq__53077);
var seq__53077__$1 = cljs.core.next.call(null,seq__53077);
var new_val__$1 = first__53078;
var new_rest__$1 = seq__53077__$1;
var new_coll__$1 = vec__53076;
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
var G__53079 = (idx__$2 + (1));
var G__53080 = old_rest__$1;
var G__53081 = new_rest__$1;
var G__53082 = rem__$2;
idx__$1 = G__53079;
G__53065__$1 = G__53080;
G__53066__$1 = G__53081;
rem__$1 = G__53082;
continue;
} else {
var G__53083 = (idx__$2 + (1));
var G__53084 = old_rest__$1;
var G__53085 = new_rest__$1;
var G__53086 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,rem__$2,idx__$2),new_rem);
idx__$1 = G__53083;
G__53065__$1 = G__53084;
G__53066__$1 = G__53085;
rem__$1 = G__53086;
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
