

**Problema:** [[Problemi/prob_2003_scuole_italiane_allestero_americhe_2003_sessione_o_problema2_47_1|2003 Americhe Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_americhe_2003_sessione_o_problema2_47|2003 Americhe Ordinaria — Problema 2]]

Riferito il piano a un sistema di assi cartesiani ortogonali $Oxy$, si considerano le iperboli di equazione $xy=k$ e una parabola a esse collegata.

## a)

Tra le iperboli $xy=k$ cerchiamo quella, $j$, passante per $A(1;3)$. Imponendo il passaggio per $A$ si ottiene $1\cdot 3=k$, cioè $k=3$; dunque

$$j:\ xy=3\qquad\Longleftrightarrow\qquad y=\frac{3}{x}.$$

Il punto $B$ ha ascissa $-3$: sostituendo, $-3\cdot y=3\Rightarrow y=-1$, quindi

$$B=(-3;-1).$$

## b)

Cerchiamo $y=ax^2+bx+c$ tale che la parabola $p$ sia tangente a $j$ in $A$ e passi per $B$.

Passaggio per $A(1;3)$ e per $B(-3;-1)$:

$$\begin{cases} a+b+c=3\\ 9a-3b+c=-1 \end{cases}$$

Sottraendo la prima dalla seconda: $8a-4b=-4$, cioè $b=2a+1$; dalla prima $c=3-a-b=2-3a$. La parabola ha quindi la forma

$$y=ax^2+(2a+1)x+(2-3a).$$

La tangenza in $A$ richiede che parabola e iperbole abbiano la stessa retta tangente in $A$, cioè uguali derivate in $x_A=1$. Posto $f(x)=\dfrac{3}{x}$ e $g(x)=ax^2+(2a+1)x+(2-3a)$:

$$f'(x)=-\frac{3}{x^2},\quad f'(1)=-3;\qquad g'(x)=2ax+2a+1,\quad g'(1)=4a+1.$$

Imponendo $f'(1)=g'(1)$: $\;4a+1=-3\Rightarrow a=-1$, da cui $b=-1$ e $c=5$. Quindi

