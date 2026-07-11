

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_8|2004 PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Si lanciano due dadi regolari con le facce numerate da $1$ a $6$. Si ha un *successo* se in un lancio esce almeno un $5$. Si deve determinare il minimo numero $n$ di volte in cui ripetere l'esperimento per avere una probabilità almeno pari al $99\%$ di ottenere almeno un successo.

## Probabilità di successo in un singolo esperimento

Calcoliamo dapprima la probabilità $q$ dell'evento contrario, cioè che nel lancio dei due dadi **non** esca alcun $5$. Su ciascun dado le facce diverse da $5$ sono $5$ (i valori $1,2,3,4,6$), quindi i casi favorevoli all'evento contrario sono $5 \cdot 5 = 25$ sui $6 \cdot 6 = 36$ casi ugualmente possibili:

$$q = P(\text{nessun } 5) = \frac{25}{36}.$$

La probabilità di successo in un singolo esperimento è dunque

$$p = P(\text{almeno un } 5) = 1 - q = 1 - \frac{25}{36} = \frac{11}{36}.$$

## Numero minimo di esperimenti

Se l'esperimento viene ripetuto $n$ volte in modo indipendente, la probabilità di **non** ottenere alcun successo nelle $n$ prove è $q^{\,n} = \left(\dfrac{25}{36}\right)^{n}$. Di conseguenza la probabilità di ottenere almeno un successo è

$$1 - \left(\frac{25}{36}\right)^{n}.$$

Imponiamo che tale probabilità sia almeno del $99\%$:

$$1 - \left(\frac{25}{36}\right)^{n} \ge 0{,}99 \quad\Rightarrow\quad \left(\frac{25}{36}\right)^{n} \le 0{,}01.$$

Applichiamo il logaritmo naturale a entrambi i membri:

$$n \cdot \ln\!\left(\frac{25}{36}\right) \le \ln(0{,}01).$$

Poiché $\dfrac{25}{36} < 1$ si ha $\ln\!\left(\dfrac{25}{36}\right) < 0$; dividendo per questa quantità negativa il verso della disuguaglianza si inverte:

$$n \ge \frac{\ln(0{,}01)}{\ln\!\left(\frac{25}{36}\right)} \cong \frac{-4{,}6052}{-0{,}3646} \cong 12{,}63.$$

Dato che $n$ deve essere intero, il più piccolo valore che soddisfa la condizione è

$$n = 13.$$

## Conclusione

Il numero minimo di volte in cui bisogna ripetere l'esperimento per garantirsi una probabilità almeno pari al $99\%$ di ottenere almeno un successo è $n = 13$.

*Fonte:* [📄 PDF p.141](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
