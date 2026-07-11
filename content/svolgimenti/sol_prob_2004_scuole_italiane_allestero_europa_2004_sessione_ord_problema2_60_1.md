

**Problema:** [[Problemi/prob_2004_scuole_italiane_allestero_europa_2004_sessione_ord_problema2_60_1|2004 SE Europa Ord — Problema 2 — Problema 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_europa_2004_sessione_ord_problema2_60|2004 SE Europa Ord — Problema 2]]

Nel piano riferito a un sistema di assi cartesiani ortogonali $(Oxy)$ è assegnato il fascio di curve di equazione

$$y = ax^2 - \frac{3}{2}\,ax + \frac{1}{2x}, \qquad (x \neq 0),$$

dove $a$ è un parametro reale.

## a) Punto comune

Raccogliendo il parametro $a$ si scrive l'equazione nella forma

$$y - \frac{1}{2x} - a\,x\left(x - \frac{3}{2}\right) = 0, \qquad (x \neq 0).$$

Il punto comune a tutte le curve non deve dipendere da $a$: occorre quindi annullare il coefficiente di $a$. Si risolve il sistema

$$\begin{cases} y - \dfrac{1}{2x} = 0 \\[2mm] x\left(x - \dfrac{3}{2}\right) = 0 \end{cases}$$

Poiché $x \neq 0$, dalla seconda equazione si ottiene $x = \dfrac{3}{2}$; sostituendo nella prima, $y = \dfrac{1}{2 \cdot \frac{3}{2}} = \dfrac{1}{3}$. Tutte le curve passano dunque per il punto

$$A = \left(\frac{3}{2};\ \frac{1}{3}\right).$$

## b) Curva con assegnata tangente in A

La derivata del fascio è

$$y' = 2ax - \frac{3}{2}\,a - \frac{1}{2x^2}.$$

La tangente in $A$ ha coefficiente angolare $\dfrac{23}{18}$, quindi deve essere $y'\!\left(\dfrac{3}{2}\right) = \dfrac{23}{18}$:

$$2a\cdot\frac{3}{2} - \frac{3}{2}\,a - \frac{1}{2\cdot\frac{9}{4}} = \frac{3}{2}\,a - \frac{2}{9} = \frac{23}{18}.$$

Moltiplicando per $18$: $\ 27a - 4 = 23$, da cui $a = 1$. La curva richiesta ha quindi equazione

$$y = x^2 - \frac{3}{2}\,x + \frac{1}{2x}.$$

## c) Studio della curva K

La curva $K$ corrisponde effettivamente al valore $a = 1$ e ha equazione

$$y = x^2 - \frac{3}{2}\,x + \frac{1}{2x}.$$

**Dominio.** $\ x \neq 0$, cioè $-\infty < x < 0 \ \cup \ 0 < x < +\infty$.

**Simmetrie.** La funzione non è né pari né dispari.

**Intersezioni con gli assi.** Essendo $x = 0$ escluso, non vi sono intersezioni con l'asse $y$. Per l'asse $x$:

$$x^2 - \frac{3}{2}\,x + \frac{1}{2x} = 0 \ \Rightarrow\ 2x^3 - 3x^2 + 1 = 0.$$

Con la regola di Ruffini (radice $x = 1$):

$$2x^3 - 3x^2 + 1 = (x-1)(2x^2 - x - 1) = (x-1)^2(2x+1) = 0,$$

