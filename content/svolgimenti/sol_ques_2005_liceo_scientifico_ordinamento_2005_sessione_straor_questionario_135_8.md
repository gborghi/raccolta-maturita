

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_8|2005 Ordinamento Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Sia $f(x)$ una funzione continua per ogni $x$ reale tale che
$$\int_0^2 f(x)\,dx = 4.$$
Dei due integrali
$$\int_0^1 f(2x)\,dx \qquad \text{e} \qquad \int_0^1 f\!\left(\tfrac{x}{2}\right)dx,$$
in base alle sole informazioni fornite se ne può calcolare uno solo. Stabiliamo quale e spieghiamone la ragione.

## Primo integrale: $\int_0^1 f(2x)\,dx$

Poniamo $t = 2x$, da cui $dt = 2\,dx$, ossia $dx = \tfrac{1}{2}\,dt$. Gli estremi si trasformano così: se $x = 0$ allora $t = 0$, se $x = 1$ allora $t = 2$. Sostituendo:
$$\int_0^1 f(2x)\,dx = \int_0^2 f(t)\cdot \frac{1}{2}\,dt = \frac{1}{2}\int_0^2 f(t)\,dt.$$
L'integrale che compare a secondo membro è proprio quello noto, e vale $4$. Dunque
$$\int_0^1 f(2x)\,dx = \frac{1}{2}\cdot 4 = 2.$$
Questo integrale si può quindi calcolare: la sostituzione riconduce l'intervallo di integrazione esattamente all'intervallo $[0,2]$, sul quale l'integrale di $f$ è noto.

## Secondo integrale: $\int_0^1 f\!\left(\frac{x}{2}\right)dx$

Poniamo ora $t = \dfrac{x}{2}$, da cui $dt = \tfrac{1}{2}\,dx$, ossia $dx = 2\,dt$. Gli estremi diventano: se $x = 0$ allora $t = 0$, se $x = 1$ allora $t = \tfrac{1}{2}$. Sostituendo:
$$\int_0^1 f\!\left(\frac{x}{2}\right)dx = \int_0^{1/2} f(t)\cdot 2\,dt = 2\int_0^{1/2} f(t)\,dt.$$
Il risultato dipende dal valore di $\displaystyle\int_0^{1/2} f(t)\,dt$, cioè dall'integrale di $f$ sull'intervallo $\left[0,\tfrac{1}{2}\right]$. Questo dato non è fornito: conoscere l'integrale di $f$ su $[0,2]$ non permette in alcun modo di risalire al suo integrale sul solo sottointervallo $\left[0,\tfrac{1}{2}\right]$, perché la funzione $f$ non è nota nel dettaglio (funzioni continue diverse, tutte con integrale $4$ su $[0,2]$, possono avere integrali diversi su $\left[0,\tfrac{1}{2}\right]$).

## Conclusione

Con le sole informazioni fornite si può calcolare **soltanto il primo integrale**, e risulta
$$\int_0^1 f(2x)\,dx = 2,$$
mentre il secondo integrale resta indeterminato.

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
