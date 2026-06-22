---
title: 1950 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1950_tutti_temi_2
of_item: prob_1950_tutti_temi_2
prova_id: prova_1950_tutti_temi
anno: '1950'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1950
---

**Problema:** [[Problemi/prob_1950_tutti_temi_2|1950 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1950_tutti_temi|1950 Tema di maturita]]

**Impostazione.** Poniamo~$O$ nell'origine. L'angolo~$\angle(a,b)=60^\circ$ e l'angolo~$\angle(a,c)=x$, con la semiretta~$a$ interna all'angolo formato da~$b$ e~$c$, dunque $\angle(b,c)=60^\circ+x$.

La condizione che la proiezione di ogni punto di~$a$ su~$c$ cada su~$c$ (e non sul suo prolungamento) richiede che l'angolo tra~$a$ e~$c$ sia acuto: $0<x<90^\circ$.

Con $|OA|=1$, le proiezioni sono: $B$ proiezione di~$A$ su~$b$ dà $|OB|=\cos 60^\circ=\frac{1}{2}$; $C$ proiezione di~$A$ su~$c$ dà $|OC|=\cos x$.

**Area del triangolo $BOC$.** L'angolo in~$O$ del triangolo~$BOC$ è $\angle BOC = 60^\circ + x$. Dunque:
$$
S_{BOC} = \frac{1}{2}|OB|\cdot|OC|\sin(60^\circ+x) = \frac{1}{2}\cdot\frac{1}{2}\cdot\cos x\cdot\sin(60^\circ+x) = \frac{\cos x\sin(60^\circ+x)}{4}.
$$
**Condizione di equivalenza.** Il triangolo di base $|OA|=1$ e altezza~$k$ ha area $k/2$. Dunque:
$$
\frac{\cos x\sin(60^\circ+x)}{4} = \frac{k}{2}, \qquad \cos x\sin(60^\circ+x) = 2k.
$$
Sviluppando $\sin(60^\circ+x) = \frac{\sqrt{3}}{2}\cos x + \frac{1}{2}\sin x$:
$$
\cos x \left(\frac{\sqrt{3}}{2}\cos x + \frac{1}{2}\sin x\right) = 2k, \qquad \frac{\sqrt{3}}{2}\cos^2 x + \frac{1}{2}\sin x\cos x = 2k.
$$
Usando le formule di duplicazione: $\cos^2 x = \frac{1+\cos 2x}{2}$ e $\sin x\cos x = \frac{\sin 2x}{2}$:
$$
\frac{\sqrt{3}}{4}(1+\cos 2x) + \frac{\sin 2x}{4} = 2k, \qquad \sqrt{3}+\sqrt{3}\cos 2x + \sin 2x = 8k.
$$
Scrivendo $\sqrt{3}\cos 2x + \sin 2x = 2\sin\!\left(2x+\frac{\pi}{3}\right)$:
$$
2\sin \left(2x+60^\circ\right) = 8k-\sqrt{3}, \qquad \sin \left(2x+60^\circ\right) = \frac{8k-\sqrt{3}}{2}.
$$
**Discussione.** Per avere soluzioni: $\left|\frac{8k-\sqrt{3}}{2}\right|\le 1$, cioè $\frac{\sqrt{3}-2}{8}\le k\le\frac{\sqrt{3}+2}{8}$. Poiché $k>0$: $0<k\le\frac{\sqrt{3}+2}{8}\approx 0{,}467$.

In questo intervallo, $x = \frac{1}{2}\!\left[\arcsin\!\left(\frac{8k-\sqrt{3}}{2}\right)-60^\circ\right]$, con le usuali considerazioni sulle soluzioni multiple. Per $0<x<90^\circ$, $2x+60^\circ\in(60^\circ,240^\circ)$, e si possono avere due soluzioni nel dominio.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.92](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
