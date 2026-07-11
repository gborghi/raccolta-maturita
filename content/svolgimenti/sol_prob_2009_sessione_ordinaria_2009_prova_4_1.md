

**Problema:** [[Problemi/prob_2009_sessione_ordinaria_2009_prova_4_1|2009 Sessione Ordinaria — Prova — Problema 1]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_4|2009 Sessione Ordinaria — Prova]]

È assegnato il settore circolare $AOB$ di raggio $r$ e ampiezza $x$ (in metri e radianti).

## a)

L'area $S(x)$ compresa fra l'arco e la corda $AB$ si ottiene sottraendo dall'area del settore circolare quella del triangolo $OAB$.

L'area del settore di raggio $r$ e ampiezza $x$ (in radianti) è
$$\text{Area}_{\text{settore}} = \frac{1}{2}\,r^2 x .$$

Il triangolo $OAB$ ha due lati uguali a $r$ e angolo compreso $x$, quindi
$$\text{Area}_{\triangle OAB} = \frac{1}{2}\,r^2 \sin x .$$

Sottraendo si ottiene
$$S(x) = \frac{1}{2}r^2 x - \frac{1}{2}r^2 \sin x = \frac{1}{2}r^2\big(x - \sin x\big), \qquad x \in [0,\,2\pi].$$

La formula resta valida su tutto l'intervallo: quando $x \in (\pi,\,2\pi]$ si ha $\sin x \le 0$, il che rende il termine $x-\sin x$ ancora maggiore, coerentemente con l'area (sempre positiva) compresa fra arco e corda.

## b)

Posto $r = 1$ si studia
$$y = S(x) = \frac{1}{2}\big(x - \sin x\big), \qquad x \in [0,\,2\pi].$$

**Valori agli estremi:** $S(0) = 0$, $\;S(2\pi) = \pi$.

**Derivata prima:**
$$S'(x) = \frac{1}{2}\big(1 - \cos x\big).$$

Poiché $1-\cos x \ge 0$ sempre, con uguaglianza solo per $x = 0$ e $x = 2\pi$, la funzione è **strettamente crescente** su tutto $[0,\,2\pi]$; agli estremi la tangente è orizzontale.

**Derivata seconda:**
$$S''(x) = \frac{1}{2}\sin x.$$

- $S''(x) > 0$ per $x \in (0,\,\pi)$: concavità rivolta verso l'alto;
- $S''(x) < 0$ per $x \in (\pi,\,2\pi)$: concavità rivolta verso il basso;
- punto di flesso in $x = \pi$, con ordinata $S(\pi) = \dfrac{\pi}{2}$.

Il grafico è una curva crescente, con flesso a tangente obliqua nel punto $\left(\pi,\ \dfrac{\pi}{2}\right)$ e tangenti orizzontali agli estremi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="273.01" height="161.564" viewBox="-72 -72 204.757 121.173"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-67.027 35.593h186.533"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M117.626 33.193c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.345" y="35.593" stroke="none" font-family="cmmi10" font-size="10" transform="translate(182.784 2.153)">x</text><path fill="none" d="M-59.345 43.275v-102.03"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.745-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-59.345" y="35.593" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -100.224)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-59.345 35.593h1.625l1.625-.004 1.625-.011 1.625-.02 1.625-.033 1.625-.05 1.625-.068 1.626-.09 1.625-.115 1.625-.144 1.625-.174 1.625-.207 1.625-.243 1.625-.28 1.625-.32 1.625-.363 1.625-.406 1.625-.452 1.625-.499 1.625-.547 1.626-.595 1.625-.646 1.625-.697 1.625-.749 1.625-.799 1.625-.851 1.625-.903 1.625-.953 1.625-1.004 1.625-1.053 1.625-1.103 1.625-1.15 1.625-1.196 1.625-1.24 1.626-1.284 1.625-1.325 1.625-1.364 1.625-1.4 1.625-1.435 1.625-1.466 1.625-1.496 1.625-1.522 1.625-1.547 1.625-1.566 1.625-1.584 1.625-1.6 1.625-1.61 1.625-1.618 1.626-1.623 1.625-1.624 1.625-1.624 1.625-1.618 1.625-1.61 1.625-1.6 1.625-1.584 1.625-1.567 1.625-1.546 1.625-1.523 1.625-1.495 1.625-1.467 1.625-1.435 1.625-1.401 1.626-1.364 1.625-1.325 1.625-1.284 1.625-1.242 1.625-1.195 1.625-1.15 1.625-1.104 1.625-1.053 1.625-1.005 1.625-.954 1.625-.902 1.625-.853 1.625-.799 1.625-.749 1.626-.697 1.625-.646 1.625-.597 1.625-.547 1.625-.499 1.625-.452 1.625-.406 1.625-.363 1.625-.321 1.625-.28 1.625-.244 1.625-.208 1.625-.174 1.625-.143 1.626-.116 1.625-.09 1.625-.07 1.625-.048 1.625-.033 1.625-.02 1.625-.011 1.625-.004h1.625"/><path stroke="none" d="M22.453-4.631a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-59.345" y="35.593" stroke="none" font-family="cmr10" font-size="10" transform="translate(54.026 -43.757)">°esso</text><path fill="none" stroke-dasharray="3.0,3.0" d="M101.55 35.593v-80.448"/><text x="-59.345" y="35.593" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.418 7.839)">¼</text><g stroke="none" font-size="10"><text x="-59.345" y="35.593" font-family="cmr10" transform="translate(155.366 9.977)">2</text><text x="-54.345" y="35.593" font-family="cmmi10" transform="translate(155.366 9.977)">¼</text></g><text x="-59.345" y="35.593" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-9.592 -78.295)">¼</text></g></svg>
</figure>

