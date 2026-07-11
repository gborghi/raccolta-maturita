

**Quesito:** [[Quesiti/ques_2005_estero_australe_2005_suppletiva_questionario_66_6|2005 Estero Australe Suppletiva — Questionario — Quesito 6]] · **Prova:** [[Prove/2005_estero_australe_2005_suppletiva_questionario_66|2005 Estero Australe Suppletiva — Questionario]]

Fra tutte le primitive di $f(x)=3\cos^3(x)$ si deve trovare quella il cui grafico passa per il punto $(0;5)$.

## Primitiva generale

Cerchiamo la più generale primitiva della funzione data, cioè $F(x)=\int 3\cos^3(x)\,dx$. Conviene isolare un fattore $\cos(x)$ e usare l'identità fondamentale $\cos^2(x)=1-\sin^2(x)$:

$$\int 3\cos^3(x)\,dx = 3\int \cos(x)\left(1-\sin^2(x)\right)dx = 3\int \cos(x)\,dx - 3\int \cos(x)\sin^2(x)\,dx.$$

Il primo integrale è immediato. Nel secondo poniamo $t=\sin(x)$, da cui $dt=\cos(x)\,dx$, ottenendo $\int \cos(x)\sin^2(x)\,dx=\int t^2\,dt=\dfrac{t^3}{3}=\dfrac{\sin^3(x)}{3}$. Quindi:

$$F(x) = 3\sin(x) - 3\cdot\frac{\sin^3(x)}{3} + k = 3\sin(x) - \sin^3(x) + k,$$

con $k\in\mathbb{R}$ costante arbitraria.

## Condizione sul punto

Imponiamo che il grafico passi per $(0;5)$, cioè $F(0)=5$. Poiché $\sin(0)=0$:

$$F(0) = 3\cdot 0 - 0 + k = k = 5.$$

## Primitiva richiesta

La primitiva cercata è dunque:

$$F(x) = 3\sin(x) - \sin^3(x) + 5.$$

*Fonte:* [📄 PDF p.69](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