$$p:\ y=-x^2-x+5.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="326.084" height="325.042" viewBox="-72 -72 244.563 243.782"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-45.147 102.172h204.459"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M157.432 99.772c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="57.282" y="102.172" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.962 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M57.282 171.312V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M54.883-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="57.282" y="102.172" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -166.803)">y</text></g><path fill="none" stroke="red" stroke-width=".8" d="M70.086-51.472 71.22-38.98l1.135 10.627 1.134 9.137 1.134 7.945 1.135 6.962 1.134 6.163 1.134 5.486 1.135 4.919 1.134 4.433 1.134 4.018 1.134 3.65 1.135 3.342 1.134 3.067 1.134 2.822 1.135 2.61 1.134 2.417 1.134 2.246 1.135 2.095 1.134 1.956 1.134 1.828 1.135 1.716 1.134 1.616 1.134 1.518 1.135 1.432 1.134 1.355 1.134 1.285 1.134 1.211 1.135 1.155 1.134 1.093 1.134 1.045 1.135.994 1.134.947 1.134.907 1.135.863 1.134.827 1.134.794 1.134.758 1.135.73 1.134.698 1.134.672 1.135.647 1.134.623 1.134.599 1.135.577 1.134.557 1.134.538 1.135.52 1.134.5 1.134.487 1.134.469 1.135.454 1.134.44 1.134.427 1.135.413 1.134.4 1.134.389 1.135.377 1.134.366 1.134.358 1.135.345 1.134.336 1.134.327 1.134.32 1.135.31 1.134.302 1.134.294 1.135.286 1.134.28 1.134.271 1.135.267 1.134.259 1.134.252 1.135.248 1.134.242 1.134.235 1.134.23 1.135.225 1.134.22 1.134.215M-45.147 121.377l.908.172.907.175.907.178.907.18.908.187.907.187.907.19.908.196.907.2.907.202.907.207.908.21.907.216.907.219.908.224.907.23.907.232.908.238.907.243.907.25.907.254.908.259.907.265.907.271.908.278.907.284.907.29.907.298.908.304.907.312.907.319.908.327.907.337.907.343.907.352.908.363.907.37.907.383.908.391.907.403.907.414.907.425.908.437.907.45.907.464.908.478.907.492.907.506.908.523.907.54.907.558.907.573.908.595.907.614.907.637.908.659.907.68.907.705.907.735.908.76.907.79.907.821.908.85.907.891.907.928.907.965.908 1.006.907 1.055.907 1.099.908 1.152.907 1.206.907 1.263.907 1.331.908 1.398.907 1.47.907 1.55.908 1.641.907 1.729.907 1.83"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-27.222 168.495 1.815-10.035 1.815-9.778 1.815-9.52 1.815-9.264 1.815-9.006 1.815-8.749 1.815-8.491 1.815-8.235 1.815-7.977 1.815-7.72 1.815-7.462 1.815-7.205 1.815-6.948 1.815-6.69L.003 44.98l1.815-6.176 1.815-5.918 1.815-5.662 1.815-5.404 1.815-5.147 1.815-4.89 1.815-4.632 1.815-4.375 1.815-4.118 1.815-3.86 1.815-3.603 1.815-3.346 1.815-3.089 1.814-2.832 1.815-2.573 1.815-2.317 1.815-2.06 1.815-1.802 1.815-1.545 1.815-1.288 1.815-1.03 1.815-.773 1.815-.516 1.815-.259 1.815-.001 1.815.256 1.815.513 1.815.77 1.815 1.028 1.815 1.286 1.815 1.542 1.815 1.8 1.815 2.057 1.815 2.314 1.815 2.571 1.815 2.83 1.815 3.085 1.815 3.344 1.815 3.6 1.815 3.858 1.815 4.115 1.815 4.373 1.815 4.63 1.815 4.886 1.815 5.145 1.814 5.401 1.815 5.659 1.815 5.916 1.815 6.174 1.815 6.43 1.815 6.688 1.815 6.946 1.815 7.202 1.815 7.46 1.815 7.717 1.815 7.974 1.815 8.232 1.815 8.489 1.815 8.746 1.815 9.004 1.815 9.26 1.815 9.518 1.815 9.776 1.815 10.032"/><path fill="none" stroke="green" d="m-34.904 143.144 174.13-174.13"/><g fill="green" stroke="green"><text x="57.282" y="102.172" fill="green" stroke="none" font-family="cmmi10" font-size="10" transform="translate(61.346 -122.059)">AB</text></g><g fill="red" stroke="red"><text x="57.282" y="102.172" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(87.28 -33.525)">j</text></g><g fill="#00f" stroke="#00f"><text x="57.282" y="102.172" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-79.338 -60.277)">p</text></g><path stroke="none" d="M84.69 25.35a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="10"><text x="57.282" y="102.172" font-family="cmmi10" transform="translate(29.14 -82.855)">A</text><text x="64.783" y="102.172" font-family="cmr10" transform="translate(29.14 -82.855)">(1;</text><text x="78.116" y="102.172" font-family="cmr10" transform="translate(29.14 -82.855)">3)</text></g><path stroke="none" d="M-17.74 127.78a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="10"><text x="57.282" y="102.172" font-family="cmmi10" transform="translate(-126.22 36.64)">B</text><text x="65.369" y="102.172" font-family="cmr10" transform="translate(-126.22 36.64)">(</text><text x="69.258" y="102.172" font-family="cmsy10" transform="translate(-126.22 36.64)">¡</text><text x="77.036" y="102.172" font-family="cmr10" transform="translate(-126.22 36.64)">3;</text><text x="86.48" y="102.172" font-family="cmsy10" transform="translate(-126.22 36.64)">¡</text><text x="94.258" y="102.172" font-family="cmr10" transform="translate(-126.22 36.64)">1)</text></g><path stroke="none" d="M33.475-25.865a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="10"><text x="57.282" y="102.172" font-family="cmmi10" transform="translate(-44.512 -134.07)">P</text><text x="65.092" y="102.172" font-family="cmr10" transform="translate(-44.512 -134.07)">(</text><text x="68.98" y="102.172" font-family="cmsy10" transform="translate(-44.512 -134.07)">¡</text><text x="76.758" y="102.172" font-family="cmr10" transform="translate(-44.512 -134.07)">1;</text><text x="86.203" y="102.172" font-family="cmr10" transform="translate(-44.512 -134.07)">5)</text></g></g></svg>
</figure>

## c)

Cerchiamo il punto dell'arco $AB$ di $p$ di massima distanza dalla retta $AB$.

