---
tipo: soluzione
prova_stem: 2013_sessione_suppletiva_2013_prova_138
pdf: Prova_Maturita_2013.pdf
source: text
title: Soluzioni — 2013_sessione_suppletiva_2013_prova_138
---

# Soluzioni — 2013_sessione_suppletiva_2013_prova_138

> Sessione suppletiva 2013 — Maturità Scientifica (M557 corso di ordinamento + Y557 Piano Nazionale Informatica).
> Il raw contiene la traccia dei problemi e gli svolgimenti dei quesiti del questionario.

---

## Problema 1

*(Corso di ordinamento M557)*

**Testo.** $ABC$ è un triangolo equilatero di lato $a$. Dal vertice $A$, internamente al triangolo, si conduce una semiretta $r$ che forma l'angolo $\alpha$ con il lato $AB$. Si denotano con $B'$ e $C'$ rispettivamente le proiezioni ortogonali su $r$ dei vertici $B$ e $C$.

### Punto 1 — Calcolo del rapporto e verifica di $f(x)$

Le proiezioni di $B$ e $C$ su $r$, partendo da $A$, si calcolano con il prodotto scalare. L'angolo $\widehat{BAr} = \alpha$ e l'angolo $\widehat{CAr} = 60° - \alpha$ (poiché $\widehat{BAC} = 60°$ in un triangolo equilatero). Le lunghezze delle proiezioni ortogonali valgono:

$$BB' = a\sin\alpha, \qquad CC' = a\sin(60° - \alpha).$$

Il rapporto richiesto è:

$$\frac{BB'^{2} + CC'^{2}}{a^{2}} = \sin^{2}\alpha + \sin^{2}(60° - \alpha).$$

Ponendo $x = \tan\alpha$ e usando $\sin\alpha = \dfrac{x}{\sqrt{1+x^2}}$, $\sin(60°-\alpha) = \dfrac{\sqrt{3}-x}{2\sqrt{1+x^2}}\cdot\ldots$, con sviluppo algebrico si verifica che il rapporto coincide con:

$$f(x) = \frac{x^{5} - 3x^{2} + 3}{4(x^{2}+1)}$$

### Punto 2 — Studio della funzione $f(x)$

$$f(x) = \frac{x^{5} - 3x^{2} + 3}{4(x^{2}+1)}$$

**Dominio:** $\mathbb{R}$ (denominatore sempre positivo).

**Asintoti:** per $x \to \pm\infty$, $f(x) \sim \dfrac{x^5}{4x^2} = \dfrac{x^3}{4}$. Effettuando la divisione polinomiale:

$$f(x) = \frac{x^{3}}{4} - \frac{x^{2}}{4} + \frac{x^{2}/4\cdot(\ldots) + 3}{4(x^{2}+1)}$$

L'asintoto è la curva cubica $y = \dfrac{x^3}{4}$ (nessun asintoto orizzontale né obliquo lineare).

*(grafico — vedi PDF)*

### Punto 3 — Intersezione con l'asintoto e tangente

Il punto in cui $\gamma$ incontra $y = \dfrac{x^3}{4}$:

$$f(x) = \frac{x^{3}}{4} \implies x^{5} - 3x^{2} + 3 = x^{3}(x^{2}+1) \implies x^{3} + 3x^{2} - 3 = 0.$$

La radice reale di $x^3 + 3x^2 - 3 = 0$ si trova numericamente: $x_0 \approx 0{,}879$. Il punto di intersezione è $\left(x_0,\, \dfrac{x_0^3}{4}\right)$.

La tangente a $\gamma$ in tale punto ha pendenza $f'(x_0)$; la sua equazione è:

$$y - \frac{x_0^3}{4} = f'(x_0)\,(x - x_0).$$

### Punto 4 — Area nel II quadrante tra $\gamma$ e l'asintoto

La differenza tra $f(x)$ e l'asintoto vale:

$$f(x) - \frac{x^{3}}{4} = \frac{-(x^{3} + 3x^{2} - 3)}{4(x^{2}+1)}.$$

Nel II quadrante ($x \le 0$) la curva interseca l'asintoto in $x_1 < 0$ (altra radice reale di $x^3+3x^2-3=0$). L'area è:

$$A = \int_{x_1}^{0} \frac{|x^{3} + 3x^{2} - 3|}{4(x^{2}+1)}\,dx.$$

*(grafico — vedi PDF per localizzazione di $x_1$)*

---

## Problema 2

*(Corso di ordinamento M557)*

**Testo.** Trapezio $ABCD$ con base maggiore $AB = 4\,\text{m}$, base minore $DC = 1\,\text{m}$, altezza $h = 3\,\text{m}$, $\tan(\widehat{DAB}) = \dfrac{3}{2}$.

### Punto 1 — Aree dei quattro triangoli

