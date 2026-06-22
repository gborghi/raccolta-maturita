---
title: 1931 tutti_temi 1931 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1931_tutti_temi_1
of_item: prob_1931_tutti_temi_1
prova_id: prova_1931_tutti_temi
anno: '1931'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1931
---

**Problema:** [[Problemi/prob_1931_tutti_temi_1|1931 tutti_temi 1931 — Problema 1]] · **Prova:** [[Prove/1931_tutti_temi|1931 Tema di maturita]]

**Impostazione.** Poniamo $|OA| = a$ e $|OB| = 2a$. Il punto $M$ si trova su $OY$; sia $|OM| = t$. Con l'angolo $\widehat{XOY} = 60^\circ$, applichiamo il teorema del coseno:
$$
|MA|^2 = a^2 + t^2 - 2at\cos 60^\circ = a^2 + t^2 - at, \qquad |MB|^2 = 4a^2 + t^2 - 4at\cos 60^\circ = 4a^2 + t^2 - 2at.
$$
La condizione $|MA|/|MB| = k$ si riscrive $|MA|^2 = k^2|MB|^2$:
$$
a^2 + t^2 - at = k^2(4a^2 + t^2 - 2at).
$$
Riordinando: $(1-k^2)t^2 - a(1-2k^2)t + a^2(1-4k^2) = 0$.

**Massimo e minimo del rapporto.** La funzione $\varphi(t) = \frac{|MA|^2}{|MB|^2} = \frac{a^2 + t^2 - at}{4a^2 + t^2 - 2at}$ ha derivata:
$$
\varphi'(t) = \frac{(2t-a)(4a^2+t^2-2at)-(2t-2a)(a^2+t^2-at)}{(4a^2+t^2-2at)^2}.
$$
Semplificando il numeratore: $(2t-a)(4a^2+t^2-2at)-(2t-2a)(a^2+t^2-at) = 3a(2a^2-at-t^2)= 3a(2a+t)(a-t)$.

Dunque $\varphi'(t) = 0$ per $t = a$ (scartando $t = -2a < 0$). In $t = a$: $\varphi(a) = \frac{a^2}{3a^2} = 1/3$. Per $t \to 0$: $\varphi(0) = 1/4$. Per $t \to +\infty$: $\varphi \to 1$. Dunque in $t = a$ si ha un **massimo locale** con $k^2 = 1/3$.

I punti $M_1$ e $M_2$ corrispondono a $t = a$ e al secondo punto critico (o estremo).

![[_attachments/prob_1931_tutti_temi_1/prob_1931_tutti_temi_1_fig1.svg]]

\captionof{figure}{Angolo di $60°$: il rapporto $MA/MB$ è massimo per $|OM|=a$ (cerchio di Apollonio).}

I quattro punti $A$, $B$, $M_1$, $M_2$ sono conciclici: ciò discende dal fatto che $M_1$ e $M_2$ sono i punti che dividono il segmento $AB$ in rapporto armonico, e i quattro punti appartengono al cerchio di Apollonio.

![[_attachments/prob_1931_tutti_temi_1/prob_1931_tutti_temi_1_fig2.svg]]

\captionof{figure}{Da $P$ su $\gamma_2$ le tangenti a $\gamma_1$ formano il triangolo $PQR$ di area $(1-x)\sqrt{1-x^2}$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.78](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
