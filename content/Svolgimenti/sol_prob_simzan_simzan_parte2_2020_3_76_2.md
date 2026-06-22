---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Problema 2 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2020_3_76_2
of_item: prob_simzan_simzan_parte2_2020_3_76_2
prova_id: prova_simzan_simzan_parte2_2020_3_76
anno: '2020'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2020
---

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2020_3_76_2|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica)]]

A cura di Gianni Melegari, Steave Selvaduray e Pietro Velonà.

*(grafico — vedi PDF p.78)*

In un piano orizzontale $OXY$ è definito, sulla striscia $0 \le X \le d$ (con $d = 3{,}000 \cdot 10^{-1}\ \text{m}$), il campo elettrostatico costante $\vec{E}$ orientato in senso opposto all'asse $OX$. Il solenoide ha raggio $r = 4{,}000\ \text{cm}$, $N = 100$ spire, resistività $\rho = 1{,}680 \cdot 10^{-8}\ \Omega \cdot \text{m}$. Il campo magnetico all'interno è dato da:

$$B(t) = a\left(\frac{bt^2+1}{ct^2+1}\right)$$

con $a = 5{,}000 \cdot 10^{-2}\ \text{T}$, $b = 1{,}000 \cdot 10^5\ \text{s}^{-2}$, $c = 9{,}895 \cdot 10^4\ \text{s}^{-2}$.

All'istante $t = 0\ \text{s}$ una particella di massa $m = 2{,}500 \cdot 10^{-24}\ \text{kg}$ e di carica $q = 3{,}204 \cdot 10^{-19}\ \text{C}$, con velocità iniziale $v_0 = 5{,}000 \cdot 10^2\ \text{m/s}$ orientata secondo l'asse $OX$, si trova in $O$.

### Punto 1 — Modulo e direzione della velocità di entrata nel solenoide

All'istante $t = 0\ \text{s}$ il modulo del campo magnetico all'interno del solenoide è $B(0) = a = 5{,}000 \cdot 10^{-2}\ \text{T}$. La particella entra nel solenoide all'istante $t_1$ ed è soggetta a un campo magnetico la cui intensità ha raggiunto il $99{,}00\%$ del suo estremo superiore $B(\infty) = a\dfrac{b}{c}$.

Usando il secondo principio della dinamica, determiniamo il modulo del campo elettrico $E$ e la velocità $v(t_1)$ della particella all'interno del solenoide. In particolare, il punto di ingresso $P$ nel solenoide ha coordinate in $O'XY'$ che si trovano dall'intersezione delle due circonferenze:

$$\Gamma_1: X^2 + Y^2 = r_1^2, \qquad \Gamma_2: X^2 + (Y - r_1)^2 = r_1^2,$$

*(grafico — vedi PDF p.98-99)*

Le coordinate di $P$ si ottengono dai seguenti calcoli:

$$\begin{cases} X^2 + Y^2 = r_1^2 \\ X^2 + Y^2 - 2r_1 Y = 0 \end{cases} \implies \begin{cases} X^2 + Y^2 - 2r_1 Y = 0 \\ Y = \dfrac{r_1}{2} \end{cases} \tag{2}$$

Prima di ottenere dalle (2) i valori delle coordinate, calcoliamo $r_1$:

$$r_1 = \frac{mv_0}{qB(t_1)} = \frac{(2{,}500 \cdot 10^{-24}\ \text{kg}) \cdot (3{,}441 \cdot 10^2\ \text{m/s})}{(3{,}204 \cdot 10^{-19}\ \text{C}) \cdot 0{,}9900} \approx 0{,}05367\ \text{m}.$$

Sostituendo nelle (2):

$$X_P = \frac{2}{4{,}000\ \text{cm}} \cdot (5{,}367\ \text{cm})^2 \approx 5{,}145\ \text{cm}, \qquad Y_P = \frac{2}{4{,}000\ \text{cm}} \cdot (5{,}367\ \text{cm})^2 \approx 3{,}834\ \text{cm}.$$

### Punto 2 — Corrente indotta $i(t)$ nel solenoide

Per determinare la corrente indotta nel solenoide, utilizziamo la legge di Faraday-Neumann:

$$\mathcal{E}(t) = -N\frac{d\Phi(\vec{B})}{dt} = -N\pi r^2 \frac{dB(t)}{dt}. \tag{3}$$

Calcoliamo la derivata:

