---
tipo: soluzione
prova_stem: 2011_liceo_della_comunicazione_2011_sessione_ordinaria_questionario_69
pdf: Prova_Maturita_2011.pdf
source: text
title: 2011 Liceo Comunicazione Ordinaria — Questionario — Svolgimento
---
## Quesito 1

Si trovi l'area della regione delimitata dalla curva $y = \cos(x)$ e dall'asse $x$ da $x = 1$ a $x = 2$ radianti.

L'area richiesta è data da:

$$A = \int_1^2 |\cos x|\,dx = \int_1^{\pi/2} \cos x\,dx + \int_{\pi/2}^2 (-\cos x)\,dx$$

Poiché $\cos x \ge 0$ per $x \in [1, \pi/2]$ e $\cos x \le 0$ per $x \in [\pi/2, 2]$, si calcola:

$$A = \bigl[\sin x\bigr]_1^{\pi/2} + \bigl[-\sin x\bigr]_{\pi/2}^2 = \left(\sin\frac{\pi}{2} - \sin 1\right) + \left(-\sin 2 + \sin\frac{\pi}{2}\right)$$

$$A = 2 - \sin 1 - \sin 2 \approx 0{,}25$$

*(grafico — vedi PDF p. corrispondente)*

## Quesito 2

Si trovi il punto della curva $y = \sqrt{x}$ più vicino al punto di coordinate $(4;\, 0)$.

Il quadrato della distanza $d(x)$ del generico punto $(x,\, \sqrt{x})$ della curva dal punto $(4;\, 0)$ è dato da:

$$d^2(x) = (x - 4)^2 + \left(\sqrt{x}\right)^2 = x^2 - 8x + 16 + x = x^2 - 7x + 16$$

La distanza è minima quando lo è il suo quadrato, cioè per $x = \dfrac{7}{2}$ (il minimo è nel vertice della parabola). Il punto richiesto ha quindi coordinate:

$$\left(\frac{7}{2};\; \sqrt{\frac{7}{2}}\right)$$

## Quesito 3

Si calcoli:

$$\lim_{x \to a} \frac{\tan x - \tan a}{x - a}$$

Il limite in questione è quello che conduce alla derivata di $\tan x$ in $x = a$, quindi vale:

$$\lim_{x \to a} \frac{\tan x - \tan a}{x - a} = \frac{1}{\cos^2 a} = 1 + \tan^2 a$$

Il calcolo diretto può essere effettuato utilizzando la regola di de L'Hôpital (dopo aver verificato che sono valide le condizioni: il limite si presenta nella forma $\left[\dfrac{0}{0}\right]$, numeratore e denominatore sono funzioni continue e derivabili in un intorno di $x = a$ e in tale intorno la derivata del denominatore non si annulla):

$$\lim_{x \to a} \frac{\tan x - \tan a}{x - a} = \lim_{x \to a} \frac{\dfrac{1}{\cos^2 x}}{1} = \frac{1}{\cos^2 a}$$

N.B. $a$ deve essere diverso da $\dfrac{\pi}{2} + k\pi$, altrimenti il limite non ha senso.

## Quesito 4

Il numero delle combinazioni di $n$ oggetti a 4 a 4 è uguale al numero delle combinazioni degli stessi oggetti a 3 a 3. Si trovi $n$.

Basta risolvere l'equazione:

$$\binom{n}{4} = \binom{n}{3}, \quad n \in \mathbb{N},\; n \ge 4$$

Siccome $\dbinom{n}{4} = \dfrac{n-3}{4}\dbinom{n}{3}$, l'equazione diventa:

$$\frac{n-3}{4} = 1 \implies n - 3 = 4 \implies n = 7$$

In alternativa: è sufficiente che sia $n - 4 = 3$, da cui $\mathbf{n = 7}$.

## Quesito 5

In una delle sue opere G. Galilei fa porre da Salviati, uno dei suoi personaggi, la seguente questione riguardante l'insieme $\mathbb{N}$ dei numeri naturali ("i numeri tutti"). Dice Salviati: «...se io dirò, i numeri tutti, comprendendo i quadrati e i non quadrati, esser più che i quadrati soli, dirò proposizione verissima: non è così?». Quale la risposta (motivata) all'interrogativo posto?

Si tratta di un classico esempio di insiemi infiniti "equipotenti", come dire "ugualmente numerosi". Infatti l'insieme dei numeri naturali può essere posto in corrispondenza biunivoca con l'insieme dei numeri naturali che sono quadrati perfetti (si pensi alla legge $n \mapsto n^2$):

$$0 \leftrightarrow 0,\quad 1 \leftrightarrow 1,\quad 2 \leftrightarrow 4,\quad 3 \leftrightarrow 9,\quad 4 \leftrightarrow 16,\quad \ldots$$

Quando abbiamo a che fare con insiemi infiniti alcune proprietà valide per gli insiemi finiti sembrano paradossali. Ricordiamo che si definisce infinito un insieme che può essere posto in corrispondenza biunivoca con un suo sottoinsieme proprio (come nel caso in esame).

È chiaro che in tal caso il concetto di "ugualmente numerosi" è più delicato: sembra evidente che i numeri naturali siano "di più" dei quadrati perfetti ($0, 1, 2, 3, 4, 5, \ldots$ sono "di più" di $0, 1, 4, 9, 16, \ldots$), in realtà, potendosi stabilire tra i due insiemi una corrispondenza biunivoca, dobbiamo dire che sono "ugualmente numerosi".

## Quesito 6

Di tutti i coni inscritti in una sfera di raggio $R = 10$ cm, qual è quello di superficie laterale massima?

