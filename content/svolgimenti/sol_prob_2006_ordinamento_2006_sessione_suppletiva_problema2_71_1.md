

**Problema:** [[Problemi/prob_2006_ordinamento_2006_sessione_suppletiva_problema2_71_1|2006 Ordinamento Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_ordinamento_2006_sessione_suppletiva_problema2_71|2006 Ordinamento Suppletiva — Problema 2]]

Nel piano, riferito a un sistema monometrico di assi cartesiani ortogonali $(Oxy)$, sono assegnate le curve di equazione

$$y = \frac{x+k}{x^2},$$

dove $k$ è un parametro reale non nullo.

## a)

Consideriamo due curve della famiglia, con parametri $k_1 \ne k_2$. Se avessero un punto in comune $(x_0, y_0)$, varrebbero simultaneamente

$$x_0^2\,y_0 - x_0 = -k_1 \qquad\text{e}\qquad x_0^2\,y_0 - x_0 = -k_2,$$

il che è impossibile perché $k_1 \ne k_2$. Le curve non hanno quindi punti in comune.

Per il flesso calcoliamo le derivate. Scrivendo $y = x^{-1} + k\,x^{-2}$ si ha

$$y' = \frac{x^2 - 2x(x+k)}{x^4} = \frac{-x-2k}{x^3}, \qquad y'' = \frac{2x+6k}{x^4}.$$

La derivata seconda si annulla per $x = -3k$ e cambia segno in tale punto (poiché $k \ne 0$): ciascuna curva presenta quindi esattamente un flesso.

## b)

Il flesso si trova in $x_F = -3k$, con ordinata

$$y_F = \frac{-3k+k}{9k^2} = -\frac{2}{9k}$$

e pendenza

$$m_F = \frac{-(-3k)-2k}{(-3k)^3} = \frac{k}{-27k^3} = -\frac{1}{27k^2}.$$

La tangente inflessionale assegnata $x + 27y - 9 = 0$ ha coefficiente angolare $m = -\dfrac{1}{27}$, quindi

$$-\frac{1}{27k^2} = -\frac{1}{27} \;\Rightarrow\; k^2 = 1 \;\Rightarrow\; k = \pm 1.$$

Poiché il flesso deve appartenere alla retta $x + 27y - 9 = 0$, sostituiamo le sue coordinate.

- Per $k = -1$ il flesso è $\left(3,\ \dfrac{2}{9}\right)$: verifica $3 + 27 \cdot \dfrac{2}{9} - 9 = 3 + 6 - 9 = 0$. ✓
- Per $k = 1$ il flesso è $\left(-3,\ -\dfrac{2}{9}\right)$: verifica $-3 + 27 \cdot \left(-\dfrac{2}{9}\right) - 9 = -3 - 6 - 9 \ne 0$.

Quindi $k = -1$ e la curva cercata è

$$\gamma:\quad y = \frac{x-1}{x^2}.$$

## c)

Studiamo $f(x) = \dfrac{x-1}{x^2}$.

**Dominio:** $\mathbb{R} \setminus \{0\}$. La funzione non è né pari né dispari. Si annulla per $x = 1$; è positiva per $x > 1$ e negativa altrove.

**Limiti:**

$$\lim_{x\to\pm\infty} f(x) = 0 \quad(\text{asintoto orizzontale } y=0), \qquad \lim_{x\to 0} f(x) = -\infty \quad(\text{asintoto verticale } x=0).$$

**Derivata prima:**

$$f'(x) = \frac{2-x}{x^3},$$

positiva per $0 < x < 2$ e negativa per $x < 0$ e $x > 2$. Dunque $x = 2$ è punto di massimo relativo (e assoluto) con $f(2) = \dfrac{1}{4}$.

**Derivata seconda:**

$$f''(x) = \frac{2(x-3)}{x^4},$$

