

**Problema:** [[Problemi/prob_2003_pni_2003_sessione_straordinaria_problema1_156_1|2003 PNI Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_pni_2003_sessione_straordinaria_problema1_156|2003 PNI Straordinaria — Problema 1]]

È assegnata l'equazione $x^{3}+2x-50=0$, con $x\in\mathbb{R}$.

## a)

Posto $f(x)=x^{3}+2x-50$, la funzione è razionale intera di grado dispari, quindi ammette almeno uno zero. Calcoliamo la derivata prima:
$$f'(x)=3x^{2}+2>0 \quad \text{per ogni } x\in\mathbb{R},$$
dunque $f$ è strettamente crescente su tutto $\mathbb{R}$ e può annullarsi al più una volta. Poiché essa assume sia valori negativi sia valori positivi (ad esempio $f(3)=27+6-50=-17<0$ e $f(4)=64+8-50=22>0$), per il teorema degli zeri esiste esattamente una radice $\bar{x}$, e questa cade nell'intervallo $(3,4)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="267.77" height="205.535" viewBox="-72 -72 200.827 154.151"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-68.965 17.665h184.541"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M113.696 15.265c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-474.417" y="17.665" stroke="none" font-family="cmmi10" font-size="10" transform="translate(593.927 2.153)">x</text><path fill="none" d="M-47.626 81.681V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-50.026-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-474.417" y="17.665" stroke="none" font-family="cmmi10" font-size="10" transform="translate(424.16 -82.297)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-47.626 61.196 2.41-1.264 2.409-1.278 2.41-1.29 2.409-1.305 2.41-1.318 2.41-1.332 2.409-1.345 2.41-1.36 2.409-1.372 2.41-1.387 2.409-1.4 2.41-1.415 2.409-1.43 2.41-1.442 2.41-1.457 2.409-1.472 2.41-1.486 2.409-1.5 2.41-1.516 2.409-1.53 2.41-1.544 2.409-1.56 2.41-1.573 2.41-1.59 2.409-1.604 2.41-1.619 2.409-1.634 2.41-1.65 2.409-1.665 2.41-1.68 2.409-1.696 2.41-1.71 2.41-1.728 2.409-1.742 2.41-1.759 2.409-1.774 2.41-1.79 2.409-1.806 2.41-1.822 2.409-1.838 2.41-1.855 2.41-1.87L55.984-6.1l2.41-1.903 2.409-1.92 2.41-1.937 2.409-1.953 2.41-1.97 2.409-1.987 2.41-2.004 2.41-2.02 2.409-2.038 2.41-2.055 2.409-2.072 2.41-2.09 2.409-2.106 2.41-2.124 2.409-2.141 2.41-2.16"/><g fill="red"><path stroke="none" d="M25.941 17.665a1.98 1.98 0 1 0-3.96 0 1.98 1.98 0 0 0 3.96 0m-1.98 0"/></g><g stroke="none" font-size="10"><text x="-473.782" y="17.665" font-family="cmr10" transform="translate(501.912 9.21)">¹</text><text x="-474.417" y="17.665" font-family="cmmi10" transform="translate(501.912 9.21)">x</text></g><text x="-474.417" y="17.665" stroke="none" font-family="cmr10" font-size="10" transform="translate(418.258 9.977)">3</text><text x="-474.417" y="17.665" stroke="none" font-family="cmr10" font-size="10" transform="translate(566.555 9.977)">4</text><path stroke="none" d="M-46.212 61.196a1.414 1.414 0 1 0-2.829 0 1.414 1.414 0 0 0 2.83 0m-1.414 0"/><g stroke="none" font-size="10"><text x="-474.417" y="17.665" font-family="cmsy10" transform="translate(405.48 46.336)">¡</text><text x="-466.64" y="17.665" font-family="cmr10" transform="translate(405.48 46.336)">17</text></g><path stroke="none" d="M96.052-38.669a1.414 1.414 0 1 0-2.829 0 1.414 1.414 0 0 0 2.829 0m-1.415 0"/><text x="-474.417" y="17.665" stroke="none" font-family="cmr10" font-size="10" transform="translate(572.588 -53.112)">22</text></g></svg>
</figure>

## b)

Dai valori calcolati sopra,
$$f(3)=-17<0, \qquad f(4)=22>0,$$
la radice $\bar{x}$ è compresa tra $3$ e $4$. Il numero intero cercato è quindi
$$z=3.$$

## c)

Cerchiamo un valore approssimato di $\bar{x}$ a meno di $10^{-4}$ nell'intervallo $[a,b]=[3,4]$, dove la radice è unica. Un metodo idoneo è quello di **bisezione** (o dicotomia).

Partendo da $x_1=3$ e $x_2=4$, ad ogni passo si considera il punto medio
$$c=\frac{x_1+x_2}{2}.$$
Se $f(c)=0$, allora $c$ è la radice; altrimenti si restringe l'intervallo scegliendo il semiintervallo agli estremi del quale $f$ cambia segno:

- se $f(c)\cdot f(x_1)<0$ si pone $x_2=c$;
- altrimenti si pone $x_1=c$.

Si ripete finché l'ampiezza dell'intervallo non scende sotto la tolleranza. Poiché l'intervallo iniziale ha ampiezza $1$ e ad ogni passo si dimezza, il numero di iterazioni necessarie è
$$n=\left\lceil \log_{2}\!\left(10^{4}\right)\right\rceil=14.$$
Il procedimento fornisce
$$\bar{x}\approx 3{,}5032.$$

## d)

Riferito il piano a un sistema di assi cartesiani ortogonali $(Oxy)$, consideriamo la curva $C_k$ di equazione
$$y=(x^{3}+2x-50)+k(x^{3}+2x-75),$$
con $k\neq -1$. Raccogliendo,
$$y=(1+k)x^{3}+2(1+k)x-(50+75k).$$
La derivata è
$$y'=3(1+k)x^{2}+2(1+k)=(1+k)\big(3x^{2}+2\big).$$
Affinché la curva ammetta un massimo e un minimo relativi, $y'$ deve annullarsi (cambiando segno) in due punti distinti. Ma per $k\neq -1$ il fattore $1+k$ è una costante non nulla e $3x^{2}+2>0$ per ogni $x$, quindi $y'$ ha **segno costante** e non si annulla mai: la funzione è strettamente monotona. Per $k=-1$ la curva degenera nella retta orizzontale $y=25$, priva di estremi.

Non esiste quindi alcun valore di $k$ per cui $C_k$ ammetta un massimo e un minimo relativi.

## e)

La curva $C_k$ è simmetrica rispetto all'origine $O$ se e solo se la sua equazione descrive una funzione dispari, cioè se $y(-x)=-y(x)$ per ogni $x$. Con
$$y(x)=(1+k)x^{3}+2(1+k)x-(50+75k),$$
i termini di grado dispari sono già dispari, mentre il termine noto deve annullarsi nel confronto:
$$y(-x)=-y(x)\ \Longrightarrow\ -(50+75k)=50+75k,$$
da cui
$$100+150k=0 \quad\Rightarrow\quad k=-\frac{2}{3}.$$
Esiste quindi un unico valore $\bar{k}=-\dfrac{2}{3}$ per cui la curva $C_{\bar{k}}$ è simmetrica rispetto all'origine.

*Fonte:* [📄 PDF p.156](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
