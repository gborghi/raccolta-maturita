

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_10_1|2006 Sessione Ordinaria — Prova (p.10) — Problema 1]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

Un filo metallico di lunghezza $L$ delimita il perimetro di un'aiuola rettangolare. Si chiede l'aiuola di area massima (a); poi, tagliato il filo in due parti per formare un quadrato e un cerchio, come tagliarlo affinché la somma delle aree sia minima (b) o massima (c). Infine, aumentando del $10\%$ ogni dimensione di una scatola parallelepipeda, di quanto terreno in più si ha bisogno (d).

## a)

Detti $x$ e $y$ i lati del rettangolo, il perimetro impone $2x+2y=L$, cioè $y=\dfrac{L}{2}-x$, con $0<x<\dfrac{L}{2}$. L'area è

$$A(x)=x\left(\frac{L}{2}-x\right)=\frac{L}{2}\,x-x^2.$$

Derivando: $A'(x)=\dfrac{L}{2}-2x$, che si annulla per $x=\dfrac{L}{4}$. Poiché $A''(x)=-2<0$, si tratta di un massimo. Allora $y=\dfrac{L}{2}-\dfrac{L}{4}=\dfrac{L}{4}=x$: **l'aiuola di area massima è il quadrato di lato** $\dfrac{L}{4}$, con area

$$A_{\max}=\frac{L^2}{16}.$$

## b)

Si taglia il filo in due parti: una di lunghezza $x$ per la circonferenza, l'altra di lunghezza $L-x$ per il perimetro del quadrato, con $0\le x\le L$.

- Il quadrato ha lato $\dfrac{L-x}{4}$ e area $\dfrac{(L-x)^2}{16}$.
- Il cerchio ha raggio $r$ con $2\pi r=x$, cioè $r=\dfrac{x}{2\pi}$, e area $\pi r^2=\dfrac{x^2}{4\pi}$.

La somma delle aree è

$$S(x)=\frac{(L-x)^2}{16}+\frac{x^2}{4\pi}.$$

Derivando:

$$S'(x)=-\frac{L-x}{8}+\frac{x}{2\pi}.$$

Ponendo $S'(x)=0$ si ottiene $\dfrac{x}{2\pi}=\dfrac{L-x}{8}$, cioè $8x=2\pi(L-x)$, da cui $x(8+2\pi)=2\pi L$ e

$$x=\frac{2\pi L}{2\pi+8}=\frac{\pi L}{\pi+4}.$$

Poiché $S''(x)=\dfrac{1}{8}+\dfrac{1}{2\pi}>0$, questo punto è un **minimo**. Quindi la somma delle aree è minima tagliando il filo in modo che

