

**Problema:** [[Problemi/prob_2006_liceo_scientifico_pni_2006_sessione_straordinaria_problema2_131_1|2006 PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_liceo_scientifico_pni_2006_sessione_straordinaria_problema2_131|2006 PNI Straordinaria — Problema 2]]

Si considerino i polinomi di $5^\circ$ grado, nella variabile $x$, a coefficienti reali, i cui grafici (nel piano $Oxy$) sono simmetrici rispetto all'origine $O$ e hanno un massimo relativo nel punto $\left(-2;\ \dfrac{64}{15}\right)$.

## a)

Poiché il grafico è simmetrico rispetto all'origine, la funzione è **dispari**: mancano i termini di grado pari, compreso il termine noto. Il polinomio ha dunque la forma

$$f(x) = a x^5 + c x^3 + e x.$$

Calcoliamo le derivate:

$$f'(x) = 5a x^4 + 3c x^2 + e, \qquad f''(x) = 20a x^3 + 6c x.$$

Per avere un massimo relativo in $\left(-2;\ \dfrac{64}{15}\right)$ imponiamo:

$$\begin{cases} f(-2) = -32a - 8c - 2e = \dfrac{64}{15}, \\[4pt] f'(-2) = 80a + 12c + e = 0, \\[4pt] f''(-2) = -160a - 12c < 0. \end{cases}$$

Dalle prime due equazioni (moltiplicando la prima per $-\tfrac12$ e sottraendo membro a membro) si ricava

$$c = -8a + \frac{4}{15}, \qquad e = -80a - 12c = 16a - \frac{16}{5}.$$

La famiglia di polinomi richiesta è quindi

$$y = a x^5 - \left(8a - \frac{4}{15}\right) x^3 + \left(16a - \frac{16}{5}\right) x,$$

con la condizione $f''(-2) < 0$, che equivale a $c > -\dfrac{40}{3}a$, cioè

$$a > -\frac{1}{20}, \qquad a \ne 0.$$

## b)

Le curve dipendono **linearmente** dal parametro $a$: costituiscono quindi un **fascio**. Mettendo in evidenza le due generatrici:

$$y = \left(\frac{4}{15} x^3 - \frac{16}{5} x\right) + a\left(x^5 - 8x^3 + 16x\right).$$

I **punti base** (comuni a tutte le curve del fascio) si ottengono annullando contemporaneamente il coefficiente di $a$ e la parte indipendente da $a$:

$$\begin{cases} x^5 - 8x^3 + 16x = 0, \\[4pt] y - \dfrac{4}{15} x^3 + \dfrac{16}{5} x = 0. \end{cases}$$

Risolviamo la prima equazione:

$$x^5 - 8x^3 + 16x = x\left(x^4 - 8x^2 + 16\right) = x\left(x^2 - 4\right)^2 = x(x-2)^2(x+2)^2 = 0,$$

da cui $x = 0$, $x = 2$ (doppia), $x = -2$ (doppia). Sostituendo nella seconda equazione si trovano i **tre punti comuni**:

$$(0,\,0), \qquad \left(2,\ -\frac{64}{15}\right), \qquad \left(-2,\ \frac{64}{15}\right).$$

Poiché $x = \pm 2$ sono radici **doppie**, in tali punti tutte le curve del fascio hanno la **stessa tangente** (in $x = 0$ la radice è semplice).

## c)

La tangente inflessionale in $O$ deve coincidere con l'asse $x$: occorre quindi $f'(0) = e = 0$ (mentre $f''(0) = 0$ è automatica per la disparità). Da

$$e = 16a - \frac{16}{5} = 0 \ \Rightarrow\ a = \frac{1}{5}, \qquad c = -\frac{4}{3},$$

si ottiene la curva

$$\gamma:\quad y = \frac{x^5}{5} - \frac{4x^3}{3}.$$

**Studio di $\gamma$.** La funzione è definita su tutto $\mathbb{R}$, è dispari e passa per l'origine (flesso a tangente orizzontale). I limiti sono:

$$\lim_{x\to -\infty} \gamma(x) = -\infty, \qquad \lim_{x\to +\infty} \gamma(x) = +\infty.$$

*Massimi e minimi:*

$$y' = x^4 - 4x^2 = x^2\left(x^2 - 4\right) \ge 0 \ \text{ per } x \le -2 \ \text{ e } x \ge 2.$$

