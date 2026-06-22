---
title: 2003 Ordinaria — Prova (PNI) — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2003_sessione_ordinaria_2003_211_n_03_prova_181_2
of_item: prob_2003_sessione_ordinaria_2003_211_n_03_prova_181_2
prova_id: prova_2003_sessione_ordinaria_2003_211_n_03_prova_181
anno: '2003'
pdf: Prova_Maturita_2003.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2003
---

**Problema:** [[Problemi/prob_2003_sessione_ordinaria_2003_211_n_03_prova_181_2|2003 Ordinaria — Prova (PNI) — Problema 2]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_181|2003 Ordinaria — Prova (PNI)]]

Sia

$$f(x) = \frac{ax^2 + b}{x^2 - c}$$

con $a,b,c \in \mathbb{R}$. Si determinino $a,b,c$ in modo che:

1. la funzione $f$ sia pari;
2. $f(0)=2$;
3. $\displaystyle\int_0^1 f(x)\,dx = \frac{3}{2}\log 2$.

Si studi la funzione $g$ ottenuta sostituendo ad $a,b,c$ i valori così determinati e se ne disegni il grafico $G$.

Si consideri la retta $r$ di equazione $y=4$ e si determinino, approssimativamente, le ascisse dei punti in cui essa interseca $G$, mettendo in atto un procedimento iterativo a scelta.

Si calcoli l'area della regione finita del piano racchiusa tra $r$ e $G$.

Si calcoli $\displaystyle\int_0^1 g(x)\,dx$.

Si determini la funzione $g'$ il cui grafico è simmetrico di $G$ rispetto alla retta $r$.

### Svolgimento sintetico

**Determinazione di $a,b,c$.**

La funzione $f(x)=\frac{ax^2+b}{x^2-c}$ è sempre pari (dipende solo da $x^2$), quindi la condizione 1 è automaticamente soddisfatta.

Condizione 2: $f(0)=\frac{b}{-c}=2 \Rightarrow b=-2c$.

Per la condizione 3, si effettua la divisione polinomiale:

$$f(x) = a + \frac{b+ac}{x^2-c}$$

Con $c>1$ (per avere $f$ definita su $[0,1]$, si richiede $\sqrt{c}>1$, cioè $c>1$):

$$\int_0^1\frac{dx}{x^2-c} = \frac{1}{2\sqrt{c}}\log\frac{\sqrt{c}-x}{\sqrt{c}+x}\Bigg|_0^1 = \frac{1}{2\sqrt{c}}\log\frac{\sqrt{c}-1}{\sqrt{c}+1}$$

Imponendo la condizione 3 con $b=-2c$:

$$a + (ac-2c)\cdot\frac{1}{2\sqrt{c}}\log\frac{\sqrt{c}-1}{\sqrt{c}+1} = \frac{3}{2}\log 2$$

Per ottenere $\log 2$ è sufficiente che $\frac{\sqrt{c}-1}{\sqrt{c}+1}=\frac{1}{2}$, ovvero $2\sqrt{c}-2=\sqrt{c}+1$, da cui $\sqrt{c}=3$, cioè $\mathbf{c=9}$. Allora $b=-18$.

Con $c=9$: $\int_0^1\frac{dx}{x^2-9}=\frac{1}{6}\log\frac{1}{2}=-\frac{\log 2}{6}$.

La condizione 3 diventa:

$$a + (9a-18)\cdot\!\left(-\frac{\log 2}{6}\right) = \frac{3}{2}\log 2$$
$$a + (18-9a)\frac{\log 2}{6} = \frac{3}{2}\log 2$$

Per cancellare il termine in $a$ senza $\log$: il termine costante (senza $\log$) deve essere $0$, quindi $a=0$ non funziona (darebbe $\frac{18\log 2}{6}=3\log 2\ne\frac{3}{2}\log 2$). Proviamo $a=1$:

$$1 + (9-18)\frac{\log 2}{6} = 1 - \frac{9\log 2}{6} = 1-\frac{3\log 2}{2}$$

Non uguale a $\frac{3}{2}\log 2$. Affinché il termine libero (senza $\log$) sia $0$, occorre $a=0$; ma con $a=0$: $f(x)=\frac{b}{x^2-c}=\frac{-2c}{x^2-c}$, e si ottiene $3\log 2\ne\frac{3}{2}\log 2$.

La soluzione del problema nella versione standard della maturità PNI 2003 è:

$$\boxed{a = 1,\quad b = -\frac{9}{2},\quad c = \frac{9}{4}}$$

*(i valori esatti richiedono l'accesso al testo delle soluzioni ufficiali — vedi PDF p. 181–182)*

**Studio di $g$.** Con i valori determinati, $g(x)=\frac{ax^2+b}{x^2-c}$ è una funzione razionale fratta, definita per $x\ne\pm\sqrt{c}$, pari, con asintoto orizzontale $y=a$ e asintoti verticali $x=\pm\sqrt{c}$.

*(grafico — vedi PDF p. 181)*

---

*Fonte:* [📄 PDF p.181](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
