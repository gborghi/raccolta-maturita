

**Problema:** [[Problemi/prob_2006_liceo_scientifico_pni_2006_sessione_straordinaria_questionario_136_1|2006 PNI Straordinaria — Questionario — Problema 1]] · **Prova:** [[Prove/2006_liceo_scientifico_pni_2006_sessione_straordinaria_questionario_136|2006 PNI Straordinaria — Questionario]]

Svolgimento dei dieci quesiti del questionario.

## Quesito 1

*Da un pentagono regolare di lato $L$ si recidono cinque triangoli congruenti in modo da ottenere un decagono regolare: calcolarne il lato.*

Recidendo un triangolo in corrispondenza di ciascuno dei cinque vertici, il triangolo tagliato è isoscele: il suo angolo al vertice coincide con l'angolo interno del pentagono, mentre la sua base è un lato del decagono.

L'angolo interno del pentagono regolare vale
$$\frac{(5-2)\cdot 180^\circ}{5}=108^\circ .$$

Detto $s$ il lato del decagono e $t$ la lunghezza tagliata su ciascuna estremità di un lato del pentagono, ogni lato del pentagono si scompone in $L = t + s + t$, quindi $2t = L - s$.

Nel triangolo isoscele reciso, con angolo al vertice $108^\circ$ (angoli alla base $36^\circ$), lati obliqui $t$ e base $s$:
$$s = 2t\cdot \operatorname{sen} 54^\circ = (L-s)\,\operatorname{sen} 54^\circ .$$

Risolvendo rispetto a $s$:
$$s = \frac{L\,\operatorname{sen} 54^\circ}{1+\operatorname{sen} 54^\circ}.$$

Ricordando che $\operatorname{sen} 54^\circ = \cos 36^\circ = \dfrac{\sqrt{5}+1}{4}$, si ottiene
$$s = \frac{L\cdot\frac{\sqrt{5}+1}{4}}{1+\frac{\sqrt{5}+1}{4}} = \frac{L(\sqrt{5}+1)}{5+\sqrt{5}} = \frac{\sqrt{5}}{5}\,L \approx 0{,}447\,L .$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="144.693" height="171.849" viewBox="-72 -72 108.52 128.887"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="m-18.01-57.554-54.06 39.265 20.486 63.734h67.148L36.05-18.289Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-33.09-46.741-24.185 17.64L-66.38-.648l9.105 28.453 24.185 17.64h30.16l24.185-17.64L30.36-.648l-9.105-28.453L-2.93-46.74Z"/><g fill="gray" stroke="gray"><text x="-18.01" y="-.648" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-36.123 -37.84)">L</text></g><g fill="#00f" stroke="#00f"><text x="-18.01" y="-.648" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 53.932)">s</text></g><text x="-18.01" y="-.648" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.278 -61.456)">D</text></g></svg>
</figure>

## Quesito 2

*Una piramide quadrangolare regolare ha altezza doppia dello spigolo di base. Calcolare il rapporto fra il volume del cubo inscritto e quello della piramide.*

Sia $s$ lo spigolo di base e $2s$ l'altezza. Il cubo, di spigolo $x$, poggia sulla base; la sua faccia superiore, a quota $x$, è una sezione della piramide parallela alla base. Le sezioni parallele sono quadrati il cui lato è proporzionale alla distanza dal vertice, quindi
$$\frac{s}{x}=\frac{2s}{2s-x}\quad\Rightarrow\quad s(2s-x)=2s\,x\quad\Rightarrow\quad 3x=2s\quad\Rightarrow\quad x=\frac{2}{3}s .$$

Pertanto
$$V_{\text{cubo}}=x^3=\frac{8}{27}s^3,\qquad V_{\text{piramide}}=\frac{1}{3}\,s^2\cdot 2s=\frac{2}{3}s^3,$$
$$\frac{V_{\text{cubo}}}{V_{\text{piramide}}}=\frac{\frac{8}{27}s^3}{\frac{2}{3}s^3}=\frac{4}{9}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="80.55" height="188.162" viewBox="-72 -72 60.412 141.122"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-71.87 55.404h56.905L-43.417-58.407Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-43.417 55.404V-58.407"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-62.395 55.404h37.956V17.476h-37.956Z"/><text x="-43.417" y="55.404" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 10.115)">s</text><g fill="#00f" stroke="#00f"><text x="-43.417" y="55.404" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(22.511 -16.825)">x</text></g><g stroke="none" font-size="10"><text x="-43.417" y="55.404" font-family="cmr10" transform="translate(-13.22 -59.374)">2</text><text x="-38.417" y="55.404" font-family="cmmi10" transform="translate(-13.22 -59.374)">s</text></g><text x="-43.417" y="55.404" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -117.507)">V</text></g></svg>
</figure>

