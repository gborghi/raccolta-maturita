

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_3|2005 Ordinaria PNI — Prova — Quesito 3]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Si determinino le equazioni di due simmetrie assiali $\sigma$ e $\varphi$ la cui composizione $\sigma \circ \varphi$ coincida con la traslazione
$$\begin{cases} x' = x + 5 \\ y' = y - 5 \end{cases}$$
e si trovino poi le equazioni di $\varphi \circ \sigma$.

## Impostazione

La composizione di due simmetrie assiali con assi **paralleli** è una **traslazione**: il vettore di traslazione è perpendicolare ai due assi e ha modulo pari al doppio della loro distanza; il suo verso va dall'asse della prima simmetria applicata verso l'asse della seconda.

La traslazione richiesta ha vettore $\vec t = (5,\,-5)$. Poiché $\vec t$ deve essere perpendicolare agli assi, questi hanno la direzione di $(1,1)$, cioè coefficiente angolare $1$: sono rette del tipo $y = x + q$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="294.579" height="226.673" viewBox="-72 -72 220.934 170.005"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 3.64H99.67"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M97.79 1.24c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-25.123" y="3.64" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.726 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-25.123 97.535V-58.556"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-27.523-56.676c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-25.123" y="3.64" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -68.074)">y</text></g><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-64.245 42.763 4.238-4.238 4.238-4.238 4.238-4.239 4.238-4.238 4.239-4.238 4.238-4.238 4.238-4.238 4.238-4.239 4.238-4.238 4.239-4.238 4.238-4.238 4.238-4.238 4.238-4.239 4.239-4.238 4.238-4.238 4.238-4.238 4.238-4.239 4.238-4.238 4.239-4.238 4.238-4.238 4.238-4.238 4.238-4.239 4.239-4.238 4.238-4.238"/><g fill="#00f" stroke="none" font-size="10"><text x="-25.123" y="3.64" font-family="cmmi10" transform="translate(34.551 -68.272)">y</text><text x="-17.083" y="3.64" font-family="cmr10" transform="translate(34.551 -68.272)">=</text><text x="-6.528" y="3.64" font-family="cmmi10" transform="translate(34.551 -68.272)">x</text></g></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-9.474 66.237 4.565-4.564 4.564-4.565 4.564-4.564 4.564-4.564 4.564-4.564 4.564-4.564 4.564-4.564 4.565-4.565 4.564-4.564 4.564-4.564 4.564-4.564 4.564-4.564 4.564-4.564 4.565-4.564 4.564-4.565 4.564-4.564 4.564-4.564 4.564-4.564 4.564-4.564 4.565-4.564 4.564-4.565 4.564-4.564 4.564-4.564 4.564-4.564"/><g fill="red" stroke="none" font-size="10"><text x="-25.123" y="3.64" font-family="cmmi10" transform="translate(128.922 -36.766)">y</text><text x="-17.083" y="3.64" font-family="cmr10" transform="translate(128.922 -36.766)">=</text><text x="-6.528" y="3.64" font-family="cmmi10" transform="translate(128.922 -36.766)">x</text><text x="1.41" y="3.64" font-family="cmsy10" transform="translate(128.922 -36.766)">¡</text><text x="11.41" y="3.64" font-family="cmr10" transform="translate(128.922 -36.766)">5</text></g></g><g stroke-width="1.2"><path fill="none" d="m-25.123 3.64 77.397 77.397"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.199988" d="M53.268 76.593c-1.239 2.024-1.134 3.67-.57 4.869-1.198-.565-2.844-.67-4.868.569"/><g stroke="none" font-size="10"><text x="-25.753" y="1.795" font-family="cmmi10" transform="translate(43.056 32.69)">~</text><text x="-25.123" y="3.64" font-family="cmmi10" transform="translate(43.056 32.69)">t</text><text x="-18.734" y="3.64" font-family="cmr10" transform="translate(43.056 32.69)">=</text><text x="-8.178" y="3.64" font-family="cmr10" transform="translate(43.056 32.69)">(5</text><text x=".711" y="3.64" font-family="cmmi10" transform="translate(43.056 32.69)">;</text><text x="5.155" y="3.64" font-family="cmsy10" transform="translate(43.056 32.69)">¡</text><text x="12.933" y="3.64" font-family="cmr10" transform="translate(43.056 32.69)">5)</text></g></g><path stroke="none" d="M-23.748 3.64a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0M54.498 81.886a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/></g></svg>
</figure>

## a) Le due simmetrie

Cerchiamo le simmetrie assiali rispetto a rette parallele di equazione $y = x + q$. La simmetria rispetto alla retta $x - y + q = 0$ ha equazioni
$$\begin{cases} x' = y - q \\ y' = x + q \end{cases}$$

Scegliamo (una scelta possibile fra infinite):

- $\varphi$: simmetria rispetto a $y = x$ (cioè $q=0$), di equazioni
$$\varphi:\ \begin{cases} x' = y \\ y' = x \end{cases}$$

- $\sigma$: simmetria rispetto a $y = x - 5$ (cioè $q=-5$), di equazioni
$$\sigma:\ \begin{cases} x' = y + 5 \\ y' = x - 5 \end{cases}$$

Verifichiamo che $\sigma \circ \varphi$ (prima $\varphi$, poi $\sigma$) dia la traslazione voluta. Applicando $\varphi$ al punto $(x,y)$ si ottiene $(y,\,x)$; applicando ora $\sigma$ a $(y,\,x)$:
$$\sigma(y,\,x) = (x + 5,\; y - 5)$$
cioè esattamente
$$\sigma \circ \varphi:\ \begin{cases} x' = x + 5 \\ y' = y - 5 \end{cases}$$

La distanza fra i due assi è $\dfrac{|0-(-5)|}{\sqrt{2}} = \dfrac{5}{\sqrt{2}} = \dfrac{5\sqrt{2}}{2}$, il cui doppio vale $5\sqrt{2} = |\vec t|$, in accordo con la teoria.

In generale ogni coppia di rette $y = x + p$ e $y = x + p - 5$ (con $p$ qualsiasi) fornisce una soluzione valida.

## b) La composizione inversa

Scambiando l'ordine, $\varphi \circ \sigma$ significa applicare prima $\sigma$ e poi $\varphi$. Applicando $\sigma$ a $(x,y)$ si ottiene $(y+5,\,x-5)$; applicando ora $\varphi$ (che scambia le coordinate):
$$\varphi(y+5,\,x-5) = (x - 5,\; y + 5)$$
quindi
$$\varphi \circ \sigma:\ \begin{cases} x' = x - 5 \\ y' = y + 5 \end{cases}$$

Si ottiene la **traslazione opposta**, con vettore $-\vec t = (-5,\,5)$. Questo conferma che la composizione di simmetrie assiali non è commutativa: scambiando l'ordine dei due assi si inverte il verso della traslazione.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
