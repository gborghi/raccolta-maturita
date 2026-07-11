

**Problema:** [[Problemi/prob_2003_scuole_italiane_allestero_europa_2003_sessione_sup_problema2_86_1|2003 Europa Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_sup_problema2_86|2003 Europa Suppletiva — Problema 2]]

Scuole italiane all'estero (Europa, suppletiva) 2003 — Problema 2.

Data la parabola $y=-x^2+bx+c$ con vertice in $A(1;6)$ e l'iperbole $xy=k$ passante per $A$, si determinano i parametri, i punti comuni, l'area e il volume di rotazione della regione delimitata dai due archi $AB$.

## a) Determinazione di $b$, $c$ e $k$

Il vertice della parabola $y=-x^2+bx+c$ ha ascissa $x_V=\dfrac{b}{2}$. Imponendo $x_V=1$ si ottiene $b=2$.

Il passaggio per $A(1;6)$ dà

$$6=-1+b+c \Rightarrow 6=-1+2+c \Rightarrow c=5.$$

Quindi la parabola è

$$y=-x^2+2x+5.$$

L'iperbole $xy=k$ passa per $A(1;6)$ se $k=1\cdot 6=6$, cioè

$$xy=6.$$

## b) Punti comuni

La parabola ha vertice $A(1;6)$, interseca l'asse $y$ in $(0;5)$ e l'asse $x$ dove $-x^2+2x+5=0$, cioè in $x=1\pm\sqrt6$. L'iperbole equilatera $y=\dfrac{6}{x}$ ha per asintoti gli assi cartesiani.

Le intersezioni si trovano dal sistema

$$\begin{cases} y=-x^2+2x+5 \\ xy=6 \end{cases}$$

Sostituendo:

$$x(-x^2+2x+5)=6 \Rightarrow x^3-2x^2-5x+6=0.$$

