

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_6|2004 PNI Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Determinare il più grande valore del parametro reale $m$ per cui il valore del seguente integrale non supera $24$:

$$\int_0^m \frac{2x-3m}{x-2m}\,dx \le 24 .$$

## Calcolo dell'integrale

Riscriviamo la funzione integranda separando la parte intera. Poiché

$$2x-3m = 2(x-2m) + m ,$$

si ha

$$\frac{2x-3m}{x-2m} = \frac{2(x-2m)+m}{x-2m} = 2 + \frac{m}{x-2m} .$$

Osserviamo che per $m>0$ l'unico punto di discontinuità dell'integranda è $x=2m$, che è esterno all'intervallo di integrazione $[0,m]$ (infatti $2m>m$): l'integrale è quindi ben definito. Una primitiva è

$$\int \left( 2 + \frac{m}{x-2m}\right) dx = 2x + m\,\ln|x-2m| + K .$$

## Valutazione tra gli estremi

Calcoliamo l'integrale definito tra $0$ e $m$:

$$\int_0^m \frac{2x-3m}{x-2m}\,dx = \Big[\, 2x + m\,\ln|x-2m| \,\Big]_0^{\,m} .$$

Nell'estremo superiore $x=m$:

$$2m + m\,\ln|m-2m| = 2m + m\,\ln|{-m}| = 2m + m\,\ln|m| .$$

Nell'estremo inferiore $x=0$:

$$0 + m\,\ln|0-2m| = m\,\ln|2m| = m\big(\ln 2 + \ln|m|\big) .$$

Sottraendo:

$$\int_0^m \frac{2x-3m}{x-2m}\,dx = 2m + m\,\ln|m| - m\,\ln 2 - m\,\ln|m| = 2m - m\,\ln 2 = m\,(2-\ln 2) .$$

## Determinazione del parametro

La condizione richiesta diventa

$$m\,(2-\ln 2) \le 24 .$$

Poiché $2-\ln 2 > 0$, possiamo dividere conservando il verso della disuguaglianza:

$$m \le \frac{24}{2-\ln 2} .$$

Il valore dell'integrale è una funzione crescente di $m$ (il coefficiente $2-\ln 2$ è positivo), quindi il più grande valore del parametro per cui l'integrale non supera $24$ è

$$m = \frac{24}{2-\ln 2} \approx 18{,}36 .$$

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
