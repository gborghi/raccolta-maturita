

**Quesito:** [[Quesiti/ques_2008_estero_australe_2008_suppletiva_questionario_29_5|2008 Estero Australe Suppletiva — Questionario — Quesito 5]] · **Prova:** [[Prove/2008_estero_australe_2008_suppletiva_questionario_29|2008 Estero Australe Suppletiva — Questionario]]

Si dimostri che l'equazione $x^9 - 9x + 9 = 0$ ha una sola radice reale.

Consideriamo la funzione
$$f(x) = x^9 - 9x + 9,$$
continua e derivabile su tutto $\mathbb{R}$. Le sue radici reali coincidono con le soluzioni reali dell'equazione data.

**Studio della monotonia.** La derivata prima è
$$f'(x) = 9x^8 - 9 = 9\left(x^8 - 1\right).$$
Poiché $f'(x) \ge 0$ equivale a $x^8 \ge 1$, cioè a $|x| \ge 1$, si ha
$$f'(x) \ge 0 \iff x \le -1 \ \text{ oppure } \ x \ge 1.$$
Quindi $f$ è crescente su $(-\infty;-1]$, decrescente su $[-1;1]$ e di nuovo crescente su $[1;+\infty)$. Ne segue che $x=-1$ è un punto di massimo relativo e $x=1$ un punto di minimo relativo, con
$$f(-1) = (-1)^9 - 9(-1) + 9 = 17, \qquad f(1) = 1 - 9 + 9 = 1.$$

**Comportamento agli estremi.** Essendo il termine dominante $x^9$ di grado dispari,
$$\lim_{x\to -\infty} f(x) = -\infty, \qquad \lim_{x\to +\infty} f(x) = +\infty.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="179.793" height="426.718" viewBox="-72 -72 134.844 320.038"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 103.596H49.593"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M47.713 101.196c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-6.344" y="103.596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(59.87 2.153)">x</text><path fill="none" d="M-6.344 247.568V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-8.744-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-6.344" y="103.596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -168.228)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-51.726 152.758.9-34.57.902-29.096.9-24.357.9-20.26.902-16.73.9-13.697.901-11.106.9-8.895.901-7.017.901-5.428.9-4.089.902-2.964.9-2.026.9-1.245.902-.6.9-.069.901.366.9.72.901 1.005.901 1.236.9 1.418.902 1.563.9 1.677.901 1.766.9 1.834.901 1.886.901 1.925.9 1.954.901 1.976.901 1.992.9 2.003.902 2.012.9 2.016.901 2.02.9 2.023.901 2.024.901 2.025.9 2.026.901 2.027.901 2.026.9 2.026.902 2.027.9 2.026.901 2.027.9 2.027.901 2.026.901 2.027.9 2.027.901 2.026.901 2.027.9 2.026.902 2.027.9 2.026.901 2.027.9 2.026.901 2.027.901 2.026.9 2.027.901 2.027.901 2.026.9 2.027.902 2.026.9 2.026.901 2.026.9 2.025.901 2.024.901 2.022.9 2.02.902 2.015.9 2.01.9 2 .902 1.989.9 1.972.901 1.948.9 1.918.901 1.875.901 1.82.9 1.747.902 1.653.9 1.533.9 1.38.902 1.187.9.946.901.645.9.275.901-.182.901-.736.9-1.412.902-2.227.9-3.205.9-4.374.902-5.769.9-7.42.901-9.37.9-11.663.901-14.355.901-17.488.9-21.146.902-25.384"/><path stroke="none" d="M-36.212-29.42a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><text x="-6.344" y="103.596" stroke="none" font-family="cmr10" font-size="10" transform="translate(-27.765 -136.55)">max</text><path stroke="none" d="M26.385 95.772a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><text x="-6.344" y="103.596" stroke="none" font-family="cmr10" font-size="10" transform="translate(34.831 -11.358)">min</text><path stroke="none" d="M-48.714 103.596a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none"><text x="-6.344" y="103.596" font-family="cmmi10" font-size="10" transform="translate(-49.231 7.839)">x</text><text x="-.628" y="105.096" font-family="cmr7" font-size="7" transform="translate(-49.231 7.839)">0</text></g></g></svg>
</figure>

**Conteggio degli zeri.** Sul ramo $(-\infty;-1]$ la funzione cresce con continuità da $-\infty$ fino al valore $f(-1)=17$: per il teorema degli zeri (e per la stretta monotonia) essa si annulla in esso una e una sola volta, in un punto $x_0 < -1$. Sul rimanente intervallo $[-1;+\infty)$ il valore minimo di $f$ è il minimo relativo $f(1)=1>0$ (il massimo relativo vale $17>0$ e agli estremi la funzione tende a $17$ e a $+\infty$); pertanto qui risulta sempre $f(x) \ge 1 > 0$ e non vi sono altri zeri.

Poiché sia il massimo relativo ($17$) sia il minimo relativo ($1$) sono positivi, il grafico attraversa l'asse delle ascisse una sola volta. L'equazione $x^9 - 9x + 9 = 0$ ha dunque **una sola radice reale**, come si voleva dimostrare.

*Fonte:* [📄 PDF p.31](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