Il raggio della sfera è $R = 10$ cm. Sia $H$ il centro della sfera, $C$ il centro della base del cono, $A$ l'apice e $D$ un punto della base. Poniamo $CH = x$ con la limitazione $0 < x \le 2R$.

Per il secondo teorema di Euclide applicato al triangolo rettangolo $ADC$, il raggio della base vale:

$$r^2 = AH^2 = x(2R - x)$$

Per il primo teorema di Euclide, l'apotema del cono è:

$$AC = \sqrt{2Rx}$$

La superficie laterale del cono è:

$$S = \pi \cdot r \cdot AC = \pi\sqrt{x(2R-x)} \cdot \sqrt{2Rx} = \pi\sqrt{2Rx^2(2R-x)}$$

$S$ è massima se lo è $y = x^2(2R - x)$. Studiando la derivata prima:

$$y' = 2x(2R - x) - x^2 = x(4R - 3x) = 0$$

Il massimo si ha per $x = \dfrac{4R}{3}$; con $R = 10$:

$$x = \frac{4 \cdot 10}{3} = \frac{40}{3} \approx 13{,}3 \text{ cm}$$

## Quesito 7

Un test d'esame consta di dieci domande, per ciascuna delle quali si deve scegliere l'unica risposta corretta fra quattro alternative. Qual è la probabilità che, rispondendo a caso alle dieci domande, almeno due risposte risultino corrette?

Si tratta di una distribuzione binomiale con $p = \dfrac{1}{4}$ (probabilità di 1 successo, cioè di rispondere correttamente a una domanda) e $q = \dfrac{3}{4}$.

La probabilità di avere almeno due successi equivale a:

$$P(\text{almeno 2}) = 1 - P(0) - P(1)$$

$$= 1 - \binom{10}{0}\left(\frac{1}{4}\right)^0\!\left(\frac{3}{4}\right)^{10} - \binom{10}{1}\left(\frac{1}{4}\right)^1\!\left(\frac{3}{4}\right)^9$$

$$= 1 - \left(\frac{3}{4}\right)^{10} - \frac{10}{4}\left(\frac{3}{4}\right)^9$$

La probabilità richiesta è $p \approx 0{,}756 \approx 76\%$.

## Quesito 8

In che cosa consiste il problema della quadratura del cerchio? E perché è così spesso citato?

Si tratta di un classico problema di geometria elementare che consiste nell'impossibilità di costruire con riga e compasso un quadrato equivalente (di uguale area) a un cerchio dato; tale costruzione richiederebbe la costruzione del numero $\pi$, dimostrata impossibile con soli riga e compasso: Lindemann dimostrò nel 1882 che $\pi$ è trascendente, quindi non costruibile con riga e compasso.

L'espressione "quadratura del cerchio" è spesso citata per indicare un'impresa impossibile.

## Quesito 9

Si provi che, nello spazio ordinario a tre dimensioni, il luogo dei punti equidistanti dai tre vertici di un triangolo rettangolo è la retta perpendicolare al piano del triangolo passante per il punto medio dell'ipotenusa.

Indichiamo con $E$ il punto medio dell'ipotenusa $BC$ del triangolo rettangolo $ABC$; la mediana $AE$ risulta uguale alla metà dell'ipotenusa. Se la retta $r$ passa per $E$ ed è perpendicolare al piano del triangolo $ABC$, i tre triangoli $FEB$, $FEC$ ed $FEA$ (tutti rettangoli in $E$) sono congruenti poiché hanno i due cateti rispettivamente congruenti ($FE$ comune, $EA = EB = EC$). Pertanto, per ogni punto $F$ della retta $r$, le distanze $FA$, $FB$ ed $FC$ sono uguali.

Per dimostrare che la retta in questione è il luogo richiesto, dobbiamo dimostrare che ogni punto equidistante da $A$, $B$ e $C$ si trova su tale retta. A tale scopo basta notare che il luogo dei punti equidistanti da $A$ e $B$ è il piano perpendicolare ad $AB$ nel suo punto medio; analogamente per $A$ e $C$ e per $B$ e $C$. I punti equidistanti da $A$, $B$ e $C$ appartengono contemporaneamente a questi tre piani, che hanno in comune proprio la retta perpendicolare al piano del triangolo $ABC$ nel punto medio $E$ dell'ipotenusa $BC$.

## Quesito 10

Nella figura a lato, denotati con I, II e III, sono disegnati tre grafici. Uno di essi è il grafico di una funzione $f$, un altro lo è della funzione derivata $f'$ e l'altro ancora di $f''$. Quale delle seguenti alternative identifica correttamente ciascuno dei tre grafici?

*(grafico — vedi PDF p. corrispondente)*

|   | $f$ | $f'$ | $f''$ |
|---|-----|------|-------|
| A) | I | II | III |
| B) | I | III | II |
| C) | II | III | I |
| D) | III | II | I |
| E) | III | I | II |

Si motivi la risposta.

La risposta corretta è la **D** ($f$ è la III, $f'$ è la II ed $f''$ è la I). Infatti:

1. $f$ non può essere la I, poiché è sempre crescente, quindi la $f'$ dovrebbe essere positiva o nulla: ciò non si verifica né per la II né per la III.

2. $f$ non può essere la II, perché essendo la concavità sempre verso l'alto, la $f''$ dovrebbe essere positiva o nulla: ciò non si verifica né per la I né per la III.

3. $f$ è la III: avendo la concavità verso l'alto per $x > 0$ e verso il basso per $x < 0$, la $f''$ è positiva per $x > 0$ e negativa per $x < 0$: ciò si verifica per la I, che è quindi $f''$; la III è decrescente tra l'ascissa del massimo e l'ascissa del minimo, quindi in tale intervallo la $f'$ risulta negativa, come avviene per la II.
