

**Problema:** [[Problemi/prob_2005_ordinamento_2005_sessione_suppletiva_problema2_99_1|2005 Ordinamento Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_ordinamento_2005_sessione_suppletiva_problema2_99|2005 Ordinamento Suppletiva — Problema 2]]

È assegnata la funzione $f_a(x) = \dfrac{a}{1+x^2}$, con $a\in\mathbb{R}$, $a\ne 0$. Si chiede di: (a) spiegare perché $f_a$ è limitata; (b) detto $A$ il punto di massimo del grafico $G$ quando $a>0$, scrivere l'equazione della circonferenza $\gamma$ di diametro $OA$; (c) determinare i punti comuni a $\gamma$ e $G$ al variare di $a>0$; (d) trovare il valore $\bar a$ per cui $\gamma$ e $G$ hanno in comune i vertici di un triangolo equilatero; (e) verificato che $\bar a = 4$, calcolare le aree delle regioni in cui $G$ divide il cerchio delimitato da $\gamma$.

## a)

Per ogni $x\in\mathbb{R}$ si ha $1+x^2\ge 1$, quindi

$$|f_a(x)| = \frac{|a|}{1+x^2} \le |a|.$$

La funzione è dunque limitata: il suo valore assoluto è maggiorato dalla costante $|a|$, cioè $-|a| \le f_a(x) \le |a|$ per ogni $x$ reale.

## b)

Per $a>0$ il massimo di $f_a$ si raggiunge dove il denominatore $1+x^2$ è minimo, cioè in $x=0$, e vale $f_a(0)=a$. Il punto di massimo è quindi $A=(0,\,a)$.

La circonferenza $\gamma$ di diametro $OA$ ha centro nel punto medio $\left(0,\,\dfrac{a}{2}\right)$ e raggio $\dfrac{a}{2}$; la sua equazione è

$$x^2 + \left(y-\frac{a}{2}\right)^2 = \frac{a^2}{4},$$

che, sviluppata e semplificata, diventa

$$x^2 + y^2 - ay = 0.$$

## c)

Per trovare i punti comuni a $\gamma$ e $G$ sostituiamo $y = \dfrac{a}{1+x^2}$ nell'equazione della circonferenza. Da $y(1+x^2)=a$ ricaviamo $x^2 = \dfrac{a}{y}-1$ e sostituiamo:

$$\frac{a}{y}-1 + y^2 - ay = 0 \;\Rightarrow\; a - y + y^3 - ay^2 = 0 \;\Rightarrow\; y^3 - ay^2 - y + a = 0.$$

Fattorizziamo raggruppando i termini:

$$y^2(y-a) - (y-a) = (y-a)(y^2-1) = 0,$$

da cui $y=a$, $y=1$, $y=-1$.

- Per $y=a$ si ottiene $x^2 = \dfrac{a}{a}-1 = 0$, cioè il punto $A=(0,\,a)$.
- Per $y=1$ si ha $x^2 = a-1$, che ammette soluzioni reali solo se $a>1$, dando i due punti $(\pm\sqrt{a-1},\,1)$.
- Per $y=-1$ si avrebbe $x^2 = -a-1 < 0$, impossibile.

In conclusione: per $0<a\le 1$ l'unico punto comune è $A$; per $a>1$ i punti comuni sono tre, $A$ e i due punti simmetrici $(\pm\sqrt{a-1},\,1)$.

## d)

