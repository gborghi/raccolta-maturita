---
tipo: soluzione
prova_stem: 2006_sessione_ordinaria_2006_prova_65
pdf: Prova_Maturita_2006.pdf
source: text
title: Soluzioni — 2006_sessione_ordinaria_2006_prova_65
---

# Soluzioni — 2006_sessione_ordinaria_2006_prova_65

## Problema 1

Un filo metallico di lunghezza $\lambda$ viene utilizzato per delimitare il perimetro di un'aiuola rettangolare.

**a)** Sia il rettangolo di lati $x$ e $\frac{\lambda}{2} - x$. L'area è:

$$A(x) = x\!\left(\frac{\lambda}{2} - x\right), \quad x \in \left[0, \frac{\lambda}{2}\right]$$

Ponendo $A'(x) = \frac{\lambda}{2} - 2x = 0$ si ottiene $x = \frac{\lambda}{4}$, quindi l'aiuola di area massima è un **quadrato di lato $\frac{\lambda}{4}$**.

**b)** Si taglia il filo in una parte $x$ per il quadrato e una parte $\lambda - x$ per il cerchio. Le due aree sono:

$$A_q = \frac{x^2}{16}, \qquad A_c = \frac{(\lambda - x)^2}{4\pi}$$

La somma è:

$$S(x) = \frac{x^2}{16} + \frac{(\lambda - x)^2}{4\pi}, \quad x \in [0, \lambda]$$

$$S'(x) = \frac{x}{8} - \frac{\lambda - x}{2\pi} = 0 \implies x = \frac{4\lambda}{\pi + 4}$$

Poiché $S''(x) > 0$, si tratta di un minimo. La somma delle aree è **minima** quando la parte per il quadrato misura $\frac{4\lambda}{\pi + 4}$ e quella per il cerchio misura $\frac{\pi\lambda}{\pi + 4}$.

**c)** La somma delle aree è **massima** agli estremi $x = 0$ oppure $x = \lambda$. Si confrontano:

$$S(0) = \frac{\lambda^2}{4\pi}, \qquad S(\lambda) = \frac{\lambda^2}{16}$$

Poiché $\frac{1}{4\pi} > \frac{1}{16}$, il massimo si raggiunge con $x = 0$: tutto il filo viene destinato al cerchio.

**Aumento del 10% delle dimensioni del parallelepipedo:** se le dimensioni sono $a, b, c$, il nuovo volume è:

$$V' = (1{,}1a)(1{,}1b)(1{,}1c) = 1{,}1^3 \cdot abc = 1{,}331\,abc$$

Si ha bisogno di **33,1% di terreno in più**.

---

## Problema 2

Si considerino $f(x) = \ln x$ e $g(x) = ax^2$, con $a$ parametro reale e logaritmo naturale.

**1.** Discussione al variare di $a$ dell'equazione $\ln x = ax^2$.

Per $a \le 0$ il secondo membro è $\le 0$ per $x > 0$, e $\ln x$ può assumere qualsiasi valore reale: l'equazione ammette sempre soluzioni.

Per $a > 0$: i grafici di $f$ e $g$ sono **tangenti** quando il sistema

$$\begin{cases} \ln x = ax^2 \\ \dfrac{1}{x} = 2ax \end{cases}$$

ha soluzione. Dalla seconda equazione: $a = \dfrac{1}{2x^2}$. Sostituendo nella prima:

$$\ln x = \frac{x^2}{2x^2} = \frac{1}{2} \implies x = \sqrt{e}$$

Quindi $a = \dfrac{1}{2e}$. Per $0 < a < \dfrac{1}{2e}$ l'equazione ha due soluzioni; per $a = \dfrac{1}{2e}$ una sola (tangenza); per $a > \dfrac{1}{2e}$ nessuna.

**2.** Con $a = 1$, l'area delimitata da $f(x) = \ln x$, $g(x) = x^2$, $x = 1$, $x = 2$:

Per $x \in [1,2]$ si verifica che $x^2 \ge \ln x$, quindi:

$$A = \int_{1}^{2} (x^2 - \ln x)\,dx = \left[\frac{x^3}{3} - x\ln x + x\right]_{1}^{2}$$

$$= \left(\frac{8}{3} - 2\ln 2 + 2\right) - \left(\frac{1}{3} - 0 + 1\right) = \frac{10}{3} - 2\ln 2$$

**3.** Studio di $h(x) = \ln x - ax^2$ con $a > \dfrac{1}{2e}$ (es. $a = 1$).

Dominio: $(0, +\infty)$.

