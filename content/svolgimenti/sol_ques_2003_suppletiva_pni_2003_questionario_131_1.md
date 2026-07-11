

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_1|2003 Suppletiva PNI — Questionario — Quesito 1]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Nota la lunghezza di una corda di un cerchio di dato raggio $R$, si vuole calcolare la lunghezza della corda sottesa dall'angolo al centro uguale alla metà di quello che sottende la corda data. (La costruzione fu usata da Tolomeo, II sec. d.C., per costruire una tavola trigonometrica, in modo equivalente alla nostra formula di bisezione del seno.)

Sia $AB=a$ (con $a\le 2R$) la corda nota, sottesa dall'angolo al centro $2\alpha$; sia $BC$ la corda sottesa dall'angolo al centro metà del precedente, cioè $\alpha$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="268.673" height="251.452" viewBox="-72 -72 201.505 188.589"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M115.919 22.025c0-51.858-42.037-93.895-93.894-93.895S-71.87-29.833-71.87 22.025s42.037 93.894 93.895 93.894 93.894-42.037 93.894-93.894Zm-93.894 0"/><path fill="none" stroke="gray" d="m22.025 22.025-60.363-71.937M22.025 22.025l60.362-71.937M22.025 22.025l92.481-16.307"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-38.338-49.912H82.387"/><path fill="none" stroke="red" stroke-width="1.2" d="m82.387-49.912 32.12 55.63"/><path fill="none" stroke="#00f" d="M40.13.447C29.66-8.34 14.389-8.34 3.919.447"/><path fill="none" stroke="red" d="M62.094 14.96A40.7 40.7 0 0 0 48.178-9.145"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="22.025" y="22.025" font-family="cmr10" transform="translate(-5.717 -35.9)">2</text><text x="27.025" y="22.025" font-family="cmmi10" transform="translate(-5.717 -35.9)">®</text></g></g><g fill="red" stroke="red"><text x="22.025" y="22.025" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(42.862 -24.45)">®</text></g><text x="22.025" y="22.025" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-71.396 -75.47)">A</text><text x="22.025" y="22.025" stroke="none" font-family="cmmi10" font-size="10" transform="translate(63.896 -75.47)">B</text><text x="22.025" y="22.025" stroke="none" font-family="cmmi10" font-size="10" transform="translate(96.015 -12.89)">C</text><text x="22.025" y="22.025" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><g fill="#00f" stroke="#00f"><text x="22.025" y="22.025" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.643 -75.47)">a</text></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmmi10" font-size="10"><text x="22.025" y="22.025" transform="translate(76.53 -46.66)">B</text><text x="30.111" y="22.025" transform="translate(76.53 -46.66)">C</text></g></g><g fill="gray" stroke="gray"><text x="22.025" y="22.025" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.39 -42.137)">R</text></g></g></svg>
</figure>

## Impostazione con il teorema della corda

Per il teorema della corda, la lunghezza di una corda è $2R$ per il seno della metà dell'angolo al centro che la sottende. Dunque:

$$AB = a = 2R\sin\alpha \quad\Rightarrow\quad \sin\alpha = \frac{a}{2R},$$

$$BC = 2R\sin\frac{\alpha}{2}.$$

## Calcolo di $\cos\alpha$

Poiché $0<\alpha<\pi$, si ha $\sin\alpha>0$ e quindi:

$$\cos\alpha = \sqrt{1-\sin^2\alpha} = \sqrt{1-\left(\frac{a}{2R}\right)^2} = \frac{\sqrt{4R^2-a^2}}{2R}.$$

## Formula di bisezione e risultato

Essendo $0<\dfrac{\alpha}{2}<\dfrac{\pi}{2}$, risulta $\sin\dfrac{\alpha}{2}>0$, quindi:

$$\sin\frac{\alpha}{2} = \sqrt{\frac{1-\cos\alpha}{2}} = \sqrt{\frac{1}{2}\left(1-\frac{\sqrt{4R^2-a^2}}{2R}\right)} = \sqrt{\frac{2R-\sqrt{4R^2-a^2}}{4R}}.$$

Pertanto:

$$BC = 2R\sin\frac{\alpha}{2} = 2R\sqrt{\frac{2R-\sqrt{4R^2-a^2}}{4R}} = \sqrt{4R^2\cdot\frac{2R-\sqrt{4R^2-a^2}}{4R}},$$

$$\boxed{\,BC = \sqrt{2R^2 - R\sqrt{4R^2-a^2}}\,}.$$

*Fonte:* [📄 PDF p.131](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
