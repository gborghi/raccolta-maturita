

**Problema:** [[Problemi/prob_2007_scuole_italiane_allestero_americhe_2007_sessione_o_problema1_18_1|2007 Estero Americhe Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_americhe_2007_sessione_o_problema1_18|2007 Estero Americhe Ordinaria — Problema 1]]

Si consideri la funzione $f(x)=1-x^2$, il cui grafico è la parabola $\Gamma$.

## a) Luogo dei centri

Il punto di $\Gamma$ di ascissa $1$ è $T=(1;\,0)$, poiché $f(1)=0$. Le circonferenze tangenti a $\Gamma$ in $T$ sono tangenti alla retta tangente comune in $T$: i loro centri stanno quindi sulla retta normale a $\Gamma$ in $T$.

Il coefficiente angolare della tangente in $T$ è $f'(1)=-2x\big|_{x=1}=-2$; la normale ha coefficiente angolare $\tfrac12$. Il luogo $\Lambda$ dei centri è dunque la retta

$$\Lambda:\quad y-0=\frac12\,(x-1)\ \Rightarrow\ y=\frac12\,x-\frac12 .$$

## b) Area tra $\Lambda$ e $\Gamma$

Intersezioni tra $\Gamma$ e $\Lambda$:

$$1-x^2=\frac12\,x-\frac12\ \Rightarrow\ 2x^2+x-3=0\ \Rightarrow\ x=-\frac32\ \lor\ x=1 .$$

Nell'intervallo $\left[-\tfrac32,\,1\right]$ la parabola sta sopra la retta, quindi

$$A=\int_{-3/2}^{1}\left[(1-x^2)-\left(\frac12\,x-\frac12\right)\right]dx=\int_{-3/2}^{1}\left(\frac32-\frac12\,x-x^2\right)dx .$$

$$A=\left[\frac32\,x-\frac14\,x^2-\frac13\,x^3\right]_{-3/2}^{1}=\frac{11}{12}-\left(-\frac{27}{16}\right)=\frac{125}{48}\cong 2{,}60\ \text{u}^2 .$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="180.93" height="169.503" viewBox="-72 -72 135.697 127.127"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-22.734H50.446"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M48.566-25.134c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-10.612" y="-22.734" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.991 2.153)">x</text><path fill="none" d="M-10.612 54.657V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-13.012-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-10.612" y="-22.734" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -41.897)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.86 36.675 1.466-5.476 1.465-5.286 1.466-5.098 1.466-4.91 1.465-4.72 1.466-4.53L-43.6 2.31l1.466-4.154 1.465-3.965 1.466-3.776 1.466-3.588 1.465-3.4 1.466-3.209 1.466-3.021 1.466-2.833 1.465-2.644 1.466-2.455 1.466-2.267 1.465-2.077 1.466-1.889 1.466-1.7 1.466-1.511 1.465-1.323 1.466-1.134 1.466-.945 1.465-.756 1.466-.568 1.466-.379 1.466-.19h1.465l1.466.187 1.466.376 1.465.565 1.466.754 1.466.942 1.465 1.132 1.466 1.32 1.466 1.509 1.466 1.697 1.465 1.886 1.466 2.076L7.7-30.765l1.465 2.452 1.466 2.641 1.466 2.83 1.466 3.02 1.465 3.207 1.466 3.397 1.466 3.585 1.465 3.774 1.466 3.962 1.466 4.152 1.466 4.34 1.465 4.53 1.466 4.717 1.466 4.907 1.465 5.095 1.466 5.284 1.466 5.473"/><path fill="none" stroke="red" stroke-width=".8" d="m-49.308 7.995 3.794-1.897 3.793-1.897 3.794-1.897 3.793-1.896 3.794-1.897 3.793-1.897 3.794-1.897 3.793-1.896 3.794-1.897 3.793-1.897 3.794-1.896 3.793-1.897 3.794-1.897L3.8-18.559l3.793-1.897 3.794-1.897 3.793-1.897 3.794-1.896 3.793-1.897 3.794-1.897 3.793-1.897 3.794-1.896 3.793-1.897 3.794-1.897"/><path stroke="none" d="M13.75-22.734a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-10.612" y="-22.734" stroke="none" font-family="cmmi10" font-size="10" transform="translate(26.295 -3.533)">T</text><path stroke="none" d="M-43.155 5.719a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-10.612" y="-22.734" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-45.176 31.87)">A</text><g fill="#00f" stroke="#00f"><text x="-10.612" y="-22.734" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(-48.65 53.494)">¡</text></g><g fill="red" stroke="red"><text x="-10.612" y="-22.734" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(48.881 -7.964)">¤</text></g></g></svg>
</figure>