$$\frac{dB(t)}{dt} = a \cdot \frac{2bt(ct^2+1) - bt^2 \cdot 2ct}{(ct^2+1)^2} = a \cdot \frac{2bt}{(ct^2+1)^2} \cdot \frac{(ct^2+1) - ct^2}{1} = \frac{2a(b-c)t}{(ct^2+1)^2}.$$

Questa espressione fornisce l'opposto della forza elettromotrice indotta nel solenoide. Per il calcolo della resistenza $R$ consideriamo la seconda legge di Ohm:

$$R = \rho \frac{L}{A} \tag{5}$$

in cui $L = 2\pi r N$ è la lunghezza degli avvolgimenti e $A = \pi r_{filo}^2$ è la sezione del filo con $r_{filo} = \dfrac{r}{N}$. Pertanto, la (5) diventa:

$$R = \frac{2\pi r N}{\pi\left(\frac{r}{N}\right)^2} = \frac{2\pi r N \cdot N^2}{\pi r^2} = \frac{2N^3}{r} \cdot \frac{\rho}{\pi r} = \frac{2\rho N^3}{\pi r^2}$$

*(grafico solenoide — vedi PDF p.100)*

Sostituendo nelle (3) e nella (5) si ottiene l'espressione per il modulo della corrente:

$$|i(t)| = \frac{|\mathcal{E}(t)|}{R} = \frac{N\pi r^2}{R} \cdot \frac{2a(b-c)t}{(ct^2+1)^2} = \frac{\pi r l^2}{4\rho N^2} \cdot a(b-c) \cdot \frac{2t}{(ct^2+1)^2}. \tag{6}$$

Il segno meno indica che la corrente fluisce in $y$ in senso orario.

Il modulo $B_I(t)$ del campo magnetico prodotto dalla corrente indotta è dato da:

$$B_I(t) = \mu_0 \frac{N}{L}\,|i(t)| = \frac{\mu_0 \pi r l^2}{8\rho N^2} \cdot a(b-c) \cdot \frac{2t}{(ct^2+1)^2}.$$

*(grafico corrente — vedi PDF p.101)*

### Punto 3 — Funzione $f(x) = |i(x)|/I$ e studio di $h(x)$

Consideriamo la funzione:

$$f(x) = \frac{|i(x)|}{I},$$

dove

$$I = \frac{\pi r l^2}{8\rho N^2} \cdot \frac{a(b-c)}{\sqrt{c}}.$$

Dalla (6) si deduce, ponendo $x = t\sqrt{c}$:

$$f(x) = \frac{2x}{(x^2+1)^2}.$$

Dopo aver verificato che risulta $f(x) = \dfrac{2x}{(x^2+1)^2}$, studiamo la funzione $h: \mathbb{R} \to \mathbb{R}$ così definita:

$$h(x) = |f(x)| \quad \forall x \in \mathbb{R}.$$

$h$ è una funzione definita su tutto $\mathbb{R}$ ed è pari, per cui è sufficiente studiarne il comportamento per $x \ge 0$. La funzione $h$ ha un'unica intersezione con l'asse $x$ nell'origine e $\displaystyle\lim_{x \to \pm\infty} h(x) = 0$, quindi $h$ è sempre non negativa.

La funzione non è derivabile in $x = 0$.

Calcoliamo la derivata prima (per $x > 0$):

$$f'(x) = \frac{2(x^2+1)^2 - 2x \cdot 2(x^2+1) \cdot 2x}{(x^2+1)^4} = \frac{2(x^2+1) - 8x^2}{(x^2+1)^3} = \frac{2 - 6x^2}{(x^2+1)^3}.$$

Per $x \ge 0$: $f'(x) > 0$ per $0 < x < \dfrac{1}{\sqrt{3}}$, $f'(x) = 0$ per $x = \dfrac{1}{\sqrt{3}}$, $f'(x) < 0$ per $x > \dfrac{1}{\sqrt{3}}$.

I punti di massimo relativo di $h$ hanno coordinate $A\!\left(-\dfrac{1}{\sqrt{3}};\, \dfrac{\sqrt{3}}{2}\right)$ e $B\!\left(\dfrac{1}{\sqrt{3}};\, \dfrac{\sqrt{3}}{2}\right)$.

Nell'origine la funzione $h$ ha un punto angoloso. Si calcolano le derivate destra e sinistra:

$$h'_+(0) = \lim_{x \to 0^+} \frac{2(1-3x^2)}{(x^2+1)^3} = 2, \qquad h'_-(0) = \lim_{x \to 0^-} \frac{-2(1-3x^2)}{(x^2+1)^3} = -2.$$

