

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_108_5|2006 Sessione Ordinaria PNI — Prova (p.108) — Quesito 5]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Dimostrare che la derivata, rispetto a $x$, della funzione $\arctan(x)$ è
$$\frac{1}{1+x^2}.$$

## Impostazione

Poniamo
$$y = \arctan(x),$$
il che equivale a
$$x = \tan(y), \qquad y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right).$$

La funzione $x = \tan(y)$ è continua, derivabile e strettamente crescente sull'intervallo $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, con derivata mai nulla: sono quindi soddisfatte le ipotesi del teorema di derivazione della funzione inversa.

## Derivazione tramite la funzione inversa

Ricordiamo che
$$\frac{d}{dy}\tan(y) = 1 + \tan^2(y).$$

Per il teorema sulla derivata della funzione inversa, se $y = \arctan(x)$ allora
$$y' = \frac{dy}{dx} = \frac{1}{\dfrac{dx}{dy}} = \frac{1}{\dfrac{d}{dy}\tan(y)} = \frac{1}{1 + \tan^2(y)}.$$

## Conclusione

Poiché $\tan(y) = x$, sostituendo si ottiene
$$1 + \tan^2(y) = 1 + x^2,$$
e quindi
$$\frac{d}{dx}\arctan(x) = \frac{1}{1 + x^2},$$
come si voleva dimostrare.

*Fonte:* [📄 PDF p.123](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
