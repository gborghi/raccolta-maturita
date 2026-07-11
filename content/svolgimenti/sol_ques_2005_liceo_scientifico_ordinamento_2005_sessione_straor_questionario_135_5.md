

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_5|2005 Ordinamento Straordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Determinare il più grande valore dell'intero $n$ per cui l'espressione

$$\sum_{k=0}^{n} 3^k$$

non supera $10000$.

## Somma della progressione geometrica

La sommatoria è la somma dei primi $n+1$ termini di una progressione geometrica di primo termine $a_1 = 1$ e ragione $q = 3$:

$$\sum_{k=0}^{n} 3^k = 1 + 3 + 3^2 + 3^3 + \cdots + 3^n.$$

Ricordando la formula della somma parziale di una progressione geometrica di ragione $q \ne 1$,

$$\sum_{k=0}^{n} a_1\, q^k = a_1 \cdot \frac{q^{\,n+1}-1}{q-1},$$

con $a_1 = 1$ e $q = 3$ si ottiene

$$\sum_{k=0}^{n} 3^k = \frac{3^{\,n+1}-1}{3-1} = \frac{3^{\,n+1}-1}{2}.$$

## Impostazione e risoluzione della disequazione

L'espressione non supera $10000$ quando

$$\frac{3^{\,n+1}-1}{2} \le 10000 \;\Rightarrow\; 3^{\,n+1}-1 \le 20000 \;\Rightarrow\; 3^{\,n+1} \le 20001.$$

Passando ai logaritmi naturali (funzione crescente, quindi il verso si conserva):

$$(n+1)\ln 3 \le \ln 20001 \;\Rightarrow\; n+1 \le \frac{\ln 20001}{\ln 3} \cong 9{,}01 \;\Rightarrow\; n \le 8{,}01.$$

Poiché $n$ deve essere intero, si ha $n \le 8$.

## Conclusione e verifica

Il più grande valore ammissibile è $n = 8$. In effetti:

$$\sum_{k=0}^{8} 3^k = \frac{3^{9}-1}{2} = \frac{19683-1}{2} = 9841 \le 10000,$$

mentre per $n = 9$

$$\sum_{k=0}^{9} 3^k = \frac{3^{10}-1}{2} = \frac{59049-1}{2} = 29524 > 10000.$$

Dunque il più grande valore dell'intero $n$ richiesto è $\boxed{n = 8}$.

*Fonte:* [📄 PDF p.138](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
