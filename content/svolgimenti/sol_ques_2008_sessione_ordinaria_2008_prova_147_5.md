

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_5|2008 Ordinaria — Prova (PNI Informatica) — Quesito 5]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Nel piano cartesiano si vuole determinare l'insieme $D$ dei punti $(x,y)$ per i quali risulta $y^2-x^3>0$, cioè $y^2>x^3$.

## Analisi della disequazione

La curva di frontiera è $y^2=x^3$, la **parabola semicubica** (o parabola di Neile), che presenta una cuspide nell'origine e si sviluppa solo nel semipiano $x\ge 0$: infatti da $y^2=x^3$ segue $x^3=y^2\ge 0$, quindi $x\ge 0$. Conviene discutere la disequazione $y^2>x^3$ distinguendo il segno di $x$.

## a) Caso $x<0$

Se $x<0$ allora $x^3<0$, mentre $y^2\ge 0$ per ogni $y$. Dunque
$$y^2-x^3\ge 0-x^3>0,$$
e la disequazione è **sempre verificata**. L'intero semipiano $x<0$ appartiene a $D$.

## b) Caso $x=0$

La disequazione diventa $y^2>0$, verificata per ogni $y\neq 0$. Appartiene quindi a $D$ tutto l'asse $y$ **privato dell'origine**.

## c) Caso $x>0$

Con $x>0$ si ha $x^{3}>0$ e possiamo scrivere
$$y^2>x^3 \iff |y|>\sqrt{x^3}=x\sqrt{x}=x^{3/2}.$$
Questo equivale a
$$y>x^{3/2}\qquad\text{oppure}\qquad y<-x^{3/2}.$$
I punti di $D$ con $x>0$ sono quelli che stanno **al di sopra del ramo superiore** $y=x^{3/2}$ oppure **al di sotto del ramo inferiore** $y=-x^{3/2}$ della curva.

## Conclusione

Riunendo i tre casi, l'insieme cercato è
$$D=\{(x,y)\in\mathbb{R}^2 : y^2>x^3\},$$
cioè: tutto il semipiano $x<0$, l'asse $y$ privato dell'origine e, per $x>0$, la regione esterna ai due rami della parabola semicubica $y=\pm x^{3/2}$.

