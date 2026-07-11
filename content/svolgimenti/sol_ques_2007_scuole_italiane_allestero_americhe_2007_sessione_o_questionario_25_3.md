

**Quesito:** [[Quesiti/ques_2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25_3|2007 Estero Americhe Ordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25|2007 Estero Americhe Ordinaria — Questionario]]

Si calcolino le radici dell'equazione
$$3^{x+3} + 9^{x+1} = 10.$$

## Riduzione a una equazione di secondo grado

Riscriviamo le due potenze usando le proprietà degli esponenziali, in modo da esprimere tutto in funzione di $3^{x}$:
$$3^{x+3} = 3^{3}\cdot 3^{x} = 27\cdot 3^{x}, \qquad 9^{x+1} = 9\cdot 9^{x} = 9\cdot 3^{2x}.$$

L'equazione diventa quindi
$$9\cdot 3^{2x} + 27\cdot 3^{x} - 10 = 0.$$

Poniamo per comodità $t = 3^{x}$, con la condizione $t > 0$ (una potenza a base positiva è sempre positiva). Ricordando che $3^{2x} = \left(3^{x}\right)^{2} = t^{2}$, otteniamo l'equazione di secondo grado
$$9t^{2} + 27t - 10 = 0.$$

## Soluzione e ritorno alla variabile $x$

Applichiamo la formula risolutiva:
$$t = \frac{-27 \pm \sqrt{27^{2} + 4\cdot 9\cdot 10}}{2\cdot 9} = \frac{-27 \pm \sqrt{729 + 360}}{18} = \frac{-27 \pm \sqrt{1089}}{18} = \frac{-27 \pm 33}{18}.$$

Le due radici sono
$$t_{1} = \frac{-27 + 33}{18} = \frac{6}{18} = \frac{1}{3}, \qquad t_{2} = \frac{-27 - 33}{18} = -\frac{60}{18} = -\frac{10}{3}.$$

La soluzione $t_{2} = -\dfrac{10}{3}$ è negativa e va scartata, perché deve essere $t = 3^{x} > 0$. Resta accettabile solo $t_{1} = \dfrac{1}{3}$, da cui
$$3^{x} = \frac{1}{3} = 3^{-1} \;\Rightarrow\; x = -1.$$

## Verifica

Sostituendo $x = -1$ nell'equazione di partenza:
$$3^{-1+3} + 9^{-1+1} = 3^{2} + 9^{0} = 9 + 1 = 10,$$
uguaglianza soddisfatta. L'unica radice reale dell'equazione è dunque
$$\boxed{\,x = -1\,}.$$

*Fonte:* [📄 PDF p.25](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
