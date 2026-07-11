

**Problema:** [[Problemi/prob_2004_scuole_italiane_allestero_europa_2004_sessione_ord_problema1_57_1|2004 SE Europa Ord — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_europa_2004_sessione_ord_problema1_57|2004 SE Europa Ord — Problema 1]]

Nel piano sono assegnati una retta $r$ e un punto $H$ la cui distanza da $r$ è $\frac{3}{2}$ (rispetto a una data unità di misura).

## a)

L'altezza di un triangolo equilatero inscritto in una circonferenza è uguale a $\frac{3}{2}$ del raggio: poiché tale altezza deve valere $\frac{3}{2}$, il raggio della circonferenza circoscritta è $1$.

Fissiamo il sistema di riferimento in modo che $r$ coincida con l'asse delle ascisse ($y=0$) e che $H$ stia sull'asse $y$. Allora
$$H=\left(0;\ \frac{3}{2}\right).$$
Il centro $C$ della circonferenza circoscritta divide l'altezza in modo che $\overline{CH}$ sia il raggio; essendo il baricentro a un terzo dell'altezza dalla base, si ha
$$C=\left(0;\ \frac{1}{2}\right),\qquad \text{raggio } =1.$$
I due vertici $A$ e $B$ appartengono a $r$ e distano $\frac{\sqrt{3}}{2}$ dall'asse $y$:
$$A=\left(-\frac{\sqrt{3}}{2};\ 0\right),\qquad B=\left(\frac{\sqrt{3}}{2};\ 0\right).$$
Infatti $\overline{HA}=\overline{AB}=\overline{HB}=\sqrt{3}$, quindi il triangolo $HAB$ è equilatero.

L'equazione della circonferenza circoscritta è
$$x^{2}+\left(y-\frac{1}{2}\right)^{2}=1,\qquad\text{ovvero}\qquad x^{2}+y^{2}-y-\frac{3}{4}=0.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="210.52" height="185.431" viewBox="-72 -72 157.89 139.073"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 42.422H72.639"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M70.759 40.022c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x=".484" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(76.087 2.153)">x</text><path fill="none" d="M.484 56.933V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-1.916-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x=".484" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -107.054)">y</text><path fill="none" stroke="gray" d="M-67.233 42.422H68.201"/><g fill="gray" stroke="gray"><text x=".484" y="42.422" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(62.905 9.892)">r</text></g><path fill="none" stroke-width=".8" d="M-41.41 42.422h83.79L.483-30.144Z"/><path fill="none" stroke="#00f" d="M48.854 18.234c0-26.715-21.656-48.37-48.37-48.37s-48.37 21.655-48.37 48.37 21.656 48.37 48.37 48.37 48.37-21.656 48.37-48.37Zm-48.37 0"/><path stroke="none" d="M2.014-30.144a1.53 1.53 0 1 0-3.06 0 1.53 1.53 0 0 0 3.06 0m-1.53 0"/><text x=".484" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -76.1)">H</text><path stroke="none" d="M-39.88 42.422a1.53 1.53 0 1 0-3.06 0 1.53 1.53 0 0 0 3.06 0m-1.53 0"/><text x=".484" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-52.928 10.366)">A</text><path stroke="none" d="M43.91 42.422a1.53 1.53 0 1 0-3.06 0 1.53 1.53 0 0 0 3.06 0m-1.53 0"/><text x=".484" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(45.428 10.366)">B</text><path stroke="none" d="M2.014 18.234a1.53 1.53 0 1 0-3.06 0 1.53 1.53 0 0 0 3.06 0m-1.53 0"/><text x=".484" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -20.772)">C</text></g></svg>
</figure>

## b)

La retta $s$, parallela a $r$ e a distanza $t$ da $H$, ha equazione
$$y=\frac{3}{2}-t,\qquad 0<t\le\frac{3}{2}.$$

**Corda $PQ$ sulla circonferenza.** Sostituendo $y=\frac{3}{2}-t$ in $x^{2}+y^{2}-y-\frac{3}{4}=0$:
$$x^{2}+\left(\frac{3}{2}-t\right)^{2}-\left(\frac{3}{2}-t\right)-\frac{3}{4}=0
\ \Rightarrow\ x^{2}-2t+t^{2}=0,$$
da cui $x^{2}=2t-t^{2}$ e $x=\pm\sqrt{2t-t^{2}}$. Perciò
$$P=\left(-\sqrt{2t-t^{2}};\ \frac{3}{2}-t\right),\quad Q=\left(\sqrt{2t-t^{2}};\ \frac{3}{2}-t\right),\qquad \overline{PQ}=2\sqrt{2t-t^{2}}.$$

