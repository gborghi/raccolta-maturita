

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_1|2005 Ordinaria PNI — Prova — Quesito 1]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Si dimostri che il lato del decagono regolare inscritto in un cerchio è sezione aurea del raggio e si utilizzi il risultato per calcolare $\sin 18°$ e $\sin 36°$.

## a) Il lato del decagono è sezione aurea del raggio

Sia $r$ il raggio del cerchio di centro $O$ e siano $A$, $B$ due vertici consecutivi del decagono regolare inscritto. Il triangolo $OAB$ è isoscele sulla base $\overline{AB}=\ell$ (il lato del decagono), con
$$
\widehat{AOB}=\frac{360°}{10}=36°,\qquad \widehat{OAB}=\widehat{OBA}=\frac{180°-36°}{2}=72°.
$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="197.806" height="218.419" viewBox="-72 -72 148.355 163.815"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M75.885 17.367c0-40.857-33.12-73.977-73.978-73.977S-72.07-23.49-72.07 17.367s33.12 73.978 73.977 73.978 73.978-33.12 73.978-73.978Zm-73.978 0"/><path fill="none" stroke="gray" d="M75.885 17.367 61.756-26.115 24.768-52.99h-45.721l-36.989 26.875-14.128 43.482 14.128 43.483 36.989 26.874h45.72l36.99-26.874Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m1.907 17.367 22.865-70.37h-45.73Z"/><path stroke="none" d="M3.857 17.367a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0M26.721999999999998-53.004a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0M-19.008-53.004a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><text x="1.907" y="17.367" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><text x="1.907" y="17.367" stroke="none" font-family="cmmi10" font-size="10" transform="translate(26.398 -66.954)">A</text><text x="1.907" y="17.367" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-34.485 -66.954)">B</text><g stroke="none"><text x="1.907" y="17.367" font-family="cmr10" font-size="10" transform="translate(-7.299 -18.75)">36</text><text x="11.907" y="13.738" font-family="cmsy7" font-size="7" transform="translate(-7.299 -18.75)">±</text></g><text x="1.907" y="17.367" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.083 -79.36)">`</text><text x="1.907" y="17.367" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.75 -38.302)">r</text><text x="1.907" y="17.367" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-15.539 -38.302)">r</text></g></svg>
</figure>

Tracciamo la bisettrice dell'angolo $\widehat{OAB}$: essa incontra il lato $OB$ in un punto $P$ e divide l'angolo di $72°$ in due angoli di $36°$.

Nel triangolo $ABP$ si ha $\widehat{PAB}=36°$ e $\widehat{ABP}=72°$, quindi $\widehat{APB}=180°-36°-72°=72°$: il triangolo $ABP$ è isoscele con
$$
\overline{AB}=\overline{AP}=\ell .
$$
Nel triangolo $OAP$ si ha invece $\widehat{AOP}=36°$ e $\widehat{OAP}=36°$, dunque anch'esso è isoscele con
$$
\overline{AP}=\overline{OP}=\ell,\qquad \overline{PB}=r-\ell .
$$

I triangoli $OAB$ e $ABP$ hanno gli stessi angoli $36°,72°,72°$, perciò sono simili. Uguagliando i rapporti tra lati corrispondenti (lato maggiore : base):
$$
\frac{\overline{OA}}{\overline{AB}}=\frac{\overline{AB}}{\overline{BP}}
\quad\Rightarrow\quad
\frac{r}{\ell}=\frac{\ell}{\,r-\ell\,}.
$$

Questa proporzione è esattamente la condizione perché $\ell$ sia **sezione aurea** di $r$: il raggio sta al lato come il lato sta alla parte rimanente. Ne segue
$$
\ell^{2}=r(r-\ell)\quad\Rightarrow\quad \ell^{2}+r\ell-r^{2}=0 .
$$
Risolvendo rispetto a $\ell$ e scartando la radice negativa:
$$
\ell=\frac{-r+\sqrt{r^{2}+4r^{2}}}{2}=\frac{r\left(\sqrt{5}-1\right)}{2}.
$$

## b) Calcolo di $\sin 18°$

Nel triangolo isoscele $OAB$ l'altezza uscente da $O$ cade nel punto medio $M$ di $\overline{AB}$, dimezza l'angolo al vertice e il lato:
$$
\widehat{AOM}=18°,\qquad \overline{AM}=\frac{\ell}{2}.
$$
Dal triangolo rettangolo $OAM$:
$$
\sin 18°=\frac{\overline{AM}}{\overline{OA}}=\frac{\ell}{2r}
=\frac{1}{2r}\cdot\frac{r\left(\sqrt{5}-1\right)}{2}
=\frac{\sqrt{5}-1}{4}\approx 0{,}309 .
$$

## c) Calcolo di $\sin 36°$

Ricaviamo prima $\cos 36°$. Poiché
$$
\cos 36°=1-2\sin^{2}18°=1-2\left(\frac{\sqrt5-1}{4}\right)^{2}
=1-\frac{6-2\sqrt5}{8}=\frac{\sqrt5+1}{4},
$$
si ottiene
$$
\sin^{2}36°=1-\cos^{2}36°=1-\frac{6+2\sqrt5}{16}=\frac{10-2\sqrt5}{16},
$$
e, essendo $\sin 36°>0$,
$$
\sin 36°=\frac{\sqrt{10-2\sqrt5}}{4}\approx 0{,}588 .
$$

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
