

**Problema:** [[Problemi/prob_2004_scuole_italiane_allestero_americhe_2004_sessione_s_problema1_23_1|2004 Estero Americhe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_problema1_23|2004 Estero Americhe Suppletiva — Problema 1]]

Tra i coni circoscritti a una sfera di raggio $R=10\ \text{cm}$ si determinino: il cono $C$ di volume minimo (e il suo volume in litri); l'ampiezza del settore circolare che si ottiene dallo sviluppo piano della superficie laterale di $C$; il rapporto tra i volumi delle sfere inscritta e circoscritta a $C$.

## a) Il cono di volume minimo

Consideriamo la sezione assiale: è un triangolo isoscele circoscritto al cerchio massimo della sfera, di centro $O$ e raggio $R$. Indichiamo con $C$ il vertice del cono, con $H$ il centro della base e poniamo l'altezza $CH=x$, con $x>2R$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="127.756" height="188.279" viewBox="-72 -72 95.817 141.209"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="m-57.317 55.24 40.232-113.81L23.147 55.24Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M11.368 26.787c0-15.714-12.739-28.452-28.453-28.452s-28.453 12.738-28.453 28.452S-32.799 55.24-17.085 55.24s28.453-12.738 28.453-28.453Zm-28.453 0"/><path stroke="none" d="M-15.885 26.787a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-17.085-58.57V55.24"/><g fill="red" stroke="red"><path fill="none" d="M-17.085 26.787 3.03 35.124"/><text x="-17.085" y="55.24" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(13.591 -27.817)">R</text></g><text x="-17.085" y="55.24" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 -117.344)">C</text><text x="-17.085" y="55.24" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.562 10.366)">H</text><text x="-17.085" y="55.24" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-51.852 10.366)">B</text><text x="-17.085" y="55.24" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 -25.036)">O</text></g></svg>
</figure>

Detto $r=\overline{BH}$ il raggio di base, il raggio $R$ della sfera coincide con il raggio del cerchio inscritto nel triangolo assiale. Uguagliando l'area del triangolo al prodotto tra semiperimetro e raggio inscritto si ottiene
$$r\,x=R\left(r+\sqrt{r^{2}+x^{2}}\right),$$
da cui, isolando la radice ed elevando al quadrato,
$$r^{2}=\frac{R^{2}x}{x-2R}.$$

Il volume del cono è allora
$$V=\frac{1}{3}\pi r^{2}x=\frac{1}{3}\pi R^{2}\,\frac{x^{2}}{x-2R},\qquad x>2R.$$

Il volume è minimo quando lo è la funzione
$$y=\frac{x^{2}}{x-2R}.$$
Derivando,
$$y'=\frac{2x(x-2R)-x^{2}}{(x-2R)^{2}}=\frac{x(x-4R)}{(x-2R)^{2}}.$$
Poiché $x>2R$, il denominatore è positivo; $y'<0$ per $2R<x<4R$ e $y'>0$ per $x>4R$. Dunque $x=4R$ è punto di minimo assoluto.

Il cono di volume minimo ha quindi altezza
$$x=4R$$
e volume
$$V_{\min}=\frac{1}{3}\pi R^{2}\,\frac{(4R)^{2}}{4R-2R}=\frac{1}{3}\pi R^{2}\,\frac{16R^{2}}{2R}=\frac{8}{3}\pi R^{3}.$$

Con $R=10\ \text{cm}$ l'altezza è $x=40\ \text{cm}$ e
$$V_{\min}=\frac{8}{3}\pi\cdot1000\ \text{cm}^{3}=\frac{8}{3}\pi\ \text{dm}^{3}=\frac{8}{3}\pi\ \text{litri}\cong 8{,}378\ \text{litri}.$$

## b) L'angolo del settore circolare

Per il cono $C$ si ha $x=40\ \text{cm}$ e
$$r^{2}=\frac{R^{2}x}{x-2R}=\frac{100\cdot40}{40-20}=200\quad\Rightarrow\quad r=\overline{BH}=10\sqrt{2}\ \text{cm}.$$

L'apotema del cono è
$$\overline{BC}=\sqrt{x^{2}+r^{2}}=\sqrt{40^{2}+(10\sqrt{2})^{2}}=\sqrt{1800}=30\sqrt{2}\ \text{cm}.$$

Sviluppando la superficie laterale si ottiene un settore circolare di raggio pari all'apotema, $\rho=30\sqrt{2}\ \text{cm}$, e di arco lungo quanto la circonferenza di base,
$$\ell=2\pi r=2\pi\cdot10\sqrt{2}=20\pi\sqrt{2}\ \text{cm}.$$

L'ampiezza in radianti dell'angolo al centro è il rapporto tra arco e raggio:
$$\alpha=\frac{\ell}{\rho}=\frac{20\pi\sqrt{2}}{30\sqrt{2}}=\frac{2}{3}\pi\ \text{rad}=120^{\circ}.$$

## c) Il rapporto tra i volumi delle sfere inscritta e circoscritta

La sfera inscritta in $C$ è quella data, di raggio $R=10\ \text{cm}$. Occorre invece determinare il raggio $R_{c}$ della sfera circoscritta al cono $C$.

Nella sezione assiale il cono è inscritto nel cerchio massimo della sfera circoscritta. Detto $V$ il vertice, $H$ il centro della base e $C$ il punto diametralmente opposto a $V$ sull'asse, il segmento $VC=2R_{c}$ è un diametro.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="240.069" height="275.531" viewBox="-72 -72 180.051 206.648"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#00f" stroke-width=".8" d="M107.381 31.054c0-49.5-40.126-89.626-89.625-89.626S-71.87-18.445-71.87 31.054s40.126 89.626 89.626 89.626 89.625-40.126 89.625-89.626Zm-89.625 0"/><path fill="none" stroke-width=".8" d="M-38.569 100.762 17.756-58.57 74.08 100.762Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M17.756-58.57v179.25"/><path stroke="none" d="M19.349 31.054a1.593 1.593 0 1 0-3.187 0 1.593 1.593 0 0 0 3.187 0m-1.593 0"/><text x="17.756" y="31.054" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -93.158)">V</text><text x="17.756" y="31.054" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 80.075)">H</text><text x="17.756" y="31.054" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-67.357 80.075)">A</text><text x="17.756" y="31.054" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 99.991)">C</text><text x="17.756" y="31.054" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 3.417)">O</text></g></svg>
</figure>

Poiché $VC$ è diametro, il triangolo $VAC$ è rettangolo in $A$ e $AH$ è l'altezza relativa all'ipotenusa. Per il secondo teorema di Euclide
$$\overline{AH}^{2}=\overline{VH}\cdot\overline{HC}=x\,(2R_{c}-x).$$
Con $\overline{AH}=r=10\sqrt{2}$ e $x=40$:
$$200=40\,(2R_{c}-40)\ \Rightarrow\ 5=2R_{c}-40\ \Rightarrow\ R_{c}=\frac{45}{2}\ \text{cm}.$$

Il rapporto tra i volumi delle due sfere è uguale al rapporto tra i cubi dei raggi:
$$\frac{V_{\text{inscritta}}}{V_{\text{circoscritta}}}=\left(\frac{R}{R_{c}}\right)^{3}=\left(\frac{10}{45/2}\right)^{3}=\left(\frac{4}{9}\right)^{3}=\frac{64}{729}.$$

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
