

**Problema:** [[Problemi/prob_2004_pni_2004_sessione_suppletiva_problema1_92_1|2004 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_pni_2004_sessione_suppletiva_problema1_92|2004 PNI Suppletiva — Problema 1]]

In un piano riferito a un sistema di assi cartesiani ortogonali $Oxy$ è assegnata la curva $K$ di equazione

$$y=\frac{2x(6-x)}{2+x}.$$

## a) Studio della curva e punto di massimo

Poniamo

$$f(x)=\frac{2x(6-x)}{x+2}=\frac{-2x^{2}+12x}{x+2}.$$

**Dominio:** $\mathbb{R}\setminus\{-2\}$.

**Zeri:** $f(x)=0$ per $x=0$ e $x=6$.

**Segno:** $f(x)>0$ su $(-\infty,-2)\cup(0,6)$.

Eseguendo la divisione fra $-2x^{2}+12x$ e $x+2$ si ottiene la forma

$$f(x)=-2x+16-\frac{32}{x+2},$$

da cui seguono l'**asintoto obliquo** $y=-2x+16$ e l'**asintoto verticale** $x=-2$ (per $x\to-2$ il numeratore tende a $2(-2)(8)=-32\neq 0$, quindi $f\to\mp\infty$).

**Derivata prima:**

$$f'(x)=\frac{(-4x+12)(x+2)-(-2x^{2}+12x)}{(x+2)^{2}}=\frac{-2x^{2}-8x+24}{(x+2)^{2}}=\frac{-2(x+6)(x-2)}{(x+2)^{2}}.$$

Si ha $f'(x)=0$ per $x=-6$ (minimo relativo, $f(-6)=36$) e per $x=2$ (massimo relativo, $f(2)=4$). Dunque