$$h'(x) = \frac{1}{x} - 2x = \frac{1 - 2x^2}{x}$$

$h'(x) = 0$ per $x = \dfrac{1}{\sqrt{2}}$; $h$ è crescente su $\left(0, \dfrac{1}{\sqrt{2}}\right)$ e decrescente su $\left(\dfrac{1}{\sqrt{2}}, +\infty\right)$.

Massimo: $h\!\left(\dfrac{1}{\sqrt{2}}\right) = -\dfrac{1}{2}\ln 2 - \dfrac{1}{2} < 0$.

Il massimo è negativo, quindi $h(x) < 0$ su tutto il dominio. Asintoto verticale in $x = 0^+$ ($h \to -\infty$) e $h \to -\infty$ per $x \to +\infty$.

*(grafico — vedi PDF p.65)*

---

## Quesito 1

Si considerino il rettangolo $ABCD$ e la parabola con asse parallelo ad $AD$, vertice nel punto medio di $AB$ e passante per $C$ e $D$. In una rotazione di mezzo giro attorno all'asse della parabola, il rettangolo genera il volume $V'$ e la regione tra parabola e retta $CD$ genera il volume $V''$. Determinare $V'/V''$.

Sia $x = ay^2$ l'equazione della parabola, con $C = (x_c, y_c)$:

$$V' = \pi \cdot OB^2 \cdot BC = \pi \cdot y_c^2 \cdot x_c = \pi \cdot \frac{x_c}{a} \cdot x_c = \frac{\pi}{a}\,x_c^2$$

$$V'' = \pi \int_{0}^{x_c} y^2\,dx = \pi \int_{0}^{x_c} \frac{x}{a}\,dx = \frac{\pi}{a}\left[\frac{x^2}{2}\right]_{0}^{x_c} = \frac{\pi}{2a}\,x_c^2$$

Quindi:

