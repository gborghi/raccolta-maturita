

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_155_1|2006 Sessione Ordinaria PNI — Prova (p.155) — Problema 1]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Un filo metallico di lunghezza $\lambda$ delimita il perimetro di un'aiuola rettangolare.

## a) Aiuola rettangolare di area massima

Sia $x$ la misura di un lato del rettangolo. Poiché il perimetro è $\lambda$, l'altro lato misura $\dfrac{\lambda}{2}-x$, con $0<x<\dfrac{\lambda}{2}$. L'area è

$$A(x)=x\left(\frac{\lambda}{2}-x\right)=\frac{\lambda}{2}\,x-x^2 .$$

Derivando: $A'(x)=\dfrac{\lambda}{2}-2x$, che si annulla per $x=\dfrac{\lambda}{4}$. Essendo $A''(x)=-2<0$, si tratta di un massimo. L'altro lato vale allora $\dfrac{\lambda}{2}-\dfrac{\lambda}{4}=\dfrac{\lambda}{4}$: i due lati sono uguali.

L'aiuola di area massima è quindi il **quadrato** di lato $\dfrac{\lambda}{4}$, con area

$$A_{\max}=\left(\frac{\lambda}{4}\right)^2=\frac{\lambda^2}{16}.$$

## b) Somma delle due aree minima

Si taglia il filo in due parti: una di lunghezza $x$ per il quadrato, l'altra di lunghezza $\lambda-x$ per la circonferenza, con $0\le x\le\lambda$.

Il quadrato ha lato $\dfrac{x}{4}$, dunque area $\left(\dfrac{x}{4}\right)^2=\dfrac{x^2}{16}$.

Il cerchio ha circonferenza $\lambda-x=2\pi r$, quindi raggio $r=\dfrac{\lambda-x}{2\pi}$ e area

$$\pi r^2=\pi\left(\frac{\lambda-x}{2\pi}\right)^2=\frac{(\lambda-x)^2}{4\pi}.$$

La somma delle aree è

$$S(x)=\frac{x^2}{16}+\frac{(\lambda-x)^2}{4\pi},\qquad 0\le x\le\lambda .$$

Derivando e ponendo la derivata nulla:

$$S'(x)=\frac{x}{8}-\frac{\lambda-x}{2\pi}=0
\;\Rightarrow\; 2\pi x=8(\lambda-x)
\;\Rightarrow\; x(2\pi+8)=8\lambda .$$

Quindi

$$x=\frac{8\lambda}{2\pi+8}=\frac{4\lambda}{\pi+4}.$$

Poiché $S''(x)=\dfrac{1}{8}+\dfrac{1}{2\pi}>0$, la funzione è convessa e questo punto è di **minimo**. La somma delle aree è minima destinando al quadrato la parte

$$x=\frac{4\lambda}{\pi+4}$$

e al cerchio la parte

