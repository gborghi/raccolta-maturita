---
tipo: soluzione
prova_stem: 2011_pni_2011_questionario_129
pdf: Prova_Maturita_2011.pdf
source: text
title: 2011 PNI — Questionario — Svolgimento
---
## Quesito 1

La geometria euclidea è adeguata a descrivere uno spazio limitato (per esempio lo spazio intorno alla nostra città, o lo spazio della nostra provincia) mentre è inadeguata a descrivere spazi più ampi.

Per esempio, se il nostro spazio è tutto il globo terrestre, approssimabile ad una sfera, la geometria euclidea non è più adeguata a descriverlo; in tal caso la geometria che meglio si presta a descrivere le proprietà dello spazio è non euclidea, per esempio la geometria sferica.

## Quesito 2

Il quadrato della distanza $d(x)$ del generico punto della curva dal punto $(4;\, 0)$ è dato da:

$$d^2(x) = (x - 4)^2 + (x - 0)^2 = x^2 - 7x + 16.$$

La distanza è minima quando lo è il suo quadrato, cioè per $x = \dfrac{7}{2}$ (il minimo è nel vertice della parabola). Il punto richiesto ha quindi coordinate

$$\left(\frac{7}{2};\; \frac{7}{2}\right).$$

## Quesito 3

Il volume richiesto si può ottenere utilizzando il cosiddetto metodo dei "gusci cilindrici", che conduce alla formula:

$$V = 2\pi \int_{0}^{a} x f(x)\, dx.$$

Nel nostro caso si tratta di calcolare l'integrale:

$$2\pi \int_{0}^{\pi} x \sin(x)\, dx,$$

che, utilizzando il metodo per parti, porta al risultato $2\pi^2$.

Allo stesso risultato si può arrivare più velocemente utilizzando un teorema di Guldino: il volume è dato da:

$$V = 2\pi \cdot x_G \cdot S,$$

dove $x_G$ è l'ascissa del baricentro della superficie delimitata dalla funzione $y = \sin(x)$ e dall'asse delle ascisse relativamente all'intervallo $[0;\, \pi]$, ed $S$ è l'area di tale superficie.

Data la simmetria della superficie, l'ascissa del baricentro è $x_G = \dfrac{\pi}{2}$.

Risulta poi:

$$S = \int_{0}^{\pi} \sin(x)\, dx = \bigl[-\cos(x)\bigr]_{0}^{\pi} = 2.$$

Pertanto:

$$V = 2\pi \cdot x_G \cdot S = 2\pi \cdot \frac{\pi}{2} \cdot 2 = 2\pi^2,$$

come trovato precedentemente.

## Quesito 4

Basta risolvere l'equazione

$$\binom{n}{4} = \binom{n}{3},$$

con $n$ numero naturale maggiore o uguale a $4$. Siccome

$$\binom{n}{4} = \binom{n}{n-4},$$

è sufficiente che sia $n - 4 = 3$, da cui $n = 7$.

## Quesito 5

Si tratta di un classico esempio di insiemi infiniti "equipotenti", come dire "ugualmente numerosi". Infatti l'insieme dei numeri naturali può essere posto in corrispondenza biunivoca con l'insieme dei numeri naturali che sono quadrati perfetti (si pensi alla legge $n \leftrightarrow n^2$).

Quando abbiamo a che fare con insiemi infiniti alcune proprietà valide per gli insiemi finiti sembrano paradossali. In effetti si definisce infinito un insieme che può essere posto in corrispondenza biunivoca con un suo sottoinsieme proprio (come nel caso in esame).

È chiaro che in tal caso il concetto di "ugualmente numerosi" è più delicato: sembra evidente che i numeri naturali siano "di più" dei quadrati perfetti ($0, 1, 2, 3, 4, 5, \ldots$ sono "di più" di $0, 1, 4, 9, 16, \ldots$), in realtà, potendosi stabilire tra i due insiemi una corrispondenza biunivoca, dobbiamo dire che sono "ugualmente numerosi".

## Quesito 6

