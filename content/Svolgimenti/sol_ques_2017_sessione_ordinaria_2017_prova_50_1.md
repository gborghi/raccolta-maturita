---
title: 2017 Ordinaria — Prova (Sportiva) — Quesito 1 — Svolgimento
tipo: soluzione
item_id: sol_ques_2017_sessione_ordinaria_2017_prova_50_1
of_item: ques_2017_sessione_ordinaria_2017_prova_50_1
prova_id: prova_2017_sessione_ordinaria_2017_prova_50
anno: '2017'
pdf: Prova_Maturita_2017.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2017
---

**Quesito:** [[Quesiti/ques_2017_sessione_ordinaria_2017_prova_50_1|2017 Ordinaria — Prova (Sportiva) — Quesito 1]] · **Prova:** [[Prove/2017_sessione_ordinaria_2017_prova_50|2017 Ordinaria — Prova (Sportiva)]]

Scientifico Comunicazione Opzione
Sportiva 2017 - Quesiti

QUESITO $1$

Definito il numero E come: $E= \int$ xexdx
$$ 1 0 $$
, dimostrare che risulta: $\int x2exdx$
$$ 1 0 $$
$= e-2E$
esprimere $\int x3exdx$
$$ 1 0 $$
in termini di e ed E.

Cerchiamo una primitiva di xex integrando per parti:

$\int xexdx= xex-\int 1 ∙exdx= xex-ex+ c$
Risulta quindi:

$E= \int$ xexdx
$$ 1 0 $$
$= [xex-ex]0$
$1 = e-e-(0 -e^{0}) = 1$

Calcoliamo una primitiva di $x2ex$ integrando ancora per parti:

$\int x2exdx= x^{2} ex-\int 2x∙exdx= x^{2} ex-2 \int$ x∙exdx
Quindi:

$\int x2exdx$
$$ 1 0 $$
$= [x2ex]0$
$1 -2 \int$ xexdx
$$ 1 0 $$
$= [e-0] -2E= e-2E$

Calcoliamo infine $\int x3exdx$
$$ 1 0 $$
: (sempre per parti):

$\int x3exdx$
$$ 1 0 $$
$= [x3ex]0$
$1 -\int 3x2exdx$
$$ 1 0 $$
$= e-3 \int x2exdx$
$$ 1 0 $$
$= e-3(e-2E) = 6E-2e.$

QUESITO $2$

Una torta di forma cilindrica è collocata sotto una cupola di plastica di forma semisferica.
Dimostrare che la torta occupa meno dei $3/5$ del volume della semisfera.

Indichiamo con $R$ il raggio della sfera, con $r$ il raggio del cilindro e con $x$ l’altezza del
cilindro $(0 \le x\le R);$ risulta: V(sfera) =
$$ 1 2 ( 4 $$
$3 \pi R^{3}) =$
$3 \pi R^{3}$ e V(cilindro) $= \pi r2h.$

Scientifico Comunicazione Opzione
Sportiva 2017 - Quesiti

Si ha: $r^{2} = R^{2} -x^{2},$ quindi: V(cilindro) $= \pi r2h= \pi (R^{2} -x^{2})x$

Determiniamo il massimo volume del cilindro, trovando il massimo della funzione:

$y= (R^{2} -x^{2})x= (R^{2} -x^{2})(x^{2})$
$2 =$ max

Per via elementare:

La funzione $y$ è data dal prodotto di due potenze la cui somma delle basi è costante,
quindi è massima se le basi sono proporzionali agli esponenti:

$R^{2} -x^{2}$
$= x^{2}$
$$ 1 2 $$
, $3x^{2} = R^{2}, x= R\sqrt{3}$

Il volume massimo del cilindro è quindi:

$V= \pi (R^{2} -1$
$3 R^{2}) R\sqrt{3}$
$$ 3 = 2 $$
$9 \sqrt{3} \pi R^{3}$

I $3/5$ del volume della semisfera sono:

$$ 3 5 (2 $$
$3 \pi R^{3}) = 2$
$5 \pi R^{3}$

Dobbiamo verificare che
$9 \sqrt{3} <$
$5.$ Risulta
$9 \sqrt{3} \cong 0.38 <$
$$ 2 5 = 0.40. $$

Quindi la torta occupa meno dei $3/5$ del volume della semisfera.

Usando le derivate:

Cerchiamo il massimo della funzione $y= (R^{2} -x^{2})x$ , per $0 \le x\le R$ .

$y' = -2x^{2} + R^{2} -x^{2} = -3x^{2} + R^{2} \ge 0$ se $-R\sqrt{3}$
$3 \le x\le R\sqrt{3}$
$3$ . La funzione è quindi

*Fonte:* [📄 PDF p.69](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
