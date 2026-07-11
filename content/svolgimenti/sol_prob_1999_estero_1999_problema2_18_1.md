

**Problema:** [[Problemi/prob_1999_estero_1999_problema2_18_1|1999 Estero — Problema 2 — Problema 1]] · **Prova:** [[Prove/1999_estero_1999_problema2_18|1999 Estero — Problema 2]]

Liceo Scientifico 1999 — Estero, Problema 2.

## a) Studio della funzione

Si studia la funzione
$$
y=f(x)=\frac{1}{\cos x}-\cos x=\frac{1-\cos^2 x}{\cos x}=\frac{\sin^2 x}{\cos x},\qquad -\pi\le x\le\pi .
$$

**Dominio.** Occorre $\cos x\neq 0$, cioè $x\neq\pm\dfrac{\pi}{2}$. Il dominio è
$$
-\pi\le x<-\tfrac{\pi}{2},\quad -\tfrac{\pi}{2}<x<\tfrac{\pi}{2},\quad \tfrac{\pi}{2}<x\le\pi .
$$

**Simmetrie.** Poiché $f(-x)=\dfrac{\sin^2(-x)}{\cos(-x)}=\dfrac{\sin^2 x}{\cos x}=f(x)$, la funzione è **pari**: il grafico è simmetrico rispetto all'asse $y$.

**Intersezioni con gli assi.** Per $x=0$ si ha $y=0$. Per $y=0$ deve essere $\sin^2 x=0$, quindi $x=-\pi,\ x=0,\ x=\pi$.

**Segno.** Essendo $\sin^2 x\ge 0$, il segno di $f$ coincide con quello di $\cos x$:
$$
f(x)\ge 0 \iff \cos x>0 \iff -\tfrac{\pi}{2}<x<\tfrac{\pi}{2}.
$$

**Limiti agli estremi del dominio.** Poiché $\sin^2 x\to 1$ per $x\to\pm\dfrac{\pi}{2}$, il segno dipende da come $\cos x\to 0$:
$$
\lim_{x\to -\frac{\pi}{2}^{-}} f(x)=-\infty,\qquad
\lim_{x\to -\frac{\pi}{2}^{+}} f(x)=+\infty,
$$
$$
\lim_{x\to \frac{\pi}{2}^{-}} f(x)=+\infty,\qquad
\lim_{x\to \frac{\pi}{2}^{+}} f(x)=-\infty .
$$
Vi sono dunque due **asintoti verticali**: $x=-\dfrac{\pi}{2}$ e $x=\dfrac{\pi}{2}$.

**Derivata prima.**
$$
f'(x)=\frac{\sin x}{\cos^2 x}+\sin x=\sin x\left(\frac{1}{\cos^2 x}+1\right)=\frac{\sin x\,(1+\cos^2 x)}{\cos^2 x}.
$$
Poiché $\dfrac{1+\cos^2 x}{\cos^2 x}>0$, il segno di $f'$ è quello di $\sin x$:
$$
f'(x)\ge 0 \iff \sin x\ge 0 \iff 0\le x<\tfrac{\pi}{2}\ \text{ oppure }\ \tfrac{\pi}{2}<x\le\pi .
$$
La funzione è quindi **crescente** in $[0,\frac{\pi}{2})$ e in $(\frac{\pi}{2},\pi]$, **decrescente** nella parte rimanente del dominio. Si ha un **minimo relativo** in $x=0$ con $f(0)=0$ e un **massimo relativo** in ciascuno degli estremi $x=-\pi$ e $x=\pi$, con $f(\pm\pi)=0$.

