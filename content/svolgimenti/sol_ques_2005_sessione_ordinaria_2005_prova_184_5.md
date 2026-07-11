

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_5|2005 Ordinaria PNI — Prova — Quesito 5]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Come si definisce e qual è l'importanza del numero $e$ di Nepero? Si illustri inoltre una procedura che consenta di calcolarlo con la precisione voluta.

## Definizione

Il numero $e$ si può introdurre come limite della successione
$$a_n = \left(1 + \frac{1}{n}\right)^n .$$
Si dimostra che tale successione è **monotòna crescente** e **limitata superiormente** (ad esempio da $3$): per il teorema di monotonia essa è quindi convergente, e il suo limite si definisce come numero $e$ di Nepero:
$$e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n \approx 2{,}718281828 .$$

In modo equivalente, e più comodo per il calcolo numerico, $e$ è la somma della serie
$$e = \sum_{k=0}^{\infty} \frac{1}{k!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \cdots$$

Si tratta di un numero **irrazionale** (anzi trascendente): la sua rappresentazione decimale è illimitata e non periodica.

## Importanza

Il numero $e$ è la **base dei logaritmi naturali** $\ln x = \log_e x$ e occupa un ruolo centrale in tutta l'analisi. La ragione profonda è la seguente proprietà di derivazione:
$$\frac{d}{dx}\,e^x = e^x , \qquad \frac{d}{dx}\,\ln x = \frac{1}{x}.$$
La funzione esponenziale $f(x) = e^x$ è, a meno di una costante moltiplicativa, l'**unica funzione uguale alla propria derivata**; questa è la caratteristica che rende $e$ la base "naturale" per l'esponenziale e per il logaritmo. Di conseguenza $e$ compare in modo essenziale in tutti i fenomeni di crescita e decadimento esponenziale (interesse composto continuo, decadimento radioattivo, dinamica di popolazioni), nella risoluzione delle equazioni differenziali e in innumerevoli sviluppi in serie.

## Calcolo con la precisione voluta

La definizione tramite il limite $\left(1+\frac{1}{n}\right)^n$ converge molto lentamente e non è adatta al calcolo. Conviene invece usare la **serie**, arrestandola alla somma parziale
$$S_n = \sum_{k=0}^{n} \frac{1}{k!}, \qquad e = S_n + R_n .$$

Il resto $R_n$ si maggiora osservando che, per $k > n$, ogni termine è più piccolo del corrispondente termine di una progressione geometrica di ragione $\frac{1}{n+1}$:
$$R_n = \sum_{k=n+1}^{\infty}\frac{1}{k!} < \frac{1}{(n+1)!}\left(1 + \frac{1}{n+1} + \frac{1}{(n+1)^2} + \cdots\right) = \frac{1}{(n+1)!}\cdot\frac{1}{1-\frac{1}{n+1}} = \frac{1}{n\cdot n!}.$$

Si ottiene così la stima dell'errore
$$0 < e - S_n < \frac{1}{n \cdot n!} .$$

Per calcolare $e$ con un errore inferiore a un $\varepsilon > 0$ prefissato basta dunque scegliere $n$ in modo che
$$\frac{1}{n \cdot n!} < \varepsilon .$$

Ad esempio, con $n = 10$ si ha $n\cdot n! = 10\cdot 10! = 36\,288\,000$, quindi l'errore è minore di $3\cdot 10^{-8}$: la somma parziale $S_{10}$ fornisce già $e$ con sette cifre decimali esatte. Le prime somme parziali mostrano la rapidità della convergenza:
$$S_2 = 2{,}5,\quad S_4 \approx 2{,}70833,\quad S_6 \approx 2{,}718056,\quad S_8 \approx 2{,}7182788,\quad \ldots \longrightarrow e = 2{,}718281828\ldots$$

Aumentando $n$ si ottiene $e$ con la precisione voluta, e la maggiorazione $\frac{1}{n\cdot n!}$ garantisce a priori il numero di cifre decimali esatte.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
