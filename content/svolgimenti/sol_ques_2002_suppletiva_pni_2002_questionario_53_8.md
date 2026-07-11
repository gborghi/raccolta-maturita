

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_8|2002 Suppletiva PNI — Questionario — Quesito 8]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Con uno dei metodi di quadratura studiati si valuti l'integrale definito

$$\int_1^3 \frac{\ln x}{x}\,dx$$

con un errore inferiore a $10^{-4}$.

## Valore esatto (per il controllo)

L'integrale si calcola in forma chiusa: essendo $\dfrac{\ln x}{x}$ la derivata di $\dfrac{(\ln x)^2}{2}$,

$$\int_1^3 \frac{\ln x}{x}\,dx = \left[\frac{(\ln x)^2}{2}\right]_1^3 = \frac{(\ln 3)^2}{2} \cong 0{,}603474.$$

Questo valore serve solo da riscontro: il quesito chiede una stima **numerica** con errore controllato.

## Scelta del numero di suddivisioni

Usiamo la **formula dei trapezi**. Posto $f(x)=\dfrac{\ln x}{x}$, la funzione è continua su $[1;3]$ e derivabile due volte in $(1;3)$, con

$$f'(x) = \frac{1-\ln x}{x^{2}}, \qquad f''(x) = \frac{2\ln x - 3}{x^{3}}.$$

L'errore commesso approssimando l'integrale con $n$ suddivisioni si maggiora con

$$E_n \le \frac{(b-a)^3}{12\,n^{2}}\cdot M, \qquad M = \max_{[1;3]} |f''(x)|.$$

Nell'intervallo $[1;3]$ il valore assoluto

$$|f''(x)| = \left|\frac{2\ln x - 3}{x^{3}}\right|$$

è massimo in $x=1$, dove il numeratore ha modulo massimo ($|2\ln 1 - 3| = 3$) e il denominatore è minimo ($x^3=1$): dunque $M=3$.

Sostituendo $a=1$, $b=3$, $M=3$:

$$E_n \le \frac{(3-1)^{3}}{12\,n^{2}}\cdot 3 = \frac{8\cdot 3}{12\,n^{2}} = \frac{2}{n^{2}}.$$

Imponiamo $E_n < 10^{-4}$:

$$\frac{2}{n^{2}} \le 10^{-4} \;\Rightarrow\; n^{2} \ge 2\cdot 10^{4} \;\Rightarrow\; n \ge \sqrt{20000} \cong 141{,}4.$$

Occorre quindi dividere $[1;3]$ in almeno $n=142$ parti.

## Applicazione della formula dei trapezi

Con $n=142$ l'ampiezza di ciascun sottointervallo è

$$h = \frac{b-a}{n} = \frac{2}{142} = \frac{1}{71},$$

e la formula dei trapezi dà

$$\int_1^3 \frac{\ln x}{x}\,dx \cong h\left[\frac{f(x_0)+f(x_n)}{2} + f(x_1) + f(x_2) + \cdots + f(x_{n-1})\right],$$

con $x_0=1,\ x_1=1+\tfrac{1}{71},\ \dots,\ x_{142}=3$.

