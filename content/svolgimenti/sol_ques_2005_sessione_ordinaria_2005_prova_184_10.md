

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_10|2005 Ordinaria PNI — Prova — Quesito 10]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Il $40\%$ della popolazione ha $60$ anni o più. Ci si chiede se l'età media possa comunque valere $30$ anni.

Dividiamo la popolazione in due gruppi:

- il gruppo $A$, formato dal $40\%$ della popolazione con età non inferiore a $60$ anni; indichiamo con $m_A$ la sua età media, per cui $m_A \geq 60$;
- il gruppo $B$, formato dal restante $60\%$ con età inferiore a $60$ anni; indichiamo con $m_B$ la sua età media, con $m_B \geq 0$.

L'età media $\mu$ dell'intera popolazione è la media ponderata delle due età medie, con pesi pari alle rispettive frazioni di popolazione:

$$\mu = 0{,}40 \cdot m_A + 0{,}60 \cdot m_B.$$

Poiché $m_A \geq 60$, il solo gruppo degli anziani porta alla media un contributo di almeno

$$0{,}40 \cdot 60 = 24 \text{ anni.}$$

Questo valore, $24$, è minore di $30$: quindi il vincolo sul $40\%$ della popolazione **non** impedisce che la media raggiunga $30$ anni. Resta da vedere se il contributo del gruppo $B$ può colmare la differenza.

Imponiamo $\mu = 30$ nel caso limite $m_A = 60$:

$$0{,}40 \cdot 60 + 0{,}60 \cdot m_B = 30 \;\Rightarrow\; 24 + 0{,}60\, m_B = 30 \;\Rightarrow\; m_B = \frac{6}{0{,}60} = 10.$$

Dunque è sufficiente che il $60\%$ della popolazione (quella con meno di $60$ anni) abbia un'età media di $10$ anni: una condizione del tutto plausibile per una popolazione molto giovane, ricca di bambini e ragazzi.

**Conclusione.** Sì, l'età media della popolazione può essere uguale a $30$ anni. Non c'è alcuna contraddizione: il $40\%$ di anziani spinge la media verso l'alto solo fino a un minimo di $24$ anni, e il restante $60\%$, se sufficientemente giovane (età media attorno ai $10$ anni), può portare la media complessiva esattamente a $30$. Anzi, valori di $m_A$ superiori a $60$ sono compatibili con la media $30$ a patto di abbassare corrispondentemente $m_B$ (ad esempio $m_A = 70$ richiede $m_B \approx 3{,}3$), il che mostra che la risposta resta affermativa in un ampio intervallo di situazioni.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
