

**Problema:** [[Problemi/prob_2005_estero_calendario_australe_2005_sessione_ordinaria_problema1_48_1|2005 Estero Australe Ord — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_estero_calendario_australe_2005_sessione_ordinaria_problema1_48|2005 Estero Australe Ord — Problema 1]]

Sia
$$f(x)=\frac{x^{2}+1}{x^{2}}$$
e sia $F(x)$ la sua primitiva tale che $F(1)=f(1)$. Indichiamo con $\gamma$ e $\Gamma$ le curve rappresentative rispettivamente di $f$ e di $F$.

**Determinazione di $F$.** Poiché $f(1)=\dfrac{1+1}{1}=2$, e
$$F(x)=\int\frac{x^{2}+1}{x^{2}}\,dx=\int\left(1+\frac{1}{x^{2}}\right)dx=x-\frac{1}{x}+C,$$
imponendo $F(1)=1-1+C=C=f(1)=2$ si ottiene
$$F(x)=x-\frac{1}{x}+2=\frac{x^{2}+2x-1}{x}.$$

## a) Studio e grafico delle due curve

**Studio di $f$.** Si ha $f(x)=\dfrac{x^{2}+1}{x^{2}}=1+\dfrac{1}{x^{2}}$, definita per ogni $x\neq 0$. Poiché $\displaystyle\lim_{x\to 0}f(x)=+\infty$ e $\displaystyle\lim_{x\to\pm\infty}f(x)=1$, la curva ha l'asintoto verticale $x=0$ e l'asintoto orizzontale $y=1$. La funzione è pari (grafico simmetrico rispetto all'asse $y$), sempre positiva e non interseca gli assi.

Derivata prima:
$$f'(x)=-\frac{2}{x^{3}},$$
positiva per $x<0$ e negativa per $x>0$: $f$ cresce per $x<0$ e decresce per $x>0$; non ci sono estremi. Derivata seconda:
$$f''(x)=\frac{6}{x^{4}}>0$$
in tutto il dominio: concavità sempre rivolta verso l'alto, nessun flesso.

**Studio di $F$.** La funzione $F(x)=x-\dfrac{1}{x}+2$ è definita per ogni $x\neq 0$; presenta l'asintoto verticale $x=0$ e, potendosi scrivere nella forma $x+2+g(x)$ con $g(x)=-\dfrac{1}{x}$ infinitesimo all'infinito, l'asintoto obliquo $y=x+2$.

Derivata prima:
$$F'(x)=f(x)=\frac{x^{2}+1}{x^{2}}>0$$
in tutto il dominio: $F$ è crescente sia per $x<0$ sia per $x>0$; non ci sono estremi. Derivata seconda:
$$F''(x)=f'(x)=-\frac{2}{x^{3}},$$
positiva per $x<0$ e negativa per $x>0$: concavità verso l'alto per $x<0$, verso il basso per $x>0$; nessun flesso.

Le intersezioni di $\Gamma$ con l'asse $x$ si ottengono da $x^{2}+2x-1=0$, cioè
$$x=-1\pm\sqrt{2}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="306.648" height="307.975" viewBox="-72 -72 229.986 230.981"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 85.956h193.08"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M119.13 83.556c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="24.67" y="85.956" stroke="none" font-family="cmmi10" font-size="10" transform="translate(100.273 2.153)">x</text><path fill="none" d="M24.67 158.511V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M22.27-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="24.67" y="85.956" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -150.587)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 61.77h193.48"/><g fill="gray" stroke="none" font-size="10"><text x="24.67" y="85.956" font-family="cmmi10" transform="translate(100.273 -21.935)">y</text><text x="32.709" y="85.956" font-family="cmr10" transform="translate(100.273 -21.935)">=</text><text x="43.265" y="85.956" font-family="cmr10" transform="translate(100.273 -21.935)">1</text></g></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 134.326 109.318-47.062"/><g fill="gray" stroke="none" font-size="10"><text x="24.67" y="85.956" font-family="cmmi10" transform="translate(88.18 -130.768)">y</text><text x="32.709" y="85.956" font-family="cmr10" transform="translate(88.18 -130.768)">=</text><text x="43.265" y="85.956" font-family="cmmi10" transform="translate(88.18 -130.768)">x</text><text x="51.202" y="85.956" font-family="cmr10" transform="translate(88.18 -130.768)">+</text><text x="61.202" y="85.956" font-family="cmr10" transform="translate(88.18 -130.768)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.977 59.797 1.25-.06 1.25-.062 1.25-.066 1.25-.068 1.25-.071 1.249-.076 1.25-.079 1.25-.083 1.25-.087 1.25-.092 1.25-.096 1.25-.103 1.25-.107 1.25-.114 1.25-.12 1.25-.126 1.25-.136 1.249-.142 1.25-.153 1.25-.16 1.25-.173 1.25-.183 1.25-.197 1.25-.209 1.25-.224 1.25-.24 1.25-.26 1.25-.278 1.25-.3 1.249-.324 1.25-.352 1.25-.381 1.25-.415 1.25-.451 1.25-.495 1.25-.541 1.25-.595 1.25-.655 1.25-.727 1.25-.808 1.25-.897 1.25-1.004 1.249-1.13 1.25-1.274 1.25-1.449 1.25-1.651 1.25-1.896 1.25-2.192 1.25-2.554 1.25-3 1.25-3.55 1.25-4.251 1.25-5.148 1.25-6.311 1.249-7.852 1.25-9.954 1.25-12.861 1.25-17.04 1.25-23.228M35.553-57.677l1.25 23.35 1.25 17.113 1.25 12.915 1.25 9.99 1.25 7.88 1.25 6.334 1.25 5.162 1.25 4.263 1.25 3.563 1.25 3.005 1.25 2.559 1.25 2.2 1.25 1.9 1.249 1.653 1.25 1.451 1.25 1.277 1.25 1.134 1.25 1.004 1.25.9 1.25.808 1.25.727 1.25.658 1.25.596 1.25.541 1.25.496 1.249.452 1.25.415 1.25.383 1.25.35 1.25.325 1.25.301 1.25.279 1.25.258 1.25.241 1.25.224 1.25.211 1.25.196 1.25.183 1.249.172 1.25.162 1.25.152 1.25.144 1.25.134 1.25.128 1.25.12 1.25.114 1.25.107 1.25.102 1.25.097 1.25.092 1.249.087 1.25.083 1.25.08 1.25.074 1.25.072 1.25.068 1.25.066 1.25.062 1.25.06"/><path fill="none" stroke="red" stroke-width=".8" d="m-59.977 115.324 1.27-1.377 1.27-1.379 1.271-1.382 1.27-1.386 1.271-1.39 1.271-1.394 1.27-1.398 1.271-1.402 1.27-1.407 1.271-1.412 1.27-1.417 1.272-1.421 1.27-1.43 1.27-1.432 1.271-1.44 1.27-1.447 1.271-1.453 1.271-1.462 1.27-1.47 1.271-1.478 1.27-1.487 1.271-1.496 1.27-1.507 1.272-1.518 1.27-1.53 1.27-1.542 1.271-1.558 1.27-1.57 1.271-1.588 1.271-1.604 1.27-1.624 1.271-1.645 1.27-1.665 1.271-1.691 1.27-1.716 1.272-1.747 1.27-1.776 1.27-1.815 1.271-1.853 1.27-1.895 1.271-1.948 1.271-1.998 1.27-2.064 1.271-2.131 1.27-2.214 1.271-2.301 1.27-2.412 1.272-2.529 1.27-2.673 1.27-2.843 1.271-3.044 1.27-3.285 1.271-3.584 1.271-3.948 1.27-4.41 1.271-5.002 1.27-5.777 1.271-6.817 1.271-8.278M34.344 88.378l1.27-8.294 1.271-6.824 1.27-5.782 1.271-5.008 1.27-4.413 1.271-3.953 1.27-3.583 1.272-3.291 1.27-3.044 1.27-2.845 1.271-2.674 1.27-2.533 1.271-2.407 1.271-2.306 1.27-2.214 1.271-2.129 1.27-2.064 1.271-2 1.27-1.946 1.272-1.897 1.27-1.856 1.27-1.812 1.271-1.776 1.27-1.75 1.271-1.715L67.38 8.57l1.27-1.667L69.92 5.26l1.27-1.623 1.271-1.605L73.732.445l1.27-1.573 1.271-1.556 1.27-1.542 1.271-1.53 1.27-1.518 1.271-1.507 1.271-1.497 1.27-1.487 1.271-1.477 1.27-1.47 1.271-1.462 1.271-1.454 1.27-1.448 1.271-1.438 1.27-1.434 1.271-1.428 1.27-1.422 1.271-1.417 1.271-1.412 1.27-1.407 1.271-1.402 1.27-1.398 1.271-1.394 1.271-1.39 1.27-1.386 1.271-1.383 1.27-1.379 1.271-1.375"/><g fill="#00f" stroke="#00f"><text x="24.67" y="85.956" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(62.313 -33.778)">f</text></g><g fill="red" stroke="red"><text x="24.67" y="85.956" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(46.879 -98.16)">F</text></g><path stroke="none" d="M50.555 37.586a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="24.67" y="85.956" stroke="none" font-family="cmmi10" font-size="10" transform="translate(27.718 -51.903)">A</text><path stroke="none" d="M2.185 37.586a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="24.67" y="85.956" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-35.805 -51.903)">B</text></g></svg>
</figure>