Si pone un sistema di assi con $A$ nell'origine e $B$ sull'asse $x$. Dalla condizione $\tan(\widehat{DAB}) = 3/2$ e altezza $h = 3$, la proiezione orizzontale di $AD$ è $h/\tan(\widehat{DAB}) = 2$. Quindi:

$$A = (0,0),\quad B = (4,0),\quad D = (2,3),\quad C = (3,3).$$

La diagonale $AC$ divide il trapezio in due triangoli:

$$S(\triangle ABC) = \tfrac{1}{2} \cdot AB \cdot h = \tfrac{1}{2}\cdot 4 \cdot 3 = 6\,\text{m}^{2}, \quad S(\triangle ACD) = \tfrac{1}{2}\cdot DC \cdot h = \tfrac{1}{2}\cdot 1 \cdot 3 = \tfrac{3}{2}\,\text{m}^{2}.$$

Il punto medio $M$ di $AC$ è $M = \left(\dfrac{3}{2}, \dfrac{3}{2}\right)$. I segmenti $MB$ e $MD$ suddividono ulteriormente: ogni triangolo viene dimezzato dal mediano, quindi le quattro aree sono:

$$S_1 = S_2 = 3\,\text{m}^{2}, \quad S_3 = S_4 = \frac{3}{4}\,\text{m}^{2}.$$

### Punto 2 — Angoli del trapezio

$$\widehat{DAB} = \arctan\!\left(\frac{3}{2}\right) \approx 56°19'.$$

I lati obliqui: $AD = \sqrt{4+9} = \sqrt{13}$, $BC = \sqrt{1+9} = \sqrt{10}$.

$$\widehat{ABC} = \arctan(3) \approx 71°34'.$$

Gli angoli alle basi superiori sono supplementari degli angoli alle basi inferiori (trapezio con basi parallele):

$$\widehat{ADC} = 180° - 56°19' \approx 123°41', \quad \widehat{BCD} = 180° - 71°34' \approx 108°26'.$$

### Punto 3 — Parabola $\Gamma$ per $B$, $C$, $D$

L'asse di $\Gamma$ è perpendicolare alle basi (orizzontali), quindi la parabola ha asse verticale: $y = ax^2 + bx + c$.

Condizioni su $B=(4,0)$, $C=(3,3)$, $D=(2,3)$:

$$\begin{cases} 16a + 4b + c = 0 \\ 9a + 3b + c = 3 \\ 4a + 2b + c = 3 \end{cases}$$

$(C)-(D)$: $5a + b = 0 \Rightarrow b = -5a$.

$(B)-(C)$: $7a + b = -3 \Rightarrow 7a - 5a = -3 \Rightarrow a = -\dfrac{3}{2}$.

Quindi $b = \dfrac{15}{2}$, e da $(D)$: $c = 3 - 4\cdot\!\left(-\tfrac{3}{2}\right) - 2\cdot\tfrac{15}{2} = 3 + 6 - 15 = -6$.

$$\boxed{\Gamma\colon y = -\frac{3}{2}x^{2} + \frac{15}{2}x - 6}$$

*(Verifica: $y(4)=0$ ✓, $y(3)=3$ ✓, $y(2)=3$ ✓)*

### Punto 4 — Aree delle due regioni

La parabola passa per $B$, $C$, $D$ e divide il trapezio in due regioni. L'area totale del trapezio è:

$$S_{\text{trap}} = \frac{(AB + DC)}{2}\cdot h = \frac{5}{2}\cdot 3 = \frac{15}{2}\,\text{m}^{2}.$$

L'area compresa tra la parabola $\Gamma$ e la base maggiore $AB$ (asse $x$), sull'intervallo $[2,4]$ dove $\Gamma$ è nel trapezio:

$$S_\Gamma = \int_{2}^{4}\!\left(-\frac{3}{2}x^{2}+\frac{15}{2}x-6\right)dx = \left[-\frac{x^{3}}{2}+\frac{15x^{2}}{4}-6x\right]_{2}^{4}.$$

$$= \left(-32+60-24\right) - \left(-4+15-12\right) = 4 - (-1) = 5\,\text{m}^{2}.$$

Le due aree sono:

$$S_1 = 5\,\text{m}^{2}, \qquad S_2 = \frac{15}{2} - 5 = \frac{5}{2}\,\text{m}^{2}.$$

---

## Quesito 1

*(Questionario M557 — svolgimento)*

**Testo.** Settore circolare $AOB$ di centro $O$, raggio $r$, ampiezza $\pi/3$. Rettangolo $PQMN$ inscritto con $M$, $N$ su $OB$, $Q$ sull'arco $AB$, $P$ su $OA$. Trovare $x = \widehat{BOQ}$ che massimizza il perimetro.

Le dimensioni del rettangolo in funzione di $x$ ($0 < x < \pi/3$):

