---
tipo: soluzione
prova_stem: 2013_sessione_ordinaria_2013_prova_148
pdf: Prova_Maturita_2013.pdf
source: text
title: 2013 Ordinaria PNI — Prova — Svolgimento
---
## Problema 1

La funzione $f(x)$ è definita e derivabile (insieme a $f'$ e $f''$) su $[0,+\infty)$. Dai grafici Γ (di $f$) e Λ (di $f''$) si sa che:
- il punto di flesso di Γ ha coordinate $(2;\,4)$;
- la tangente a Γ nel flesso passa per l'origine $(0;0)$;
- $y = 8$ è asintoto orizzontale di Γ, cioè $\lim_{x\to+\infty}f(x)=8$;
- $y = 0$ è asintoto orizzontale di Λ, cioè $\lim_{x\to+\infty}f''(x)=0$.

### Punto 1 — massimo di $f'(x)$

Il flesso di $\Gamma$ in $x=2$ implica $f''(2)=0$. Dal grafico Λ, $f''(x)>0$ per $x<2$ e $f''(x)<0$ per $x>2$, quindi $f'$ è crescente su $[0,2)$ e decrescente su $(2,+\infty)$: $f'$ ha un **massimo** in $x=2$.

La tangente nel flesso passa per $(2,4)$ e per $(0,0)$, quindi ha pendenza

$$m = \frac{4-0}{2-0} = 2.$$

Poiché la pendenza della tangente nel flesso è $f'(2)$, si ha $f'(2)=2$. Il massimo di $f'$ è nel punto $(2;\,2)$.

**Andamento di $f'(x)$:** dalla disuguaglianza $f''(x)\le f'(x)\le f(x)$ per ogni $x$ nel dominio, $f'$ è sempre compresa tra $f''$ (che tende a $0$) e $f$ (che tende a $8$). Possibile andamento: $f'$ cresce da $f'(0)$ fino al massimo $f'(2)=2$, poi decresce tendendo a $0$ per $x\to+\infty$, restando sempre nell'intervallo $[f''(x),\,f(x)]$.

### Punto 2 — modello di crescita della popolazione

Se $f(x)$ modella la crescita di una popolazione:

- L'**asintoto orizzontale** $y=8$ indica che la popolazione tende a un valore limite (capacità portante), senza crescere indefinitamente.
- Il **punto di flesso** in $x=2$ è il momento in cui la velocità di crescita $f'(x)$ è massima: prima del flesso la crescita accelera, dopo rallenta.
- Il grafico Λ con asintoto $y=0$ conferma che la variazione del tasso si attenua progressivamente.

Questo schema corrisponde al classico **modello logistico** (curva a sigmoide).

### Punto 3 — determinazione di $a$ e $b$

Si suppone $f(x)=\dfrac{a}{1+e^{-bx}}$.

**Condizione sull'asintoto:** $\displaystyle\lim_{x\to+\infty}f(x)=a=8$, quindi $\boxed{a=8}$.

**Condizione sul flesso:** il flesso della logistica ha valore $f(x_f)=a/2=4$; il dato $f(2)=4$ è coerente. La tangente nel flesso $(2,4)$ passa per l'origine (pendenza $4/2=2$) e $f'(x_f)=ab/4$:

$$\frac{8b}{4}=2b=2 \implies b=2.$$

Dunque $\boxed{a=8,\quad b=2}$.

### Punto 4 — area tra Λ e l'asse $x$ su $[0,2]$

Con $f(x)=\dfrac{8}{1+e^{-2x}}$:

$$f'(x) = \frac{16e^{-2x}}{(1+e^{-2x})^2}, \qquad f''(x) = \frac{32e^{-2x}(e^{-2x}-1)}{(1+e^{-2x})^3}.$$

Su $(0,2]$: $f''(x)<0$ (Λ è sotto l'asse $x$). Applicando il teorema fondamentale del calcolo integrale:

$$A = -\bigl[f'(x)\bigr]_0^2 = f'(0)-f'(2) = 4 - \frac{16e^{-4}}{(1+e^{-4})^2} \approx 3{,}72.$$

---

## Problema 2

La funzione è $f(x)=\dfrac{\ln x}{x^3}$, definita per $x>0$.

### Punto 1 — studio di $f$ e grafico

**Dominio:** $(0,+\infty)$.

**Segno:** $f(x)>0$ per $x>1$; $f(1)=0$; $f(x)<0$ per $0<x<1$.

**Comportamento agli estremi:**

$$\lim_{x\to 0^+}\frac{\ln x}{x^3} = -\infty, \qquad \lim_{x\to+\infty}\frac{\ln x}{x^3} = 0^+.$$

Asintoto verticale $x=0$ con $f\to-\infty$; asintoto orizzontale $y=0$ per $x\to+\infty$.

**Prima derivata:**

$$f'(x) = \frac{\frac{1}{x}\cdot x^3 - \ln x\cdot 3x^2}{x^6} = \frac{1-3\ln x}{x^4}.$$

$f'(x)=0 \iff \ln x=\frac{1}{3} \iff x=e^{1/3}\approx 1{,}395$.

$f$ crescente su $(0,e^{1/3})$, decrescente su $(e^{1/3},+\infty)$.

**Massimo locale** in $x_M=e^{1/3}$:

$$f(e^{1/3}) = \frac{1/3}{e} = \frac{1}{3e}\approx 0{,}123.$$

**Seconda derivata:**

$$f''(x) = \frac{-\frac{3}{x}\cdot x^4 - (1-3\ln x)\cdot 4x^3}{x^8} = \frac{12\ln x - 7}{x^5}.$$

$f''(x)=0 \iff \ln x=\frac{7}{12} \iff x=e^{7/12}\approx 1{,}792$.

$f''<0$ per $x<e^{7/12}$ (concava verso il basso); $f''>0$ per $x>e^{7/12}$ (convessa verso il basso).

**Flesso** in $x_f=e^{7/12}\approx 1{,}792$:

$$f(e^{7/12}) = \frac{7/12}{e^{7/4}} = \frac{7}{12e^{7/4}}\approx 0{,}101.$$

Ascisse arrotondate: $x_M\approx 1{,}395$, $x_f\approx 1{,}792$.

*(grafico — vedi PDF p.148)*

### Punto 2 — parabola tangente a $\gamma$ in $P$

$P$ è l'intersezione di $\gamma$ con l'asse $x$: $f(x)=0\iff x=1$, quindi $P=(1,0)$.

La parabola ha asse parallelo all'asse $y$: $y=\alpha x^2+\beta x+\gamma_0$.

- **Passa per l'origine:** $\gamma_0=0$.
- **Passa per $P=(1,0)$:** $\alpha+\beta=0$, cioè $\beta=-\alpha$.
- **Tangente a $\gamma$ in $P$:** pendenza della parabola in $x=1$ è $(2\alpha\cdot1+\beta)=\alpha$. Pendenza di $\gamma$ in $P$:

$$f'(1)=\frac{1-3\ln 1}{1}=1.$$

Quindi $\alpha=1$, $\beta=-1$.

$$\boxed{y=x^2-x.}$$

### Punto 3 — area di $R$

$R$ è delimitata da $\gamma$ e dall'asse $x$ su $(0,1]$. Per $0<x<1$, $f(x)<0$, quindi:

$$A = -\int_0^1 \frac{\ln x}{x^3}\,dx.$$

Integrazione per parti con $u=\ln x$, $dv=-x^{-3}\,dx$; $du=\frac{dx}{x}$, $v=\frac{1}{2x^2}$:

$$-\int\frac{\ln x}{x^3}\,dx = \frac{\ln x}{2x^2}+\frac{1}{4x^2}+C.$$

Limite in $x\to 0^+$:

$$\lim_{x\to 0^+}\left(\frac{\ln x}{2x^2}+\frac{1}{4x^2}\right) = \lim_{x\to 0^+}\frac{2\ln x+1}{4x^2} = -\infty.$$

L'integrale **diverge**: l'area di $R$ è **infinita** (l'integranda $|f(x)|=\frac{-\ln x}{x^3}\to+\infty$ per $x\to 0^+$).

### Punto 4 — curve simmetriche

**Simmetrica di $\gamma$ rispetto all'asse $y$** ($x\mapsto-x$, dominio $x<0$):

$$y = -\frac{\ln(-x)}{x^3}, \qquad x<0.$$

*(grafico — vedi PDF p.149)*

**Simmetrica di $\gamma$ rispetto alla retta $y=-1$** ($(x,y)\mapsto(x,-2-y)$):

$$y = -2-\frac{\ln x}{x^3}, \qquad x>0.$$

*(grafico — vedi PDF p.149)*

---

## Quesito 1

**Un triangolo ha area 3 e due lati che misurano 2 e 3. Qual è il terzo lato?**

Siano $a=2$, $b=3$ i lati noti e $\theta$ l'angolo compreso:

$$S = \frac{1}{2}ab\sin\theta = 3\sin\theta = 3 \implies \sin\theta=1 \implies \theta=90^\circ.$$

Il triangolo è **rettangolo**. Terzo lato (ipotenusa):

$$c = \sqrt{a^2+b^2} = \sqrt{4+9} = \sqrt{13}.$$

**Risposta:** il terzo lato misura $\sqrt{13}$.

---

## Quesito 2

**Se $g(x)=f(x)\cdot f(x-2)$ ha $g'(1)=5$ e $g'(2)=7$, trovare $h'(1)$ con $h(x)=f(x)\cdot f(x-4)$.**

Nell'ipotesi che $f$ sia lineare ($f(x)=\alpha x+\beta$):

$$g'(x)=\alpha(2\alpha x-2\alpha+2\beta).$$

$$g'(1)=2\alpha\beta=5,\quad g'(2)=2\alpha(\alpha+\beta)=7.$$

Sottraendo: $2\alpha^2=2\Rightarrow\alpha=1$; poi $2\beta=5\Rightarrow\beta=5/2$.

$$h'(x)=\alpha(2\alpha x-4\alpha+2\beta),\quad h'(1)=1\cdot(2-4+5)=\mathbf{3}.$$

---

## Quesito 3

**Punti $A(2;\,-1)$ e $B(-6;\,-8)$. Trovare la retta per $B$ a distanza massima da $A$.**

Retta per $B(-6,-8)$ con pendenza $m$: $mx-y+(6m-8)=0$. Distanza da $A=(2,-1)$:

$$d(m) = \frac{|8m-7|}{\sqrt{m^2+1}}.$$

Massimizzando $d^2$ (derivando rispetto a $m$ e ponendo uguale a zero, escluso il caso $8m-7=0$):

$$16(m^2+1)-2m(8m-7)=0\implies 14m+16=0\implies m=-\frac{8}{7}.$$

Verifica: con $m=-8/7$ la retta è $8x+7y+104=0$ e $d=\frac{|{-16}-7|}{\sqrt{64/49+1}}=\frac{|8\cdot2+7\cdot(-1)+104|}{\sqrt{113}}=\frac{\sqrt{113^2/\sqrt{113}}}{1}$; la distanza dalla retta verticale per $B$ (cioè $x=-6$) vale $8$, quindi la retta obliqua è più lontana.

$$\boxed{8x+7y+104=0.}$$

---

## Quesito 4

**Tronco di piramide retta a base quadrata: altezza $h$, lati $a>b$. Esprimere $V$.**

Per similitudine, la piramide intera (con base $a$) ha altezza $H=\dfrac{ah}{a-b}$. Il volume del tronco:

$$V = \frac{1}{3}a^2H - \frac{1}{3}b^2(H-h) = \frac{1}{3}\left(a^2\cdot\frac{ah}{a-b} - b^2\cdot\frac{bh}{a-b}\right) = \frac{h(a^3-b^3)}{3(a-b)}.$$

Usando $a^3-b^3=(a-b)(a^2+ab+b^2)$:

$$\boxed{V = \frac{h}{3}(a^2+ab+b^2).}$$

---

## Quesito 5

**Un corpo si allunga dello $0{,}38\%$ in tutte le direzioni. Verificare che il volume cresca dell'$1{,}14\%$ e la superficie dello $0{,}76\%$.**

Con $\varepsilon=0{,}0038$ e dimensioni $L\to L(1+\varepsilon)$:

**Volume** ($\propto L^3$):

$$V'=V(1+\varepsilon)^3\approx V(1+3\varepsilon) \implies \Delta V/V\approx 3\varepsilon=1{,}14\%.\quad\checkmark$$

**Superficie** ($\propto L^2$):

$$S'=S(1+\varepsilon)^2\approx S(1+2\varepsilon) \implies \Delta S/S\approx 2\varepsilon=0{,}76\%.\quad\checkmark$$

L'approssimazione è al primo ordine in $\varepsilon$; i termini $\varepsilon^2\approx1{,}4\times10^{-5}$ sono trascurabili.

---

## Quesito 6

**Le $7!=5040$ permutazioni di $\{1,2,3,4,5,6,7\}$ in ordine crescente: posizione 5036 e posizione 1441.**

Ogni cifra iniziale governa $6!=720$ permutazioni:

| Cifra | Posizioni  |
| ----- | ---------- |
| 1     | 1–720      |
| 2     | 721–1440   |
| 3     | 1441–2160  |
| 4     | 2161–2880  |
| 5     | 2881–3600  |
| 6     | 3601–4320  |
| 7     | 4321–5040  |

**Posizione 5036** (prima cifra $=7$; residuo $5036-4320=716$):

Cifre restanti $\{1,2,3,4,5,6\}$, $5!=120$ per seconda cifra: $716\in[601,720]\Rightarrow$ seconda cifra $=6$; residuo $116$.

Cifre restanti $\{1,2,3,4,5\}$, $4!=24$: $116\in[97,120]\Rightarrow$ terza cifra $=5$; residuo $20$.

Cifre restanti $\{1,2,3,4\}$, $3!=6$: $20\in[19,24]\Rightarrow$ quarta cifra $=4$; residuo $2$.

Cifre restanti $\{1,2,3\}$, $2!=2$: $2\in[1,2]\Rightarrow$ quinta cifra $=1$; residuo $2$.

Cifre restanti $\{2,3\}$: posizione locale $2\Rightarrow$ sesta $=3$; settima $=2$.

$$\boxed{\text{Posizione 5036} = 7654132}$$

**Posizione 1441** (prima cifra $=3$; residuo $1441-1440=1$):

Residuo $1$: prima permutazione della sezione, cifre restanti $\{1,2,4,5,6,7\}$ in ordine minimo.

$$\boxed{\text{Posizione 1441} = 3124567}$$

---

## Quesito 7

**10 persone, $60\%$ con occhi azzurri; si scelgono 2 a caso. Probabilità che nessuna abbia occhi azzurri.**

Occhi azzurri: 6. Non azzurri: 4.

$$P = \frac{\binom{4}{2}}{\binom{10}{2}} = \frac{6}{45} = \boxed{\frac{2}{15}\approx13{,}3\%.}$$

---

## Quesito 8

**Dimostrare senza de l'Hôpital che $\displaystyle\lim_{x\to\pi}\frac{\sin x}{x-\pi}=-1$.**

Poniamo $t=x-\pi$ (con $t\to0$ quando $x\to\pi$). Usando la formula di addizione:

$$\sin x = \sin(\pi+t) = -\sin t.$$

$$\lim_{x\to\pi}\frac{\sin x}{x-\pi} = \lim_{t\to0}\frac{-\sin t}{t} = -\lim_{t\to0}\frac{\sin t}{t} = -1.$$

Il limite fondamentale $\lim_{t\to0}\dfrac{\sin t}{t}=1$ si dimostra geometricamente: per $0<t<\pi/2$,

$$\sin t < t < \tan t \implies \cos t < \frac{\sin t}{t} < 1,$$

e per il teorema del confronto, poiché $\lim_{t\to0^+}\cos t=1$, si ha $\lim_{t\to0^+}\dfrac{\sin t}{t}=1$; per parità il limite vale $1$ anche da sinistra. $\square$

---

## Quesito 9

**Chi ha ragione tra Anna, Paolo e Luisa?**

- **Anna:** razionali e irrazionali sono entrambi infiniti, dunque sono tanti quanti. **Errata.**
- **Paolo:** gli irrazionali sono casi eccezionali, la maggior parte dei reali sono razionali. **Errato.**
- **Luisa:** i razionali e gli irrazionali sono entrambi infiniti, ma gli irrazionali sono di più. **Corretta.**

**Dimostrazione:**

$\mathbb{Q}$ è **numerabile**: le frazioni $p/q$ si elencano tramite la diagonale di Cantor.

$\mathbb{R}$ è **non numerabile** (argomento diagonale di Cantor, 1891): supposto di poter elencare tutti i reali di $[0,1]$ come $r_1,r_2,\ldots$, si costruisce $r$ con $n$-esima cifra decimale diversa da quella di $r_n$; tale $r$ non appare nell'elenco, contraddizione.

Poiché $\mathbb{R}=\mathbb{Q}\cup(\mathbb{R}\setminus\mathbb{Q})$ e $\mathbb{Q}$ è numerabile, gli irrazionali $\mathbb{R}\setminus\mathbb{Q}$ hanno la stessa cardinalità non numerabile di $\mathbb{R}$: sono di più dei razionali.

**Ha ragione Luisa.** $\square$

---

## Quesito 10

**Trovare $k\in\mathbb{R}$ per cui $x^2-x^3=k$ ha due soluzioni distinte in $[0,3]$. Con $k=3$, approssimare la soluzione maggiore.**

Poniamo $g(x)=x^2-x^3$.

$$g'(x)=2x-3x^2=x(2-3x)=0\iff x=0\text{ o }x=\tfrac{2}{3}.$$

$g(0)=0$, $g(2/3)=4/27\approx0{,}148$, $g(1)=0$, $g(3)=-18$.

La retta $y=k$ interseca il grafico di $g$ in due punti distinti su $[0,3]$ per:

$$\boxed{0\le k<\frac{4}{27}.}$$

(Per $k=0$: soluzioni $x=0$ e $x=1$. Per $0<k<4/27$: una soluzione in $(0,2/3)$ e una in $(2/3,1)$.)

**Con $k=3$:** $p(x)=x^3-x^2+3=0$.

$p(-1)=1>0$, $p(-2)=-9<0$: radice reale unica in $(-2,-1)$.

Metodo di Newton con $x_0=-1{,}5$ ($p'(x)=3x^2-2x$):

$$x_1=-1{,}5-\frac{p(-1{,}5)}{p'(-1{,}5)}=-1{,}5-\frac{-2{,}625}{9{,}75}\approx-1{,}231.$$

$$x_2\approx-1{,}231-\frac{-0{,}378}{7{,}007}\approx-1{,}177.$$

La radice è $x\approx-1{,}18$. *(Nota: per $k=3\notin[0,4/27)$ non ci sono due radici in $[0,3]$; cf. PDF p.150 per la formulazione esatta del quesito.)*
