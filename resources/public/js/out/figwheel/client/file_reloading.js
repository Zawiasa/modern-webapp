// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21705__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21705__auto__){
return or__21705__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21705__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36195_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36195_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__36200 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36201 = null;
var count__36202 = (0);
var i__36203 = (0);
while(true){
if((i__36203 < count__36202)){
var n = cljs.core._nth.call(null,chunk__36201,i__36203);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36204 = seq__36200;
var G__36205 = chunk__36201;
var G__36206 = count__36202;
var G__36207 = (i__36203 + (1));
seq__36200 = G__36204;
chunk__36201 = G__36205;
count__36202 = G__36206;
i__36203 = G__36207;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36200);
if(temp__4425__auto__){
var seq__36200__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36200__$1)){
var c__22508__auto__ = cljs.core.chunk_first.call(null,seq__36200__$1);
var G__36208 = cljs.core.chunk_rest.call(null,seq__36200__$1);
var G__36209 = c__22508__auto__;
var G__36210 = cljs.core.count.call(null,c__22508__auto__);
var G__36211 = (0);
seq__36200 = G__36208;
chunk__36201 = G__36209;
count__36202 = G__36210;
i__36203 = G__36211;
continue;
} else {
var n = cljs.core.first.call(null,seq__36200__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36212 = cljs.core.next.call(null,seq__36200__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__36200 = G__36212;
chunk__36201 = G__36213;
count__36202 = G__36214;
i__36203 = G__36215;
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

var seq__36254_36261 = cljs.core.seq.call(null,deps);
var chunk__36255_36262 = null;
var count__36256_36263 = (0);
var i__36257_36264 = (0);
while(true){
if((i__36257_36264 < count__36256_36263)){
var dep_36265 = cljs.core._nth.call(null,chunk__36255_36262,i__36257_36264);
topo_sort_helper_STAR_.call(null,dep_36265,(depth + (1)),state);

var G__36266 = seq__36254_36261;
var G__36267 = chunk__36255_36262;
var G__36268 = count__36256_36263;
var G__36269 = (i__36257_36264 + (1));
seq__36254_36261 = G__36266;
chunk__36255_36262 = G__36267;
count__36256_36263 = G__36268;
i__36257_36264 = G__36269;
continue;
} else {
var temp__4425__auto___36270 = cljs.core.seq.call(null,seq__36254_36261);
if(temp__4425__auto___36270){
var seq__36254_36271__$1 = temp__4425__auto___36270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36254_36271__$1)){
var c__22508__auto___36272 = cljs.core.chunk_first.call(null,seq__36254_36271__$1);
var G__36273 = cljs.core.chunk_rest.call(null,seq__36254_36271__$1);
var G__36274 = c__22508__auto___36272;
var G__36275 = cljs.core.count.call(null,c__22508__auto___36272);
var G__36276 = (0);
seq__36254_36261 = G__36273;
chunk__36255_36262 = G__36274;
count__36256_36263 = G__36275;
i__36257_36264 = G__36276;
continue;
} else {
var dep_36277 = cljs.core.first.call(null,seq__36254_36271__$1);
topo_sort_helper_STAR_.call(null,dep_36277,(depth + (1)),state);

var G__36278 = cljs.core.next.call(null,seq__36254_36271__$1);
var G__36279 = null;
var G__36280 = (0);
var G__36281 = (0);
seq__36254_36261 = G__36278;
chunk__36255_36262 = G__36279;
count__36256_36263 = G__36280;
i__36257_36264 = G__36281;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36258){
var vec__36260 = p__36258;
var x = cljs.core.nth.call(null,vec__36260,(0),null);
var xs = cljs.core.nthnext.call(null,vec__36260,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36260,x,xs,get_deps__$1){
return (function (p1__36216_SHARP_){
return clojure.set.difference.call(null,p1__36216_SHARP_,x);
});})(vec__36260,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36294 = cljs.core.seq.call(null,provides);
var chunk__36295 = null;
var count__36296 = (0);
var i__36297 = (0);
while(true){
if((i__36297 < count__36296)){
var prov = cljs.core._nth.call(null,chunk__36295,i__36297);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36298_36306 = cljs.core.seq.call(null,requires);
var chunk__36299_36307 = null;
var count__36300_36308 = (0);
var i__36301_36309 = (0);
while(true){
if((i__36301_36309 < count__36300_36308)){
var req_36310 = cljs.core._nth.call(null,chunk__36299_36307,i__36301_36309);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36310,prov);

var G__36311 = seq__36298_36306;
var G__36312 = chunk__36299_36307;
var G__36313 = count__36300_36308;
var G__36314 = (i__36301_36309 + (1));
seq__36298_36306 = G__36311;
chunk__36299_36307 = G__36312;
count__36300_36308 = G__36313;
i__36301_36309 = G__36314;
continue;
} else {
var temp__4425__auto___36315 = cljs.core.seq.call(null,seq__36298_36306);
if(temp__4425__auto___36315){
var seq__36298_36316__$1 = temp__4425__auto___36315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36298_36316__$1)){
var c__22508__auto___36317 = cljs.core.chunk_first.call(null,seq__36298_36316__$1);
var G__36318 = cljs.core.chunk_rest.call(null,seq__36298_36316__$1);
var G__36319 = c__22508__auto___36317;
var G__36320 = cljs.core.count.call(null,c__22508__auto___36317);
var G__36321 = (0);
seq__36298_36306 = G__36318;
chunk__36299_36307 = G__36319;
count__36300_36308 = G__36320;
i__36301_36309 = G__36321;
continue;
} else {
var req_36322 = cljs.core.first.call(null,seq__36298_36316__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36322,prov);

var G__36323 = cljs.core.next.call(null,seq__36298_36316__$1);
var G__36324 = null;
var G__36325 = (0);
var G__36326 = (0);
seq__36298_36306 = G__36323;
chunk__36299_36307 = G__36324;
count__36300_36308 = G__36325;
i__36301_36309 = G__36326;
continue;
}
} else {
}
}
break;
}

var G__36327 = seq__36294;
var G__36328 = chunk__36295;
var G__36329 = count__36296;
var G__36330 = (i__36297 + (1));
seq__36294 = G__36327;
chunk__36295 = G__36328;
count__36296 = G__36329;
i__36297 = G__36330;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36294);
if(temp__4425__auto__){
var seq__36294__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36294__$1)){
var c__22508__auto__ = cljs.core.chunk_first.call(null,seq__36294__$1);
var G__36331 = cljs.core.chunk_rest.call(null,seq__36294__$1);
var G__36332 = c__22508__auto__;
var G__36333 = cljs.core.count.call(null,c__22508__auto__);
var G__36334 = (0);
seq__36294 = G__36331;
chunk__36295 = G__36332;
count__36296 = G__36333;
i__36297 = G__36334;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36294__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36302_36335 = cljs.core.seq.call(null,requires);
var chunk__36303_36336 = null;
var count__36304_36337 = (0);
var i__36305_36338 = (0);
while(true){
if((i__36305_36338 < count__36304_36337)){
var req_36339 = cljs.core._nth.call(null,chunk__36303_36336,i__36305_36338);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36339,prov);

var G__36340 = seq__36302_36335;
var G__36341 = chunk__36303_36336;
var G__36342 = count__36304_36337;
var G__36343 = (i__36305_36338 + (1));
seq__36302_36335 = G__36340;
chunk__36303_36336 = G__36341;
count__36304_36337 = G__36342;
i__36305_36338 = G__36343;
continue;
} else {
var temp__4425__auto___36344__$1 = cljs.core.seq.call(null,seq__36302_36335);
if(temp__4425__auto___36344__$1){
var seq__36302_36345__$1 = temp__4425__auto___36344__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36302_36345__$1)){
var c__22508__auto___36346 = cljs.core.chunk_first.call(null,seq__36302_36345__$1);
var G__36347 = cljs.core.chunk_rest.call(null,seq__36302_36345__$1);
var G__36348 = c__22508__auto___36346;
var G__36349 = cljs.core.count.call(null,c__22508__auto___36346);
var G__36350 = (0);
seq__36302_36335 = G__36347;
chunk__36303_36336 = G__36348;
count__36304_36337 = G__36349;
i__36305_36338 = G__36350;
continue;
} else {
var req_36351 = cljs.core.first.call(null,seq__36302_36345__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36351,prov);

var G__36352 = cljs.core.next.call(null,seq__36302_36345__$1);
var G__36353 = null;
var G__36354 = (0);
var G__36355 = (0);
seq__36302_36335 = G__36352;
chunk__36303_36336 = G__36353;
count__36304_36337 = G__36354;
i__36305_36338 = G__36355;
continue;
}
} else {
}
}
break;
}

