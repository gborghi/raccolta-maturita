

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_28_4|2009 Sessione Ordinaria Estero Americhe — Prova — Quesito 4]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_28|2009 Sessione Ordinaria Estero Americhe — Prova]]

Si determinino $a$ e $b$ in modo che il diagramma della funzione
$$f(x)=\frac{ax^2+bx}{2x-5}$$
abbia come asintoto obliquo la retta di equazione $y=3x+2$.

La funzione è razionale fratta e, purché sia $a\neq 0$, il grado del numeratore supera di $1$ quello del denominatore: ciò garantisce l'esistenza di un asintoto obliquo. Se $y=mx+q$ è tale asintoto, i coefficienti si ricavano dai limiti

$$m=\lim_{x\to\infty}\frac{f(x)}{x},\qquad q=\lim_{x\to\infty}\big[f(x)-mx\big].$$

**Coefficiente angolare.** Si impone $m=3$:
$$m=\lim_{x\to\infty}\frac{ax^2+bx}{x(2x-5)}=\lim_{x\to\infty}\frac{ax^2+bx}{2x^2-5x}=\frac{a}{2}.$$
Dunque $\dfrac{a}{2}=3$, da cui
$$a=6.$$

**Termine noto.** Con $a=6$ si impone $q=2$:
$$q=\lim_{x\to\infty}\left[\frac{6x^2+bx}{2x-5}-3x\right]=\lim_{x\to\infty}\frac{6x^2+bx-3x(2x-5)}{2x-5}=\lim_{x\to\infty}\frac{(b+15)x}{2x-5}=\frac{b+15}{2}.$$
Dunque $\dfrac{b+15}{2}=2$, cioè $b+15=4$, da cui
$$b=-11.$$

**Verifica.** Con $a=6$ e $b=-11$ la funzione diventa $f(x)=\dfrac{6x^2-11x}{2x-5}$. Eseguendo la divisione tra i polinomi:
$$f(x)=3x+2+\frac{10}{2x-5}.$$
Poiché $\dfrac{10}{2x-5}\to 0$ per $x\to\infty$, la retta $y=3x+2$ è effettivamente asintoto obliquo (la funzione presenta inoltre l'asintoto verticale $x=\tfrac{5}{2}$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="198.935" height="413.767" viewBox="-72 -72 149.202 310.326"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 146.805H36.791"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M34.911 144.405c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-35.65" y="146.805" stroke="none" font-family="cmmi10" font-size="10" transform="translate(76.374 2.153)">x</text><path fill="none" d="M-35.65 228.75V-53.107"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-38.05-51.227c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-35.65" y="146.805" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -205.79)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-12.887 228.75V-53.507"/><g stroke="none"><text x="-35.65" y="146.805" font-family="cmmi10" font-size="10" transform="translate(10.045 -207.293)">x</text><text x="-27.157" y="146.805" font-family="cmr10" font-size="10" transform="translate(10.045 -207.293)">=</text><text x="-15.401" y="142.867" font-family="cmr7" font-size="7" transform="translate(10.045 -207.293)">5</text><path d="M-5.356-63.188h3.986v.4h-3.986z"/><text x="-15.401" y="150.253" font-family="cmr7" font-size="7" transform="translate(10.045 -207.293)">2</text></g></g><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="m-72.07 237.856 95.603-286.81"/><g fill="red" stroke="none" font-size="10"><text x="-35.65" y="146.805" font-family="cmmi10" transform="translate(62.716 -193.51)">y</text><text x="-27.61" y="146.805" font-family="cmr10" transform="translate(62.716 -193.51)">=</text><text x="-17.055" y="146.805" font-family="cmr10" transform="translate(62.716 -193.51)">3</text><text x="-12.055" y="146.805" font-family="cmmi10" transform="translate(62.716 -193.51)">x</text><text x="-4.117" y="146.805" font-family="cmr10" transform="translate(62.716 -193.51)">+</text><text x="5.883" y="146.805" font-family="cmr10" transform="translate(62.716 -193.51)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.965 218.818.772-2.185.771-2.181.772-2.177.771-2.172.772-2.167.771-2.162.772-2.157.771-2.152.772-2.145.771-2.14.771-2.133.772-2.126.771-2.119.772-2.111.771-2.103.772-2.094.771-2.085.772-2.076.771-2.065.772-2.054.771-2.042.772-2.03.771-2.015.772-2 .771-1.986.772-1.969.771-1.95.772-1.93.771-1.91.772-1.886.771-1.86.772-1.833.771-1.803.772-1.77.771-1.733.772-1.693.771-1.649.772-1.6.771-1.543.772-1.483.771-1.412.772-1.333.771-1.244.772-1.142.771-1.024.772-.888.771-.728.772-.54.771-.318.772-.05.771.276.772.677.771 1.18.772 1.82.771 2.654.772 3.77.771 5.308.772 7.514.771 10.84M-4.692-14.86l.478 1.354.478 1.064.479.814.478.602.478.418.479.258.478.117.478-.006.479-.115.478-.213.478-.3.479-.377.478-.448.478-.512.479-.569.478-.62.478-.669.479-.712.478-.753.478-.789.479-.823.478-.854.478-.883.479-.91.478-.935.479-.958.478-.98.478-1 .479-1.019.478-1.037.478-1.053.479-1.068.478-1.083.478-1.097.479-1.11.478-1.122.478-1.134.479-1.145.478-1.154.478-1.166.479-1.174.478-1.183.478-1.19.479-1.2.478-1.207.478-1.214.479-1.221.478-1.228.478-1.233.479-1.24.478-1.246.478-1.25.479-1.257.478-1.262.479-1.266.478-1.27.478-1.276.479-1.28.478-1.283"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.36](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
