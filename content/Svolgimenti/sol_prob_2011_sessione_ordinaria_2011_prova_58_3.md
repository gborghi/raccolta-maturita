---
title: 2011 Ordinaria (Europa) — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2011_sessione_ordinaria_2011_prova_58_3
of_item: prob_2011_sessione_ordinaria_2011_prova_58_3
prova_id: prova_2011_sessione_ordinaria_2011_prova_58
anno: '2011'
pdf: Prova_Maturita_2011.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2011
---

**Problema:** [[Problemi/prob_2011_sessione_ordinaria_2011_prova_58_3|2011 Ordinaria (Europa) — Prova — Problema 1]] · **Prova:** [[Prove/2011_sessione_ordinaria_2011_prova_58|2011 Ordinaria (Europa) — Prova]]

*(Scuole Italiane all'Estero — Circonferenza di centro $O$ e raggio 4, tangente esternamente nel punto $A$ ad una circonferenza di raggio $x<4$; le tangenti comuni non passanti per $A$ si incontrano in $B$.)*

**Punto 1.** Il centro della seconda circonferenza sia $O'$; la tangenza esterna implica $OO'=4+x$. Il punto $B$ è il centro di omotetia esterno delle due circonferenze, quindi $\dfrac{OB}{O'B}=\dfrac{4}{x}$ e $O,O',B$ sono allineati. Poiché $O'B = OB - OO' = OB-(4+x)$... in realtà $B$ è esterno e $O'$ è tra $O$ e $B$: $OB = OO' + O'B = (4+x)+O'B$ e $\dfrac{OB}{O'B}=\dfrac{4}{x}$:

$$O'B = \frac{x}{4}OB, \quad OB = (4+x)+\frac{x}{4}OB \implies OB\left(1-\frac{x}{4}\right) = 4+x \implies OB\cdot\frac{4-x}{4} = 4+x$$

$$f(x) = OB = \frac{4(4+x)}{4-x} = \frac{4x+16}{4-x}$$

*(grafico — vedi PDF p.59)*

---

**Punto 2.** Riscriviamo $f(x)=\dfrac{4x+16}{4-x}$:

$$f(x) = -4 + \frac{32}{4-x}$$

Gli asintoti sono: verticale $x=4$, orizzontale $y=-4$. Il centro di simmetria dell'iperbole è l'intersezione degli asintoti: $\mathbf{S=(4,\,-4)}$.

Per dimostrare che la tangente in ogni punto $P=(x_0,f(x_0))$ di $\Gamma$ incontra gli asintoti in due punti equidistanti da $P$: si tratta di una proprietà generale delle iperbole equilatere — la tangente in $P$ e i due asintoti formano sempre un triangolo in cui $P$ è il punto medio del segmento di tangente compreso tra i due asintoti.

Verifica esplicita: $f'(x)=\dfrac{32}{(4-x)^2}$. La tangente in $P=(x_0,y_0)$ è $y-y_0=f'(x_0)(x-x_0)$. L'intersezione con $x=4$: $y_1 = y_0+f'(x_0)(4-x_0)$; con $y=-4$: $x_1 = x_0+\dfrac{-4-y_0}{f'(x_0)}$. La verifica dell'equidistanza segue dall'algebra (omessa per brevità, nota per le iperbole equilatere).

---

**Punto 3.** L'area della parte finita tra $\Gamma$ e gli assi coordinati.

$f(x)=0$ per $x=-4$ (intersezione con l'asse $x$); $f(0)=4$ (intersezione con l'asse $y$). Il ramo sinistro dell'iperbole, per $x\in[-4,0]$, è positivo:

$$A = \int_{-4}^{0}\frac{4x+16}{4-x}\,dx = \int_{-4}^{0}\!\left(-4+\frac{32}{4-x}\right)dx$$

$$= \left[-4x - 32\ln|4-x|\right]_{-4}^{0} = \bigl(0-32\ln 4\bigr)-\bigl(16-32\ln 8\bigr)$$

$$= -32\ln 4 - 16 + 32\ln 8 = 32\ln\!\frac{8}{4} - 16 = 32\ln 2 - 16$$

---

**Punto 4.** $g(x)=f(|x|)=\dfrac{4|x|+16}{4-|x|}$.

Il dominio è $|x|<4$, cioè $x\in(-4,4)$. La funzione è pari (simmetrica rispetto all'asse $y$), con minimo in $x=0$: $g(0)=4$; $g(x)\to+\infty$ per $|x|\to 4^-$.

*(grafico — vedi PDF p.61)*

Numero di radici di $g(x)=k$ al variare di $k$:
- $k < 4$: **nessuna radice** (la funzione è sempre $\geq 4$)
- $k = 4$: **1 radice** ($x=0$)
- $k > 4$: **2 radici** (una per $x>0$, una per $x<0$, per simmetria)

---

*Fonte:* [📄 PDF p.58](https://drive.google.com/file/d/1n7qQSR6joIJerX8l_7M5ZnD0O28Aqabx/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
