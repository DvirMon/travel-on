"use strict";(self.webpackChunktravel_on=self.webpackChunktravel_on||[]).push([[452],{1452:(_,E,o)=>{o.r(E),o.d(E,{PlacesComponent:()=>q});var r=o(1368),t=o(4496),v=o(3364),S=o(4872),k=o(7072),y=o(7236),p=o(7532),P=o(8184);const M=(0,p.GK)(P.Cs),{selectAll:L}=P.qe.getSelectors(),g={selectPlacesLoaded:(0,p.M3)(M,a=>a.loaded),selectPlaces:(0,p.M3)(M,a=>L(a))};var F=o(7368),R=o(9212);let w=(()=>{class a{constructor(e){this.store=e,this.vacationLoaded=this.store.selectSignal(g.selectPlacesLoaded),this.vacations=this.store.selectSignal(g.selectPlaces)}getVacations$(){return this.store.select(g.selectPlacesLoaded).pipe((0,F.G)(s=>(s||this.store.dispatch(y.M.loadPlaces()),this.store.select(g.selectPlaces)))).pipe((0,R.y)(s=>console.group("vacations",s)))}getVacations(){return this.vacationLoaded()||this.store.dispatch(y.M.loadPlaces()),this.vacations}static#t=this.\u0275fac=function(n){return new(n||a)(t.CoB(p.m_))};static#e=this.\u0275prov=t.wxM({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var d=o(2080),B=o(4688);let I=(()=>{class a{transform(e,n="medium"){const s=this.convertToDate(e);return(0,r._m)(s,n,"en-US")}convertToDate(e){return e instanceof B.kR?e.toDate():e}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275pipe=t.UTH({name:"dateTimestampPipe",type:a,pure:!0,standalone:!0})}return a})();var m=o(7816),f=o(1560),l=o(9684),G=o(6700),b=o(3412),D=o(2644),C=o(4704),Y=o(112),A=o(7228),T=o(3992),j=o(2248),V=o(320),N=o(7400),W=o(560);function O(a,h){return h?e=>(0,A.W)(h.pipe((0,T.U)(1),(0,j.E)()),e.pipe(O(a))):(0,N.O)((e,n)=>(0,W.Uv)(a(e,n)).pipe((0,T.U)(1),(0,V.e)(e)))}var H=o(3120);function J(a,h=Y.M){const e=(0,H.k)(a,h);return O(()=>e)}var i=function(a){return a.DEFAULT="default",a.CHANGED="changeState",a.SELECTED="selected",a}(i||{});let K=(()=>{class a{constructor(){this.changed=new t._w7,this.isSelected=(0,t.OCB)(i.DEFAULT),this.clickEvent=new G.g(i.DEFAULT),this.selectStateWithDelay$=this._getSelectStateWithDelay$(),this.iconState=(0,S.i6)(this.selectStateWithDelay$)}set selected(e){this.isSelected.set(this._getSelectedState(e))}_getSelectedState(e){return e?i.SELECTED:i.DEFAULT}_getSelectStateWithDelay$(){return(0,b.U)(this._getChangeState$(),this._getDelayClickEvent$())}_getChangeState$(){return this.clickEvent.asObservable().pipe((0,D.s)(1),(0,C.k)(()=>i.CHANGED))}_getDelayClickEvent$(){return this.clickEvent.asObservable().pipe((0,D.s)(1),J(500),(0,C.k)(e=>e===i.SELECTED),(0,C.k)(e=>e?i.DEFAULT:i.SELECTED))}onButtonClick(e){if(void 0===e&&(e=this.isSelected()),e===i.CHANGED)return;this.clickEvent.next(e);const n=this._calculateNewState(e);this._handleChangeEvent(n)}_calculateNewState(e){return e===i.DEFAULT?i.SELECTED:i.DEFAULT}_handleChangeEvent(e){const n=this._createChangeEvent(e);this._emitChangeEvent(n)}_emitChangeEvent(e){this.changed.emit(e)}_createChangeEvent(e){return{source:this,selected:e!==i.DEFAULT}}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["to-places-button"]],inputs:{selected:[t.Wk5.HasDecoratorInputTransform,"selected","selected",t.cZD]},outputs:{changed:"changed"},standalone:!0,features:[t.QJr,t.UHJ],decls:2,vars:1,consts:[["mat-icon-button","","color","warn",3,"click"],["fontIcon","favorite"]],template:function(n,s){1&n&&(t.I0R(0,"button",0),t.qCj("click",function(){return s.onButtonClick(s.iconState())}),t.wR5(1,"mat-icon",1),t.C$Y()),2&n&&(t.yG2(),t.E7m("@iconAnimation",void 0===s.iconState()?s.isSelected():s.iconState()))},dependencies:[r.MD,m.oJ,m.um,f.oB,f.qL],data:{animation:[(0,l.gV)("iconAnimation",[(0,l.K2)("default",(0,l.wb)({transform:"scale(1)",color:"#9E9E9E"})),(0,l.K2)("changeState",(0,l.wb)({transform:"scale(1.2)"})),(0,l.K2)("selected",(0,l.wb)({transform:"scale(1)"})),(0,l.aK)("default <=> changeState",(0,l.Cs)("0.2s ease")),(0,l.aK)("selected <=> changeState",(0,l.Cs)("0.2s ease"))])]},changeDetection:0})}return a})(),x=(()=>{class a{constructor(){this.selectedChanged=new t._w7,this.isSelected=(0,t.OCB)(!1)}set selected(e){this.isSelected.set(e)}onSelectedChanged(e){const n=this._createChangeEvent(e);this.selectedChanged.emit(n)}_createChangeEvent(e){return{selected:e.selected,source:this}}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["to-places-card"]],inputs:{vacation:"vacation",selected:"selected"},outputs:{selectedChanged:"selectedChanged"},standalone:!0,features:[t.UHJ],decls:22,vars:18,consts:[["mat-card-image","","height","300","width","1","alt","alternative",3,"ngSrc"],[3,"selected","changed"],[1,"schedule"]],template:function(n,s){1&n&&(t.I0R(0,"mat-card"),t.wR5(1,"img",0),t.I0R(2,"mat-card-header")(3,"mat-card-title"),t.OEk(4),t.C$Y(),t.I0R(5,"mat-card-subtitle"),t.OEk(6),t.wVc(7,"currency"),t.C$Y(),t.I0R(8,"to-places-button",1),t.qCj("changed",function(u){return s.onSelectedChanged(u)}),t.C$Y()(),t.I0R(9,"mat-card-content")(10,"section",2)(11,"span")(12,"b"),t.OEk(13,"Takeoff:"),t.C$Y(),t.OEk(14),t.wVc(15,"dateTimestampPipe"),t.C$Y(),t.I0R(16,"span")(17,"b"),t.OEk(18,"Landing:"),t.C$Y(),t.OEk(19),t.wVc(20,"dateTimestampPipe"),t.C$Y()()(),t.wR5(21,"mat-card-footer"),t.C$Y()),2&n&&(t.yG2(),t.E7m("ngSrc",s.vacation.imageUrl),t.yG2(3),t.CAO("",s.vacation.destination.city,", ",s.vacation.destination.country,""),t.yG2(2),t.cNF(t.wB1(7,7,s.vacation.price,"USD","symbol","1.0-0")),t.yG2(2),t.E7m("selected",s.isSelected()),t.yG2(6),t.oRS(" ",t.g7$(15,12,s.vacation.takeoff,"EEEE, MMMM d, h:mm a")," "),t.yG2(5),t.oRS(" ",t.g7$(20,15,s.vacation.landing,"EEEE, MMMM d, h:mm a")," "))},dependencies:[r.MD,r.cf,r.ys,I,d.NR,d.SM,d.WK,d.Yr,d.Uc,d.MN,d.uK,d.gp,K],styles:["mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px;width:inherit}mat-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]{justify-content:space-between;align-items:flex-end}mat-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%]{padding:16px}mat-card[_ngcontent-%COMP%]   section.schedule[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}"],changeDetection:0})}return a})();function Q(a,h){if(1&a){const e=t.KQA();t.SAx(0),t.I0R(1,"section",2)(2,"to-places-card",3),t.qCj("selectedChanged",function(s){t.usT(e);const c=t.GaO();return t.CGJ(c.onSelectedChanged(s))}),t.C$Y()(),t.k70()}if(2&a){const e=h.$implicit,n=t.GaO();t.yG2(2),t.E7m("vacation",e)("selected",n.selection()[e.id])}}let z=(()=>{class a{constructor(){this.vacations=(0,t.OCB)([]),this.selection=(0,t.OCB)({}),this.selectionChanged=new t._w7}onSelectedChanged(e){const{source:n,selected:s}=e,{vacation:c}=n,u=this._updateStoreSelection(this.selection(),s,c);this._emitChangeEvent(u)}_updateStoreSelection(e,n,s){let c={...e};return n?c={...e,[s.id]:n}:delete c[s.id],c}_emitChangeEvent(e){this.selectionChanged.emit({source:this,selection:e})}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["to-places-list"]],inputs:{vacations:"vacations",selection:"selection"},outputs:{selectionChanged:"selectionChanged"},standalone:!0,features:[t.UHJ],decls:2,vars:1,consts:[[1,"vacation-list-wrapper"],[4,"ngFor","ngForOf"],[1,"vacation-card-wrapper"],[3,"vacation","selected","selectedChanged"]],template:function(n,s){1&n&&(t.I0R(0,"div",0),t.yuY(1,Q,3,2,"ng-container",1),t.C$Y()),2&n&&(t.yG2(),t.E7m("ngForOf",s.vacations()))},dependencies:[r.MD,r.ay,x],styles:["div.vacation-list-wrapper[_ngcontent-%COMP%]{padding:16px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:24px}div.vacation-list-wrapper[_ngcontent-%COMP%]   section.vacation-card-wrapper[_ngcontent-%COMP%]{width:24%}"]})}return a})(),Z=(()=>{class a{constructor(){this.side=(0,t.YhN)("right"),this.label=(0,t.YhN)(),this.routerLink=(0,t.YhN)(),this.clicked=new t._w7}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["to-floating-button"]],inputs:{side:[t.Wk5.SignalBased,"side"],label:[t.Wk5.SignalBased,"label"],routerLink:[t.Wk5.SignalBased,"routerLink"]},outputs:{clicked:"clicked"},standalone:!0,features:[t.UHJ],decls:3,vars:17,consts:[["mat-raised-button","","color","accent",3,"disableRipple","routerLink","click"]],template:function(n,s){1&n&&(t.I0R(0,"button",0),t.qCj("click",function(){return s.clicked.emit()}),t.OEk(1),t.wVc(2,"titlecase"),t.C$Y()),2&n&&(t.m4B("right","left"===s.side()?null:0,"px")("left","right"===s.side()?null:0,"px")("border-top-right-radius","left"===s.side()?25:null,"px")("border-bottom-right-radius","left"===s.side()?25:null,"px")("border-top-left-radius","right"===s.side()?25:null,"px")("border-bottom-left-radius","right"===s.side()?25:null,"px"),t.E7m("disableRipple",!0)("routerLink",s.routerLink()),t.yG2(),t.oRS(" ",t.kDX(2,15,s.label())," "))},dependencies:[r.MD,r.oL,v.qQ,v.ER,m.oJ,m.Gw,f.oB],styles:["button[_ngcontent-%COMP%]{position:fixed;top:64px}"],changeDetection:0})}return a})();var X=o(656);let q=(()=>{class a{constructor(){this.injector=(0,t.uUt)(t.zZn),this.favoriteStore=(0,t.uUt)(k._),this.route=(0,t.uUt)(v.gV),this.vacations=(0,t.uUt)(w).getVacations(),this.selection=this._getSelectionFroRoute()}_getSelectionFroRoute(){return(0,S.i6)(this.route.data.pipe((0,C.k)(e=>e.placesResolver)),{initialValue:{}})}onSelectionChanged(e){const{selection:n}=e;this.favoriteStore.updateSelection(n),this.favoriteStore.updateFavorites()}onButtonClick(){(0,t.SMS)(this.injector,()=>(0,t.uUt)(X.$).logout())}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["to-places"]],inputs:{userId:"userId"},standalone:!0,features:[t.UHJ],decls:5,vars:3,consts:[[1,"places-wrapper"],[3,"label","clicked"],[3,"vacations","selection","selectionChanged"]],template:function(n,s){1&n&&(t.I0R(0,"div",0)(1,"header")(2,"to-floating-button",1),t.qCj("clicked",function(){return s.onButtonClick()}),t.C$Y()(),t.I0R(3,"main")(4,"to-places-list",2),t.qCj("selectionChanged",function(u){return s.onSelectionChanged(u)}),t.C$Y()()()),2&n&&(t.yG2(2),t.E7m("label","Logout"),t.yG2(2),t.E7m("vacations",s.vacations)("selection",s.selection))},dependencies:[r.MD,z,Z],styles:["div[_ngcontent-%COMP%]{height:100%}div.places-wrapper[_ngcontent-%COMP%]{background-image:url(user.9ff56192b726b238.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;display:flex;flex-direction:column}div.places-wrapper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex:.3}"],changeDetection:0})}return a})()}}]);