La retta $AB$, con $A(1;3)$ e $B(-3;-1)$, ha coefficiente angolare $\dfrac{-1-3}{-3-1}=1$, quindi

$$AB:\ y=x+2.$$

Il punto $P$ dell'arco a massima distanza dalla retta è il punto in cui la tangente a $p$ è parallela ad $AB$, cioè dove $g'(x)=1$:

$$-2x-1=1\ \Rightarrow\ x=-1,\qquad y=g(-1)=-1+1+5=5.$$

Dunque

$$P=(-1;5).$$

## d)

Sia $R$ la regione finita delimitata dall'iperbole $j$, dalla parabola $p$, dall'asse $x$ e dalla retta $x=3$; calcoliamo il volume del solido ottenuto ruotando $R$ di un giro completo attorno all'asse $x$.

L'ascissa $x_D$ dell'intersezione tra la parabola e l'asse $x$ (con $x>0$) si ottiene da $-x^2-x+5=0$, cioè $x^2+x-5=0$:

$$x_D=\frac{-1+\sqrt{21}}{2}=\frac{\sqrt{21}-1}{2}\approx 1{,}79.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="200.657" height="376.241" viewBox="-72 -72 150.493 282.181"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="m-28.253 34.74 1.277 3.681 1.277 3.405 1.277 3.155 1.277 2.933 1.277 2.739 1.277 2.553 1.277 2.395 1.277 2.247 1.277 2.113 1.278 1.99 1.277 1.878 1.277 1.775 1.277 1.68 1.277 1.593 1.277 1.515 1.277 1.437 1.277 1.368 1.277 1.305 1.277 1.242 1.277 1.19 1.277 1.136 1.277 1.086 1.277 1.042 1.277.998 1.277.958 1.277.924 1.277.882 1.277.851 1.277.82 1.277.789 1.277.758 1.277.733 1.277.71 1.277.683 1.277.661 1.277.64 1.277.617 1.277.598 1.277.58 1.277.56 1.277.547 1.277.528 1.277.511 1.278.499 1.277.484 1.277.468 1.277.457 1.277.444 1.277.432.022 31.305h-37.84v-.041l-.635-2.896-.634-2.87-.635-2.843-.635-2.818-.634-2.792-.635-2.767-.635-2.741-.634-2.715-.635-2.69-.635-2.663-.635-2.638-.634-2.612-.635-2.586-.635-2.561-.634-2.535-.635-2.51-.635-2.482-.634-2.458-.635-2.432-.635-2.406-.634-2.381-.635-2.354-.635-2.33-.635-2.303-.634-2.277-.635-2.252-.635-2.226-.634-2.2-.635-2.175-.635-2.149-.634-2.123-.635-2.097-.635-2.071-.634-2.046-.635-2.02-.635-1.995-.635-1.968-.634-1.943-.635-1.917Z"/><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 128.635H65.242"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M63.362 126.235c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.551" y="128.635" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.726 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-59.55 144.284V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.95-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.959 1.7 2.399 2.08"/><text x="-59.551" y="128.635" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -193.267)">y</text></g><path fill="none" stroke="red" stroke-width=".8" d="m-43.902-59.154 1.387 15.267 1.386 12.989 1.386 11.167 1.387 9.71 1.386 8.51 1.387 7.533 1.386 6.705 1.386 6.011 1.387 5.419 1.386 4.911 1.386 4.462 1.387 4.084 1.386 3.749 1.387 3.449 1.386 3.19 1.386 2.954 1.387 2.745 1.386 2.56 1.387 2.392 1.386 2.234 1.386 2.097 1.387 1.975 1.386 1.856 1.387 1.75 1.386 1.655 1.386 1.572 1.387 1.48 1.386 1.411 1.387 1.336 1.386 1.278 1.386 1.214 1.387 1.158 1.386 1.108 1.387 1.055 1.386 1.01 1.386.971 1.387.926 1.386.893 1.386.853 1.387.82 1.386.792 1.387.761 1.386.733 1.386.705 1.387.68 1.386.658 1.387.635 1.386.613 1.386.594 1.387.573 1.386.555 1.387.538 1.386.521 1.386.506 1.387.488 1.386.476 1.387.461 1.386.447 1.386.438 1.387.421 1.386.412 1.387.4 1.386.39 1.386.38 1.387.368 1.386.359 1.386.35 1.387.342 1.386.332 1.387.326 1.386.316 1.386.309 1.387.303 1.386.295 1.387.287 1.386.282 1.386.275 1.387.269 1.386.263"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-68.94-34.429 1.03.446 1.029.513 1.03.581 1.03.65 1.029.716 1.03.785 1.03.852 1.029.92 1.03.988 1.029 1.055 1.03 1.123 1.03 1.191 1.029 1.259 1.03 1.326 1.03 1.394 1.029 1.463 1.03 1.53 1.03 1.596 1.029 1.666 1.03 1.733 1.03 1.8 1.029 1.869 1.03 1.936 1.029 2.004 1.03 2.072 1.03 2.139 1.029 2.207 1.03 2.275 1.03 2.343 1.029 2.41 1.03 2.478 1.03 2.545 1.029 2.614 1.03 2.682 1.03 2.749 1.029 2.816 1.03 2.885 1.029 2.953 1.03 3.02 1.03 3.087 1.029 3.156 1.03 3.223 1.03 3.291 1.029 3.36 1.03 3.426 1.03 3.494 1.029 3.562 1.03 3.63 1.03 3.698 1.029 3.765 1.03 3.833 1.03 3.9 1.029 3.97 1.03 4.036 1.029 4.104 1.03 4.172 1.03 4.239 1.029 4.307 1.03 4.375 1.03 4.443 1.029 4.51 1.03 4.579 1.03 4.646 1.029 4.714 1.03 4.781 1.03 4.85 1.029 4.916 1.03 4.985 1.03 5.053 1.029 5.12 1.03 5.188 1.029 5.255 1.03 5.324 1.03 5.391 1.029 5.46 1.03 5.526 1.03 5.594 1.029 5.663 1.03 5.73"/><path fill="none" stroke-dasharray="3.0,3.0" d="M34.344 128.635V97.337"/><g stroke="none" font-size="10"><text x="-59.551" y="128.635" font-family="cmmi10" transform="translate(81.87 14.177)">x</text><text x="-51.058" y="128.635" font-family="cmr10" transform="translate(81.87 14.177)">=</text><text x="-40.502" y="128.635" font-family="cmr10" transform="translate(81.87 14.177)">3</text></g><g fill="red" stroke="red"><text x="-59.551" y="128.635" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.328 -32.103)">j</text></g><g fill="#00f" stroke="#00f"><text x="-59.551" y="128.635" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(2.179 -149.05)">p</text></g><path stroke="none" d="M-26.603 34.74a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-59.551" y="128.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.831 -97.428)">A</text><text x="-59.551" y="128.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.326 -18.492)">R</text></g></svg>
</figure>

