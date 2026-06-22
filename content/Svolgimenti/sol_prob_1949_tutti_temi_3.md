---
title: 1949 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1949_tutti_temi_3
of_item: prob_1949_tutti_temi_3
prova_id: prova_1949_tutti_temi
anno: '1949'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1949
---

**Problema:** [[Problemi/prob_1949_tutti_temi_3|1949 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1949_tutti_temi|1949 Tema di maturita]]

**Impostazione.** Sia~$r$ il raggio della circonferenza. Il lato del quadrato inscritto è $|AB|=r\sqrt{2}$. Poniamo la circonferenza con centro~$O$ nell'origine e $B=(r,0)$. La tangente in~$B$ è la retta verticale $x=r$. Il punto~$P=(r, t)$ con $t>0$ (nel semipiano contenente~$O$ rispetto ad~$AB$; qui $A$ si trova a $(-r,0)$ o in un'altra posizione a seconda dell'orientamento del quadrato).

Più precisamente, se il quadrato inscritto ha vertici $A,B,C,D$ con $A=(0,r)$ e $B=(r,0)$ (ad esempio), allora $|AB|=r\sqrt{2}$. La tangente in~$B=(r,0)$ è $x=r$; il semipiano contenente~$O$ è quello con $y>0$ (dalla parte del centro rispetto alla retta~$AB$). Dunque $P=(r,t)$ con $t>0$.

**Intersezione $AP$ con la circonferenza.** La retta~$AP$ passa per $A=(0,r)$ e $P=(r,t)$: parametricamente $\left(s\cdot r,\; r+s(t-r)\right)$ per $s\in[0,1]$, ovvero $x=sr$, $y=r+s(t-r)$.

Sostituendo in $x^2+y^2=r^2$: $s^2r^2 + (r+s(t-r))^2 = r^2$. Sviluppando:
$$
s^2r^2 + r^2 + 2rs(t-r) + s^2(t-r)^2 = r^2, \quad s^2[r^2+(t-r)^2] + 2rs(t-r) = 0.

s\{s[r^2+(t-r)^2] + 2r(t-r)\} = 0.
$$
$s=0$ corrisponde ad~$A$; l'altra soluzione è $s = -\frac{2r(t-r)}{r^2+(t-r)^2}$.

Le coordinate di~$M$ sono dunque:
$$
x_M = -\frac{2r^2(t-r)}{r^2+(t-r)^2}, \quad y_M = r - \frac{2r(t-r)^2}{r^2+(t-r)^2} = \frac{r[r^2+(t-r)^2]-2r(t-r)^2}{r^2+(t-r)^2} = \frac{r[r^2-(t-r)^2]}{r^2+(t-r)^2}.
$$
Le distanze $|BM|$, $|MP|$, $|PB|=t$ si calcolano dalle coordinate. Il rapporto richiesto fornisce un'equazione in~$t$ (a raggio~$r$ fissato) che determina la posizione di~$P$ in funzione di~$k$.

Semplificando con la sostituzione $t = r\tan\theta$ (angolo $\angle OBP = \theta$), le espressioni si riducono a funzioni trigonometriche e la discussione procede analizzando i valori ammissibili di~$k$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.91](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
