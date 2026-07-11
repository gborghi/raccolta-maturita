

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_7|2004 Ordinamento Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Indicata con $S_n$ la somma dei primi $n$ termini di una progressione geometrica di primo termine $a_1=\dfrac{1}{2}$ e ragione $q=\dfrac{1}{2}$, calcolare

$$\lim_{n\to\infty}\frac{S_n}{n}.$$

## Calcolo di $S_n$

La somma dei primi $n$ termini di una progressione geometrica di ragione $q\neq 1$ è

$$S_n=a_1\cdot\frac{1-q^n}{1-q}.$$

Sostituendo $a_1=\dfrac{1}{2}$ e $q=\dfrac{1}{2}$ si ottiene

$$S_n=\frac{1}{2}\cdot\frac{1-\left(\frac{1}{2}\right)^n}{1-\frac{1}{2}}=\frac{1}{2}\cdot\frac{1-\left(\frac{1}{2}\right)^n}{\frac{1}{2}}=1-\left(\frac{1}{2}\right)^n.$$

## Calcolo del limite

Poiché $0<\dfrac{1}{2}<1$, si ha $\left(\dfrac{1}{2}\right)^n\to 0$ per $n\to\infty$, quindi

$$S_n=1-\left(\frac{1}{2}\right)^n\longrightarrow 1.$$

Il numeratore tende dunque al valore finito $1$, mentre il denominatore $n$ tende a $+\infty$. Ne segue

$$\lim_{n\to\infty}\frac{S_n}{n}=\lim_{n\to\infty}\frac{1-\left(\frac{1}{2}\right)^n}{n}=\frac{1}{+\infty}=0.$$

Il limite richiesto vale quindi $0$.

*Fonte:* [📄 PDF p.125](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
