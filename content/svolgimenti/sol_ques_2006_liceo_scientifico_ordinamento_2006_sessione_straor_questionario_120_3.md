

**Quesito:** [[Quesiti/ques_2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120_3|2006 Straordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120|2006 Straordinaria — Questionario]]

Se le funzioni $f(x)$ e $g(x)$, entrambe tendenti a $0$ quando $x\to a$, non soddisfano alle condizioni previste dal teorema di De L'Hôpital, non è possibile calcolare il limite di $\dfrac{g(x)}{f(x)}$ quando $x\to a$. È vero o è falso? Fornire un'esauriente spiegazione della risposta.

## Risposta

L'affermazione è **falsa**.

Il teorema di De L'Hôpital fornisce una condizione *sufficiente*, ma *non necessaria*, per il calcolo del limite di una forma indeterminata $\dfrac{0}{0}$. Esso afferma che, se
$$\lim_{x\to a}\frac{g'(x)}{f'(x)}$$
esiste (finito o infinito), allora anche $\lim_{x\to a}\dfrac{g(x)}{f(x)}$ esiste e i due limiti coincidono. Nulla si può però dedurre quando il limite del rapporto delle derivate *non* esiste: in tal caso il limite del rapporto delle funzioni può ugualmente esistere, ma va calcolato con altri strumenti.

## Controesempio

Poniamo
$$g(x)=x^{2}\sin\frac{1}{x},\qquad f(x)=x,\qquad a=0.$$
Entrambe tendono a $0$ per $x\to 0$, quindi il rapporto si presenta nella forma indeterminata $\dfrac{0}{0}$.

**Il limite del rapporto delle funzioni esiste.** Infatti
$$\frac{g(x)}{f(x)}=\frac{x^{2}\sin\frac{1}{x}}{x}=x\sin\frac{1}{x},$$
e poiché $\left|\sin\frac{1}{x}\right|\le 1$ si ha
$$-|x|\le x\sin\frac{1}{x}\le |x|.$$
Per il teorema del confronto (o dei due carabinieri), essendo $-|x|\to 0$ e $|x|\to 0$, segue
$$\lim_{x\to 0}\frac{g(x)}{f(x)}=\lim_{x\to 0}x\sin\frac{1}{x}=0.$$

**Le ipotesi di De L'Hôpital non sono però tutte soddisfatte.** Calcoliamo le derivate:
$$g'(x)=2x\sin\frac{1}{x}-\cos\frac{1}{x},\qquad f'(x)=1,$$
da cui
$$\frac{g'(x)}{f'(x)}=2x\sin\frac{1}{x}-\cos\frac{1}{x}.$$
Per $x\to 0$ il termine $2x\sin\frac{1}{x}\to 0$ (di nuovo per confronto), ma $\cos\frac{1}{x}$ oscilla indefinitamente tra $-1$ e $1$ senza tendere ad alcun valore. Pertanto $\dfrac{g'(x)}{f'(x)}$ **non ammette limite** per $x\to 0$.

## Conclusione

Si è esibita una coppia di funzioni per cui il rapporto delle derivate non ha limite, eppure il limite del rapporto delle funzioni esiste e vale $0$. Questo prova che l'ipotesi di esistenza del limite di $\dfrac{g'(x)}{f'(x)}$ è sufficiente ma non necessaria: la sua assenza non impedisce affatto il calcolo del limite di $\dfrac{g(x)}{f(x)}$. L'affermazione proposta è dunque falsa.

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
