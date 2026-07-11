

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_4|2005 Ordinaria PNI — Prova — Quesito 4]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Una bevanda è venduta in lattine cilindriche (cilindro circolare retto) di capacità $0{,}4$ litri $=400\ \text{cm}^3$. Trascurando lo spessore della latta, si cercano il raggio $r$ e l'altezza $h$ (in centimetri) che rendono minima la superficie totale di latta impiegata.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="184.507" height="152.281" viewBox="-72 -72 138.38 114.211"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M13.287999999999997-57.844C13.288-65.7-5.82-72.07-29.39-72.07S-72.07-65.7-72.07-57.844s19.108 14.227 42.68 14.227c23.57 0 42.678-6.37 42.678-14.227ZM-72.07 27.515v-85.359M13.288 27.515v-85.359"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-72.07 27.515c0 7.857 19.108 14.226 42.68 14.226 23.57 0 42.678-6.37 42.678-14.226"/><path fill="none" d="M-72.07 27.515c0-7.858 19.108-14.227 42.68-14.227 23.57 0 42.678 6.37 42.678 14.227"/><path stroke="none" d="M-28.19-57.844a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><path fill="none" d="M-29.39-57.844h42.278"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M11.008-60.244c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-29.391" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(18.945 -88.891)">r</text><path fill="none" d="M30.36 27.515v-84.959"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M27.96-55.564c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><g stroke="none" font-size="10"><text x="-29.391" y="27.515" font-family="cmmi10" transform="translate(63.284 -39.207)">h</text><text x="-20.852" y="27.515" font-family="cmr10" transform="translate(63.284 -39.207)">=</text><text x="-10.296" y="27.515" font-family="cmr10" transform="translate(63.284 -39.207)">2</text><text x="-5.296" y="27.515" font-family="cmmi10" transform="translate(63.284 -39.207)">r</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M13.288 27.515H30.36M13.288-57.844H30.36"/></g></svg>
</figure>

## Impostazione del problema

Indicati con $r$ il raggio di base e con $h$ l'altezza del cilindro (entrambi positivi), il volume è

$$V = \pi r^2 h = 400,$$

da cui si ricava l'altezza in funzione del raggio:

$$h = \frac{400}{\pi r^2}.$$

La quantità di latta corrisponde alla superficie totale del cilindro (due basi circolari più la superficie laterale):

$$S = 2\pi r^2 + 2\pi r h.$$

Sostituendo l'espressione di $h$ si ottiene $S$ come funzione della sola variabile $r$:

$$S(r) = 2\pi r^2 + 2\pi r \cdot \frac{400}{\pi r^2} = 2\pi r^2 + \frac{800}{r}, \qquad r > 0.$$

## Ricerca del minimo

Deriviamo rispetto a $r$:

$$S'(r) = 4\pi r - \frac{800}{r^2} = \frac{4\pi r^3 - 800}{r^2}.$$

Poiché $r^2 > 0$, il segno di $S'(r)$ dipende dal numeratore. Imponendo $S'(r) = 0$:

$$4\pi r^3 = 800 \;\Rightarrow\; r^3 = \frac{200}{\pi} \;\Rightarrow\; r = \sqrt[3]{\frac{200}{\pi}}.$$

Per $r < \sqrt[3]{200/\pi}$ è $S'(r) < 0$ e per $r > \sqrt[3]{200/\pi}$ è $S'(r) > 0$: la funzione decresce e poi cresce, quindi il valore trovato è un punto di **minimo** assoluto.

Numericamente:

$$r = \sqrt[3]{\frac{200}{\pi}} \approx 3{,}99\ \text{cm}.$$

## Calcolo dell'altezza

L'altezza corrispondente si ottiene dalla relazione del volume. Poiché $\pi r^3 = 200$, cioè $\pi r^2 = \dfrac{200}{r}$, risulta

$$h = \frac{400}{\pi r^2} = \frac{400}{\,200/r\,} = 2r.$$

All'ottimo l'altezza è quindi il doppio del raggio, cioè **uguale al diametro** di base:

$$h = 2r \approx 7{,}99\ \text{cm}.$$

## Conclusione

Le dimensioni che minimizzano la latta sono

$$r \approx 3{,}99\ \text{cm}, \qquad h \approx 7{,}99\ \text{cm} \quad (h = 2r).$$

La corrispondente superficie minima vale

$$S = 2\pi r^2 + 4\pi r^2 = 6\pi r^2 \approx 300{,}5\ \text{cm}^2.$$

La lattina più economica in materiale è dunque quella in cui l'altezza eguaglia il diametro di base.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
