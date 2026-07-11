---
title: 2006 Sessione Ordinaria — Prova (p.65) — Quesito 4 — Svolgimento
tipo: soluzione
item_id: sol_ques_2006_sessione_ordinaria_2006_prova_65_4
of_item: ques_2006_sessione_ordinaria_2006_prova_65_4
prova_id: prova_2006_sessione_ordinaria_2006_prova_65
anno: '2006'
pdf: Prova_Maturita_2006.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2006
---

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_65_4|2006 Sessione Ordinaria — Prova (p.65) — Quesito 4]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_65|2006 Sessione Ordinaria — Prova (p.65)]]

Calcolare la derivata di $f(x) = \tan x$.

**Primo modo** (derivata di un quoziente):

$$D(\tan x) = D\!\left(\frac{\sin x}{\cos x}\right) = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = 1 + \tan^2 x$$

**Secondo modo** (definizione di derivata):

$$D(\tan x) = \lim_{h \to 0} \frac{\tan(x+h) - \tan x}{h} = \lim_{h \to 0} \frac{1}{h} \cdot \left(\frac{\tan x + \tan h}{1 - \tan x \tan h} - \tan x\right)$$

$$= \lim_{h \to 0} \frac{1}{h} \cdot \frac{\tan h + \tan^2 x \tan h}{1 - \tan x \tan h} = \lim_{h \to 0} \frac{\tan h}{h} \cdot \frac{1 + \tan^2 x}{1 + \tan x \tan h} = 1 \cdot \frac{1 + \tan^2 x}{1} = \frac{1}{\cos^2 x}$$

---

*Fonte:* [📄 PDF p.78](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
