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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48881_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48881_SHARP_));
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
var seq__48882 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48883 = null;
var count__48884 = (0);
var i__48885 = (0);
while(true){
if((i__48885 < count__48884)){
var n = cljs.core._nth.call(null,chunk__48883,i__48885);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48886 = seq__48882;
var G__48887 = chunk__48883;
var G__48888 = count__48884;
var G__48889 = (i__48885 + (1));
seq__48882 = G__48886;
chunk__48883 = G__48887;
count__48884 = G__48888;
i__48885 = G__48889;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48882);
if(temp__5457__auto__){
var seq__48882__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48882__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__48882__$1);
var G__48890 = cljs.core.chunk_rest.call(null,seq__48882__$1);
var G__48891 = c__41600__auto__;
var G__48892 = cljs.core.count.call(null,c__41600__auto__);
var G__48893 = (0);
seq__48882 = G__48890;
chunk__48883 = G__48891;
count__48884 = G__48892;
i__48885 = G__48893;
continue;
} else {
var n = cljs.core.first.call(null,seq__48882__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48894 = cljs.core.next.call(null,seq__48882__$1);
var G__48895 = null;
var G__48896 = (0);
var G__48897 = (0);
seq__48882 = G__48894;
chunk__48883 = G__48895;
count__48884 = G__48896;
i__48885 = G__48897;
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
return cljs.core.some.call(null,(function (p__48898){
var vec__48899 = p__48898;
var _ = cljs.core.nth.call(null,vec__48899,(0),null);
var v = cljs.core.nth.call(null,vec__48899,(1),null);
var and__40657__auto__ = v;
if(cljs.core.truth_(and__40657__auto__)){
return v.call(null,dep);
} else {
return and__40657__auto__;
}
}),cljs.core.filter.call(null,(function (p__48902){
var vec__48903 = p__48902;
var k = cljs.core.nth.call(null,vec__48903,(0),null);
var v = cljs.core.nth.call(null,vec__48903,(1),null);
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

var seq__48915_48923 = cljs.core.seq.call(null,deps);
var chunk__48916_48924 = null;
var count__48917_48925 = (0);
var i__48918_48926 = (0);
while(true){
if((i__48918_48926 < count__48917_48925)){
var dep_48927 = cljs.core._nth.call(null,chunk__48916_48924,i__48918_48926);
if(cljs.core.truth_((function (){var and__40657__auto__ = dep_48927;
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48927));
} else {
return and__40657__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48927,(depth + (1)),state);
} else {
}

var G__48928 = seq__48915_48923;
var G__48929 = chunk__48916_48924;
var G__48930 = count__48917_48925;
var G__48931 = (i__48918_48926 + (1));
seq__48915_48923 = G__48928;
chunk__48916_48924 = G__48929;
count__48917_48925 = G__48930;
i__48918_48926 = G__48931;
continue;
} else {
var temp__5457__auto___48932 = cljs.core.seq.call(null,seq__48915_48923);
if(temp__5457__auto___48932){
var seq__48915_48933__$1 = temp__5457__auto___48932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48915_48933__$1)){
var c__41600__auto___48934 = cljs.core.chunk_first.call(null,seq__48915_48933__$1);
var G__48935 = cljs.core.chunk_rest.call(null,seq__48915_48933__$1);
var G__48936 = c__41600__auto___48934;
var G__48937 = cljs.core.count.call(null,c__41600__auto___48934);
var G__48938 = (0);
seq__48915_48923 = G__48935;
chunk__48916_48924 = G__48936;
count__48917_48925 = G__48937;
i__48918_48926 = G__48938;
continue;
} else {
var dep_48939 = cljs.core.first.call(null,seq__48915_48933__$1);
if(cljs.core.truth_((function (){var and__40657__auto__ = dep_48939;
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48939));
} else {
return and__40657__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48939,(depth + (1)),state);
} else {
}

var G__48940 = cljs.core.next.call(null,seq__48915_48933__$1);
var G__48941 = null;
var G__48942 = (0);
var G__48943 = (0);
seq__48915_48923 = G__48940;
chunk__48916_48924 = G__48941;
count__48917_48925 = G__48942;
i__48918_48926 = G__48943;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48919){
var vec__48920 = p__48919;
var seq__48921 = cljs.core.seq.call(null,vec__48920);
var first__48922 = cljs.core.first.call(null,seq__48921);
var seq__48921__$1 = cljs.core.next.call(null,seq__48921);
var x = first__48922;
var xs = seq__48921__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48920,seq__48921,first__48922,seq__48921__$1,x,xs,get_deps__$1){
return (function (p1__48906_SHARP_){
return clojure.set.difference.call(null,p1__48906_SHARP_,x);
});})(vec__48920,seq__48921,first__48922,seq__48921__$1,x,xs,get_deps__$1))
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
var seq__48944 = cljs.core.seq.call(null,provides);
var chunk__48945 = null;
var count__48946 = (0);
var i__48947 = (0);
while(true){
if((i__48947 < count__48946)){
var prov = cljs.core._nth.call(null,chunk__48945,i__48947);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48948_48956 = cljs.core.seq.call(null,requires);
var chunk__48949_48957 = null;
var count__48950_48958 = (0);
var i__48951_48959 = (0);
while(true){
if((i__48951_48959 < count__48950_48958)){
var req_48960 = cljs.core._nth.call(null,chunk__48949_48957,i__48951_48959);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48960,prov);

var G__48961 = seq__48948_48956;
var G__48962 = chunk__48949_48957;
var G__48963 = count__48950_48958;
var G__48964 = (i__48951_48959 + (1));
seq__48948_48956 = G__48961;
chunk__48949_48957 = G__48962;
count__48950_48958 = G__48963;
i__48951_48959 = G__48964;
continue;
} else {
var temp__5457__auto___48965 = cljs.core.seq.call(null,seq__48948_48956);
if(temp__5457__auto___48965){
var seq__48948_48966__$1 = temp__5457__auto___48965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48948_48966__$1)){
var c__41600__auto___48967 = cljs.core.chunk_first.call(null,seq__48948_48966__$1);
var G__48968 = cljs.core.chunk_rest.call(null,seq__48948_48966__$1);
var G__48969 = c__41600__auto___48967;
var G__48970 = cljs.core.count.call(null,c__41600__auto___48967);
var G__48971 = (0);
seq__48948_48956 = G__48968;
chunk__48949_48957 = G__48969;
count__48950_48958 = G__48970;
i__48951_48959 = G__48971;
continue;
} else {
var req_48972 = cljs.core.first.call(null,seq__48948_48966__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48972,prov);

var G__48973 = cljs.core.next.call(null,seq__48948_48966__$1);
var G__48974 = null;
var G__48975 = (0);
var G__48976 = (0);
seq__48948_48956 = G__48973;
chunk__48949_48957 = G__48974;
count__48950_48958 = G__48975;
i__48951_48959 = G__48976;
continue;
}
} else {
}
}
break;
}

var G__48977 = seq__48944;
var G__48978 = chunk__48945;
var G__48979 = count__48946;
var G__48980 = (i__48947 + (1));
seq__48944 = G__48977;
chunk__48945 = G__48978;
count__48946 = G__48979;
i__48947 = G__48980;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48944);
if(temp__5457__auto__){
var seq__48944__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48944__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__48944__$1);
var G__48981 = cljs.core.chunk_rest.call(null,seq__48944__$1);
var G__48982 = c__41600__auto__;
var G__48983 = cljs.core.count.call(null,c__41600__auto__);
var G__48984 = (0);
seq__48944 = G__48981;
chunk__48945 = G__48982;
count__48946 = G__48983;
i__48947 = G__48984;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48944__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48952_48985 = cljs.core.seq.call(null,requires);
var chunk__48953_48986 = null;
var count__48954_48987 = (0);
var i__48955_48988 = (0);
while(true){
if((i__48955_48988 < count__48954_48987)){
var req_48989 = cljs.core._nth.call(null,chunk__48953_48986,i__48955_48988);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48989,prov);

var G__48990 = seq__48952_48985;
var G__48991 = chunk__48953_48986;
var G__48992 = count__48954_48987;
var G__48993 = (i__48955_48988 + (1));
seq__48952_48985 = G__48990;
chunk__48953_48986 = G__48991;
count__48954_48987 = G__48992;
i__48955_48988 = G__48993;
continue;
} else {
var temp__5457__auto___48994__$1 = cljs.core.seq.call(null,seq__48952_48985);
if(temp__5457__auto___48994__$1){
var seq__48952_48995__$1 = temp__5457__auto___48994__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48952_48995__$1)){
var c__41600__auto___48996 = cljs.core.chunk_first.call(null,seq__48952_48995__$1);
var G__48997 = cljs.core.chunk_rest.call(null,seq__48952_48995__$1);
var G__48998 = c__41600__auto___48996;
var G__48999 = cljs.core.count.call(null,c__41600__auto___48996);
var G__49000 = (0);
seq__48952_48985 = G__48997;
chunk__48953_48986 = G__48998;
count__48954_48987 = G__48999;
i__48955_48988 = G__49000;
continue;
} else {
var req_49001 = cljs.core.first.call(null,seq__48952_48995__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49001,prov);

var G__49002 = cljs.core.next.call(null,seq__48952_48995__$1);
var G__49003 = null;
var G__49004 = (0);
var G__49005 = (0);
seq__48952_48985 = G__49002;
chunk__48953_48986 = G__49003;
count__48954_48987 = G__49004;
i__48955_48988 = G__49005;
continue;
}
} else {
}
}
break;
}

