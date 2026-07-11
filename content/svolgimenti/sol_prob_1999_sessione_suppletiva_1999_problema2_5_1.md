

**Problema:** [[Problemi/prob_1999_sessione_suppletiva_1999_problema2_5_1|1999 Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/1999_sessione_suppletiva_1999_problema2_5|1999 Suppletiva — Problema 2]]

Si deve costruire un recipiente a forma di cilindro circolare retto di capacità $16\pi\ \mathrm{cm}^3$.

**a)** Determinare le dimensioni del recipiente che richiederanno la quantità minima di materiale.

**b)** Verificato che il cilindro cercato è quello equilatero, determinare la superficie e il volume della sfera ad esso circoscritta.

**c)** Considerate infine le formule $V=\dfrac{4}{3}\pi x^{3}$ e $S=\pi x^{2}$, illustrare i risultati della derivazione rispetto a $x$.

## a)

Sia $r$ il raggio della base e $h$ l'altezza del cilindro. Il vincolo sul volume impone

$$\pi r^{2} h = 16\pi \quad\Longrightarrow\quad h = \frac{16}{r^{2}}.$$

La quantità di materiale è proporzionale alla superficie totale del cilindro (le due basi circolari più la superficie laterale). Sostituendo il valore di $h$ ricavato dal vincolo:

$$S(r) = 2\pi r^{2} + 2\pi r h = 2\pi r^{2} + \frac{32\pi}{r}, \qquad r > 0.$$

Cerchiamo il minimo di $S$ calcolandone la derivata:

$$S'(r) = 4\pi r - \frac{32\pi}{r^{2}}.$$

Poniamo $S'(r) = 0$:

$$4\pi r = \frac{32\pi}{r^{2}} \quad\Longrightarrow\quad r^{3} = 8 \quad\Longrightarrow\quad r = 2\ \mathrm{cm}.$$

Poiché $S'(r) < 0$ per $0 < r < 2$ e $S'(r) > 0$ per $r > 2$, la funzione è decrescente prima e crescente dopo: in $r = 2$ si ha quindi un minimo assoluto. L'altezza corrispondente è

$$h = \frac{16}{2^{2}} = \frac{16}{4} = 4\ \mathrm{cm}.$$

Il cilindro che richiede la quantità minima di materiale ha **raggio $2\ \mathrm{cm}$ e altezza $4\ \mathrm{cm}$**.

## b)

Osserviamo che $h = 4 = 2r$: l'altezza è uguale al diametro della base. Un tale cilindro si dice **equilatero**, perché la sua sezione assiale (il rettangolo ottenuto tagliando il cilindro con un piano contenente l'asse) è un quadrato di lato $2r = 4\ \mathrm{cm}$.

La sfera circoscritta al cilindro passa per tutti i punti dei due cerchi di base; il suo diametro coincide con la diagonale della sezione assiale quadrata:

$$d = \sqrt{(2r)^{2} + h^{2}} = \sqrt{16 + 16} = 4\sqrt{2}\ \mathrm{cm}, \qquad R = 2\sqrt{2}\ \mathrm{cm}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="200.546" height="194.18" viewBox="-72 -72 150.41 145.635"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M72.965.547c0-39.995-32.422-72.417-72.418-72.417-39.995 0-72.417 32.422-72.417 72.417S-39.448 72.965.547 72.965 72.965 40.543 72.965.547ZM.547.547"/><path fill="#ebebff" stroke-width=".8" d="M-50.667 51.762v-102.43h102.43v102.43Zm102.43-102.43"/><path fill="none" stroke-dasharray="3.0,3.0" d="m-50.667 51.762 102.43-102.43"/><g stroke="none"><text x=".547" y=".547" font-family="cmmi8" font-size="8" transform="translate(3.56 12.15)">d</text><text x="7.282" y=".547" font-family="cmr8" font-size="8" transform="translate(3.56 12.15)">=</text><text x="16.255" y=".547" font-family="cmr8" font-size="8" transform="translate(3.56 12.15)">4</text><text x="20.505" y="-6.1" font-family="cmsy8" font-size="8" transform="translate(3.56 12.15)">p</text><path d="M31.148 5.69h4.25v.36h-4.25z"/><text x="27.588" y=".547" font-family="cmr8" font-size="8" transform="translate(3.56 12.15)">2</text></g><path stroke="none" d="M1.627.547a1.08 1.08 0 1 0-2.16 0 1.08 1.08 0 0 0 2.16 0m-1.08 0"/><path fill="none" d="M.547.547h72.018"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M70.685-1.852c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x=".547" y=".547" stroke="none" font-family="cmmi8" font-size="8" transform="translate(35.185 -4.437)">R</text><g stroke="none" font-size="8"><text x=".547" y=".547" font-family="cmr8" transform="translate(-11.953 62.755)">2</text><text x="4.798" y=".547" font-family="cmmi8" transform="translate(-11.953 62.755)">r</text><text x="11.23" y=".547" font-family="cmr8" transform="translate(-11.953 62.755)">=</text><text x="20.203" y=".547" font-family="cmr8" transform="translate(-11.953 62.755)">4</text></g><g stroke="none" font-size="8"><text x=".547" y=".547" font-family="cmmi8" transform="translate(53.777 -25.39)">h</text><text x="7.807" y=".547" font-family="cmr8" transform="translate(53.777 -25.39)">=</text><text x="16.779" y=".547" font-family="cmr8" transform="translate(53.777 -25.39)">4</text></g></g></svg>
</figure>

Da qui ricaviamo la superficie e il volume della sfera:

$$S_{\text{sfera}} = 4\pi R^{2} = 4\pi\cdot 8 = 32\pi\ \mathrm{cm}^{2},$$

$$V_{\text{sfera}} = \frac{4}{3}\pi R^{3} = \frac{4}{3}\pi\,(2\sqrt{2})^{3} = \frac{64\sqrt{2}}{3}\,\pi\ \mathrm{cm}^{3}.$$

## c)

Consideriamo la sfera di raggio $x$: il suo volume è $V = \dfrac{4}{3}\pi x^{3}$ e la sua superficie è $S = 4\pi x^{2}$. Derivando il volume rispetto al raggio si ottiene

$$V'(x) = 4\pi x^{2} = S(x).$$

La derivata del volume rispetto al raggio è quindi uguale alla superficie della sfera. L'interpretazione è intuitiva: un incremento infinitesimo $\mathrm{d}x$ del raggio aggiunge un guscio sferico di spessore $\mathrm{d}x$ e area $4\pi x^{2}$, il cui volume è appunto $4\pi x^{2}\,\mathrm{d}x$.

Analogamente, per il cerchio di raggio $x$ con area $S = \pi x^{2}$, si ha

$$S'(x) = 2\pi x,$$

che è la misura della circonferenza di raggio $x$: aumentare il raggio di $\mathrm{d}x$ aggiunge una corona circolare di larghezza $\mathrm{d}x$ e lunghezza $2\pi x$.

*Fonte:* [📄 PDF p.5](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
