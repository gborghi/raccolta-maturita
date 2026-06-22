---
title: 1911 tutti_temi 1911 — Problema 6 — Svolgimento
tipo: soluzione
item_id: sol_prob_1911_tutti_temi_6
of_item: prob_1911_tutti_temi_6
prova_id: prova_1911_tutti_temi
anno: '1911'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1911
---

**Problema:** [[Problemi/prob_1911_tutti_temi_6|1911 tutti_temi 1911 — Problema 6]] · **Prova:** [[Prove/1911_tutti_temi|1911 Tema di maturita]]

Sfera di raggio $R$ tagliata da un piano a distanza $d$ dal centro. Raggio della sezione: $\rho=\sqrt{R^2-d^2}$. Altezza della calotta: $h=R-d$.

Area della calotta: $A_{\text{cal}}=2\pi Rh=2\pi R(R-d)$.

Cono con base $\pi\rho^2$ e altezza $h$: apotema $\ell=\sqrt{\rho^2+h^2}$. Superficie laterale: $A_{\text{cono}}=\pi\rho\ell$.

Dal vincolo $\pi\rho^2=A_{\text{cal}}-A_{\text{cono}}$:
$$
R^2-d^2=2R(R-d)-\sqrt{R^2-d^2}\cdot\sqrt{R^2-d^2+(R-d)^2}.
$$
Ponendo $u=R-d$: $\rho^2=2Ru-u^2$, e semplificando:
$$
u^2=\sqrt{2Ru-u^2}\cdot\sqrt{2Ru},

u^4=2Ru(2Ru-u^2)=4R^2u^2-2Ru^3.
$$
Dividendo per $u^2$: $u^2+2Ru-4R^2=0$, $u=R(\sqrt{5}-1)$.

L'angolo $\alpha$ tra l'apotema del cono e il piano di taglio: $\tan\alpha=\frac{h}{\rho}=\frac{u}{\sqrt{2Ru-u^2}}$.

Con $u=R(\sqrt{5}-1)$: $\tan^2\alpha=\frac{u^2}{2Ru-u^2}=\frac{(\sqrt{5}-1)^2}{2(\sqrt{5}-1)-((\sqrt{5}-1)^2}=\frac{6-2\sqrt{5}}{2\sqrt{5}-2-(6-2\sqrt{5})}=\frac{6-2\sqrt{5}}{4\sqrt{5}-8}$.

Semplificando: $\tan^2\alpha=\frac{3-\sqrt{5}}{2(\sqrt{5}-2)}=\frac{(3-\sqrt{5})(\sqrt{5}+2)}{2}=\frac{3\sqrt{5}+6-5-2\sqrt{5}}{2}=\frac{\sqrt{5}+1}{2}=\phi$ (rapporto aureo).

Dunque $\tan^2\alpha=\phi$ e $\tan^4\alpha=\phi^2=\phi+1=1+\tan^2\alpha$.
$$
\boxed{\tan^4\alpha=1+\tan^2\alpha}.
$$
![[_attachments/prob_1911_tutti_temi_6/prob_1911_tutti_temi_6_fig1.svg]]

\captionof{figure}{Ottaedro regolare: otto facce triangolari equilatere, sei vertici, dodici spigoli.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.58](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
