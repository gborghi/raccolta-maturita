

**Problema:** [[Problemi/prob_2001_suppletiva_pni_2001_problema2_45_1|2001 Suppletiva PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_problema2_45|2001 Suppletiva PNI — Problema 2]]

Una lattina cilindrica circolare retta ha capacità assegnata. Trascurando lo spessore del materiale, si determinino: **a)** le dimensioni della lattina per cui occorre la minima quantità di materiale; **b)** posto il volume $V = 2\,\text{dl} = 200\ \text{cm}^3$, le misure nel caso a); **c)** le misure nel caso in cui il diametro della base sia la sezione aurea dell'altezza.

**Impostazione.** Siano $r$ il raggio di base e $h$ l'altezza del cilindro. Il volume è fissato,
$$V = \pi r^2 h,$$
mentre la superficie totale (due basi più superficie laterale) è
$$S = 2\pi r^2 + 2\pi r h.$$

## a)

Dalla condizione sul volume ricaviamo $h = \dfrac{V}{\pi r^2}$; sostituendo in $S$ otteniamo la superficie come funzione del solo raggio:
$$S(r) = 2\pi r^2 + \frac{2V}{r}, \qquad S'(r) = 4\pi r - \frac{2V}{r^2}.$$

Ponendo $S'(r) = 0$ si ha $4\pi r^3 = 2V$, cioè
$$r^3 = \frac{V}{2\pi} \quad\Rightarrow\quad r = \sqrt[3]{\frac{V}{2\pi}}.$$

Poiché $S'(r) < 0$ per $0 < r < \sqrt[3]{V/2\pi}$ e $S'(r) > 0$ oltre tale valore, questo è un punto di minimo (relativo e assoluto). L'altezza corrispondente è
$$h = \frac{V}{\pi r^2} = \frac{V}{\pi}\cdot\left(\frac{2\pi}{V}\right)^{2/3} = 2\sqrt[3]{\frac{V}{2\pi}} = 2r.$$

Dunque la lattina di minimo materiale è un **cilindro equilatero**, con altezza uguale al diametro:
$$\boxed{\,h = 2r\,}.$$

## b)

Per $V = 200\ \text{cm}^3$ si ha
$$r^3 = \frac{V}{2\pi} = \frac{200}{2\pi} = \frac{100}{\pi} \simeq 31{,}83,$$
da cui
$$r = \sqrt[3]{\frac{100}{\pi}} \simeq 3{,}17\ \text{cm}, \qquad h = 2r \simeq 6{,}34\ \text{cm}.$$

La quantità minima di latta è
$$S_{\min} = 2\pi r^2 + 4\pi r^2 = 6\pi r^2 \simeq 6\pi \cdot 10{,}05 \simeq 189{,}6\ \text{cm}^2.$$

## c)

Ricordiamo che $x$ è sezione aurea di $a$ se è medio proporzionale tra $a$ e $a - x$, cioè $a : x = x : (a - x)$, da cui $x = \dfrac{\sqrt{5}-1}{2}\,a$. Imponendo che il diametro di base $2r$ sia la sezione aurea dell'altezza $h$:
$$2r = \frac{\sqrt{5}-1}{2}\,h \quad\Rightarrow\quad h = \frac{4r}{\sqrt{5}-1} = \frac{4r(\sqrt{5}+1)}{4} = (\sqrt{5}+1)\,r.$$

Sostituendo in $V = \pi r^2 h = 200$:
$$(\sqrt{5}+1)\,\pi r^3 = 200 \quad\Rightarrow\quad r^3 = \frac{200}{(\sqrt{5}+1)\pi} = \frac{200(\sqrt{5}-1)}{4\pi} = \frac{50(\sqrt{5}-1)}{\pi}.$$

Numericamente, con $\sqrt{5}-1 \simeq 1{,}2361$, si ha $r^3 \simeq 19{,}68\ \text{cm}^3$, quindi
$$r \simeq 2{,}70\ \text{cm}, \qquad h = (\sqrt{5}+1)\,r \simeq 3{,}236 \cdot 2{,}70 \simeq 8{,}74\ \text{cm}.$$

