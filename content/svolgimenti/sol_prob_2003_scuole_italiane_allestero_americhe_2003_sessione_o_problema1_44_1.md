

**Problema:** [[Problemi/prob_2003_scuole_italiane_allestero_americhe_2003_sessione_o_problema1_44_1|2003 Americhe Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_americhe_2003_sessione_o_problema1_44|2003 Americhe Ordinaria — Problema 1]]

Nel piano cartesiano $Oxy$ è assegnato il fascio di curve di equazione

$$y=\frac{kx^3+9x}{x^2+k},$$

dove $k$ è un parametro reale non nullo.

## a)

**Valori di $k$ per cui la curva è continua su tutto l'asse reale.**

Si tratta di una funzione razionale fratta: essa è continua su tutto $\mathbb{R}$ se e solo se il denominatore non si annulla mai. Deve quindi essere

$$x^2+k\ne 0\quad\text{per ogni } x\in\mathbb{R}\ \Rightarrow\ k>0.$$

## b)

**Le curve hanno tre punti in comune.**

Scriviamo l'equazione in forma intera e raccogliamo il parametro $k$:

$$y(x^2+k)=kx^3+9x\ \Rightarrow\ \big(x^2y-9x\big)+k\big(y-x^3\big)=0.$$

È un fascio di curve; i suoi **punti base** (comuni a tutte le curve, qualunque sia $k$) si ottengono annullando separatamente le due generatrici:

$$\begin{cases} x^2y-9x=0\\[2pt] y-x^3=0\end{cases}$$

Sostituendo $y=x^3$ nella prima equazione:

$$x^2\cdot x^3-9x=0\ \Rightarrow\ x^5-9x=0\ \Rightarrow\ x\big(x^4-9\big)=0\ \Rightarrow\ x=0,\quad x=\pm\sqrt{3}.$$

Ricordando che $y=x^3$, i tre punti comuni sono

$$A=(0;\,0),\qquad B=(-\sqrt{3};\,-3\sqrt{3}),\qquad C=(\sqrt{3};\,3\sqrt{3}).$$

## c)

**I tre punti sono allineati.**

I punti $A$, $B$, $C$ soddisfano tutti l'equazione della retta $y=3x$:

$$0=3\cdot 0,\qquad -3\sqrt{3}=3\cdot(-\sqrt{3}),\qquad 3\sqrt{3}=3\cdot\sqrt{3}.$$

Poiché stanno tutti sulla retta di equazione $y=3x$, i tre punti sono allineati.

## d)

**Determinare la curva $\gamma$ avente per asintoto la retta $y=x$ e disegnarne l'andamento.**

Per ogni $k\ne 0$ il grado del numeratore supera di $1$ quello del denominatore, quindi esiste un asintoto obliquo $y=mx+q$. Calcoliamo il coefficiente angolare:

$$m=\lim_{x\to\infty}\frac{f(x)}{x}=\lim_{x\to\infty}\frac{kx^3+9x}{x\,(x^2+k)}=\lim_{x\to\infty}\frac{kx^2+9}{x^2+k}=k.$$

Perché l'asintoto sia $y=x$ deve essere $m=1$, cioè $k=1$. Verifichiamo che con $k=1$ anche il termine noto è nullo:

$$q=\lim_{x\to\infty}\big[f(x)-x\big]=\lim_{x\to\infty}\left(\frac{x^3+9x}{x^2+1}-x\right)=\lim_{x\to\infty}\frac{8x}{x^2+1}=0.$$

L'asintoto è dunque $y=x$ e la curva richiesta è

$$\gamma:\quad y=f(x)=\frac{x^3+9x}{x^2+1}.$$

**Studio di $\gamma$.** La funzione è definita e continua su tutto $\mathbb{R}$; è **dispari** poiché $f(-x)=-f(x)$; interseca gli assi solo nell'origine ed è positiva quando

$$x^3+9x>0\ \Rightarrow\ x\big(x^2+9\big)>0\ \Rightarrow\ x>0.$$

L'unico asintoto è quello obliquo $y=x$ già trovato.

*Monotonia.* Derivando:

