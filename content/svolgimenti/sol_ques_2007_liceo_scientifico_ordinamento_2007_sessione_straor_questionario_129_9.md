

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_9|2007 LS Ordinamento Straordinaria — Questionario — Quesito 9]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si enunci il teorema di Lagrange e se ne fornisca un'interpretazione geometrica.

## Enunciato

**Teorema di Lagrange (o del valor medio).** Se una funzione $y=f(x)$ è

- continua nell'intervallo chiuso e limitato $[a,b]$,
- derivabile nell'intervallo aperto $(a,b)$,

allora esiste almeno un punto $c \in (a,b)$ tale che

$$\frac{f(b)-f(a)}{b-a} = f'(c).$$

In altri termini, esiste almeno un punto interno all'intervallo in cui la derivata prima è uguale al rapporto incrementale della funzione tra gli estremi $a$ e $b$.

## Interpretazione geometrica

Consideriamo i punti estremi del grafico di $f$

$$A=\bigl(a,\,f(a)\bigr), \qquad B=\bigl(b,\,f(b)\bigr).$$

Il primo membro dell'uguaglianza,

$$\frac{f(b)-f(a)}{b-a},$$

è il coefficiente angolare della retta secante $AB$ (la corda che unisce i due estremi del grafico). Il secondo membro, $f'(c)$, è invece il coefficiente angolare della retta tangente al grafico nel punto di ascissa $c$.

L'uguaglianza $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ afferma dunque che questi due coefficienti angolari coincidono: **esiste almeno un punto interno all'arco di curva $AB$ in cui la retta tangente al grafico è parallela alla corda $AB$** che congiunge gli estremi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="284.119" height="202.825" viewBox="-72 -72 213.089 152.119"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 66.039h199.908"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M125.958 63.639c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(191.322 2.153)">x</text><path fill="none" d="M-59.55 78.558V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.95-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.959 1.7 2.399 2.08"/><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -130.67)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-40.772 37.87 2.44-2.68 2.44-2.68 2.44-2.67 2.44-2.66 2.44-2.643 2.44-2.622 2.44-2.598 2.44-2.57 2.44-2.537 2.44-2.502 2.44-2.462 2.44-2.418 2.44-2.373 2.439-2.32 2.44-2.265 2.44-2.21 2.44-2.148 2.44-2.083 2.44-2.014 2.44-1.946 2.44-1.871 2.44-1.797 2.44-1.715 2.44-1.634 2.44-1.55 2.439-1.466 2.44-1.372 2.44-1.284 2.44-1.191 2.44-1.099 2.44-.998 2.44-.904 2.44-.802 2.44-.705 2.44-.6 2.44-.498 2.44-.397 2.439-.292 2.44-.189 2.44-.083 2.44.022 2.44.125 2.44.228 2.44.336 2.44.439 2.44.54 2.44.64 2.44.744 2.44.844 2.44.942 2.439 1.039 2.44 1.134 2.44 1.23 2.44 1.321 2.44 1.41 2.44 1.498 2.44 1.585 2.44 1.668 2.44 1.749"/><path fill="none" stroke="red" stroke-width=".8" d="M-28.248 24.188 84.44-24.748"/><path fill="none" stroke="#b30000" stroke-dasharray="3.0,3.0" stroke-width=".8" d="m-9.462-16.226 81.376-17.526"/><path stroke="none" d="M-26.048 24.188a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.27 -45.384)">A</text><path stroke="none" d="M86.64-24.748a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(147.524 -94.32)">B</text><path stroke="none" d="M33.426-24.989a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.613 -94.56)">c</text><path fill="none" stroke-dasharray="0.4,2.0" d="m-28.253 66.039.005-41.851M84.42 66.039l.02-90.787M31.214 66.039l.012-91.028"/><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.655 7.839)">a</text><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.6 7.839)">c</text><text x="-59.551" y="66.039" stroke="none" font-family="cmmi10" font-size="10" transform="translate(141.826 10.477)">b</text></g></svg>
</figure>

Il teorema di Lagrange generalizza il teorema di Rolle: quest'ultimo ne è il caso particolare in cui $f(a)=f(b)$, per il quale la corda $AB$ è orizzontale e la tangente parallela in $c$ ha coefficiente angolare $f'(c)=0$.

*Fonte:* [📄 PDF p.133](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
