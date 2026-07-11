

**Quesito:** [[Quesiti/ques_2009_america_latina_suppletiva_2009_questionario_47_6|2009 America Latina Suppletiva — Questionario — Quesito 6]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_questionario_47|2009 America Latina Suppletiva — Questionario]]

Sia $f(x) = e^x - x^e$. Si determina il dominio e si studia il segno delle derivate prima e seconda nel punto $x = e$.

## Dominio

Il termine $e^x$ è definito su tutto $\mathbb{R}$. Il termine $x^e$, avendo esponente irrazionale, richiede invece una base non negativa, poiché la potenza a esponente reale è definita come $x^e = e^{e \ln x}$ (con l'ulteriore convenzione $0^e = 0$). Il dominio di $f$ è quindi

$$ x \ge 0. $$

## Derivata prima

Derivando termine a termine, ricordando che $\dfrac{d}{dx}\,x^e = e\,x^{e-1}$, si ottiene

$$ f'(x) = e^x - e\,x^{e-1}. $$

Calcolando nel punto $x = e$:

$$ f'(e) = e^e - e \cdot e^{e-1} = e^e - e^e = 0. $$

La derivata prima si annulla in $x = e$: la funzione presenta lì una tangente orizzontale.

## Derivata seconda

Derivando ancora:

$$ f''(x) = e^x - e(e-1)\,x^{e-2}. $$

Nel punto $x = e$:

$$ f''(e) = e^e - e(e-1)\,e^{e-2} = e^e - (e-1)\,e^{e-1}. $$

Raccogliendo $e^{e-1}$:

$$ f''(e) = e^{e-1}\big[\,e - (e-1)\,\big] = e^{e-1} \cdot 1 = e^{e-1} > 0. $$

La derivata seconda è dunque positiva in $x = e$.

## Conclusione

Poiché $f'(e) = 0$ e $f''(e) = e^{e-1} > 0$, il punto $x = e$ è un punto di minimo relativo per $f$. Osservando inoltre che $f(e) = e^e - e^e = 0$, tale minimo vale zero: il grafico tocca l'asse delle ascisse in $(e,\,0)$ senza attraversarlo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="226.452" height="180.073" viewBox="-72 -72 169.839 135.055"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 44.842H84.588"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M82.708 42.442c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-181.329" y="44.842" stroke="none" font-family="cmmi10" font-size="10" transform="translate(269.85 2.153)">x</text><path fill="none" d="M-58.413 52.097V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.813-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-181.329" y="44.842" stroke="none" font-family="cmmi10" font-size="10" transform="translate(120.285 -109.473)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-54.998 19.75 1.967 1.042 1.967 1.016 1.967 1.047 1.968 1.101 1.967 1.072 1.967 1.127 1.967 1.076 1.967 1.09 1.968 1.072 1.967 1.1 1.967 1.073 1.967 1.063 1.968 1.043 1.967 1.016 1.967 1.026 1.967.99 1.968.93 1.967.903 1.967.865 1.967.828 1.968.79 1.967.71 1.967.664 1.967.59 1.968.53 1.967.436 1.967.358 1.967.304 1.967.115 1.968.067 1.967-.045 1.967-.158 1.967-.265 1.968-.446 1.967-.564 1.967-.731 1.967-.887 1.968-.988 1.967-1.279 1.967-1.373 1.967-1.618 1.968-1.793 1.967-2.029 1.967-2.339 1.967-2.405 1.967-2.787 1.968-2.974 1.967-3.342 1.967-3.649 1.967-3.8 1.968-4.272 1.967-4.504 1.967-5.078 1.967-5.107 1.968-5.615 1.967-6.188 1.967-6.317 1.967-7.049 1.967-7.195"/><path fill="none" stroke-dasharray="3.0,3.0" d="M4.293 44.842v6.046"/><path stroke="none" d="M7.173 44.842c0-.564-1.29-1.02-2.88-1.02s-2.88.456-2.88 1.02c0 .563 1.29 1.02 2.88 1.02s2.88-.457 2.88-1.02m-2.88 0"/><text x="-181.329" y="44.842" stroke="none" font-family="cmmi10" font-size="10" transform="translate(183.293 14.61)">e</text><text x="-181.329" y="44.842" stroke="none" font-family="cmr10" font-size="10" transform="translate(177.088 9.977)">0</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.50](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
