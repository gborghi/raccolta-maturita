---
title: 2018 Sessione suppletiva — Prova (Sportiva) — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_31_10
of_item: ques_2018_sessione_suppletiva_2018_prova_31_10
prova_id: prova_2018_sessione_suppletiva_2018_prova_31
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_31_10|2018 Sessione suppletiva — Prova (Sportiva) — Quesito 10]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_31|2018 Sessione suppletiva — Prova (Sportiva)]]

**Verificare che, qualunque siano le costanti reali $\varphi$ e $k$, la funzione $y = ke^{-x}\sin(x + \varphi)$ è soluzione dell'equazione differenziale $y'' + 2y' + 2y = 0$. Trovare $\varphi$ e $k$ tali che questa funzione abbia un punto di massimo di coordinate $(0, 1)$.**

**Verifica:**

$$y' = -ke^{-x}\sin(x + \varphi) + ke^{-x}\cos(x + \varphi) = ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi)]$$

$$y'' = -ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi)] + ke^{-x}[-\sin(x + \varphi) - \cos(x + \varphi)]$$

$$= -ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi) + \sin(x + \varphi) + \cos(x + \varphi)] = -2ke^{-x}\cos(x + \varphi)$$

Sostituendo nell'equazione differenziale:

$$-2ke^{-x}\cos(x + \varphi) + 2ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi)] + 2ke^{-x}\sin(x + \varphi) = 0$$

$$0 = 0 \quad \checkmark$$

Quindi la funzione è soluzione per ogni $k$ e per ogni $\varphi$.

**Punto di massimo in $(0, 1)$:**

Se in $(0, 1)$ c'è un massimo deve essere $y(0) = 1$, $y'(0) = 0$, $y''(0) < 0$:

$$y(0) = k\sin(\varphi) = 1$$
$$y'(0) = k(\cos(\varphi) - \sin(\varphi)) = 0$$
$$y''(0) = -2k\cos(\varphi) < 0$$

Dalla seconda relazione, non potendo essere $k = 0$, ricaviamo $\cos(\varphi) = \sin(\varphi)$, cioè $\varphi = \dfrac{\pi}{4} + h\pi$ con $h \in \mathbb{Z}$.

$$\begin{cases} k\sin(\varphi) = 1 \\ \cos(\varphi) = \sin(\varphi) \end{cases}$$

- Se $h$ pari: $\varphi = \dfrac{\pi}{4} + 2m\pi$ quindi $\sin(\varphi) = \dfrac{\sqrt{2}}{2}$, da cui $k \cdot \dfrac{\sqrt{2}}{2} = 1 \Rightarrow k = \sqrt{2}$
- Se $h$ dispari: $\varphi = \dfrac{\pi}{4} + (2m+1)\pi$ quindi $\sin(\varphi) = -\dfrac{\sqrt{2}}{2}$, da cui $k \cdot \left(-\dfrac{\sqrt{2}}{2}\right) = 1 \Rightarrow k = -\sqrt{2}$

Entrambe le coppie soddisfano la condizione $y''(0) = -2k\cos(\varphi) < 0$.

Quindi, per esempio: $\varphi = \dfrac{\pi}{4}$ e $k = \sqrt{2}$, oppure $\varphi = \dfrac{5\pi}{4}$ e $k = -\sqrt{2}$.

In corrispondenza di questi valori si ottiene in entrambi i casi la stessa funzione:

$$y = \sqrt{2}\, e^{-x}\sin\!\left(x + \frac{\pi}{4}\right)$$

*Fonte:* [📄 PDF p.54](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
