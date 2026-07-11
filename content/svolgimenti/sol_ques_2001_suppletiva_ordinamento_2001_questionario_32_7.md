

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_7|2001 Suppletiva Ordinamento — Questionario — Quesito 7]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Una primitiva della funzione $f(x)$ è $F(x)=x^{2}+2x$. Se è possibile, calcolare

$$\int_{0}^{1} f\!\left(\frac{x}{2}\right)\,dx$$

determinandone il valore; in caso contrario spiegare perché il calcolo non è possibile.

Il calcolo è possibile: conoscere una primitiva $F$ di $f$ è sufficiente per integrare $f$, e il fattore $\tfrac{x}{2}$ nell'argomento si gestisce con un cambiamento di variabile.

Operiamo la sostituzione
$$t=\frac{x}{2}\quad\Rightarrow\quad x=2t,\qquad dx=2\,dt.$$

Aggiorniamo gli estremi di integrazione: quando $x=0$ risulta $t=0$, e quando $x=1$ risulta $t=\dfrac{1}{2}$. Si ha pertanto

$$\int_{0}^{1} f\!\left(\frac{x}{2}\right)dx=\int_{0}^{\frac{1}{2}} f(t)\,\cdot 2\,dt=2\int_{0}^{\frac{1}{2}} f(t)\,dt.$$

Poiché $F(t)=t^{2}+2t$ è una primitiva di $f$, per il teorema fondamentale del calcolo integrale

$$2\int_{0}^{\frac{1}{2}} f(t)\,dt=2\Big[t^{2}+2t\Big]_{0}^{\frac{1}{2}}=2\left[\left(\frac{1}{4}+1\right)-0\right]=2\cdot\frac{5}{4}=\frac{5}{2}.$$

Dunque

$$\int_{0}^{1} f\!\left(\frac{x}{2}\right)dx=\frac{5}{2}.$$

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
