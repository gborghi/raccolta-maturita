

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_63_5|2009 Sessione Ordinaria Estero Europa — Prova — Quesito 5]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_63|2009 Sessione Ordinaria Estero Europa — Prova]]

Si determini il luogo $\gamma$ dei punti di intersezione delle due rette

$$\lambda x - y - (\lambda + 2) = 0, \qquad (1 - \lambda)x + y + 2 = 0,$$

al variare del parametro reale $\lambda$, e se ne disegni la curva.

## Eliminazione del parametro

Per ogni valore di $\lambda$ le due rette hanno coefficienti angolari

$$m_1 = \lambda, \qquad m_2 = \lambda - 1,$$

che sono sempre diversi tra loro: le due rette non sono mai parallele e quindi si incontrano sempre in un unico punto. Il luogo $\gamma$ si ottiene eliminando $\lambda$ dal sistema

$$\begin{cases} \lambda x - y - (\lambda + 2) = 0 \\ (1 - \lambda)x + y + 2 = 0 \end{cases}$$

Sommando membro a membro le due equazioni, i termini in $y$ si elidono e si ottiene

$$\lambda x - (\lambda + 2) + (1 - \lambda)x + 2 = 0 \;\Rightarrow\; x - \lambda = 0,$$

cioè $\lambda = x$. Sostituendo questo valore nella seconda equazione:

$$(1 - x)x + y + 2 = 0 \;\Rightarrow\; y = x^2 - x - 2.$$

## La curva $\gamma$

Il luogo è dunque la **parabola** di equazione

$$y = x^2 - x - 2.$$

Poiché al variare di $\lambda \in \mathbb{R}$ il punto di intersezione è

$$\big(\lambda,\; \lambda^2 - \lambda - 2\big),$$

e $x = \lambda$ assume ogni valore reale, la parabola viene descritta **per intero**: nessun punto va escluso. In particolare, per $\lambda = 1$ si ottiene il punto $(1, -2)$, che quindi appartiene al luogo.

Le caratteristiche della parabola sono:

- vertice $V = \left(\dfrac{1}{2},\, -\dfrac{9}{4}\right)$ (poiché $x_V = -\dfrac{b}{2a} = \dfrac{1}{2}$);
- intersezioni con l'asse $x$: da $x^2 - x - 2 = (x-2)(x+1) = 0$ si ha $x = 2$ e $x = -1$, cioè i punti $(2, 0)$ e $(-1, 0)$;
- intersezione con l'asse $y$: il punto $(0, -2)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="229.49" height="321.252" viewBox="-72 -72 172.117 240.939"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 100.182H86.866"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M84.986 97.782c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-3.783" y="100.182" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.582 2.153)">x</text><path fill="none" d="M-3.783 168.469V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.183-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.783" y="100.182" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -164.813)">y</text><path fill="none" d="M-49.308 98.36v3.643"/><g stroke="none" font-size="8"><text x="-3.783" y="100.182" font-family="cmsy8" transform="translate(-50.955 10.51)">¡</text><text x="2.828" y="100.182" font-family="cmr8" transform="translate(-50.955 10.51)">2</text></g><path fill="none" d="M-26.545 98.36v3.643"/><g stroke="none" font-size="8"><text x="-3.783" y="100.182" font-family="cmsy8" transform="translate(-28.193 10.51)">¡</text><text x="2.828" y="100.182" font-family="cmr8" transform="translate(-28.193 10.51)">1</text></g><path fill="none" d="M18.98 98.36v3.643"/><text x="-3.783" y="100.182" stroke="none" font-family="cmr8" font-size="8" transform="translate(20.637 10.51)">1</text><path fill="none" d="M41.741 98.36v3.643"/><text x="-3.783" y="100.182" stroke="none" font-family="cmr8" font-size="8" transform="translate(43.4 10.51)">2</text><path fill="none" d="M64.504 98.36v3.643"/><text x="-3.783" y="100.182" stroke="none" font-family="cmr8" font-size="8" transform="translate(66.162 10.51)">3</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-56.136-27.06 2.16 11.894 2.16 11.482 2.16 11.073 2.161 10.663 2.16 10.253 2.16 9.842 2.161 9.433 2.16 9.022 2.16 8.613 2.161 8.202 2.16 7.792 2.16 7.382 2.161 6.972 2.16 6.562 2.16 6.152 2.161 5.742 2.16 5.332 2.161 4.921 2.16 4.512 2.16 4.102 2.161 3.691 2.16 3.281 2.16 2.872 2.161 2.46 2.16 2.052 2.16 1.641 2.161 1.231 2.16.82 2.16.412h2.161l2.16-.41 2.161-.819 2.16-1.23 2.16-1.638 2.161-2.05 2.16-2.46 2.16-2.87 2.161-3.28 2.16-3.69 2.16-4.1 2.161-4.51 2.16-4.92 2.161-5.33 2.16-5.74 2.16-6.151 2.161-6.56 2.16-6.971 2.16-7.381 2.161-7.79 2.16-8.202 2.16-8.61 2.161-9.021 2.16-9.432 2.161-9.84 2.16-10.252 2.16-10.661 2.161-11.072 2.16-11.481 2.16-11.892"/><path stroke="none" d="M9.198 151.397a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-3.783" y="100.182" stroke="none" font-family="cmmi10" font-size="10" transform="translate(14.914 61.581)">V</text><path stroke="none" d="M42.941 100.182a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><g stroke="none" font-size="8"><text x="-3.783" y="100.182" font-family="cmr8" transform="translate(49.058 -5.533)">(2</text><text x="3.772" y="100.182" font-family="cmmi8" transform="translate(49.058 -5.533)">;</text><text x="7.55" y="100.182" font-family="cmr8" transform="translate(49.058 -5.533)">0)</text></g><path stroke="none" d="M-25.345 100.182a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><g stroke="none" font-size="8"><text x="-3.783" y="100.182" font-family="cmr8" transform="translate(-51.796 -5.533)">(</text><text x="-.478" y="100.182" font-family="cmsy8" transform="translate(-51.796 -5.533)">¡</text><text x="6.134" y="100.182" font-family="cmr8" transform="translate(-51.796 -5.533)">1</text><text x="10.384" y="100.182" font-family="cmmi8" transform="translate(-51.796 -5.533)">;</text><text x="14.162" y="100.182" font-family="cmr8" transform="translate(-51.796 -5.533)">0)</text></g><path stroke="none" d="M-2.583 145.706a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><g stroke="none" font-size="8"><text x="-3.783" y="100.182" font-family="cmr8" transform="translate(-29.033 47.525)">(0</text><text x="3.772" y="100.182" font-family="cmmi8" transform="translate(-29.033 47.525)">;</text><text x="7.55" y="100.182" font-family="cmsy8" transform="translate(-29.033 47.525)">¡</text><text x="14.162" y="100.182" font-family="cmr8" transform="translate(-29.033 47.525)">2)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.77](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
