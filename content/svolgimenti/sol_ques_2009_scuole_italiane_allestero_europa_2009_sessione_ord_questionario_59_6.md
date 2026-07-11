

**Quesito:** [[Quesiti/ques_2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59_6|2009 Estero Europa — Questionario — Quesito 6]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59|2009 Estero Europa — Questionario]]

Calcolare il limite
$$\lim_{x\to 0}\frac{1-\cos x}{x^{2}}.$$

## Svolgimento

Il limite si presenta nella forma indeterminata $\frac{0}{0}$. Moltiplichiamo numeratore e denominatore per il fattore $1+\cos x$, così da far comparire la differenza di quadrati $1-\cos^{2}x=\sin^{2}x$:

$$\lim_{x\to 0}\frac{1-\cos x}{x^{2}}=\lim_{x\to 0}\frac{(1-\cos x)(1+\cos x)}{x^{2}\,(1+\cos x)}=\lim_{x\to 0}\frac{\sin^{2}x}{x^{2}\,(1+\cos x)}.$$

Riscriviamo l'espressione mettendo in evidenza il rapporto $\dfrac{\sin x}{x}$:

$$\lim_{x\to 0}\frac{\sin^{2}x}{x^{2}\,(1+\cos x)}=\lim_{x\to 0}\left(\frac{\sin x}{x}\right)^{2}\cdot\frac{1}{1+\cos x}.$$

Per il limite notevole
$$\lim_{x\to 0}\frac{\sin x}{x}=1,$$
il primo fattore tende a $1^{2}=1$; inoltre, per la continuità del coseno, $\cos x\to 1$, quindi il secondo fattore tende a $\dfrac{1}{1+1}=\dfrac{1}{2}$.

In conclusione:
$$\lim_{x\to 0}\frac{1-\cos x}{x^{2}}=1\cdot\frac{1}{2}=\frac{1}{2}.$$

*Fonte:* [📄 PDF p.61](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
