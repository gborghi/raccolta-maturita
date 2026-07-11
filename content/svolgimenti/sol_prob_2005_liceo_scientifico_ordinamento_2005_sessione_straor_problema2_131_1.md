

**Problema:** [[Problemi/prob_2005_liceo_scientifico_ordinamento_2005_sessione_straor_problema2_131_1|2005 Ordinamento Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_problema2_131|2005 Ordinamento Straordinaria — Problema 2]]

Nel piano riferito a un sistema di assi cartesiani ortogonali $(Oxy)$ sono assegnate le curve di equazione

$$[1]\qquad y = x^4 + ax^3 + bx^2 + c.$$

## a)

Dimostrare che, nel punto in cui secano l'asse $y$, hanno tangente parallela all'asse $x$.

Il punto d'intersezione con l'asse $y$ si ottiene ponendo $x = 0$ in $[1]$: si trova $A = (0;\,c)$. Detta $y = f(x)$ l'equazione della generica curva, la derivata prima è

$$f'(x) = 4x^3 + 3ax^2 + 2bx \quad\Rightarrow\quad f'(0) = 0.$$

La tangente in $A$ ha dunque equazione $y - c = f'(0)(x-0)$, cioè $y = c$: essa è parallela all'asse $x$ per ogni curva della famiglia.

## b)

Trovare quale relazione deve sussistere fra i coefficienti $a$, $b$ affinché la curva $[1]$ volga la concavità verso le $y$ positive in tutto il suo dominio.

Consideriamo la derivata seconda:

$$f''(x) = 12x^2 + 6ax + 2b.$$

La curva volge la concavità verso l'alto in ogni punto se $f''(x) > 0$ per ogni $x$, cioè se il discriminante è negativo:

$$\frac{\Delta}{4} = 9a^2 - 24b < 0 \quad\Rightarrow\quad 3a^2 - 8b < 0.$$

Resta da esaminare il caso limite $3a^2 - 8b = 0$, in cui $f''$ si annulla in un solo punto $x = -\dfrac{a}{4}$. Le derivate successive valgono

$$f'''(x) = 24x + 6a \;\Rightarrow\; f'''\!\left(-\tfrac{a}{4}\right) = -6a + 6a = 0,\qquad f^{(4)}(x) = 24 > 0.$$

La prima derivata non nulla in $x = -\dfrac{a}{4}$ è dunque di ordine pari: non si ha un flesso ma un minimo, e anche in questo caso la concavità è rivolta verso l'alto. In conclusione la curva volge la concavità verso le $y$ positive in tutto il dominio se

$$3a^2 - 8b \le 0.$$

## c)

Determinare i coefficienti $a$, $b$, $c$ in modo che la curva $[1]$ abbia, nel punto in cui seca l'asse $y$, un flesso e la relativa tangente inflessionale la sechi ulteriormente nel punto $(2;\,2)$.

Il punto in cui la curva taglia l'asse $y$ è $A = (0;\,c)$. Perché in $A$ vi sia un flesso deve annullarsi la derivata seconda:

$$f''(0) = 2b = 0 \quad\Rightarrow\quad b = 0.$$

La tangente inflessionale in $A$ ha equazione $y - c = f'(0)(x-0)$, cioè $y = c$. Essa passa per $(2;\,2)$ se $c = 2$. Imponendo infine che la curva passi per $(2;\,2)$:

$$2 = 16 + 8a + 4b + c,\qquad\text{con } b=0,\ c=2 \;\Rightarrow\; 8a = -16 \;\Rightarrow\; a = -2.$$

Quindi

$$a = -2,\quad b = 0,\quad c = 2 \qquad\Rightarrow\qquad y = x^4 - 2x^3 + 2.$$

## d)

Indicata con $K$ la curva trovata, stabilire com'è situata rispetto all'asse $x$.

Studiamo $K:\; y = x^4 - 2x^3 + 2$. Cerchiamo gli estremi tramite la derivata prima:

$$y' = 4x^3 - 6x^2 = 2x^2(2x - 3) \ge 0 \quad\Leftrightarrow\quad x \ge \frac{3}{2},$$

con $y' = 0$ per $x = 0$ e $x = \dfrac{3}{2}$. La funzione è quindi decrescente per $x < \dfrac{3}{2}$ e crescente per $x > \dfrac{3}{2}$: in $x = 0$ vi è un flesso a tangente orizzontale e in $x = \dfrac{3}{2}$ un minimo assoluto. Le ordinate corrispondenti sono