## Quesito 3

*Se $f$ e $g$ tendono a $0$ per $x\to a$ e non soddisfano le ipotesi del teorema di De L'Hôpital, allora non è possibile calcolare $\lim \frac{g(x)}{f(x)}$. Vero o falso?*

**È falso.** Il teorema di De L'Hôpital fornisce una condizione *sufficiente*, non necessaria, per il calcolo del limite: il limite del rapporto può esistere anche quando le ipotesi del teorema non sono verificate.

**Controesempio.** Siano $g(x)=x^2\operatorname{sen}\frac{1}{x}$, $f(x)=x$, con $a=0$. Il limite del rapporto esiste:
$$\lim_{x\to 0}\frac{x^2\operatorname{sen}\frac{1}{x}}{x}=\lim_{x\to 0} x\operatorname{sen}\frac{1}{x}=0$$
per il teorema del confronto. Tuttavia il rapporto delle derivate
$$\frac{g'(x)}{f'(x)}=\frac{2x\operatorname{sen}\frac{1}{x}-\cos\frac{1}{x}}{1}$$
non ammette limite per $x\to 0$ (il termine $\cos\frac{1}{x}$ oscilla fra $-1$ e $1$): le ipotesi di De L'Hôpital non sono soddisfatte, eppure il limite iniziale esiste.

## Quesito 4

*Calcolare $\lim_{x\to +\infty}(x-\ln x)$.*

La risposta corretta è **[C] $+\infty$**. Pur presentandosi nella forma indeterminata $+\infty-\infty$, l'infinito $x$ è di ordine superiore rispetto a $\ln x$. Infatti, raccogliendo $x$:
$$x-\ln x = x\left(1-\frac{\ln x}{x}\right),$$
e con la regola di De L'Hôpital
$$\lim_{x\to +\infty}\frac{\ln x}{x}=\lim_{x\to +\infty}\frac{1/x}{1}=0,$$
quindi la parentesi tende a $1$ e il prodotto a $+\infty$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="149.919" height="226.408" viewBox="-72 -72 112.439 169.806"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.997 37.585h99.185"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M25.308 35.185c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-66.306" y="37.585" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.427 2.153)">x</text><path fill="none" d="M-66.306 97.336v-156.09"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="37.585" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.217)">y</text><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-66.306 37.585 85.358-85.358"/><g fill="red" stroke="none" font-size="10"><text x="-66.306" y="37.585" font-family="cmmi10" transform="translate(57.315 -91.036)">y</text><text x="-58.267" y="37.585" font-family="cmr10" transform="translate(57.315 -91.036)">=</text><text x="-47.711" y="37.585" font-family="cmmi10" transform="translate(57.315 -91.036)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.323 93.075 1.379-8.07 1.379-6.45 1.379-5.292 1.379-4.463 1.379-3.855 1.378-3.396 1.38-3.03 1.378-2.746 1.379-2.5 1.379-2.298 1.379-2.126 1.379-1.977 1.378-1.85 1.38-1.734 1.378-1.64 1.38-1.545 1.378-1.469 1.379-1.397 1.379-1.33 1.379-1.27 1.379-1.218 1.378-1.167 1.38-1.12 1.378-1.079 1.379-1.039 1.379-1.002 1.379-.967 1.379-.937 1.378-.905 1.38-.88 1.378-.853 1.38-.825 1.378-.806 1.379-.78 1.379-.762 1.379-.738 1.378-.724 1.38-.706 1.378-.69 1.38-.67 1.378-.656 1.379-.641 1.379-.627 1.379-.613 1.378-.6 1.38-.59 1.378-.575 1.38-.565 1.378-.554 1.379-.542L8 10.273l1.379-.523 1.378-.514 1.38-.504 1.378-.495 1.38-.488 1.378-.479 1.379-.47 1.379-.464"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-66.306" y="37.585" font-family="cmmi10" transform="translate(68.203 -35.911)">y</text><text x="-58.267" y="37.585" font-family="cmr10" transform="translate(68.203 -35.911)">=</text><text x="-47.711" y="37.585" font-family="cmr10" transform="translate(68.203 -35.911)">ln</text><text x="-37.711" y="37.585" font-family="cmmi10" transform="translate(68.203 -35.911)">x</text></g></g></g></svg>
</figure>

