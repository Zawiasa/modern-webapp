// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__40669__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__40669__auto__){
return or__40669__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__40669__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47870_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47870_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47871 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47872 = null;
var count__47873 = (0);
var i__47874 = (0);
while(true){
if((i__47874 < count__47873)){
var n = cljs.core._nth.call(null,chunk__47872,i__47874);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47875 = seq__47871;
var G__47876 = chunk__47872;
var G__47877 = count__47873;
var G__47878 = (i__47874 + (1));
seq__47871 = G__47875;
chunk__47872 = G__47876;
count__47873 = G__47877;
i__47874 = G__47878;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47871);
if(temp__5457__auto__){
var seq__47871__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47871__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__47871__$1);
var G__47879 = cljs.core.chunk_rest.call(null,seq__47871__$1);
var G__47880 = c__41600__auto__;
var G__47881 = cljs.core.count.call(null,c__41600__auto__);
var G__47882 = (0);
seq__47871 = G__47879;
chunk__47872 = G__47880;
count__47873 = G__47881;
i__47874 = G__47882;
continue;
} else {
var n = cljs.core.first.call(null,seq__47871__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47883 = cljs.core.next.call(null,seq__47871__$1);
var G__47884 = null;
var G__47885 = (0);
var G__47886 = (0);
seq__47871 = G__47883;
chunk__47872 = G__47884;
count__47873 = G__47885;
i__47874 = G__47886;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__47887){
var vec__47888 = p__47887;
var _ = cljs.core.nth.call(null,vec__47888,(0),null);
var v = cljs.core.nth.call(null,vec__47888,(1),null);
var and__40657__auto__ = v;
if(cljs.core.truth_(and__40657__auto__)){
return v.call(null,dep);
} else {
return and__40657__auto__;
}
}),cljs.core.filter.call(null,(function (p__47891){
var vec__47892 = p__47891;
var k = cljs.core.nth.call(null,vec__47892,(0),null);
var v = cljs.core.nth.call(null,vec__47892,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47904_47912 = cljs.core.seq.call(null,deps);
var chunk__47905_47913 = null;
var count__47906_47914 = (0);
var i__47907_47915 = (0);
while(true){
if((i__47907_47915 < count__47906_47914)){
var dep_47916 = cljs.core._nth.call(null,chunk__47905_47913,i__47907_47915);
if(cljs.core.truth_((function (){var and__40657__auto__ = dep_47916;
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47916));
} else {
return and__40657__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47916,(depth + (1)),state);
} else {
}

var G__47917 = seq__47904_47912;
var G__47918 = chunk__47905_47913;
var G__47919 = count__47906_47914;
var G__47920 = (i__47907_47915 + (1));
seq__47904_47912 = G__47917;
chunk__47905_47913 = G__47918;
count__47906_47914 = G__47919;
i__47907_47915 = G__47920;
continue;
} else {
var temp__5457__auto___47921 = cljs.core.seq.call(null,seq__47904_47912);
if(temp__5457__auto___47921){
var seq__47904_47922__$1 = temp__5457__auto___47921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47904_47922__$1)){
var c__41600__auto___47923 = cljs.core.chunk_first.call(null,seq__47904_47922__$1);
var G__47924 = cljs.core.chunk_rest.call(null,seq__47904_47922__$1);
var G__47925 = c__41600__auto___47923;
var G__47926 = cljs.core.count.call(null,c__41600__auto___47923);
var G__47927 = (0);
seq__47904_47912 = G__47924;
chunk__47905_47913 = G__47925;
count__47906_47914 = G__47926;
i__47907_47915 = G__47927;
continue;
} else {
var dep_47928 = cljs.core.first.call(null,seq__47904_47922__$1);
if(cljs.core.truth_((function (){var and__40657__auto__ = dep_47928;
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47928));
} else {
return and__40657__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47928,(depth + (1)),state);
} else {
}

var G__47929 = cljs.core.next.call(null,seq__47904_47922__$1);
var G__47930 = null;
var G__47931 = (0);
var G__47932 = (0);
seq__47904_47912 = G__47929;
chunk__47905_47913 = G__47930;
count__47906_47914 = G__47931;
i__47907_47915 = G__47932;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47908){
var vec__47909 = p__47908;
var seq__47910 = cljs.core.seq.call(null,vec__47909);
var first__47911 = cljs.core.first.call(null,seq__47910);
var seq__47910__$1 = cljs.core.next.call(null,seq__47910);
var x = first__47911;
var xs = seq__47910__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47909,seq__47910,first__47911,seq__47910__$1,x,xs,get_deps__$1){
return (function (p1__47895_SHARP_){
return clojure.set.difference.call(null,p1__47895_SHARP_,x);
});})(vec__47909,seq__47910,first__47911,seq__47910__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47933 = cljs.core.seq.call(null,provides);
var chunk__47934 = null;
var count__47935 = (0);
var i__47936 = (0);
while(true){
if((i__47936 < count__47935)){
var prov = cljs.core._nth.call(null,chunk__47934,i__47936);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47937_47945 = cljs.core.seq.call(null,requires);
var chunk__47938_47946 = null;
var count__47939_47947 = (0);
var i__47940_47948 = (0);
while(true){
if((i__47940_47948 < count__47939_47947)){
var req_47949 = cljs.core._nth.call(null,chunk__47938_47946,i__47940_47948);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47949,prov);

var G__47950 = seq__47937_47945;
var G__47951 = chunk__47938_47946;
var G__47952 = count__47939_47947;
var G__47953 = (i__47940_47948 + (1));
seq__47937_47945 = G__47950;
chunk__47938_47946 = G__47951;
count__47939_47947 = G__47952;
i__47940_47948 = G__47953;
continue;
} else {
var temp__5457__auto___47954 = cljs.core.seq.call(null,seq__47937_47945);
if(temp__5457__auto___47954){
var seq__47937_47955__$1 = temp__5457__auto___47954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47937_47955__$1)){
var c__41600__auto___47956 = cljs.core.chunk_first.call(null,seq__47937_47955__$1);
var G__47957 = cljs.core.chunk_rest.call(null,seq__47937_47955__$1);
var G__47958 = c__41600__auto___47956;
var G__47959 = cljs.core.count.call(null,c__41600__auto___47956);
var G__47960 = (0);
seq__47937_47945 = G__47957;
chunk__47938_47946 = G__47958;
count__47939_47947 = G__47959;
i__47940_47948 = G__47960;
continue;
} else {
var req_47961 = cljs.core.first.call(null,seq__47937_47955__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47961,prov);

var G__47962 = cljs.core.next.call(null,seq__47937_47955__$1);
var G__47963 = null;
var G__47964 = (0);
var G__47965 = (0);
seq__47937_47945 = G__47962;
chunk__47938_47946 = G__47963;
count__47939_47947 = G__47964;
i__47940_47948 = G__47965;
continue;
}
} else {
}
}
break;
}

var G__47966 = seq__47933;
var G__47967 = chunk__47934;
var G__47968 = count__47935;
var G__47969 = (i__47936 + (1));
seq__47933 = G__47966;
chunk__47934 = G__47967;
count__47935 = G__47968;
i__47936 = G__47969;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47933);
if(temp__5457__auto__){
var seq__47933__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47933__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__47933__$1);
var G__47970 = cljs.core.chunk_rest.call(null,seq__47933__$1);
var G__47971 = c__41600__auto__;
var G__47972 = cljs.core.count.call(null,c__41600__auto__);
var G__47973 = (0);
seq__47933 = G__47970;
chunk__47934 = G__47971;
count__47935 = G__47972;
i__47936 = G__47973;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47933__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47941_47974 = cljs.core.seq.call(null,requires);
var chunk__47942_47975 = null;
var count__47943_47976 = (0);
var i__47944_47977 = (0);
while(true){
if((i__47944_47977 < count__47943_47976)){
var req_47978 = cljs.core._nth.call(null,chunk__47942_47975,i__47944_47977);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47978,prov);

var G__47979 = seq__47941_47974;
var G__47980 = chunk__47942_47975;
var G__47981 = count__47943_47976;
var G__47982 = (i__47944_47977 + (1));
seq__47941_47974 = G__47979;
chunk__47942_47975 = G__47980;
count__47943_47976 = G__47981;
i__47944_47977 = G__47982;
continue;
} else {
var temp__5457__auto___47983__$1 = cljs.core.seq.call(null,seq__47941_47974);
if(temp__5457__auto___47983__$1){
var seq__47941_47984__$1 = temp__5457__auto___47983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47941_47984__$1)){
var c__41600__auto___47985 = cljs.core.chunk_first.call(null,seq__47941_47984__$1);
var G__47986 = cljs.core.chunk_rest.call(null,seq__47941_47984__$1);
var G__47987 = c__41600__auto___47985;
var G__47988 = cljs.core.count.call(null,c__41600__auto___47985);
var G__47989 = (0);
seq__47941_47974 = G__47986;
chunk__47942_47975 = G__47987;
count__47943_47976 = G__47988;
i__47944_47977 = G__47989;
continue;
} else {
var req_47990 = cljs.core.first.call(null,seq__47941_47984__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47990,prov);

var G__47991 = cljs.core.next.call(null,seq__47941_47984__$1);
var G__47992 = null;
var G__47993 = (0);
var G__47994 = (0);
seq__47941_47974 = G__47991;
chunk__47942_47975 = G__47992;
count__47943_47976 = G__47993;
i__47944_47977 = G__47994;
continue;
}
} else {
}
}
break;
}

