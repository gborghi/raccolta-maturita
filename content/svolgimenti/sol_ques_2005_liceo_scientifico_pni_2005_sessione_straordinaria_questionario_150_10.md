

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_10|2005 PNI Straordinaria — Questionario — Quesito 10]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Nelle ultime $10$ estrazioni non è uscito il $47$ sulla Ruota di Napoli. Qual è la probabilità che esso non esca neppure nelle prossime $10$ estrazioni ed esca invece nell'$11$-esima?

## Impostazione

In ogni estrazione del Lotto vengono estratti $5$ numeri, senza ripetizione, dall'insieme dei numeri naturali da $1$ a $90$. La probabilità che un fissato numero (il $47$) **esca** in una singola estrazione è quindi

$$
p = \frac{5}{90} = \frac{1}{18},
$$

mentre la probabilità che **non esca** è

$$
q = 1 - p = \frac{85}{90} = \frac{17}{18}.
$$

Le estrazioni sono tra loro indipendenti: l'esito di un'estrazione non influisce su quello delle successive. In particolare, il fatto che nelle ultime $10$ estrazioni il $47$ non sia uscito è del tutto irrilevante ai fini del calcolo (non condiziona le estrazioni future).

## Calcolo della probabilità

L'evento richiesto si realizza quando:

- il $47$ **non esce** in ciascuna delle prossime $10$ estrazioni, e
- il $47$ **esce** nell'$11$-esima estrazione.

Trattandosi di eventi indipendenti, la probabilità dell'evento composto è il prodotto delle singole probabilità:

$$
P = \underbrace{\left(\frac{85}{90}\right)^{10}}_{\text{10 volte non esce}} \cdot \underbrace{\frac{5}{90}}_{\text{esce l'undicesima volta}} = \left(\frac{17}{18}\right)^{10}\cdot\frac{1}{18}.
$$

Numericamente:

$$
P = \left(\frac{17}{18}\right)^{10}\cdot\frac{1}{18} \approx 0{,}5646 \cdot 0{,}05556 \approx 0{,}0314,
$$

cioè circa il $3{,}1\%$.

## Conclusione

La probabilità cercata è

$$
P = \left(\frac{85}{90}\right)^{10}\cdot\frac{5}{90} \approx 0{,}0314 \approx 3{,}1\%.
$$

*Fonte:* [📄 PDF p.158](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
