---
title: 1927 tutti_temi 1927 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1927_tutti_temi_1
of_item: prob_1927_tutti_temi_1
prova_id: prova_1927_tutti_temi
anno: '1927'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1927
---

**Problema:** [[Problemi/prob_1927_tutti_temi_1|1927 tutti_temi 1927 — Problema 1]] · **Prova:** [[Prove/1927_tutti_temi|1927 Tema di maturita]]

Poniamo un sistema di coordinate con l'origine in $O$ e i lati dell'angolo retto sugli assi. Il punto $M$ ha coordinate $(a, b)$ con $a, b > 0$. Una retta per $M$ che interseca l'asse $x$ in $A$ e l'asse $y$ in $B$ ha equazione $\frac{x}{\alpha} + \frac{y}{\beta} = 1$, con il vincolo di passaggio per $(a,b)$: $\frac{a}{\alpha} + \frac{b}{\beta} = 1$.

Parametrizziamo con l'angolo $\theta$ che la retta forma con $Ox$. Allora $A = (a + b/\tan\theta,\; 0)$ e $B = (0,\; b + a\tan\theta)$, e:
$$
|AM|^2 = b^2 + \frac{b^2}{\tan^2\theta} = \frac{b^2}{\sin^2\theta}, \qquad |BM|^2 = a^2 + a^2\tan^2\theta = \frac{a^2}{\cos^2\theta}.
$$
La somma è:
$$
S(\theta) = \frac{b^2}{\sin^2\theta} + \frac{a^2}{\cos^2\theta}.
$$
Per minimizzare, deriviamo e poniamo uguale a zero:
$$
S'(\theta) = -\frac{2b^2\cos\theta}{\sin^3\theta} + \frac{2a^2\sin\theta}{\cos^3\theta} = 0,
$$
da cui $a^2\sin^4\theta = b^2\cos^4\theta$, cioè $\tan^2\theta = \frac{b}{a}$ (prendendo la radice positiva: $\tan\theta = \sqrt{b/a}$).

**Il valore minimo** si ottiene con $\sin^2\theta = \frac{\sqrt{b}}{\sqrt{a}+\sqrt{b}}$ e $\cos^2\theta = \frac{\sqrt{a}}{\sqrt{a}+\sqrt{b}}$:
$$
S_{\min} = b^2 \cdot \frac{(\sqrt{a}+\sqrt{b})^2}{b} + a^2 \cdot \frac{(\sqrt{a}+\sqrt{b})^2}{a} = (\sqrt{a}+\sqrt{b})^2(a+b) = (a+b+2\sqrt{ab})(a+b).
$$
Più semplicemente: $S_{\min} = (a^{2/3}+b^{2/3})^3$ (dall'identità analoga per somme di potenze). Il problema ha soluzione quando $m^2 \ge S_{\min}$.

![[_attachments/prob_1927_tutti_temi_1/prob_1927_tutti_temi_1_fig1.svg]]

\captionof{figure}{Andamento qualitativo della funzione obiettivo $f(x)$ sull'intervallo ammissibile, con il punto ottimo evidenziato.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.76](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
