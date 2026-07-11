

**Problema:** [[Problemi/prob_2007_liceo_scientifico_ordinamento_2007_sessione_straor_problema1_121_1|2007 LS Ordinamento Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_problema1_121|2007 LS Ordinamento Straordinaria — Problema 1]]

Data una semicirconferenza di diametro $AB=2R$, si prende sul prolungamento di $AB$, dalla parte di $B$, un punto $C$ con $BC=AB=2R$ (dunque $AC=4R$). Detto $P$ un punto della semicirconferenza e posto $x=A\hat{B}P$, si studia il rapporto $y=\dfrac{CP^2}{AP\cdot PB}$.

## a) Espressione del rapporto

Poiché $P$ appartiene alla semicirconferenza di diametro $AB$, l'angolo $A\hat{P}B$ è retto. Nel triangolo rettangolo $APB$, di ipotenusa $AB=2R$ e angolo $x$ in $B$, si ha

$$AP=2R\sin x,\qquad PB=2R\cos x.$$

Inoltre $AC=AB+BC=4R$ e l'angolo $P\hat{A}C=P\hat{A}B=\dfrac{\pi}{2}-x$. Applicando il teorema del coseno al triangolo $APC$:

$$CP^2=AP^2+AC^2-2\,AP\cdot AC\cdot\cos\!\left(\frac{\pi}{2}-x\right)=4R^2\sin^2 x+16R^2-16R^2\sin^2 x=16R^2-12R^2\sin^2 x.$$

Quindi

$$y=\frac{CP^2}{AP\cdot PB}=\frac{16R^2-12R^2\sin^2 x}{4R^2\sin x\cos x}=\frac{4-3\sin^2 x}{\sin x\cos x}.$$

## b) Studio della funzione

Per esprimere $y$ mediante $\tan x$ osserviamo che $4-3\sin^2 x=4\sin^2 x+4\cos^2 x-3\sin^2 x=\sin^2 x+4\cos^2 x$. Dividendo numeratore e denominatore per $\cos^2 x$:

$$y=f(x)=\frac{\tan^2 x+4}{\tan x}=\tan x+\frac{4}{\tan x}.$$

La funzione ha periodo $T=\pi$, quindi basta studiarla nell'intervallo $[0;\pi]$.

**Dominio.** Deve essere $\tan x$ definita e non nulla: $x\neq 0,\ \dfrac{\pi}{2},\ \pi$.

**Intersezioni con gli assi.** Il numeratore $\tan^2 x+4$ è sempre positivo, quindi $f(x)$ non si annulla mai; $x=0$ è escluso: nessuna intersezione con gli assi.

**Segno.** Essendo il numeratore positivo, il segno di $f$ coincide con quello di $\tan x$:

$$f(x)>0\ \text{per}\ 0<x<\frac{\pi}{2},\qquad f(x)<0\ \text{per}\ \frac{\pi}{2}<x<\pi.$$

**Limiti (asintoti verticali).**

$$\lim_{x\to 0^+}\frac{\tan^2 x+4}{\tan x}=+\infty\quad\Rightarrow\quad x=0\ \text{asintoto verticale};$$

$$\lim_{x\to (\pi/2)^-}f(x)=+\infty,\qquad \lim_{x\to (\pi/2)^+}f(x)=-\infty\quad\Rightarrow\quad x=\frac{\pi}{2}\ \text{asintoto verticale};$$

$$\lim_{x\to \pi^-}\frac{\tan^2 x+4}{\tan x}=-\infty\quad\Rightarrow\quad x=\pi\ \text{asintoto verticale}.$$

**Derivata prima.**

$$f'(x)=\frac{\tan^4 x-3\tan^2 x-4}{\tan^2 x}=\frac{(\tan^2 x-4)(\tan^2 x+1)}{\tan^2 x}.$$

Poiché $\tan^2 x+1>0$ e $\tan^2 x>0$, si ha $f'(x)\ge 0\iff \tan^2 x\ge 4\iff |\tan x|\ge 2$. Posto

$$\alpha=\arctan 2\approx 1{,}107\ \text{rad},\qquad \beta=\pi-\arctan 2\approx 2{,}034\ \text{rad},$$

nell'intervallo $\left(0;\dfrac{\pi}{2}\right)$ è $\tan x\ge 2$ per $x\ge\alpha$; nell'intervallo $\left(\dfrac{\pi}{2};\pi\right)$ è $\tan x\le -2$ per $x\le\beta$. Dunque:

