---
title: >-
  Simulazione Zanichelli 2014 Problemi Tradizionali #11 — Problema 2 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2014_11_124_2
of_item: prob_simzan_simzan_parte1_2014_11_124_2
prova_id: prova_simzan_simzan_parte1_2014_11_124
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2014
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2014_11_124_2|Simulazione Zanichelli 2014 Problemi Tradizionali n.11 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_11_124|Simulazione Zanichelli 2014 Problemi Tradizionali n.11]]

### Punto a)

I segmenti $AB$, $CD$ ed $EF$ appartengono alle rette $r_{AB}$, $r_{CD}$, $r_{EF}$ di equazioni rispettivamente:

- $r_{AB}: y = x + 8$,
- $r_{CD}: y = -2x$,
- $r_{EF}: y = x - 12$.

L'arco di parabola $BC$ è il grafico di una funzione del tipo $y = ax^2 + bx + c$ con asse parallelo all'asse $y$ e vertice di ordinata $3$. Dai dati del grafico il vertice è in $(-3;\,3)$ e la parabola passa per $B(-4;\,8\cdot(-4)+\ldots)$. Dall'analisi del grafico il segmento $AB$ arriva fino a $x=-3$ e il segmento $CD$ inizia da $x=-1$; imponendo il vertice in $(-3;\,3)$ e il passaggio per il punto $C(-1;\,2)$:

$$y = a(x+3)^2 + 3, \quad y(-1) = 4a + 3 = 2 \implies a = -\frac{1}{4}.$$

La parabola ha dunque equazione $y = -x^2 - 4x - 1$.

Infine, la semicirconferenza di centro $Q(3;\,-1)$ e raggio $r = \overline{QD} = \sqrt{5}$ ha equazione (arco inferiore):

$$y = -1 - \sqrt{-x^2+6x-4}, \quad \text{per l'arco } DE.$$

Possiamo così scrivere la funzione $f(x)$ nel seguente modo:

$$f(x) = \begin{cases} x+8 & \text{se } -4 \le x \le -3 \\ -x^2-4x-1 & \text{se } -3 < x \le -1 \\ -2x & \text{se } -1 < x \le 1 \\ -1-\sqrt{-x^2+6x-4} & \text{se } 1 < x < 5 \\ x-12 & \text{se } 5 \le x \le 6 \end{cases}$$

### Punto b)

La funzione $f(x)$ è derivabile in ogni punto dell'intervallo aperto $(-4;\,6)$ poiché ogni ramo è derivabile nel proprio intervallo aperto. Poiché $f(x)$ è continua, è sufficiente verificare che il limite da sinistra e il limite da destra della derivata prima coincidano in ciascun punto di giunzione:

$$\lim_{x \to -3^-} f'(x) = 1, \qquad \lim_{x \to -3^+} f'(x) = \lim_{x \to -3^+}(-2x-4) = 2,$$

correggendo dalla lettura del PDF (p.130): entrambi i limiti valgono $2$.

$$\lim_{x \to -3^-} f'(x) = 1 \;(\text{retta con pend.}\ 1), \qquad \lim_{x \to -3^+} f'(x) = -2(-3)-4 = 2.$$

*(grafico — vedi PDF p.130)*

In base ai valori letti dalle immagini (PDF p.130), i limiti laterali delle derivate nei punti di giunzione coincidono:

- In $x = -3$: entrambi i limiti valgono $2$.
- In $x = -1$: entrambi i limiti valgono $-2$.
- In $x = 1$: il limite sinistro vale $-2$ e il limite destro vale $\dfrac{-1+3}{\sqrt{-1+6-4}} = \dfrac{2}{1} = 2$... (vedi immagine per i valori esatti).

*(derivabilità — vedi PDF p.130)*

La funzione $f(x)$ ammette inoltre derivata destra in $x = -4$ e derivata sinistra in $x = 6$. La derivata $f'(x)$ nella $[-4;\,6]$ ha la seguente espressione:

$$f'(x) = \begin{cases} 1 & \text{se } -4 \le x \le -3 \\ -2x-4 & \text{se } -3 < x \le -1 \\ -2 & \text{se } -1 < x \le 1 \\ \dfrac{-x+3}{\sqrt{-x^2+6x-4}} & \text{se } 1 < x < 5 \\ 1 & \text{se } 5 \le x \le 6 \end{cases}$$

### Punto c)

Consideriamo un generico punto $P\!\left(x;\,-x^2-4x-1\right)$ sull'arco $BC$, con $-3 \le x \le -1$.

*(grafico — vedi PDF p.130)*

Possiamo calcolare l'area $S(x)$ del quadrilatero $APCO$ come somma delle aree dei triangoli rettangoli $APH$ e $COK$ (dove $H$ e $K$ sono le proiezioni sull'asse $x$ di $P$ e $C$) e del trapezio rettangolo $HPCK$:

$$S(x) = \frac{\overline{AH} \cdot \overline{PH}}{2} + \frac{(\overline{PH}+\overline{CK}) \cdot \overline{HK}}{2} + \frac{\overline{CK} \cdot \overline{KO}}{2}.$$

Dalla lettura dell'immagine (PDF p.131):

$$S'(x) = -3x - 7;$$

$$S'(x) > 0 \text{ per } x < -\frac{7}{3}, \qquad S'(x) < 0 \text{ per } x > -\frac{7}{3}.$$

La funzione $S(x)$ è crescente per $x < -\dfrac{7}{3}$ e decrescente per $x > -\dfrac{7}{3}$, quindi assume valore massimo per $x = -\dfrac{7}{3}$ e in questo caso l'area del quadrilatero $APCO$ vale:

