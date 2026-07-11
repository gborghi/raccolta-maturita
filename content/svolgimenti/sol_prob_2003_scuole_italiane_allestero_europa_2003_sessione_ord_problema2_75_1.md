

**Problema:** [[Problemi/prob_2003_scuole_italiane_allestero_europa_2003_sessione_ord_problema2_75_1|2003 Europa Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_ord_problema2_75|2003 Europa Ordinaria — Problema 2]]

Si consideri un cono circolare retto.

## a)

Sezionando il cono con un piano parallelo alla base si ottiene un tronco di cono; siano $a$ e $b$ (con $a>b$) i raggi delle due basi e $h$ la sua altezza. Vogliamo esprimere il volume e la superficie laterale del tronco in funzione di $a$, $b$, $h$.

**Volume.** Conviene "completare" il tronco fino al cono di partenza. Il tronco si ottiene togliendo dal cono grande (raggio di base $a$, altezza $h+k$) il cono piccolo che si è asportato (raggio di base $b$, altezza $k$), dove $k$ è l'altezza del cono piccolo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="157.042" height="173.103" viewBox="-72 -72 117.781 129.827"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.317 43.858H45.11L19.504-7.356H-31.71Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="m-31.71-7.356 25.607-51.215L19.504-7.356M-6.103 43.858V-58.571"/><path fill="none" d="M-6.103 43.858h51.215M-6.103-7.357h25.607"/><path stroke="none" d="M-5.202999999999999 43.858a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0M-5.202999999999999-7.357a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0m-.9 0"/><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(22.964 9.835)">a</text><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.658 -54.144)">b</text><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-37.463 -22.135)">h</text><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-10.334 -73.35)">k</text><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -105.962)">V</text><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-62.834 10.366)">B</text><text x="-6.103" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-37.697 -54.747)">D</text></g></svg>
</figure>

Dalla similitudine dei triangoli rettangoli formati dall'asse e dalle apoteme si ha
$$\frac{b}{a}=\frac{k}{h+k} \Rightarrow b(h+k)=a\,k \Rightarrow bh=k(a-b) \Rightarrow k=\frac{bh}{a-b}.$$

Il volume del tronco è allora
$$V=\frac{1}{3}\pi a^{2}(h+k)-\frac{1}{3}\pi b^{2}k=\frac{1}{3}\pi\big[a^{2}h+(a^{2}-b^{2})k\big].$$

Sostituendo $k=\dfrac{bh}{a-b}$ e ricordando che $a^{2}-b^{2}=(a-b)(a+b)$:
$$(a^{2}-b^{2})\,k=(a-b)(a+b)\cdot\frac{bh}{a-b}=(a+b)bh=abh+b^{2}h,$$
quindi
$$V=\frac{1}{3}\pi\big[a^{2}h+abh+b^{2}h\big]=\frac{1}{3}\pi h\,(a^{2}+ab+b^{2}).$$

**Superficie laterale.** L'apotema del tronco (differenza fra i raggi $a-b$ come cateto orizzontale e altezza $h$ come cateto verticale) vale
$$\overline{BD}=\sqrt{h^{2}+(a-b)^{2}}.$$
La superficie laterale del tronco è
$$S_{l}=\pi (a+b)\sqrt{h^{2}+(a-b)^{2}}.$$

Si può ricavare lo stesso risultato per differenza fra la superficie laterale del cono grande $\pi\,a\cdot \overline{BV}$ e quella del cono piccolo $\pi\,b\cdot \overline{DV}$, ottenendo di nuovo $S_{l}=\pi(a+b)\sqrt{h^{2}+(a-b)^{2}}$.

## b)

Supponiamo ora che il cono di partenza abbia superficie laterale $\sqrt{3}\,\pi\ \text{dm}^{2}$ e cerchiamo il suo volume massimo.

Indicati con $r$ il raggio di base e con $\ell$ l'apotema (lato) del cono, la superficie laterale è $S_{l}=\pi r\ell$, dunque
$$\pi r\ell=\sqrt{3}\,\pi \Rightarrow r\ell=\sqrt{3}.$$
Poniamo $\ell=x$ (con $x>0$); allora $r=\dfrac{\sqrt{3}}{x}$. L'altezza del cono è
$$H=\sqrt{\ell^{2}-r^{2}}=\sqrt{x^{2}-\frac{3}{x^{2}}},\qquad \text{con } x^{2}>\sqrt{3}.$$

Il volume vale $V=\dfrac{1}{3}\pi r^{2}H$. Esso è massimo quando lo è
$$V^{2}=\frac{\pi^{2}}{9}\,r^{4}H^{2}=\frac{\pi^{2}}{9}\,r^{4}(\ell^{2}-r^{2}),$$
cioè quando è massima la funzione
$$y=r^{4}(x^{2}-r^{2})=\frac{9}{x^{4}}\Big(x^{2}-\frac{3}{x^{2}}\Big)=9\Big(\frac{1}{x^{2}}-\frac{3}{x^{6}}\Big).$$

