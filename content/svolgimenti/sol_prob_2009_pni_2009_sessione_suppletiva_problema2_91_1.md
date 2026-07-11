

**Problema:** [[Problemi/prob_2009_pni_2009_sessione_suppletiva_problema2_91_1|2009 PNI Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_pni_2009_sessione_suppletiva_problema2_91|2009 PNI Suppletiva — Problema 2]]

Si considera la funzione
$$f(x)=2+\frac{a}{x+1}+\frac{b}{(x+1)^2},$$
e si chiede di determinare le costanti $a$ e $b$ in modo che
$$\int_0^4 f(x)\,dx=12-6\ln 5,$$
per poi studiare la funzione ottenuta, tracciarne il grafico $\gamma$, condurre la tangente in $x=0$ e discutere le intersezioni con la retta $y=k$.

## a) Determinazione delle costanti

Una primitiva della funzione è
$$\int\left(2+\frac{a}{x+1}+\frac{b}{(x+1)^2}\right)dx=2x+a\ln(x+1)-\frac{b}{x+1}+C.$$

Calcoliamo l'integrale definito richiesto:
$$\int_0^4 f(x)\,dx=\left[\,2x+a\ln(x+1)-\frac{b}{x+1}\,\right]_0^4=\left(8+a\ln 5-\frac{b}{5}\right)-\left(0+a\ln 1-b\right)=8+a\ln 5+\frac{4b}{5}.$$

Imponendo che questa quantità sia uguale a $12-6\ln 5$ e uguagliando separatamente la parte logaritmica e quella razionale (che sono indipendenti), otteniamo
$$a=-6,\qquad 8+\frac{4b}{5}=12\ \Rightarrow\ b=5.$$

La funzione cercata è dunque
$$f(x)=2-\frac{6}{x+1}+\frac{5}{(x+1)^2}=\frac{2(x+1)^2-6(x+1)+5}{(x+1)^2}=\frac{2x^2-2x+1}{(x+1)^2}.$$

## b) Studio della funzione

**Dominio.** La funzione è definita per $x\neq -1$, cioè in $(-\infty,-1)\cup(-1,+\infty)$.

**Simmetrie.** Poiché il dominio non è simmetrico rispetto all'origine, la funzione non è né pari né dispari.

**Intersezioni con gli assi.** Per $x=0$ si ha $f(0)=1$, quindi il punto $(0,1)$. Ponendo $f(x)=0$ si ottiene $2x^2-2x+1=0$, con discriminante $\Delta=4-8=-4<0$: non vi sono intersezioni con l'asse $x$.

**Segno.** Il numeratore $2x^2-2x+1$ ha discriminante negativo e coefficiente direttore positivo, quindi è sempre positivo; il denominatore $(x+1)^2$ è positivo. Ne segue $f(x)>0$ per ogni $x$ del dominio.

**Limiti e asintoti.**
$$\lim_{x\to\pm\infty}\frac{2x^2-2x+1}{(x+1)^2}=2\quad\Rightarrow\quad y=2 \text{ asintoto orizzontale;}$$
$$\lim_{x\to -1}\frac{2x^2-2x+1}{(x+1)^2}=+\infty\quad\Rightarrow\quad x=-1 \text{ asintoto verticale.}$$

**Derivata prima.**
$$f'(x)=\frac{(4x-2)(x+1)^2-(2x^2-2x+1)\cdot 2(x+1)}{(x+1)^4}=\frac{6x-4}{(x+1)^3}.$$
Studiando il segno di $f'$ (numeratore positivo per $x>\tfrac{2}{3}$, denominatore positivo per $x>-1$) si trova che $f$ è crescente in $(-\infty,-1)$ e in $\left(\tfrac{2}{3},+\infty\right)$, decrescente in $\left(-1,\tfrac{2}{3}\right)$. In $x=\tfrac{2}{3}$ vi è un minimo relativo (e assoluto), con
$$f\!\left(\tfrac{2}{3}\right)=\frac{1}{5}.$$

