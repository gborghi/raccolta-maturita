

**Problema:** [[Problemi/prob_2007_liceo_scientifico_ordinamento_2007_sessione_straor_problema2_125_1|2007 LS Ordinamento Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_problema2_125|2007 LS Ordinamento Straordinaria — Problema 2]]

Si consideri la funzione
$$f(x)=\ln\sqrt{x^{2}-4}=\dfrac{1}{2}\ln\!\left(x^{2}-4\right).$$
Se ne studia il grafico $C$, si scrivono le tangenti nei punti in cui $C$ incontra l'asse $x$ e si calcola l'area del triangolo da esse individuato; si studia poi la funzione derivata $f'$ con il suo grafico $C'$ e si calcola un'area a essa collegata.

## a) Studio di $f$ e grafico $C$

**Dominio.** Deve essere $x^{2}-4>0$, cioè
$$D=(-\infty,-2)\cup(2,+\infty).$$

**Simmetrie.** Poiché $f(-x)=f(x)$, la funzione è **pari**: il grafico è simmetrico rispetto all'asse $y$.

**Intersezioni con gli assi.** Il punto $x=0$ non appartiene al dominio, quindi non vi è intersezione con l'asse $y$. Per l'asse $x$:
$$f(x)=0 \iff \sqrt{x^{2}-4}=1 \iff x^{2}-4=1 \iff x=\pm\sqrt{5}.$$
La curva incontra l'asse $x$ in $A=(-\sqrt5,\,0)$ e $B=(\sqrt5,\,0)$.

**Segno.**
$$f(x)>0 \iff \sqrt{x^{2}-4}>1 \iff x^{2}>5 \iff x<-\sqrt5 \ \text{ oppure } \ x>\sqrt5.$$

**Limiti e asintoti.** Ai bordi del dominio $x^{2}-4\to 0^{+}$, quindi
$$\lim_{x\to 2^{+}}f(x)=-\infty,\qquad \lim_{x\to -2^{-}}f(x)=-\infty,$$
e le rette $x=2$ e $x=-2$ sono **asintoti verticali**. Inoltre
$$\lim_{x\to \pm\infty}f(x)=+\infty.$$
Non esistono asintoti obliqui, poiché la funzione non è un infinito del primo ordine.

**Derivata prima.**
$$f'(x)=\dfrac{1}{2}\cdot\dfrac{2x}{x^{2}-4}=\dfrac{x}{x^{2}-4}.$$
Nel dominio il denominatore è sempre positivo, dunque il segno di $f'$ coincide con quello di $x$: la funzione è **crescente per $x>2$** e **decrescente per $x<-2$**; non presenta massimi né minimi.

**Derivata seconda.**
$$f''(x)=\dfrac{(x^{2}-4)-x\cdot 2x}{(x^{2}-4)^{2}}=\dfrac{-(x^{2}+4)}{(x^{2}-4)^{2}}<0$$
in tutto il dominio: la **concavità è sempre rivolta verso il basso**, non vi sono flessi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="419.174" height="215.027" viewBox="-72 -72 314.38 161.271"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 14.823h301.2"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M227.25 12.423c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="78.73" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(154.333 2.153)">x</text><path fill="none" d="M78.73 88.8V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M76.33-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="78.73" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -79.455)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M21.824 88.8V-59.153M135.635 88.8V-59.153"/><g stroke="none" font-size="10"><text x="78.73" y="14.823" font-family="cmsy10" transform="translate(-73.216 9.977)">¡</text><text x="86.507" y="14.823" font-family="cmr10" transform="translate(-73.216 9.977)">2</text></g><text x="78.73" y="14.823" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.438 9.977)">2</text><path fill="none" stroke="#00f" stroke-width=".8" d="m136.204 50.578.953-14.011.952-7.026.953-4.748.952-3.606.953-2.914.952-2.45.953-2.122.953-1.87.952-1.676.953-1.52.952-1.391.953-1.284.952-1.196.953-1.115.952-1.049.953-.989.952-.936.953-.89.952-.848.953-.81.953-.775.952-.745.953-.713.952-.691.953-.667.952-.642.953-.623.952-.603.953-.584.952-.568.953-.552.952-.537.953-.523.952-.51.953-.497.953-.486.952-.474.953-.463.952-.454.953-.444.952-.434.953-.426.952-.416.953-.413.952-.401.953-.395.952-.388.953-.38.952-.375.953-.367.953-.362.952-.356.953-.35.952-.345.953-.34.952-.335.953-.33.952-.324.953-.32.952-.316.953-.311.952-.308.953-.304.952-.3.953-.294.953-.293.952-.287.953-.285.952-.282.953-.277.952-.276.953-.271.952-.266.953-.269.952-.263.953-.26.952-.256.953-.254.953-.252.952-.249.953-.246.952-.243.953-.243.952-.238.953-.238.952-.234.953-.232.952-.23.953-.227M-63.534-28.489l.952.228.953.23.953.232.952.235.953.236.952.24.953.24.952.245.953.246.952.249.953.251.952.254.953.257.952.26.953.262.952.268.953.268.953.27.952.276.953.278.952.28.953.286.952.288.953.29.952.297.953.299.952.303.953.308.952.312.953.315.952.32.953.325.953.33.952.334.953.34.952.345.953.35.952.355.953.363.952.367.953.375.952.38.953.388.952.394.953.402.953.41.952.419.953.426.952.433.953.445.952.453.953.462.952.475.953.486.952.496.953.51.952.523.953.536.952.552.953.568.953.584.952.603.953.622.952.642.953.667.952.689.953.716.952.742.953.776.952.81.953.846.952.889.953.935.952.989.953 1.047.953 1.115.952 1.195.953 1.282.952 1.39.953 1.518.952 1.673.953 1.868.952 2.116.953 2.445.952 2.906.953 3.594.952 4.727.953 6.979.953 13.818"/><path stroke="none" d="M144.35 14.823a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none"><text x="78.73" y="6.551" font-family="cmsy10" font-size="10" transform="translate(67.153 -4.86)">p</text><path d="M154.216 1.29h5v.4h-5z"/><text x="87.063" y="14.823" font-family="cmr10" font-size="10" transform="translate(67.153 -4.86)">5</text></g><path stroke="none" d="M17.11 14.823a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none"><text x="78.73" y="14.823" font-family="cmsy10" font-size="10" transform="translate(-88.264 -4.86)">¡</text><text x="86.507" y="6.551" font-family="cmsy10" font-size="10" transform="translate(-88.264 -4.86)">p</text><path d="M6.577 1.29h5v.4h-5z"/><text x="94.841" y="14.823" font-family="cmr10" font-size="10" transform="translate(-88.264 -4.86)">5</text></g><g fill="#00f" stroke="#00f"><text x="78.73" y="14.823" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(118.416 -44.953)">C</text></g></g></svg>
</figure>

