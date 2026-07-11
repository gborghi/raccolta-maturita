

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_10|2007 LS Ordinamento Straordinaria — Questionario — Quesito 10]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si determinino le costanti $a$ e $b$ in modo che la funzione

$$F(x) = a\,\sin^3 x + b\,\sin x + 2x$$

sia una primitiva della funzione

$$f(x) = \cos^3 x - 3\cos x + 2.$$

## Impostazione

La funzione $F(x)$ è una primitiva di $f(x)$ se e solo se $F'(x) = f(x)$ per ogni $x$. Deriviamo quindi $F(x)$:

$$F'(x) = 3a\,\sin^2 x \cdot \cos x + b\,\cos x + 2.$$

## Riscrittura in potenze di $\cos x$

Per poter confrontare $F'(x)$ con $f(x)$ conviene esprimere tutto in funzione di $\cos x$. Usando l'identità fondamentale $\sin^2 x = 1 - \cos^2 x$ otteniamo:

$$F'(x) = 3a\,\cos x\,(1 - \cos^2 x) + b\,\cos x + 2.$$

Sviluppando e raccogliendo i termini simili:

$$F'(x) = -3a\,\cos^3 x + (3a + b)\,\cos x + 2.$$

## Confronto dei coefficienti

Imponiamo l'uguaglianza $F'(x) = f(x)$, cioè

$$-3a\,\cos^3 x + (3a + b)\,\cos x + 2 = \cos^3 x - 3\cos x + 2.$$

Poiché l'uguaglianza deve valere per ogni $x$, i coefficienti dei termini omologhi devono coincidere. Ne segue il sistema:

$$\begin{cases} -3a = 1 \\ 3a + b = -3 \end{cases}$$

Dalla prima equazione si ricava

$$a = -\frac{1}{3}.$$

Sostituendo nella seconda:

$$b = -3 - 3a = -3 - 3\left(-\frac{1}{3}\right) = -3 + 1 = -2.$$

## Conclusione

Le costanti cercate sono

$$a = -\frac{1}{3}, \qquad b = -2,$$

per cui la primitiva richiesta è

$$F(x) = -\frac{1}{3}\,\sin^3 x - 2\,\sin x + 2x.$$

**Verifica.** Derivando:

$$F'(x) = -\sin^2 x\,\cos x - 2\cos x + 2 = -(1-\cos^2 x)\cos x - 2\cos x + 2 = \cos^3 x - 3\cos x + 2 = f(x),$$

come richiesto.

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