Quindi $\gamma$ è crescente per $x < -2$ e $x > 2$; ha un flesso a tangente orizzontale in $x = 0$, un massimo relativo in $x = -2$ (con $y = \tfrac{64}{15}$) e un minimo relativo in $x = 2$ (con $y = -\tfrac{64}{15}$).

*Flessi:*

$$y'' = 4x^3 - 8x = 4x\left(x^2 - 2\right) \ge 0 \ \text{ per } -\sqrt{2} \le x \le 0 \ \text{ e } x \ge \sqrt{2}.$$

La concavità è verso l'alto per $-\sqrt{2} < x < 0$ e $x > \sqrt{2}$, verso il basso per $x < -\sqrt{2}$ e $0 < x < \sqrt{2}$. I flessi sono in $x = 0$ (con $y = 0$), $x = -\sqrt{2}$ (con $y = \tfrac{28}{15}\sqrt{2}$) e $x = \sqrt{2}$ (con $y = -\tfrac{28}{15}\sqrt{2}$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="250.404" height="366.018" viewBox="-72 -72 187.803 274.514"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 71.445H92.556"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M90.676 69.045c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="10.443" y="71.445" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.046 2.153)">x</text><path fill="none" d="M10.443 202.044V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M8.043-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="10.443" y="71.445" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.076)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.112 58.278 1.63-20.778 1.63-17.441 1.63-14.4L-55.59-5.98l1.63-9.14 1.63-6.894 1.63-4.884 1.631-3.096 1.63-1.517 1.63-.134 1.63 1.065 1.631 2.093 1.63 2.963 1.63 3.686 1.63 4.272 1.631 4.734 1.63 5.08 1.63 5.324 1.63 5.472 1.631 5.536 1.63 5.524 1.63 5.445 1.63 5.308 1.631 5.12 1.63 4.889 1.63 4.622 1.63 4.33 1.631 4.011 1.63 3.681 1.63 3.34 1.63 2.995 1.631 2.651 1.63 2.313 1.63 1.985 1.63 1.673 1.631 1.378 1.63 1.106 1.63.858 1.63.638 1.631.448 1.63.29 1.63.164 1.63.074 1.631.02 1.63.001 1.63.02 1.63.074 1.631.163 1.63.288 1.63.446 1.63.636 1.631.855 1.63 1.104 1.63 1.375 1.63 1.67 1.631 1.981 1.63 2.31 1.63 2.647 1.63 2.991 1.631 3.337 1.63 3.677 1.63 4.01 1.63 4.325 1.631 4.62 1.63 4.886 1.63 5.118 1.63 5.306 1.631 5.443 1.63 5.524 1.63 5.536 1.63 5.473 1.631 5.326 1.63 5.084 1.63 4.737 1.63 4.278 1.631 3.692 1.63 2.972 1.63 2.103 1.63 1.076 1.631-.12 1.63-1.503 1.63-3.077 1.63-4.865 1.631-6.872 1.63-9.116 1.63-11.61 1.63-14.37 1.631-17.408 1.63-20.742"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="m-62.112-43.675 145.11 230.24"/><path stroke="none" d="M12.043 71.445c0-.751-.717-1.36-1.6-1.36s-1.6.609-1.6 1.36c0 .75.716 1.36 1.6 1.36.883 0 1.6-.61 1.6-1.36M-44.463-31.753c0-.938-.895-1.7-2-1.7s-2 .762-2 1.7c0 .94.896 1.7 2 1.7s2-.76 2-1.7m-2 0"/><g stroke="none"><text x="10.443" y="71.445" font-family="cmr10" font-size="10" transform="translate(-53.373 -110.179)">max</text><text x="32.387" y="71.445" font-family="cmr10" font-size="10" transform="translate(-53.373 -110.179)">(</text><text x="36.276" y="71.445" font-family="cmsy10" font-size="10" transform="translate(-53.373 -110.179)">¡</text><text x="44.054" y="71.445" font-family="cmr10" font-size="10" transform="translate(-53.373 -110.179)">2</text><text x="49.054" y="71.445" font-family="cmmi10" font-size="10" transform="translate(-53.373 -110.179)">;</text><text x="54.698" y="67.507" font-family="cmr7" font-size="7" transform="translate(-53.373 -110.179)">64</text><path d="M1.325-41.434h7.972v.4H1.325z"/><text x="54.698" y="74.893" font-family="cmr7" font-size="7" transform="translate(-53.373 -110.179)">15</text><text x="63.871" y="71.445" font-family="cmr10" font-size="10" transform="translate(-53.373 -110.179)">)</text></g><path stroke="none" d="M69.348 174.642c0-.939-.895-1.7-2-1.7s-2 .761-2 1.7c0 .94.896 1.7 2 1.7s2-.76 2-1.7m-2 0"/><g stroke="none"><text x="10.443" y="71.445" font-family="cmr10" font-size="10" transform="translate(-2 115.179)">min</text><text x="30.443" y="71.445" font-family="cmr10" font-size="10" transform="translate(-2 115.179)">(2</text><text x="39.332" y="71.445" font-family="cmmi10" font-size="10" transform="translate(-2 115.179)">;</text><text x="43.776" y="71.445" font-family="cmsy10" font-size="10" transform="translate(-2 115.179)">¡</text><text x="52.754" y="67.507" font-family="cmr7" font-size="7" transform="translate(-2 115.179)">64</text><path d="M50.754 183.924h7.972v.4h-7.972z"/><text x="52.754" y="74.893" font-family="cmr7" font-size="7" transform="translate(-2 115.179)">15</text><text x="61.926" y="71.445" font-family="cmr10" font-size="10" transform="translate(-2 115.179)">)</text></g><path stroke="none" d="M-28.189999999999998 7.596c0-.75-.716-1.36-1.6-1.36-.883 0-1.6.61-1.6 1.36 0 .752.717 1.36 1.6 1.36s1.6-.608 1.6-1.36M52.275 135.293c0-.75-.716-1.36-1.6-1.36s-1.6.61-1.6 1.36.716 1.36 1.6 1.36 1.6-.609 1.6-1.36m-1.6 0"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmr10" font-size="10"><text x="10.443" y="71.445" transform="translate(40.507 85.701)">retta</text><text x="34.915" y="71.445" transform="translate(40.507 85.701)">dei</text><text x="51.026" y="71.445" transform="translate(40.507 85.701)">°essi</text></g></g></g></svg>
</figure>

