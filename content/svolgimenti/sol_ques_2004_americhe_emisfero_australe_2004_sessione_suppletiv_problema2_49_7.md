

**Quesito:** [[Quesiti/ques_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49_7|2004 Americhe australe Suppletiva — Problema 2 e Quesiti — Quesito 7]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49|2004 Americhe australe Suppletiva — Problema 2 e Quesiti]]

Si chiede di calcolare l'integrale definito

$$\int_0^1 \arcsin x\,dx.$$

**Ricerca di una primitiva.** Integriamo per parti, scegliendo come fattore finito $\arcsin x$ e come fattore differenziale $dx$ (cioè $g'(x)=1$, $g(x)=x$):

$$\int \arcsin x\,dx = x\arcsin x - \int x\cdot\frac{1}{\sqrt{1-x^2}}\,dx.$$

Nell'integrale rimasto riconosciamo, a meno del segno, la derivata di $\sqrt{1-x^2}$. Infatti

$$\frac{d}{dx}\sqrt{1-x^2} = \frac{-2x}{2\sqrt{1-x^2}} = -\frac{x}{\sqrt{1-x^2}},$$

quindi

$$\int \frac{x}{\sqrt{1-x^2}}\,dx = -\sqrt{1-x^2} + k.$$

Sostituendo si ottiene la primitiva cercata:

$$\int \arcsin x\,dx = x\arcsin x + \sqrt{1-x^2} + k.$$

**Calcolo dell'integrale definito.** Applichiamo il teorema fondamentale del calcolo tra $0$ e $1$:

$$\int_0^1 \arcsin x\,dx = \Big[\,x\arcsin x + \sqrt{1-x^2}\,\Big]_0^1.$$

Nell'estremo superiore $x=1$:

$$1\cdot\arcsin 1 + \sqrt{1-1} = 1\cdot\frac{\pi}{2} + 0 = \frac{\pi}{2}.$$

Nell'estremo inferiore $x=0$:

$$0\cdot\arcsin 0 + \sqrt{1-0} = 0 + 1 = 1.$$

Perciò

$$\int_0^1 \arcsin x\,dx = \frac{\pi}{2} - 1 \approx 0.571.$$

Il valore è positivo, come deve essere, poiché nell'intervallo $[0,1]$ la funzione $\arcsin x$ è non negativa: il risultato rappresenta l'area della regione compresa tra il grafico di $y=\arcsin x$, l'asse delle ascisse e la retta $x=1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="149.51" height="203.675" viewBox="-72 -72 112.133 152.757"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="m-58.077 67.176 1.157-1.156 1.157-1.157 1.156-1.158 1.157-1.158 1.156-1.16 1.157-1.162 1.156-1.164 1.157-1.166 1.157-1.169 1.156-1.17 1.157-1.176 1.156-1.18 1.157-1.182 1.157-1.19 1.156-1.192 1.157-1.2 1.156-1.203 1.157-1.212 1.156-1.218 1.157-1.225 1.157-1.233 1.156-1.242 1.157-1.251 1.156-1.261 1.157-1.271 1.157-1.283 1.156-1.293 1.157-1.308 1.156-1.32 1.157-1.336 1.156-1.35 1.157-1.368 1.157-1.385 1.156-1.406 1.157-1.424 1.156-1.448 1.157-1.472 1.157-1.497 1.156-1.525 1.157-1.557 1.156-1.59 1.157-1.626 1.157-1.666 1.156-1.71 1.157-1.761 1.156-1.815 1.157-1.877 1.156-1.949L-1.404.326l1.157-2.122L.909-4.03l1.157-2.366 1.156-2.529 1.157-2.738 1.156-3.012 1.157-3.4 1.157-4.003 1.156-5.165 1.157-10.706.048 105.125z"/><path fill="none" d="M-68.32 67.176h95.201"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M25.001 64.776c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-58.077" y="67.176" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.891 2.153)">x</text><path fill="none" d="M-58.077 77.419V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.477-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-58.077" y="67.176" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -131.808)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.077 67.176 1.157-1.156 1.157-1.157 1.156-1.158 1.157-1.158 1.156-1.16 1.157-1.162 1.156-1.164 1.157-1.166 1.157-1.169 1.156-1.17 1.157-1.176 1.156-1.18 1.157-1.182 1.157-1.19 1.156-1.192 1.157-1.2 1.156-1.203 1.157-1.212 1.156-1.218 1.157-1.225 1.157-1.233 1.156-1.242 1.157-1.251 1.156-1.261 1.157-1.271 1.157-1.283 1.156-1.293 1.157-1.308 1.156-1.32 1.157-1.336 1.156-1.35 1.157-1.368 1.157-1.385 1.156-1.406 1.157-1.424 1.156-1.448 1.157-1.472 1.157-1.497 1.156-1.525 1.157-1.557 1.156-1.59 1.157-1.626 1.157-1.666 1.156-1.71 1.157-1.761 1.156-1.815 1.157-1.877 1.156-1.949L-1.404.326l1.157-2.122L.909-4.03l1.157-2.366 1.156-2.529 1.157-2.738 1.156-3.012 1.157-3.4 1.157-4.003 1.156-5.165 1.157-10.706"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-58.077" y="67.176" font-family="cmmi10" transform="translate(23.358 -89.82)">y</text><text x="-50.037" y="67.176" font-family="cmr10" transform="translate(23.358 -89.82)">=</text><text x="-39.482" y="67.176" font-family="cmr10" transform="translate(23.358 -89.82)">arcsin</text><text x="-12.176" y="67.176" font-family="cmmi10" transform="translate(23.358 -89.82)">x</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M10.21 67.176V-40.087"/><text x="-58.077" y="67.176" stroke="none" font-family="cmr10" font-size="10" transform="translate(65.786 9.977)">1</text><g stroke="none"><text x="-56.877" y="63.239" font-family="cmmi7" font-size="7" transform="translate(-10.86 -105.512)">¼</text><path d="M-67.737-41.036h4.927v.4h-4.927z"/><text x="-56.406" y="70.625" font-family="cmr7" font-size="7" transform="translate(-10.86 -105.512)">2</text></g><path stroke="none" d="M11.576-40.087a1.366 1.366 0 1 0-2.732 0 1.366 1.366 0 0 0 2.732 0m-1.366 0"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.55](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
