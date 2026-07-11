

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_6|2008 Ordinaria — Prova (PNI Informatica) — Quesito 6]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

I lati di un parallelepipedo rettangolo misurano $8$, $9$ e $12$ cm. Si calcoli, in gradi e primi sessagesimali, l'ampiezza dell'angolo che la diagonale uscente da un vertice forma con ciascuno dei tre spigoli concorrenti in quel vertice.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="187.631" height="135.92" viewBox="-72 -72 140.723 101.94"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="m-26.048-9.07-31.3 25.041M-26.048-9.07h93.901M-26.048-9.07v-62.6"/><path fill="none" d="M-57.349 15.971h93.902l31.3-25.04V-71.67l-31.3 25.04Z"/><path fill="none" d="M-57.349 15.971v-62.6h93.902M-57.349-46.63l31.3-25.04h93.902M36.553 15.971v-62.6"/><path fill="none" stroke="red" stroke-width="1.2" d="M-57.349 15.971 67.853-71.67"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-57.349 15.971h93.902M-57.349 15.971v-62.6"/><text x="-57.349" y="15.971" stroke="none" font-family="cmr10" font-size="10" transform="translate(41.947 9.977)">12</text><text x="-57.349" y="15.971" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -28.076)">8</text><text x="-57.349" y="15.971" stroke="none" font-family="cmr10" font-size="10" transform="translate(19.182 -2.542)">9</text><g fill="red" stroke="red"><text x="-57.349" y="15.971" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(66.986 -50.48)">17</text></g><path stroke="none" d="M-55.974 15.971a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/><text x="-57.349" y="15.971" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.589 10.366)">V</text></g></svg>
</figure>

## Lunghezza della diagonale

Fissiamo il vertice $V$ e un sistema di assi lungo i tre spigoli concorrenti in esso, di lunghezze $a=8$, $b=9$, $c=12$. La diagonale del parallelepipedo rettangolo che parte da $V$ raggiunge il vertice opposto e la sua lunghezza è

$$
d=\sqrt{a^2+b^2+c^2}=\sqrt{8^2+9^2+12^2}=\sqrt{64+81+144}=\sqrt{289}=17\ \text{cm}.
$$

## Angoli con i tre spigoli

Ciascuno spigolo concorrente in $V$ è la proiezione ortogonale della diagonale sulla direzione dello spigolo stesso: la diagonale, lo spigolo e la relativa diagonale di faccia formano un triangolo rettangolo in cui lo spigolo è il cateto adiacente all'angolo cercato e la diagonale $d$ è l'ipotenusa. Dunque, detto $\theta$ l'angolo fra la diagonale e uno spigolo di lunghezza $\ell$,

$$
\cos\theta=\frac{\ell}{d}=\frac{\ell}{17}.
$$

**Spigolo di $8$ cm:**

$$
\cos\alpha=\frac{8}{17}\approx 0{,}4706
\quad\Rightarrow\quad
\alpha=\arctan\!\frac{\sqrt{9^2+12^2}}{8}\approx 61{,}93^\circ\approx 61^\circ 56'.
$$

**Spigolo di $9$ cm:**

$$
\cos\beta=\frac{9}{17}\approx 0{,}5294
\quad\Rightarrow\quad
\beta\approx 58{,}03^\circ\approx 58^\circ 2'.
$$

**Spigolo di $12$ cm:**

$$
\cos\gamma=\frac{12}{17}\approx 0{,}7059
\quad\Rightarrow\quad
\gamma\approx 45{,}10^\circ\approx 45^\circ 6'.
$$

## Verifica

I coseni direttori della diagonale rispetto ai tre spigoli devono soddisfare la relazione fondamentale

$$
\cos^2\alpha+\cos^2\beta+\cos^2\gamma=\frac{8^2+9^2+12^2}{17^2}=\frac{289}{289}=1,
$$

come deve essere. Gli angoli richiesti sono quindi

$$
\alpha\approx 61^\circ 56',\qquad \beta\approx 58^\circ 2',\qquad \gamma\approx 45^\circ 6'.
$$

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/geometria #cluster/geometria
