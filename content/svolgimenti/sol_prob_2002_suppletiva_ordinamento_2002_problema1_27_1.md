

**Problema:** [[Problemi/prob_2002_suppletiva_ordinamento_2002_problema1_27_1|2002 Suppletiva Ordinamento — Problema 1 — Problema 1]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_problema1_27|2002 Suppletiva Ordinamento — Problema 1]]

Il polinomio $f(x)$ diviso per $x^2-1$ dà quoziente $x$ e resto $x$.

## a)

La divisione euclidea dà $f(x) = (x^2-1)\,q(x) + r(x)$ con $q(x)=x$ e $r(x)=x$, quindi

$$f(x) = (x^2-1)\,x + x = x^3 - x + x = x^3.$$

## b)

Studiamo $y = \dfrac{x^3}{x^2-1}$. Il dominio è $\mathbb{R}\setminus\{-1,1\}$.

Eseguendo la divisione,

$$\frac{x^3}{x^2-1} = x + \frac{x}{x^2-1},$$

da cui si legge l'asintoto obliquo $y=x$; gli asintoti verticali sono $x=\pm 1$. La funzione è dispari, quindi il grafico è simmetrico rispetto all'origine.

La derivata prima è

$$y' = \frac{3x^2(x^2-1)-x^3\cdot 2x}{(x^2-1)^2}=\frac{x^2(x^2-3)}{(x^2-1)^2},$$

che si annulla in $x=0$ e $x=\pm\sqrt{3}$. In $x=-\sqrt{3}$ si ha un massimo relativo con ordinata $y=-\dfrac{3\sqrt{3}}{2}$; in $x=\sqrt{3}$ un minimo relativo con ordinata $y=\dfrac{3\sqrt{3}}{2}$; in $x=0$ un flesso a tangente orizzontale.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="262.248" height="458.581" viewBox="-72 -72 196.686 343.935"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 106.156H98.815"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M96.935 103.756c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="13.572" y="106.156" stroke="none" font-family="cmmi10" font-size="10" transform="translate(89.175 2.153)">x</text><path fill="none" d="M13.572 271.465v-330.22"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M11.172-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="13.572" y="106.156" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -170.787)">y</text><text x="13.572" y="106.156" stroke="none" font-family="cmr10" font-size="10" transform="translate(23.45 9.977)">1</text><g stroke="none" font-size="10"><text x="13.572" y="106.156" font-family="cmsy10" transform="translate(-36.228 9.977)">¡</text><text x="21.35" y="106.156" font-family="cmr10" transform="translate(-36.228 9.977)">1</text></g><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-6.344 265.49V-53.179M33.49 265.49V-53.179"/><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M-66.095 185.823 93.24 26.488"/><g fill="red" stroke="none" font-size="10"><text x="13.572" y="106.156" font-family="cmmi10" transform="translate(83.2 -78.487)">y</text><text x="21.612" y="106.156" font-family="cmr10" transform="translate(83.2 -78.487)">=</text><text x="32.167" y="106.156" font-family="cmmi10" transform="translate(83.2 -78.487)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.095 191.134.986-.91.985-.908.986-.905.985-.903.986-.9.986-.897.985-.894.986-.892.985-.888.986-.884.985-.881.986-.877.986-.873.985-.869.986-.864.985-.859.986-.854.985-.848.986-.844.986-.836.985-.83.986-.822.985-.814.986-.806.985-.797.986-.787.985-.777.986-.764.986-.753.985-.738.986-.723.985-.707.986-.688.985-.67.986-.643.986-.62.985-.591.986-.56.985-.522.986-.481.985-.435.986-.377.986-.314.985-.239.986-.149.985-.04.986.092.985.255.986.458.986.721.985 1.06.986 1.522.985 2.156.986 3.093.985 4.507.986 6.85.986 11.11.985 20.268.986 46.3M-4.751 5.194l.62 34.362.622 19.086.62 12.039.622 8.213.62 5.906.621 4.41.621 3.381.621 2.65.62 2.106.622 1.694.62 1.376.622 1.123.62.92.621.757.621.62.621.51.621.415.62.338.622.27.62.217.622.169.62.13.621.096.621.07.621.047.62.03.622.017.62.008.622.002h.62l.621.001.621.008.621.016.62.03.622.047.62.07.622.095.62.129.621.168.621.215.621.27.621.335.62.414.622.506.62.619.622.752.62.916.621 1.117.621 1.369.621 1.687.62 2.094.622 2.635.62 3.36.622 4.381.62 5.864.621 8.142.621 11.92.621 18.85.621 33.816M35.083-44.621l.985 46.693.986 20.389.985 11.162.986 6.877.985 4.524.986 3.098.986 2.165.985 1.526.986 1.065.985.721.986.462.985.255.986.094.986-.04.985-.147.986-.238.985-.313.986-.378.985-.433.986-.481.986-.522.985-.56.986-.59.985-.62.986-.644.985-.669.986-.687.986-.707.985-.723.986-.738.985-.752.986-.766.985-.776.986-.787.986-.797.985-.806.986-.814.985-.822.986-.83.985-.836.986-.842.986-.85.985-.853.986-.86.985-.863.986-.869.985-.873.986-.877.986-.881.985-.884.986-.888.985-.892.986-.894.985-.897.986-.9.986-.903.985-.905.986-.908.985-.91"/><path stroke="none" d="M14.972 106.156a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><g fill="#00f" stroke="#00f"><text x="13.572" y="106.156" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.25 -116.084)">G</text></g></g></svg>
</figure>