$$\lambda-x=\lambda-\frac{4\lambda}{\pi+4}=\frac{\pi\lambda}{\pi+4}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="423.418" height="302.451" viewBox="-72 -72 317.563 226.839"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-61.772 130.642h294.084"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M230.432 128.242c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-54.09" y="130.642" stroke="none" font-family="cmmi10" font-size="10" transform="translate(290.335 2.153)">x</text><path fill="none" d="M-54.09 142.584V-58.17"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.49-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08"/><text x="-54.09" y="130.642" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.354 -192.745)">S</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-54.09-27.846 4.337 5.288 4.337 5.136 4.337 4.954 4.337 4.832 4.337 4.619 4.338 4.468 4.337 4.315 4.337 4.164 4.337 3.982 4.338 3.829 4.337 3.646 4.337 3.495 4.337 3.373 4.337 3.16 4.338 3.01 4.337 2.857 4.337 2.704 4.337 2.523 4.337 2.34 4.337 2.188 4.338 2.067 4.337 1.884 4.337 1.732 4.337 1.58 4.338 1.368 4.337 1.216 4.337 1.064 4.337.881 4.337.76 4.338.577 4.337.425 4.337.244 4.337.12 4.337-.09 4.338-.213 4.337-.395 4.337-.578 4.337-.698 4.337-.882 4.338-1.063 4.337-1.186 4.337-1.367 4.337-1.55 4.337-1.672 4.338-1.884 4.337-2.006 4.337-2.157 4.337-2.37 4.337-2.523 4.338-2.675 4.337-2.796 4.337-3.008 4.337-3.13 4.337-3.344 4.338-3.464 4.337-3.647 4.337-3.799 4.337-3.95 4.337-4.164"/><path fill="none" stroke-dasharray="3.0,3.0" d="M89.31 130.642V60.926"/><text x="-54.09" y="130.642" stroke="none" font-family="cmsy10" font-size="10" transform="translate(140.901 -67.494)">²</text><g stroke="none"><text x="-49.729" y="126.704" font-family="cmr7" font-size="7" transform="translate(134.675 16.312)">4</text><text x="-45.743" y="126.704" font-family="cmmi7" font-size="7" transform="translate(134.675 16.312)">¸</text><path d="M81.785 144.254h15.053v.4H81.785z"/><text x="-52.89" y="134.09" font-family="cmmi7" font-size="7" transform="translate(134.675 16.312)">¼</text><text x="-47.963" y="134.09" font-family="cmr7" font-size="7" transform="translate(134.675 16.312)">+4</text></g><text x="-54.09" y="130.642" stroke="none" font-family="cmmi10" font-size="10" transform="translate(253.158 14.458)">¸</text><g stroke="none"><text x="-52.757" y="126.704" font-family="cmmi7" font-size="7" transform="translate(-14.847 -155.183)">¸</text><text x="-48.014" y="123.686" font-family="cmr5" font-size="5" transform="translate(-14.847 -155.183)">2</text><path d="M-67.737-27.241h8.914v.4h-8.914z"/><text x="-52.89" y="134.09" font-family="cmr7" font-size="7" transform="translate(-14.847 -155.183)">4</text><text x="-48.904" y="134.09" font-family="cmmi7" font-size="7" transform="translate(-14.847 -155.183)">¼</text></g><g stroke="none"><text x="-52.89" y="126.704" font-family="cmmi7" font-size="7" transform="translate(-14.579 -121.116)">¸</text><text x="-48.147" y="123.686" font-family="cmr5" font-size="5" transform="translate(-14.579 -121.116)">2</text><path d="M-67.469 6.826h8.646v.4h-8.646z"/><text x="-52.554" y="134.09" font-family="cmr7" font-size="7" transform="translate(-14.579 -121.116)">16</text></g><g stroke="none" font-size="10"><text x="-54.09" y="130.642" font-family="cmmi10" transform="translate(66.722 -146.87)">S</text><text x="-47.382" y="130.642" font-family="cmr10" transform="translate(66.722 -146.87)">(</text><text x="-43.493" y="130.642" font-family="cmmi10" transform="translate(66.722 -146.87)">x</text><text x="-37.778" y="130.642" font-family="cmr10" transform="translate(66.722 -146.87)">)</text></g></g></svg>
</figure>

## c) Somma delle due aree massima

La funzione $S(x)=\dfrac{x^2}{16}+\dfrac{(\lambda-x)^2}{4\pi}$ è una parabola con concavità verso l'alto sull'intervallo chiuso $[0,\lambda]$: il suo massimo si trova quindi in uno degli estremi. Si confrontano i valori:

$$S(0)=\frac{\lambda^2}{4\pi}\qquad(\text{tutto il filo al cerchio}),$$
$$S(\lambda)=\frac{\lambda^2}{16}\qquad(\text{tutto il filo al quadrato}).$$

Poiché $4\pi\approx 12{,}57<16$, si ha $\dfrac{\lambda^2}{4\pi}>\dfrac{\lambda^2}{16}$, cioè $S(0)>S(\lambda)$.

La somma delle aree è dunque **massima quando non si taglia il filo** e lo si impiega interamente per il cerchio, ottenendo l'area $\dfrac{\lambda^2}{4\pi}$.

## d) Aumento del volume del parallelepipedo

L'aiuola realizzata ha la forma di un parallelepipedo rettangolo di dimensioni $a$, $b$, $c$ e volume $V=abc$. Aumentando ciascuna dimensione del $10\%$, ogni spigolo viene moltiplicato per $1{,}1$, quindi il nuovo volume è

$$V'=(1{,}1\,a)(1{,}1\,b)(1{,}1\,c)=1{,}1^3\,abc=1{,}331\,V.$$

L'aumento è pari a $V'-V=0{,}331\,V$: occorre il **$33{,}1\%$** di terreno in più.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