I tre punti $A=(0,\,a)$, $B=(\sqrt{a-1},\,1)$, $C=(-\sqrt{a-1},\,1)$ formano un triangolo isoscele (per simmetria rispetto all'asse $y$). Per imporre che sia equilatero calcoliamo i lati:

$$\overline{BC} = 2\sqrt{a-1}, \qquad \overline{AB} = \sqrt{(a-1)+(a-1)^2} = \sqrt{(a-1)\cdot a}.$$

Imponendo $\overline{AB}=\overline{BC}$ si ottiene

$$\sqrt{a(a-1)} = 2\sqrt{a-1} \;\Rightarrow\; \sqrt{a}=2 \;\Rightarrow\; \bar a = 4.$$

## e)

Con $a=4$ i tre vertici del triangolo equilatero sono $A=(0,\,4)$, $B=(\sqrt{3},\,1)$, $C=(-\sqrt{3},\,1)$. Il cerchio delimitato da $\gamma$ ha centro $(0,\,2)$, raggio $2$ e area $\pi r^2 = 4\pi$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="267.815" height="230.582" viewBox="-72 -72 200.861 172.936"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-53 87.947h168.61"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M113.73 85.547c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="31.505" y="87.947" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.038 2.153)">x</text><path fill="none" d="M31.505 100.466v-159.22"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M29.105-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="31.505" y="87.947" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -152.579)">y</text><path fill="none" d="M-22.703 86.07v3.755M.207 86.07v3.755M62.803 86.07v3.755M85.714 86.07v3.755M33.383 56.65h-3.756"/><text x="31.505" y="87.947" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.397 -29.043)">1</text><path fill="none" d="M33.383 25.35h-3.756"/><text x="31.505" y="87.947" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.397 -60.34)">2</text><path fill="none" d="M33.383-5.947h-3.756"/><text x="31.505" y="87.947" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.397 -91.639)">3</text><path fill="none" d="M33.383-37.245h-3.756"/><text x="31.505" y="87.947" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.397 -122.937)">4</text><path fill="none" stroke="#00f" stroke-width=".8" d="M94.102 25.35c0-34.57-28.025-62.595-62.597-62.595-34.571 0-62.596 28.024-62.596 62.596s28.025 62.596 62.596 62.596c34.572 0 62.597-28.025 62.597-62.596Zm-62.597 0"/><path fill="none" stroke="red" stroke-width=".8" d="m-46.74 70.68 1.98-.778 1.98-.828 1.981-.883 1.98-.942 1.981-1.006 1.98-1.075 1.981-1.151 1.98-1.233 1.981-1.322 1.98-1.42 1.981-1.523 1.98-1.638 1.981-1.762 1.98-1.896 1.981-2.042 1.98-2.2 1.981-2.37 1.98-2.555 1.981-2.751 1.98-2.961 1.981-3.185 1.98-3.417 1.981-3.659 1.98-3.912 1.981-4.156 1.98-4.407 1.981-4.632 1.98-4.836 1.981-5.002 1.98-5.107 1.981-5.143 1.98-5.08 1.981-4.9 1.98-4.592 1.981-4.138 1.98-3.545 1.981-2.799 1.98-1.953 1.981-.995 1.98-.01 1.98.987 1.981 1.934 1.98 2.785 1.981 3.53 1.98 4.135 1.981 4.586 1.98 4.898 1.981 5.076 1.98 5.14 1.981 5.107 1.98 5.005 1.981 4.842 1.98 4.635 1.981 4.41 1.98 4.16 1.981 3.915 1.98 3.664 1.981 3.422 1.98 3.187 1.981 2.964 1.98 2.756 1.981 2.556 1.98 2.373 1.981 2.204 1.98 2.044 1.981 1.9 1.98 1.763 1.981 1.64 1.98 1.526 1.981 1.42 1.98 1.323 1.981 1.235 1.98 1.152 1.981 1.076 1.98 1.008 1.981.942 1.98.884 1.981.829 1.98.778"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-31.091 56.65H94.102"/><path fill="#00f" stroke="none" d="M33.155 25.35a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="7"><text x="31.505" y="87.947" font-family="cmr7" transform="translate(6.663 -60.846)">(0</text><text x="38.616" y="87.947" font-family="cmmi7" transform="translate(6.663 -60.846)">;</text><text x="42.357" y="87.947" font-family="cmr7" transform="translate(6.663 -60.846)">2)</text></g></g><path stroke="none" d="M33.705-37.245a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none" font-size="9"><text x="31.505" y="87.947" font-family="cmmi9" transform="translate(3.533 -130.976)">A</text><text x="38.441" y="87.947" font-family="cmr9" transform="translate(3.533 -130.976)">(0</text><text x="46.663" y="87.947" font-family="cmmi9" transform="translate(3.533 -130.976)">;</text><text x="50.775" y="87.947" font-family="cmr9" transform="translate(3.533 -130.976)">4)</text></g><path stroke="none" d="M87.914 56.65a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none"><text x="31.505" y="87.947" font-family="cmmi9" font-size="9" transform="translate(57.741 -19.545)">B</text><text x="38.953" y="87.947" font-family="cmr9" font-size="9" transform="translate(57.741 -19.545)">(</text><text x="42.55" y="80.487" font-family="cmsy9" font-size="9" transform="translate(57.741 -19.545)">p</text><path d="M108 60.562h4.624v.38H108z"/><text x="50.258" y="87.947" font-family="cmr9" font-size="9" transform="translate(57.741 -19.545)">3</text><text x="54.883" y="87.947" font-family="cmmi9" font-size="9" transform="translate(57.741 -19.545)">;</text><text x="58.994" y="87.947" font-family="cmr9" font-size="9" transform="translate(57.741 -19.545)">1)</text></g><path stroke="none" d="M-20.503 56.65a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none"><text x="31.505" y="87.947" font-family="cmmi9" font-size="9" transform="translate(-100.442 -19.545)">C</text><text x="38.748" y="87.947" font-family="cmr9" font-size="9" transform="translate(-100.442 -19.545)">(</text><text x="42.345" y="87.947" font-family="cmsy9" font-size="9" transform="translate(-100.442 -19.545)">¡</text><text x="49.54" y="80.487" font-family="cmsy9" font-size="9" transform="translate(-100.442 -19.545)">p</text><path d="M-43.194 60.562h4.625v.38h-4.625z"/><text x="57.248" y="87.947" font-family="cmr9" font-size="9" transform="translate(-100.442 -19.545)">3</text><text x="61.873" y="87.947" font-family="cmmi9" font-size="9" transform="translate(-100.442 -19.545)">;</text><text x="65.984" y="87.947" font-family="cmr9" font-size="9" transform="translate(-100.442 -19.545)">1)</text></g><path fill="none" stroke="gray" d="m31.505-37.245 54.209 93.894H-22.703Z"/><g fill="red" stroke="red"><text x="31.505" y="87.947" fill="red" stroke="none" font-family="cmmi9" font-size="9" transform="translate(65.234 -103.339)">G</text></g><g fill="#00f" stroke="#00f"><text x="31.505" y="87.947" fill="#00f" stroke="none" font-family="cmmi9" font-size="9" transform="translate(50.561 -114.74)">°</text></g></g></svg>
</figure>

