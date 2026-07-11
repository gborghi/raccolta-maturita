---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2011_1_2
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2011 PNI #1 — Svolgimento'
---
## Problema 1

Sia $ABC$ un triangolo con il lato $BC$ di lunghezza unitaria e l'angolo $\widehat{ABC}$ di ampiezza $60°$. Posto $AB = x$.

### Punto a) — Determinazione di $f(x)$

Calcoliamo $AC$ con il teorema del coseno:

$$AC^2 = AB^2 + BC^2 - 2\,AB\cdot BC\cdot\cos\widehat{ABC} = x^2 + 1 - 2x\cdot\frac{1}{2} = x^2 - x + 1,$$

quindi $AC = \sqrt{x^2 - x + 1}$.

Troviamo $\sin\widehat{BCA}$ con il teorema dei seni:

$$\frac{AC}{\sin\widehat{ABC}} = \frac{AB}{\sin\widehat{BCA}} \;\Rightarrow\; \frac{\sqrt{x^2-x+1}}{\dfrac{\sqrt{3}}{2}} = \frac{x}{\sin\widehat{BCA}} \;\Rightarrow\; \sin\widehat{BCA} = \frac{\sqrt{3}}{2}\cdot\frac{x}{\sqrt{x^2-x+1}}.$$

Il rapporto richiesto è:

$$f(x) = \frac{AC}{\sin\widehat{BCA}} = \frac{\sqrt{x^2-x+1}}{\dfrac{\sqrt{3}}{2}\cdot\dfrac{x}{\sqrt{x^2-x+1}}} = \frac{2\sqrt{3}\,(x^2-x+1)}{3x}.$$

Pertanto la funzione ha come unica limitazione geometrica $x > 0$.

**Studio di $f(x) = \dfrac{2\sqrt{3}(x^2 - x + 1)}{3x}$ senza vincoli geometrici:**

- **Dominio:** $D = \mathbb{R} \setminus \{0\} = (-\infty, 0) \cup (0, +\infty)$.

- **Segno:** $f(x) > 0$ se $x > 0$; $f(x) < 0$ se $x < 0$.

- **Intersezioni con gli assi:** nessuna (il discriminante di $x^2-x+1$ è $\Delta = 1-4 < 0$, dunque $x^2-x+1>0$ per ogni $x$).

- **Limiti agli estremi del dominio e asintoti:**

$$\lim_{x\to 0^+} f(x) = +\infty, \qquad \lim_{x\to 0^-} f(x) = -\infty.$$

L'asse $y$ è asintoto verticale. L'asintoto obliquo si calcola come:

$$m = \lim_{x\to\pm\infty}\frac{f(x)}{x} = \frac{2\sqrt{3}}{3}, \qquad q = \lim_{x\to\pm\infty}\left[f(x) - \frac{2\sqrt{3}}{3}\,x\right] = -\frac{2\sqrt{3}}{3}.$$

L'asintoto obliquo (per $x\to\pm\infty$) è $y = \dfrac{2\sqrt{3}}{3}\,x - \dfrac{2\sqrt{3}}{3}$.

- **Derivata prima:**

$$f'(x) = \frac{2\sqrt{3}}{3}\cdot\frac{(2x-1)\,x - (x^2-x+1)}{x^2} = \frac{2\sqrt{3}}{3}\cdot\frac{x^2-1}{x^2}.$$

$f'(x) = 0 \Rightarrow x = \pm 1$.

Per $x>0$: $f$ è decrescente su $(0,1)$, crescente su $(1,+\infty)$; minimo relativo in $x=1$ con $f(1)=\dfrac{2\sqrt{3}}{3}$.

Per $x<0$: $f$ è crescente su $(-\infty,-1)$, decrescente su $(-1,0)$; massimo relativo in $x=-1$ con $f(-1)=-\dfrac{2\sqrt{3}}{3} \cdot 3 = -\dfrac{2\sqrt{3}}{3}\cdot 3 = -2\sqrt{3}$... Verifica: $f(-1)=\dfrac{2\sqrt{3}(1+1+1)}{3\cdot(-1)}=-2\sqrt{3}$.

- **Derivata seconda:**

$$f''(x) = \frac{2\sqrt{3}}{3}\cdot\frac{2}{x^3}.$$

$f''(x) > 0$ per $x>0$ (funzione convessa); $f''(x) < 0$ per $x<0$ (funzione concava). Nessun flesso.

*(grafico — vedi PDF p.5)*

### Punto b) — Centro di simmetria in $P = \left(0,\,-\dfrac{2\sqrt{3}}{3}\right)$

