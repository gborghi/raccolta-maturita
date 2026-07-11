

**Quesito:** [[Quesiti/ques_2004_estero_calendario_australe_2004_sessione_ordinaria_problema2_38_8|2004 Estero australe Ordinaria — Problema 2 e Quesiti — Quesito 8]] · **Prova:** [[Prove/2004_estero_calendario_australe_2004_sessione_ordinaria_problema2_38|2004 Estero australe Ordinaria — Problema 2 e Quesiti]]

**Quesito 8.** Calcolare

$$\int_0^\pi e^x\cos x\,dx.$$

## a) Calcolo dell'integrale indefinito

Determiniamo dapprima una primitiva di $e^x\cos x$ integrando due volte per parti. Poniamo

$$I=\int e^x\cos x\,dx.$$

Integrando per parti (deriviamo il fattore trigonometrico e integriamo $e^x$) si ha

$$I=\int e^x\cos x\,dx=e^x\cos x-\int e^x(-\sin x)\,dx=e^x\cos x+\int e^x\sin x\,dx.$$

Integriamo ancora per parti il secondo integrale:

$$\int e^x\sin x\,dx=e^x\sin x-\int e^x\cos x\,dx=e^x\sin x-I.$$

Sostituendo:

$$I=e^x\cos x+e^x\sin x-I=e^x(\cos x+\sin x)-I.$$

Ricaviamo $I$ portando $I$ a primo membro:

$$2I=e^x(\cos x+\sin x)\quad\Rightarrow\quad I=\frac{1}{2}\,e^x(\cos x+\sin x)+C.$$

## b) Calcolo dell'integrale definito

Applichiamo il teorema fondamentale del calcolo integrale usando la primitiva trovata:

$$\int_0^\pi e^x\cos x\,dx=\left[\frac{1}{2}\,e^x(\cos x+\sin x)\right]_0^\pi.$$

Valutiamo agli estremi. Per $x=\pi$, essendo $\cos\pi=-1$ e $\sin\pi=0$:

$$\frac{1}{2}\,e^\pi(\cos\pi+\sin\pi)=\frac{1}{2}\,e^\pi(-1+0)=-\frac{1}{2}\,e^\pi.$$

Per $x=0$, essendo $\cos 0=1$ e $\sin 0=0$:

$$\frac{1}{2}\,e^0(\cos 0+\sin 0)=\frac{1}{2}(1+0)=\frac{1}{2}.$$

Pertanto

$$\int_0^\pi e^x\cos x\,dx=-\frac{1}{2}\,e^\pi-\frac{1}{2}=-\frac{1}{2}\left(e^\pi+1\right).$$

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
