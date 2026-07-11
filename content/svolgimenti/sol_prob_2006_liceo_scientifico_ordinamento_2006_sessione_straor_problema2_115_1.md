

**Problema:** [[Problemi/prob_2006_liceo_scientifico_ordinamento_2006_sessione_straor_problema2_115_1|2006 Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_problema2_115|2006 Straordinaria — Problema 2]]

Si considerino i polinomi di quinto grado nella variabile $x$, a coefficienti reali, i cui grafici (nel piano cartesiano $Oxy$) sono simmetrici rispetto all'origine $O$ e presentano un massimo relativo nel punto $\left(-2;\ \dfrac{64}{15}\right)$.

## a)

Il generico polinomio di quinto grado è

$$y = ax^5 + bx^4 + cx^3 + dx^2 + ex + f.$$

Perché il grafico sia simmetrico rispetto a $O$ la funzione deve essere **dispari** ($y(-x) = -y(x)$): devono quindi mancare tutti i termini di grado pari, compreso il termine noto. Resta

$$y = ax^5 + cx^3 + ex.$$

Calcoliamo le prime due derivate:

$$y' = 5ax^4 + 3cx^2 + e, \qquad y'' = 20ax^3 + 6cx.$$

Perché in $(-2;\,64/15)$ vi sia un massimo relativo imponiamo

$$\begin{cases} y(-2) = \dfrac{64}{15} \\[4pt] y'(-2) = 0 \\[4pt] y''(-2) < 0 \end{cases} \Rightarrow \begin{cases} -32a - 8c - 2e = \dfrac{64}{15} \\[4pt] 80a + 12c + e = 0 \\[4pt] -160a - 12c < 0 \end{cases}$$

Dividendo la prima per $-2$ e riscrivendo la terza:

$$\begin{cases} 16a + 4c + e = -\dfrac{32}{15} \\[4pt] 80a + 12c + e = 0 \\[4pt] c > -\dfrac{40}{3}\,a \end{cases}$$

Sottraendo la prima equazione dalla seconda:

$$64a + 8c = \frac{32}{15} \;\Rightarrow\; c = -8a + \frac{4}{15}.$$

Sostituendo nella seconda equazione:

$$e = -80a - 12c = -80a - 12\left(-8a + \frac{4}{15}\right) = 16a - \frac{16}{5}.$$

La famiglia di funzioni cercata ha dunque equazione

$$y = ax^5 - \left(8a - \frac{4}{15}\right)x^3 + \left(16a - \frac{16}{5}\right)x,$$

con la condizione $c > -\dfrac{40}{3}a$, cioè $-8a + \dfrac{4}{15} > -\dfrac{40}{3}a$, da cui

$$a > -\frac{1}{20} \quad (\text{e } a \neq 0).$$

## b)

Le curve dipendono **linearmente** dal parametro $a$: costituiscono quindi un fascio. Mettiamo in evidenza le due generatrici raccogliendo i termini con e senza $a$:

$$y = \left(\frac{4}{15}x^3 - \frac{16}{5}x\right) + a\left(x^5 - 8x^3 + 16x\right).$$

I **punti base** (comuni a tutte le curve) si ottengono annullando il coefficiente di $a$ e imponendo l'altra generatrice:

$$\begin{cases} x^5 - 8x^3 + 16x = 0 \\[4pt] y = \dfrac{4}{15}x^3 - \dfrac{16}{5}x \end{cases}$$

Risolviamo la prima:

$$x^5 - 8x^3 + 16x = x\left(x^4 - 8x^2 + 16\right) = x\left(x^2 - 4\right)^2 = x(x-2)^2(x+2)^2 = 0,$$

da cui $x = 0$, $x = 2$ (doppia), $x = -2$ (doppia). Sostituendo nella seconda equazione si ottengono i tre punti comuni:

$$(0;\,0), \qquad \left(2;\,-\frac{64}{15}\right), \qquad \left(-2;\,\frac{64}{15}\right).$$

Poiché $x = 2$ e $x = -2$ sono radici **doppie** di $x^5 - 8x^3 + 16x = 0$, in quei due punti tutte le curve del fascio hanno la **stessa tangente**.

## c)

Nel punto di flesso con tangente inflessionale l'asse $x$ (retta $y = 0$, coefficiente angolare nullo) devono annullarsi sia la derivata prima sia la derivata seconda. Nell'origine $y''(0) = 0$ è automatico (funzione dispari); imponiamo $y'(0) = 0$, cioè