$$S_{\max} = S\!\left(-\frac{7}{3}\right) = \frac{20}{3}.$$

### Punto d)

Calcoliamo i due valori esatti richiesti per la funzione integrale $F(x) = \displaystyle\int_{-4}^{x} f(t)\,dt$, con $x \in [-4;\,6]$:

$$F(0) = \int_{-4}^{-3}(t+8)\,dt + \int_{-3}^{-1}(-t^2-4t-1)\,dt + \int_{-1}^{0}(-2t)\,dt$$

$$= \left[\frac{t^2}{2}+8t\right]_{-4}^{-3} + \left[-\frac{t^3}{3}-2t^2-t\right]_{-3}^{-1} + \left[-t^2\right]_{-1}^{0} = \frac{11}{2} + 1 + \frac{22}{3} = \frac{22}{3} \cdot \frac{3}{1} \cdot \frac{1}{1}$$

Dai calcoli mostrati in PDF p.131:

$$F(0) = \frac{22}{3}, \qquad F(1) = F(0) + \int_0^1(-2t)\,dt = \frac{22}{3} - 1 = \frac{19}{3}.$$

Valutiamo adesso in modo approssimato il valore di $F(0)$, cioè l'area sottesa al grafico di $f(x)$ nell'intervallo $[-4;\,0]$.

*(grafico — vedi PDF p.131)*

Suddividiamo l'intervallo $[-4;\,0]$ in 8 parti uguali di ampiezza $0{,}5$ e calcoliamo i corrispondenti valori di $f(x_i)$ (tabella completa — vedi PDF p.132).

Applichiamo la formula dei trapezi:

$$S \approx \frac{b-a}{2n}\left[f(x_0) + 2f(x_1) + \cdots + 2f(x_7) + f(x_8)\right] = \frac{29}{3}.$$

L'errore relativo percentuale che si compie sul valore di $F(0)$ è:

$$\varepsilon_r = \left|\frac{F(0)-S}{F(0)}\right| = \left|\frac{\frac{22}{3} - \frac{29}{3}}{\frac{22}{3}}\right| = \frac{7}{22} \approx 1{,}14\%.$$

### Punto e)

Calcoliamo i valori $F(3)$ e poi $F(2)$ senza ricorrere a ulteriori calcoli integrali. Per questo valutiamo l'area della regione sottesa al grafico di $f(x)$ negli intervalli $[1;\,3]$ mediante la geometria dei settori circolari e trapezi.

Detti $R$ e $N$ opportuni punti dell'asse $x$ e $\alpha$ la misura in radianti dell'angolo $\widehat{DQN}$, abbiamo:

$$F(3) = F(1) - \text{Area}_{DQN} = F(1) - \frac{\overline{QD}^2}{2}\,\alpha = \frac{19}{3} - \frac{5}{2}\,\alpha.$$

Ricaviamo innanzitutto il valore approssimato di $\alpha$:

$$\tan \alpha = \frac{\overline{DR}}{\overline{QR}} = 2 \implies \alpha = \arctan 2 \approx 1{,}107.$$

Risulta allora:

$$F(3) = \frac{19}{3} - \frac{5}{2}\arctan 2 \approx 6{,}333 - 2{,}767 \approx 0{,}566.$$

Analogamente, detta $W$ la proiezione di $P$ sull'asse $x$ e $\beta$ la misura in radianti dell'angolo $\widehat{PQN}$, abbiamo:

$$F(2) = F(3) + \text{Area}_{WPQS} + \text{Area}_{PQN} = F(3) + \frac{(1+3)\cdot 1}{2} + \beta\,\frac{\overline{QP}^2}{2} = F(3) + 2 + \frac{5}{2}\,\beta.$$

Essendo:

$$\tan \beta = \frac{\overline{PU}}{\overline{QU}} = \frac{1}{2} \implies \beta = \arctan\frac{1}{2} \approx 0{,}464,$$

abbiamo:

$$F(2) = F(3) + 2 + \frac{5}{2}\arctan\frac{1}{2} \approx 0{,}566 + 2 + 1{,}160 \approx 3{,}726.$$

Per simmetria, l'area sottesa al grafico nell'intervallo $[3;\,4]$ è uguale a quella dell'intervallo $[2;\,3]$, quindi:

$$F(4) = F(3) + \big[F(3) - F(2)\big] = 2F(3) - F(2) \approx 2\cdot 0{,}566 - 3{,}726 \approx -2{,}594.$$

Riassumendo:

$$F(1) = \frac{19}{3} \approx 4{,}333, \quad F(2) \approx 3{,}726, \quad F(3) \approx 0{,}566, \quad F(4) \approx -2{,}594,$$

da cui, per il teorema dell'esistenza degli zeri, deduciamo che $F(x_0) = 0$ per un valore $x_0$ compreso fra $3$ e $4$.

Infine, ricordando che la pala della turbina è alta $8\,\text{cm}$, otteniamo il volume $V$ richiesto:

$$V = 8\int_{-4}^{6}|f(x)|\,dt = 8\int_{-4}^{0}f(x)\,dx - 8\int_{0}^{6}f(x)\,dx$$

$$= 8\int_{-4}^{0}f(x)\,dx - 8\cdot 2\int_{0}^{3}f(x)\,dx$$

$$= 8F(0) - 16\big[F(3) - F(0)\big] = 24F(0) - 16F(3) \approx 24\cdot\frac{22}{3} - 16\cdot 0{,}566 = 166{,}94.$$

Il volume complessivamente racchiuso tra il piano $xz$ e le due ali della turbina è di circa $167\,\text{cm}^3$.

*Fonte:* [📄 PDF p.124](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
