

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_108_3|2006 Sessione Ordinaria PNI — Prova (p.108) — Quesito 3]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Si consideri l'affermazione: se le funzioni $f(x)$ e $g(x)$, entrambe tendenti a $0$ per $x\to a$, non soddisfano le condizioni previste dal teorema di De L'Hôpital, allora non è possibile calcolare il limite di $\dfrac{g(x)}{f(x)}$ per $x\to a$. Stabilire se sia vera o falsa, motivando la risposta.

L'affermazione è **falsa**. Il teorema di De L'Hôpital fornisce infatti una condizione *sufficiente*, ma non *necessaria*, per il calcolo del limite del rapporto: può accadere che le sue ipotesi non siano tutte verificate e che, ciò nonostante, il limite di $\dfrac{g(x)}{f(x)}$ esista e sia calcolabile con altri strumenti.

## Controesempio

Scegliamo
$$g(x)=x^{2}\sin\frac{1}{x}, \qquad f(x)=x, \qquad a=0.$$

Entrambe le funzioni tendono a $0$ per $x\to 0$, quindi il rapporto si presenta nella forma indeterminata $\dfrac{0}{0}$.

Il limite del rapporto **esiste** e vale $0$. Infatti
$$\lim_{x\to 0}\frac{g(x)}{f(x)}=\lim_{x\to 0}\frac{x^{2}\sin\frac{1}{x}}{x}=\lim_{x\to 0} x\,\sin\frac{1}{x}=0,$$
per il teorema del confronto, dato che $\left|x\,\sin\frac{1}{x}\right|\le |x|\to 0$.

## Perché non si applica De L'Hôpital

Il teorema di De L'Hôpital richiede, tra le altre ipotesi, che esista il limite del rapporto delle derivate $\dfrac{g'(x)}{f'(x)}$. Calcoliamo le derivate:
$$g'(x)=2x\,\sin\frac{1}{x}-\cos\frac{1}{x}, \qquad f'(x)=1,$$
da cui
$$\frac{g'(x)}{f'(x)}=2x\,\sin\frac{1}{x}-\cos\frac{1}{x}.$$

Per $x\to 0$ il termine $2x\,\sin\frac{1}{x}$ tende a $0$ (ancora per il teorema del confronto), ma $\cos\frac{1}{x}$ **non ammette limite**, poiché oscilla indefinitamente tra $-1$ e $1$. Di conseguenza $\dfrac{g'(x)}{f'(x)}$ non ammette limite per $x\to 0$: l'ipotesi del teorema non è soddisfatta.

## Conclusione

Il limite $\displaystyle\lim_{x\to 0}\frac{g(x)}{f(x)}=0$ esiste ed è calcolabile, benché le ipotesi del teorema di De L'Hôpital non siano tutte verificate. Questo mostra che l'affermazione proposta è falsa: la non applicabilità del teorema di De L'Hôpital non impedisce, di per sé, il calcolo del limite del rapporto.

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
