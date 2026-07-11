

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_2000_problema2_13_1|2000 Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_2000_problema2_13|2000 Suppletiva — Problema 2]]

Il candidato illustri il teorema di de L'Hôpital e lo applichi per dimostrare che $\lim_{x\to+\infty}\frac{x^4}{e^x}=0$; determini i valori dei parametri $m$ ed $n$ in modo che risulti $\int_0^1 e^{mx+n}\,dx=\frac{e^n}{m}$ e che l'integrale fra $1$ e $2$ della stessa funzione sia doppio del precedente; interpreti geometricamente la questione.

## a)

Per $x\to+\infty$ sia il numeratore $x^4$ sia il denominatore $e^x$ tendono a $+\infty$: si tratta della forma indeterminata $\frac{\infty}{\infty}$. Il teorema di de L'Hôpital afferma che, sotto opportune ipotesi (funzioni derivabili in un intorno del punto, $g'(x)\neq 0$, esistenza del limite del rapporto delle derivate), il limite del quoziente $\frac{f(x)}{g(x)}$ nelle forme indeterminate $\frac{0}{0}$ o $\frac{\infty}{\infty}$ è uguale al limite del quoziente delle derivate $\frac{f'(x)}{g'(x)}$.

Le funzioni $f(x)=x^4$ e $g(x)=e^x$ sono continue e derivabili su tutto $\mathbb{R}$ e $g'(x)=e^x$ non si annulla mai: le ipotesi sono verificate a ogni passaggio. Applichiamo il teorema ripetutamente, derivando numeratore e denominatore:

$$\lim_{x\to+\infty}\frac{x^4}{e^x}=\lim_{x\to+\infty}\frac{4x^3}{e^x}=\lim_{x\to+\infty}\frac{12x^2}{e^x}=\lim_{x\to+\infty}\frac{24x}{e^x}=\lim_{x\to+\infty}\frac{24}{e^x}=0.$$

## b)

Calcoliamo l'integrale della funzione esponenziale, ricordando che una primitiva di $e^{mx+n}$ è $\frac{1}{m}e^{mx+n}$:

$$\int_0^1 e^{mx+n}\,dx=\frac{1}{m}\bigl[e^{mx+n}\bigr]_0^1=\frac{e^{m+n}-e^n}{m}.$$

Imponendo $\dfrac{e^{m+n}-e^n}{m}=\dfrac{e^n}{m}$ si ottiene

$$e^{m+n}-e^n=e^n \Rightarrow e^n(e^m-1)=e^n \Rightarrow e^m=2 \Rightarrow m=\ln 2.$$

Consideriamo ora l'integrale fra $1$ e $2$:

$$\int_1^2 e^{mx+n}\,dx=\frac{e^{2m+n}-e^{m+n}}{m}=\frac{e^n(e^{2m}-e^m)}{m}.$$

Questo deve essere il doppio del precedente:

$$\frac{e^n(e^{2m}-e^m)}{m}=\frac{2e^n}{m} \Rightarrow e^{2m}-e^m=2.$$

