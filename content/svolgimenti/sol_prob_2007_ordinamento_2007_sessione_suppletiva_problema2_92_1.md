

**Problema:** [[Problemi/prob_2007_ordinamento_2007_sessione_suppletiva_problema2_92_1|2007 Ordinamento Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2007_ordinamento_2007_sessione_suppletiva_problema2_92|2007 Ordinamento Suppletiva — Problema 2]]

Si consideri la funzione
$$f(x) = e^{3x}+2e^{2x}-3e^{x}.$$

## a)

Il dominio è $\mathbb{R}$. Poiché $f(-x)=e^{-3x}+2e^{-2x}-3e^{-x}$ non coincide né con $f(x)$ né con $-f(x)$, la funzione non è né pari né dispari.

**Intersezioni con gli assi.** Per $x=0$ si ha $f(0)=1+2-3=0$. Per $y=0$:
$$e^{x}\left(e^{2x}+2e^{x}-3\right)=0 \Rightarrow e^{x}\left(e^{x}+3\right)\left(e^{x}-1\right)=0,$$
e poiché $e^{x}>0$ ed $e^{x}+3>0$, resta $e^{x}-1=0$, cioè $x=0$. La curva passa quindi per l'origine.

**Segno.** Essendo $e^{x}>0$ ed $e^{x}+3>0$, si ha $f(x)>0$ se e solo se $e^{x}-1>0$, cioè $x>0$.

**Limiti.**
$$\lim_{x\to -\infty} f(x)=0, \qquad \lim_{x\to +\infty} f(x)=+\infty.$$
La retta $y=0$ è asintoto orizzontale per $x\to -\infty$. Per $x\to +\infty$ non vi è asintoto obliquo, poiché la funzione è un infinito di ordine superiore al primo.

**Derivata prima.**
$$f'(x)=3e^{3x}+4e^{2x}-3e^{x}=e^{x}\left(3e^{2x}+4e^{x}-3\right).$$
Posto $t=e^{x}>0$, l'equazione $3t^{2}+4t-3=0$ ha come unica radice positiva
$$t_0=\frac{-2+\sqrt{13}}{3}\approx 0{,}54, \qquad x_0=\ln\frac{-2+\sqrt{13}}{3}\approx -0{,}63.$$
Poiché $e^{x}>0$, il segno di $f'$ coincide con quello di $3e^{2x}+4e^{x}-3$: la funzione è decrescente per $x<x_0$ e crescente per $x>x_0$. In $x_0$ si ha un **minimo** relativo (e assoluto) con
$$f(x_0)\approx -0{,}88.$$

