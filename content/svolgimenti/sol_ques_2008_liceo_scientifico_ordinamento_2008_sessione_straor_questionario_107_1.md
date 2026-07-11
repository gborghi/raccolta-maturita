

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_1|2008 Ordinamento Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si determinino le costanti $a$ e $b$ in modo che la funzione

$$F(x) = a\cos x + b\cos^3 x$$

sia una primitiva della funzione $f(x) = 3\sin x - 2\sin^3 x$.

La funzione $F$ è una primitiva di $f$ se e solo se $F'(x) = f(x)$ per ogni $x$. Calcoliamo quindi la derivata di $F$:

$$F'(x) = -a\sin x + b\cdot 3\cos^2 x\cdot(-\sin x) = -a\sin x - 3b\cos^2 x\,\sin x.$$

Per confrontare $F'$ con $f$ conviene esprimere tutto in funzione di $\sin x$. Usando l'identità $\cos^2 x = 1 - \sin^2 x$ si ottiene

$$F'(x) = -a\sin x - 3b\,(1-\sin^2 x)\sin x = -a\sin x - 3b\sin x + 3b\sin^3 x,$$

cioè

$$F'(x) = -(a+3b)\sin x + 3b\sin^3 x.$$

Imponiamo l'uguaglianza $F'(x) = f(x)$ per ogni $x$:

$$-(a+3b)\sin x + 3b\sin^3 x = 3\sin x - 2\sin^3 x.$$

Poiché le funzioni $\sin x$ e $\sin^3 x$ sono linearmente indipendenti, l'identità vale per ogni $x$ solo se i coefficienti dei termini corrispondenti sono uguali:

$$\begin{cases} -(a+3b) = 3 \\ 3b = -2. \end{cases}$$

Dalla seconda equazione ricaviamo

$$b = -\frac{2}{3}.$$

Sostituendo nella prima:

$$-a - 3\left(-\frac{2}{3}\right) = 3 \Rightarrow -a + 2 = 3 \Rightarrow a = -1.$$

Le costanti cercate sono dunque

$$a = -1, \qquad b = -\frac{2}{3},$$

e la primitiva è $F(x) = -\cos x - \dfrac{2}{3}\cos^3 x$.

**Verifica.** Derivando:

$$F'(x) = \sin x + 2\cos^2 x\,\sin x = \sin x + 2(1-\sin^2 x)\sin x = 3\sin x - 2\sin^3 x = f(x),$$

come richiesto.

*Fonte:* [📄 PDF p.107](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
