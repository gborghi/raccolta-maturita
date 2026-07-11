

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26_6|2005 Americhe Ordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26|2005 Americhe Ordinaria — Questionario]]

Calcolare il limite

$$\lim_{x\to +\infty}\frac{2x-\sin 3x}{3x+\cos 2x}$$

e stabilire se sia vero o falso che si possa ricorrere al teorema di De L'Hôpital, fornendo una spiegazione esauriente.

## Calcolo del limite

Raccogliamo $x$ a numeratore e a denominatore:

$$\lim_{x\to +\infty}\frac{2x-\sin 3x}{3x+\cos 2x}=\lim_{x\to +\infty}\frac{x\left(2-\dfrac{\sin 3x}{x}\right)}{x\left(3+\dfrac{\cos 2x}{x}\right)}=\lim_{x\to +\infty}\frac{2-\dfrac{\sin 3x}{x}}{3+\dfrac{\cos 2x}{x}}.$$

Le funzioni $\sin 3x$ e $\cos 2x$ sono limitate (assumono valori in $[-1,1]$), mentre $x\to +\infty$; pertanto, per il teorema del confronto,

$$\lim_{x\to +\infty}\frac{\sin 3x}{x}=0,\qquad \lim_{x\to +\infty}\frac{\cos 2x}{x}=0.$$

Sostituendo si ottiene

$$\lim_{x\to +\infty}\frac{2x-\sin 3x}{3x+\cos 2x}=\frac{2-0}{3+0}=\frac{2}{3}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="432.783" height="199.311" viewBox="-72 -72 324.587 149.484"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-59.018 71.728h298.354"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M237.456 69.328c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.018" y="71.728" stroke="none" font-family="cmmi10" font-size="10" transform="translate(302.287 2.153)">x</text><path fill="none" d="M-59.018 71.728V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.418-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-59.018" y="71.728" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.36)">y</text><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M-59.018-4.15H225.51"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-57.818" y="67.79" font-family="cmr7" font-size="7" transform="translate(-9.92 -73.378)">2</text><path d="M-67.737-4.35h3.986v.4h-3.986z"/><text x="-57.818" y="75.176" font-family="cmr7" font-size="7" transform="translate(-9.92 -73.378)">3</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-50.482 59.823 3.493-40.956 3.494-44.688 3.493-27.906 3.494-1.016 3.493 18.58 3.493 23.6 3.494 17.91 3.493 8.171 3.494-.825 3.493-6.616 3.494-8.416 3.493-6.608 3.493-2.539 3.494 1.75L1.919-5.6l3.494 3.523 3.493.674L12.4-3.674l3.493-3.343 3.493-2.057 3.494.636 3.493 3.194 3.494 4.322 3.493 3.465 3.494.894 3.493-2.343 3.493-4.79 3.494-5.207 3.493-3.267 3.494.115 3.493 3.247 3.494 4.672L64.8-.18l3.493 1.747 3.494-.782 3.493-2.523 3.494-2.893 3.493-1.938 3.493-.292 3.494 1.155 3.493 1.655 3.494 1.023 3.493-.242 3.494-1.28 3.493-1.418 3.493-.563 3.494.799 3.493 1.919 3.494 2.177 3.493 1.372 3.494-.198 3.493-1.85 3.493-2.786 3.494-2.517 3.493-1.106 3.494.776 3.493 2.232 3.494 2.624 3.493 1.877 3.493.45 3.494-.947 3.493-1.719 3.494-1.615 3.493-.804 3.493.231 3.494.93 3.493.944 3.494.339 3.493-.468 3.494-.94 3.493-.77 3.493-.03 3.494.872 3.493 1.44 3.494 1.333 3.493.54 3.494-.616 3.493-1.605 3.493-1.93"/></g></svg>
</figure>

## Il teorema di De L'Hôpital

Al tendere di $x\to +\infty$ il numeratore $2x-\sin 3x\to +\infty$ e il denominatore $3x+\cos 2x\to +\infty$, dunque si presenta la forma indeterminata $\dfrac{\infty}{\infty}$: la condizione preliminare del teorema è soddisfatta.

Tuttavia il teorema di De L'Hôpital richiede, come ipotesi essenziale, che **esista** il limite del rapporto delle derivate. Derivando otteniamo

$$\frac{\frac{d}{dx}(2x-\sin 3x)}{\frac{d}{dx}(3x+\cos 2x)}=\frac{2-3\cos 3x}{3-2\sin 2x}.$$

Questa espressione, per $x\to +\infty$, **non ammette limite**: il numeratore oscilla nell'intervallo $[-1,5]$ e il denominatore nell'intervallo $[1,5]$, senza stabilizzarsi su alcun valore. Non essendo verificata l'ipotesi che il limite del rapporto delle derivate esista, il teorema di De L'Hôpital **non è applicabile**.

È dunque **falso** che si possa ricorrere a tale teorema. Si tratta di un esempio classico in cui il limite della funzione esiste ed è finito (vale $\tfrac{2}{3}$), eppure il metodo di De L'Hôpital non fornisce alcuna informazione: la mancata esistenza del limite del rapporto delle derivate non implica infatti la mancata esistenza del limite originario. Il valore corretto va quindi ottenuto, come sopra, con il raccoglimento di $x$.

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
