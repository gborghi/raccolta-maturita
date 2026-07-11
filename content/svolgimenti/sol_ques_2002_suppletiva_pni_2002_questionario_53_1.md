

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_1|2002 Suppletiva PNI — Questionario — Quesito 1]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Da un'urna contenente $90$ palline numerate se ne estraggono quattro senza reimbussolamento. Poiché l'ordine di estrazione è irrilevante (come nel gioco dell'Enalotto), si vuole la probabilità che esca la quaterna $(7, 47, 67, 87)$.

**Metodo delle estrazioni successive.** Alla prima estrazione la probabilità di pescare uno qualsiasi dei quattro numeri della quaterna è $\dfrac{4}{90}$. Alla seconda estrazione restano $89$ palline e $3$ numeri utili, quindi la probabilità è $\dfrac{3}{89}$; alla terza estrazione $\dfrac{2}{88}$ e alla quarta $\dfrac{1}{87}$. Le estrazioni sono in cascata, dunque:

$$p(7,47,67,87) = \frac{4}{90}\cdot\frac{3}{89}\cdot\frac{2}{88}\cdot\frac{1}{87} = \frac{24}{61\,324\,560} = \frac{1}{2\,555\,190}.$$

**Verifica con il calcolo combinatorio.** Dato che l'ordine non conta, i casi possibili sono le combinazioni di $90$ oggetti presi $4$ alla volta:

$$\binom{90}{4} = \frac{90\cdot 89\cdot 88\cdot 87}{4!} = \frac{61\,324\,560}{24} = 2\,555\,190,$$

e il caso favorevole è uno solo (la quaterna assegnata). Quindi:

$$p(7,47,67,87) = \frac{1}{\binom{90}{4}} = \frac{1}{2\,555\,190} \approx 3{,}91\cdot 10^{-7}.$$

I due procedimenti coincidono, come deve essere.

*Fonte:* [📄 PDF p.53](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
