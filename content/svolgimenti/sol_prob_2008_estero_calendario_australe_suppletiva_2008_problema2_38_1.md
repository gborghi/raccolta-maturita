

**Problema:** [[Problemi/prob_2008_estero_calendario_australe_suppletiva_2008_problema2_38_1|2008 Estero Australe Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_estero_calendario_australe_suppletiva_2008_problema2_38|2008 Estero Australe Suppletiva — Problema 2]]

È assegnato il settore circolare $AOB$ con $\overline{OA}=\overline{OB}=r$ e $A\hat OB=60^\circ$. Fissiamo un sistema di riferimento con origine in $O$ e asse $x$ coincidente con la retta $OA$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="180.887" height="167.949" viewBox="-72 -72 135.665 125.962"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.499 39.992H56.312M-57.499 39.992-.593-58.57M56.312 39.992c0-40.656-21.697-78.236-56.905-98.563"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-24.644 39.992h65.709v-56.905h-65.71Z"/><path stroke="none" d="M-55.999 39.992a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M42.565-16.913a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.061 10.366)">A</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.438 -102.096)">B</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.285 10.366)">D</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.923 10.366)">C</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(102.096 -60.438)">L</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.113 -60.438)">K</text><text x="-57.499" y="39.992" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.172 -5.814)">x</text><path fill="none" d="M-37.582 39.992c0-3.495-.92-6.931-2.668-9.958"/></g></svg>
</figure>

## a)

Sia $CDLK$ il rettangolo inscritto nel settore, con il lato $CD$ su $OA$, e poniamo $A\hat OL=x$, con $L$ sull'arco $AB$ e $0\le x\le 60^\circ$.

Il vertice $L$ appartiene all'arco, quindi $L=(r\cos x,\ r\sin x)$ e la sua proiezione su $OA$ è $D=(r\cos x,\ 0)$; pertanto
$$DL=KC=r\sin x,\qquad OD=r\cos x.$$

Il vertice $K$ giace sulla semiretta $OB$, inclinata di $60^\circ$ rispetto a $OA$: nel triangolo rettangolo $OKC$ (retto in $C$) l'angolo in $O$ vale $60^\circ$ e il cateto $KC=r\sin x$, quindi
$$OC=\frac{KC}{\tan 60^\circ}=\frac{r\sin x}{\sqrt3}=\frac{\sqrt3}{3}\,r\sin x.$$

Le dimensioni del rettangolo sono dunque
$$DL=r\sin x,\qquad CD=OD-OC=r\cos x-\frac{\sqrt3}{3}\,r\sin x.$$

## b)

L'area del rettangolo è
$$A(x)=CD\cdot DL=\left(r\cos x-\frac{\sqrt3}{3}\,r\sin x\right)r\sin x=r^2\left(\sin x\cos x-\frac{\sqrt3}{3}\sin^2 x\right).$$

Usando $\sin x\cos x=\tfrac12\sin 2x$ e $\sin^2 x=\tfrac{1-\cos 2x}{2}$:
$$A(x)=r^2\left(\frac12\sin 2x-\frac{\sqrt3}{6}\left(1-\cos 2x\right)\right)=r^2\left(\frac12\sin 2x+\frac{\sqrt3}{6}\cos 2x-\frac{\sqrt3}{6}\right).$$

La combinazione $\tfrac12\sin 2x+\tfrac{\sqrt3}{6}\cos 2x$ ha ampiezza $\sqrt{\tfrac14+\tfrac1{12}}=\tfrac{1}{\sqrt3}=\tfrac{\sqrt3}{3}$ e fase $\varphi$ con $\tan\varphi=\dfrac{\sqrt3/6}{1/2}=\dfrac{\sqrt3}{3}$, cioè $\varphi=30^\circ$; quindi
$$A(x)=r^2\left(\frac{\sqrt3}{3}\,\sin\!\left(2x+30^\circ\right)-\frac{\sqrt3}{6}\right).$$

L'area è massima quando $\sin(2x+30^\circ)=1$, ossia $2x+30^\circ=90^\circ$, da cui
$$x=30^\circ,$$
valore accettabile perché $0\le 30^\circ\le 60^\circ$. Il valore massimo dell'area è
$$A_{\max}=r^2\left(\frac{\sqrt3}{3}-\frac{\sqrt3}{6}\right)=\frac{\sqrt3}{6}\,r^2.$$

## c)

Il settore $AOB$ è la base di un solido $S$ le cui sezioni con piani ortogonali a $OA$ sono tutte quadrati. Nel riferimento scelto la retta $OB$ ha equazione $y=\tan 60^\circ\,x=\sqrt3\,x$, mentre l'arco $AB$ ha equazione $y=\sqrt{r^2-x^2}$. La retta $OB$ incontra l'arco in $B$, la cui ascissa è
$$OK=OB\cos 60^\circ=\frac r2.$$

Il lato del quadrato-sezione è pari all'ordinata del bordo superiore del settore:

- per $0\le x\le \tfrac r2$ il bordo è la retta $OB$, quindi il lato è $\sqrt3\,x$ e l'area è $3x^2$;
- per $\tfrac r2\le x\le r$ il bordo è l'arco, quindi il lato è $\sqrt{r^2-x^2}$ e l'area è $r^2-x^2$.

Il volume è allora
$$V=\int_{0}^{r/2}3x^2\,dx+\int_{r/2}^{r}\left(r^2-x^2\right)dx=\Big[x^3\Big]_{0}^{r/2}+\left[r^2x-\frac{x^3}{3}\right]_{r/2}^{r}.$$

Calcolando i due contributi:
$$\Big[x^3\Big]_{0}^{r/2}=\frac{r^3}{8},\qquad \left[r^2x-\frac{x^3}{3}\right]_{r/2}^{r}=\frac{2}{3}r^3-\frac{11}{24}r^3=\frac{5}{24}r^3.$$

Pertanto
$$V=\frac{r^3}{8}+\frac{5}{24}r^3=\frac{3}{24}r^3+\frac{5}{24}r^3=\frac{r^3}{3}.$$

Il solido ha volume $V=\dfrac13\,r^3$.

*Fonte:* [📄 PDF p.38](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