Per $1\le x\le x_D$ la sezione è una corona circolare tra l'iperbole (raggio esterno) e la parabola (raggio interno); per $x_D\le x\le 3$ è un disco delimitato dall'iperbole. Con il metodo dei dischi/corone:

$$V=\pi\int_{1}^{x_D}\!\left[\left(\frac{3}{x}\right)^2-(-x^2-x+5)^2\right]dx+\pi\int_{x_D}^{3}\!\left(\frac{3}{x}\right)^2 dx.$$

Poiché $(-x^2-x+5)^2=x^4+2x^3-9x^2-10x+25$ e $\left(\dfrac{3}{x}\right)^2=\dfrac{9}{x^2}$, una primitiva del primo integrando è

$$F(x)=-\frac{9}{x}-\frac{x^5}{5}-\frac{x^4}{2}+3x^3+5x^2-25x,$$

mentre $\displaystyle\int \frac{9}{x^2}\,dx=-\frac{9}{x}$. Valutando i due integrali:

$$\pi\Big[F(x)\Big]_{1}^{x_D}=\left(\frac{783}{20}-\frac{33}{4}\sqrt{21}\right)\pi,\qquad \pi\left[-\frac{9}{x}\right]_{x_D}^{3}=\left(\frac{9\sqrt{21}-21}{10}\right)\pi.$$

Sommando:

$$V=\left(\frac{783}{20}-\frac{33}{4}\sqrt{21}\right)\pi+\left(\frac{9\sqrt{21}-21}{10}\right)\pi=\frac{741-147\sqrt{21}}{20}\,\pi\approx 3{,}368\,\pi\approx 10{,}58\ \text{u}^3.$$

*Fonte:* [📄 PDF p.47](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