Il raggio $R$ della sfera è $10$ cm. La superficie laterale del cono è $S = \pi \cdot AH \cdot AC$.

Poniamo $CH = x$ e teniamo presente le limitazioni $0 \le x \le 2R$.

Risulta:

$$AH = \sqrt{x(2R - x)}$$

(per il secondo teorema di Euclide applicato al triangolo rettangolo $ADC$).

L'apotema del cono $AC$ vale:

$$AC = \sqrt{2Rx}$$

(primo teorema di Euclide).

Quindi la superficie laterale è:

$$S = \pi \cdot \sqrt{x(2R-x)} \cdot \sqrt{2Rx} = \pi Rx\sqrt{2(2R - x)},$$

che è massima se lo è $y = x^2(2R - x)$. Studiando la derivata prima si scopre facilmente che il massimo richiesto si ha quando

$$x = \frac{4R}{3} = \frac{40}{3} \text{ cm}.$$

## Quesito 7

Si tratta di una distribuzione binomiale con $p = \tfrac{1}{4}$ (probabilità di 1 successo, cioè di rispondere correttamente ad una domanda) e $q = \tfrac{3}{4}$.

La probabilità di avere almeno due successi equivale a $1 - P(\text{nessun successo}) - P(\text{1 successo})$:

$$1 - \binom{10}{0} p^0 q^{10} - \binom{10}{1} p^1 q^9 = 1 - \left(\frac{3}{4}\right)^{10} - 10 \cdot \frac{1}{4} \cdot \left(\frac{3}{4}\right)^{9}.$$

## Quesito 8

Si tratta di un classico problema di geometria elementare che consiste nell'impossibilità di costruire con riga e compasso un quadrato equivalente ad un cerchio; tale costruzione richiederebbe la costruzione del numero $\pi$, dimostrata impossibile (usando solo riga e compasso): Lindemann dimostra nel 1882 che $\pi$ è trascendente, quindi non costruibile.

L'espressione "quadratura del cerchio" è spesso citata per indicare un'impresa impossibile.

## Quesito 9

Indichiamo con $E$ il punto medio dell'ipotenusa del triangolo rettangolo $ABC$; la mediana $AE$ risulta uguale alla metà dell'ipotenusa. Se la retta $FE$ è perpendicolare in $E$ al piano del triangolo $ABC$, i tre triangoli $FEB$, $FEC$ ed $FEA$ (tutti rettangoli in $E$) sono congruenti poiché hanno i due cateti rispettivamente congruenti. Pertanto, per ogni punto $F$ della retta $FE$, le distanze $FA$, $FB$ ed $FC$ sono uguali.

Per dimostrare che la retta in questione è il luogo richiesto dobbiamo dimostrare che ogni punto equidistante da $A$, $B$ e $C$ si trova su tale retta. A tale scopo basta notare che il luogo dei punti equidistanti da $A$ e $B$ è il piano perpendicolare ad $AB$ nel suo punto medio, analogamente per $A$ e $C$ e per $B$ e $C$: i punti equidistanti da $A$, $B$ e $C$ appartengono contemporaneamente a questi tre piani, che hanno in comune proprio la retta perpendicolare al piano del triangolo $ABC$ nel punto medio $E$ dell'ipotenusa $BC$.

## Quesito 10

La risposta corretta è la D ($f$ è la III, $f'$ la II ed $f''$ la I). Infatti:

1. $f$ non può essere la I, poiché è sempre crescente, quindi $f'$ dovrebbe essere positiva o nulla: ciò non si verifica né per la II né per la III.
2. $f$ non può essere la II, perché essendo la concavità sempre verso l'alto, $f''$ dovrebbe essere positiva o nulla: ciò non si verifica né per la I né per la III.
3. $f$ è la III: avendo la concavità verso l'alto per $x > 0$ e verso il basso per $x < 0$, $f''$ è positiva per $x > 0$ e negativa per $x < 0$: ciò si verifica per la I, che è quindi $f''$; la III è decrescente tra l'ascissa del massimo e l'ascissa del minimo, quindi in tale intervallo $f'$ risulta negativa, come avviene per la II.