## b) Punti comuni e tangenti

I punti comuni si ottengono risolvendo $f(x)=F(x)$:
$$\frac{x^{2}+1}{x^{2}}=\frac{x^{2}+2x-1}{x}.$$
Moltiplicando per $x^{2}$:
$$x^{2}+1=x^{3}+2x^{2}-x\ \Rightarrow\ x^{3}+x^{2}-x-1=0.$$
Raccogliendo:
$$x^{2}(x+1)-(x+1)=(x+1)(x^{2}-1)=(x+1)^{2}(x-1)=0,$$
da cui $x=-1$ (radice doppia) e $x=1$. Poiché per $x=\pm 1$ risulta $y=2$, le due curve hanno in comune i punti
$$A=(1,\,2),\qquad B=(-1,\,2),$$
e in $B$, essendo la radice doppia, sono tra loro tangenti.

**Tangente comune in $B$.** Essendo $f'(-1)=-\dfrac{2}{(-1)^{3}}=2$ e $F'(-1)=f(-1)=2$, le due curve hanno in $B$ la stessa tangente:
$$y-2=2(x+1)\ \Rightarrow\ y=2x+4.$$

**Tangenti in $A$.** Alla curva $\gamma$ (di $f$), con $f'(1)=-2$:
$$y-2=-2(x-1)\ \Rightarrow\ y=-2x+4.$$
Alla curva $\Gamma$ (di $F$), con $F'(1)=f(1)=2$:
$$y-2=2(x-1)\ \Rightarrow\ y=2x.$$

## c) Area della regione

Si richiede l'area della regione finita delimitata dalle due curve e dalla retta $x+2=0$, cioè $x=-2$; la regione è compresa tra $x=-2$ e $x=-1$, dove $f(x)\ge F(x)$. Si ha
$$f(x)-F(x)=\left(1+\frac{1}{x^{2}}\right)-\left(x-\frac{1}{x}+2\right)=-1-x+\frac{1}{x}+\frac{1}{x^{2}}.$$
Dunque
$$\mathcal{A}=\int_{-2}^{-1}\left(-1-x+\frac{1}{x}+\frac{1}{x^{2}}\right)dx=\left[-x-\frac{x^{2}}{2}+\ln|x|-\frac{1}{x}\right]_{-2}^{-1}.$$
Valutando gli estremi:
$$\left.\right|_{x=-1}=1-\frac{1}{2}+0+1=\frac{3}{2},\qquad \left.\right|_{x=-2}=2-2+\ln 2+\frac{1}{2}=\frac{1}{2}+\ln 2,$$
quindi
$$\mathcal{A}=\frac{3}{2}-\left(\frac{1}{2}+\ln 2\right)=\left(1-\ln 2\right)\,u^{2}\cong 0{,}31\,u^{2}.$$

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