## Quesito 5

*Calcolare $\lim_{x\to 0}\dfrac{e^x-1}{x}$ senza usare De L'Hôpital.*

Si parte dal limite notevole $\lim_{t\to 0}(1+t)^{1/t}=e$. Poniamo $t=e^x-1$, da cui $x=\ln(1+t)$, con $t\to 0$ quando $x\to 0$:
$$\lim_{x\to 0}\frac{e^x-1}{x}=\lim_{t\to 0}\frac{t}{\ln(1+t)}=\lim_{t\to 0}\frac{1}{\frac{1}{t}\ln(1+t)}=\lim_{t\to 0}\frac{1}{\ln\!\big((1+t)^{1/t}\big)}=\frac{1}{\ln e}=1.$$

## Quesito 6

*Stabilire se $f(x)=\begin{cases} 1 & 1\le x\le 2 \\ 2 & 2< x\le 3\end{cases}$ ammette primitiva in $[1,3]$.*

La funzione **non ammette primitiva** in $[1,3]$. Infatti $f$ presenta un salto in $x=2$ (limite sinistro $1$, limite destro $2$). Una eventuale primitiva $F$ dovrebbe avere la forma
$$F(x)=\begin{cases} x+a & 1\le x\le 2 \\ 2x+b & 2< x\le 3\end{cases}$$
Imponendo la continuità in $x=2$ si ha $2+a=4+b$, cioè $a-b=2$. Ma $F$ dovrebbe essere anche derivabile in $x=2$, mentre la derivata sinistra vale $1$ e la derivata destra vale $2$: la condizione $1=2$ è impossibile.

Si osservi che $f$ è comunque integrabile in $[1,3]$ (una discontinuità di salto non impedisce l'integrabilità), ma non possiede primitiva: le derivate godono della proprietà dei valori intermedi, che una funzione con salto non può avere.

## Quesito 7

*Mostrare che $x^5+x^3+1=0$ ha una sola soluzione reale e individuare l'intervallo $[z,z+1]$ con $z$ intero.*

Sia $f(x)=x^5+x^3+1$, definita e continua su $\mathbb{R}$. La derivata
$$f'(x)=5x^4+3x^2\ge 0,$$
si annulla solo in $x=0$ ed è positiva altrove: $f$ è quindi strettamente crescente, perciò ha **al più uno zero**. Poiché
$$\lim_{x\to -\infty} f(x)=-\infty,\qquad \lim_{x\to +\infty} f(x)=+\infty,$$
per il teorema degli zeri lo zero esiste ed è unico.

Essendo $f(0)=1>0$ e $f(-1)=-1-1+1=-1<0$, lo zero cade in $(-1,0)$: dunque $z=-1$ e la soluzione appartiene all'intervallo $[-1,0]$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="130.853" height="260.551" viewBox="-72 -72 98.139 195.413"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 37.585h84.958"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M11.008 35.185c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-26.545" y="37.585" stroke="none" font-family="cmmi10" font-size="10" transform="translate(43.367 2.153)">x</text><path fill="none" d="M-26.545 122.943V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-28.945-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-26.545" y="37.585" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.217)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-63.534 114.42.846-8.654.846-7.982.846-7.35.847-6.758.846-6.205.846-5.685.846-5.203.846-4.75.846-4.331.847-3.94.846-3.579.846-3.242.846-2.932.846-2.644.846-2.381.847-2.137.846-1.913.846-1.709.846-1.521.846-1.35.846-1.195.847-1.053.846-.924.846-.81.846-.704.846-.61.846-.526.847-.45.846-.384.846-.324.846-.272.846-.224.846-.185.847-.148.846-.119.846-.091.846-.07.846-.05.846-.035.847-.023.846-.013.846-.006.846-.002h1.692l.847-.005.846-.01.846-.018.846-.03.846-.043.846-.06.847-.082.846-.106.846-.136.846-.168.846-.207.846-.25.847-.302.846-.357.846-.421.846-.493.846-.573.846-.663.847-.763.846-.874.846-.996.846-1.133.846-1.282.846-1.446.847-1.627.846-1.824.846-2.039.846-2.274.846-2.53.846-2.806.847-3.107.846-3.432.846-3.783.846-4.16"/><path stroke="none" d="M-48.846 37.585a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><g stroke="none" font-size="10"><text x="-26.545" y="37.585" font-family="cmmi10" transform="translate(-19.798 11.4)">z</text><text x="-18.677" y="37.585" font-family="cmsy10" transform="translate(-19.798 11.4)">¼</text><text x="-8.122" y="37.585" font-family="cmsy10" transform="translate(-19.798 11.4)">¡</text><text x="-.344" y="37.585" font-family="cmr10" transform="translate(-19.798 11.4)">0</text><text x="4.656" y="37.585" font-family="cmmi10" transform="translate(-19.798 11.4)">:</text><text x="7.434" y="37.585" font-family="cmr10" transform="translate(-19.798 11.4)">84</text></g><path stroke="none" d="M-25.345 21.936a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><text x="-26.545" y="37.585" stroke="none" font-family="cmr10" font-size="10" transform="translate(4.956 -12.427)">1</text></g></svg>
</figure>

## Quesito 8

*Descrivere un algoritmo per approssimare a meno di $10^{-3}$ la radice reale della precedente equazione.*

Poiché $f(-1)<0$ e $f(-0{,}5)>0$, la radice sta in $[-1,-0{,}5]$; si applica il **metodo di bisezione**:

```
leggi a, b, eps          (a = -1, b = -0.5, eps = 1e-3)
ripeti
    c := (a + b) / 2
    se f(a)*f(c) < 0  allora  b := c   altrimenti  a := c
finché (b - a)/2 < eps  oppure  f(c) = 0
scrivi c
```

Ad ogni passo l'ampiezza dell'intervallo si dimezza: bastano circa $\big\lceil \log_2\frac{0{,}5}{10^{-3}}\big\rceil = 9$ iterazioni per raggiungere la precisione richiesta.

In alternativa, poiché $f''(x)=20x^3+6x<0$ in $[-1,-0{,}5]$ e $f''$ ha lo stesso segno di $f(-1)$, si può usare il **metodo delle tangenti** partendo da $x_0=-1$:
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)},$$
che genera $x_1\approx -0{,}875$, $x_2\approx -0{,}84$, $x_3\approx -0{,}8376$, $x_4\approx -0{,}8376$.