var G__47995 = cljs.core.next.call(null,seq__47933__$1);
var G__47996 = null;
var G__47997 = (0);
var G__47998 = (0);
seq__47933 = G__47995;
chunk__47934 = G__47996;
count__47935 = G__47997;
i__47936 = G__47998;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47999_48003 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48000_48004 = null;
var count__48001_48005 = (0);
var i__48002_48006 = (0);
while(true){
if((i__48002_48006 < count__48001_48005)){
var ns_48007 = cljs.core._nth.call(null,chunk__48000_48004,i__48002_48006);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48007);

var G__48008 = seq__47999_48003;
var G__48009 = chunk__48000_48004;
var G__48010 = count__48001_48005;
var G__48011 = (i__48002_48006 + (1));
seq__47999_48003 = G__48008;
chunk__48000_48004 = G__48009;
count__48001_48005 = G__48010;
i__48002_48006 = G__48011;
continue;
} else {
var temp__5457__auto___48012 = cljs.core.seq.call(null,seq__47999_48003);
if(temp__5457__auto___48012){
var seq__47999_48013__$1 = temp__5457__auto___48012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47999_48013__$1)){
var c__41600__auto___48014 = cljs.core.chunk_first.call(null,seq__47999_48013__$1);
var G__48015 = cljs.core.chunk_rest.call(null,seq__47999_48013__$1);
var G__48016 = c__41600__auto___48014;
var G__48017 = cljs.core.count.call(null,c__41600__auto___48014);
var G__48018 = (0);
seq__47999_48003 = G__48015;
chunk__48000_48004 = G__48016;
count__48001_48005 = G__48017;
i__48002_48006 = G__48018;
continue;
} else {
var ns_48019 = cljs.core.first.call(null,seq__47999_48013__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48019);

var G__48020 = cljs.core.next.call(null,seq__47999_48013__$1);
var G__48021 = null;
var G__48022 = (0);
var G__48023 = (0);
seq__47999_48003 = G__48020;
chunk__48000_48004 = G__48021;
count__48001_48005 = G__48022;
i__48002_48006 = G__48023;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__40669__auto__ = goog.require__;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__48024__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48025__i = 0, G__48025__a = new Array(arguments.length -  0);
while (G__48025__i < G__48025__a.length) {G__48025__a[G__48025__i] = arguments[G__48025__i + 0]; ++G__48025__i;}
  args = new cljs.core.IndexedSeq(G__48025__a,0,null);
} 
return G__48024__delegate.call(this,args);};
G__48024.cljs$lang$maxFixedArity = 0;
G__48024.cljs$lang$applyTo = (function (arglist__48026){
var args = cljs.core.seq(arglist__48026);
return G__48024__delegate(args);
});
G__48024.cljs$core$IFn$_invoke$arity$variadic = G__48024__delegate;
return G__48024;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__48027_SHARP_,p2__48028_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48027_SHARP_)].join('')),p2__48028_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__48029_SHARP_,p2__48030_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48029_SHARP_)].join(''),p2__48030_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48031 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48031.addCallback(((function (G__48031){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__48031))
);

G__48031.addErrback(((function (G__48031){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__48031))
);

return G__48031;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48032){if((e48032 instanceof Error)){
var e = e48032;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48032;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48033){if((e48033 instanceof Error)){
var e = e48033;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48033;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48034 = cljs.core._EQ_;
var expr__48035 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48034.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48035))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__48034.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48035))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__48034.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48035))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__48034,expr__48035){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48034,expr__48035))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48037,callback){
var map__48038 = p__48037;
var map__48038__$1 = ((((!((map__48038 == null)))?((((map__48038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48038):map__48038);
var file_msg = map__48038__$1;
var request_url = cljs.core.get.call(null,map__48038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__40669__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__48038,map__48038__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48038,map__48038__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__){
return (function (state_48078){
var state_val_48079 = (state_48078[(1)]);
if((state_val_48079 === (7))){
var inst_48074 = (state_48078[(2)]);
var state_48078__$1 = state_48078;
var statearr_48080_48107 = state_48078__$1;
(statearr_48080_48107[(2)] = inst_48074);

(statearr_48080_48107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (1))){
var state_48078__$1 = state_48078;
var statearr_48081_48108 = state_48078__$1;
(statearr_48081_48108[(2)] = null);

(statearr_48081_48108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (4))){
var inst_48042 = (state_48078[(7)]);
var inst_48042__$1 = (state_48078[(2)]);
var state_48078__$1 = (function (){var statearr_48082 = state_48078;
(statearr_48082[(7)] = inst_48042__$1);

return statearr_48082;
})();
if(cljs.core.truth_(inst_48042__$1)){
var statearr_48083_48109 = state_48078__$1;
(statearr_48083_48109[(1)] = (5));

} else {
var statearr_48084_48110 = state_48078__$1;
(statearr_48084_48110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (15))){
var inst_48056 = (state_48078[(8)]);
var inst_48059 = (state_48078[(9)]);
var inst_48061 = inst_48059.call(null,inst_48056);
var state_48078__$1 = state_48078;
var statearr_48085_48111 = state_48078__$1;
(statearr_48085_48111[(2)] = inst_48061);

(statearr_48085_48111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (13))){
var inst_48068 = (state_48078[(2)]);
var state_48078__$1 = state_48078;
var statearr_48086_48112 = state_48078__$1;
(statearr_48086_48112[(2)] = inst_48068);

(statearr_48086_48112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (6))){
var state_48078__$1 = state_48078;
var statearr_48087_48113 = state_48078__$1;
(statearr_48087_48113[(2)] = null);

(statearr_48087_48113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (17))){
var inst_48065 = (state_48078[(2)]);
var state_48078__$1 = state_48078;
var statearr_48088_48114 = state_48078__$1;
(statearr_48088_48114[(2)] = inst_48065);

(statearr_48088_48114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (3))){
var inst_48076 = (state_48078[(2)]);
var state_48078__$1 = state_48078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48078__$1,inst_48076);
} else {
if((state_val_48079 === (12))){
var state_48078__$1 = state_48078;
var statearr_48089_48115 = state_48078__$1;
(statearr_48089_48115[(2)] = null);

(statearr_48089_48115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (2))){
var state_48078__$1 = state_48078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48078__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48079 === (11))){
var inst_48047 = (state_48078[(10)]);
var inst_48054 = figwheel.client.file_reloading.blocking_load.call(null,inst_48047);
var state_48078__$1 = state_48078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48078__$1,(14),inst_48054);
} else {
if((state_val_48079 === (9))){
var inst_48047 = (state_48078[(10)]);
var state_48078__$1 = state_48078;
if(cljs.core.truth_(inst_48047)){
var statearr_48090_48116 = state_48078__$1;
(statearr_48090_48116[(1)] = (11));

} else {
var statearr_48091_48117 = state_48078__$1;
(statearr_48091_48117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (5))){
var inst_48042 = (state_48078[(7)]);
var inst_48048 = (state_48078[(11)]);
var inst_48047 = cljs.core.nth.call(null,inst_48042,(0),null);
var inst_48048__$1 = cljs.core.nth.call(null,inst_48042,(1),null);
var state_48078__$1 = (function (){var statearr_48092 = state_48078;
(statearr_48092[(10)] = inst_48047);

(statearr_48092[(11)] = inst_48048__$1);

return statearr_48092;
})();
if(cljs.core.truth_(inst_48048__$1)){
var statearr_48093_48118 = state_48078__$1;
(statearr_48093_48118[(1)] = (8));

} else {
var statearr_48094_48119 = state_48078__$1;
(statearr_48094_48119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (14))){
var inst_48047 = (state_48078[(10)]);
var inst_48059 = (state_48078[(9)]);
var inst_48056 = (state_48078[(2)]);
var inst_48057 = console.log("Loading!",inst_48047);
var inst_48058 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48059__$1 = cljs.core.get.call(null,inst_48058,inst_48047);
var state_48078__$1 = (function (){var statearr_48095 = state_48078;
(statearr_48095[(12)] = inst_48057);

(statearr_48095[(8)] = inst_48056);

(statearr_48095[(9)] = inst_48059__$1);

return statearr_48095;
})();
if(cljs.core.truth_(inst_48059__$1)){
var statearr_48096_48120 = state_48078__$1;
(statearr_48096_48120[(1)] = (15));

} else {
var statearr_48097_48121 = state_48078__$1;
(statearr_48097_48121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (16))){
var inst_48056 = (state_48078[(8)]);
var inst_48063 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48056);
var state_48078__$1 = state_48078;
var statearr_48098_48122 = state_48078__$1;
(statearr_48098_48122[(2)] = inst_48063);

(statearr_48098_48122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (10))){
var inst_48070 = (state_48078[(2)]);
var state_48078__$1 = (function (){var statearr_48099 = state_48078;
(statearr_48099[(13)] = inst_48070);

return statearr_48099;
})();
var statearr_48100_48123 = state_48078__$1;
(statearr_48100_48123[(2)] = null);

(statearr_48100_48123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48079 === (8))){
var inst_48048 = (state_48078[(11)]);
var inst_48050 = console.log("Evaling!",inst_48048);
var inst_48051 = eval(inst_48048);
var state_48078__$1 = (function (){var statearr_48101 = state_48078;
(statearr_48101[(14)] = inst_48050);

return statearr_48101;
})();
var statearr_48102_48124 = state_48078__$1;
(statearr_48102_48124[(2)] = inst_48051);

(statearr_48102_48124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44371__auto__))
;
return ((function (switch__44281__auto__,c__44371__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44282__auto__ = null;
var figwheel$client$file_reloading$state_machine__44282__auto____0 = (function (){
var statearr_48103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48103[(0)] = figwheel$client$file_reloading$state_machine__44282__auto__);

(statearr_48103[(1)] = (1));

return statearr_48103;
});
var figwheel$client$file_reloading$state_machine__44282__auto____1 = (function (state_48078){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_48078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e48104){if((e48104 instanceof Object)){
var ex__44285__auto__ = e48104;
var statearr_48105_48125 = state_48078;
(statearr_48105_48125[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48126 = state_48078;
state_48078 = G__48126;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44282__auto__ = function(state_48078){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44282__auto____1.call(this,state_48078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44282__auto____0;
figwheel$client$file_reloading$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44282__auto____1;
return figwheel$client$file_reloading$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__))
})();
var state__44373__auto__ = (function (){var statearr_48106 = f__44372__auto__.call(null);
(statearr_48106[(6)] = c__44371__auto__);

return statearr_48106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__))
);

return c__44371__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48128 = arguments.length;
switch (G__48128) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48130,callback){
var map__48131 = p__48130;
var map__48131__$1 = ((((!((map__48131 == null)))?((((map__48131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48131):map__48131);
var file_msg = map__48131__$1;
var namespace = cljs.core.get.call(null,map__48131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48131,map__48131__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48131,map__48131__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48133){
var map__48134 = p__48133;
var map__48134__$1 = ((((!((map__48134 == null)))?((((map__48134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48134):map__48134);
var file_msg = map__48134__$1;
var namespace = cljs.core.get.call(null,map__48134__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48136){
var map__48137 = p__48136;
var map__48137__$1 = ((((!((map__48137 == null)))?((((map__48137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48137):map__48137);
var file_msg = map__48137__$1;
var namespace = cljs.core.get.call(null,map__48137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__40657__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__40657__auto__){
var or__40669__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
var or__40669__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40669__auto____$1)){
return or__40669__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__40657__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48139,callback){
var map__48140 = p__48139;
var map__48140__$1 = ((((!((map__48140 == null)))?((((map__48140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48140):map__48140);
var file_msg = map__48140__$1;
var request_url = cljs.core.get.call(null,map__48140__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44371__auto___48190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___48190,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___48190,out){
return (function (state_48175){
var state_val_48176 = (state_48175[(1)]);
if((state_val_48176 === (1))){
var inst_48149 = cljs.core.seq.call(null,files);
var inst_48150 = cljs.core.first.call(null,inst_48149);
var inst_48151 = cljs.core.next.call(null,inst_48149);
var inst_48152 = files;
var state_48175__$1 = (function (){var statearr_48177 = state_48175;
(statearr_48177[(7)] = inst_48150);

(statearr_48177[(8)] = inst_48152);

(statearr_48177[(9)] = inst_48151);

return statearr_48177;
})();
var statearr_48178_48191 = state_48175__$1;
(statearr_48178_48191[(2)] = null);

(statearr_48178_48191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48176 === (2))){
var inst_48152 = (state_48175[(8)]);
var inst_48158 = (state_48175[(10)]);
var inst_48157 = cljs.core.seq.call(null,inst_48152);
var inst_48158__$1 = cljs.core.first.call(null,inst_48157);
var inst_48159 = cljs.core.next.call(null,inst_48157);
var inst_48160 = (inst_48158__$1 == null);
var inst_48161 = cljs.core.not.call(null,inst_48160);
var state_48175__$1 = (function (){var statearr_48179 = state_48175;
(statearr_48179[(10)] = inst_48158__$1);

(statearr_48179[(11)] = inst_48159);

return statearr_48179;
})();
if(inst_48161){
var statearr_48180_48192 = state_48175__$1;
(statearr_48180_48192[(1)] = (4));

} else {
var statearr_48181_48193 = state_48175__$1;
(statearr_48181_48193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48176 === (3))){
var inst_48173 = (state_48175[(2)]);
var state_48175__$1 = state_48175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48175__$1,inst_48173);
} else {
if((state_val_48176 === (4))){
var inst_48158 = (state_48175[(10)]);
var inst_48163 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48158);
var state_48175__$1 = state_48175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48175__$1,(7),inst_48163);
} else {
if((state_val_48176 === (5))){
var inst_48169 = cljs.core.async.close_BANG_.call(null,out);
var state_48175__$1 = state_48175;
var statearr_48182_48194 = state_48175__$1;
(statearr_48182_48194[(2)] = inst_48169);

(statearr_48182_48194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48176 === (6))){
var inst_48171 = (state_48175[(2)]);
var state_48175__$1 = state_48175;
var statearr_48183_48195 = state_48175__$1;
(statearr_48183_48195[(2)] = inst_48171);

(statearr_48183_48195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48176 === (7))){
var inst_48159 = (state_48175[(11)]);
var inst_48165 = (state_48175[(2)]);
var inst_48166 = cljs.core.async.put_BANG_.call(null,out,inst_48165);
var inst_48152 = inst_48159;
var state_48175__$1 = (function (){var statearr_48184 = state_48175;
(statearr_48184[(8)] = inst_48152);

(statearr_48184[(12)] = inst_48166);

return statearr_48184;
})();
var statearr_48185_48196 = state_48175__$1;
(statearr_48185_48196[(2)] = null);

(statearr_48185_48196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__44371__auto___48190,out))
;
return ((function (switch__44281__auto__,c__44371__auto___48190,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto____0 = (function (){
var statearr_48186 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48186[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto__);

(statearr_48186[(1)] = (1));

return statearr_48186;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto____1 = (function (state_48175){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_48175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e48187){if((e48187 instanceof Object)){
var ex__44285__auto__ = e48187;
var statearr_48188_48197 = state_48175;
(statearr_48188_48197[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48198 = state_48175;
state_48175 = G__48198;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto__ = function(state_48175){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto____1.call(this,state_48175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___48190,out))
})();
var state__44373__auto__ = (function (){var statearr_48189 = f__44372__auto__.call(null);
(statearr_48189[(6)] = c__44371__auto___48190);

return statearr_48189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___48190,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48199,opts){
var map__48200 = p__48199;
var map__48200__$1 = ((((!((map__48200 == null)))?((((map__48200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48200):map__48200);
var eval_body = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__40657__auto__ = eval_body;
if(cljs.core.truth_(and__40657__auto__)){
return typeof eval_body === 'string';
} else {
return and__40657__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48202){var e = e48202;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__48203_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48203_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__48204){
var vec__48205 = p__48204;
var k = cljs.core.nth.call(null,vec__48205,(0),null);
var v = cljs.core.nth.call(null,vec__48205,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48208){
var vec__48209 = p__48208;
var k = cljs.core.nth.call(null,vec__48209,(0),null);
var v = cljs.core.nth.call(null,vec__48209,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48215,p__48216){
var map__48217 = p__48215;
var map__48217__$1 = ((((!((map__48217 == null)))?((((map__48217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48217):map__48217);
var opts = map__48217__$1;
var before_jsload = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48218 = p__48216;
var map__48218__$1 = ((((!((map__48218 == null)))?((((map__48218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48218):map__48218);
var msg = map__48218__$1;
var files = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48372){
var state_val_48373 = (state_48372[(1)]);
if((state_val_48373 === (7))){
var inst_48232 = (state_48372[(7)]);
var inst_48234 = (state_48372[(8)]);
var inst_48233 = (state_48372[(9)]);
var inst_48235 = (state_48372[(10)]);
var inst_48240 = cljs.core._nth.call(null,inst_48233,inst_48235);
var inst_48241 = figwheel.client.file_reloading.eval_body.call(null,inst_48240,opts);
var inst_48242 = (inst_48235 + (1));
var tmp48374 = inst_48232;
var tmp48375 = inst_48234;
var tmp48376 = inst_48233;
var inst_48232__$1 = tmp48374;
var inst_48233__$1 = tmp48376;
var inst_48234__$1 = tmp48375;
var inst_48235__$1 = inst_48242;
var state_48372__$1 = (function (){var statearr_48377 = state_48372;
(statearr_48377[(7)] = inst_48232__$1);

(statearr_48377[(8)] = inst_48234__$1);

(statearr_48377[(9)] = inst_48233__$1);

(statearr_48377[(11)] = inst_48241);

(statearr_48377[(10)] = inst_48235__$1);

return statearr_48377;
})();
var statearr_48378_48461 = state_48372__$1;
(statearr_48378_48461[(2)] = null);

(statearr_48378_48461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (20))){
var inst_48275 = (state_48372[(12)]);
var inst_48283 = figwheel.client.file_reloading.sort_files.call(null,inst_48275);
var state_48372__$1 = state_48372;
var statearr_48379_48462 = state_48372__$1;
(statearr_48379_48462[(2)] = inst_48283);

(statearr_48379_48462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (27))){
var state_48372__$1 = state_48372;
var statearr_48380_48463 = state_48372__$1;
(statearr_48380_48463[(2)] = null);

(statearr_48380_48463[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (1))){
var inst_48224 = (state_48372[(13)]);
var inst_48221 = before_jsload.call(null,files);
var inst_48222 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48223 = (function (){return ((function (inst_48224,inst_48221,inst_48222,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48212_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48212_SHARP_);
});
;})(inst_48224,inst_48221,inst_48222,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48224__$1 = cljs.core.filter.call(null,inst_48223,files);
var inst_48225 = cljs.core.not_empty.call(null,inst_48224__$1);
var state_48372__$1 = (function (){var statearr_48381 = state_48372;
(statearr_48381[(13)] = inst_48224__$1);

(statearr_48381[(14)] = inst_48221);

(statearr_48381[(15)] = inst_48222);

return statearr_48381;
})();
if(cljs.core.truth_(inst_48225)){
var statearr_48382_48464 = state_48372__$1;
(statearr_48382_48464[(1)] = (2));

} else {
var statearr_48383_48465 = state_48372__$1;
(statearr_48383_48465[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (24))){
var state_48372__$1 = state_48372;
var statearr_48384_48466 = state_48372__$1;
(statearr_48384_48466[(2)] = null);

(statearr_48384_48466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (39))){
var inst_48325 = (state_48372[(16)]);
var state_48372__$1 = state_48372;
var statearr_48385_48467 = state_48372__$1;
(statearr_48385_48467[(2)] = inst_48325);

(statearr_48385_48467[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (46))){
var inst_48367 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
var statearr_48386_48468 = state_48372__$1;
(statearr_48386_48468[(2)] = inst_48367);

(statearr_48386_48468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (4))){
var inst_48269 = (state_48372[(2)]);
var inst_48270 = cljs.core.List.EMPTY;
var inst_48271 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48270);
var inst_48272 = (function (){return ((function (inst_48269,inst_48270,inst_48271,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48213_SHARP_){
var and__40657__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48213_SHARP_);
if(cljs.core.truth_(and__40657__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48213_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__48213_SHARP_)));
} else {
return and__40657__auto__;
}
});
;})(inst_48269,inst_48270,inst_48271,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48273 = cljs.core.filter.call(null,inst_48272,files);
var inst_48274 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48275 = cljs.core.concat.call(null,inst_48273,inst_48274);
var state_48372__$1 = (function (){var statearr_48387 = state_48372;
(statearr_48387[(12)] = inst_48275);

(statearr_48387[(17)] = inst_48269);

(statearr_48387[(18)] = inst_48271);

return statearr_48387;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48388_48469 = state_48372__$1;
(statearr_48388_48469[(1)] = (16));

} else {
var statearr_48389_48470 = state_48372__$1;
(statearr_48389_48470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (15))){
var inst_48259 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
var statearr_48390_48471 = state_48372__$1;
(statearr_48390_48471[(2)] = inst_48259);

(statearr_48390_48471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (21))){
var inst_48285 = (state_48372[(19)]);
var inst_48285__$1 = (state_48372[(2)]);
var inst_48286 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48285__$1);
var state_48372__$1 = (function (){var statearr_48391 = state_48372;
(statearr_48391[(19)] = inst_48285__$1);

return statearr_48391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48372__$1,(22),inst_48286);
} else {
if((state_val_48373 === (31))){
var inst_48370 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48372__$1,inst_48370);
} else {
if((state_val_48373 === (32))){
var inst_48325 = (state_48372[(16)]);
var inst_48330 = inst_48325.cljs$lang$protocol_mask$partition0$;
var inst_48331 = (inst_48330 & (64));
var inst_48332 = inst_48325.cljs$core$ISeq$;
var inst_48333 = (cljs.core.PROTOCOL_SENTINEL === inst_48332);
var inst_48334 = (inst_48331) || (inst_48333);
var state_48372__$1 = state_48372;
if(cljs.core.truth_(inst_48334)){
var statearr_48392_48472 = state_48372__$1;
(statearr_48392_48472[(1)] = (35));

} else {
var statearr_48393_48473 = state_48372__$1;
(statearr_48393_48473[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (40))){
var inst_48347 = (state_48372[(20)]);
var inst_48346 = (state_48372[(2)]);
var inst_48347__$1 = cljs.core.get.call(null,inst_48346,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48348 = cljs.core.get.call(null,inst_48346,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48349 = cljs.core.not_empty.call(null,inst_48347__$1);
var state_48372__$1 = (function (){var statearr_48394 = state_48372;
(statearr_48394[(21)] = inst_48348);

(statearr_48394[(20)] = inst_48347__$1);

return statearr_48394;
})();
if(cljs.core.truth_(inst_48349)){
var statearr_48395_48474 = state_48372__$1;
(statearr_48395_48474[(1)] = (41));

} else {
var statearr_48396_48475 = state_48372__$1;
(statearr_48396_48475[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (33))){
var state_48372__$1 = state_48372;
var statearr_48397_48476 = state_48372__$1;
(statearr_48397_48476[(2)] = false);

(statearr_48397_48476[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (13))){
var inst_48245 = (state_48372[(22)]);
var inst_48249 = cljs.core.chunk_first.call(null,inst_48245);
var inst_48250 = cljs.core.chunk_rest.call(null,inst_48245);
var inst_48251 = cljs.core.count.call(null,inst_48249);
var inst_48232 = inst_48250;
var inst_48233 = inst_48249;
var inst_48234 = inst_48251;
var inst_48235 = (0);
var state_48372__$1 = (function (){var statearr_48398 = state_48372;
(statearr_48398[(7)] = inst_48232);

(statearr_48398[(8)] = inst_48234);

(statearr_48398[(9)] = inst_48233);

(statearr_48398[(10)] = inst_48235);

return statearr_48398;
})();
var statearr_48399_48477 = state_48372__$1;
(statearr_48399_48477[(2)] = null);

(statearr_48399_48477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (22))){
var inst_48285 = (state_48372[(19)]);
var inst_48289 = (state_48372[(23)]);
var inst_48293 = (state_48372[(24)]);
var inst_48288 = (state_48372[(25)]);
var inst_48288__$1 = (state_48372[(2)]);
var inst_48289__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48288__$1);
var inst_48290 = (function (){var all_files = inst_48285;
var res_SINGLEQUOTE_ = inst_48288__$1;
var res = inst_48289__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48285,inst_48289,inst_48293,inst_48288,inst_48288__$1,inst_48289__$1,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48214_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48214_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48285,inst_48289,inst_48293,inst_48288,inst_48288__$1,inst_48289__$1,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48291 = cljs.core.filter.call(null,inst_48290,inst_48288__$1);
var inst_48292 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48293__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48292);
var inst_48294 = cljs.core.not_empty.call(null,inst_48293__$1);
var state_48372__$1 = (function (){var statearr_48400 = state_48372;
(statearr_48400[(23)] = inst_48289__$1);

(statearr_48400[(26)] = inst_48291);

(statearr_48400[(24)] = inst_48293__$1);

(statearr_48400[(25)] = inst_48288__$1);

return statearr_48400;
})();
if(cljs.core.truth_(inst_48294)){
var statearr_48401_48478 = state_48372__$1;
(statearr_48401_48478[(1)] = (23));

} else {
var statearr_48402_48479 = state_48372__$1;
(statearr_48402_48479[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (36))){
var state_48372__$1 = state_48372;
var statearr_48403_48480 = state_48372__$1;
(statearr_48403_48480[(2)] = false);

(statearr_48403_48480[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (41))){
var inst_48347 = (state_48372[(20)]);
var inst_48351 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48352 = cljs.core.map.call(null,inst_48351,inst_48347);
var inst_48353 = cljs.core.pr_str.call(null,inst_48352);
var inst_48354 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48353)].join('');
var inst_48355 = figwheel.client.utils.log.call(null,inst_48354);
var state_48372__$1 = state_48372;
var statearr_48404_48481 = state_48372__$1;
(statearr_48404_48481[(2)] = inst_48355);

(statearr_48404_48481[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (43))){
var inst_48348 = (state_48372[(21)]);
var inst_48358 = (state_48372[(2)]);
var inst_48359 = cljs.core.not_empty.call(null,inst_48348);
var state_48372__$1 = (function (){var statearr_48405 = state_48372;
(statearr_48405[(27)] = inst_48358);

return statearr_48405;
})();
if(cljs.core.truth_(inst_48359)){
var statearr_48406_48482 = state_48372__$1;
(statearr_48406_48482[(1)] = (44));

} else {
var statearr_48407_48483 = state_48372__$1;
(statearr_48407_48483[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (29))){
var inst_48325 = (state_48372[(16)]);
var inst_48285 = (state_48372[(19)]);
var inst_48289 = (state_48372[(23)]);
var inst_48291 = (state_48372[(26)]);
var inst_48293 = (state_48372[(24)]);
var inst_48288 = (state_48372[(25)]);
var inst_48321 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48324 = (function (){var all_files = inst_48285;
var res_SINGLEQUOTE_ = inst_48288;
var res = inst_48289;
var files_not_loaded = inst_48291;
var dependencies_that_loaded = inst_48293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48325,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48321,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48323){
var map__48408 = p__48323;
var map__48408__$1 = ((((!((map__48408 == null)))?((((map__48408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48408):map__48408);
var namespace = cljs.core.get.call(null,map__48408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48325,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48321,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48325__$1 = cljs.core.group_by.call(null,inst_48324,inst_48291);
var inst_48327 = (inst_48325__$1 == null);
var inst_48328 = cljs.core.not.call(null,inst_48327);
var state_48372__$1 = (function (){var statearr_48410 = state_48372;
(statearr_48410[(16)] = inst_48325__$1);

(statearr_48410[(28)] = inst_48321);

return statearr_48410;
})();
if(inst_48328){
var statearr_48411_48484 = state_48372__$1;
(statearr_48411_48484[(1)] = (32));

} else {
var statearr_48412_48485 = state_48372__$1;
(statearr_48412_48485[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (44))){
var inst_48348 = (state_48372[(21)]);
var inst_48361 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48348);
var inst_48362 = cljs.core.pr_str.call(null,inst_48361);
var inst_48363 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48362)].join('');
var inst_48364 = figwheel.client.utils.log.call(null,inst_48363);
var state_48372__$1 = state_48372;
var statearr_48413_48486 = state_48372__$1;
(statearr_48413_48486[(2)] = inst_48364);

(statearr_48413_48486[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (6))){
var inst_48266 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
var statearr_48414_48487 = state_48372__$1;
(statearr_48414_48487[(2)] = inst_48266);

(statearr_48414_48487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (28))){
var inst_48291 = (state_48372[(26)]);
var inst_48318 = (state_48372[(2)]);
var inst_48319 = cljs.core.not_empty.call(null,inst_48291);
var state_48372__$1 = (function (){var statearr_48415 = state_48372;
(statearr_48415[(29)] = inst_48318);

return statearr_48415;
})();
if(cljs.core.truth_(inst_48319)){
var statearr_48416_48488 = state_48372__$1;
(statearr_48416_48488[(1)] = (29));

} else {
var statearr_48417_48489 = state_48372__$1;
(statearr_48417_48489[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (25))){
var inst_48289 = (state_48372[(23)]);
var inst_48305 = (state_48372[(2)]);
var inst_48306 = cljs.core.not_empty.call(null,inst_48289);
var state_48372__$1 = (function (){var statearr_48418 = state_48372;
(statearr_48418[(30)] = inst_48305);

return statearr_48418;
})();
if(cljs.core.truth_(inst_48306)){
var statearr_48419_48490 = state_48372__$1;
(statearr_48419_48490[(1)] = (26));

} else {
var statearr_48420_48491 = state_48372__$1;
(statearr_48420_48491[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (34))){
var inst_48341 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
if(cljs.core.truth_(inst_48341)){
var statearr_48421_48492 = state_48372__$1;
(statearr_48421_48492[(1)] = (38));

} else {
var statearr_48422_48493 = state_48372__$1;
(statearr_48422_48493[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (17))){
var state_48372__$1 = state_48372;
var statearr_48423_48494 = state_48372__$1;
(statearr_48423_48494[(2)] = recompile_dependents);

(statearr_48423_48494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (3))){
var state_48372__$1 = state_48372;
var statearr_48424_48495 = state_48372__$1;
(statearr_48424_48495[(2)] = null);

(statearr_48424_48495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (12))){
var inst_48262 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
var statearr_48425_48496 = state_48372__$1;
(statearr_48425_48496[(2)] = inst_48262);

(statearr_48425_48496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (2))){
var inst_48224 = (state_48372[(13)]);
var inst_48231 = cljs.core.seq.call(null,inst_48224);
var inst_48232 = inst_48231;
var inst_48233 = null;
var inst_48234 = (0);
var inst_48235 = (0);
var state_48372__$1 = (function (){var statearr_48426 = state_48372;
(statearr_48426[(7)] = inst_48232);

(statearr_48426[(8)] = inst_48234);

(statearr_48426[(9)] = inst_48233);

(statearr_48426[(10)] = inst_48235);

return statearr_48426;
})();
var statearr_48427_48497 = state_48372__$1;
(statearr_48427_48497[(2)] = null);

(statearr_48427_48497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (23))){
var inst_48285 = (state_48372[(19)]);
var inst_48289 = (state_48372[(23)]);
var inst_48291 = (state_48372[(26)]);
var inst_48293 = (state_48372[(24)]);
var inst_48288 = (state_48372[(25)]);
var inst_48296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48298 = (function (){var all_files = inst_48285;
var res_SINGLEQUOTE_ = inst_48288;
var res = inst_48289;
var files_not_loaded = inst_48291;
var dependencies_that_loaded = inst_48293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48296,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48297){
var map__48428 = p__48297;
var map__48428__$1 = ((((!((map__48428 == null)))?((((map__48428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48428):map__48428);
var request_url = cljs.core.get.call(null,map__48428__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48296,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48299 = cljs.core.reverse.call(null,inst_48293);
var inst_48300 = cljs.core.map.call(null,inst_48298,inst_48299);
var inst_48301 = cljs.core.pr_str.call(null,inst_48300);
var inst_48302 = figwheel.client.utils.log.call(null,inst_48301);
var state_48372__$1 = (function (){var statearr_48430 = state_48372;
(statearr_48430[(31)] = inst_48296);

return statearr_48430;
})();
var statearr_48431_48498 = state_48372__$1;
(statearr_48431_48498[(2)] = inst_48302);

(statearr_48431_48498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (35))){
var state_48372__$1 = state_48372;
var statearr_48432_48499 = state_48372__$1;
(statearr_48432_48499[(2)] = true);

(statearr_48432_48499[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (19))){
var inst_48275 = (state_48372[(12)]);
var inst_48281 = figwheel.client.file_reloading.expand_files.call(null,inst_48275);
var state_48372__$1 = state_48372;
var statearr_48433_48500 = state_48372__$1;
(statearr_48433_48500[(2)] = inst_48281);

(statearr_48433_48500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (11))){
var state_48372__$1 = state_48372;
var statearr_48434_48501 = state_48372__$1;
(statearr_48434_48501[(2)] = null);

(statearr_48434_48501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (9))){
var inst_48264 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
var statearr_48435_48502 = state_48372__$1;
(statearr_48435_48502[(2)] = inst_48264);

(statearr_48435_48502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (5))){
var inst_48234 = (state_48372[(8)]);
var inst_48235 = (state_48372[(10)]);
var inst_48237 = (inst_48235 < inst_48234);
var inst_48238 = inst_48237;
var state_48372__$1 = state_48372;
if(cljs.core.truth_(inst_48238)){
var statearr_48436_48503 = state_48372__$1;
(statearr_48436_48503[(1)] = (7));

} else {
var statearr_48437_48504 = state_48372__$1;
(statearr_48437_48504[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (14))){
var inst_48245 = (state_48372[(22)]);
var inst_48254 = cljs.core.first.call(null,inst_48245);
var inst_48255 = figwheel.client.file_reloading.eval_body.call(null,inst_48254,opts);
var inst_48256 = cljs.core.next.call(null,inst_48245);
var inst_48232 = inst_48256;
var inst_48233 = null;
var inst_48234 = (0);
var inst_48235 = (0);
var state_48372__$1 = (function (){var statearr_48438 = state_48372;
(statearr_48438[(7)] = inst_48232);

(statearr_48438[(8)] = inst_48234);

(statearr_48438[(9)] = inst_48233);

(statearr_48438[(32)] = inst_48255);

(statearr_48438[(10)] = inst_48235);

return statearr_48438;
})();
var statearr_48439_48505 = state_48372__$1;
(statearr_48439_48505[(2)] = null);

(statearr_48439_48505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (45))){
var state_48372__$1 = state_48372;
var statearr_48440_48506 = state_48372__$1;
(statearr_48440_48506[(2)] = null);

(statearr_48440_48506[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (26))){
var inst_48285 = (state_48372[(19)]);
var inst_48289 = (state_48372[(23)]);
var inst_48291 = (state_48372[(26)]);
var inst_48293 = (state_48372[(24)]);
var inst_48288 = (state_48372[(25)]);
var inst_48308 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48310 = (function (){var all_files = inst_48285;
var res_SINGLEQUOTE_ = inst_48288;
var res = inst_48289;
var files_not_loaded = inst_48291;
var dependencies_that_loaded = inst_48293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48308,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48309){
var map__48441 = p__48309;
var map__48441__$1 = ((((!((map__48441 == null)))?((((map__48441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48441):map__48441);
var namespace = cljs.core.get.call(null,map__48441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48308,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48311 = cljs.core.map.call(null,inst_48310,inst_48289);
var inst_48312 = cljs.core.pr_str.call(null,inst_48311);
var inst_48313 = figwheel.client.utils.log.call(null,inst_48312);
var inst_48314 = (function (){var all_files = inst_48285;
var res_SINGLEQUOTE_ = inst_48288;
var res = inst_48289;
var files_not_loaded = inst_48291;
var dependencies_that_loaded = inst_48293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48308,inst_48310,inst_48311,inst_48312,inst_48313,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48285,inst_48289,inst_48291,inst_48293,inst_48288,inst_48308,inst_48310,inst_48311,inst_48312,inst_48313,state_val_48373,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48315 = setTimeout(inst_48314,(10));
var state_48372__$1 = (function (){var statearr_48443 = state_48372;
(statearr_48443[(33)] = inst_48308);

(statearr_48443[(34)] = inst_48313);

return statearr_48443;
})();
var statearr_48444_48507 = state_48372__$1;
(statearr_48444_48507[(2)] = inst_48315);

(statearr_48444_48507[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (16))){
var state_48372__$1 = state_48372;
var statearr_48445_48508 = state_48372__$1;
(statearr_48445_48508[(2)] = reload_dependents);

(statearr_48445_48508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (38))){
var inst_48325 = (state_48372[(16)]);
var inst_48343 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48325);
var state_48372__$1 = state_48372;
var statearr_48446_48509 = state_48372__$1;
(statearr_48446_48509[(2)] = inst_48343);

(statearr_48446_48509[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (30))){
var state_48372__$1 = state_48372;
var statearr_48447_48510 = state_48372__$1;
(statearr_48447_48510[(2)] = null);

(statearr_48447_48510[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (10))){
var inst_48245 = (state_48372[(22)]);
var inst_48247 = cljs.core.chunked_seq_QMARK_.call(null,inst_48245);
var state_48372__$1 = state_48372;
if(inst_48247){
var statearr_48448_48511 = state_48372__$1;
(statearr_48448_48511[(1)] = (13));

} else {
var statearr_48449_48512 = state_48372__$1;
(statearr_48449_48512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (18))){
var inst_48279 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
if(cljs.core.truth_(inst_48279)){
var statearr_48450_48513 = state_48372__$1;
(statearr_48450_48513[(1)] = (19));

} else {
var statearr_48451_48514 = state_48372__$1;
(statearr_48451_48514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (42))){
var state_48372__$1 = state_48372;
var statearr_48452_48515 = state_48372__$1;
(statearr_48452_48515[(2)] = null);

(statearr_48452_48515[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (37))){
var inst_48338 = (state_48372[(2)]);
var state_48372__$1 = state_48372;
var statearr_48453_48516 = state_48372__$1;
(statearr_48453_48516[(2)] = inst_48338);

(statearr_48453_48516[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48373 === (8))){
var inst_48232 = (state_48372[(7)]);
var inst_48245 = (state_48372[(22)]);
var inst_48245__$1 = cljs.core.seq.call(null,inst_48232);
var state_48372__$1 = (function (){var statearr_48454 = state_48372;
(statearr_48454[(22)] = inst_48245__$1);

return statearr_48454;
})();
if(inst_48245__$1){
var statearr_48455_48517 = state_48372__$1;
(statearr_48455_48517[(1)] = (10));

} else {
var statearr_48456_48518 = state_48372__$1;
(statearr_48456_48518[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44281__auto__,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto____0 = (function (){
var statearr_48457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48457[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto__);

(statearr_48457[(1)] = (1));

return statearr_48457;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto____1 = (function (state_48372){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_48372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e48458){if((e48458 instanceof Object)){
var ex__44285__auto__ = e48458;
var statearr_48459_48519 = state_48372;
(statearr_48459_48519[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48520 = state_48372;
state_48372 = G__48520;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto__ = function(state_48372){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto____1.call(this,state_48372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44373__auto__ = (function (){var statearr_48460 = f__44372__auto__.call(null);
(statearr_48460[(6)] = c__44371__auto__);

return statearr_48460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__,map__48217,map__48217__$1,opts,before_jsload,on_jsload,reload_dependents,map__48218,map__48218__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44371__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48523,link){
var map__48524 = p__48523;
var map__48524__$1 = ((((!((map__48524 == null)))?((((map__48524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48524):map__48524);
var file = cljs.core.get.call(null,map__48524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__48524,map__48524__$1,file){
return (function (p1__48521_SHARP_,p2__48522_SHARP_){
if(cljs.core._EQ_.call(null,p1__48521_SHARP_,p2__48522_SHARP_)){
return p1__48521_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__48524,map__48524__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48527){
var map__48528 = p__48527;
var map__48528__$1 = ((((!((map__48528 == null)))?((((map__48528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48528):map__48528);
var match_length = cljs.core.get.call(null,map__48528__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48528__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48526_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48526_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48530_SHARP_,p2__48531_SHARP_){
return cljs.core.assoc.call(null,p1__48530_SHARP_,cljs.core.get.call(null,p2__48531_SHARP_,key),p2__48531_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_48532 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48532);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48532);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48533,p__48534){
var map__48535 = p__48533;
var map__48535__$1 = ((((!((map__48535 == null)))?((((map__48535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48535):map__48535);
var on_cssload = cljs.core.get.call(null,map__48535__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48536 = p__48534;
var map__48536__$1 = ((((!((map__48536 == null)))?((((map__48536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48536):map__48536);
var files_msg = map__48536__$1;
var files = cljs.core.get.call(null,map__48536__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
