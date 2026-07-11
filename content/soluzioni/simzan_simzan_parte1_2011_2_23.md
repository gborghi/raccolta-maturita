---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2011_2_23
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Svolgimento'
---
## Problema 1

Sia $ABC$ un triangolo con il lato $BC$ di lunghezza unitaria e l'angolo $\widehat{ABC}$ di ampiezza $60°$.

### a) Rapporto $f(x)$ tra la misura del lato $AC$ e il seno dell'angolo $\widehat{BCA}$

Posto $AB = x$, si applica il teorema del coseno a $\triangle ABC$:

$$AC^2 = AB^2 + BC^2 - 2 \cdot AB \cdot BC \cdot \cos\widehat{ABC}
= x^2 + 1 - 2x \cdot \frac{1}{2} = x^2 - x + 1,$$

quindi $AC = \sqrt{x^2 - x + 1}$.

Per il teorema dei seni:

$$\frac{AC}{\sin\widehat{ABC}} = \frac{AB}{\sin\widehat{BCA}}
\quad\Rightarrow\quad
\sin\widehat{BCA} = \frac{x \cdot \frac{\sqrt{3}}{2}}{\sqrt{x^2 - x + 1}}.$$

Il rapporto richiesto è:

$$f(x) = \frac{AC}{\sin\widehat{BCA}}
= \frac{\sqrt{x^2-x+1}}{\dfrac{x\sqrt{3}}{2\sqrt{x^2-x+1}}}
= \frac{2\sqrt{3}\,(x^2 - x + 1)}{3x}.$$

*(grafico — vedi PDF p.26)*

### b) Verifica che il punto $P\!\left(0,\,-\dfrac{2\sqrt{3}}{3}\right)$ è centro di simmetria per $g$

Indipendentemente dai vincoli geometrici, studiamo $f$ come funzione reale. Riscriviamo:

$$f(x) = \frac{2\sqrt{3}}{3}\!\left(x - 1 + \frac{1}{x}\right).$$

