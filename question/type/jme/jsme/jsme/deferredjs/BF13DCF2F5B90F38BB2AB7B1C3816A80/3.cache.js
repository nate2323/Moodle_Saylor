var ZN="3",$N="Any",aO="Aromatic",bO="Nonring",cO="Reset",dO="Ring";function eO(){eO=s;fO=new po(Xc,new gO)}function gO(){}r(196,193,{},gO);_.Tc=function(a){Yv();zK(this,a.b,hO(a.a.a,a.a.a.ob.selectedIndex))};_.Wc=function(){return fO};var fO;function iO(a,b){if(0>b||b>=a.ob.options.length)throw new Ps;}function hO(a,b){iO(a,b);return a.ob.options[b].value}function jO(){Tt();this.ob=$doc.createElement("select");this.ob[fd]="gwt-ListBox"}r(341,319,Bh,jO);function kO(){kO=s}
function lO(a,b){if(null==b)throw new Qp("Missing message: awt.103");var c=-1,d,e,f;f=a.mc.a.ob;e=$doc.createElement(of);e.text=b;e.removeAttribute("bidiwrapped");e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e,null):(c=f.options[c],f.add(e,c))}function mO(){kO();Xv.call(this);new ui;this.mc=new nO((Yv(),this))}r(408,395,{89:1,91:1,98:1,110:1,116:1},mO);_.be=function(){return bw(this.mc,this)};
_.qe=function(){return(null==this.jc&&(this.jc=Jv(this)),this.jc)+va+this.uc+va+this.vc+va+this.rc+Mg+this.hc+(this.qc?l:",hidden")+",current="+hO(this.mc.a,this.mc.a.ob.selectedIndex)};function oO(){YJ.call(this,7)}r(421,1,wh,oO);function pO(a){$J.call(this,a,0)}r(426,395,ci,pO);r(552,550,Uh);_.Pc=function(){!this.a.Ib?this.a.Ib=new qO(this.a):this.a.Ib.mc.c.gb?nL(this.a.Ib.mc.c):uK(this.a.Ib)};function rO(a,b){jJ(b)==a.a?Z(b,(Hw(),Qw)):Z(b,a.a)}
function sO(a){var b,c,d,e;e=l;d=!1;jJ(tO)!=a.a?(e=ta,d=!0):jJ(uO)!=a.a?(e="!#6",d=!0):jJ(vO)!=a.a?(Z(wO,(Hw(),Qw)),Z(EO,Qw),Z(FO,Qw),Z(GO,Qw),e="F,Cl,Br,I"):(b=jJ(HO)!=a.a,c=jJ(IO)!=a.a,jJ(JO)!=a.a&&(b?e+="c,":c?e+="C,":e+="#6,"),jJ(KO)!=a.a&&(b?e+="n,":c?e+="N,":e+="#7,"),jJ(LO)!=a.a&&(b?e+="o,":c?e+="O,":e+="#8,"),jJ(MO)!=a.a&&(b?e+="s,":c?e+="S,":e+="#16,"),jJ(NO)!=a.a&&(b?e+="p,":c?e+="P,":e+="#15,"),jJ(wO)!=a.a&&(e+="F,"),jJ(EO)!=a.a&&(e+="Cl,"),jJ(FO)!=a.a&&(e+="Br,"),jJ(GO)!=a.a&&(e+="I,"),
LC(e,va)&&(e=e.substr(0,e.length-1-0)),1>e.length&&!a.b&&(b?e=nc:c?e=ob:(Z(tO,(Hw(),Qw)),e=ta)));b=l;d&&jJ(HO)!=a.a&&(b+=";a");d&&jJ(IO)!=a.a&&(b+=";A");jJ(OO)!=a.a&&(b+=";R");jJ(PO)!=a.a&&(b+=";!R");jJ(tO)!=a.a&&0<b.length?e=b.substr(1,b.length-1):e+=b;d=QO.mc.a.ob.selectedIndex;0<d&&(--d,e+=";H"+d);d=RO.mc.a.ob.selectedIndex;0<d&&(--d,e+=";D"+d);jJ(SO)!=a.a&&(e="~");jJ(TO)!=a.a&&(e=eb);jJ(UO)!=a.a&&(e=nb);jJ(VO)!=a.a&&(e="!@");Mx(a.e.mc,e)}
function WO(a){XO(a);YO(a);var b=QO.mc.a;iO(b,0);b.ob.options[0].selected=!0;b=RO.mc.a;iO(b,0);b.ob.options[0].selected=!0;Z(HO,a.a);Z(IO,a.a);Z(OO,a.a);Z(PO,a.a);Z(QO,a.a);Z(RO,a.a);ZO(a)}function XO(a){Z(JO,a.a);Z(KO,a.a);Z(LO,a.a);Z(MO,a.a);Z(NO,a.a);Z(wO,a.a);Z(EO,a.a);Z(FO,a.a);Z(GO,a.a)}function YO(a){Z(tO,a.a);Z(uO,a.a);Z(vO,a.a)}function ZO(a){Z(SO,a.a);Z(TO,a.a);Z(UO,a.a);Z(VO,a.a);a.b=!1}
function qO(a){RJ.call(this,"Atom/Bond Query");this.i=new KJ(this.ig());Aw(this.q,new xK(this));this.a=(Py(),Ry);this.c=a;this.d||(a=Mv(a),this.d=new bK(a),tK(this.d,-150,10));this.j=this.d;kw(this,new oO);Z(this,this.a);a=new pw;kw(a,new gx(0,3,1));$(a,new pO("Atom type :"),null);tO=new KJ($N);uO=new KJ("Any except C");vO=new KJ("Halogen");$(a,tO,null);$(a,uO,null);$(a,vO,null);$(this,a,null);a=new pw;kw(a,new gx(0,3,1));$(a,new $J("Or select one or more from the list :",0),null);$(this,a,null);
a=new pw;kw(a,new gx(0,3,1));JO=new KJ(sb);KO=new KJ(Pb);LO=new KJ(Tb);MO=new KJ(ac);NO=new KJ(Ub);wO=new KJ(Ab);EO=new KJ(wb);FO=new KJ(rb);GO=new KJ(Ib);$(a,JO,null);$(a,KO,null);$(a,LO,null);$(a,MO,null);$(a,NO,null);$(a,wO,null);$(a,EO,null);$(a,FO,null);$(a,GO,null);$(this,a,null);a=new pw;kw(a,new gx(0,3,1));QO=new mO;lO(QO,$N);lO(QO,Ya);lO(QO,$a);lO(QO,db);lO(QO,ZN);$(a,new pO("Number of hydrogens :  "),null);$(a,QO,null);$(this,a,null);a=new pw;kw(a,new gx(0,3,1));RO=new mO;lO(RO,$N);lO(RO,
Ya);lO(RO,$a);lO(RO,db);lO(RO,ZN);lO(RO,"4");lO(RO,"5");lO(RO,"6");$(a,new $J("Number of connections :",0),null);$(a,RO,null);$(a,new $J(" (H's don't count.)",0),null);$(this,a,null);a=new pw;kw(a,new gx(0,3,1));$(a,new pO("Atom is :"),null);HO=new KJ(aO);$(a,HO,null);IO=new KJ("Nonaromatic");$(a,IO,null);OO=new KJ(dO);$(a,OO,null);PO=new KJ(bO);$(a,PO,null);$(this,a,null);a=new pw;Z(a,Xw(jJ(this)));kw(a,new gx(0,3,1));$(a,new pO("Bond is :"),null);SO=new KJ($N);$(a,SO,null);TO=new KJ(aO);$(a,TO,
null);UO=new KJ(dO);$(a,UO,null);VO=new KJ(bO);$(a,VO,null);$(this,a,null);a=new pw;kw(a,new gx(1,3,1));this.e=new Lx(ta,20);$(a,this.e,null);$(a,new KJ(cO),null);$(a,this.i,null);$(this,a,null);this.mc&&TJ(this.mc.c,!1);QJ(this,!1);XO(this);YO(this);ZO(this);Z(HO,this.a);Z(IO,this.a);Z(OO,this.a);Z(PO,this.a);Z(QO,this.a);Z(RO,this.a);rO(this,tO);PJ(this);a=this.j;vK(this.mc.c,a.a,a.b);!Lv(this)&&sJ(this);nJ(this)}r(562,544,RF,qO);
_.jg=function(a,b){var c;H(b,cO)?(WO(this),rO(this,tO),sO(this)):E(a.f,88)?(ZO(this),xq(a.f)===xq(tO)?(XO(this),YO(this)):xq(a.f)===xq(uO)?(XO(this),YO(this)):xq(a.f)===xq(vO)?(XO(this),YO(this)):xq(a.f)===xq(OO)?Z(PO,this.a):xq(a.f)===xq(PO)?(Z(OO,this.a),Z(HO,this.a)):xq(a.f)===xq(HO)?(Z(IO,this.a),Z(PO,this.a)):xq(a.f)===xq(IO)?Z(HO,this.a):xq(a.f)===xq(SO)||xq(a.f)===xq(TO)||xq(a.f)===xq(UO)||xq(a.f)===xq(VO)?(WO(this),this.b=!0):YO(this),rO(this,a.f),sO(this)):E(a.f,89)&&(ZO(this),c=a.f,0==c.mc.a.ob.selectedIndex?
Z(c,this.a):Z(c,(Hw(),Qw)),sO(this));107!=this.c.e&&(this.c.e=107,uw(this.c));return!0};_.kg=function(){return Lm(this.e.mc.a.ob,Gg)};_.lg=function(){return this.b};_.b=!1;_.c=null;_.d=null;var tO=_.e=null,SO=null,uO=null,HO=null,TO=null,FO=null,JO=null,RO=null,QO=null,EO=null,wO=null,vO=null,GO=null,KO=null,IO=null,PO=null,VO=null,LO=null,NO=null,OO=null,UO=null,MO=null;function nO(a){UE();WE.call(this);this.a=new jO;ws(this.a,new $O(this,a),(eO(),eO(),fO))}r(608,606,{},nO);_.Ke=function(){return this.a};
_.a=null;function $O(a,b){this.a=a;this.b=b}r(609,1,{},$O);_.a=null;_.b=null;Y(562);Y(408);Y(608);Y(609);Y(341);Y(196);y(KF)(3);