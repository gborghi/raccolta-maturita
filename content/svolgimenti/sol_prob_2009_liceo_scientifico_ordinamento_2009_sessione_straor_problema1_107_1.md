

**Problema:** [[Problemi/prob_2009_liceo_scientifico_ordinamento_2009_sessione_straor_problema1_107_1|2009 Ordinamento Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_liceo_scientifico_ordinamento_2009_sessione_straor_problema1_107|2009 Ordinamento Straordinaria — Problema 1]]

Si consideri la funzione
$$f(x)=\frac{x+1}{e^{3x}}=(x+1)\,e^{-3x}.$$
Si studi $f$ tracciandone il grafico $\gamma$ su un piano cartesiano $Oxy$; si scriva la tangente a $\gamma$ nel punto di flesso e l'area del triangolo che essa forma con gli assi; si verifichi che $F(x)=-\frac{1}{9}e^{-3x}(3x+4)$ è una primitiva di $f$; si calcoli infine l'area $A(k)$ della regione delimitata da $\gamma$, dall'asse $x$ e dalle rette $x=-1$ e $x=k$ (con $k>0$), studiandone il comportamento per $k\to+\infty$.

## a) Studio della funzione e grafico

**Dominio.** Il fattore $e^{-3x}$ è definito ovunque, quindi $D=\mathbb{R}$.

**Intersezioni con gli assi.** Per $x=0$ si ha $y=1$; per $y=0$ si ha $x=-1$. La funzione non è né pari né dispari.

**Segno.** Poiché $e^{-3x}>0$ per ogni $x$, risulta $f(x)>0$ se e solo se $x>-1$.

**Limiti e asintoti.**
$$\lim_{x\to-\infty}(x+1)e^{-3x}=-\infty,\qquad \lim_{x\to+\infty}(x+1)e^{-3x}=0^{+},$$
perché per $x\to+\infty$ l'esponenziale domina il fattore polinomiale. Dunque $y=0$ è asintoto orizzontale per $x\to+\infty$; non vi sono asintoti verticali (la funzione è continua su tutto $\mathbb{R}$). Per $x\to-\infty$ si ha
$$\lim_{x\to-\infty}\frac{f(x)}{x}=\lim_{x\to-\infty}\frac{x+1}{x}\,e^{-3x}=+\infty,$$
quindi non esiste asintoto obliquo.

**Derivata prima.**
$$f'(x)=e^{-3x}+(x+1)(-3)e^{-3x}=(-3x-2)\,e^{-3x}.$$
Essendo $e^{-3x}>0$, si ha $f'(x)\ge 0$ se e solo se $-3x-2\ge 0$, cioè $x\le-\frac{2}{3}$. La funzione è quindi crescente per $x<-\frac{2}{3}$ e decrescente per $x>-\frac{2}{3}$: il punto $x=-\frac{2}{3}$ è di massimo relativo e assoluto, con ordinata
$$f\!\left(-\tfrac{2}{3}\right)=\tfrac{1}{3}\,e^{2}=\frac{e^{2}}{3}\approx 2{,}46.$$