$$\boxed{\;r \simeq 2{,}70\ \text{cm}, \quad h \simeq 8{,}74\ \text{cm}\;}$$

**Confronto.** Nel caso ottimo a) il cilindro è "tozzo" ($h = 2r$); nel caso c) è più "slanciato" ($h/r = \sqrt{5}+1 \simeq 3{,}24$). Una comune lattina da $33$ cl ha $h/r \simeq 3{,}5$, cioè è ancora più snella del minimo geometrico, per ragioni ergonomiche ed estetiche.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="243.534" height="138.528" viewBox="-72 -72 182.651 103.896"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-20.086000000000002 4.81c0-3.85-11.592-6.971-25.892-6.971S-71.87.959-71.87 4.809s11.592 6.972 25.892 6.972S-20.086 8.66-20.086 4.81ZM-71.87 4.81v-51.784M-20.086 4.81v-51.784M-71.87-46.974c0 3.85 11.592 6.971 25.892 6.971s25.892-3.121 25.892-6.971"/><path fill="none" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-71.87-46.974c0-3.85 11.592-6.971 25.892-6.971s25.892 3.121 25.892 6.971"/><g stroke="none" font-size="8"><text x="-20.086" y="4.81" font-family="cmmi8" transform="translate(-38.169 -23.114)">h</text><text x="-12.827" y="4.81" font-family="cmr8" transform="translate(-38.169 -23.114)">=</text><text x="-3.854" y="4.81" font-family="cmr8" transform="translate(-38.169 -23.114)">2</text><text x=".396" y="4.81" font-family="cmmi8" transform="translate(-38.169 -23.114)">r</text></g><g stroke="none" font-family="cmr8" font-size="8"><text x="-20.086" y="4.81" transform="translate(-43.6 21.483)">b)</text><text x="-9.225" y="4.81" transform="translate(-43.6 21.483)">ottimo</text></g><path fill="none" stroke-width=".8" d="M99.41499999999999 4.81c0-3.3-9.809-5.975-21.909-5.975S55.598 1.51 55.598 4.81s9.808 5.975 21.908 5.975S99.415 8.11 99.415 4.81ZM55.598 4.81v-70.705M99.415 4.81v-70.705M55.598-65.895c0 3.3 9.809 5.975 21.909 5.975s21.908-2.675 21.908-5.975"/><path fill="none" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M55.598-65.895c0-3.3 9.809-5.975 21.909-5.975s21.908 2.675 21.908 5.975"/><g stroke="none"><text x="-20.086" y="4.81" font-family="cmmi8" font-size="8" transform="translate(71.149 -33.166)">h</text><text x="-12.827" y="4.81" font-family="cmr8" font-size="8" transform="translate(71.149 -33.166)">=</text><text x="-3.854" y="4.81" font-family="cmr8" font-size="8" transform="translate(71.149 -33.166)">(</text><text x="-.549" y="-1.838" font-family="cmsy8" font-size="8" transform="translate(71.149 -33.166)">p</text><path d="M77.684-35.364h4.25v.36h-4.25z"/><text x="6.535" y="4.81" font-family="cmr8" font-size="8" transform="translate(71.149 -33.166)">5</text><text x="12.674" y="4.81" font-family="cmr8" font-size="8" transform="translate(71.149 -33.166)">+</text><text x="21.174" y="4.81" font-family="cmr8" font-size="8" transform="translate(71.149 -33.166)">1)</text><text x="28.729" y="4.81" font-family="cmmi8" font-size="8" transform="translate(71.149 -33.166)">r</text></g><g stroke="none" font-family="cmr8" font-size="8"><text x="-20.086" y="4.81" transform="translate(68.051 21.483)">c)</text><text x="-10.169" y="4.81" transform="translate(68.051 21.483)">sezione</text><text x="18.684" y="4.81" transform="translate(68.051 21.483)">aurea</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.45](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)


#maturita/soluzione #area/geometria #cluster/geometria
