

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26_5|2005 Americhe Ordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26|2005 Americhe Ordinaria — Questionario]]

In una fabbrica lavorano $35$ operai e $25$ operaie. Si deve formare una delegazione comprendente $3$ operai e $2$ operaie. Quante sono le possibili delegazioni?

## Impostazione

La delegazione è formata scegliendo un sottoinsieme di $3$ operai fra i $35$ e un sottoinsieme di $2$ operaie fra le $25$. In entrambi i casi l'ordine con cui si scelgono le persone è irrilevante — conta solo *quali* persone entrano nella delegazione — quindi si tratta di **combinazioni** (semplici, senza ripetizione).

## Scelta dei 3 operai

Il numero di modi in cui si possono scegliere $3$ operai fra $35$ è dato dalle combinazioni di $35$ oggetti presi a $3$ a $3$:

$$C_{35,3}=\binom{35}{3}=\frac{35\cdot 34\cdot 33}{3!}=\frac{35\cdot 34\cdot 33}{6}=6545.$$

## Scelta delle 2 operaie

Analogamente, il numero di modi in cui si possono scegliere $2$ operaie fra $25$ è dato dalle combinazioni di $25$ oggetti presi a $2$ a $2$:

$$C_{25,2}=\binom{25}{2}=\frac{25\cdot 24}{2!}=\frac{25\cdot 24}{2}=300.$$

## Numero totale di delegazioni

Poiché ogni scelta dei $3$ operai può essere abbinata a ciascuna scelta delle $2$ operaie, per il principio fondamentale del conteggio (principio di moltiplicazione) il numero totale di delegazioni è il prodotto dei due risultati:

$$C_{35,3}\cdot C_{25,2}=6545\cdot 300=1\,963\,500.$$

Le possibili delegazioni sono quindi $\mathbf{1\,963\,500}$.

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
