

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_2000_problema3_18_1|2000 Suppletiva — Problema 3 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_2000_problema3_18|2000 Suppletiva — Problema 3]]

Si consideri la successione di termine generale $a_n=\dfrac{f(n)}{3^n}$, dove

$$f(n)=\binom{n}{0}+\binom{n}{1}+\binom{n}{2}+\cdots+\binom{n}{n}.$$

## a)

Dimostriamo che $f(n)=2^n$. Basta applicare lo **sviluppo del binomio di Newton** con $a=1$ e $b=1$:

$$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}\,a^{\,n-k}b^{\,k}.$$

Ponendo $a=b=1$ si ottiene

$$2^n=(1+1)^n=\sum_{k=0}^{n}\binom{n}{k}\,1^{\,n-k}\,1^{\,k}=\sum_{k=0}^{n}\binom{n}{k}=f(n).$$

Dunque $f(n)=2^n$.

## b)

Determiniamo il più piccolo valore di $n$ per cui $a_n<10^{-10}$. Poiché $f(n)=2^n$,

$$a_n=\frac{f(n)}{3^n}=\frac{2^n}{3^n}=\left(\frac{2}{3}\right)^{n}.$$

Imponiamo $\left(\frac{2}{3}\right)^{n}<10^{-10}$ e passiamo ai logaritmi in base $10$:

$$n\log_{10}\frac{2}{3}<-10 \quad\Rightarrow\quad n\left(\log_{10}3-\log_{10}2\right)>10,$$

dove la disuguaglianza cambia verso perché $\log_{10}\frac{2}{3}<0$. Quindi

$$n>\frac{10}{\log_{10}3-\log_{10}2}\approx\frac{10}{0{,}17609}\approx 56{,}8.$$

Verifichiamo agli estremi interi:

$$a_{56}=\left(\frac{2}{3}\right)^{56}\approx 1{,}4\cdot 10^{-10}>10^{-10},\qquad a_{57}=\left(\frac{2}{3}\right)^{57}\approx 9{,}2\cdot 10^{-11}<10^{-10}.$$

Il più piccolo valore cercato è dunque $n=57$.

## c)

**Proprietà di simmetria.** Dalla definizione di coefficiente binomiale segue

$$\binom{n}{k}=\frac{n!}{k!\,(n-k)!}=\frac{n!}{(n-k)!\,k!}=\binom{n}{n-k}.$$

**Caso $n$ dispari.** La somma $f(n)$ ha $n+1$ addendi, cioè un numero **pari** di termini, che si accoppiano a due a due tramite la simmetria:

$$\binom{n}{0}=\binom{n}{n},\quad \binom{n}{1}=\binom{n}{n-1},\quad\dots,\quad \binom{n}{\frac{n-1}{2}}=\binom{n}{\frac{n+1}{2}}.$$

I primi $\frac{n+1}{2}$ termini eguagliano dunque, uno per uno, gli ultimi $\frac{n+1}{2}$, e perciò

$$f(n)=2\left[\binom{n}{0}+\binom{n}{1}+\cdots+\binom{n}{\frac{n-1}{2}}\right].$$

Ad esempio, per $n=3$:

$$f(3)=\binom{3}{0}+\binom{3}{1}+\binom{3}{2}+\binom{3}{3}=2^3=8,\qquad 2\left[\binom{3}{0}+\binom{3}{1}\right]=2(1+3)=8.$$

**Caso $n$ pari.** La somma ha $n+1$ addendi, cioè un numero **dispari** di termini: il termine centrale $\binom{n}{n/2}$ resta isolato, mentre gli altri si accoppiano a due a due. Quindi

$$f(n)=2\left[\binom{n}{0}+\binom{n}{1}+\cdots+\binom{n}{\frac{n}{2}-1}\right]+\binom{n}{\frac{n}{2}}
=2\left[\binom{n}{0}+\cdots+\binom{n}{\frac{n}{2}-1}+\frac{1}{2}\binom{n}{\frac{n}{2}}\right].$$

Ad esempio, per $n=4$:

$$f(4)=\binom{4}{0}+\binom{4}{1}+\binom{4}{2}+\binom{4}{3}+\binom{4}{4}=2^4=16,$$

$$2\left[\binom{4}{0}+\binom{4}{1}+\frac{1}{2}\binom{4}{2}\right]=2\,[\,1+4+3\,]=16.$$

## d)

Poiché $0<\frac{2}{3}<1$,

$$\lim_{n\to\infty}a_n=\lim_{n\to\infty}\left(\frac{2}{3}\right)^{n}=0.$$

**Verifica con la definizione.** Dobbiamo mostrare che

$$\forall\,\varepsilon>0\ \ \exists\,n_0=n_0(\varepsilon)\in\mathbb{N}:\quad n\ge n_0\ \Rightarrow\ |a_n-0|<\varepsilon.$$

Ora

$$|a_n|=\left(\frac{2}{3}\right)^{n}<\varepsilon \iff n\ln\frac{2}{3}<\ln\varepsilon \iff n>\frac{\ln\varepsilon}{\ln(2/3)},$$

dove la disuguaglianza si inverte perché $\ln\frac{2}{3}<0$. Basta quindi prendere

$$n_0=\left\lfloor\frac{\ln\varepsilon}{\ln(2/3)}\right\rfloor+1$$

e la definizione è soddisfatta. Dunque $\displaystyle\lim_{n\to\infty}a_n=0$.

## e)

La scrittura $\displaystyle\lim_{n\to 10^{10}}a_n$ **non ha senso**. Una successione è una funzione definita su $\mathbb{R}$-... anzi, su $\mathbb{N}$: il suo dominio è fatto di soli punti isolati. Il limite di una successione è definito unicamente per $n\to+\infty$, perché $+\infty$ è l'unico "punto di accumulazione" ammissibile per $\mathbb{N}$. Il valore $10^{10}$ è un punto isolato del dominio (non è punto di accumulazione), quindi in esso non si può calcolare alcun limite: la successione assume semplicemente il valore

$$a_{10^{10}}=\left(\frac{2}{3}\right)^{10^{10}}$$

in quel punto. Perciò $\displaystyle\lim_{n\to 10^{10}}a_n$ non è definito.

*Fonte:* [📄 PDF p.18](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/analisi #cluster/successioni_serie_ed_eq_differenziali
