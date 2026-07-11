

**Quesito:** [[Quesiti/ques_2003_suppletiva_ordinamento_2003_questionario_113_2|2003 Suppletiva Ordinamento — Questionario — Quesito 2]] · **Prova:** [[Prove/2003_suppletiva_ordinamento_2003_questionario_113|2003 Suppletiva Ordinamento — Questionario]]

Si chiede di spiegare che cosa si intende per *funzione periodica* e di determinare il periodo della funzione

$$ f(x) = \sin x - 2\cos x. $$

## a) Definizione di funzione periodica

Una funzione $f(x)$ si dice **periodica** se esiste un numero reale positivo $T$ tale che

$$ f(x+T) = f(x) \qquad \text{per ogni } x \text{ del dominio di } f. $$

Il più piccolo numero reale positivo $T$ con questa proprietà si chiama **periodo** (o periodo fondamentale) della funzione. Geometricamente ciò significa che il grafico di $f$ si ripete identicamente traslandolo lungo l'asse delle ascisse di un tratto pari a $T$.

## b) Periodo di $f(x) = \sin x - 2\cos x$

Le funzioni $\sin x$ e $\cos x$ sono entrambe periodiche di periodo $2\pi$. La loro combinazione lineare $f(x) = \sin x - 2\cos x$ è quindi periodica, e il suo periodo divide $2\pi$.

Per individuarlo con precisione conviene riscrivere $f$ come una sola sinusoide. Cerchiamo $R>0$ e $\varphi$ tali che

$$ \sin x - 2\cos x = R\,\sin(x+\varphi) = R\cos\varphi\,\sin x + R\sin\varphi\,\cos x. $$

Uguagliando i coefficienti di $\sin x$ e $\cos x$ si ottiene il sistema

$$ \begin{cases} R\cos\varphi = 1 \\ R\sin\varphi = -2 \end{cases} $$

da cui, sommando i quadrati,

$$ R^2 = 1^2 + (-2)^2 = 5 \quad\Rightarrow\quad R = \sqrt{5}. $$

Dunque

$$ f(x) = \sqrt{5}\,\sin(x+\varphi), \qquad \text{con } \varphi = \arctan(-2). $$

La funzione è quindi una sinusoide di ampiezza $\sqrt{5}$, ottenuta dalla $\sin x$ mediante una traslazione orizzontale (lo sfasamento $\varphi$) e una dilatazione verticale (il fattore $\sqrt{5}$): nessuna di queste trasformazioni altera il periodo. Poiché $\sin(x+\varphi)$ ha periodo $2\pi$, si conclude che il periodo di $f$ è

$$ \boxed{\,T = 2\pi\,}. $$

Il grafico che segue conferma il risultato: la curva si ripete identicamente ogni $2\pi$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="432.833" height="187.713" viewBox="-72 -72 324.624 140.785"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 4.58h311.443"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M237.493 2.18c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.689" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(303.995 2.153)">x</text><path fill="none" d="M-60.689 68.315v-127.07"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.089-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.689" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -69.212)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.689 50.105 2.404-2.654 2.403-3.13 2.404-3.572 2.403-3.976 2.404-4.335 2.403-4.645 2.404-4.903 2.403-5.106 2.404-5.255 2.403-5.342 2.403-5.372 2.404-5.34 2.403-5.251 2.404-5.103 2.403-4.895 2.404-4.635 2.403-4.324 2.404-3.966 2.403-3.56 2.404-3.117 2.403-2.638 2.404-2.13 2.403-1.598 2.404-1.05 2.403-.486 2.404.079 2.403.644 2.404 1.203 2.403 1.748 2.404 2.272 2.403 2.774 2.404 3.242 2.403 3.677 2.404 4.069 2.403 4.415 2.404 4.714 2.403 4.957 2.404 5.15 2.403 5.281 2.404 5.356 2.403 5.37 2.404 5.324 2.403 5.219 2.404 5.055 2.403 4.836 2.404 4.564 2.403 4.24 2.404 3.867 2.403 3.454 2.404 3.002 2.403 2.514 2.403 2 2.404 1.465 2.403.911 2.404.348 2.403-.218 2.404-.784 2.403-1.338 2.404-1.88 2.403-2.4 2.404-2.892 2.403-3.354 2.404-3.778 2.403-4.159 2.404-4.494 2.403-4.78 2.404-5.01 2.403-5.187 2.404-5.305 2.403-5.365 2.404-5.364 2.403-5.303 2.404-5.184 2.403-5.008 2.404-4.773 2.403-4.488 2.404-4.152 2.403-3.77 2.404-3.345 2.403-2.884 2.404-2.39 2.403-1.87 2.404-1.327 2.403-.773 2.404-.207 2.403.358 2.404.923 2.403 1.474 2.404 2.012 2.403 2.523 2.404 3.011 2.403 3.462 2.403 3.876 2.404 4.246 2.403 4.569 2.404 4.842 2.403 5.059 2.404 5.223 2.403 5.325 2.404 5.369 2.403 5.355 2.404 5.28 2.403 5.146 2.404 4.953 2.403 4.708 2.404 4.409 2.403 4.061 2.404 3.668 2.403 3.235 2.404 2.763 2.403 2.264 2.404 1.738 2.403 1.192 2.404.634 2.403.066 2.404-.498 2.403-1.06 2.404-1.609 2.403-2.139"/><path fill="none" stroke-dasharray="3.0,3.0" d="M82.327 59.21V-50.05"/><g stroke="none" font-size="10"><text x="-60.689" y="4.58" font-family="cmr10" transform="translate(137.486 12.254)">2</text><text x="-55.689" y="4.58" font-family="cmmi10" transform="translate(137.486 12.254)">¼</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M225.342 59.21V-50.05"/><g stroke="none" font-size="10"><text x="-60.689" y="4.58" font-family="cmr10" transform="translate(289.564 12.254)">4</text><text x="-55.689" y="4.58" font-family="cmmi10" transform="translate(289.564 12.254)">¼</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-60.689" y="4.58" font-family="cmmi10" transform="translate(200.047 -52.262)">y</text><text x="-52.65" y="4.58" font-family="cmr10" transform="translate(200.047 -52.262)">=</text><text x="-42.094" y="4.58" font-family="cmr10" transform="translate(200.047 -52.262)">sin</text><text x="-28.15" y="4.58" font-family="cmmi10" transform="translate(200.047 -52.262)">x</text><text x="-20.212" y="4.58" font-family="cmsy10" transform="translate(200.047 -52.262)">¡</text><text x="-10.212" y="4.58" font-family="cmr10" transform="translate(200.047 -52.262)">2</text><text x="-3.546" y="4.58" font-family="cmr10" transform="translate(200.047 -52.262)">cos</text><text x="11.51" y="4.58" font-family="cmmi10" transform="translate(200.047 -52.262)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.113](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
