

**Problema:** [[Problemi/prob_2004_ordinamento_2004_sessione_suppletiva_problema1_73_1|2004 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_ordinamento_2004_sessione_suppletiva_problema1_73|2004 Ordinamento Suppletiva — Problema 1]]

Nel piano cartesiano $Oxy$ è assegnata la curva $K$ di equazione
$$y=\frac{2x(6-x)}{2+x}.$$

## a)

Studiamo la funzione $f(x)=\dfrac{2x(6-x)}{x+2}=\dfrac{-2x^2+12x}{x+2}$.

Il dominio è $\mathbb{R}\setminus\{-2\}$; gli zeri sono $x=0$ e $x=6$. Eseguendo la divisione tra i polinomi si ottiene
$$f(x)=-2x+16-\frac{32}{x+2},$$
da cui l'asintoto verticale $x=-2$ (con $\lim_{x\to -2^-}f(x)=+\infty$ e $\lim_{x\to -2^+}f(x)=-\infty$) e l'asintoto obliquo $y=-2x+16$.

Calcoliamo la derivata prima:
$$f'(x)=\frac{(-4x+12)(x+2)-(-2x^2+12x)}{(x+2)^2}=\frac{-2x^2-8x+24}{(x+2)^2}=\frac{-2(x+6)(x-2)}{(x+2)^2}.$$

