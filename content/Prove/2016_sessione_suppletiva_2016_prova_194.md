---
tipo: prova
prova_id: prova_2016_sessione_suppletiva_2016_prova_194
anno: '2016'
pdf: Prova_Maturita_2016.pdf
cluster: Studio di Funzione
tags:
  - maturita/prova
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2016
title: 2016 Suppletiva — Prova
---

Fonte: p.194 · [📄 Apri PDF](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)
**Cluster:** [[Clusters/Studio di Funzione|Studio di Funzione]]

## Problema 1

Sei l'amministratore di un condominio che ha deliberato di dotarsi di una sala per le riunioni condominiali, sfruttando uno spazio comune già disponibile, da coprire e attrezzare.

La superficie individuata è rappresentata in figura 1 *(figura nel PDF)*.

La superficie viene chiusa con pareti laterali alte $3{,}60$ metri e con un tetto piano e orizzontale. Uno dei condomini ti fa presente la necessità di prevedere un impianto di aerazione nella sala, in quanto la mancanza di un adeguato ricambio d'aria in locali chiusi può provocare una serie di disturbi fisici, a causa dell'accumulo di $CO_2$ (anidride carbonica o diossido di carbonio). Di norma si considera come valore limite della concentrazione di $CO_2$ lo $0{,}15\%$: su 1 milione di particelle d'aria il massimo numero di molecole di $CO_2$ deve essere dunque $1500$.

Nella scelta dell'impianto di aerazione un parametro fondamentale è la potenza in kilowatt, che dipende dal volume dell'ambiente in cui esso viene utilizzato.

La seguente scheda tecnica, fornita dal produttore, fa riferimento alle comuni esigenze di utilizzo:

| Metri cubi da aerare | Potenza richiesta (kilowatt) |
|---|---|
| 41 | 2 |
| 68 | 2,6 |
| 108 | 3,5 |
| 135 | 4,4 |
| 162 | 5,3 |
| 216 | 6,1 |
| 270 | 7,2 |

1. In base ai dati disponibili e alla scheda tecnica, stima la potenza in kilowatt necessaria, giustificando la tua scelta.

In occasione di una riunione di condominio, un rilevatore di $CO_2$ installato nella sala indica una concentrazione dello $0{,}3\%$; i condomini chiedono quindi di accendere l'impianto di aerazione, in modo che all'ora di inizio della riunione la concentrazione sia stata ridotta allo $0{,}15\%$. Il sistema di aerazione immette nella sala $20\ \frac{m^3}{minuto}$ di aria fresca contenente lo $0{,}1\%$ di $CO_2$.

2. Approssimando il volume della sala a $130\ m^3$, ricava l'equazione differenziale che descrive l'andamento della concentrazione $c(t)$ in funzione del tempo $t$ (espresso in minuti). Verifica inoltre che la funzione $c(t)=k\,e^{-\frac{2}{13}t}+h$ è una soluzione di tale equazione differenziale.

3. Determina i valori da assegnare alle costanti $k$ e $h$ in modo che la funzione $c(t)$ rappresenti l'andamento della concentrazione di $CO_2$ a partire dall'istante $t=0$ di accensione dell'aeratore. Stabilisci quindi quanto tempo prima dell'inizio della riunione esso deve essere acceso, per soddisfare la richiesta dei condomini.

4. L'impianto è in funzione da 10 minuti, quando i 50 partecipanti alla riunione accedono alla sala. Considerando che l'impianto rimane acceso anche durante la riunione e che un essere umano mediamente espira 8 litri/minuto di aria contenente il $4\%$ di $CO_2$ (fonte: OSHA, Occupational Safety and Health Administration), descrivi in termini qualitativi come cambierà l'andamento di $c(t)$ dopo l'ingresso dei condomini nella sala, giustificando la tua risposta.