Equivalentemente, $D$ è il piano privato della regione chiusa
$$\{(x,y): x\ge 0,\ |y|\le x^{3/2}\}$$
racchiusa dalla curva $y^2=x^3$ e contenente il semiasse positivo delle $x$. La curva di frontiera $y^2=x^3$ (disegnata in blu) è esclusa, perché la disuguaglianza è stretta.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="225.695" height="351.6" viewBox="-72 -72 169.271 263.7"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 66.038H84.02"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M82.14 63.638c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="1.907" y="66.038" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.046 2.153)">x</text><path fill="none" d="M1.907 191.23V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-.493-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="1.907" y="66.038" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -130.67)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m1.907 66.038 1.205-.25 1.206-.456 1.205-.631 1.205-.66 1.205-.778 1.206-.87 1.205-.949 1.205-1.018 1.205-1.085 1.205-1.147 1.206-1.206 1.205-1.264 1.205-1.315 1.205-1.368 1.205-1.415 1.206-1.466 1.205-1.51 1.205-1.557 1.205-1.6 1.206-1.642 1.205-1.685 1.205-1.727 1.205-1.762 1.205-1.802 1.206-1.842 1.205-1.878 1.205-1.915 1.205-1.951 1.205-1.986 1.206-2.02 1.205-2.054 1.205-2.088 1.205-2.122 1.206-2.154 1.205-2.18 1.205-2.221L46.5 10.22l1.205-2.275 1.206-2.314 1.205-2.333L51.32.922l1.205-2.39 1.205-2.416 1.206-2.466 1.205-2.475 1.205-2.502 1.205-2.545 1.205-2.573 1.206-2.588 1.205-2.623 1.205-2.64 1.205-2.67 1.206-2.7 1.205-2.716 1.205-2.75 1.205-2.772 1.205-2.794 1.206-2.823 1.205-2.846M1.907 66.038l1.205.25 1.206.455 1.205.632 1.205.66 1.205.777 1.206.871 1.205.948 1.205 1.019 1.205 1.084 1.205 1.147 1.206 1.207 1.205 1.263 1.205 1.315 1.205 1.37 1.205 1.414 1.206 1.465 1.205 1.512 1.205 1.556 1.205 1.6 1.206 1.642 1.205 1.684 1.205 1.728 1.205 1.762 1.205 1.802 1.206 1.842 1.205 1.877 1.205 1.915 1.205 1.952 1.205 1.986 1.206 2.02 1.205 2.053 1.205 2.089 1.205 2.121 1.206 2.154 1.205 2.18 1.205 2.222 1.205 2.244 1.205 2.275 1.206 2.314 1.205 2.333 1.205 2.376 1.205 2.389 1.205 2.417 1.206 2.466 1.205 2.475 1.205 2.502 1.205 2.544 1.205 2.574 1.206 2.588 1.205 2.622 1.205 2.64 1.205 2.67 1.206 2.7 1.205 2.717 1.205 2.75 1.205 2.772 1.205 2.793 1.206 2.824 1.205 2.846"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="1.907" y="66.038" font-family="cmmi10" font-size="10" transform="translate(54.49 -107.868)">y</text><text x="7.169" y="62.409" font-family="cmr7" font-size="7" transform="translate(54.49 -107.868)">2</text><text x="14.433" y="66.038" font-family="cmr10" font-size="10" transform="translate(54.49 -107.868)">=</text><text x="24.988" y="66.038" font-family="cmmi10" font-size="10" transform="translate(54.49 -107.868)">x</text><text x="30.704" y="62.409" font-family="cmr7" font-size="7" transform="translate(54.49 -107.868)">3</text></g></g><g stroke="none"><text x="1.907" y="66.038" font-family="cmmi10" font-size="10" transform="translate(27.46 3.098)">y</text><text x="7.169" y="62.409" font-family="cmr7" font-size="7" transform="translate(27.46 3.098)">2</text><text x="14.433" y="66.038" font-family="cmsy10" font-size="10" transform="translate(27.46 3.098)">∙</text><text x="24.988" y="66.038" font-family="cmmi10" font-size="10" transform="translate(27.46 3.098)">x</text><text x="30.704" y="62.409" font-family="cmr7" font-size="7" transform="translate(27.46 3.098)">3</text></g><g stroke="none"><text x="1.907" y="66.038" font-family="cmmi10" font-size="10" transform="translate(-55.053 -70.88)">y</text><text x="7.169" y="62.409" font-family="cmr7" font-size="7" transform="translate(-55.053 -70.88)">2</text><text x="14.433" y="66.038" font-family="cmmi10" font-size="10" transform="translate(-55.053 -70.88)">&gt;</text><text x="24.988" y="66.038" font-family="cmmi10" font-size="10" transform="translate(-55.053 -70.88)">x</text><text x="30.704" y="62.409" font-family="cmr7" font-size="7" transform="translate(-55.053 -70.88)">3</text></g><g stroke="none"><text x="1.907" y="66.038" font-family="cmmi10" font-size="10" transform="translate(17.502 -87.95)">y</text><text x="7.169" y="62.409" font-family="cmr7" font-size="7" transform="translate(17.502 -87.95)">2</text><text x="14.433" y="66.038" font-family="cmmi10" font-size="10" transform="translate(17.502 -87.95)">&gt;</text><text x="24.988" y="66.038" font-family="cmmi10" font-size="10" transform="translate(17.502 -87.95)">x</text><text x="30.704" y="62.409" font-family="cmr7" font-size="7" transform="translate(17.502 -87.95)">3</text></g><path stroke="none" d="M3.507 66.038a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