## c) Grafico di $g(x)=\dfrac{1}{1-x^2}$

Si consideri $g(x)=\dfrac{1}{f(x)}=\dfrac{1}{1-x^2}$.

- Dominio: $x\ne\pm 1$; la funzione è **pari**.
- Segno: $g(x)>0$ dove $1-x^2>0$, cioè per $-1<x<1$; altrove $g(x)<0$.
- **Asintoti verticali** $x=1$ e $x=-1$; per $x\to\pm\infty$ si ha $g\to 0^-$, quindi **asintoto orizzontale** $y=0$.
- $g(0)=1$.

Derivata: $g'(x)=\dfrac{2x}{(1-x^2)^2}$, che si annulla in $x=0$. Dove $f$ cresce $g$ decresce e viceversa: nell'intervallo $(-1,1)$ il punto $x=0$ è un **minimo relativo** di ordinata $g(0)=1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="235.557" height="236.27" viewBox="-72 -72 176.668 177.202"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 22.79H91.417"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M89.537 20.39c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="9.873" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(85.476 2.153)">x</text><path fill="none" d="M9.873 104.732V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M7.473-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="9.873" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -87.42)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M35.48 102.172V-56.594M-15.734 102.172V-56.594"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-11.125-55.377.712 9.399.711 7.159.712 5.617.711 4.523.712 3.703.711 3.089.712 2.607.711 2.226.712 1.916.711 1.66.712 1.447.711 1.27.712 1.117.712.984.711.87.712.771.711.682.712.602.711.53.712.466.711.405.712.35.711.3.712.251.711.208.712.164.711.12.712.08.711.038.712.003.712-.041.711-.08.712-.118.711-.161.712-.208.711-.248.712-.3.711-.35.712-.403.711-.466.712-.527.711-.6.712-.681.711-.768.712-.869.711-.98.712-1.115.712-1.265.711-1.442.712-1.658.711-1.908.712-2.218.711-2.597.712-3.079.711-3.684.712-4.5.711-5.592.712-7.118.711-9.335M40.09 88.053l.79-10.325.789-7.665.79-5.92.79-4.702.789-3.822.79-3.168.79-2.664.79-2.271.789-1.954.79-1.7.79-1.496.789-1.321.79-1.176.79-1.052.789-.948.79-.857.79-.78.789-.708.79-.648.79-.596.789-.548.79-.507.79-.469.789-.436.79-.406.79-.378.789-.353.79-.33.79-.31.789-.291.79-.274.79-.259.789-.243.79-.23.79-.218.79-.207.789-.195.79-.186.79-.176.789-.167.79-.16.79-.153.789-.145.79-.14.79-.131.789-.128.79-.121.79-.116.789-.112.79-.106.79-.103.789-.098.79-.095.79-.091.789-.088.79-.084.79-.081.789-.078.79-.076M-66.949 25.99l.79.075.79.079.79.08.79.085.789.087.79.091.79.095.789.098.79.103.79.107.789.111.79.116.79.121.789.127.79.132.79.14.789.144.79.153.79.16.789.167.79.176.79.185.789.196.79.206.79.217.789.231.79.243.79.258.789.273.79.291.79.31.79.33.789.353.79.377.79.405.789.436.79.468.79.506.789.548.79.593.79.65.789.71.79.773.79.858.789.945.79 1.05.79 1.173.789 1.318.79 1.49.79 1.698.789 1.952.79 2.264.79 2.656.789 3.155.79 3.809.79 4.682.789 5.894.79 7.626.79 10.269"/><path stroke="none" d="M11.673-2.818a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="10"><text x="9.873" y="22.789" font-family="cmr10" transform="translate(3.533 -31.64)">(0</text><text x="18.762" y="22.789" font-family="cmmi10" transform="translate(3.533 -31.64)">;</text><text x="23.207" y="22.789" font-family="cmr10" transform="translate(3.533 -31.64)">1)</text></g><g fill="#00f" stroke="#00f"><text x="9.873" y="22.789" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(56.333 49.834)">g</text></g></g></svg>
</figure>

