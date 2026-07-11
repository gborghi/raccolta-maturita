

**Problema:** [[Problemi/prob_2004_liceo_scientifico_pni_2004_sessione_straordinaria_problema2_131_1|2004 PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_problema2_131|2004 PNI Straordinaria — Problema 2]]

Si considerino le successioni di termini generali
$$a_n=\sum_{i,k=1}^{n} ik,\qquad b_n=\sum_{j=1}^{n} j^2,\qquad c_n=\sum_{\substack{i,k=1\\ k\ge i}}^{n} ik.$$

## a)

**La successione $a_n$.** La somma doppia si fattorizza, perché gli indici $i$ e $k$ variano in modo indipendente:
$$a_n=\sum_{i=1}^{n} i\cdot\sum_{k=1}^{n} k=\left(\frac{n(n+1)}{2}\right)^{2}=\frac{n^{2}(n+1)^{2}}{4}.$$

**La successione $b_n$.** È la somma dei quadrati dei primi $n$ interi, la cui formula classica è
$$b_n=\sum_{j=1}^{n} j^{2}=\frac{n(n+1)(2n+1)}{6}.$$

**La successione $c_n$.** La somma è ristretta alle coppie con $k\ge i$. Conviene osservare che la somma su *tutte* le coppie, cioè $a_n$, si decompone nella somma sulle coppie con $k>i$, in quella sulle coppie con $k<i$ (uguale alla precedente per simmetria, dato che $ik=ki$) e in quella sulle coppie con $k=i$, che vale $\sum_{i=1}^{n} i^2=b_n$. Pertanto
$$a_n=2\,(c_n-b_n)+b_n \;\Rightarrow\; c_n=\frac{a_n+b_n}{2}.$$
Sostituendo le espressioni trovate:
$$c_n=\frac{\dfrac{n^{2}(n+1)^{2}}{4}+\dfrac{n(n+1)(2n+1)}{6}}{2}=\frac{n(n+1)\bigl[3n(n+1)+2(2n+1)\bigr]}{24}=\frac{n(n+1)(3n^{2}+7n+2)}{24}.$$
Fattorizzando il trinomio $3n^{2}+7n+2=(n+2)(3n+1)$ si ottiene la formula richiesta:
$$c_n=\frac{n(n+1)(n+2)(3n+1)}{24}.$$

## b)

Si cerca il più grande $n$ tale che
$$a_n=\frac{n^{2}(n+1)^{2}}{4}\le 100\,000,\qquad\text{ossia}\qquad n^{2}(n+1)^{2}\le 400\,000.$$
Estraendo la radice (entrambi i membri sono positivi):
$$n(n+1)\le\sqrt{400\,000}\approx 632{,}5.$$
Poiché $24\cdot 25=600\le 632{,}5$ mentre $25\cdot 26=650>632{,}5$, il più grande valore ammissibile è
$$\boxed{n=24}.$$

## c)

Dalla formula chiusa si ricava la relazione di ricorrenza calcolando la differenza tra due termini consecutivi:
$$c_{n+1}-c_n=\frac{(n+1)(n+2)(n+3)(3n+4)-n(n+1)(n+2)(3n+1)}{24}.$$
Raccogliendo $(n+1)(n+2)$ e semplificando la parentesi
$$(n+3)(3n+4)-n(3n+1)=\bigl(3n^{2}+13n+12\bigr)-\bigl(3n^{2}+n\bigr)=12(n+1),$$
si ottiene
$$c_{n+1}-c_n=\frac{(n+1)(n+2)\cdot 12(n+1)}{24}=\frac{(n+1)^{2}(n+2)}{2}.$$
La successione $c_n$ si definisce quindi per ricorsione come
$$\begin{cases} c_1=1,\\[2pt] c_{n+1}=c_n+\dfrac{1}{2}\,(n+1)^{2}(n+2). \end{cases}$$

## d)

Usando la definizione ricorsiva del punto c) si generano i primi $20$ termini della successione $c_n$, disponendoli poi in una matrice. Un breve programma (in Pascal, con una funzione ricorsiva che implementa $c_{n+1}=c_n+\tfrac{1}{2}(n+1)^{2}(n+2)$) percorre gli indici da $1$ a $20$, riempie una matrice $5\times 4$ e la stampa. I valori ottenuti sono:

$$\begin{array}{cccc} 1 & 7 & 25 & 65\\ 140 & 266 & 462 & 750\\ 1155 & 1705 & 2431 & 3367\\ 4550 & 6020 & 7820 & 9996\\ 12597 & 15675 & 19285 & 23485 \end{array}$$

*Fonte:* [📄 PDF p.131](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/successioni_serie_ed_eq_differenziali
