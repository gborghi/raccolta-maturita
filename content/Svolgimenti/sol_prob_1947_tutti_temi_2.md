---
title: 1947 tutti_temi 1947 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1947_tutti_temi_2
of_item: prob_1947_tutti_temi_2
prova_id: prova_1947_tutti_temi
anno: '1947'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1947
---

**Problema:** [[Problemi/prob_1947_tutti_temi_2|1947 tutti_temi 1947 — Problema 2]] · **Prova:** [[Prove/1947_tutti_temi|1947 Tema di maturita]]

**Impostazione.** Poniamo l'asse di rotazione lungo~$OA$. Il punto~$B$ dista dall'asse~$OA$ di $h_1 = r\sin\alpha$ (proiezione ortogonale di~$B$ su~$OA$), mentre~$C$ dista di $h_2 = r\sin 2\alpha$.

Per il suggerimento fornito, il volume del solido generato dal settore~$AOB$ attorno a~$OA$ vale:
$$
V_1 = \frac{2}{3}\pi r^2 (r\sin\alpha) = \frac{2}{3}\pi r^3\sin\alpha.
$$
Per il settore~$BOC$, il solido generato dalla sua rotazione attorno a~$OA$ ha volume uguale alla differenza fra il solido generato dal settore~$AOC$ (angolo al centro~$2\alpha$) e quello generato dal settore~$AOB$:
$$
V_2 = \frac{2}{3}\pi r^3\sin 2\alpha - \frac{2}{3}\pi r^3\sin\alpha = \frac{2}{3}\pi r^3(\sin 2\alpha - \sin\alpha).
$$
**Rapporto dei volumi.** Poiché $\alpha\le 45^\circ$, si ha $2\alpha\le 90^\circ$ e dunque $\sin 2\alpha \ge \sin\alpha$; il solido maggiore è quello generato dal settore~$BOC$ (più lontano dall'asse). Il rapporto è:
$$
k = \frac{V_2}{V_1} = \frac{\sin 2\alpha - \sin\alpha}{\sin\alpha} = \frac{\sin 2\alpha}{\sin\alpha} - 1 = 2\cos\alpha - 1.
$$
Quindi la condizione diventa $k = 2\cos\alpha - 1$, da cui:
$$
\cos\alpha = \frac{k+1}{2}, \qquad \alpha = \arccos \left(\frac{k+1}{2}\right).
$$
**Discussione.** Affinché $\alpha$ esista con $0<\alpha\le 45^\circ$, occorre $\cos\alpha\ge\cos 45^\circ = \frac{\sqrt{2}}{2}$, cioè $\frac{k+1}{2}\ge\frac{\sqrt{2}}{2}$, e inoltre $\frac{k+1}{2}\le 1$. Dunque:
$$
\sqrt{2}-1 \le k \le 1.
$$
Per $k=0$ si avrebbe $\cos\alpha=\frac{1}{2}$, $\alpha=60^\circ$, ma eccede il vincolo $\alpha\le 45^\circ$.

\textbf{Caso particolare $k=1+\sqrt{2}$.} Si otterrebbe $\cos\alpha = \frac{2+\sqrt{2}}{2} > 1$, il che è impossibile. Questo valore di~$k$ non ammette soluzione: il rapporto massimo possibile con il vincolo $\alpha\le 45^\circ$ è $k=1$ (raggiunto per $\alpha=0$, caso degenere). Se invece il vincolo viene rilasciato ($\alpha\le 90^\circ$), allora per $k=1+\sqrt{2}$ si avrebbe $\cos\alpha = \frac{2+\sqrt{2}}{2}$, ancora impossibile.

In realtà, ripercorrendo il calcolo senza il vincolo $\alpha\le 45^\circ$ e notando che per $\alpha > 60^\circ$ il solido generato da~$AOB$ diventa il maggiore, si deve porre $k = \frac{\sin\alpha}{\sin 2\alpha - \sin\alpha}$ quando $V_1 > V_2$, ottenendo equazioni diverse. Il problema ammette soluzione solo per $\sqrt{2}-1 \le k \le 1$ nel caso specificato dalla traccia.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.89](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
