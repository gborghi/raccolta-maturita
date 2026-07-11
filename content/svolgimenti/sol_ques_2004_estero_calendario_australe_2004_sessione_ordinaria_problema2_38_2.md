

**Quesito:** [[Quesiti/ques_2004_estero_calendario_australe_2004_sessione_ordinaria_problema2_38_2|2004 Estero australe Ordinaria — Problema 2 e Quesiti — Quesito 2]] · **Prova:** [[Prove/2004_estero_calendario_australe_2004_sessione_ordinaria_problema2_38|2004 Estero australe Ordinaria — Problema 2 e Quesiti]]

**Quesito.** Determinare la capacità massima di un cono circolare retto di apotema $12\text{ cm}$, esprimendo poi tale valore in litri.

## Impostazione

Indichiamo con $a=12\text{ cm}$ l'apotema (lato) del cono, con $h$ la sua altezza e con $R$ il raggio di base. Il volume è
$$V=\frac{1}{3}\pi R^{2}h.$$

Poiché apotema, altezza e raggio formano un triangolo rettangolo, vale $a^{2}=R^{2}+h^{2}$, da cui
$$R^{2}=a^{2}-h^{2}.$$

Sostituendo si ottiene il volume in funzione della sola altezza:
$$V(h)=\frac{1}{3}\pi\,(a^{2}-h^{2})\,h,\qquad 0\le h\le a.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="164.953" height="145.494" viewBox="-72 -72 123.715 109.121"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M51.045 21.086c0-8.486-27.515-15.364-61.458-15.364S-71.87 12.6-71.87 21.086s27.515 15.365 61.457 15.365 61.458-6.88 61.458-15.365Zm-61.458 0"/><path fill="none" stroke-width=".8" d="M-71.87 21.086-10.413-71.1l61.457 92.186"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-10.413-71.1v92.186M-10.413 21.086h61.457"/><path fill="none" d="M-10.413 13.916h7.17v7.17"/><g stroke="none" font-size="10"><text x="-10.413" y="21.086" font-family="cmmi10" transform="translate(-52.72 -50.553)">a</text><text x="-2.349" y="21.086" font-family="cmr10" transform="translate(-52.72 -50.553)">=</text><text x="8.206" y="21.086" font-family="cmr10" transform="translate(-52.72 -50.553)">12</text></g><text x="-10.413" y="21.086" stroke="none" font-family="cmmi10" font-size="10" transform="translate(6.094 -45.181)">h</text><text x="-10.413" y="21.086" stroke="none" font-family="cmmi10" font-size="10" transform="translate(26.894 10.366)">R</text><path stroke="none" d="M-9.243-71.1a1.17 1.17 0 1 0-2.34 0 1.17 1.17 0 0 0 2.34 0M-9.243 21.086a1.17 1.17 0 1 0-2.34 0 1.17 1.17 0 0 0 2.34 0m-1.17 0"/></g></svg>
</figure>

## Ricerca del massimo

Poiché il fattore $\tfrac{1}{3}\pi$ è costante e positivo, il volume è massimo quando lo è la funzione
$$f(h)=h\,(a^{2}-h^{2})=a^{2}h-h^{3}.$$

Deriviamo e imponiamo la condizione di stazionarietà:
$$f'(h)=a^{2}-3h^{2}.$$
$$f'(h)=0 \;\Rightarrow\; h^{2}=\frac{a^{2}}{3}\;\Rightarrow\; h=\frac{a}{\sqrt{3}}.$$

Nell'intervallo $0\le h\le a$ si ha $f'(h)>0$ per $h<\dfrac{a}{\sqrt{3}}$ e $f'(h)<0$ per $h>\dfrac{a}{\sqrt{3}}$: dunque $h=\dfrac{a}{\sqrt{3}}$ è un punto di massimo.

Con $a=12$:
$$h=\frac{12}{\sqrt{3}}=4\sqrt{3}\ \text{cm}.$$

Il corrispondente raggio di base soddisfa
$$R^{2}=a^{2}-h^{2}=144-48=96\ \text{cm}^{2}.$$

## Volume massimo

Sostituendo nel volume:
$$V=\frac{1}{3}\pi R^{2}h=\frac{1}{3}\pi\cdot 96\cdot 4\sqrt{3}=128\sqrt{3}\,\pi\ \text{cm}^{3}.$$

Numericamente:
$$V=128\sqrt{3}\,\pi\approx 696{,}4\ \text{cm}^{3}.$$

Poiché $1\ \text{litro}=1000\ \text{cm}^{3}$, la capacità massima è
$$V\approx 0{,}70\ \text{litri}.$$

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