$$f\ \text{decrescente su}\ (0,\alpha)\ \text{e su}\ (\beta,\pi);\qquad f\ \text{crescente su}\ \left(\alpha,\tfrac{\pi}{2}\right)\ \text{e su}\ \left(\tfrac{\pi}{2},\beta\right).$$

In $x=\alpha$ si ha un **minimo relativo** e in $x=\beta$ un **massimo relativo**, di ordinate (ricordando $\tan\alpha=2$, $\tan\beta=-2$):

$$f(\alpha)=\frac{4+4}{2}=4,\qquad f(\beta)=\frac{4+4}{-2}=-4.$$

**Derivata seconda (concavità).**

$$f''(x)=\frac{(2\tan^4 x+8)(\tan^2 x+1)}{\tan^3 x}\ge 0\iff \tan x>0\iff 0<x<\frac{\pi}{2}.$$

Quindi il grafico volge la concavità verso l'alto su $\left(0;\dfrac{\pi}{2}\right)$ e verso il basso su $\left(\dfrac{\pi}{2};\pi\right)$; non vi sono flessi.

Il grafico nell'intervallo $[0;\pi]$ (poi periodico) è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="257.971" height="286.802" viewBox="-72 -72 193.478 215.102"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 -52.922 35.28)"><clipPath id="pgf60430db74fc2b4dbd18bd52ad79f6f7dcp1"><path d="M-19.348-107.55v215.1h193.479v-215.1Zm193.479 215.1"/></clipPath><g clip-path="url(#pgf60430db74fc2b4dbd18bd52ad79f6f7dcp1)"><path fill="none" d="M-19.348 0h193.079"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M171.85 2.4c.38-1.44 1.228-2.12 2.08-2.4-.852-.28-1.7-.96-2.08-2.4"/><text x="-52.922" y="35.281" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 230.586 33.128)">x</text><path fill="none" d="M0-103.568v206.736"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 101.288c1.44.38 2.12 1.226 2.4 2.08.28-.854.96-1.7 2.4-2.08"/><text x="-52.922" y="35.281" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 50.292 144.326)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M75.979-103.568v207.136M151.958-103.568v207.136"/><path fill="none" stroke="#00f" stroke-width=".8" d="m15.962 95.761.834-4.821.834-4.372.834-3.979.834-3.641.834-3.333.834-3.073.834-2.833.834-2.628.834-2.436.834-2.273.834-2.115.834-1.975.834-1.851.834-1.74.834-1.634.834-1.537.834-1.446.834-1.367.834-1.288.834-1.218.834-1.148.834-1.09.834-1.027.834-.971.834-.917.834-.87.834-.821.834-.774.834-.73.834-.685.834-.642.834-.604.834-.563.834-.521.834-.485.834-.44.834-.404.834-.363.834-.32.834-.278.834-.233.834-.189.834-.14.834-.086.834-.034.834.026.834.092.834.16.834.237.834.32.834.42.834.529.835.65.834.794.834.96.834 1.158.834 1.392.834 1.672.834 2.021.834 2.45.834 2.997.834 3.713.834 4.66.834 5.955.834 7.825.834 10.627.834 15.12.834 22.99.834 38.906M78.358-163.423l1.037 48.562 1.037 25.628 1.037 15.71 1.037 10.514 1.037 7.454 1.037 5.5 1.037 4.17 1.037 3.226 1.037 2.531 1.037 2.006 1.037 1.595 1.037 1.267 1.037 1 1.037.78 1.037.598 1.037.44 1.037.305 1.037.186 1.037.08 1.037-.015 1.037-.101 1.037-.181 1.037-.256 1.037-.323 1.037-.392 1.037-.454 1.037-.519 1.037-.578 1.037-.642 1.037-.704 1.037-.763 1.037-.83 1.037-.896 1.037-.964 1.037-1.039 1.037-1.113 1.037-1.192 1.037-1.278 1.037-1.374 1.037-1.47 1.036-1.578 1.037-1.698 1.037-1.826 1.037-1.968 1.037-2.125 1.037-2.297 1.037-2.49 1.037-2.718 1.037-2.967 1.037-3.252 1.037-3.574 1.037-3.958 1.037-4.39 1.037-4.91 1.037-5.522 1.037-6.248 1.037-7.15 1.037-8.25 1.037-9.617 1.037-11.354 1.037-13.641 1.037-16.643 1.037-20.835 1.037-26.797 1.037-35.718 1.037-50.081 1.037-75.214 1.037-125.799 1.037-253.408"/><path stroke="none" d="M56.945 31.867c0 .31-1.522.56-3.4.56s-3.4-.25-3.4-.56 1.522-.56 3.4-.56 3.4.25 3.4.56M101.784-31.867c0 .31-1.523.56-3.4.56s-3.4-.25-3.4-.56 1.522-.56 3.4-.56 3.4.25 3.4.56m-3.4 0"/><g stroke="none" font-size="7"><text x="-52.922" y="35.281" font-family="cmr7" transform="matrix(1 0 0 -1 110 72.43)">(</text><text x="-49.797" y="35.281" font-family="cmmi7" transform="matrix(1 0 0 -1 110 72.43)">®;</text><text x="-40.858" y="35.281" font-family="cmr7" transform="matrix(1 0 0 -1 110 72.43)">4)</text></g><g stroke="none" font-size="7"><text x="-52.922" y="35.281" font-family="cmr7" transform="matrix(1 0 0 -1 154.839 -5.369)">(</text><text x="-49.797" y="35.281" font-family="cmmi7" transform="matrix(1 0 0 -1 154.839 -5.369)">¯</text><text x="-44.903" y="35.281" font-family="cmmi7" transform="matrix(1 0 0 -1 154.839 -5.369)">;</text><text x="-41.163" y="35.281" font-family="cmsy7" transform="matrix(1 0 0 -1 154.839 -5.369)">¡</text><text x="-34.913" y="35.281" font-family="cmr7" transform="matrix(1 0 0 -1 154.839 -5.369)">4)</text></g><g stroke="none"><text x="-51.722" y="32.594" font-family="cmmi5" font-size="5" transform="matrix(1 0 0 -1 125.534 23.721)">¼</text><path d="M73.812-9.61h4.335v-.4h-4.335z"/><text x="-51.256" y="37.69" font-family="cmr5" font-size="5" transform="matrix(1 0 0 -1 125.534 23.721)">2</text></g><text x="-52.922" y="35.281" stroke="none" font-family="cmmi7" font-size="7" transform="matrix(1 0 0 -1 202.417 25.547)">¼</text></g></g></svg>
</figure>

