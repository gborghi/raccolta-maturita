

**Quesito:** [[Quesiti/ques_2008_estero_australe_2008_sessione_ordinaria_questionario_45_5|2008 Estero Australe Ordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2008_estero_australe_2008_sessione_ordinaria_questionario_45|2008 Estero Australe Ordinaria — Questionario]]

Quanti sono i numeri di quattro cifre (distinte tra loro) che è possibile scrivere utilizzando le cifre dispari?

## Impostazione

Le cifre dispari a disposizione sono cinque:
$$\{1,\ 3,\ 5,\ 7,\ 9\}.$$

Dobbiamo formare numeri di quattro cifre **tutte distinte** scegliendo tra queste cinque cifre. Poiché conta l'ordine con cui le cifre occupano le quattro posizioni (il numero $1357$ è diverso da $7531$) e ogni cifra può comparire al più una volta, si tratta di contare le **disposizioni semplici** di $5$ oggetti presi a gruppi di $4$.

## Calcolo

La formula delle disposizioni semplici di $n$ oggetti a $k$ a $k$ è
$$D_{n,k} = n\,(n-1)\,(n-2)\cdots(n-k+1),$$
prodotto di $k$ fattori decrescenti a partire da $n$.

Nel nostro caso $n=5$ e $k=4$:
$$D_{5,4} = 5 \cdot 4 \cdot 3 \cdot 2 = 120.$$

Si può ragionare anche direttamente sulle posizioni: la prima cifra può essere scelta in $5$ modi, la seconda in $4$ modi (esclusa quella già usata), la terza in $3$ modi e la quarta in $2$ modi, per un totale di $5\cdot4\cdot3\cdot2 = 120$ numeri. Nessuna posizione richiede accorgimenti particolari, perché nessuna delle cifre disponibili è $0$: ogni disposizione fornisce quindi un numero valido di quattro cifre.

## Conclusione

I numeri di quattro cifre distinte formati con le cifre dispari sono
$$\boxed{D_{5,4} = 5 \cdot 4 \cdot 3 \cdot 2 = 120.}$$

*Fonte:* [📄 PDF p.47](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
