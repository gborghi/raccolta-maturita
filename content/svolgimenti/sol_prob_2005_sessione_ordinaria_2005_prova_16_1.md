

**Problema:** [[Problemi/prob_2005_sessione_ordinaria_2005_prova_16_1|2005 Ordinaria — Prova — Problema 1]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Nel primo quadrante si considera la parabola $\lambda:\ y = 6 - x^2$. La regione $R$ è delimitata dai due assi coordinati e da $\lambda$; essa è quindi racchiusa fra i punti $O(0,0)$, $A(\sqrt6,0)$ e $B(0,6)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="167.352" height="206.675" viewBox="-72 -72 125.514 155.006"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-70.586 65.47H40.263"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M38.383 63.07c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.499" y="65.47" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.694 2.153)">x</text><path fill="none" d="M-57.499 75.713V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="65.47" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -130.102)">y</text><path fill="#e1e1ff" stroke="none" d="m-57.499-36.96 1.359.029 1.358.088 1.358.147 1.358.206 1.358.264 1.358.324 1.358.382 1.358.441 1.358.5 1.358.56 1.358.616 1.358.677 1.358.735 1.358.794 1.358.853 1.358.912 1.358.97 1.358 1.03 1.358 1.087 1.358 1.147 1.358 1.206 1.358 1.265 1.358 1.323 1.358 1.382 1.358 1.44 1.358 1.5 1.358 1.56 1.358 1.617 1.358 1.676 1.358 1.735L-15.4-8.7l1.358 1.853 1.358 1.91 1.358 1.971 1.358 2.03L-8.61 1.15l1.359 2.147 1.358 2.206 1.358 2.264 1.358 2.323 1.358 2.382 1.358 2.441 1.358 2.5 1.358 2.558 1.358 2.617 1.358 2.676L6.329 28l1.358 2.794 1.358 2.853 1.358 2.91 1.358 2.971 1.358 3.03 1.358 3.087 1.358 3.147 1.358 3.205 1.358 3.264 1.358 3.323 1.358 3.382 1.358 3.44-80.124.064Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.499-36.96 1.359.029 1.358.088 1.358.147 1.358.206 1.358.264 1.358.324 1.358.382 1.358.441 1.358.5 1.358.56 1.358.616 1.358.677 1.358.735 1.358.794 1.358.853 1.358.912 1.358.97 1.358 1.03 1.358 1.087 1.358 1.147 1.358 1.206 1.358 1.265 1.358 1.323 1.358 1.382 1.358 1.44 1.358 1.5 1.358 1.56 1.358 1.617 1.358 1.676 1.358 1.735L-15.4-8.7l1.358 1.853 1.358 1.91 1.358 1.971 1.358 2.03L-8.61 1.15l1.359 2.147 1.358 2.206 1.358 2.264 1.358 2.323 1.358 2.382 1.358 2.441 1.358 2.5 1.358 2.558 1.358 2.617 1.358 2.676L6.329 28l1.358 2.794 1.358 2.853 1.358 2.91 1.358 2.971 1.358 3.03 1.358 3.087 1.358 3.147 1.358 3.205 1.358 3.264 1.358 3.323 1.358 3.382 1.358 3.44"/><text x="-57.499" y="65.47" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.705 -29.02)">R</text><g stroke="none"><text x="-57.499" y="57.198" font-family="cmsy10" font-size="10" transform="translate(73.466 12.605)">p</text><path d="M24.301 69.403h5v.4h-5z"/><text x="-49.165" y="65.47" font-family="cmr10" font-size="10" transform="translate(73.466 12.605)">6</text></g><text x="-57.499" y="65.47" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -99.209)">6</text><text x="-57.499" y="65.47" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><g fill="#00f" stroke="#00f"><text x="-57.499" y="65.47" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(69.068 -68.23)">¸</text></g></g></svg>
</figure>

## a)

Ruotando $R$ attorno all'asse $y$ si ottiene un solido di rotazione. Conviene integrare rispetto a $y$: a quota $y$ (con $0 \le y \le 6$) la sezione è un disco di raggio $x = \sqrt{6-y}$, poiché da $y = 6 - x^2$ segue $x^2 = 6 - y$. Dunque

$$V = \pi \int_0^6 x^2 \, dy = \pi \int_0^6 (6 - y)\, dy = \pi\left[\,6y - \frac{y^2}{2}\,\right]_0^6 = \pi(36 - 18) = 18\pi.$$

Il volume del solido è $V = 18\pi$.

## b)

