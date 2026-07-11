

**Problema:** [[Problemi/prob_2008_liceo_scientifico_pni_2008_sessione_straordinaria_problema1_113_1|2008 PNI Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_problema1_113|2008 PNI Straordinaria — Problema 1]]

Con riferimento a un sistema di assi cartesiani ortogonali $Oxy$, si studia la funzione
$$f(x)=2(2-x)\sqrt{x^2-1}$$
e si risolvono i quesiti sul relativo grafico $\gamma$, sull'iperbole equilatera $x^2-y^2=1$ e sui solidi da esse generati.

## a)

**Dominio.** Si richiede $x^2-1\ge 0$, cioè
$$x\le -1 \quad\text{oppure}\quad x\ge 1.$$

**Zeri e segno.** Poiché $\sqrt{x^2-1}\ge 0$, il segno di $f$ dipende dal fattore $(2-x)$:
$$f(x)=0 \ \Rightarrow\ x=2 \ \text{ oppure } \ x=\pm 1,$$
$$f(x)>0 \ \text{ per } x<2, \qquad f(x)<0 \ \text{ per } x>2 \quad (\text{nel dominio}).$$

**Limiti.** Per $x\to\pm\infty$ si ha $f(x)\approx -2x^2$, quindi
$$\lim_{x\to -\infty} f(x)=+\infty, \qquad \lim_{x\to +\infty} f(x)=-\infty.$$
La funzione è un infinito del secondo ordine, perciò non esistono asintoti obliqui né di altro tipo.

**Derivata prima.**
$$f'(x)=2\left[-\sqrt{x^2-1}+(2-x)\cdot\frac{x}{\sqrt{x^2-1}}\right]=\frac{2\bigl[-(x^2-1)+x(2-x)\bigr]}{\sqrt{x^2-1}}=\frac{-2(2x^2-2x-1)}{\sqrt{x^2-1}}.$$
Il numeratore si annulla per $2x^2-2x-1=0$, cioè
$$x=\frac{1\pm\sqrt{3}}{2}.$$
Nel dominio è accettabile $x=\dfrac{1+\sqrt{3}}{2}\approx 1{,}37$: qui $f'$ cambia segno da $+$ a $-$, dunque si ha un **massimo relativo**, con
$$f\!\left(\frac{1+\sqrt{3}}{2}\right)\approx 1{,}18.$$
Nei punti $x=\pm 1$ la funzione non è derivabile (tangente verticale). Il grafico volge la concavità verso l'alto nel ramo sinistro e presenta un flesso attorno a $x\approx -1{,}5$, con $f(-1{,}5)\approx 7{,}6$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="186.998" height="376.258" viewBox="-72 -72 140.249 282.193"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 149.973H54.998"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M53.118 147.573c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-8.336" y="149.973" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.267 2.153)">x</text><path fill="none" d="M-8.336 209.723V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-10.736-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-8.336" y="149.973" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -214.604)">y</text><path fill="none" d="M-48.17 147.583v4.78"/><g stroke="none" font-size="10"><text x="-8.336" y="149.973" font-family="cmsy10" transform="translate(-46.223 12.367)">¡</text><text x="-.558" y="149.973" font-family="cmr10" transform="translate(-46.223 12.367)">2</text></g><path fill="none" d="M-28.253 147.583v4.78"/><g stroke="none" font-size="10"><text x="-8.336" y="149.973" font-family="cmsy10" transform="translate(-26.306 12.367)">¡</text><text x="-.558" y="149.973" font-family="cmr10" transform="translate(-26.306 12.367)">1</text></g><path fill="none" d="M11.58 147.583v4.78"/><text x="-8.336" y="149.973" stroke="none" font-family="cmr10" font-size="10" transform="translate(17.417 12.367)">1</text><path fill="none" d="M31.497 147.583v4.78"/><text x="-8.336" y="149.973" stroke="none" font-family="cmr10" font-size="10" transform="translate(37.334 12.367)">2</text><path fill="none" stroke="#00f" stroke-width=".8" d="m11.58 149.973.49-8.665.49-3.354.488-2.405.49-1.886.49-1.532.488-1.265.49-1.05.489-.871.49-.714.489-.576.489-.45.49-.337.488-.23.49-.13.489-.036.49.053.489.138.489.22.49.298.488.375.49.448.489.52.49.59.489.659.489.726.49.792.488.856.49.92.489.982.49 1.045.489 1.105.489 1.166.49 1.225.488 1.285.49 1.342.49 1.401.488 1.458.49 1.515.489 1.572.49 1.628.488 1.683.49 1.739.49 1.794.488 1.849.49 1.903.489 1.957.49 2.012.489 2.065.489 2.12.49 2.171.488 2.225.49 2.279.489 2.33.49 2.384.489 2.436.489 2.488.49 2.54.488 2.593.49 2.643M-41.199-40.844l.22 2.589.219 2.58.22 2.583.219 2.574.22 2.572.219 2.569.22 2.565.219 2.564.219 2.56.22 2.557.219 2.556.22 2.554.219 2.551.219 2.551.22 2.551.219 2.551.22 2.55.219 2.552.22 2.554.219 2.552.219 2.555.22 2.558.219 2.562.22 2.565.219 2.569.22 2.574.218 2.582.22 2.589.22 2.597.219 2.606.22 2.614.219 2.63.219 2.64.22 2.654.219 2.673.22 2.69.219 2.71.22 2.734.219 2.758.219 2.788.22 2.82.219 2.855.22 2.897.219 2.944.22 2.994.218 3.056.22 3.127.22 3.206.219 3.302.22 3.414.219 3.549.219 3.715.22 3.92.219 4.194.22 4.55.219 5.077.22 5.909.219 7.56.219 17.845"/><path stroke="none" d="M12.98 149.973a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0M32.897 149.973a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0M-26.853 149.973a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0M20.27 126.47a1.4 1.4 0 1 0-2.8.001 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><text x="-8.336" y="149.973" stroke="none" font-family="cmmi10" font-size="10" transform="translate(30.74 -27.035)">M</text></g></svg>
</figure>