var G__36356 = cljs.core.next.call(null,seq__36294__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__36294 = G__36356;
chunk__36295 = G__36357;
count__36296 = G__36358;
i__36297 = G__36359;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36364_36368 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36365_36369 = null;
var count__36366_36370 = (0);
var i__36367_36371 = (0);
while(true){
if((i__36367_36371 < count__36366_36370)){
var ns_36372 = cljs.core._nth.call(null,chunk__36365_36369,i__36367_36371);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36372);

var G__36373 = seq__36364_36368;
var G__36374 = chunk__36365_36369;
var G__36375 = count__36366_36370;
var G__36376 = (i__36367_36371 + (1));
seq__36364_36368 = G__36373;
chunk__36365_36369 = G__36374;
count__36366_36370 = G__36375;
i__36367_36371 = G__36376;
continue;
} else {
var temp__4425__auto___36377 = cljs.core.seq.call(null,seq__36364_36368);
if(temp__4425__auto___36377){
var seq__36364_36378__$1 = temp__4425__auto___36377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36364_36378__$1)){
var c__22508__auto___36379 = cljs.core.chunk_first.call(null,seq__36364_36378__$1);
var G__36380 = cljs.core.chunk_rest.call(null,seq__36364_36378__$1);
var G__36381 = c__22508__auto___36379;
var G__36382 = cljs.core.count.call(null,c__22508__auto___36379);
var G__36383 = (0);
seq__36364_36368 = G__36380;
chunk__36365_36369 = G__36381;
count__36366_36370 = G__36382;
i__36367_36371 = G__36383;
continue;
} else {
var ns_36384 = cljs.core.first.call(null,seq__36364_36378__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36384);

var G__36385 = cljs.core.next.call(null,seq__36364_36378__$1);
var G__36386 = null;
var G__36387 = (0);
var G__36388 = (0);
seq__36364_36368 = G__36385;
chunk__36365_36369 = G__36386;
count__36366_36370 = G__36387;
i__36367_36371 = G__36388;
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
goog.require_figwheel_backup_ = (function (){var or__21705__auto__ = goog.require__;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
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
var G__36389__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36390__i = 0, G__36390__a = new Array(arguments.length -  0);
while (G__36390__i < G__36390__a.length) {G__36390__a[G__36390__i] = arguments[G__36390__i + 0]; ++G__36390__i;}
  args = new cljs.core.IndexedSeq(G__36390__a,0);
} 
return G__36389__delegate.call(this,args);};
G__36389.cljs$lang$maxFixedArity = 0;
G__36389.cljs$lang$applyTo = (function (arglist__36391){
var args = cljs.core.seq(arglist__36391);
return G__36389__delegate(args);
});
G__36389.cljs$core$IFn$_invoke$arity$variadic = G__36389__delegate;
return G__36389;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36392 = cljs.core._EQ_;
var expr__36393 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36392.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36393))){
return ((function (pred__36392,expr__36393){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e36395){if((e36395 instanceof Error)){
var e = e36395;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36395;

}
}})());
});
;})(pred__36392,expr__36393))
} else {
if(cljs.core.truth_(pred__36392.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36393))){
return ((function (pred__36392,expr__36393){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36392,expr__36393){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36392,expr__36393))
);

return deferred.addErrback(((function (deferred,pred__36392,expr__36393){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36392,expr__36393))
);
});
;})(pred__36392,expr__36393))
} else {
return ((function (pred__36392,expr__36393){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36392,expr__36393))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36396,callback){
var map__36399 = p__36396;
var map__36399__$1 = ((((!((map__36399 == null)))?((((map__36399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36399):map__36399);
var file_msg = map__36399__$1;
var request_url = cljs.core.get.call(null,map__36399__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36399,map__36399__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36399,map__36399__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_36423){
var state_val_36424 = (state_36423[(1)]);
if((state_val_36424 === (7))){
var inst_36419 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36425_36445 = state_36423__$1;
(statearr_36425_36445[(2)] = inst_36419);

(statearr_36425_36445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (1))){
var state_36423__$1 = state_36423;
var statearr_36426_36446 = state_36423__$1;
(statearr_36426_36446[(2)] = null);

(statearr_36426_36446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (4))){
var inst_36403 = (state_36423[(7)]);
var inst_36403__$1 = (state_36423[(2)]);
var state_36423__$1 = (function (){var statearr_36427 = state_36423;
(statearr_36427[(7)] = inst_36403__$1);

return statearr_36427;
})();
if(cljs.core.truth_(inst_36403__$1)){
var statearr_36428_36447 = state_36423__$1;
(statearr_36428_36447[(1)] = (5));

} else {
var statearr_36429_36448 = state_36423__$1;
(statearr_36429_36448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (6))){
var state_36423__$1 = state_36423;
var statearr_36430_36449 = state_36423__$1;
(statearr_36430_36449[(2)] = null);

(statearr_36430_36449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (3))){
var inst_36421 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36423__$1,inst_36421);
} else {
if((state_val_36424 === (2))){
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36423__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36424 === (11))){
var inst_36415 = (state_36423[(2)]);
var state_36423__$1 = (function (){var statearr_36431 = state_36423;
(statearr_36431[(8)] = inst_36415);

return statearr_36431;
})();
var statearr_36432_36450 = state_36423__$1;
(statearr_36432_36450[(2)] = null);

(statearr_36432_36450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (9))){
var inst_36407 = (state_36423[(9)]);
var inst_36409 = (state_36423[(10)]);
var inst_36411 = inst_36409.call(null,inst_36407);
var state_36423__$1 = state_36423;
var statearr_36433_36451 = state_36423__$1;
(statearr_36433_36451[(2)] = inst_36411);

(statearr_36433_36451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (5))){
var inst_36403 = (state_36423[(7)]);
var inst_36405 = figwheel.client.file_reloading.blocking_load.call(null,inst_36403);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36423__$1,(8),inst_36405);
} else {
if((state_val_36424 === (10))){
var inst_36407 = (state_36423[(9)]);
var inst_36413 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36407);
var state_36423__$1 = state_36423;
var statearr_36434_36452 = state_36423__$1;
(statearr_36434_36452[(2)] = inst_36413);

(statearr_36434_36452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (8))){
var inst_36403 = (state_36423[(7)]);
var inst_36409 = (state_36423[(10)]);
var inst_36407 = (state_36423[(2)]);
var inst_36408 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36409__$1 = cljs.core.get.call(null,inst_36408,inst_36403);
var state_36423__$1 = (function (){var statearr_36435 = state_36423;
(statearr_36435[(9)] = inst_36407);

(statearr_36435[(10)] = inst_36409__$1);

return statearr_36435;
})();
if(cljs.core.truth_(inst_36409__$1)){
var statearr_36436_36453 = state_36423__$1;
(statearr_36436_36453[(1)] = (9));

} else {
var statearr_36437_36454 = state_36423__$1;
(statearr_36437_36454[(1)] = (10));

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
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24721__auto__ = null;
var figwheel$client$file_reloading$state_machine__24721__auto____0 = (function (){
var statearr_36441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36441[(0)] = figwheel$client$file_reloading$state_machine__24721__auto__);

(statearr_36441[(1)] = (1));

return statearr_36441;
});
var figwheel$client$file_reloading$state_machine__24721__auto____1 = (function (state_36423){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_36423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e36442){if((e36442 instanceof Object)){
var ex__24724__auto__ = e36442;
var statearr_36443_36455 = state_36423;
(statearr_36443_36455[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36456 = state_36423;
state_36423 = G__36456;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24721__auto__ = function(state_36423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24721__auto____1.call(this,state_36423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24721__auto____0;
figwheel$client$file_reloading$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24721__auto____1;
return figwheel$client$file_reloading$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_36444 = f__24786__auto__.call(null);
(statearr_36444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_36444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36457,callback){
var map__36460 = p__36457;
var map__36460__$1 = ((((!((map__36460 == null)))?((((map__36460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36460):map__36460);
var file_msg = map__36460__$1;
var namespace = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36460,map__36460__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36460,map__36460__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36462){
var map__36465 = p__36462;
var map__36465__$1 = ((((!((map__36465 == null)))?((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36465):map__36465);
var file_msg = map__36465__$1;
var namespace = cljs.core.get.call(null,map__36465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21693__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21693__auto__){
var or__21705__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var or__21705__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21705__auto____$1)){
return or__21705__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21693__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36467,callback){
var map__36470 = p__36467;
var map__36470__$1 = ((((!((map__36470 == null)))?((((map__36470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36470):map__36470);
var file_msg = map__36470__$1;
var request_url = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__24785__auto___36558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___36558,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___36558,out){
return (function (state_36540){
var state_val_36541 = (state_36540[(1)]);
if((state_val_36541 === (1))){
var inst_36518 = cljs.core.nth.call(null,files,(0),null);
var inst_36519 = cljs.core.nthnext.call(null,files,(1));
var inst_36520 = files;
var state_36540__$1 = (function (){var statearr_36542 = state_36540;
(statearr_36542[(7)] = inst_36518);

(statearr_36542[(8)] = inst_36519);

(statearr_36542[(9)] = inst_36520);

return statearr_36542;
})();
var statearr_36543_36559 = state_36540__$1;
(statearr_36543_36559[(2)] = null);

(statearr_36543_36559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (2))){
var inst_36523 = (state_36540[(10)]);
var inst_36520 = (state_36540[(9)]);
var inst_36523__$1 = cljs.core.nth.call(null,inst_36520,(0),null);
var inst_36524 = cljs.core.nthnext.call(null,inst_36520,(1));
var inst_36525 = (inst_36523__$1 == null);
var inst_36526 = cljs.core.not.call(null,inst_36525);
var state_36540__$1 = (function (){var statearr_36544 = state_36540;
(statearr_36544[(11)] = inst_36524);

(statearr_36544[(10)] = inst_36523__$1);

return statearr_36544;
})();
if(inst_36526){
var statearr_36545_36560 = state_36540__$1;
(statearr_36545_36560[(1)] = (4));

} else {
var statearr_36546_36561 = state_36540__$1;
(statearr_36546_36561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (3))){
var inst_36538 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36540__$1,inst_36538);
} else {
if((state_val_36541 === (4))){
var inst_36523 = (state_36540[(10)]);
var inst_36528 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36523);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36540__$1,(7),inst_36528);
} else {
if((state_val_36541 === (5))){
var inst_36534 = cljs.core.async.close_BANG_.call(null,out);
var state_36540__$1 = state_36540;
var statearr_36547_36562 = state_36540__$1;
(statearr_36547_36562[(2)] = inst_36534);

(statearr_36547_36562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (6))){
var inst_36536 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36548_36563 = state_36540__$1;
(statearr_36548_36563[(2)] = inst_36536);

(statearr_36548_36563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (7))){
var inst_36524 = (state_36540[(11)]);
var inst_36530 = (state_36540[(2)]);
var inst_36531 = cljs.core.async.put_BANG_.call(null,out,inst_36530);
var inst_36520 = inst_36524;
var state_36540__$1 = (function (){var statearr_36549 = state_36540;
(statearr_36549[(12)] = inst_36531);

(statearr_36549[(9)] = inst_36520);

return statearr_36549;
})();
var statearr_36550_36564 = state_36540__$1;
(statearr_36550_36564[(2)] = null);

(statearr_36550_36564[(1)] = (2));


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
});})(c__24785__auto___36558,out))
;
return ((function (switch__24720__auto__,c__24785__auto___36558,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto____0 = (function (){
var statearr_36554 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36554[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto__);

(statearr_36554[(1)] = (1));

return statearr_36554;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto____1 = (function (state_36540){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_36540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e36555){if((e36555 instanceof Object)){
var ex__24724__auto__ = e36555;
var statearr_36556_36565 = state_36540;
(statearr_36556_36565[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36566 = state_36540;
state_36540 = G__36566;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto__ = function(state_36540){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto____1.call(this,state_36540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___36558,out))
})();
var state__24787__auto__ = (function (){var statearr_36557 = f__24786__auto__.call(null);
(statearr_36557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___36558);

return statearr_36557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___36558,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36567,opts){
var map__36571 = p__36567;
var map__36571__$1 = ((((!((map__36571 == null)))?((((map__36571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36571):map__36571);
var eval_body__$1 = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21693__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21693__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21693__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36573){var e = e36573;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36574_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36574_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36579){
var vec__36580 = p__36579;
var k = cljs.core.nth.call(null,vec__36580,(0),null);
var v = cljs.core.nth.call(null,vec__36580,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36581){
var vec__36582 = p__36581;
var k = cljs.core.nth.call(null,vec__36582,(0),null);
var v = cljs.core.nth.call(null,vec__36582,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36586,p__36587){
var map__36834 = p__36586;
var map__36834__$1 = ((((!((map__36834 == null)))?((((map__36834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36834):map__36834);
var opts = map__36834__$1;
var before_jsload = cljs.core.get.call(null,map__36834__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36834__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36834__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36835 = p__36587;
var map__36835__$1 = ((((!((map__36835 == null)))?((((map__36835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36835):map__36835);
var msg = map__36835__$1;
var files = cljs.core.get.call(null,map__36835__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36835__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36835__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36988){
var state_val_36989 = (state_36988[(1)]);
if((state_val_36989 === (7))){
var inst_36849 = (state_36988[(7)]);
var inst_36852 = (state_36988[(8)]);
var inst_36851 = (state_36988[(9)]);
var inst_36850 = (state_36988[(10)]);
var inst_36857 = cljs.core._nth.call(null,inst_36850,inst_36852);
var inst_36858 = figwheel.client.file_reloading.eval_body.call(null,inst_36857,opts);
var inst_36859 = (inst_36852 + (1));
var tmp36990 = inst_36849;
var tmp36991 = inst_36851;
var tmp36992 = inst_36850;
var inst_36849__$1 = tmp36990;
var inst_36850__$1 = tmp36992;
var inst_36851__$1 = tmp36991;
var inst_36852__$1 = inst_36859;
var state_36988__$1 = (function (){var statearr_36993 = state_36988;
(statearr_36993[(7)] = inst_36849__$1);

(statearr_36993[(8)] = inst_36852__$1);

(statearr_36993[(9)] = inst_36851__$1);

(statearr_36993[(10)] = inst_36850__$1);

(statearr_36993[(11)] = inst_36858);

return statearr_36993;
})();
var statearr_36994_37080 = state_36988__$1;
(statearr_36994_37080[(2)] = null);

(statearr_36994_37080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (20))){
var inst_36892 = (state_36988[(12)]);
var inst_36900 = figwheel.client.file_reloading.sort_files.call(null,inst_36892);
var state_36988__$1 = state_36988;
var statearr_36995_37081 = state_36988__$1;
(statearr_36995_37081[(2)] = inst_36900);

(statearr_36995_37081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (27))){
var state_36988__$1 = state_36988;
var statearr_36996_37082 = state_36988__$1;
(statearr_36996_37082[(2)] = null);

(statearr_36996_37082[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (1))){
var inst_36841 = (state_36988[(13)]);
var inst_36838 = before_jsload.call(null,files);
var inst_36839 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36840 = (function (){return ((function (inst_36841,inst_36838,inst_36839,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36583_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36583_SHARP_);
});
;})(inst_36841,inst_36838,inst_36839,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36841__$1 = cljs.core.filter.call(null,inst_36840,files);
var inst_36842 = cljs.core.not_empty.call(null,inst_36841__$1);
var state_36988__$1 = (function (){var statearr_36997 = state_36988;
(statearr_36997[(14)] = inst_36839);

(statearr_36997[(13)] = inst_36841__$1);

(statearr_36997[(15)] = inst_36838);

return statearr_36997;
})();
if(cljs.core.truth_(inst_36842)){
var statearr_36998_37083 = state_36988__$1;
(statearr_36998_37083[(1)] = (2));

} else {
var statearr_36999_37084 = state_36988__$1;
(statearr_36999_37084[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (24))){
var state_36988__$1 = state_36988;
var statearr_37000_37085 = state_36988__$1;
(statearr_37000_37085[(2)] = null);

(statearr_37000_37085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (39))){
var inst_36942 = (state_36988[(16)]);
var state_36988__$1 = state_36988;
var statearr_37001_37086 = state_36988__$1;
(statearr_37001_37086[(2)] = inst_36942);

(statearr_37001_37086[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (46))){
var inst_36983 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
var statearr_37002_37087 = state_36988__$1;
(statearr_37002_37087[(2)] = inst_36983);

(statearr_37002_37087[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (4))){
var inst_36886 = (state_36988[(2)]);
var inst_36887 = cljs.core.List.EMPTY;
var inst_36888 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36887);
var inst_36889 = (function (){return ((function (inst_36886,inst_36887,inst_36888,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36584_SHARP_){
var and__21693__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36584_SHARP_);
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36584_SHARP_));
} else {
return and__21693__auto__;
}
});
;})(inst_36886,inst_36887,inst_36888,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36890 = cljs.core.filter.call(null,inst_36889,files);
var inst_36891 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36892 = cljs.core.concat.call(null,inst_36890,inst_36891);
var state_36988__$1 = (function (){var statearr_37003 = state_36988;
(statearr_37003[(17)] = inst_36886);

(statearr_37003[(18)] = inst_36888);

(statearr_37003[(12)] = inst_36892);

return statearr_37003;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37004_37088 = state_36988__$1;
(statearr_37004_37088[(1)] = (16));

} else {
var statearr_37005_37089 = state_36988__$1;
(statearr_37005_37089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (15))){
var inst_36876 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
var statearr_37006_37090 = state_36988__$1;
(statearr_37006_37090[(2)] = inst_36876);

(statearr_37006_37090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (21))){
var inst_36902 = (state_36988[(19)]);
var inst_36902__$1 = (state_36988[(2)]);
var inst_36903 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36902__$1);
var state_36988__$1 = (function (){var statearr_37007 = state_36988;
(statearr_37007[(19)] = inst_36902__$1);

return statearr_37007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36988__$1,(22),inst_36903);
} else {
if((state_val_36989 === (31))){
var inst_36986 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36988__$1,inst_36986);
} else {
if((state_val_36989 === (32))){
var inst_36942 = (state_36988[(16)]);
var inst_36947 = inst_36942.cljs$lang$protocol_mask$partition0$;
var inst_36948 = (inst_36947 & (64));
var inst_36949 = inst_36942.cljs$core$ISeq$;
var inst_36950 = (inst_36948) || (inst_36949);
var state_36988__$1 = state_36988;
if(cljs.core.truth_(inst_36950)){
var statearr_37008_37091 = state_36988__$1;
(statearr_37008_37091[(1)] = (35));

} else {
var statearr_37009_37092 = state_36988__$1;
(statearr_37009_37092[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (40))){
var inst_36963 = (state_36988[(20)]);
var inst_36962 = (state_36988[(2)]);
var inst_36963__$1 = cljs.core.get.call(null,inst_36962,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36964 = cljs.core.get.call(null,inst_36962,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36965 = cljs.core.not_empty.call(null,inst_36963__$1);
var state_36988__$1 = (function (){var statearr_37010 = state_36988;
(statearr_37010[(21)] = inst_36964);

(statearr_37010[(20)] = inst_36963__$1);

return statearr_37010;
})();
if(cljs.core.truth_(inst_36965)){
var statearr_37011_37093 = state_36988__$1;
(statearr_37011_37093[(1)] = (41));

} else {
var statearr_37012_37094 = state_36988__$1;
(statearr_37012_37094[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (33))){
var state_36988__$1 = state_36988;
var statearr_37013_37095 = state_36988__$1;
(statearr_37013_37095[(2)] = false);

(statearr_37013_37095[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (13))){
var inst_36862 = (state_36988[(22)]);
var inst_36866 = cljs.core.chunk_first.call(null,inst_36862);
var inst_36867 = cljs.core.chunk_rest.call(null,inst_36862);
var inst_36868 = cljs.core.count.call(null,inst_36866);
var inst_36849 = inst_36867;
var inst_36850 = inst_36866;
var inst_36851 = inst_36868;
var inst_36852 = (0);
var state_36988__$1 = (function (){var statearr_37014 = state_36988;
(statearr_37014[(7)] = inst_36849);

(statearr_37014[(8)] = inst_36852);

(statearr_37014[(9)] = inst_36851);

(statearr_37014[(10)] = inst_36850);

return statearr_37014;
})();
var statearr_37015_37096 = state_36988__$1;
(statearr_37015_37096[(2)] = null);

(statearr_37015_37096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (22))){
var inst_36910 = (state_36988[(23)]);
var inst_36905 = (state_36988[(24)]);
var inst_36902 = (state_36988[(19)]);
var inst_36906 = (state_36988[(25)]);
var inst_36905__$1 = (state_36988[(2)]);
var inst_36906__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36905__$1);
var inst_36907 = (function (){var all_files = inst_36902;
var res_SINGLEQUOTE_ = inst_36905__$1;
var res = inst_36906__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36910,inst_36905,inst_36902,inst_36906,inst_36905__$1,inst_36906__$1,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36585_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36585_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36910,inst_36905,inst_36902,inst_36906,inst_36905__$1,inst_36906__$1,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36908 = cljs.core.filter.call(null,inst_36907,inst_36905__$1);
var inst_36909 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36910__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36909);
var inst_36911 = cljs.core.not_empty.call(null,inst_36910__$1);
var state_36988__$1 = (function (){var statearr_37016 = state_36988;
(statearr_37016[(23)] = inst_36910__$1);

(statearr_37016[(24)] = inst_36905__$1);

(statearr_37016[(25)] = inst_36906__$1);

(statearr_37016[(26)] = inst_36908);

return statearr_37016;
})();
if(cljs.core.truth_(inst_36911)){
var statearr_37017_37097 = state_36988__$1;
(statearr_37017_37097[(1)] = (23));

} else {
var statearr_37018_37098 = state_36988__$1;
(statearr_37018_37098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (36))){
var state_36988__$1 = state_36988;
var statearr_37019_37099 = state_36988__$1;
(statearr_37019_37099[(2)] = false);

(statearr_37019_37099[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (41))){
var inst_36963 = (state_36988[(20)]);
var inst_36967 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36968 = cljs.core.map.call(null,inst_36967,inst_36963);
var inst_36969 = cljs.core.pr_str.call(null,inst_36968);
var inst_36970 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36969)].join('');
var inst_36971 = figwheel.client.utils.log.call(null,inst_36970);
var state_36988__$1 = state_36988;
var statearr_37020_37100 = state_36988__$1;
(statearr_37020_37100[(2)] = inst_36971);

(statearr_37020_37100[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (43))){
var inst_36964 = (state_36988[(21)]);
var inst_36974 = (state_36988[(2)]);
var inst_36975 = cljs.core.not_empty.call(null,inst_36964);
var state_36988__$1 = (function (){var statearr_37021 = state_36988;
(statearr_37021[(27)] = inst_36974);

return statearr_37021;
})();
if(cljs.core.truth_(inst_36975)){
var statearr_37022_37101 = state_36988__$1;
(statearr_37022_37101[(1)] = (44));

} else {
var statearr_37023_37102 = state_36988__$1;
(statearr_37023_37102[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (29))){
var inst_36910 = (state_36988[(23)]);
var inst_36905 = (state_36988[(24)]);
var inst_36902 = (state_36988[(19)]);
var inst_36906 = (state_36988[(25)]);
var inst_36942 = (state_36988[(16)]);
var inst_36908 = (state_36988[(26)]);
var inst_36938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36941 = (function (){var all_files = inst_36902;
var res_SINGLEQUOTE_ = inst_36905;
var res = inst_36906;
var files_not_loaded = inst_36908;
var dependencies_that_loaded = inst_36910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36942,inst_36908,inst_36938,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36940){
var map__37024 = p__36940;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var namespace = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36942,inst_36908,inst_36938,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36942__$1 = cljs.core.group_by.call(null,inst_36941,inst_36908);
var inst_36944 = (inst_36942__$1 == null);
var inst_36945 = cljs.core.not.call(null,inst_36944);
var state_36988__$1 = (function (){var statearr_37026 = state_36988;
(statearr_37026[(28)] = inst_36938);

(statearr_37026[(16)] = inst_36942__$1);

return statearr_37026;
})();
if(inst_36945){
var statearr_37027_37103 = state_36988__$1;
(statearr_37027_37103[(1)] = (32));

} else {
var statearr_37028_37104 = state_36988__$1;
(statearr_37028_37104[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (44))){
var inst_36964 = (state_36988[(21)]);
var inst_36977 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36964);
var inst_36978 = cljs.core.pr_str.call(null,inst_36977);
var inst_36979 = [cljs.core.str("not required: "),cljs.core.str(inst_36978)].join('');
var inst_36980 = figwheel.client.utils.log.call(null,inst_36979);
var state_36988__$1 = state_36988;
var statearr_37029_37105 = state_36988__$1;
(statearr_37029_37105[(2)] = inst_36980);

(statearr_37029_37105[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (6))){
var inst_36883 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
var statearr_37030_37106 = state_36988__$1;
(statearr_37030_37106[(2)] = inst_36883);

(statearr_37030_37106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (28))){
var inst_36908 = (state_36988[(26)]);
var inst_36935 = (state_36988[(2)]);
var inst_36936 = cljs.core.not_empty.call(null,inst_36908);
var state_36988__$1 = (function (){var statearr_37031 = state_36988;
(statearr_37031[(29)] = inst_36935);

return statearr_37031;
})();
if(cljs.core.truth_(inst_36936)){
var statearr_37032_37107 = state_36988__$1;
(statearr_37032_37107[(1)] = (29));

} else {
var statearr_37033_37108 = state_36988__$1;
(statearr_37033_37108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (25))){
var inst_36906 = (state_36988[(25)]);
var inst_36922 = (state_36988[(2)]);
var inst_36923 = cljs.core.not_empty.call(null,inst_36906);
var state_36988__$1 = (function (){var statearr_37034 = state_36988;
(statearr_37034[(30)] = inst_36922);

return statearr_37034;
})();
if(cljs.core.truth_(inst_36923)){
var statearr_37035_37109 = state_36988__$1;
(statearr_37035_37109[(1)] = (26));

} else {
var statearr_37036_37110 = state_36988__$1;
(statearr_37036_37110[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (34))){
var inst_36957 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
if(cljs.core.truth_(inst_36957)){
var statearr_37037_37111 = state_36988__$1;
(statearr_37037_37111[(1)] = (38));

} else {
var statearr_37038_37112 = state_36988__$1;
(statearr_37038_37112[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (17))){
var state_36988__$1 = state_36988;
var statearr_37039_37113 = state_36988__$1;
(statearr_37039_37113[(2)] = recompile_dependents);

(statearr_37039_37113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (3))){
var state_36988__$1 = state_36988;
var statearr_37040_37114 = state_36988__$1;
(statearr_37040_37114[(2)] = null);

(statearr_37040_37114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (12))){
var inst_36879 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
var statearr_37041_37115 = state_36988__$1;
(statearr_37041_37115[(2)] = inst_36879);

(statearr_37041_37115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (2))){
var inst_36841 = (state_36988[(13)]);
var inst_36848 = cljs.core.seq.call(null,inst_36841);
var inst_36849 = inst_36848;
var inst_36850 = null;
var inst_36851 = (0);
var inst_36852 = (0);
var state_36988__$1 = (function (){var statearr_37042 = state_36988;
(statearr_37042[(7)] = inst_36849);

(statearr_37042[(8)] = inst_36852);

(statearr_37042[(9)] = inst_36851);

(statearr_37042[(10)] = inst_36850);

return statearr_37042;
})();
var statearr_37043_37116 = state_36988__$1;
(statearr_37043_37116[(2)] = null);

(statearr_37043_37116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (23))){
var inst_36910 = (state_36988[(23)]);
var inst_36905 = (state_36988[(24)]);
var inst_36902 = (state_36988[(19)]);
var inst_36906 = (state_36988[(25)]);
var inst_36908 = (state_36988[(26)]);
var inst_36913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36915 = (function (){var all_files = inst_36902;
var res_SINGLEQUOTE_ = inst_36905;
var res = inst_36906;
var files_not_loaded = inst_36908;
var dependencies_that_loaded = inst_36910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36908,inst_36913,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36914){
var map__37044 = p__36914;
var map__37044__$1 = ((((!((map__37044 == null)))?((((map__37044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37044):map__37044);
var request_url = cljs.core.get.call(null,map__37044__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36908,inst_36913,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36916 = cljs.core.reverse.call(null,inst_36910);
var inst_36917 = cljs.core.map.call(null,inst_36915,inst_36916);
var inst_36918 = cljs.core.pr_str.call(null,inst_36917);
var inst_36919 = figwheel.client.utils.log.call(null,inst_36918);
var state_36988__$1 = (function (){var statearr_37046 = state_36988;
(statearr_37046[(31)] = inst_36913);

return statearr_37046;
})();
var statearr_37047_37117 = state_36988__$1;
(statearr_37047_37117[(2)] = inst_36919);

(statearr_37047_37117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (35))){
var state_36988__$1 = state_36988;
var statearr_37048_37118 = state_36988__$1;
(statearr_37048_37118[(2)] = true);

(statearr_37048_37118[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (19))){
var inst_36892 = (state_36988[(12)]);
var inst_36898 = figwheel.client.file_reloading.expand_files.call(null,inst_36892);
var state_36988__$1 = state_36988;
var statearr_37049_37119 = state_36988__$1;
(statearr_37049_37119[(2)] = inst_36898);

(statearr_37049_37119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (11))){
var state_36988__$1 = state_36988;
var statearr_37050_37120 = state_36988__$1;
(statearr_37050_37120[(2)] = null);

(statearr_37050_37120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (9))){
var inst_36881 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
var statearr_37051_37121 = state_36988__$1;
(statearr_37051_37121[(2)] = inst_36881);

(statearr_37051_37121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (5))){
var inst_36852 = (state_36988[(8)]);
var inst_36851 = (state_36988[(9)]);
var inst_36854 = (inst_36852 < inst_36851);
var inst_36855 = inst_36854;
var state_36988__$1 = state_36988;
if(cljs.core.truth_(inst_36855)){
var statearr_37052_37122 = state_36988__$1;
(statearr_37052_37122[(1)] = (7));

} else {
var statearr_37053_37123 = state_36988__$1;
(statearr_37053_37123[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (14))){
var inst_36862 = (state_36988[(22)]);
var inst_36871 = cljs.core.first.call(null,inst_36862);
var inst_36872 = figwheel.client.file_reloading.eval_body.call(null,inst_36871,opts);
var inst_36873 = cljs.core.next.call(null,inst_36862);
var inst_36849 = inst_36873;
var inst_36850 = null;
var inst_36851 = (0);
var inst_36852 = (0);
var state_36988__$1 = (function (){var statearr_37054 = state_36988;
(statearr_37054[(7)] = inst_36849);

(statearr_37054[(8)] = inst_36852);

(statearr_37054[(32)] = inst_36872);

(statearr_37054[(9)] = inst_36851);

(statearr_37054[(10)] = inst_36850);

return statearr_37054;
})();
var statearr_37055_37124 = state_36988__$1;
(statearr_37055_37124[(2)] = null);

(statearr_37055_37124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (45))){
var state_36988__$1 = state_36988;
var statearr_37056_37125 = state_36988__$1;
(statearr_37056_37125[(2)] = null);

(statearr_37056_37125[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (26))){
var inst_36910 = (state_36988[(23)]);
var inst_36905 = (state_36988[(24)]);
var inst_36902 = (state_36988[(19)]);
var inst_36906 = (state_36988[(25)]);
var inst_36908 = (state_36988[(26)]);
var inst_36925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36927 = (function (){var all_files = inst_36902;
var res_SINGLEQUOTE_ = inst_36905;
var res = inst_36906;
var files_not_loaded = inst_36908;
var dependencies_that_loaded = inst_36910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36908,inst_36925,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36926){
var map__37057 = p__36926;
var map__37057__$1 = ((((!((map__37057 == null)))?((((map__37057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37057):map__37057);
var namespace = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36908,inst_36925,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36928 = cljs.core.map.call(null,inst_36927,inst_36906);
var inst_36929 = cljs.core.pr_str.call(null,inst_36928);
var inst_36930 = figwheel.client.utils.log.call(null,inst_36929);
var inst_36931 = (function (){var all_files = inst_36902;
var res_SINGLEQUOTE_ = inst_36905;
var res = inst_36906;
var files_not_loaded = inst_36908;
var dependencies_that_loaded = inst_36910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36908,inst_36925,inst_36927,inst_36928,inst_36929,inst_36930,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36910,inst_36905,inst_36902,inst_36906,inst_36908,inst_36925,inst_36927,inst_36928,inst_36929,inst_36930,state_val_36989,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36932 = setTimeout(inst_36931,(10));
var state_36988__$1 = (function (){var statearr_37059 = state_36988;
(statearr_37059[(33)] = inst_36930);

(statearr_37059[(34)] = inst_36925);

return statearr_37059;
})();
var statearr_37060_37126 = state_36988__$1;
(statearr_37060_37126[(2)] = inst_36932);

(statearr_37060_37126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (16))){
var state_36988__$1 = state_36988;
var statearr_37061_37127 = state_36988__$1;
(statearr_37061_37127[(2)] = reload_dependents);

(statearr_37061_37127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (38))){
var inst_36942 = (state_36988[(16)]);
var inst_36959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36942);
var state_36988__$1 = state_36988;
var statearr_37062_37128 = state_36988__$1;
(statearr_37062_37128[(2)] = inst_36959);

(statearr_37062_37128[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (30))){
var state_36988__$1 = state_36988;
var statearr_37063_37129 = state_36988__$1;
(statearr_37063_37129[(2)] = null);

(statearr_37063_37129[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (10))){
var inst_36862 = (state_36988[(22)]);
var inst_36864 = cljs.core.chunked_seq_QMARK_.call(null,inst_36862);
var state_36988__$1 = state_36988;
if(inst_36864){
var statearr_37064_37130 = state_36988__$1;
(statearr_37064_37130[(1)] = (13));

} else {
var statearr_37065_37131 = state_36988__$1;
(statearr_37065_37131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (18))){
var inst_36896 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
if(cljs.core.truth_(inst_36896)){
var statearr_37066_37132 = state_36988__$1;
(statearr_37066_37132[(1)] = (19));

} else {
var statearr_37067_37133 = state_36988__$1;
(statearr_37067_37133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (42))){
var state_36988__$1 = state_36988;
var statearr_37068_37134 = state_36988__$1;
(statearr_37068_37134[(2)] = null);

(statearr_37068_37134[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (37))){
var inst_36954 = (state_36988[(2)]);
var state_36988__$1 = state_36988;
var statearr_37069_37135 = state_36988__$1;
(statearr_37069_37135[(2)] = inst_36954);

(statearr_37069_37135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36989 === (8))){
var inst_36849 = (state_36988[(7)]);
var inst_36862 = (state_36988[(22)]);
var inst_36862__$1 = cljs.core.seq.call(null,inst_36849);
var state_36988__$1 = (function (){var statearr_37070 = state_36988;
(statearr_37070[(22)] = inst_36862__$1);

return statearr_37070;
})();
if(inst_36862__$1){
var statearr_37071_37136 = state_36988__$1;
(statearr_37071_37136[(1)] = (10));

} else {
var statearr_37072_37137 = state_36988__$1;
(statearr_37072_37137[(1)] = (11));

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
});})(c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24720__auto__,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto____0 = (function (){
var statearr_37076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37076[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto__);

(statearr_37076[(1)] = (1));

return statearr_37076;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto____1 = (function (state_36988){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_36988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e37077){if((e37077 instanceof Object)){
var ex__24724__auto__ = e37077;
var statearr_37078_37138 = state_36988;
(statearr_37078_37138[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37139 = state_36988;
state_36988 = G__37139;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto__ = function(state_36988){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto____1.call(this,state_36988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24787__auto__ = (function (){var statearr_37079 = f__24786__auto__.call(null);
(statearr_37079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_37079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__,map__36834,map__36834__$1,opts,before_jsload,on_jsload,reload_dependents,map__36835,map__36835__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24785__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37142,link){
var map__37145 = p__37142;
var map__37145__$1 = ((((!((map__37145 == null)))?((((map__37145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37145):map__37145);
var file = cljs.core.get.call(null,map__37145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__37145,map__37145__$1,file){
return (function (p1__37140_SHARP_,p2__37141_SHARP_){
if(cljs.core._EQ_.call(null,p1__37140_SHARP_,p2__37141_SHARP_)){
return p1__37140_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__37145,map__37145__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37151){
var map__37152 = p__37151;
var map__37152__$1 = ((((!((map__37152 == null)))?((((map__37152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37152):map__37152);
var match_length = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37147_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37147_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37154 = [];
var len__22763__auto___37157 = arguments.length;
var i__22764__auto___37158 = (0);
while(true){
if((i__22764__auto___37158 < len__22763__auto___37157)){
args37154.push((arguments[i__22764__auto___37158]));

var G__37159 = (i__22764__auto___37158 + (1));
i__22764__auto___37158 = G__37159;
continue;
} else {
}
break;
}

var G__37156 = args37154.length;
switch (G__37156) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37154.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37161_SHARP_,p2__37162_SHARP_){
return cljs.core.assoc.call(null,p1__37161_SHARP_,cljs.core.get.call(null,p2__37162_SHARP_,key),p2__37162_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37163){
var map__37166 = p__37163;
var map__37166__$1 = ((((!((map__37166 == null)))?((((map__37166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37166):map__37166);
var f_data = map__37166__$1;
var file = cljs.core.get.call(null,map__37166__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37168,files_msg){
var map__37175 = p__37168;
var map__37175__$1 = ((((!((map__37175 == null)))?((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175):map__37175);
var opts = map__37175__$1;
var on_cssload = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37177_37181 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37178_37182 = null;
var count__37179_37183 = (0);
var i__37180_37184 = (0);
while(true){
if((i__37180_37184 < count__37179_37183)){
var f_37185 = cljs.core._nth.call(null,chunk__37178_37182,i__37180_37184);
figwheel.client.file_reloading.reload_css_file.call(null,f_37185);

var G__37186 = seq__37177_37181;
var G__37187 = chunk__37178_37182;
var G__37188 = count__37179_37183;
var G__37189 = (i__37180_37184 + (1));
seq__37177_37181 = G__37186;
chunk__37178_37182 = G__37187;
count__37179_37183 = G__37188;
i__37180_37184 = G__37189;
continue;
} else {
var temp__4425__auto___37190 = cljs.core.seq.call(null,seq__37177_37181);
if(temp__4425__auto___37190){
var seq__37177_37191__$1 = temp__4425__auto___37190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177_37191__$1)){
var c__22508__auto___37192 = cljs.core.chunk_first.call(null,seq__37177_37191__$1);
var G__37193 = cljs.core.chunk_rest.call(null,seq__37177_37191__$1);
var G__37194 = c__22508__auto___37192;
var G__37195 = cljs.core.count.call(null,c__22508__auto___37192);
var G__37196 = (0);
seq__37177_37181 = G__37193;
chunk__37178_37182 = G__37194;
count__37179_37183 = G__37195;
i__37180_37184 = G__37196;
continue;
} else {
var f_37197 = cljs.core.first.call(null,seq__37177_37191__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37197);

var G__37198 = cljs.core.next.call(null,seq__37177_37191__$1);
var G__37199 = null;
var G__37200 = (0);
var G__37201 = (0);
seq__37177_37181 = G__37198;
chunk__37178_37182 = G__37199;
count__37179_37183 = G__37200;
i__37180_37184 = G__37201;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37175,map__37175__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37175,map__37175__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map