Si ha $f'(x)=0$ per $x=-6$ (punto di minimo relativo, $f(-6)=36$) e per $x=2$ (punto di massimo relativo). Il punto di massimo richiesto è dunque
$$A=(2,4).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="297.433" height="275.424" viewBox="-72 -72 223.075 206.568"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 46.096 62.312)"><clipPath id="pgfd7de372338030caef4c64746f7e84e25cp1"><path d="M-118.366-71.986v206.568h223.074V-71.986Zm223.074 206.568"/></clipPath><g clip-path="url(#pgfd7de372338030caef4c64746f7e84e25cp1)"><path fill="none" d="M-118.366 0H99.756"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M97.876 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="46.096" y="62.312" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 57.593 60.16)">x</text><path fill="none" d="M0-68.856v199.908"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 129.172c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="46.096" y="62.312" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -48.727 199.242)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-18.21-68.856v200.308M-109.261 125.193l8.346-5.738 8.346-5.738 8.347-5.738 8.346-5.738 8.346-5.738 8.346-5.738 8.347-5.738 8.346-5.738 8.346-5.738 8.346-5.738 8.347-5.738 8.346-5.738L-.76 50.6l8.346-5.738 8.346-5.738 8.347-5.738 8.346-5.738 8.346-5.738 8.346-5.738 8.347-5.738 8.346-5.738 8.346-5.738 8.346-5.738 8.347-5.738"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-109.261 135.208.906-.522.906-.52.906-.518.905-.516.906-.513.906-.512.906-.508.906-.507.906-.504.905-.5.906-.5.906-.495.906-.493.906-.49.906-.486.905-.484.906-.48.906-.477.906-.473.906-.469.906-.466.905-.461.906-.457.906-.454.906-.448.906-.444.906-.439.906-.434.905-.428.906-.424.906-.417.906-.411.906-.405.906-.399.905-.392.906-.384.906-.377.906-.37.906-.36.906-.353.905-.343.906-.334.906-.323.906-.314.906-.301.906-.29.905-.278.906-.265.906-.25.906-.236.906-.22.906-.204.906-.186.905-.168.906-.147.906-.126.906-.103.906-.078.906-.053.905-.024.906.006.906.039.906.074.906.112.906.153.905.199.906.247.906.301.906.36.906.424.906.495.905.573.906.66.906.758.906.865.906.987.906 1.123.906 1.279.905 1.455.906 1.658.906 1.892.906 2.163.906 2.482.906 2.857.905 3.306.906 3.847.906 4.509.906 5.329.906 6.362.906 7.691.905 9.431.906 11.815.906 15.104.906 19.945.906 27.399.906 39.78.906 62.825.905 113.237.906 263.46M-16.844-606.047l1.09 295.57 1.09 113.41 1.089 59.718 1.09 36.714 1.09 24.726 1.09 17.702 1.09 13.233 1.089 10.206 1.09 8.07 1.09 6.504 1.09 5.32 1.089 4.403 1.09 3.68 1.09 3.1 1.09 2.626L.592 1.17l1.089 1.908 1.09 1.632 1.09 1.396 1.09 1.195 1.09 1.02 1.089.868 1.09.735 1.09.617 1.09.513 1.089.42 1.09.337 1.09.264 1.09.196 1.09.136 1.089.08 1.09.032 1.09-.015 1.09-.056 1.09-.095 1.089-.13 1.09-.161 1.09-.192 1.09-.22 1.089-.245 1.09-.27 1.09-.29 1.09-.313 1.09-.331 1.089-.35 1.09-.366 1.09-.382 1.09-.397 1.09-.411 1.089-.425 1.09-.436 1.09-.449 1.09-.46 1.089-.47 1.09-.48 1.09-.489 1.09-.498 1.09-.507 1.089-.515 1.09-.522 1.09-.53 1.09-.537 1.09-.543 1.089-.55 1.09-.556 1.09-.561 1.09-.567 1.09-.572 1.089-.577 1.09-.582 1.09-.587 1.09-.591 1.089-.596 1.09-.599 1.09-.603 1.09-.608 1.09-.61 1.089-.615 1.09-.617 1.09-.621 1.09-.624 1.09-.627 1.089-.63 1.09-.633 1.09-.635 1.09-.638 1.089-.64 1.09-.644 1.09-.645 1.09-.648 1.09-.65 1.089-.652 1.09-.654 1.09-.656 1.09-.658 1.09-.66 1.089-.661 1.09-.663 1.09-.666"/><path stroke="none" d="M19.01 12.52c0 .151-.358.274-.8.274s-.8-.123-.8-.275.358-.275.8-.275.8.123.8.275m-.8 0"/><g stroke="none" font-size="10"><text x="46.096" y="62.312" font-family="cmmi10" transform="matrix(1 0 0 -1 -24.353 80.864)">A</text><text x="53.596" y="62.312" font-family="cmr10" transform="matrix(1 0 0 -1 -24.353 80.864)">(2</text><text x="62.485" y="62.312" font-family="cmmi10" transform="matrix(1 0 0 -1 -24.353 80.864)">;</text><text x="66.929" y="62.312" font-family="cmr10" transform="matrix(1 0 0 -1 -24.353 80.864)">4)</text></g><path stroke="none" d="M-53.83 112.673c0 .152-.359.275-.8.275s-.8-.123-.8-.275c0-.151.358-.275.8-.275.441 0 .8.124.8.275m-.8 0"/><g stroke="none" font-size="10"><text x="46.096" y="62.312" font-family="cmr10" transform="matrix(1 0 0 -1 -97.194 181.019)">(</text><text x="49.985" y="62.312" font-family="cmsy10" transform="matrix(1 0 0 -1 -97.194 181.019)">¡</text><text x="57.763" y="62.312" font-family="cmr10" transform="matrix(1 0 0 -1 -97.194 181.019)">6</text><text x="62.763" y="62.312" font-family="cmmi10" transform="matrix(1 0 0 -1 -97.194 181.019)">;</text><text x="67.207" y="62.312" font-family="cmr10" transform="matrix(1 0 0 -1 -97.194 181.019)">36)</text></g><path stroke="none" d="M55.43 0c0 .152-.358.275-.8.275-.441 0-.8-.123-.8-.275s.359-.275.8-.275.8.123.8.275m-.8 0"/></g></g></svg>
</figure>

## b)

La regione chiusa delimitata dall'asse $x$ e dalla curva $K$ è
$$\{(x,y):0\le x\le 6,\ 0\le y\le f(x)\}.$$

I punti del tipo $\left(\dfrac{a}{2},\dfrac{b}{2}\right)$ con $a,b$ interi e $0\le a\le 12$ soddisfano $0\le \dfrac{b}{2}\le f\!\left(\dfrac{a}{2}\right)$, cioè $0\le b\le 2f\!\left(\dfrac{a}{2}\right)$. Contando per ogni colonna $a$ il numero di interi $b$ ammissibili, si trovano $13$ punti di ordinata $0$, quindi $11,\,10,\,9,\,9,\,7,\,6,\,4,\,1$ punti rispettivamente di ordinata $\dfrac{1}{2},\dfrac{2}{2},\dots,\dfrac{8}{2}$. In totale
$$13+11+10+9+9+7+6+4+1=70 \text{ punti}.$$

## c)

Detta $x$ l'ascissa di $C$ (con $x<2$), per simmetria rispetto alla retta $x=2$ l'altro estremo della base è $B=(4-x,0)$ e il vertice è $A=(2,4)$. I lati obliqui valgono
$$\overline{AB}=\overline{AC}=\sqrt{(x-2)^2+16}=\sqrt{x^2-4x+20}.$$

Imponendo il perimetro uguale a $16$:
$$2\sqrt{x^2-4x+20}+(4-2x)=16 \Rightarrow \sqrt{x^2-4x+20}=6+x.$$

Elevando al quadrato (con la condizione $6+x\ge 0$): $x^2-4x+20=x^2+12x+36$, da cui $16x=-16$, cioè $x=-1$. Il triangolo richiesto ha quindi vertici
$$C=(-1,0),\qquad B=(5,0),\qquad A=(2,4),$$
con $\overline{BC}=6$ e $\overline{AB}=\overline{AC}=5$.

## d)

Il triangolo $ABC$ ha area $\dfrac{1}{2}\cdot 6\cdot 4=12$.

La retta $AC$ ha equazione $y=\dfrac{4}{3}x+\dfrac{4}{3}$; intersecandola con la curva $K$ si trova, oltre ad $A=(2,4)$, il punto
$$D=\left(\frac{2}{5},\frac{28}{15}\right).$$

La prima regione $CDO$ (delimitata da $C$, dalla curva fino a $D$ e dall'origine $O$) ha area
$$S_1=\underbrace{\frac{1}{2}\cdot\frac{7}{5}\cdot\frac{28}{15}}_{\text{triangolo } CDE=\frac{98}{75}}-\underbrace{\int_{0}^{2/5} f(x)\,dx}_{=\,\frac{156}{25}+32\ln\frac{5}{6}\,\approx\,0{,}406}=\frac{98}{75}-\left(\frac{156}{25}+32\ln\frac{5}{6}\right)\approx 0{,}90.$$

La seconda regione è la parte restante del triangolo:
$$S_2=12-S_1\approx 11{,}10.$$

*Fonte:* [📄 PDF p.73](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
