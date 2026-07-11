

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_5|2001 Suppletiva Ordinamento — Questionario — Quesito 5]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Sia $a$ un numero reale positivo e diverso da $1$. Vogliamo dimostrare che

$$\frac{d}{dx}\,a^{x} = a^{x}\ln a.$$

## Metodo 1 — dalla definizione di derivata

Posto $f(x)=a^{x}$, applichiamo la definizione di derivata:

$$f'(x) = \lim_{h\to 0}\frac{a^{x+h}-a^{x}}{h} = \lim_{h\to 0}\frac{a^{x}\,a^{h}-a^{x}}{h} = a^{x}\,\lim_{h\to 0}\frac{a^{h}-1}{h},$$

dove il fattore $a^{x}$ è stato portato fuori dal limite perché non dipende da $h$.

Rimane da calcolare il limite notevole $\displaystyle\lim_{h\to 0}\frac{a^{h}-1}{h}$. Ponendo $t=a^{h}-1$, si ha $a^{h}=1+t$, quindi $h\,\ln a=\ln(1+t)$ e $t\to 0$ quando $h\to 0$. Dunque

$$\lim_{h\to 0}\frac{a^{h}-1}{h} = \lim_{t\to 0}\frac{t}{\frac{\ln(1+t)}{\ln a}} = \ln a\cdot\lim_{t\to 0}\frac{t}{\ln(1+t)} = \ln a\cdot 1 = \ln a,$$

avendo usato il limite fondamentale $\displaystyle\lim_{t\to 0}\frac{\ln(1+t)}{t}=1$.

Sostituendo si ottiene

$$f'(x) = a^{x}\ln a.$$

## Metodo 2 — tramite la funzione esponenziale

Ricordando che $a=e^{\ln a}$, possiamo riscrivere la potenza come esponenziale di base $e$:

$$a^{x} = e^{\,x\ln a}.$$

Derivando la funzione composta, con la regola $\dfrac{d}{dx}e^{g(x)} = g'(x)\,e^{g(x)}$ e $g(x)=x\ln a$, per cui $g'(x)=\ln a$, si ha

$$\frac{d}{dx}\,a^{x} = \frac{d}{dx}\,e^{\,x\ln a} = \ln a\cdot e^{\,x\ln a} = a^{x}\ln a.$$

Entrambe le vie confermano il risultato richiesto:

$$\boxed{\;\dfrac{d}{dx}\,a^{x} = a^{x}\ln a\;}$$

*Fonte:* [📄 PDF p.35](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