$$x = 0 \Rightarrow y = 2, \qquad x = \frac{3}{2} \Rightarrow y = \frac{81}{16} - \frac{27}{4} + 2 = \frac{5}{16}.$$

Poiché il minimo assoluto vale $\dfrac{5}{16} > 0$, la curva $K$ è tutta al di sopra dell'asse $x$ (l'equazione $x^4 - 2x^3 + 2 = 0$ non ha radici reali).

Dalla derivata seconda

$$y'' = 12x^2 - 12x = 12x(x - 1) \ge 0 \quad\Leftrightarrow\quad x \le 0 \ \text{oppure}\ x \ge 1,$$

si deducono due flessi: in $x = 0$ $(y = 2)$ e in $x = 1$ $(y = 1)$. La concavità è rivolta verso l'alto per $x < 0$ e $x > 1$, verso il basso per $0 < x < 1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="168.41" height="255.619" viewBox="-72 -72 126.308 191.714"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 103.026H41.056"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M39.176 100.626c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(73.811 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-28.822 119.244V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-31.222-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -167.658)">y</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-55.852 105.188v-4.324"/><g fill="gray" stroke="none" font-size="8"><text x="-28.822" y="103.026" font-family="cmsy8" transform="translate(-32.46 9.526)">¡</text><text x="-22.211" y="103.026" font-family="cmr8" transform="translate(-32.46 9.526)">1</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-1.792 105.188v-4.324"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(24.905 9.526)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M25.238 105.188v-4.324"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(51.935 9.526)">2</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-30.984 75.996h4.325"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-5.62 -24.452)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-30.984 48.966h4.325"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-5.62 -51.482)">2</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-30.984-32.124h4.325"/><text x="-28.822" y="103.026" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-5.62 -132.572)">5</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.203-46.47.95 10.262.95 9.442.95 8.665.95 7.928.951 7.232.95 6.576.95 5.957.95 5.374.951 4.83.95 4.32.95 3.844.95 3.402.951 2.992.95 2.613.95 2.264.951 1.946.95 1.654.95 1.392.95 1.154.951.942.95.755.95.59.95.45.951.33.95.228.95.15.951.086.95.042.95.015.95.001.951.003.95.019.95.046.95.086.951.135.95.194.95.263.951.337.95.42.95.506.95.598.951.694.95.792.95.891.95.992.951 1.09.95 1.19.95 1.286.951 1.378.95 1.466.95 1.55.95 1.624.951 1.695.95 1.756.95 1.806.95 1.849.951 1.877.95 1.896.95 1.9.951 1.89.95 1.864.95 1.822.95 1.765.951 1.686.95 1.591.95 1.474.95 1.337.951 1.176.95.993.95.786.951.553.95.295.95.01.95-.306.951-.648.95-1.022.95-1.425.95-1.863.951-2.333.95-2.835.95-3.376.951-3.949.95-4.562.95-5.212.95-5.9.951-6.63.95-7.4.95-8.214.951-9.068"/><path fill="none" stroke="red" stroke-width=".8" d="M-66.664 48.966H36.05M-63.96-48.342l77.035 154.071"/><path stroke="none" d="M-26.922 48.966a1.9 1.9 0 1 0-3.8 0 1.9 1.9 0 0 0 3.8 0m-1.9 0"/><g stroke="none" font-size="8"><text x="-28.822" y="103.026" font-family="cmr8" transform="translate(3.533 -59.593)">(0</text><text x="-21.266" y="103.026" font-family="cmmi8" transform="translate(3.533 -59.593)">;</text><text x="-17.488" y="103.026" font-family="cmr8" transform="translate(3.533 -59.593)">2)</text></g><path stroke="none" d="M.108 75.996a1.9 1.9 0 1 0-3.8 0 1.9 1.9 0 0 0 3.8 0m-1.9 0"/><g stroke="none" font-size="8"><text x="-28.822" y="103.026" font-family="cmr8" transform="translate(4.608 -17.497)">(1</text><text x="-21.266" y="103.026" font-family="cmmi8" transform="translate(4.608 -17.497)">;</text><text x="-17.488" y="103.026" font-family="cmr8" transform="translate(4.608 -17.497)">1)</text></g><path stroke="none" d="M-53.952-32.124a1.9 1.9 0 1 0-3.8 0 1.9 1.9 0 0 0 3.8 0m-1.9 0"/><g stroke="none" font-size="8"><text x="-28.822" y="103.026" font-family="cmmi8" transform="translate(-23.497 -140.683)">A</text><text x="-22.455" y="103.026" font-family="cmr8" transform="translate(-23.497 -140.683)">(</text><text x="-19.149" y="103.026" font-family="cmsy8" transform="translate(-23.497 -140.683)">¡</text><text x="-12.538" y="103.026" font-family="cmr8" transform="translate(-23.497 -140.683)">1</text><text x="-8.288" y="103.026" font-family="cmmi8" transform="translate(-23.497 -140.683)">;</text><text x="-4.51" y="103.026" font-family="cmr8" transform="translate(-23.497 -140.683)">5)</text></g><path stroke="none" d="M-13.407 48.966a1.9 1.9 0 1 0-3.8 0 1.9 1.9 0 0 0 3.8 0m-1.9 0"/><text x="-28.822" y="103.026" stroke="none" font-family="cmmi8" font-size="8" transform="translate(17.048 -57.593)">B</text><g fill="#00f" stroke="#00f"><text x="-28.822" y="103.026" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(53.51 -88.485)">K</text></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-28.822" y="103.026" font-family="cmmi10" font-size="10" transform="translate(-35.583 -112.123)">r</text><text x="-24.31" y="104.526" font-family="cmr7" font-size="7" transform="translate(-35.583 -112.123)">2</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-28.822" y="103.026" font-family="cmmi10" font-size="10" transform="translate(53.616 -62.118)">r</text><text x="-24.31" y="104.526" font-family="cmr7" font-size="7" transform="translate(53.616 -62.118)">1</text></g></g></g></svg>
</figure>

