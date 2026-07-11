

**Problema:** [[Problemi/prob_2009_pni_2009_sessione_suppletiva_problema1_86_1|2009 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_pni_2009_sessione_suppletiva_problema1_86|2009 PNI Suppletiva — Problema 1]]

Si consideri la funzione

$$f(x)=\begin{cases} \ln\sqrt{x^{2}+1}, & \text{se } x<0,\\ 0, & \text{se } x=0,\\ \arctan(\sin x), & \text{se } x>0. \end{cases}$$

## a)

**Continuità in $x=0$.**

Per $x\to 0^{-}$ si ha $f(x)=\ln\sqrt{x^{2}+1}\to\ln 1=0$; per $x\to 0^{+}$ si ha $f(x)=\arctan(\sin x)\to\arctan 0=0$. Inoltre $f(0)=0$. Poiché

$$\lim_{x\to 0^{-}}f(x)=\lim_{x\to 0^{+}}f(x)=f(0)=0,$$

la funzione è **continua** in $x=0$.

**Non derivabilità in $x=0$.**

Per $x<0$ risulta $f(x)=\tfrac{1}{2}\ln(x^{2}+1)$, la cui derivata è

$$f'(x)=\frac{x}{x^{2}+1}\quad\Rightarrow\quad f'(0^{-})=\frac{0}{1}=0.$$

Per $x>0$ risulta $f(x)=\arctan(\sin x)$, la cui derivata è

$$f'(x)=\frac{\cos x}{1+\sin^{2}x}\quad\Rightarrow\quad f'(0^{+})=\frac{1}{1}=1.$$

Poiché $f'(0^{-})\ne f'(0^{+})$, la funzione **non è derivabile** in $x=0$: si tratta di un **punto angoloso**.

## b)

**Studio della funzione.**

*Ramo $x<0$:* $\ f(x)=\dfrac{1}{2}\ln(x^{2}+1)$.

Il dominio è $-\infty<x<0$. Si ha

$$\lim_{x\to-\infty}\tfrac{1}{2}\ln(x^{2}+1)=+\infty,$$

e non vi è asintoto obliquo (la funzione non è un infinito del primo ordine). La derivata prima

$$f'(x)=\frac{x}{x^{2}+1}<0\quad\text{per } x<0$$

mostra che la funzione è **strettamente decrescente** su tutto $-\infty<x<0$. La derivata seconda è

$$f''(x)=\frac{(x^{2}+1)-2x^{2}}{(x^{2}+1)^{2}}=\frac{1-x^{2}}{(x^{2}+1)^{2}},$$