## b) Tangenti nei punti di intersezione con l'asse $x$ e area del triangolo

La curva incontra l'asse $x$ in $A=(-\sqrt5,0)$ e $B=(\sqrt5,0)$. I coefficienti angolari delle tangenti sono
$$f'(\sqrt5)=\dfrac{\sqrt5}{5-4}=\sqrt5,\qquad f'(-\sqrt5)=-\sqrt5$$
(l'ultimo per il fatto che $f'$ è dispari).

- Tangente in $B$: $\;y=\sqrt5\,(x-\sqrt5)=\sqrt5\,x-5.$
- Tangente in $A$: $\;y=-\sqrt5\,(x+\sqrt5)=-\sqrt5\,x-5.$

Le due tangenti si incontrano nel punto $C$ dato da $\sqrt5\,x-5=-\sqrt5\,x-5$, cioè $x=0$, $y=-5$: quindi $C=(0,-5)$.

Il triangolo $ABC$ ha base $\overline{AB}=2\sqrt5$ e altezza $\overline{OC}=5$; la sua area è
$$\text{Area}=\dfrac{1}{2}\cdot 2\sqrt5\cdot 5=5\sqrt5\;\cong\;11.18\ \text{u}^{2}.$$

## c) Studio di $f'$ e grafico $C'$

$$f'(x)=\dfrac{x}{x^{2}-4},\qquad D'=(-\infty,-2)\cup(2,+\infty).$$

Il dominio coincide con quello di $f$, che è continua e derivabile. Poiché $f$ è pari, la sua derivata $f'$ è **dispari**: il grafico $C'$ è simmetrico rispetto all'origine.

**Segno.** $f'(x)>0$ per $x>2$ e $f'(x)<0$ per $x<-2$.

**Monotonia.** La derivata di $f'$ è $f''<0$ in tutto il dominio, quindi $f'$ è **sempre decrescente**.

**Limiti e asintoti.**
$$\lim_{x\to 2^{+}}f'(x)=+\infty,\qquad \lim_{x\to -2^{-}}f'(x)=-\infty,$$
dunque $x=2$ e $x=-2$ sono **asintoti verticali**; inoltre
$$\lim_{x\to +\infty}f'(x)=0^{+},\qquad \lim_{x\to -\infty}f'(x)=0^{-},$$
quindi $y=0$ è **asintoto orizzontale** in entrambe le direzioni.

## d) Area delimitata da $C'$, dall'asse $x$ e dalla retta $x=-\sqrt3$

