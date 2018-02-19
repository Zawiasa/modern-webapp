// Compiled by ClojureScript 1.7.122 {}
goog.provide('demo.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.encore');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword("ws","connected","ws/connected",-169836913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map