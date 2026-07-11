---
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2015_15_147_2
of_item: prob_simzan_simzan_parte1_2015_15_147_2
prova_id: prova_simzan_simzan_parte1_2015_15_147
anno: '2015'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2015_15_147_2|Simulazione Zanichelli 2015 — SimZan parte1 n.15 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2015_15_147|Simulazione Zanichelli 2015 — SimZan parte1 n.15]]

**Problema 2 – Previsioni meteorologiche**

*(grafico — vedi PDF p.148)*

### Punto a)

Calcolando, basandoci sui dati del primo grafico del problema, la distanza $\overline{AH}$, che corrisponde all'ascissa di $H$ nel secondo grafico. Nel primo grafico i punti $A$ e $H$ hanno coordinate $A(0;\,18)$ e $H(16;\,6)$, quindi:

$$\overline{AH} = \sqrt{(16-0)^2 + (6-18)^2} = \sqrt{256+144} = \sqrt{400} = 20.$$

Il punto $H$ dista 20 km dal punto $A$; la pressione atmosferica in $H$ vale 120 kPa. Nel secondo grafico, il punto corrispondente ad $H$ ha dunque coordinate $H'(20;\,120)$ ed è un massimo relativo per la funzione $p(x)$.

### Punto b)

La funzione $p(x)$ disegnata nel secondo grafico del problema presenta un minimo relativo per $x = 5$ e un massimo relativo per $x = 20$. Le due funzioni proposte sono definite e derivabili in tutto $\mathbb{R}$; condizione necessaria affinché ammettano minimo e massimo relativo in $x = 5$ e in $x = 20$ è che la derivata prima si annulli in quei punti.

Calcoliamo la derivata della prima funzione $y_1(x) = a + be^{-\frac{x}{500}}$:

$$y_1'(x) = -\frac{b}{500}e^{-\frac{x}{500}} \ne 0 \quad \forall x \in [0,30],$$

pertanto la prima funzione non può rappresentare la legge $p(x)$.

Calcoliamo la derivata della seconda funzione $y_2(x) = \dfrac{300(2x-25)}{(2x-25)^2 + 225} + b$:

$$y_2'(x) = \frac{300\left[2\left((2x-25)^2+225\right) - 2(2x-25)\cdot 2(2x-25)\right]}{\left[(2x-25)^2+225\right]^2} = \frac{600\left[225-(2x-25)^2\right]}{\left[(2x-25)^2+225\right]^2}.$$

La prima funzione non può dunque rappresentare la legge $p(x)$; è $y_2(x)$ che la rappresenta.

Ricaviamo i valori delle costanti $a$ e $b$. Imponiamo che il minimo si trovi in $x=5$ e il massimo in $x=20$:

$$y_2'(5) = 0 \implies 225-(2\cdot 5 - 25)^2 = 0 \implies 225 - (-15)^2 = 225 - 225 = 0. \quad \text{VERO}$$

$$y_2'(20) = 0 \implies 225-(2\cdot 20-25)^2 = 225 - 225 = 0. \quad \text{VERO}$$

Imponendo $y_2(5) = 100$ (minimo pari a 100 kPa):

$$\frac{300(10-25)}{(10-25)^2+225} + b = 100 \implies \frac{300\cdot(-15)}{225+225} + b = 100 \implies -10 + b = 100 \implies b = 110.$$

Verifichiamo: $y_2(20) = \dfrac{300\cdot 15}{225+225} + 110 = 10+110 = 120.$ VERO.

Dunque $a = 25$ e $b = 110$.

### Punto c)

Con $a = 25$ e $b = 110$, la funzione è:

$$p(x) = \frac{300(2x-25)}{(2x-25)^2+225} + 110.$$

La funzione è definita in $\mathbb{R}$, ovunque continua e derivabile. Calcoliamo il limite:

$$\lim_{x \to \pm\infty}\left[\frac{300(2x-25)}{(2x-25)^2+225}+110\right] = 0 + 110 = 110.$$

La funzione ammette asintoto orizzontale $y = 110$ e risulta quindi sempre positiva.

Per quanto riguarda i punti di flesso, possiamo ragionare sull'andamento qualitativo:
- la funzione volge la concavità verso l'alto in $x < 5$, dove ammette un minimo relativo, e deve avvicinarsi all'asintoto orizzontale $y = 110$ dal basso per $x \to -\infty$: occorre un punto di flesso per $x < 5$;
- la funzione volge la concavità verso il basso per $5 < x < 20$, dove è crescente;
- la funzione per $x > 20$ è decrescente e deve avvicinarsi all'asintoto $y = 110$ dall'alto, quindi la concavità cambia nuovamente: occorre un punto di flesso per $x > 20$.

La funzione $p(x)$ presenta dunque **tre punti di flesso**.

*(grafico — vedi PDF p.156)*

### Punto d)

Il valore medio della pressione atmosferica lungo il tratto $AB$ (da $x=0$ a $x=30$):

$$\bar{p} = \frac{1}{30}\int_0^{30}\left[\frac{300(2x-25)}{(2x-25)^2+225}+110\right]dx$$

$$= \frac{1}{30}\left[\frac{300}{4}\ln\!\left((2x-25)^2+225\right)\right]_0^{30} + 110 = \frac{1}{30}\cdot\frac{75}{1}\left[\ln\!\left((35)^2+225\right)-\ln\!\left((25)^2+225\right)\right] + 110$$

$$= \frac{5}{2}\ln\!\frac{1450}{850} + 110 \simeq \frac{5}{2}\cdot 0{,}534 + 110 \simeq 111{,}34\ \text{kPa}.$$

Lungo la diagonale $AB$, la pressione atmosferica media vale 111,34 kPa.

### Punto e)

Nel riferimento $Oxyz$ indicato, ai punti $L$ e $H$ corrispondono i punti di coordinate $L'(4;\,15;\,100)$ e $H'(16;\,6;\,120)$.

Le equazioni parametriche della retta $r$ passante per $L'$ e $H'$ sono:

$$\begin{cases} x = 4 + 12k \\ y = 15 - 9k \\ z = 100 + 20k \end{cases}, \quad k \in \mathbb{R}.$$

Per le equazioni cartesiane calcoliamo le proporzioni:

$$\frac{x-4}{12} = \frac{y-15}{-9} = \frac{z-100}{20}.$$

Dalla prima e dalla terza proporzione:
$$\frac{x-4}{12} = \frac{z-100}{20} \implies 20(x-4) = 12(z-100) \implies 5x - 3z + 280 = 0.$$

Dalla prima e dalla seconda:
$$\frac{x-4}{12} = \frac{y-15}{-9} \implies -9(x-4) = 12(y-15) \implies -3x - 4y + 72 = 0 \implies 3x + 4y - 72 = 0.$$

Le equazioni cartesiane della retta $r$ sono:

$$\begin{cases} 3x + 4y - 72 = 0 \\ 5x - 3z + 280 = 0. \end{cases}$$

---

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
