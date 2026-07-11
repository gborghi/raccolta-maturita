

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_10|2001 Suppletiva Ordinamento — Questionario — Quesito 10]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Considerata una funzione reale di variabile reale $f(x)$, derivabile almeno due volte in un dato punto $a$, affinché la funzione abbia in $a$ un punto di flesso la condizione $f''(a)=0$ è:

**A)** necessaria e sufficiente  **B)** necessaria ma non sufficiente  **C)** sufficiente ma non necessaria.

## Risposta

La condizione $f''(a)=0$ è **necessaria ma non sufficiente**: la risposta corretta è la **B)**.

## La condizione è necessaria

Supponiamo che $f$ abbia in $a$ un punto di flesso e che sia derivabile due volte in $a$. In un flesso la concavità cambia: la derivata seconda passa da un segno all'altro attraversando $x=a$. Poiché per ipotesi $f''$ esiste (dunque è definita) in $a$, il suo valore non può essere né positivo né negativo — altrimenti, per la permanenza del segno, $f''$ manterrebbe quel segno in un intorno di $a$ e la concavità non cambierebbe. Resta quindi

$$f''(a)=0.$$

Ogni flesso (a tangente non verticale, con $f''$ esistente) impone perciò $f''(a)=0$: la condizione è **necessaria**.

## La condizione non è sufficiente

Il fatto che $f''(a)=0$ non garantisce che in $a$ ci sia un flesso. Controesempio:

$$f(x)=x^4, \qquad f''(x)=12x^2.$$

Si ha $f''(0)=0$, ma

$$f''(x)>0 \quad \text{per ogni } x\ne 0,$$

quindi la concavità è rivolta verso l'alto sia a sinistra sia a destra di $0$: non c'è cambio di concavità e in $x=0$ la funzione presenta un **minimo**, non un flesso.

Per confronto, con $f(x)=x^3$ si ha $f''(x)=6x$, che si annulla in $x=0$ cambiando segno ($f''<0$ per $x<0$, $f''>0$ per $x>0$): in questo caso $x=0$ è effettivamente un flesso.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="199.14" height="264.044" viewBox="-72 -72 149.355 198.033"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 36.448H64.104"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.224 34.048c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-3.783" y="36.448" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 2.153)">x</text><path fill="none" d="M-3.783 95.63V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.183-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.783" y="36.448" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -101.08)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.689 125.363 1.44-6.581 1.44-6.248 1.44-5.924 1.44-5.607 1.44-5.3 1.44-5.003 1.44-4.713 1.44-4.43 1.44-4.16 1.44-3.895 1.44-3.64 1.44-3.393 1.44-3.156 1.44-2.926 1.44-2.705 1.44-2.494 1.44-2.291 1.44-2.095 1.44-1.91 1.44-1.733 1.44-1.563 1.44-1.404 1.44-1.251 1.44-1.11 1.44-.975 1.44-.85 1.44-.733 1.44-.625 1.44-.525 1.44-.434 1.44-.351 1.44-.278 1.44-.214 1.44-.157 1.44-.109 1.44-.07 1.44-.04 1.44-.017 1.44-.005h1.44l1.44-.004 1.44-.018 1.44-.039 1.44-.068 1.44-.108 1.44-.155 1.44-.211 1.44-.276 1.44-.35 1.44-.43 1.44-.522 1.44-.62 1.44-.73 1.44-.846 1.44-.97 1.44-1.104 1.44-1.247 1.44-1.399 1.44-1.557 1.44-1.726 1.44-1.904 1.44-2.088 1.44-2.284 1.44-2.487 1.44-2.698 1.44-2.918 1.44-3.147 1.44-3.385 1.44-3.63 1.44-3.886 1.44-4.15 1.44-4.422 1.44-4.702 1.44-4.992 1.44-5.29 1.44-5.597 1.44-5.913 1.44-6.235 1.44-6.57"/><path fill="none" stroke="red" stroke-width=".8" d="m-57.958-54.843 1.372 8.897 1.371 8.23 1.371 7.6 1.371 6.999 1.372 6.432 1.37 5.897 1.372 5.39 1.371 4.917 1.372 4.47 1.37 4.051 1.372 3.66 1.371 3.294 1.372 2.954 1.37 2.637 1.372 2.345 1.371 2.075 1.372 1.827 1.37 1.598 1.372 1.39 1.371 1.202 1.372 1.03 1.37.875 1.372.739 1.371.615 1.371.507 1.372.413 1.37.33 1.372.26 1.371.2 1.372.151 1.37.11 1.372.077 1.371.052 1.372.033 1.37.019 1.372.01 1.371.003 1.372.002h4.113l1.371-.002 1.372-.004 1.37-.009 1.372-.02 1.371-.031 1.372-.052 1.37-.077 1.372-.109 1.371-.15 1.372-.2 1.37-.258 1.372-.33 1.371-.41 1.372-.506 1.37-.614 1.372-.736 1.371-.873 1.372-1.028 1.37-1.199 1.372-1.388 1.371-1.595 1.371-1.822 1.372-2.071 1.37-2.34 1.372-2.634 1.371-2.949 1.372-3.289 1.37-3.654 1.372-4.045L39.4-.41l1.372-4.909 1.37-5.385 1.372-5.888 1.371-6.423 1.372-6.99 1.37-7.59L49-45.814l1.371-8.888"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-3.783" y="36.448" font-family="cmmi10" font-size="10" transform="translate(37.955 -76.57)">y</text><text x="4.256" y="36.448" font-family="cmr10" font-size="10" transform="translate(37.955 -76.57)">=</text><text x="14.812" y="36.448" font-family="cmmi10" font-size="10" transform="translate(37.955 -76.57)">x</text><text x="20.527" y="32.819" font-family="cmr7" font-size="7" transform="translate(37.955 -76.57)">3</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-3.783" y="36.448" font-family="cmmi10" font-size="10" transform="translate(-50.818 -76.57)">y</text><text x="4.256" y="36.448" font-family="cmr10" font-size="10" transform="translate(-50.818 -76.57)">=</text><text x="14.812" y="36.448" font-family="cmmi10" font-size="10" transform="translate(-50.818 -76.57)">x</text><text x="20.527" y="32.819" font-family="cmr7" font-size="7" transform="translate(-50.818 -76.57)">4</text></g></g><path stroke="none" d="M-2.418 36.448a1.366 1.366 0 1 0-2.73 0 1.366 1.366 0 0 0 2.73 0m-1.365 0"/><text x="-3.783" y="36.448" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text></g></svg>
</figure>

I due esempi, entrambi con derivata seconda nulla nell'origine, mostrano comportamenti opposti ($x^3$ ha un flesso, $x^4$ un minimo): l'annullarsi di $f''$ da solo non basta a concludere.

## Conclusione

La condizione $f''(a)=0$ è **necessaria ma non sufficiente** per l'esistenza di un flesso in $a$: risposta **B)**. Per garantire il flesso occorre in più che $f''$ cambi segno attraversando $a$ (equivalentemente, che la prima derivata non nulla dopo la prima sia di ordine dispari).

*Fonte:* [📄 PDF p.38](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