**Derivata seconda.** Derivando $f'(x)=\dfrac{\sin x}{\cos^2 x}+\sin x$ si ottiene, dopo semplificazione,
$$
f''(x)=\frac{\cos x\,\bigl(\cos^4 x-\cos^2 x+2\bigr)}{\cos^4 x}.
$$
Posto $\cos^2 x=t$, il fattore $t^2-t+2$ ha discriminante $\Delta=1-8<0$, dunque $\cos^4 x-\cos^2 x+2>0$ sempre. Quindi il segno di $f''$ è quello di $\dfrac{\cos x}{\cos^4 x}$, cioè quello di $\cos x$:
$$
f''(x)\ge 0 \iff \cos x\ge 0 \iff -\tfrac{\pi}{2}<x<\tfrac{\pi}{2}.
$$
In $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ la concavità è rivolta verso l'alto, nel resto del dominio verso il basso. Poiché i punti in cui $\cos x=0$ sono esclusi dal dominio, **non ci sono flessi**.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="325.85" height="325.876" viewBox="-72 -72 244.388 244.407"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 57.274h231.206"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M157.256 54.874c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="43.733" y="57.274" stroke="none" font-family="cmmi10" font-size="10" transform="translate(119.336 2.153)">x</text><path fill="none" d="M43.733 171.937V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M41.333-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="43.733" y="57.274" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -121.905)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-5.43 171.937V-57.39M92.896 171.937V-57.39"/><g stroke="none"><text x="43.733" y="57.274" font-family="cmsy7" font-size="7" transform="translate(-45.63 10.137)">¡</text><text x="51.183" y="54.586" font-family="cmmi5" font-size="5" transform="translate(-45.63 10.137)">¼</text><path d="M5.553 65.461h4.335v.4H5.553z"/><text x="51.649" y="59.683" font-family="cmr5" font-size="5" transform="translate(-45.63 10.137)">2</text></g><g stroke="none"><text x="44.933" y="54.586" font-family="cmmi5" font-size="5" transform="translate(38.895 10.137)">¼</text><path d="M83.828 65.461h4.335v.4h-4.335z"/><text x="45.399" y="59.683" font-family="cmr5" font-size="5" transform="translate(38.895 10.137)">2</text></g><g stroke="none" font-size="7"><text x="43.733" y="57.274" font-family="cmsy7" transform="translate(-103.915 9.63)">¡</text><text x="49.983" y="57.274" font-family="cmmi7" transform="translate(-103.915 9.63)">¼</text></g><text x="43.733" y="57.274" stroke="none" font-family="cmmi7" font-size="7" transform="translate(95.863 8.311)">¼</text><path fill="none" stroke-width=".8" d="M-.084-43.454s1.392 28.746 3.13 39.515c1.736 10.77 5.915 30.252 9.389 38.104s11.307 15.28 15.65 18.487c4.342 3.206 11.306 4.622 15.648 4.622s11.307-1.416 15.65-4.622c4.342-3.206 12.174-10.635 15.648-18.487S82.684 6.83 84.421-3.94c1.737-10.77 3.13-39.515 3.13-39.515M-54.593 57.274s2.948.061 4.432.353c1.483.29 4.088.7 6.26 1.746 2.17 1.045 6.783 3.358 9.389 5.786s7.218 7.944 9.39 11.713c2.17 3.77 4.522 7.957 6.259 15.453 1.737 7.497 5.174 30.153 6.26 38.58s1.564 22.157 1.564 22.157M98.505 153.062s.48-13.73 1.565-22.157c1.086-8.427 4.523-31.083 6.26-38.58s4.088-11.683 6.26-15.453c2.17-3.769 6.783-9.285 9.389-11.713s7.218-4.74 9.39-5.786c2.17-1.045 4.775-1.455 6.259-1.746 1.483-.292 4.432-.353 4.432-.353"/></g></svg>
</figure>

## b) Espressione in funzione di $t=\tan\frac{x}{2}$

Partiamo dalla formula di duplicazione $\cos x=\cos^2\dfrac{x}{2}-\sin^2\dfrac{x}{2}$ e dall'identità $1=\cos^2\dfrac{x}{2}+\sin^2\dfrac{x}{2}$. Dividendo numeratore e denominatore per $\cos^2\dfrac{x}{2}$ (lecito se $\cos\dfrac{x}{2}\neq 0$):
$$
\cos x=\frac{\cos^2\frac{x}{2}-\sin^2\frac{x}{2}}{\cos^2\frac{x}{2}+\sin^2\frac{x}{2}}
=\frac{1-\tan^2\frac{x}{2}}{1+\tan^2\frac{x}{2}}=\frac{1-t^2}{1+t^2},
\qquad t=\tan\frac{x}{2}.
$$
La formula vale purché $\cos\dfrac{x}{2}\neq 0$, cioè $x\neq\pi+2k\pi$ (con $k\in\mathbb{Z}$).

Esprimiamo ora $f(x)=\dfrac{1}{\cos x}-\cos x$ in funzione di $t$:
$$
\frac{1}{\cos x}-\cos x=\frac{1+t^2}{1-t^2}-\frac{1-t^2}{1+t^2}
=\frac{(1+t^2)^2-(1-t^2)^2}{(1-t^2)(1+t^2)}
=\frac{4t^2}{1-t^4}.
$$
Le condizioni sono $x\neq\pi+2k\pi$ e, dovendo essere $\cos x\neq 0$, $x\neq\dfrac{\pi}{2}+k\pi$.

## c) Studio della funzione in $t$

Prescindendo dai vincoli su $t$ derivanti da $t=\tan\dfrac{x}{2}$, studiamo
$$
y=f(t)=\frac{4t^2}{1-t^4}.
$$

**Dominio.** $1-t^4\neq 0$, cioè $t\neq\pm 1$: $\ -\infty<t<-1,\ -1<t<1,\ 1<t<+\infty$.

**Simmetrie.** $f(-t)=f(t)$: la funzione è **pari**, grafico simmetrico rispetto all'asse delle ordinate.

**Intersezioni con gli assi.** Per $t=0$, $y=0$; per $y=0$ deve essere $4t^2=0$, cioè $t=0$. Il grafico incontra gli assi solo nell'origine.

**Segno.** $f(t)>0 \iff 1-t^4>0 \iff -1<t<1$ (con $t\neq 0$); $f(t)<0$ per $t<-1$ oppure $t>1$.

