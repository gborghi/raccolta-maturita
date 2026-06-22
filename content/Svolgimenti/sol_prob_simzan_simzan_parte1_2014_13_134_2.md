---
title: 'Simulazione Zanichelli 2014 #13 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2014_13_134_2
of_item: prob_simzan_simzan_parte1_2014_13_134_2
prova_id: prova_simzan_simzan_parte1_2014_13_134
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2014_13_134_2|Simulazione Zanichelli 2014 #13 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_13_134|Simulazione Zanichelli 2014 #13]]

**Una cura efficace**

La funzione $n(t)$ è definita nell'intervallo $[0;\,+\infty[$ e quindi è possibile applicare i concetti di limite e derivata su tale intervallo.

**a)** Si tratta di mostrare che, comunque si scelgono le costanti $a$ e $b$ positive, risulta:

$$\lim_{t \to +\infty} n(t) = \lim_{t \to +\infty} \frac{ae^t}{(b+e^t)^2} = \lim_{t \to +\infty} \frac{a}{e^t\!\left(\frac{b}{e^t}+1\right)^2} = 0.$$

Il limite è verificato, in quanto:

$$\lim_{t\to+\infty} \frac{ae^t}{(b+e^t)^2} = \lim_{t\to+\infty} \frac{ae^t}{e^{2t}\!\left(\frac{b}{e^t}+1\right)^2} = \lim_{t\to+\infty} \frac{a}{e^t\!\left(\frac{b}{e^t}+1\right)^2} = 0.$$

**b)** Consideriamo la derivata della funzione $n(t)$:

$$n'(t) = \frac{ae^t(b+e^t)^2 - ae^t \cdot 2(b+e^t)e^t}{(b+e^t)^4} = \frac{ae^t\bigl[(b+e^t) - 2e^t\bigr]}{(b+e^t)^3} = \frac{ae^t(b - e^t)}{(b+e^t)^3}.$$

Poiché $(b+e^t)^3 > 0$ per ogni $b$ costante reale positiva, per studiare il segno di $n'(t)$ basta studiare il segno del numeratore $ae^t(b - e^t)$.

Se $b > 1$, allora:

- $n'(t) > 0$ per $0 < t < \ln b$; in tale intervallo il numero $n(t)$ di persone infette è in aumento;
- $n'(t) < 0$ per $t > \ln b$; in tale intervallo il numero $n(t)$ di persone infette decresce.

Per $\bar{t} = \ln b$ la funzione ha un massimo relativo che, per quanto dimostrato in a), è anche il massimo assoluto della funzione $n(t)$, cioè il picco di massima diffusione della patologia.

Per quanto riguarda il numero di malati rispetto agli istanti $t = 0$ e $t_2 = 2\bar{t} = 2\ln b$:

$$n(0) = \frac{a}{(b+1)^2}, \qquad n(2\ln b) = \frac{a e^{2\ln b}}{(b + e^{2\ln b})^2} = \frac{ab^2}{(b + b^2)^2} = \frac{ab^2}{b^2(1+b)^2} = \frac{a}{(1+b)^2} = n(0).$$

Quindi il numero di malati all'istante $t_2 = 2\ln b$ è uguale al numero iniziale $n(0)$.

**c)** Imponiamo le condizioni:

$$\begin{cases} \bar{t} = 2\ln 2 \\ n(0) = 16 \end{cases}$$

Poiché il massimo di $n(t)$ si ha per $\bar{t} = \ln b$, dalla condizione $\ln b = 2\ln 2$ si ottiene $b = 4$.

Dall'altra condizione:

$$\frac{a}{(1+b)^2} = 16 \;\longrightarrow\; \frac{a}{(1+4)^2} = 16 \;\longrightarrow\; \frac{a}{25} = 16 \;\longrightarrow\; a = 400.$$

La funzione ottenuta è dunque:

$$n(t) = \frac{400e^t}{(4+e^t)^2}, \qquad t \ge 0.$$

Studiamo $n(t)$:

- $n(0) = \dfrac{400}{25} = 16$, $\lim_{t\to+\infty} n(t) = 0$, quindi $y = 0$ è asintoto orizzontale;
- $n'(t) > 0$ per $0 < t < 2\ln 2$ e $n'(t) < 0$ per $t > 2\ln 2$;
- il massimo si raggiunge in $t_1 = 2\ln 2$: $n_{\max} = \dfrac{400 \cdot 4}{(4+4)^2} = \dfrac{1600}{64} = 25$.

*(grafico — vedi PDF p.141)*

**d)** Sappiamo che $2\bar{t} = 4\ln 2$. Il numero medio di persone infette al giorno nel periodo $[0;\,4\ln 2]$ è fornito dal teorema del valor medio:

$$\bar{n} = \frac{1}{4\ln 2} \int_0^{4\ln 2} \frac{400e^t}{(4+e^t)^2}\,dt.$$

Calcoliamo l'integrale con la sostituzione $u = 4 + e^t$, $du = e^t\,dt$ (quando $t=0$, $u=5$; quando $t=4\ln2$, $u=4+e^{4\ln2}=4+16=20$):

$$\int_0^{4\ln 2} \frac{400e^t}{(4+e^t)^2}\,dt = 400\int_5^{20} \frac{du}{u^2} = 400\left[-\frac{1}{u}\right]_5^{20} = 400\left(-\frac{1}{20}+\frac{1}{5}\right) = 400 \cdot \frac{3}{20} = 60.$$

Quindi:

$$\bar{n} = \frac{60}{4\ln 2} = \frac{15}{\ln 2} \approx \frac{15}{0{,}693} \approx 21{,}6 \approx 22 \text{ persone/giorno.}$$

**e)** La funzione $n(t)$ si riferisce a un campione che mappa l'$1\text{‰}$ dell'intera popolazione. Se ogni ammalato è rimasto infettato in media due giorni, il numero totale di ammalati nell'intera popolazione nei primi 100 giorni di studio si stima come:

$$N = 1000 \cdot \frac{1}{2}\int_0^{100} n(t)\,dt \approx 500 \cdot \int_0^{100} \frac{400e^t}{(4+e^t)^2}\,dt.$$

Usando la stessa primitiva:

$$\int_0^{100} \frac{400e^t}{(4+e^t)^2}\,dt = 400\left[-\frac{1}{4+e^t}\right]_0^{100} = 400\left(\frac{1}{5} - \frac{1}{4+e^{100}}\right) \approx 400 \cdot \frac{1}{5} = 80.$$

Quindi:

$$N \approx 500 \cdot 80 = 40\,000 \text{ ammalati.}$$

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
