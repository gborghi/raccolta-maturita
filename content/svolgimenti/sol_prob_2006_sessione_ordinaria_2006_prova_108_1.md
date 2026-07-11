

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_108_1|2006 Sessione Ordinaria PNI — Prova (p.108) — Problema 1]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Un filo metallico di lunghezza $\lambda$ delimita il perimetro di un'aiuola rettangolare. Si vuole determinare l'aiuola di area massima; poi, tagliando il filo in due parti destinate a un'aiuola quadrata e a una circolare, come ripartirlo perché la somma delle due aree sia minima oppure massima. Infine si valuta di quanto aumenta il terreno necessario se ogni dimensione di un'aiuola a forma di parallelepipedo cresce del $10\%$.

## a) Aiuola rettangolare di area massima

Siano $x$ e $y$ i lati del rettangolo. Il perimetro è fissato:
$$2(x+y)=\lambda \quad\Rightarrow\quad y=\frac{\lambda}{2}-x, \qquad 0<x<\frac{\lambda}{2}.$$

L'area è
$$A(x)=x\,y=x\left(\frac{\lambda}{2}-x\right)=\frac{\lambda}{2}\,x-x^2.$$

Derivando e annullando:
$$A'(x)=\frac{\lambda}{2}-2x=0 \quad\Rightarrow\quad x=\frac{\lambda}{4}.$$

Poiché $A''(x)=-2<0$, si tratta di un massimo. Ne segue $y=\dfrac{\lambda}{2}-\dfrac{\lambda}{4}=\dfrac{\lambda}{4}=x$: l'aiuola di area massima è il **quadrato di lato $\dfrac{\lambda}{4}$**, con area
$$A_{\max}=\left(\frac{\lambda}{4}\right)^2=\frac{\lambda^2}{16}.$$

## b) Somma delle aree minima

Si taglia il filo in due parti. Indichiamo con $x$ la lunghezza del tratto usato per il **quadrato** (con $0\le x\le \lambda$): il lato è $\dfrac{x}{4}$ e l'area vale $\dfrac{x^2}{16}$.

Il tratto rimanente $\lambda-x$ forma la **circonferenza**: $2\pi r=\lambda-x$, quindi $r=\dfrac{\lambda-x}{2\pi}$ e l'area del cerchio è
$$\pi r^2=\pi\left(\frac{\lambda-x}{2\pi}\right)^2=\frac{(\lambda-x)^2}{4\pi}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="218.495" height="106.087" viewBox="-72 -72 163.871 79.566"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#00f" stroke-width=".8" d="M-71.87-14.965V-71.87h56.905v56.905Zm56.905-56.905"/><text x="-71.87" y="-14.965" stroke="none" font-family="cmr10" font-size="10" transform="translate(8.855 -25.953)">quadrato</text><g stroke="none"><text x="-71.87" y="-14.965" font-family="cmr10" font-size="10" transform="translate(9.708 14.555)">lato</text><text x="-51.87" y="-14.965" font-family="cmr10" font-size="10" transform="translate(9.708 14.555)">=</text><text x="-40.114" y="-18.902" font-family="cmmi7" font-size="7" transform="translate(9.708 14.555)">x</text><path d="M-30.406-3.11h4.535v.4h-4.535z"/><text x="-39.84" y="-11.516" font-family="cmr7" font-size="7" transform="translate(9.708 14.555)">4</text></g><path fill="none" stroke="red" stroke-width=".8" d="M87.466-43.417c0-15.714-12.739-28.453-28.453-28.453S30.56-59.131 30.56-43.417s12.739 28.452 28.453 28.452 28.453-12.738 28.453-28.452Zm-28.453 0"/><g stroke="none" font-family="cmr10" font-size="10"><text x="-71.87" y="-14.965" transform="translate(115.73 -24.98)">cerc</text><text x="-54.898" y="-14.965" transform="translate(115.73 -24.98)">hio</text></g><g stroke="none"><text x="-71.87" y="-14.965" font-family="cmr10" font-size="10" transform="translate(101.627 15.479)">raggio</text><text x="-41.842" y="-14.965" font-family="cmr10" font-size="10" transform="translate(101.627 15.479)">=</text><text x="-30.087" y="-18.902" font-family="cmmi7" font-size="7" transform="translate(101.627 15.479)">¸</text><text x="-25.344" y="-18.902" font-family="cmsy7" font-size="7" transform="translate(101.627 15.479)">¡</text><text x="-19.094" y="-18.902" font-family="cmmi7" font-size="7" transform="translate(101.627 15.479)">x</text><path d="M71.54-2.186h15.528v.4H71.54z"/><text x="-26.78" y="-11.516" font-family="cmr7" font-size="7" transform="translate(101.627 15.479)">2</text><text x="-22.793" y="-11.516" font-family="cmmi7" font-size="7" transform="translate(101.627 15.479)">¼</text></g></g></svg>
</figure>

