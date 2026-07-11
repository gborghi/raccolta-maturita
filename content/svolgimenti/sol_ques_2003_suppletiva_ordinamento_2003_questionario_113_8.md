

**Quesito:** [[Quesiti/ques_2003_suppletiva_ordinamento_2003_questionario_113_8|2003 Suppletiva Ordinamento — Questionario — Quesito 8]] · **Prova:** [[Prove/2003_suppletiva_ordinamento_2003_questionario_113|2003 Suppletiva Ordinamento — Questionario]]

Di una funzione $f(x)$ si sa che la sua derivata seconda è $f''(x)=2^x$ e che $f(0)=\dfrac{1}{(\ln 2)^2}$ e $f'(0)=0$. Determinare $f(x)$.

## a) Dalla derivata seconda alla derivata prima

Integrando $f''(x)=2^x$ si ottiene la derivata prima, ricordando che $\displaystyle\int 2^x\,dx=\frac{2^x}{\ln 2}+c$:

$$f'(x)=\int 2^x\,dx=\frac{2^x}{\ln 2}+c.$$

La condizione $f'(0)=0$ determina la costante:

$$f'(0)=\frac{2^0}{\ln 2}+c=\frac{1}{\ln 2}+c=0 \;\Rightarrow\; c=-\frac{1}{\ln 2}.$$

Pertanto

$$f'(x)=\frac{2^x}{\ln 2}-\frac{1}{\ln 2}=\frac{2^x-1}{\ln 2}.$$

## b) Dalla derivata prima alla funzione

Integrando ancora, e raccogliendo il fattore costante $\dfrac{1}{\ln 2}$:

$$f(x)=\int \frac{2^x-1}{\ln 2}\,dx=\frac{1}{\ln 2}\int\left(2^x-1\right)dx=\frac{1}{\ln 2}\left[\frac{2^x}{\ln 2}-x\right]+k.$$

Imponiamo la condizione $f(0)=\dfrac{1}{(\ln 2)^2}$:

$$f(0)=\frac{1}{\ln 2}\left[\frac{2^0}{\ln 2}-0\right]+k=\frac{1}{(\ln 2)^2}+k=\frac{1}{(\ln 2)^2}\;\Rightarrow\; k=0.$$

## c) Conclusione

La funzione cercata è quindi

$$f(x)=\frac{1}{\ln 2}\left[\frac{2^x}{\ln 2}-x\right]=\frac{2^x}{(\ln 2)^2}-\frac{x}{\ln 2}.$$

Si verifica facilmente che $f'(x)=\dfrac{2^x}{\ln 2}-\dfrac{1}{\ln 2}$, da cui $f''(x)=2^x$, $f'(0)=0$ e $f(0)=\dfrac{1}{(\ln 2)^2}$, in accordo con i dati.

*Fonte:* [📄 PDF p.117](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
