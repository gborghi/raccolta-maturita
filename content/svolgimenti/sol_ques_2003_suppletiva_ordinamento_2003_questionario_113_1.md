

**Quesito:** [[Quesiti/ques_2003_suppletiva_ordinamento_2003_questionario_113_1|2003 Suppletiva Ordinamento — Questionario — Quesito 1]] · **Prova:** [[Prove/2003_suppletiva_ordinamento_2003_questionario_113|2003 Suppletiva Ordinamento — Questionario]]

**Testo.** Tra i rettangoli aventi la stessa area di $16\ \text{m}^2$, trovare quello di perimetro minimo.

Indichiamo con $x$ e $y$ le misure (in metri) della base e dell'altezza del rettangolo. Il vincolo sull'area è
$$x\cdot y = 16, \qquad x>0,\ y>0.$$
Il semiperimetro è $p = x+y$; minimizzare il perimetro $2p$ equivale a minimizzare $p$.

## a) Dimostrazione elementare

Consideriamo l'identità, valida per ogni coppia di numeri reali,
$$(x+y)^2 = (x-y)^2 + 4xy.$$
Poiché il prodotto $xy=16$ è costante, il termine $4xy = 64$ è costante; quindi $(x+y)^2$ è minimo quando è minima la quantità $(x-y)^2$. Ma $(x-y)^2 \ge 0$ e vale $0$ soltanto per $x=y$. Dunque anche $x+y$ è minimo quando
$$x=y.$$

Vale così il principio: *se due grandezze positive hanno prodotto costante, la loro somma è minima quando sono uguali*; equivalentemente, *tra tutti i rettangoli equivalenti il quadrato è quello di perimetro minimo*.

Imponendo $x=y$ nel vincolo $x\cdot y = 16$ si ottiene $x^2=16$, cioè $x=4$. Il rettangolo cercato è quindi il quadrato di lato $4\ \text{m}$.

## b) Dimostrazione analitica

Dal vincolo ricaviamo $y = \dfrac{16}{x}$, da cui la funzione semiperimetro
$$p(x) = x + \frac{16}{x}, \qquad x>0.$$
Calcoliamo la derivata:
$$p'(x) = 1 - \frac{16}{x^2}.$$
Studiamo il segno: $p'(x) \ge 0 \iff \dfrac{16}{x^2} \le 1 \iff x^2 \ge 16 \iff x \ge 4$ (avendo $x>0$).

Quindi $p$ è decrescente per $0<x<4$ e crescente per $x>4$: in $x=4$ si ha un minimo relativo, che è anche assoluto. In corrispondenza,
$$y = \frac{16}{4} = 4,$$
e il valore minimo del semiperimetro è $p(4) = 4+4 = 8$, cui corrisponde il perimetro minimo $2p = 16\ \text{m}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="624.816" height="659.931" viewBox="-72 -72 468.612 494.949"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-51.563 405.527H383.36"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M381.48 403.127c.38 1.44 1.228 2.12 2.08 2.4-.852.28-1.7.96-2.08 2.4"/><text x="-51.563" y="405.527" stroke="none" font-family="cmmi10" font-size="10" transform="translate(438.857 2.153)">x</text><path fill="none" d="M-51.563 405.527V-55.004"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-53.963-53.124c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><g stroke="none" font-size="10"><text x="-51.563" y="405.527" font-family="cmmi10" transform="translate(-9.262 -466.964)">p</text><text x="-46.532" y="405.527" font-family="cmr10" transform="translate(-9.262 -466.964)">(</text><text x="-42.643" y="405.527" font-family="cmmi10" transform="translate(-9.262 -466.964)">x</text><text x="-36.928" y="405.527" font-family="cmr10" transform="translate(-9.262 -466.964)">)</text></g><path fill="none" d="M50.866 401.686v7.682"/><text x="-51.563" y="405.527" stroke="none" font-family="cmr10" font-size="10" transform="translate(99.93 13.818)">4</text><path fill="none" d="M153.295 401.686v7.682"/><text x="-51.563" y="405.527" stroke="none" font-family="cmr10" font-size="10" transform="translate(202.358 13.818)">8</text><path fill="none" d="M255.724 401.686v7.682"/><text x="-51.563" y="405.527" stroke="none" font-family="cmr10" font-size="10" transform="translate(302.288 13.818)">12</text><path fill="none" d="M358.154 401.686v7.682"/><text x="-51.563" y="405.527" stroke="none" font-family="cmr10" font-size="10" transform="translate(404.717 13.818)">16</text><path fill="none" d="M-47.722 200.669h-7.682"/><text x="-51.563" y="405.527" stroke="none" font-family="cmr10" font-size="10" transform="translate(-12.374 -201.636)">8</text><path fill="none" d="M-47.722-4.19h-7.682"/><text x="-51.563" y="405.527" stroke="none" font-family="cmr10" font-size="10" transform="translate(-17.374 -406.495)">16</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-25.956-29.797 4.862 60.52 4.862 42.518 4.862 31.063 4.862 23.303 4.862 17.821 4.862 13.793 4.862 10.75 4.862 8.399 4.862 6.537 4.862 5.047 4.861 3.826 4.862 2.821 4.862 1.98 4.862 1.27 4.862.664 4.862.145 4.862-.304 4.862-.698 4.862-1.04 4.862-1.342 4.862-1.61 4.862-1.85 4.862-2.062 4.862-2.253 4.861-2.426 4.862-2.582 4.862-2.723 4.862-2.851 4.862-2.97 4.862-3.076 4.862-3.174 4.862-3.266 4.862-3.348 4.862-3.426 4.862-3.498 4.862-3.563 4.862-3.624 4.862-3.683 4.862-3.735 4.861-3.784 4.862-3.832 4.862-3.876 4.862-3.915 4.862-3.955 4.862-3.99 4.862-4.025 4.862-4.057 4.862-4.086 4.862-4.116 4.862-4.142 4.862-4.169 4.862-4.191 4.862-4.216 4.862-4.237 4.861-4.258 4.862-4.277 4.862-4.296 4.862-4.314 4.862-4.332 4.862-4.347 4.862-4.363 4.862-4.378 4.862-4.392 4.862-4.405 4.862-4.42 4.862-4.43 4.862-4.443 4.862-4.454 4.862-4.466 4.861-4.476 4.862-4.486 4.862-4.495 4.862-4.506 4.862-4.514 4.862-4.522 4.862-4.532 4.862-4.539 4.862-4.547 4.862-4.554"/><path fill="none" stroke-dasharray="3.0,3.0" d="M50.866 405.527V200.67h-102.43"/><g fill="red" stroke="red"><path stroke="none" d="M53.116 200.669a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m-2.25 0"/><g fill="red" stroke="none" font-size="10"><text x="-51.563" y="405.527" font-family="cmr10" transform="translate(105.962 -210.891)">(4</text><text x="-42.674" y="405.527" font-family="cmmi10" transform="translate(105.962 -210.891)">;</text><text x="-36.563" y="405.527" font-family="cmr10" transform="translate(105.962 -210.891)">8)</text></g></g></g></svg>
</figure>

**Conclusione.** Il rettangolo di area $16\ \text{m}^2$ e perimetro minimo è il **quadrato di lato $4\ \text{m}$**, il cui perimetro vale $16\ \text{m}$.

*Fonte:* [📄 PDF p.113](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
