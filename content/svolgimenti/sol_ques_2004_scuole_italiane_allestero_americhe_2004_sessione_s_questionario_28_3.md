

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28_3|2004 Estero Americhe Suppletiva — Questionario — Quesito 3]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28|2004 Estero Americhe Suppletiva — Questionario]]

Determinare un polinomio $P(x)$ tale che
$$P(0)=P(1)=0,\qquad P'(1)=1,\qquad \int_0^1 P(x)\,dx = 1.$$

## Impostazione

Le prime due condizioni $P(0)=0$ e $P(1)=0$ dicono che $x=0$ e $x=1$ sono radici di $P$. Cerchiamo dunque un polinomio della forma
$$P(x)=a\,x\,(x-1)(x-b),$$
con $a\neq 0$ e $b$ parametri da determinare mediante le due condizioni rimanenti.

## Condizione su $P'(1)$

Derivando il prodotto,
$$P'(x)=a(x-1)(x-b)+a\,x\,(x-b)+a\,x\,(x-1).$$

Valutando in $x=1$ i termini che contengono il fattore $(x-1)$ si annullano, quindi
$$P'(1)=a\cdot 1\cdot(1-b)=a(1-b).$$

Imponendo $P'(1)=1$ otteniamo la prima equazione:
$$a(1-b)=1.$$

## Condizione sull'integrale

Sviluppiamo il polinomio:
$$P(x)=a\big[x^3-(b+1)x^2+b\,x\big].$$

Integrando fra $0$ e $1$,
$$\int_0^1 P(x)\,dx = a\left[\frac{1}{4}-\frac{b+1}{3}+\frac{b}{2}\right]
= a\cdot\frac{3-4(b+1)+6b}{12}
= a\cdot\frac{2b-1}{12}.$$

Imponendo che l'integrale valga $1$ si ha la seconda equazione:
$$\frac{a(2b-1)}{12}=1.$$

## Risoluzione del sistema

Dalla prima equazione ricaviamo $a=\dfrac{1}{1-b}$ e sostituiamo nella seconda:
$$\frac{2b-1}{12(1-b)}=1 \;\Rightarrow\; 2b-1=12(1-b)=12-12b \;\Rightarrow\; 14b=13,$$
da cui
$$b=\frac{13}{14},\qquad a=\frac{1}{1-\frac{13}{14}}=14.$$

Il polinomio cercato è quindi
$$P(x)=14\,x\,(x-1)\!\left(x-\frac{13}{14}\right)=x\,(x-1)(14x-13),$$
ossia, in forma sviluppata,
$$\boxed{\,P(x)=14x^3-27x^2+13x\,}.$$

## Verifica

- $P(0)=0$ e $P(1)=1\cdot 0\cdot 1=0$, come richiesto.
- $P'(x)=42x^2-54x+13$, quindi $P'(1)=42-54+13=1$.
- $\displaystyle\int_0^1(14x^3-27x^2+13x)\,dx=\frac{14}{4}-\frac{27}{3}+\frac{13}{2}=\frac{7}{2}-9+\frac{13}{2}=1.$

Tutte e tre le condizioni sono soddisfatte.

*Fonte:* [📄 PDF p.28](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
