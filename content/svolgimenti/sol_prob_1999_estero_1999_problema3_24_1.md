

**Problema:** [[Problemi/prob_1999_estero_1999_problema3_24_1|1999 Estero — Problema 3 — Problema 1]] · **Prova:** [[Prove/1999_estero_1999_problema3_24|1999 Estero — Problema 3]]

**Traccia.** Si considerano le piramidi rette triangolari aventi la stessa altezza $h$ e lo stesso perimetro di base $2p$.

**a)** Dare la definizione di piramide retta.

**b)** Tra tali piramidi determinare quella di volume massimo.

**c)** Stabilire se la stessa piramide ha anche area laterale massima.

**d)** Nell'ipotesi che l'altezza sia $h$ e il perimetro di base sia $\dfrac{3}{2}\sqrt{3}\,h$, con volume massimo, calcolarne il volume e l'area laterale.

## a) Definizione di piramide retta

Una piramide si dice **retta** se nella sua base è inscrivibile una circonferenza il cui centro coincide con il piede dell'altezza della piramide.

In una piramide retta, detto $H$ il piede dell'altezza (centro del cerchio inscritto nella base) ed $E$ il punto di tangenza del cerchio con un lato della base, il segmento $\overline{HE}$ è uguale al raggio $R$ del cerchio inscritto, e il segmento $\overline{VE}$ (che congiunge il vertice $V$ con $E$) è l'**apotema** della piramide.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="206.038" height="166.373" viewBox="-72 -72 154.529 124.78"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 30.109 67.306 45.76 36.003-7.454Z"/><path fill="none" d="m15.124-58.57-73.028 88.679M15.124-58.57 67.306 45.76M15.124-58.57l20.88 51.116"/><path fill="none" stroke-dasharray="3.0,3.0" d="M15.124-58.57v81.385"/><path fill="none" d="M15.124 22.815 4.701 37.935"/><path fill="none" stroke="red" d="M15.124-58.57 4.701 37.933"/><path stroke="none" d="M-56.584 30.109a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M68.62599999999999 45.76a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M37.323-7.454a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M16.444 22.815a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M6.0200000000000005 37.934a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M16.444-58.57a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-6.125 -92.213)">V</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-86.159 3.417)">A</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(53.617 19.068)">B</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(22.315 -41.096)">C</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-14.755 3.073)">H</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-16.5 18.192)">E</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(.875 -45.04)">h</text><text x="17.222" y="30.109" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-21.05 2.79)">R</text><g fill="red" stroke="red"><text x="17.222" y="30.109" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-.14 -35.405)">a</text></g></g></svg>
</figure>

## b) Piramide di volume massimo

Il volume vale
$$
V=\frac{1}{3}\cdot \text{Area(base)}\cdot h .
$$
Per una nota proprietà, l'area di un poligono circoscritto a un cerchio è $\text{Area}=pR$, dove $p$ è il semiperimetro del poligono ed $R$ il raggio del cerchio inscritto. Quindi
$$
V=\frac{1}{3}\,pR\,h .
$$
Essendo $p$ (semiperimetro di base) e $h$ (altezza) fissati, **il volume è massimo quando è massimo il raggio $R$** del cerchio inscritto nella base.

Occorre dunque, tra i triangoli di dato perimetro $2p$, individuare quello con raggio inscritto massimo. Per la formula di Erone, con lati $a,b,c$,
$$
R=\frac{\text{Area}(ABC)}{p}=\frac{\sqrt{p(p-a)(p-b)(p-c)}}{p}
=\sqrt{\frac{(p-a)(p-b)(p-c)}{p}} .
$$
Poiché $p$ è costante e $R>0$, massimizzare $R$ equivale a massimizzare il prodotto
$$
(p-a)(p-b)(p-c).
$$
I tre fattori sono positivi e hanno somma costante:
$$
(p-a)+(p-b)+(p-c)=3p-2p=p .
$$
Il prodotto di tre numeri positivi di somma assegnata è massimo quando i tre numeri sono uguali; dunque
$$
p-a=p-b=p-c \;\Rightarrow\; a=b=c .
$$

**La piramide di volume massimo è quella la cui base è un triangolo equilatero.**

Per un triangolo equilatero di lato $l$ si ha $\text{Area}=\dfrac{\sqrt{3}}{4}l^{2}$ e $p=\dfrac{3l}{2}$, da cui il raggio inscritto ottimo
$$
R=\frac{\text{Area}}{p}=\frac{\frac{\sqrt3}{4}l^2}{\frac{3l}{2}}=\frac{\sqrt3}{6}\,l .
$$

## c) La stessa piramide ha area laterale massima?

L'area laterale di una piramide retta è
$$
S_{\ell}=p\cdot a,
$$
dove $p$ è il semiperimetro di base e $a$ l'apotema della piramide. Poiché il triangolo $VHE$ è rettangolo in $H$, con $\overline{VH}=h$ e $\overline{HE}=R$, l'apotema è
$$
a=\sqrt{h^{2}+R^{2}} .
$$
Con $p$ e $h$ fissati, $S_{\ell}$ è massima quando è massima $a$, cioè quando è massimo $a^{2}=h^{2}+R^{2}$; essendo $h$ costante, ciò accade quando è massimo $R$.

È la **stessa condizione** trovata al punto b). Quindi la risposta è **affermativa**: tra le piramidi rette triangolari di uguale altezza e uguale perimetro di base, quella di volume massimo (base equilatera) ha anche area laterale massima.

## d) Calcolo del volume e dell'area laterale

Dati: altezza $h$, perimetro di base $2p=\dfrac{3}{2}\sqrt3\,h$, volume massimo (base equilatera).

**Lato ed elementi della base.** Dal perimetro:
$$
l=\frac{2p}{3}=\frac{\frac{3}{2}\sqrt3\,h}{3}=\frac{\sqrt3}{2}\,h ,
\qquad
p=\frac{1}{2}\cdot\frac{3}{2}\sqrt3\,h=\frac{3}{4}\sqrt3\,h .
$$
Il raggio inscritto:
$$
R=\frac{\sqrt3}{6}\,l=\frac{\sqrt3}{6}\cdot\frac{\sqrt3}{2}\,h=\frac{h}{4} .
$$

**Volume.**
$$
V=\frac{1}{3}\,pR\,h=\frac{1}{3}\cdot\frac{3}{4}\sqrt3\,h\cdot\frac{h}{4}\cdot h
=\frac{\sqrt3}{16}\,h^{3}.
$$

**Apotema.**
$$
a=\sqrt{h^{2}+R^{2}}=\sqrt{h^{2}+\left(\frac{h}{4}\right)^{2}}
=\sqrt{\frac{17}{16}\,h^{2}}=\frac{\sqrt{17}}{4}\,h .
$$

**Area laterale.**
$$
S_{\ell}=p\cdot a=\frac{3}{4}\sqrt3\,h\cdot\frac{\sqrt{17}}{4}\,h
=\frac{3}{16}\sqrt{51}\,h^{2}.
$$

$$
\boxed{\,V=\dfrac{\sqrt3}{16}\,h^{3}\,,\qquad S_{\ell}=\dfrac{3\sqrt{51}}{16}\,h^{2}\,}
$$

*Fonte:* [📄 PDF p.24](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/geometria #cluster/geometria