da cui $x = 1$ (doppia, la curva è tangente all'asse $x$) e $x = -\dfrac{1}{2}$.

**Limiti.**

$$\lim_{x\to \pm\infty}\left(x^2 - \frac{3}{2}\,x + \frac{1}{2x}\right) = +\infty;$$

la funzione è un infinito di ordine $2$, quindi non esistono asintoti obliqui.

$$\lim_{x\to 0^{\pm}}\left(x^2 - \frac{3}{2}\,x + \frac{1}{2x}\right) = \pm\infty \ \Rightarrow\ x = 0 \ \text{è asintoto verticale.}$$

**Derivata prima.**

$$y' = 2x - \frac{3}{2} - \frac{1}{2x^2} \ge 0 \ \Longleftrightarrow\ 4x^3 - 3x^2 - 1 \ge 0.$$

Poiché $4x^3 - 3x^2 - 1 = (x-1)(4x^2 + x + 1)$ e il fattore $4x^2 + x + 1$ è sempre positivo (discriminante negativo), risulta $y' \ge 0$ se e solo se $x \ge 1$. Dunque la funzione è crescente per $x > 1$ e decrescente per $x < 0$ e per $0 < x < 1$. Il punto $x = 1$ è di minimo relativo, con ordinata

$$y(1) = 1 - \frac{3}{2} + \frac{1}{2} = 0 \ \Rightarrow\ \text{minimo } (1;\,0).$$

**Derivata seconda.**

$$y'' = 2 + \frac{1}{x^3} = \frac{2x^3 + 1}{x^3} \ge 0.$$

Studiando il segno: la concavità è rivolta verso l'alto per $x < -\dfrac{1}{\sqrt[3]{2}}$ e per $x > 0$, verso il basso per $-\dfrac{1}{\sqrt[3]{2}} < x < 0$. Il punto $x = -\dfrac{1}{\sqrt[3]{2}}$ è di flesso, con ordinata

$$y\!\left(-\frac{1}{\sqrt[3]{2}}\right) = \frac{3\sqrt[3]{4}}{4} \cong 1{,}2.$$

Il grafico di $K$ (in blu), con la retta del punto d) in rosso:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="287.055" height="205.544" viewBox="-72 -72 215.291 154.158"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 31.61H94.831"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M92.951 29.21c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="3.045" y="31.611" stroke="none" font-family="cmmi10" font-size="10" transform="translate(95.72 2.153)">x</text><path fill="none" d="M3.045 81.688V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M.645-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="3.045" y="31.611" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -96.242)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M3.045 81.688V-59.154"/><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="M-65.241 43.348 91.817 7.355"/><g fill="red" stroke="none"><text x="3.045" y="31.611" font-family="cmmi10" font-size="10" transform="translate(92.505 -21.756)">y</text><text x="11.084" y="31.611" font-family="cmr10" font-size="10" transform="translate(92.505 -21.756)">=</text><text x="22.84" y="27.673" font-family="cmmi7" font-size="7" transform="translate(92.505 -21.756)">x</text><path d="M115.346 7.155h4.534v.4h-4.534z"/><text x="23.114" y="35.059" font-family="cmr7" font-size="7" transform="translate(92.505 -21.756)">2</text><text x="30.797" y="31.611" font-family="cmr10" font-size="10" transform="translate(92.505 -21.756)">+</text><text x="41.997" y="27.673" font-family="cmr7" font-size="7" transform="translate(92.505 -21.756)">1</text><path d="M134.503 7.155h3.986v.4h-3.987z"/><text x="41.997" y="35.059" font-family="cmr7" font-size="7" transform="translate(92.505 -21.756)">4</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-54.998-48.917.879 2.036.88 2.016.879 1.999.88 1.98.879 1.962.88 1.943.879 1.927.879 1.907.88 1.891.879 1.873.88 1.855.879 1.84.88 1.82.879 1.805.879 1.79.88 1.771.879 1.757.88 1.741.879 1.725.879 1.711.88 1.696.879 1.682.88 1.668.879 1.655.88 1.643.879 1.63.879 1.62.88 1.61.879 1.599.88 1.59.879 1.582.88 1.578.879 1.57.879 1.567.88 1.565.879 1.565.88 1.566.879 1.57.879 1.578.88 1.587.879 1.602.88 1.62.879 1.644.88 1.67.879 1.71.879 1.751.88 1.81.879 1.877.88 1.96.879 2.066.88 2.19.879 2.354.879 2.554.88 2.811.879 3.145.88 3.583.879 4.175.879 5 .88 6.182"/><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="M9.19-8.144 10.504.175l1.313 5.977 1.314 4.537 1.313 3.577 1.313 2.9 1.314 2.4 1.313 2.016 1.314 1.713 1.313 1.466 1.313 1.258 1.314 1.084 1.313.933 1.314.796 1.313.677 1.313.567 1.314.468 1.313.377 1.314.29 1.313.207 1.313.131 1.314.058 1.313-.012 1.314-.08 1.313-.146 1.313-.21 1.314-.27 1.313-.333 1.314-.39 1.313-.45 1.313-.506 1.314-.561 1.313-.617 1.314-.672 1.313-.726 1.313-.779 1.314-.832 1.313-.884 1.314-.936 1.313-.988 1.313-1.039 1.314-1.09 1.313-1.14 1.314-1.19 1.313-1.242 1.313-1.29 1.314-1.34 1.313-1.39 1.314-1.438 1.313-1.488L74.86 8.03l1.314-1.586 1.313-1.634 1.314-1.683 1.313-1.732 1.313-1.78 1.314-1.827 1.313-1.877 1.314-1.923 1.313-1.973"/><text x="3.045" y="31.611" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(87.37 -36.178)">K</text></g><path stroke="none" d="M39.588 31.61c0-.607-1.074-1.1-2.4-1.1s-2.4.493-2.4 1.1 1.075 1.1 2.4 1.1c1.326 0 2.4-.492 2.4-1.1m-2.4 0"/><g stroke="none" font-size="10"><text x="3.045" y="31.611" font-family="cmr10" transform="translate(37.676 11.033)">(1</text><text x="11.934" y="31.611" font-family="cmmi10" transform="translate(37.676 11.033)">;</text><text x="16.378" y="31.611" font-family="cmr10" transform="translate(37.676 11.033)">0)</text></g><path stroke="none" d="M-11.627 31.61c0-.607-1.074-1.1-2.4-1.1s-2.4.493-2.4 1.1 1.075 1.1 2.4 1.1c1.326 0 2.4-.492 2.4-1.1m-2.4 0"/><g stroke="none"><text x="3.045" y="31.611" font-family="cmsy10" font-size="10" transform="translate(-34.768 11.981)">¡</text><text x="12.023" y="27.673" font-family="cmr7" font-size="7" transform="translate(-34.768 11.981)">1</text><path d="M-22.745 40.892h3.986v.4h-3.986z"/><text x="12.023" y="35.059" font-family="cmr7" font-size="7" transform="translate(-34.768 11.981)">2</text></g><path stroke="none" d="M-21.665 12.988c0-.607-1.074-1.1-2.4-1.1s-2.4.493-2.4 1.1 1.075 1.1 2.4 1.1c1.326 0 2.4-.492 2.4-1.1m-2.4 0"/><text x="3.045" y="31.611" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-38.462 -15.206)">F</text></g></svg>
</figure>

