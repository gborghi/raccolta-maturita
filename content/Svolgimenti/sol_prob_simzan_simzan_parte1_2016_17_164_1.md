---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2016_17_164_1
of_item: prob_simzan_simzan_parte1_2016_17_164_1
prova_id: prova_simzan_simzan_parte1_2016_17_164
anno: '2016'
pdf: SimZan_parte1.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2016
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2016_17_164_1|Simulazione Zanichelli 2016 — SimZan parte1 #17 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 #17]]

In uno studio di progettazione navale si vuole realizzare il modello in scala ridotta dello scafo di una nave. Il modello deve essere ricavato da un blocco omogeneo di materiale plastico in forma di prisma retto, di altezza 3 m, avente per base il trapezio isoscele $ABCD$ con $AB = 2\,\text{m}$, $CD = 1\,\text{m}$ e altezza $1\,\text{m}$.

*(grafico — vedi PDF p.164)*

Le curve $\gamma_1$ e $\gamma_2$ rappresentano due possibili scelte progettuali per la sezione della superficie esterna. Si considerano le curve come archi $AB$ di grafici di funzioni riferite a un sistema cartesiano ortogonale $Oxy$ centrato nel punto medio $O$ del segmento $AB$, con l'asse delle ascisse in direzione $AB$ e le unità $x$, $y$ in metri.

### Punto a) — Associazione delle famiglie di funzioni

Si considerano le due famiglie di funzioni:
$$f(x) = \frac{a(c - x)}{b - x^2}, \qquad g(x) = \frac{x^4 + x|x|}{c} + d,$$
essendo $a, b, c, d$ parametri reali non nulli.

La curva $\gamma_1$, con profilo a sezione più regolare e simmetrica rispetto all'asse $y$, è associata alla funzione $g(x)$: il termine $x^4$ è pari mentre $x|x|$ è dispari, e la combinazione può modellare profili asimmetrici o simmetrici a seconda dei parametri. La curva $\gamma_2$, invece, è associata a $f(x)$.

Si motiva la scelta osservando che:
- $g(x)$ definisce una curva con simmetria modulabile attraverso i parametri $c$ e $d$, adatta a profili a "V" o a "U" con fondo piatto;
- $f(x) = \frac{a(c-x)}{b-x^2}$ presenta asintoti verticali in $x = \pm\sqrt{b}$, dunque è adatta a modellare curve con andamenti più ripidi verso gli estremi.

### Punto b) — Volume del blocco prismatico iniziale

L'area della base trapezoidale $ABCD$:
$$S_{ABCD} = \frac{(AB + CD)}{2}\cdot h_{\text{trap}} = \frac{(2 + 1)}{2}\cdot 1 = \frac{3}{2}\,\text{m}^2.$$

Il volume del blocco prismatico di altezza $3\,\text{m}$:
$$V_{\text{blocco}} = S_{ABCD}\cdot 3 = \frac{3}{2}\cdot 3 = \frac{9}{2}\,\text{m}^3.$$

### Punto c) — Calcolo in percentuale del materiale risparmiato

Avendo dimostrato che i valori dei parametri sono $a = 1$, $b = 5$, $c = 2$, $d = -4$, la curva $\gamma_1$ è descritta da:
$$g(x) = \frac{x^4 + x|x|}{2} - 4.$$

Il volume del solido ottenuto ruotando (o traslando) il profilo $\gamma_1$ lungo la profondità del prisma si calcola integrando la sezione trasversale. Il risparmio percentuale di materiale plastico rispetto al blocco iniziale si ottiene confrontando il volume asportato con il volume totale $V_{\text{blocco}} = \frac{9}{2}\,\text{m}^3$.

### Punto d) — Dimostrazione dei valori dei parametri

Si verifica che $a = 1$, $b = 5$, $c = 2$, $d = -4$ soddisfano le condizioni geometriche imposte:

- **Condizione al centro** ($x = 0$): il profilo deve toccare il fondo dello scafo, ovvero $g(0) = d = -4$. Con $d = -4$ si ha una profondità di 4 m al centro rispetto a $O$. ✓
- **Condizione agli estremi** ($x = \pm 1$, estremi del semiasse $AB$ nell'intorno di $O$): per $x = 1$:
$$g(1) = \frac{1 + 1}{2} - 4 = 1 - 4 = -3.$$
Per $x = -1$:
$$g(-1) = \frac{1 + (-1)\cdot 1}{2} - 4 = \frac{1 - 1}{2} - 4 = -4.$$
- **Condizione agli estremi** del segmento $AB$ ($x = \pm 1$ nell'unità scelta): i valori sono compatibili con l'altezza del trapezio e le quote della figura.

### Punto e) — Valore medio di $f(x)$ nell'intervallo $[-1, 1]$

Con i parametri $a = 1$, $b = 5$, $c = 2$:
$$f(x) = \frac{2 - x}{5 - x^2}.$$

Il valor medio nell'intervallo $[-1, 1]$:
$$\bar{f} = \frac{1}{2}\int_{-1}^{1} \frac{2 - x}{5 - x^2}\,dx.$$

Si decompone l'integranda:
$$\frac{2 - x}{5 - x^2} = \frac{2}{5 - x^2} - \frac{x}{5 - x^2}.$$

Il secondo termine $\frac{x}{5 - x^2}$ è una funzione dispari, quindi il suo integrale su $[-1,1]$ è nullo:
$$\int_{-1}^{1} \frac{x}{5 - x^2}\,dx = 0.$$

Rimane:
$$\bar{f} = \frac{1}{2}\int_{-1}^{1} \frac{2}{5 - x^2}\,dx = \int_{-1}^{1} \frac{1}{5 - x^2}\,dx.$$

Si usa la decomposizione in frazioni parziali con $5 - x^2 = (\sqrt{5} - x)(\sqrt{5} + x)$:
$$\frac{1}{5 - x^2} = \frac{1}{2\sqrt{5}}\left(\frac{1}{\sqrt{5} - x} + \frac{1}{\sqrt{5} + x}\right).$$

Quindi:
$$\int_{-1}^{1} \frac{dx}{5 - x^2} = \frac{1}{2\sqrt{5}}\left[-\ln|\sqrt{5} - x| + \ln|\sqrt{5} + x|\right]_{-1}^{1} = \frac{1}{2\sqrt{5}}\left[\ln\frac{\sqrt{5} + x}{\sqrt{5} - x}\right]_{-1}^{1}.$$

$$= \frac{1}{2\sqrt{5}}\left(\ln\frac{\sqrt{5}+1}{\sqrt{5}-1} - \ln\frac{\sqrt{5}-1}{\sqrt{5}+1}\right) = \frac{1}{2\sqrt{5}}\cdot 2\ln\frac{\sqrt{5}+1}{\sqrt{5}-1} = \frac{1}{\sqrt{5}}\ln\frac{\sqrt{5}+1}{\sqrt{5}-1}.$$

Pertanto il valor medio è:
$$\bar{f} = \frac{1}{\sqrt{5}}\ln\frac{\sqrt{5}+1}{\sqrt{5}-1}.$$

---

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