che si annulla per $x=-1$: quindi $f''(x)\ge 0$ (concavità verso l'alto) per $x\le -1$ e $f''(x)<0$ (concavità verso il basso) per $-1<x<0$, con un **flesso** in $x=-1$.

*Ramo $0<x\le 2\pi$:* $\ f(x)=\arctan(\sin x)$.

Nel dominio $0\le x\le 2\pi$ la funzione è continua; agli estremi vale $f(0)=f(2\pi)=0$ e si annulla anche in $x=\pi$. Il segno segue quello di $\sin x$: $f(x)>0$ per $0<x<\pi$ e $f(x)<0$ per $\pi<x<2\pi$. La derivata prima

$$f'(x)=\frac{\cos x}{1+\sin^{2}x}$$

è positiva dove $\cos x>0$: la funzione cresce su $\left[0,\tfrac{\pi}{2}\right)$ e su $\left(\tfrac{3\pi}{2},2\pi\right]$ e decresce su $\left(\tfrac{\pi}{2},\tfrac{3\pi}{2}\right)$. Pertanto

$$f\!\left(\tfrac{\pi}{2}\right)=\arctan 1=\frac{\pi}{4}\quad(\text{massimo assoluto}),\qquad f\!\left(\tfrac{3\pi}{2}\right)=\arctan(-1)=-\frac{\pi}{4}\quad(\text{minimo assoluto}).$$

La concavità è rivolta verso il basso per $0<x<\pi$ e verso l'alto per $\pi<x<2\pi$, con un flesso in $x=\pi$.

Il grafico complessivo di $\gamma$ è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="371.755" height="183.424" viewBox="-72 -72 278.816 137.568"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 13.685h265.635"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M191.685 11.285c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="31.926" y="13.685" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(165.572 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M31.926 63.763V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M29.526-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="31.926" y="13.685" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -78.317)">y</text></g><path fill="none" stroke="gray" d="M7.74 15.962v-4.553"/><g stroke="none" font-size="8"><text x="31.926" y="13.685" font-family="cmsy8" transform="translate(-29.616 10.965)">¡</text><text x="38.537" y="13.685" font-family="cmr8" transform="translate(-29.616 10.965)">1</text></g><path fill="none" stroke="gray" d="M69.915 15.962v-4.553"/><g stroke="none"><text x="33.126" y="10.415" font-family="cmmi6" font-size="6" transform="translate(34.502 11.663)">¼</text><path d="M67.628 23.148h4.576v.4h-4.576z"/><text x="33.58" y="16.823" font-family="cmr6" font-size="6" transform="translate(34.502 11.663)">2</text></g><path fill="none" stroke="gray" d="M107.905 15.962v-4.553"/><text x="31.926" y="13.685" stroke="none" font-family="cmmi8" font-size="8" transform="translate(73.396 9.254)">¼</text><path fill="none" stroke="gray" d="M145.895 15.962v-4.553"/><g stroke="none"><text x="33.126" y="10.415" font-family="cmr6" font-size="6" transform="translate(108.648 12.947)">3</text><text x="36.792" y="10.415" font-family="cmmi6" font-size="6" transform="translate(108.648 12.947)">¼</text><path d="M141.774 24.432h8.242v.4h-8.242z"/><text x="35.413" y="16.823" font-family="cmr6" font-size="6" transform="translate(108.648 12.947)">2</text></g><path fill="none" stroke="gray" d="M183.885 15.962v-4.553"/><g stroke="none" font-size="8"><text x="31.926" y="13.685" font-family="cmr8" transform="translate(147.25 10.965)">2</text><text x="36.176" y="13.685" font-family="cmmi8" transform="translate(147.25 10.965)">¼</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.814-50.804 1.627.726 1.627.74 1.627.75 1.627.757 1.627.77 1.627.786 1.627.796 1.627.81 1.627.824 1.627.837 1.627.85 1.627.867 1.627.88 1.628.897 1.627.913 1.627.929 1.627.947 1.627.964 1.627.983 1.627 1 1.627 1.022 1.627 1.04 1.627 1.06 1.627 1.08 1.627 1.103 1.627 1.126 1.627 1.147 1.628 1.172 1.627 1.193 1.627 1.22 1.627 1.245 1.627 1.27 1.627 1.295 1.627 1.324 1.627 1.343 1.627 1.375 1.627 1.394 1.627 1.423 1.627 1.444L.268-9.035 1.895-7.55l1.628 1.506L5.15-4.525 6.777-3l1.627 1.534L10.03.063l1.627 1.514 1.627 1.496 1.627 1.463 1.627 1.415 1.627 1.352 1.627 1.273 1.627 1.176 1.627 1.057 1.627.918 1.628.76 1.627.586 1.627.395 1.627.197"/><path fill="none" stroke="red" stroke-width=".8" d="m31.926 13.685 1.923-3.608 1.923-3.543 1.924-3.413 1.923-3.237 1.924-3.02 1.923-2.78 1.923-2.53 1.924-2.277 1.923-2.031 1.924-1.793 1.923-1.57 1.923-1.357 1.924-1.16 1.923-.975 1.924-.8 1.923-.637 1.923-.478 1.924-.329 1.923-.18 1.924-.037 1.923.109 1.923.253 1.924.403 1.923.555 1.924.717 1.923.887 1.923 1.064 1.924 1.258 1.923 1.461 1.924 1.679 1.923 1.91 1.924 2.152 1.923 2.403 1.923 2.655 1.924 2.902 1.923 3.13 1.924 3.33 1.923 3.487 1.923 3.584 1.924 3.616 1.923 3.583 1.924 3.487 1.923 3.33 1.923 3.133 1.924 2.903 1.923 2.657 1.924 2.403 1.923 2.154 1.923 1.911 1.924 1.68 1.923 1.462 1.924 1.258 1.923 1.067 1.923.887 1.924.717 1.923.557 1.924.403 1.923.254 1.923.11 1.924-.037 1.923-.18 1.924-.327 1.923-.477 1.923-.636 1.924-.8 1.923-.973 1.924-1.16 1.923-1.357 1.924-1.567 1.923-1.791 1.923-2.03 1.924-2.276 1.923-2.529 1.924-2.78 1.923-3.018 1.923-3.235 1.924-3.414 1.923-3.542 1.924-3.608"/><path stroke="none" d="M32.946 13.685c0-1.06-.457-1.92-1.02-1.92-.564 0-1.02.86-1.02 1.92s.456 1.92 1.02 1.92c.563 0 1.02-.86 1.02-1.92M8.76-2.093c0-1.06-.456-1.92-1.02-1.92-.563 0-1.02.86-1.02 1.92s.457 1.92 1.02 1.92c.564 0 1.02-.86 1.02-1.92m-1.02 0"/><text x="31.926" y="13.685" stroke="none" font-family="cmr8" font-size="8" transform="translate(-47.174 -19.312)">°esso</text><path stroke="none" d="M70.935-22.07c0-1.06-.456-1.92-1.02-1.92-.563 0-1.02.86-1.02 1.92s.457 1.92 1.02 1.92c.564 0 1.02-.86 1.02-1.92m-1.02 0"/><g stroke="none"><text x="33.126" y="10.415" font-family="cmmi6" font-size="6" transform="translate(34.502 -42.425)">¼</text><path d="M67.628-30.94h4.576v.4h-4.576z"/><text x="33.58" y="16.823" font-family="cmr6" font-size="6" transform="translate(34.502 -42.425)">4</text></g><path stroke="none" d="M146.915 49.44c0-1.06-.457-1.92-1.02-1.92s-1.02.86-1.02 1.92.457 1.92 1.02 1.92 1.02-.86 1.02-1.92m-1.02 0"/><g stroke="none"><text x="31.926" y="13.685" font-family="cmsy8" font-size="8" transform="translate(107.176 45.142)">¡</text><text x="39.737" y="10.415" font-family="cmmi6" font-size="6" transform="translate(107.176 45.142)">¼</text><path d="M146.913 56.627h4.576v.4h-4.576z"/><text x="40.191" y="16.823" font-family="cmr6" font-size="6" transform="translate(107.176 45.142)">4</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="33.126" y="10.415" font-family="cmr6" font-size="6" transform="translate(-92.52 -59.458)">1</text><path d="M-59.395-47.973h3.667v.4h-3.667z"/><text x="33.126" y="16.823" font-family="cmr6" font-size="6" transform="translate(-92.52 -59.458)">2</text><text x="39.409" y="13.685" font-family="cmr8" font-size="8" transform="translate(-92.52 -59.458)">ln</text><text x="46.492" y="13.685" font-family="cmr8" font-size="8" transform="translate(-92.52 -59.458)">(</text><text x="49.798" y="13.685" font-family="cmmi8" font-size="8" transform="translate(-92.52 -59.458)">x</text><text x="54.583" y="10.862" font-family="cmr6" font-size="6" transform="translate(-92.52 -59.458)">2</text><text x="60.638" y="13.685" font-family="cmr8" font-size="8" transform="translate(-92.52 -59.458)">+</text><text x="69.138" y="13.685" font-family="cmr8" font-size="8" transform="translate(-92.52 -59.458)">1)</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="8"><text x="31.926" y="13.685" font-family="cmr8" transform="translate(107.165 -23.039)">arctan</text><text x="55.544" y="13.685" font-family="cmr8" transform="translate(107.165 -23.039)">(</text><text x="58.85" y="13.685" font-family="cmr8" transform="translate(107.165 -23.039)">sin</text><text x="70.703" y="13.685" font-family="cmmi8" transform="translate(107.165 -23.039)">x</text><text x="75.487" y="13.685" font-family="cmr8" transform="translate(107.165 -23.039)">)</text></g></g></g></svg>
</figure>

## c)

**Area nel II quadrante.**

Per $-1\le x\le 0$ si ha $f(x)=\tfrac{1}{2}\ln(x^{2}+1)\ge 0$; l'area richiesta è

$$A=\int_{-1}^{0}\frac{1}{2}\ln(x^{2}+1)\,dx.$$

Integrando per parti con $u=\ln(x^{2}+1)$ e $dv=dx$:

$$A=\frac{1}{2}\Big[x\ln(x^{2}+1)\Big]_{-1}^{0}-\frac{1}{2}\int_{-1}^{0}\frac{2x^{2}}{x^{2}+1}\,dx=\frac{1}{2}\ln 2-\int_{-1}^{0}\frac{x^{2}}{x^{2}+1}\,dx.$$

Poiché $\dfrac{x^{2}}{x^{2}+1}=1-\dfrac{1}{x^{2}+1}$,

$$\int_{-1}^{0}\frac{x^{2}}{x^{2}+1}\,dx=\Big[x-\arctan x\Big]_{-1}^{0}=0-\left(-1-\left(-\frac{\pi}{4}\right)\right)=1-\frac{\pi}{4}.$$

Dunque

$$A=\frac{1}{2}\ln 2-1+\frac{\pi}{4}\approx 0{,}132\ \text{u}^{2}.$$

## d)

**Approssimazione numerica.**

Si vuole approssimare $\displaystyle\int_{0}^{\pi}\arctan(\sin x)\,dx$ con il **metodo dei trapezi**. Dividendo $[0,\pi]$ in $n=4$ parti uguali, con passo $h=\dfrac{\pi}{4}$, si ha:

$$\begin{array}{c|ccccc} x_i & 0 & \frac{\pi}{4} & \frac{\pi}{2} & \frac{3\pi}{4} & \pi\\ \hline f(x_i) & 0 & \arctan\frac{\sqrt{2}}{2}\approx 0{,}6155 & \frac{\pi}{4}\approx 0{,}7854 & 0{,}6155 & 0 \end{array}$$

La formula dei trapezi fornisce

$$A\approx\frac{h}{2}\Big[f(x_0)+f(x_4)+2\big(f(x_1)+f(x_2)+f(x_3)\big)\Big]=\frac{\pi/4}{2}\big(0+0+2\cdot 0{,}6155+2\cdot 0{,}7854+2\cdot 0{,}6155\big).$$

Svolgendo i calcoli,

$$A\approx\frac{\pi}{8}\cdot 3{,}4273\approx 1{,}346\ \text{u}^{2},$$

in buon accordo con il valore esatto (circa $1{,}69$).

*Fonte:* [📄 PDF p.86](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
