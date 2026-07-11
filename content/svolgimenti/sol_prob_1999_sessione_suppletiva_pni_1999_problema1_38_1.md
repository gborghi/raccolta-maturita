

**Problema:** [[Problemi/prob_1999_sessione_suppletiva_pni_1999_problema1_38_1|1999 Suppletiva PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/1999_sessione_suppletiva_pni_1999_problema1_38|1999 Suppletiva PNI — Problema 1]]

Sono date la funzione $f(x)=\dfrac{4}{x+k}$ e la funzione $g(x)=x^{2}-hx+4$, dove $k$ e $h$ sono due numeri reali.

## a) Determinazione di $k$ e $h$

Si impone $f(1)=g(1)$ e $f'(1)=g'(1)$.

Con $k\neq -1$ si ha
$$f(1)=\frac{4}{1+k},\qquad g(1)=1-h+4=5-h,$$
mentre, essendo $f'(x)=-\dfrac{4}{(x+k)^{2}}$ e $g'(x)=2x-h$,
$$f'(1)=-\frac{4}{(1+k)^{2}},\qquad g'(1)=2-h.$$

Le due condizioni danno il sistema
$$\begin{cases} \dfrac{4}{1+k}=5-h \\[2mm] -\dfrac{4}{(1+k)^{2}}=2-h \end{cases}$$

Dalla prima equazione $h=5-\dfrac{4}{1+k}$; sostituendo nella seconda:
$$-\frac{4}{(1+k)^{2}}=2-5+\frac{4}{1+k}=-3+\frac{4}{1+k}.$$

Moltiplicando per $(1+k)^{2}$:
$$-4=-3(1+k)^{2}+4(1+k)\;\Longrightarrow\;3k^{2}+2k-5=0,$$
da cui
$$k=1 \qquad\text{oppure}\qquad k=-\frac{5}{3}.$$

I corrispondenti valori di $h$ sono:
- per $k=1$: $\;h=5-\dfrac{4}{1+1}=5-2=3$;
- per $k=-\dfrac{5}{3}$: $\;h=5-\dfrac{4}{-\frac{2}{3}}=5+6=11$.

**Le soluzioni sono quindi $\;k=1,\ h=3\;$ oppure $\;k=-\dfrac{5}{3},\ h=11.$**

## b) Grafici delle due funzioni

Si considerano i valori $k=1$ e $h=3$, ottenendo
$$y_{1}=\frac{4}{x+1},\qquad y_{2}=x^{2}-3x+4.$$

La funzione $y_{1}=\dfrac{4}{x+1}$ è un'iperbole equilatera (funzione omografica) di centro $C=(-1;\,0)$, con asintoti di equazioni $x=-1$ e $y=0$; interseca l'asse delle ordinate nel punto $(0;\,4)$.

La funzione $y_{2}=x^{2}-3x+4$ è una parabola con asse parallelo all'asse $y$ e concavità rivolta verso l'alto. Poiché $\Delta = 9-16=-7<0$, non interseca l'asse delle ascisse; interseca l'asse $y$ nel punto $(0;\,4)$ e ha vertice
$$V=\left(\frac{3}{2};\,\frac{7}{4}\right).$$

