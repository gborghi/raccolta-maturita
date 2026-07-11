

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_7|2005 Ordinaria — Prova — Quesito 7]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Calcolare, se esiste, la funzione $f(x)$ tale che

$$\int_0^t f(x)\,dx = t^2 + \sqrt{t}.$$

Poniamo

$$F(t) = \int_0^t f(x)\,dx = t^2 + \sqrt{t}.$$

Se $f$ è continua, per il **teorema fondamentale del calcolo integrale** la funzione integrale $F$ è derivabile e la sua derivata è la funzione integranda:

$$F'(t) = f(t).$$

È quindi sufficiente derivare $F(t) = t^2 + \sqrt{t}$. Ricordando che $\sqrt{t} = t^{1/2}$ e che $D\big(t^{1/2}\big) = \frac{1}{2}\,t^{-1/2} = \frac{1}{2\sqrt{t}}$, otteniamo:

$$f(t) = F'(t) = D\big(t^2 + \sqrt{t}\big) = 2t + \frac{1}{2\sqrt{t}}.$$

La funzione cercata è dunque

$$f(x) = 2x + \frac{1}{2\sqrt{x}}, \qquad x > 0.$$

La condizione $x>0$ è necessaria affinché sia definito il termine $\dfrac{1}{2\sqrt{x}}$.

**Verifica.** Integrando tra $0$ e $t$ si ritrova il dato di partenza:

$$\int_0^t \left(2x + \frac{1}{2\sqrt{x}}\right)dx = \Big[\,x^2 + \sqrt{x}\,\Big]_0^t = t^2 + \sqrt{t}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="199.14" height="222.339" viewBox="-72 -72 149.355 166.754"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 79.125H64.104"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.224 76.725c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-58.413" y="79.125" stroke="none" font-family="cmmi10" font-size="10" transform="translate(126.45 2.153)">x</text><path fill="none" d="M-58.413 86.807V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.813-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-58.413" y="79.125" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -143.757)">y</text><path fill="none" d="M-12.888 77.077v4.097"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(43.025 12.026)">1</text><path fill="none" d="M32.637 77.077v4.097"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(88.55 12.026)">2</text><path fill="none" d="M-56.592 53.518h-3.641"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.354 -22.385)">1</text><path fill="none" d="M-56.592 27.91h-3.641"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.354 -47.992)">2</text><path fill="none" d="M-56.592 2.303h-3.641"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.354 -73.6)">3</text><path fill="none" d="M-56.592-23.304h-3.641"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.354 -99.207)">4</text><path fill="none" d="M-56.592-48.911h-3.641"/><text x="-58.413" y="79.125" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.354 -124.814)">5</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.405 34.889 1.32 2.772 1.318 1.618 1.32.908 1.319.43 1.319.091 1.319-.154 1.32-.343 1.318-.493 1.32-.61 1.319-.708 1.319-.788 1.319-.855 1.319-.912 1.32-.96 1.318-1.004 1.32-1.04 1.319-1.07 1.319-1.103 1.319-1.127 1.319-1.148 1.32-1.17 1.318-1.189 1.32-1.205 1.319-1.22 1.319-1.234 1.319-1.247 1.319-1.259 1.32-1.268 1.318-1.28 1.32-1.288 1.319-1.293 1.319-1.308 1.319-1.31 1.319-1.32 1.32-1.325 1.318-1.333 1.32-1.338 1.318-1.34 1.32-1.349 1.319-1.35L.68 1.41 2 .047l1.318-1.364 1.32-1.366 1.318-1.371 1.32-1.377L8.595-6.81l1.319-1.382 1.319-1.384 1.32-1.389 1.318-1.387 1.32-1.394 1.319-1.394 1.319-1.398 1.319-1.399 1.319-1.402 1.32-1.402 1.318-1.407 1.32-1.408 1.319-1.41 1.319-1.41 1.319-1.414 1.319-1.415 1.32-1.415 1.318-1.417 1.32-1.42 1.319-1.417 1.319-1.42 1.319-1.425 1.319-1.426 1.32-1.425 1.318-1.428 1.32-1.425 1.319-1.43 1.319-1.427 1.319-1.433 1.319-1.43 1.32-1.434 1.318-1.435"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-58.413" y="79.125" font-family="cmmi10" font-size="10" transform="translate(33.95 -129.093)">f</text><text x="-52.44" y="79.125" font-family="cmr10" font-size="10" transform="translate(33.95 -129.093)">(</text><text x="-48.551" y="79.125" font-family="cmmi10" font-size="10" transform="translate(33.95 -129.093)">x</text><text x="-42.836" y="79.125" font-family="cmr10" font-size="10" transform="translate(33.95 -129.093)">)</text><text x="-36.169" y="79.125" font-family="cmr10" font-size="10" transform="translate(33.95 -129.093)">=</text><text x="-25.614" y="79.125" font-family="cmr10" font-size="10" transform="translate(33.95 -129.093)">2</text><text x="-20.614" y="79.125" font-family="cmmi10" font-size="10" transform="translate(33.95 -129.093)">x</text><text x="-12.676" y="79.125" font-family="cmr10" font-size="10" transform="translate(33.95 -129.093)">+</text><text x="4.076" y="75.188" font-family="cmr7" font-size="7" transform="translate(33.95 -129.093)">1</text><path d="M32.473-52.668h15.09v.4h-15.09z"/><text x="-1.477" y="82.992" font-family="cmr7" font-size="7" transform="translate(33.95 -129.093)">2</text><text x="2.51" y="77.905" font-family="cmsy7" font-size="7" transform="translate(33.95 -129.093)">p</text><path d="M43.03-51.528h4.534v.34H43.03z"/><text x="9.079" y="82.992" font-family="cmmi7" font-size="7" transform="translate(33.95 -129.093)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.28](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
