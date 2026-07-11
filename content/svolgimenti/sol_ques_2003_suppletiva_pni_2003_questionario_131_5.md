

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_5|2003 Suppletiva PNI — Questionario — Quesito 5]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Si tratta di stabilire se esistono, ed eventualmente calcolare, i limiti della funzione
$$f(x)=(1+x)^{1/x}$$
per $x\to+\infty$, $x\to-\infty$ e $x\to 0$.

Conviene scrivere la funzione in forma esponenziale. Poiché la base $1+x$ deve essere positiva, il dominio è $(-1,0)\cup(0,+\infty)$, e su di esso
$$f(x)=(1+x)^{1/x}=e^{\frac{\ln(1+x)}{x}}.$$
Studiare i limiti di $f$ equivale allora, per la continuità della funzione esponenziale, a studiare il limite dell'esponente $\dfrac{\ln(1+x)}{x}$.

## a) $x\to+\infty$

Il limite si presenta nella forma indeterminata $\infty^{0}$. Passando alla forma esponenziale:
$$\lim_{x\to+\infty}(1+x)^{1/x}=\lim_{x\to+\infty}e^{\frac{\ln(1+x)}{x}}.$$
L'esponente tende a $0$, perché per $x\to+\infty$ la $x$ è un infinito di ordine superiore rispetto a $\ln(1+x)$:
$$\lim_{x\to+\infty}\frac{\ln(1+x)}{x}=0.$$
Quindi
$$\lim_{x\to+\infty}(1+x)^{1/x}=e^{0}=1.$$

## b) $x\to-\infty$

Per $x\le -1$ si ha $1+x\le 0$, dunque la potenza $(1+x)^{1/x}$ non è definita nel campo reale: nessun intorno di $-\infty$ è contenuto nel dominio di $f$. Di conseguenza $-\infty$ non è punto di accumulazione del dominio e **il limite per $x\to-\infty$ non esiste** (non ha senso porselo).

## c) $x\to 0$

Il limite si presenta nella forma indeterminata $1^{\infty}$. In forma esponenziale:
$$\lim_{x\to 0}(1+x)^{1/x}=\lim_{x\to 0}e^{\frac{\ln(1+x)}{x}}.$$
Ricordando il limite notevole
$$\lim_{x\to 0}\frac{\ln(1+x)}{x}=1,$$
valido sia per $x\to 0^{+}$ sia per $x\to 0^{-}$ (entrambi gli intorni bucati di $0$ appartengono al dominio), si ottiene
$$\lim_{x\to 0}(1+x)^{1/x}=e^{1}=e.$$

## Conclusione

I limiti richiesti sono:
$$\lim_{x\to+\infty}(1+x)^{1/x}=1,\qquad \lim_{x\to 0}(1+x)^{1/x}=e,$$
mentre per $x\to-\infty$ il limite non esiste, perché la funzione non è definita per $x\le -1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="363.345" height="154.328" viewBox="-72 -72 272.509 115.746"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 34.74h258.52"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M184.57 32.34c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.844" y="34.74" stroke="none" font-family="cmmi10" font-size="10" transform="translate(248.227 2.153)">x</text><path fill="none" d="M-57.844 43.276v-102.03"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.244-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.844" y="34.74" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -99.372)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-57.844 6.287h227.622"/><g stroke="none" font-size="10"><text x="-57.844" y="34.74" font-family="cmmi10" transform="translate(231.155 -26.203)">y</text><text x="-49.804" y="34.74" font-family="cmr10" transform="translate(231.155 -26.203)">=</text><text x="-39.249" y="34.74" font-family="cmr10" transform="translate(231.155 -26.203)">1</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-57.844-42.595h14.227"/><text x="-57.844" y="34.74" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-8.19 -75.182)">e</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-56.42-40.716 2.862 3.241 2.864 2.79 2.863 2.405 2.863 2.11 2.863 1.853 2.864 1.643 2.863 1.482 2.863 1.335 2.863 1.207 2.864 1.095 2.863 1.004 2.863.927 2.863.858 2.864.796 2.863.733 2.863.692 2.863.637 2.864.604 2.863.561 2.863.538 2.863.497 2.864.474 2.863.448 2.863.426 2.863.404 2.864.387 2.863.36 2.863.353 2.863.332 2.864.318 2.863.304 2.863.291 2.863.282 2.864.269 2.863.257 2.863.25 2.863.24 2.864.229 2.863.224 2.863.216 2.863.206 2.864.2 2.863.195 2.863.186 2.863.182 2.863.176 2.864.17 2.863.165 2.863.16 2.863.156 2.864.152 2.863.147 2.863.142 2.863.14 2.864.135L103.92-5l2.863.128 2.863.125 2.864.121 2.863.12 2.863.114 2.863.114 2.864.11 2.863.107 2.863.106 2.863.102 2.864.1 2.863.098 2.863.096 2.863.094 2.864.092 2.863.09 2.863.088 2.863.085 2.864.085 2.863.082 2.863.081 2.863.08 2.864.077"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-57.844" y="34.74" font-family="cmmi10" font-size="10" transform="translate(146.627 -35.222)">f</text><text x="-51.871" y="34.74" font-family="cmr10" font-size="10" transform="translate(146.627 -35.222)">(</text><text x="-47.982" y="34.74" font-family="cmmi10" font-size="10" transform="translate(146.627 -35.222)">x</text><text x="-42.267" y="34.74" font-family="cmr10" font-size="10" transform="translate(146.627 -35.222)">)</text><text x="-35.601" y="34.74" font-family="cmr10" font-size="10" transform="translate(146.627 -35.222)">=</text><text x="-25.045" y="34.74" font-family="cmr10" font-size="10" transform="translate(146.627 -35.222)">(1</text><text x="-13.934" y="34.74" font-family="cmr10" font-size="10" transform="translate(146.627 -35.222)">+</text><text x="-3.934" y="34.74" font-family="cmmi10" font-size="10" transform="translate(146.627 -35.222)">x</text><text x="1.781" y="34.74" font-family="cmr10" font-size="10" transform="translate(146.627 -35.222)">)</text><text x="5.67" y="31.111" font-family="cmr7" font-size="7" transform="translate(146.627 -35.222)">1</text><text x="9.656" y="31.111" font-family="cmmi7" font-size="7" transform="translate(146.627 -35.222)">=x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.133](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
