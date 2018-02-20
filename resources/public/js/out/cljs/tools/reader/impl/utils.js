// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$.call(null,x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41357__auto__,k__41358__auto__){
var self__ = this;
var this__41357__auto____$1 = this;
return this__41357__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41358__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41359__auto__,k42367,else__41360__auto__){
var self__ = this;
var this__41359__auto____$1 = this;
var G__42371 = k42367;
var G__42371__$1 = (((G__42371 instanceof cljs.core.Keyword))?G__42371.fqn:null);
switch (G__42371__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42367,else__41360__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41371__auto__,writer__41372__auto__,opts__41373__auto__){
var self__ = this;
var this__41371__auto____$1 = this;
var pr_pair__41374__auto__ = ((function (this__41371__auto____$1){
return (function (keyval__41375__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,cljs.core.pr_writer,""," ","",opts__41373__auto__,keyval__41375__auto__);
});})(this__41371__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41372__auto__,pr_pair__41374__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__41373__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42366){
var self__ = this;
var G__42366__$1 = this;
return (new cljs.core.RecordIter((0),G__42366__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41355__auto__){
var self__ = this;
var this__41355__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41352__auto__){
var self__ = this;
var this__41352__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41361__auto__){
var self__ = this;
var this__41361__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41353__auto__){
var self__ = this;
var this__41353__auto____$1 = this;
var h__41125__auto__ = self__.__hash;
if(!((h__41125__auto__ == null))){
return h__41125__auto__;
} else {
var h__41125__auto____$1 = ((function (h__41125__auto__,this__41353__auto____$1){
return (function (coll__41354__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll.call(null,coll__41354__auto__));
});})(h__41125__auto__,this__41353__auto____$1))
.call(null,this__41353__auto____$1);
self__.__hash = h__41125__auto____$1;

return h__41125__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42368,other42369){
var self__ = this;
var this42368__$1 = this;
return (!((other42369 == null))) && ((this42368__$1.constructor === other42369.constructor)) && (cljs.core._EQ_.call(null,this42368__$1.splicing_QMARK_,other42369.splicing_QMARK_)) && (cljs.core._EQ_.call(null,this42368__$1.form,other42369.form)) && (cljs.core._EQ_.call(null,this42368__$1.__extmap,other42369.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41366__auto__,k__41367__auto__){
var self__ = this;
var this__41366__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__41367__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41366__auto____$1),self__.__meta),k__41367__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41367__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41364__auto__,k__41365__auto__,G__42366){
var self__ = this;
var this__41364__auto____$1 = this;
var pred__42372 = cljs.core.keyword_identical_QMARK_;
var expr__42373 = k__41365__auto__;
if(cljs.core.truth_(pred__42372.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__42373))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__42366,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42372.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__42373))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__42366,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41365__auto__,G__42366),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41369__auto__){
var self__ = this;
var this__41369__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41356__auto__,G__42366){
var self__ = this;
var this__41356__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__42366,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41362__auto__,entry__41363__auto__){
var self__ = this;
var this__41362__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41363__auto__)){
return this__41362__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41363__auto__,(0)),cljs.core._nth.call(null,entry__41363__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41362__auto____$1,entry__41363__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__41395__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__41395__auto__,writer__41396__auto__){
return cljs.core._write.call(null,writer__41396__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__42370){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__42370),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__42370),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42370,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write.call(null,writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null,(0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.call(null,cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__41551__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__42376(s__42377){
return (new cljs.core.LazySeq(null,(function (){
var s__42377__$1 = s__42377;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42377__$1);
if(temp__5457__auto__){
var s__42377__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42377__$2)){
var c__41549__auto__ = cljs.core.chunk_first.call(null,s__42377__$2);
var size__41550__auto__ = cljs.core.count.call(null,c__41549__auto__);
var b__42379 = cljs.core.chunk_buffer.call(null,size__41550__auto__);
if((function (){var i__42378 = (0);
while(true){
if((i__42378 < size__41550__auto__)){
var key = cljs.core._nth.call(null,c__41549__auto__,i__42378);
cljs.core.chunk_append.call(null,b__42379,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__42380 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__42380,(0),null);
var key_name = cljs.core.nth.call(null,vec__42380,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key));

var G__42386 = (i__42378 + (1));
i__42378 = G__42386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42379),cljs$tools$reader$impl$utils$namespace_keys_$_iter__42376.call(null,cljs.core.chunk_rest.call(null,s__42377__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42379),null);
}
} else {
var key = cljs.core.first.call(null,s__42377__$2);
return cljs.core.cons.call(null,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__42383 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__42383,(0),null);
var key_name = cljs.core.nth.call(null,vec__42383,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__42376.call(null,cljs.core.rest.call(null,s__42377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41551__auto__.call(null,keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__42387){
var vec__42388 = p__42387;
var a = cljs.core.nth.call(null,vec__42388,(0),null);
var b = cljs.core.nth.call(null,vec__42388,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

//# sourceMappingURL=utils.js.map
