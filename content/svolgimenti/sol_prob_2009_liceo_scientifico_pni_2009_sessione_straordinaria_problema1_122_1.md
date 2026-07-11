

**Problema:** [[Problemi/prob_2009_liceo_scientifico_pni_2009_sessione_straordinaria_problema1_122_1|2009 PNI Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_liceo_scientifico_pni_2009_sessione_straordinaria_problema1_122|2009 PNI Straordinaria — Problema 1]]

Dato il triangolo $ABC$, rettangolo in $C$, di cateti $3$ e $4$, si consideri una retta $r$ passante per $C$, non secante il triangolo e formante un angolo $x$ con il cateto $AC$. Dette $A'$ e $B'$ le proiezioni ortogonali di $A$ e $B$ su $r$, si studia il quadrilatero $AA'B'B$.

## a) Perimetro del quadrilatero

Poniamo $AC=3$ (cateto adiacente all'angolo $x$) e $BC=4$; l'ipotenusa vale $AB=5$.

Nel triangolo rettangolo $ACA'$ (retto in $A'$) l'angolo $A\widehat{C}A'=x$, quindi
$$AA'=AC\sin x=3\sin x,\qquad CA'=AC\cos x=3\cos x.$$
Poiché $A\widehat{C}B=90^\circ$, risulta $B\widehat{C}B'=90^\circ-x$, e nel triangolo rettangolo $BCB'$ (retto in $B'$)
$$BB'=BC\cos x=4\cos x,\qquad CB'=BC\sin x=4\sin x.$$
Il segmento sulla retta è $A'B'=CA'+CB'=3\cos x+4\sin x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="257.808" height="147.724" viewBox="-72 -72 193.356 110.793"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g stroke-width=".8"><path fill="none" d="M-71.87 24.14h181.101"/><text x="20.032" y="24.139" stroke="none" font-family="cmmi10" font-size="10" transform="translate(92.932 2.153)">r</text></g><path fill="none" stroke-width=".8" d="M82.2-28.027-49.434-58.571l69.466 82.71Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M82.2-28.027v52.166M-49.434-58.57v82.71"/><path fill="none" d="M76.795 24.14v-5.407h5.406M-44.03 24.14v-5.407h-5.405M40.304 24.14c0-4.766-1.68-9.381-4.743-13.032"/><text x="20.032" y="24.139" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.713 -5.956)">x</text><text x="20.032" y="24.139" stroke="none" font-family="cmr10" font-size="10" transform="translate(25.882 -27.862)">3</text><text x="20.032" y="24.139" stroke="none" font-family="cmr10" font-size="10" transform="translate(-44.397 -33.268)">4</text><path stroke="none" d="M21.552 24.14a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="20.032" y="24.139" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">C</text><path stroke="none" d="M83.72-28.027a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="20.032" y="24.139" stroke="none" font-family="cmmi10" font-size="10" transform="translate(65.7 -55.7)">A</text><path stroke="none" d="M-47.914-58.57a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="20.032" y="24.139" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-81.086 -86.243)">B</text><path stroke="none" d="M83.72 24.14a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><g stroke="none"><text x="20.032" y="24.139" font-family="cmmi10" font-size="10" transform="translate(57.015 11.05)">A</text><text x="27.532" y="20.51" font-family="cmsy7" font-size="7" transform="translate(57.015 11.05)">0</text></g><path stroke="none" d="M-47.914 24.14a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><g stroke="none"><text x="20.032" y="24.139" font-family="cmmi10" font-size="10" transform="translate(-74.912 11.05)">B</text><text x="28.119" y="20.51" font-family="cmsy7" font-size="7" transform="translate(-74.912 11.05)">0</text></g></g></svg>
</figure>

Il quadrilatero $AA'B'B$ è un trapezio rettangolo di basi $AA'\parallel BB'$; il suo perimetro è
$$y=AA'+A'B'+B'B+BA=3\sin x+4\cos x+(3\cos x+4\sin x)+\;\text{...}$$
cioè, sommando i lati $AA'=3\sin x$, $BB'=4\cos x$, $A'B'=3\cos x+4\sin x$ e $AB=5$:
$$y=7\sin x+7\cos x+5.$$

Con le formule parametriche $\ \sin x=\dfrac{2t}{1+t^2},\ \cos x=\dfrac{1-t^2}{1+t^2}\ $ dove $t=\tan\dfrac{x}{2}$:
$$y=7\cdot\frac{2t}{1+t^2}+7\cdot\frac{1-t^2}{1+t^2}+5=\frac{14t+7-7t^2+5+5t^2}{1+t^2}=\frac{-2t^2+14t+12}{t^2+1}.$$

