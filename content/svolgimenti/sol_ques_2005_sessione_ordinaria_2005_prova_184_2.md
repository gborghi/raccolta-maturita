

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_2|2005 Ordinaria PNI — Prova — Quesito 2]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Si chiede una definizione di retta tangente a una curva e la dimostrazione che la curva $y = x\sin x$ è tangente alla retta $y = x$ nei punti in cui $\sin x = 1$ e alla retta $y = -x$ nei punti in cui $\sin x = -1$.

## a) Definizione di retta tangente

Sia $P$ un punto di una curva e $Q$ un secondo punto della curva, distinto da $P$. La retta $PQ$ è una **secante**. Si dice **retta tangente** alla curva in $P$ la posizione limite della secante $PQ$ quando $Q$ tende a $P$ muovendosi lungo la curva, ammesso che tale posizione limite esista.

Se la curva è il grafico di una funzione $y = f(x)$ derivabile in $x_0$, il coefficiente angolare della secante per i punti di ascissa $x_0$ e $x_0 + h$ è

$$m(h) = \frac{f(x_0 + h) - f(x_0)}{h},$$

e la sua posizione limite per $h \to 0$ ha coefficiente angolare $f'(x_0)$. La retta tangente in $P = \big(x_0,\, f(x_0)\big)$ ha quindi equazione

$$y - f(x_0) = f'(x_0)\,(x - x_0).$$

Perché una retta sia tangente al grafico in $P$ occorre dunque che essa passi per $P$ e abbia coefficiente angolare uguale a $f'(x_0)$.

## b) La curva $y = x\sin x$

Poniamo $f(x) = x\sin x$. La funzione è derivabile su tutto $\mathbb{R}$ e, per la regola del prodotto,

$$f'(x) = \sin x + x\cos x.$$

Osserviamo inoltre che, essendo $-1 \le \sin x \le 1$, vale

$$|f(x)| = |x|\,|\sin x| \le |x|,$$

cioè il grafico è sempre compreso nella regione delimitata dalle due rette $y = x$ e $y = -x$: esse costituiscono l'inviluppo della curva, che le può soltanto toccare, mai attraversare.

**Tangenza alla retta $y = x$ quando $\sin x = 1$.**
Sia $x_0$ un punto con $\sin x_0 = 1$ (cioè $x_0 = \tfrac{\pi}{2} + 2k\pi$). Dall'identità $\sin^2 x_0 + \cos^2 x_0 = 1$ segue $\cos x_0 = 0$. Allora:

- il punto della curva è $\big(x_0,\, x_0\sin x_0\big) = (x_0,\, x_0)$, che appartiene alla retta $y = x$;
- il coefficiente angolare è

$$f'(x_0) = \sin x_0 + x_0\cos x_0 = 1 + x_0\cdot 0 = 1,$$

uguale al coefficiente angolare della retta $y = x$.

La tangente al grafico in quel punto coincide dunque con la retta $y = x$: la curva è tangente a $y = x$. Coerentemente con la maggiorazione $f(x)\le |x|$, in $x_0 > 0$ la curva tocca dall'interno la retta $y = x$ senza oltrepassarla.

**Tangenza alla retta $y = -x$ quando $\sin x = -1$.**
Sia ora $x_0$ un punto con $\sin x_0 = -1$ (cioè $x_0 = -\tfrac{\pi}{2} + 2k\pi$). Anche qui $\cos x_0 = 0$. Allora:

- il punto della curva è $\big(x_0,\, x_0\sin x_0\big) = (x_0,\, -x_0)$, che appartiene alla retta $y = -x$;
- il coefficiente angolare è

$$f'(x_0) = \sin x_0 + x_0\cos x_0 = -1 + x_0\cdot 0 = -1,$$

uguale al coefficiente angolare della retta $y = -x$.

La tangente al grafico in quel punto coincide quindi con la retta $y = -x$: la curva è tangente a $y = -x$.

