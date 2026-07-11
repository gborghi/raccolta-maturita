

**Quesito:** [[Quesiti/ques_2005_estero_australe_2005_suppletiva_questionario_66_1|2005 Estero Australe Suppletiva — Questionario — Quesito 1]] · **Prova:** [[Prove/2005_estero_australe_2005_suppletiva_questionario_66|2005 Estero Australe Suppletiva — Questionario]]

L'equazione $f(b)-f(a)=f'(c)\,(b-a)$ esprime il **teorema del valor medio** (o di Lagrange). Si chiede di determinare $c$ nel caso

$$f(x)=\sqrt[3]{x^2}=x^{2/3},\qquad a=0,\qquad b=1.$$

**Verifica delle ipotesi.** La funzione $f(x)=\sqrt[3]{x^2}$ è continua su tutto $\mathbb{R}$, quindi in particolare sull'intervallo chiuso $[a;b]=[0;1]$. La sua derivata è

$$f'(x)=\frac{2}{3}\,x^{-1/3}=\frac{2}{3\sqrt[3]{x}},$$

definita per ogni $x\neq 0$, dunque $f$ è derivabile nell'intervallo aperto $(0;1)$. Sono pertanto soddisfatte tutte le ipotesi del teorema di Lagrange, che garantisce l'esistenza di almeno un $c\in(0;1)$ tale che

$$f'(c)=\frac{f(b)-f(a)}{b-a}.$$

**Calcolo di $c$.** Il rapporto incrementale vale

$$\frac{f(1)-f(0)}{1-0}=\frac{1-0}{1}=1.$$

Imponendo $f'(c)=1$ si ottiene

$$\frac{2}{3\sqrt[3]{c}}=1 \;\Rightarrow\; 3\sqrt[3]{c}=2 \;\Rightarrow\; \sqrt[3]{c}=\frac{2}{3} \;\Rightarrow\; c=\left(\frac{2}{3}\right)^{3}=\frac{8}{27}.$$

Poiché $\dfrac{8}{27}\approx 0{,}296$ appartiene all'intervallo $(0;1)$, il valore trovato è accettabile: esso è l'unico punto in cui la tangente al grafico è parallela alla corda $AB$.

$$\boxed{\,c=\dfrac{8}{27}\,}$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="250.978" height="225.739" viewBox="-72 -72 188.234 169.305"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-63.88 78.272H77.523"/><path stroke="none" d="m79.522 78.272-3.2-1.6 1.2 1.6-1.2 1.6"/><text x="-57.904" y="78.272" stroke="none" font-family="cmmi10" font-size="10" transform="translate(140.959 2.153)">x</text><path fill="none" d="M-57.904 84.247V-57.154"/><path stroke="none" d="m-57.904-59.154-1.6 3.2 1.6-1.2 1.6 1.2"/><text x="-57.904" y="78.272" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -142.903)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-57.784 77.054 1.632-5.941 1.632-3.944 1.632-3.383 1.632-2.928 1.632-2.965 1.632-2.438 1.632-2.367 1.632-2.306 1.632-2.212 1.632-2.511 1.632-1.948 1.632-1.925 1.632-1.9 1.632-1.864 1.632-1.841 1.632-1.817 1.632-1.77 1.632-1.756 1.632-1.71 1.632-1.696 1.632-1.663 1.632-1.638 1.632-1.6 1.632-1.59 1.632-1.567 1.632-1.554 1.632-1.517 1.632-1.506 1.632-1.495 1.632-1.47 1.632-1.459L-5.56 9.34l1.632-1.422 1.632-1.412 1.632-1.41L.968 3.723 2.6 2.347 4.232.985 5.864-.366l1.632-1.328 1.632-1.325 1.632-1.315 1.632-1.304 1.632-1.302 1.632-1.28 1.632-1.278 1.632-1.256 1.632-1.266 1.631-1.243 1.633-1.244 1.632-1.23 1.631-1.22 1.632-1.219 1.632-1.196 1.632-1.207 1.632-1.194 1.632-1.184 1.632-1.172 1.632-1.184 1.632-1.16 1.632-1.16L43.4-28.79l1.632-1.136 1.632-1.147 1.632-1.125 1.632-1.134 1.632-1.125 1.632-1.11 1.632-1.113 1.632-1.11 1.632-1.102 1.632-1.1 1.632-1.086 1.632-1.07 1.632-1.082 1.632-1.076 1.632-1.072 1.632-1.065 1.632-1.063"/><g fill="#00f" stroke="none"><text x="-57.904" y="78.272" font-family="cmmi10" font-size="10" transform="translate(132.78 -121.975)">y</text><text x="-49.865" y="78.272" font-family="cmr10" font-size="10" transform="translate(132.78 -121.975)">=</text><text x="-36.532" y="73.052" font-family="cmr5" font-size="5" transform="translate(132.78 -121.975)">3</text><text x="-38.684" y="69.522" font-family="cmsy10" font-size="10" transform="translate(132.78 -121.975)">p</text><path d="M102.43-52.853h10.2v.4h-10.2z"/><text x="-30.351" y="78.272" font-family="cmmi10" font-size="10" transform="translate(132.78 -121.975)">x</text><text x="-24.635" y="75.383" font-family="cmr7" font-size="7" transform="translate(132.78 -121.975)">2</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="M-57.904 78.272 67.573-47.205"/><path fill="none" stroke="teal" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-61.489 64.171 43.673-40.99"/><path stroke="none" d="M-56.471 78.272a1.433 1.433 0 1 0-2.866 0 1.433 1.433 0 0 0 2.866 0m-1.433 0"/><text x="-57.904" y="78.272" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><path stroke="none" d="M63.031-41.23a1.433 1.433 0 1 0-2.867 0 1.433 1.433 0 0 0 2.867 0m-1.434 0"/><text x="-57.904" y="78.272" stroke="none" font-family="cmmi10" font-size="10" transform="translate(107.882 -123.034)">B</text><path fill="teal" stroke="none" d="M-21.098 25.213a1.433 1.433 0 1 0-2.866 0 1.433 1.433 0 0 0 2.866 0m-1.433 0"/><path fill="none" stroke-dasharray="0.4,2.0" d="M-22.531 78.272V25.213"/><g stroke="none"><text x="-57.904" y="78.272" font-family="cmmi10" font-size="10" transform="translate(21.356 11.981)">c</text><text x="-50.799" y="78.272" font-family="cmr10" font-size="10" transform="translate(21.356 11.981)">=</text><text x="-37.05" y="74.334" font-family="cmr7" font-size="7" transform="translate(21.356 11.981)">8</text><path d="M-17.687 87.553h7.972v.4h-7.972z"/><text x="-39.043" y="81.72" font-family="cmr7" font-size="7" transform="translate(21.356 11.981)">27</text></g></g></svg>
</figure>

Nella figura la corda $AB$ (in rosso, di coefficiente angolare $1$) e la tangente al grafico nel punto di ascissa $c=\tfrac{8}{27}$ (tratteggiata) risultano parallele, come afferma il teorema di Lagrange.

*Fonte:* [📄 PDF p.66](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