**Topic:** [[Equazioni Differenziali]], [[Esponenziali e Logaritmi]], [[Statistica]], [[Topics/Studio di Funzione|Studio di Funzione]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni differenziali]], [[Statistica e analisi dati]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Interpretazione e formalizzazione del testo]], [[Problem solving (strategia risolutiva non immediata)]], [[Analisi e interpretazione di dati e probabilita]]
**Tipo funzione:** [[Esponenziale]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Problema 2

Fissato $k\in\mathbb{R}$, la funzione $g_k:\mathbb{R}\to\mathbb{R}$ è così definita: $g_k(x)=e^{-k\cdot x^2}$.

Si indica con $\Gamma_k$ il suo grafico, in un riferimento cartesiano $Oxy$.

1. Descrivi, a seconda delle possibili scelte di $k\in\mathbb{R}$, l'andamento della funzione $g_k$.

2. Determina per quali $k\in\mathbb{R}$ il grafico $\Gamma_k$ possiede punti di flesso e dimostra che, in tali casi, le ordinate dei punti di flesso non dipendono dal valore di $k$ e che le rette tangenti nei punti di flesso, qualunque sia $k$, passano tutte per il punto $\left(0,\ \frac{2}{\sqrt{e}}\right)$.

Assumi nel seguito $k>0$. Sia $S_k$ la regione di piano compresa tra l'asse $x$ e $\Gamma_k$.

3. Prova che esiste un unico rettangolo $\mathcal{R}_k$ di area massima, tra quelli inscritti in $S_k$ e aventi un lato sull'asse $x$, e che tale rettangolo ha tra i suoi vertici i punti di flesso di $\Gamma_k$. È possibile scegliere $k$ in modo che tale rettangolo $\mathcal{R}_k$ sia un quadrato?

4. Posto
$$G(t)=2\pi\int_{0}^{t} x\cdot e^{-x^2}\,dx,$$
determina il valore di
$$\lim_{t\to+\infty} G(t),$$
e interpreta il risultato in termini geometrici.

**Topic:** [[Esponenziali e Logaritmi]], [[Topics/Studio di Funzione|Studio di Funzione]], [[Massimi e Minimi]], [[Calcolo Integrale]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Integrazione (calcolo di integrali)]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]]
**Competenze:** [[Problem solving (strategia risolutiva non immediata)]], [[Dimostrazione e argomentazione rigorosa]], [[Ottimizzazione e ricerca dell'ottimo]], [[Lettura e interpretazione di grafici e funzioni]]
**Tipo funzione:** [[Esponenziale]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 1

1. Si consideri questa equazione differenziale: $y''+2y'+2y=x$. Quale delle seguenti funzioni ne è una soluzione? Si giustifichi la risposta.
   a) $y=e^{-x}(\operatorname{sen}x+\cos x)+x$
   b) $y=2e^{-x}+x$
   c) $y=e^{-x}(\operatorname{sen}x+\cos x)+\frac{1}{2}(x-1)$
   d) $y=e^{-2x}+x$