$$\boxed{A=(2,\,4)}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="261.768" height="191.195" viewBox="-72 -72 196.326 143.396"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 34.429 30.156)"><clipPath id="pgf3806879b19f851570971e545f1045a59cp1"><path d="M-106.699-40.97v143.396H89.627V-40.97ZM89.627 102.426"/></clipPath><g clip-path="url(#pgf3806879b19f851570971e545f1045a59cp1)"><path fill="none" d="M-102.43 0H84.96"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M83.08 2.4C83.46.96 84.305.28 85.16 0c-.854-.28-1.7-.96-2.08-2.4"/><text x="34.429" y="30.156" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 54.463 28.003)">x</text><path fill="none" d="M0-40.97v142.996"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 100.146c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="34.429" y="30.156" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -37.06 138.059)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-17.072-40.97v143.396"/><g fill="gray" stroke="none" font-size="10"><text x="34.429" y="30.156" font-family="cmmi10" transform="matrix(1 0 0 -1 -67.414 136.948)">x</text><text x="42.922" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -67.414 136.948)">=</text><text x="53.477" y="30.156" font-family="cmsy10" transform="matrix(1 0 0 -1 -67.414 136.948)">¡</text><text x="61.255" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -67.414 136.948)">2</text></g></g><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M-102.43 102.426 85.36-10.243"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-102.43 110.62 1.058-.533 1.059-.53 1.058-.526 1.06-.524 1.058-.522 1.059-.518 1.059-.515 1.058-.511 1.06-.509 1.058-.504 1.059-.501 1.058-.497 1.06-.493 1.058-.489 1.059-.484 1.059-.48 1.058-.474 1.06-.47 1.058-.463 1.059-.459 1.059-.452 1.058-.446 1.06-.44 1.058-.433 1.059-.425 1.058-.418 1.06-.41 1.058-.4 1.059-.393 1.059-.382 1.058-.372 1.06-.362 1.058-.35 1.059-.337 1.058-.325 1.06-.31 1.058-.297 1.059-.28 1.059-.262 1.058-.245 1.06-.225 1.058-.203 1.059-.18 1.059-.156 1.058-.13 1.06-.099 1.058-.067 1.059-.033 1.058.005 1.06.047 1.058.093 1.059.144 1.059.2 1.058.264 1.06.333 1.058.413 1.059.5 1.059.601 1.058.716 1.06.846 1.058.998 1.059 1.173 1.058 1.378 1.06 1.62 1.058 1.91 1.059 2.258 1.059 2.682 1.058 3.208 1.06 3.87 1.058 4.718 1.059 5.83 1.058 7.331 1.06 9.41 1.058 12.476 1.059 17.128 1.059 24.815 1.058 38.845 1.06 69.02 1.058 155.032M-15.365-359.515l.847 135.28.846 67.68.846 40.503.847 26.86.846 19.069.846 14.18.847 10.93.846 8.64.846 6.98.847 5.734.846 4.775.847 4.022.846 3.418.846 2.928.847 2.524.846 2.188.846 1.904.847 1.663.846 1.456.846 1.278.847 1.124.846.987.846.867.847.762.846.668.846.584.847.51.846.44.846.38.847.324.846.274.847.228.846.186.846.148.847.112.846.08.846.049.847.021.846-.004.846-.028.847-.05.846-.072.846-.09.847-.11.846-.126.846-.141.847-.157.846-.17.846-.185.847-.196.846-.208.846-.22.847-.229.846-.24.847-.249.846-.258.846-.266.847-.275.846-.282.846-.29.847-.295.846-.303.846-.31.847-.315.846-.32.846-.327.847-.332.846-.337.846-.341.847-.347.846-.35.846-.355.847-.359.846-.363.847-.366.846-.37.846-.374.847-.377.846-.38.846-.384.847-.387.846-.389.846-.392.847-.395.846-.397.846-.4.847-.402.846-.405.846-.407.847-.409.846-.411.846-.414.847-.415.846-.417.847-.42.846-.42.846-.423.847-.424.846-.426.846-.427.847-.43.846-.43.846-.432.847-.434.846-.435.846-.436.847-.438.846-.439.846-.44.847-.441.846-.443.846-.443.847-.445.846-.446.846-.447.847-.448.846-.449.847-.45.846-.45"/><path stroke="none" d="M17.672 10.243c0 .099-.269.18-.6.18-.332 0-.6-.081-.6-.18 0-.1.268-.18.6-.18s.6.08.6.18m-.6 0"/><g stroke="none" font-size="10"><text x="34.429" y="30.156" font-family="cmmi10" transform="matrix(1 0 0 -1 -13.824 46.431)">A</text><text x="41.929" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -13.824 46.431)">(2</text><text x="50.818" y="30.156" font-family="cmmi10" transform="matrix(1 0 0 -1 -13.824 46.431)">;</text><text x="55.262" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -13.824 46.431)">4)</text></g><path stroke="none" d="M-50.615 92.183c0 .1-.27.18-.6.18-.332 0-.6-.08-.6-.18s.268-.18.6-.18c.33 0 .6.08.6.18m-.6 0"/><g stroke="none" font-size="10"><text x="34.429" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -82.111 128.372)">(</text><text x="38.318" y="30.156" font-family="cmsy10" transform="matrix(1 0 0 -1 -82.111 128.372)">¡</text><text x="46.096" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -82.111 128.372)">6</text><text x="51.096" y="30.156" font-family="cmmi10" transform="matrix(1 0 0 -1 -82.111 128.372)">;</text><text x="55.54" y="30.156" font-family="cmr10" transform="matrix(1 0 0 -1 -82.111 128.372)">36)</text></g><path stroke="none" d="M.6 0C.6.1.331.18 0 .18S-.6.1-.6 0s.269-.18.6-.18.6.08.6.18M51.815000000000005 0c0 .1-.268.18-.6.18-.33 0-.6-.08-.6-.18s.27-.18.6-.18c.332 0 .6.08.6.18m-.6 0"/><text x="34.429" y="30.156" stroke="none" font-family="cmr10" font-size="10" transform="matrix(1 0 0 -1 14.287 20.178)">6</text></g></g></svg>
</figure>

## b) Punti a coordinate semi-intere

Cerchiamo i punti di coordinate $\left(\tfrac{a}{2},\,\tfrac{b}{2}\right)$ con $a,b$ interi, appartenenti alla regione (contorno compreso) delimitata dall'asse $x$ e dalla curva $K$. La condizione è $0\le a\le 12$ e $0\le b\le 2f\!\left(\tfrac{a}{2}\right)$, con $f\!\left(\tfrac{a}{2}\right)\ge 0$. Colonna per colonna il numero di valori ammissibili di $b$ è

$$13,\ 11,\ 10,\ 9,\ 9,\ 7,\ 6,\ 4,\ 1,$$

per un totale di

$$13+11+10+9+9+7+6+4+1=\boxed{70}\ \text{punti}.$$

## c) Triangolo isoscele di perimetro 16

Fra i triangoli isosceli con il vertice propriamente detto in $A=(2,4)$ e la base sull'asse $x$, la base è simmetrica rispetto alla retta $x=2$: posto $C=(x,0)$ con $x<2$, si ha $B=(4-x,0)$. I due lati obliqui valgono

$$\overline{AC}=\overline{AB}=\sqrt{(x-2)^{2}+16}=\sqrt{x^{2}-4x+20}.$$

Imponendo il perimetro:

$$2\sqrt{x^{2}-4x+20}+(4-2x)=16 \Rightarrow \sqrt{x^{2}-4x+20}=6+x.$$

Deve essere $6+x\ge 0$, cioè $x\ge -6$. Elevando al quadrato si ottiene $16x=-16$, quindi $x=-1$ (accettabile). I vertici del triangolo richiesto sono

$$\boxed{C=(-1,0),\quad B=(5,0),\quad A=(2,4)}.$$

## d) Aree delle due regioni

L'area del triangolo $ABC$ vale $\dfrac{\overline{BC}\cdot\overline{AH}}{2}=\dfrac{6\cdot 4}{2}=12$.

La retta $AC$ ha equazione $y=\dfrac{4}{3}x+\dfrac{4}{3}$ e incontra la curva $K$ nei punti $A$ e

$$D=\left(\frac{2}{5},\,\frac{28}{15}\right).$$

Con

$$\int_{0}^{2/5} f(x)\,dx=\Big[-x^{2}+16x-32\ln(2+x)\Big]_{0}^{2/5}=\frac{156}{25}+32\ln\frac{5}{6}\cong 0{,}41,$$

la regione $CDO$ ha area

$$S_{1}=\frac{98}{75}-\int_{0}^{2/5} f(x)\,dx\cong \frac{98}{75}-0{,}41\cong \boxed{0{,}90}\ u^{2},$$

mentre la seconda regione ha area

$$S_{2}=12-S_{1}\cong \boxed{11{,}10}\ u^{2}.$$

## e) Invertibilità e funzione inversa

La funzione non è invertibile nel suo dominio perché non è iniettiva: come si vede dal grafico, a valori distinti di $x$ (ai due lati del massimo) corrisponde la stessa $y$, quindi non è biunivoca.

Restringendo il dominio a un intervallo di monotonia, ad esempio $[-6,2]$ con $x\neq -2$ (oppure $(-\infty,-6]$ o $[2,+\infty)$), la funzione diventa invertibile.

Per ricavare l'inversa scriviamo $y(x+2)=2x(6-x)$, cioè $2x^{2}+(y-12)x+2y=0$; risolvendo rispetto a $x$:

$$x=\frac{12-y\pm\sqrt{(y-12)^{2}-16y}}{4}=\frac{12-y\pm\sqrt{y^{2}-40y+144}}{4}=3-\frac{y}{4}\pm\frac{1}{4}\sqrt{y^{2}-40y+144}.$$

Il radicando è $\ge 0$ per $y\le 4$ oppure $y\ge 36$, che rappresenta il codominio della funzione. Sul ramo $[2,+\infty)$ (dove $x\ge 3-\tfrac{y}{4}$) vale il segno $+$:

$$\boxed{\,f^{-1}(y)=3-\frac{y}{4}+\frac{1}{4}\sqrt{y^{2}-40y+144}\,};$$

sul ramo $(-\infty,-6]\cup(-2,2]$ vale invece il segno $-$.

*Fonte:* [📄 PDF p.92](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