## b) Studio della funzione

Studiamo $\ y(t)=\dfrac{-2t^2+14t+12}{t^2+1}\ $ su tutto $\mathbb{R}$, evidenziando poi il tratto ammesso dai vincoli geometrici. Con la divisione conviene scriverla come
$$y(t)=-2+\frac{14t+14}{t^2+1}=-2+\frac{14(t+1)}{t^2+1}.$$

**Dominio e simmetrie.** Il denominatore $t^2+1$ non si annulla mai: dominio $\mathbb{R}$. La funzione non è né pari né dispari.

**Intersezioni con gli assi.** Per $t=0$ si ha $y=12$. Per $y=0$: $-2t^2+14t+12=0$, cioè $t^2-7t-6=0$, da cui
$$t=\frac{7\pm\sqrt{73}}{2}\ \Rightarrow\ t\approx-0{,}8\quad\text{oppure}\quad t\approx7{,}8.$$
La funzione è positiva per $\dfrac{7-\sqrt{73}}{2}<t<\dfrac{7+\sqrt{73}}{2}$.

**Limiti e asintoti.** 
$$\lim_{t\to\pm\infty}\frac{-2t^2+14t+12}{t^2+1}=-2.$$
Non ci sono asintoti verticali (funzione continua su $\mathbb{R}$); c'è l'asintoto orizzontale $y=-2$ per $t\to\pm\infty$, quindi nessun asintoto obliquo.

**Derivata prima.**
$$y'(t)=\frac{(-4t+14)(t^2+1)-(-2t^2+14t+12)\cdot 2t}{(t^2+1)^2}=\frac{-14t^2-28t+14}{(t^2+1)^2}=\frac{-14(t^2+2t-1)}{(t^2+1)^2}.$$
$y'=0$ per $t^2+2t-1=0$, cioè $t=-1\pm\sqrt{2}$. Poiché il numeratore ha il segno di $-(t^2+2t-1)$, la funzione è **crescente** per $-1-\sqrt{2}<t<-1+\sqrt{2}$ e **decrescente** all'esterno. Dunque:
$$t=-1-\sqrt{2}\ \text{(minimo assoluto)},\quad y=5-7\sqrt{2}\approx-4{,}9;$$
$$t=-1+\sqrt{2}=\sqrt{2}-1\ \text{(massimo assoluto)},\quad y=5+7\sqrt{2}\approx14{,}9.$$

**Derivata seconda.** Si trovano i flessi in $\ t=-2-\sqrt{3},\ t=-2+\sqrt{3},\ t=1$, con concavità verso l'alto per $-2-\sqrt{3}<t<-2+\sqrt{3}$ e per $t>1$.

