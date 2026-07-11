---
title: 1950 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1950_tutti_temi_3
of_item: prob_1950_tutti_temi_3
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

**Problema:** [[Problemi/prob_1950_tutti_temi_3|1950 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1950_tutti_temi|1950 Tema di maturita]]

Sia il trapezio isoscele con basi $2a_1$ (maggiore) e $2a_2$ (minore) e altezza $h = 2r$ (il cerchio inscritto ha raggio $r$ e diametro pari all'altezza). La condizione di tangenza dà: lato obliquo $l = a_1 - a_2 + 2r\cdot(\ldots)$... Più semplicemente, per un trapezio circoscritto a un cerchio di raggio $r$: $a_1 + a_2 = l$ (la somma delle basi è uguale alla somma dei lati obliqui) e l'altezza è $h = 2r$.

Per un trapezio isoscele circoscritto al cerchio: $a_1 + a_2 = 2l$ (somma basi = somma lati obliqui). L'altezza è $h$, con $l^2 = h^2 + \left(\frac{a_1 - a_2}{2}\right)^2$ e $r = h/2$... La condizione esatta è: il cerchio inscritto ha raggio $r = \frac{h}{1} = h$ (tangente a tutte e quattro i lati), con $h = r$ e la relazione $a_1 + a_2 = 2l$.

Poniamo direttamente: basi $B$ e $b$ ($B > b$), lato obliquo $l$, altezza $h$. Per il cerchio inscritto: $r = h/2$ e $B + b = 2l$. L'area è $(B+b)h/2 = lh = 2a^2$.

**Volume del tronco di cono.** Ruotando attorno all'asse di simmetria (il diametro perpendicolare alle basi):
$$
V_{\text{tronco}} = \frac{\pi h}{3}\left(\frac{B^2}{4} + \frac{Bb}{4} + \frac{b^2}{4}\right) = \frac{\pi h(B^2 + Bb + b^2)}{12}.
$$
**Volume della sfera:** $V_{\text{sfera}} = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi\left(\frac{h}{2}\right)^3 = \frac{\pi h^3}{6}$.

La condizione $V_{\text{sfera}}/V_{\text{tronco}} = k$ diventa: $\frac{h^3/6}{h(B^2+Bb+b^2)/12} = k$, cioè $\frac{2h^2}{B^2+Bb+b^2} = k$.

Con le relazioni $lh = 2a^2$, $B + b = 2l$, $l^2 = h^2 + \frac{(B-b)^2}{4}$, si ottiene un sistema che, posto $B - b = 2d$ e $B + b = 2l$, si riduce a $l^2 = h^2 + d^2$ e $\frac{2h^2}{l^2 + l^2 - d^2} = k$, cioè $\frac{2h^2}{2l^2 - d^2} = k$.

Dalla relazione $d^2 = l^2 - h^2$ si ottiene $\frac{2h^2}{l^2 + h^2} = k$, cioè $h^2(2-k) = kl^2$, $\frac{h}{l} = \sqrt{\frac{k}{2-k}}$ (per $k < 2$). Con $lh = 2a^2$ si determinano $l$ e $h$, e di conseguenza i lati del trapezio e il raggio $r = h/2$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.92](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