**Limiti.**
$$
\lim_{t\to\pm\infty}\frac{4t^2}{1-t^4}=\lim_{t\to\pm\infty}\frac{4t^2}{-t^4}=0^{-},
$$
quindi $y=0$ è **asintoto orizzontale** (non ci sono asintoti obliqui). Inoltre
$$
\lim_{t\to -1^{-}} f(t)=-\infty,\quad \lim_{t\to -1^{+}} f(t)=+\infty,\quad
\lim_{t\to 1^{-}} f(t)=+\infty,\quad \lim_{t\to 1^{+}} f(t)=-\infty,
$$
dunque **asintoti verticali** $t=-1$ e $t=1$.

**Derivata prima.**
$$
f'(t)=\frac{8t(1-t^4)-4t^2(-4t^3)}{(1-t^4)^2}=\frac{8t+8t^5}{(1-t^4)^2}=\frac{8t\,(1+t^4)}{(1-t^4)^2}.
$$
Poiché $\dfrac{8(1+t^4)}{(1-t^4)^2}>0$, il segno di $f'$ è quello di $t$: la funzione è **crescente** per $0<t<1$ e per $t>1$, **decrescente** per $t<-1$ e per $-1<t<0$; **minimo relativo** in $t=0$ con $f(0)=0$.

**Derivata seconda.** Derivando si ottiene
$$
f''(t)=\frac{8\,(1-t^4)(3t^8+12t^4+1)}{(1-t^4)^4}.
$$
Essendo $3t^8+12t^4+1>0$ per ogni $t$, il segno di $f''$ è quello di $1-t^4$:
$$
f''(t)>0 \iff 1-t^4>0 \iff -1<t<1.
$$
La concavità è rivolta verso l'alto per $-1<t<1$ e verso il basso per $t<-1$ o $t>1$. **Non ci sono flessi** (i punti $t=\pm 1$ sono esclusi).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="331.388" height="325.876" viewBox="-72 -72 248.541 244.407"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 57.274h237.464"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M163.514 54.874c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="46.862" y="57.274" stroke="none" font-family="cmmi10" font-size="10" transform="translate(122.465 3.075)">t</text><path fill="none" d="M46.862 171.937V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M44.462-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="46.862" y="57.274" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -121.905)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M19.832 171.937V-57.39M73.892 171.937V-57.39"/><g stroke="none" font-size="7"><text x="46.862" y="57.274" font-family="cmsy7" transform="translate(-40.8 9.808)">¡</text><text x="53.112" y="57.274" font-family="cmr7" transform="translate(-40.8 9.808)">1</text></g><text x="46.862" y="57.274" stroke="none" font-family="cmr7" font-size="7" transform="translate(30.563 9.808)">1</text><path fill="none" stroke-width=".8" d="M23.886-49.452s2.742 49.034 4.055 61.23c1.313 12.197 3.906 21.25 5.406 26.673 1.5 5.424 3.53 9.808 5.406 12.42 1.875 2.61 5.859 6.403 8.109 6.403s6.234-3.792 8.109-6.404 3.906-6.995 5.406-12.419 4.093-14.476 5.406-26.672 4.055-61.23 4.055-61.23M14.967 161.882s.284-2.205-.541-9.967c-.825-7.76-3.53-36.687-5.406-45.97C7.145 96.66 3.161 89.145.911 85.004s-5.109-6.67-8.11-8.909-9.764-5.722-13.514-7.232-9.765-2.778-13.515-3.652-9.765-2.159-13.515-2.646-13.515-.864-13.515-.864M78.757 161.882s-.284-2.205.54-9.967c.826-7.76 3.532-36.687 5.407-45.97 1.875-9.285 5.859-16.799 8.109-20.94s5.109-6.67 8.109-8.909 9.765-5.722 13.515-7.232 9.765-2.778 13.515-3.652 9.765-2.159 13.515-2.646 13.515-.864 13.515-.864"/></g></svg>
</figure>

## d) Condizione sufficiente ma non necessaria per il minimo

Si deve dimostrare che, se $f$ è derivabile almeno due volte in $x=a$ e risulta $f'(a)=0$ e $f''(a)>0$, allora $x=a$ è punto di **minimo relativo**; e che tale condizione è **sufficiente ma non necessaria**.

**Sufficienza.** Se $f'(a)=0$, in $x=a$ la tangente è orizzontale, quindi vi può essere un minimo, un massimo o un flesso a tangente orizzontale. Se inoltre $f''(a)>0$, in $x=a$ la funzione volge la concavità verso l'alto: ciò esclude massimo e flesso e garantisce che $x=a$ sia un punto di minimo relativo.

**Non necessarietà (controesempio).** Consideriamo $f(x)=x^4$. Essendo un polinomio è derivabile infinite volte e
$$
f'(x)=4x^3\ \Rightarrow\ f'(0)=0,\qquad f''(x)=12x^2\ \Rightarrow\ f''(0)=0.
$$
Quindi $f''(0)>0$ **non** è verificata; tuttavia in $x=0$ la funzione presenta un minimo relativo (anzi assoluto), poiché $x^4\ge 0$ per ogni $x$ e $x^4=0$ solo in $x=0$. Ciò prova che la condizione $f'(a)=0,\ f''(a)>0$ non è necessaria per l'esistenza di un minimo.

*Fonte:* [📄 PDF p.18](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