Sapendo che $x=1$ è radice (è l'ascissa di $A$), con la regola di Ruffini si abbassa il grado:

$$(x-1)(x^2-x-6)=0 \Rightarrow (x-1)(x-3)(x+2)=0,$$

da cui $x=1,\; x=3,\; x=-2$. I punti comuni sono perciò

$$A(1;6),\qquad B(3;2),\qquad (-2;-3),$$

con $B(3;2)$ il punto del primo quadrante.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="264.088" height="341.575" viewBox="-72 -72 198.066 256.181"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#d9d9ff" stroke="none" d="m36.392-25.01 1.095.055 1.094.169 1.094.28 1.094.393 1.094.504 1.094.617 1.094.73 1.094.841 1.094.954 1.094 1.065 1.094 1.178 1.094 1.29 1.094 1.403 1.094 1.514 1.094 1.627 1.095 1.739 1.094 1.85 1.094 1.964 1.094 2.075 1.094 2.188 1.094 2.3 1.094 2.412 1.094 2.524L62.65 7.3l1.094 2.748 1.094 2.86 1.094 2.973 1.094 3.086 1.094 3.197 1.095 3.31 1.094 3.421 1.094 3.534 1.094 3.646 1.094 3.758 1.094 3.87 1.094 3.983 1.094 4.095 1.094 4.207 1.094 4.319.01.042-1.094-.742-1.094-.769-1.094-.795-1.094-.826-1.094-.856-1.094-.889-1.094-.923-1.094-.96-1.094-.998-1.094-1.04-1.094-1.083-1.094-1.13-1.094-1.18-1.094-1.231-1.094-1.29-1.095-1.35-1.094-1.413-1.094-1.486-1.094-1.56-1.094-1.643-1.094-1.726-1.094-1.825-1.094-1.924-1.094-2.036-1.094-2.162-1.094-2.292-1.094-2.435-1.094-2.599-1.094-2.772-1.095-2.966-1.094-3.184-1.094-3.423-1.094-3.691-1.094-3.993-1.094-4.332-1.094-4.718-1.094-5.158-1.094-5.657-1.094-6.236Z"/><path fill="none" d="M-12.689 103.027h125.504"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M110.935 100.627c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="15.053" y="103.027" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.695 2.153)">x</text><path fill="none" d="M15.053 130.768V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M12.653-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="15.053" y="103.027" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -167.658)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-9.487 73.63 1.376-5.827 1.376-5.652 1.376-5.473 1.376-5.296 1.376-5.118 1.376-4.94L.145 36.56l1.376-4.587 1.376-4.408 1.376-4.231L5.65 19.28l1.376-3.876 1.376-3.699 1.376-3.52 1.376-3.345 1.376-3.166 1.376-2.989 1.376-2.811 1.377-2.634 1.376-2.456 1.376-2.28 1.376-2.1 1.376-1.925 1.376-1.746 1.376-1.57 1.376-1.391 1.376-1.214 1.376-1.037 1.376-.86 1.376-.68 1.376-.505 1.376-.327 1.376-.15 1.376.029 1.376.205 1.376.383 1.376.56 1.377.739 1.376.915 1.376 1.093 1.376 1.27 1.376 1.448 1.376 1.625 1.376 1.803 1.376 1.98 1.376 2.158 1.376 2.335 1.376 2.513 1.376 2.69 1.376 2.867 1.376 3.046 1.376 3.222 1.376 3.4 1.376 3.577 1.376 3.755 1.376 3.933 1.377 4.11 1.376 4.287 1.376 4.464 1.376 4.642 1.376 4.82 1.376 4.997 1.376 5.175 1.376 5.352 1.376 5.53 1.376 5.707 1.376 5.884 1.376 6.062 1.376 6.24"/><path fill="none" stroke="red" stroke-width=".8" d="M33.405-45.847 34.5-37.47l1.094 7.492 1.095 6.727 1.095 6.08 1.095 5.522 1.094 5.038L41.068-2l1.095 4.242 1.094 3.914 1.095 3.619 1.095 3.357 1.095 3.126 1.094 2.915 1.095 2.725 1.095 2.554 1.094 2.399 1.095 2.255 1.095 2.128 1.095 2.006 1.094 1.899 1.095 1.8 1.095 1.702 1.094 1.62 1.095 1.54 1.095 1.466 1.095 1.396 1.094 1.333 1.095 1.275 1.095 1.219 1.095 1.166 1.094 1.117 1.095 1.07 1.095 1.03 1.094.988 1.095.95 1.095.913 1.095.88 1.094.848 1.095.817 1.095.788 1.094.762 1.095.735 1.095.711 1.095.687 1.094.666 1.095.643 1.095.623 1.094.605 1.095.586 1.095.568 1.095.552 1.094.535 1.095.522 1.095.504 1.095.491 1.094.479 1.095.465 1.095.453 1.094.44 1.095.43 1.095.417 1.095.408 1.094.398 1.095.387 1.095.378 1.094.368 1.095.36 1.095.353 1.095.342"/><path stroke="none" d="M37.892-25.01a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none" font-size="10"><text x="15.053" y="103.027" font-family="cmmi10" transform="translate(24.873 -134.07)">A</text><text x="22.553" y="103.027" font-family="cmr10" transform="translate(24.873 -134.07)">(1</text><text x="31.442" y="103.027" font-family="cmmi10" transform="translate(24.873 -134.07)">;</text><text x="35.886" y="103.027" font-family="cmr10" transform="translate(24.873 -134.07)">6)</text></g><path stroke="none" d="M80.572 60.348a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none" font-size="10"><text x="15.053" y="103.027" font-family="cmmi10" transform="translate(67.552 -48.712)">B</text><text x="23.14" y="103.027" font-family="cmr10" transform="translate(67.552 -48.712)">(3</text><text x="32.029" y="103.027" font-family="cmmi10" transform="translate(67.552 -48.712)">;</text><text x="36.473" y="103.027" font-family="cmr10" transform="translate(67.552 -48.712)">2)</text></g><path stroke="none" d="M-26.126 167.045a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none" font-size="10"><text x="15.053" y="103.027" font-family="cmr10" transform="translate(-83.99 75.052)">(</text><text x="18.942" y="103.027" font-family="cmsy10" transform="translate(-83.99 75.052)">¡</text><text x="26.72" y="103.027" font-family="cmr10" transform="translate(-83.99 75.052)">2</text><text x="31.72" y="103.027" font-family="cmmi10" transform="translate(-83.99 75.052)">;</text><text x="36.164" y="103.027" font-family="cmsy10" transform="translate(-83.99 75.052)">¡</text><text x="43.942" y="103.027" font-family="cmr10" transform="translate(-83.99 75.052)">3)</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-family="cmr10" font-size="10"><text x="15.053" y="103.027" transform="translate(-38.247 -74.323)">parab</text><text x="40.359" y="103.027" transform="translate(-38.247 -74.323)">ola</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmr10" font-size="10"><text x="15.053" y="103.027" transform="translate(65.71 -48.715)">ip</text><text x="23.664" y="103.027" transform="translate(65.71 -48.715)">erb</text><text x="37.859" y="103.027" transform="translate(65.71 -48.715)">ole</text></g></g></g></svg>
</figure>

## c) Area della regione tra i due archi $AB$

Per $1\le x\le 3$ la parabola sta sopra l'iperbole, quindi

$$\mathcal{A}=\int_{1}^{3}\left(-x^2+2x+5-\frac{6}{x}\right)dx=\left[-\frac{x^3}{3}+x^2+5x-6\ln|x|\right]_{1}^{3}.$$

Valutando gli estremi:

$$\left(-9+9+15-6\ln3\right)-\left(-\frac13+1+5\right)=\left(15-6\ln3\right)-\frac{17}{3}.$$

$$\mathcal{A}=\frac{28}{3}-6\ln3\;\cong\;2{,}74\ \text{u}^2.$$

## d) Volume di rotazione attorno all'asse $y$

Facendo ruotare la stessa regione attorno all'asse $y$, si usa il metodo dei gusci cilindrici:

$$V=2\pi\int_{1}^{3} x\left[(-x^2+2x+5)-\frac{6}{x}\right]dx=2\pi\int_{1}^{3}\left(-x^3+2x^2+5x-6\right)dx.$$

Calcolando la primitiva:

$$V=2\pi\left[-\frac{x^4}{4}+\frac{2}{3}x^3+\frac{5}{2}x^2-6x\right]_{1}^{3}=2\pi\left[\frac{9}{4}-\left(-\frac{37}{12}\right)\right]=2\pi\cdot\frac{16}{3}.$$

$$V=\frac{32}{3}\pi\;\cong\;33{,}51\ \text{u}^3.$$

*Fonte:* [📄 PDF p.86](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
