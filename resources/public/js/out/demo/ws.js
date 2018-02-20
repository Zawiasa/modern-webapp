// Compiled by ClojureScript 1.9.946 {}
goog.provide('demo.ws');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente');
goog.require('re_frame.core');
var map__39776_39778 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__39776_39779__$1 = ((((!((map__39776_39778 == null)))?((((map__39776_39778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39776_39778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39776_39778):map__39776_39778);
var chsk_39780 = cljs.core.get.call(null,map__39776_39779__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_39781 = cljs.core.get.call(null,map__39776_39779__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_39782 = cljs.core.get.call(null,map__39776_39779__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_39783 = cljs.core.get.call(null,map__39776_39779__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
demo.ws.chsk = chsk_39780;

demo.ws.ch_chsk = ch_recv_39781;

demo.ws.chsk_send_BANG_ = send_fn_39782;

demo.ws.chsk_state = state_39783;
if(typeof demo.ws.event_msg_handler !== 'undefined'){
} else {
demo.ws.event_msg_handler = (function (){var method_table__36553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36557__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"demo.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36557__auto__,method_table__36553__auto__,prefer_table__36554__auto__,method_cache__36555__auto__,cached_hierarchy__36556__auto__));
})();
}
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__39784){
var map__39785 = p__39784;
var map__39785__$1 = ((((!((map__39785 == null)))?((((map__39785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39785):map__39785);
var ev_msg = map__39785__$1;
var event = cljs.core.get.call(null,map__39785__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unandled event: %s",event);
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__39787){
var map__39788 = p__39787;
var map__39788__$1 = ((((!((map__39788 == null)))?((((map__39788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39788):map__39788);
var ev_msg = map__39788__$1;
var _QMARK_data = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
taoensso.encore.debugf.call(null,"%s",_QMARK_data);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(_QMARK_data)], null));
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__39790){
var map__39791 = p__39790;
var map__39791__$1 = ((((!((map__39791 == null)))?((((map__39791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39791):map__39791);
var ev_msg = map__39791__$1;
var _QMARK_data = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return null;
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__39793){
var map__39794 = p__39793;
var map__39794__$1 = ((((!((map__39794 == null)))?((((map__39794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39794):map__39794);
var ev_msg = map__39794__$1;
var _QMARK_data = cljs.core.get.call(null,map__39794__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return re_frame.core.dispatch.call(null,_QMARK_data);
}));
demo.ws.event_msg_handler_STAR_ = (function demo$ws$event_msg_handler_STAR_(p__39796){
var map__39797 = p__39796;
var map__39797__$1 = ((((!((map__39797 == null)))?((((map__39797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39797):map__39797);
var ev_msg = map__39797__$1;
var id = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"event","event",301435442));
return demo.ws.event_msg_handler.call(null,ev_msg);
});
demo.ws.router = cljs.core.atom.call(null,null);
demo.ws.stop_router_BANG_ = (function demo$ws$stop_router_BANG_(){
var temp__5457__auto__ = cljs.core.deref.call(null,demo.ws.router);
if(cljs.core.truth_(temp__5457__auto__)){
var stop_f = temp__5457__auto__;
return stop_f.call(null);
} else {
return null;
}
});
demo.ws.start_router_BANG_ = (function demo$ws$start_router_BANG_(){
demo.ws.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,demo.ws.router,taoensso.sente.start_chsk_router_BANG_.call(null,demo.ws.ch_chsk,demo.ws.event_msg_handler_STAR_));
});

//# sourceMappingURL=ws.js.map