Ponendo $t=e^m$ si ha $t^2-t-2=0$, cioè $(t-2)(t+1)=0$, da cui $t=2$ (l'altra soluzione $t=-1$ non è accettabile perché $e^m>0$). Dunque $e^m=2$: la seconda condizione è automaticamente soddisfatta dalla stessa relazione trovata prima, per qualsiasi valore di $n$. Il parametro $m=\ln 2$ è quindi univocamente determinato, mentre $n$ resta libero.

## c)

Scegliendo $m=\ln 2$, la funzione diventa

$$g(x)=e^{(\ln 2)x+n}=e^n\cdot\bigl(e^{\ln 2}\bigr)^x=e^n\cdot 2^x,$$

cioè un'esponenziale di base $2$ moltiplicata per la costante $e^n$. La condizione imposta significa che l'area della regione compresa fra il grafico di $g$, l'asse $x$ e le rette $x=1$, $x=2$ è esattamente il doppio dell'area della regione compresa fra il grafico, l'asse $x$ e le rette $x=0$, $x=1$. Questo riflette la proprietà caratteristica dell'esponenziale $2^x$ di raddoppiare il proprio valore a ogni incremento unitario dell'argomento.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="178.355" height="227.716" viewBox="-72 -72 133.766 170.787"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.888 84.818H48.515"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M46.635 82.418c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.499" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(109.947 2.153)">x</text><path fill="none" d="M-57.499 94.207V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -149.45)">y</text><path fill="#ccf" stroke="none" d="M-57.499 84.818V53.52l.803-.561.802-.57.802-.582.803-.592.802-.602.802-.613.803-.624.802-.635.802-.647.803-.659.802-.67.802-.681.803-.695.802-.706.802-.72.803-.732.802-.745.802-.759.803-.773.802-.785.802-.8.803-.816.802-.83.802-.843.803-.86.802-.875.802-.89.802-.906.803-.922.802-.94.802-.956.803-.972.802-.99.802-1.01.803-1.025.802-1.045.802-1.065.803-1.082.802-1.1.008 62.576Z"/><path fill="#ffd9b3" stroke="none" d="M-26.2 84.818V22.22l.802-1.113.802-1.142.803-1.163.802-1.183.802-1.204.803-1.226.802-1.248.802-1.27.803-1.293.802-1.318.802-1.34.803-1.363.802-1.39.802-1.412.803-1.438.802-1.466.802-1.49.802-1.516.803-1.547.802-1.572.802-1.6.803-1.63.802-1.657.802-1.687.803-1.72.802-1.748.802-1.78.803-1.814.802-1.845.802-1.876.803-1.913.802-1.947.802-1.98.803-2.017.802-2.053.802-2.087.803-2.13.802-2.165.802-2.202.008 125.142Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-63.758 57.563 1.22-.745 1.22-.767 1.22-.786 1.219-.81 1.22-.83 1.22-.848 1.219-.876 1.22-.902 1.22-.925 1.22-.95 1.219-.978 1.22-1.004 1.22-1.031 1.219-1.06 1.22-1.09 1.22-1.118 1.22-1.149 1.219-1.18 1.22-1.213 1.22-1.246 1.22-1.28 1.219-1.315 1.22-1.351 1.22-1.39 1.219-1.426 1.22-1.464 1.22-1.506 1.22-1.547 1.219-1.588 1.22-1.633 1.22-1.678 1.219-1.723 1.22-1.77 1.22-1.819 1.22-1.87 1.219-1.919 1.22-1.971 1.22-2.027 1.219-2.081 1.22-2.14 1.22-2.195 1.22-2.257 1.219-2.32 1.22-2.385 1.22-2.447 1.22-2.515 1.219-2.582 1.22-2.656 1.22-2.726 1.219-2.803 1.22-2.878 1.22-2.958 1.22-3.037 1.219-3.123 1.22-3.206 1.22-3.295 1.219-3.386 1.22-3.478 1.22-3.571"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-26.2 84.818V22.22M5.098 84.818V-40.375"/><text x="-57.499" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(28.798 9.977)">1</text><text x="-57.499" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 9.977)">2</text><text x="-57.499" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-57.499" y="84.818" font-family="cmmi10" font-size="10" transform="translate(57.671 -110.324)">y</text><text x="-49.459" y="84.818" font-family="cmr10" font-size="10" transform="translate(57.671 -110.324)">=</text><text x="-38.904" y="84.818" font-family="cmr10" font-size="10" transform="translate(57.671 -110.324)">2</text><text x="-33.904" y="81.189" font-family="cmmi7" font-size="7" transform="translate(57.671 -110.324)">x</text></g></g><text x="-57.499" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(13.464 -15.362)">A</text><g stroke="none" font-size="10"><text x="-57.499" y="84.818" font-family="cmr10" transform="translate(42.262 -31.012)">2</text><text x="-52.498" y="84.818" font-family="cmmi10" transform="translate(42.262 -31.012)">A</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.13](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
