

**Quesito:** [[Quesiti/ques_2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59_2|2009 Estero Europa — Questionario — Quesito 2]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59|2009 Estero Europa — Questionario]]

Si dimostri che l'equazione $x^{11} + 11x + 5 = 0$ ha una sola radice compresa fra $-1$ e $0$.

Consideriamo la funzione

$$f(x) = x^{11} + 11x + 5.$$

Si tratta di una funzione polinomiale, quindi continua e derivabile su tutto $\mathbb{R}$.

**Esistenza di almeno una radice in $(-1,0)$.**
Calcoliamo i valori agli estremi dell'intervallo:

$$f(-1) = (-1)^{11} + 11\cdot(-1) + 5 = -1 - 11 + 5 = -7 < 0,$$

$$f(0) = 0 + 0 + 5 = 5 > 0.$$

Poiché $f$ è continua su $[-1,0]$ e assume valori di segno opposto agli estremi, per il **teorema degli zeri** esiste almeno un punto $c \in (-1,0)$ tale che $f(c) = 0$.

**Unicità della radice.**
Deriviamo la funzione:

$$f'(x) = 11x^{10} + 11 = 11\left(x^{10} + 1\right).$$

Per ogni $x \in \mathbb{R}$ si ha $x^{10} \ge 0$, dunque $x^{10} + 1 \ge 1 > 0$ e quindi

$$f'(x) > 0 \quad \text{per ogni } x \in \mathbb{R}.$$

La funzione $f$ è perciò **strettamente crescente** su tutto $\mathbb{R}$: essa può annullarsi al più una volta. In particolare la radice trovata in $(-1,0)$ è l'unica radice reale dell'equazione.

**Conclusione.**
L'equazione $x^{11} + 11x + 5 = 0$ ammette esattamente una radice reale, e questa è compresa fra $-1$ e $0$. Il grafico di $f$ conferma il cambiamento di segno tra $-1$ e $0$:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="320.536" height="205.213" viewBox="-72 -72 240.402 153.91"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 8.599h227.22"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M153.27 6.2c.38 1.44 1.227 2.119 2.08 2.399-.853.28-1.7.96-2.08 2.4"/><text x="91.532" y="8.599" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.551 2.153)">x</text><path fill="none" d="M91.532 81.44V-50.184"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M89.132-48.304c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="91.532" y="8.599" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -64.66)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-50.731 72.335 2.429-3.282 2.429-3.031 2.429-2.817 2.43-2.635 2.428-2.48 2.43-2.349 2.428-2.238 2.43-2.145 2.429-2.067 2.429-2.002 2.429-1.947 2.429-1.903 2.429-1.866 2.429-1.834 2.43-1.81 2.428-1.79 2.43-1.772 2.428-1.76 2.43-1.748 2.429-1.74L.28 27.386l2.429-1.728 2.429-1.724 2.429-1.72 2.429-1.718 2.43-1.715 2.428-1.715 2.43-1.713 2.428-1.712 2.43-1.712 2.429-1.711L27 8.508l2.429-1.711 2.429-1.711 2.429-1.71 2.43-1.71 2.428-1.71 2.43-1.711 2.428-1.71 2.43-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.711 2.43-1.71 2.428-1.71 2.43-1.71 2.428-1.71 2.43-1.71 2.429-1.71 2.429-1.71 2.429-1.711 2.429-1.71 2.429-1.71 2.43-1.71 2.428-1.71 2.43-1.71 2.428-1.71 2.43-1.71 2.428-1.71 2.43-1.711 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.43-1.71 2.428-1.71 2.43-1.711 2.428-1.71 2.43-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.71 2.429-1.711"/><path stroke="none" d="M-48.731 72.335c0-.071-.896-.128-2-.128s-2 .057-2 .128c0 .07.895.128 2 .128s2-.058 2-.128m-2 0"/><g stroke="none" font-size="10"><text x="91.532" y="8.599" font-family="cmsy10" transform="translate(-158.575 66.541)">¡</text><text x="99.31" y="8.599" font-family="cmr10" transform="translate(-158.575 66.541)">7</text></g><path stroke="none" d="M93.532-36.926c0-.071-.895-.128-2-.128s-2 .057-2 .128c0 .07.896.128 2 .128s2-.058 2-.128m-2 0"/><text x="91.532" y="8.599" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -49.058)">5</text><g fill="red" stroke="red"><path stroke="none" d="M29.374 8.599c0-.088-1.12-.16-2.5-.16s-2.5.072-2.5.16 1.12.16 2.5.16 2.5-.072 2.5-.16m-2.5 0"/><text x="91.532" y="8.599" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-61.126 7.839)">c</text></g><g stroke="none" font-size="10"><text x="91.532" y="8.599" font-family="cmsy10" transform="translate(-148.653 9.977)">¡</text><text x="99.31" y="8.599" font-family="cmr10" transform="translate(-148.653 9.977)">1</text></g></g></svg>
</figure>

Osserviamo infine che il polinomio ha grado dispari, quindi

$$\lim_{x\to -\infty} f(x) = -\infty, \qquad \lim_{x\to +\infty} f(x) = +\infty,$$

il che è coerente con l'esistenza di una (e, per la monotonia, una sola) radice reale.

*Fonte:* [📄 PDF p.59](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
