---
tipo: soluzione
prova_stem: 2010_liceo_della_comunicazione_2010_sessione_ordinaria_questionario_86
pdf: Prova_Maturita_2010.pdf
source: text
title: >-
  Soluzioni —
  2010_liceo_della_comunicazione_2010_sessione_ordinaria_questionario_86
---

# Soluzioni — 2010_liceo_della_comunicazione_2010_sessione_ordinaria_questionario_86

## Quesito 1

Siccome la derivata annulla le costanti e abbassa di uno l'esponente delle potenze, si avrà:

$$p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$

$$p'(x) = n a_n x^{n-1} + \cdots$$

$$p^{(n)}(x) = n(n-1)(n-2)\cdots(2)(1)\,a_n = n!\,a_n$$

## Quesito 2

Siccome $PB$ è perpendicolare al piano di $ABC$, è perpendicolare a qualsiasi retta passante per $B$ appartenente al piano, quindi $PB$ è perpendicolare ad $AB$ e a $CB$: i triangoli $PAB$ e $PBC$ sono quindi rettangoli in $B$.

Siccome dal piede della perpendicolare $B$ al piano si conduce la perpendicolare $BA$ alla retta $AC$ dello stesso piano, quest'ultima risulta perpendicolare al piano individuato da $PB$ e $AB$ (teorema delle tre perpendicolari): quindi $CA$ è perpendicolare alla retta $PA$ e pertanto $CAP$ è rettangolo in $A$.

Si può alternativamente utilizzare il teorema di Pitagora per mostrare che $CAP$ è rettangolo in $A$.

Dal triangolo $PAB$:

$$PA^2 = PB^2 + AB^2$$

Dal triangolo $PBC$:

$$PC^2 = PB^2 + BC^2$$

Ricavando $PB^2$ dalla prima relazione e sostituendo nella seconda si ottiene:

$$PC^2 = (PA^2 - AB^2) + BC^2 = PA^2 + (BC^2 - AB^2)$$

dove nell'ultima uguaglianza si è applicato il teorema di Pitagora al triangolo $ABC$ (rettangolo in $B$: $AC^2 = AB^2 + BC^2$, quindi $BC^2 - AB^2 = AC^2 - 2AB^2$). In modo diretto, sommando le due relazioni:

$$PC^2 = PA^2 + AC^2$$

il che dimostra che il triangolo $PAC$ è rettangolo in $A$.

## Quesito 3

La pendenza della generica retta tangente al grafico di $f$ in $(x, f(x))$ è pari a $f'(x)$; ne segue che occorre cercare $x$ tale che:

$$f'(x) = e^x = \frac{1}{3}$$

da cui:

$$x = \ln\frac{1}{3} = -\ln 3$$

La tangente con pendenza $\frac{1}{3}$ tocca la curva nel punto di ascissa $x = -\ln 3$.

## Quesito 4

$$\lim_{x \to 0} \frac{\sin\!\left(\tfrac{x}{4}\right)}{x} = \lim_{x \to 0} \frac{1}{4} \cdot \frac{\sin\!\left(\tfrac{x}{4}\right)}{\tfrac{x}{4}} = \frac{1}{4}$$

## Quesito 5

L'apotema del cono è $80\ \text{cm} = 8\ \text{dm}$. Indichiamo con $h$ l'altezza del cono e con $r$ il raggio di base del cono. Si ha:

$$r^2 + h^2 = 64$$

Il volume del cono è:

$$V(h) = \frac{\pi}{3} r^2 h = \frac{\pi}{3}(64 - h^2)\,h$$

Cerchiamo il massimo di $V$.

$$V'(h) = \frac{\pi}{3}(64 - 3h^2) = 0 \implies h^2 = \frac{64}{3} \implies h = \frac{8}{\sqrt{3}}$$

Essendo la derivata positiva prima di questo valore e negativa dopo, si ha che esso è punto di massimo. Risulta:

