

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78_1|2005 Europa Ordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78|2005 Europa Ordinaria — Questionario]]

Indicata con $S_n$ la somma di $n$ termini in progressione geometrica di primo termine $\frac{1}{2}$ e ragione $\frac{1}{2}$, si calcoli

$$\lim_{n\to\infty}\frac{S_n}{n}.$$

## Somma dei primi $n$ termini

Per una progressione geometrica di primo termine $a_1$ e ragione $q\neq 1$, la somma dei primi $n$ termini è

$$S_n = a_1\cdot\frac{1-q^n}{1-q}.$$

Nel nostro caso $a_1=\frac{1}{2}$ e $q=\frac{1}{2}$, quindi

$$S_n = \frac{1}{2}\cdot\frac{1-\left(\frac{1}{2}\right)^n}{1-\frac{1}{2}} = \frac{1}{2}\cdot\frac{1-\left(\frac{1}{2}\right)^n}{\frac{1}{2}} = 1-\left(\frac{1}{2}\right)^n.$$

## Calcolo del limite

Poiché $\left(\frac{1}{2}\right)^n\to 0$ per $n\to\infty$, si ha $S_n\to 1$. Il termine $S_n$ è dunque limitato (tende a $1$), mentre il denominatore $n$ diverge a $+\infty$. Pertanto

$$\lim_{n\to\infty}\frac{S_n}{n} = \lim_{n\to\infty}\frac{1-\left(\frac{1}{2}\right)^n}{n} = \frac{1}{+\infty} = 0.$$

Il limite richiesto vale quindi $0$.

*Fonte:* [📄 PDF p.78](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