## d) Area della regione

Si cerca l'area della regione finita di piano delimitata da $K$ e dalla retta

$$y = \frac{1}{2}\,x + \frac{1}{4}.$$

**Intersezioni.** Uguagliando le due equazioni:

$$x^2 - \frac{3}{2}\,x + \frac{1}{2x} = \frac{1}{2}\,x + \frac{1}{4} \ \Rightarrow\ 4x^3 - 8x^2 - x + 2 = 0.$$

Raccogliendo:

$$4x^2(x-2) - (x-2) = (x-2)(4x^2 - 1) = 0 \ \Rightarrow\ x = 2, \quad x = \pm\frac{1}{2}.$$

La regione finita è compresa fra $x = \dfrac{1}{2}$ e $x = 2$, dove la retta sta sopra la curva. L'area è quindi

$$\text{Area} = \int_{1/2}^{2}\left[\left(\frac{1}{2}\,x + \frac{1}{4}\right) - \left(x^2 - \frac{3}{2}\,x + \frac{1}{2x}\right)\right]dx = \int_{1/2}^{2}\left(-x^2 + 2x + \frac{1}{4} - \frac{1}{2x}\right)dx.$$

Una primitiva è

$$F(x) = -\frac{x^3}{3} + x^2 + \frac{1}{4}\,x - \frac{1}{2}\ln|x|.$$

Valutando:

$$F(2) = -\frac{8}{3} + 4 + \frac{1}{2} - \frac{1}{2}\ln 2 = \frac{11}{6} - \frac{1}{2}\ln 2,$$

$$F\!\left(\frac{1}{2}\right) = -\frac{1}{24} + \frac{1}{4} + \frac{1}{8} + \frac{1}{2}\ln 2 = \frac{1}{3} + \frac{1}{2}\ln 2.$$

Perciò

$$\text{Area} = F(2) - F\!\left(\frac{1}{2}\right) = \frac{11}{6} - \frac{1}{3} - \ln 2 = \frac{3}{2} - \ln 2 \cong 0{,}81 \ \text{u}^2.$$

*Fonte:* [📄 PDF p.60](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
