

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_8|2003 Suppletiva PNI — Questionario — Quesito 8]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

In un piano riferito a un sistema di assi cartesiani ortogonali $(Oxy)$ sono date le affinità di equazioni

$$\begin{cases} x' = (a+1)x - by + a \\ y' = (a-1)x + 2by - 1 \end{cases}$$

dove $a,\,b$ sono parametri reali. Si vuole dimostrare che fra esse ve n'è una che è una similitudine diretta e determinarne il punto unito.

## Ricerca della similitudine

Le equazioni di una similitudine diretta sono del tipo

$$\begin{cases} x' = \alpha x - \beta y + p \\ y' = \beta x + \alpha y + q \end{cases}$$

cioè: il coefficiente di $x$ nella prima equazione deve essere uguale al coefficiente di $y$ nella seconda ($\alpha$), mentre il coefficiente di $y$ nella prima deve essere l'opposto del coefficiente di $x$ nella seconda ($-\beta$ e $\beta$).

Confrontando con l'affinità data, i coefficienti sono
$$\alpha = a+1, \qquad \alpha = 2b, \qquad \beta = b, \qquad \beta = a-1.$$

Devono quindi valere simultaneamente le condizioni

$$\begin{cases} a+1 = 2b \\ a-1 = b \end{cases}$$

Sostituendo $b = a-1$ nella prima equazione si ottiene

$$a+1 = 2(a-1) \;\Rightarrow\; a+1 = 2a-2 \;\Rightarrow\; a = 3,$$

e di conseguenza $b = a-1 = 2$. Con questi valori si verifica infatti $\alpha = a+1 = 4 = 2b$ e $\beta = b = 2 = a-1$.

Per $a=3$ e $b=2$ l'affinità diventa dunque la similitudine diretta

$$\begin{cases} x' = 4x - 2y + 3 \\ y' = 2x + 4y - 1 \end{cases}$$

(il rapporto di similitudine è $\sqrt{\alpha^2+\beta^2} = \sqrt{16+4} = 2\sqrt{5}$).

## Punto unito

Il punto unito è quel punto che coincide con la propria immagine, cioè si ottiene imponendo $x'=x$ e $y'=y$:

$$\begin{cases} x = 4x - 2y + 3 \\ y = 2x + 4y - 1 \end{cases} \;\Rightarrow\; \begin{cases} 3x - 2y = -3 \\ 2x + 3y = 1 \end{cases}$$

Risolvendo il sistema (per esempio moltiplicando la prima equazione per $3$, la seconda per $2$ e sommando):

$$9x - 6y = -9, \qquad 4x + 6y = 2 \;\Rightarrow\; 13x = -7 \;\Rightarrow\; x = -\frac{7}{13}.$$

Sostituendo in $2x+3y=1$:

$$3y = 1 - 2\left(-\frac{7}{13}\right) = 1 + \frac{14}{13} = \frac{27}{13} \;\Rightarrow\; y = \frac{9}{13}.$$

Il punto unito della similitudine è quindi

$$U\left(-\frac{7}{13},\; \frac{9}{13}\right).$$

*Fonte:* [📄 PDF p.135](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/geometria #cluster/geometria