Le rette tangenti al grafico di $h$ nel punto di non derivabilità $x = 0$ sono $p: y = 2x$ e $q: y = -2x$.

Calcoliamo la derivata seconda per $x \ge 0$:

$$f''(x) = \frac{-12x(x^2+1)^3 - (2-6x^2) \cdot 3(x^2+1)^2 \cdot 2x}{(x^2+1)^6} = \frac{2(1-3x^2) \cdot \ldots}{(x^2+1)^4}.$$

Per $x \ge 0$ la funzione $h''(x)$ si annulla in $x = 0$ e in $x = 1$; dai valori del segno si ottiene che $h$ ha punti di flesso in $C\!\left(-1;\, \dfrac{1}{2}\right)$ e $D\!\left(1;\, \dfrac{1}{2}\right)$.

*(grafico — vedi PDF p.102)*

### Punto 4 — Funzione $g(x) = x^4 f(x)$ e asintoti obliqui di $|g|$

La funzione $g: \mathbb{R} \to \mathbb{R}$ è per definizione:

$$g(x) = x^4 f(x) = x^4 \cdot \frac{2x}{(x^2+1)^2} = \frac{2x^5}{(x^2+1)^2},$$

e il suo valore assoluto è:

$$|g(x)| = \frac{2|x|^5}{(x^2+1)^2} = \begin{cases} \dfrac{2x^5}{(x^2+1)^2} & \text{se } x \ge 0 \\[6pt] -\dfrac{2x^5}{(x^2+1)^2} & \text{se } x < 0 \end{cases}$$

**Asintoti obliqui.** Per $x \to +\infty$:

$$\lim_{x \to +\infty} \frac{|g(x)|}{x} = \lim_{x \to +\infty} \frac{2x^4}{(x^2+1)^2} = \lim_{x \to +\infty} \frac{2x^4}{x^4\left(1+\frac{1}{x^2}\right)^2} = 2,$$

$$\lim_{x \to +\infty} \left[|g(x)| - 2x\right] = \lim_{x \to +\infty} \frac{2x^5 - 2x(x^2+1)^2}{(x^2+1)^2} = \lim_{x \to +\infty} \frac{-2x^4 - 2x}{(x^2+1)^2} = -2 \cdot \lim \frac{x^4+x}{x^4} = 0.$$

La funzione $|g(x)|$ ammette quindi un asintoto obliquo per $x \to +\infty$ di equazione $y = 2x$. Per simmetria, per $x \to -\infty$ l'asintoto obliquo ha equazione $y = -2x$. I due asintoti coincidono con le rette $p$ e $q$ tangenti al grafico di $|f(x)|$ nel suo punto di non derivabilità.

**Primo integrale.** La funzione integranda $2x - g(x)$ è dispari in un dominio simmetrico rispetto all'origine:

$$\int_{-m}^{m} [2x - g(x)]\,dx = 0.$$

**Secondo integrale.** Notiamo che:

$$\int_{-m}^{m} \bigl[2|x| - |g(x)|\bigr]\,dx = 4\int_0^m \!\!\left[x - \frac{x^5}{(x^2+1)^2}\right]dx = 4\int_0^m \frac{x(x^2+1)^2 - x^5}{(x^2+1)^2}\,dx$$

$$= 4\int_0^m \frac{x^3 + 2x^2 + x - x^5 + \ldots}{(x^2+1)^2}\,dx.$$

Semplificando: $x(x^2+1)^2 - x^5 = x(x^4 + 2x^2 + 1) - x^5 = x^4 + 2x^2 + x - x^4 \cdot x + \ldots$:

$$x(x^2+1)^2 - x^5 = x^5 + 2x^3 + x - x^5 = 2x^3 + x = x(2x^2+1).$$

Quindi:

$$4\int_0^m \frac{x(2x^2+1)}{(x^2+1)^2}\,dx = 4\int_0^m \left[\frac{2x}{x^2+1} - \frac{2x \cdot 1}{(x^2+1)^2} + \frac{x}{(x^2+1)^2}\right]dx.$$

Si verifica che il risultato è:

$$\int_{-m}^{m} \bigl[2|x| - |g(x)|\bigr]\,dx = 4\ln(m^2+1) - \frac{2m^2}{m^2+1},$$

per ogni numero reale $m$ non negativo.

---

*Fonte:* [📄 PDF p.76](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
