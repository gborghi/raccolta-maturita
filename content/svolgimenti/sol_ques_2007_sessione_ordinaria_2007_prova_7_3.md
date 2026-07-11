

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_7_3|2007 Ordinaria — Prova — Quesito 3]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Si calcolino le radici dell'equazione
$$3^{x+3} + 9^{x+1} = 10.$$

## Riscrittura con le proprietà delle potenze

Usando $3^{x+3} = 3^x \cdot 3^3 = 27\cdot 3^x$ e $9^{x+1} = 9^x\cdot 9 = 9\cdot 3^{2x}$, l'equazione diventa
$$9\cdot 3^{2x} + 27\cdot 3^x - 10 = 0.$$

## Sostituzione e risoluzione

Poniamo $t = 3^x$, con la condizione $t > 0$ (una potenza a base positiva è sempre positiva). Poiché $3^{2x} = t^2$, si ottiene l'equazione di secondo grado
$$9t^2 + 27t - 10 = 0.$$

Il discriminante è
$$\Delta = 27^2 + 4\cdot 9\cdot 10 = 729 + 360 = 1089 = 33^2,$$
quindi
$$t = \frac{-27 \pm 33}{18}.$$

Le due soluzioni sono
$$t_1 = \frac{-27 + 33}{18} = \frac{6}{18} = \frac{1}{3}, \qquad t_2 = \frac{-27 - 33}{18} = -\frac{10}{3}.$$

La soluzione $t_2 = -\dfrac{10}{3}$ è negativa e va scartata, perché $t = 3^x > 0$.

## Ritorno alla variabile x

Resta $t = 3^x = \dfrac{1}{3} = 3^{-1}$, da cui, per iniettività della funzione esponenziale,
$$x = -1.$$

**Verifica:** $3^{-1+3} + 9^{-1+1} = 3^2 + 9^0 = 9 + 1 = 10.$

L'equazione ammette quindi l'unica radice reale $x = -1$.

*Fonte:* [📄 PDF p.25](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