## c) Valore di $x$ per cui $y$ è minimo

Nell'intervallo $0<x<\dfrac{\pi}{2}$ il rapporto $y$ assume il valore minimo per $x=\alpha=\arctan 2$. In gradi e primi sessagesimali:

$$\alpha=\arctan 2\approx 1{,}107\ \text{rad}=63{,}435^\circ=63^\circ+0{,}435\cdot 60'\approx 63^\circ\,26'.$$

## d) Area della regione

La curva è positiva su $\left(\dfrac{\pi}{4};\dfrac{\pi}{3}\right)$, quindi l'area vale

$$\text{Area}=\int_{\pi/4}^{\pi/3}\left(\tan x+\frac{4}{\tan x}\right)dx=\Big[-\ln|\cos x|+4\ln|\sin x|\Big]_{\pi/4}^{\pi/3}.$$

Nell'estremo superiore $x=\dfrac{\pi}{3}$ (con $\cos\dfrac{\pi}{3}=\dfrac{1}{2}$, $\sin\dfrac{\pi}{3}=\dfrac{\sqrt3}{2}$):

$$-\ln\frac{1}{2}+4\ln\frac{\sqrt3}{2}=\ln 2+2\ln 3-4\ln 2=2\ln 3-3\ln 2.$$

Nell'estremo inferiore $x=\dfrac{\pi}{4}$ (con $\cos\dfrac{\pi}{4}=\sin\dfrac{\pi}{4}=\dfrac{\sqrt2}{2}$):

$$-\ln\frac{\sqrt2}{2}+4\ln\frac{\sqrt2}{2}=3\ln\frac{\sqrt2}{2}=3\left(-\frac{1}{2}\ln 2\right)=-\frac{3}{2}\ln 2.$$

Pertanto

$$\text{Area}=\left(2\ln 3-3\ln 2\right)-\left(-\frac{3}{2}\ln 2\right)=2\ln 3-\frac{3}{2}\ln 2\approx 1{,}16\ u^2.$$

*Con la collaborazione di Angela Santamaria.*

*Fonte:* [📄 PDF p.121](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