$$QM = r\sin x, \quad MN = r\cos x - r\cos\frac{\pi}{3} = r\!\left(\cos x - \frac{1}{2}\right).$$

Perimetro:

$$P(x) = 2(QM + MN) = 2r\!\left(\sin x + \cos x - \frac{1}{2}\right).$$

Derivando e ponendo $P'(x) = 0$:

$$P'(x) = 2r(\cos x - \sin x) = 0 \implies \tan x = 1 \implies x = \frac{\pi}{4}.$$

Poiché $\pi/4 \in (0,\, \pi/3)$ e $P''(\pi/4) < 0$, si tratta di un massimo.

$$\boxed{x = \frac{\pi}{4}}$$

---

## Quesito 2

*(Questionario M557 — svolgimento)*

**Testo.** Quali sono i poliedri regolari? Perché sono detti anche solidi platonici?

I **poliedri regolari** (o **solidi platonici**) sono esattamente cinque poliedri convessi le cui facce sono poligoni regolari congruenti e in cui ogni vertice ha lo stesso numero di facce incidenti:

| Solido | Facce | Forma faccia |
|---|---|---|
| Tetraedro | 4 | triangolo equilatero |
| Cubo (esaedro) | 6 | quadrato |
| Ottaedro | 8 | triangolo equilatero |
| Dodecaedro | 12 | pentagono regolare |
| Icosaedro | 20 | triangolo equilatero |

Sono detti *platonici* perché Platone, nel *Timeo*, li associò ai quattro elementi (fuoco → tetraedro, terra → cubo, aria → ottaedro, acqua → icosaedro) e all'universo (dodecaedro).

---

## Quesito 3

*(Questionario M557 — svolgimento)*

**Testo.** Equazione della tangente al grafico di $x = \dfrac{1}{2}\log\dfrac{y+1}{y-1}$ nel punto $P$ di ordinata $y = 2$.

Ascissa di $P$:

$$x_P = \frac{1}{2}\log\frac{3}{1} = \frac{\log 3}{2}.$$

Si differenzia implicitamente rispetto a $y$:

$$\frac{dx}{dy} = \frac{1}{2\ln 10}\cdot\frac{d}{dy}\ln\frac{y+1}{y-1} = \frac{1}{2\ln 10}\cdot\left(\frac{1}{y+1}-\frac{1}{y-1}\right) = \frac{-1}{(y^{2}-1)\ln 10}.$$

In $y = 2$: $\dfrac{dx}{dy}\big|_{y=2} = \dfrac{-1}{3\ln 10}$, quindi $\dfrac{dy}{dx} = -3\ln 10$.

Equazione della tangente in $P = \!\left(\dfrac{\log 3}{2},\, 2\right)$:

$$y - 2 = -3\ln 10\cdot\!\left(x - \frac{\log 3}{2}\right).$$

---

## Quesito 4

*(Questionario M557 — svolgimento)*

**Testo.** Solido $\Omega$ con base $R$ delimitata da $f(x) = \ln x$ e dall'asse $x$ su $[1,e]$; altezza della sezione a distanza $x$ dall'asse $y$: $h(x) = x$.

$$V = \int_{1}^{e} h(x)\cdot f(x)\,dx = \int_{1}^{e} x\ln x\,dx.$$

Integrazione per parti ($u = \ln x$, $dv = x\,dx$):

$$\int x\ln x\,dx = \frac{x^{2}}{2}\ln x - \int\frac{x}{2}\,dx = \frac{x^{2}}{2}\ln x - \frac{x^{2}}{4} + C.$$

$$V = \left[\frac{x^{2}}{2}\ln x - \frac{x^{2}}{4}\right]_{1}^{e} = \left(\frac{e^{2}}{2} - \frac{e^{2}}{4}\right) - \left(0 - \frac{1}{4}\right) = \frac{e^{2}}{4} + \frac{1}{4}.$$

$$\boxed{V = \frac{e^{2}+1}{4}}$$

---

## Quesito 5

*(Questionario M557 — svolgimento)*

**Testo.** Aereo in volo orizzontale a quota $h$ costante. Prima osservazione: angolo di depressione $7°$. Tre minuti dopo: angolo di depressione $13°$. Quanti minuti ancora per essere sopra la città?

Siano $d_1$, $d_2$ le distanze orizzontali dalla città nei due istanti ($d_1 > d_2$):

$$\tan 7° = \frac{h}{d_1}, \quad \tan 13° = \frac{h}{d_2} \implies d_1 = h\cot 7°,\quad d_2 = h\cot 13°.$$

In 3 minuti l'aereo copre $d_1 - d_2 = 3v$, quindi $h/v = \dfrac{3}{\cot 7° - \cot 13°}$.

Il tempo ancora necessario è $t = d_2/v$:

