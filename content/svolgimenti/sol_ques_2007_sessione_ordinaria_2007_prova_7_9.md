

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_7_9|2007 Ordinaria — Prova — Quesito 9]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Si calcoli l'integrale indefinito
$$\int \frac{1}{\sqrt{1-x^2}}\,dx$$
e, successivamente, si verifichi che il risultato di
$$\int_0^1 \frac{1}{\sqrt{1-x^2}}\,dx$$
è in accordo con il suo significato geometrico.

## Integrale indefinito

La funzione integranda $\dfrac{1}{\sqrt{1-x^2}}$ è definita per $-1 < x < 1$. Essa è la derivata della funzione arcoseno; ricordando infatti che
$$\frac{d}{dx}\big(\arctan\ldots\big)$$
si ha in modo diretto
$$\int \frac{1}{\sqrt{1-x^2}}\,dx = \arcsin x + c,\qquad -1 < x < 1 .$$

In alternativa, con la sostituzione $x = \sin t$, $dx = \cos t\,dt$ (con $\cos t > 0$, quindi $\sqrt{1-x^2} = \cos t$):
$$\int \frac{\cos t}{\sqrt{1-\sin^2 t}}\,dt = \int \frac{\cos t}{\cos t}\,dt = \int dt = t + c = \arcsin x + c .$$

## L'integrale definito e il suo significato geometrico

L'integrale
$$\int_0^1 \frac{1}{\sqrt{1-x^2}}\,dx$$
è **improprio**, perché l'integranda non è limitata: $\dfrac{1}{\sqrt{1-x^2}} \to +\infty$ per $x \to 1^-$. Lo si calcola quindi come limite:
$$\int_0^1 \frac{1}{\sqrt{1-x^2}}\,dx = \lim_{t\to 1^-}\int_0^t \frac{1}{\sqrt{1-x^2}}\,dx = \lim_{t\to 1^-}\big[\arcsin x\big]_0^{\,t} = \lim_{t\to 1^-}\arcsin t .$$

Poiché $\arcsin t \to \dfrac{\pi}{2}$ per $t \to 1^-$ e $\arcsin 0 = 0$, l'integrale converge e vale
$$\int_0^1 \frac{1}{\sqrt{1-x^2}}\,dx = \frac{\pi}{2}.$$

Il dominio, pur essendo una regione **illimitata in altezza** (la curva ha come asintoto verticale la retta $x=1$), racchiude quindi un'area **finita**, uguale a $\dfrac{\pi}{2}$.

**Verifica del significato geometrico.** La funzione integranda coincide con l'elemento di lunghezza d'arco della circonferenza goniometrica. Consideriamo infatti il quarto di circonferenza di equazione $y = \sqrt{1-x^2}$ nel primo quadrante. La sua derivata è
$$y' = \frac{-x}{\sqrt{1-x^2}},$$
da cui
$$1 + (y')^2 = 1 + \frac{x^2}{1-x^2} = \frac{1}{1-x^2},\qquad \sqrt{1+(y')^2} = \frac{1}{\sqrt{1-x^2}} .$$

La lunghezza dell'arco di circonferenza dal punto $(0,1)$ al punto $(1,0)$ è allora
$$L = \int_0^1 \sqrt{1+(y')^2}\,dx = \int_0^1 \frac{1}{\sqrt{1-x^2}}\,dx .$$

D'altra parte quell'arco è **un quarto** della circonferenza di raggio $1$, la cui lunghezza totale è $2\pi$; dunque
$$L = \frac{1}{4}\cdot 2\pi = \frac{\pi}{2}.$$

Il valore analitico $\dfrac{\pi}{2}$ è quindi in perfetto accordo con il suo significato geometrico: l'integrale misura la lunghezza dell'arco di circonferenza unitaria compreso tra $(0,1)$ e $(1,0)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="176.377" height="177.089" viewBox="-72 -72 132.282 132.817"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 43.276H47.031"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M45.151 40.876c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-54.998" y="43.276" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.963 2.153)">x</text><path fill="none" d="M-54.998 60.347V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-57.398-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-54.998" y="43.276" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -107.907)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M13.288 43.276v-68.287h-68.286"/><path fill="none" stroke="#00f" stroke-width=".8" d="M13.288 43.276c0-37.715-30.572-68.287-68.286-68.287"/><g fill="#00f" stroke="#00f"><text x="-54.998" y="43.276" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(46.815 -53.843)">arco</text></g><text x="-54.998" y="43.276" stroke="none" font-family="cmr10" font-size="10" transform="translate(65.786 9.977)">1</text><text x="-54.998" y="43.276" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -65.064)">1</text><path stroke="none" d="M14.654 43.276a1.366 1.366 0 1 0-2.732 0 1.366 1.366 0 0 0 2.732 0M-53.632-25.01a1.366 1.366 0 1 0-2.732 0 1.366 1.366 0 0 0 2.732 0m-1.366 0"/><text x="-54.998" y="43.276" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.7](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
