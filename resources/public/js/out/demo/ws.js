// Compiled by ClojureScript 1.7.122 {}
goog.provide('demo.ws');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente');
goog.require('re_frame.core');
var map__28314_28316 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__28314_28317__$1 = ((((!((map__28314_28316 == null)))?((((map__28314_28316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28314_28316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28314_28316):map__28314_28316);
var chsk_28318 = cljs.core.get.call(null,map__28314_28317__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_28319 = cljs.core.get.call(null,map__28314_28317__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_28320 = cljs.core.get.call(null,map__28314_28317__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_28321 = cljs.core.get.call(null,map__28314_28317__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
demo.ws.chsk = chsk_28318;

demo.ws.ch_chsk = ch_recv_28319;

demo.ws.chsk_send_BANG_ = send_fn_28320;

demo.ws.chsk_state = state_28321;
if(typeof demo.ws.event_msg_handler !== 'undefined'){
} else {
demo.ws.event_msg_handler = (function (){var method_table__22618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22622__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"demo.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22622__auto__,method_table__22618__auto__,prefer_table__22619__auto__,method_cache__22620__auto__,cached_hierarchy__22621__auto__));
})();
}
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28322){
var map__28323 = p__28322;
var map__28323__$1 = ((((!((map__28323 == null)))?((((map__28323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28323):map__28323);
var ev_msg = map__28323__$1;
var event = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unandled event: %s",event);
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28325){
var map__28326 = p__28325;
var map__28326__$1 = ((((!((map__28326 == null)))?((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var ev_msg = map__28326__$1;
var _QMARK_data = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
taoensso.encore.debugf.call(null,"%s",_QMARK_data);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(_QMARK_data)], null));
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__28328){
var map__28329 = p__28328;
var map__28329__$1 = ((((!((map__28329 == null)))?((((map__28329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);
var ev_msg = map__28329__$1;
var _QMARK_data = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return null;
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__28331){
var map__28332 = p__28331;
var map__28332__$1 = ((((!((map__28332 == null)))?((((map__28332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28332):map__28332);
var ev_msg = map__28332__$1;
var _QMARK_data = cljs.core.get.call(null,map__28332__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return re_frame.core.dispatch.call(null,_QMARK_data);
}));
demo.ws.event_msg_handler_STAR_ = (function demo$ws$event_msg_handler_STAR_(p__28334){
var map__28337 = p__28334;
var map__28337__$1 = ((((!((map__28337 == null)))?((((map__28337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);
var ev_msg = map__28337__$1;
var id = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"event","event",301435442));
return demo.ws.event_msg_handler.call(null,ev_msg);
});
demo.ws.router = cljs.core.atom.call(null,null);
demo.ws.stop_router_BANG_ = (function demo$ws$stop_router_BANG_(){
var temp__4425__auto__ = cljs.core.deref.call(null,demo.ws.router);
if(cljs.core.truth_(temp__4425__auto__)){
var stop_f = temp__4425__auto__;
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