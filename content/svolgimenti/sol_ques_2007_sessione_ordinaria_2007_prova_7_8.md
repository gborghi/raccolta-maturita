

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_7_8|2007 Ordinaria — Prova — Quesito 8]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Scuole italiane all'estero (Americhe) 2007 — Quesito 8.

Si deve mostrare che

$$\int_0^1 \arccos x\,dx-\frac{1}{2}\int_0^1\big(1-2\arcsin x\big)\,dx=\frac{\pi-1}{2}.$$

## Svolgimento

Conviene ricondurre i due integrali a un unico integrale e sfruttare l'identità $\arccos x+\arcsin x=\dfrac{\pi}{2}$ (giustificata più sotto).

Scriviamo il primo termine come $\dfrac{1}{2}\displaystyle\int_0^1 2\arccos x\,dx$ e raccogliamo:

$$
\int_0^1 \arccos x\,dx-\frac{1}{2}\int_0^1\big(1-2\arcsin x\big)\,dx
=\frac{1}{2}\int_0^1 2\arccos x\,dx-\frac{1}{2}\int_0^1\big(1-2\arcsin x\big)\,dx
$$

$$
=\frac{1}{2}\int_0^1\big(2\arccos x-1+2\arcsin x\big)\,dx
=\frac{1}{2}\int_0^1 2\big(\arccos x+\arcsin x\big)\,dx-\frac{1}{2}\int_0^1 dx.
$$

Cioè

$$
=\int_0^1\big(\arccos x+\arcsin x\big)\,dx-\frac{1}{2}\big[x\big]_0^1.
$$

Poiché $\arccos x+\arcsin x=\dfrac{\pi}{2}$ per ogni $x\in[-1,1]$, il primo integrale è immediato:

$$
=\int_0^1\frac{\pi}{2}\,dx-\frac{1}{2}
=\frac{\pi}{2}-\frac{1}{2}
=\frac{\pi-1}{2}.
$$

Dunque il valore dell'espressione è $\boxed{\dfrac{\pi-1}{2}}$.

## Giustificazione dell'identità $\arccos x+\arcsin x=\dfrac{\pi}{2}$

L'identità discende dal fatto che seno e coseno di due angoli complementari sono uguali. Posto $\arcsin x=z$, con $z\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$, si ha $\sin z=x$; ma

$$\sin z=\cos\!\left(\frac{\pi}{2}-z\right),$$

quindi $\cos\!\left(\dfrac{\pi}{2}-z\right)=x$. Dato che $\dfrac{\pi}{2}-z\in[0,\pi]$, applicando l'arcocoseno si ottiene $\dfrac{\pi}{2}-z=\arccos x$, cioè $\dfrac{\pi}{2}-\arcsin x=\arccos x$, ossia

$$\arccos x+\arcsin x=\frac{\pi}{2}.$$

## Verifica diretta

Lo stesso risultato si ottiene calcolando separatamente i due integrali. Integrando per parti,

$$\int \arccos x\,dx=x\arccos x-\sqrt{1-x^2},\qquad \int \arcsin x\,dx=x\arcsin x+\sqrt{1-x^2},$$

da cui

$$\int_0^1\arccos x\,dx=\big[x\arccos x-\sqrt{1-x^2}\big]_0^1=0-(-1)=1,$$

$$\int_0^1\arcsin x\,dx=\big[x\arcsin x+\sqrt{1-x^2}\big]_0^1=\frac{\pi}{2}-1.$$

Perciò $\displaystyle\int_0^1(1-2\arcsin x)\,dx=1-2\left(\frac{\pi}{2}-1\right)=3-\pi$ e

$$\int_0^1\arccos x\,dx-\frac{1}{2}\int_0^1(1-2\arcsin x)\,dx=1-\frac{3-\pi}{2}=\frac{\pi-1}{2},$$

in accordo con quanto trovato.

*Fonte:* [📄 PDF p.29](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
