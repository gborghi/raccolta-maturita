

**Problema:** [[Problemi/prob_1999_sessione_suppletiva_1999_problema1_2_1|1999 Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/1999_sessione_suppletiva_1999_problema1_2|1999 Suppletiva — Problema 1]]

Data una semicirconferenza di centro $O$ e diametro $\overline{AB}=2$, si prenda su di essa un punto $C$ tale che l'angolo $A\hat{O}C$ sia acuto. Posto $\varphi$ l'ampiezza di tale angolo, si considerano

$$x=\tan\frac{\varphi}{2}, \qquad y=\text{raggio della circonferenza tangente al diametro e, in } C, \text{ alla semicirconferenza.}$$

Dopo aver dimostrato che il centro di tale circonferenza appartiene al raggio $OC$, si studi la funzione $y=f(x)$ senza tenere conto delle limitazioni geometriche.

## a) Il centro appartiene a $OC$ e determinazione di $f(x)$

La piccola circonferenza è tangente internamente alla semicirconferenza proprio nel punto $C$: i due centri e il punto di tangenza devono quindi essere allineati. Poiché il centro della semicirconferenza è $O$ e il punto di tangenza è $C$, il centro $D$ della piccola circonferenza giace sul segmento $OC$, che è un raggio della semicirconferenza.

Indichiamo con $r$ il raggio della piccola circonferenza e con $\varphi$ l'angolo che il raggio $OC$ forma con il diametro $AB$ (la semicirconferenza ha raggio unitario). Il centro $D$ si trova sul raggio $OC$ a distanza $1-r$ da $O$. Affinché la circonferenza sia tangente al diametro $AB$, la distanza del suo centro dalla retta $AB$ deve essere esattamente $r$; tale distanza vale $(1-r)\sin\varphi$, da cui:

$$(1-r)\sin\varphi = r \;\Longrightarrow\; r=\frac{\sin\varphi}{1+\sin\varphi}.$$

Per esprimere la relazione in termini della variabile $x=\tan\dfrac{\varphi}{2}$ usiamo la formula razionale $\sin\varphi=\dfrac{2x}{1+x^2}$. Sostituendo e semplificando:

$$y=f(x)=\frac{\dfrac{2x}{1+x^2}}{1+\dfrac{2x}{1+x^2}}=\frac{2x}{1+x^2+2x}=\frac{2x}{(1+x)^2}.$$

## b) Studio della funzione $f(x)=\dfrac{2x}{(1+x)^2}$

Studiamo la funzione senza tenere conto delle limitazioni geometriche.

**Dominio e comportamento agli estremi.** La funzione è definita per ogni $x\ne -1$, dunque il dominio è $\mathbb{R}\setminus\{-1\}$. Si osserva subito che $f(0)=0$ e che

$$\lim_{x\to\pm\infty}\frac{2x}{(1+x)^2}=0,$$

perciò l'asse delle ascisse $y=0$ è asintoto orizzontale sia a destra sia a sinistra. Inoltre

$$\lim_{x\to -1}\frac{2x}{(1+x)^2}=\frac{-2}{0^+}=-\infty,$$

quindi la retta $x=-1$ è asintoto verticale. Il segno di $f$ coincide con quello di $2x$: la funzione è positiva per $x>0$, negativa per $x<0$ (con $x\ne -1$), nulla in $x=0$.

**Derivata prima e punti stazionari.** Applicando la regola di derivazione del quoziente:

$$f'(x)=\frac{2(1+x)^2-2x\cdot 2(1+x)}{(1+x)^4}=\frac{2(1-x)}{(1+x)^3}.$$

La derivata si annulla per $x=1$; qui cambia segno da positivo a negativo, quindi $x=1$ è un punto di massimo, con valore

$$f(1)=\frac{2}{4}=\frac{1}{2}.$$

Per $-1<x<1$ la funzione è crescente, per $x>1$ è decrescente; nel ramo $x<-1$ il denominatore $(1+x)^3$ è negativo, dunque $f'(x)<0$ e la funzione è decrescente anche lì.

**Grafico.**



*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)


#maturita/soluzione #area/geometria #cluster/geometria