## b)

La regione finita delimitata da $\gamma$ e dall'asse $x$ corrisponde a $x\in[1,2]$, dove $f(x)\ge 0$. Il volume del solido di rotazione attorno all'asse $x$ è
$$V=\pi\int_1^2 [f(x)]^2\,dx=\pi\int_1^2 4(2-x)^2(x^2-1)\,dx.$$
Sviluppando l'integranda:
$$4(2-x)^2(x^2-1)=4\bigl(x^4-4x^3+3x^2+4x-4\bigr),$$
quindi
$$V=4\pi\int_1^2 (x^4-4x^3+3x^2+4x-4)\,dx=4\pi\left[\frac{x^5}{5}-x^4+x^3+2x^2-4x\right]_1^2.$$
Calcolando i valori agli estremi:
$$\left[\cdot\right]_{x=2}=\frac{32}{5}-8=-\frac{8}{5}, \qquad \left[\cdot\right]_{x=1}=\frac{1}{5}-2=-\frac{9}{5},$$
la differenza vale $\dfrac{1}{5}$, dunque
$$V=4\pi\cdot\frac{1}{5}=\frac{4\pi}{5}\approx 2{,}513 \ \text{u}^3.$$

## c)

La retta $x=2$ interseca l'iperbole $x^2-y^2=1$ nei punti $A=(2,-\sqrt{3})$ e $B=(2,\sqrt{3})$. Il segmento iperbolico di base $AB$ è la regione compresa tra l'arco del ramo destro (che passa per il vertice $(1,0)$) e la corda $AB$, con $1\le x\le 2$.

Detti $E$ ed $F$ i vertici del rettangolo appartenenti all'iperbole, di ascissa $x$, l'ordinata di $E$ nel primo quadrante è $\sqrt{x^2-1}$. Il rettangolo ha allora altezza $2\sqrt{x^2-1}$ (parallela ad $AB$) e larghezza $2-x$, quindi area
$$\mathcal{A}(x)=(2-x)\cdot 2\sqrt{x^2-1}=f(x),$$
cioè proprio l'equazione di $\gamma$. L'area è massima quando lo è $f(x)$: dal punto a) ciò avviene per
$$x=\frac{1+\sqrt{3}}{2}\approx 1{,}37,$$
con $\mathcal{A}_{\max}=f\!\left(\dfrac{1+\sqrt{3}}{2}\right)\approx 1{,}18$.

## d)

Il solido ha per base il segmento iperbolico precedente; tagliato con piani paralleli ad $AB$ (perpendicolari all'asse $x$) dà sezioni esagonali regolari. Alla generica ascissa $x$, l'ordinata è $y=\sqrt{x^2-1}$ e la corda della base misura $2y=2\sqrt{x^2-1}$: essa costituisce il lato dell'esagono regolare, cioè $\ell=2\sqrt{x^2-1}$.

L'area di un esagono regolare di lato $\ell$ è $\dfrac{3\sqrt{3}}{2}\,\ell^2$, dunque
$$A(x)=\frac{3\sqrt{3}}{2}\,(2\sqrt{x^2-1})^2=6\sqrt{3}\,(x^2-1).$$
Il volume vale
$$V=\int_1^2 A(x)\,dx=6\sqrt{3}\int_1^2 (x^2-1)\,dx=6\sqrt{3}\left[\frac{x^3}{3}-x\right]_1^2=6\sqrt{3}\cdot\frac{4}{3}=8\sqrt{3}\approx 13{,}856 \ \text{u}^3.$$

*Fonte:* [📄 PDF p.113](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
