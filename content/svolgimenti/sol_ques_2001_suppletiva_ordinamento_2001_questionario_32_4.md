

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_4|2001 Suppletiva Ordinamento — Questionario — Quesito 4]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Sia $f(x)$ una funzione reale di variabile reale, derivabile con derivata continua su tutto $\mathbb{R}$, tale che $f(0)=1$ e $f'(0)=2$. Calcolare

$$\lim_{x\to 0}\frac{\displaystyle\int_0^x f(t)\,dt - x}{\cos 2x - 1}.$$

## Impostazione

Per $x\to 0$ il numeratore tende a $\int_0^0 f(t)\,dt - 0 = 0$ e il denominatore a $\cos 0 - 1 = 0$: il limite si presenta nella forma indeterminata $\frac{0}{0}$.

Numeratore e denominatore sono continui e derivabili in un intorno di $x=0$; inoltre, in un intorno di $x=0$ privato del punto stesso, la derivata del denominatore

$$\frac{d}{dx}\left(\cos 2x - 1\right) = -2\sin 2x$$

non si annulla. Sono quindi soddisfatte le ipotesi del teorema di de l'Hôpital.

## Prima applicazione di de l'Hôpital

Per il teorema fondamentale del calcolo integrale, $\dfrac{d}{dx}\displaystyle\int_0^x f(t)\,dt = f(x)$, dunque la derivata del numeratore è $f(x)-1$. Quindi

$$\lim_{x\to 0}\frac{\displaystyle\int_0^x f(t)\,dt - x}{\cos 2x - 1} = \lim_{x\to 0}\frac{f(x)-1}{-2\sin 2x}.$$

Per $x\to 0$ il numeratore tende a $f(0)-1 = 0$ e il denominatore a $-2\sin 0 = 0$: si ha ancora la forma $\frac{0}{0}$ e restano soddisfatte le ipotesi di de l'Hôpital.

## Seconda applicazione di de l'Hôpital

Derivando ancora numeratore e denominatore:

$$\lim_{x\to 0}\frac{f(x)-1}{-2\sin 2x} = \lim_{x\to 0}\frac{f'(x)}{-4\cos 2x}.$$

Ora il limite non è più indeterminato: sfruttando la continuità di $f'$ e i dati $f'(0)=2$, $\cos 0 = 1$,

$$\lim_{x\to 0}\frac{f'(x)}{-4\cos 2x} = \frac{f'(0)}{-4\cos 0} = \frac{2}{-4} = -\frac{1}{2}.$$

## Conclusione

$$\lim_{x\to 0}\frac{\displaystyle\int_0^x f(t)\,dt - x}{\cos 2x - 1} = -\frac{1}{2}.$$

*Fonte:* [📄 PDF p.35](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
