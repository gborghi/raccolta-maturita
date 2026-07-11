

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_9|2001 Suppletiva Ordinamento — Questionario — Quesito 9]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Calcolare la derivata della funzione $\sin 2x$ rispetto alla variabile $x$, ricorrendo alla definizione di derivata.

Ricordiamo la definizione di derivata come limite del rapporto incrementale:

$$f'(x) = \lim_{h\to 0} \frac{f(x+h) - f(x)}{h}.$$

Nel nostro caso $f(x) = \sin 2x$, quindi $f(x+h) = \sin\big(2(x+h)\big) = \sin(2x + 2h)$ e il rapporto incrementale diventa

$$\frac{\sin(2x + 2h) - \sin 2x}{h}.$$

Trasformiamo la differenza di seni con le formule di **prostaferesi**:

$$\sin p - \sin q = 2 \cos\frac{p+q}{2} \, \sin\frac{p-q}{2}.$$

Ponendo $p = 2x + 2h$ e $q = 2x$ si ha $\dfrac{p+q}{2} = 2x + h$ e $\dfrac{p-q}{2} = h$, da cui

$$\sin(2x + 2h) - \sin 2x = 2 \cos(2x + h)\,\sin h.$$

Il rapporto incrementale si riscrive allora come

$$\frac{2 \cos(2x + h)\,\sin h}{h} = 2 \cos(2x + h) \cdot \frac{\sin h}{h}.$$

Passiamo al limite per $h \to 0$. Sfruttando il limite notevole $\displaystyle \lim_{h\to 0} \frac{\sin h}{h} = 1$ e la continuità del coseno, per cui $\cos(2x + h) \to \cos 2x$, otteniamo

$$f'(x) = \lim_{h\to 0} 2 \cos(2x + h) \cdot \frac{\sin h}{h} = 2 \cdot \cos 2x \cdot 1 = 2\cos 2x.$$

Quindi:

$$D[\sin(2x)] = 2\cos(2x).$$

Il risultato coincide, come deve essere, con quello che si otterrebbe applicando la regola di derivazione della funzione composta: $D[\sin(2x)] = \cos(2x) \cdot D(2x) = 2\cos 2x$.

*Fonte:* [📄 PDF p.38](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
