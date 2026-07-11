

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_167_5|2005 Suppletiva PNI — Prova — Quesito 5]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

Si deve calcolare
$$\lim_{x\to 0}(1-x)^{\frac{1}{x}}.$$
Per $x\to 0$ la base $1-x$ tende a $1$ mentre l'esponente $\frac{1}{x}$ tende a $\pm\infty$: si tratta della forma indeterminata $1^{\infty}$. La risposta corretta è **[E]**, cioè il limite vale $\dfrac{1}{e}$.

## Calcolo con il limite notevole

Ricordiamo la definizione del numero di Nepero $e$ (base dei logaritmi naturali):
$$\lim_{t\to 0}(1+t)^{\frac{1}{t}}=e.$$

Nel nostro caso poniamo la sostituzione $t=-x$: quando $x\to 0$ anche $t\to 0$, e possiamo riscrivere
$$(1-x)^{\frac{1}{x}}=(1+t)^{-\frac{1}{t}}=\left[(1+t)^{\frac{1}{t}}\right]^{-1}.$$

Passando al limite e usando la continuità della funzione potenza,
$$\lim_{x\to 0}(1-x)^{\frac{1}{x}}=\left[\lim_{t\to 0}(1+t)^{\frac{1}{t}}\right]^{-1}=e^{-1}=\frac{1}{e}.$$

## Verifica con il logaritmo

In alternativa si può passare al logaritmo. Posto $y=(1-x)^{\frac{1}{x}}$, con $y>0$ in un intorno di $0$, si ha
$$\ln y=\frac{\ln(1-x)}{x}.$$
Usando il limite notevole $\lim_{u\to 0}\dfrac{\ln(1+u)}{u}=1$ con $u=-x$, otteniamo $\ln(1-x)\sim -x$ per $x\to 0$, quindi
$$\lim_{x\to 0}\ln y=\lim_{x\to 0}\frac{\ln(1-x)}{x}=\lim_{x\to 0}\frac{-x}{x}=-1.$$
Poiché $\ln y\to -1$, per la continuità dell'esponenziale segue
$$\lim_{x\to 0}y=e^{-1}=\frac{1}{e}\approx 0{,}368.$$

## Conclusione

Il valore del limite è $\dfrac{1}{e}$: l'unica risposta corretta è la **[E]**. Le altre sono da scartare: il limite non è $1$ ([A]), non diverge a $+\infty$ ([B]), esiste finito quindi non è vero che non esiste ([C]) e non vale $e$ ([D]), che è invece il limite di $(1+x)^{1/x}$.

*Fonte:* [📄 PDF p.180](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
