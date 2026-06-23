---
title: 2025 Suppletiva — Prova — Quesito 1 — Svolgimento
tipo: soluzione
item_id: sol_ques_2025_sessione_suppletiva_2025_prova_10_1
of_item: ques_2025_sessione_suppletiva_2025_prova_10_1
prova_id: prova_2025_sessione_suppletiva_2025_prova_10
anno: '2025'
pdf: Prova_Maturita_2025.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2025
---

**Quesito:** [[Quesiti/ques_2025_sessione_suppletiva_2025_prova_10_1|2025 Suppletiva — Prova — Quesito 1]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

**Impostazione.** Sia $ABCD$ aureo con lato lungo $AB$ e lato corto $AD$, dunque $\dfrac{AB}{AD}=\varphi$. Normalizziamo $AD=1$, cosicché $AB=\varphi$. La proprie\-tà fondamentale della sezione aurea è
$$
\varphi^{2}=\varphi+1,\qquad\text{equivalentemente}\qquad \varphi-1=\frac{1}{\varphi}.
$$
**La piega.** La piega $C'P$ è parallela ai lati corti $AD$ e $BC$ e stacca, dalla parte di $AB$, il rettangolo $ABPC'$ di lati $AB=\varphi$ (lato lungo) e $AC'=BP$ (lato corto). La costruzione della figura porta il lato $DC$ a sovrapporsi internamente in modo che la striscia residua $C'PCD$ (di altezza $AD-AC'$) si ripieghi esattamente sul rettangolo $ABPC'$: ciò impone che $ABPC'$ sia il rettangolo aureo *simile* a $ABCD$ ottenuto togliendo un quadrato di lato pari al lato corto.

**Verifica dell'aureità.** Togliendo dal rettangolo aureo $ABCD$ (lati $\varphi$ e $1$) un quadrato di lato $1$ (il lato corto), resta un rettangolo di lati $1$ e $\varphi-1$. Il suo rapporto lato lungo su lato corto è
$$
\frac{1}{\varphi-1}=\frac{1}{1/\varphi}=\varphi .
$$
Dunque il rettangolo residuo è *ancora aureo*. Il rettangolo $ABPC'$ della piega è proprio questo rettangolo aureo: i suoi lati sono $AB=\varphi$ e $AC'=AB-(\text{quadrato})\cdot$\ldots; più precisamente, dalla similitudine aurea, $\dfrac{AB}{AC'}=\varphi$, cioè
$$
\frac{AC'}{AB}=\frac{1}{\varphi}=\varphi-1 \quad\Longrightarrow\quad AC'=AB(\varphi-1)=\varphi(\varphi-1)=\varphi^{2}-\varphi=1=AD .
$$
Quindi $ABPC'$ ha rapporto fra i lati uguale a $\varphi$: è **aureo**. $\square$

**Calcolo di $AD$.** La relazione $AC'=AD$ è indipendente dalla normalizzazione: in scala reale, con $AD=b$ e $AB=\varphi b$, si ha $AC'=AB(\varphi-1)=\varphi b\cdot\frac1\varphi=b=AD$. Pertanto, da $AC'=40$ cm,
$$
\boxed{AD=40 \text{cm}},\qquad AB=40 \varphi=20 (1+\sqrt5)\approx64{,}7 \text{cm}.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_1/ques_2025_sessione_suppletiva_2025_prova_10_1_fig1.svg]]

*Rettangolo aureo $ABCD$ e piega $C'P$: il rettangolo $ABPC'$ è a sua volta aureo, con $AC'=AD$.*

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)*


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