Studiamo la derivata prima:
$$y'=9\Big(-\frac{2}{x^{3}}+\frac{18}{x^{7}}\Big)=\frac{18}{x^{7}}\,(9-x^{4}).$$
Poiché $x>0$, il segno di $y'$ è quello di $9-x^{4}$:
$$y'\ge 0 \iff x^{4}\le 9 \iff x^{2}\le 3 \iff 0<x\le\sqrt{3}.$$

Dunque $y$ cresce per $0<x<\sqrt{3}$ e decresce per $x>\sqrt{3}$: il massimo si ha per
$$x=\ell=\sqrt{3},\qquad r=\frac{\sqrt{3}}{\sqrt{3}}=1,\qquad H=\sqrt{x^{2}-r^{2}}=\sqrt{3-1}=\sqrt{2}.$$

Il cono di volume massimo ha quindi raggio di base $1\ \text{dm}$, apotema $\sqrt{3}\ \text{dm}$ e altezza $\sqrt{2}\ \text{dm}$; il volume massimo è
$$V=\frac{1}{3}\pi\cdot 1^{2}\cdot\sqrt{2}=\frac{\sqrt{2}}{3}\pi\ \text{dm}^{3}.$$

## c)

Determiniamo il raggio $R$ della sfera circoscritta al cono massimo (raggio di base $r=1$, altezza $H=\sqrt{2}$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="169.508" height="174.281" viewBox="-72 -72 127.131 130.711"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M42.836-7.257c0-28.335-22.97-51.305-51.306-51.305s-51.305 22.97-51.305 51.305S-36.805 44.05-8.47 44.05s51.306-22.97 51.306-51.306Zm-51.306 0"/><path fill="none" stroke-width=".8" d="M-8.47-58.57 39.908 9.868h-96.755Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-8.47-58.57V44.056"/><path fill="none" d="M-56.847 9.869h96.755"/><path stroke="none" d="M-7.11-7.257a1.36 1.36 0 1 0-2.72 0 1.36 1.36 0 0 0 2.72 0m-1.36 0"/><text x="-8.47" y="-7.257" stroke="none" font-family="cmmi10" font-size="10" transform="translate(4.984 3.417)">O</text><text x="-8.47" y="-7.257" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -54.847)">V</text><g stroke="none"><text x="-8.47" y="-7.257" font-family="cmmi10" font-size="10" transform="translate(-5.43 62.365)">V</text><text x="-.414" y="-10.886" font-family="cmsy7" font-size="7" transform="translate(-5.43 62.365)">0</text></g><text x="-8.47" y="-7.257" stroke="none" font-family="cmmi10" font-size="10" transform="translate(51.91 20.542)">B</text><text x="-8.47" y="-7.257" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-60.467 20.542)">D</text><text x="-8.47" y="-7.257" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 27.492)">H</text><text x="-8.47" y="-7.257" stroke="none" font-family="cmmi10" font-size="10" transform="translate(30.136 -20.768)">R</text><path fill="none" d="M-8.47-7.257 39.908 9.87"/></g></svg>
</figure>

Nella sezione assiale, il vertice $V$ del cono e gli estremi $B$, $D$ della base stanno sulla circonferenza massima della sfera. Detto $V'$ l'estremo del diametro passante per $V$, il triangolo $VBV'$ è rettangolo in $B$ (angolo alla semicirconferenza) e $BH$ è l'altezza relativa all'ipotenusa $VV'=2R$. Per il secondo teorema di Euclide:
$$\overline{HB}^{2}=\overline{VH}\cdot\overline{HV'} \Rightarrow r^{2}=H\,(2R-H).$$
Sostituendo $r=1$ e $H=\sqrt{2}$:
$$1=\sqrt{2}\,(2R-\sqrt{2}) \Rightarrow \frac{1}{\sqrt{2}}=2R-\sqrt{2} \Rightarrow 2R=\frac{\sqrt{2}}{2}+\sqrt{2}=\frac{3\sqrt{2}}{2},$$
da cui
$$R=\frac{3}{4}\sqrt{2}\ \text{dm}.$$

## d)

Calcoliamo la capacità della sfera in centilitri. Il suo volume è
$$V=\frac{4}{3}\pi R^{3}=\frac{4}{3}\pi\Big(\frac{3}{4}\sqrt{2}\Big)^{3}=\frac{4}{3}\pi\cdot\frac{27\cdot 2\sqrt{2}}{64}=\frac{9\sqrt{2}}{8}\pi\ \text{dm}^{3}.$$
Numericamente
$$V=\frac{9\sqrt{2}}{8}\pi\cong 4{,}998\ \text{dm}^{3}=4{,}998\ \text{litri}\cong 499{,}8\ \text{centilitri}\cong 500\ \text{centilitri}.$$

La capacità della sfera è quindi di circa $500$ centilitri.

*Fonte:* [📄 PDF p.75](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
