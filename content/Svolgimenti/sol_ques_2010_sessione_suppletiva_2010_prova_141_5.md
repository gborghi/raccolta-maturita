---
title: 2010 Suppletiva — Prova — Quesito 5 — Svolgimento
tipo: soluzione
item_id: sol_ques_2010_sessione_suppletiva_2010_prova_141_5
of_item: ques_2010_sessione_suppletiva_2010_prova_141_5
prova_id: prova_2010_sessione_suppletiva_2010_prova_141
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Quesito:** [[Quesiti/ques_2010_sessione_suppletiva_2010_prova_141_5|2010 Suppletiva — Prova — Quesito 5]] · **Prova:** [[Prove/2010_sessione_suppletiva_2010_prova_141|2010 Suppletiva — Prova]]

*(Scuole italiane all'estero — Santiago del Cile — Sessione ordinaria 2010)*

Si dimostri che il perimetro di un poligono regolare di $n$ lati, inscritto in una circonferenza di raggio $r$, quando $n \to \infty$, tende alla lunghezza della circonferenza.

**Soluzione.**

Indicando con $O$ il centro della circonferenza e con $AB$ il lato del poligono regolare inscritto di $n$ lati, l'angolo al centro $\angle AOB$ vale (in radianti) $\dfrac{2\pi}{n}$.

Per il teorema della corda, il lato del poligono è:

$$AB = 2r\sin\!\left(\frac{\pi}{n}\right)$$

Il perimetro del poligono regolare di $n$ lati è:

$$2p_n = n \cdot 2r\sin\!\left(\frac{\pi}{n}\right)$$

Calcoliamo il limite per $n \to \infty$ (con $t = \pi/n \to 0$):

$$\lim_{n \to \infty} 2p_n = \lim_{n \to \infty} \pi \cdot 2r \cdot \frac{\sin\!\left(\dfrac{\pi}{n}\right)}{\dfrac{\pi}{n}} = 2\pi r \cdot \lim_{t \to 0} \frac{\sin t}{t} = 2\pi r \cdot 1 = 2\pi r$$

che è la lunghezza della circonferenza di raggio $r$.

---

*Fonte:* [📄 PDF p.153](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
