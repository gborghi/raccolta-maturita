

**Problema:** [[Problemi/prob_2007_scuole_italiane_allestero_europa_2007_sessione_ord_problema1_60_1|2007 Estero Europa Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_europa_2007_sessione_ord_problema1_60|2007 Estero Europa Ordinaria — Problema 1]]

Si consideri la parabola $\Gamma$ di equazione $f(x)=x^{2}+1$.

## a)

Sia $A(a,b)$ un punto di $\Gamma$: allora $b=a^{2}+1$. Vogliamo mostrare che, per ogni $a\in\mathbb{Z}$, l'ordinata $b$ non è mai divisibile per $3$. Distinguiamo i tre casi in base al resto della divisione di $a$ per $3$.

- Se $a$ è multiplo di $3$, cioè $a=3k$, allora
$$b=9k^{2}+1,$$
che diviso per $3$ dà resto $1$.

- Se $a=3q+1$, allora
$$b=(3q+1)^{2}+1=9q^{2}+6q+2=3\,(3q^{2}+2q)+2,$$
che diviso per $3$ dà resto $2$.

- Se $a=3q+2$, allora
$$b=(3q+2)^{2}+1=9q^{2}+12q+5=3\,(3q^{2}+4q+1)+2,$$
che diviso per $3$ dà resto $2$.

In ogni caso il resto è $1$ oppure $2$, mai $0$: quindi $b$ non è mai divisibile per $3$.

## b)

Una circonferenza tangente a $\Gamma$ nel punto $T=(1,2)$ è tangente in $T$ alla retta tangente alla parabola; il suo centro $C(h,k)$ appartiene perciò alla retta normale a $\Gamma$ in $T$.

Il coefficiente angolare della tangente in $T$ è $f'(1)=2$ (poiché $f'(x)=2x$); la normale ha quindi coefficiente angolare $-\tfrac{1}{2}$. La sua equazione è
$$y-2=-\frac{1}{2}\,(x-1)\ \Rightarrow\ y=-\frac{1}{2}\,x+\frac{5}{2}.$$

Il luogo geometrico descritto da $C$ è dunque la retta
$$y=-\frac{1}{2}\,x+\frac{5}{2}.$$

## c)

Studiamo ora la funzione reciproca
$$g(x)=\frac{1}{x^{2}+1}.$$

- **Dominio e simmetrie:** $g$ è definita su tutto $\mathbb{R}$, è sempre positiva ed è pari.
- **Limiti e asintoti:** $\lim_{x\to\pm\infty}g(x)=0^{+}$, quindi la retta $y=0$ è asintoto orizzontale.
- **Monotonia:** $g'(x)=\dfrac{-2x}{(1+x^{2})^{2}}$, positiva per $x<0$ e negativa per $x>0$. Dunque $g$ cresce fino a $x=0$ e poi decresce: $x=0$ è punto di massimo relativo (e assoluto), con $g(0)=1$.
- **Concavità e flessi:** derivando ancora,
$$g''(x)=\frac{2\,(3x^{2}-1)}{(1+x^{2})^{3}}.$$
Poiché il denominatore è positivo, $g''(x)\ge 0$ equivale a $3x^{2}-1\ge 0$, cioè
$$x\le -\frac{\sqrt{3}}{3}\quad\text{oppure}\quad x\ge \frac{\sqrt{3}}{3}.$$
La concavità è rivolta verso l'alto per $x<-\dfrac{\sqrt{3}}{3}$ e per $x>\dfrac{\sqrt{3}}{3}$, verso il basso per $-\dfrac{\sqrt{3}}{3}<x<\dfrac{\sqrt{3}}{3}$.

La funzione ha quindi **due punti di flesso**, in $x=\pm\dfrac{\sqrt{3}}{3}$, entrambi di ordinata
$$g\!\left(\pm\frac{\sqrt{3}}{3}\right)=\frac{1}{\frac{1}{3}+1}=\frac{3}{4}.$$

