

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_s_questionario_37_5|2005 Americhe Suppletiva — Questionario — Quesito 5]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_s_questionario_37|2005 Americhe Suppletiva — Questionario]]

Si vuole dimostrare la seguente proprietà: *se due numeri reali positivi variano in modo che il loro prodotto si mantenga costante, allora la loro somma è minima quando essi sono uguali.*

Siano $x>0$ e $y>0$ i due numeri, con prodotto costante $xy=k$ (con $k>0$).

## a) Dimostrazione elementare

Partiamo dall'identità
$$(x+y)^2=(x-y)^2+4xy.$$

Poiché il prodotto è costante, $4xy=4k$ è una quantità fissa. Nel secondo membro l'unico addendo variabile è $(x-y)^2$, che è sempre non negativo:
$$(x-y)^2\ge 0.$$

Di conseguenza $(x+y)^2$ è minimo quando $(x-y)^2=0$, cioè quando $x=y$. Essendo $x+y>0$, anche la somma $x+y$ è minima proprio in tale caso. La somma è dunque minima quando i due numeri sono uguali.

## b) Dimostrazione analitica

Poniamo $s=x+y$. Dalla condizione $xy=k$ ricaviamo $y=\dfrac{k}{x}$, quindi la somma è funzione della sola variabile $x$:
$$s(x)=x+\frac{k}{x},\qquad x>0.$$

Calcoliamo la derivata prima:
$$s'(x)=1-\frac{k}{x^2}=\frac{x^2-k}{x^2}.$$

Studiamo il segno di $s'(x)$. Essendo $x^2>0$, il segno dipende dal numeratore:
$$s'(x)\ge 0 \iff x^2\ge k \iff x\ge \sqrt{k}.$$

Dunque $s$ è decrescente per $0<x<\sqrt{k}$ e crescente per $x>\sqrt{k}$: il punto $x=\sqrt{k}$ è un punto di minimo relativo, che è anche assoluto.

Sostituendo $x=\sqrt{k}$ nella condizione $xy=k$ otteniamo
$$y=\frac{k}{\sqrt{k}}=\sqrt{k}=x.$$

Il valore minimo della somma è
$$s(\sqrt{k})=\sqrt{k}+\frac{k}{\sqrt{k}}=2\sqrt{k}.$$

La somma è quindi minima quando i due numeri sono uguali, come mostra il grafico di $s(x)=x+\dfrac{k}{x}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="208.887" height="245.053" viewBox="-72 -72 156.665 183.79"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-53.947 94.254h125.36"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M69.534 91.854c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-46.55" y="94.254" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.897 2.153)">x</text><path fill="none" d="M-46.55 101.651v-162.35"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-48.95-58.819c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-46.55" y="94.254" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 -158.885)">s</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-36.193-48.21 1.705 16.976 1.705 12.338 1.705 9.25 1.705 7.074 1.705 5.478 1.705 4.3 1.705 3.379 1.705 2.656 1.705 2.077 1.706 1.61 1.705 1.217 1.705.896 1.705.622 1.705.393 1.705.193 1.705.022 1.705-.133 1.705-.259 1.705-.377 1.705-.477 1.705-.57 1.705-.65 1.705-.721 1.705-.788 1.705-.844 1.705-.902 1.706-.947 1.705-.995 1.705-1.031 1.705-1.073 1.705-1.106 1.705-1.139 1.705-1.165 1.705-1.191 1.705-1.217 1.705-1.239 1.705-1.265L28.6.9 30.304-.4l1.705-1.32 1.705-1.336 1.705-1.35 1.705-1.367L38.83-7.15l1.705-1.392 1.705-1.402 1.705-1.415 1.705-1.425 1.705-1.435 1.705-1.447 1.705-1.454 1.705-1.464 1.705-1.469 1.705-1.48 1.705-1.488 1.705-1.492 1.705-1.499 1.705-1.507 1.705-1.512"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-9.561 94.254V20.276M-46.55 20.276H-9.56"/><path stroke="none" d="M-7.611 20.276a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><g stroke="none"><text x="-46.55" y="85.731" font-family="cmsy10" font-size="10" transform="translate(30.062 12.855)">p</text><path d="M-8.154 98.187h5.52v.4h-5.52z"/><text x="-38.216" y="94.254" font-family="cmmi10" font-size="10" transform="translate(30.062 12.855)">k</text></g><g stroke="none"><text x="-46.55" y="94.254" font-family="cmr10" font-size="10" transform="translate(-22.387 -69.855)">2</text><text x="-41.55" y="85.731" font-family="cmsy10" font-size="10" transform="translate(-22.387 -69.855)">p</text><path d="M-55.603 15.477h5.52v.4h-5.52z"/><text x="-33.216" y="94.254" font-family="cmmi10" font-size="10" transform="translate(-22.387 -69.855)">k</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.39](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
