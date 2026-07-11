

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_4|2002 Suppletiva PNI — Questionario — Quesito 4]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Calcolare:

$$\lim_{x\to 0}\frac{\displaystyle\int_0^x \sin(t^3)\,dt}{x^4}.$$

## Impostazione

Per $x\to 0$ il numeratore

$$F(x)=\int_0^x \sin(t^3)\,dt$$

tende a $0$ (l'estremo superiore tende all'estremo inferiore) e il denominatore $x^4$ tende anch'esso a $0$: il limite si presenta quindi nella forma indeterminata $\dfrac{0}{0}$.

Numeratore e denominatore sono funzioni continue e derivabili in un intorno di $x=0$, e la derivata del denominatore, $4x^3$, non si annulla in un intorno di $x=0$ privato dell'origine: sono dunque soddisfatte le ipotesi del teorema di **de l'Hôpital**.

## Applicazione del teorema di de l'Hôpital

Per il teorema fondamentale del calcolo integrale, essendo $F(x)=\int_0^x \sin(t^3)\,dt$, si ha

$$F'(x)=\frac{d}{dx}\int_0^x \sin(t^3)\,dt=\sin(x^3),$$

mentre la derivata del denominatore è

$$\frac{d}{dx}\bigl(x^4\bigr)=4x^3.$$

Quindi

$$\lim_{x\to 0}\frac{\displaystyle\int_0^x \sin(t^3)\,dt}{x^4}=\lim_{x\to 0}\frac{\sin(x^3)}{4x^3}=\frac{1}{4}\lim_{x\to 0}\frac{\sin(x^3)}{x^3}.$$

## Conclusione

Posto $u=x^3$, per $x\to 0$ si ha $u\to 0$; sfruttando il limite notevole $\dfrac{\sin u}{u}\to 1$ per $u\to 0$ si ottiene

$$\lim_{x\to 0}\frac{\sin(x^3)}{x^3}=1,$$

e perciò

$$\lim_{x\to 0}\frac{\displaystyle\int_0^x \sin(t^3)\,dt}{x^4}=\frac{1}{4}\cdot 1=\frac{1}{4}.$$

Il limite richiesto esiste ed è uguale a $\dfrac{1}{4}$.

*Fonte:* [📄 PDF p.54](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
