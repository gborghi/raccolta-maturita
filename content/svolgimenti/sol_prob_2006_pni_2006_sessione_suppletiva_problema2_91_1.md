

**Problema:** [[Problemi/prob_2006_pni_2006_sessione_suppletiva_problema2_91_1|2006 PNI Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_pni_2006_sessione_suppletiva_problema2_91|2006 PNI Suppletiva — Problema 2]]

Nel piano cartesiano $Oxy$ sono assegnate le curve di equazione
$$y = \frac{x+k}{x^2},$$
dove $k$ è un parametro reale non nullo.

## a)

**Assenza di punti comuni.** Consideriamo due curve della famiglia, $y_1 = \dfrac{x+k_1}{x^2}$ e $y_2 = \dfrac{x+k_2}{x^2}$, con $k_1 \ne k_2$ (entrambi non nulli). Un punto $(x_0, y_0)$ appartiene a entrambe se
$$\frac{x_0+k_1}{x_0^{2}} = \frac{x_0+k_2}{x_0^{2}}.$$
Moltiplicando per $x_0^{2}$ si ottiene $x_0+k_1 = x_0+k_2$, cioè $k_1 = k_2$, contro l'ipotesi. Dunque **le curve non hanno punti in comune**.

**Unico flesso.** Posto $f(x) = \dfrac{x+k}{x^2}$, definita per ogni $x \ne 0$, calcoliamo le derivate:
$$f'(x) = \frac{1\cdot x^{2} - (x+k)\cdot 2x}{x^{4}} = \frac{-x^{2} - 2kx}{x^{4}} = \frac{-x - 2k}{x^{3}},$$
$$f''(x) = \frac{-1\cdot x^{3} - (-x-2k)\cdot 3x^{2}}{x^{6}} = \frac{2x^{3} + 6kx^{2}}{x^{6}} = \frac{2x + 6k}{x^{4}}.$$
Poiché $x^{4} > 0$, il segno di $f''$ dipende dal numeratore: $f''(x) = 0 \Rightarrow x = -3k$, e $f''$ cambia segno attraversando tale valore. Essendo $k \ne 0$, ogni curva presenta **uno ed un solo flesso**, nel punto di ascissa $x = -3k$. La sua ordinata è
$$f(-3k) = \frac{-3k + k}{(-3k)^{2}} = \frac{-2k}{9k^{2}} = -\frac{2}{9k}.$$

## b)

La retta $r\colon x + 27y - 9 = 0$ si scrive $y = -\dfrac{x}{27} + \dfrac{1}{3}$, quindi ha coefficiente angolare $m = -\dfrac{1}{27}$. La tangente inflessionale ha pendenza $f'(-3k)$:
$$f'(-3k) = \frac{-(-3k) - 2k}{(-3k)^{3}} = \frac{3k - 2k}{-27k^{3}} = \frac{k}{-27k^{3}} = -\frac{1}{27k^{2}}.$$
Imponendo $f'(-3k) = -\dfrac{1}{27}$:
$$-\frac{1}{27k^{2}} = -\frac{1}{27} \Rightarrow k^{2} = 1 \Rightarrow k = \pm 1.$$

Occorre verificare quale valore dà proprio la retta $r$.

- Per $k = 1$ il flesso è $\left(-3, -\dfrac{2}{9}\right)$ e la tangente inflessionale è $y + \dfrac{2}{9} = -\dfrac{1}{27}(x + 3)$, cioè $x + 27y - 3 = 0$: **non** coincide con $r$.
- Per $k = -1$ il flesso è $\left(3, \dfrac{2}{9}\right)$ e la tangente è $y - \dfrac{2}{9} = -\dfrac{1}{27}(x - 3)$, cioè $x + 27y - 9 = 0$: **coincide** con $r$.

La curva richiesta è dunque
$$\gamma\colon\ y = \frac{x-1}{x^{2}}, \qquad k = -1.$$

## c)

Studiamo $f(x) = \dfrac{x-1}{x^{2}}$.

**Dominio:** $\mathbb{R} \setminus \{0\}$.

**Intersezioni con gli assi:** $f(x) = 0 \Rightarrow x = 1$; l'asse $y$ non è intersecato ($x = 0$ escluso).

**Segno:** $f(x) > 0$ per $x > 1$; $f(x) < 0$ per $x < 0$ oppure $0 < x < 1$.