**Derivata seconda.**
$$f''(x)=-3e^{-3x}+(-3x-2)(-3)e^{-3x}=(9x+3)\,e^{-3x}.$$
Risulta $f''(x)\ge 0$ se e solo se $x\ge-\frac{1}{3}$: la concavità è rivolta verso l'alto per $x>-\frac{1}{3}$ e verso il basso per $x<-\frac{1}{3}$. Il punto $x=-\frac{1}{3}$ è di flesso, con ordinata
$$f\!\left(-\tfrac{1}{3}\right)=\tfrac{2}{3}\,e=\frac{2e}{3}\approx 1{,}81.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="187" height="303.043" viewBox="-72 -72 140.25 227.282"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 81.972H54.999"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M53.119 79.572c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-15.164" y="81.972" stroke="none" font-family="cmmi10" font-size="10" transform="translate(74.096 2.153)">x</text><path fill="none" d="M-15.164 154.812V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-17.564-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-15.164" y="81.972" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -146.604)">y</text><path fill="none" d="M-60.689 79.696v4.553"/><g stroke="none" font-size="10"><text x="-15.164" y="81.972" font-family="cmsy10" transform="translate(-51.913 12.254)">¡</text><text x="-7.387" y="81.972" font-family="cmr10" transform="translate(-51.913 12.254)">1</text></g><path fill="none" d="M30.36 79.696v4.553"/><text x="-15.164" y="81.972" stroke="none" font-family="cmr10" font-size="10" transform="translate(43.025 12.254)">1</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.965 135.093 1.44-35.371 1.44-29.4 1.44-24.224 1.44-19.742 1.44-15.874 1.44-12.543 1.44-9.686 1.44-7.243 1.44-5.166 1.44-3.4 1.44-1.917 1.44-.67 1.44.363 1.44 1.218 1.44 1.91 1.44 2.474 1.44 2.915 1.44 3.256 1.44 3.514 1.44 3.696 1.44 3.817 1.44 3.887 1.44 3.913 1.44 3.902 1.44 3.859 1.44 3.795 1.44 3.707 1.44 3.608 1.44 3.494 1.44 3.372 1.44 3.244 1.44 3.11 1.44 2.973 1.44 2.83 1.44 2.705 1.44 2.564 1.44 2.436 1.44 2.307 1.44 2.18 1.44 2.06 1.44 1.935 1.44 1.828 1.44 1.72 1.44 1.615 1.44 1.509 1.44 1.424 1.44 1.326 1.44 1.25 1.44 1.162 1.44 1.088 1.44 1.01 1.44.954 1.44.884 1.44.823 1.44.77 1.44.71 1.44.666 1.44.613 1.44.575 1.44.54 1.44.494 1.44.463 1.44.42 1.44.4 1.44.371 1.44.338 1.44.312 1.44.297 1.44.267 1.44.248 1.44.235 1.44.214 1.44.2 1.44.177 1.44.171 1.44.155 1.44.149 1.44.132 1.44.124"/><path stroke="none" d="M-43.596-30.155a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-15.164" y="81.972" stroke="none" font-family="cmr10" font-size="10" transform="translate(-26.818 -115.66)">max</text><path stroke="none" d="M-28.418-.518a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-15.164" y="81.972" stroke="none" font-family="cmr10" font-size="10" transform="translate(-11.64 -79.018)">°esso</text><path stroke="none" d="M-58.769 81.972a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M-13.244 36.448a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-15.164" y="81.972" stroke="none" font-family="cmr10" font-size="10" transform="translate(3.533 -49.058)">1</text></g></svg>
</figure>

## b) Tangente nel flesso e area del triangolo

Il flesso è $F=\left(-\frac{1}{3},\,\frac{2e}{3}\right)$ e la pendenza della tangente vale
$$f'\!\left(-\tfrac{1}{3}\right)=\bigl(-3\cdot(-\tfrac{1}{3})-2\bigr)e^{1}=(1-2)e=-e.$$
La retta tangente è quindi
$$y-\frac{2e}{3}=-e\left(x+\frac{1}{3}\right)\;\Rightarrow\; y=-ex+\frac{e}{3}.$$
Intersezioni con gli assi: per $x=0$ si ottiene $B=\left(0,\frac{e}{3}\right)$; per $y=0$ si ottiene $A=\left(\frac{1}{3},0\right)$. L'area del triangolo rettangolo $OAB$ è
$$\text{Area}(OAB)=\frac{1}{2}\cdot\frac{1}{3}\cdot\frac{e}{3}=\frac{e}{18}\approx 0{,}15\ \text{u}^{2}.$$

## c) Verifica della primitiva

Data $F(x)=-\frac{1}{9}e^{-3x}(3x+4)$, si deriva:
$$F'(x)=-\frac{1}{9}\Bigl[3e^{-3x}+(3x+4)(-3)e^{-3x}\Bigr]=-\frac{1}{9}e^{-3x}\bigl(3-9x-12\bigr).$$
Cioè
$$F'(x)=-\frac{1}{9}e^{-3x}(-9x-9)=(x+1)e^{-3x}=f(x),$$
quindi $F$ è effettivamente una primitiva di $f$.

## d) Area $A(k)$ e comportamento per $k\to+\infty$

Poiché $f(x)\ge 0$ per $x\ge-1$, sull'intervallo $[-1,k]$ (con $k>0$) l'area è
$$A(k)=\int_{-1}^{k}(x+1)e^{-3x}\,dx=\Bigl[-\tfrac{1}{9}e^{-3x}(3x+4)\Bigr]_{-1}^{k},$$
usando la primitiva $F$ trovata al punto c). Quindi
$$A(k)=-\frac{3k+4}{9\,e^{3k}}-\left(-\frac{1}{9}e^{3}\cdot 1\right)=\frac{e^{3}}{9}-\frac{3k+4}{9\,e^{3k}}.$$
Per $k\to+\infty$ il secondo termine tende a $0$ (l'esponenziale domina il polinomio), dunque
$$\lim_{k\to+\infty}A(k)=\frac{e^{3}}{9}\approx 2{,}23\ \text{u}^{2}.$$
L'area resta quindi limitata: pur estendendo indefinitamente la regione verso destra, essa converge al valore finito $\dfrac{e^{3}}{9}$.

*Fonte:* [📄 PDF p.107](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