$$\underbrace{\frac{\pi L}{\pi+4}}_{\text{cerchio}}\qquad\text{e}\qquad\underbrace{L-\frac{\pi L}{\pi+4}=\frac{4L}{\pi+4}}_{\text{quadrato}}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="307.207" height="204.092" viewBox="-72 -72 230.405 153.069"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-53.615 60.93h198.77"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M143.274 58.53c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-53.615" y="60.931" stroke="none" font-family="cmmi10" font-size="10" transform="translate(202.702 2.153)">x</text><path fill="none" d="M-53.615 60.93v-119.1"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.015-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08"/><text x="-53.615" y="60.931" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.354 -123.034)">S</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.615-10.201 2.891 2.379 2.892 2.258 2.891 2.188 2.892 2.084 2.891 1.997 2.892 1.893 2.891 1.806 2.892 1.702 2.891 1.632 2.892 1.528 2.891 1.442 2.892 1.337 2.891 1.25 2.891 1.164 2.892 1.06 2.891.972 2.892.885 2.891.782 2.892.712 2.891.573 2.892.52 2.891.4 2.892.33 2.891.243 2.892.122 2.891.052 2.892-.07 2.891-.121 2.891-.243 2.892-.33 2.891-.417 2.892-.52 2.891-.591 2.892-.695 2.891-.799 2.892-.885 2.891-.973 2.892-1.077 2.891-1.146 2.892-1.268 2.891-1.354 2.892-1.424 2.891-1.546 2.892-1.615L76.5 4.317l2.891-1.823L82.284.6l2.891-2.015 2.892-2.066 2.891-2.189 2.892-2.275 2.891-2.379 2.892-2.448 2.891-2.553 2.892-2.657 2.891-2.727 2.892-2.83 2.891-2.953 2.892-3.004"/><path stroke="none" d="M-52.115-10.201a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none"><text x="-52.415" y="56.993" font-family="cmmi7" font-size="7" transform="translate(-15.322 -67.767)">L</text><text x="-46.929" y="53.976" font-family="cmr5" font-size="5" transform="translate(-15.322 -67.767)">2</text><path d="M-67.737-9.536h9.389v.4h-9.389z"/><text x="-51.707" y="64.379" font-family="cmr7" font-size="7" transform="translate(-15.322 -67.767)">16</text></g><path stroke="none" d="M118.601-29.549a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none"><text x="-52.415" y="56.993" font-family="cmmi7" font-size="7" transform="translate(174.25 -87.115)">L</text><text x="-46.929" y="53.976" font-family="cmr5" font-size="5" transform="translate(174.25 -87.115)">2</text><path d="M121.834-28.884h9.39v.4h-9.39z"/><text x="-52.177" y="64.379" font-family="cmr7" font-size="7" transform="translate(174.25 -87.115)">4</text><text x="-48.191" y="64.379" font-family="cmmi7" font-size="7" transform="translate(174.25 -87.115)">¼</text></g><path fill="red" stroke="none" d="M23.3 21.097a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke-dasharray="3.0,3.0"><path fill="none" d="M21.5 60.93V21.098"/><g stroke="none"><text x="-50.096" y="56.993" font-family="cmmi7" font-size="7" transform="translate(66.389 12.254)">¼</text><text x="-45.168" y="56.993" font-family="cmmi7" font-size="7" transform="translate(66.389 12.254)">L</text><path d="M13.974 70.485h15.053v.4H13.974z"/><text x="-52.415" y="64.379" font-family="cmmi7" font-size="7" transform="translate(66.389 12.254)">¼</text><text x="-47.488" y="64.379" font-family="cmr7" font-size="7" transform="translate(66.389 12.254)">+4</text></g></g><g fill="red" stroke="red"><text x="-53.615" y="60.931" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(86.046 -30.804)">min</text></g><text x="-53.615" y="60.931" stroke="none" font-family="cmmi10" font-size="10" transform="translate(167.314 10.366)">L</text></g></svg>
</figure>

## c)

Nell'intervallo chiuso $[0,L]$ il massimo di $S(x)$, funzione con concavità verso l'alto, si trova in uno degli estremi. Confrontiamo:

$$S(0)=\frac{L^2}{16}\qquad\text{(tutto quadrato)},\qquad S(L)=\frac{L^2}{4\pi}\qquad\text{(tutto cerchio)}.$$

Poiché $4\pi\approx 12{,}57<16$, si ha $\dfrac{1}{4\pi}>\dfrac{1}{16}$, dunque $S(L)>S(0)$. La somma delle aree è **massima quando non si taglia il filo** e lo si impiega tutto per la circonferenza:

$$S_{\max}=\frac{L^2}{4\pi}.$$

## d)

Sia $V=abc$ il volume del parallelepipedo di dimensioni $a$, $b$, $c$. Aumentando ciascuna dimensione del $10\%$, ogni fattore viene moltiplicato per $1{,}1$, quindi il nuovo volume è

$$V'=(1{,}1\,a)(1{,}1\,b)(1{,}1\,c)=1{,}1^3\,abc=1{,}331\,V.$$

L'aumento è $V'-V=0{,}331\,V$: **occorre il $33{,}1\%$ di terreno in più.**

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
