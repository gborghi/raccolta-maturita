---
title: 2009 PNI Straordinaria — Questionario — Quesito 6 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_6
of_item: ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_6
prova_id: prova_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2009
---

**Quesito:** [[Quesiti/ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_6|2009 PNI Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130|2009 PNI Straordinaria — Questionario]]

Un serbatoio della capacità di $400\, \text{m}^3$ deve avere la forma di un cilindro circolare retto senza coperchio. Il materiale da costruzione per il fondo costa per metro quadrato il doppio di quello che serve per le pareti laterali. Si calcoli il rapporto fra il raggio $R$ e l'altezza $h$ in modo che la costruzione risulti la più economica.

Dalla formula del volume del cilindro deduciamo che:

$$V_{\text{cilindro}} = \pi R^2 h = 400\, \text{m}^3$$

Sia $c$ il costo al metro quadrato del materiale da costruzione per la superficie laterale:

$$\text{Costo fondo} = \pi R^2 \cdot 2c \,; \quad \text{Costo superficie laterale} = 2\pi R h \cdot c$$

$$\text{Costo totale} = \pi R^2 \cdot 2c + 2\pi R h \cdot c = y$$

Dal volume ricaviamo $h = \dfrac{400}{\pi R^2}$, quindi il costo totale in funzione del raggio di base è:

$$y = 2\pi R^2 c + 2c \cdot \frac{400}{R} = 2\pi R^2 c + \frac{800c}{R} = f(R) \,, \quad R > 0$$

Dobbiamo trovare il rapporto tra $R$ ed $h$ in modo che $y$ risulti minima:

$$y' = 4\pi c R - \frac{800c}{R^2} \ge 0 \quad \Leftrightarrow \quad \pi R^3 - 200 \ge 0 \quad \Leftrightarrow \quad R \ge \sqrt[3]{\frac{200}{\pi}}$$

Quindi $y$ è crescente se $R > \sqrt[3]{\dfrac{200}{\pi}}$ e decrescente se $0 < R < \sqrt[3]{\dfrac{200}{\pi}}$: il minimo si ha per $R = \sqrt[3]{\dfrac{200}{\pi}}$, da cui:

$$h = \frac{400}{\pi R^2} = \frac{400}{\pi \left(\dfrac{200}{\pi}\right)^{2/3}} = 2\sqrt[3]{\frac{200}{\pi}}$$

Pertanto:

$$\frac{R}{h} = \frac{\sqrt[3]{\dfrac{200}{\pi}}}{2\sqrt[3]{\dfrac{200}{\pi}}} = \frac{1}{2}$$

Affinché la costruzione risulti la più economica, l'altezza del cilindro deve essere il doppio del raggio di base, cioè il cilindro deve essere **equilatero**.

*Fonte:* [📄 PDF p.133](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
