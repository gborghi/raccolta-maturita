---
title: 1912 tutti_temi 1912 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1912_tutti_temi_2
of_item: prob_1912_tutti_temi_2
prova_id: prova_1912_tutti_temi
anno: '1912'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1912
---

**Problema:** [[Problemi/prob_1912_tutti_temi_2|1912 tutti_temi 1912 — Problema 2]] · **Prova:** [[Prove/1912_tutti_temi|1912 Tema di maturità]]

Triangolo rettangolo $ABC$ con ipotenusa $c=AB$, cateti $a=BC$ e $b=AC$. Una parallela all'ipotenusa a distanza $mc$ interseca i cateti in $A'$, $B'$. Ruotando attorno all'ipotenusa: due coni e un cilindro.

L'altezza del triangolo rispetto all'ipotenusa è $h=ab/c$. La parallela è a distanza $mc$ dall'ipotenusa, dunque a distanza $h-mc$ dal vertice rettangolo. Il rapporto di similitudine è $k=1-\frac{mc}{h}=1-\frac{mc^2}{ab}$.

Il cilindro ha raggio $r_c=mc$ (no: il raggio è la distanza dalla retta parallela all'ipotenusa, che è $mc$... In realtà la distanza dall'asse di rotazione (l'ipotenusa) della retta parallela è $mc$, dunque $r_c=mc$).

Il cilindro ha altezza $\ell=A'B'\cdot\cos\theta$ dove $\theta$... Più precisamente, le proiezioni $A''$, $B''$ su $AB$ delimitano la base del cilindro, di altezza $A''B''$ e raggio $mc$.

$V_{\text{cil}}=\pi(mc)^2\cdot A''B''$. I due coni hanno base comune (cerchio di raggio $mc$) e altezze $AA''$ e $BB''$.

$V_1+V_2=\frac{1}{3}\pi(mc)^2(AA''+BB'')=\frac{1}{3}\pi(mc)^2(c-A''B'')$.

$\frac{V_{\text{cil}}}{V_1+V_2}=\frac{A''B''}{(c-A''B'')/3}=\frac{3A''B''}{c-A''B''}=n$.

Dunque $A''B''=\frac{nc}{n+3}$.

D'altra parte, dalla similitudine: $A''B''=c\cdot k=c\left(1-\frac{mc^2}{ab}\right)$.

Uguagliando: $1-\frac{mc^2}{ab}=\frac{n}{n+3}$, cioè $\frac{mc^2}{ab}=\frac{3}{n+3}$.

Con $ab=\frac{c^2}{2}\sin(2B)$: $\frac{2m}{\sin(2B)}=\frac{3}{n+3}$.
$$
\boxed{\sin(2B)=\frac{2m(n+3)}{3}}.
$$
![[_attachments/prob_1912_tutti_temi_2/prob_1912_tutti_temi_2_fig1.svg]]

\captionof{figure}{Sfera di centro $O$ e raggio $R$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.59](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