## c)

Si impone che l'area del settore valga $100\ \text{m}^2$:
$$\frac{1}{2}r^2 x = 100 \;\Rightarrow\; r^2 x = 200.$$

Il perimetro del settore è dato dai due raggi e dall'arco (di lunghezza $rx$):
$$P = 2r + rx.$$

**Metodo elementare (disuguaglianza tra media aritmetica e geometrica).** Il prodotto dei due addendi è costante:
$$(2r)(rx) = 2\,r^2 x = 2 \cdot 200 = 400.$$
Quindi
$$P = 2r + rx \ge 2\sqrt{(2r)(rx)} = 2\sqrt{400} = 40,$$
con uguaglianza se e solo se $2r = rx$, cioè $x = 2$ rad. Sostituendo in $r^2 x = 200$:
$$2\,r^2 = 200 \;\Rightarrow\; r = 10\ \text{m}.$$

**Metodo delle derivate.** Da $r^2 x = 200$ si ricava $x = \dfrac{200}{r^2}$, da cui
$$P(r) = 2r + \frac{200}{r}, \qquad P'(r) = 2 - \frac{200}{r^2}.$$
$$P'(r) = 0 \;\Rightarrow\; r^2 = 100 \;\Rightarrow\; r = 10\ \text{m},$$
minimo perché $P''(r) = \dfrac{400}{r^3} > 0$. Il perimetro minimo vale $P(10) = 40\ \text{m}$.

L'angolo corrispondente è $x = \dfrac{200}{100} = 2$ rad; in gradi sessagesimali
$$x^\circ = \frac{2 \cdot 180^\circ}{\pi} \approx 114{,}6^\circ \approx 115^\circ.$$

## d)

Si pone $r = 2$ e $x = \dfrac{\pi}{3}$. Si dispone il settore nel piano $Oxy$ con il raggio $OB$ lungo l'asse $x$:
$$O = (0,\,0), \qquad B = (2,\,0), \qquad A = \left(2\cos\frac{\pi}{3},\ 2\sin\frac{\pi}{3}\right) = (1,\ \sqrt{3}).$$

Il raggio $OA$ giace sulla retta $y = \sqrt{3}\,x$; l'arco appartiene alla circonferenza $x^2 + y^2 = 4$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="145.855" height="128.52" viewBox="-72 -72 109.392 96.39"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="M-57.499 10.42H22.17a79.68 79.68 0 0 0-39.834-68.993Z"/><path fill="none" stroke-width=".8" d="M-57.499 10.42H22.17M22.169 10.42a79.68 79.68 0 0 0-39.834-68.993M-57.499 10.42l39.834-68.99"/><text x="-57.499" y="10.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><text x="-57.499" y="10.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.2 10.366)">B</text><text x="-57.499" y="10.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.084 -72.525)">A</text><g stroke="none"><text x="-56.299" y="6.484" font-family="cmmi7" font-size="7" transform="translate(34.178 -13.386)">¼</text><path d="M-22.12-5.665h4.926v.4h-4.927z"/><text x="-55.828" y="13.869" font-family="cmr7" font-size="7" transform="translate(34.178 -13.386)">3</text></g></g></svg>
</figure>

Le sezioni del solido $W$ sono ottenute con **piani ortogonali a $OB$**, cioè piani $x = \text{cost}$. Per ogni tale piano il quadrato ha per lato l'altezza $h(x)$ del settore in corrispondenza dell'ascissa $x$:

- per $x \in [0,\,1]$ il bordo superiore è il raggio $OA$, quindi $h(x) = \sqrt{3}\,x$;
- per $x \in [1,\,2]$ il bordo superiore è l'arco, quindi $h(x) = \sqrt{4 - x^2}$.

Il volume è la somma degli integrali delle aree dei quadrati $h(x)^2$:
$$V = \int_0^{1} \big(\sqrt{3}\,x\big)^2\,dx + \int_1^{2} \big(\sqrt{4 - x^2}\big)^2\,dx = \int_0^{1} 3x^2\,dx + \int_1^{2} \big(4 - x^2\big)\,dx.$$

**Primo integrale:**
$$\int_0^{1} 3x^2\,dx = \big[x^3\big]_0^{1} = 1.$$

**Secondo integrale:**
$$\int_1^{2} \big(4 - x^2\big)\,dx = \left[4x - \frac{x^3}{3}\right]_1^{2} = \left(8 - \frac{8}{3}\right) - \left(4 - \frac{1}{3}\right) = \frac{16}{3} - \frac{11}{3} = \frac{5}{3}.$$

**Volume:**
$$V = 1 + \frac{5}{3} = \frac{8}{3}.$$

---

*Fonte:* [📄 PDF p.4](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
