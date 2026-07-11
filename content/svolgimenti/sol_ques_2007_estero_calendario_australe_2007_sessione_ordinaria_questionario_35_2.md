

**Quesito:** [[Quesiti/ques_2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35_2|2007 Estero Australe Ordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35|2007 Estero Australe Ordinaria — Questionario]]

Quante cifre ha il numero $5^{59}$ nella sua rappresentazione decimale? Si motivi esaurientemente la risposta.

## Soluzione

Il numero di cifre di un intero positivo $n$ nella rappresentazione decimale si ottiene dal suo logaritmo in base $10$. Vale infatti la proprietà seguente: se $n$ ha $k$ cifre, allora

$$10^{\,k-1} \le n < 10^{\,k},$$

perché il più piccolo numero di $k$ cifre è $10^{k-1}$ e il più piccolo di $k+1$ cifre è $10^{k}$. Applicando il logaritmo decimale, che è crescente, si ottiene

$$k-1 \le \log_{10} n < k,$$

cioè la parte intera di $\log_{10} n$ è $k-1$. In altre parole, **il numero delle cifre è la parte intera del logaritmo decimale aumentata di $1$**:

$$k = \lfloor \log_{10} n \rfloor + 1.$$

Calcoliamo dunque il logaritmo decimale di $5^{59}$, sfruttando la proprietà $\log_{10}(a^b) = b\,\log_{10} a$:

$$\log_{10}\!\left(5^{59}\right) = 59 \cdot \log_{10} 5.$$

Poiché $\log_{10} 5 = \log_{10}\dfrac{10}{2} = 1 - \log_{10} 2 \cong 1 - 0{,}30103 = 0{,}69897$, si ha

$$59 \cdot \log_{10} 5 \cong 59 \cdot 0{,}69897 \cong 41{,}24.$$

La parte intera di $\log_{10}\!\left(5^{59}\right)$ è quindi $41$, e di conseguenza

$$k = 41 + 1 = 42.$$

Il numero $5^{59}$ ha pertanto **$42$ cifre** nella sua rappresentazione decimale.

*Fonte:* [📄 PDF p.36](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
