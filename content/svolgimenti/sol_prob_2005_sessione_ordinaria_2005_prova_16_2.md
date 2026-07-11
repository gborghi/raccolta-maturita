

**Problema:** [[Problemi/prob_2005_sessione_ordinaria_2005_prova_16_2|2005 Ordinaria — Prova — Problema 2]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Si consideri la funzione $f$ definita sull'intervallo $[0,+\infty)$ da

$$f(x)=\begin{cases}\dfrac{1}{2}x^2\left(3-2\ln x\right)+1 & \text{se } x>0\\[2mm] 1 & \text{se } x=0\end{cases}$$

e sia $C$ la sua curva rappresentativa nel riferimento $Oxy$.

Per $x>0$ conviene riscrivere $f(x)=\dfrac{3}{2}x^2-x^2\ln x+1$.

## a) Continuità e derivabilità in 0

Poiché $\lim_{x\to 0^+}x^2\ln x=0$, si ha

$$\lim_{x\to 0^+}f(x)=\lim_{x\to 0^+}\left(\frac{3}{2}x^2-x^2\ln x+1\right)=1=f(0),$$

quindi $f$ è **continua** in $0$.

Per la derivabilità si calcola il rapporto incrementale in $0$:

$$\lim_{x\to 0^+}\frac{f(x)-f(0)}{x}=\lim_{x\to 0^+}\frac{\frac{3}{2}x^2-x^2\ln x}{x}=\lim_{x\to 0^+}\left(\frac{3}{2}x-x\ln x\right)=0.$$

Dunque $f$ è **derivabile** in $0$ con $f'(0)=0$.

Per $x>0$ la derivata è

$$f'(x)=3x-\left(2x\ln x+x^2\cdot\frac{1}{x}\right)=3x-2x\ln x-x=2x\left(1-\ln x\right),$$

e infatti $\lim_{x\to 0^+}f'(x)=0$, coerentemente con $f'(0)=0$.

## b) Unicità della radice di $f(x)=0$

Da $f'(x)=2x(1-\ln x)$ con $x>0$ si ha $f'(x)=0\iff \ln x=1\iff x=e$; inoltre

$$f'(x)>0 \text{ per } 0<x<e,\qquad f'(x)<0 \text{ per } x>e.$$

Quindi $f$ è crescente su $(0,e)$ e decrescente su $(e,+\infty)$, con massimo assoluto

$$f(e)=\frac{1}{2}e^2(3-2)+1=\frac{e^2}{2}+1>0.$$

Su $[0,e]$ risulta $f(x)\ge f(0)=1>0$, perciò qui non vi sono zeri. Su $(e,+\infty)$ la funzione decresce e, poiché

$$\lim_{x\to +\infty}f(x)=\lim_{x\to +\infty}\left[\frac{1}{2}x^2(3-2\ln x)+1\right]=-\infty,$$

per il teorema degli zeri (funzione continua e strettamente decrescente da $\frac{e^2}{2}+1>0$ a $-\infty$) esiste **una e una sola** radice reale, situata a destra di $e$.

## c) Grafico e retta tangente in $x=1$

Nel punto di ascissa $x=1$:

$$f(1)=\frac{1}{2}(3-0)+1=\frac{5}{2},\qquad f'(1)=2(1-0)=2.$$

La retta tangente $r$ ha quindi equazione

$$y-\frac{5}{2}=2(x-1)\ \Longrightarrow\ r:\ y=2x+\frac{1}{2}.$$

Studiando la concavità, $f''(x)=2(1-\ln x)+2x\left(-\frac1x\right)=-2\ln x$: si ha $f''(x)>0$ per $0<x<1$ (concavità verso l'alto) e $f''(x)<0$ per $x>1$ (concavità verso il basso). Dunque $x=1$ è un **punto di flesso** e $r$ è la tangente inflessionale.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="237.076" height="298.488" viewBox="-72 -72 177.807 223.866"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 88.8H92.556"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M90.676 86.4c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-60.689" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(157.178 2.153)">x</text><path fill="none" d="M-60.69 151.396v-210.15"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.09-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.689" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -153.432)">y</text><path fill="none" d="M-32.236 86.524v4.552"/><text x="-60.689" y="88.8" stroke="none" font-family="cmr9" font-size="9" transform="translate(26.14 11.61)">1</text><path fill="none" d="M-3.784 86.524v4.552"/><text x="-60.689" y="88.8" stroke="none" font-family="cmr9" font-size="9" transform="translate(54.593 11.61)">2</text><path fill="none" d="M24.67 86.524v4.552"/><text x="-60.689" y="88.8" stroke="none" font-family="cmr9" font-size="9" transform="translate(83.046 11.61)">3</text><path fill="none" d="M53.122 86.524v4.552"/><text x="-60.689" y="88.8" stroke="none" font-family="cmr9" font-size="9" transform="translate(111.498 11.61)">4</text><path fill="none" d="M81.575 86.524v4.552"/><text x="-60.689" y="88.8" stroke="none" font-family="cmr9" font-size="9" transform="translate(139.951 11.61)">5</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-58.413 59.616s1.102-.704 1.525-1.041a22 22 0 0 0 1.525-1.39 36 36 0 0 0 1.524-1.66 52 52 0 0 0 1.525-1.89 73 73 0 0 0 1.525-2.091 99 99 0 0 0 1.525-2.263c.423-.649 1.101-1.725 1.524-2.413s1.102-1.82 1.525-2.54c.423-.722 1.102-1.905 1.525-2.654a283 283 0 0 0 3.05-5.572 460 460 0 0 0 3.049-5.837 828 828 0 0 0 3.05-6.002c.423-.84 1.101-2.192 1.524-3.036l1.525-3.05 1.525-3.047c.423-.845 1.101-2.2 1.524-3.042s1.102-2.19 1.525-3.026a871.877 871.877 0 0 1 3.05-5.975 577.147 577.147 0 0 1 3.05-5.828c.422-.795 1.1-2.06 1.524-2.84s1.102-2.02 1.525-2.784 1.101-1.975 1.524-2.72 1.102-1.924 1.525-2.65c.423-.725 1.102-1.875 1.525-2.58.423-.703 1.102-1.813 1.525-2.494.423-.68 1.101-1.756 1.524-2.412s1.102-1.686 1.525-2.318c.423-.63 1.102-1.627 1.525-2.231s1.102-1.547 1.525-2.122c.423-.576 1.101-1.481 1.524-2.024a99 99 0 0 1 3.05-3.682 76 76 0 0 1 1.525-1.678 65 65 0 0 1 1.524-1.553 55 55 0 0 1 1.525-1.427 48 48 0 0 1 1.525-1.294 41 41 0 0 1 1.525-1.165 35 35 0 0 1 1.524-1.02c.424-.265 1.102-.66 1.525-.884a26 26 0 0 1 1.525-.734 23 23 0 0 1 1.525-.585c.423-.142 1.101-.34 1.524-.439a18 18 0 0 1 1.525-.277 18 18 0 0 1 1.525-.119c.423-.01 1.102.009 1.525.043.423.035 1.101.123 1.524.205s1.102.254 1.525.382a19 19 0 0 1 1.525.545 22 22 0 0 1 1.525.738c.423.226 1.101.619 1.524.894a28 28 0 0 1 1.525 1.089c.423.326 1.102.883 1.525 1.26.423.378 1.102 1.03 1.525 1.46s1.101 1.155 1.524 1.638a56 56 0 0 1 1.525 1.845 64 64 0 0 1 1.525 2.02 89.813 89.813 0 0 1 3.05 4.65c.423.702 1.101 1.893 1.524 2.652s1.102 2.004 1.525 2.82c.423.817 1.102 2.194 1.525 3.066s1.101 2.292 1.524 3.221a192 192 0 0 1 3.05 7.14 272 272 0 0 1 3.05 8.007 347 347 0 0 1 1.524 4.367 361 361 0 0 1 1.525 4.546 439 439 0 0 1 1.525 4.847 565 565 0 0 1 1.524 5.017 546 546 0 0 1 1.525 5.249c.423 1.49 1.102 3.933 1.525 5.487a702 702 0 0 1 1.525 5.713 762 762 0 0 1 1.524 5.952c.424 1.685 1.102 4.44 1.525 6.192a921 921 0 0 1 1.525 6.44c.423 1.822 1.102 4.803 1.525 6.688.423 1.886 1.101 4.95 1.524 6.903s1.102 5.141 1.525 7.167 1.102 5.34 1.525 7.435c.423 2.096 1.102 5.503 1.525 7.665s1.101 5.69 1.524 7.923a1717 1717 0 0 1 1.525 8.171 3434 3434 0 0 1 1.525 8.45"/><path fill="none" stroke="red" d="M-60.69 74.574.485-47.773"/><path stroke="none" d="M-30.636 17.668a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><g stroke="none"><text x="-60.689" y="88.8" font-family="cmmi9" font-size="9" transform="translate(31.986 -59.349)">P</text><text x="-51.957" y="80.95" font-family="cmex10" font-size="10" transform="translate(31.986 -59.349)">¡</text><text x="-47.373" y="88.8" font-family="cmr9" font-size="9" transform="translate(31.986 -59.349)">1</text><text x="-42.749" y="88.8" font-family="cmmi9" font-size="9" transform="translate(31.986 -59.349)">;</text><text x="-37.437" y="85.113" font-family="cmr6" font-size="6" transform="translate(31.986 -59.349)">5</text><path d="M-5.451 27.001h3.667v.4h-3.667z"/><text x="-37.437" y="91.854" font-family="cmr6" font-size="6" transform="translate(31.986 -59.349)">2</text><text x="-32.571" y="80.95" font-family="cmex10" font-size="10" transform="translate(31.986 -59.349)">¢</text></g><path stroke="none" d="M18.246-44.757a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><g stroke="none"><text x="-60.689" y="77.95" font-family="cmex10" font-size="10" transform="translate(54.273 -143.84)">³</text><text x="-54.717" y="88.8" font-family="cmmi9" font-size="9" transform="translate(54.273 -143.84)">e;</text><text x="-45.105" y="85.113" font-family="cmmi6" font-size="6" transform="translate(54.273 -143.84)">e</text><text x="-41.571" y="82.595" font-family="cmr5" font-size="5" transform="translate(54.273 -143.84)">2</text><path d="M9.168-57.49h7.437v.4H9.168z"/><text x="-43.22" y="91.854" font-family="cmr6" font-size="6" transform="translate(54.273 -143.84)">2</text><text x="-34.413" y="88.8" font-family="cmr9" font-size="9" transform="translate(54.273 -143.84)">+</text><text x="-25.163" y="88.8" font-family="cmr9" font-size="9" transform="translate(54.273 -143.84)">1</text><text x="-20.538" y="77.95" font-family="cmex10" font-size="10" transform="translate(54.273 -143.84)">´</text></g><path stroke="none" d="M-59.09 60.347a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-60.689" y="88.8" stroke="none" font-family="cmr9" font-size="9" transform="translate(-8.158 -25.553)">1</text><g fill="#00f" stroke="#00f"><text x="-60.689" y="88.8" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.344 -99.013)">C</text></g><g fill="red" stroke="red"><text x="-60.689" y="88.8" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.47 -131.575)">r</text></g></g></svg>
</figure>

## d) Area $A_n$

Poiché su $(0,1)$ la curva è concava verso l'alto, essa sta al di sopra della tangente $r$; il flesso in $x=1$ garantisce inoltre il contatto in $x=1$. Sull'intervallo $\left[\frac{1}{n},1\right]$ (con $\frac1n<1$) si ha quindi $f(x)\ge r(x)$ e

$$A_n=\int_{1/n}^{1}\big[f(x)-r(x)\big]\,dx=\int_{1/n}^{1}\left(\frac{3}{2}x^2-x^2\ln x-2x+\frac{1}{2}\right)dx.$$

Usando $\displaystyle\int x^2\ln x\,dx=\frac{x^3}{3}\ln x-\frac{x^3}{9}$, una primitiva è

$$G(x)=\frac{11}{18}x^3-\frac{x^3}{3}\ln x-x^2+\frac{x}{2}.$$

Si ottiene $G(1)=\dfrac{11}{18}-1+\dfrac{1}{2}=\dfrac{1}{9}$ e

$$G\!\left(\frac{1}{n}\right)=\frac{11}{18n^3}+\frac{\ln n}{3n^3}-\frac{1}{n^2}+\frac{1}{2n},$$

da cui

$$A_n=G(1)-G\!\left(\frac{1}{n}\right)=\frac{1}{9}+\frac{1}{n^2}-\frac{1}{2n}-\frac{11}{18n^3}-\frac{\ln n}{3n^3}.$$

## e) Limite di $A_n$

Al tendere di $n\to+\infty$ tutti i termini contenenti $\dfrac{1}{n}$, $\dfrac{1}{n^2}$, $\dfrac{1}{n^3}$ e $\dfrac{\ln n}{n^3}$ tendono a $0$, perciò

$$\lim_{n\to+\infty}A_n=\frac{1}{9}.$$

**Interpretazione:** poiché l'estremo sinistro $x=\frac{1}{n}\to 0^+$, il limite rappresenta l'area della regione compresa tra la curva $C$ e la tangente $r$ sull'intervallo $(0,1]$. Tale regione, pur estendendosi fino all'asse $y$, ha **area finita** pari a $\dfrac{1}{9}$.

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
