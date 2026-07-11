---
title: 2007 Ordinaria PNI — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2007_sessione_ordinaria_2007_prova_168_2
of_item: prob_2007_sessione_ordinaria_2007_prova_168_2
prova_id: prova_2007_sessione_ordinaria_2007_prova_168
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2007
---

**Problema:** [[Problemi/prob_2007_sessione_ordinaria_2007_prova_168_2|2007 Ordinaria PNI — Prova — Problema 2]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_168|2007 Ordinaria PNI — Prova]]

Si considerino triangoli con base $AB = 1$ e vertice $C$ variabile tale che $\widehat{CAB} = 2\,\widehat{ABC}$.

Sia $\beta = \widehat{ABC}$; allora $\widehat{CAB} = 2\beta$ e $\widehat{ACB} = \pi - 3\beta$, con $\beta \in (0°, 60°)$.

**Punto 1. Equazione del luogo geometrico $\gamma$ di $C$.**

Poniamo $A = (0,0)$, $B = (1,0)$, $C = (x, y)$ con $y > 0$.

L'angolo in $B$ tra $BA$ e $BC$ è $\beta$, quindi $\tan\beta = \dfrac{y}{1-x}$ (per $C$ nell'interno del piano semisup.).

L'angolo in $A$ tra $AB$ e $AC$ è $2\beta$, quindi $\tan 2\beta = \dfrac{y}{x}$ (con $x > 0$).

Dalla formula della duplicazione: $\tan 2\beta = \dfrac{2\tan\beta}{1 - \tan^2\beta}$. Posto $t = \tan\beta = \dfrac{y}{1-x}$:

$$\frac{y}{x} = \frac{2t}{1-t^2} = \frac{\dfrac{2y}{1-x}}{1 - \dfrac{y^2}{(1-x)^2}} = \frac{2y(1-x)}{(1-x)^2 - y^2}.$$

Dividendo per $y \neq 0$:

$$\frac{1}{x} = \frac{2(1-x)}{(1-x)^2 - y^2}.$$

Quindi $(1-x)^2 - y^2 = 2x(1-x)$, da cui:

$$1 - 2x + x^2 - y^2 = 2x - 2x^2 \implies 3x^2 - 4x + 1 = y^2.$$

L'equazione del luogo geometrico è:

$$\boxed{y^2 = 3x^2 - 4x + 1 = (3x - 1)(x - 1).}$$

Questa è un'**iperbole** equilatera. In forma canonica, completando il quadrato:

$$y^2 = 3\!\left(x - \frac{2}{3}\right)^{\!2} - \frac{1}{3}, \qquad \frac{\left(x - \frac{2}{3}\right)^2}{\frac{1}{9}} - \frac{y^2}{\frac{1}{3}} = 1,$$

iperbole con centro $\left(\dfrac{2}{3},\, 0\right)$, semiasse reale $a_0 = \dfrac{1}{3}$, semiasse immaginario $b_0 = \dfrac{1}{\sqrt{3}}$.

**Punto 2. Rappresentazione di $\gamma$.**

La curva ha intersezioni con l'asse $x$ in $x = \dfrac{1}{3}$ e $x = 1$. Le asintoti dell'iperbole sono $y = \pm\sqrt{3}\!\left(x - \dfrac{2}{3}\right)$.

Le condizioni geometriche ($y > 0$, $\beta \in (0°, 60°)$, $C \neq A$, $C \neq B$) selezionano il ramo dell'iperbole con $x \leq \dfrac{1}{3}$ e $y > 0$, oppure $x \geq 1$ e $y > 0$ (quest'ultimo con $\tan 2\beta = y/x > 0$, $\tan\beta = y/(1-x)$: per $x > 1$ si ha $1-x < 0$, quindi $\tan\beta < 0$, fuori dai vincoli); pertanto il ramo fisicamente valido è quello con $x \in \left(0, \dfrac{1}{3}\right)$ e $y > 0$ (ramo sinistro, semiasse reale negativo).

