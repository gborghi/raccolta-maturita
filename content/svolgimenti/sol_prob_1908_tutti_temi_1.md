---
title: 1908 tutti_temi 1908 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1908_tutti_temi_1
of_item: prob_1908_tutti_temi_1
prova_id: prova_1908_tutti_temi
anno: '1908'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1908
---

**Problema:** [[Problemi/prob_1908_tutti_temi_1|1908 tutti_temi 1908 — Problema 1]] · **Prova:** [[Prove/1908_tutti_temi|1908 Tema di maturità]]

Siano $a$, $b$ i cateti e $c$ l'ipotenusa, con $a^2+b^2=c^2$ e altezza relativa all'ipotenusa $h=\dfrac{ab}{c}$.

**Cilindro.** Ha raggio uno dei cateti, $a$, e altezza l'altro cateto, $b$: l'area laterale è
$$
S_{\text{cil}}=2\pi a b.
$$
**Coni.** Ruotando il triangolo attorno all'ipotenusa, i due coni hanno raggio comune $h=\dfrac{ab}{c}$ e generatrici rispettivamente $a$ e $b$. La somma delle aree laterali è
$$
S_{\text{coni}}=\pi h a+\pi h b=\pi\frac{ab}{c}(a+b).
$$
**Rapporto.**
$$
m=\frac{S_{\text{cil}}}{S_{\text{coni}}}=\frac{2\pi ab}{\pi\dfrac{ab}{c}(a+b)}=\frac{2c}{a+b}.
$$
**Discussione del minimo.** Posto $a=c\cos\theta$, $b=c\sin\theta$ si ha $a+b=c(\cos\theta+\sin\theta)$, con $\cos\theta+\sin\theta\in\,]1,\sqrt2\,]$ per $\theta\in\,]0,\pi/2[$. Dunque
$$
m=\frac{2}{\cos\theta+\sin\theta}\in[\sqrt2,2[ ,
$$
e il valore minimo $m=\sqrt2$ si ha per $\cos\theta+\sin\theta=\sqrt2$, cioè $\theta=\dfrac{\pi}{4}$: in tal caso $a=b$ e
$$
\boxed{m_{\min}=\sqrt2\quad\text{per il triangolo rettangolo isoscele.}}
$$
**Calcolo dei cateti.** Da $a+b=\dfrac{2c}{m}$ e $a^2+b^2=c^2$ segue
$$
2ab=(a+b)^2-(a^2+b^2)=\frac{4c^2}{m^2}-c^2=\frac{c^2(4-m^2)}{m^2},
$$
sicché $a$ e $b$ sono le radici di
$$
t^2-\frac{2c}{m} t+\frac{c^2(4-m^2)}{2m^2}=0,
\qquad
t=\frac{c}{m}\left(1\pm\sqrt{\frac{m^2-2}{2}}\right),
$$
reali e distinte per $m>\sqrt2$ (coincidenti per $m=\sqrt2$). Poiché il dato è l'altezza $h$, da $h=\dfrac{ab}{c}=\dfrac{c(4-m^2)}{2m^2}$ si ricava $c=\dfrac{2m^2 h}{4-m^2}$ (valido per $\sqrt2\le m<2$), e quindi
$$
\boxed{a,b=\frac{c}{m}\left(1\pm\sqrt{\frac{m^2-2}{2}}\right),\qquad c=\frac{2m^2 h}{4-m^2}.}
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.56](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
