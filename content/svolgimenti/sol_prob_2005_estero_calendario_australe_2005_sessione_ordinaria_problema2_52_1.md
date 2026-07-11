

**Problema:** [[Problemi/prob_2005_estero_calendario_australe_2005_sessione_ordinaria_problema2_52_1|2005 Estero Australe Ord — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_estero_calendario_australe_2005_sessione_ordinaria_problema2_52|2005 Estero Australe Ord — Problema 2]]

Scuole italiane all'estero (Calendario australe) 2005 — Sessione ordinaria — Problema 2.

Il triangolo $ABC$ ha il lato $BC$ doppio di $CA$, con $\overline{CA}=k$ (quindi $\overline{BC}=2k$). Il triangolo rettangolo $ABD$, con $D$ dalla parte opposta di $C$ rispetto ad $AB$ e angolo retto in $B$, ha il cateto $AB$ doppio di $BD$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="191.988" height="97.246" viewBox="-72 -72 143.991 72.934"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.542-58.57h113.84L33.53-13.036h-91.072Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.542-58.57 33.53-13.036"/><path d="M-56.422000000000004-58.57a1.12 1.12 0 1 0-2.24 0 1.12 1.12 0 0 0 2.24 0ZM34.65-13.035a1.12 1.12 0 1 0-2.24 0 1.12 1.12 0 0 0 2.24 0ZM-56.422000000000004-13.035a1.12 1.12 0 1 0-2.24 0 1.12 1.12 0 0 0 2.24 0ZM57.418-58.57a1.12 1.12 0 1 0-2.24 0 1.12 1.12 0 0 0 2.24 0Zm-1.12 0"/><path fill="none" d="M26.68-13.035v-6.828h6.828"/><text x="-57.542" y="-13.035" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 -49.069)">A</text><text x="-57.542" y="-13.035" stroke="none" font-family="cmmi10" font-size="10" transform="translate(117.373 -49.069)">D</text><text x="-57.542" y="-13.035" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.605 10.366)">B</text><text x="-57.542" y="-13.035" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.395 10.366)">C</text><text x="-57.542" y="-13.035" stroke="none" font-family="cmmi10" font-size="10" transform="translate(9.89 -10.594)">x</text></g></svg>
</figure>

## a)

Si esprima l'area del quadrilatero $ADBC$ in funzione dell'angolo $A\hat{C}B$.

Poniamo $x=A\hat{C}B$. Per il teorema del coseno nel triangolo $ABC$:

$$\overline{AB}^2 = k^2 + 4k^2 - 4k^2\cos x = k^2(5-4\cos x),$$

da cui

$$\overline{AB}=k\sqrt{5-4\cos x}=2\,\overline{BD}.$$

La diagonale $AB$ divide il quadrilatero $ADBC$ nei triangoli $ABC$ e $ABD$. Si ha

$$\text{Area}(ABC)=\frac12\,\overline{CA}\cdot\overline{CB}\,\sin x=\frac12\,k\cdot 2k\,\sin x=k^2\sin x,$$

$$\text{Area}(ABD)=\frac12\,\overline{AB}\cdot\overline{BD}=\frac12\,\overline{AB}\cdot\frac{\overline{AB}}{2}=\frac{\overline{AB}^2}{4}=\frac{k^2(5-4\cos x)}{4}.$$

Quindi

$$\text{Area}(ADBC)=k^2\sin x+\frac{k^2}{4}(5-4\cos x)=\frac{k^2}{4}\,(4\sin x-4\cos x+5).$$

## b)

Si determini il valore di $A\hat{C}B$ cui corrisponde il quadrilatero di area massima.

Scriviamo l'area nella forma

$$\text{Area}(ADBC)=\frac{k^2}{4}(4\sin x-4\cos x+5)=k^2\left(\sin x-\cos x+\frac54\right).$$

Osserviamo che

$$\sin x-\cos x=\sqrt2\left(\frac{\sqrt2}{2}\sin x-\frac{\sqrt2}{2}\cos x\right)=\sqrt2\,\sin\!\left(x-\frac{\pi}{4}\right),$$

perciò

$$\text{Area}(ADBC)=k^2\left(\sqrt2\,\sin\!\left(x-\frac{\pi}{4}\right)+\frac54\right).$$

L'area è massima quando $\sin\!\left(x-\dfrac{\pi}{4}\right)=1$, cioè $x-\dfrac{\pi}{4}=\dfrac{\pi}{2}$, da cui (essendo $0<x<\pi$)

$$A\hat{C}B=\frac{3}{4}\pi.$$

## c)

Di tale quadrilatero si determinino area e perimetro.

**Area.** Sostituendo $\sin\!\left(x-\dfrac{\pi}{4}\right)=1$:

$$\text{Area}_{\max}=k^2\left(\sqrt2+\frac54\right).$$

**Perimetro.** Per $x=\dfrac{3}{4}\pi$ si ha $\cos x=-\dfrac{\sqrt2}{2}$, quindi

$$\overline{AB}^2=k^2(5-4\cos x)=k^2(5+2\sqrt2),\qquad \overline{AB}=k\sqrt{5+2\sqrt2},$$

$$\overline{BD}=\frac{\overline{AB}}{2}=\frac{k}{2}\sqrt{5+2\sqrt2}.$$

L'ipotenusa $AD$ del triangolo rettangolo $ABD$ vale

$$\overline{AD}=\sqrt{\overline{AB}^2+\overline{BD}^2}=\sqrt{\frac54\,\overline{AB}^2}=\frac{\sqrt5}{2}\,\overline{AB}=\frac{\sqrt5}{2}\,k\sqrt{5+2\sqrt2}.$$

Il perimetro del quadrilatero $ADBC$ è

$$2p=\overline{CA}+\overline{CB}+\overline{BD}+\overline{AD}=k+2k+\frac{k}{2}\sqrt{5+2\sqrt2}+\frac{\sqrt5}{2}\,k\sqrt{5+2\sqrt2}$$

$$=3k+\frac{k}{2}\sqrt{5+2\sqrt2}\,(1+\sqrt5)=\frac{k}{2}\left[6+(1+\sqrt5)\sqrt{5+2\sqrt2}\right].$$

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/geometria #cluster/geometria
