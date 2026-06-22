---
title: 2008 PNI Straordinaria — Questionario — Quesito 2 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_2
of_item: ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_2
prova_id: prova_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2008
---

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_2|2008 PNI Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122|2008 PNI Straordinaria — Questionario]]

Si calcoli il limite della funzione

$$\frac{\log \sin x}{\log \tan x}$$

quando $x$ tende a $0$.

Il limite si presenta nella forma indeterminata $\infty/\infty$. Intendiamo il logaritmo nella base $e$. Quando $x$ tende a zero (esattamente a $0^+$, altrimenti $\sin x$ è negativo e non avrebbe senso $\log \sin x$), le funzioni al numeratore e al denominatore sono continue ed hanno derivata:

$$D(\log \sin x) = \frac{\cos x}{\sin x} \quad \text{: esiste in un intorno destro di } 0;$$

$$D(\log \tan x) = \frac{1/\cos^2 x}{\tan x} = \frac{1}{\sin x \cos x} \quad \text{: esiste in un intorno destro di } 0 \text{ e non si annulla.}$$

Sono quindi verificate le ipotesi del teorema di de L'Hôpital. Vediamo se esiste il limite del rapporto delle derivate:

$$\lim_{x \to 0^+} \frac{\dfrac{\cos x}{\sin x}}{\dfrac{1}{\sin x \cos x}} = \lim_{x \to 0^+} \cos^2 x = 1$$

Senza utilizzare la regola di de L'Hôpital:

$$\frac{\log \sin x}{\log \tan x} = \frac{\log \sin x}{\log \sin x - \log \cos x} = \frac{\log \sin x}{\log \sin x \!\left(1 - \dfrac{\log \cos x}{\log \sin x}\right)} = \frac{1}{1 - \dfrac{\log \cos x}{\log \sin x}} \to 1 \quad \text{se } x \to 0^+$$

Il limite della funzione per $x$ che tende a $0$ è quindi $1$.

*Fonte:* [📄 PDF p.123](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