var G__49006 = cljs.core.next.call(null,seq__48944__$1);
var G__49007 = null;
var G__49008 = (0);
var G__49009 = (0);
seq__48944 = G__49006;
chunk__48945 = G__49007;
count__48946 = G__49008;
i__48947 = G__49009;
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
var seq__49010_49014 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49011_49015 = null;
var count__49012_49016 = (0);
var i__49013_49017 = (0);
while(true){
if((i__49013_49017 < count__49012_49016)){
var ns_49018 = cljs.core._nth.call(null,chunk__49011_49015,i__49013_49017);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49018);

var G__49019 = seq__49010_49014;
var G__49020 = chunk__49011_49015;
var G__49021 = count__49012_49016;
var G__49022 = (i__49013_49017 + (1));
seq__49010_49014 = G__49019;
chunk__49011_49015 = G__49020;
count__49012_49016 = G__49021;
i__49013_49017 = G__49022;
continue;
} else {
var temp__5457__auto___49023 = cljs.core.seq.call(null,seq__49010_49014);
if(temp__5457__auto___49023){
var seq__49010_49024__$1 = temp__5457__auto___49023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49010_49024__$1)){
var c__41600__auto___49025 = cljs.core.chunk_first.call(null,seq__49010_49024__$1);
var G__49026 = cljs.core.chunk_rest.call(null,seq__49010_49024__$1);
var G__49027 = c__41600__auto___49025;
var G__49028 = cljs.core.count.call(null,c__41600__auto___49025);
var G__49029 = (0);
seq__49010_49014 = G__49026;
chunk__49011_49015 = G__49027;
count__49012_49016 = G__49028;
i__49013_49017 = G__49029;
continue;
} else {
var ns_49030 = cljs.core.first.call(null,seq__49010_49024__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49030);

var G__49031 = cljs.core.next.call(null,seq__49010_49024__$1);
var G__49032 = null;
var G__49033 = (0);
var G__49034 = (0);
seq__49010_49014 = G__49031;
chunk__49011_49015 = G__49032;
count__49012_49016 = G__49033;
i__49013_49017 = G__49034;
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
var G__49035__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49036__i = 0, G__49036__a = new Array(arguments.length -  0);
while (G__49036__i < G__49036__a.length) {G__49036__a[G__49036__i] = arguments[G__49036__i + 0]; ++G__49036__i;}
  args = new cljs.core.IndexedSeq(G__49036__a,0,null);
} 
return G__49035__delegate.call(this,args);};
G__49035.cljs$lang$maxFixedArity = 0;
G__49035.cljs$lang$applyTo = (function (arglist__49037){
var args = cljs.core.seq(arglist__49037);
return G__49035__delegate(args);
});
G__49035.cljs$core$IFn$_invoke$arity$variadic = G__49035__delegate;
return G__49035;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49038_SHARP_,p2__49039_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49038_SHARP_)].join('')),p2__49039_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49040_SHARP_,p2__49041_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49040_SHARP_)].join(''),p2__49041_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49042 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49042.addCallback(((function (G__49042){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49042))
);

G__49042.addErrback(((function (G__49042){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49042))
);

return G__49042;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49043){if((e49043 instanceof Error)){
var e = e49043;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49043;

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
}catch (e49044){if((e49044 instanceof Error)){
var e = e49044;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49044;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49045 = cljs.core._EQ_;
var expr__49046 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49045.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49046))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__49045.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49046))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__49045.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49046))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__49045,expr__49046){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49045,expr__49046))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49048,callback){
var map__49049 = p__49048;
var map__49049__$1 = ((((!((map__49049 == null)))?((((map__49049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49049):map__49049);
var file_msg = map__49049__$1;
var request_url = cljs.core.get.call(null,map__49049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__40669__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__49049,map__49049__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49049,map__49049__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__){
return (function (state_49089){
var state_val_49090 = (state_49089[(1)]);
if((state_val_49090 === (7))){
var inst_49085 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49091_49118 = state_49089__$1;
(statearr_49091_49118[(2)] = inst_49085);

(statearr_49091_49118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (1))){
var state_49089__$1 = state_49089;
var statearr_49092_49119 = state_49089__$1;
(statearr_49092_49119[(2)] = null);

(statearr_49092_49119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (4))){
var inst_49053 = (state_49089[(7)]);
var inst_49053__$1 = (state_49089[(2)]);
var state_49089__$1 = (function (){var statearr_49093 = state_49089;
(statearr_49093[(7)] = inst_49053__$1);

return statearr_49093;
})();
if(cljs.core.truth_(inst_49053__$1)){
var statearr_49094_49120 = state_49089__$1;
(statearr_49094_49120[(1)] = (5));

} else {
var statearr_49095_49121 = state_49089__$1;
(statearr_49095_49121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (15))){
var inst_49070 = (state_49089[(8)]);
var inst_49067 = (state_49089[(9)]);
var inst_49072 = inst_49070.call(null,inst_49067);
var state_49089__$1 = state_49089;
var statearr_49096_49122 = state_49089__$1;
(statearr_49096_49122[(2)] = inst_49072);

(statearr_49096_49122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (13))){
var inst_49079 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49097_49123 = state_49089__$1;
(statearr_49097_49123[(2)] = inst_49079);

(statearr_49097_49123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (6))){
var state_49089__$1 = state_49089;
var statearr_49098_49124 = state_49089__$1;
(statearr_49098_49124[(2)] = null);

(statearr_49098_49124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (17))){
var inst_49076 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49099_49125 = state_49089__$1;
(statearr_49099_49125[(2)] = inst_49076);

(statearr_49099_49125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (3))){
var inst_49087 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49089__$1,inst_49087);
} else {
if((state_val_49090 === (12))){
var state_49089__$1 = state_49089;
var statearr_49100_49126 = state_49089__$1;
(statearr_49100_49126[(2)] = null);

(statearr_49100_49126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (2))){
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49089__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49090 === (11))){
var inst_49058 = (state_49089[(10)]);
var inst_49065 = figwheel.client.file_reloading.blocking_load.call(null,inst_49058);
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49089__$1,(14),inst_49065);
} else {
if((state_val_49090 === (9))){
var inst_49058 = (state_49089[(10)]);
var state_49089__$1 = state_49089;
if(cljs.core.truth_(inst_49058)){
var statearr_49101_49127 = state_49089__$1;
(statearr_49101_49127[(1)] = (11));

} else {
var statearr_49102_49128 = state_49089__$1;
(statearr_49102_49128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (5))){
var inst_49053 = (state_49089[(7)]);
var inst_49059 = (state_49089[(11)]);
var inst_49058 = cljs.core.nth.call(null,inst_49053,(0),null);
var inst_49059__$1 = cljs.core.nth.call(null,inst_49053,(1),null);
var state_49089__$1 = (function (){var statearr_49103 = state_49089;
(statearr_49103[(11)] = inst_49059__$1);

(statearr_49103[(10)] = inst_49058);

return statearr_49103;
})();
if(cljs.core.truth_(inst_49059__$1)){
var statearr_49104_49129 = state_49089__$1;
(statearr_49104_49129[(1)] = (8));

} else {
var statearr_49105_49130 = state_49089__$1;
(statearr_49105_49130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (14))){
var inst_49070 = (state_49089[(8)]);
var inst_49058 = (state_49089[(10)]);
var inst_49067 = (state_49089[(2)]);
var inst_49068 = console.log("Loading!",inst_49058);
var inst_49069 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49070__$1 = cljs.core.get.call(null,inst_49069,inst_49058);
var state_49089__$1 = (function (){var statearr_49106 = state_49089;
(statearr_49106[(8)] = inst_49070__$1);

(statearr_49106[(9)] = inst_49067);

(statearr_49106[(12)] = inst_49068);

return statearr_49106;
})();
if(cljs.core.truth_(inst_49070__$1)){
var statearr_49107_49131 = state_49089__$1;
(statearr_49107_49131[(1)] = (15));

} else {
var statearr_49108_49132 = state_49089__$1;
(statearr_49108_49132[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (16))){
var inst_49067 = (state_49089[(9)]);
var inst_49074 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49067);
var state_49089__$1 = state_49089;
var statearr_49109_49133 = state_49089__$1;
(statearr_49109_49133[(2)] = inst_49074);

(statearr_49109_49133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (10))){
var inst_49081 = (state_49089[(2)]);
var state_49089__$1 = (function (){var statearr_49110 = state_49089;
(statearr_49110[(13)] = inst_49081);

return statearr_49110;
})();
var statearr_49111_49134 = state_49089__$1;
(statearr_49111_49134[(2)] = null);

(statearr_49111_49134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (8))){
var inst_49059 = (state_49089[(11)]);
var inst_49061 = console.log("Evaling!",inst_49059);
var inst_49062 = eval(inst_49059);
var state_49089__$1 = (function (){var statearr_49112 = state_49089;
(statearr_49112[(14)] = inst_49061);

return statearr_49112;
})();
var statearr_49113_49135 = state_49089__$1;
(statearr_49113_49135[(2)] = inst_49062);

(statearr_49113_49135[(1)] = (10));


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
});})(c__46898__auto__))
;
return ((function (switch__46808__auto__,c__46898__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46809__auto__ = null;
var figwheel$client$file_reloading$state_machine__46809__auto____0 = (function (){
var statearr_49114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49114[(0)] = figwheel$client$file_reloading$state_machine__46809__auto__);

(statearr_49114[(1)] = (1));

return statearr_49114;
});
var figwheel$client$file_reloading$state_machine__46809__auto____1 = (function (state_49089){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_49089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e49115){if((e49115 instanceof Object)){
var ex__46812__auto__ = e49115;
var statearr_49116_49136 = state_49089;
(statearr_49116_49136[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49137 = state_49089;
state_49089 = G__49137;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46809__auto__ = function(state_49089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46809__auto____1.call(this,state_49089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46809__auto____0;
figwheel$client$file_reloading$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46809__auto____1;
return figwheel$client$file_reloading$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__))
})();
var state__46900__auto__ = (function (){var statearr_49117 = f__46899__auto__.call(null);
(statearr_49117[(6)] = c__46898__auto__);

return statearr_49117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__))
);

return c__46898__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__49139 = arguments.length;
switch (G__49139) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49141,callback){
var map__49142 = p__49141;
var map__49142__$1 = ((((!((map__49142 == null)))?((((map__49142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49142):map__49142);
var file_msg = map__49142__$1;
var namespace = cljs.core.get.call(null,map__49142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49142,map__49142__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49142,map__49142__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49144){
var map__49145 = p__49144;
var map__49145__$1 = ((((!((map__49145 == null)))?((((map__49145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49145):map__49145);
var file_msg = map__49145__$1;
var namespace = cljs.core.get.call(null,map__49145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49147){
var map__49148 = p__49147;
var map__49148__$1 = ((((!((map__49148 == null)))?((((map__49148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49148):map__49148);
var file_msg = map__49148__$1;
var namespace = cljs.core.get.call(null,map__49148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49150,callback){
var map__49151 = p__49150;
var map__49151__$1 = ((((!((map__49151 == null)))?((((map__49151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49151):map__49151);
var file_msg = map__49151__$1;
var request_url = cljs.core.get.call(null,map__49151__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46898__auto___49201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___49201,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___49201,out){
return (function (state_49186){
var state_val_49187 = (state_49186[(1)]);
if((state_val_49187 === (1))){
var inst_49160 = cljs.core.seq.call(null,files);
var inst_49161 = cljs.core.first.call(null,inst_49160);
var inst_49162 = cljs.core.next.call(null,inst_49160);
var inst_49163 = files;
var state_49186__$1 = (function (){var statearr_49188 = state_49186;
(statearr_49188[(7)] = inst_49162);

(statearr_49188[(8)] = inst_49163);

(statearr_49188[(9)] = inst_49161);

return statearr_49188;
})();
var statearr_49189_49202 = state_49186__$1;
(statearr_49189_49202[(2)] = null);

(statearr_49189_49202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49187 === (2))){
var inst_49163 = (state_49186[(8)]);
var inst_49169 = (state_49186[(10)]);
var inst_49168 = cljs.core.seq.call(null,inst_49163);
var inst_49169__$1 = cljs.core.first.call(null,inst_49168);
var inst_49170 = cljs.core.next.call(null,inst_49168);
var inst_49171 = (inst_49169__$1 == null);
var inst_49172 = cljs.core.not.call(null,inst_49171);
var state_49186__$1 = (function (){var statearr_49190 = state_49186;
(statearr_49190[(11)] = inst_49170);

(statearr_49190[(10)] = inst_49169__$1);

return statearr_49190;
})();
if(inst_49172){
var statearr_49191_49203 = state_49186__$1;
(statearr_49191_49203[(1)] = (4));

} else {
var statearr_49192_49204 = state_49186__$1;
(statearr_49192_49204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49187 === (3))){
var inst_49184 = (state_49186[(2)]);
var state_49186__$1 = state_49186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49186__$1,inst_49184);
} else {
if((state_val_49187 === (4))){
var inst_49169 = (state_49186[(10)]);
var inst_49174 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49169);
var state_49186__$1 = state_49186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49186__$1,(7),inst_49174);
} else {
if((state_val_49187 === (5))){
var inst_49180 = cljs.core.async.close_BANG_.call(null,out);
var state_49186__$1 = state_49186;
var statearr_49193_49205 = state_49186__$1;
(statearr_49193_49205[(2)] = inst_49180);

(statearr_49193_49205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49187 === (6))){
var inst_49182 = (state_49186[(2)]);
var state_49186__$1 = state_49186;
var statearr_49194_49206 = state_49186__$1;
(statearr_49194_49206[(2)] = inst_49182);

(statearr_49194_49206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49187 === (7))){
var inst_49170 = (state_49186[(11)]);
var inst_49176 = (state_49186[(2)]);
var inst_49177 = cljs.core.async.put_BANG_.call(null,out,inst_49176);
var inst_49163 = inst_49170;
var state_49186__$1 = (function (){var statearr_49195 = state_49186;
(statearr_49195[(8)] = inst_49163);

(statearr_49195[(12)] = inst_49177);

return statearr_49195;
})();
var statearr_49196_49207 = state_49186__$1;
(statearr_49196_49207[(2)] = null);

(statearr_49196_49207[(1)] = (2));


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
});})(c__46898__auto___49201,out))
;
return ((function (switch__46808__auto__,c__46898__auto___49201,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto____0 = (function (){
var statearr_49197 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49197[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto__);

(statearr_49197[(1)] = (1));

return statearr_49197;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto____1 = (function (state_49186){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_49186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e49198){if((e49198 instanceof Object)){
var ex__46812__auto__ = e49198;
var statearr_49199_49208 = state_49186;
(statearr_49199_49208[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49209 = state_49186;
state_49186 = G__49209;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto__ = function(state_49186){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto____1.call(this,state_49186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___49201,out))
})();
var state__46900__auto__ = (function (){var statearr_49200 = f__46899__auto__.call(null);
(statearr_49200[(6)] = c__46898__auto___49201);

return statearr_49200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___49201,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49210,opts){
var map__49211 = p__49210;
var map__49211__$1 = ((((!((map__49211 == null)))?((((map__49211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49211):map__49211);
var eval_body = cljs.core.get.call(null,map__49211__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49213){var e = e49213;
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
return (function (p1__49214_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49214_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49215){
var vec__49216 = p__49215;
var k = cljs.core.nth.call(null,vec__49216,(0),null);
var v = cljs.core.nth.call(null,vec__49216,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49219){
var vec__49220 = p__49219;
var k = cljs.core.nth.call(null,vec__49220,(0),null);
var v = cljs.core.nth.call(null,vec__49220,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49226,p__49227){
var map__49228 = p__49226;
var map__49228__$1 = ((((!((map__49228 == null)))?((((map__49228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49228):map__49228);
var opts = map__49228__$1;
var before_jsload = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49229 = p__49227;
var map__49229__$1 = ((((!((map__49229 == null)))?((((map__49229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49229):map__49229);
var msg = map__49229__$1;
var files = cljs.core.get.call(null,map__49229__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49229__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49229__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49383){
var state_val_49384 = (state_49383[(1)]);
if((state_val_49384 === (7))){
var inst_49243 = (state_49383[(7)]);
var inst_49246 = (state_49383[(8)]);
var inst_49245 = (state_49383[(9)]);
var inst_49244 = (state_49383[(10)]);
var inst_49251 = cljs.core._nth.call(null,inst_49244,inst_49246);
var inst_49252 = figwheel.client.file_reloading.eval_body.call(null,inst_49251,opts);
var inst_49253 = (inst_49246 + (1));
var tmp49385 = inst_49243;
var tmp49386 = inst_49245;
var tmp49387 = inst_49244;
var inst_49243__$1 = tmp49385;
var inst_49244__$1 = tmp49387;
var inst_49245__$1 = tmp49386;
var inst_49246__$1 = inst_49253;
var state_49383__$1 = (function (){var statearr_49388 = state_49383;
(statearr_49388[(7)] = inst_49243__$1);

(statearr_49388[(8)] = inst_49246__$1);

(statearr_49388[(11)] = inst_49252);

(statearr_49388[(9)] = inst_49245__$1);

(statearr_49388[(10)] = inst_49244__$1);

return statearr_49388;
})();
var statearr_49389_49472 = state_49383__$1;
(statearr_49389_49472[(2)] = null);

(statearr_49389_49472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (20))){
var inst_49286 = (state_49383[(12)]);
var inst_49294 = figwheel.client.file_reloading.sort_files.call(null,inst_49286);
var state_49383__$1 = state_49383;
var statearr_49390_49473 = state_49383__$1;
(statearr_49390_49473[(2)] = inst_49294);

(statearr_49390_49473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (27))){
var state_49383__$1 = state_49383;
var statearr_49391_49474 = state_49383__$1;
(statearr_49391_49474[(2)] = null);

(statearr_49391_49474[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (1))){
var inst_49235 = (state_49383[(13)]);
var inst_49232 = before_jsload.call(null,files);
var inst_49233 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49234 = (function (){return ((function (inst_49235,inst_49232,inst_49233,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49223_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49223_SHARP_);
});
;})(inst_49235,inst_49232,inst_49233,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49235__$1 = cljs.core.filter.call(null,inst_49234,files);
var inst_49236 = cljs.core.not_empty.call(null,inst_49235__$1);
var state_49383__$1 = (function (){var statearr_49392 = state_49383;
(statearr_49392[(14)] = inst_49233);

(statearr_49392[(15)] = inst_49232);

(statearr_49392[(13)] = inst_49235__$1);

return statearr_49392;
})();
if(cljs.core.truth_(inst_49236)){
var statearr_49393_49475 = state_49383__$1;
(statearr_49393_49475[(1)] = (2));

} else {
var statearr_49394_49476 = state_49383__$1;
(statearr_49394_49476[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (24))){
var state_49383__$1 = state_49383;
var statearr_49395_49477 = state_49383__$1;
(statearr_49395_49477[(2)] = null);

(statearr_49395_49477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (39))){
var inst_49336 = (state_49383[(16)]);
var state_49383__$1 = state_49383;
var statearr_49396_49478 = state_49383__$1;
(statearr_49396_49478[(2)] = inst_49336);

(statearr_49396_49478[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (46))){
var inst_49378 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49397_49479 = state_49383__$1;
(statearr_49397_49479[(2)] = inst_49378);

(statearr_49397_49479[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (4))){
var inst_49280 = (state_49383[(2)]);
var inst_49281 = cljs.core.List.EMPTY;
var inst_49282 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49281);
var inst_49283 = (function (){return ((function (inst_49280,inst_49281,inst_49282,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49224_SHARP_){
var and__40657__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49224_SHARP_);
if(cljs.core.truth_(and__40657__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49224_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49224_SHARP_)));
} else {
return and__40657__auto__;
}
});
;})(inst_49280,inst_49281,inst_49282,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49284 = cljs.core.filter.call(null,inst_49283,files);
var inst_49285 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49286 = cljs.core.concat.call(null,inst_49284,inst_49285);
var state_49383__$1 = (function (){var statearr_49398 = state_49383;
(statearr_49398[(17)] = inst_49282);

(statearr_49398[(12)] = inst_49286);

(statearr_49398[(18)] = inst_49280);

return statearr_49398;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49399_49480 = state_49383__$1;
(statearr_49399_49480[(1)] = (16));

} else {
var statearr_49400_49481 = state_49383__$1;
(statearr_49400_49481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (15))){
var inst_49270 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49401_49482 = state_49383__$1;
(statearr_49401_49482[(2)] = inst_49270);

(statearr_49401_49482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (21))){
var inst_49296 = (state_49383[(19)]);
var inst_49296__$1 = (state_49383[(2)]);
var inst_49297 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49296__$1);
var state_49383__$1 = (function (){var statearr_49402 = state_49383;
(statearr_49402[(19)] = inst_49296__$1);

return statearr_49402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49383__$1,(22),inst_49297);
} else {
if((state_val_49384 === (31))){
var inst_49381 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49383__$1,inst_49381);
} else {
if((state_val_49384 === (32))){
var inst_49336 = (state_49383[(16)]);
var inst_49341 = inst_49336.cljs$lang$protocol_mask$partition0$;
var inst_49342 = (inst_49341 & (64));
var inst_49343 = inst_49336.cljs$core$ISeq$;
var inst_49344 = (cljs.core.PROTOCOL_SENTINEL === inst_49343);
var inst_49345 = (inst_49342) || (inst_49344);
var state_49383__$1 = state_49383;
if(cljs.core.truth_(inst_49345)){
var statearr_49403_49483 = state_49383__$1;
(statearr_49403_49483[(1)] = (35));

} else {
var statearr_49404_49484 = state_49383__$1;
(statearr_49404_49484[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (40))){
var inst_49358 = (state_49383[(20)]);
var inst_49357 = (state_49383[(2)]);
var inst_49358__$1 = cljs.core.get.call(null,inst_49357,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49359 = cljs.core.get.call(null,inst_49357,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49360 = cljs.core.not_empty.call(null,inst_49358__$1);
var state_49383__$1 = (function (){var statearr_49405 = state_49383;
(statearr_49405[(20)] = inst_49358__$1);

(statearr_49405[(21)] = inst_49359);

return statearr_49405;
})();
if(cljs.core.truth_(inst_49360)){
var statearr_49406_49485 = state_49383__$1;
(statearr_49406_49485[(1)] = (41));

} else {
var statearr_49407_49486 = state_49383__$1;
(statearr_49407_49486[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (33))){
var state_49383__$1 = state_49383;
var statearr_49408_49487 = state_49383__$1;
(statearr_49408_49487[(2)] = false);

(statearr_49408_49487[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (13))){
var inst_49256 = (state_49383[(22)]);
var inst_49260 = cljs.core.chunk_first.call(null,inst_49256);
var inst_49261 = cljs.core.chunk_rest.call(null,inst_49256);
var inst_49262 = cljs.core.count.call(null,inst_49260);
var inst_49243 = inst_49261;
var inst_49244 = inst_49260;
var inst_49245 = inst_49262;
var inst_49246 = (0);
var state_49383__$1 = (function (){var statearr_49409 = state_49383;
(statearr_49409[(7)] = inst_49243);

(statearr_49409[(8)] = inst_49246);

(statearr_49409[(9)] = inst_49245);

(statearr_49409[(10)] = inst_49244);

return statearr_49409;
})();
var statearr_49410_49488 = state_49383__$1;
(statearr_49410_49488[(2)] = null);

(statearr_49410_49488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (22))){
var inst_49296 = (state_49383[(19)]);
var inst_49304 = (state_49383[(23)]);
var inst_49300 = (state_49383[(24)]);
var inst_49299 = (state_49383[(25)]);
var inst_49299__$1 = (state_49383[(2)]);
var inst_49300__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49299__$1);
var inst_49301 = (function (){var all_files = inst_49296;
var res_SINGLEQUOTE_ = inst_49299__$1;
var res = inst_49300__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49296,inst_49304,inst_49300,inst_49299,inst_49299__$1,inst_49300__$1,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49225_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49225_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49296,inst_49304,inst_49300,inst_49299,inst_49299__$1,inst_49300__$1,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49302 = cljs.core.filter.call(null,inst_49301,inst_49299__$1);
var inst_49303 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49304__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49303);
var inst_49305 = cljs.core.not_empty.call(null,inst_49304__$1);
var state_49383__$1 = (function (){var statearr_49411 = state_49383;
(statearr_49411[(26)] = inst_49302);

(statearr_49411[(23)] = inst_49304__$1);

(statearr_49411[(24)] = inst_49300__$1);

(statearr_49411[(25)] = inst_49299__$1);

return statearr_49411;
})();
if(cljs.core.truth_(inst_49305)){
var statearr_49412_49489 = state_49383__$1;
(statearr_49412_49489[(1)] = (23));

} else {
var statearr_49413_49490 = state_49383__$1;
(statearr_49413_49490[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (36))){
var state_49383__$1 = state_49383;
var statearr_49414_49491 = state_49383__$1;
(statearr_49414_49491[(2)] = false);

(statearr_49414_49491[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (41))){
var inst_49358 = (state_49383[(20)]);
var inst_49362 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49363 = cljs.core.map.call(null,inst_49362,inst_49358);
var inst_49364 = cljs.core.pr_str.call(null,inst_49363);
var inst_49365 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49364)].join('');
var inst_49366 = figwheel.client.utils.log.call(null,inst_49365);
var state_49383__$1 = state_49383;
var statearr_49415_49492 = state_49383__$1;
(statearr_49415_49492[(2)] = inst_49366);

(statearr_49415_49492[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (43))){
var inst_49359 = (state_49383[(21)]);
var inst_49369 = (state_49383[(2)]);
var inst_49370 = cljs.core.not_empty.call(null,inst_49359);
var state_49383__$1 = (function (){var statearr_49416 = state_49383;
(statearr_49416[(27)] = inst_49369);

return statearr_49416;
})();
if(cljs.core.truth_(inst_49370)){
var statearr_49417_49493 = state_49383__$1;
(statearr_49417_49493[(1)] = (44));

} else {
var statearr_49418_49494 = state_49383__$1;
(statearr_49418_49494[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (29))){
var inst_49296 = (state_49383[(19)]);
var inst_49302 = (state_49383[(26)]);
var inst_49304 = (state_49383[(23)]);
var inst_49300 = (state_49383[(24)]);
var inst_49336 = (state_49383[(16)]);
var inst_49299 = (state_49383[(25)]);
var inst_49332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49335 = (function (){var all_files = inst_49296;
var res_SINGLEQUOTE_ = inst_49299;
var res = inst_49300;
var files_not_loaded = inst_49302;
var dependencies_that_loaded = inst_49304;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49336,inst_49299,inst_49332,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49334){
var map__49419 = p__49334;
var map__49419__$1 = ((((!((map__49419 == null)))?((((map__49419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49419):map__49419);
var namespace = cljs.core.get.call(null,map__49419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49336,inst_49299,inst_49332,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49336__$1 = cljs.core.group_by.call(null,inst_49335,inst_49302);
var inst_49338 = (inst_49336__$1 == null);
var inst_49339 = cljs.core.not.call(null,inst_49338);
var state_49383__$1 = (function (){var statearr_49421 = state_49383;
(statearr_49421[(28)] = inst_49332);

(statearr_49421[(16)] = inst_49336__$1);

return statearr_49421;
})();
if(inst_49339){
var statearr_49422_49495 = state_49383__$1;
(statearr_49422_49495[(1)] = (32));

} else {
var statearr_49423_49496 = state_49383__$1;
(statearr_49423_49496[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (44))){
var inst_49359 = (state_49383[(21)]);
var inst_49372 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49359);
var inst_49373 = cljs.core.pr_str.call(null,inst_49372);
var inst_49374 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49373)].join('');
var inst_49375 = figwheel.client.utils.log.call(null,inst_49374);
var state_49383__$1 = state_49383;
var statearr_49424_49497 = state_49383__$1;
(statearr_49424_49497[(2)] = inst_49375);

(statearr_49424_49497[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (6))){
var inst_49277 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49425_49498 = state_49383__$1;
(statearr_49425_49498[(2)] = inst_49277);

(statearr_49425_49498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (28))){
var inst_49302 = (state_49383[(26)]);
var inst_49329 = (state_49383[(2)]);
var inst_49330 = cljs.core.not_empty.call(null,inst_49302);
var state_49383__$1 = (function (){var statearr_49426 = state_49383;
(statearr_49426[(29)] = inst_49329);

return statearr_49426;
})();
if(cljs.core.truth_(inst_49330)){
var statearr_49427_49499 = state_49383__$1;
(statearr_49427_49499[(1)] = (29));

} else {
var statearr_49428_49500 = state_49383__$1;
(statearr_49428_49500[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (25))){
var inst_49300 = (state_49383[(24)]);
var inst_49316 = (state_49383[(2)]);
var inst_49317 = cljs.core.not_empty.call(null,inst_49300);
var state_49383__$1 = (function (){var statearr_49429 = state_49383;
(statearr_49429[(30)] = inst_49316);

return statearr_49429;
})();
if(cljs.core.truth_(inst_49317)){
var statearr_49430_49501 = state_49383__$1;
(statearr_49430_49501[(1)] = (26));

} else {
var statearr_49431_49502 = state_49383__$1;
(statearr_49431_49502[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (34))){
var inst_49352 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
if(cljs.core.truth_(inst_49352)){
var statearr_49432_49503 = state_49383__$1;
(statearr_49432_49503[(1)] = (38));

} else {
var statearr_49433_49504 = state_49383__$1;
(statearr_49433_49504[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (17))){
var state_49383__$1 = state_49383;
var statearr_49434_49505 = state_49383__$1;
(statearr_49434_49505[(2)] = recompile_dependents);

(statearr_49434_49505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (3))){
var state_49383__$1 = state_49383;
var statearr_49435_49506 = state_49383__$1;
(statearr_49435_49506[(2)] = null);

(statearr_49435_49506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (12))){
var inst_49273 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49436_49507 = state_49383__$1;
(statearr_49436_49507[(2)] = inst_49273);

(statearr_49436_49507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (2))){
var inst_49235 = (state_49383[(13)]);
var inst_49242 = cljs.core.seq.call(null,inst_49235);
var inst_49243 = inst_49242;
var inst_49244 = null;
var inst_49245 = (0);
var inst_49246 = (0);
var state_49383__$1 = (function (){var statearr_49437 = state_49383;
(statearr_49437[(7)] = inst_49243);

(statearr_49437[(8)] = inst_49246);

(statearr_49437[(9)] = inst_49245);

(statearr_49437[(10)] = inst_49244);

return statearr_49437;
})();
var statearr_49438_49508 = state_49383__$1;
(statearr_49438_49508[(2)] = null);

(statearr_49438_49508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (23))){
var inst_49296 = (state_49383[(19)]);
var inst_49302 = (state_49383[(26)]);
var inst_49304 = (state_49383[(23)]);
var inst_49300 = (state_49383[(24)]);
var inst_49299 = (state_49383[(25)]);
var inst_49307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49309 = (function (){var all_files = inst_49296;
var res_SINGLEQUOTE_ = inst_49299;
var res = inst_49300;
var files_not_loaded = inst_49302;
var dependencies_that_loaded = inst_49304;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49299,inst_49307,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49308){
var map__49439 = p__49308;
var map__49439__$1 = ((((!((map__49439 == null)))?((((map__49439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49439):map__49439);
var request_url = cljs.core.get.call(null,map__49439__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49299,inst_49307,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49310 = cljs.core.reverse.call(null,inst_49304);
var inst_49311 = cljs.core.map.call(null,inst_49309,inst_49310);
var inst_49312 = cljs.core.pr_str.call(null,inst_49311);
var inst_49313 = figwheel.client.utils.log.call(null,inst_49312);
var state_49383__$1 = (function (){var statearr_49441 = state_49383;
(statearr_49441[(31)] = inst_49307);

return statearr_49441;
})();
var statearr_49442_49509 = state_49383__$1;
(statearr_49442_49509[(2)] = inst_49313);

(statearr_49442_49509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (35))){
var state_49383__$1 = state_49383;
var statearr_49443_49510 = state_49383__$1;
(statearr_49443_49510[(2)] = true);

(statearr_49443_49510[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (19))){
var inst_49286 = (state_49383[(12)]);
var inst_49292 = figwheel.client.file_reloading.expand_files.call(null,inst_49286);
var state_49383__$1 = state_49383;
var statearr_49444_49511 = state_49383__$1;
(statearr_49444_49511[(2)] = inst_49292);

(statearr_49444_49511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (11))){
var state_49383__$1 = state_49383;
var statearr_49445_49512 = state_49383__$1;
(statearr_49445_49512[(2)] = null);

(statearr_49445_49512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (9))){
var inst_49275 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49446_49513 = state_49383__$1;
(statearr_49446_49513[(2)] = inst_49275);

(statearr_49446_49513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (5))){
var inst_49246 = (state_49383[(8)]);
var inst_49245 = (state_49383[(9)]);
var inst_49248 = (inst_49246 < inst_49245);
var inst_49249 = inst_49248;
var state_49383__$1 = state_49383;
if(cljs.core.truth_(inst_49249)){
var statearr_49447_49514 = state_49383__$1;
(statearr_49447_49514[(1)] = (7));

} else {
var statearr_49448_49515 = state_49383__$1;
(statearr_49448_49515[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (14))){
var inst_49256 = (state_49383[(22)]);
var inst_49265 = cljs.core.first.call(null,inst_49256);
var inst_49266 = figwheel.client.file_reloading.eval_body.call(null,inst_49265,opts);
var inst_49267 = cljs.core.next.call(null,inst_49256);
var inst_49243 = inst_49267;
var inst_49244 = null;
var inst_49245 = (0);
var inst_49246 = (0);
var state_49383__$1 = (function (){var statearr_49449 = state_49383;
(statearr_49449[(7)] = inst_49243);

(statearr_49449[(32)] = inst_49266);

(statearr_49449[(8)] = inst_49246);

(statearr_49449[(9)] = inst_49245);

(statearr_49449[(10)] = inst_49244);

return statearr_49449;
})();
var statearr_49450_49516 = state_49383__$1;
(statearr_49450_49516[(2)] = null);

(statearr_49450_49516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (45))){
var state_49383__$1 = state_49383;
var statearr_49451_49517 = state_49383__$1;
(statearr_49451_49517[(2)] = null);

(statearr_49451_49517[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (26))){
var inst_49296 = (state_49383[(19)]);
var inst_49302 = (state_49383[(26)]);
var inst_49304 = (state_49383[(23)]);
var inst_49300 = (state_49383[(24)]);
var inst_49299 = (state_49383[(25)]);
var inst_49319 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49321 = (function (){var all_files = inst_49296;
var res_SINGLEQUOTE_ = inst_49299;
var res = inst_49300;
var files_not_loaded = inst_49302;
var dependencies_that_loaded = inst_49304;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49299,inst_49319,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49320){
var map__49452 = p__49320;
var map__49452__$1 = ((((!((map__49452 == null)))?((((map__49452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49452):map__49452);
var namespace = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49299,inst_49319,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49322 = cljs.core.map.call(null,inst_49321,inst_49300);
var inst_49323 = cljs.core.pr_str.call(null,inst_49322);
var inst_49324 = figwheel.client.utils.log.call(null,inst_49323);
var inst_49325 = (function (){var all_files = inst_49296;
var res_SINGLEQUOTE_ = inst_49299;
var res = inst_49300;
var files_not_loaded = inst_49302;
var dependencies_that_loaded = inst_49304;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49299,inst_49319,inst_49321,inst_49322,inst_49323,inst_49324,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49296,inst_49302,inst_49304,inst_49300,inst_49299,inst_49319,inst_49321,inst_49322,inst_49323,inst_49324,state_val_49384,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49326 = setTimeout(inst_49325,(10));
var state_49383__$1 = (function (){var statearr_49454 = state_49383;
(statearr_49454[(33)] = inst_49319);

(statearr_49454[(34)] = inst_49324);

return statearr_49454;
})();
var statearr_49455_49518 = state_49383__$1;
(statearr_49455_49518[(2)] = inst_49326);

(statearr_49455_49518[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (16))){
var state_49383__$1 = state_49383;
var statearr_49456_49519 = state_49383__$1;
(statearr_49456_49519[(2)] = reload_dependents);

(statearr_49456_49519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (38))){
var inst_49336 = (state_49383[(16)]);
var inst_49354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49336);
var state_49383__$1 = state_49383;
var statearr_49457_49520 = state_49383__$1;
(statearr_49457_49520[(2)] = inst_49354);

(statearr_49457_49520[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (30))){
var state_49383__$1 = state_49383;
var statearr_49458_49521 = state_49383__$1;
(statearr_49458_49521[(2)] = null);

(statearr_49458_49521[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (10))){
var inst_49256 = (state_49383[(22)]);
var inst_49258 = cljs.core.chunked_seq_QMARK_.call(null,inst_49256);
var state_49383__$1 = state_49383;
if(inst_49258){
var statearr_49459_49522 = state_49383__$1;
(statearr_49459_49522[(1)] = (13));

} else {
var statearr_49460_49523 = state_49383__$1;
(statearr_49460_49523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (18))){
var inst_49290 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
if(cljs.core.truth_(inst_49290)){
var statearr_49461_49524 = state_49383__$1;
(statearr_49461_49524[(1)] = (19));

} else {
var statearr_49462_49525 = state_49383__$1;
(statearr_49462_49525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (42))){
var state_49383__$1 = state_49383;
var statearr_49463_49526 = state_49383__$1;
(statearr_49463_49526[(2)] = null);

(statearr_49463_49526[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (37))){
var inst_49349 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49464_49527 = state_49383__$1;
(statearr_49464_49527[(2)] = inst_49349);

(statearr_49464_49527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (8))){
var inst_49243 = (state_49383[(7)]);
var inst_49256 = (state_49383[(22)]);
var inst_49256__$1 = cljs.core.seq.call(null,inst_49243);
var state_49383__$1 = (function (){var statearr_49465 = state_49383;
(statearr_49465[(22)] = inst_49256__$1);

return statearr_49465;
})();
if(inst_49256__$1){
var statearr_49466_49528 = state_49383__$1;
(statearr_49466_49528[(1)] = (10));

} else {
var statearr_49467_49529 = state_49383__$1;
(statearr_49467_49529[(1)] = (11));

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
});})(c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46808__auto__,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto____0 = (function (){
var statearr_49468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49468[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto__);

(statearr_49468[(1)] = (1));

return statearr_49468;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto____1 = (function (state_49383){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_49383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e49469){if((e49469 instanceof Object)){
var ex__46812__auto__ = e49469;
var statearr_49470_49530 = state_49383;
(statearr_49470_49530[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49531 = state_49383;
state_49383 = G__49531;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto__ = function(state_49383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto____1.call(this,state_49383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46900__auto__ = (function (){var statearr_49471 = f__46899__auto__.call(null);
(statearr_49471[(6)] = c__46898__auto__);

return statearr_49471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,map__49228,map__49228__$1,opts,before_jsload,on_jsload,reload_dependents,map__49229,map__49229__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46898__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49534,link){
var map__49535 = p__49534;
var map__49535__$1 = ((((!((map__49535 == null)))?((((map__49535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49535):map__49535);
var file = cljs.core.get.call(null,map__49535__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__49535,map__49535__$1,file){
return (function (p1__49532_SHARP_,p2__49533_SHARP_){
if(cljs.core._EQ_.call(null,p1__49532_SHARP_,p2__49533_SHARP_)){
return p1__49532_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__49535,map__49535__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49538){
var map__49539 = p__49538;
var map__49539__$1 = ((((!((map__49539 == null)))?((((map__49539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49539):map__49539);
var match_length = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49537_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49537_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49541_SHARP_,p2__49542_SHARP_){
return cljs.core.assoc.call(null,p1__49541_SHARP_,cljs.core.get.call(null,p2__49542_SHARP_,key),p2__49542_SHARP_);
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
var loaded_f_datas_49543 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49543);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49543);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49544,p__49545){
var map__49546 = p__49544;
var map__49546__$1 = ((((!((map__49546 == null)))?((((map__49546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49546):map__49546);
var on_cssload = cljs.core.get.call(null,map__49546__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49547 = p__49545;
var map__49547__$1 = ((((!((map__49547 == null)))?((((map__49547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49547):map__49547);
var files_msg = map__49547__$1;
var files = cljs.core.get.call(null,map__49547__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
