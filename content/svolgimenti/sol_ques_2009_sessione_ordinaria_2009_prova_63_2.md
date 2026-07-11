

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_63_2|2009 Sessione Ordinaria Estero Europa — Prova — Quesito 2]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_63|2009 Sessione Ordinaria Estero Europa — Prova]]

Si calcoli il limite

$$\lim_{x\to 1}\frac{\ln^2 x + x - 1}{x^2 - x + \sin^2(x-1)}.$$

Numeratore e denominatore tendono entrambi a $0$ per $x\to 1$, quindi si presenta la forma indeterminata $\frac{0}{0}$.

## Sostituzione e limiti notevoli

Poniamo $t = x-1$, così $t\to 0$ quando $x\to 1$. Osserviamo che $x = 1+t$ e che il denominatore si può scrivere

$$x^2 - x = x(x-1) = (1+t)\,t.$$

Il limite diventa

$$\lim_{t\to 0}\frac{\ln^2(1+t) + t}{(1+t)\,t + \sin^2 t}.$$

Raccogliamo $t$ a numeratore e a denominatore:

$$\frac{\ln^2(1+t) + t}{(1+t)\,t + \sin^2 t}
= \frac{t\left(\dfrac{\ln^2(1+t)}{t} + 1\right)}{t\left(1+t + \dfrac{\sin^2 t}{t}\right)}
= \frac{\dfrac{\ln^2(1+t)}{t} + 1}{\,1+t + \dfrac{\sin^2 t}{t}\,}.$$

Usiamo ora i limiti notevoli $\dfrac{\ln(1+t)}{t}\to 1$ e $\dfrac{\sin t}{t}\to 1$ per $t\to 0$:

$$\frac{\ln^2(1+t)}{t} = \left(\frac{\ln(1+t)}{t}\right)^2\cdot t \;\to\; 1^2\cdot 0 = 0,$$

$$\frac{\sin^2 t}{t} = \left(\frac{\sin t}{t}\right)^2\cdot t \;\to\; 1^2\cdot 0 = 0.$$

Pertanto

$$\lim_{t\to 0}\frac{\dfrac{\ln^2(1+t)}{t} + 1}{\,1+t + \dfrac{\sin^2 t}{t}\,}
= \frac{0 + 1}{\,1 + 0 + 0\,} = 1.$$

## Metodo degli sviluppi asintotici

Allo stesso risultato si arriva confrontando gli ordini di infinitesimo. Con $t = x-1\to 0$:

- $\ln^2(1+t)\sim t^2$, che è trascurabile rispetto a $t$; quindi il numeratore è
$$\ln^2(1+t) + t \sim t;$$
- $\sin^2 t\sim t^2$, anch'esso trascurabile rispetto a $t$; quindi il denominatore è
$$(1+t)\,t + \sin^2 t \sim t.$$

Il limite equivale allora a

$$\lim_{t\to 0}\frac{t}{t} = 1.$$

Il limite cercato vale dunque $1$.

*Fonte:* [📄 PDF p.75](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
