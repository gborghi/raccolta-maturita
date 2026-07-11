---
title: 1926 tutti_temi 1926 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1926_tutti_temi_1
of_item: prob_1926_tutti_temi_1
prova_id: prova_1926_tutti_temi
anno: '1926'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1926
---

**Problema:** [[Problemi/prob_1926_tutti_temi_1|1926 tutti_temi 1926 — Problema 1]] · **Prova:** [[Prove/1926_tutti_temi|1926 Tema di maturita]]

Siano $B$ la base maggiore, $\ell$ il lato obliquo, $p$ la base minore. Dalla progressione
aritmetica $B,\ell,p$: $2\ell=B+p$, cioè $B=2\ell-p$.

**Prima condizione.** La somma dei due lati obliqui e della base minore vale
$2\ell+p=a$, quindi $\ell=\dfrac{a-p}{2}$, e dalla progressione $B=2\ell-p=a-2p$.

**Seconda condizione.** $B^{2}+p^{2}+2\ell^{2}=2b^{2}$. Sostituendo e moltiplicando per~2:
$$
2(a-2p)^{2}+2p^{2}+(a-p)^{2}=4b^{2}
 \Longrightarrow
11p^{2}-10ap+3a^{2}-4b^{2}=0,

\boxed{ p=\frac{5a\pm 2\sqrt{11b^{2}-2a^{2}}}{11} .}
$$
Da $p$ si ricavano $\ell=\dfrac{a-p}{2}$, $B=a-2p$ e la ragione $\rho=\ell-B=p-\ell$:
$$
\rho=\ell-B=\frac{a-p}{2}-(a-2p)=\frac{3p-a}{2}.
$$
**Possibilità.** La radice è reale per $11b^{2}\ge 2a^{2}$. L'ammissibilità
geometrica richiede $0<p$ e, per avere un trapezio proprio con $B>\ell>p$ (ragione
negativa), $p<\dfrac{a}{3}$. La radice minore soddisfa $p<a/3$ quando
$11b^{2}-2a^{2}>\dfrac{4a^{2}}{9}$, cioè
$$
\boxed{ b>\frac{a\sqrt{2}}{3} .}
$$
*Verifica.* $a=6$, $b=3$: $11\cdot9=99>72$. $p=\dfrac{30-2\sqrt{27}}{11}\approx1{,}78$,
$\ell\approx2{,}11$, $B\approx2{,}44$; progressione $2{,}44;\,2{,}11;\,1{,}78$, ragione
$\approx-0{,}33$. \checkmark

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.76](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
