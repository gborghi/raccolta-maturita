

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_167_4|2005 Suppletiva PNI — Prova — Quesito 4]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

Una lattina cilindrica deve contenere $0,4$ litri di bibita. Determinare le dimensioni (raggio di base e altezza) del cilindro circolare retto di dato volume che rende **minima la superficie totale**, e calcolare tale superficie minima.

## Impostazione

La capacità della lattina è

$$V = 0,4 \text{ litri} = 0,4 \text{ dm}^3 = 400 \text{ cm}^3.$$

Indichiamo con $r$ il raggio di base e con $h$ l'altezza del cilindro (in cm), con $r>0$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="150.149" height="152.815" viewBox="-72 -72 112.612 114.611"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M13.487999999999996-57.644C13.488-65.5-5.62-71.87-29.19-71.87S-71.87-65.5-71.87-57.644s19.108 14.227 42.68 14.227c23.57 0 42.678-6.37 42.678-14.227ZM-71.87 27.715v-85.359M13.488 27.715v-85.359M-71.87 27.715c0 7.857 19.108 14.226 42.68 14.226 23.57 0 42.678-6.37 42.678-14.226"/><path fill="none" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M13.488 27.715c0-7.858-19.108-14.227-42.679-14.227s-42.679 6.37-42.679 14.227"/><path fill="none" d="M-29.19-57.644h42.278"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M11.208-60.044c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-29.191" y="27.715" stroke="none" font-family="cmmi10" font-size="10" transform="translate(18.945 -88.891)">r</text><path stroke="none" d="M-27.69-57.644a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><path fill="none" d="M27.715 27.315v-84.559"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M30.115 25.435c-1.44.38-2.12 1.226-2.4 2.08-.28-.854-.96-1.7-2.4-2.08M25.315-55.364c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-29.191" y="27.715" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.438 -39.207)">h</text></g></svg>
</figure>

Il volume di un cilindro circolare retto è

$$V = \pi r^2 h = 400 \quad\Rightarrow\quad h = \frac{400}{\pi r^2}.$$

La superficie totale è la somma della superficie laterale $2\pi r h$ e delle due basi $2\pi r^2$:

$$S = 2\pi r^2 + 2\pi r h.$$

Sostituendo l'espressione di $h$ ricavata dal vincolo sul volume otteniamo $S$ come funzione della sola variabile $r$:

$$S(r) = 2\pi r^2 + 2\pi r \cdot \frac{400}{\pi r^2} = 2\pi r^2 + \frac{800}{r}, \qquad r>0.$$

## Ricerca del minimo

La funzione $S(r)$ è continua e derivabile per ogni $r>0$. Calcoliamo la derivata prima:

$$S'(r) = 4\pi r - \frac{800}{r^2} = \frac{4\pi r^3 - 800}{r^2}.$$

Poiché $r^2>0$, il segno di $S'(r)$ dipende dal numeratore. Poniamo $S'(r)=0$:

$$4\pi r^3 = 800 \quad\Rightarrow\quad r^3 = \frac{200}{\pi} \quad\Rightarrow\quad r = \sqrt[3]{\frac{200}{\pi}}.$$

Studiando il segno di $S'(r)$:

- $S'(r) < 0$ per $0 < r < \sqrt[3]{200/\pi}$ (la funzione è decrescente);
- $S'(r) > 0$ per $r > \sqrt[3]{200/\pi}$ (la funzione è crescente).

Quindi in $r = \sqrt[3]{200/\pi}$ la superficie $S$ presenta un **minimo assoluto**.

## Dimensioni e superficie minima

Per tale valore di $r$ l'altezza vale

$$h = \frac{400}{\pi r^2} = \frac{400}{\pi} \cdot \frac{1}{r^2}.$$

Ricordando che $r^3 = \dfrac{200}{\pi}$, cioè $\dfrac{200}{\pi} = r^3$, si ha

$$h = \frac{400}{\pi r^2} = \frac{2}{r^2} \cdot \frac{200}{\pi} = \frac{2 r^3}{r^2} = 2r.$$

L'altezza è dunque uguale al diametro di base: il cilindro di superficie totale minima è il **cilindro equilatero**. Tra tutti i cilindri circolari retti di dato volume, quello equilatero ha la superficie totale minima.

Numericamente:

$$r = \sqrt[3]{\frac{200}{\pi}} \approx 3,99 \text{ cm}, \qquad h = 2r \approx 7,99 \text{ cm}.$$

Per calcolare la superficie minima osserviamo che dalla condizione $4\pi r = \dfrac{800}{r^2}$ segue $\dfrac{800}{r} = 4\pi r^2$, quindi

$$S_{\min} = 2\pi r^2 + \frac{800}{r} = 2\pi r^2 + 4\pi r^2 = 6\pi r^2.$$

Sostituendo $r^2 = \sqrt[3]{(200/\pi)^2}$:

$$S_{\min} = 6\pi \sqrt[3]{\left(\frac{200}{\pi}\right)^2} \approx 300,5 \text{ cm}^2.$$

*Fonte:* [📄 PDF p.179](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
