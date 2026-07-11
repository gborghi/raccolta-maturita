

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_4|2008 Ordinaria — Prova (PNI Informatica) — Quesito 4]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Si enuncia la regola di de l'Hôpital e la si applica per dimostrare che
$$\lim_{x\to+\infty}\frac{x^{2008}}{2^x}=0.$$

## La regola di de l'Hôpital

Siano $f$ e $g$ due funzioni derivabili in un intorno del punto $c$ (eventualmente $c=\pm\infty$), tranne al più in $c$, con $g'(x)\neq 0$ in tale intorno. Supponiamo che il rapporto $\dfrac{f(x)}{g(x)}$ si presenti, per $x\to c$, in una delle forme indeterminate
$$\frac{0}{0}\qquad\text{oppure}\qquad\frac{\infty}{\infty}.$$
Se esiste (finito o infinito) il limite del rapporto delle derivate
$$\lim_{x\to c}\frac{f'(x)}{g'(x)}=L,$$
allora esiste anche il limite del rapporto delle funzioni e vale lo stesso valore:
$$\lim_{x\to c}\frac{f(x)}{g(x)}=\lim_{x\to c}\frac{f'(x)}{g'(x)}=L.$$

La regola può essere applicata più volte di seguito, purché ad ogni passo il rapporto delle derivate si presenti ancora in una forma indeterminata del tipo $\frac{0}{0}$ o $\frac{\infty}{\infty}$.

## Applicazione al limite proposto

Poniamo $f(x)=x^{2008}$ e $g(x)=2^x$. Per $x\to+\infty$ si ha $x^{2008}\to+\infty$ e $2^x\to+\infty$, quindi il limite
$$\lim_{x\to+\infty}\frac{x^{2008}}{2^x}$$
si presenta nella forma indeterminata $\frac{\infty}{\infty}$: sono soddisfatte le ipotesi della regola.

Ricordiamo che la derivata della funzione esponenziale è $\dfrac{d}{dx}\,2^x=2^x\ln 2$, mentre derivando la potenza $x^{2008}$ il grado diminuisce di un'unità. Applicando la regola una prima volta:
$$\lim_{x\to+\infty}\frac{x^{2008}}{2^x}=\lim_{x\to+\infty}\frac{2008\,x^{2007}}{2^x\ln 2}.$$
Il nuovo rapporto è ancora della forma $\frac{\infty}{\infty}$, quindi possiamo applicare di nuovo la regola. Derivando una seconda volta:
$$=\lim_{x\to+\infty}\frac{2008\cdot 2007\,x^{2006}}{2^x(\ln 2)^2}.$$

Ad ogni applicazione l'esponente della potenza al numeratore cala di uno, compare un ulteriore fattore $\ln 2$ al denominatore e i coefficienti si accumulano in un prodotto di interi decrescenti. Dopo $2008$ applicazioni successive il numeratore diventa una costante:
$$\lim_{x\to+\infty}\frac{x^{2008}}{2^x}=\lim_{x\to+\infty}\frac{2008\cdot 2007\cdots 2\cdot 1}{2^x(\ln 2)^{2008}}=\lim_{x\to+\infty}\frac{2008!}{2^x(\ln 2)^{2008}}.$$

In quest'ultimo limite il numeratore è la costante $2008!$, mentre il denominatore $2^x(\ln 2)^{2008}$ tende a $+\infty$ per $x\to+\infty$ (essendo $(\ln 2)^{2008}$ una costante positiva). Il rapporto di una costante per una quantità che diverge tende quindi a zero:
$$\lim_{x\to+\infty}\frac{2008!}{2^x(\ln 2)^{2008}}=0.$$

Ripercorrendo a ritroso la catena di uguaglianze, ciascuna giustificata dalla regola di de l'Hôpital poiché il limite finale esiste, concludiamo che
$$\lim_{x\to+\infty}\frac{x^{2008}}{2^x}=0.$$

Il risultato esprime un fatto generale: **l'esponenziale $2^x$ è, per $x\to+\infty$, un infinito di ordine superiore rispetto a qualunque potenza $x^{n}$**, per quanto grande sia l'esponente $n$.

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
