

**Problema:** [[Problemi/prob_2007_pni_2007_sessione_suppletiva_problema2_109_1|2007 PNI Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2007_pni_2007_sessione_suppletiva_problema2_109|2007 PNI Suppletiva — Problema 2]]

Nel piano riferito a un sistema di assi cartesiani $(Oxy)$ è dato il punto $A(2,0)$. Si studia il luogo dei punti che verificano $PO^2+2\,PA^2=8$, l'angolo che la retta $OB$ forma con la tangente alla circonferenza in $B$, la cubica con flesso a tangente orizzontale nell'origine passante per $B$ e l'area compresa tra il segmento e l'arco $OB$.

## a) Il luogo geometrico

Posto $P=(x,y)$ si ha $PO^2=x^2+y^2$ e $PA^2=(x-2)^2+y^2$. La relazione diventa
$$x^2+y^2+2\big[(x-2)^2+y^2\big]=8 \;\Rightarrow\; 3x^2+3y^2-8x=0.$$
Si tratta di una circonferenza; dividendo per $3$,
$$x^2+y^2-\tfrac{8}{3}x=0,$$
con centro $C=\left(\dfrac{4}{3},\,0\right)$ e raggio $R=\dfrac{4}{3}$ (passa per l'origine).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="213.554" height="208.956" viewBox="-72 -72 160.166 156.717"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 16.53H74.914"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M73.034 14.13c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-44.187" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(123.034 2.153)">x</text><path fill="none" d="M-44.187 84.247V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-46.587-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-44.187" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -81.161)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M62.034 16.53c0-29.333-23.778-53.11-53.11-53.11s-53.11 23.777-53.11 53.11 23.777 53.11 53.11 53.11 53.11-23.778 53.11-53.11Zm-53.11 0"/><path fill="none" stroke="red" stroke-width=".8" d="m-44.187 16.53 79.668-45.996"/><path fill="none" stroke="gray" stroke-width=".8" d="M8.924 16.53 35.48-29.466"/><path fill="none" stroke="#008c00" stroke-width=".8" d="M-16.303-59.361 75.314-6.47"/><path stroke="none" d="M-42.367 16.53a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="-44.187" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M10.744 16.53a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="-44.187" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.179 10.366)">C</text><path stroke="none" d="M37.3 16.53a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="-44.187" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.2 10.366)">A</text><path stroke="none" d="M37.3-29.466a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="-44.187" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.2 -49.529)">B</text><g fill="#008c00" stroke="#008c00"><text x="-44.187" y="16.53" fill="#008c00" stroke="none" font-family="cmmi10" font-size="10" transform="translate(107.737 -34.766)">t</text></g></g></svg>
</figure>

## b) Angolo tra $OB$ e la tangente in $B$

Il punto $B$ ha la stessa ascissa di $A$, cioè $x=2$, e ordinata positiva. Sostituendo $x=2$ nell'equazione della circonferenza:
$$12+3y^2-16=0 \;\Rightarrow\; y^2=\frac{4}{3} \;\Rightarrow\; y=\frac{2}{\sqrt3}=\frac{2\sqrt3}{3},$$
quindi $B=\left(2,\,\dfrac{2\sqrt3}{3}\right)$.

Il coefficiente angolare di $OB$ è
$$m_{OB}=\frac{2\sqrt3/3}{2}=\frac{\sqrt3}{3}.$$
La tangente in $B$ è perpendicolare al raggio $CB$; poiché
$$m_{CB}=\frac{\dfrac{2\sqrt3}{3}-0}{\,2-\dfrac{4}{3}\,}=\frac{2\sqrt3/3}{2/3}=\sqrt3,$$
la tangente ha coefficiente angolare $m_t=-\dfrac{1}{m_{CB}}=-\dfrac{\sqrt3}{3}$.

Detto $\alpha$ l'angolo acuto formato dalla retta $OB$ con la tangente $t$:
$$\tan\alpha=\left|\frac{m_t-m_{OB}}{1+m_t\,m_{OB}}\right|=\left|\frac{-\dfrac{\sqrt3}{3}-\dfrac{\sqrt3}{3}}{\,1-\dfrac{1}{3}\,}\right|=\left|\frac{-\dfrac{2\sqrt3}{3}}{\dfrac{2}{3}}\right|=\sqrt3,$$
da cui $\alpha=60^\circ$.

## c) La parabola cubica

Sia $y=ax^3+bx^2+cx+d$. Il passaggio per l'origine impone $d=0$; la tangente orizzontale in $O$ impone $y'(0)=c=0$; la presenza del flesso in $O$ impone $y''(0)=2b=0$, cioè $b=0$. Resta $y=ax^3$. Imponendo il passaggio per $B$:
$$\frac{2\sqrt3}{3}=8a \;\Rightarrow\; a=\frac{1}{4\sqrt3}=\frac{\sqrt3}{12}.$$
La funzione è dunque
$$y=\frac{\sqrt3}{12}x^3.$$
È definita su $\mathbb{R}$, dispari, sempre crescente (essendo $y'=\dfrac{\sqrt3}{4}x^2\ge0$), con concavità verso l'alto per $x>0$ e verso il basso per $x<0$; nell'origine presenta un flesso a tangente orizzontale.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="254.908" height="230.582" viewBox="-72 -72 191.181 172.937"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 22.221h178"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M104.05 19.821c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="15.565" y="22.221" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.298 2.153)">x</text><path fill="none" d="M15.565 100.467V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M13.165-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="15.565" y="22.221" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -86.853)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.68 92.805 2.652-6.937 2.651-6.466 2.652-6.013 2.652-5.576 2.652-5.155 2.652-4.751 2.652-4.364 2.652-3.993 2.652-3.638 2.652-3.3 2.652-2.978 2.652-2.673 2.652-2.384 2.652-2.113 2.652-1.857 2.652-1.617 2.652-1.395 2.652-1.19 2.652-.998 2.652-.826 2.652-.67 2.652-.528 2.652-.406 2.652-.298 2.652-.207 2.651-.133 2.652-.075 2.652-.034 2.652-.009h2.652l2.652-.009 2.652-.033 2.652-.075 2.652-.132 2.652-.206 2.652-.297 2.652-.404 2.652-.528 2.652-.668 2.652-.823 2.652-.998 2.652-1.187 2.652-1.393 2.652-1.616 2.652-1.854 2.652-2.11 2.652-2.382 2.652-2.67 2.652-2.975 2.652-3.297 2.651-3.635 2.652-3.989 2.652-4.358 2.652-4.748 2.652-5.151 2.652-5.573 2.652-6.007 2.652-6.463 2.652-6.93"/><path fill="none" stroke="red" stroke-width=".8" d="m15.565 22.221 62.596-36.14"/><path stroke="none" d="M16.995 22.221a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><text x="15.565" y="22.221" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M79.591-13.918a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><text x="15.565" y="22.221" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.13 -32.723)">B</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="15.565" y="22.221" font-family="cmmi10" font-size="10" transform="translate(32.33 -70.049)">y</text><text x="23.604" y="22.221" font-family="cmr10" font-size="10" transform="translate(32.33 -70.049)">=</text><text x="35.36" y="12.449" font-family="cmsy7" font-size="7" transform="translate(32.33 -70.049)">p</text><path d="M74.26-57.94h3.986v.34H74.26z"/><text x="41.929" y="18.284" font-family="cmr7" font-size="7" transform="translate(32.33 -70.049)">3</text><path d="M67.69-50.528h10.557v.4H67.69z"/><text x="36.651" y="25.67" font-family="cmr7" font-size="7" transform="translate(32.33 -70.049)">12</text><text x="47.115" y="22.221" font-family="cmmi10" font-size="10" transform="translate(32.33 -70.049)">x</text><text x="52.831" y="18.592" font-family="cmr7" font-size="7" transform="translate(32.33 -70.049)">3</text></g></g></g></svg>
</figure>

## d) Area tra il segmento e l'arco $OB$

La retta $OB$ ha equazione $y=m_{OB}\,x=\dfrac{\sqrt3}{3}x$. Nell'intervallo $[0,2]$ la retta sta al di sopra della cubica, quindi l'area richiesta è
$$\text{Area}=\int_0^2\left(\frac{\sqrt3}{3}x-\frac{\sqrt3}{12}x^3\right)dx=\left[\frac{\sqrt3}{6}x^2-\frac{\sqrt3}{48}x^4\right]_0^2.$$
Valutando:
$$\text{Area}=\frac{\sqrt3}{6}\cdot4-\frac{\sqrt3}{48}\cdot16=\frac{2\sqrt3}{3}-\frac{\sqrt3}{3}=\frac{\sqrt3}{3}\approx0{,}58\ \text{u}^2.$$

*Fonte:* [📄 PDF p.109](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