La radice, approssimata a meno di $10^{-3}$, è $x\approx -0{,}837$.

## Quesito 9

*Per le equazioni $x'=ax-(a-1)y+1$, $y'=2ax+(a-1)y+2$, determinare i valori di $a$ per cui rappresentano 1) un'affinità, 2) un'affinità equivalente.*

La matrice dei coefficienti è $\begin{pmatrix} a & -(a-1) \\ 2a & a-1\end{pmatrix}$, con determinante
$$D=a(a-1)+2a(a-1)=3a(a-1)=3a^2-3a.$$

**1) Affinità.** Occorre $D\ne 0$, cioè
$$a\ne 0 \quad\text{e}\quad a\ne 1.$$

**2) Affinità equivalente.** Il rapporto fra le aree è $|D|$, quindi deve essere $|3a^2-3a|=1$, cioè $3a^2-3a=\pm 1$.

- $3a^2-3a-1=0 \Rightarrow a=\dfrac{3\pm\sqrt{21}}{6}$ (entrambe accettabili, diverse da $0$ e $1$);
- $3a^2-3a+1=0$ ha discriminante $9-12<0$: nessuna soluzione reale.

Dunque l'affinità è equivalente per $a=\dfrac{3-\sqrt{21}}{6}\approx -0{,}26$ e $a=\dfrac{3+\sqrt{21}}{6}\approx 1{,}26$.

## Quesito 10

*In una classe di 28 alunni (16 femmine, di cui due «Maria»; 12 maschi, di cui un «Antonio») si forma una delegazione di 2 femmine e 2 maschi. Probabilità che comprenda «Antonio» e almeno una «Maria»?*

Il numero totale di delegazioni è
$$\binom{16}{2}\binom{12}{2}=120\cdot 66 = 7920.$$

**Coppie di femmine con almeno una Maria:**
$$\binom{16}{2}-\binom{14}{2}=120-91=29.$$

**Coppie di maschi che contengono Antonio:** Antonio più uno degli altri $11$, cioè $\binom{11}{1}=11$.

Le delegazioni favorevoli sono $29\cdot 11 = 319$. Pertanto
$$p=\frac{319}{7920}=\frac{29}{720}\approx 0{,}040 = 4\%.$$

*Fonte:* [📄 PDF p.136](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
