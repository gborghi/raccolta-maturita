

**Problema:** [[Problemi/prob_2007_sessione_ordinaria_2007_prova_168_1|2007 Ordinaria PNI — Prova — Problema 1]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_168|2007 Ordinaria PNI — Prova]]

Sia $a > 0$ e sia $g$ la funzione definita per ogni $x \in \mathbb{R}$ da

$$g(x) = \frac{a^x + a^{-x}}{2}$$

(coseno iperbolico generalizzato in base $a$).

## a)

Studiamo la monotonia di $g$ per $a \neq 1$. Derivando,

$$g'(x) = \frac{a^x \ln a - a^{-x}\ln a}{2} = \frac{\ln a\,\bigl(a^x - a^{-x}\bigr)}{2}.$$

Osserviamo che $a^x - a^{-x} > 0 \Leftrightarrow a^x > a^{-x} \Leftrightarrow x\ln a > -x\ln a \Leftrightarrow 2x\ln a > 0$. Quindi il fattore $\ln a\,(a^x - a^{-x})$ ha lo stesso segno di $x\,(\ln a)^2$, cioè lo stesso segno di $x$ (essendo $(\ln a)^2>0$ per $a\neq 1$).

Pertanto, in entrambi i casi $a>1$ e $0<a<1$:

$$g'(x) < 0 \ \text{ per } x<0, \qquad g'(x) = 0 \ \text{ per } x=0, \qquad g'(x) > 0 \ \text{ per } x>0.$$

Dunque $g$ è strettamente decrescente su $(-\infty,0)$ e strettamente crescente su $(0,+\infty)$, con minimo assoluto in $x=0$, dove $g(0)=1$. (Per $a=1$ si avrebbe $g(x)=1$ costante.)

## b)

Poniamo $a=e$, così

$$f(x) = \frac{e^x + e^{-x}}{2} = \cosh x.$$

Studio di $f$:

- Dominio $\mathbb{R}$, codominio $[1,+\infty)$.
- $f(-x)=\cosh(-x)=\cosh x=f(x)$: funzione **pari**, grafico simmetrico rispetto all'asse $y$.
- $f'(x)=\dfrac{e^x-e^{-x}}{2}=\sinh x$: decrescente per $x<0$, crescente per $x>0$; minimo assoluto $f(0)=1$.
- $f''(x)=\cosh x>0$: concavità sempre rivolta verso l'alto, nessun flesso.
- $\lim_{x\to\pm\infty} f(x)=+\infty$.

Il grafico è la **catenaria** con vertice in $(0,1)$.

Ristretta al ramo destro $x\geq 0$, $f$ è invertibile; risolvendo $y=\dfrac{e^x+e^{-x}}{2}$ (posto $u=e^x>0$ si ottiene $u^2-2yu+1=0$, da cui $u=y+\sqrt{y^2-1}$) si trova

$$f^{-1}(x) = \ln\!\left(x + \sqrt{x^2 - 1}\right), \qquad x\geq 1,$$

