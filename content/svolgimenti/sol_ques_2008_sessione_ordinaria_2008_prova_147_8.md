

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_8|2008 Ordinaria — Prova (PNI Informatica) — Quesito 8]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Sia $f(x)=\pi^x-x^\pi$. Si determini il dominio di $f$ e si studi il segno della derivata prima e della derivata seconda nel punto $x=\pi$.

## a) Dominio

La funzione è differenza di due termini:

- $\pi^x$ è una funzione esponenziale di base $\pi>0$, definita per ogni $x\in\mathbb{R}$;
- $x^\pi$ è una potenza con esponente irrazionale $\pi$; poiché $x^\pi=e^{\pi\ln x}$, essa richiede una base non negativa. Ponendo $0^\pi=0$ per continuità, il termine è definito per $x\ge 0$.

L'intersezione dei due insiemi di definizione dà quindi

$$D=[0,+\infty).$$

Il punto $x=\pi$ è interno al dominio, dunque le derivate hanno senso e si possono calcolare con le regole ordinarie (per $x>0$ si usa $\dfrac{d}{dx}x^\pi=\pi\,x^{\pi-1}$).

## b) Derivata prima in $x=\pi$

Derivando termine a termine, per $x>0$:

$$f'(x)=\pi^x\ln\pi-\pi\,x^{\pi-1}.$$

Valutando in $x=\pi$ e usando $\pi\cdot\pi^{\pi-1}=\pi^\pi$:

$$f'(\pi)=\pi^\pi\ln\pi-\pi\cdot\pi^{\pi-1}=\pi^\pi\ln\pi-\pi^\pi=\pi^\pi\left(\ln\pi-1\right).$$

Il fattore $\pi^\pi$ è positivo. Per il segno resta da valutare $\ln\pi-1$: poiché $\pi\approx 3{,}14>e$, si ha $\ln\pi>\ln e=1$, quindi $\ln\pi-1>0$. Ne segue

$$f'(\pi)=\pi^\pi\left(\ln\pi-1\right)>0,$$

cioè la **derivata prima è positiva** in $x=\pi$ (numericamente $f'(\pi)\approx 5{,}3$).

## c) Derivata seconda in $x=\pi$

Derivando ancora, per $x>0$:

$$f''(x)=\pi^x(\ln\pi)^2-\pi(\pi-1)\,x^{\pi-2}.$$

In $x=\pi$, osservando che $\pi(\pi-1)\pi^{\pi-2}=(\pi-1)\pi^{\pi-1}$:

$$f''(\pi)=\pi^\pi(\ln\pi)^2-(\pi-1)\pi^{\pi-1}=\pi^{\pi-1}\left[\pi(\ln\pi)^2-(\pi-1)\right].$$

Il fattore $\pi^{\pi-1}$ è positivo; per la parentesi quadra, essendo $\ln\pi\approx 1{,}145$ e quindi $(\ln\pi)^2\approx 1{,}310$:

$$\pi(\ln\pi)^2-(\pi-1)\approx 3{,}142\cdot 1{,}310-2{,}142\approx 4{,}117-2{,}142\approx 1{,}975>0.$$

Pertanto

$$f''(\pi)=\pi^{\pi-1}\left[\pi(\ln\pi)^2-(\pi-1)\right]>0,$$

cioè la **derivata seconda è positiva** in $x=\pi$ (numericamente $f''(\pi)\approx 22{,}9$).

## Conclusione

Il dominio è $D=[0,+\infty)$. Nel punto $x=\pi$ entrambe le derivate sono positive:

$$f'(\pi)=\pi^\pi(\ln\pi-1)>0,\qquad f''(\pi)=\pi^{\pi-1}\left[\pi(\ln\pi)^2-(\pi-1)\right]>0.$$

Localmente in $x=\pi$ la funzione è quindi crescente e convexa. Si può inoltre notare che $f(\pi)=\pi^\pi-\pi^\pi=0$: il punto $x=\pi$ è uno zero di $f$, che vi attraversa l'asse delle ascisse con pendenza positiva.

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/geometria #cluster/geometria
