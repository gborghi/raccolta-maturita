

**Quesito:** [[Quesiti/ques_2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120_5|2006 Straordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120|2006 Straordinaria — Questionario]]

Liceo Scientifico, Ordinamento 2006 — Sessione Straordinaria.

**Testo.** Dimostrare che la derivata, rispetto a $x$, della funzione $\arctan(x)$ è $\dfrac{1}{1+x^{2}}$.

## Svolgimento

Poniamo
$$y = \arctan(x),$$
il che equivale a
$$x = \tan(y), \qquad y \in \left(-\tfrac{\pi}{2},\, \tfrac{\pi}{2}\right).$$

La funzione $y = \arctan(x)$ è la funzione inversa di $x = \tan(y)$. Per il **teorema sulla derivata della funzione inversa**, se $x = \tan(y)$ è derivabile con derivata non nulla, allora
$$\frac{dy}{dx} = \frac{1}{\dfrac{dx}{dy}}.$$

Calcoliamo la derivata di $x = \tan(y)$ rispetto a $y$. Ricordando che
$$\frac{d}{dy}\tan(y) = 1 + \tan^{2}(y),$$
otteniamo
$$\frac{dx}{dy} = 1 + \tan^{2}(y).$$

Poiché $\tan(y) = x$, possiamo sostituire $\tan^{2}(y) = x^{2}$, da cui
$$\frac{dx}{dy} = 1 + x^{2}.$$

Applicando il teorema della funzione inversa:
$$\frac{dy}{dx} = \frac{1}{1 + x^{2}}.$$

Osserviamo che $1 + x^{2} > 0$ per ogni $x \in \mathbb{R}$, quindi la derivata esiste ed è positiva su tutto l'asse reale: coerentemente, $\arctan(x)$ è una funzione ovunque derivabile e strettamente crescente, con asintoti orizzontali $y = \pm\dfrac{\pi}{2}$.

$$\boxed{\ \frac{d}{dx}\arctan(x) = \frac{1}{1 + x^{2}}\ }$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="507.568" height="169.503" viewBox="-72 -72 380.676 127.127"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07-2.249h358.105"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M284.155-4.649c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="107.182" y="-2.249" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(182.785 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M107.182 54.657V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M104.782-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="107.182" y="-2.249" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -62.383)">y</text></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-46.942h358.505"/><g fill="#000" stroke="#000"><g stroke="none"><text x="108.382" y="-6.186" font-family="cmmi7" font-size="7" transform="translate(182.785 -42.942)">¼</text><path d="M291.167-47.891h4.927v.4h-4.927z"/><text x="108.853" y="1.2" font-family="cmr7" font-size="7" transform="translate(182.785 -42.942)">2</text></g></g></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 42.445h358.505"/><g fill="#000" stroke="#000"><g stroke="none"><text x="107.182" y="-2.249" font-family="cmsy10" font-size="10" transform="translate(182.785 46.445)">¡</text><text x="116.16" y="-6.186" font-family="cmmi7" font-size="7" transform="translate(182.785 46.445)">¼</text><path d="M298.945 41.496h4.927v.4h-4.927z"/><text x="116.631" y="1.2" font-family="cmr7" font-size="7" transform="translate(182.785 46.445)">2</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-63.534 37.746 4.321-.118 4.322-.128 4.322-.132 4.321-.14 4.322-.149 4.321-.156 4.322-.165 4.321-.174 4.322-.188 4.322-.198 4.321-.211 4.322-.227 4.321-.245 4.322-.259 4.322-.28 4.321-.304 4.322-.326 4.321-.355 4.322-.388 4.321-.422 4.322-.465 4.322-.51 4.321-.563 4.322-.625 4.321-.7 4.322-.782 4.321-.883 4.322-1.001 4.322-1.14 4.321-1.307 4.322-1.509 4.321-1.746 4.322-2.027 4.321-2.362 4.322-2.741 4.322-3.156 4.321-3.575 4.322-3.95 4.321-4.217 4.322-4.313 4.321-4.218 4.322-3.952 4.322-3.578 4.321-3.158 4.322-2.744 4.321-2.364 4.322-2.03 4.321-1.748 4.322-1.51L152.545-31l4.321-1.143 4.322-1 4.321-.883 4.322-.785 4.321-.699 4.322-.625 4.322-.567 4.321-.51 4.322-.464 4.321-.421 4.322-.389 4.321-.355 4.322-.326 4.322-.305 4.321-.279 4.322-.262 4.321-.241 4.322-.227 4.321-.211 4.322-.201 4.322-.185 4.321-.175 4.322-.167 4.321-.156 4.322-.149 4.321-.14 4.322-.133 4.322-.124 4.321-.122"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="107.182" y="-2.249" font-family="cmmi10" transform="translate(101.146 -27.772)">y</text><text x="115.222" y="-2.249" font-family="cmr10" transform="translate(101.146 -27.772)">=</text><text x="125.777" y="-2.249" font-family="cmr10" transform="translate(101.146 -27.772)">arctan</text><text x="155.249" y="-2.249" font-family="cmmi10" transform="translate(101.146 -27.772)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.123](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