**Derivata seconda.**
$$f''(x)=9e^{3x}+8e^{2x}-3e^{x}=e^{x}\left(9e^{2x}+8e^{x}-3\right).$$
L'equazione $9u^{2}+8u-3=0$ (con $u=e^{x}>0$) ha radice positiva
$$u_0=\frac{-4+\sqrt{43}}{9}\approx 0{,}28, \qquad x_1=\ln u_0\approx -1{,}26.$$
Il grafico volge la concavità verso l'alto per $x>x_1$ e verso il basso per $x<x_1$; in $x_1$ vi è un **flesso** con ordinata $f(x_1)\approx -0{,}67$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="195.762" height="304.054" viewBox="-72 -72 146.822 228.041"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-69.481 107.77H61.57"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M59.69 105.37c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.383 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M26.12 155.57V-47.182"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M23.72-45.303c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -160.83)">y</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-63.506 110.16v-4.78"/><g fill="gray" stroke="none" font-size="8"><text x="26.12" y="107.77" font-family="cmsy8" transform="translate(-95.057 8.298)">¡</text><text x="32.731" y="107.77" font-family="cmr8" transform="translate(-95.057 8.298)">3</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-33.63 110.16v-4.78"/><g fill="gray" stroke="none" font-size="8"><text x="26.12" y="107.77" font-family="cmsy8" transform="translate(-65.182 8.298)">¡</text><text x="32.731" y="107.77" font-family="cmr8" transform="translate(-65.182 8.298)">2</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-3.755 110.16v-4.78"/><g fill="gray" stroke="none" font-size="8"><text x="26.12" y="107.77" font-family="cmsy8" transform="translate(-35.306 8.298)">¡</text><text x="32.731" y="107.77" font-family="cmr8" transform="translate(-35.306 8.298)">1</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M55.995 110.16v-4.78"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(27.75 8.298)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M23.73 137.645h4.78"/><g fill="gray" stroke="none" font-size="8"><text x="26.12" y="107.77" font-family="cmsy8" transform="translate(-14.004 32.037)">¡</text><text x="32.731" y="107.77" font-family="cmr8" transform="translate(-14.004 32.037)">1</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M23.73 77.894h4.78"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.393 -27.298)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M23.73 48.019h4.78"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.393 -57.173)">2</text></g><g fill="gray" stroke="gray"><path fill="none" d="M23.73 18.143h4.78"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.393 -87.049)">3</text></g><g fill="gray" stroke="gray"><path fill="none" d="M23.73-11.732h4.78"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.393 -116.924)">4</text></g><g fill="gray" stroke="gray"><path fill="none" d="M23.73-41.608h4.78"/><text x="26.12" y="107.77" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.393 -146.8)">5</text></g><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-69.481 107.77H61.97"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-63.506 112.073 1.191.176 1.192.175 1.191.182 1.192.19 1.192.187 1.191.205 1.192.214 1.192.219 1.191.217 1.192.234 1.192.249 1.191.246 1.192.262 1.191.267 1.192.275 1.192.287 1.191.295 1.192.308 1.192.324 1.191.322 1.192.338 1.191.35 1.192.361 1.192.363 1.191.383 1.192.394 1.192.405 1.191.418 1.192.43 1.191.433 1.192.452 1.192.459 1.191.469 1.192.483 1.192.496 1.191.498 1.192.515 1.191.518 1.192.523 1.192.537 1.191.54 1.192.548 1.192.544 1.191.55 1.192.55 1.191.544 1.192.54 1.192.532 1.191.524 1.192.501 1.192.487 1.191.455 1.192.44 1.191.38 1.192.354 1.192.307 1.191.242 1.192.174 1.192.09 1.191.009 1.192-.11 1.191-.219 1.192-.359 1.192-.513 1.191-.681 1.192-.897 1.192-1.113 1.191-1.37 1.192-1.65 1.192-1.99 1.191-2.342 1.192-2.756 1.191-3.22 1.192-3.737 1.192-4.313 1.191-4.964 1.192-5.691 1.191-6.51 1.192-7.418 1.192-8.445 1.191-9.588 1.192-10.868 1.192-12.297 1.191-13.901 1.192-15.69L38.974-4.29l1.191-19.925 1.192-22.429 1.191-25.226"/><path stroke="none" d="M27.8 107.77a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="26.12" y="107.77" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 -3.533)">O</text><g fill="#008c00" stroke="#008c00"><path stroke="none" d="M8.978 134.06a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="26.12" y="107.77" fill="#008c00" stroke="none" font-family="cmr8" font-size="8" transform="translate(-15.289 35.189)">min</text></g><g fill="#c60" stroke="#c60"><path stroke="none" d="M-9.843 127.786a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="26.12" y="107.77" fill="#c60" stroke="none" font-family="cmr8" font-size="8" transform="translate(-60.632 16.484)">°esso</text></g></g></svg>
</figure>

## b)

Le coordinate di $A$, intersezione tra $C$ e la curva $C'$ di equazione $y=e^{x}$, si ottengono dal sistema
$$\begin{cases} y=e^{x} \\ y=e^{3x}+2e^{2x}-3e^{x} \end{cases}$$
che conduce a $e^{3x}+2e^{2x}-3e^{x}=e^{x}$, ossia $e^{2x}+2e^{x}-4=0$. Posto $t=e^{x}>0$, da $t^{2}+2t-4=0$ si ottiene la sola radice positiva $t=-1+\sqrt{5}$, quindi
$$x_A=\ln(\sqrt{5}-1)\approx 0{,}21, \qquad y_A=\sqrt{5}-1\approx 1{,}24.$$
Il punto richiesto è
$$A=\left(\ln(\sqrt{5}-1),\; \sqrt{5}-1\right)\approx (0{,}21;\ 1{,}24).$$

## c)

**Tangente a $C$ nell'origine.** Il coefficiente angolare è
$$m=f'(0)=3+4-3=4,$$
dunque la tangente in $O$ ha equazione $y=4x$.

**Tangente a $C'$ nel punto $A$.** La curva $C'$ ha equazione $y=e^{x}$, la cui derivata è ancora $e^{x}$; pertanto
$$m=e^{x_A}=\sqrt{5}-1.$$
La tangente in $A$ ha equazione
$$y-(\sqrt{5}-1)=(\sqrt{5}-1)\left(x-\ln(\sqrt{5}-1)\right).$$

## d)

Nell'intervallo $[0,\ln 3]$ la funzione è positiva, quindi l'area della regione delimitata dalla curva $C$, dall'asse $x$ e dalla retta $x=\ln 3$ è
$$\text{Area}=\int_0^{\ln 3}\left(e^{3x}+2e^{2x}-3e^{x}\right)\,dx=\left[\frac{e^{3x}}{3}+e^{2x}-3e^{x}\right]_0^{\ln 3}.$$
Ricordando che $e^{\ln 3}=3$, $e^{2\ln 3}=9$ ed $e^{3\ln 3}=27$, si ottiene
$$\text{Area}=\left(\frac{27}{3}+9-9\right)-\left(\frac{1}{3}+1-3\right)=9+\frac{5}{3}=\frac{32}{3}\approx 10{,}67.$$

*Fonte:* [📄 PDF p.92](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
