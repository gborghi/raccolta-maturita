

**Problema:** [[Problemi/prob_2003_suppletiva_pni_2003_problema2_128_1|2003 Suppletiva PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_problema2_128|2003 Suppletiva PNI — Problema 2]]

In un trapezio rettangolo $ABCD$, circoscritto ad un cerchio, $AB$ è la base maggiore, $CD$ la minore e $BC$ il lato obliquo. Le misure del raggio del cerchio e del perimetro del trapezio sono nell'ordine $2$ e $18$.

## a)

**Misure dei lati.** Per un quadrilatero circoscritto a un cerchio la somma di due lati opposti è uguale alla somma degli altri due, cioè $AB+CD=BC+DA$. Sia $r=2$ il raggio e $p=18$ il perimetro. Essendo il trapezio rettangolo, $DA\perp AB$ e $DA=2r=4$. Posti $AB=a$, $CD=c$, $BC=l$, $DA=4$:

$$a+c+l+4=18 \Rightarrow a+c+l=14, \qquad a+c=l+4.$$

Sostituendo la seconda nella prima: $l+4+l=14 \Rightarrow l=5$ e $a+c=9$. Dal teorema di Pitagora applicato al triangolo rettangolo di cateti $a-c$ e $4$ e ipotenusa $l$ si ha $l^2=(a-c)^2+4^2$, cioè

$$25=(a-c)^2+16 \Rightarrow a-c=3.$$

Da $a+c=9$ e $a-c=3$ segue $a=6$ e $c=3$. Quindi

$$AB=6, \quad CD=3, \quad BC=5, \quad DA=4.$$

## b)

**Coordinate dei vertici.** Fissiamo l'origine in $A$, l'asse $x$ lungo la retta $AB$ e l'asse $y$ lungo la retta $AD$:

$$A=(0,0), \quad B=(6,0), \quad C=(3,4), \quad D=(0,4).$$

Verifica: $BC=\sqrt{(6-3)^2+4^2}=\sqrt{9+16}=5$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="276.34" height="206.469" viewBox="-72 -72 207.255 154.852"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-69.65 68.882h191.654"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M120.124 66.482c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(182.784 2.153)">x</text><path fill="none" d="M-56.847 81.686v-140.44"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.247-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -133.514)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-56.847 68.882H96.796L19.974-33.546h-76.821Z"/><path fill="none" stroke="red" d="M71.189 17.668c0-28.286-22.929-51.215-51.214-51.215-28.286 0-51.215 22.93-51.215 51.215s22.93 51.214 51.215 51.214 51.214-22.929 51.214-51.214Zm-51.214 0"/><path stroke="none" d="M21.325 17.668a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.355 -47.798)">O</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M19.975-33.547v102.43"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(72.26 10.366)">H</text></g><path stroke="none" d="M-55.497 68.882a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><path stroke="none" d="M98.146 68.882a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(157.176 10.366)">B</text><path stroke="none" d="M21.324-33.546a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.355 -105.962)">C</text><path stroke="none" d="M-55.497-33.546a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-56.847" y="68.882" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-12.09 -105.962)">D</text></g></svg>
</figure>

## c)

**Centro-affinità $B\mapsto C$, $C\mapsto D$.** L'affinità ha equazioni

$$\begin{cases} x'=ax+by \\ y'=cx+dy. \end{cases}$$

Da $B=(6,0)\mapsto C=(3,4)$:

$$\begin{cases} 3=6a \\ 4=6c \end{cases} \Rightarrow a=\frac{1}{2}, \quad c=\frac{2}{3}.$$

Da $C=(3,4)\mapsto D=(0,4)$:

$$\begin{cases} 0=3a+4b \\ 4=3c+4d \end{cases} \Rightarrow \begin{cases} 0=\frac{3}{2}+4b \\ 4=2+4d \end{cases} \Rightarrow b=-\frac{3}{8}, \quad d=\frac{1}{2}.$$

L'affinità richiesta è dunque

$$\begin{cases} x'=\dfrac{1}{2}\,x-\dfrac{3}{8}\,y \\[2mm] y'=\dfrac{2}{3}\,x+\dfrac{1}{2}\,y. \end{cases}$$

## d)

**Rette unite.** Imponiamo che la generica retta di equazione $ax+by+c=0$ si trasformi in sé stessa. Sostituendo le espressioni di $x'$ e $y'$, la condizione di unione conduce all'equazione

$$\frac{2}{3}b^2=-\frac{3}{8}a^2,$$

soddisfatta solo per $a=b=0$, caso in cui però non si individua alcuna retta. Pertanto l'affinità non possiede rette unite.

## e)

**Area della figura trasformata del cerchio.** In un'affinità il rapporto fra le aree di due figure corrispondenti è uguale al valore assoluto del rapporto $k$ di affinità, dato dal determinante dei coefficienti:

$$k=\det\begin{pmatrix} \dfrac{1}{2} & -\dfrac{3}{8} \\[2mm] \dfrac{2}{3} & \dfrac{1}{2} \end{pmatrix}=\frac{1}{4}+\frac{1}{4}=\frac{1}{2}.$$

Il cerchio inscritto ha raggio $r=2$, quindi area $S=\pi r^2=4\pi$. L'immagine ha area

$$S'=|k|\cdot S=\frac{1}{2}\cdot 4\pi=2\pi.$$

*Fonte:* [📄 PDF p.128](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