positiva per $x > 3$ (concavità verso l'alto) e negativa per $0 < x < 3$ (concavità verso il basso). Flesso in $x = 3$, con ordinata $y = \dfrac{2}{9}$.

Il punto $A$ ha ascissa $1$: $A = (1, 0)$. La tangente in $A$ ha coefficiente angolare

$$m = f'(1) = \frac{2-1}{1} = 1, \qquad t:\quad y = x-1.$$

Per l'ulteriore intersezione di $t$ con $\gamma$:

$$x - 1 = \frac{x-1}{x^2} \;\Rightarrow\; (x-1)\left(1 - \frac{1}{x^2}\right) = 0 \;\Rightarrow\; (x-1)^2(x+1) = 0.$$

Oltre alla soluzione doppia $x = 1$ (punto di tangenza) si ha $x = -1$, $y = -2$. L'ulteriore punto di intersezione è $B = (-1, -2)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="294.363" height="422.913" viewBox="-72 -72 220.772 317.185"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-34.97h207.591"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M133.641-37.37c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="7.741" y="-34.969" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.714 2.153)">x</text><path fill="none" d="M7.74 44.841V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M5.34-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="7.741" y="-34.969" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -29.662)">y</text><path fill="none" d="M-40.63-36.42v2.902"/><g stroke="none" font-size="5"><text x="7.741" y="-34.969" font-family="cmsy5" transform="translate(-52.78 8.317)">¡</text><text x="13.157" y="-34.969" font-family="cmr5" transform="translate(-52.78 8.317)">2</text></g><path fill="none" d="M-16.444-36.42v2.902"/><g stroke="none" font-size="5"><text x="7.741" y="-34.969" font-family="cmsy5" transform="translate(-28.595 8.317)">¡</text><text x="13.157" y="-34.969" font-family="cmr5" transform="translate(-28.595 8.317)">1</text></g><path fill="none" d="M31.926-36.42v2.902"/><text x="7.741" y="-34.969" stroke="none" font-family="cmr5" font-size="5" transform="translate(22.484 8.206)">1</text><path fill="none" d="M56.11-36.42v2.902"/><text x="7.741" y="-34.969" stroke="none" font-family="cmr5" font-size="5" transform="translate(46.669 8.206)">2</text><path fill="none" d="M80.296-36.42v2.902"/><text x="7.741" y="-34.969" stroke="none" font-family="cmr5" font-size="5" transform="translate(70.854 8.206)">3</text><path fill="none" d="M104.48-36.42v2.902"/><text x="7.741" y="-34.969" stroke="none" font-family="cmr5" font-size="5" transform="translate(95.039 8.206)">4</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.814-24.22 1.09.206 1.09.212 1.09.222 1.09.23 1.09.24 1.09.247 1.09.26 1.09.269 1.09.28 1.09.293 1.091.307 1.09.32 1.09.334 1.09.35 1.09.367 1.09.385 1.09.403 1.09.425 1.091.447 1.09.47 1.09.497 1.09.526 1.09.555 1.09.588 1.09.623 1.09.662 1.091.705 1.09.751 1.09.802 1.09.86 1.09.92 1.09.99 1.09 1.066 1.09 1.15 1.091 1.243 1.09 1.355 1.09 1.47 1.09 1.606 1.09 1.76 1.09 1.938 1.09 2.135 1.09 2.373 1.091 2.636 1.09 2.953 1.09 3.327 1.09 3.763 1.09 4.292 1.09 4.923 1.09 5.7 1.09 6.653 1.091 7.84 1.09 9.36 1.09 11.32 1.09 13.871 1.09 17.34 1.09 22.08 1.09 28.839 1.09 38.827 1.091 54.169M15.963 103.125 17.39 56.36l1.426-28.81 1.426-18.792 1.427-12.8 1.426-9.017 1.426-6.529 1.427-4.832 1.426-3.64 1.426-2.786 1.427-2.157 1.426-1.686 1.426-1.329 1.426-1.054 1.427-.842 1.426-.675 1.426-.541 1.427-.433 1.426-.349 1.426-.275 1.427-.223 1.426-.173 1.426-.134 1.427-.103 1.426-.077 1.426-.054 1.427-.036 1.426-.02 1.426-.007 1.427.004 1.426.012 1.426.02 1.426.026 1.427.032 1.426.037 1.426.04 1.427.042 1.426.046 1.426.047 1.427.05 1.426.05 1.426.05 1.427.052 1.426.053 1.426.052 1.427.053 1.426.053 1.426.053 1.427.052 1.426.052 1.426.052 1.426.052 1.427.05 1.426.051 1.426.05 1.427.05 1.426.049 1.426.048 1.427.047 1.426.047 1.426.046 1.427.046 1.426.045 1.426.044 1.427.043 1.426.043 1.426.043 1.427.041 1.426.041 1.426.041 1.426.04 1.427.039 1.426.038 1.426.038 1.427.038 1.426.037 1.426.036 1.427.035 1.426.035 1.426.035"/><path fill="none" stroke="#090" stroke-dasharray="3.0,3.0" d="m-26.118 23.075 91.902-91.903"/><g fill="red" stroke="red"><path stroke="none" d="M57.81-41.015a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><g fill="red" stroke="none"><text x="7.741" y="-34.969" font-family="cmr5" font-size="5" transform="translate(51.903 -12.239)">(2</text><text x="13.852" y="-34.969" font-family="cmmi5" font-size="5" transform="translate(51.903 -12.239)">;</text><text x="18.57" y="-36.906" font-family="cmr5" font-size="5" transform="translate(51.903 -12.239)">1</text><path d="M70.473-48.658h3.403v.4h-3.403z"/><text x="18.57" y="-32.31" font-family="cmr5" font-size="5" transform="translate(51.903 -12.239)">4</text><text x="23.173" y="-34.969" font-family="cmr5" font-size="5" transform="translate(51.903 -12.239)">)</text></g></g><g fill="#ff8000" stroke="#ff8000"><path stroke="none" d="M81.996-40.338a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="7.741" y="-34.969" fill="#ff8000" stroke="none" font-family="cmr5" font-size="5" transform="translate(76.088 -8.902)">flesso</text></g><g fill="#090" stroke="#090"><path stroke="none" d="M33.626-34.97a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="7.741" y="-34.969" fill="#090" stroke="none" font-family="cmmi5" font-size="5" transform="translate(27.718 -3.533)">A</text></g><g fill="#090" stroke="#090"><path stroke="none" d="M-14.744 13.4a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="7.741" y="-34.969" fill="#090" stroke="none" font-family="cmmi5" font-size="5" transform="translate(-33.136 50.078)">B</text></g></g></svg>
</figure>

## d)

La circonferenza $c$ è tangente a $\gamma$ in $A = (1, 0)$, quindi è tangente anche alla retta $t$ in $A$. La perpendicolare a $t$ in $A$ ha equazione $y = -(x-1)$, cioè $y = -x + 1$. Il centro, appartenendo all'asse $y$, si ottiene ponendo $x = 0$: $C = (0, 1)$. Il raggio è

$$R = \overline{CA} = \sqrt{1 + 1} = \sqrt{2}.$$

L'equazione della circonferenza è dunque

$$x^2 + (y-1)^2 = 2, \qquad\text{ovvero}\qquad c:\; x^2 + y^2 - 2y - 1 = 0.$$

## e)

La circonferenza $c$ ha centro $C = (0, 1)$ e raggio $R = \sqrt{2}$. L'asse $x$ la interseca nei punti $A = (1, 0)$ e $D = (-1, 0)$ (ponendo $y = 0$ si ottiene $x^2 = 1$). Il triangolo $ACD$ è rettangolo in $C$, poiché i cateti $\overline{AC}$ e $\overline{CD}$ misurano entrambi $\sqrt{2}$ e $\overline{AD} = 2 = \sqrt{\,\overline{AC}^2 + \overline{CD}^2\,}$. Il settore circolare corrispondente sottende un angolo al centro di $90^\circ$, dunque ha area

$$\frac{1}{4}\pi R^2 = \frac{1}{4}\pi \cdot 2 = \frac{\pi}{2}.$$

L'area del triangolo $ACD$ è $\dfrac{1}{2}\cdot\sqrt{2}\cdot\sqrt{2} = 1$. L'area del segmento circolare (la regione minore) è quindi

$$S = \frac{\pi}{2} - 1 \approx 0{,}57 \ \text{u}^2.$$

*Fonte:* [📄 PDF p.71](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