Osserviamo che $x=-\sqrt3\approx-1.73$ **non appartiene al dominio** di $f'$ (è $-2<-\sqrt3<2$): la curva $C'$ non esiste in tale ascissa. Interpretando il quesito, come suggerisce il testo, con l'espressione analitica $g(x)=\dfrac{x}{x^{2}-4}$ prolungata oltre il dominio di $f$, su $[-\sqrt3,\,0]$ si ha $g(x)\ge 0$, e l'area richiesta è
$$\text{Area}=\int_{-\sqrt3}^{0}\dfrac{x}{x^{2}-4}\,dx=\dfrac{1}{2}\Big[\ln\lvert x^{2}-4\rvert\Big]_{-\sqrt3}^{0}=\dfrac{1}{2}\big(\ln 4-\ln 1\big)=\ln 2\;\cong\;0.69\ \text{u}^{2}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="419.174" height="245.377" viewBox="-72 -72 314.38 184.032"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 26.204h301.2"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M227.25 23.804c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="78.73" y="26.204" stroke="none" font-family="cmmi10" font-size="10" transform="translate(154.333 2.153)">x</text><path fill="none" d="M78.73 111.562V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M76.33-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="78.73" y="26.204" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -90.836)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M21.824 111.562V-59.154M135.635 111.562V-59.154"/><text x="78.73" y="26.204" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.438 9.977)">2</text><g stroke="none" font-size="10"><text x="78.73" y="26.204" font-family="cmsy10" transform="translate(-73.216 -4.366)">¡</text><text x="86.507" y="26.204" font-family="cmr10" transform="translate(-73.216 -4.366)">2</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m141.326-48.318.894 9.699.895 7.372.895 5.807.895 4.689.895 3.866.894 3.247.895 2.762.895 2.382.895 2.074.894 1.82.895 1.616.895 1.44.895 1.294.895 1.17.894 1.06.895.968.895.885.895.815.895.752.894.696.895.647.895.602.895.562.895.525.894.493.895.463.895.439.895.412.895.389.894.368.895.35.895.333.895.316.894.3.895.288.895.274.895.262.895.25.894.24.895.23.895.222.895.212.895.204.894.196.895.19.895.182.895.175.895.17.894.165.895.158.895.153.895.149.895.143.894.14.895.135.895.13.895.128.895.122.894.12.895.117.895.113.895.11.894.108.895.104.895.102.895.099.895.096.894.094.895.092.895.09.895.087.895.085.894.084.895.081.895.08.895.078.895.076.894.074.895.074.895.07.895.07.895.069.894.067.895.066.895.064.895.063.894.062.895.06.895.06M-63.534 32.978l.895.06.894.06.895.062.895.064.895.063.895.066.894.067.895.068.895.07.895.071.895.073.894.075.895.076.895.077.895.08.895.081.894.084.895.085.895.088.895.089.895.092.894.094.895.096.895.1.895.1.895.105.894.107.895.11.895.113.895.117.894.12.895.122.895.127.895.131.895.135.894.139.895.144.895.148.895.153.895.158.894.164.895.17.895.175.895.182.895.189.894.197.895.203.895.212.895.22.895.23.894.24.895.25.895.262.895.274.894.286.895.3.895.316.895.332.895.349.894.368.895.39.895.41.895.436.895.463.894.492.895.525.895.56.895.6.895.645.894.696.895.748.895.813.895.884.895.964.894 1.057.895 1.165.895 1.29.895 1.435.894 1.607.895 1.813.895 2.065.895 2.368.895 2.751.894 3.224.895 3.844.895 4.658.895 5.758.895 7.314.894 9.59"/><path fill="#ccf" stroke="none" d="m29.45-23.065 1.263 7.589 1.263 5.716L33.24-5.3l1.263 3.58 1.264 2.945 1.263 2.466 1.263 2.094 1.264 1.804 1.263 1.576 1.264 1.385 1.263 1.233 1.263 1.103 1.264.997 1.263.904 1.263.826 1.264.759 1.263.701 1.264.651 1.263.607 1.263.568 1.264.535 1.263.505 1.264.478 1.263.454 1.263.435 1.264.415 1.263.4 1.264.385 1.263.372 1.263.362 1.264.351 1.263.345 1.263.336 1.264.33 1.263.326 1.264.322 1.263.318 1.263.318 1.264.315.008.002H29.45Z"/><path fill="none" stroke="#00f" stroke-dasharray="3.0,3.0" stroke-width=".8" d="m29.45-23.065 1.263 7.589 1.263 5.716L33.24-5.3l1.263 3.58 1.264 2.945 1.263 2.466 1.263 2.094 1.264 1.804 1.263 1.576 1.264 1.385 1.263 1.233 1.263 1.103 1.264.997 1.263.904 1.263.826 1.264.759 1.263.701 1.264.651 1.263.607 1.263.568 1.264.535 1.263.505 1.264.478 1.263.454 1.263.435 1.264.415 1.263.4 1.264.385 1.263.372 1.263.362 1.264.351 1.263.345 1.263.336 1.264.33 1.263.326 1.264.322 1.263.318 1.263.318 1.264.315"/><path fill="none" d="M29.45 26.204v-49.28"/><g stroke="none"><text x="78.73" y="26.204" font-family="cmsy10" font-size="10" transform="translate(-59.836 12.605)">¡</text><text x="86.507" y="17.932" font-family="cmsy10" font-size="10" transform="translate(-59.836 12.605)">p</text><path d="M35.005 30.137h5v.4h-5z"/><text x="94.841" y="26.204" font-family="cmr10" font-size="10" transform="translate(-59.836 12.605)">3</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="78.73" y="26.204" font-family="cmmi10" font-size="10" transform="translate(108.477 -16.158)">C</text><text x="86.592" y="22.575" font-family="cmsy7" font-size="7" transform="translate(108.477 -16.158)">0</text></g></g></g></svg>
</figure>

*Con la collaborazione di Angela Santamaria.*

*Fonte:* [📄 PDF p.125](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