**Derivata seconda.**
$$f''(x)=\frac{6(x+1)^3-(6x-4)\cdot 3(x+1)^2}{(x+1)^6}=\frac{6(3-2x)}{(x+1)^4}.$$
Poiché $(x+1)^4>0$, il segno dipende da $3-2x$: la concavità è rivolta verso l'alto per $x<\tfrac{3}{2}$ e verso il basso per $x>\tfrac{3}{2}$. Vi è un flesso in $x=\tfrac{3}{2}$, con ordinata
$$f\!\left(\tfrac{3}{2}\right)=\frac{2}{5}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="412.757" height="212.828" viewBox="-72 -72 309.568 159.621"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 82.514 77.677)"><clipPath id="pgf80ec1c7640b25c155f7e9f6deae1aecacp1"><path d="M-154.784-9.674v159.62h309.568V-9.673Zm309.568 159.62"/></clipPath><g clip-path="url(#pgf80ec1c7640b25c155f7e9f6deae1aecacp1)"><path fill="none" d="M-152.366 0h304.332"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M150.086 2.4c.38-1.44 1.226-2.12 2.08-2.4-.854-.28-1.7-.96-2.08-2.4"/><text x="82.514" y="77.677" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 73.385 75.524)">x</text><path fill="none" d="M0-9.674V144.71"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 142.83c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="82.514" y="77.677" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -85.145 228.264)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-24.185-9.674V145.11"/><g stroke="none" font-size="10"><text x="82.514" y="77.677" font-family="cmmi10" transform="matrix(1 0 0 -1 -103.166 227.153)">x</text><text x="91.007" y="77.677" font-family="cmr10" transform="matrix(1 0 0 -1 -103.166 227.153)">=</text><text x="101.562" y="77.677" font-family="cmsy10" transform="matrix(1 0 0 -1 -103.166 227.153)">¡</text><text x="109.34" y="77.677" font-family="cmr10" transform="matrix(1 0 0 -1 -103.166 227.153)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-152.366 48.37h304.732"/><g stroke="none" font-size="10"><text x="82.514" y="77.677" font-family="cmmi10" transform="matrix(1 0 0 -1 73.385 131.524)">y</text><text x="90.553" y="77.677" font-family="cmr10" transform="matrix(1 0 0 -1 73.385 131.524)">=</text><text x="101.109" y="77.677" font-family="cmr10" transform="matrix(1 0 0 -1 73.385 131.524)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-145.11 82.229.849.274.849.278.848.283.85.287.848.292.849.297.848.302.85.306.848.312.849.318.849.322.848.329.85.334.848.34.849.346.848.353.85.359.848.365.849.372.849.38.848.385.85.394.848.4.849.41.848.416.85.425.848.434.849.442.849.45.848.46.85.47.848.48.849.49.848.5.85.51.848.522.849.533.849.545.848.557.85.57.848.583.849.597.848.61.85.625.848.639.849.655.849.671.848.688.85.705.848.723.849.74.848.761.85.781.848.801.849.823.849.846.848.867.85.894.848.918.849.944.848.972.85 1 .848 1.031.849 1.062.849 1.095.848 1.128.85 1.164.848 1.202.849 1.241.848 1.282.85 1.326.848 1.37.849 1.418.849 1.467.848 1.521.85 1.576.848 1.634.849 1.696.848 1.76.85 1.83.848 1.902.849 1.98.849 2.059.848 2.146.85 2.239.848 2.336.849 2.441.848 2.551.85 2.669.848 2.796.849 2.93.849 3.075.848 3.23.85 3.396.848 3.577.849 3.77.848 3.978.85 4.205.848 4.45.849 4.714.849 5.005.848 5.318.85 5.665.848 6.043.849 6.458.848 6.912.85 7.42.848 7.974.849 8.595.849 9.287.848 10.059.85 10.926.848 11.907.849 13 .848 14.254.85 15.728.848 17.338.849 19.265.849 21.503.848 24.064.85 27.118.848 30.737.849 35.021.848 40.317.85 46.702.848 54.648.849 64.526.849 77.156.848 93.429.85 114.855.848 143.843.849 183.837.848 240.89.85 325.322.848 456.67.849 671.93.849 1054.12.848 1801.32.85 3510.885M-20.074 3381.373l1.189-1476.175 1.188-717.33 1.188-396.311 1.189-238.962 1.188-153.433 1.188-103.238 1.188-72.053 1.189-51.796L-9.38 134l1.188-28.564L-7.002 83.7l1.188-16.78 1.188-13.089 1.188-10.296 1.189-8.158 1.188-6.5 1.188-5.194 1.189-4.167 1.188-3.342 1.188-2.68L4.88 11.35 6.07 9.642l1.188-1.344 1.188-1.052 1.189-.806 1.188-.607L12.01 5.4l1.188-.296 1.189-.179 1.188-.079 1.188.002 1.189.072 1.188.13 1.188.176 1.189.218 1.188.252 1.188.279 1.188.303 1.189.32 1.188.337 1.188.349 1.189.358 1.188.367 1.188.371 1.188.376 1.189.379 1.188.38 1.188.38 1.189.38 1.188.377 1.188.378 1.188.374 1.189.371 1.188.369 1.188.364 1.189.36 1.188.358 1.188.352 1.188.348 1.189.344 1.188.339 1.188.334 1.189.33 1.188.325 1.188.32 1.188.316 1.189.31 1.188.307 1.188.301 1.189.297 1.188.293 1.188.287 1.188.284 1.189.278 1.188.275 1.188.27 1.189.266 1.188.262 1.188.257 1.189.254 1.188.25 1.188.246 1.188.242 1.189.238 1.188.234 1.188.231 1.189.228 1.188.223 1.188.22 1.188.218 1.189.214 1.188.21 1.188.208 1.189.204 1.188.201 1.188.198 1.188.195 1.189.193 1.188.19 1.188.186 1.189.185 1.188.18 1.188.18 1.188.176 1.189.174 1.188.171 1.188.17 1.189.166 1.188.164 1.188.162 1.188.16 1.189.157 1.188.156 1.188.153 1.189.151 1.188.15 1.188.146 1.188.146 1.189.143 1.188.141 1.188.14 1.189.138 1.188.136 1.188.134 1.189.132 1.188.131 1.188.13 1.188.127 1.189.126 1.188.125 1.188.123 1.189.121 1.188.12 1.188.119 1.188.117 1.189.115 1.188.114 1.188.113 1.189.112"/><path stroke="none" d="M1.36 24.185a1.36 1.36 0 1 1-2.72 0 1.36 1.36 0 0 1 2.72 0m-1.36 0"/><g stroke="none" font-size="10"><text x="82.514" y="77.677" font-family="cmr10" transform="matrix(1 0 0 -1 -78.98 107.895)">(0</text><text x="91.403" y="77.677" font-family="cmmi10" transform="matrix(1 0 0 -1 -78.98 107.895)">;</text><text x="95.847" y="77.677" font-family="cmr10" transform="matrix(1 0 0 -1 -78.98 107.895)">1)</text></g><path stroke="none" d="M17.492 4.837a1.36 1.36 0 1 1-2.72 0 1.36 1.36 0 0 1 2.72 0m-1.36 0"/><g stroke="none"><text x="82.514" y="69.577" font-family="cmex10" font-size="10" transform="matrix(1 0 0 -1 -62.85 70.48)">¡</text><text x="88.297" y="73.74" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -62.85 70.48)">2</text><path d="M25.448-4.496h3.986v-.4h-3.986z"/><text x="88.297" y="81.125" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -62.85 70.48)">3</text><text x="93.483" y="77.677" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -62.85 70.48)">;</text><text x="99.128" y="73.74" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -62.85 70.48)">1</text><path d="M36.279-4.496h3.986v-.4h-3.986z"/><text x="99.128" y="81.125" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -62.85 70.48)">5</text><text x="104.314" y="69.577" font-family="cmex10" font-size="10" transform="matrix(1 0 0 -1 -62.85 70.48)">¢</text></g><path stroke="none" d="M37.638 9.674a1.36 1.36 0 1 1-2.72 0 1.36 1.36 0 0 1 2.72 0m-1.36 0"/><text x="82.514" y="77.677" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -42.703 90.884)">F</text></g></g></svg>
</figure>

## c) Tangente e area del triangolo

Nel punto di ascissa $x=0$ si ha $B=(0,1)$ e $f'(0)=\dfrac{-4}{1}=-4$; la tangente ha quindi equazione
$$y-1=-4(x-0)\quad\Rightarrow\quad y=-4x+1.$$

Cerchiamo le intersezioni con i due asintoti:
- con l'asintoto verticale $x=-1$: $y=-4(-1)+1=5$, cioè $C=(-1,5)$;
- con l'asintoto orizzontale $y=2$: $-4x+1=2\Rightarrow x=-\tfrac{1}{4}$, cioè $D=\left(-\tfrac{1}{4},2\right)$;
- i due asintoti si incontrano in $E=(-1,2)$.

Il triangolo $CDE$ è rettangolo in $E$ (gli asintoti sono perpendicolari), con cateti
$$\overline{EC}=5-2=3,\qquad \overline{ED}=-\tfrac{1}{4}-(-1)=\tfrac{3}{4}.$$
La sua area è
$$A=\frac{1}{2}\cdot\overline{EC}\cdot\overline{ED}=\frac{1}{2}\cdot 3\cdot\frac{3}{4}=\frac{9}{8}\ \text{u}^2.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="190.543" height="244.852" viewBox="-72 -72 142.907 183.639"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-61.4 86.984H39.777"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M37.897 84.584c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-3.357" y="86.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(47.066 2.153)">x</text><path fill="none" d="M-3.357 111.169V-57.726"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-5.757-55.846c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.357" y="86.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -150.587)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-27.542 111.169V-58.126"/><g stroke="none" font-size="10"><text x="-3.357" y="86.984" font-family="cmmi10" transform="translate(-20.652 -149.476)">x</text><text x="5.136" y="86.984" font-family="cmr10" transform="translate(-20.652 -149.476)">=</text><text x="15.692" y="86.984" font-family="cmsy10" transform="translate(-20.652 -149.476)">¡</text><text x="23.47" y="86.984" font-family="cmr10" transform="translate(-20.652 -149.476)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-58.982 38.614h99.159"/><g stroke="none" font-size="10"><text x="-3.357" y="86.984" font-family="cmmi10" transform="translate(47.066 -46.12)">y</text><text x="4.683" y="86.984" font-family="cmr10" transform="translate(47.066 -46.12)">=</text><text x="15.238" y="86.984" font-family="cmr10" transform="translate(47.066 -46.12)">2</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-28.75-38.779 36.277 145.11"/><g fill="red" stroke="red"><text x="-3.357" y="86.984" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-36.874 -122.687)">t</text></g><path fill="none" stroke-width=".8" d="M-27.542-33.941v72.555h18.14"/><path stroke="none" d="M-26.182-33.941a1.36 1.36 0 1 0-2.72 0 1.36 1.36 0 0 0 2.72 0m-1.36 0"/><g stroke="none" font-size="10"><text x="-3.357" y="86.984" font-family="cmmi10" transform="translate(-65.58 -118.425)">C</text><text x="4.506" y="86.984" font-family="cmr10" transform="translate(-65.58 -118.425)">(</text><text x="8.395" y="86.984" font-family="cmsy10" transform="translate(-65.58 -118.425)">¡</text><text x="16.173" y="86.984" font-family="cmr10" transform="translate(-65.58 -118.425)">1</text><text x="21.173" y="86.984" font-family="cmmi10" transform="translate(-65.58 -118.425)">;</text><text x="25.617" y="86.984" font-family="cmr10" transform="translate(-65.58 -118.425)">5)</text></g><path stroke="none" d="M-8.043 38.614a1.36 1.36 0 1 0-2.72 0 1.36 1.36 0 0 0 2.72 0m-1.36 0"/><g stroke="none"><text x="-3.357" y="86.984" font-family="cmmi10" font-size="10" transform="translate(-2.513 -55.403)">D</text><text x="6.867" y="78.884" font-family="cmex10" font-size="10" transform="translate(-2.513 -55.403)">¡</text><text x="11.45" y="86.984" font-family="cmsy10" font-size="10" transform="translate(-2.513 -55.403)">¡</text><text x="20.428" y="83.046" font-family="cmr7" font-size="7" transform="translate(-2.513 -55.403)">1</text><path d="M17.915 28.881H21.9v.4h-3.986z"/><text x="20.428" y="90.432" font-family="cmr7" font-size="7" transform="translate(-2.513 -55.403)">4</text><text x="25.614" y="86.984" font-family="cmmi10" font-size="10" transform="translate(-2.513 -55.403)">;</text><text x="30.059" y="86.984" font-family="cmr10" font-size="10" transform="translate(-2.513 -55.403)">2</text><text x="35.059" y="78.884" font-family="cmex10" font-size="10" transform="translate(-2.513 -55.403)">¢</text></g><path stroke="none" d="M-26.182 38.614a1.36 1.36 0 1 0-2.72 0 1.36 1.36 0 0 0 2.72 0m-1.36 0"/><text x="-3.357" y="86.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-35.676 -38.004)">E</text><path stroke="none" d="M-1.997 62.799a1.36 1.36 0 1 0-2.72 0 1.36 1.36 0 0 0 2.72 0m-1.36 0"/><g stroke="none" font-size="10"><text x="-3.357" y="86.984" font-family="cmmi10" transform="translate(3.533 -30.218)">B</text><text x="4.73" y="86.984" font-family="cmr10" transform="translate(3.533 -30.218)">(0</text><text x="13.619" y="86.984" font-family="cmmi10" transform="translate(3.533 -30.218)">;</text><text x="18.064" y="86.984" font-family="cmr10" transform="translate(3.533 -30.218)">1)</text></g></g></svg>
</figure>

