

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78_3|2005 Europa Ordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78|2005 Europa Ordinaria — Questionario]]

Un recipiente a forma di parallelepipedo a base quadrata contiene $1000$ litri di liquido: se ne cerchino le dimensioni che rendono minima la superficie totale.

Poiché $1000$ litri equivalgono a $1000$ decimetri cubi, cioè a $1$ metro cubo, il problema consiste nel determinare il parallelepipedo a base quadrata di volume assegnato $V = 1 \ \text{m}^3$ avente superficie totale minima.

Indichiamo con $l$ lo spigolo di base e con $h$ l'altezza (misurati in metri). Dal vincolo sul volume si ha

$$V = l^2 h = 1 \quad\Rightarrow\quad h = \frac{1}{l^2}.$$

La superficie totale (due basi quadrate più quattro facce laterali) è

$$S(l) = 2l^2 + 4lh = 2l^2 + 4l\cdot\frac{1}{l^2} = 2l^2 + \frac{4}{l}, \qquad l > 0.$$

Studiamo la monotonia di $S(l)$ tramite la derivata prima:

$$S'(l) = 4l - \frac{4}{l^2} = \frac{4\,(l^3 - 1)}{l^2}.$$

Essendo $l > 0$, il segno di $S'(l)$ coincide con quello di $l^3 - 1$:

$$S'(l) \ge 0 \iff l^3 \ge 1 \iff l \ge 1.$$

Dunque $S(l)$ è decrescente per $0 < l < 1$ e crescente per $l > 1$: in $l = 1$ la superficie presenta un minimo assoluto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="272.414" height="283.318" viewBox="-72 -72 204.31 212.488"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-60.104 124.56h181.698"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M119.714 122.16c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.104" y="124.561" stroke="none" font-family="cmmi10" font-size="10" transform="translate(185.63 3.472)">l</text><path fill="none" d="M-60.104 124.56V-55.003"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-62.504-53.124c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><g stroke="none" font-size="10"><text x="-60.104" y="124.561" font-family="cmmi10" transform="translate(-8.833 -185.998)">S</text><text x="-53.395" y="124.561" font-family="cmr10" transform="translate(-8.833 -185.998)">(</text><text x="-49.506" y="124.561" font-family="cmmi10" transform="translate(-8.833 -185.998)">l</text><text x="-46.326" y="124.561" font-family="cmr10" transform="translate(-8.833 -185.998)">)</text></g><path fill="none" d="M-14.58 122.213v4.695"/><g stroke="none" font-size="10"><text x="-60.104" y="124.561" font-family="cmr10" transform="translate(39.135 12.325)">0</text><text x="-55.104" y="124.561" font-family="cmmi10" transform="translate(39.135 12.325)">:</text><text x="-52.326" y="124.561" font-family="cmr10" transform="translate(39.135 12.325)">5</text></g><path fill="none" d="M30.945 122.213v4.695"/><text x="-60.104" y="124.561" stroke="none" font-family="cmr10" font-size="10" transform="translate(88.549 12.325)">1</text><path fill="none" d="M76.47 122.213v4.695"/><g stroke="none" font-size="10"><text x="-60.104" y="124.561" font-family="cmr10" transform="translate(130.184 12.325)">1</text><text x="-55.104" y="124.561" font-family="cmmi10" transform="translate(130.184 12.325)">:</text><text x="-52.326" y="124.561" font-family="cmr10" transform="translate(130.184 12.325)">5</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-19.132-20.882 2.082 6.07 2.083 5.418 2.083 4.831 2.082 4.338 2.083 3.891 2.082 3.496 2.083 3.144 2.082 2.816 2.083 2.527 2.082 2.264 2.083 2.016 2.083 1.797 2.082 1.595 2.083 1.4 2.082 1.229 2.083 1.058 2.082.906 2.083.768 2.082.628 2.083.502 2.082.38 2.083.268 2.083.153 2.082.057 2.083-.047 2.082-.138 2.083-.229 2.082-.316 2.083-.396 2.082-.48 2.083-.555 2.083-.63 2.082-.704 2.083-.774 2.082-.84 2.083-.909 2.082-.972 2.083-1.036 2.082-1.096 2.083-1.155 2.082-1.215 2.083-1.273 2.083-1.327 2.082-1.383 2.083-1.437 2.082-1.492 2.083-1.542L80.83 9.13l2.083-1.642 2.082-1.694 2.083-1.741 2.083-1.791L91.243.424l2.083-1.886 2.082-1.932 2.083-1.978 2.082-2.022 2.083-2.067 2.082-2.113"/><path fill="none" stroke-dasharray="3.0,3.0" d="M30.945 124.56V30.667"/><path stroke="none" d="M36.065 30.666c0-.486-2.292-.88-5.12-.88s-5.12.394-5.12.88 2.292.88 5.12.88 5.12-.394 5.12-.88m-5.12 0"/><g stroke="none" font-size="10"><text x="-60.104" y="124.561" font-family="cmr10" transform="translate(94.582 -99.928)">(1</text><text x="-51.215" y="124.561" font-family="cmmi10" transform="translate(94.582 -99.928)">;</text><text x="-45.104" y="124.561" font-family="cmr10" transform="translate(94.582 -99.928)">6)</text></g></g></svg>
</figure>

Per $l = 1 \ \text{m}$ risulta

$$h = \frac{1}{l^2} = 1 \ \text{m},$$

cioè il recipiente di superficie minima è il **cubo di spigolo $1$ metro**. La superficie totale minima vale

$$S(1) = 2\cdot 1^2 + \frac{4}{1} = 6 \ \text{m}^2.$$

*Fonte:* [📄 PDF p.79](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