a valori in $[0,+\infty)$. Il suo grafico si ottiene ribaltando il ramo destro di $f$ rispetto alla bisettrice $y=x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="303.6" height="196.059" viewBox="-72 -72 227.7 147.044"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 57.502H126.7"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M124.82 55.102c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="13.288" y="57.502" stroke="none" font-family="cmmi10" font-size="10" transform="translate(117.344 2.153)">x</text><path fill="none" d="M13.288 74.574V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10.888-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="13.288" y="57.502" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -122.134)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-3.784 74.574 124.254-53.463"/><g stroke="none" font-size="10"><text x="13.288" y="57.502" font-family="cmmi10" transform="translate(114.498 -109.785)">y</text><text x="21.328" y="57.502" font-family="cmr10" transform="translate(114.498 -109.785)">=</text><text x="31.883" y="57.502" font-family="cmmi10" transform="translate(114.498 -109.785)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-43.617-49.54 1.929 6.757 1.929 6.294 1.929 5.861 1.929 5.457 1.928 5.077 1.93 4.72 1.928 4.384 1.93 4.07 1.928 3.773 1.93 3.495 1.928 3.231 1.93 2.983 1.928 2.75 1.929 2.528 1.929 2.319 1.929 2.117 1.929 1.93 1.929 1.748 1.929 1.576 1.929 1.41 1.929 1.253 1.929 1.096 1.929.95 1.928.808 1.93.666 1.928.53 1.93.395 1.928.262 1.93.13h1.928l1.93-.13 1.928-.262 1.929-.395 1.929-.529 1.929-.666 1.929-.806 1.929-.95 1.929-1.098 1.929-1.252 1.929-1.409 1.929-1.577 1.929-1.748 1.929-1.929 1.928-2.118 1.93-2.316 1.928-2.529 1.93-2.749 1.928-2.983 1.93-3.232 1.928-3.494 1.93-3.772 1.928-4.07 1.929-4.383 1.929-4.72 1.929-5.075 1.929-5.457 1.929-5.86 1.929-6.294 1.929-6.752"/><path fill="none" stroke="red" stroke-width=".8" d="m41.741 57.502.018-.964.05-.964.081-.964.115-.965.148-.964.18-.964.214-.964.248-.965.281-.964.315-.964.351-.964.385-.965.42-.964.458-.964.493-.965.53-.964.567-.964.606-.964.645-.965.685-.964.725-.964.766-.964.808-.965.852-.964.897-.964.94-.964.987-.965 1.034-.964 1.083-.964 1.134-.964 1.183-.965 1.236-.964 1.291-.964 1.345-.964 1.403-.965 1.46-.964 1.52-.964 1.584-.964 1.647-.965 1.713-.964 1.78-.964 1.85-.964 1.92-.965 1.995-.964 2.073-.964 2.149-.964 2.232-.965 2.315-.964 2.4-.964 2.492-.965 2.581-.964 2.678-.964 2.776-.964 2.877-.965 2.98-.964 3.09-.964 3.2-.964 3.315-.965 3.434-.964"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="13.288" y="57.502" font-family="cmmi10" transform="translate(-76.876 -99.93)">f</text><text x="22.038" y="57.502" font-family="cmr10" transform="translate(-76.876 -99.93)">=</text><text x="32.594" y="57.502" font-family="cmr10" transform="translate(-76.876 -99.93)">cosh</text><text x="53.205" y="57.502" font-family="cmmi10" transform="translate(-76.876 -99.93)">x</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="13.288" y="57.502" font-family="cmmi10" font-size="10" transform="translate(94.076 -36.736)">f</text><text x="19.26" y="53.873" font-family="cmsy7" font-size="7" transform="translate(94.076 -36.736)">¡</text><text x="25.511" y="53.873" font-family="cmr7" font-size="7" transform="translate(94.076 -36.736)">1</text></g></g><path stroke="none" d="M14.788 29.05a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none" font-size="10"><text x="13.288" y="57.502" font-family="cmr10" transform="translate(3.533 -17.42)">(0</text><text x="22.177" y="57.502" font-family="cmmi10" transform="translate(3.533 -17.42)">;</text><text x="26.622" y="57.502" font-family="cmr10" transform="translate(3.533 -17.42)">1)</text></g><path stroke="none" d="M43.241 57.502a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none" font-size="10"><text x="13.288" y="57.502" font-family="cmr10" transform="translate(17.342 11.033)">(1</text><text x="22.177" y="57.502" font-family="cmmi10" transform="translate(17.342 11.033)">;</text><text x="26.622" y="57.502" font-family="cmr10" transform="translate(17.342 11.033)">0)</text></g></g></svg>
</figure>

## c)

Calcoliamo, per $t>0$,

$$\int_0^t \frac{1}{f(x)}\,dx = \int_0^t \frac{2}{e^x + e^{-x}}\,dx = \int_0^t \frac{2e^x}{e^{2x}+1}\,dx.$$

Con la sostituzione $u=e^x$, $du=e^x\,dx$:

$$\int \frac{2}{e^x+e^{-x}}\,dx = 2\int \frac{du}{u^2+1} = 2\arctan(e^x) + C.$$

Quindi

$$\int_0^t \frac{1}{f(x)}\,dx = \Bigl[\,2\arctan(e^x)\,\Bigr]_0^t = 2\arctan(e^t) - 2\arctan 1 = 2\arctan(e^t) - \frac{\pi}{2}.$$

Passando al limite,

$$\lim_{t\to +\infty}\left(2\arctan(e^t) - \frac{\pi}{2}\right) = 2\cdot\frac{\pi}{2} - \frac{\pi}{2} = \frac{\pi}{2}.$$

Geometricamente, l'integrale improprio $\displaystyle\int_0^{+\infty}\frac{dx}{\cosh x}$ è l'area della regione illimitata compresa tra la curva $y=\dfrac{1}{\cosh x}$ e l'asse $x$ per $x\geq 0$: pur estendendosi all'infinito, tale area è finita e vale $\dfrac{\pi}{2}$.

## d)

Dal punto precedente

$$\frac{\pi}{4} = \frac{1}{2}\int_0^{+\infty} \frac{dx}{\cosh x},$$

quindi $\dfrac{\pi}{4}$ si può approssimare per via numerica calcolando (metà di) l'integrale con il metodo dei trapezi:

1. Si sceglie un estremo $T$ grande (poiché $\dfrac{1}{\cosh x}\sim 2e^{-x}\to 0$ molto rapidamente, la coda oltre $T$ è trascurabile: ad esempio $T=20$).
2. Si suddivide $[0,T]$ in $n$ sottointervalli di ampiezza $h=T/n$ e si valuta $\varphi(x_k)=\dfrac{2}{e^{x_k}+e^{-x_k}}$ nei nodi $x_k=kh$.
3. Si applica la formula dei trapezi:

$$\int_0^{T}\frac{dx}{\cosh x} \approx h\left[\frac{\varphi(x_0)}{2} + \varphi(x_1) + \cdots + \varphi(x_{n-1}) + \frac{\varphi(x_n)}{2}\right].$$

4. La metà del valore ottenuto approssima $\dfrac{\pi}{4}$.

Aumentando $n$ (e/o $T$) l'approssimazione migliora; già con $T=15$ e $n=1000$ si ottiene un'ottima precisione.

---

*Fonte:* [📄 PDF p.168](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
