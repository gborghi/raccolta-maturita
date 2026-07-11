

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_6|2005 PNI Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Il limite della funzione $\left(1+\dfrac{1}{2x}\right)^{x}$ per $x\to +\infty$ è:

**A)** $e$  **B)** $e^{2}$  **C)** $\sqrt{e}$  **D)** $\dfrac{1}{\sqrt{e}}$

dove $e$ è la base dei logaritmi naturali. Una sola risposta è corretta: individuarla e fornire una esauriente spiegazione della scelta operata.

## Svolgimento

Il calcolo si riconduce al limite notevole

$$\lim_{y\to +\infty}\left(1+\frac{1}{y}\right)^{y}=e.$$

Nella funzione assegnata l'esponente è $x$, mentre nel termine $1+\dfrac{1}{2x}$ compare $2x$; conviene quindi far apparire proprio l'esponente $2x$. Riscriviamo la potenza elevando e dividendo per $2$ nell'esponente:

$$\left(1+\frac{1}{2x}\right)^{x}=\left(1+\frac{1}{2x}\right)^{\frac{1}{2}\cdot 2x}=\left[\left(1+\frac{1}{2x}\right)^{2x}\right]^{\frac{1}{2}}.$$

Ponendo $y=2x$, si ha $y\to +\infty$ quando $x\to +\infty$, e per il limite notevole risulta

$$\lim_{x\to +\infty}\left(1+\frac{1}{2x}\right)^{2x}=\lim_{y\to +\infty}\left(1+\frac{1}{y}\right)^{y}=e.$$

Poiché la funzione $t\mapsto t^{1/2}$ è continua, il limite passa sotto la radice:

$$\lim_{x\to +\infty}\left(1+\frac{1}{2x}\right)^{x}=\left[\lim_{x\to +\infty}\left(1+\frac{1}{2x}\right)^{2x}\right]^{\frac{1}{2}}=e^{\frac{1}{2}}=\sqrt{e}.$$

La risposta corretta è quindi la **C)** $\sqrt{e}$.

*Fonte:* [📄 PDF p.154](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
