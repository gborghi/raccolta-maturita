

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_3|2008 Ordinaria — Prova (PNI Informatica) — Quesito 3]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Un solido ha per base un cerchio di raggio $1$. Ogni sezione ottenuta con un piano perpendicolare a un prefissato diametro è un triangolo equilatero. Si calcoli il volume del solido.

## Impostazione

Fissiamo un sistema di riferimento in cui il cerchio di base ha centro nell'origine e il diametro prefissato coincide con l'asse $x$; l'equazione della circonferenza di base è dunque
$$x^2+y^2=1,\qquad -1\le x\le 1.$$

Consideriamo un piano perpendicolare a tale diametro, cioè perpendicolare all'asse $x$, che lo interseca nel punto di ascissa $x$. Questo piano taglia il cerchio di base lungo una corda perpendicolare al diametro: i suoi estremi hanno ordinate $\pm\sqrt{1-x^2}$, quindi la corda ha lunghezza
$$\ell(x)=2\sqrt{1-x^2}.$$

Per ipotesi la sezione del solido con quel piano è un triangolo equilatero che ha proprio quella corda come lato. Il lato del triangolo è quindi $\ell(x)=2\sqrt{1-x^2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="300.283" height="124.746" viewBox="-72 -72 225.212 93.559"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M96.372-4.15c0-13.828-32.611-25.038-72.84-25.038s-72.84 11.21-72.84 25.039c0 13.828 32.611 25.038 72.84 25.038s72.84-11.21 72.84-25.038Zm-72.84 0"/><path fill="none" d="M-72.07-4.15h190.804"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M116.854-6.55c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="23.532" y="-4.149" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.135 2.153)">x</text><path fill="none" stroke="#00f" stroke-width=".8" d="M67.247-19.176v30.054"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="23.532" y="-4.149" font-family="cmr10" font-size="10" transform="translate(47.237 -12.456)">c</text><text x="27.699" y="-4.149" font-family="cmr10" font-size="10" transform="translate(47.237 -12.456)">hord</text><text x="51.06" y="-4.149" font-family="cmr10" font-size="10" transform="translate(47.237 -12.456)">=</text><text x="61.615" y="-4.149" font-family="cmr10" font-size="10" transform="translate(47.237 -12.456)">2</text><text x="66.615" y="-12.483" font-family="cmsy10" font-size="10" transform="translate(47.237 -12.456)">p</text><path d="M122.186-25.339h27.424v.4h-27.424z"/><text x="74.949" y="-4.149" font-family="cmr10" font-size="10" transform="translate(47.237 -12.456)">1</text><text x="82.171" y="-4.149" font-family="cmsy10" font-size="10" transform="translate(47.237 -12.456)">¡</text><text x="92.171" y="-4.149" font-family="cmmi10" font-size="10" transform="translate(47.237 -12.456)">x</text><text x="97.886" y="-7.038" font-family="cmr7" font-size="7" transform="translate(47.237 -12.456)">2</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="M67.247-19.176v-37.34 67.394"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmr10" font-size="10"><text x="23.532" y="-4.149" transform="translate(1.048 -57.843)">triangolo</text><text x="65.782" y="-4.149" transform="translate(1.048 -57.843)">equilatero</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M67.236-4.15v-15.022"/><text x="23.532" y="-4.149" stroke="none" font-family="cmmi10" font-size="10" transform="translate(40.846 7.839)">x</text><g stroke="none" font-size="10"><text x="23.532" y="-4.149" font-family="cmsy10" transform="translate(-89.15 9.977)">¡</text><text x="31.31" y="-4.149" font-family="cmr10" transform="translate(-89.15 9.977)">1</text></g><text x="23.532" y="-4.149" stroke="none" font-family="cmr10" font-size="10" transform="translate(76.373 9.977)">1</text></g></svg>
</figure>

## Area della sezione

Un triangolo equilatero di lato $s$ ha area $\dfrac{\sqrt{3}}{4}\,s^2$. Ponendo $s=2\sqrt{1-x^2}$ si ha $s^2=4(1-x^2)$, dunque l'area della sezione a quota $x$ è
$$A(x)=\frac{\sqrt{3}}{4}\cdot 4\,(1-x^2)=\sqrt{3}\,\bigl(1-x^2\bigr).$$

## Calcolo del volume

Il volume si ottiene integrando l'area delle sezioni lungo il diametro, cioè per $x$ che varia da $-1$ a $1$:
$$V=\int_{-1}^{1} A(x)\,dx=\sqrt{3}\int_{-1}^{1}\bigl(1-x^2\bigr)\,dx.$$

La funzione integranda è pari, quindi
$$V=2\sqrt{3}\int_{0}^{1}\bigl(1-x^2\bigr)\,dx=2\sqrt{3}\left[\,x-\frac{x^3}{3}\,\right]_{0}^{1}=2\sqrt{3}\left(1-\frac{1}{3}\right)=2\sqrt{3}\cdot\frac{2}{3}.$$

Quindi
$$\boxed{\,V=\frac{4\sqrt{3}}{3}\approx 2{,}309\,}.$$

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