$$e = 16a - \frac{16}{5} = 0 \;\Rightarrow\; a = \frac{1}{5}.$$

Con $a = \dfrac{1}{5}$ si ha $c = -\dfrac{4}{3}$, e la curva richiesta è

$$\gamma:\quad y = \frac{1}{5}x^5 - \frac{4}{3}x^3.$$

**Studio di $\gamma$.** La funzione è definita su tutto $\mathbb{R}$, è dispari e passa per l'origine (flesso a tangente orizzontale). Intersezioni con l'asse $x$:

$$\frac{1}{5}x^5 - \frac{4}{3}x^3 = 0 \;\Rightarrow\; x^3\left(\frac{1}{5}x^2 - \frac{4}{3}\right) = 0 \;\Rightarrow\; x = 0 \ \text{ oppure }\ x = \pm\sqrt{\frac{20}{3}} = \pm\frac{2\sqrt{15}}{3}.$$

Limiti:

$$\lim_{x\to -\infty} y = -\infty, \qquad \lim_{x\to +\infty} y = +\infty.$$

Derivata prima:

$$y' = x^4 - 4x^2 = x^2\left(x^2 - 4\right) \geq 0 \iff x \leq -2 \ \text{ o }\ x \geq 2.$$

La funzione cresce per $x < -2$ e per $x > 2$; ha un flesso a tangente orizzontale in $x = 0$, un massimo relativo in $x = -2$ (con $y = 64/15$) e un minimo relativo in $x = 2$ (con $y = -64/15$).

Derivata seconda:

$$y'' = 4x^3 - 8x = 4x\left(x^2 - 2\right) \geq 0 \iff -\sqrt{2} \leq x \leq 0 \ \text{ o }\ x \geq \sqrt{2}.$$

La concavità è rivolta verso l'alto per $-\sqrt{2} < x < 0$ e per $x > \sqrt{2}$, verso il basso altrove. Vi sono flessi in $x = 0$ (con $y = 0$), in $x = -\sqrt{2}$ (con $y = \dfrac{28\sqrt{2}}{15}$) e in $x = \sqrt{2}$ (con $y = -\dfrac{28\sqrt{2}}{15}$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="241.092" height="321.252" viewBox="-72 -72 180.819 240.939"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-46.259 54.657H89.915"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M88.035 52.257c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="22.028" y="54.657" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 2.153)">x</text><path fill="none" d="M22.028 168.469V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M19.628-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="22.028" y="54.657" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -119.289)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-37.609 70.837 1.205-22.1 1.204-19.093 1.205-16.324 1.204-13.777 1.205-11.442 1.204-9.31 1.205-7.373 1.204-5.616 1.205-4.033 1.204-2.614 1.205-1.349 1.205-.228 1.204.753 1.205 1.608 1.204 2.342 1.205 2.964 1.204 3.482 1.205 3.904 1.204 4.237 1.205 4.486 1.204 4.663 1.205 4.768L-9.905-4.4-8.7.4l1.204 4.742 1.205 4.638 1.204 4.495 1.205 4.318 1.204 4.115 1.205 3.887 1.204 3.641L.936 33.62l1.205 3.113 1.204 2.838 1.205 2.56 1.204 2.285L6.96 46.43l1.204 1.75 1.205 1.497 1.204 1.258 1.205 1.034 1.204.828 1.205.641 1.204.476 1.205.334 1.204.216 1.205.123 1.204.055 1.205.015h1.204l1.205.015 1.204.054 1.205.121 1.204.214 1.205.33 1.205.473 1.204.638 1.205.823 1.204 1.03 1.205 1.252 1.204 1.492 1.205 1.745 1.204 2.007 1.205 2.28 1.204 2.554 1.205 2.832 1.204 3.106L44.3 79l1.204 3.636 1.205 3.882 1.204 4.11 1.205 4.314 1.204 4.492 1.205 4.634 1.204 4.74 1.205 4.802 1.204 4.814 1.205 4.77 1.205 4.665 1.204 4.491 1.205 4.244 1.204 3.912 1.205 3.493 1.204 2.976 1.205 2.357 1.204 1.625 1.205.774 1.204-.207 1.205-1.322 1.204-2.585 1.205-3.999 1.204-5.58 1.205-7.331 1.204-9.267 1.205-11.393 1.204-13.724 1.205-16.266 1.204-19.03 1.205-22.032"/><path stroke="none" d="M-21.896-42.538a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="22.028" y="54.657" stroke="none" font-family="cmr10" font-size="10" transform="translate(-67.669 -100.728)">max</text><path stroke="none" d="M69.153 151.852a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="22.028" y="54.657" stroke="none" font-family="cmr10" font-size="10" transform="translate(49.058 107.407)">min</text><path stroke="none" d="M23.628 54.657a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M-8.958-5.435a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0M55.414 114.75a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><g stroke="none"><text x="23.228" y="50.72" font-family="cmr7" font-size="7" transform="translate(62.26 13.986)">2</text><text x="27.214" y="44.884" font-family="cmsy7" font-size="7" transform="translate(62.26 13.986)">p</text><path d="M96.044 58.53h7.972v.34h-7.972z"/><text x="33.784" y="50.72" font-family="cmr7" font-size="7" transform="translate(62.26 13.986)">15</text><path d="M85.488 65.943h18.528v.4H85.488z"/><text x="30.499" y="58.106" font-family="cmr7" font-size="7" transform="translate(62.26 13.986)">3</text></g><g stroke="none"><text x="22.028" y="54.657" font-family="cmsy10" font-size="10" transform="translate(-90.965 -6.981)">¡</text><text x="31.006" y="50.72" font-family="cmr7" font-size="7" transform="translate(-90.965 -6.981)">2</text><text x="34.992" y="44.884" font-family="cmsy7" font-size="7" transform="translate(-90.965 -6.981)">p</text><path d="M-49.403 37.563h7.972v.34h-7.972z"/><text x="41.562" y="50.72" font-family="cmr7" font-size="7" transform="translate(-90.965 -6.981)">15</text><path d="M-59.96 44.976h18.529v.4H-59.96z"/><text x="38.277" y="58.106" font-family="cmr7" font-size="7" transform="translate(-90.965 -6.981)">3</text></g></g></svg>
</figure>

