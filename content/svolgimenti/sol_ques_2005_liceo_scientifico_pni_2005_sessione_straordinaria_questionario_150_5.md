

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_5|2005 PNI Straordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Enunciare il principio d'induzione matematica e applicarlo alla dimostrazione della seguente relazione, nota come **teorema di Nicomaco**:

$$\sum_{i=1}^{n} i^3 = \left(\sum_{i=1}^{n} i\right)^2 . \qquad (1)$$

## a) Il principio d'induzione matematica

Sia $P(n)$ una proprietà che dipende da un numero naturale $n$. Il **principio d'induzione matematica** afferma che:

> se $P(n)$ è vera per un numero naturale iniziale $n_0$ (base dell'induzione) e, supposta vera per un generico $n \ge n_0$ (ipotesi induttiva), si riesce a dimostrare che è vera anche per $n+1$ (passo induttivo), allora $P(n)$ è vera per ogni numero naturale $n \ge n_0$.

## b) Applicazione al teorema di Nicomaco

Ricordiamo preliminarmente la formula della somma dei primi $n$ numeri naturali:

$$\sum_{i=1}^{n} i = 1 + 2 + \cdots + n = \frac{n(n+1)}{2},$$

così che la $(1)$ si può scrivere anche nella forma esplicita

$$\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2 .$$

**Base dell'induzione ($n=1$).** La proprietà è vera per $n=1$, infatti

$$\sum_{i=1}^{1} i^3 = 1^3 = 1 = \left(\frac{1\cdot 2}{2}\right)^2 = 1^2 .$$

**Ipotesi induttiva.** Supponiamo che la $(1)$ sia vera per un generico $n$, cioè che valga

$$\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2 .$$

**Passo induttivo.** Dimostriamo che allora è vera anche per $n+1$, cioè che

$$\sum_{i=1}^{n+1} i^3 = \left(\frac{(n+1)(n+2)}{2}\right)^2 .$$

Separando l'ultimo addendo e usando l'ipotesi induttiva:

$$\sum_{i=1}^{n+1} i^3 = \left[\sum_{i=1}^{n} i^3\right] + (n+1)^3 = \left(\frac{n(n+1)}{2}\right)^2 + (n+1)^3 = \frac{n^2(n+1)^2}{4} + (n+1)^3 .$$

Raccogliamo il fattore comune $(n+1)^2$:

$$= (n+1)^2\left[\frac{n^2}{4} + (n+1)\right] = (n+1)^2 \cdot \frac{n^2 + 4n + 4}{4} = (n+1)^2 \cdot \frac{(n+2)^2}{4} = \left(\frac{(n+1)(n+2)}{2}\right)^2 .$$

Poiché $\dfrac{(n+1)(n+2)}{2} = \displaystyle\sum_{i=1}^{n+1} i$, si è ottenuto proprio

$$\sum_{i=1}^{n+1} i^3 = \left(\sum_{i=1}^{n+1} i\right)^2 .$$

La proprietà, vera per $n=1$ e trasmessa da $n$ a $n+1$, è dunque vera per ogni numero naturale $n \ge 1$, come afferma il principio d'induzione. Questo dimostra il teorema di Nicomaco. $\;\blacksquare$

*Fonte:* [📄 PDF p.153](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