**Corda $RS$ sul triangolo.** Il lato $AH$ ha coefficiente angolare $m=\tan 60^\circ=\sqrt{3}$, quindi equazione
$$y=\sqrt{3}\,x+\frac{3}{2}.$$
Intersecando con $s$: $\sqrt{3}\,x+\frac{3}{2}=\frac{3}{2}-t$, cioè $x=-\frac{t}{\sqrt{3}}$. Per simmetria si trova l'intersezione con il lato $BH$:
$$R=\left(-\frac{t}{\sqrt{3}};\ \frac{3}{2}-t\right),\quad S=\left(\frac{t}{\sqrt{3}};\ \frac{3}{2}-t\right),\qquad \overline{RS}=\frac{2t}{\sqrt{3}}.$$

**Condizione $\overline{PQ}=k\,\overline{RS}$.**
$$2\sqrt{2t-t^{2}}=k\cdot\frac{2t}{\sqrt{3}}\ \Rightarrow\ \sqrt{3}\,\sqrt{2t-t^{2}}=k\,t\ \Rightarrow\ \sqrt{6t-3t^{2}}=k\,t,$$
con $k>0$ e $0<t\le\frac{3}{2}$. Osserviamo che
$$\lim_{t\to 0^{+}}\frac{\sqrt{6t-3t^{2}}}{t}=\lim_{t\to 0^{+}}\frac{\sqrt{6t}}{t}=+\infty.$$
Elevando al quadrato si ottiene l'equazione risolvente in $t$:
$$6t-3t^{2}=k^{2}t^{2}\qquad\Longrightarrow\qquad (3+k^{2})\,t^{2}-6t=0.$$

## c)

