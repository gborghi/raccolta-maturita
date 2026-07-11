

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28_2|2004 Estero Americhe Suppletiva — Questionario — Quesito 2]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28|2004 Estero Americhe Suppletiva — Questionario]]

Determinare la derivata della funzione $f(x)=\sqrt{x}$ usando la definizione.

## Soluzione

La funzione $f(x)=\sqrt{x}$ è definita per $x\ge 0$; calcoliamo la derivata in un punto $x>0$ a partire dalla definizione di derivata come limite del rapporto incrementale:

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to 0}\frac{\sqrt{x+h}-\sqrt{x}}{h}.$$

Il rapporto si presenta nella forma indeterminata $\frac{0}{0}$. Per rimuoverla razionalizziamo il numeratore, moltiplicando numeratore e denominatore per la quantità coniugata $\sqrt{x+h}+\sqrt{x}$:

$$\frac{\sqrt{x+h}-\sqrt{x}}{h}=\frac{\left(\sqrt{x+h}-\sqrt{x}\right)\left(\sqrt{x+h}+\sqrt{x}\right)}{h\left(\sqrt{x+h}+\sqrt{x}\right)}=\frac{(x+h)-x}{h\left(\sqrt{x+h}+\sqrt{x}\right)}.$$

Al numeratore rimane $(x+h)-x=h$, che si semplifica con la $h$ a denominatore:

$$\frac{h}{h\left(\sqrt{x+h}+\sqrt{x}\right)}=\frac{1}{\sqrt{x+h}+\sqrt{x}}.$$

A questo punto il limite non è più indeterminato: facendo tendere $h\to 0$ si ha $\sqrt{x+h}\to\sqrt{x}$, quindi

$$f'(x)=\lim_{h\to 0}\frac{1}{\sqrt{x+h}+\sqrt{x}}=\frac{1}{\sqrt{x}+\sqrt{x}}=\frac{1}{2\sqrt{x}}.$$

In conclusione, per ogni $x>0$,

$$\frac{d}{dx}\sqrt{x}=\frac{1}{2\sqrt{x}},$$

in accordo con la regola generale $\dfrac{d}{dx}x^{n}=n\,x^{\,n-1}$ applicata a $n=\tfrac{1}{2}$.

*Fonte:* [📄 PDF p.28](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
