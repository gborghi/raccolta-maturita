

**Problema:** [[Problemi/prob_2004_scuole_italiane_allestero_americhe_2004_sessione_s_problema2_26_1|2004 Estero Americhe Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_problema2_26|2004 Estero Americhe Suppletiva — Problema 2]]

Sia $S$ un semicerchio di raggio $2$. Fissiamo un sistema di riferimento con l'origine $O$ nel centro del diametro, l'asse $x$ lungo il diametro e il semicerchio nel semipiano $y \ge 0$; gli estremi del diametro sono $A=(-2,0)$ e $B=(2,0)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="253.768" height="156.393" viewBox="-72 -72 190.326 117.295"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 29.618h177.145"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M103.195 27.218c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(92.305 2.153)">x</text><path fill="none" d="M16.703 39.861v-98.615"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M14.303-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -94.25)">y</text><path fill="none" stroke-width=".8" d="M-51.584 29.618c0-37.714 30.572-68.286 68.287-68.286 37.714 0 68.286 30.572 68.286 68.286M-51.584 29.618H84.99"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-31.576 29.618h96.557V-18.66h-96.557Z"/><path fill="none" stroke="red" stroke-width=".8" d="M-31.576 29.618 64.981-18.66"/><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-79.32 10.366)">A</text><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 10.366)">B</text><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(44.3 12.074)">E</text><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-52.188 12.074)">F</text><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(51.811 -51.812)">D</text><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-59.674 -51.812)">C</text><text x="16.703" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text></g></svg>
</figure>

## a)

Sia $D=(x,y)$ il vertice del rettangolo appartenente all'arco, con $0<x<2$, $0<y<2$ e $x^2+y^2=4$, da cui $y=\sqrt{4-x^2}$. Il rettangolo $R$ ha base $2x$ e altezza $y$, quindi la sua area è

$$\text{Area}=2xy=2x\sqrt{4-x^2}.$$

Tale area è massima quando lo è la quantità positiva $x\sqrt{4-x^2}$, ovvero quando è massimo il suo quadrato

$$z=x^2(4-x^2).$$

**Metodo delle derivate.** Si ha

$$z'=2x(4-x^2)+x^2(-2x)=-4x^3+8x=4x(2-x^2).$$

Nell'intervallo $0<x<2$ risulta $z'\ge 0$ per $2-x^2\ge 0$, cioè per $x\le\sqrt{2}$. Dunque $z$ cresce per $0<x<\sqrt{2}$ e decresce per $\sqrt{2}<x<2$: il massimo si ha per $x=\sqrt{2}$.

**Metodo elementare.** $z=x^2(4-x^2)$ è il prodotto di due fattori a somma costante $\big(x^2+(4-x^2)=4\big)$, quindi è massimo quando i due fattori sono uguali:

$$x^2=4-x^2 \;\Rightarrow\; x^2=2 \;\Rightarrow\; x=\sqrt{2}.$$

Allora $y=\sqrt{4-2}=\sqrt{2}$. Il rettangolo di area massima ha vertici

$$E=(\sqrt{2},0),\quad D=(\sqrt{2},\sqrt{2}),\quad C=(-\sqrt{2},\sqrt{2}),\quad F=(-\sqrt{2},0),$$

cioè base $2x=2\sqrt{2}$ e altezza $y=\sqrt{2}$. L'area massima vale

$$\text{Area}_{\max}=2\sqrt{2}\cdot\sqrt{2}=4.$$

## b)

Il rettangolo $R$ suddivide $S$ in tre parti: i due triangoli mistilinei laterali (di uguale area) e il segmento circolare superiore di base $CD$.

Calcoliamo l'area del triangolo mistilineo $BDE$, ottenuta sottraendo al settore circolare $DOB$ il triangolo $DOE$. Poiché $OE=DE=\sqrt{2}$, il triangolo $DOE$ è rettangolo isoscele e l'angolo $D\widehat{O}E$ misura $45^\circ$; il settore $DOB$ è quindi l'ottava parte del cerchio di raggio $2$ (area $\pi\cdot 2^2=4\pi$):

$$\text{Area}(DOB)=\frac{1}{8}\cdot 4\pi=\frac{\pi}{2},\qquad \text{Area}(DOE)=\frac{1}{2}\cdot\sqrt{2}\cdot\sqrt{2}=1.$$

Quindi

$$\text{Area(tr. mist. }BDE)=\frac{\pi}{2}-1,$$

e per simmetria il triangolo mistilineo dall'altra parte ha la stessa area $\dfrac{\pi}{2}-1$.

Il segmento circolare di base $CD$ si ottiene per sottrazione, ricordando che l'area del semicerchio è $\dfrac{1}{2}\pi\cdot 2^2=2\pi$:

$$\text{Area(segm. circ.)}=2\pi-4-2\left(\frac{\pi}{2}-1\right)=2\pi-4-\pi+2=\pi-2.$$

## c)

La diagonale $FD$ va da $F=(-\sqrt{2},0)$ a $D=(\sqrt{2},\sqrt{2})$; l'angolo $\alpha$ che essa forma con il diametro $AB$ si ricava dal triangolo rettangolo $FED$, con $DE=\sqrt{2}$ e $FE=2\sqrt{2}$:

$$\tan\alpha=\frac{DE}{FE}=\frac{\sqrt{2}}{2\sqrt{2}}=\frac{1}{2}\;\Rightarrow\;\alpha=\arctan\tfrac{1}{2}\cong 0.46\ \text{rad}\cong 26.57^\circ.$$

L'arco $L$ staccato su $S$ (arco $BD$) corrisponde all'angolo al centro $B\widehat{O}D=D\widehat{O}E=\dfrac{\pi}{4}$; poiché il raggio è $r=2$,

$$L=r\cdot\frac{\pi}{4}=2\cdot\frac{\pi}{4}=\frac{\pi}{2}\cong 1.57.$$

*Fonte:* [📄 PDF p.26](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