$$V = \frac{\pi}{3}\cdot\frac{128}{3}\cdot\frac{8}{\sqrt{3}} = \frac{1024\pi}{9\sqrt{3}} \approx 206{,}370\ \text{dm}^3$$

che è la capacità massima.

## Quesito 6

Il dominio della funzione coseno è tutto $\mathbb{R}$. Il dominio di $f(x) = \dfrac{1}{\cos x}$ si ottiene da:

$$\cos x \neq 0$$

da cui:

$$x \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$$

ossia:

$$-\frac{\pi}{2} + k\pi < x < \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$$

## Quesito 7

Si ha $f(4) = 0$ ed essendo un polinomio continuo si ha anche che il limite sinistro in $4$ vale $0$. Controlliamo il limite destro. La funzione è continua se e solo se anche questo limite vale $0$. Dobbiamo quindi porre:

$$\lim_{x \to 4^+} f(x) = \frac{1}{8}\cdot 16 + k\cdot 4 + 9 = 2 + 4k + 9 = 0$$

$$\implies 4k = -11 \implies k = -\frac{9}{16}$$

## Quesito 8

Si tratta di verificare che, se $n > 3$:

$$\binom{n}{1} + \binom{n}{2} = \binom{n}{3}$$

Equivalente a:

$$\frac{n!}{1!\,(n-1)!} + \frac{n!}{2!\,(n-2)!} = \frac{n!}{3!\,(n-3)!}$$

$$n + \frac{n(n-1)}{2} = \frac{n(n-1)(n-2)}{6}$$

Riducendo al minimo comune multiplo si arriva all'equazione:

$$2n^2 - 9n - 14 = 0$$

che ha le soluzioni $n = 2$ ed $n = 7$, di cui è accettabile solo $n = 7$.

## Quesito 9

**1)** Per il teorema dei seni:

$$\frac{\sin\alpha}{3} = \frac{\sin 45°}{2}$$

da cui:

$$\sin\alpha = \frac{3\sin 45°}{2} = \frac{3\,\tfrac{\sqrt{2}}{2}}{2} = \frac{3\sqrt{2}}{4} > 1$$

impossibile.

**2)** Sempre per il teorema dei seni:

$$\frac{\sin\alpha}{3} = \frac{\sin 30°}{2}$$

da cui:

$$\sin\alpha = \frac{3\sin 30°}{2} = \frac{3 \cdot \tfrac{1}{2}}{2} = \frac{3}{4}$$

Quindi $\alpha_1 \approx 48{,}59°$ e $\alpha_2 = 180° - \alpha_1 \approx 131{,}41°$, entrambi accettabili.

## Quesito 10

Per la ricorrenza della festa della mamma, la sig.ra Luisa organizza una cena a casa sua, con le sue amiche che hanno almeno una figlia femmina. La sig.ra Anna è una delle invitate e perciò ha almeno una figlia femmina. Durante la cena, la sig.ra Anna dichiara di avere esattamente due figli. Si chiede: qual è la probabilità che anche l'altro figlio della sig.ra Anna sia femmina?

Si tratta di trovare la probabilità che le due figlie di Anna siano femmine sapendo che almeno una è femmina. I casi possibili sono in generale (nell'ordine primo e secondo figlio):

$$\text{MF},\quad \text{MM},\quad \text{FM},\quad \text{FF}$$

Se almeno un figlio è femmina i casi possibili sono $3$ (si esclude $\text{MM}$) ed i casi favorevoli $1$ ($\text{FF}$). Quindi la probabilità richiesta è $\dfrac{1}{3}$.

Si può utilizzare anche la formula di Bayes considerando gli eventi:

- $A =$ "almeno un figlio è femmina"
- $B =$ "il secondo figlio è femmina"

La probabilità richiesta è data dalla probabilità condizionata:

$$p(B \mid A) = \frac{p(B \cap A)}{p(A)} = \frac{p(\text{2 Femmine})}{p(\text{uno o due femmine})} = \frac{\dfrac{1}{4}}{\dfrac{3}{4}} = \frac{1}{3}$$
