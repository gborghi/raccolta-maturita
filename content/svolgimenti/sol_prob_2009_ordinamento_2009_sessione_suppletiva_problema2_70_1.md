

**Problema:** [[Problemi/prob_2009_ordinamento_2009_sessione_suppletiva_problema2_70_1|2009 Ordinamento Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_ordinamento_2009_sessione_suppletiva_problema2_70|2009 Ordinamento Suppletiva — Problema 2]]

È data la funzione

$$f(x) = \begin{cases} x(2-\ln x) & \text{se } x>0,\\[2pt] 0 & \text{se } x=0. \end{cases}$$

## a)

Per verificare la continuità in $x=0$ calcoliamo il limite destro:

$$\lim_{x\to 0^+} x(2-\ln x) = \lim_{x\to 0^+}\big(2x - x\ln x\big) = 0,$$

poiché $\lim_{x\to 0^+} x\ln x = 0$ (limite notevole). Il limite coincide con $f(0)=0$, quindi la funzione è **continua** in $0$.

Per la derivabilità calcoliamo il rapporto incrementale destro:

$$f'(0^+) = \lim_{x\to 0^+}\frac{x(2-\ln x)-0}{x-0} = \lim_{x\to 0^+}(2-\ln x) = +\infty.$$

La funzione **non è derivabile** in $x=0$: il grafico presenta una tangente verticale nell'origine.

## b)

Per $x>0$ calcoliamo la derivata prima con la regola del prodotto:

$$f'(x) = (2-\ln x) + x\cdot\left(-\frac{1}{x}\right) = 1-\ln x.$$

La derivata si annulla per $x=e$ (dove $\ln e = 1$): si tratta di un punto di massimo, poiché $f'$ passa da positiva (per $x<e$) a negativa (per $x>e$). Il valore massimo è $f(e)=e$.

Gli zeri della funzione si ottengono da $x(2-\ln x)=0$: per $x>0$ ciò accade quando $\ln x = 2$, cioè $x = e^2$.

La derivata seconda è

$$f''(x) = -\frac{1}{x} < 0 \qquad \text{per ogni } x>0,$$

dunque il grafico è sempre concavo (concavità rivolta verso il basso). Per $x\to +\infty$ si ha $f(x)\to -\infty$; non vi sono asintoti obliqui, perché la funzione non è un infinito del primo ordine.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="305.364" height="175.512" viewBox="-72 -72 229.023 131.634"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 31.895h215.842"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M141.892 29.495c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-60.689" y="31.895" stroke="none" font-family="cmmi10" font-size="10" transform="translate(208.394 2.153)">x</text><path fill="none" d="M-60.689 54.657V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.089-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.689" y="31.895" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -96.527)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.234 29.207 2.444-9.01 2.443-6.727 2.443-5.497 2.443-4.717 2.443-4.125 2.443-3.653 2.443-3.256 2.443-2.915 2.443-2.62 2.443-2.345 2.443-2.108 2.443-1.891 2.444-1.69 2.443-1.506 2.443-1.33 2.443-1.172 2.443-1.018 2.443-.884 2.443-.737 2.443-.616 2.443-.496 2.443-.378 2.443-.269 2.443-.165 2.444-.063 2.443.036 2.443.127 2.443.215 2.443.305 2.443.389 2.443.467 2.443.545 2.443.621 2.443.69 2.443.776 2.443.831 2.444.906 2.443.982 2.443 1.036 2.443 1.095 2.443 1.16 2.443 1.215 2.443 1.278 2.443 1.331 2.443 1.386 2.443 1.444 2.443 1.493 2.443 1.545 2.444 1.598 2.443 1.64 2.443 1.697 2.443 1.741L69.25-1.64 71.693.195l2.443 1.88 2.443 1.92 2.443 1.975 2.443 2.007 2.443 2.05 2.443 2.093 2.444 2.141 2.443 2.179 2.443 2.198 2.443 2.265 2.443 2.29 2.443 2.324 2.443 2.363 2.443 2.389 2.443 2.443 2.443 2.477 2.443 2.496 2.443 2.555 2.444 2.554 2.443 2.622 2.443 2.662 2.443 2.675 2.443 2.705 2.443 2.737 2.443 2.77"/><path stroke="none" d="M2.779-29.973a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><g stroke="none" font-size="10"><text x="-60.689" y="31.895" font-family="cmr10" transform="translate(65.4 -67.9)">(</text><text x="-56.8" y="31.895" font-family="cmmi10" transform="translate(65.4 -67.9)">e;</text><text x="-47.699" y="31.895" font-family="cmmi10" transform="translate(65.4 -67.9)">e</text><text x="-43.043" y="31.895" font-family="cmr10" transform="translate(65.4 -67.9)">)</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M1.179 31.895v-61.868"/><text x="-60.689" y="31.895" stroke="none" font-family="cmmi10" font-size="10" transform="translate(59.54 7.839)">e</text><path stroke="none" d="M109.102 31.895a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><g stroke="none"><text x="-60.689" y="31.895" font-family="cmmi10" font-size="10" transform="translate(171.724 -3.533)">e</text><text x="-56.033" y="28.266" font-family="cmr7" font-size="7" transform="translate(171.724 -3.533)">2</text></g></g></svg>
</figure>

## c)

Riscriviamo l'integranda: $I(t) = \displaystyle\int_t^{e^2}(2x - x\ln x)\,dx$. Per calcolare $\int x\ln x\,dx$ integriamo per parti con $u=\ln x$ e $dv = x\,dx$:

$$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot\frac{1}{x}\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C.$$

Quindi una primitiva dell'integranda è

$$\int (2x - x\ln x)\,dx = x^2 - \frac{x^2}{2}\ln x + \frac{x^2}{4} = \frac{5x^2}{4} - \frac{x^2}{2}\ln x.$$

Valutando agli estremi, e ricordando che $\ln(e^2)=2$:

$$I(t) = \left[\frac{5x^2}{4} - \frac{x^2}{2}\ln x\right]_t^{e^2} = \left(\frac{5e^4}{4} - e^4\right) - \left(\frac{5t^2}{4} - \frac{t^2\ln t}{2}\right),$$

da cui

$$I(t) = \frac{e^4}{4} - \frac{5t^2}{4} + \frac{t^2\ln t}{2}.$$

## d)

Per $t\to 0^+$ si ha $\lim_{t\to 0^+} t^2 = 0$ e $\lim_{t\to 0^+} t^2\ln t = 0$ (limite notevole). Perciò

$$\lim_{t\to 0^+} I(t) = \frac{e^4}{4}.$$

**Interpretazione geometrica:** nonostante il grafico $\gamma$ parta verticalmente dall'origine, l'area della regione piana compresa tra $\gamma$ e l'asse $x$ nell'intervallo $[0;\,e^2]$ è finita e vale $\dfrac{e^4}{4}$.

*Fonte:* [📄 PDF p.70](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
