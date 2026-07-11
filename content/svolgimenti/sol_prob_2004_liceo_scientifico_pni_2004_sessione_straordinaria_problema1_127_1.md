

**Problema:** [[Problemi/prob_2004_liceo_scientifico_pni_2004_sessione_straordinaria_problema1_127_1|2004 PNI Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_problema1_127|2004 PNI Straordinaria — Problema 1]]

È assegnata una parabola $p$ di vertice $V$ e fuoco $F$ con $\overline{VF}=\tfrac12$; $E$ è il simmetrico di $F$ rispetto a $V$. Scelto un opportuno sistema di assi, si studiano la parabola, il luogo del baricentro di $PEF$ e un'area delimitata dalle due curve.

## a) Equazione della parabola ed esistenza del punto $A$

Poniamo il vertice $V$ nell'origine e l'asse di simmetria lungo l'asse $y$. Poiché la distanza vertice–fuoco è $\overline{VF}=\tfrac12$, il fuoco è
$$F=\left(0,\ \tfrac12\right),\qquad E=\left(0,\ -\tfrac12\right),$$
e la direttrice ha equazione $y=-\tfrac12$. Dalla definizione di parabola (parametro $2\overline{VF}=1$) si ottiene
$$x^{2}=2y \qquad\Longleftrightarrow\qquad p:\ y=\frac{x^{2}}{2}.$$

**Triangolo $AEF$ rettangolo in $A$.** Sia $A=\left(a,\ \dfrac{a^{2}}{2}\right)$ un punto di $p$. I vettori uscenti da $A$ sono
$$\overrightarrow{AE}=\left(-a,\ -\frac{a^{2}}{2}-\frac12\right),\qquad \overrightarrow{AF}=\left(-a,\ \frac12-\frac{a^{2}}{2}\right).$$
La condizione di perpendicolarità $\overrightarrow{AE}\cdot\overrightarrow{AF}=0$ dà
$$a^{2}+\left(\frac{a^{2}}{2}+\frac12\right)\left(\frac{a^{2}}{2}-\frac12\right)=a^{2}+\frac{a^{4}-1}{4}=0,$$
cioè $a^{4}+4a^{2}-1=0$. Posto $u=a^{2}$,
$$u=\frac{-4+\sqrt{16+4}}{2}=\sqrt{5}-2>0.$$
Quindi il punto $A$ **esiste** (anzi ne esistono due, simmetrici rispetto all'asse $y$):
$$a=\pm\sqrt{\sqrt{5}-2}\approx\pm0{,}486.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="271.976" height="208.956" viewBox="-72 -72 203.982 156.717"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 48.397h190.801"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M116.851 45.997c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.134 2.153)">x</text><path fill="none" d="M23.53 84.247V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M21.13-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -113.028)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-56.137-31.27 2.7 5.31 2.701 5.126 2.7 4.943 2.701 4.76 2.7 4.577 2.701 4.395 2.7 4.21 2.701 4.029 2.7 3.844 2.701 3.662 2.7 3.479 2.701 3.295 2.7 3.113 2.701 2.93 2.701 2.745 2.7 2.564 2.701 2.38 2.7 2.197 2.701 2.014 2.7 1.831 2.701 1.648 2.7 1.465 2.701 1.282 2.7 1.098 2.701.916 2.7.732 2.701.55 2.7.366 2.701.183h2.7l2.701-.183 2.7-.366 2.701-.548 2.7-.733 2.701-.915 2.7-1.099 2.701-1.28 2.7-1.466 2.701-1.647 2.7-1.83 2.701-2.014 2.7-2.198 2.701-2.38 2.7-2.562 2.701-2.746 2.7-2.93 2.701-3.111 2.7-3.296 2.701-3.478 2.7-3.662 2.701-3.844 2.701-4.028 2.7-4.21 2.701-4.395 2.7-4.576 2.701-4.76 2.7-4.943 2.701-5.127 2.7-5.309"/><path fill="none" stroke="red" stroke-width=".8" d="m-22.477-31.311 1.559 5.31 1.559 5.128 1.559 4.944 1.559 4.761 1.559 4.579 1.559 4.396 1.559 4.212 1.56 4.028 1.558 3.847 1.56 3.662 1.558 3.48 1.56 3.297 1.558 3.115 1.56 2.93 1.558 2.748 1.56 2.564 1.558 2.382 1.56 2.199 1.559 2.016 1.559 1.831 1.559 1.65 1.559 1.467 1.559 1.283 1.559 1.1 1.559.917 1.559.734 1.559.551 1.559.368 1.559.185 1.559.002 1.559-.181 1.559-.364 1.56-.547 1.558-.731 1.56-.914 1.558-1.096 1.56-1.28 1.558-1.462 1.56-1.645 1.558-1.83 1.56-2.011 1.558-2.195 1.56-2.378 1.559-2.56 1.559-2.744 1.559-2.927 1.559-3.11 1.559-3.294 1.559-3.476 1.559-3.66 1.559-3.841 1.559-4.026 1.559-4.208 1.559-4.392 1.559-4.574 1.559-4.758 1.56-4.94 1.558-5.124 1.56-5.307"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-56.137-31.27h159.335"/><path stroke="none" d="M25.35 48.397a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.589 10.366)">V</text><path stroke="none" d="M25.35 28.48a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -16.5)">F</text><path stroke="none" d="M25.35 68.313a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 23.333)">E</text><path stroke="none" d="M105.018-31.27a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.2 -83.2)">R</text><path stroke="none" d="M71.358-31.27a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="48.397" stroke="none" font-family="cmmi10" font-size="10" transform="translate(35.767 -83.2)">S</text><g fill="#00f" stroke="#00f"><text x="23.531" y="48.397" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.126 -62.554)">p</text></g><g fill="red" stroke="red"><text x="23.531" y="48.397" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.023 -94.12)">k</text></g><g stroke="none" font-size="10"><text x="23.531" y="48.397" font-family="cmmi10" transform="translate(-71.912 -85.134)">r</text><text x="31.098" y="48.397" font-family="cmr10" transform="translate(-71.912 -85.134)">:</text><text x="39.986" y="48.397" font-family="cmmi10" transform="translate(-71.912 -85.134)">y</text><text x="48.026" y="48.397" font-family="cmr10" transform="translate(-71.912 -85.134)">=</text><text x="58.581" y="48.397" font-family="cmmi10" transform="translate(-71.912 -85.134)">d</text></g></g></svg>
</figure>

