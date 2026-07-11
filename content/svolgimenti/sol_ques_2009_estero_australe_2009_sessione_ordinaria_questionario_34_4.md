

**Quesito:** [[Quesiti/ques_2009_estero_australe_2009_sessione_ordinaria_questionario_34_4|2009 Estero Australe Ordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2009_estero_australe_2009_sessione_ordinaria_questionario_34|2009 Estero Australe Ordinaria — Questionario]]

Si determinino $a$ e $b$ in modo che il grafico della funzione

$$f(x) = \frac{ax^2 + bx}{2x - 5}$$

abbia come asintoto obliquo la retta di equazione $y = 3x + 2$.

## Impostazione

La funzione è razionale fratta e, per $a \neq 0$, il grado del numeratore supera di $1$ quello del denominatore: il grafico ammette quindi un asintoto obliquo $y = mx + q$. Confrontando con la retta assegnata deve risultare $m = 3$ e $q = 2$.

## Coefficiente angolare

$$m = \lim_{x \to \infty} \frac{f(x)}{x} = \lim_{x \to \infty} \frac{ax^2 + bx}{x(2x - 5)} = \lim_{x \to \infty} \frac{ax^2 + bx}{2x^2 - 5x} = \frac{a}{2}.$$

Imponendo $m = 3$ si ottiene

$$\frac{a}{2} = 3 \Rightarrow a = 6.$$

## Termine noto

Con $a = 6$:

$$q = \lim_{x \to \infty} \big[\, f(x) - 3x \,\big] = \lim_{x \to \infty} \left[ \frac{6x^2 + bx}{2x - 5} - 3x \right].$$

Riducendo a denominatore comune:

$$\frac{6x^2 + bx - 3x(2x - 5)}{2x - 5} = \frac{6x^2 + bx - 6x^2 + 15x}{2x - 5} = \frac{(b + 15)x}{2x - 5}.$$

Quindi

$$q = \lim_{x \to \infty} \frac{(b + 15)x}{2x - 5} = \frac{b + 15}{2}.$$

Imponendo $q = 2$:

$$\frac{b + 15}{2} = 2 \Rightarrow b + 15 = 4 \Rightarrow b = -11.$$

## Conclusione

I valori richiesti sono

$$a = 6, \qquad b = -11,$$

per cui la funzione è

$$f(x) = \frac{6x^2 - 11x}{2x - 5},$$

il cui asintoto obliquo è effettivamente $y = 3x + 2$.

*Fonte:* [📄 PDF p.36](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