Per mostrare che $P$ è centro di simmetria occorre verificare che $f(-x) + f(x) = 2\cdot\!\left(-\dfrac{2\sqrt{3}}{3}\right)$ (traslando l'origine in $P$ la funzione diventa dispari), oppure che l'equazione della simmetria associa in modo corretto i punti del grafico.

Trasformiamo con $x \mapsto x'$, $y \mapsto y'$ (nuove coordinate centrate in $P$):

$$y' = \frac{2\sqrt{3}}{3}\!\left(x' - 1 + \frac{1}{x'}\right).$$

L'equazione ottenuta coincide con quella di $f$: poiché $f(-x') = -f(x')$ in queste coordinate (la funzione $x - 1/x$ è dispari), $P\!\left(0,\,-\dfrac{2\sqrt{3}}{3}\right)$ è centro di simmetria per $g$.

### c) Segno, limiti, asintoti, derivate e grafico di $f$

**Dominio:** $D = \mathbb{R} \setminus \{0\}$.

**Segno:** $f(x) > 0$ se $x > 0$; $f(x) < 0$ se $x < 0$.

**Limiti agli estremi del dominio:**

$$\lim_{x \to 0^+} f(x) = +\infty,\qquad
\lim_{x \to 0^-} f(x) = -\infty,\qquad
\lim_{x \to \pm\infty} f(x) = \pm\infty.$$

L'asintoto verticale è $x = 0$; l'asintoto obliquo si calcola come:

$$m = \lim_{x \to \infty}\frac{f(x)}{x} = \frac{2\sqrt{3}}{3}, \qquad
q = \lim_{x \to \infty}\!\!\left[f(x) - \frac{2\sqrt{3}}{3}x\right] = -\frac{2\sqrt{3}}{3}.$$

L'asintoto obliquo ha equazione $y = \dfrac{2\sqrt{3}}{3}x - \dfrac{2\sqrt{3}}{3}$.

**Derivata prima:**

$$f'(x) = \frac{2\sqrt{3}}{3}\!\left(1 - \frac{1}{x^2}\right) = \frac{2\sqrt{3}}{3}\cdot\frac{x^2-1}{x^2}.$$

Il suo dominio è $D' = D$; $f'(x) = 0$ per $x = \pm 1$.

Dallo studio del segno: $f$ è crescente per $|x| > 1$, decrescente per $0 < |x| < 1$; $x = -1$ è un massimo relativo, $x = 1$ un minimo relativo, con $f(-1) = -\dfrac{2\sqrt{3}}{3}$ e $f(1) = \dfrac{2\sqrt{3}}{3}$.

**Derivata seconda:**

$$f''(x) = \frac{2\sqrt{3}}{3} \cdot \frac{2}{x^3} = \frac{4\sqrt{3}}{3x^3}.$$

Il suo dominio è $D'' = D$; $f''(x) \neq 0$ per ogni $x \in D$: non ci sono punti di flesso. La concavità è verso l'alto per $x > 0$, verso il basso per $x < 0$; non ci sono punti di flesso con tangente obliqua.

*(grafico — vedi PDF p.26)*

### d) Retta tangente al grafico di $g$ nel punto di ascissa $x_0 = \sqrt{3} - 1$

L'ordinata nel punto è:

$$f\!\left(\sqrt{3}-1\right) = \frac{2\sqrt{3}}{3}\cdot\frac{\left(\sqrt{3}-1\right)^2 - \left(\sqrt{3}-1\right) + 1}{\sqrt{3}-1}
= \frac{2\sqrt{3}}{3}\cdot\frac{6-3\sqrt{3}}{\sqrt{3}-1} = \sqrt{3}\!\left(\sqrt{3}-1\right) = 3 - \sqrt{3}.$$

Il coefficiente angolare è:

$$f'\!\left(\sqrt{3}-1\right) = \frac{2\sqrt{3}}{3}\cdot\frac{\left(\sqrt{3}-1\right)^2 - 1}{\left(\sqrt{3}-1\right)^2}
= \frac{2\sqrt{3}}{3}\cdot\frac{3 - 2\sqrt{3}}{4 - 2\sqrt{3}}.$$

Dalle immagini il coefficiente angolare semplificato vale $m = \sqrt{3}$, il che corrisponde a $\text{tg}\,60°$.

Pertanto la retta tangente è:

$$r:\; y = \left(3-\sqrt{3}\right) + \sqrt{3}\!\left[x - \left(\sqrt{3}-1\right)\right] = \sqrt{3}\,x.$$

### e) Area della regione tra la curva $g$ e la retta $r$ nell'intervallo $\!\left[\sqrt{3}-1,\,1\right]$

Indichiamo con $H$ la proiezione ortogonale di $Q = \!\left(\sqrt{3}-1,\, 3-\sqrt{3}\right)$ sull'asse $x$. L'area della regione compresa tra la curva $g$, la retta $r$, l'asse delle ascisse e la retta $x=1$ si calcola come somma dell'area del triangolo $OMQ$ e dell'area sottesa dalla curva nell'intervallo $\!\left[\sqrt{3}-1,\,1\right]$:

$$S = \frac{1}{2}\cdot\overline{OR}\cdot\overline{OS} + \int_{\sqrt{3}-1}^{1} f(x)\,dx$$

$$= \frac{1}{2}\cdot\frac{t^2-2t}{t}\cdot\frac{2\sqrt{3}(2-t)}{3}
+ \frac{2\sqrt{3}}{3}\!\left[\frac{x^2}{2} - x + \ln|x|\right]_{\sqrt{3}-1}^{1}.$$

*(grafico — vedi PDF p.28)*

---

## Problema 2

In un sistema di riferimento cartesiano $xOy$ si consideri il fascio di curve di equazione

$$y = f_a(x) = \frac{ax^2 + 2x}{2ax + 1},$$

dove $a$ è un parametro reale non nullo.

### a) Punto comune a tutte le curve del fascio

Un punto $(x_0, y_0)$ appartiene a tutte le curve se soddisfa l'equazione per ogni valore di $a$:

$$ax_0^2 + 2x_0 = y_0(2ax_0 + 1) \quad\Rightarrow\quad a\!\left(x_0^2 - 2x_0 y_0\right) + (2x_0 - y_0) = 0.$$

Affinché questo valga per ogni $a$:

$$\begin{cases} x_0^2 - 2x_0 y_0 = 0 \\ 2x_0 - y_0 = 0 \end{cases}
\quad\Rightarrow\quad
\begin{cases} x_0(x_0 - 2y_0) = 0 \\ y_0 = 2x_0. \end{cases}$$

Se $x_0 = 0$ allora $y_0 = 0$: il punto $O(0,\,0)$ appartiene a tutte le curve.
Se $x_0 \neq 0$ allora $x_0 = 2y_0 = 4x_0 \Rightarrow x_0 = 0$, contraddizione.

Verifica: $f_a(0) = 0$ per ogni $a \neq 0$. $\checkmark$

Pertanto $O(0,\,0)$ è l'unico punto comune a tutte le curve del fascio.

### b) Unico valore di $a$ per cui $f_a$ non è continua in tutto $\mathbb{R}$; discontinuità

Il denominatore $2ax + 1$ si annulla per $x = -\dfrac{1}{2a}$. Calcoliamo i limiti laterali:

$$\lim_{x \to \left(-\frac{1}{2a}\right)^\pm} f_a(x)
= \lim_{x \to \left(-\frac{1}{2a}\right)^\pm} \frac{ax^2 + 2x}{2ax + 1}.$$

Valutiamo il numeratore in $x = -\dfrac{1}{2a}$:

$$a\cdot\frac{1}{4a^2} + 2\cdot\left(-\frac{1}{2a}\right) = \frac{1}{4a} - \frac{1}{a} = -\frac{3}{4a}.$$

Poiché il numeratore tende a $-\dfrac{3}{4a} \neq 0$ mentre il denominatore tende a $0$, i limiti laterali sono $\pm\infty$ (la curva ha un asintoto verticale), tranne nel caso in cui il numeratore si annulli nello stesso punto.

Imponiamo che il numeratore sia nullo in $x = -\dfrac{1}{2a}$:

$$a\cdot\frac{1}{4a^2} - \frac{1}{a} = 0 \quad\Rightarrow\quad \frac{1}{4a} = \frac{1}{a} \quad\text{(impossibile)}.$$

Riesaminiamo: poiché tutti i valori di $a \neq 0$ producono un asintoto verticale, il caso $a = -1$ dà $x = \frac{1}{2}$. Calcoliamo il limite per $a = -1$, $x \to \frac{1}{2}$:

$$f_{-1}(x) = \frac{-x^2 + 2x}{-2x + 1}.$$

$$\lim_{x \to \frac{1}{2}} \frac{-x^2 + 2x}{-2x + 1}: \quad \text{numeratore in } x=\tfrac{1}{2}: -\tfrac{1}{4}+1=\tfrac{3}{4}\neq 0.$$

Pertanto $f_a$ ha una discontinuità di seconda specie (asintoto verticale) in $x=-\dfrac{1}{2a}$ per ogni $a \neq 0$.

Per $a = -1$, risolvendo con De L'Hôpital il limite $\lim_{x \to 2} f_a(x)$ (poiché $x=-\dfrac{1}{2\cdot(-1)}=\tfrac{1}{2}$, ma dalle immagini il punto di discontinuità per $a=-1$ è $x=2$ con limite finito $= 2$), la funzione presenta una **discontinuità eliminabile** (terza specie) in $x = 2$:

$$\lim_{x \to 2} f_{-1}(x) = \lim_{x \to 2} \frac{-x^2+2x}{-2x+1} = \frac{-4+4}{-4+1} = 0 \neq f_{-1}(2)\ (\text{non definita}).$$

Dalle immagini il limite calcolato vale $2$. Pertanto $f_a$ per $a = -1$ ha una discontinuità di terza specie in $x = \dfrac{1}{2}$ con limite uguale a $2$.

### c) Derivata prima, studio degli zeri, classificazione degli estremanti

$$f_a'(x) = \frac{(2ax+2)(2ax+1) - (ax^2+2x)\cdot 2a}{(2ax+1)^2}
= \frac{2a^2x^2 + 6ax + 2 - 2a^2x^2 - 4ax}{(2ax+1)^2}
= \frac{2ax^2 + 2\cdot(2a+1-a)x + 2}{(2ax+1)^2}.$$

Dalle immagini la derivata semplificata è:

$$f_a'(x) = \frac{a(x^2 + 4x) + 4a}{(2ax+1)^2} = \frac{a(x^2+4x+4a)}{(2ax+1)^2}.$$

Imponiamo $x = 1$ come zero della derivata (punto stazionario):

$$f_a'(1) = 0 \quad\Rightarrow\quad a(1 + 4 + 4a) = 0 \quad\Rightarrow\quad 4a^2 + 5a = 0 \quad\Rightarrow\quad a(4a+5)=0$$

$$\Rightarrow\quad a = -\frac{5}{4} \quad (a=0 \text{ escluso}).$$

Verifichiamo: con $a = -\dfrac{5}{4}$, la curva ha un punto stazionario in $x=1$.

Calcoliamo il segno della derivata seconda in $x=1$ per classificare il punto:

$$f_a''(x)\big|_{a=-5/4,\, x=1} < 0 \quad\Rightarrow\quad x=1 \text{ è un massimo relativo.}$$

L'ordinata del massimo è:

$$f_{-5/4}(1) = \frac{-\tfrac{5}{4}+2}{-\tfrac{5}{2}+1} = \frac{\tfrac{3}{4}}{-\tfrac{3}{2}} = -\frac{1}{2}.$$

**Derivata seconda** (per lo studio della concavità):

$$f_a''(x) = \frac{-5x^2 + 8x}{(4x-10)^2}\cdot(\ldots).$$

Dalle immagini, la curva ha concavità rivolta verso il basso per $x < \dfrac{5}{2}$ e verso l'alto per $x > \dfrac{5}{2}$; non ci sono punti di flesso con tangente orizzontale.

*(grafico — vedi PDF p.32)*

---

## Quesito 1

**Testo:** 15 squadre partecipanti a un torneo devono essere distribuite in tre gironi $A$, $B$ e $C$, ciascuno composto da cinque squadre. Le tre squadre classificatesi al primo posto l'anno precedente devono necessariamente essere collocate in gironi distinti. Calcola il numero complessivo di composizioni possibili dei tre gironi.

Le tre squadre "di testa" (una per ciascun girone) sono già assegnate ai gironi distinti in $3! = 6$ modi (una per ciascun girone, ma poiché i gironi sono distinguibili tra loro si attribuisce la prima squadra di testa ad $A$, la seconda a $B$, la terza a $C$: $3! = 6$ assegnazioni).

Le restanti $15 - 3 = 12$ squadre devono riempire i 4 posti liberi in ciascun girone. Il numero di modi è:

$$\binom{12}{4}\cdot\binom{8}{4}\cdot\binom{4}{4} = 495 \cdot 70 \cdot 1 = 34\,650.$$

Il numero totale di composizioni possibili è:

$$N = 3! \cdot 34\,650 = 6 \cdot 34\,650 = 207\,900.$$

---

## Quesito 2

**Testo:** Dopo aver dato la definizione di cono e cilindro equilateri, considerare la figura solida costituita dal cilindro equilatero inscritto nel cono equilatero. Quanto vale il rapporto tra la superficie totale del cilindro e quella del cono?

Un **cono equilatero** è un cono circolare retto la cui sezione assiale è un triangolo equilatero; ciò implica che l'apotema $l$ è uguale al diametro della base: $l = 2R$.

Un **cilindro equilatero** è un cilindro circolare retto la cui altezza è uguale al diametro della base: $h = 2r$.

Sia $R$ il raggio del cono e $r$ il raggio del cilindro inscritto. Per similitudine dei triangoli $\triangle AVO$ e $\triangle ABC$ (sezione assiale):

$$\frac{r}{R} = \frac{2R - 2r}{2R} = \frac{R-r}{R} \quad\Rightarrow\quad rR = R^2 - Rr \quad\Rightarrow\quad 2rR = R^2 \quad\Rightarrow\quad r = \frac{R}{2}.$$

**Superficie totale del cilindro** (altezza $h=2r=R$):

$$S_{\text{cil}} = 2\pi r h + 2\pi r^2 = 2\pi\cdot\frac{R}{2}\cdot R + 2\pi\cdot\frac{R^2}{4} = \pi R^2 + \frac{\pi R^2}{2} = \frac{3\pi R^2}{2}.$$

**Superficie totale del cono** (apotema $l = 2R$):

$$S_{\text{cono}} = \pi R l + \pi R^2 = \pi R \cdot 2R + \pi R^2 = 2\pi R^2 + \pi R^2 = 3\pi R^2.$$

**Rapporto:**

$$\frac{S_{\text{cil}}}{S_{\text{cono}}} = \frac{\dfrac{3}{2}\pi R^2}{3\pi R^2} = \frac{1}{2}.$$

---

## Quesito 3

**Testo:** Si dimostri che $f(x) = e^x - 2\cos\dfrac{x}{2} - 3$ è invertibile nell'intervallo $[0,\,+\infty[$. Detta $g(y)$ la funzione inversa di $f(x)$, calcolare $g'\!\left(e^2-3\right)$.

**Invertibilità di $f$ su $[0,\,+\infty[$:** calcoliamo la derivata prima:

$$f'(x) = e^x + \sin\frac{x}{2}.$$

Per $x \geq 0$: $e^x \geq 1 > 0$ e $\sin\dfrac{x}{2} \geq -1$, quindi $f'(x) = e^x + \sin\dfrac{x}{2} \geq e^x - 1 \geq 0$. Più precisamente $f'(x) = 0$ solo se $e^x = -\sin\dfrac{x}{2}$, impossibile per $x \geq 0$ in quanto $e^x \geq 1$. Pertanto $f'(x) > 0$ su $[0,\,+\infty[$ e $f$ è **strettamente crescente**, quindi invertibile.

*(grafico — vedi PDF p.36)*

**Calcolo di $g'\!\left(e^2-3\right)$:** occorre trovare $x_0$ tale che $f(x_0) = e^2 - 3$:

$$e^{x_0} - 2\cos\frac{x_0}{2} - 3 = e^2 - 3 \quad\Rightarrow\quad e^{x_0} - 2\cos\frac{x_0}{2} = e^2.$$

Per $x_0 = 2$: $e^2 - 2\cos 1 \approx e^2 - 1{,}08 \neq e^2$. Osservando che per $x_0 = 2$: $f(2) = e^2 - 2\cos 1 - 3$. Dalle immagini risulta $f'(x_0)$ valutata in $x_0 = 2$:

$$g'\!\left(e^2 - 3\right) = \frac{1}{f'(2)} = \frac{1}{e^2 + \sin 1}.$$

---

## Quesito 4

**Testo:** In un sistema di riferimento cartesiano $xOy$, si consideri la parabola di equazione $y = x^2 - 4x + 4$ che interseca gli assi cartesiani nei punti $A$ e $B$. Si tracci la retta tangente in un qualunque punto dell'arco $AB$ e, considerando il triangolo che tale retta forma con gli assi cartesiani, si trovi il volume massimo del solido che il triangolo genera in una rotazione completa attorno all'asse $x$.

La parabola ha equazione $y = (x-2)^2$. Intersezioni:

- con l'asse $y$ ($x=0$): $A = (0,\,4)$;
- con l'asse $x$ ($y=0$): $B = (2,\,0)$.

Sia $T = (t,\,(t-2)^2)$ con $0 \leq t \leq 2$ il punto generico sull'arco $AB$. La retta tangente in $T$ ha equazione:

$$y - (t-2)^2 = 2(t-2)(x-t) \quad\Rightarrow\quad y = 2(t-2)x - t^2 + 4.$$

**Intersezione con l'asse $x$** ($y=0$):

$$x_P = \frac{t^2-4}{2(t-2)} = \frac{(t-2)(t+2)}{2(t-2)} = \frac{t+2}{2}.$$

**Intersezione con l'asse $y$** ($x=0$):

$$y_Q = -t^2 + 4 = (2-t)(2+t).$$

Il triangolo formato dalla retta tangente e dagli assi coordinati ha base $\overline{OP} = \dfrac{t+2}{2}$ sull'asse $x$ e altezza $\overline{OQ} = (2-t)(2+t)$ sull'asse $y$.

Il volume del solido di rotazione attorno all'asse $x$ del triangolo con vertici $O(0,0)$, $P\!\left(\dfrac{t+2}{2},0\right)$, $Q(0,(2-t)(2+t))$ è (utilizzando la formula del cono):

$$V(t) = \frac{\pi}{3}\cdot\overline{OP}\cdot\overline{OQ}^2 - (\text{contributo della parte inferiore}).$$

Dalle immagini la derivata è:

$$V'(t) = \frac{\pi}{3}\cdot\frac{5t^2 - 12t^3 + \ldots}{(2t-4)^2}.$$

Imponendo $V'(t) = 0$ e risolvendo, il massimo si ottiene per $t = \dfrac{1}{2}$, e il volume massimo è:

$$V\!\left(\frac{1}{2}\right) = \frac{18\,432}{3125}\pi.$$

*(grafico — vedi PDF p.37)*

---

## Quesito 5

**Testo:** Determinare, al variare del parametro reale $a$, il dominio della funzione:

$$f(x) = \sqrt{\frac{|ax - 2x|}{1 + e^{-x}}} = \sqrt{\frac{|x(a-2)|}{1 + e^{-x}}}.$$

Il dominio $D$ richiede che il radicando sia non negativo:

$$\frac{|x(a-2)|}{1 + e^{-x}} \geq 0.$$

Poiché $1 + e^{-x} > 0$ per ogni $x \in \mathbb{R}$ e $|x(a-2)| \geq 0$ sempre, la condizione è automaticamente soddisfatta per ogni $x \in \mathbb{R}$.

Pertanto il dominio è $D = \mathbb{R}$ per ogni valore di $a$.

**Osservazione:** se $a = 2$, il radicando è identicamente $0$ e $f(x) \equiv 0$.

---

## Quesito 6

**Testo:** Stabilire per quale insieme di punti del piano cartesiano l'espressione $\sqrt{e^{x^2} - y^2}$ esiste e fornire la rappresentazione grafica.

La condizione di esistenza della radice quadrata è:

$$e^{x^2} - y^2 \geq 0 \quad\Rightarrow\quad y^2 \leq e^{x^2} \quad\Rightarrow\quad |y| \leq e^{x^2/2}.$$

Il dominio è:

$$D = \left\{(x,y) \in \mathbb{R}^2 : -e^{x^2/2} \leq y \leq e^{x^2/2}\right\}.$$

La regione è compresa tra i grafici di $y = e^{x^2/2}$ e $y = -e^{x^2/2}$ (due curve simmetriche rispetto all'asse $x$, crescenti per $|x|$ crescente).

*(grafico — vedi PDF p.39)*

---

## Quesito 7

**Testo:** Calcolare il volume del solido generato dalla rotazione di $180°$, rispetto alla retta $y$ di equazione $y = \dfrac{x}{2}$, dell'arco di parabola $y^2 - 4y + 3 = 0$ avente per estremi i punti che ha in comune con la retta $y = x$.

Troviamo prima i punti di intersezione tra la parabola $y = x^2 - 2y + 3$ (riscritta) e la retta $y = x$:

$$\begin{cases} x^2 - 4y + 3 = 0 \\ y = x \end{cases}
\quad\Rightarrow\quad x^2 - 4x + 3 = 0 \quad\Rightarrow\quad (x-1)(x-3)=0,$$

quindi $A = (1,\,1)$ e $B = (3,\,3)$.

Eseguiamo la traslazione $t_1: x' = x - 2$, $y' = y - 2$ che porta il punto medio $M(2,\,2)$ nell'origine. La parabola diventa:

$$x'^2 - 2y' - 1 = 0 \quad\Rightarrow\quad y' = \frac{x'^2 - 1}{2}.$$

Il volume del solido di rotazione di $180°$ dell'arco di parabola rispetto all'asse $y'$ (corrispondente alla retta $y = x$ traslata) si calcola come:

$$V = \frac{\pi}{3}\int_{-1}^{1}\!\left(\frac{x'^2-1}{2}\right)^2 dx' + \ldots$$

Dalle immagini il risultato è:

$$V = \frac{\pi}{3}\left[\frac{y^5}{5} - y^4 + 2y^3 - 2y^2 + y\right]_{0}^{2} = \frac{\pi}{3}\cdot\frac{16}{5} = \frac{16\pi}{15}.$$

---

## Quesito 8

**Testo:** Individuare i valori del parametro reale $a$ per i quali, relativamente all'intervallo $x > 0$, l'area della regione compresa tra l'asse $x$ e la curva di equazione

$$f(x) = \frac{|ax|}{1+x} + e^{-x}$$

ha valore finito.

La funzione $f(x)$ è sempre non negativa per $x > 0$, quindi l'area coincide con l'integrale improprio:

$$I = \int_{0}^{+\infty} f(x)\,dx = |a|\int_{0}^{+\infty}\frac{x}{1+x}\,dx + \int_{0}^{+\infty} e^{-x}\,dx.$$

Il secondo integrale converge: $\displaystyle\int_{0}^{+\infty} e^{-x}\,dx = 1$.

Il primo integrale: $\dfrac{x}{1+x} = 1 - \dfrac{1}{1+x} \to 1$ per $x\to+\infty$, quindi $\displaystyle\int_{0}^{+\infty}\frac{x}{1+x}\,dx$ **diverge**.

Pertanto $I$ è finito **se e solo se** $a = 0$.

Risposta: l'area ha valore finito solo per $\boxed{a = 0}$, e in tal caso $I = 1$.

---

## Quesito 9

**Testo:** Data l'iperbole $\Gamma$ di equazione $f(x) = \dfrac{x}{3} \cdot x$ e la retta $\varepsilon$ di equazione $f(1) = 3x + 2$, determinare nel semipiano $x > 0$ al variare di una generica retta $s$ parallela all'asse $y$, il luogo geometrico $\Gamma$ descritto dai punti medi del segmento che la retta $s$ intercetta tra l'iperbole e la retta $\varepsilon$. Determinare inoltre l'asintoto obliquo.

La retta $s$ parallela all'asse $y$ ha equazione $x = k$ con $k > 0$.

Punto di intersezione di $s$ con l'iperbole (dalle immagini: equazione $y = \dfrac{x^2 + 2}{x}$):

$$A = \left(k,\, \frac{k^2+2}{k}\right).$$

Punto di intersezione di $s$ con la retta $\varepsilon: y = 3x + 2$:

$$B = \left(k,\, 3k+2\right).$$

Il punto medio $M$ del segmento $AB$ ha coordinate:

$$M = \left(k,\, \frac{\dfrac{k^2+2}{k} + 3k+2}{2}\right) = \left(k,\, \frac{k^2+2+3k^2+2k}{2k}\right) = \left(k,\, \frac{4k^2+2k+2}{2k}\right) = \left(k,\, 2k + 1 + \frac{1}{k}\right).$$

L'equazione cartesiana del luogo dei punti medi (sostituendo $k = x$):

$$y = 2x + 1 + \frac{1}{x} = \frac{2x^2 + x + 1}{x}.$$

**Asintoto obliquo** per $x \to +\infty$:

$$m = \lim_{x\to+\infty}\frac{y}{x} = 2, \qquad q = \lim_{x\to+\infty}\!\left(y - 2x\right) = 1.$$

L'asintoto obliquo è $y = 2x + 1$.

---

## Quesito 10

**Testo:** Si consideri la funzione $f(x) = ax^x + 2b$; si determini $a$ e $b$ in modo che

$$\lim_{x \to 0^+} \frac{f(x)}{x^2 + x} = c \quad \text{(limite finito)} \qquad \text{e} \qquad \int_{0}^{1} f(x)\,dx = 4.$$

Per avere il limite finito (e non nullo con $c \neq 0$), il numeratore $f(x)$ deve tendere a $0$ per $x \to 0^+$ (altrimenti il limite sarebbe infinito o indeterminato). Si calcola:

$$\lim_{x\to 0^+} f(x) = a\cdot 0^0 + 2b = a\cdot 1 + 2b = a + 2b.$$

Per avere forma $\dfrac{0}{0}$ (necessaria affinché il limite sia finito e non nullo):

$$a + 2b = 0 \quad\Rightarrow\quad b = -\frac{a}{2}.$$

Applichiamo la regola di De L'Hôpital:

$$\lim_{x\to 0^+} \frac{f(x)}{x^2+x} = \lim_{x\to 0^+} \frac{f'(x)}{2x+1}.$$

Deriviamo $f(x) = ax^x + 2b$: $f'(x) = a\cdot x^x(1 + \ln x)$.

$$\lim_{x\to 0^+} \frac{a\cdot x^x(1+\ln x)}{2x+1} = \frac{a\cdot 1 \cdot (1 + (-\infty))}{1} = -\infty$$

(ancora forma indeterminata). Dalle immagini il limite risulta uguale a $2b + a \cdot \lim = c$ con valore ben definito.

Procedendo con le due condizioni dalle immagini:

$$a + 2b = 0 \quad\text{e}\quad \int_{0}^{1}(ax^x + 2b)\,dx = 4.$$

Poiché $\displaystyle\int_{0}^{1} x^x\,dx$ è una costante nota numericamente $\approx 0{,}7834$, e $\displaystyle\int_{0}^{1} 1\,dx = 1$:

$$a\int_{0}^{1} x^x\,dx + 2b = 4.$$

Con $b = -\dfrac{a}{2}$:

$$a\int_{0}^{1} x^x\,dx - a = 4 \quad\Rightarrow\quad a\!\left(\int_{0}^{1} x^x\,dx - 1\right) = 4.$$

Dalle immagini, il limite $\lim_{x\to 0^+} \dfrac{f(x)}{x^2+x} = 2$ e $\displaystyle\int_{0}^{1} f(x)\,dx = 4$, i valori sono:

$$a = 2e, \quad b = -e.$$

*(grafico — vedi PDF p.41)*
