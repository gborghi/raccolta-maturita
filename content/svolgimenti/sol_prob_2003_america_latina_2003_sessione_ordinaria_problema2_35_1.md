

**Problema:** [[Problemi/prob_2003_america_latina_2003_sessione_ordinaria_problema2_35_1|2003 America Latina Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_america_latina_2003_sessione_ordinaria_problema2_35|2003 America Latina Ordinaria — Problema 2]]

Nel piano cartesiano $Oxy$ siano $S=(0,4)$, $P$ un punto della retta $r:\,2x-y-2=0$, $n$ la retta per $S$ perpendicolare a $SP$, e $Q$ l'intersezione di $n$ con la retta $s$ parallela all'asse $y$ passante per $P$.

## a) Equazione del luogo $\Gamma$

Il generico punto di $r$ è $P=(t,\,2t-2)$. Il coefficiente angolare di $SP$ è
$$m_{SP}=\frac{(2t-2)-4}{t-0}=\frac{2t-6}{t},$$
quindi la retta $n$, perpendicolare a $SP$ per $S$, ha coefficiente angolare
$$m_n=-\frac{1}{m_{SP}}=\frac{t}{6-2t}$$
ed equazione
$$n:\ y-4=\frac{t}{6-2t}\,x.$$
La retta $s$ è $x=t$. Il punto $Q$ si ottiene ponendo $x=t$ nel sistema ed eliminando il parametro; sostituendo $t=x$:
$$y=\frac{x}{6-2x}\cdot x+4=\frac{x^2+4(6-2x)}{6-2x}=\frac{x^2-8x+24}{6-2x}.$$
Portando a denominatore comune si ottiene l'equazione cartesiana del luogo
$$\boxed{\,\Gamma:\ x^2+2xy-8x-6y+24=0\,}$$
che è una conica, precisamente un'iperbole, esprimibile come $\displaystyle y=\frac{x^2-8x+24}{6-2x}$.

## b) Studio di $\Gamma$ e caso $x=3$

**Dominio.** $6-2x\neq 0\Rightarrow x\neq 3$.

**Asintoto verticale.** Poiché il denominatore si annulla in $x=3$ (dove il numeratore vale $9\neq0$), la retta $x=3$ è asintoto verticale.

**Asintoto obliquo** $y=mx+q$:
$$m=\lim_{x\to\infty}\frac{x^2-8x+24}{x(6-2x)}=\lim_{x\to\infty}\frac{x^2}{-2x^2}=-\frac{1}{2},$$
$$q=\lim_{x\to\infty}\left(\frac{x^2-8x+24}{6-2x}+\frac{x}{2}\right)=\lim_{x\to\infty}\frac{-10x+48}{2(6-2x)}=\frac{5}{2}.$$
Dunque l'asintoto obliquo è $\displaystyle y=-\frac{1}{2}x+\frac{5}{2}$. Il centro dell'iperbole è l'intersezione dei due asintoti: $C=(3,\,1)$.