Per verificare che $P$ è centro di simmetria di $g$, scriviamo la trasformazione simmetrica rispetto a $P$:

$$\begin{cases} x' = -x \\ y' = -y - \dfrac{4\sqrt{3}}{3} \end{cases}$$

e sostituiamo $f(x)$ nelle nuove coordinate. Il grafico trasformato di $g$ rispetto a $P$ soddisfa:

$$y' = -f(-x') - \frac{4\sqrt{3}}{3} = -\frac{2\sqrt{3}(x'^2+x'+1)}{-3x'} - \frac{4\sqrt{3}}{3} = \frac{2\sqrt{3}(x'^2+x'+1)}{3x'} - \frac{4\sqrt{3}}{3}.$$

Semplificando:

$$y' = \frac{2\sqrt{3}(x'^2+x'+1) - 4\sqrt{3}\,x'}{3x'} = \frac{2\sqrt{3}(x'^2-x'+1)}{3x'} = f(x').$$

Quindi la simmetria rispetto a $P$ manda $g$ in se stessa: $P\!\left(0,-\dfrac{2\sqrt{3}}{3}\right)$ è centro di simmetria per $g$.

### Punto c) — Retta tangente e triangolo di area minima

La retta tangente a $g$ nel punto di ascissa $t \in\, ]0,1[$ ha equazione:

$$y = f(t) + f'(t)\,(x - t).$$

Poniamo $y=0$ per trovare l'intersezione $R$ con l'asse $x$:

$$x_R = t - \frac{f(t)}{f'(t)} = t - \frac{\dfrac{2\sqrt{3}(t^2-t+1)}{3t}}{\dfrac{2\sqrt{3}(t^2-1)}{3t^2}} = t - \frac{t(t^2-t+1)}{t^2-1} = \frac{t(t-2)}{(t-1)(t+1)}.$$

Poniamo $x=0$ per trovare l'intersezione $S$ con l'asse $y$:

$$y_S = f(t) - t\,f'(t) = \frac{2\sqrt{3}(t^2-t+1)}{3t} - \frac{2\sqrt{3}(t^2-1)}{3t} = \frac{2\sqrt{3}(2-t)}{3t}.$$

L'area del triangolo formato dalla retta tangente con gli assi cartesiani è:

$$A(t) = \frac{1}{2}|x_R|\cdot|y_S| = \frac{1}{2}\cdot\frac{t(2-t)}{(1-t)(1+t)}\cdot\frac{2\sqrt{3}(2-t)}{3t} = \frac{\sqrt{3}(2-t)^2}{3(1-t^2)}.$$

Si calcola $A'(t)=0$ (per $t\in]0,1[$):

$$A'(t) = \frac{\sqrt{3}}{3}\cdot\frac{-2(2-t)(1-t^2)-(2-t)^2\cdot(-2t)}{(1-t^2)^2} = \frac{\sqrt{3}(2-t)}{3(1-t^2)^2}\left[-2(1-t^2)+2t(2-t)\right].$$

$$-2(1-t^2)+2t(2-t) = -2+2t^2+4t-2t^2 = 4t-2.$$

$A'(t)=0 \Rightarrow 4t-2=0 \Rightarrow t=\dfrac{1}{2}$.

$A'(t)<0$ per $t<\dfrac{1}{2}$, $A'(t)>0$ per $t>\dfrac{1}{2}$: minimo in $t=\dfrac{1}{2}$.

$$A\!\left(\frac{1}{2}\right) = \frac{\sqrt{3}\cdot\left(\frac{3}{2}\right)^2}{3\cdot\left(1-\frac{1}{4}\right)} = \frac{\sqrt{3}\cdot\frac{9}{4}}{3\cdot\frac{3}{4}} = \frac{\frac{9\sqrt{3}}{4}}{\frac{9}{4}} = \sqrt{3}.$$

Il valore di $t$ che minimizza l'area è $t=\dfrac{1}{2}$, con area minima $\sqrt{3}$.

### Punto d) — Area della regione tra $g$, la retta $r$, l'asse $x$ e $x=1$

La retta $r$ ha inclinazione $60°$ sul semiasse positivo delle $x$: coefficiente angolare $m=\tan 60°=\sqrt{3}$, e interseca $g$ nel punto di ascissa $x_0 = \dfrac{1}{\sqrt{3}}-1 = \dfrac{1-\sqrt{3}}{\sqrt{3}}$ (che è negativo, poiché $\sqrt{3}>1$).

*(grafico — vedi PDF p.7–8)*

Sia $H$ la proiezione ortogonale di $Q$ (intersezione di $r$ con $g$) sull'asse $x$, e $G$ l'intersezione di $r$ con l'asse delle ascisse. L'area della regione richiesta è:

$$S = \frac{1}{2}\overline{OH}\cdot\overline{GS} - \int_{x_0}^{0} f(x)\,dx + \int_{0}^{1} f(x)\,dx - \text{(area del trapezio triangolare sotto } r\text{)}.$$

Dopo il calcolo degli integrali (per parti o con primitive di $\dfrac{x^2-x+1}{x} = x-1+\dfrac{1}{x}$):

$$\int f(x)\,dx = \frac{2\sqrt{3}}{3}\left(\frac{x^2}{2}-x+\ln|x|\right)+C.$$

Il risultato finale dell'area è (vedi PDF p.7–8 per i dettagli numerici):

$$S = \frac{3-\sqrt{3}-2\sqrt{3}\ln(\sqrt{3}-1)}{3}.$$

### Punto e) — Raggio della circonferenza circoscritta al triangolo $ABC$

Per il teorema della corda, il raggio della circonferenza circoscritta è:

$$R = \frac{BC}{2\sin\widehat{BAC}} = \frac{1}{2\sin A}.$$

Poiché $\widehat{ABC}=60°$ e $BC=1$, $AB=x>0$, dalla legge dei seni abbiamo già:

$$\sin\widehat{BCA} = \frac{\sqrt{3}}{2}\cdot\frac{x}{\sqrt{x^2-x+1}}.$$

Inoltre $\widehat{BAC} = \pi - 60° - \widehat{BCA}$, e il raggio circoscritto vale anche:

$$R = \frac{BC}{2\sin\widehat{BAC}} = \frac{AC}{2\sin\widehat{ABC}} = \frac{\sqrt{x^2-x+1}}{2\cdot\dfrac{\sqrt{3}}{2}} = \frac{\sqrt{x^2-x+1}}{\sqrt{3}}.$$

Studiano $g(x)=\dfrac{x^2-x+1}{3}$ per $x>0$: ha minimo in $x=\dfrac{1}{2}$ con $g\!\left(\dfrac{1}{2}\right)=\dfrac{3}{4}\cdot\dfrac{1}{3}=\dfrac{1}{4}$, quindi $R_{\min}=\dfrac{1}{2}$. Per $x\to+\infty$, $R\to+\infty$.

$$R \in \left[\frac{1}{2}, +\infty\right).$$

---

## Problema 2

È data la funzione:

$$f(x) = \begin{cases} -x^2 + x + a & \text{se } x \le 0 \\ bx^2\ln x & \text{se } x > 0 \end{cases}$$

### Punto a) — Determinazione di $a$ e $b$

**Continuità in $x=0$:**

$$\lim_{x\to 0^-}(-x^2+x+a) = a, \qquad \lim_{x\to 0^+} bx^2\ln x = b\lim_{x\to 0^+} x^2\ln x = 0.$$

Il limite $\lim_{x\to 0^+} x^2\ln x = 0$ si verifica con De L'Hôpital (forma $\dfrac{\ln x}{1/x^2}$):

$$\lim_{x\to 0^+}\frac{\ln x}{x^{-2}} = \lim_{x\to 0^+}\frac{1/x}{-2x^{-3}} = \lim_{x\to 0^+}\frac{-x^2}{2} = 0.$$

Per la continuità: $a = 0$.

**Condizione sull'angolo della tangente in $x=1$:** La tangente forma un angolo $\alpha$ con il semiasse positivo delle $x$ tale che $\cos\alpha = \dfrac{\sqrt{5}}{5} = \dfrac{1}{\sqrt{5}}$, quindi $\tan\alpha = \pm 2$.

La derivata per $x>0$ è $f'(x) = 2bx\ln x + bx = bx(2\ln x + 1)$, quindi $f'(1) = b\cdot 1\cdot(0+1) = b$.

Affinché $|\tan\alpha|=2$: $b = \pm 2$. Scegliendo $b=2$ (che dà un angolo $\alpha$ corrispondente a $\cos\alpha>0$, cioè $\tan\alpha=2$):

$$a = 0, \quad b = 2.$$

### Punto b) — Derivabilità

Con $a=0$, $b=2$:

$$f'_-(0) = \lim_{x\to 0^-}(-2x+1) = 1, \qquad f'_+(0) = \lim_{x\to 0^+} 2x(2\ln x+1) = 0.$$

Poiché $f'_-(0) \neq f'_+(0)$, la funzione **non è derivabile in $x=0$** (punto angoloso). In tutti gli altri punti del dominio $f$ è derivabile.

### Punto c) — Studio della funzione e grafico $\gamma$

$$f(x) = \begin{cases} -x^2 + x & \text{se } x \le 0 \\ 2x^2\ln x & \text{se } x > 0 \end{cases}$$

**Dominio:** $\mathbb{R}$ (per $x>0$, $\ln x$ è definito; per $x\le 0$, la parabola è definita ovunque).

**Segno e intersezioni con gli assi:**
- Per $x\le 0$: $f(x)=-x^2+x=x(1-x)$. Poiché $x\le 0$ e $1-x\ge 1>0$, si ha $f(x)\le 0$; $f(0)=0$.
- Per $x>0$: $f(x)=2x^2\ln x$; $f(x)=0$ per $x=1$; $f(x)<0$ per $0<x<1$; $f(x)>0$ per $x>1$.

**Limiti:**

$$\lim_{x\to-\infty} f(x) = -\infty, \qquad \lim_{x\to+\infty} f(x) = +\infty, \qquad \lim_{x\to 0^+} f(x) = 0.$$

**Derivata prima:**

$$f'(x) = \begin{cases} -2x+1 & \text{se } x < 0 \\ 2x(2\ln x+1) & \text{se } x > 0 \end{cases}$$

Per $x<0$: $f'(x)=-2x+1>0$ (crescente).

Per $x>0$: $f'(x)=0 \Rightarrow 2\ln x+1=0 \Rightarrow x=e^{-1/2}=\dfrac{1}{\sqrt{e}}$.

Minimo relativo in $x=\dfrac{1}{\sqrt{e}}$: $f\!\left(\dfrac{1}{\sqrt{e}}\right)=2\cdot\dfrac{1}{e}\cdot\left(-\dfrac{1}{2}\right)=-\dfrac{1}{e}$.

**Derivata seconda:**

$$f''(x) = \begin{cases} -2 & \text{se } x < 0 \\ 2(2\ln x+3) & \text{se } x > 0 \end{cases}$$

Per $x<0$: $f''(x)=-2<0$ (funzione concava).

Per $x>0$: $f''(x)=0 \Rightarrow \ln x=-\dfrac{3}{2} \Rightarrow x=e^{-3/2}$. Flesso in $x=e^{-3/2}$; la funzione è concava per $0<x<e^{-3/2}$ e convessa per $x>e^{-3/2}$.

*(grafico — vedi PDF p.11)*

### Punto d) — Integrazione numerica e confronto con il calcolo esatto

L'area della regione compresa tra $\gamma$ e l'asse $x$ nell'intervallo $[1,3]$ è (poiché $f(x)\ge 0$ per $x\ge 1$):

$$\mathcal{A} = \int_1^3 2x^2\ln x\,dx.$$

**Metodo dei trapezi** con $n=10$ sottointervalli ($h=0{,}2$):

| $x_i$ | $f(x_i)=2x_i^2\ln x_i$ |
|--------|------------------------|
| 1,0 | 0 |
| 1,2 | $\approx 0{,}526$ |
| 1,4 | $\approx 1{,}316$ |
| 1,6 | $\approx 2{,}411$ |
| 1,8 | $\approx 3{,}850$ |
| 2,0 | $\approx 5{,}545$ |
| 2,2 | $\approx 7{,}633$ |
| 2,4 | $\approx 10{,}128$ |
| 2,6 | $\approx 13{,}047$ |
| 2,8 | $\approx 16{,}417$ |
| 3,0 | $\approx 19{,}775$ |

$$\mathcal{A} \approx h\left[\frac{f(1)+f(3)}{2}+f(1{,}2)+\cdots+f(2{,}8)\right] = 0{,}2\cdot\left[\frac{0+19{,}775}{2}+\sum_{k=1}^{9}f(x_k)\right] \approx 14{,}036.$$

**Calcolo esatto** con integrazione per parti ($u=\ln x$, $dv=2x^2\,dx$):

$$\int_1^3 2x^2\ln x\,dx = \left[\frac{2x^3}{3}\ln x\right]_1^3 - \int_1^3\frac{2x^2}{3}\,dx = 18\ln 3 - \left[\frac{2x^3}{9}\right]_1^3 = 18\ln 3 - 6 + \frac{2}{9} = 18\ln 3 - \frac{52}{9} \approx 13{,}997.$$

I due risultati sono concordanti.

### Punto e) — Volume del solido di rotazione attorno all'asse $x$ per $x\in[-1,1]$

$$V = \pi\int_{-1}^{1}[f(x)]^2\,dx = \pi\int_{-1}^{0}(-x^2+x)^2\,dx + \pi\int_{0}^{1}(2x^2\ln x)^2\,dx.$$

**Primo integrale** ($[-1,0]$):

$$\int_{-1}^{0}(x^2-x)^2\,dx = \int_{-1}^{0}(x^4-2x^3+x^2)\,dx = \left[\frac{x^5}{5}-\frac{x^4}{2}+\frac{x^3}{3}\right]_{-1}^{0} = 0-\left(-\frac{1}{5}-\frac{1}{2}-\frac{1}{3}\right) = \frac{31}{30}.$$

**Secondo integrale** ($[0,1]$):

$$\int_{0}^{1}4x^4\ln^2 x\,dx.$$

Integrazione per parti con $u=\ln^2 x$, $dv=4x^4\,dx$:

$$= \left[\frac{4x^5}{5}\ln^2 x\right]_0^1 - \int_0^1\frac{4x^5}{5}\cdot\frac{2\ln x}{x}\,dx = 0 - \frac{8}{5}\int_0^1 x^4\ln x\,dx.$$

Con $u=\ln x$, $dv=x^4\,dx$:

$$\int_0^1 x^4\ln x\,dx = \left[\frac{x^5}{5}\ln x\right]_0^1 - \int_0^1\frac{x^4}{5}\,dx = 0 - \frac{1}{25} = -\frac{1}{25}.$$

Quindi:

$$\int_0^1 4x^4\ln^2 x\,dx = -\frac{8}{5}\cdot\left(-\frac{1}{25}\right) = \frac{8}{125}.$$

Il volume totale è:

$$V = \pi\left(\frac{31}{30}+\frac{8}{125}\right) = \pi\cdot\frac{31\cdot 125+8\cdot 30}{3750} = \pi\cdot\frac{3875+240}{3750} = \frac{4115\pi}{3750} = \frac{823\pi}{750}.$$

---

## Quesito 1

**15 squadre distribuite in tre gironi $A$, $B$, $C$ da 5 ciascuno, con le 3 campionesse in gironi distinti.**

Le 3 squadre campionesse devono essere in gironi diversi. Poiché i gironi sono distinti (nominati), le 3 campionesse si possono assegnare ai 3 gironi in $3! = 6$ modi.

Le restanti $15-3=12$ squadre si distribuiscono nelle 3 posizioni rimaste (4 per girone):

$$\binom{12}{4}\binom{8}{4}\binom{4}{4} = 495\cdot 70\cdot 1 = 34650.$$

Il numero complessivo di composizioni è:

$$6\cdot 34650 = 207900.$$

---

## Quesito 2

**Cilindro equilatero inscritto in un cono equilatero: probabilità che un punto scelto a caso sulle superfici totali dei due solidi cada sulla superficie laterale del cono.**

Un **cilindro equilatero** ha $h=2r$ (altezza uguale al diametro). Un **cono equilatero** ha la generatrice $l$ uguale al diametro della base: $l=2R$.

Per il cono equilatero con raggio $R$: $l=2R$ e altezza $H=\sqrt{l^2-R^2}=R\sqrt{3}$.

Per trovare $r$ del cilindro equilatero inscritto, usiamo la similitudine nei triangoli assiali:

$$\frac{R-r}{r} = \frac{H}{h} = \frac{R\sqrt{3}}{2r} \;\Rightarrow\; \frac{R-r}{1} = \frac{R\sqrt{3}}{2} \;\Rightarrow\; r = \frac{R}{1+\dfrac{\sqrt{3}}{2}} = \frac{2R}{2+\sqrt{3}}.$$

Le superfici totali:

$$S_{\text{cono}} = \pi R^2 + \pi R l = \pi R^2 + 2\pi R^2 = 3\pi R^2.$$

$$S_{\text{cil}} = 2\pi r h + 2\pi r^2 = 2\pi r(2r)+2\pi r^2 = 6\pi r^2 = 6\pi\cdot\frac{4R^2}{(2+\sqrt{3})^2} = \frac{24\pi R^2}{7+4\sqrt{3}}.$$

La superficie laterale del cono è $S_{l,\text{cono}} = 2\pi R^2$.

La probabilità cercata è:

$$P = \frac{2\pi R^2}{3\pi R^2 + \dfrac{24\pi R^2}{7+4\sqrt{3}}} = \frac{2}{3+\dfrac{24}{7+4\sqrt{3}}} = \frac{2(7+4\sqrt{3})}{3(7+4\sqrt{3})+24} = \frac{2(7+4\sqrt{3})}{21+12\sqrt{3}+24} = \frac{2(7+4\sqrt{3})}{3(15+4\sqrt{3})}.$$

Numericamente: $P = \dfrac{2(7+4\cdot 1{,}732)}{3(15+4\cdot 1{,}732)} \approx \dfrac{2\cdot 13{,}928}{3\cdot 21{,}928} \approx \dfrac{27{,}856}{65{,}784} \approx 0{,}47$.

---

## Quesito 3

**Funzione definita dall'integrale $F(x) = \displaystyle\int_{-2}^{x}\frac{t\,\arcsin(t^2)}{t^2+1}\,dt$.**

**Dominio della funzione integranda** $f(t)=\dfrac{t\,\arcsin(t^2)}{t^2+1}$: l'arcoseno è definito per $-1\le t^2\le 1$, cioè $|t|\le 1$. Il denominatore $t^2+1>0$ sempre. Quindi il dominio della funzione integranda è $[-1,1]$.

**La funzione $f(t)$ è dispari:**

$$f(-t) = \frac{(-t)\arcsin((-t)^2)}{(-t)^2+1} = \frac{-t\,\arcsin(t^2)}{t^2+1} = -f(t). \checkmark$$

**Retta tangente a $F(x)$ nel punto di ascissa $x_0=\dfrac{\sqrt{2}}{2}$:**

Per il teorema fondamentale del calcolo, $F'(x)=f(x)$, quindi:

$$F'\!\left(\frac{\sqrt{2}}{2}\right) = f\!\left(\frac{\sqrt{2}}{2}\right) = \frac{\dfrac{\sqrt{2}}{2}\cdot\arcsin\!\left(\dfrac{1}{2}\right)}{\dfrac{1}{2}+1} = \frac{\dfrac{\sqrt{2}}{2}\cdot\dfrac{\pi}{6}}{\dfrac{3}{2}} = \frac{\sqrt{2}\pi}{6}\cdot\frac{2}{3} = \frac{\sqrt{2}\pi}{9}.$$

Il valore $F\!\left(\dfrac{\sqrt{2}}{2}\right)$ si ottiene con l'integrale; per la disparità di $f$, si ha $\int_{-a}^{a}f(t)\,dt=0$. Poiché $f$ è definita su $[-1,1]$ e $-\dfrac{\sqrt{2}}{2}$ è il simmetrico di $\dfrac{\sqrt{2}}{2}$ rispetto all'origine:

$$\int_{-\sqrt{2}/2}^{\sqrt{2}/2}f(t)\,dt = 0 \;\Rightarrow\; F\!\left(\frac{\sqrt{2}}{2}\right) = F\!\left(-\frac{\sqrt{2}}{2}\right).$$

L'equazione della retta tangente è:

$$y = F\!\left(\frac{\sqrt{2}}{2}\right) + \frac{\sqrt{2}\pi}{9}\left(x - \frac{\sqrt{2}}{2}\right).$$

*(grafico — vedi PDF p.14–15)*

---

## Quesito 4

**Parabola $y=(x-2)^2$; intersezioni con gli assi: $A=(0,4)$, $B=(2,0)$.**

*(grafico — vedi PDF p.15)*

Retta tangente in un punto generico $P=\bigl(t,(t-2)^2\bigr)$ con $t\in[0,2]$:

$$y = (t-2)^2 + 2(t-2)(x-t) = 2(t-2)x - (t-2)^2.$$

Intersezione con l'asse $x$ ($y=0$): $x_Q = \dfrac{t}{2}-1 = \dfrac{t-2}{2}$.

Intersezione con l'asse $y$ ($x=0$): $y_R = -(t-2)^2$.

Il triangolo $OQR$ ha vertici $O=(0,0)$, $Q=\!\left(\dfrac{t-2}{2},0\right)$, $R=\!\left(0,-(t-2)^2\right)$.

Il solido di rotazione attorno all'asse $x$ è un cono di raggio $|y_R|=(2-t)^2$ e altezza $|x_Q|=\dfrac{2-t}{2}$:

$$V(t) = \frac{\pi}{3}\cdot(2-t)^4\cdot\frac{2-t}{2} = \frac{\pi}{6}(2-t)^5.$$

$V'(t) = \dfrac{\pi}{6}\cdot(-5)(2-t)^4 < 0$ per $t\in[0,2[$: $V$ è strettamente decrescente.

Il massimo si raggiunge in $t=0$:

$$V(0) = \frac{\pi}{6}\cdot 2^5 = \frac{32\pi}{6} = \frac{16\pi}{3}.$$

---

## Quesito 5

**Volume del solido con base la regione sottesa da $f(x)=\dfrac{1}{x}$ in $[1,2]$, con sezioni semicircolari di diametro $f(x)$.**

*(grafico — vedi PDF p.16)*

Il raggio di ogni sezione semicircolare è $\dfrac{f(x)}{2}=\dfrac{1}{2x}$. L'area della sezione è:

$$A(x) = \frac{1}{2}\pi\left(\frac{1}{2x}\right)^2 = \frac{\pi}{8x^2}.$$

Il volume totale è:

$$V = \int_1^2\frac{\pi}{8x^2}\,dx = \frac{\pi}{8}\left[-\frac{1}{x}\right]_1^2 = \frac{\pi}{8}\!\left(-\frac{1}{2}+1\right) = \frac{\pi}{16}.$$

---

## Quesito 6

**Dominio e rappresentazione grafica di $\sqrt{e^{x^2}-y^2}$.**

L'espressione è definita per:

$$e^{x^2}-y^2 \ge 0 \;\Leftrightarrow\; y^2 \le e^{x^2} \;\Leftrightarrow\; |y| \le e^{x^2/2}.$$

Il luogo dei punti è la regione del piano cartesiano compresa tra le curve $y=e^{x^2/2}$ e $y=-e^{x^2/2}$ (inclusi i bordi):

$$\mathcal{R} = \left\{(x,y)\in\mathbb{R}^2 : -e^{x^2/2}\le y\le e^{x^2/2}\right\}.$$

*(grafico — vedi PDF p.17)*

---

## Quesito 7

**Probabilità condizionata — Veronica e il ritardo.**

Definiamo gli eventi:
- $B$: sceglie la bicicletta, $P(B)=\dfrac{1}{2}$;
- $A$: sceglie l'automobile, $P(A)=\dfrac{1}{2}$;
- $R$: è in ritardo; $P(R\mid B)=0{,}15$, $P(R\mid A)=0{,}25$.

Probabilità totale del ritardo:

$$P(R) = P(R\mid B)P(B)+P(R\mid A)P(A) = 0{,}15\cdot\frac{1}{2}+0{,}25\cdot\frac{1}{2} = 0{,}20.$$

Per il teorema di Bayes:

$$P(A\mid R) = \frac{P(R\mid A)\,P(A)}{P(R)} = \frac{0{,}25\cdot\frac{1}{2}}{0{,}20} = \frac{0{,}125}{0{,}20} = \frac{5}{8}.$$

La probabilità che Veronica abbia scelto l'automobile è $\dfrac{5}{8}$.

---

## Quesito 8

**Numero degli zeri e approssimazione numerica.**

La funzione (si veda PDF p.18 per la formula esatta) è:

$$f(x) = e^{x-\frac{1}{2}} - e^{x^2-1}.$$

Gli zeri corrispondono a:

$$e^{x-1/2} = e^{x^2-1} \;\Leftrightarrow\; x-\frac{1}{2} = x^2-1 \;\Leftrightarrow\; x^2-x-\frac{1}{2}=0 \;\Rightarrow\; x = \frac{1\pm\sqrt{3}}{2}.$$

La funzione ha **due zeri**: $x_1=\dfrac{1-\sqrt{3}}{2}\approx -0{,}366$ e $x_2=\dfrac{1+\sqrt{3}}{2}\approx 1{,}366$.

*(grafico — vedi PDF p.18)*

**Il più piccolo zero** è $x^*=\dfrac{1-\sqrt{3}}{2}$.

**Approssimazione con il metodo della bisezione** sull'intervallo $[-1,0]$ (dove $f$ cambia segno, in quanto $f(-1)<0$ e $f(0)=e^{-1/2}-e^{-1}>0$):

| Iterazione | $a$ | $b$ | $c$ | $\text{sgn}(f(c))$ |
|---|---|---|---|---|
| 1 | $-1$ | $0$ | $-1/2$ | $-$ |
| 2 | $-1/2$ | $0$ | $-1/4$ | $-$ |
| 3 | $-1/4$ | $0$ | $-1/8$ | $+$ |
| 4 | $-1/2$ | $-1/8$ | $-5/16$ | $-$ |
| 5 | $-5/16$ | $-1/8$ | $-7/32$ | $-$ |
| 6 | $-7/32$ | $-1/8$ | $-15/64$ | $+$ |
| 7 | $-7/32$ | $-15/64$ | $-29/128$ | $\approx 0$ |

Dopo 7 iterazioni, l'ampiezza dell'intervallo è $\dfrac{1}{128}<0{,}01$. Si ottiene $x^*\approx -0{,}37$ con errore $< 0{,}01$.

*(grafico — vedi PDF p.18–19)*

---

## Quesito 9

**Volume del solido generato dalla rotazione del cerchio $x^2+y^2-2x=0$ attorno all'asse $y$.**

Riscriviamo: $(x-1)^2+y^2=1$. È una circonferenza di centro $C=(1,0)$ e raggio $r=1$.

Per il **teorema di Pappo-Guldino**: il baricentro del disco ha coordinata $\bar{x}=1$; l'area del disco è $S=\pi r^2=\pi$. Quindi:

$$V = 2\pi\,\bar{x}\cdot S = 2\pi\cdot 1\cdot\pi = 2\pi^2.$$

**Verifica con integrazione.** Le due semicirconferenze sono $\gamma_1: x=1+\sqrt{1-y^2}$ e $\gamma_2: x=1-\sqrt{1-y^2}$, con $-1\le y\le 1$. Il volume di rotazione attorno all'asse $y$ è:

$$V = \pi\int_{-1}^{1}\left[(1+\sqrt{1-y^2})^2-(1-\sqrt{1-y^2})^2\right]dy = \pi\int_{-1}^{1}4\sqrt{1-y^2}\,dy = 4\pi\int_{-1}^{1}\sqrt{1-y^2}\,dy.$$

**I Metodo** (sostituzione $y=\sin t$, $dy=\cos t\,dt$):

$$\int_{-1}^{1}\sqrt{1-y^2}\,dy = \int_{-\pi/2}^{\pi/2}\cos^2 t\,dt = \int_{-\pi/2}^{\pi/2}\frac{1+\cos 2t}{2}\,dt = \left[\frac{t}{2}+\frac{\sin 2t}{4}\right]_{-\pi/2}^{\pi/2} = \frac{\pi}{2}.$$

**II Metodo** (integrazione per parti):

$$\int_{-1}^{1}\sqrt{1-y^2}\,dy = \left[y\sqrt{1-y^2}\right]_{-1}^{1}+\int_{-1}^{1}\frac{y^2}{\sqrt{1-y^2}}\,dy = 0 + \int_{-1}^{1}\left(\frac{1}{\sqrt{1-y^2}}-\sqrt{1-y^2}\right)dy.$$

$$\Rightarrow\; 2\int_{-1}^{1}\sqrt{1-y^2}\,dy = \left[\arcsin y\right]_{-1}^{1} = \pi \;\Rightarrow\; \int_{-1}^{1}\sqrt{1-y^2}\,dy = \frac{\pi}{2}.$$

Quindi:

$$V = 4\pi\cdot\frac{\pi}{2} = 2\pi^2.$$

---

## Quesito 10

**Determinare $a\in\,]-1;3[$ affinché:**

$$f(x) = \begin{cases} e^{a-x} & \text{se } x < a \\ \dfrac{x^2+1}{1+x} & \text{se } x \ge a \end{cases}$$

**soddisfi le ipotesi del teorema di Lagrange nell'intervallo $[-1,3]$.**

Il teorema di Lagrange richiede che $f$ sia continua su $[-1,3]$ e derivabile in $]-1,3[$.

**Dominio:** Per $x\ge a$ con $a>-1$, il denominatore $1+x\ne 0$; la funzione è definita su $[-1,3]$.

**Continuità in $x=a$:** $\lim_{x\to a^-}e^{a-x} = e^0 = 1$ e $\lim_{x\to a^+}\dfrac{x^2+1}{1+x} = \dfrac{a^2+1}{1+a}$. La condizione è:

$$1 = \frac{a^2+1}{1+a} \;\Rightarrow\; 1+a = a^2+1 \;\Rightarrow\; a^2-a = 0 \;\Rightarrow\; a = 0 \text{ oppure } a = 1.$$

**Derivabilità in $x=a$:**

$$f'(x) = \begin{cases} -e^{a-x} & \text{se } x < a \\ \dfrac{x^2+2x-1}{(1+x)^2} & \text{se } x > a \end{cases}$$

La condizione $f'_-(a)=f'_+(a)$:

$$-1 = \frac{a^2+2a-1}{(1+a)^2} \;\Rightarrow\; -(1+a)^2 = a^2+2a-1 \;\Rightarrow\; 0 = 2a^2+4a = 2a(a+2) \;\Rightarrow\; a = 0 \text{ oppure } a = -2.$$

Combinando le due condizioni ($a=0$ o $a=1$) con ($a=0$ o $a=-2$), l'unico valore comune nell'intervallo $]-1;3[$ è:

$$a = 0.$$
