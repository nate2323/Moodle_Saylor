r(201,189,{});function RO(){RO=s;SO=new jo("dragend",new TO)}function UO(a){a.a.cancelBubble=!0;Fm(a.a)}function TO(){}r(202,201,{},TO);_.Pc=function(){UO(this)};_.Sc=function(){return SO};var SO;function VO(){VO=s;WO=new jo("dragenter",new XO)}function XO(){}r(203,201,{},XO);_.Pc=function(){UO(this)};_.Sc=function(){return WO};var WO;function YO(){YO=s;ZO=new jo("dragover",new $O)}function $O(){}r(204,201,{},$O);_.Pc=function(){UO(this)};_.Sc=function(){return ZO};var ZO;
function aP(){aP=s;bP=new jo("drop",new cP)}function cP(){}r(205,201,{},cP);_.Pc=function(a){var b,c,d,e;this.a.cancelBubble=!0;Fm(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;dP(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(hg),a.a.b.a.a.e.ob[xg]=null!=b?b:l)};_.Sc=function(){return bP};var bP;function eP(a,b,c){Jp(!a.lb?a.lb=new Yp(a):a.lb,c,b)}
function fP(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";JJ(a.H.b,"Paste")}function gP(a){LK();CL.call(this);this.c=a}r(618,612,yF,gP);_.vg=function(){zL(this);this.a=(new BJ(this.b)).mc.Fe();os(this.a,new hP(this),(po(),po(),qo));this.d=F(BL,m,60,[this.a,this.f])};_.wg=function(){cs(this.e,"150px")};_.xg=function(){fP(this)};_.Qd=function(){hL(this);nm((km(),lm),new iP(this))};_.a=null;_.b=null;_.c=null;function jP(a){LK();gP.call(this,a)}r(617,618,yF,jP);
_.wg=function(){cs(this.e,"150px");var a=new kP(this),b=this.e;eP(b,new lP,(VO(),VO(),WO));eP(b,new mP,(RO(),RO(),SO));eP(b,new nP,(YO(),YO(),ZO));eP(b,new oP(a),(aP(),aP(),bP))};_.xg=function(){fP(this);this.j+=" Or drag and drop a file on it."};r(621,1,{});r(620,621,{});_.b=null;_.c=1;_.d=-1;function kP(a){this.a=a;this.b=new pP(this);this.c=this.d=1}r(619,620,{},kP);_.a=null;function pP(a){this.a=a}r(622,1,{},pP);_.yg=function(a){this.a.a.e.ob[xg]=null!=a?a:l};_.a=null;
function hP(a){this.a=a}r(626,1,{},hP);_.Uc=function(){if(this.a.c){var a=this.a.c,b;b=new Ox(a.a,0,Am(this.a.e.ob,xg));eD(a.a.a,b.a)}TK(this.a,!1)};_.a=null;function iP(a){this.a=a}r(627,1,{},iP);_.Cc=function(){ks(this.a.e.ob,!0);lu(this.a.e.ob)};_.a=null;r(628,1,Nh);_.Kc=function(){};_.Lc=function(){var a,b;a=new qP(this.a);void 0!=$wnd.FileReader?b=new jP(a):b=new gP(a);EK(b);SK(b)};_.a=null;function qP(a){this.a=a}r(629,1,{},qP);_.a=null;
function dP(a,b){a.onloadend=function(a){b.yg(a.target.result)}}function oP(a){this.a=a}r(635,1,{},oP);_.a=null;function lP(){}r(636,1,{},lP);function mP(){}r(637,1,{},mP);function nP(){}r(638,1,{},nP);Y(621);Y(620);Y(635);Y(636);Y(637);Y(638);Y(201);Y(203);Y(202);Y(204);Y(205);Y(618);Y(617);Y(628);Y(629);Y(626);Y(627);Y(619);Y(622);y(vF)(6);