## d)

Gli zeri di $\gamma$ si ottengono da

$$\frac{x^5}{5} - \frac{4x^3}{3} = x^3\left(\frac{x^2}{5} - \frac{4}{3}\right) = 0,$$

da cui $x = 0$ e $x = \pm\sqrt{\dfrac{20}{3}} = \pm\dfrac{2\sqrt{15}}{3}$. Dunque

$$u = -\frac{2\sqrt{15}}{3}, \qquad v = \frac{2\sqrt{15}}{3}.$$

Essendo $P(x)$ dispari e l'intervallo $[u,v]$ simmetrico rispetto all'origine, l'integrale richiesto vale zero:

$$\int_{u}^{v} P(x)\,dx = 0.$$

## e)

I tre flessi hanno coordinate

$$A = \left(-\sqrt{2};\ \frac{28\sqrt{2}}{15}\right), \qquad O = (0;\,0), \qquad C = \left(\sqrt{2};\ -\frac{28\sqrt{2}}{15}\right).$$

Verifichiamo l'allineamento con la condizione $\dfrac{x_3 - x_1}{x_2 - x_1} = \dfrac{y_3 - y_1}{y_2 - y_1}$:

$$\frac{x_3 - x_1}{x_2 - x_1} = \frac{\sqrt{2} + \sqrt{2}}{\sqrt{2}} = 2, \qquad \frac{y_3 - y_1}{y_2 - y_1} = \frac{-\tfrac{28\sqrt{2}}{15} - \tfrac{28\sqrt{2}}{15}}{-\tfrac{28\sqrt{2}}{15}} = 2.$$

I tre flessi sono quindi **allineati**. La retta dei flessi passa per l'origine con coefficiente angolare

$$m = \frac{y_C}{x_C} = \frac{-\tfrac{28\sqrt{2}}{15}}{\sqrt{2}} = -\frac{28}{15},$$

perciò ha equazione $y = -\dfrac{28}{15}x$. Intersecandola con $\gamma$:

$$\frac{x^5}{5} - \frac{4x^3}{3} = -\frac{28}{15}x \ \Rightarrow\ 3x^5 - 20x^3 + 28x = 0 \ \Rightarrow\ x\left(3x^4 - 20x^2 + 28\right) = 0.$$

Da $3x^4 - 20x^2 + 28 = 0$ si ha $x^2 = 2$ (i flessi $x = \pm\sqrt{2}$) oppure $x^2 = \dfrac{14}{3}$. Le ulteriori intersezioni della retta dei flessi con $\gamma$ hanno quindi ascisse

$$x = \pm\sqrt{\frac{14}{3}} = \pm\frac{\sqrt{42}}{3}.$$

*Fonte:* [📄 PDF p.131](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
