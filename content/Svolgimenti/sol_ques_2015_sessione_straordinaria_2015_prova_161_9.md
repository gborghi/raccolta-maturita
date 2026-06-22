---
title: 2015 Straordinaria — Prova — Quesito 9 — Svolgimento
tipo: soluzione
item_id: sol_ques_2015_sessione_straordinaria_2015_prova_161_9
of_item: ques_2015_sessione_straordinaria_2015_prova_161_9
prova_id: prova_2015_sessione_straordinaria_2015_prova_161
anno: '2015'
pdf: Prova_Maturita_2015.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
---

**Quesito:** [[Quesiti/ques_2015_sessione_straordinaria_2015_prova_161_9|2015 Straordinaria — Prova — Quesito 9]] · **Prova:** [[Prove/2015_sessione_straordinaria_2015_prova_161|2015 Straordinaria — Prova]]

QUESITO $9$

Calcolare la derivata della funzione f(x) = x∙ex, adoperando la definizione di derivata.

In base alla definizione di derivata si ha:

f'(x) = lim
$h\to 0$
$f(x+ h) -f(x)$

f'(x) = lim
$h\to 0$
$f(x+ h) -f(x)$
= lim
$h\to 0$
$(x+ h) ∙ex+h-x∙ex$
= lim
$h\to 0$
$(x+ h) ∙ex+h-x∙ex$

= lim
$h\to 0$
$x∙ex+h+ h∙ex+h-x∙ex$
= lim
$h\to 0$
$x∙ex+h-x∙ex+ h∙ex+h$

= lim
$h\to 0$
$x∙ex(eh-1) + h∙ex+h$
= lim
$h\to 0$
$x∙ex(eh-1)$
+ lim
$h\to 0$
$h∙ex+h$
$= x∙ex+ ex=$ f'(x)

N.B.

Abbiamo usato il limite notevole:

$$ lim $$
$h\to 0$
$eh-1$
$$ h = 1 $$

QUESITO $10$

Sia la derivata seconda di una funzione reale f(x) data da f''(x) $= 3x-6$ . Determinare
l’espressione di f(x), sapendo che il grafico della funzione passa per il punto $P (2, -7)$ e
che l’angolo formato dalla tangente al grafico di f(x) con l’asse $y$ nel punto di ascissa
$x= 0$ vale $45^\circ$ .

Da f''(x) $= 3x-6$ ricaviamo:

f'(x) $= \int (3x-6 ) dx= 3$
$2 x^{2} -6x+$ a , con a parametro reale
f(x) $= \int (3$
$2 x^{2} -6x+$ a ) $dx= 1$
$2 x^{3} -3x^{2} + ax+ b$ , con $b$ parametro reale

Siccome il grafico della funzione passa per $P (2, -7),$ risulta:
$-7 = 4 -12 + 2a+ b \implies b= 1 -2a$

Il coefficiente angolare della tangente al grafico di f(x) nel punto di ascissa $x= 0$ è dato
da:
$m= f'(0) =$ a

La tangente al grafico della funzione nel punto ascissa $x= 0$ forma con l’asse $y$ un
angolo di $45^\circ$ , quindi formerà con l’asse $x$ un angolo $\alpha$ di $135^\circ$ oppure $45^\circ$ (si veda la
figura seguente), perciò:
$tg(\alpha ) = m= \pm 1 =$ a
La tangente al grafico della funzione nel punto di ascissa nulla, dovendo formare un
angolo di $45^\circ$ con l’asse $y,$ può avere una delle due possibili rappresentazioni:

Si hanno quindi due soluzioni:

Se $a= 1$ (tangente la retta $r)$ risulta $b= 1 -2a= -1;$ in tal caso la funzione ha
equazione:

f(x) $= 1$
$2 x^{3} -3x^{2} + ax+ b= 1$
$2 x^{3} -3x^{2} + x-1 =$ f(x)

Se $a= -1$ (tangente la retta $s)$ risulta $b= 1 -2a= 3;$ in tal caso la funzione ha
equazione:

f(x) $= 1$
$2 x^{3} -3x^{2} + ax+ b= 1$
$2 x^{3} -3x^{2} -x+ 3 =$ f(x)

N.B.

Se l’angolo fra la tangente e l’asse $y$ è considerato orientato, con la convenzione
secondo cui gli angoli positivi sono quelli orientati in senso antiorario, abbiamo solo la
prima soluzione (l’angolo che ha come primo lato la tangente e secondo lato l’asse $y$ è
$+45^\circ$ nel primo caso appunto, indicato nel grafico con la retta $r$ in verde continuo).

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.182](https://drive.google.com/file/d/1M3fBnPOYAk0BQg70levYud2t_jZneRJa/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