$$f'(x)=\frac{(3x^2+9)(x^2+1)-(x^3+9x)\cdot 2x}{(x^2+1)^2}=\frac{x^4-6x^2+9}{(x^2+1)^2}=\frac{(x^2-3)^2}{(x^2+1)^2}\ge 0.$$

La derivata è sempre non negativa e si annulla solo per $x=\pm\sqrt{3}$: la funzione è quindi **sempre crescente** e presenta due flessi a tangente orizzontale in $x=\pm\sqrt{3}$ (i punti $B$ e $C$).

*Concavità.* Derivando ancora:

$$f''(x)=\frac{16x\,(x^2-3)}{(x^2+1)^3}.$$

Si ha $f''(x)\ge 0$ quando $x(x^2-3)\ge 0$, cioè per $-\sqrt{3}\le x\le 0$ oppure $x\ge\sqrt{3}$. La curva volge dunque la concavità verso l'alto per $-\sqrt{3}<x<0$ e per $x>\sqrt{3}$, verso il basso nella parte rimanente. Si hanno pertanto **tre flessi**, in $x=0$ e $x=\pm\sqrt{3}$, corrispondenti ai punti $A$, $B$ e $C$.

Il grafico di $\gamma$ è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="345.332" height="418.371" viewBox="-72 -72 258.999 313.778"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-62.965 91.077h209.013"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M144.168 88.677c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="41.741" y="91.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(108.24 2.153)">x</text><path fill="none" d="M41.741 241.308V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M39.341-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="41.741" y="91.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -155.709)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 204.889 155.553-22.734"/><g stroke="none" font-size="10"><text x="41.741" y="91.077" font-family="cmmi10" transform="translate(117.344 -119.289)">y</text><text x="49.781" y="91.077" font-family="cmr10" transform="translate(117.344 -119.289)">=</text><text x="60.336" y="91.077" font-family="cmmi10" transform="translate(117.344 -119.289)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.308 224.973 2.305-1.328 2.305-1.286 2.305-1.242 2.305-1.195 2.305-1.145 2.304-1.094 2.305-1.038 2.305-.98 2.305-.92 2.305-.854 2.305-.787 2.304-.716 2.305-.643 2.305-.566 2.305-.489 2.305-.408 2.305-.328 2.305-.25 2.304-.176 2.305-.108 2.305-.053 2.305-.013 2.305-.002 2.305-.026 2.304-.105 2.305-.252 2.305-.501 2.305-.877 2.305-1.43 2.305-2.199 2.305-3.246 2.304-4.627 2.305-6.38 2.305-8.52 2.305-10.99 2.305-13.671 2.305-16.31 2.304-18.585 2.305-20.142L42.886 80.8l2.305-20.15 2.305-18.596 2.305-16.33 2.305-13.687 2.304-11.01 2.305-8.534 2.305-6.391 2.305-4.637 2.305-3.255 2.305-2.205 2.304-1.434 2.305-.88 2.305-.503 2.305-.254 2.305-.105 2.305-.027 2.305-.002 2.304-.014 2.305-.051 2.305-.108 2.305-.175 2.305-.25 2.305-.327 2.304-.408 2.305-.488 2.305-.566 2.305-.642 2.305-.716 2.305-.786 2.305-.854 2.304-.92 2.305-.979 2.305-1.038 2.305-1.093 2.305-1.146 2.305-1.194 2.305-1.242 2.304-1.285 2.305-1.328"/><path stroke="none" d="M43.501 91.077a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="41.741" y="91.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">A</text><path stroke="none" d="M82.926-27.196a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="41.741" y="91.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(42.957 -114.856)">C</text><path stroke="none" d="M4.077 209.35a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="41.741" y="91.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-51.044 121.69)">B</text></g></svg>
</figure>

## e)

**I tre punti comuni sono flessi per $\gamma$.**

Dallo studio del punto d) risulta che $f''(x)=\dfrac{16x(x^2-3)}{(x^2+1)^3}$ si annulla e cambia segno esattamente in $x=0$ e $x=\pm\sqrt{3}$. Questi sono proprio i punti $A=(0;0)$, $B=(-\sqrt{3};-3\sqrt{3})$ e $C=(\sqrt{3};3\sqrt{3})$, comuni a tutte le curve del fascio: essi sono quindi tre flessi per la curva $\gamma$.

*Fonte:* [📄 PDF p.44](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
