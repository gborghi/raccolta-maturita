

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_5|2005 Ordinaria — Prova — Quesito 5]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Il quesito chiede due cose: come si definisce il numero $e$ di Nepero e perché la derivata di $e^x$ è ancora $e^x$.

## a) Definizione del numero $e$

Il numero $e$ di Nepero si definisce come il limite della successione $\left(1+\dfrac{1}{n}\right)^n$ al tendere di $n$ all'infinito:

$$e = \lim_{n\to +\infty}\left(1+\frac{1}{n}\right)^n .$$

Si dimostra che tale successione è crescente e limitata superiormente, dunque convergente; il suo limite è un numero irrazionale (anzi, trascendente) il cui valore approssimato è

$$e \approx 2,\!718281828\ldots$$

In forma equivalente, ponendo $t=\dfrac{1}{n}$, si ha la definizione tramite variabile reale continua

$$e = \lim_{t\to 0}\,(1+t)^{\frac{1}{t}} ,$$

che è la forma più comoda per il calcolo delle derivate. Il numero $e$ è la base dei logaritmi naturali: si pone $\ln x = \log_e x$.

## b) Perché $D\,[e^x]=e^x$

Applichiamo la definizione di derivata come limite del rapporto incrementale alla funzione $f(x)=e^x$:

$$f'(x)=\lim_{h\to 0}\frac{e^{x+h}-e^{x}}{h}=\lim_{h\to 0}\frac{e^{x}\,e^{h}-e^{x}}{h}=e^{x}\cdot\lim_{h\to 0}\frac{e^{h}-1}{h},$$

dove abbiamo raccolto $e^x$, che non dipende da $h$ e può quindi essere portato fuori dal limite.

Tutto si riduce dunque al **limite notevole**

$$\lim_{h\to 0}\frac{e^{h}-1}{h}=1 .$$

Per dimostrarlo poniamo $t=e^{h}-1$, da cui $e^{h}=1+t$ e $h=\ln(1+t)$; inoltre $t\to 0$ quando $h\to 0$. Sostituendo:

$$\lim_{h\to 0}\frac{e^{h}-1}{h}=\lim_{t\to 0}\frac{t}{\ln(1+t)}=\lim_{t\to 0}\frac{1}{\frac{1}{t}\ln(1+t)}=\lim_{t\to 0}\frac{1}{\ln\!\big((1+t)^{\frac{1}{t}}\big)} .$$

Per la definizione di $e$ vista sopra, $(1+t)^{\frac{1}{t}}\to e$ per $t\to 0$, e quindi

$$\lim_{t\to 0}\ln\!\big((1+t)^{\frac{1}{t}}\big)=\ln e = 1 ,$$

da cui il limite notevole vale $1$.

Concludendo, sostituendo questo risultato nella derivata:

$$f'(x)=e^{x}\cdot 1 = e^{x}.$$

La funzione esponenziale $e^x$ è dunque uguale alla propria derivata: questa è precisamente la proprietà che rende $e$ la base "naturale". Se si usasse una base $a>0$ diversa da $e$ si otterrebbe invece $D\,[a^x]=a^x\ln a$, e il fattore $\ln a$ è uguale a $1$ solo quando $a=e$.

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