**Asintoti:** la retta $x = 0$ è asintoto verticale. Per $x \to \pm\infty$,
$$f(x) = \frac{1}{x} - \frac{1}{x^{2}} \to 0,$$
quindi $y = 0$ è asintoto orizzontale (a entrambi gli estremi).

**Monotonia:** con $k = -1$,
$$f'(x) = \frac{-x + 2}{x^{3}}, \qquad f'(x) = 0 \Rightarrow x = 2.$$
Per $x < 0$ e per $0 < x < 2$ si ha $f'(x) > 0$ (funzione crescente); per $x > 2$ si ha $f'(x) < 0$ (funzione decrescente). In $x = 2$ c'è un massimo relativo (e assoluto sul ramo positivo) di ordinata $f(2) = \dfrac{1}{4}$.

**Concavità:** $f''(x) = \dfrac{2x - 6}{x^{4}} \ge 0$ per $x \ge 3$, quindi flesso in $x = 3$ con $f(3) = \dfrac{2}{9}$.

**Tangente in $A(1, 0)$:** $f'(1) = \dfrac{-1 + 2}{1} = 1$, dunque
$$t\colon\ y - 0 = 1\cdot(x - 1) \Rightarrow y = x - 1.$$

**Ulteriore intersezione di $t$ con $\gamma$:** da $\dfrac{x-1}{x^{2}} = x - 1$, per $x \ne 1$ si ha $\dfrac{1}{x^{2}} = 1 \Rightarrow x = \pm 1$. L'altra intersezione è $B = (-1, -2)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="409.717" height="219.466" viewBox="-72 -72 307.288 164.599"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 -13.373 -26.034)"><clipPath id="pgf28f379b8d1097c4bb025d8fddece92a3cp1"><path d="M-58.897-118.364v164.6h307.288v-164.6Zm307.288 164.6"/></clipPath><g clip-path="url(#pgf28f379b8d1097c4bb025d8fddece92a3cp1)"><path fill="none" d="M-58.897 0h306.888"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M246.11 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="-13.373" y="-26.034" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 265.297 -28.187)">x</text><path fill="none" d="M0-118.364v162.35"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 42.106c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="-13.373" y="-26.034" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 10.742 23.83)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-51.215-27.741.72-.531.72-.547.72-.57.72-.59.721-.612.72-.637.72-.662.72-.688.72-.717.72-.746.72-.778.72-.812.721-.845.72-.887.72-.926.72-.968.72-1.015.72-1.065.72-1.115.721-1.176.72-1.236.72-1.298.72-1.372.72-1.446.72-1.528.72-1.616.72-1.717.721-1.816.72-1.938.72-2.053.72-2.197.72-2.342.72-2.507.72-2.686.72-2.888.721-3.103.72-3.356.72-3.63.72-3.934.72-4.275.72-4.668.72-5.104.72-5.598.721-6.168.72-6.824.72-7.558.72-8.452.72-9.467.72-10.67.72-12.088.72-13.768.721-15.831.72-18.323.72-21.356.72-25.203.72-29.988.72-36.172.72-44.239.72-55.023M8.706-211.202l2.807 110.49 2.807 48.58 2.808 24.752 2.807 13.858 2.807 8.274 2.807 5.163 2.807 3.321 2.807 2.179 2.807 1.45 2.807.954 2.807.628 2.807.398 2.807.238 2.807.124 2.807.039 2.807-.017 2.807-.06 2.807-.092 2.807-.111 2.807-.127 2.807-.138 2.807-.144 2.808-.147 2.807-.15 2.807-.15 2.807-.15 2.807-.148 2.807-.145 2.807-.143 2.807-.14 2.807-.137 2.807-.133 2.807-.13 2.807-.125 2.807-.123 2.807-.12 2.807-.116 2.807-.113 2.807-.11 2.807-.105 2.807-.104 2.807-.1 2.808-.097 2.807-.094 2.807-.092 2.807-.09 2.807-.086 2.807-.085 2.807-.081 2.807-.08 2.807-.078 2.807-.075 2.807-.073 2.807-.072 2.807-.07 2.807-.067 2.807-.066 2.807-.064 2.807-.063 2.807-.06 2.807-.06 2.807-.058 2.808-.057 2.807-.055 2.807-.054 2.807-.052 2.807-.052 2.807-.05 2.807-.049 2.807-.048 2.807-.047 2.807-.046 2.807-.045 2.807-.043 2.807-.043 2.807-.042 2.807-.041 2.807-.04 2.807-.04"/><path fill="none" stroke="#ff8000" stroke-width=".8" d="M-51.215-110.966 56.336 44.386"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M-25.607 13.7 243.269-.686"/><path stroke="none" d="M27.407 0c0 1.436-.806 2.6-1.8 2.6s-1.8-1.164-1.8-2.6.806-2.6 1.8-2.6 1.8 1.164 1.8 2.6m-1.8 0"/><text x="-13.373" y="-26.034" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 42.513 -22.501)">A</text><path stroke="none" d="M-23.807-73.977c0 1.436-.806 2.6-1.8 2.6s-1.8-1.164-1.8-2.6.806-2.6 1.8-2.6 1.8 1.164 1.8 2.6m-1.8 0"/><text x="-13.373" y="-26.034" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -23.854 -110.378)">B</text><path stroke="none" d="M78.172 8.211c0 1.077-.605 1.95-1.35 1.95s-1.35-.873-1.35-1.95.604-1.95 1.35-1.95c.745 0 1.35.873 1.35 1.95m-1.35 0"/><text x="-13.373" y="-26.034" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 93.728 -14.29)">F</text><path stroke="none" d="M52.565 9.247c0 1.077-.605 1.95-1.35 1.95s-1.35-.873-1.35-1.95.604-1.95 1.35-1.95c.745 0 1.35.873 1.35 1.95m-1.35 0"/><text x="-13.373" y="-26.034" stroke="none" font-family="cmr10" font-size="10" transform="matrix(1 0 0 -1 55.282 -13.254)">max</text><g fill="#00f" stroke="#00f"><text x="-13.373" y="-26.034" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 189.758 -47.559)">°</text></g><g fill="#ff8000" stroke="#ff8000"><text x="-13.373" y="-26.034" fill="#ff8000" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 64.063 7.879)">t</text></g><g fill="red" stroke="red"><text x="-13.373" y="-26.034" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 223.52 -15.24)">r</text></g></g></g></svg>
</figure>