$$\frac{V'}{V''} = \frac{\dfrac{\pi}{a}\,x_c^2}{\dfrac{\pi}{2a}\,x_c^2} = 2$$

---

## Quesito 2

Il numero delle soluzioni di $\sin(2x)\cos x = 2$ in $[0, 2\pi]$ è:
[A] 0; [B] 2; [C] 3; [D] 5.

**Risposta: [A] 0.**

**Primo modo:** $|\sin(2x)| \le 1$ e $|\cos x| \le 1$, quindi il loro prodotto non può essere uguale a 2. L'equazione non ha soluzioni.

**Secondo modo:** riscrivendo come $\cos x = \dfrac{2}{\sin(2x)} = 2\csc(2x)$, si confrontano $y = \cos x$ e $y = 2\csc(2x)$ nello stesso piano. Dall'analisi dei grafici si deduce che le due funzioni non si intersecano in $[0, 2\pi]$.

La risposta corretta è **[A]**.

---

## Quesito 3

Il limite di $f(x) = x\sin\dfrac{1}{x}$ per $x \to 0$ è:
[A] non esiste; [B] è 0; [C] è un valore finito diverso da 0; [D] è $+\infty$.

**Risposta: [B] è 0.**

La funzione $\sin\dfrac{1}{x}$ è limitata: $-1 \le \sin\dfrac{1}{x} \le 1$. Per il teorema del confronto:

$$-|x| \le x\sin\frac{1}{x} \le |x|$$

Poiché $\lim_{x \to 0} |x| = 0$, per il teorema dei carabinieri:

$$\lim_{x \to 0} x\sin\frac{1}{x} = 0$$

---

## Quesito 4

Calcolare la derivata di $f(x) = \tan x$.

**Primo modo** (derivata di un quoziente):

$$D(\tan x) = D\!\left(\frac{\sin x}{\cos x}\right) = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = 1 + \tan^2 x$$

**Secondo modo** (definizione di derivata):

$$D(\tan x) = \lim_{h \to 0} \frac{\tan(x+h) - \tan x}{h} = \lim_{h \to 0} \frac{1}{h} \cdot \left(\frac{\tan x + \tan h}{1 - \tan x \tan h} - \tan x\right)$$

$$= \lim_{h \to 0} \frac{1}{h} \cdot \frac{\tan h + \tan^2 x \tan h}{1 - \tan x \tan h} = \lim_{h \to 0} \frac{\tan h}{h} \cdot \frac{1 + \tan^2 x}{1 + \tan x \tan h} = 1 \cdot \frac{1 + \tan^2 x}{1} = \frac{1}{\cos^2 x}$$

---

## Quesito 5

Calcolare l'ampiezza dell'angolo diedro tra due facce di un tetraedro regolare.

Sia $l$ la misura dello spigolo. $DF$ è la perpendicolare al lato $AC$ nella faccia $ACD$ (piede anche dell'altezza di $ABC$ rispetto ad $AC$): l'angolo diedro $\alpha$ è l'angolo $\widehat{DFB}$.

$$DF = \frac{l\sqrt{3}}{2}$$

Il baricentro $H$ della base $ABC$ soddisfa $FH = \dfrac{1}{3}BF = \dfrac{1}{3}DF$:

$$FH = \frac{1}{3} \cdot \frac{l\sqrt{3}}{2} = \frac{l\sqrt{3}}{6}$$

Nel triangolo $DFH$ rettangolo in $H$:

$$\cos\alpha = \frac{FH}{DF} = \frac{\dfrac{l\sqrt{3}}{6}}{\dfrac{l\sqrt{3}}{2}} = \frac{1}{3} \implies \alpha = \arccos\!\left(\frac{1}{3}\right) \approx 70{,}5288°$$

$$\boxed{\alpha \approx 70°32'}$$

---

## Quesito 6

Determinare il dominio di $f(x) = \sqrt[3]{x^2} = x^{2/3}$ e stabilire se è derivabile.

La funzione è definita su tutto $\mathbb{R}$.

$$f'(x) = \frac{2}{3}\,x^{-1/3} = \frac{2}{3\sqrt[3]{x}}$$

La derivata non esiste in $x = 0$. Poiché:

$$\lim_{x \to 0^\pm} \frac{2}{3\sqrt[3]{x}} = \pm\infty$$

in $x = 0$ la funzione presenta una **cuspide verso il basso**; $f$ non è derivabile in $x = 0$.

*(grafico — vedi PDF)*

---

## Quesito 7

Affermare che $\lim_{x \to +\infty} f(x) = +\infty$ significa che per ogni $M \in \mathbb{R}$, esiste $N \in \mathbb{R}$ tale che $x > N \implies f(x) > M$. È vero o falso?

La definizione corretta richiede che per ogni $M' > 0$ esista $N$ tale che per ogni $x > N$ risulti $f(x) > M'$.

- Se $M > 0$: l'affermazione è vera (con $M' = M$).
- Se $M = 0$: basta prendere $M' = 1$; la definizione è soddisfatta.
- Se $M < 0$: basta prendere $M' = -M > 0$; la definizione è soddisfatta.

**L'affermazione è vera** per qualsiasi valore reale di $M$.

*(interpretazione grafica — vedi PDF)*

---

## Quesito 8

Triangolo equilatero di lato $L$; ogni triangolo successivo ha i vertici nei punti medi dei lati del precedente. Calcolare $\lim_{n \to \infty} S_n$ (somma delle $n$ aree).

I lati sono $L, \dfrac{L}{2}, \dfrac{L}{4}, \ldots$; le aree sono in progressione geometrica con ragione $q = \dfrac{1}{4}$.

Area del primo triangolo:

$$A_1 = \frac{L^2\sqrt{3}}{4}$$

Somma delle $n$ aree: $S_n = A_1 \cdot \dfrac{1 - q^n}{1 - q}$. Per $n \to \infty$ (con $q = \frac{1}{4} < 1$):

$$\lim_{n \to \infty} S_n = \frac{A_1}{1 - q} = \frac{A_1}{1 - \frac{1}{4}} = \frac{4}{3}\,A_1 = \frac{4}{3} \cdot \frac{L^2\sqrt{3}}{4} = \frac{\sqrt{3}}{3}\,L^2$$

---

## Quesito 9

Si consideri l'uguaglianza $\ln(2x+1)^4 = 4\ln(2x+1)$. Vale per ogni $x$ reale?

**No.** La relazione corretta è:

$$\ln(2x+1)^4 = 4\ln|2x+1|$$

L'uguaglianza $\ln(2x+1)^4 = 4\ln(2x+1)$ vale solo se $2x + 1 > 0$, cioè per $x > -\dfrac{1}{2}$.

---

## Quesito 10

Cinque ragazzi (1–5) siedono su cinque sedie numerate (1–5) disposte attorno a un tavolo. La sedia "1" è fissa per il ragazzo "1". In quanti modi si possono sedere?

Poiché la sedia "1" è assegnata, i restanti quattro ragazzi (2, 3, 4, 5) si dispongono nelle quattro sedie numerate rimanenti. Il numero di permutazioni è:

$$4! = 24$$
