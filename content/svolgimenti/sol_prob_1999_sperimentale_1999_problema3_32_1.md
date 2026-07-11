

**Problema:** [[Problemi/prob_1999_sperimentale_1999_problema3_32_1|1999 Sperimentale — Problema 3 — Problema 1]] · **Prova:** [[Prove/1999_sperimentale_1999_problema3_32|1999 Sperimentale — Problema 3]]

Nel piano cartesiano $Oxy$ i punti $P(x,y)$, $A(x',y')$, $B(x'',y'')$, $P'(X,Y)$ sono legati dalle relazioni

$$T_1:\begin{cases}x'=2x\\[2pt] y'=2y\end{cases}\qquad T_2:\begin{cases}x''=-y'\\[2pt] y''=x'\end{cases}\qquad T_3:\begin{cases}X=x''+2\\[2pt] Y=y''-1\end{cases}$$

Si chiede la natura di $T_1,T_2,T_3$, la trasformazione composta $T$ che porta $P$ in $P'$, il suo studio con gli elementi uniti e, considerati $C(3,0)$, $D(0,\sqrt{3})$, $E(0,-\sqrt{3})$, la circonferenza $\gamma$ per tali punti e la retta $a=CD$, l'area e il perimetro delle regioni finite delimitate dalle trasformate $\gamma'$ e $a'$.

## a) Natura di $T_1$, $T_2$, $T_3$

- $T_1:\ x'=2x,\ y'=2y$ moltiplica ogni coordinata per $2$: è un'**omotetia di centro $O$ e rapporto $k=2$**.
- $T_2:\ x''=-y',\ y''=x'$ è la matrice $\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}$: è una **rotazione di $90^\circ$ in senso antiorario attorno a $O$**.
- $T_3:\ X=x''+2,\ Y=y''-1$ somma il vettore costante $(2,-1)$: è una **traslazione di vettore $(2,\,-1)$**.

## b) La trasformazione composta $T$

Componendo nell'ordine $T=T_3\circ T_2\circ T_1$:

$$x'=2x,\ y'=2y\ \Rightarrow\ x''=-2y,\ y''=2x\ \Rightarrow\ X=-2y+2,\ Y=2x-1.$$

Dunque

$$T:\begin{cases}X=-2y+2\\[2pt] Y=2x-1.\end{cases}$$

## c) Studio di $T$ ed elementi uniti

La parte lineare è $\begin{pmatrix}0&-2\\ 2&0\end{pmatrix}=2\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}$, cioè $2$ per una rotazione di $90^\circ$. Il determinante vale $4>0$: $T$ è una **similitudine diretta di rapporto $k=2$** (composizione di omotetia di rapporto $2$, rotazione di $90^\circ$ e traslazione). Di conseguenza:

- il rapporto tra segmenti corrispondenti è costante e uguale a $2$;
- il rapporto tra aree corrispondenti è $k^2=4$;
- conserva il parallelismo tra rette e muta circonferenze in circonferenze.

**Punto unito.** Imponendo $X=x$ e $Y=y$:

$$\begin{cases}x=-2y+2\\ y=2x-1\end{cases}\Rightarrow x=-2(2x-1)+2=-4x+4\Rightarrow 5x=4,$$

da cui $x=\dfrac{4}{5}$, $y=2\cdot\dfrac{4}{5}-1=\dfrac{3}{5}$. L'unico punto unito è

$$U\left(\tfrac{4}{5},\,\tfrac{3}{5}\right).$$

Essendo una similitudine diretta con rapporto $\neq1$ e un solo punto fisso, $T$ è di fatto una **omotetia rotatoria** (similitudine spiraliforme) di centro $U$, angolo $90^\circ$ e rapporto $2$.

**Rette unite.** Sia $r:\ ax+by+c=0$ (con $a,b$ non entrambi nulli). Dalla $T$ si ricava l'inversa $x=\dfrac{Y+1}{2}$, $y=\dfrac{2-X}{2}$; sostituendo in $r$ si ottiene la retta immagine

$$a\,\frac{Y+1}{2}+b\,\frac{2-X}{2}+c=0\ \Rightarrow\ -bX+aY+(a+2b+2c)=0.$$

La retta è unita se coincide con $r$, cioè se

$$\frac{-b}{a}=\frac{a}{b}=\frac{a+2b+2c}{c}.$$

Dalla prima uguaglianza segue $-b^2=a^2$, ossia $a^2+b^2=0$, verificata solo per $a=b=0$: caso escluso. **Non esistono rette unite.**

## d) Area delle regioni delimitate da $\gamma'$ e $a'$

**La configurazione di partenza.** I punti $D(0,\sqrt3)$ ed $E(0,-\sqrt3)$ sono simmetrici rispetto all'asse $x$, quindi il centro di $\gamma$ sta su tale asse: $(h,0)$ con $(3-h)^2=h^2+3\Rightarrow h=1$ e raggio $\sqrt{(3-1)^2}=2$. Dunque