In entrambi i casi la curva ha, nei punti considerati, lo stesso punto e la stessa pendenza della retta, che è dunque tangente: come mostra il grafico, il grafico di $y = x\sin x$ oscilla toccando alternativamente le rette $y = x$ e $y = -x$, che ne costituiscono l'inviluppo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="327.248" height="312.056" viewBox="-72 -72 245.436 234.042"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 47.544h212.996"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M139.046 45.144c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="34.628" y="47.544" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.23 2.153)">x</text><path fill="none" d="M34.628 154.241V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M32.228-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="34.628" y="47.544" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -112.175)">y</text><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M-64.957 147.128 134.213-52.04"/><g fill="red" stroke="none" font-size="10"><text x="34.628" y="47.544" font-family="cmmi10" transform="translate(103.118 -98.404)">y</text><text x="42.667" y="47.544" font-family="cmr10" transform="translate(103.118 -98.404)">=</text><text x="53.223" y="47.544" font-family="cmmi10" transform="translate(103.118 -98.404)">x</text></g></g><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="m-64.957-52.04 199.17 199.168"/><g fill="red" stroke="none" font-size="10"><text x="34.628" y="47.544" font-family="cmmi10" transform="translate(103.118 108.95)">y</text><text x="42.667" y="47.544" font-family="cmr10" transform="translate(103.118 108.95)">=</text><text x="53.223" y="47.544" font-family="cmsy10" transform="translate(103.118 108.95)">¡</text><text x="61" y="47.544" font-family="cmmi10" transform="translate(103.118 108.95)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.957-17.88 1.674 10.208 1.674 10.648 1.673 10.914 1.674 11.015 1.674 10.943 1.673 10.716L-53.24 56.9l1.674 9.817 1.673 9.17 1.674 8.407 1.674 7.549 1.673 6.605 1.674 5.6 1.674 4.549 1.673 3.47 1.674 2.381 1.673 1.302 1.674.249 1.674-.765 1.673-1.723 1.674-2.607 1.674-3.413 1.673-4.124 1.674-4.739 1.674-5.242 1.673-5.637 1.674-5.92 1.674-6.089 1.673-6.146 1.674-6.096 1.674-5.946 1.673-5.7 1.674-5.367 1.674-4.961 1.673-4.488 1.674-3.964 1.674-3.399 1.673-2.805L.316 24.67l1.674-1.59 1.673-.99 1.674-.416 1.674.127 1.673.626 1.674 1.07 1.674 1.455 1.673 1.775 1.674 2.024 1.674 2.198 1.673 2.298 1.674 2.324 1.674 2.278 1.673 2.162 1.674 1.982 1.674 1.746 1.673 1.46 1.674 1.131 1.674.773 1.673.391h1.674l1.674-.39 1.673-.772 1.674-1.131 1.674-1.459 1.673-1.745 1.674-1.982 1.674-2.162 1.673-2.277 1.674-2.324 1.674-2.3 1.673-2.197 1.674-2.024 1.674-1.777 1.673-1.455 1.674-1.071 1.674-.626 1.673-.128 1.674.415 1.674.99 1.673 1.588 1.674 2.196 1.674 2.804 1.673 3.398 1.674 3.963 1.674 4.488 1.673 4.96 1.674 5.366 1.674 5.7 1.673 5.945 1.674 6.096 1.674 6.146 1.673 6.09 1.674 5.92 1.674 5.637 1.673 5.243 1.674 4.74 1.674 4.124 1.673 3.415 1.674 2.609 1.674 1.726 1.673.765 1.674-.247 1.674-1.299 1.673-2.378 1.674-3.47 1.674-4.547 1.673-5.597 1.674-6.604 1.674-7.547 1.673-8.405 1.674-9.17 1.674-9.816 1.673-10.335 1.674-10.715 1.674-10.944 1.673-11.014 1.674-10.914 1.674-10.648 1.673-10.21"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="34.628" y="47.544" font-family="cmmi10" transform="translate(55.427 -87.26)">y</text><text x="42.667" y="47.544" font-family="cmr10" transform="translate(55.427 -87.26)">=</text><text x="53.223" y="47.544" font-family="cmmi10" transform="translate(55.427 -87.26)">x</text><text x="60.605" y="47.544" font-family="cmr10" transform="translate(55.427 -87.26)">sin</text><text x="74.549" y="47.544" font-family="cmmi10" transform="translate(55.427 -87.26)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