Il grafico di $g$ è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="506.429" height="128.829" viewBox="-72 -72 379.822 96.621"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 2.73h366.64"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M292.69.33c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="111.45" y="2.73" stroke="none" font-family="cmmi10" font-size="10" transform="translate(187.053 2.153)">x</text><path fill="none" d="M111.45 13.4v-72.154"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M109.05-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="111.45" y="2.73" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -67.362)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.266.22 2.869-.08 2.868-.086 2.869-.09 2.869-.094 2.868-.098 2.869-.104 2.869-.109 2.868-.115 2.869-.12 2.869-.128 2.868-.135 2.869-.142 2.869-.15 2.868-.159 2.869-.17 2.869-.177 2.868-.19 2.869-.2 2.869-.215 2.868-.227 2.869-.243 2.869-.259 2.868-.276 2.87-.295 2.868-.316 2.868-.339 2.87-.363 2.868-.39 2.868-.419 2.87-.45 2.868-.485 2.868-.523 2.87-.564 2.868-.61 2.868-.66 2.87-.713 2.868-.77 2.869-.836 2.868-.903 2.869-.98 2.869-1.055 2.868-1.144 2.869-1.232 2.869-1.323 2.868-1.422 2.869-1.519 2.869-1.608 2.868-1.7L81.3-25.74l2.869-1.826 2.868-1.857 2.869-1.857 2.869-1.805 2.868-1.711 2.869-1.558 2.869-1.344 2.868-1.068 2.869-.747 2.869-.38h2.868l2.869.368 2.869.742 2.868 1.059 2.869 1.336 2.869 1.558 2.868 1.703 2.87 1.805 2.868 1.86 2.868 1.857 2.87 1.827 2.868 1.775 2.868 1.7 2.87 1.612 2.868 1.524 2.868 1.421 2.87 1.326 2.868 1.234 2.869 1.143 2.868 1.062 2.869.979 2.869.905 2.868.836 2.869.773 2.869.713 2.868.662 2.869.61 2.869.566 2.868.524 2.869.484 2.869.453 2.868.42 2.869.39 2.869.363 2.868.34 2.869.314 2.869.297 2.868.277 2.869.258 2.869.243 2.868.229 2.869.214 2.869.202 2.868.19 2.87.178 2.868.168 2.868.16 2.87.15 2.868.143 2.868.134 2.87.128 2.868.121 2.868.115 2.87.11 2.868.103 2.868.098 2.87.094 2.868.09 2.869.085 2.868.082"/><path stroke="none" d="M113.55-39.949a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><g stroke="none" font-size="10"><text x="111.45" y="2.73" font-family="cmr10" transform="translate(3.533 -48.712)">(0</text><text x="120.339" y="2.73" font-family="cmmi10" transform="translate(3.533 -48.712)">;</text><text x="124.784" y="2.73" font-family="cmr10" transform="translate(3.533 -48.712)">1)</text></g><path stroke="none" d="M137.876-29.279a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M88.625-29.279a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M136.076 2.73v-32.009M86.825 2.73v-32.009"/><g stroke="none"><text x="112.65" y="-7.042" font-family="cmsy7" font-size="7" transform="translate(23.397 14.84)">p</text><path d="M142.617 7.458h3.986v.34h-3.986z"/><text x="119.22" y="-1.207" font-family="cmr7" font-size="7" transform="translate(23.397 14.84)">3</text><path d="M136.047 14.87h10.556v.4h-10.556z"/><text x="115.935" y="6.179" font-family="cmr7" font-size="7" transform="translate(23.397 14.84)">3</text></g><g stroke="none"><text x="111.45" y="2.73" font-family="cmsy10" font-size="10" transform="translate(-40.242 14.84)">¡</text><text x="120.428" y="-7.042" font-family="cmsy7" font-size="7" transform="translate(-40.242 14.84)">p</text><path d="M86.756 7.458h3.986v.34h-3.986z"/><text x="126.998" y="-1.207" font-family="cmr7" font-size="7" transform="translate(-40.242 14.84)">3</text><path d="M80.186 14.87h10.556v.4H80.186z"/><text x="123.713" y="6.179" font-family="cmr7" font-size="7" transform="translate(-40.242 14.84)">3</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="111.45" y="2.73" font-family="cmmi10" font-size="10" transform="translate(88.775 -21.39)">g</text><text x="116.579" y="2.73" font-family="cmr10" font-size="10" transform="translate(88.775 -21.39)">(</text><text x="120.468" y="2.73" font-family="cmmi10" font-size="10" transform="translate(88.775 -21.39)">x</text><text x="126.183" y="2.73" font-family="cmr10" font-size="10" transform="translate(88.775 -21.39)">)</text><text x="132.85" y="2.73" font-family="cmr10" font-size="10" transform="translate(88.775 -21.39)">=</text><text x="151.893" y="-1.207" font-family="cmr7" font-size="7" transform="translate(88.775 -21.39)">1</text><path d="M233.38-21.36h18.563v.4H233.38z"/><text x="144.605" y="6.179" font-family="cmmi7" font-size="7" transform="translate(88.775 -21.39)">x</text><text x="149.14" y="4.179" font-family="cmr5" font-size="5" transform="translate(88.775 -21.39)">2</text><text x="153.043" y="6.179" font-family="cmr7" font-size="7" transform="translate(88.775 -21.39)">+1</text></g></g></g></svg>
</figure>

