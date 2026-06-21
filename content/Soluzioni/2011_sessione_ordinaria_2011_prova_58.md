---
tipo: soluzione
prova_stem: 2011_sessione_ordinaria_2011_prova_58
pdf: Prova_Maturita_2011.pdf
source: text
title: Soluzioni — 2011_sessione_ordinaria_2011_prova_58
---

# Soluzioni — 2011_sessione_ordinaria_2011_prova_58

> Questa prova contiene due varianti: **Scuole Italiane all'Estero** (Problemi 1A e 2A) e **Liceo della Comunicazione** (Problemi 1B e 2B). I quesiti sono del Liceo della Comunicazione (8 quesiti).

---

## Problema 1

*(Scuole Italiane all'Estero — Parabole nel quadrato OABC, con $A=(1;0)$, $B=(1;1)$, $C=(0;1)$.)*

**Punto 1.** Sia $P=(1,t)$ con $t\in[0,1]$ un punto del lato $AB$ (la retta $x=1$ da $A=(1,0)$ a $B=(1,1)$). Il lato $BC$ è la retta $y=1$. Una parabola con asse parallelo all'asse $y$, passante per $O=(0,0)$, ha equazione $y=ax^2+bx$ (con $c=0$). La tangenza al lato $BC$, cioè alla retta $y=1$, impone che il discriminante di $ax^2+bx-1=0$ sia zero:

$$b^2 + 4a = 0 \implies a = -\frac{b^2}{4}$$

La parabola è quindi $y = -\dfrac{b^2}{4}x^2 + bx$. Il vertice si trova in

$$x_V = \frac{2}{b}, \qquad y_V = 1$$

Imponendo il passaggio per $P=(1,t)$:

$$t = -\frac{b^2}{4} + b \implies b^2 - 4b + 4t = 0 \implies b = 2 \pm 2\sqrt{1-t}$$

Al variare di $t\in[0,1]$, l'ascissa del vertice è $x_V = \dfrac{2}{b} = \dfrac{1}{1\pm\sqrt{1-t}} \in \left[\tfrac{1}{2},1\right]$.

Il luogo dei possibili vertici è il segmento $\left\{(x,1) : x\in\left[\tfrac{1}{2},1\right]\right\}$ sulla retta $y=1$ (cioè sul lato $BC$).

---

**Punto 2.** La parabola $\Gamma_1$ è tale che il segmento parabolico delimitato dalla corda $OP$ abbia area $= \frac{1}{2}$ (metà dell'area del quadrato, che è 1).

La retta $OP$ ha equazione $y=tx$. L'area tra la parabola e la corda è:

$$\text{Area} = \int_0^1\left[\left(-\frac{b^2}{4}x^2+bx\right)-tx\right]dx = \int_0^1\left(-\frac{b^2}{4}x^2+(b-t)x\right)dx$$

$$= \left[-\frac{b^2}{12}x^3+\frac{b-t}{2}x^2\right]_0^1 = -\frac{b^2}{12}+\frac{b-t}{2}$$

Dalla condizione di passaggio per $P$: $t = -\dfrac{b^2}{4}+b$, quindi $b-t = \dfrac{b^2}{4}$. Sostituendo:

$$\text{Area} = -\frac{b^2}{12}+\frac{b^2}{8} = b^2\!\left(\frac{-2+3}{24}\right) = \frac{b^2}{24}$$

Ponendo $\dfrac{b^2}{24}=\dfrac{1}{2}$:

$$b^2 = 12 \implies b = 2\sqrt{3}, \quad a = -\frac{12}{4} = -3$$

L'equazione di $\Gamma_1$ è:

$$\boxed{y = -3x^2 + 2\sqrt{3}\,x}$$

---

**Punto 3.** La parabola $\Gamma_2$, simmetrica di $\Gamma_1$ rispetto all'asse $y$ ($x\to -x$), ha equazione:

$$\Gamma_2:\quad y = -3x^2 - 2\sqrt{3}\,x$$

Il vertice di $\Gamma_1$ è $V_1=\!\left(\dfrac{\sqrt{3}}{3},\,1\right)$ e di $\Gamma_2$ è $V_2=\!\left(-\dfrac{\sqrt{3}}{3},\,1\right)$. La retta tangente comune nei vertici è $y=1$.

Le due parabole si intersecano in $O=(0,0)$ (unico punto in comune per $x$ vicino a 0):
$$-3x^2+2\sqrt{3}\,x = -3x^2-2\sqrt{3}\,x \implies 4\sqrt{3}\,x=0 \implies x=0$$

L'area della regione delimitata dalle due parabole e dalla retta $y=1$: per simmetria rispetto all'asse $y$, è il doppio dell'area tra $\Gamma_1$ e $y=1$ per $x\in\left[0,\tfrac{\sqrt{3}}{3}\right]$:

$$\text{Area} = 2\int_0^{\sqrt{3}/3}\!\left[1-\left(-3x^2+2\sqrt{3}\,x\right)\right]dx = 2\int_0^{\sqrt{3}/3}\!\left(1+3x^2-2\sqrt{3}\,x\right)dx$$

$$= 2\left[x+x^3-\sqrt{3}\,x^2\right]_0^{\sqrt{3}/3}$$

In $x=\dfrac{\sqrt{3}}{3}$: $x^3=\dfrac{\sqrt{3}}{9}$, $\sqrt{3}\,x^2=\sqrt{3}\cdot\dfrac{1}{3}=\dfrac{\sqrt{3}}{3}$:

$$= 2\left(\frac{\sqrt{3}}{3}+\frac{\sqrt{3}}{9}-\frac{\sqrt{3}}{3}\right) = 2\cdot\frac{\sqrt{3}}{9} = \frac{2\sqrt{3}}{9}$$

---

**Punto 4.** La retta $y=k$ ($k\in[0,1]$) taglia $\Gamma_1$ in $-3x^2+2\sqrt{3}\,x-k=0$, cioè $x=\dfrac{\sqrt{3}\pm\sqrt{3(1-k)}}{3}$. Il punto $Q$ più vicino all'asse $y$ ha ascissa:

$$x_Q = \frac{\sqrt{3}-\sqrt{3(1-k)}}{3} = \frac{\sqrt{3}\left(1-\sqrt{1-k}\right)}{3}$$

Per $\Gamma_2$, per simmetria: $x_R = -x_Q$. Il vertice $C=(0,1)$.

Il triangolo $QCR$ ha base $|QR|=2x_Q=\dfrac{2\sqrt{3}(1-\sqrt{1-k})}{3}$ e altezza $h=1-k$:

$$A(k) = \frac{1}{2}\cdot\frac{2\sqrt{3}(1-\sqrt{1-k})}{3}\cdot(1-k) = \frac{\sqrt{3}}{3}(1-\sqrt{1-k})(1-k)$$

Poniamo $u=\sqrt{1-k}\in[0,1]$, cosicché $1-k=u^2$ e $1-\sqrt{1-k}=1-u$:

$$A(u) = \frac{\sqrt{3}}{3}\,(1-u)\,u^2$$

$$A'(u) = \frac{\sqrt{3}}{3}(2u-3u^2) = \frac{\sqrt{3}}{3}\,u(2-3u) = 0 \implies u = \frac{2}{3}$$

Quindi $1-k=\dfrac{4}{9}$, ovvero:

$$\boxed{k = \frac{5}{9}}$$

---

## Problema 1

*(Scuole Italiane all'Estero — Circonferenza di centro $O$ e raggio 4, tangente esternamente nel punto $A$ ad una circonferenza di raggio $x<4$; le tangenti comuni non passanti per $A$ si incontrano in $B$.)*

**Punto 1.** Il centro della seconda circonferenza sia $O'$; la tangenza esterna implica $OO'=4+x$. Il punto $B$ è il centro di omotetia esterno delle due circonferenze, quindi $\dfrac{OB}{O'B}=\dfrac{4}{x}$ e $O,O',B$ sono allineati. Poiché $O'B = OB - OO' = OB-(4+x)$... in realtà $B$ è esterno e $O'$ è tra $O$ e $B$: $OB = OO' + O'B = (4+x)+O'B$ e $\dfrac{OB}{O'B}=\dfrac{4}{x}$:

$$O'B = \frac{x}{4}OB, \quad OB = (4+x)+\frac{x}{4}OB \implies OB\left(1-\frac{x}{4}\right) = 4+x \implies OB\cdot\frac{4-x}{4} = 4+x$$

$$f(x) = OB = \frac{4(4+x)}{4-x} = \frac{4x+16}{4-x}$$

*(grafico — vedi PDF p.59)*

---

**Punto 2.** Riscriviamo $f(x)=\dfrac{4x+16}{4-x}$:

$$f(x) = -4 + \frac{32}{4-x}$$

Gli asintoti sono: verticale $x=4$, orizzontale $y=-4$. Il centro di simmetria dell'iperbole è l'intersezione degli asintoti: $\mathbf{S=(4,\,-4)}$.

Per dimostrare che la tangente in ogni punto $P=(x_0,f(x_0))$ di $\Gamma$ incontra gli asintoti in due punti equidistanti da $P$: si tratta di una proprietà generale delle iperbole equilatere — la tangente in $P$ e i due asintoti formano sempre un triangolo in cui $P$ è il punto medio del segmento di tangente compreso tra i due asintoti.

Verifica esplicita: $f'(x)=\dfrac{32}{(4-x)^2}$. La tangente in $P=(x_0,y_0)$ è $y-y_0=f'(x_0)(x-x_0)$. L'intersezione con $x=4$: $y_1 = y_0+f'(x_0)(4-x_0)$; con $y=-4$: $x_1 = x_0+\dfrac{-4-y_0}{f'(x_0)}$. La verifica dell'equidistanza segue dall'algebra (omessa per brevità, nota per le iperbole equilatere).

---

**Punto 3.** L'area della parte finita tra $\Gamma$ e gli assi coordinati.

$f(x)=0$ per $x=-4$ (intersezione con l'asse $x$); $f(0)=4$ (intersezione con l'asse $y$). Il ramo sinistro dell'iperbole, per $x\in[-4,0]$, è positivo:

$$A = \int_{-4}^{0}\frac{4x+16}{4-x}\,dx = \int_{-4}^{0}\!\left(-4+\frac{32}{4-x}\right)dx$$

$$= \left[-4x - 32\ln|4-x|\right]_{-4}^{0} = \bigl(0-32\ln 4\bigr)-\bigl(16-32\ln 8\bigr)$$

$$= -32\ln 4 - 16 + 32\ln 8 = 32\ln\!\frac{8}{4} - 16 = 32\ln 2 - 16$$

---

**Punto 4.** $g(x)=f(|x|)=\dfrac{4|x|+16}{4-|x|}$.

Il dominio è $|x|<4$, cioè $x\in(-4,4)$. La funzione è pari (simmetrica rispetto all'asse $y$), con minimo in $x=0$: $g(0)=4$; $g(x)\to+\infty$ per $|x|\to 4^-$.

*(grafico — vedi PDF p.61)*

Numero di radici di $g(x)=k$ al variare di $k$:
- $k < 4$: **nessuna radice** (la funzione è sempre $\geq 4$)
- $k = 4$: **1 radice** ($x=0$)
- $k > 4$: **2 radici** (una per $x>0$, una per $x<0$, per simmetria)

---

## Problema 2

*(Liceo della Comunicazione — Funzione $f(x)=(1-x^2)e^{-x}$ su $\mathbb{R}$.)*

**Punto 1.** Intersezioni con gli assi:
- Asse $y$: $f(0)=(1-0)\cdot 1 = 1$, quindi $A=(0,1)$.
- Asse $x$: $(1-x^2)e^{-x}=0 \Rightarrow 1-x^2=0 \Rightarrow x=\pm 1$, quindi $B=(-1,0)$ e $C=(1,0)$.

---

**Punto 2.** Studio di $f(x)=(1-x^2)e^{-x}$:

$$f'(x) = -2x\,e^{-x} + (1-x^2)(-e^{-x}) = e^{-x}(-2x-1+x^2) = e^{-x}(x^2-2x-1)$$

Poiché $e^{-x}>0$ per ogni $x$, il segno di $f'$ coincide con quello di $x^2-2x-1$, che si annulla per $x=1\pm\sqrt{2}$:

- $f'(x)>0$ per $x<1-\sqrt{2}$ o $x>1+\sqrt{2}$ (funzione crescente)
- $f'(x)<0$ per $1-\sqrt{2}<x<1+\sqrt{2}$ (funzione decrescente)

Punto di massimo locale: $x_{\max}=1-\sqrt{2}\approx -0.414$.

Punto di minimo locale: $x_{\min}=1+\sqrt{2}\approx 2.414$.

Limiti agli estremi: $\lim_{x\to+\infty}f(x)=0^-$ (asintoto orizzontale $y=0$ da sinistra); $\lim_{x\to-\infty}f(x)=-\infty$.

*(grafico — vedi PDF p.66)*

---

**Punto 3.** La funzione $g(x)=(1+2x+x^2)e^{-x}=(1+x)^2 e^{-x}$ è una primitiva di $f$.

Verifica calcolando $g'$:

$$g'(x) = 2(1+x)e^{-x} + (1+x)^2(-e^{-x}) = e^{-x}\bigl[2(1+x)-(1+x)^2\bigr]$$

$$= e^{-x}(1+x)\bigl[2-(1+x)\bigr] = e^{-x}(1+x)(1-x) = e^{-x}(1-x^2) = f(x) \quad\checkmark$$

---

**Punto 4.** Area tra $\Gamma$ e l'asse $x$ su $[-1,2]$:

$f\geq 0$ su $[-1,1]$ e $f\leq 0$ su $[1,2]$. Usando la primitiva $g(x)=(1+x)^2 e^{-x}$:

$$\text{Area} = \int_{-1}^{1}f(x)\,dx + \int_{1}^{2}|f(x)|\,dx = \bigl[g(x)\bigr]_{-1}^{1} - \bigl[g(x)\bigr]_{1}^{2}$$

$$= \bigl(g(1)-g(-1)\bigr)-\bigl(g(2)-g(1)\bigr) = 2g(1)-g(-1)-g(2)$$

$g(1)=4e^{-1}$, $g(-1)=(1-1)^2 e^1=0$, $g(2)=9e^{-2}$:

$$\text{Area} = 2\cdot\frac{4}{e} - 0 - \frac{9}{e^2} = \frac{8}{e} - \frac{9}{e^2}$$

Calcolo del limite:

$$\lim_{\alpha\to+\infty}\int_1^{\alpha}(1-x^2)e^{-x}\,dx = \lim_{\alpha\to+\infty}\bigl[g(x)\bigr]_1^{\alpha} = \lim_{\alpha\to+\infty}\!\left[(1+\alpha)^2 e^{-\alpha} - 4e^{-1}\right] = 0 - \frac{4}{e} = -\frac{4}{e}$$

Significato geometrico: $-\frac{4}{e}$ è (col segno) l'integrale di $f$ su $[1,+\infty)$; il valore assoluto $\frac{4}{e}$ rappresenta l'area della regione (infinita) compresa tra $\Gamma$ e l'asse $x$ per $x\geq 1$, dove la funzione è negativa e l'area è convergente.

---

## Problema 2

*(Liceo della Comunicazione — Punti $A(2;1)$, $B(-2;1)$, $C(2;3)$, $D(2;5)$, $E(6;5)$. Fascio di curve $y=\dfrac{x^2+2x+a}{2x-4}$.)*

**Punto a.** Il quadrilatero convesso $ABDE$ ha diagonali $AD$ e $BE$:
- Punto medio di $AD$: $M_{AD}=\!\left(\dfrac{2+2}{2},\dfrac{1+5}{2}\right)=(2,3)=C$. ✓
- Punto medio di $BE$: $M_{BE}=\!\left(\dfrac{-2+6}{2},\dfrac{1+5}{2}\right)=(2,3)=C$. ✓

Le diagonali si bisecano in $C$, dunque $ABDE$ è un **parallelogramma**. Area:

$$|AB|=4,\quad \text{altezza tra }y=1\text{ e }y=5\text{ è }4 \implies \text{Area} = 4\times 4 = 16$$

---

**Punto b.** Divisione polinomiale: $x^2+2x+a = (x-2)(x+4)+(8+a)$, quindi:

$$y = \frac{x^2+2x+a}{2(x-2)} = \frac{x+4}{2} + \frac{8+a}{2(x-2)}$$

- Asintoto verticale: $x=2$, che è la retta $AD$. ✓
- Asintoto obliquo: $y=\dfrac{x+4}{2}=\dfrac{1}{2}x+2$. La retta $BE$ passa per $B(-2,1)$ e $E(6,5)$: pendenza $\dfrac{4}{8}=\dfrac{1}{2}$, equazione $y=\dfrac{1}{2}x+2$. ✓
- Centro di simmetria: intersezione degli asintoti, $x=2$ e $y=\dfrac{1}{2}(2)+2=3$: punto $C=(2,3)$. ✓

---

**Punto c.** La curva $\lambda$ passa per $P(0,1)$:

$$1 = \frac{0+0+a}{2(0-2)} = \frac{a}{-4} \implies a = -4$$

La curva è:

$$\lambda:\quad y = \frac{x^2+2x-4}{2(x-2)} = \frac{x+4}{2}+\frac{2}{x-2}$$

Verifica tangenza della retta $AB$ ($y=1$) a $\lambda$:

$$\frac{x^2+2x-4}{2(x-2)}=1 \implies x^2+2x-4=2x-4 \implies x^2=0 \implies x=0 \text{ (radice doppia)} \checkmark$$

La retta $y=1$ è tangente a $\lambda$ nel punto $(0,1)$.

Verifica tangenza della retta $DE$ ($y=5$) a $\lambda$:

$$\frac{x^2+2x-4}{2(x-2)}=5 \implies x^2+2x-4=10x-20 \implies x^2-8x+16=0 \implies (x-4)^2=0 \checkmark$$

La retta $y=5$ è tangente a $\lambda$ nel punto $(4,5)$.

*(grafico — vedi PDF p.69)*

---

**Punto d.** Area della regione finita delimitata da $\lambda$, dalla retta $BE$ ($y=\frac{1}{2}x+2$), dalla retta $x=-2$ e dall'asse $y$ ($x=0$).

La differenza $\lambda(x)-\left(\dfrac{x}{2}+2\right)$ per $x\in[-2,0]$:

$$\lambda(x) - \left(\frac{x}{2}+2\right) = \frac{x+4}{2}+\frac{2}{x-2}-\frac{x}{2}-2 = \frac{2}{x-2}$$

Per $x\in[-2,0]$: $x-2\in[-4,-2]<0$, quindi $\frac{2}{x-2}<0$: la retta $BE$ è sopra $\lambda$.

$$\text{Area} = \int_{-2}^{0}\left|\frac{2}{x-2}\right|dx = \int_{-2}^{0}\frac{2}{2-x}\,dx = \left[-2\ln(2-x)\right]_{-2}^{0}$$

$$= -2\ln 2-(-2\ln 4) = -2\ln 2+4\ln 2 = 2\ln 2$$

---

## Quesito 1

Si trovi l'area della regione delimitata dalla curva $y=\cos x$ e dall'asse $x$ da $x=1$ a $x=2$ radianti.

La funzione $\cos x$ si annulla in $x=\frac{\pi}{2}\approx 1.571\in[1,2]$, ed è positiva su $[1,\frac{\pi}{2}]$ e negativa su $[\frac{\pi}{2},2]$:

$$\text{Area} = \int_1^{\pi/2}\cos x\,dx + \left|\int_{\pi/2}^{2}\cos x\,dx\right| = \bigl[\sin x\bigr]_1^{\pi/2} + \left|\bigl[\sin x\bigr]_{\pi/2}^{2}\right|$$

$$= \left(\sin\frac{\pi}{2}-\sin 1\right)+\left|\sin 2-\sin\frac{\pi}{2}\right| = (1-\sin 1)+(1-\sin 2)$$

$$= 2-\sin 1-\sin 2 \approx 2 - 0.841 - 0.909 \approx 0.25$$

---

## Quesito 2

Si trovi il punto della curva $y=\sqrt{x}$ più vicino al punto di coordinate $(4;\,0)$.

Il quadrato della distanza di un generico punto $\left(x,\sqrt{x}\right)$ della curva dal punto $(4,0)$ è:

$$d^2(x) = (x-4)^2 + x = x^2 - 7x + 16$$

Minimizzando:

$$\frac{d\,(d^2)}{dx} = 2x - 7 = 0 \implies x = \frac{7}{2}$$

Il punto richiesto ha coordinate $\left(\dfrac{7}{2},\,\dfrac{\sqrt{14}}{2}\right)$.

---

## Quesito 3

Si calcoli $\displaystyle\lim_{x\to a}\frac{\tan x - \tan a}{x-a}$.

Il limite è, per definizione, la derivata di $\tan x$ in $x=a$:

$$\lim_{x\to a}\frac{\tan x - \tan a}{x-a} = \frac{d}{dx}(\tan x)\bigg|_{x=a} = \frac{1}{\cos^2 a}$$

(purché $a \neq \dfrac{\pi}{2}+k\pi$, $k\in\mathbb{Z}$).

In alternativa, con la regola di de L'Hôpital (forma $\frac{0}{0}$, con numeratore e denominatore continui e derivabili in un intorno di $a$ e derivata del denominatore non nulla):

$$\lim_{x\to a}\frac{\tan x - \tan a}{x-a} = \lim_{x\to a}\frac{1/\cos^2 x}{1} = \frac{1}{\cos^2 a}$$

---

## Quesito 4

Il numero delle combinazioni di $n$ oggetti a 4 a 4 è uguale al numero delle combinazioni degli stessi oggetti a 3 a 3. Si trovi $n$.

Bisogna risolvere $\dbinom{n}{4}=\dbinom{n}{3}$ con $n\geq 4$. Poiché $\dbinom{n}{k}=\dbinom{n}{n-k}$, l'uguaglianza implica $n-4=3$:

$$\boxed{n = 7}$$

---

## Quesito 5

Questione di Galilei (personaggio Salviati): «i numeri tutti, comprendendo i quadrati e i non quadrati, esser più che i quadrati soli?»

Si tratta di un classico esempio di insiemi infiniti **equipotenti**. La corrispondenza $n\mapsto n^2$ è una biiezione tra $\mathbb{N}$ e l'insieme dei quadrati perfetti $\{0,1,4,9,16,\ldots\}$. I due insiemi hanno la stessa cardinalità $\aleph_0$: sono entrambi **numerabili**.

Paradossalmente, sebbene i quadrati perfetti siano un sottoinsieme proprio di $\mathbb{N}$, i due insiemi sono "ugualmente numerosi" nel senso della teoria degli insiemi infiniti. Questo è proprio ciò che distingue gli insiemi infiniti da quelli finiti: un insieme è **infinito** se e solo se può essere messo in corrispondenza biunivoca con un suo sottoinsieme proprio.

La risposta corretta all'interrogativo di Salviati è dunque: **no**, i numeri naturali non sono "di più" dei quadrati perfetti — i due insiemi sono equipotenti.

---

## Quesito 6

Di tutti i coni inscritti in una sfera di raggio $R=10$ cm, trovare quello di superficie laterale massima.

Sia $x$ l'altezza del cono ($0<x<2R$). Per la geometria del cono inscritto nella sfera (centro $O$, il triangolo assiale è un triangolo rettangolo inscrivibile nella sfera), il raggio della base e l'apotema sono:

$$r^2 = x(2R-x), \qquad l = \sqrt{2Rx}$$

(si applica il teorema di Euclide al triangolo rettangolo sezionale). La superficie laterale è:

$$S = \pi r l = \pi\sqrt{x(2R-x)}\cdot\sqrt{2Rx} = \pi\sqrt{2Rx^2(2R-x)}$$

$S$ è massima se è massimo $h(x)=x^2(2R-x)=2Rx^2-x^3$:

$$h'(x) = 4Rx - 3x^2 = x(4R-3x) = 0 \implies x = \frac{4R}{3}$$

Per $R=10$:

$$\boxed{x = \frac{40}{3} \text{ cm}}$$

---

## Quesito 7

Un test di 10 domande con 4 alternative ciascuna: probabilità di almeno 2 risposte corrette rispondendo a caso.

Distribuzione binomiale con $n=10$, $p=\dfrac{1}{4}$, $q=\dfrac{3}{4}$:

$$P(\text{almeno 2}) = 1 - P(0) - P(1)$$

$$P(0) = \binom{10}{0}\left(\frac{1}{4}\right)^0\!\left(\frac{3}{4}\right)^{10} = \left(\frac{3}{4}\right)^{10}$$

$$P(1) = \binom{10}{1}\left(\frac{1}{4}\right)^1\!\left(\frac{3}{4}\right)^{9} = \frac{10}{4}\left(\frac{3}{4}\right)^{9}$$

$$P(\text{almeno 2}) = 1 - \left(\frac{3}{4}\right)^{10} - \frac{10}{4}\left(\frac{3}{4}\right)^{9} \approx 0.756 \approx 76\%$$

---

## Quesito 8

In che cosa consiste il problema della quadratura del cerchio? E perché è così spesso citato?

Il problema chiede di costruire, con sola riga e compasso, un quadrato di area uguale a quella di un cerchio dato. La soluzione richiederebbe di costruire geometricamente $\sqrt{\pi}$. Ferdinand von Lindemann dimostrò nel **1882** che $\pi$ è un numero **trascendente** (non soddisfa alcuna equazione algebrica a coefficienti interi), e dunque non è costruibile con riga e compasso.

Il problema è quindi **impossibile**. L'espressione "quadratura del cerchio" è entrata nel linguaggio comune per indicare un'impresa impossibile o irrealizzabile.
