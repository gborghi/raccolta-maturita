

**Problema:** [[Problemi/prob_2006_scuole_italiane_allestero_americhe_2006_sessione_o_problema1_14_1|2006 Estero Americhe — Problema 1 — Problema 1]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_americhe_2006_sessione_o_problema1_14|2006 Estero Americhe — Problema 1]]

Nel piano cartesiano $(Oxy)$ sono assegnate le curve di equazione
$$y = a x^2 + \frac{b}{x},$$
con $a,b$ parametri reali.

## a)

Imponiamo il passaggio della curva per i punti $(2,3)$ e $(-2,5)$:
$$\begin{cases} 4a + \dfrac{b}{2} = 3 \\[4pt] 4a - \dfrac{b}{2} = 5 \end{cases}$$
Sommando le due equazioni si ottiene $8a = 8$, cioè $a = 1$; sottraendole si ricava $b = -2$.

La curva cercata è quindi
$$\gamma:\quad y = x^2 - \frac{2}{x}.$$

## b)

Studiamo $f(x) = x^2 - \dfrac{2}{x} = \dfrac{x^3 - 2}{x}$.

**Dominio.** $x \neq 0$.

**Simmetrie.** $f(-x) = x^2 + \dfrac{2}{x}$, diverso sia da $f(x)$ sia da $-f(x)$: la funzione non è né pari né dispari.

**Intersezioni con gli assi.** L'asse $y$ non appartiene al dominio. Con l'asse $x$: $x^3 - 2 = 0 \Rightarrow x = \sqrt[3]{2}$.

**Segno.** $f(x) > 0$ dove $\dfrac{x^3 - 2}{x} > 0$, cioè per $x < 0$ oppure $x > \sqrt[3]{2}$.

**Limiti.** Per $x \to \pm\infty$ si ha $f(x) \to +\infty$; non vi sono asintoti orizzontali né obliqui (il grado del numeratore supera di $2$ quello del denominatore). Inoltre
$$\lim_{x\to 0^-} f(x) = +\infty, \qquad \lim_{x\to 0^+} f(x) = -\infty,$$
quindi la retta $x = 0$ è asintoto verticale.

**Derivata prima.**
$$f'(x) = 2x + \frac{2}{x^2} = \frac{2\,(x^3 + 1)}{x^2}.$$
Poiché $x^2 > 0$, il segno dipende da $x^3 + 1$: $f'(x) > 0$ per $x > -1$. La funzione è quindi decrescente su $(-\infty,-1)$ e crescente su $(-1,0)$ e su $(0,+\infty)$. In $x = -1$ c'è un **minimo relativo** $m(-1,\,3)$.

