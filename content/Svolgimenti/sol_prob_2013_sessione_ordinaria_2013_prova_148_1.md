---
title: 2013 Ordinaria PNI — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_sessione_ordinaria_2013_prova_148_1
of_item: prob_2013_sessione_ordinaria_2013_prova_148_1
prova_id: prova_2013_sessione_ordinaria_2013_prova_148
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_sessione_ordinaria_2013_prova_148_1|2013 Ordinaria PNI — Prova — Problema 1]] · **Prova:** [[Prove/2013_sessione_ordinaria_2013_prova_148|2013 Ordinaria PNI — Prova]]

La funzione $f(x)$ è definita e derivabile (insieme a $f'$ e $f''$) su $[0,+\infty)$. Dai grafici Γ (di $f$) e Λ (di $f''$) si sa che:
- il punto di flesso di Γ ha coordinate $(2;\,4)$;
- la tangente a Γ nel flesso passa per l'origine $(0;0)$;
- $y = 8$ è asintoto orizzontale di Γ, cioè $\lim_{x\to+\infty}f(x)=8$;
- $y = 0$ è asintoto orizzontale di Λ, cioè $\lim_{x\to+\infty}f''(x)=0$.

### Punto 1 — massimo di $f'(x)$

Il flesso di $\Gamma$ in $x=2$ implica $f''(2)=0$. Dal grafico Λ, $f''(x)>0$ per $x<2$ e $f''(x)<0$ per $x>2$, quindi $f'$ è crescente su $[0,2)$ e decrescente su $(2,+\infty)$: $f'$ ha un **massimo** in $x=2$.

La tangente nel flesso passa per $(2,4)$ e per $(0,0)$, quindi ha pendenza

$$m = \frac{4-0}{2-0} = 2.$$

Poiché la pendenza della tangente nel flesso è $f'(2)$, si ha $f'(2)=2$. Il massimo di $f'$ è nel punto $(2;\,2)$.

**Andamento di $f'(x)$:** dalla disuguaglianza $f''(x)\le f'(x)\le f(x)$ per ogni $x$ nel dominio, $f'$ è sempre compresa tra $f''$ (che tende a $0$) e $f$ (che tende a $8$). Possibile andamento: $f'$ cresce da $f'(0)$ fino al massimo $f'(2)=2$, poi decresce tendendo a $0$ per $x\to+\infty$, restando sempre nell'intervallo $[f''(x),\,f(x)]$.

### Punto 2 — modello di crescita della popolazione

Se $f(x)$ modella la crescita di una popolazione:

- L'**asintoto orizzontale** $y=8$ indica che la popolazione tende a un valore limite (capacità portante), senza crescere indefinitamente.
- Il **punto di flesso** in $x=2$ è il momento in cui la velocità di crescita $f'(x)$ è massima: prima del flesso la crescita accelera, dopo rallenta.
- Il grafico Λ con asintoto $y=0$ conferma che la variazione del tasso si attenua progressivamente.

Questo schema corrisponde al classico **modello logistico** (curva a sigmoide).

### Punto 3 — determinazione di $a$ e $b$

Si suppone $f(x)=\dfrac{a}{1+e^{-bx}}$.

**Condizione sull'asintoto:** $\displaystyle\lim_{x\to+\infty}f(x)=a=8$, quindi $\boxed{a=8}$.

**Condizione sul flesso:** il flesso della logistica ha valore $f(x_f)=a/2=4$; il dato $f(2)=4$ è coerente. La tangente nel flesso $(2,4)$ passa per l'origine (pendenza $4/2=2$) e $f'(x_f)=ab/4$:

$$\frac{8b}{4}=2b=2 \implies b=2.$$

Dunque $\boxed{a=8,\quad b=2}$.

### Punto 4 — area tra Λ e l'asse $x$ su $[0,2]$

Con $f(x)=\dfrac{8}{1+e^{-2x}}$:

$$f'(x) = \frac{16e^{-2x}}{(1+e^{-2x})^2}, \qquad f''(x) = \frac{32e^{-2x}(e^{-2x}-1)}{(1+e^{-2x})^3}.$$

Su $(0,2]$: $f''(x)<0$ (Λ è sotto l'asse $x$). Applicando il teorema fondamentale del calcolo integrale:

$$A = -\bigl[f'(x)\bigr]_0^2 = f'(0)-f'(2) = 4 - \frac{16e^{-4}}{(1+e^{-4})^2} \approx 3{,}72.$$

---

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
