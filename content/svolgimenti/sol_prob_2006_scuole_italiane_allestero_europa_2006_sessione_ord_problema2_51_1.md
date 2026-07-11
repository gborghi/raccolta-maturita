

**Problema:** [[Problemi/prob_2006_scuole_italiane_allestero_europa_2006_sessione_ord_problema2_51_1|2006 Estero Europa — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_europa_2006_sessione_ord_problema2_51|2006 Estero Europa — Problema 2]]

Sia $T$ il tetraedro regolare di spigolo $l=1{,}20\ \text{m}$, con base $ABC$ e vertice $D$. Indichiamo con $H$ il piede dell'altezza condotta da $D$ (che cade nel baricentro della base) e con $E$ il punto medio di $AB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="206.038" height="170.088" viewBox="-72 -72 154.529 127.566"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 41.597h125.21L1.57-58.57ZM-57.904 41.597 1.57-58.57"/><path fill="none" stroke-dasharray="3.0,3.0" d="m-57.904 41.597 43.823-29.737 81.387 29.737M-14.08 11.86 1.57-58.57M1.57-58.57l-9.39 90.15"/><path stroke="none" d="M-6.5 31.58a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/><text x="-57.904" y="41.597" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="41.597" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.743 10.366)">B</text><text x="-57.904" y="41.597" stroke="none" font-family="cmmi10" font-size="10" transform="translate(47.356 -26.32)">C</text><text x="-57.904" y="41.597" stroke="none" font-family="cmmi10" font-size="10" transform="translate(55.196 -103.7)">D</text><text x="-57.904" y="41.597" stroke="none" font-family="cmmi10" font-size="10" transform="translate(53.617 .35)">H</text><text x="-57.904" y="41.597" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.42 -11.452)">E</text><path stroke="none" d="M-34.672 26.728a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-40.69-8.48H26.6"/><g fill="#00f" stroke="#00f"><text x="-57.904" y="41.597" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.038 -47.925)">®</text></g></g></svg>
</figure>

## a) Volume del tetraedro

La base $ABC$ è un triangolo equilatero di lato $l$, quindi

$$\text{Area}(ABC)=\frac{\sqrt{3}}{4}\,l^{2}.$$

Per l'altezza $DH$ osserviamo che $DE$ è l'altezza del triangolo equilatero $ABD$ (di lato $l$), mentre $HE$ è un terzo dell'altezza della base:

$$DE=\frac{\sqrt{3}}{2}\,l,\qquad HE=\frac{1}{3}\cdot\frac{\sqrt{3}}{2}\,l=\frac{\sqrt{3}}{6}\,l.$$

Dal triangolo rettangolo $DHE$:

$$DH=\sqrt{DE^{2}-HE^{2}}=\sqrt{\frac{3}{4}\,l^{2}-\frac{1}{12}\,l^{2}}=\sqrt{\frac{2}{3}}\,l=\frac{\sqrt{6}}{3}\,l.$$

Il volume del tetraedro è quindi

$$V=\frac{1}{3}\,\text{Area}(ABC)\cdot DH=\frac{1}{3}\cdot\frac{\sqrt{3}}{4}\,l^{2}\cdot\frac{\sqrt{6}}{3}\,l=\frac{\sqrt{2}}{12}\,l^{3}.$$

Sostituendo $l=1{,}20\ \text{m}$ (quindi $l^{3}=1{,}728\ \text{m}^3$):

$$V=\frac{\sqrt{2}}{12}\cdot 1{,}728\cong 0{,}204\ \text{m}^{3}=204\ \text{dm}^{3}=204\ \text{litri}.$$

## b) Piani che dividono $T$ nel rapporto $2:3$

Un piano parallelo alla base, a distanza $x$ dal vertice $D$, stacca dal tetraedro una piramide simile a $T$ con rapporto di similitudine $x/h$, dove $h=DH=\dfrac{\sqrt{6}}{3}\,l\cong 0{,}980\ \text{m}$. I volumi stanno nel cubo del rapporto:

$$\frac{V_{\text{piramide}}}{V(T)}=\left(\frac{x}{h}\right)^{3}.$$

**Primo caso:** la piramide superiore e il tronco stanno come $2:3$, cioè la piramide è $\dfrac{2}{5}$ di $V(T)$:

$$\left(\frac{x}{h}\right)^{3}=\frac{2}{5}\ \Rightarrow\ x=h\sqrt[3]{\frac{2}{5}}\cong 0{,}980\cdot 0{,}7368\cong 0{,}722\ \text{m}.$$

