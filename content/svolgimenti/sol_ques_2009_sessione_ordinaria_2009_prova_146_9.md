

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_9|2009 Sessione Ordinaria PNI — Prova — Quesito 9]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Nei *Discorsi e dimostrazioni matematiche intorno a due nuove scienze* Galileo considera una semisfera di raggio $r$ e il cilindro ad essa circoscritto (dunque di raggio $r$ e altezza $r$). La **scodella** è il solido che si ottiene togliendo la semisfera dal cilindro. Si vuole dimostrare, con il principio di Cavalieri, che la scodella ha lo stesso volume del cono di vertice $V$ in figura, cioè il cono avente per base il cerchio superiore del cilindro e per vertice il centro della faccia piana della semisfera.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="243.071" height="127.108" viewBox="-72 -72 182.303 95.331"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-52.438-56.19H78.444V9.25H-52.438Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-52.438-56.19c0 36.142 29.299 65.44 65.441 65.44s65.441-29.298 65.441-65.44"/><path fill="none" stroke="red" stroke-width=".8" d="m13.003-56.19-65.44 65.44M13.003-56.19 78.444 9.25"/><path fill="none" stroke-dasharray="3.0,3.0" d="M13.003-69.279v91.617M-72.07-23.47H98.077"/><text x="13.003" y="-56.191" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.606 34.873)">z</text><path stroke="none" d="M14.728-56.19a1.725 1.725 0 1 0-3.45 0 1.725 1.725 0 0 0 3.45 0m-1.725 0"/><g stroke="none" font-size="10"><text x="13.003" y="-56.191" font-family="cmmi10" transform="translate(-14.647 -3.533)">V</text><text x="23.837" y="-56.191" font-family="cmr10" transform="translate(-14.647 -3.533)">=</text><text x="34.392" y="-56.191" font-family="cmmi10" transform="translate(-14.647 -3.533)">O</text></g><g fill="#00f" stroke="#00f"><text x="13.003" y="-56.191" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(-19.93 75.918)">semisfera</text></g><g fill="red" stroke="red"><text x="13.003" y="-56.191" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(32.537 54.506)">cono</text></g><path fill="none" d="M-52.038-61.099h64.641"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-50.158-58.699c-.38-1.44-1.226-2.12-2.08-2.4.854-.28 1.7-.96 2.08-2.4M10.723-63.498c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="13.003" y="-56.191" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-35.115 -8.44)">r</text><path fill="none" d="M86.624-55.79V8.85"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M84.224-53.91c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08M89.024 6.97c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08"/><text x="13.003" y="-56.191" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.154 34.873)">r</text></g></svg>
</figure>

## Impostazione

Disponiamo la semisfera con la faccia piana in alto e scegliamo come piano di riferimento quello che contiene tale faccia. Indichiamo con $z$ la distanza (con $0 \le z \le r$) di un generico piano orizzontale da questo piano superiore. Tutti i solidi in gioco — cilindro, semisfera, scodella e cono — hanno la stessa estensione verticale, da $z=0$ a $z=r$: per applicare il principio di Cavalieri basta confrontare le aree delle sezioni ottenute con uno stesso piano orizzontale.

## Sezione della scodella

Il piano posto a distanza $z$ taglia il cilindro secondo un cerchio di raggio $r$, di area
$$ \pi r^2 . $$

Lo stesso piano taglia la semisfera secondo un cerchio il cui raggio $\rho$ soddisfa, per il teorema di Pitagora applicato al triangolo formato da raggio della sfera, quota $z$ e raggio della sezione,
$$ \rho^2 = r^2 - z^2 , $$
sicché la sezione della semisfera ha area $\pi\,(r^2 - z^2)$.

La sezione della scodella è la parte di cilindro esterna alla semisfera, cioè la **corona circolare** compresa tra i due cerchi precedenti. La sua area è
$$ \pi r^2 - \pi\,(r^2 - z^2) = \pi z^2 . $$

## Sezione del cono

Il cono ha vertice $V$ nel centro della faccia piana (quota $z=0$) e base di raggio $r$ sul piano inferiore (quota $z=r$); il suo asse è verticale. Poiché il raggio della sezione cresce linearmente con la quota, passando da $0$ in $V$ a $r$ alla base, alla quota $z$ la sezione è un cerchio di raggio $z$, di area
$$ \pi z^2 . $$

## Conclusione (principio di Cavalieri)

Per ogni valore di $z$ con $0 \le z \le r$ la sezione della scodella e quella del cono hanno la **stessa area** $\pi z^2$. Due solidi con uguale altezza le cui sezioni piane, tagliate da uno stesso piano, sono equivalenti hanno lo stesso volume: per il principio di Cavalieri la scodella e il cono hanno dunque volume uguale.

Il valore comune si calcola subito dal cono:
$$ V_{\text{scodella}} = V_{\text{cono}} = \frac{1}{3}\,\pi r^2 \cdot r = \frac{1}{3}\,\pi r^3 . $$

Come verifica, il volume della scodella è anche
$$ V_{\text{cilindro}} - V_{\text{semisfera}} = \pi r^2 \cdot r - \frac{2}{3}\,\pi r^3 = \frac{1}{3}\,\pi r^3 , $$
in accordo con il risultato ottenuto.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