## d) Intersezioni con la retta $y=k$

Imponendo $f(x)=k$:
$$\frac{2x^2-2x+1}{(x+1)^2}=k\ \Rightarrow\ 2x^2-2x+1=k(x^2+2x+1)\ \Rightarrow\ (2-k)x^2-2(1+k)x+(1-k)=0.$$
Perché vi siano due intersezioni deve essere $k\neq 2$. Somma e prodotto delle ascisse $x_1,x_2$ sono
$$x_1+x_2=\frac{2(1+k)}{2-k},\qquad x_1\cdot x_2=\frac{1-k}{2-k}.$$

Calcoliamo la quantità richiesta:
$$S=\frac{1}{x_1+1}+\frac{1}{x_2+1}=\frac{(x_1+1)+(x_2+1)}{(x_1+1)(x_2+1)}=\frac{x_1+x_2+2}{x_1 x_2+x_1+x_2+1}.$$

Numeratore e denominatore valgono
$$x_1+x_2+2=\frac{2(1+k)}{2-k}+2=\frac{2+2k+4-2k}{2-k}=\frac{6}{2-k},$$
$$x_1 x_2+x_1+x_2+1=\frac{(1-k)+2(1+k)+(2-k)}{2-k}=\frac{1-k+2+2k+2-k}{2-k}=\frac{5}{2-k}.$$

Pertanto
$$S=\frac{\dfrac{6}{2-k}}{\dfrac{5}{2-k}}=\frac{6}{5},$$
valore indipendente da $k$. (Verifica con $k=1$: l'equazione dà $x=0$ e $x=4$, quindi $S=1+\tfrac{1}{5}=\tfrac{6}{5}$.)

*Fonte:* [📄 PDF p.91](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
