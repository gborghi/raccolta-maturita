

**Quesito:** [[Quesiti/ques_2002_suppletiva_ordinamento_2002_questionario_36_4|2002 Suppletiva Ordinamento — Questionario — Quesito 4]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_questionario_36|2002 Suppletiva Ordinamento — Questionario]]

Sia $f$ la funzione reale di variabile reale definita da

$$f(x)=\begin{cases}\dfrac{\operatorname{sen}2x}{a} & 0<x<\dfrac{\pi}{2},\\[1mm]\dfrac{1+a}{\operatorname{sen}x} & -\dfrac{\pi}{2}<x<0,\end{cases}$$

con $a$ parametro reale non nullo. Si vuole stabilire se esista un valore di $a$ per il quale il dominio possa essere prolungato anche nel punto $x=0$.

Il punto $x=0$ è escluso dal dominio. Prolungare il dominio a $x=0$ mantenendo la continuità è possibile se e solo se in $0$ la funzione presenta una discontinuità eliminabile, cioè se il limite destro e il limite sinistro esistono, sono finiti e coincidono.

**Limite destro.** Per $x\to 0^+$ si usa il primo ramo:

$$\lim_{x\to 0^+}f(x)=\lim_{x\to 0^+}\frac{\operatorname{sen}2x}{a}=\frac{0}{a}=0,$$

finito per ogni $a\neq 0$.

**Limite sinistro.** Per $x\to 0^-$ si usa il secondo ramo:

$$\lim_{x\to 0^-}f(x)=\lim_{x\to 0^-}\frac{1+a}{\operatorname{sen}x}.$$

Poiché $\operatorname{sen}x\to 0^-$, il rapporto tende a $\pm\infty$ a meno che il numeratore non sia nullo. Il limite è dunque finito soltanto se $1+a=0$, cioè $a=-1$; in tal caso $\dfrac{1+a}{\operatorname{sen}x}=0$ per ogni $x$ e il limite vale $0$.

**Conclusione.** Per $a=-1$ i due limiti unilaterali valgono entrambi $0$: la funzione ha in $x=0$ una discontinuità eliminabile e il dominio può essere prolungato a $x=0$ ponendo $f(0)=0$. Per ogni altro valore di $a$ il limite sinistro è infinito, quindi il prolungamento continuo non è possibile.

Con $a=-1$ si ha $\dfrac{\operatorname{sen}2x}{a}=-\operatorname{sen}2x$ e $\dfrac{1+a}{\operatorname{sen}x}=0$, perciò il prolungamento continuo della funzione è

$$\tilde f(x)=\begin{cases}0 & -\dfrac{\pi}{2}<x\le 0,\\[1mm]-\operatorname{sen}2x & 0<x<\dfrac{\pi}{2}.\end{cases}$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="249.268" height="128.721" viewBox="-72 -72 186.951 96.541"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-68.617-33.546H101.7"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M99.82-35.946c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="16.742" y="-33.546" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.891 2.153)">x</text><path fill="none" d="M16.742 24.07v-82.824"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M14.342-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="16.742" y="-33.546" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -31.085)">y</text><path fill="none" stroke="#00f" stroke-width="1.2" d="M-50.299-33.546h67.04M16.742-33.546l.848 1.695.849 1.694.848 1.69.849 1.68.848 1.67.849 1.656.848 1.64.849 1.623.849 1.6.848 1.578.849 1.552.848 1.522.849 1.492.848 1.458.849 1.422.848 1.385.849 1.344.849 1.304.848 1.257.849 1.211.848 1.164.849 1.114.848 1.062.849 1.008.848.954.849.897.849.838.848.78.849.719.848.657.849.595.848.531.849.467.848.4.849.336.849.27.848.2.849.136.848.068h.849l.848-.068.849-.135.848-.2.849-.27.849-.335.848-.4.849-.466.848-.531.849-.595.848-.656.849-.719.848-.78.849-.838.849-.896.848-.954.849-1.008.848-1.061.849-1.114.848-1.163.849-1.211.848-1.258.849-1.303.849-1.345.848-1.384.849-1.422.848-1.458.849-1.492.848-1.522.849-1.551.848-1.577.849-1.601.849-1.622.848-1.64.849-1.657.848-1.67.849-1.68.848-1.689.849-1.694.848-1.696"/><path fill="#00f" stroke="none" d="M18.842-33.546a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M50.262-33.546V9.133h-33.52"/><g stroke="none" font-size="10"><text x="16.742" y="-33.546" font-family="cmsy10" transform="translate(-16.31 45.485)">¡</text><text x="24.519" y="-33.546" font-family="cmr10" transform="translate(-16.31 45.485)">1</text></g><g stroke="none"><text x="16.742" y="-33.546" font-family="cmsy10" font-size="10" transform="translate(-85.679 10.484)">¡</text><text x="25.719" y="-37.484" font-family="cmmi7" font-size="7" transform="translate(-85.679 10.484)">¼</text><path d="M-59.96-25.762h4.927v.4h-4.927z"/><text x="26.19" y="-30.098" font-family="cmr7" font-size="7" transform="translate(-85.679 10.484)">2</text></g><g stroke="none"><text x="17.942" y="-37.484" font-family="cmmi7" font-size="7" transform="translate(70.573 -6.981)">¼</text><path d="M88.515-43.227h4.927v.4h-4.927z"/><text x="18.412" y="-30.098" font-family="cmr7" font-size="7" transform="translate(70.573 -6.981)">2</text></g><g stroke="none"><text x="17.942" y="-37.484" font-family="cmmi7" font-size="7" transform="translate(37.053 -6.981)">¼</text><path d="M54.995-43.227h4.927v.4h-4.927z"/><text x="18.412" y="-30.098" font-family="cmr7" font-size="7" transform="translate(37.053 -6.981)">4</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