## b) Luogo del baricentro $G$

Sia $P=\left(a,\ \dfrac{a^{2}}{2}\right)$ un punto generico di $p$. Il baricentro del triangolo $PEF$ è
$$G=\frac{P+E+F}{3}=\left(\frac{a}{3},\ \frac{1}{3}\left(\frac{a^{2}}{2}+\frac12-\frac12\right)\right)=\left(\frac{a}{3},\ \frac{a^{2}}{6}\right).$$
Poniamo $x=\dfrac{a}{3}$, ossia $a=3x$; allora
$$y=\frac{a^{2}}{6}=\frac{9x^{2}}{6}=\frac{3}{2}x^{2}.$$
Il luogo $k$ è dunque una parabola di vertice l'origine:
$$k:\ y=\frac{3}{2}x^{2}\qquad\Longleftrightarrow\qquad x^{2}=\frac{2y}{3},$$
più "stretta" di $p$ (parametro un terzo di quello di $p$).

## c) Distanza della retta $r$

La retta $r$, perpendicolare all'asse di simmetria e a distanza $d$ da $V$, ha equazione $y=d$ (con $d>0$). Nel primo quadrante essa incontra
$$p:\ x=\sqrt{2y}\ \Rightarrow\ R=\bigl(\sqrt{2d},\,d\bigr),\qquad k:\ x=\sqrt{\tfrac{2y}{3}}=\frac{\sqrt{2y}}{\sqrt3}\ \Rightarrow\ S=\left(\sqrt{\tfrac{2d}{3}},\,d\right).$$

La regione finita delimitata dal segmento $RS$, dall'arco $VR$ di $p$ e dall'arco $VS$ di $k$ si calcola integrando rispetto a $y$ la differenza tra le ascisse delle due curve (per $0\le y\le d$):
$$\text{Area}=\int_{0}^{d}\left(\sqrt{2y}-\sqrt{\frac{2y}{3}}\right)dy=\left(1-\frac{1}{\sqrt3}\right)\int_{0}^{d}\sqrt{2y}\,dy.$$
Poiché
$$\int_{0}^{d}\sqrt{2y}\,dy=\sqrt2\left[\frac{2}{3}\,y^{3/2}\right]_{0}^{d}=\frac{2\sqrt2}{3}\,d^{3/2},$$
si ha
$$\text{Area}=\left(1-\frac{1}{\sqrt3}\right)\frac{2\sqrt2}{3}\,d^{3/2}=\frac{\sqrt3-1}{\sqrt3}\cdot\frac{2\sqrt2}{3}\,d^{3/2}.$$

Imponiamo che valga $\dfrac{8}{9}(3-\sqrt3)$. Osservando che $3-\sqrt3=\sqrt3(\sqrt3-1)$, il secondo membro è $\dfrac{8\sqrt3(\sqrt3-1)}{9}$; semplificando il fattore comune $(\sqrt3-1)$:
$$\frac{2\sqrt2}{3\sqrt3}\,d^{3/2}=\frac{8\sqrt3}{9}\ \Longrightarrow\ d^{3/2}=\frac{8\sqrt3}{9}\cdot\frac{3\sqrt3}{2\sqrt2}=\frac{72}{18\sqrt2}=\frac{4}{\sqrt2}=2\sqrt2.$$
Poiché $2\sqrt2=2^{3/2}$, risulta
$$d^{3/2}=2^{3/2}\ \Longrightarrow\ d=2.$$
La retta $r$ va dunque condotta a **distanza $2$ dal vertice $V$**.

## d) Natura del numero trovato

La distanza trovata è $d=2$, che è un **numero razionale**.

*Fonte:* [📄 PDF p.127](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