**Topic:** [[Equazioni Differenziali]], [[Derivate]]
**Metodi:** [[Risoluzione di equazioni differenziali]], [[Derivazione e calcolo di derivate]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]], [[Applicazione consapevole di teoremi]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 2

2. Data la funzione così definita in $\mathbb{R}$: $f(x)=x\cdot e^{-\left|x^3-1\right|}$, determinarne minimi, massimi ed eventuali asintoti.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Massimi e Minimi]], [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Calcolo di limiti e continuita]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Lettura e interpretazione di grafici e funzioni]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Mista  trascendente composita|Mista / trascendente composita]], [[Con valore assoluto  modulo|Con valore assoluto / modulo]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 3

3. Determinare la velocità di variazione dello spigolo di un cubo, sapendo che il volume del cubo è pari a $0{,}1\ m^3$ e sta diminuendo alla velocità di $1200\ \frac{cm^3}{sec}$.

**Topic:** [[Derivate]], [[Geometria Solida]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 4

4. Posto, per $n\in\mathbb{N}$, $A_n=\int_{0}^{1} x^n e^x\,dx$, stabilire il valore di $A_1$ e dimostrare che, per ogni $n>0$, si ha $A_n=e-n\,A_{n-1}$.

**Topic:** [[Calcolo Integrale]], [[Successioni e Serie]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Dimostrazione per induzione]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 5

5. I lati di un triangolo $ABC$ misurano: $AB=8\ cm$, $BC=6\ cm$, $CA=5\ cm$. Preso a caso un punto $P$ all'interno del triangolo, qual è la probabilità che $P$ sia più vicino al vertice $B$ che al vertice $A$?

**Topic:** [[Probabilita]], [[Geometria Euclidea]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Geometria euclidea sintetica (similitudine, teoremi su triangolicerchi)|Geometria euclidea sintetica (similitudine, teoremi su triangoli/cerchi)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Problem solving (strategia risolutiva non immediata)]], [[Visualizzazione spaziale e geometrica]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 6

6. I punti $A(3,4,1)$, $B(6,3,2)$, $C(3,0,3)$, $D(0,1,2)$ sono vertici di un quadrilatero $ABCD$. Si dimostri che tale quadrilatero è un parallelogramma e si controlli se esso è un rettangolo.

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Sistemi di equazioni]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 7

7. Determinare la distanza tra il punto $P(2,1,1)$ e la retta:
$$\begin{cases} x+y=z+1 \\ z=-y+1 \end{cases}$$

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Sistemi di equazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Visualizzazione spaziale e geometrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 8

8. Supponiamo che l'intervallo di tempo $t$ (in anni) tra due cadute di fulmini in un'area di $100\ m^2$ sia dato da una variabile casuale continua con funzione di ripartizione:
$$P(t\le z)=\int_{0}^{z} 0{,}01\cdot e^{-0{,}01 s}\,ds$$
   a) Si calcoli la probabilità che, in tale area, i prossimi due fulmini cadano entro non più di 200 anni l'uno dall'altro.
   b) Si determini qual è il minimo numero di anni $z$, tale che sia almeno del $95\%$ la probabilità che i prossimi due fulmini cadano in tale area entro non più di $z$ anni l'uno dall'altro.

**Topic:** [[Probabilita]], [[Calcolo Integrale]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Integrazione (calcolo di integrali)]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Modellizzazione matematica di situazioni]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 9

9. Una curva "a spirale" inizia nel punto $A$, come indicato in figura *(figura nel PDF)*, ed è formata congiungendo un numero infinito di semicirconferenze di diametri sempre più piccoli. Il diametro $d_1$ della prima semicirconferenza è di $80\ cm$. Il diametro $d_2$ della seconda è pari ai $\frac{3}{5}$ di $d_1$. Il diametro $d_3$ della terza è pari ai $\frac{3}{5}$ di $d_2$, e così via: $d_{n+1}=\frac{3}{5}d_n$ per ogni $n$. Con lo sviluppo della curva, gli estremi delle varie semicirconferenze tendono al cosiddetto "occhio" $E$ della spirale (ossia l'unico punto contenuto in tutti i vari diametri). Qual è la distanza (in linea retta) tra il punto $A$ e il punto $E$? E qual è la lunghezza del cammino che va da $A$ a $E$, percorrendo l'intera curva?

**Topic:** [[Successioni e Serie]], [[Geometria Euclidea]]
**Metodi:** [[Successioni, serie e ricorrenze]], [[Geometria euclidea sintetica (similitudine, teoremi su triangolicerchi)|Geometria euclidea sintetica (similitudine, teoremi su triangoli/cerchi)]]
**Competenze:** [[Ragionamento logico-deduttivo]], [[Calcolo numerico e stima]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 9|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)

## Quesito 10

10. Si stabilisca il valore del limite:
$$\lim_{x\to+\infty}\frac{2-73\cos^3\!\left(4x+\frac{\pi}{11}\right)}{5x-\operatorname{sen}^2\!\left(x-\frac{\pi}{7}\right)},$$
motivando adeguatamente la risposta.

**Topic:** [[Limiti e Continuita]], [[Trigonometria]]
**Metodi:** [[Calcolo di limiti e continuita]], [[Uso di relazioni e identita trigonometriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2016_sessione_suppletiva_2016_prova_194#Quesito 10|📝 Svolgimento (LaTeX)]] · [📄 PDF p.194](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)


#maturita/prova #area/analisi #cluster/studio_di_funzione