## e)

Dopo aver verificato che $K$ presenta un secondo flesso, calcolare l'area della regione finita delimitata da $K$ e dalle due tangenti inflessionali.

Come visto al punto d), oltre al flesso $(0;\,2)$ la curva presenta un secondo flesso in $(1;\,1)$. La tangente inflessionale in $(0;\,2)$ è orizzontale:

$$r_1:\ y = 2.$$

La tangente inflessionale in $(1;\,1)$ ha coefficiente angolare $f'(1) = 4 - 6 = -2$, dunque

$$r_2:\ y - 1 = -2(x - 1) \quad\Rightarrow\quad y = -2x + 3.$$

**Intersezioni.** Fra $K$ e la tangente $r_2$:

$$x^4 - 2x^3 + 2 = -2x + 3 \;\Rightarrow\; x^4 - 2x^3 + 2x - 1 = 0.$$

Raccogliendo,

$$(x^4 - 1) - 2x(x^2 - 1) = (x^2 - 1)(x^2 - 2x + 1) = (x + 1)(x - 1)^3 = 0,$$

da cui l'ulteriore intersezione $x_A = -1$, cioè $A = (-1;\,5)$. Le due tangenti si incontrano ponendo $-2x + 3 = 2$, cioè in $B = \left(\dfrac{1}{2};\,2\right)$; inoltre $r_1$ interseca $K$ anche in $(2;\,2)$.

**Area.** Nella regione la frontiera superiore è la tangente $r_2$ per $-1 \le x \le \dfrac{1}{2}$ e la tangente $r_1$ per $\dfrac{1}{2} \le x \le 2$, mentre la frontiera inferiore è sempre la curva $K$. Perciò

$$\mathcal{A} = \int_{-1}^{1/2}\!\big[(-2x + 3) - (x^4 - 2x^3 + 2)\big]\,dx + \int_{1/2}^{2}\!\big[2 - (x^4 - 2x^3 + 2)\big]\,dx.$$

Cioè

$$\mathcal{A} = \int_{-1}^{1/2}\!\big(-x^4 + 2x^3 - 2x + 1\big)\,dx + \int_{1/2}^{2}\!\big(-x^4 + 2x^3\big)\,dx.$$

Calcolando le primitive,

$$\int_{-1}^{1/2}\!\big(-x^4 + 2x^3 - 2x + 1\big)\,dx = \left[-\frac{x^5}{5} + \frac{x^4}{2} - x^2 + x\right]_{-1}^{1/2} = \frac{63}{40},$$

$$\int_{1/2}^{2}\!\big(-x^4 + 2x^3\big)\,dx = \left[-\frac{x^5}{5} + \frac{x^4}{2}\right]_{1/2}^{2} = \frac{63}{40}.$$

Sommando,

$$\mathcal{A} = \frac{63}{40} + \frac{63}{40} = \frac{63}{20}\ u^2 = 3{,}15\ u^2.$$

*Fonte:* [📄 PDF p.131](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