## d)

Sia $P(x)$ il polinomio rappresentato da $\gamma$ e siano $u$ e $v$ (con $u < v$) le ascisse dei punti, distinti da $O$, in cui $\gamma$ interseca l'asse $x$:

$$u = -\sqrt{\frac{20}{3}}, \qquad v = \sqrt{\frac{20}{3}}.$$

Poiché $v = -u$ e la curva è simmetrica rispetto all'origine (funzione dispari), su un intervallo simmetrico i contributi si annullano:

$$\int_u^v P(x)\,dx = 0.$$

## e)

I tre flessi trovati al punto c) hanno coordinate

$$A = \left(-\sqrt{2};\,\frac{28\sqrt{2}}{15}\right), \qquad O = (0;\,0), \qquad C = \left(\sqrt{2};\,-\frac{28\sqrt{2}}{15}\right).$$

Essendo $A$ e $C$ simmetrici rispetto a $O$, i tre punti sono **allineati** sulla retta passante per l'origine di coefficiente angolare

$$m = \frac{y_C}{x_C} = \frac{-\dfrac{28\sqrt{2}}{15}}{\sqrt{2}} = -\frac{28}{15}.$$

La retta dei flessi è dunque $y = -\dfrac{28}{15}x$. Intersecandola con $\gamma$:

$$\frac{1}{5}x^5 - \frac{4}{3}x^3 = -\frac{28}{15}x \;\Rightarrow\; 3x^5 - 20x^3 + 28x = 0 \;\Rightarrow\; x\left(3x^4 - 20x^2 + 28\right) = 0.$$

Oltre a $x = 0$, ponendo $t = x^2$ risolviamo $3t^2 - 20t + 28 = 0$:

$$t = \frac{20 \pm \sqrt{400 - 336}}{6} = \frac{20 \pm 8}{6} \;\Rightarrow\; t = 2 \ \text{ oppure }\ t = \frac{14}{3}.$$

La soluzione $t = 2$ dà $x = \pm\sqrt{2}$ (i flessi $A$ e $C$ già noti). La soluzione $t = \dfrac{14}{3}$ fornisce le ulteriori intersezioni:

$$x = \pm\sqrt{\frac{14}{3}} = \pm\frac{\sqrt{42}}{3}.$$

La retta dei flessi interseca quindi ulteriormente la curva nei punti di ascissa $x = \pm\dfrac{\sqrt{42}}{3}$.

*Fonte:* [📄 PDF p.115](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