$$\gamma:\ x^2+y^2-2x-3=0,\qquad \text{centro }(1,0),\ R=2.$$

I lati del triangolo $CDE$ misurano tutti $2\sqrt3$ (ad esempio $\overline{CD}=\sqrt{9+3}=2\sqrt3$): **$CDE$ è equilatero** inscritto in $\gamma$, quindi ogni lato sottende un arco di $120^\circ$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="225.695" height="215.027" viewBox="-72 -72 169.271 161.271"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 14.823H84.02"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M82.14 12.423c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-26.545" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(114.498 2.153)">x</text><path fill="none" d="M-26.545 88.8V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-28.945-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-26.545" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -79.455)">y</text><path fill="none" stroke-width=".8" d="M58.813 14.823c0-31.428-25.477-56.905-56.906-56.905s-56.905 25.477-56.905 56.905S-29.521 71.73 1.907 71.73s56.906-25.477 56.906-56.906Zm-56.906 0"/><path fill="none" d="m58.813 14.823-85.358 49.28v-98.56"/><path fill="none" stroke-width="1.2" d="m58.813 14.823-85.358-49.28"/><path stroke="none" d="M60.813 14.823a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-26.545" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.891 -3.533)">C</text><path stroke="none" d="M-24.545-34.457a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-26.545" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-12.09 -52.813)">D</text><path stroke="none" d="M-24.545 64.103a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-26.545" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 59.646)">E</text><path stroke="none" d="M3.407 14.823a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g stroke="none"><text x="-26.545" y="14.823" font-family="cmmi10" font-size="10" transform="translate(31.986 11.05)">O</text><text x="-18.64" y="11.194" font-family="cmsy7" font-size="7" transform="translate(31.986 11.05)">0</text></g><g stroke="none" font-size="10"><text x="-26.545" y="14.823" font-family="cmmi10" transform="translate(36.54 -27.882)">a</text><text x="-18.482" y="14.823" font-family="cmr10" transform="translate(36.54 -27.882)">=</text><text x="-7.926" y="14.823" font-family="cmmi10" transform="translate(36.54 -27.882)">C</text><text x="-.064" y="14.823" font-family="cmmi10" transform="translate(36.54 -27.882)">D</text></g></g></svg>
</figure>

La corda $a=CD$ divide $\gamma$ in due segmenti circolari. Il triangolo equilatero suddivide il cerchio nel triangolo più tre segmenti congruenti (uno per lato); detta $A'$ l'area del segmento minore,

$$3A'=\text{area cerchio}-\text{area }CDE=\pi\cdot2^2-\frac{\sqrt3}{4}(2\sqrt3)^2=4\pi-3\sqrt3,$$

$$A'=\frac{4\pi-3\sqrt3}{3}\quad(\text{segmento minore}),\qquad 4\pi-A'=\frac{8\pi+3\sqrt3}{3}\quad(\text{segmento maggiore}).$$

**Passaggio a $\gamma'$ e $a'$.** Poiché $T$ è una similitudine di rapporto $2$, le aree si moltiplicano per $k^2=4$:

$$\boxed{\,\mathcal{A}_1=4\cdot\frac{4\pi-3\sqrt3}{3}=\frac{16\pi-12\sqrt3}{3}=\frac{16}{3}\pi-4\sqrt3\,}$$

$$\boxed{\,\mathcal{A}_2=4\cdot\frac{8\pi+3\sqrt3}{3}=\frac{32\pi+12\sqrt3}{3}=\frac{32}{3}\pi+4\sqrt3\,}$$

Verifica: $\mathcal{A}_1+\mathcal{A}_2=16\pi$, cioè l'area della circonferenza trasformata (di raggio $4$).

*Nota.* Trasformando l'equazione di $\gamma$ con $x=\dfrac{Y+1}{2}$, $y=\dfrac{2-X}{2}$ si ottiene

$$\gamma':\ X^2+Y^2-4X-2Y-11=0,\qquad \text{centro }(2,1),\ R'=4,$$

coerente con il fattore di scala $2$.

## e) Perimetro delle stesse regioni

Nella figura di partenza il perimetro della regione minore è un terzo della circonferenza ($120^\circ$) più la corda, quello della regione maggiore due terzi di circonferenza più la corda:

$$p'_{1}=\frac{1}{3}(2\pi\cdot2)+2\sqrt3=\frac{4\pi}{3}+2\sqrt3,\qquad p'_{2}=\frac{2}{3}(2\pi\cdot2)+2\sqrt3=\frac{8\pi}{3}+2\sqrt3.$$

Le lunghezze si moltiplicano per $k=2$:

$$\boxed{\,p_1=\frac{8}{3}\pi+4\sqrt3\,}\qquad\qquad \boxed{\,p_2=\frac{16}{3}\pi+4\sqrt3\,}$$

*Fonte:* [📄 PDF p.32](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/geometria #cluster/geometria