*(grafico — vedi PDF p.168)*

**Punto 3. Angolo $\beta$ che massimizza $h_a^2 + h_b^2$.**

Siano $h_a$ l'altezza relativa al lato $BC$ (da $A$) e $h_b$ l'altezza relativa al lato $AC$ (da $B$).

Per la legge dei seni ($AB = 1$, $\angle A = 2\beta$, $\angle B = \beta$, $\angle C = \pi - 3\beta$):

$$BC = \frac{\sin 2\beta}{\sin 3\beta}, \qquad AC = \frac{\sin\beta}{\sin 3\beta}.$$

Area del triangolo:

$$S = \frac{1}{2}\cdot AB \cdot BC \cdot \sin\beta = \frac{\sin\beta\,\sin 2\beta}{2\sin 3\beta}.$$

Le altezze: $h_a = \dfrac{2S}{BC} = \sin\beta$; $h_b = \dfrac{2S}{AC} = \sin 2\beta$.

Funzione da massimizzare:

$$F(\beta) = h_a^2 + h_b^2 = \sin^2\beta + \sin^2 2\beta, \quad \beta \in (0°,\, 60°).$$

Derivata:

$$F'(\beta) = 2\sin\beta\cos\beta + 2\sin 2\beta \cdot 2\cos 2\beta = \sin 2\beta + 2\sin 4\beta = \sin 2\beta + 4\sin 2\beta\cos 2\beta = \sin 2\beta(1 + 4\cos 2\beta).$$

Poiché $\sin 2\beta \neq 0$ per $\beta \in (0°, 60°)$, l'equazione $F'(\beta) = 0$ dà:

$$1 + 4\cos 2\beta = 0 \implies \cos 2\beta = -\frac{1}{4} \implies 2\beta = \arccos\!\left(-\tfrac{1}{4}\right) \approx 104°28'.$$

$$\beta \approx 52°14'.$$

(Con la calcolatrice: $\arccos(-0{,}25) \approx 104{,}477°$, quindi $\beta \approx 52°14'$ ossia circa $52°14'$.)

Si verifica che $F''$ è negativa in questo punto, confermando il massimo.

**Punto 4. Se $\widehat{ABC} = 36°$ allora $AC = \dfrac{\sqrt{5}-1}{2}$.**

Con $\beta = 36°$: $\widehat{CAB} = 72°$, $\widehat{ACB} = 180° - 108° = 72°$.

Il triangolo ha $\angle A = \angle C = 72°$, $\angle B = 36°$: è il **triangolo aureo** (isoscele con $AB = BC = 1$).

Per la legge dei seni:

$$\frac{AC}{\sin 36°} = \frac{AB}{\sin 72°} = \frac{1}{\sin 72°}.$$

$$AC = \frac{\sin 36°}{\sin 72°} = \frac{\sin 36°}{2\sin 36°\cos 36°} = \frac{1}{2\cos 36°}.$$

È noto che $\cos 36° = \dfrac{1+\sqrt{5}}{4}$. In alternativa, denotiamo $\ell = AC$ e usiamo la proprietà della sezione aurea: nel triangolo aureo il rapporto $BC : AC = AC : (BC - AC)$ (poiché il triangolo $ABC$ si divide in due triangoli simili). Con $BC = 1$:

$$\frac{1}{\ell} = \frac{\ell}{1 - \ell} \implies \ell(1) = \ell^2 + \ell - 1 + \ell^2... $$

Più direttamente: la bisettrice dell'angolo in $B$ divide $AC$ in modo da creare un triangolo simile ad $ABC$; si ricava l'equazione $\ell^2 + \ell - 1 = 0$ (sezione aurea), da cui:

$$\ell = \frac{-1 + \sqrt{5}}{2} = \frac{\sqrt{5}-1}{2}. \quad \square$$

---

*Fonte:* [📄 PDF p.168](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