Calcoliamo l'area della regione compresa tra il grafico $G$ e la corda $y=1$, sfruttando la simmetria rispetto all'asse $y$:

$$\int_{-\sqrt{3}}^{\sqrt{3}} \left(\frac{4}{1+x^2}-1\right)dx = 2\int_{0}^{\sqrt{3}} \left(-1+\frac{4}{1+x^2}\right)dx = 2\Big[-x+4\arctan x\Big]_{0}^{\sqrt{3}} = 2\left(\frac{4\pi}{3}-\sqrt{3}\right) = \frac{8\pi}{3}-2\sqrt{3}.$$

Il segmento circolare delimitato dalla corda $y=1$ e dall'arco inferiore di $\gamma$ ha area $\dfrac{2\pi}{3}-\sqrt{3}$ (area del settore circolare di ampiezza $\dfrac{2\pi}{3}$ meno l'area del triangolo $OBC$). Pertanto la parte del cerchio che sta sopra il grafico $G$ vale

$$4\pi - \left(\frac{8\pi}{3}-2\sqrt{3}\right) - \left(\frac{2\pi}{3}-\sqrt{3}\right) = \frac{2\pi}{3}+3\sqrt{3},$$

mentre la parte del cerchio al di sotto di $G$ (interna al cerchio) vale

$$\left(\frac{8\pi}{3}-2\sqrt{3}\right) + \left(\frac{2\pi}{3}-\sqrt{3}\right) = \frac{10\pi}{3}-3\sqrt{3}.$$

La somma delle due aree è $\dfrac{2\pi}{3}+3\sqrt{3} + \dfrac{10\pi}{3}-3\sqrt{3} = 4\pi$, pari all'area dell'intero cerchio, come deve essere.

*Fonte:* [📄 PDF p.99](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
