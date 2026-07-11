

**Problema:** [[Problemi/prob_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema1_47_1|2004 Americhe australe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema1_47|2004 Americhe australe Suppletiva — Problema 1]]

Si consideri il semicerchio $S$ di raggio $2$. Riferendolo a un sistema di assi cartesiani ortogonali monometrici con l'origine $O$ nel centro e il diametro $AB$ sull'asse $x$ (con $A=(-2,0)$ e $B=(2,0)$), il semicerchio occupa il semipiano $y\ge 0$ ed è il luogo dei punti con $x^2+y^2=4$, $y\ge 0$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="303.844" height="173.844" viewBox="-72 -72 227.883 130.383"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 44.414h214.702"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M140.752 42.014c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(111.084 2.153)">x</text><path fill="none" d="M35.48 56.364V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M33.08-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -109.045)">y</text><path fill="none" stroke-width=".8" d="M-44.187 44.414c0-44 35.668-79.668 79.668-79.668S115.148.414 115.148 44.414"/><path fill="none" d="M-44.187 44.414h159.335"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-20.844 44.414h112.65v-56.325h-112.65Z"/><path fill="none" stroke="red" stroke-width=".8" d="m-20.844 44.414 112.65-56.325"/><path fill="none" d="M-4.353 44.414c0-4.437-1.763-8.693-4.9-11.83"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-41.059 -5.814)">®</text><path stroke="none" d="M93.906 44.414a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(59.858 10.366)">E</text><path stroke="none" d="M-18.744 44.414a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-67.677 10.366)">F</text><path stroke="none" d="M93.906-11.911a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(59.858 -59.858)">D</text><path stroke="none" d="M-18.744-11.911a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-67.72 -59.858)">C</text><path stroke="none" d="M37.58 44.414a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.2 10.366)">B</text><text x="35.481" y="44.414" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-90.7 10.366)">A</text></g></svg>
</figure>

## a)

Sia $D=(x,y)$ il vertice del rettangolo $R$ appartenente all'arco, con $0<x<2$ e $0<y<2$; poiché $x^2+y^2=4$ si ha $y=\sqrt{4-x^2}$. Il rettangolo $R$, di base $2x$ e altezza $y$, ha area

$$\text{Area}(R)=2xy=2x\sqrt{4-x^2}.$$

Tale area è massima quando lo è la quantità positiva $x\sqrt{4-x^2}$, e dunque quando è massimo il suo quadrato

$$z=x^2\left(4-x^2\right).$$

Derivando:

$$z'=2x\left(4-x^2\right)+x^2(-2x)=-4x^3+8x=4x\left(2-x^2\right).$$

Nell'intervallo $0<x<2$ si ha $z'\ge 0$ per $0<x\le\sqrt{2}$ e $z'<0$ per $\sqrt{2}<x<2$: la funzione cresce fino a $x=\sqrt{2}$ e poi decresce, quindi il massimo si ha per

$$x=\sqrt{2},\qquad y=\sqrt{4-2}=\sqrt{2}.$$

(In alternativa, senza derivate: $z=x^2(4-x^2)$ è prodotto di due quantità a somma costante $4$, dunque massimo quando sono uguali, cioè $x^2=4-x^2\Rightarrow x^2=2\Rightarrow x=\sqrt{2}$.)

Il rettangolo di area massima ha quindi vertici

$$F=(-\sqrt{2},0),\quad E=(\sqrt{2},0),\quad D=(\sqrt{2},\sqrt{2}),\quad C=(-\sqrt{2},\sqrt{2}).$$

Le sue **dimensioni** sono l'altezza $\overline{ED}=\sqrt{2}$ e la base $\overline{EF}=2\sqrt{2}$, e l'**area massima** vale

$$\text{Area}(R)=2\sqrt{2}\cdot\sqrt{2}=4.$$

## b)

Il rettangolo $R$ divide il semicerchio $S$ in tre regioni: due triangoli mistilinei uguali (agli estremi, di tipo $BDE$ e $ACF$) e un segmento circolare (in alto, di base $CD$).

**Triangoli mistilinei.** Il triangolo mistilineo $BDE$ si ottiene sottraendo al settore circolare $DOB$ il triangolo $DOE$. Poiché $\overline{OE}=\overline{DE}=\sqrt{2}$, il triangolo $DOE$ è rettangolo isoscele e l'angolo $D\hat OE$ misura $45^\circ$: il settore $DOB$ è perciò l'ottava parte del cerchio. Quindi

$$\text{Area(settore } DOB)=\frac{1}{8}\,\pi\cdot 2^2=\frac{\pi}{2},\qquad \text{Area}(DOE)=\frac{1}{2}\cdot\sqrt{2}\cdot\sqrt{2}=1,$$

$$\text{Area(tr. mist. } BDE)=\frac{\pi}{2}-1=\text{Area(tr. mist. } ACF).$$

**Segmento circolare.** L'area del semicerchio è $\dfrac{1}{2}\pi\cdot 2^2=2\pi$; per differenza,

$$\text{Area(segm. circ.)}=2\pi-\underbrace{4}_{R}-2\left(\frac{\pi}{2}-1\right)=2\pi-4-\pi+2=\pi-2.$$

Le tre parti hanno dunque aree $\ \dfrac{\pi}{2}-1,\ \dfrac{\pi}{2}-1\ $ e $\ \pi-2$.

## c)

Sia $\alpha$ l'angolo che la diagonale $FD$ forma con il diametro $AB$. Nel triangolo rettangolo $FED$ i cateti sono $\overline{DE}=\sqrt{2}$ e $\overline{FE}=2\sqrt{2}$, quindi

$$\tan\alpha=\frac{\overline{DE}}{\overline{FE}}=\frac{\sqrt{2}}{2\sqrt{2}}=\frac{1}{2},\qquad \alpha=\arctan\!\frac{1}{2}\cong 0{,}46\ \text{rad}\cong 26{,}57^\circ.$$

La diagonale incontra la semicirconferenza nel punto $D$, che sottende (a partire da $B$) un angolo al centro di $45^\circ$, cioè un ottavo dell'angolo giro. L'arco $L$ staccato su $S$ è perciò l'ottava parte dell'intera circonferenza:

$$L=\frac{1}{8}\cdot 2\pi r=\frac{1}{8}\cdot 2\pi\cdot 2=\frac{\pi}{2}\cong 1{,}57.$$

*Fonte:* [📄 PDF p.47](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