Ponendo $t=X$ e $k^{2}=Y$, l'equazione $6t-3t^{2}=k^{2}t^{2}$ diventa
$$6X-3X^{2}=YX^{2},$$
che si spezza in $X=0$ (non accettabile) e, dividendo per $X$,
$$Y=\frac{6-3X}{X}=\frac{6}{X}-3.$$
È una funzione omografica: gli asintoti hanno equazione $X=0$ (verticale) e $Y=-3$ (orizzontale), il centro di simmetria è $(0;-3)$ e la curva passa per $(2;0)$. Sul ramo $X>0$ la funzione è decrescente, con $Y\to+\infty$ per $X\to 0^{+}$ e $Y\to-3^{+}$ per $X\to+\infty$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="362.229" height="388.418" viewBox="-72 -72 271.672 291.313"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 45.298 80.136)"><path fill="none" d="M-117.368 0h234.336"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M115.088 2.4c.38-1.44 1.226-2.12 2.08-2.4-.854-.28-1.7-.96-2.08-2.4"/><text x="45.298" y="80.136" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 75.603 76.72)">X</text><path fill="none" d="M0-138.707v277.014"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 136.427c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="45.298" y="80.136" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -49.311 222.376)">Y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-113.1-64.019h226.2"/><g stroke="none" font-size="10"><text x="45.298" y="80.136" font-family="cmmi10" transform="matrix(1 0 0 -1 71.335 13.118)">Y</text><text x="56.103" y="80.136" font-family="cmr10" transform="matrix(1 0 0 -1 71.335 13.118)">=</text><text x="66.659" y="80.136" font-family="cmsy10" transform="matrix(1 0 0 -1 71.335 13.118)">¡</text><text x="74.436" y="80.136" font-family="cmr10" transform="matrix(1 0 0 -1 71.335 13.118)">3</text></g></g><clipPath id="pgfc0a71cfb5401118d9fd4c5f786409c3fcp1"><path d="M-113.1-134.44v268.88h226.2v-268.88Zm226.2 268.88"/></clipPath><g clip-path="url(#pgfc0a71cfb5401118d9fd4c5f786409c3fcp1)"><path fill="none" stroke="#00f" stroke-width=".8" d="M20.273 70.755 21.29 64.3l1.02-5.851 1.018-5.352 1.019-4.9 1.019-4.507 1.019-4.156 1.018-3.852 1.02-3.575 1.018-3.324 1.019-3.105 1.019-2.904 1.019-2.721 1.019-2.554 1.018-2.405 1.02-2.267 1.018-2.142 1.019-2.023 1.019-1.92 1.019-1.819 1.019-1.726 1.018-1.646 1.02-1.564 1.018-1.491 1.019-1.426 1.019-1.361 1.019-1.3 1.019-1.246L48.8-8.03l1.02-1.144 1.018-1.1 1.019-1.056 1.019-1.015 1.019-.977 1.018-.94 1.02-.907 1.018-.873 1.019-.844 1.019-.814 1.019-.786 1.019-.76 1.018-.736 1.02-.71 1.018-.69 1.019-.667 1.019-.646 1.019-.627 1.019-.608 1.018-.59 1.02-.575 1.018-.556 1.019-.541 1.019-.526 1.019-.512 1.018-.497 1.02-.485 1.018-.472 1.02-.46 1.018-.447 1.019-.437 1.019-.425 1.018-.415 1.02-.405 1.018-.395 1.019-.385 1.019-.377 1.019-.368 1.019-.36 1.018-.35 1.02-.344 1.018-.335 1.019-.328 1.019-.322 1.019-.314 1.019-.307 1.018-.3 1.02-.295 1.018-.289 1.019-.283 1.019-.276 1.019-.272 1.018-.266 1.02-.261 1.018-.255 1.02-.252 1.018-.246 1.019-.24 1.019-.238 1.018-.232 1.02-.229M-110.966-88.641l.827-.185.828-.188.827-.19.827-.194.827-.196.827-.2.827-.203.827-.205.827-.21.827-.213.827-.215.827-.22.827-.222.827-.228.827-.23.827-.235.827-.238.828-.243.827-.247.827-.252.827-.255.827-.26.827-.265.827-.27.827-.275.827-.28.827-.284.827-.29.827-.297.827-.301.827-.307.827-.314.827-.32.828-.326.827-.333.827-.339.827-.346.827-.354.827-.36.827-.37.827-.376.827-.385.827-.392.827-.403.827-.41.827-.42.827-.43.827-.44.828-.45.827-.46.827-.473.827-.483.827-.496.827-.507.827-.521.827-.534.827-.548.827-.561.827-.578.827-.592.827-.609.827-.626.827-.642.827-.662.828-.68.827-.702.827-.72.827-.744.827-.767.827-.79.827-.814.827-.841.827-.868.827-.9.827-.927.827-.959.827-.995.827-1.027.827-1.067.828-1.103.827-1.148.827-1.19.827-1.24.827-1.287.827-1.338.827-1.396.827-1.453.827-1.517.827-1.586"/><path stroke="none" d="M44.554 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0M42.68 0"/><g stroke="none" font-size="10"><text x="45.298" y="80.136" font-family="cmr10" transform="matrix(1 0 0 -1 .915 86.17)">(2</text><text x="54.186" y="80.136" font-family="cmmi10" transform="matrix(1 0 0 -1 .915 86.17)">;</text><text x="58.631" y="80.136" font-family="cmr10" transform="matrix(1 0 0 -1 .915 86.17)">0)</text></g></g></g></svg>
</figure>

## d)

Le limitazioni geometriche sono $0<t\le\frac{3}{2}$ e $k>0$; poiché $t=X$, cerchiamo i valori di $Y=k^{2}$ corrispondenti a $0<X\le\frac{3}{2}$.

Sul ramo $X>0$ la funzione $Y=\frac{6}{X}-3$ è decrescente: per $X=\frac{3}{2}$ vale
$$Y=\frac{6-3\cdot\frac{3}{2}}{\frac{3}{2}}=\frac{\frac{3}{2}}{\frac{3}{2}}=1\ \Rightarrow\ k=1,$$
mentre per $X\to 0^{+}$ si ha $Y\to+\infty$. Dunque, al variare di $X$ in $\left(0;\frac{3}{2}\right]$, $Y$ assume tutti e soli i valori dell'intervallo $[1;+\infty)$, cioè $k^{2}\ge 1$, ovvero $k\ge 1$.

In conclusione si hanno valori di $t$ che risolvono la questione del punto b) se e solo se
$$k\ge 1,$$
e per ciascun tale $k$ esiste **una sola** soluzione $t\in\left(0;\frac{3}{2}\right]$ (in particolare $t=\frac{3}{2}$ per $k=1$).

*Fonte:* [📄 PDF p.57](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