Eseguendo il calcolo (necessariamente con l'aiuto di un calcolatore) si ottiene

$$\int_1^3 \frac{\ln x}{x}\,dx \cong 0{,}603458.$$

Il risultato coincide con il valore esatto $0{,}603474$ entro l'errore richiesto: l'approssimazione a meno di $10^{-4}$ è dunque

$$\int_1^3 \frac{\ln x}{x}\,dx \cong 0{,}6035.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="232.145" height="120.48" viewBox="-72 -72 174.109 90.36"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="m-54.145 2.987 2.025-3.836 2.025-3.489 2.025-3.18 2.025-2.879 2.025-2.606 2.025-2.377 2.025-2.187 2.025-2.007 2.025-1.793 2.025-1.685 2.025-1.53 2.025-1.409 2.025-1.304 2.025-1.183 2.025-1.087 2.025-1.005 2.025-.931 2.024-.848 2.025-.79 2.025-.727 2.025-.659 2.025-.622 2.025-.548 2.025-.526 2.025-.48 2.025-.453 2.025-.381 2.025-.383 2.025-.334 2.025-.323 2.025-.275 2.025-.263 2.025-.238 2.025-.216 2.025-.191 2.024-.18 2.025-.16 2.025-.143 2.025-.13 2.025-.107 2.025-.093 2.025-.088 2.025-.076 2.025-.059 2.025-.053 2.025-.042 2.025-.034 2.025-.028 2.025-.012 2.025-.004 2.025-.004h2.025l2.025.017 2.025.013 2.024.029 2.025.023 2.025.033 2.025.035 2.025.05.03 43.758z"/><path fill="none" d="M-72.07 2.987H88.857"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M86.977.587c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-113.895" y="2.987" stroke="none" font-family="cmmi10" font-size="10" transform="translate(206.686 2.153)">x</text><path fill="none" d="M-54.145 6.572v-65.326"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.544-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-113.895" y="2.987" stroke="none" font-family="cmmi10" font-size="10" transform="translate(57.12 -67.619)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-54.145 2.987 2.025-3.836 2.025-3.489 2.025-3.18 2.025-2.879 2.025-2.606 2.025-2.377 2.025-2.187 2.025-2.007 2.025-1.793 2.025-1.685 2.025-1.53 2.025-1.409 2.025-1.304 2.025-1.183 2.025-1.087 2.025-1.005 2.025-.931 2.024-.848 2.025-.79 2.025-.727 2.025-.659 2.025-.622 2.025-.548 2.025-.526 2.025-.48 2.025-.453 2.025-.381 2.025-.383 2.025-.334 2.025-.323 2.025-.275 2.025-.263 2.025-.238 2.025-.216 2.025-.191 2.024-.18 2.025-.16 2.025-.143 2.025-.13 2.025-.107 2.025-.093 2.025-.088 2.025-.076 2.025-.059 2.025-.053 2.025-.042 2.025-.034 2.025-.028 2.025-.012 2.025-.004 2.025-.004h2.025l2.025.017 2.025.013 2.024.029 2.025.023 2.025.033 2.025.035 2.025.05"/><path fill="none" d="M5.606 1.195V4.78"/><text x="-113.895" y="2.987" stroke="none" font-family="cmr10" font-size="10" transform="translate(117.002 11.77)">2</text><path fill="none" d="M65.357 1.195V4.78"/><text x="-113.895" y="2.987" stroke="none" font-family="cmr10" font-size="10" transform="translate(176.753 11.77)">3</text><text x="-113.895" y="2.987" stroke="none" font-family="cmr10" font-size="10" transform="translate(57.25 11.77)">1</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-113.895" y="2.987" font-family="cmmi10" font-size="10" transform="translate(135.577 -52.296)">y</text><text x="-105.856" y="2.987" font-family="cmr10" font-size="10" transform="translate(135.577 -52.296)">=</text><text x="-94.101" y="-.95" font-family="cmr7" font-size="7" transform="translate(135.577 -52.296)">ln</text><text x="-86.054" y="-.95" font-family="cmmi7" font-size="7" transform="translate(135.577 -52.296)">x</text><path d="M41.476-52.01h12.581v.4h-12.58z"/><text x="-90.077" y="6.436" font-family="cmmi7" font-size="7" transform="translate(135.577 -52.296)">x</text></g></g></g></svg>
</figure>

**Osservazione.** Usando la formula delle parabole (Cavalieri–Simpson) l'errore si maggiora con $E_n \le \dfrac{(b-a)^5}{2880\,n^{4}}\cdot M$, dove ora $M$ è il massimo di $|f^{(4)}(x)|$: il numero di suddivisioni necessario sarebbe molto minore. Una tolleranza di $10^{-2}$ sarebbe stata più che sufficiente per lo scopo del quesito, con calcoli assai meno laboriosi.

*Fonte:* [📄 PDF p.56](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
