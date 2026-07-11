

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_10|2005 Ordinaria — Prova — Quesito 10]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Si vuole dimostrare, calcolandone la derivata, che la funzione

$$f(x) = \arctan x + \arctan\frac{1-x}{1+x}$$

è costante, e si vuole determinare il valore di tale costante.

**Dominio.** L'argomento del secondo arcotangente richiede $1+x \neq 0$, quindi il dominio è $\mathbb{R} \setminus \{-1\}$, cioè l'unione dei due intervalli $(-\infty,\,-1)$ e $(-1,\,+\infty)$.

**Calcolo della derivata.** Il primo addendo ha derivata

$$\frac{d}{dx}\big(\arctan x\big) = \frac{1}{1+x^2}.$$

Per il secondo addendo si applica la regola di derivazione della funzione composta. Posto $u(x) = \dfrac{1-x}{1+x}$, si ha

$$u'(x) = \frac{-(1+x) - (1-x)}{(1+x)^2} = \frac{-2}{(1+x)^2}.$$

Inoltre

$$1 + u^2 = 1 + \frac{(1-x)^2}{(1+x)^2} = \frac{(1+x)^2 + (1-x)^2}{(1+x)^2} = \frac{2(1+x^2)}{(1+x)^2}.$$

Quindi

$$\frac{d}{dx}\left(\arctan\frac{1-x}{1+x}\right) = \frac{1}{1+u^2}\cdot u'(x) = \frac{(1+x)^2}{2(1+x^2)} \cdot \frac{-2}{(1+x)^2} = -\frac{1}{1+x^2}.$$

**Conclusione sulla derivata.** Sommando i due contributi:

$$f'(x) = \frac{1}{1+x^2} - \frac{1}{1+x^2} = 0$$

per ogni $x$ del dominio. Poiché la derivata è nulla su ciascuno dei due intervalli in cui il dominio è diviso, per il criterio di monotonia la funzione $f$ è **costante** su ognuno di essi.

**Valore della costante.** Per determinare il valore della costante è sufficiente calcolare $f$ in un punto di ciascun intervallo.

Sull'intervallo $(-1,\,+\infty)$ scegliamo $x = 0$:

$$f(0) = \arctan 0 + \arctan\frac{1-0}{1+0} = 0 + \arctan 1 = \frac{\pi}{4}.$$

Dunque $f(x) = \dfrac{\pi}{4}$ per ogni $x > -1$.

Sull'intervallo $(-\infty,\,-1)$ scegliamo $x = -2$:

$$f(-2) = \arctan(-2) + \arctan\frac{1-(-2)}{1+(-2)} = \arctan(-2) + \arctan(-3) = -\arctan 2 - \arctan 3 = -\frac{3\pi}{4}.$$

Dunque $f(x) = -\dfrac{3\pi}{4}$ per ogni $x < -1$.

La funzione è quindi costante a tratti: vale $\dfrac{\pi}{4}$ sull'intervallo $(-1,\,+\infty)$ e $-\dfrac{3\pi}{4}$ sull'intervallo $(-\infty,\,-1)$. Il salto in $x = -1$ non contraddice il risultato, perché in tale punto la funzione non è definita e i due intervalli sono separati.

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
