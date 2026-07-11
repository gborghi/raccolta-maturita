

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_7|2003 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Si vuole dimostrare la formula che fornisce l'area della regione piana racchiusa da un'ellisse di semiassi noti $a$ e $b$.

## Impostazione

Riferiamo l'ellisse a un sistema di riferimento cartesiano ortogonale monometrico, con il centro nell'origine e gli assi di simmetria coincidenti con gli assi coordinati. L'equazione dell'ellisse è allora

$$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,$$

con $a>0$ e $b>0$ semiassi. Ricavando $y$ si ottiene

$$y=\pm\, b\sqrt{1-\frac{x^2}{a^2}},$$

dove il segno $+$ corrisponde alla metà superiore dell'ellisse e il segno $-$ alla metà inferiore.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="267.427" height="197.198" viewBox="-72 -72 200.57 147.898"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 12.832h187.39"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M113.44 10.432c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="21.825" y="12.832" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.428 2.153)">x</text><path fill="none" d="M21.825 75.428V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M19.425-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="21.825" y="12.832" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -77.463)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M100.07 12.832c0-32.863-35.054-50.077-78.245-50.077s-78.246 17.214-78.246 50.077 35.054 50.077 78.246 50.077 78.245-17.214 78.245-50.077"/><path fill="#e1e1ff" stroke="none" d="M100.07 12.832c0-32.863-35.054-50.077-78.245-50.077s-78.246 17.214-78.246 50.077 35.054 50.077 78.246 50.077 78.245-17.214 78.245-50.077"/><path fill="none" stroke-dasharray="3.0,3.0" d="M100.07 12.832v-1.565"/><text x="21.825" y="12.832" stroke="none" font-family="cmmi10" font-size="10" transform="translate(81.778 7.839)">a</text><text x="21.825" y="12.832" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-7.825 -53.61)">b</text><path stroke="none" d="M101.72 12.832a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0M23.474999999999998-37.245a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/></g></svg>
</figure>

## Calcolo dell'area

Per la simmetria della figura rispetto a entrambi gli assi, l'area totale è quattro volte l'area della porzione contenuta nel primo quadrante, dove $0\le x\le a$ e $y\ge 0$. Quindi

$$A=4\int_{0}^{a} b\sqrt{1-\frac{x^2}{a^2}}\;dx=\frac{4b}{a}\int_{0}^{a}\sqrt{a^2-x^2}\;dx.$$

L'integrale rimasto rappresenta l'area di un quarto del cerchio di raggio $a$, quindi vale

$$\int_{0}^{a}\sqrt{a^2-x^2}\;dx=\frac{\pi a^2}{4}.$$

Volendo, lo si calcola con la sostituzione $x=a\sin t$, da cui $dx=a\cos t\,dt$; per $x=0$ si ha $t=0$ e per $x=a$ si ha $t=\frac{\pi}{2}$. Poiché $\sqrt{a^2-x^2}=a\cos t$ (con $\cos t\ge 0$ nell'intervallo considerato),

$$\int_{0}^{a}\sqrt{a^2-x^2}\;dx=\int_{0}^{\pi/2} a^2\cos^2 t\;dt=a^2\int_{0}^{\pi/2}\frac{1+\cos 2t}{2}\;dt=a^2\left[\frac{t}{2}+\frac{\sin 2t}{4}\right]_{0}^{\pi/2}=\frac{\pi a^2}{4}.$$

## Conclusione

Sostituendo si ottiene

$$A=\frac{4b}{a}\cdot\frac{\pi a^2}{4}=\pi\,a\,b.$$

L'area della regione racchiusa da un'ellisse di semiassi $a$ e $b$ è dunque

$$\boxed{\,A=\pi\,a\,b\,}.$$

Come verifica, nel caso particolare $a=b=r$ l'ellisse diventa una circonferenza di raggio $r$ e la formula fornisce $A=\pi r^2$, l'area del cerchio, come atteso.

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