**Vincolo geometrico.** Essendo $0<x<\dfrac{\pi}{2}$, si ha $0<\dfrac{x}{2}<\dfrac{\pi}{4}$, quindi $0<t<1$. Su questo intervallo (tratto rosso in figura) $y$ parte da $y(0)=12$, sale fino al massimo $5+7\sqrt{2}\approx14{,}9$ in $t=\sqrt{2}-1$ (cioè $x=45^\circ$) e ritorna a $y(1)=12$: il **perimetro massimo** del quadrilatero è $5+7\sqrt{2}\approx14{,}9$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="368.406" height="248.225" viewBox="-72 -72 276.305 186.169"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 67.605h237.466"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M163.516 65.205c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="29.649" y="67.605" stroke="none" font-family="cmmi10" font-size="10" transform="translate(139.68 3.075)">t</text><path fill="none" d="M29.65 113.699V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M27.25-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="29.649" y="67.605" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -132.236)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 82.97h237.866"/><g stroke="none" font-size="10"><text x="29.649" y="67.605" font-family="cmmi10" transform="translate(139.68 17.615)">y</text><text x="37.688" y="67.605" font-family="cmr10" transform="translate(139.68 17.615)">=</text><text x="48.244" y="67.605" font-family="cmsy10" transform="translate(139.68 17.615)">¡</text><text x="56.022" y="67.605" font-family="cmr10" transform="translate(139.68 17.615)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.245 97.504 1.576.184 1.576.188 1.576.192 1.576.196 1.575.2 1.576.205 1.576.21 1.576.213 1.576.218 1.576.222 1.576.227 1.576.231 1.576.236 1.576.24 1.576.244 1.576.248 1.576.253 1.576.255 1.576.259 1.576.261 1.576.264 1.576.265 1.576.266 1.576.265 1.576.263 1.576.26 1.576.253 1.576.247 1.576.235 1.576.221 1.576.203 1.576.18 1.576.149 1.576.111 1.576.065 1.576.006 1.576-.066 1.576-.155 1.576-.265 1.576-.4 1.576-.57 1.576-.773 1.576-1.027 1.576-1.337 1.576-1.72L8.25 96.74l1.576-2.756 1.576-3.447 1.576-4.278 1.576-5.261 1.576-6.411 1.576-7.713 1.576-9.133 1.576-10.598 1.576-11.976L24.01 22.08l1.576-13.71 1.576-13.63 1.576-12.718 1.576-10.973 1.576-8.563 1.576-5.79 1.576-2.993 1.576-.456 1.576 1.632 1.576 3.21 1.576 4.301 1.576 4.97 1.576 5.31 1.576 5.408 1.576 5.34 1.576 5.164 1.576 4.92 1.576 4.641 1.576 4.35 1.576 4.06 1.576 3.775 1.576 3.506 1.576 3.255 1.576 3.019 1.576 2.803 1.576 2.603 1.576 2.42 1.576 2.251 1.576 2.099 1.576 1.957 1.576 1.83 1.576 1.71 1.576 1.604 1.576 1.504 1.576 1.413 1.576 1.33 1.576 1.251 1.576 1.182 1.576 1.115 1.575 1.055 1.576.999 1.576.946 1.576.898 1.576.854 1.576.811 1.576.773 1.576.736 1.576.702 1.576.67 1.576.64 1.576.613 1.576.587 1.576.562 1.576.538 1.576.517 1.576.496 1.576.477 1.576.459 1.576.441 1.576.425 1.576.41 1.576.394 1.576.38 1.576.368 1.576.355 1.576.342 1.576.332 1.576.32 1.576.311 1.576.3 1.576.291 1.576.283 1.576.273 1.576.265 1.576.258 1.576.25 1.576.242 1.576.236 1.576.23 1.576.222 1.576.217 1.576.211 1.576.205"/><path fill="none" stroke="red" stroke-width="1.2" d="m29.65-24.583.318-2.148.32-2.055.319-1.954.32-1.85.318-1.745.32-1.632.319-1.519.32-1.406.318-1.288.32-1.172.319-1.054.32-.939.318-.822.32-.706.319-.596.32-.486.318-.378.32-.274.319-.173.32-.075.318.018.32.108.319.193.32.274.319.35.319.421.319.492.32.554.319.613.319.669.32.72.318.767.32.81.319.852.32.886.318.917.32.949.319.972.32.998.318 1.016.32 1.035.319 1.05.32 1.062.318 1.073.32 1.081.319 1.088.32 1.093.318 1.095.32 1.097"/><text x="29.649" y="67.605" stroke="none" font-family="cmr10" font-size="10" transform="translate(-13.533 -82.21)">12</text><path fill="none" d="M45.298 64.532v6.146"/><text x="29.649" y="67.605" stroke="none" font-family="cmr10" font-size="10" transform="translate(13.15 13.05)">1</text><g fill="red" stroke="red"><text x="29.649" y="67.605" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.827 -118)">max</text></g></g></svg>
</figure>

## c) Rapporto tra le aree