## d) Aree nella striscia $-2\le y\le -1$

Si considerino i due domini del III e IV quadrante delimitati dai grafici di $f$ e di $g$ nella striscia $-2\le y\le -1$. Per la simmetria (entrambe pari) le due aree sono uguali: calcoliamo quella del IV quadrante ($x>0$).

Intersezioni con le rette orizzontali:

- $y=-1$: sia $f$ sia $g$ passano per $B=(\sqrt2;\,-1)$, perché $1-x^2=-1\Rightarrow x=\sqrt2$ e $\dfrac{1}{1-x^2}=-1\Rightarrow x=\sqrt2$;
- $y=-2$ su $f$: $1-x^2=-2\Rightarrow x=\sqrt3$, punto $D=(\sqrt3;\,-2)$;
- $y=-2$ su $g$: $\dfrac{1}{1-x^2}=-2\Rightarrow 2x^2=3\Rightarrow x=\dfrac{\sqrt6}{2}$, punto $E=\left(\dfrac{\sqrt6}{2};\,-2\right)$.

Il dominio ha come frontiera: a sinistra il ramo di $g$ da $E$ a $B$, a destra l'arco di parabola da $B$ a $D$, in basso il segmento $y=-2$ da $E$ a $D$. Integrando rispetto a $x$ (bordo inferiore $y=-2$):

$$A_1=\int_{\sqrt6/2}^{\sqrt2}\left[\frac{1}{1-x^2}+2\right]dx+\int_{\sqrt2}^{\sqrt3}\left[(1-x^2)+2\right]dx .$$

Per il primo integrale, con la decomposizione $\dfrac{1}{1-x^2}=\dfrac12\!\left(\dfrac{1}{1-x}+\dfrac{1}{1+x}\right)$ si ha, per $x>1$,

$$\int\frac{dx}{1-x^2}=\frac12\ln\frac{x+1}{x-1} .$$

Quindi

$$\int_{\sqrt6/2}^{\sqrt2}\left[\frac{1}{1-x^2}+2\right]dx=\left[2x+\frac12\ln\frac{x+1}{x-1}\right]_{\sqrt6/2}^{\sqrt2}=2\sqrt2-\sqrt6+\ln\frac{\sqrt2+1}{\sqrt3+\sqrt2},$$

avendo usato $\dfrac{\sqrt2+1}{\sqrt2-1}=(\sqrt2+1)^2$ e $\dfrac{\sqrt6/2+1}{\sqrt6/2-1}=(\sqrt3+\sqrt2)^2$.

Per il secondo integrale:

$$\int_{\sqrt2}^{\sqrt3}(3-x^2)\,dx=\left[3x-\frac13x^3\right]_{\sqrt2}^{\sqrt3}=2\sqrt3-\frac{7}{3}\sqrt2 .$$

Sommando:

$$A_1=2\sqrt3-\sqrt6-\frac{\sqrt2}{3}+\ln\frac{\sqrt2+1}{\sqrt3+\sqrt2}\cong 0{,}28\ \text{u}^2 .$$

Per la simmetria, l'area complessiva dei due domini vale $2A_1\cong 0{,}56\ \text{u}^2$.

*Fonte:* [📄 PDF p.18](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
