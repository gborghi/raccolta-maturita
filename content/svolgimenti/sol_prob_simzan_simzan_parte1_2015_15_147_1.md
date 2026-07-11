---
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2015_15_147_1
of_item: prob_simzan_simzan_parte1_2015_15_147_1
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

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2015_15_147_1|Simulazione Zanichelli 2015 — SimZan parte1 n.15 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2015_15_147|Simulazione Zanichelli 2015 — SimZan parte1 n.15]]

**Problema 1 – Conversazioni telefoniche**

*(grafico — vedi PDF p.147)*

### Punto a)

La funzione $f(t) = Ate^{-Bt}$ è definita, continua e derivabile per ogni $t \ge 0$, perché prodotto di due funzioni continue e derivabili in $\mathbb{R}_0^+$. Risulta $f(t)$ positiva per ogni $t > 0$ e nulla per $t = 0$. Vale il limite:

$$\lim_{t \to +\infty} f(t) = \lim_{t \to +\infty} \frac{At}{e^{Bt}} = 0,$$

in quanto la funzione esponenziale è un infinito di ordine superiore di qualunque funzione polinomiale. In alternativa possiamo notare che il limite è una forma indeterminata del tipo $\frac{\infty}{\infty}$ e che sono soddisfatte le ipotesi del teorema de L'Hôpital. Passando quindi al limite del rapporto delle derivate:

$$\lim_{t \to +\infty} \frac{At}{e^{Bt}} = \lim_{t \to +\infty} \frac{A}{Be^{Bt}} = 0.$$

Consideriamo la derivata prima di $f(t)$ e studiamo il suo segno:

$$f'(t) = Ae^{-Bt}(1 - Bt) \implies f'(t) = 0 \implies t = \frac{1}{B},$$

$$f'(t) > 0 \implies 0 < t < \frac{1}{B}, \qquad f'(t) < 0 \implies t > \frac{1}{B}.$$

La funzione $f$ è dunque crescente in $\left[0, \frac{1}{B}\right]$ e decrescente in $\left[\frac{1}{B}, +\infty\right[$, con un solo punto di massimo per $t = \frac{1}{B}$. Il suo andamento è quindi simile a quello del poligono delle frequenze.

### Punto b)

La funzione $f(t)$ deve assumere massimo per $t = 1{,}5$, come il poligono delle frequenze, quindi:

$$\frac{1}{B} = \frac{3}{2} \implies B = \frac{2}{3}.$$

Imponiamo che l'area del sottografico di $f(t)$ nell'intervallo $[0, +\infty[$ sia uguale a $S_{14} = 153$.

Calcoliamo per parti l'integrale:

$$\int_0^k Ate^{-\frac{2}{3}t}\,dt = A\int_0^k te^{-\frac{2}{3}t}\,dt = A\left\{\left[-\frac{3}{2}te^{-\frac{2}{3}t}\right]_0^k + \frac{3}{2}\int_0^k e^{-\frac{2}{3}t}\,dt\right\} =$$

$$= \frac{3}{2}A\left[-te^{-\frac{2}{3}t} - \frac{3}{2}e^{-\frac{2}{3}t}\right]_0^k = \frac{3}{2}A\!\left(-ke^{-\frac{2}{3}k} - \frac{3}{2}e^{-\frac{2}{3}k} + \frac{3}{2}\right).$$

Deve essere:

$$\lim_{k \to +\infty} \frac{3}{2}A\!\left(-ke^{-\frac{2}{3}k} - \frac{3}{2}e^{-\frac{2}{3}k} + \frac{3}{2}\right) = 153.$$

Al primo membro otteniamo $\dfrac{9}{4}A$, quindi:

$$\frac{9}{4}A = 153 \implies A = 68.$$

### Punto c)

Dobbiamo studiare la funzione:

$$f(t) = 68t\,e^{-\frac{2}{3}t}.$$

La funzione $f(t)$ nell'intervallo $[0, +\infty[$ è continua, derivabile, nulla solo per $t = 0$, positiva altrove, con asintoto orizzontale l'asse delle ascisse.

La derivata prima

$$f'(t) = \frac{68}{3}\,e^{-\frac{2}{3}t}(3 - 2t)$$

si annulla solamente nel punto $t = \dfrac{3}{2}$, dove la funzione assume il suo valore massimo:

$$f\!\left(\frac{3}{2}\right) = \frac{204}{2e} \simeq 37{,}52.$$

Calcoliamo la derivata seconda:

$$f''(t) = \frac{68}{3}\!\left[-\frac{2}{3}e^{-\frac{2}{3}t}(3-2t) - 2e^{-\frac{2}{3}t}\right] = -\frac{136}{3}\,e^{-\frac{2}{3}t}\!\left[1-\frac{2}{3}t+1\right] = \frac{272}{9}\,e^{-\frac{2}{3}t}(t-3).$$

La derivata seconda si annulla per $t = 3$, dove il grafico presenta un punto di flesso obliquo.

Il confronto tra il grafico del modello funzionale e il poligono delle frequenze mostra un discreto livello di coerenza dell'andamento qualitativo, sebbene la condizione di equivalenza delle aree sottese sia andata a discapito della fedeltà di riproduzione del massimo relativo, che risulta molto sottostimato.

*(grafico — vedi PDF p.153)*

### Punto d)

Calcoliamo l'integrale $\displaystyle\int_0^4 68t\,e^{-\frac{2}{3}t}\,dt$ utilizzando l'espressione ottenuta al punto b):

$$\int_0^4 68t\,e^{-\frac{2}{3}t}\,dt = 102\!\left[-4e^{-\frac{8}{3}} - \frac{3}{2}e^{-\frac{8}{3}} + \frac{3}{2}\right] = 102\!\left[-\frac{11}{2}e^{-\frac{8}{3}} + \frac{3}{2}\right] = 53\!\left(3 - 11e^{-\frac{8}{3}}\right) \simeq 114.$$

Questo valore rappresenta il numero di studenti che hanno dichiarato di aver fatto al più 4 ore di conversazione telefonica nella settimana, numero valutato attraverso la funzione modello $f(t)$.

### Punto e)

Il rapporto

$$p(4) = \frac{\displaystyle\int_0^4 f(t)\,dt}{S_{14}} = \frac{114}{153} \simeq 0{,}75 \implies 75\%$$

rappresenta la percentuale di studenti, sul totale di studenti intervistati, che hanno avuto conversazioni telefoniche per al più 4 ore nella settimana. La percentuale 75% rappresenta anche la probabilità, secondo il modello funzionale $f(t)$ del problema, che uno studente scelto a caso nel gruppo abbia dichiarato un tempo totale di conversazione minore o uguale a 4 ore settimanali.

### Punto f)

Secondo i dati dell'istogramma, gli studenti che hanno dichiarato una durata delle conversazioni maggiore di 2 ore e minore o uguale a 3 ore sono 32 (altezza del terzo rettangolo), quindi la percentuale sul totale degli studenti intervistati è:

$$\frac{32}{153} \simeq 0{,}21 \implies 21\%.$$

Secondo la funzione modello, la percentuale di studenti che hanno telefonato per una durata compresa fra le 2 e le 3 ore è circa il 21% circa (valutato con $\displaystyle\int_2^3 f(t)\,dt \simeq 32$).

---

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
