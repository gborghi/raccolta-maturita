---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2024_2_32_3
of_item: ques_simzan_simzan_parte3_2024_2_32_3
prova_id: prova_simzan_simzan_parte3_2024_2_32
anno: '2024'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2024_2_32_3|Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 #2]]

Andrea va a scuola ogni giorno con lo stesso autobus, dal lunedì al venerdì. La probabilità $p$ di trovare un posto libero è distribuita nel corso della settimana come segue:

| Giorno | Lunedì | Martedì | Mercoledì | Giovedì | Venerdì |
|--------|--------|---------|-----------|---------|---------|
| Probabilità $p$ | 10% | 20% | 30% | 20% | 10% |

**a.** La probabilità $p_1$ che nel corso della settimana Andrea possa sedersi sull'autobus almeno una volta è il complementare della probabilità che non si sieda mai:

$$p_1 = 1 - (1-0{,}1)(1-0{,}2)(1-0{,}3)(1-0{,}2)(1-0{,}1) = 1 - 0{,}9 \cdot 0{,}8 \cdot 0{,}7 \cdot 0{,}8 \cdot 0{,}9$$
$$= 1 - \frac{9 \cdot 8 \cdot 7 \cdot 8 \cdot 9}{10^5} = 1 - \frac{36288}{100000} \approx 0{,}637 = 63{,}7\%.$$

**b.** Calcoliamo la probabilità $p_2$ che nel corso della settimana Andrea abbia trovato posto di giovedì, sapendo che è stata l'unica volta nella settimana in cui ciò si è verificato.

L'evento $A$ = "si siede solo di giovedì":

$$P(A) = 0{,}9 \cdot 0{,}8 \cdot 0{,}7 \cdot 0{,}2 \cdot 0{,}9 = \frac{9 \cdot 8 \cdot 7 \cdot 2 \cdot 9}{10^5} = \frac{9072}{100000}.$$

L'evento $B$ = "si siede esattamente una volta nella settimana":

$$P(B) = \frac{1}{10^5}\left[\frac{9072}{10} + \frac{9072}{8} \cdot \ldots\right]$$

Calcoliamo $P(B)$ sommando su tutti i giorni:

$$P(B) = p_{\text{L}} \prod_{j \neq \text{L}} (1-p_j) + p_{\text{Ma}} \prod_{j \neq \text{Ma}} (1-p_j) + \ldots$$

Osserviamo che $\prod_{j=1}^5 (1-p_j) = 0{,}36288$; quindi:

$$P(\text{solo lunedì}) = \frac{0{,}1}{0{,}9} \cdot 0{,}36288 = 0{,}04032; \quad P(\text{solo venerdì}) = 0{,}04032.$$
$$P(\text{solo martedì}) = \frac{0{,}2}{0{,}8} \cdot 0{,}36288 = 0{,}09072; \quad P(\text{solo giovedì}) = 0{,}09072.$$
$$P(\text{solo mercoledì}) = \frac{0{,}3}{0{,}7} \cdot 0{,}36288 = 0{,}15552.$$

$$P(B) = 0{,}04032 + 0{,}09072 + 0{,}15552 + 0{,}09072 + 0{,}04032 = 0{,}4176.$$

$$p_2 = P(A|B) = \frac{P(A)}{P(B)} = \frac{0{,}09072}{0{,}4176} = \frac{9072}{41760} = \frac{9}{41{,}76} \approx 0{,}217 \approx 21{,}7\%.$$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