Il quadrilatero è un trapezio di basi $AA'$ e $BB'$ e altezza $A'B'$:
$$\text{Area}(AA'B'B)=\frac{(AA'+BB')\cdot A'B'}{2}=\frac{(3\sin x+4\cos x)(3\cos x+4\sin x)}{2}.$$
Sviluppando il prodotto:
$$(3\sin x+4\cos x)(3\cos x+4\sin x)=25\sin x\cos x+12(\sin^2x+\cos^2x)=25\sin x\cos x+12.$$
Poiché $\text{Area}(ABC)=\dfrac{3\cdot4}{2}=6$, e ricordando che $2\sin x\cos x=\sin(2x)$:
$$\frac{\text{Area}(AA'B'B)}{\text{Area}(ABC)}=\frac{25\sin x\cos x+12}{12}=\frac{25}{24}\sin(2x)+1.$$
La funzione $R(x)=\dfrac{25}{24}\sin(2x)+1$ è una sinusoide di periodo $T=\pi$, ampiezza $\dfrac{25}{24}$, traslata di $1$ nel verso positivo dell'asse $y$. Nel vincolo geometrico $0<x<\dfrac{\pi}{2}$ (dove $\sin(2x)\ge0$) essa cresce da $1$ fino al massimo $\dfrac{25}{24}+1=\dfrac{49}{24}\approx2{,}04$ in $x=\dfrac{\pi}{4}$, per poi tornare a $1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="209.907" height="159.65" viewBox="-72 -72 157.43 119.737"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="m-55.032-5.649 1.742-1.89 1.741-1.887 1.742-1.876 1.741-1.86L-46.324-15l1.741-1.813 1.742-1.78 1.741-1.744 1.742-1.702 1.741-1.656 1.741-1.605 1.742-1.55 1.741-1.488 1.742-1.425 1.741-1.357 1.742-1.283 1.741-1.209 1.742-1.13 1.741-1.047 1.742-.961 1.741-.874 1.742-.783 1.741-.69 1.742-.595 1.741-.5 1.742-.4 1.741-.302 1.742-.203 1.741-.102h1.742l1.741.098 1.742.2 1.741.299 1.742.399 1.741.496 1.742.593 1.741.687 1.742.78 1.741.872 1.741.958 1.742 1.045 1.741 1.128 1.742 1.206 1.741 1.282 1.742 1.356 1.741 1.422 1.742 1.487 1.741 1.548 1.742 1.603 1.741 1.655 1.742 1.7 1.741 1.744 1.742 1.78 1.741 1.81 1.742 1.839 1.741 1.859 1.742 1.876 1.741 1.885L47.716-5.7l.048 34.195H-55.032Z"/><path fill="none" d="M-61.576 28.495H72.179"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M70.299 26.095c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-55.032" y="28.495" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.143 2.153)">x</text><path fill="none" d="M-55.032 33.616v-91.787"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-57.432-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08"/><text x="-55.032" y="28.495" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.835 -90.598)">R</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-55.032-5.649 1.742-1.89 1.741-1.887 1.742-1.876 1.741-1.86L-46.324-15l1.741-1.813 1.742-1.78 1.741-1.744 1.742-1.702 1.741-1.656 1.741-1.605 1.742-1.55 1.741-1.488 1.742-1.425 1.741-1.357 1.742-1.283 1.741-1.209 1.742-1.13 1.741-1.047 1.742-.961 1.741-.874 1.742-.783 1.741-.69 1.742-.595 1.741-.5 1.742-.4 1.741-.302 1.742-.203 1.741-.102h1.742l1.741.098 1.742.2 1.741.299 1.742.399 1.741.496 1.742.593 1.741.687 1.742.78 1.741.872 1.741.958 1.742 1.045 1.741 1.128 1.742 1.206 1.741 1.282 1.742 1.356 1.741 1.422 1.742 1.487 1.741 1.548 1.742 1.603 1.741 1.655 1.742 1.7 1.741 1.744 1.742 1.78 1.741 1.81 1.742 1.839 1.741 1.859 1.742 1.876 1.741 1.885L47.716-5.7"/><path fill="none" d="M-3.66 26.787v3.415"/><g stroke="none"><text x="-53.832" y="24.557" font-family="cmmi7" font-size="7" transform="translate(47.708 12.191)">¼</text><path d="M-6.124 37.986h4.927v.4h-4.927z"/><text x="-53.361" y="31.943" font-family="cmr7" font-size="7" transform="translate(47.708 12.191)">4</text></g><path fill="none" d="M47.764 26.787v3.415"/><g stroke="none"><text x="-53.832" y="24.557" font-family="cmmi7" font-size="7" transform="translate(99.132 12.191)">¼</text><path d="M45.3 37.986h4.927v.4H45.3z"/><text x="-53.361" y="31.943" font-family="cmr7" font-size="7" transform="translate(99.132 12.191)">2</text></g><text x="-55.032" y="28.495" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -30.921)">1</text><g stroke="none"><text x="-53.832" y="24.557" font-family="cmr7" font-size="7" transform="translate(-13.905 -67.152)">49</text><path d="M-67.737-41.357h7.972v.4h-7.972z"/><text x="-53.832" y="31.943" font-family="cmr7" font-size="7" transform="translate(-13.905 -67.152)">24</text></g></g></svg>
</figure>

## d) Area sottesa dalla curva

L'area sottesa da $R(x)$ nell'intervallo $\left[0,\dfrac{\pi}{2}\right]$ è
$$\text{Area}=\int_0^{\pi/2}\!\left(\frac{25}{24}\sin(2x)+1\right)dx=\frac{25}{24}\int_0^{\pi/2}\!\sin(2x)\,dx+\int_0^{\pi/2}\!1\,dx.$$
Essendo $\displaystyle\int_0^{\pi/2}\sin(2x)\,dx=\left[-\tfrac12\cos(2x)\right]_0^{\pi/2}=\tfrac12+\tfrac12=1$ e $\displaystyle\int_0^{\pi/2}1\,dx=\frac{\pi}{2}$:
$$\text{Area}=\frac{25}{24}\cdot1+\frac{\pi}{2}=\frac{25}{24}+\frac{\pi}{2}\approx2{,}61\ \text{u}^2.$$

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