## d)

Consideriamo
$$F(t)=\int_{0}^{t}g(x)\,dx=\int_{0}^{t}\frac{1}{x^{2}+1}\,dx=\big[\arctan x\big]_{0}^{t}=\arctan t.$$

Quindi
$$\lim_{t\to+\infty}F(t)=\lim_{t\to+\infty}\arctan t=\frac{\pi}{2}.$$

**Interpretazione geometrica:** il limite rappresenta l'area della regione illimitata compresa tra il grafico di $g$, l'asse $x$ e l'asse $y$ (cioè per $x\ge 0$); tale regione, pur essendo illimitata, ha area finita pari a $\dfrac{\pi}{2}$.

Grafico dell'arcotangente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="355.82" height="161.915" viewBox="-72 -72 266.865 121.436"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-5.094h244.294"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M170.344-7.494c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="50.277" y="-5.094" stroke="none" font-family="cmmi10" font-size="10" transform="translate(125.88 3.075)">t</text><path fill="none" d="M50.277 48.966v-107.72"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M47.877-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="50.277" y="-5.094" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -59.537)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-49.788h244.694"/><g stroke="none"><text x="51.477" y="-9.031" font-family="cmmi7" font-size="7" transform="translate(125.88 -42.942)">¼</text><path d="M177.357-50.736h4.927v.4h-4.927z"/><text x="51.948" y="-1.646" font-family="cmr7" font-size="7" transform="translate(125.88 -42.942)">2</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 39.6h244.694"/><g stroke="none"><text x="50.277" y="-5.094" font-family="cmsy10" font-size="10" transform="translate(125.88 46.445)">¡</text><text x="59.255" y="-9.031" font-family="cmmi7" font-size="7" transform="translate(125.88 46.445)">¼</text><path d="M185.135 38.651h4.927v.4h-4.927z"/><text x="59.725" y="-1.646" font-family="cmr7" font-size="7" transform="translate(125.88 46.445)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-63.534 32.629 1.912-.114 1.913-.117 1.912-.123 1.913-.127 1.912-.13 1.913-.136 1.912-.14 1.913-.144 1.912-.15 1.912-.154 1.913-.161 1.912-.17 1.913-.172 1.912-.183 1.913-.187 1.912-.197 1.913-.204 1.912-.214 1.912-.222 1.913-.233 1.912-.243 1.913-.254 1.912-.265 1.913-.28 1.912-.293 1.913-.306 1.912-.324 1.913-.34 1.912-.358 1.912-.377 1.913-.398 1.912-.42 1.913-.445 1.912-.472 1.913-.5 1.912-.533 1.913-.563 1.912-.6 1.912-.638 1.913-.682 1.912-.727 1.913-.775 1.912-.828 1.913-.887 1.912-.946 1.913-1.014L26.35 14.8l1.913-1.158 1.912-1.235 1.912-1.317 1.913-1.4 1.912-1.482 1.913-1.565L39.738 5l1.913-1.718L43.563 1.5l1.913-1.837 1.912-1.877L49.3-4.118l1.913-1.912 1.912-1.903 1.913-1.878 1.912-1.837 1.913-1.784 1.912-1.72 1.913-1.645 1.912-1.566 1.913-1.484 1.912-1.402 1.912-1.318 1.913-1.237 1.912-1.16 1.913-1.085 1.912-1.015 1.913-.946 1.912-.89 1.913-.83 1.912-.776 1.912-.728 1.913-.68 1.912-.64 1.913-.602 1.912-.565 1.913-.53 1.912-.502 1.913-.472 1.912-.445 1.913-.422 1.912-.398 1.912-.38 1.913-.358 1.912-.34 1.913-.323 1.912-.308 1.913-.292 1.912-.28 1.913-.267 1.912-.254 1.912-.243 1.913-.232 1.912-.224 1.913-.213 1.912-.205 1.913-.195 1.912-.19 1.913-.18 1.912-.176 1.913-.166 1.912-.161 1.912-.157 1.913-.15 1.912-.144 1.913-.14 1.912-.135 1.913-.13 1.912-.127 1.913-.123 1.912-.118 1.912-.114"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="50.277" y="-5.094" font-family="cmr10" transform="translate(57.436 -12.574)">arctan</text><text x="79.749" y="-5.094" font-family="cmmi10" transform="translate(57.436 -12.574)">t</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.60](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