## d)

La circonferenza di diametro $AB$ ha centro nel punto medio di $A(1, 0)$ e $B(-1, -2)$, cioè $C = (0, -1)$, e raggio
$$r = \frac{\overline{AB}}{2} = \frac{\sqrt{(1-(-1))^{2} + (0-(-2))^{2}}}{2} = \frac{\sqrt{4 + 4}}{2} = \frac{2\sqrt{2}}{2} = \sqrt{2}.$$
La sua equazione è
$$x^{2} + (y+1)^{2} = 2.$$

## e)

La retta $r\colon x + 27y - 9 = 0$, cioè $y = \dfrac{9 - x}{27}$, incontra l'asse $x$ in $(9, 0)$ e la curva $\gamma$ nel flesso $\left(3, \dfrac{2}{9}\right)$. La regione finita delimitata da $\gamma$, da $r$ e dall'asse $x$ ha area
$$A = \int_{1}^{3} (x-1)\,dx - \int_{1}^{3} \frac{x-1}{x^{2}}\,dx + \int_{3}^{9} \frac{9-x}{27}\,dx.$$

Calcoliamo i tre integrali.

$$\int_{1}^{3} (x-1)\,dx = \left[\frac{x^{2}}{2} - x\right]_{1}^{3} = \left(\frac{9}{2} - 3\right) - \left(\frac{1}{2} - 1\right) = \frac{3}{2} + \frac{1}{2} = 2.$$

$$\int_{1}^{3} \frac{x-1}{x^{2}}\,dx = \int_{1}^{3} \left(\frac{1}{x} - \frac{1}{x^{2}}\right)dx = \left[\ln|x| + \frac{1}{x}\right]_{1}^{3} = \left(\ln 3 + \frac{1}{3}\right) - (0 + 1) = \ln 3 - \frac{2}{3}.$$

$$\int_{3}^{9} \frac{9-x}{27}\,dx = \frac{1}{27}\left[9x - \frac{x^{2}}{2}\right]_{3}^{9} = \frac{1}{27}\left[\left(81 - \frac{81}{2}\right) - \left(27 - \frac{9}{2}\right)\right] = \frac{1}{27}\cdot\frac{36}{2} = \frac{2}{3}.$$

In definitiva
$$A = 2 - \left(\ln 3 - \frac{2}{3}\right) + \frac{2}{3} = \frac{10}{3} - \ln 3 \ \text{u}^2.$$

*Fonte:* [📄 PDF p.91](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
