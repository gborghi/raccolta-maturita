---
title: 1932 tutti_temi 1932 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1932_tutti_temi_1
of_item: prob_1932_tutti_temi_1
prova_id: prova_1932_tutti_temi
anno: '1932'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1932
---

**Problema:** [[Problemi/prob_1932_tutti_temi_1|1932 tutti_temi 1932 — Problema 1]] · **Prova:** [[Prove/1932_tutti_temi|1932 Tema di maturità]]

**Impostazione.** Poniamo $O$ nell'origine, $OX$ sull'asse delle ascisse e $OY$ su quello delle ordinate. Per un punto interno $P=(X,Y)$ con $X,Y>0$, la distanza di~$P$ da $OX$ è l'ordinata~$Y$ e la distanza da $OY$ è l'ascissa~$X$. Le condizioni sono
$$
OP=a:\quad X^2+Y^2=a^2,\qquad\qquad \frac{Y}{3}+\frac{X}{4}=m .
$$
**Risoluzione trigonometrica.** Conviene porre $P=(a\cos\theta,\,a\sin\theta)$ con $\theta\in\bigl(0,\tfrac\pi2\bigr)$, cos\`\i\ la prima condizione è automaticamente soddisfatta. La seconda diventa
$$
\frac{a\sin\theta}{3}+\frac{a\cos\theta}{4}=m \Longrightarrow 4\sin\theta+3\cos\theta=\frac{12m}{a}.
$$
Poiché $4\sin\theta+3\cos\theta=5\sin(\theta+\psi)$ con $\tan\psi=\dfrac34$, si ha
$$
\boxed{ \sin(\theta+\psi)=\frac{12m}{5a} },\qquad \psi=\arctan\frac34 .
$$
**Risoluzione algebrica equivalente.** Eliminando $Y=3\bigl(m-\tfrac X4\bigr)$ dalla circonferenza si ottiene
$$
25X^2-72mX+16(9m^2-a^2)=0 \Longrightarrow X=\frac{36m\pm 4\sqrt{25a^2-144m^2}}{25}.
$$
**Discussione.** Le soluzioni sono reali se $\dfrac{12m}{5a}\le 1$, cioè
$$
m\le\frac{5a}{12}\qquad(\text{equivalentemente }25a^2\ge 144m^2).
$$
Per $m<\tfrac{5a}{12}$ l'equazione $\sin(\theta+\psi)=\tfrac{12m}{5a}$ fornisce in generale due valori di~$\theta$ in $\bigl(0,\tfrac\pi2\bigr)$, da accettare solo se danno $X,Y>0$ (punto interno all'angolo); per $m=\tfrac{5a}{12}$ si ha l'unica soluzione $\theta+\psi=\tfrac\pi2$, cioè $\tan\theta=\tfrac43$. La costruzione geometrica segue dalla retta $\tfrac X4+\tfrac Y3=m$ intersecata con la circonferenza di raggio~$a$ centrata in~$O$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.79](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