Per trovare i punti comuni si risolve $\dfrac{4}{x+1}=x^{2}-3x+4$, cioè
$$4=(x^{2}-3x+4)(x+1)=x^{3}-2x^{2}+x+4,$$
$$x^{3}-2x^{2}+x=0\;\Longrightarrow\;x\,(x-1)^{2}=0,$$
da cui $x=0$ e $x=1$ (soluzione doppia). Le curve si intersecano dunque in $B=(0;\,4)$ e in $A=(1;\,2)$; in $A$, essendo la radice doppia, le due curve sono **tangenti**. Per $0<x<1$ la parabola sta al di sopra dell'iperbole.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="248.837" height="1334.196" viewBox="-72 -72 186.628 1000.647"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-68.37 914.506h169.747"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M99.497 912.106c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-35.081" y="914.506" stroke="none" font-family="cmmi10" font-size="10" transform="translate(140.39 2.153)">x</text><path fill="none" d="M-35.081 925.603v-195.64"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-37.481 731.843c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-35.081" y="914.506" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -190.42)">y</text><path fill="none" d="M1.907 912.657v3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(34.864 10.538)">1</text><path fill="none" d="M38.896 912.657v3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(71.852 10.538)">2</text><path fill="none" d="M75.885 912.657v3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(108.84 10.538)">3</text><path fill="none" d="M-33.232 877.517h-3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.633 -34.41)">1</text><path fill="none" d="M-33.232 840.529h-3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.633 -71.4)">2</text><path fill="none" d="M-33.232 803.54h-3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.633 -108.388)">3</text><path fill="none" d="M-33.232 766.552h-3.699"/><text x="-35.081" y="914.506" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.633 -145.377)">4</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-72.07 925.603v-196.04"/><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-42.479 742.88 1.685 5.652 1.686 5.5 1.685 5.347 1.685 5.192 1.686 5.039 1.685 4.885 1.685 4.732 1.685 4.578 1.686 4.425 1.685 4.271 1.685 4.117 1.686 3.964 1.685 3.811 1.685 3.657 1.686 3.503 1.685 3.35 1.685 3.195 1.685 3.043 1.686 2.889 1.685 2.735 1.685 2.582 1.686 2.428 1.685 2.274 1.685 2.121 1.686 1.968 1.685 1.814 1.685 1.66 1.686 1.507 1.685 1.353 1.685 1.2 1.685 1.046 1.686.892 1.685.74 1.685.584 1.686.432 1.685.278 1.685.125 1.686-.03 1.685-.182 1.685-.336 1.685-.49 1.686-.643 1.685-.797 1.685-.95 1.686-1.104 1.685-1.258 1.685-1.411 1.686-1.565 1.685-1.718 1.685-1.872 1.686-2.025 1.685-2.18 1.685-2.332 1.685-2.486 1.686-2.64 1.685-2.793 1.685-2.948 1.686-3.1 1.685-3.254 1.685-3.407 1.686-3.562 1.685-3.715 1.685-3.868 1.685-4.022 1.686-4.176 1.685-4.329 1.685-4.482 1.686-4.637 1.685-4.79 1.685-4.943 1.686-5.097 1.685-5.25 1.685-5.404 1.686-5.558 1.685-5.71 1.685-5.866 1.685-6.018 1.686-6.172 1.685-6.326"/><g fill="#00f" stroke="none"><text x="-35.081" y="914.506" font-family="cmmi10" font-size="10" transform="translate(129.474 -197.002)">y</text><text x="-30.179" y="916.006" font-family="cmr7" font-size="7" transform="translate(129.474 -197.002)">2</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-66.522-71.87 1.32 189.628 1.321 128.464 1.321 92.813 1.32 70.191 1.322 54.921 1.32 44.125 1.321 36.27 1.32 30.34 1.321 25.72 1.321 22.088 1.32 19.196 1.321 16.826 1.321 14.873 1.32 13.246 1.322 11.852 1.32 10.686 1.321 9.678 1.32 8.807 1.321 8.05 1.321 7.385 1.32 6.793 1.321 6.274 1.321 5.816 1.32 5.4 1.322 5.031 1.32 4.7 1.321 4.395 1.32 4.121 1.321 3.88 1.321 3.647 1.32 3.444 1.321 3.255 1.321 3.074 1.32 2.918 1.322 2.767 1.32 2.626 1.321 2.504 1.32 2.382 1.321 2.275 1.321 2.167 1.32 2.08 1.321 1.982 1.321 1.897 1.32 1.824 1.322 1.742 1.32 1.683 1.321 1.613 1.32 1.55 1.321 1.49 1.321 1.439 1.32 1.383 1.322 1.336 1.32 1.29 1.32 1.243 1.322 1.202 1.32 1.166 1.321 1.12 1.32 1.092 1.321 1.052 1.321 1.02 1.32.992 1.322.96 1.32.93 1.32.905 1.322.877 1.32.853 1.321.83 1.32.806 1.321.783 1.321.764 1.32.743 1.322.722 1.32.704 1.32.687 1.322.669 1.32.653 1.321.636 1.32.62 1.321.607 1.321.59 1.32.578 1.322.564 1.32.552 1.32.539 1.322.526 1.32.515 1.321.503 1.32.494 1.321.482 1.321.47 1.32.464 1.322.452 1.32.443 1.32.434 1.322.426 1.32.416 1.321.41 1.32.399 1.321.394 1.321.385 1.32.378 1.322.371 1.32.364 1.32.357 1.322.352 1.32.344 1.321.338 1.32.333 1.321.325 1.321.32 1.32.316 1.322.31 1.32.303 1.32.3 1.322.294 1.32.288 1.321.285 1.32.28 1.321.275"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-35.081" y="914.506" font-family="cmmi10" font-size="10" transform="translate(117.368 -21.013)">y</text><text x="-30.179" y="916.006" font-family="cmr7" font-size="7" transform="translate(117.368 -21.013)">1</text></g></g><path stroke="none" d="M-33.001 766.552a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><g stroke="none" font-size="10"><text x="-35.081" y="914.506" font-family="cmmi10" transform="translate(3.533 -153.988)">B</text><text x="-26.995" y="914.506" font-family="cmr10" transform="translate(3.533 -153.988)">(0</text><text x="-18.106" y="914.506" font-family="cmmi10" transform="translate(3.533 -153.988)">;</text><text x="-13.661" y="914.506" font-family="cmr10" transform="translate(3.533 -153.988)">4)</text></g><path stroke="none" d="M3.987 840.529a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><g stroke="none" font-size="10"><text x="-35.081" y="914.506" font-family="cmmi10" transform="translate(40.522 -80.01)">A</text><text x="-27.581" y="914.506" font-family="cmr10" transform="translate(40.522 -80.01)">(1</text><text x="-18.692" y="914.506" font-family="cmmi10" transform="translate(40.522 -80.01)">;</text><text x="-14.248" y="914.506" font-family="cmr10" transform="translate(40.522 -80.01)">2)</text></g></g></svg>
</figure>

## c) Area della regione compresa

L'area della superficie delimitata dalle due curve, per $0\le x\le 1$, è
$$\mathcal{A}=\int_{0}^{1}\!\left[(x^{2}-3x+4)-\frac{4}{x+1}\right]dx.$$

Una primitiva dell'integranda è
$$\frac{x^{3}}{3}-\frac{3}{2}x^{2}+4x-4\ln|x+1|.$$

Valutando tra $0$ e $1$:
$$\mathcal{A}=\left[\frac{1}{3}-\frac{3}{2}+4-4\ln 2\right]-0=\frac{17}{6}-4\ln 2.$$

Numericamente
$$\mathcal{A}=\frac{17}{6}-4\ln 2\;\cong\;0{,}0607\ \text{u}^{2}.$$

*Fonte:* [📄 PDF p.38](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