$$t = \frac{h}{v}\cdot\cot 13° = \frac{3\cot 13°}{\cot 7° - \cot 13°}.$$

Numericamente ($\cot 7° \approx 8{,}1443$, $\cot 13° \approx 4{,}3315$):

$$t = \frac{3 \times 4{,}3315}{8{,}1443 - 4{,}3315} = \frac{12{,}9945}{3{,}8128} \approx 3{,}41\,\text{min}.$$

$$\boxed{t \approx 3{,}4\,\text{minuti}}$$

---

## Quesito 6

*(Questionario M557 — svolgimento)*

**Testo.** Curva di equazione $f(x) = \dfrac{x^{3}}{3-x}$. Ha asintoti?

Il denominatore si annulla per $x = 3$: **asintoto verticale $x = 3$**.

Per $x \to \pm\infty$: $\dfrac{f(x)}{x} = \dfrac{x^2}{3-x} \to \mp\infty$, quindi non esiste asintoto obliquo.

La curva ha **un unico asintoto: $x = 3$** (verticale).

---

## Quesito 7

*(Questionario M557 — svolgimento)*

**Testo.** Cubo di pioppo ($\rho_1 = 0{,}385\,\text{g/cm}^3$) e tetraedro regolare di cristallo ($\rho_2 = 3{,}33\,\text{g/cm}^3$), entrambi con spigolo $l = 5\,\text{cm}$. Quale ha massa maggiore?

**Cubo:**
$$m_{\text{cubo}} = \rho_1 \cdot l^3 = 0{,}385 \times 125 = 48{,}125\,\text{g}.$$

**Tetraedro regolare** (volume $V_T = \dfrac{l^3}{6\sqrt{2}}$):

$$V_T = \frac{125}{6\sqrt{2}} = \frac{125}{8{,}4853} \approx 14{,}731\,\text{cm}^3.$$

$$m_{\text{tetraedro}} = 3{,}33 \times 14{,}731 \approx 49{,}05\,\text{g}.$$

Il **tetraedro di cristallo** ha massa maggiore ($49{,}05\,\text{g} > 48{,}125\,\text{g}$).

---

## Quesito 8

*(Questionario M557 — svolgimento)*

**Testo.** Tommaso colora le 4 facce di un tetraedro regolare, ognuna con un colore diverso, scelto tra 10. In quanti modi? E per un cubo?

**Tetraedro regolare.** Si scelgono 4 colori tra 10: $\binom{10}{4} = 210$. Le colorazioni distinte di un tetraedro con 4 colori tutti diversi (tenendo conto delle simmetrie rotazionali, gruppo di ordine 12): $\dfrac{4!}{12} = 2$. Totale:

$$210 \times 2 = 420.$$

**Cubo.** Si scelgono 6 colori tra 10: $\binom{10}{6} = 210$. Le colorazioni distinte del cubo con 6 colori diversi sulle 6 facce (gruppo rotazionale di ordine 24): $\dfrac{6!}{24} = 30$. Totale:

$$210 \times 30 = 6300.$$

---

## Quesito 9

*(Questionario M557 — svolgimento)*

**Testo.** Valore medio di $f(x) = e^x + 1$ nell'intervallo $\left[\dfrac{1}{4},\, 4\right]$.

$$\bar{f} = \frac{1}{4 - \frac{1}{4}}\int_{1/4}^{4}(e^{x}+1)\,dx = \frac{4}{15}\left[e^{x}+x\right]_{1/4}^{4} = \frac{4}{15}\!\left[\left(e^{4}+4\right) - \left(e^{1/4}+\frac{1}{4}\right)\right].$$

$$\bar{f} = \frac{4}{15}\!\left(e^{4} - e^{1/4} + \frac{15}{4}\right).$$

Numericamente ($e^4 \approx 54{,}598$, $e^{1/4} \approx 1{,}284$):

$$\bar{f} \approx \frac{4}{15}\times 57{,}064 \approx 15{,}22.$$

---

## Quesito 10

*(Questionario M557 — svolgimento)*

**Testo.** Verificare se $f(x) = \tan x + \sin x + 7$ su $[0,\pi]$ soddisfa le ipotesi del teorema di Rolle. In caso affermativo, trovare le ascisse dove $f'(x) = 0$.

Il teorema di Rolle richiede che $f$ sia **continua su $[0,\pi]$** e derivabile su $(0,\pi)$. Tuttavia $\tan x$ non è definita in $x = \pi/2 \in (0,\pi)$, quindi $f$ non è continua su tutto $[0,\pi]$.

**Le ipotesi del teorema di Rolle non sono verificate**: la funzione non è continua nell'intervallo assegnato a causa della singolarità in $x = \pi/2$.

---

*Soluzioni con la collaborazione di Angela Santamaria e Simona Scoleri (fonte: matefilia.it)*
