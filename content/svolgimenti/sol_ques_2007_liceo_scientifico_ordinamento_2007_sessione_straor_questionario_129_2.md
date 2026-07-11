

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_2|2007 LS Ordinamento Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si calcoli il limite della funzione

$$f(x)=\frac{\sqrt{x}+\sqrt{x+3}-3}{\sqrt{x}-\sqrt{x+3}+1}$$

quando $x$ tende a $1$.

Sostituendo $x=1$ si ottiene, sia al numeratore sia al denominatore,

$$\sqrt{1}+\sqrt{4}-3=1+2-3=0,\qquad \sqrt{1}-\sqrt{4}+1=1-2+1=0,$$

quindi il limite si presenta nella forma indeterminata $\frac{0}{0}$.

Per rimuovere l'indeterminazione razionalizziamo, moltiplicando numeratore e denominatore per i due fattori $\left(\sqrt{x}-\sqrt{x+3}+3\right)$ e $\left(\sqrt{x}+\sqrt{x+3}-1\right)$:

$$f(x)=\frac{\left(\sqrt{x}+\sqrt{x+3}-3\right)\left(\sqrt{x}-\sqrt{x+3}+3\right)\left(\sqrt{x}+\sqrt{x+3}-1\right)}{\left(\sqrt{x}-\sqrt{x+3}+1\right)\left(\sqrt{x}+\sqrt{x+3}-1\right)\left(\sqrt{x}-\sqrt{x+3}+3\right)}.$$

Nel numeratore i primi due fattori danno una differenza di quadrati; posto $\sqrt{x+3}-3$ come termine da isolare,

$$\left(\sqrt{x}+\sqrt{x+3}-3\right)\left(\sqrt{x}-\sqrt{x+3}+3\right)=x-\left(\sqrt{x+3}-3\right)^{2}=x-\left(x+3-6\sqrt{x+3}+9\right)=-12+6\sqrt{x+3}=6\left(\sqrt{x+3}-2\right).$$

Analogamente, nel denominatore i primi due fattori danno

$$\left(\sqrt{x}-\sqrt{x+3}+1\right)\left(\sqrt{x}+\sqrt{x+3}-1\right)=x-\left(\sqrt{x+3}-1\right)^{2}=x-\left(x+3-2\sqrt{x+3}+1\right)=-4+2\sqrt{x+3}=2\left(\sqrt{x+3}-2\right).$$

Sostituendo, la funzione diventa

$$f(x)=\frac{6\left(\sqrt{x+3}-2\right)\left(\sqrt{x}+\sqrt{x+3}-1\right)}{2\left(\sqrt{x+3}-2\right)\left(\sqrt{x}-\sqrt{x+3}+3\right)}.$$

Per $x\neq 1$ il fattore comune $\sqrt{x+3}-2$ è diverso da zero e si può semplificare:

$$f(x)=\frac{3\left(\sqrt{x}+\sqrt{x+3}-1\right)}{\sqrt{x}-\sqrt{x+3}+3}.$$

Quest'ultima espressione è continua in $x=1$; passando al limite,

$$\lim_{x\to 1}f(x)=\frac{3\left(\sqrt{1}+\sqrt{4}-1\right)}{\sqrt{1}-\sqrt{4}+3}=\frac{3\,(1+2-1)}{1-2+3}=\frac{3\cdot 2}{2}=3.$$

Il limite richiesto vale quindi $3$.

*Fonte:* [📄 PDF p.129](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