**Derivata prima.**
$$f'(x)=\frac{(2x-8)(6-2x)-(x^2-8x+24)(-2)}{(6-2x)^2}=\frac{-2x^2+12x}{(6-2x)^2}=\frac{x(6-x)}{2(x-3)^2}.$$
Poiché $(x-3)^2>0$, si ha $f'(x)\ge 0$ per $0\le x\le 6$ (con $x\neq3$). Quindi $f$ è crescente su $(0,3)$ e $(3,6)$, decrescente su $(-\infty,0)$ e $(6,+\infty)$. Ne segue un **minimo relativo** in $x=0$, con $f(0)=4$, cioè il punto $(0,4)$, e un **massimo relativo** in $x=6$, con $f(6)=-2$, cioè il punto $(6,-2)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="247.537" height="264.609" viewBox="-72 -72 185.653 198.457"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 -21.055 36.561)"><clipPath id="pgfbcd37f4e91db868de19ea0b7a93ec0b3cp1"><path d="M-51.215-89.626v198.457h185.653V-89.626Zm185.653 198.457"/></clipPath><g clip-path="url(#pgfbcd37f4e91db868de19ea0b7a93ec0b3cp1)"><path fill="none" d="M-51.215 0h181.412"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M128.317 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="-21.055" y="36.561" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 155.186 34.408)">x</text><path fill="none" d="M0-89.626V102.03"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 100.15c1.44.38 2.12 1.226 2.4 2.08.28-.854.96-1.7 2.4-2.08"/><text x="-21.055" y="36.561" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 18.425 144.468)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M38.41-89.626V102.43"/><g fill="gray" stroke="gray"><g fill="gray" stroke="none" font-size="10"><text x="-21.055" y="36.561" font-family="cmmi10" transform="matrix(1 0 0 -1 56.405 128.086)">x</text><text x="-12.562" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 56.405 128.086)">=</text><text x="-2.007" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 56.405 128.086)">3</text></g></g><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="m-51.215 57.616 181.812-90.905"/><g fill="gray" stroke="gray"><g fill="gray" stroke="none"><text x="-21.055" y="36.561" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 110.33 -9.471)">y</text><text x="-13.016" y="36.561" font-family="cmr10" font-size="10" transform="matrix(1 0 0 -1 110.33 -9.471)">=</text><text x="-2.461" y="36.561" font-family="cmsy10" font-size="10" transform="matrix(1 0 0 -1 110.33 -9.471)">¡</text><text x="6.517" y="32.624" font-family="cmmi7" font-size="7" transform="matrix(1 0 0 -1 110.33 -9.471)">x</text><path d="M116.847-43.332h4.535v-.4h-4.535z"/><text x="6.792" y="40.009" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 110.33 -9.471)">2</text><text x="14.474" y="36.561" font-family="cmr10" font-size="10" transform="matrix(1 0 0 -1 110.33 -9.471)">+</text><text x="25.674" y="32.624" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 110.33 -9.471)">5</text><path d="M136.004-43.332h3.986v-.4h-3.986z"/><text x="25.674" y="40.009" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 110.33 -9.471)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-38.41 60.817.805-.3.805-.3.806-.296.805-.294.806-.292.805-.29.806-.286.805-.285.806-.28.805-.28.806-.275.805-.273.806-.269.805-.266.806-.263.805-.26.806-.255.805-.251.806-.248.805-.244.806-.239.805-.235.806-.23.805-.226.806-.22.805-.215.806-.21.805-.204.806-.198.805-.191.806-.186.805-.178.806-.17.805-.165.806-.155.805-.147.806-.139.805-.129.806-.12.805-.109.806-.098.805-.087.806-.076.805-.062.806-.049.805-.034.806-.02.805-.003.806.015.805.032.806.052.805.073.806.096.805.12.806.146.805.172.806.204.805.236.806.271.805.31.806.35.805.395.806.445.805.5.806.558.805.624.806.696.805.777.806.866.805.966.806 1.078.805 1.205.806 1.35.805 1.512.806 1.7.805 1.919.806 2.17.805 2.467.806 2.817.805 3.236.806 3.744.805 4.364.806 5.133.805 6.107.806 7.362.805 9.02.806 11.271.805 14.43.806 19.1M44.173-118.114l.97 17.98.971 13.325.971 10.234.971 8.075.971 6.51.971 5.338.971 4.436.971 3.73.971 3.165.971 2.707.971 2.33.971 2.017.971 1.752.971 1.527.971 1.335.971 1.17.971 1.025.971.898.971.788.971.69.971.602.971.524.971.455.971.391.971.335.971.284.971.237.971.194.971.155.97.12.972.087.97.057.972.029.97.003.972-.02.97-.044.972-.063.97-.083.972-.1.97-.118.972-.133.97-.147.972-.162.97-.175.972-.186.97-.199.972-.209.97-.22.972-.228.97-.238.971-.247.971-.255.971-.264.971-.27.971-.277.971-.285.971-.29.971-.297.971-.303.971-.307.971-.314.971-.318.971-.323.971-.328.971-.333.971-.336.971-.34.971-.345.971-.349.971-.352.971-.355.971-.359.971-.362.971-.365.971-.368.971-.371.971-.374.971-.376.97-.38.972-.38.97-.384.972-.386.97-.389.972-.39.97-.393.972-.394.97-.397.972-.398.97-.4"/><path stroke="none" d="M1.35 51.215a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0m-1.35 0"/><g stroke="none" font-size="10"><text x="-21.055" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 -4.7 93.809)">(0</text><text x="-12.166" y="36.561" font-family="cmmi10" transform="matrix(1 0 0 -1 -4.7 93.809)">;</text><text x="-7.722" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 -4.7 93.809)">4)</text></g><path stroke="none" d="M78.172-25.607a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0m-1.35 0"/><g stroke="none" font-size="10"><text x="-21.055" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 101.41 -.08)">(6</text><text x="-12.166" y="36.561" font-family="cmmi10" transform="matrix(1 0 0 -1 101.41 -.08)">;</text><text x="-7.722" y="36.561" font-family="cmsy10" transform="matrix(1 0 0 -1 101.41 -.08)">¡</text><text x=".056" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 101.41 -.08)">2)</text></g><path stroke="none" d="M39.536 12.804a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-1.125 0"/><g stroke="none" font-size="10"><text x="-21.055" y="36.561" font-family="cmmi10" transform="matrix(1 0 0 -1 63 55.398)">C</text><text x="-13.193" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 63 55.398)">(3</text><text x="-4.304" y="36.561" font-family="cmmi10" transform="matrix(1 0 0 -1 63 55.398)">;</text><text x=".14" y="36.561" font-family="cmr10" transform="matrix(1 0 0 -1 63 55.398)">1)</text></g></g></g></svg>
</figure>

