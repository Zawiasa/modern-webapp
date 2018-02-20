// Compiled by ClojureScript 1.9.946 {}
goog.provide('differ.patch');
goog.require('cljs.core');
goog.require('clojure.set');

differ.patch.map_alterations = (function differ$patch$map_alterations(state,diff){
var G__52913 = cljs.core.keys.call(null,diff);
var vec__52914 = G__52913;
var seq__52915 = cljs.core.seq.call(null,vec__52914);
var first__52916 = cljs.core.first.call(null,seq__52915);
var seq__52915__$1 = cljs.core.next.call(null,seq__52915);
var k = first__52916;
var ks = seq__52915__$1;
var result = cljs.core.transient$.call(null,state);
var G__52913__$1 = G__52913;
var result__$1 = result;
while(true){
var vec__52917 = G__52913__$1;
var seq__52918 = cljs.core.seq.call(null,vec__52917);
var first__52919 = cljs.core.first.call(null,seq__52918);
var seq__52918__$1 = cljs.core.next.call(null,seq__52918);
var k__$1 = first__52919;
var ks__$1 = seq__52918__$1;
var result__$2 = result__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,result__$2),cljs.core.meta.call(null,state));
} else {
var old_val = cljs.core.get.call(null,result__$2,k__$1);
var diff_val = cljs.core.get.call(null,diff,k__$1);
var G__52920 = ks__$1;
var G__52921 = cljs.core.assoc_BANG_.call(null,result__$2,k__$1,differ.patch.alterations.call(null,old_val,diff_val));
G__52913__$1 = G__52920;
result__$1 = G__52921;
continue;
}
break;
}
});
differ.patch.vec_alterations = (function differ$patch$vec_alterations(state,diff){
var idx = (0);
var G__52928 = state;
var vec__52930 = G__52928;
var seq__52931 = cljs.core.seq.call(null,vec__52930);
var first__52932 = cljs.core.first.call(null,seq__52931);
var seq__52931__$1 = cljs.core.next.call(null,seq__52931);
var old_val = first__52932;
var old_rest = seq__52931__$1;
var old_coll = vec__52930;
var G__52929 = diff;
var vec__52933 = G__52929;
var seq__52934 = cljs.core.seq.call(null,vec__52933);
var first__52935 = cljs.core.first.call(null,seq__52934);
var seq__52934__$1 = cljs.core.next.call(null,seq__52934);
var diff_idx = first__52935;
var first__52935__$1 = cljs.core.first.call(null,seq__52934__$1);
var seq__52934__$2 = cljs.core.next.call(null,seq__52934__$1);
var diff_val = first__52935__$1;
var diff_rest = seq__52934__$2;
var diff_coll = vec__52933;
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var idx__$1 = idx;
var G__52928__$1 = G__52928;
var G__52929__$1 = G__52929;
var result__$1 = result;
while(true){
var idx__$2 = idx__$1;
var vec__52936 = G__52928__$1;
var seq__52937 = cljs.core.seq.call(null,vec__52936);
var first__52938 = cljs.core.first.call(null,seq__52937);
var seq__52937__$1 = cljs.core.next.call(null,seq__52937);
var old_val__$1 = first__52938;
var old_rest__$1 = seq__52937__$1;
var old_coll__$1 = vec__52936;
var vec__52939 = G__52929__$1;
var seq__52940 = cljs.core.seq.call(null,vec__52939);
var first__52941 = cljs.core.first.call(null,seq__52940);
var seq__52940__$1 = cljs.core.next.call(null,seq__52940);
var diff_idx__$1 = first__52941;
var first__52941__$1 = cljs.core.first.call(null,seq__52940__$1);
var seq__52940__$2 = cljs.core.next.call(null,seq__52940__$1);
var diff_val__$1 = first__52941__$1;
var diff_rest__$1 = seq__52940__$2;
var diff_coll__$1 = vec__52939;
var result__$2 = result__$1;
var old_empty_QMARK_ = cljs.core.empty_QMARK_.call(null,old_coll__$1);
var diff_empty_QMARK_ = cljs.core.empty_QMARK_.call(null,diff_coll__$1);
if((old_empty_QMARK_) && (diff_empty_QMARK_)){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,result__$2),cljs.core.meta.call(null,state));
} else {
if(diff_empty_QMARK_){
var G__52942 = (idx__$2 + (1));
var G__52943 = old_rest__$1;
var G__52944 = diff_rest__$1;
var G__52945 = cljs.core.conj_BANG_.call(null,result__$2,old_val__$1);
idx__$1 = G__52942;
G__52928__$1 = G__52943;
G__52929__$1 = G__52944;
result__$1 = G__52945;
continue;
} else {
if((cljs.core._EQ_.call(null,idx__$2,diff_idx__$1)) || (old_empty_QMARK_)){
var G__52946 = (idx__$2 + (1));
var G__52947 = old_rest__$1;
var G__52948 = diff_rest__$1;
var G__52949 = cljs.core.conj_BANG_.call(null,result__$2,differ.patch.alterations.call(null,old_val__$1,diff_val__$1));
idx__$1 = G__52946;
G__52928__$1 = G__52947;
G__52929__$1 = G__52948;
result__$1 = G__52949;
continue;
} else {
var G__52950 = (idx__$2 + (1));
var G__52951 = old_rest__$1;
var G__52952 = diff_coll__$1;
var G__52953 = cljs.core.conj_BANG_.call(null,result__$2,old_val__$1);
idx__$1 = G__52950;
G__52928__$1 = G__52951;
G__52929__$1 = G__52952;
result__$1 = G__52953;
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
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.reverse.call(null,differ.patch.vec_alterations.call(null,state,diff))),cljs.core.meta.call(null,state));
}
} else {
if((cljs.core.set_QMARK_.call(null,state)) && (cljs.core.set_QMARK_.call(null,diff))){
return cljs.core.with_meta.call(null,clojure.set.union.call(null,state,diff),cljs.core.meta.call(null,state));
} else {
return diff;

}
}
}
});
differ.patch.map_removals = (function differ$patch$map_removals(state,diff){
var G__52957 = cljs.core.keys.call(null,diff);
var vec__52958 = G__52957;
var seq__52959 = cljs.core.seq.call(null,vec__52958);
var first__52960 = cljs.core.first.call(null,seq__52959);
var seq__52959__$1 = cljs.core.next.call(null,seq__52959);
var k = first__52960;
var ks = seq__52959__$1;
var result = cljs.core.transient$.call(null,state);
var G__52957__$1 = G__52957;
var result__$1 = result;
while(true){
var vec__52961 = G__52957__$1;
var seq__52962 = cljs.core.seq.call(null,vec__52961);
var first__52963 = cljs.core.first.call(null,seq__52962);
var seq__52962__$1 = cljs.core.next.call(null,seq__52962);
var k__$1 = first__52963;
var ks__$1 = seq__52962__$1;
var result__$2 = result__$1;
if(cljs.core.not.call(null,k__$1)){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,result__$2),cljs.core.meta.call(null,state));
} else {
var old_val = cljs.core.get.call(null,result__$2,k__$1);
var diff_val = cljs.core.get.call(null,diff,k__$1);
if(cljs.core._EQ_.call(null,(0),diff_val)){
var G__52964 = ks__$1;
var G__52965 = cljs.core.dissoc_BANG_.call(null,result__$2,k__$1);
G__52957__$1 = G__52964;
result__$1 = G__52965;
continue;
} else {
var G__52966 = ks__$1;
var G__52967 = cljs.core.assoc_BANG_.call(null,result__$2,k__$1,differ.patch.removals.call(null,old_val,diff_val));
G__52957__$1 = G__52966;
result__$1 = G__52967;
continue;
}
}
break;
}
});
differ.patch.vec_removals = (function differ$patch$vec_removals(state,diff){
if(cljs.core.not.call(null,cljs.core.seq.call(null,diff))){
return state;
} else {
var max_index = (cljs.core.count.call(null,state) - cljs.core.first.call(null,diff));
var index = (0);
var G__52974 = state;
var vec__52976 = G__52974;
var seq__52977 = cljs.core.seq.call(null,vec__52976);
var first__52978 = cljs.core.first.call(null,seq__52977);
var seq__52977__$1 = cljs.core.next.call(null,seq__52977);
var old_val = first__52978;
var old_rest = seq__52977__$1;
var old_coll = vec__52976;
var G__52975 = cljs.core.rest.call(null,diff);
var vec__52979 = G__52975;
var seq__52980 = cljs.core.seq.call(null,vec__52979);
var first__52981 = cljs.core.first.call(null,seq__52980);
var seq__52980__$1 = cljs.core.next.call(null,seq__52980);
var diff_index = first__52981;
var first__52981__$1 = cljs.core.first.call(null,seq__52980__$1);
var seq__52980__$2 = cljs.core.next.call(null,seq__52980__$1);
var diff_val = first__52981__$1;
var diff_rest = seq__52980__$2;
var diff_coll = vec__52979;
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var index__$1 = index;
var G__52974__$1 = G__52974;
var G__52975__$1 = G__52975;
var result__$1 = result;
while(true){
var index__$2 = index__$1;
var vec__52982 = G__52974__$1;
var seq__52983 = cljs.core.seq.call(null,vec__52982);
var first__52984 = cljs.core.first.call(null,seq__52983);
var seq__52983__$1 = cljs.core.next.call(null,seq__52983);
var old_val__$1 = first__52984;
var old_rest__$1 = seq__52983__$1;
var old_coll__$1 = vec__52982;
var vec__52985 = G__52975__$1;
var seq__52986 = cljs.core.seq.call(null,vec__52985);
var first__52987 = cljs.core.first.call(null,seq__52986);
var seq__52986__$1 = cljs.core.next.call(null,seq__52986);
var diff_index__$1 = first__52987;
var first__52987__$1 = cljs.core.first.call(null,seq__52986__$1);
var seq__52986__$2 = cljs.core.next.call(null,seq__52986__$1);
var diff_val__$1 = first__52987__$1;
var diff_rest__$1 = seq__52986__$2;
var diff_coll__$1 = vec__52985;
var result__$2 = result__$1;
if((cljs.core._EQ_.call(null,index__$2,max_index)) || (cljs.core.empty_QMARK_.call(null,old_coll__$1))){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,result__$2),cljs.core.meta.call(null,state));
} else {
if(cljs.core._EQ_.call(null,index__$2,diff_index__$1)){
var G__52988 = (index__$2 + (1));
var G__52989 = old_rest__$1;
var G__52990 = diff_rest__$1;
var G__52991 = cljs.core.conj_BANG_.call(null,result__$2,differ.patch.removals.call(null,old_val__$1,diff_val__$1));
index__$1 = G__52988;
G__52974__$1 = G__52989;
G__52975__$1 = G__52990;
result__$1 = G__52991;
continue;
} else {
var G__52992 = (index__$2 + (1));
var G__52993 = old_rest__$1;
var G__52994 = diff_coll__$1;
var G__52995 = cljs.core.conj_BANG_.call(null,result__$2,old_val__$1);
index__$1 = G__52992;
G__52974__$1 = G__52993;
G__52975__$1 = G__52994;
result__$1 = G__52995;
continue;

}
}
break;
}
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
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.reverse.call(null,differ.patch.vec_removals.call(null,state,diff))),cljs.core.meta.call(null,state));
}
} else {
if((cljs.core.set_QMARK_.call(null,state)) && (cljs.core.set_QMARK_.call(null,diff))){
return cljs.core.with_meta.call(null,clojure.set.difference.call(null,state,diff),cljs.core.meta.call(null,state));
} else {
return state;

}
}
}
});

//# sourceMappingURL=patch.js.map
