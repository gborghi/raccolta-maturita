

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_4|2005 Ordinaria — Prova — Quesito 4]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Scuole italiane all'estero (Americhe), 2005.

Le parti letterali dei termini dello sviluppo del binomio $(a+b)^7$, ordinati secondo le potenze decrescenti di $a$ e crescenti di $b$, sono rispettivamente

$$a^{7},\ a^{6}b,\ a^{5}b^{2},\ a^{4}b^{3},\ a^{3}b^{4},\ a^{2}b^{5},\ ab^{6},\ b^{7}.$$

Elencare i loro coefficienti e giustificare in modo esauriente la risposta.

## Soluzione

Per il **teorema del binomio (formula di Newton)**, la potenza $n$-esima di un binomio si sviluppa come

$$(a+b)^{n}=\sum_{k=0}^{n}\binom{n}{k}\,a^{\,n-k}\,b^{\,k},$$

dove il coefficiente del termine di posto $k$ (con $k=0,1,\dots,n$), la cui parte letterale è $a^{\,n-k}b^{\,k}$, è il coefficiente binomiale

$$\binom{n}{k}=\frac{n!}{k!\,(n-k)!}.$$

La giustificazione è di natura combinatoria: sviluppando il prodotto $(a+b)(a+b)\cdots(a+b)$ di $n$ fattori, ogni addendo si ottiene scegliendo in ciascun fattore o la $a$ o la $b$. Il termine con parte letterale $a^{\,n-k}b^{\,k}$ si forma ogni volta che si sceglie $b$ in esattamente $k$ degli $n$ fattori: il numero di modi di operare tale scelta è proprio $\binom{n}{k}$, cioè il numero delle combinazioni di $n$ oggetti presi $k$ alla volta. Da qui il valore del coefficiente.

Nel nostro caso $n=7$. I termini richiesti corrispondono a $k=0,1,\dots,7$, dunque i coefficienti sono:

$$
\begin{aligned}
\binom{7}{0}&=1, & \binom{7}{1}&=7, & \binom{7}{2}&=21, & \binom{7}{3}&=35,\\[4pt]
\binom{7}{4}&=35, & \binom{7}{5}&=21, & \binom{7}{6}&=7, & \binom{7}{7}&=1.
\end{aligned}
$$

Ad esempio $\binom{7}{2}=\dfrac{7!}{2!\,5!}=\dfrac{7\cdot 6}{2}=21$ e $\binom{7}{3}=\dfrac{7!}{3!\,4!}=\dfrac{7\cdot 6\cdot 5}{6}=35$.

Lo sviluppo completo è quindi

$$(a+b)^{7}=a^{7}+7a^{6}b+21a^{5}b^{2}+35a^{4}b^{3}+35a^{3}b^{4}+21a^{2}b^{5}+7ab^{6}+b^{7}.$$

Si osservi la **simmetria** dei coefficienti, $\binom{7}{k}=\binom{7}{7-k}$, coerente con l'identità $\binom{n}{k}=\binom{n}{n-k}$: la successione $1,7,21,35,35,21,7,1$ si legge allo stesso modo da sinistra e da destra.

I coefficienti si ottengono anche dalla settima riga del **triangolo di Tartaglia (di Pascal)**, in cui ogni numero è la somma dei due che gli stanno sopra, in forza della relazione di ricorrenza $\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="350.087" height="264.526" viewBox="-72 -72 262.566 198.395"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-2.312 2.9)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-19.384 25.662)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(14.76 25.662)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-36.456 48.425)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-2.312 48.425)">2</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(31.83 48.425)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-53.528 71.186)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-19.384 71.186)">3</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(14.76 71.186)">3</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(48.903 71.186)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-70.599 93.949)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-36.456 93.949)">4</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-2.312 93.949)">6</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(31.83 93.949)">4</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(65.974 93.949)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-87.67 116.711)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-53.528 116.711)">5</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-21.697 116.711)">10</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(12.447 116.711)">10</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(48.903 116.711)">5</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(83.046 116.711)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-104.743 139.473)">1</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-70.599 139.473)">6</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-38.768 139.473)">15</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(-4.625 139.473)">20</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(29.518 139.473)">15</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(65.974 139.473)">6</text><text x="59.013" y="-66.037" stroke="none" font-family="cmr9" font-size="9" transform="translate(100.118 139.473)">1</text><path fill="none" stroke="red" stroke-width=".8" d="M-71.87 100.68V85.916a4 4 0 0 1 4-4h253.766a4 4 0 0 1 4 4v14.762a4 4 0 0 1-4 4H-67.87a4 4 0 0 1-4-4Zm261.766-18.763"/><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(-121.814 162.236)">1</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(-87.67 162.236)">7</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(-55.84 162.236)">21</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(-21.697 162.236)">35</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(12.447 162.236)">35</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(46.59 162.236)">21</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(83.046 162.236)">7</text></g><g fill="red" stroke="red"><text x="59.013" y="-66.037" fill="red" stroke="none" font-family="cmr9" font-size="9" transform="translate(117.189 162.236)">1</text></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="9"><text x="59.013" y="-66.037" font-family="cmr9" transform="translate(-20.53 187.079)">riga</text><text x="77.533" y="-66.037" font-family="cmmi9" transform="translate(-20.53 187.079)">n</text><text x="85.683" y="-66.037" font-family="cmr9" transform="translate(-20.53 187.079)">=</text><text x="95.447" y="-66.037" font-family="cmr9" transform="translate(-20.53 187.079)">7</text></g></g></g></svg>
</figure>

**Coefficienti richiesti, nell'ordine:** $\ 1,\ 7,\ 21,\ 35,\ 35,\ 21,\ 7,\ 1.$

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