**Derivata seconda.**
$$f''(x) = 2 - \frac{4}{x^3} = \frac{2\,(x^3 - 2)}{x^3}.$$
Si ha $f''(x) > 0$ per $x < 0$ oppure $x > \sqrt[3]{2}$ (concavità verso l'alto) e $f''(x) < 0$ per $0 < x < \sqrt[3]{2}$ (concavità verso il basso). In $x = \sqrt[3]{2}$ vi è un **flesso** $F\!\left(\sqrt[3]{2},\,0\right)$, poiché $f\!\left(\sqrt[3]{2}\right) = 2^{2/3} - 2^{2/3} = 0$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="223.42" height="259.943" viewBox="-72 -72 167.565 194.958"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 43.617H82.314"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M80.434 41.217c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="5.322" y="43.617" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.925 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M5.322 122.488V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M2.922-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="5.322" y="43.617" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -108.248)">y</text></g><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M5.322 122.488V-59.154"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.56-46.359.692 1.665.692 1.644.691 1.621.692 1.599.692 1.577.691 1.555.692 1.533.691 1.51.692 1.487.691 1.466.692 1.442.692 1.42.691 1.397.692 1.374.691 1.35.692 1.327.691 1.303.692 1.281.692 1.257.691 1.23.692 1.208.691 1.184.692 1.158.691 1.133.692 1.11.692 1.084.691 1.057.692 1.031.691 1.006.692.978.691.953.692.923.692.898.691.87.692.84.691.81.692.783.691.75.692.72.692.69.691.656.692.624.691.589.692.555.691.52.692.482.692.445.691.405.692.367.691.32.692.278.691.234.692.184.692.135.691.081.692.027.691-.032.692-.095.691-.163.692-.232.692-.309.691-.39.692-.48.691-.576.692-.681.691-.797.692-.923.692-1.068.691-1.225.692-1.403.691-1.607.692-1.836.691-2.105.692-2.41.691-2.78L-5-14.56l.692-3.741.691-4.383.692-5.181M13.545 112.534l.646-5.344.645-4.668.646-4.122.646-3.679.646-3.31.646-3 .645-2.75.646-2.534.646-2.348.646-2.191.646-2.055.645-1.938.646-1.836.646-1.75.646-1.671.646-1.605.645-1.545.646-1.495.646-1.451.646-1.412.646-1.377.646-1.346.645-1.322.646-1.299.646-1.28.646-1.264.646-1.25.645-1.239.646-1.228.646-1.223.646-1.216.646-1.211.645-1.209.646-1.206.646-1.205.646-1.208.646-1.208.645-1.211.646-1.215.646-1.218.646-1.222.646-1.23.646-1.235.645-1.24.646-1.249.646-1.256.646-1.264.646-1.274.645-1.283.646-1.291.646-1.3.646-1.313.646-1.322.645-1.333.646-1.343.646-1.355.646-1.367.646-1.378.645-1.391.646-1.403.646-1.414.646-1.428.646-1.44.646-1.453.645-1.467.646-1.479.646-1.493.646-1.506.646-1.52.645-1.534.646-1.547.646-1.562.646-1.576.646-1.59.645-1.604.646-1.618.646-1.634.646-1.648.646-1.661"/><path stroke="none" d="M-16.738 7.767c0-.58-.951-1.05-2.125-1.05s-2.125.47-2.125 1.05.951 1.05 2.125 1.05 2.125-.47 2.125-1.05m-2.125 0"/><text x="5.322" y="43.617" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-36.498 -33.698)">m</text><path stroke="none" d="M37.92 43.617c0-.58-.951-1.05-2.125-1.05s-2.125.47-2.125 1.05.951 1.05 2.125 1.05 2.125-.47 2.125-1.05m-2.125 0"/><text x="5.322" y="43.617" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.006 -3.533)">F</text><path stroke="none" d="M-41.348-16.134c0-.464-.761-.84-1.7-.84s-1.7.376-1.7.84.761.84 1.7.84 1.7-.376 1.7-.84m-1.7 0"/><text x="5.322" y="43.617" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-59.765 -56.334)">C</text><path stroke="none" d="M55.392 7.767c0-.464-.761-.84-1.7-.84s-1.7.376-1.7.84.761.84 1.7.84 1.7-.377 1.7-.84m-1.7 0"/><text x="5.322" y="43.617" stroke="none" font-family="cmmi10" font-size="10" transform="translate(51.903 -32.434)">D</text></g></svg>
</figure>

## c)

Cerchiamo le intersezioni di $\gamma$ con la retta $y = 5$:
$$x^2 - \frac{2}{x} = 5 \;\Rightarrow\; x^3 - 5x - 2 = 0.$$
Una radice intera è $x = -2$; con la regola di Ruffini si abbassa il grado:
$$(x+2)(x^2 - 2x - 1) = 0 \;\Rightarrow\; x = -2 \ \text{ oppure } \ x = 1 \pm \sqrt{2}.$$
Le intersezioni che delimitano la regione sul ramo $x < 0$ sono $x = -2$ e $x = 1 - \sqrt{2}$. Su tale intervallo la retta $y = 5$ sta sopra la curva, quindi
$$\text{Area} = \int_{-2}^{\,1-\sqrt{2}} \left[\,5 - \left(x^2 - \frac{2}{x}\right)\right] dx = \left[\,5x - \frac{x^3}{3} + 2\ln|x|\,\right]_{-2}^{\,1-\sqrt{2}}.$$
Svolgendo i calcoli si ottiene
$$\text{Area} = 10 - \frac{10\sqrt{2}}{3} + 2\ln\!\frac{\sqrt{2}-1}{2} \cong 2.14\ u^2.$$

## d)

Discutiamo il numero di soluzioni di $x^3 - kx - 2 = 0$ per $-2 < x < 2$, con $k$ parametro reale. Poiché $x = 0$ non è soluzione, possiamo dividere per $x$:
$$x^3 - kx - 2 = 0 \;\Longleftrightarrow\; k = \frac{x^3 - 2}{x} = x^2 - \frac{2}{x} = f(x).$$
Il problema equivale quindi a contare le intersezioni del grafico di $\gamma$ con la retta orizzontale $y = k$, per $-2 < x < 2$ (con $x \neq 0$).

Valori caratteristici (con estremi $x=\pm2$ **esclusi**):
- $f(-2) = 5$: punto $C(-2,5)$ escluso;
- minimo $m(-1,3)$;
- $f(2) = 3$: punto $D(2,3)$ escluso;
- sul ramo $0 < x < 2$ la funzione cresce da $-\infty$ fino a $3$ (escluso).

Osservando il grafico si ottiene:

- **$k < 3$:** una sola intersezione, sul ramo $x > 0$ → **1 soluzione**;
- **$k = 3$:** la retta è tangente nel minimo → **2 soluzioni coincidenti** in $x = -1$;
- **$3 < k < 5$:** due intersezioni sul ramo $x < 0$ → **2 soluzioni distinte** (entrambe negative);
- **$k = 5$:** l'estremo $x = -2$ non è accettabile, resta la sola intersezione in $x = 1 - \sqrt{2}$ → **1 soluzione**;
- **$k > 5$:** una sola intersezione sul ramo crescente per $-1 < x < 0$ → **1 soluzione**.

In sintesi l'equazione ammette:
$$\textbf{1 soluzione}\ \text{per } k < 3 \ \text{oppure}\ k \ge 5; \qquad \textbf{2 soluzioni}\ \text{per } 3 \le k < 5.$$

*Fonte:* [📄 PDF p.14](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
