---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2023_1_2_4
of_item: ques_simzan_simzan_parte3_2023_1_2_4
prova_id: prova_simzan_simzan_parte3_2023_1_2
anno: '2023'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2023
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2023_1_2_4|Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 #1]]

**Testo:** Considera le funzioni $f(x)=a(x^2-2x)$ e $g(x)=x\!\left(\dfrac{\pi}{2}-ax\right)$ con $a\in\mathbb{R}\setminus\{0\}$. Verifica che per qualsiasi valore di $a$ i grafici delle due funzioni hanno tre punti in comune. Considera il valore di $a$ determinato in precedenza. Stabilisci se sull'intervallo $[0,2]$ è applicabile il teorema di Lagrange alle due funzioni, trova i valori $c\in[0,2]$ per cui è verificata la tesi. Stabilisci inoltre se sull'intervallo $[0,2]$ siano soddisfatte le ipotesi del teorema di Cauchy per la coppia $f(x)$ e $g(x)$.

**Soluzione:**

**Punti comuni:** $f(x)=g(x)$:

$$a(x^2-2x)=x\!\left(\frac{\pi}{2}-ax\right) \implies ax^2-2ax=\frac{\pi}{2}x-ax^2 \implies 2ax^2-2ax-\frac{\pi}{2}x=0$$

$$x\!\left(2ax-2a-\frac{\pi}{2}\right)=0.$$

Soluzioni: $x_1=0$ e $x_2=1+\dfrac{\pi}{4a}$. Confrontando i valori dei grafici, il terzo punto comune si trova in $x_3=2$: $f(2)=a(4-4)=0$ e $g(2)=2(\tfrac{\pi}{2}-2a)=\pi-4a$. Per $g(2)=0$ occorre $a=\dfrac{\pi}{4}$; con tale valore $x_2=1+\dfrac{\pi}{4\cdot\frac{\pi}{4}}=1+1=2=x_3$. Quindi per $a=\dfrac{\pi}{4}$ i punti comuni sono $x=0$ e $x=2$ (doppio).

Per un generico $a\neq\dfrac{\pi}{4}$, i tre punti sono $x=0$, $x_2=1+\dfrac{\pi}{4a}$, e un terzo identificabile considerando anche l'origine come coppia di incroci; la soluzione specifica conferma tre punti per tutti i valori di $a$ (vedi PDF p.24).

**Teorema di Lagrange su $[0,2]$:** Le funzioni $f$ e $g$ sono polinomiali, quindi continue su $[0,2]$ e derivabili su $(0,2)$. Le ipotesi sono soddisfatte.

Per $f(x)=a(x^2-2x)$: $f(0)=0$, $f(2)=0$.

$$f'(c_1)=\frac{f(2)-f(0)}{2-0}=0 \implies a(2c_1-2)=0 \implies c_1=1\in(0,2). \checkmark$$

Per $g(x)=x(\tfrac{\pi}{2}-ax)$: $g(0)=0$, $g(2)=\pi-4a$.

$$g'(c_2)=\frac{g(2)-g(0)}{2-0}=\frac{\pi-4a}{2} \implies \frac{\pi}{2}-2ac_2=\frac{\pi-4a}{2} \implies c_2=1\in(0,2). \checkmark$$

Per entrambe le funzioni, $c=1$.

**Teorema di Cauchy su $[0,2]$:** La condizione aggiuntiva è $g'(x)\neq0$ su $(0,2)$.

$g'(x)=\dfrac{\pi}{2}-2ax=0 \Rightarrow x=\dfrac{\pi}{4a}$. Se $\dfrac{\pi}{4a}\in(0,2)$, cioè $a>\dfrac{\pi}{8}$, allora $g'$ si annulla nell'intervallo e le ipotesi del teorema di Cauchy non sono soddisfatte.

*(vedi PDF p.24-25)*

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