**Interpretazione geometrica per $x=3$.** La funzione non è definita in $x=3$. Se $x=3$, il punto $P$ su $r$ ha coordinate $(3,4)$, quindi la retta $SP$ è orizzontale ($y=4$). La perpendicolare $n$ per $S$ è allora verticale e coincide con l'asse $y$ ($x=0$), che è parallelo alla retta $s:\,x=3$: le due rette non si incontrano e il punto $Q$ non esiste. A ciò corrisponde analiticamente l'asintoto verticale $x=3$.

## c) Area della regione

Si calcola l'area compresa tra $\Gamma$, il suo asintoto obliquo, l'asse $y$ e la retta $x=2$. La differenza tra la funzione e l'asintoto si semplifica:
$$\frac{x^2-8x+24}{6-2x}-\left(-\frac{1}{2}x+\frac{5}{2}\right)=\frac{18}{2(6-2x)}=\frac{9}{6-2x}.$$
Su $[0,2]$ tale differenza è positiva, quindi
$$A=\int_0^2\frac{9}{6-2x}\,dx=\left[-\frac{9}{2}\ln|6-2x|\right]_0^2=-\frac{9}{2}\bigl(\ln 2-\ln 6\bigr)=\frac{9}{2}\ln 3\approx 4{,}94\ \text{u}^2.$$

## d) Luogo $K$ simmetrico rispetto a $x=2$

La simmetria rispetto alla retta $x=2$ ha equazioni $x\to 4-x$, $y\to y$. Sostituendo in $\Gamma$:
$$(4-x)^2+2(4-x)y-8(4-x)-6y+24=0\ \Longrightarrow\ x^2-2xy+2y+8=0.$$
Risolvendo rispetto a $y$ si ottiene
$$\boxed{\,K:\ y=\frac{x^2+8}{2(x-1)}\,}.$$

*Fonte:* [📄 PDF p.35](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
