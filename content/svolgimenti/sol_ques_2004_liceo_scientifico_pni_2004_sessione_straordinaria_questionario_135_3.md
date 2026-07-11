

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_3|2004 PNI Straordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Determinare il dominio della funzione
$$f(x) = \ln\!\left(1 - 2x + \sqrt{x}\right).$$

## Condizioni di esistenza

La funzione è composta da una radice quadrata e da un logaritmo. Devono quindi valere simultaneamente:

$$\begin{cases} x \ge 0 & \text{(esistenza di } \sqrt{x}) \\[2pt] 1 - 2x + \sqrt{x} > 0 & \text{(argomento del logaritmo positivo).} \end{cases}$$

## Studio dell'argomento del logaritmo

Poiché deve essere $x \ge 0$, poniamo $t = \sqrt{x}$ con $t \ge 0$, così che $x = t^2$. La disequazione $1 - 2x + \sqrt{x} > 0$ diventa

$$1 - 2t^2 + t > 0 \quad\Longleftrightarrow\quad 2t^2 - t - 1 < 0.$$

Il trinomio $2t^2 - t - 1$ ha per zeri

$$t = \frac{1 \pm \sqrt{1 + 8}}{4} = \frac{1 \pm 3}{4} \quad\Rightarrow\quad t = -\frac{1}{2}, \qquad t = 1.$$

La parabola $2t^2 - t - 1$ ha concavità verso l'alto, quindi è negativa tra le due radici:

$$-\frac{1}{2} < t < 1.$$

Ricordando il vincolo $t = \sqrt{x} \ge 0$, resta

$$0 \le t < 1 \quad\Longleftrightarrow\quad 0 \le \sqrt{x} < 1.$$

Elevando al quadrato (i due membri sono non negativi) si ottiene $0 \le x < 1$.

## Conclusione

Questo risultato soddisfa già anche la condizione $x \ge 0$, dunque il dominio è

$$D = \{\, x \in \mathbb{R} : 0 \le x < 1 \,\} = [0,\,1).$$

Il grafico dell'argomento $g(x) = 1 - 2x + \sqrt{x}$ conferma la conclusione: la curva è positiva su tutto $[0,1)$ e si annulla in $x = 1$, dove il logaritmo cessa di essere definito.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="150.579" height="180.504" viewBox="-72 -72 112.934 135.378"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 19.09h99.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M25.803 16.69c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-62.681" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.297 2.153)">x</text><path fill="none" d="M-62.681 62.908V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-65.081-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-62.681" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -83.722)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.681-43.505 1.077-6.057 1.078-1.246 1.077-.457 1.078-.045 1.077.216 1.077.402 1.078.543 1.077.655 1.078.746 1.077.822 1.077.887 1.078.945 1.077.992 1.077 1.037 1.078 1.077 1.077 1.111 1.078 1.144 1.077 1.174 1.077 1.2 1.078 1.224 1.077 1.248 1.078 1.269 1.077 1.289 1.077 1.308 1.078 1.324 1.077 1.342 1.078 1.358 1.077 1.371 1.077 1.386 1.078 1.398 1.077 1.412 1.078 1.423 1.077 1.435 1.077 1.445 1.078 1.456 1.077 1.466 1.078 1.474 1.077 1.485 1.077 1.493 1.078 1.501 1.077 1.51 1.078 1.517 1.077 1.525 1.077 1.532 1.078 1.54 1.077 1.545 1.078 1.553 1.077 1.56 1.077 1.565 1.078 1.57 1.077 1.578 1.078 1.583 1.077 1.588 1.077 1.593 1.078 1.598 1.077 1.604 1.078 1.608 1.077 1.613 1.077 1.618 1.078 1.623 1.077 1.627 1.078 1.631 1.077 1.635 1.077 1.64 1.078 1.644 1.077 1.647 1.078 1.651 1.077 1.655 1.077 1.66 1.078 1.661 1.077 1.666 1.077 1.669 1.078 1.672 1.077 1.677 1.078 1.679 1.077 1.682 1.077 1.685 1.078 1.688 1.077 1.692"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-62.681" y="19.091" font-family="cmmi10" font-size="10" transform="translate(23.064 -56.663)">y</text><text x="-54.642" y="19.091" font-family="cmr10" font-size="10" transform="translate(23.064 -56.663)">=</text><text x="-44.086" y="19.091" font-family="cmr10" font-size="10" transform="translate(23.064 -56.663)">1</text><text x="-36.864" y="19.091" font-family="cmsy10" font-size="10" transform="translate(23.064 -56.663)">¡</text><text x="-26.864" y="19.091" font-family="cmr10" font-size="10" transform="translate(23.064 -56.663)">2</text><text x="-21.864" y="19.091" font-family="cmmi10" font-size="10" transform="translate(23.064 -56.663)">x</text><text x="-13.927" y="19.091" font-family="cmr10" font-size="10" transform="translate(23.064 -56.663)">+</text><text x="-3.927" y="11.888" font-family="cmsy10" font-size="10" transform="translate(23.064 -56.663)">p</text><path d="M27.471-45.175h5.715v.4h-5.715z"/><text x="4.407" y="19.091" font-family="cmmi10" font-size="10" transform="translate(23.064 -56.663)">x</text></g></g><path fill="none" stroke="red" stroke-width="1.2" d="M-62.681 19.09H-.085"/><path stroke="none" d="M-61.304 19.09a1.377 1.377 0 1 0-2.754 0 1.377 1.377 0 0 0 2.754 0m-1.377 0"/><path fill="#fff" stroke="red" stroke-width=".8" d="M1.668 19.09a1.753 1.753 0 1 0-3.506 0 1.753 1.753 0 0 0 3.506 0Zm-1.753 0"/><text x="-62.681" y="19.091" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 9.977)">0</text><text x="-62.681" y="19.091" stroke="none" font-family="cmr10" font-size="10" transform="translate(66.129 9.977)">1</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-.085 19.09v1.253"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.137](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