La somma delle due aree è
$$S(x)=\frac{x^2}{16}+\frac{(\lambda-x)^2}{4\pi}, \qquad 0\le x\le \lambda.$$

Derivando:
$$S'(x)=\frac{x}{8}-\frac{\lambda-x}{2\pi}.$$

Ponendo $S'(x)=0$:
$$\frac{x}{8}=\frac{\lambda-x}{2\pi} \;\Rightarrow\; 2\pi x=8(\lambda-x) \;\Rightarrow\; x(2\pi+8)=8\lambda \;\Rightarrow\; x=\frac{8\lambda}{2\pi+8}=\frac{4\lambda}{\pi+4}.$$

Poiché $S''(x)=\dfrac{1}{8}+\dfrac{1}{2\pi}>0$, il punto è un **minimo**. Dunque la somma delle aree è minima destinando al quadrato il tratto
$$x=\frac{4\lambda}{\pi+4}$$
e alla circonferenza il tratto
$$\lambda-x=\lambda-\frac{4\lambda}{\pi+4}=\frac{\pi\lambda}{\pi+4}.$$

(Si noti che con questa ripartizione il lato del quadrato $\dfrac{x}{4}=\dfrac{\lambda}{\pi+4}$ eguaglia il diametro del cerchio $2r=\dfrac{\lambda-x}{\pi}=\dfrac{\lambda}{\pi+4}$.)

## c) Somma delle aree massima

La funzione $S(x)$ è continua sull'intervallo chiuso $[0,\lambda]$ e ha un solo punto stazionario, che è un minimo. Il massimo va quindi cercato agli **estremi**:
$$S(0)=\frac{\lambda^2}{4\pi} \quad(\text{tutto il filo alla circonferenza}), \qquad S(\lambda)=\frac{\lambda^2}{16} \quad(\text{tutto il filo al quadrato}).$$

Poiché $4\pi\approx 12{,}57<16$, si ha $\dfrac{\lambda^2}{4\pi}>\dfrac{\lambda^2}{16}$. Il massimo è dunque in $x=0$: la somma delle aree è massima usando **tutto il filo per la circonferenza** (non ritagliando nulla per il quadrato), con area
$$S_{\max}=\frac{\lambda^2}{4\pi}.$$

A parità di perimetro, infatti, il cerchio racchiude un'area maggiore del quadrato: conviene non tagliare il filo.

## d) Aumento del volume del $10\%$ per dimensione

L'aiuola-scatola è un parallelepipedo rettangolo di dimensioni $a$, $b$, $c$ e volume $V=a\,b\,c$. Aumentando ciascuna dimensione del $10\%$, ogni fattore diventa $1{,}1$ volte:
$$V'=(1{,}1\,a)(1{,}1\,b)(1{,}1\,c)=1{,}1^3\,abc=1{,}331\,V.$$

L'aumento è quindi
$$\frac{V'-V}{V}=1{,}331-1=0{,}331=33{,}1\%.$$

Serve dunque il **$33{,}1\%$ di terreno in più**.

*Fonte:* [📄 PDF p.108](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
