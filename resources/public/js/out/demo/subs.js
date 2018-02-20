// Compiled by ClojureScript 1.9.946 {}
goog.provide('demo.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,p__45661){
var vec__45662 = p__45661;
var _ = cljs.core.nth.call(null,vec__45662,(0),null);
var the_key = cljs.core.nth.call(null,vec__45662,(1),null);
return cljs.core.get.call(null,db,cljs.core.keyword.call(null,the_key));
}));

//# sourceMappingURL=subs.js.map
