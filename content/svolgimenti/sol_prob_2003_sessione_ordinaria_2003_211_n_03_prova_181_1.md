---
title: 2003 Ordinaria — Prova (PNI) — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2003_sessione_ordinaria_2003_211_n_03_prova_181_1
of_item: prob_2003_sessione_ordinaria_2003_211_n_03_prova_181_1
prova_id: prova_2003_sessione_ordinaria_2003_211_n_03_prova_181
anno: '2003'
pdf: Prova_Maturita_2003.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2003
---

**Problema:** [[Problemi/prob_2003_sessione_ordinaria_2003_211_n_03_prova_181_1|2003 Ordinaria — Prova (PNI) — Problema 1]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_181|2003 Ordinaria — Prova (PNI)]]

Nel piano sono dati: il cerchio $\gamma$ di diametro $OA = a$, la retta $t$ tangente a $\gamma$ in $A$, una retta $r$ passante per $O$, il punto $B$ ulteriore intersezione di $r$ con $\gamma$, il punto $C$ intersezione di $r$ con $t$. La parallela per $B$ a $t$ e la perpendicolare per $C$ a $t$ si intersecano in $P$. Al variare di $r$, $P$ descrive il luogo geometrico $\Gamma$ noto con il nome di **versiera di Agnesi** [da Maria Gaetana Agnesi, matematica milanese (1718–1799)].

1. Si provi che valgono le seguenti proporzioni, ove $D$ è la proiezione ortogonale di $B$ su $OA$:
$$OD : DB = OA : DP \qquad OC : DP = DP : BC$$

2. Si verifichi che, con un'opportuna scelta del sistema di coordinate cartesiane ortogonali e monometriche $Oxy$, l'equazione cartesiana di $\Gamma$ è:
$$y = \frac{a^3}{x^2 + a^2}$$

3. Si tracci il grafico di $\Gamma$ e si provi che l'area compresa fra $\Gamma$ e il suo asintoto è quattro volte quella del cerchio $\gamma$.

### Svolgimento sintetico

**Parte 1 — Proporzioni.** Il triangolo $OBC$ è rettangolo in $B$ (angolo inscritto su diametro $OA$). La proiezione $D$ di $B$ su $OC$ dà: triangolo $OBD \sim$ triangolo $OAC$ (AA), da cui $OD:DB = OA:DP$ con $DP \parallel t$. Per la seconda proporzione, dal triangolo $OBC$ rettangolo in $B$: $OC:BC = BC:BD$, e identificando $DP = BC$ (per costruzione) si ottiene $OC:DP = DP:BC$.

**Parte 2 — Equazione cartesiana.** Si pone $O$ nell'origine, $x$ lungo $OA$, $y$ perpendicolare. Il cerchio $\gamma$ ha equazione $x^2 + y^2 = ay$. La retta $r$ per $O$ incontra $\gamma$ in $B=(x_B,y_B)$ e la tangente $t$ (retta $y=a$) in $C=(x_C,a)$. Per la collinearità: $x_C = ax_B/y_B$. Il punto $P=(x_C, y_B)$ soddisfa:

$$\left(\frac{x\,y}{a}\right)^2 + y^2 = ay \implies y^2\!\left(\frac{x^2}{a^2}+1\right)=ay \implies y = \frac{a^3}{x^2+a^2}$$

**Parte 3 — Area.** L'asintoto di $\Gamma$ è $y=0$. L'area tra $\Gamma$ e il suo asintoto vale:

$$A_\Gamma = \int_{-\infty}^{+\infty}\frac{a^3}{x^2+a^2}\,dx = a^3\cdot\frac{\pi}{a} = \pi a^2$$

L'area del cerchio $\gamma$ (raggio $a/2$) è $A_\gamma = \pi(a/2)^2 = \pi a^2/4$. Quindi $A_\Gamma = 4\,A_\gamma$.

*(grafico — vedi PDF p. 181)*

---

*Fonte:* [📄 PDF p.181](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