Ruotando $R$ attorno alla retta $y = 6$ ogni sezione perpendicolare all'asse $x$ è una corona circolare. A un'ascissa $x$ fissata (con $0 \le x \le \sqrt6$) la regione occupa in verticale l'intervallo $0 \le y \le 6 - x^2$; misurando le distanze dalla retta $y = 6$ si ha raggio esterno $R_e = 6 - 0 = 6$ e raggio interno $R_i = 6 - (6 - x^2) = x^2$. Perciò

$$V = \pi \int_0^{\sqrt6} \left(R_e^2 - R_i^2\right) dx = \pi \int_0^{\sqrt6} \left(36 - x^4\right) dx = \pi\left[\,36x - \frac{x^5}{5}\,\right]_0^{\sqrt6}.$$

Essendo $(\sqrt6)^5 = 36\sqrt6$,

$$V = \pi\left(36\sqrt6 - \frac{36\sqrt6}{5}\right) = 36\sqrt6\left(1 - \frac{1}{5}\right)\pi = \frac{144\sqrt6}{5}\,\pi.$$

## c)

L'area complessiva di $R$ è

$$\mathrm{Area}(R) = \int_0^{\sqrt6} (6 - x^2)\, dx = \left[\,6x - \frac{x^3}{3}\,\right]_0^{\sqrt6} = 6\sqrt6 - 2\sqrt6 = 4\sqrt6,$$

quindi la metà vale $2\sqrt6$. La retta $y = k$ (con $0 < k < 6$) taglia da $R$ la striscia inferiore $0 \le y \le k$, la cui area, integrando rispetto a $y$ con larghezza $x = \sqrt{6-y}$, è

$$S(k) = \int_0^k \sqrt{6 - y}\, dy = \left[\,-\frac{2}{3}(6 - y)^{3/2}\,\right]_0^k = \frac{2}{3}\left[\,6\sqrt6 - (6 - k)^{3/2}\,\right].$$

Imponendo $S(k) = 2\sqrt6$:

$$\frac{2}{3}\left[\,6\sqrt6 - (6 - k)^{3/2}\,\right] = 2\sqrt6 \;\Rightarrow\; (6 - k)^{3/2} = 3\sqrt6 = \sqrt{54}.$$

Elevando alla potenza $\tfrac{2}{3}$ si ottiene $6 - k = 54^{1/3} = 3\sqrt[3]{2}$, e quindi

$$k = 6 - 3\sqrt[3]{2} \approx 2{,}22.$$

## d)

Nel punto di $\lambda$ di ascissa $t$, cioè $P\big(t,\,6 - t^2\big)$, la derivata $f'(x) = -2x$ dà pendenza $-2t$. La tangente è

$$y - (6 - t^2) = -2t\,(x - t) \;\Rightarrow\; y = -2t\,x + t^2 + 6.$$

Le sue intersezioni con gli assi sono $x = \dfrac{t^2 + 6}{2t}$ (per $y = 0$) e $y = t^2 + 6$ (per $x = 0$), entrambe positive quando $0 < t < \sqrt6$. Il triangolo rettangolo formato con gli assi ha quindi area

$$A(t) = \frac{1}{2}\cdot \frac{t^2 + 6}{2t}\cdot (t^2 + 6) = \frac{(t^2 + 6)^2}{4t}.$$

Per $t = 1$:

$$A(1) = \frac{(1 + 6)^2}{4} = \frac{49}{4}.$$

## e)

Cerchiamo il minimo di $A(t) = \dfrac{(t^2 + 6)^2}{4t}$ su $(0,\sqrt6)$. Derivando,

$$A'(t) = \frac{4t\,(t^2+6)\cdot 4t - (t^2+6)^2 \cdot 4}{16t^2} = \frac{(t^2 + 6)\,(3t^2 - 6)}{4t^2}.$$

Poiché $t^2 + 6 > 0$, il segno di $A'(t)$ coincide con quello di $3t^2 - 6$: la derivata si annulla per $t^2 = 2$, cioè $t = \sqrt2 \in (0,\sqrt6)$, ed è negativa per $t < \sqrt2$ e positiva per $t > \sqrt2$. Dunque $t = \sqrt2$ è punto di minimo, con

$$A(\sqrt2) = \frac{(2 + 6)^2}{4\sqrt2} = \frac{64}{4\sqrt2} = \frac{16}{\sqrt2} = 8\sqrt2.$$

L'area del triangolo è minima per $t = \sqrt2$, e vale $A(\sqrt2) = 8\sqrt2$.

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