**Secondo caso:** la piramide e il tronco stanno come $3:2$, cioè la piramide è $\dfrac{3}{5}$ di $V(T)$:

$$\left(\frac{x}{h}\right)^{3}=\frac{3}{5}\ \Rightarrow\ x=h\sqrt[3]{\frac{3}{5}}\cong 0{,}980\cdot 0{,}8434\cong 0{,}826\ \text{m}.$$

Sono quindi **due** i piani richiesti, a distanza dal vertice rispettivamente $\cong 0{,}722\ \text{m}$ e $\cong 0{,}826\ \text{m}$.

## c) Piano che rende massimo il volume del prisma

Detta $B=\text{Area}(ABC)$ l'area della base e $B'$ l'area della sezione a distanza $x$ dal vertice, per la similitudine si ha

$$B:B'=h^{2}:x^{2}\ \Rightarrow\ B'=B\cdot\frac{x^{2}}{h^{2}}.$$

Il prisma ha per basi la sezione e la sua proiezione ortogonale sulla base di $T$, e altezza $h-x$; il suo volume è

$$V_{\text{prisma}}=B'\cdot(h-x)=\frac{B}{h^{2}}\,x^{2}(h-x).$$

Il volume è massimo quando lo è $y=x^{2}(h-x)$, con $0\le x\le h$. Derivando:

$$y'=2x(h-x)-x^{2}=-3x^{2}+2hx=x\,(2h-3x)=0\ \Rightarrow\ x=0\ \text{oppure}\ x=\frac{2}{3}h.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="199.236" height="131.274" viewBox="-72 -72 149.427 98.455"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.997 7.423H64.176"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.296 5.023c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-66.306" y="7.423" stroke="none" font-family="cmmi10" font-size="10" transform="translate(134.415 2.153)">x</text><path fill="none" d="M-66.306 14.822v-73.576"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="7.423" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -72.054)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.306 7.423 1.927-.096 1.928-.31 1.928-.497 1.927-.672 1.928-.852 1.928-1 1.927-1.15 1.928-1.288 1.928-1.41 1.927-1.536 1.928-1.63 1.927-1.728 1.928-1.812 1.928-1.88 1.927-1.946 1.928-1.987 1.928-2.037 1.927-2.066 1.928-2.077 1.928-2.088 1.927-2.083 1.928-2.071 1.928-2.044 1.927-2.014 1.928-1.959 1.928-1.907 1.927-1.835 1.928-1.76 1.927-1.666 1.928-1.569 1.928-1.456 1.927-1.338 1.928-1.202 1.928-1.055 1.927-.903 1.928-.74 1.928-.564 1.927-.372 1.928-.181 1.928.028 1.927.248 1.928.48 1.928.723 1.927.97 1.928 1.236 1.927 1.502 1.928 1.794 1.928 2.083 1.927 2.393 1.928 2.704 1.928 3.03 1.927 3.376 1.928 3.719 1.928 4.075 1.927 4.453 1.928 4.826 1.928 5.226 1.927 5.622 1.928 6.039"/><path fill="none" stroke-dasharray="3.0,3.0" d="M9.572 7.423v-54.781"/><g stroke="none"><text x="-65.106" y="3.485" font-family="cmr7" font-size="7" transform="translate(69.804 11.981)">2</text><path d="M4.698 16.704h3.986v.4H4.698z"/><text x="-65.106" y="10.871" font-family="cmr7" font-size="7" transform="translate(69.804 11.981)">3</text><text x="-59.92" y="7.423" font-family="cmmi10" font-size="10" transform="translate(69.804 11.981)">h</text></g><text x="-66.306" y="7.423" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.93 10.477)">h</text><path fill="#00f" stroke="none" d="M11.572-47.358c0-3.59-.896-6.5-2-6.5s-2 2.91-2 6.5.895 6.5 2 6.5 2-2.91 2-6.5m-2 0"/></g></svg>
</figure>

Poiché $y(0)=y(h)=0$ e $y\!\left(\tfrac{2}{3}h\right)=\dfrac{4}{27}h^{3}>0$, il massimo si ha per

$$x=\frac{2}{3}h.$$

Il prisma ha dunque volume massimo quando il tetraedro è tagliato con un piano parallelo alla base a distanza dal vertice pari a $\dfrac{2}{3}$ dell'altezza.

*Fonte:* [📄 PDF p.51](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/geometria #cluster/geometria