## c)

Tangente nel punto di ascissa $x=\dfrac{1}{2}$:

$$y\!\left(\tfrac12\right)=\frac{1/8}{1/4-1}=-\frac16,\qquad
y'\!\left(\tfrac12\right)=\frac{\frac14\left(\frac14-3\right)}{\left(\frac14-1\right)^2}=\frac{\frac14\cdot\left(-\frac{11}{4}\right)}{\frac{9}{16}}=-\frac{11}{9}.$$

La tangente è dunque

$$y+\frac16=-\frac{11}{9}\left(x-\frac12\right)\;\Rightarrow\; t\colon y=-\frac{11}{9}x+\frac49.$$

## d)

Cerchiamo i punti comuni a $t$ e $G$. Da $\dfrac{x^3}{x^2-1}=-\dfrac{11}{9}x+\dfrac49$, cioè $9x^3=(x^2-1)(-11x+4)$:

$$9x^3=-11x^3+4x^2+11x-4\;\Rightarrow\;20x^3-4x^2-11x+4=0.$$

Poiché $t$ è tangente in $x=\dfrac12$, tale valore è radice doppia:

$$20x^3-4x^2-11x+4=(2x-1)^2(5x+4).$$

La terza radice è $x=-\dfrac45$, con

$$y=-\frac{11}{9}\left(-\frac45\right)+\frac49=\frac{44}{45}+\frac{20}{45}=\frac{64}{45}.$$

I punti comuni sono quindi $\left(\dfrac12,\,-\dfrac16\right)$ (di tangenza, molteplicità $2$) e $\left(-\dfrac45,\,\dfrac{64}{45}\right)$.

## e)

Frazioni parziali e primitiva. Da $\dfrac{x}{x^2-1}=\dfrac{a}{x+1}+\dfrac{b}{x-1}$ si ottiene $x=a(x-1)+b(x+1)$: per $x=1$ si ha $b=\dfrac12$, per $x=-1$ si ha $a=\dfrac12$, quindi

$$a=b=\frac12.$$

Per la primitiva, essendo $f(x)=x^3$,

$$\frac{f(x)}{x^2-1}=\frac{x^3}{x^2-1}=x+\frac{x}{x^2-1},$$

dove il termine $\dfrac{x}{x^2-1}$ si integra con le frazioni parziali appena trovate. Pertanto

$$\int\frac{f(x)}{x^2-1}\,dx=\int x\,dx+\frac12\int\!\left(\frac{1}{x+1}+\frac{1}{x-1}\right)dx=\frac{x^2}{2}+\frac12\ln\bigl|x^2-1\bigr|+C.$$

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
