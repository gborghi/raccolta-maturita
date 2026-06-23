---
tipo: prova
prova_id: prova_2017_sessione_straordinaria_2017_prova_80
anno: '2017'
pdf: Prova_Maturita_2017.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/prova
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2017
title: 2017 Straordinaria — Prova
---

Fonte: p.80 · [📄 Apri PDF](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)
**Cluster:** [[Clusters/Derivate, Massimi e Minimi|Derivate, Massimi e Minimi]]

## Problema 1

L'azienda per cui lavori vuole aprire in città una pista di pattinaggio su ghiaccio e ti ha dato l'incarico di occuparti del progetto.

La pista verrà realizzata su un terreno di forma rettangolare, di base 40 metri e altezza 20 metri, e secondo le specifiche che ti sono state fornite sarà di forma ellittica e avrà area pari a $600\,m^2$. Stabilito un sistema di assi cartesiani $Oxy$, il cui centro coincide con il centro dell'ellisse e con quello del rettangolo, in figura 1 sono rappresentati il terreno e la pista, in figura 2 la regione relativa al primo quadrante. La superficie in grigio è da adibire a deposito e a servizi tecnici, per cui deve essere inaccessibile al pubblico: essa è delimitata dalle tangenti alla pista passanti per i punti medi dei lati verticali $AB$ e $CD$. *(figure nel PDF)*

*(L'equazione dell'ellisse, in coordinate cartesiane, è: $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$.)*

1. Determina, in funzione di $a$ e $b$ (rispettivamente lunghezza del semiasse orizzontale e del semiasse verticale dell'ellisse) le coordinate del punto di tangenza $T$, e verifica che l'espressione della superficie totale $S$ dell'area evidenziata in grigio nella figura 2 è:
$$S=\frac{50\sqrt{400-a^2}}{b}$$

2. Per motivi estetici, è richiesto che la proporzione tra il semiasse orizzontale e quello verticale dell'ellisse sia uguale a quella tra il lato orizzontale e quello verticale del rettangolo. Ricordando che l'area della pista deve essere pari a $600\,m^2$, determina i valori di $a$ e $b$ (approssimati al centimetro). Verifica inoltre che la superficie evidenziata in grigio occupi meno del 15% del terreno disponibile.

*(L'area della superficie racchiusa dall'ellisse di semiassi $a$ e $b$ è pari a $\pi a b$.)*

Un'altra problematica da affrontare riguarda la scelta di un macchinario per la produzione del ghiaccio necessario per la pista, tenendo presenti la dimensione della pista, il tempo impiegato per tale produzione e il relativo consumo di energia. Tramite una ricerca di mercato, hai individuato un dispositivo che riesce a lavorare a una velocità che è inversamente proporzionale allo spessore raggiunto e in 3 ore di lavoro, a temperatura ambiente standard, produce una lastra di ghiaccio di superficie di $600\,m^2$ avente uno spessore di 3 cm.

3. Individua, per il macchinario selezionato, il modello matematico che descrive l'andamento dello spessore dello strato di ghiaccio in funzione del tempo.

Per un utilizzo ottimale la pista deve avere uno spessore compreso tra i 6,5 e gli 8 cm.

4. Determina il tempo che il macchinario impiega a realizzare uno strato di ghiaccio di spessore 7,5 cm.

**Topic:** [[Geometria Analitica (piano)]], [[Derivate]], [[Calcolo Integrale]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Risoluzione di equazioni e disequazioni]], [[Derivazione e calcolo di derivate]], [[Risoluzione di equazioni differenziali]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Problem solving (strategia risolutiva non immediata)]], [[Calcolo simbolico e manipolazione algebrica]], [[Interpretazione e formalizzazione del testo]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.80](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Problema 2

Le funzioni $g_1,g_2,g_3,g_4$ sono definite nel modo seguente:
$$g_1(x)=\frac{1}{2}x^2-\frac{1}{2}$$
$$g_2(x)=|x|-1$$
$$g_3(x)=-\frac{2}{\pi}\cos\left(\frac{\pi}{2}x\right)$$
$$g_4(x)=\ln(|x|)$$

1. Verifica che nei punti $x=1$ e $x=-1$ le funzioni $g_1,g_2,g_3,g_4$ condividono le stesse rette tangenti.

2. Dopo aver tracciato i grafici delle funzioni $g_1,g_2,g_3,g_4$ deduci quelli delle funzioni:
$$f_1(x)=\begin{cases}\ln(|x|), & \text{se } |x|\ge 1\\ -g_1(x), & \text{se } |x|<1\end{cases}$$
$$f_2(x)=\begin{cases}\ln(|x|), & \text{se } |x|\ge 1\\ -g_2(x), & \text{se } |x|<1\end{cases}$$
$$f_3(x)=\begin{cases}\ln(|x|), & \text{se } |x|\ge 1\\ -g_3(x), & \text{se } |x|<1\end{cases}$$
classifica gli eventuali punti di non derivabilità di $f_1,f_2,f_3$ e posto
$$I_1=\int_{-e}^{e}f_1(x)\,dx\qquad I_2=\int_{-e}^{e}f_2(x)\,dx\qquad I_3=\int_{-e}^{e}f_3(x)\,dx$$
verifica le disuguaglianze: $I_1<I_3<I_2$.

3. Posto
$$h(x)=\begin{cases}0, & \text{se } x\le 0\\ g_1(x), & \text{se } 0<x<1\\ \ln(|x|), & \text{se } x\ge 1\end{cases}$$
dimostra che la funzione:
$$H(x)=\int_0^x h(t)\,dt$$
ammette uno zero nell'intervallo $[\sqrt{e},\,e]$.

4. Calcola il volume del solido ottenuto facendo ruotare di $\pi/3$ radianti intorno all'asse $x$ la regione di piano delimitata dalle rette di equazioni $x=-1$, $x=+1$ e dai grafici di $g_2$ e $g_1$.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Derivate]], [[Calcolo Integrale]], [[Funzioni Integrali]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Teoremi di esistenza (continuita, Weierstrass, valori intermedi, zeri)]], [[Analisi qualitativa e deduzione di grafici]]
**Competenze:** [[Lettura e interpretazione di grafici e funzioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Dimostrazione e argomentazione rigorosa]], [[Collegamento tra ambiti matematici diversi]]
**Tipo funzione:** [[Definita a tratti  per casi|Definita a tratti / per casi]], [[Mista  trascendente composita|Mista / trascendente composita]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.80](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 1

1) Calcolare la derivata della funzione $f(x)=\ln(x)$, adoperando la definizione di derivata.

**Topic:** [[Derivate]], [[Limiti e Continuita]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Calcolo di limiti e continuita]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.96](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 2

2) Data la funzione:
$$f(x)=\begin{cases}kx^2-2x+1 & \text{per } x<2\\ x^2+(k-1)x-1 & \text{per } x\ge 2\end{cases}$$
Determinare, se possibile, $k$ in modo che la funzione $f(x)$ e la sua derivata siano continue in tutto l'insieme di definizione.

**Topic:** [[Limiti e Continuita]], [[Derivate]]
**Metodi:** [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Derivazione e calcolo di derivate]], [[Risoluzione di equazioni e disequazioni]], [[Calcolo di limiti e continuita]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.96](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 3

3) Un solido ha per base la regione $\Pi$ del piano cartesiano compresa tra il grafico della funzione $f(x)=x^2+2$ e l'asse delle $x$ nell'intervallo $[0;2]$. Per ogni punto $P$ di $\Pi$, di ascissa $x$, l'intersezione del solido col piano passante per $P$ e ortogonale all'asse delle $x$ è un rettangolo di altezza $x+1$. Calcolare il volume del solido.

**Topic:** [[Calcolo Integrale]], [[Geometria Solida]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Visualizzazione spaziale e geometrica]], [[Modellizzazione matematica di situazioni]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.97](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 4

4) Giovanni tira ripetutamente con l'arco a un bersaglio: la probabilità di colpirlo è del 28% per ciascun tiro. Se Giovanni esegue 10 tiri calcolare la probabilità che il bersaglio venga colpito: a) 4 volte; b) le prime 4 volte.

**Topic:** [[Probabilita]], [[Calcolo Combinatorio]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Calcolo combinatorio (disposizioni, permutazioni, combinazioni)]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 5

5) Stabilire per quale valore del parametro $k$ il grafico della funzione $f(x)=x^3+2x^2+kx-4$ ha una sola tangente parallela alla bisettrice del primo e terzo quadrante. Quante tangenti orizzontali ha il grafico della funzione per questo valore del parametro $k$?

**Topic:** [[Derivate]], [[Topics/Studio di Funzione|Studio di Funzione]], [[Geometria Analitica (piano)]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Lettura e interpretazione di grafici e funzioni]]
**Tipo funzione:** [[Polinomiale]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.99](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 6

6) In un sistema di riferimento cartesiano il piano $\pi$ di equazione $3x-4y-22=0$ è tangente a una sfera avente come centro il punto $C(3;3;0)$. Determinare il raggio della sfera.

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.99](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 7

7) Data la funzione:
$$f(x)=\ln(x)-[\ln(x)]^2$$
dimostrare che esistono due rette $r$ e $s$ tangenti al grafico della funzione in punti di ascissa $x>1$, che passano entrambe per il punto $P(0;1)$ e scrivere le rispettive equazioni.

**Topic:** [[Derivate]], [[Esponenziali e Logaritmi]], [[Geometria Analitica (piano)]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Risoluzione di equazioni e disequazioni]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.99](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 8

8) Determinare l'equazione della retta perpendicolare nel punto $P$ di coordinate $(1;1;0)$ al piano di equazione $2x-2y+z=0$.

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]]
**Competenze:** [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.100](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 9

9) Sapendo che una moneta è truccata e che la probabilità che esca "testa" in un lancio è pari a $p$, determina i possibili valori che può assumere $p$, sapendo che la probabilità che esca testa esattamente 2 volte lanciando 4 volte la moneta è $8/27$.

**Topic:** [[Probabilita]], [[Equazioni e Disequazioni]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Risoluzione di equazioni e disequazioni]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 9|📝 Svolgimento (LaTeX)]] · [📄 PDF p.100](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)

## Quesito 10

10) Data la funzione integrale:
$$F(x)=\int_0^{e^{2x}}\ln(t)\,dt$$
calcolare la sua derivata prima e di quest'ultima individuare gli eventuali punti stazionari.

**Topic:** [[Funzioni Integrali]], [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Derivazione e calcolo di derivate]], [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]], [[Collegamento tra ambiti matematici diversi]]
**Soluzione:** [[Soluzioni/2017_sessione_straordinaria_2017_prova_80#Quesito 10|📝 Svolgimento (LaTeX)]] · [📄 PDF p.101](https://drive.google.com/file/d/1xzo_uvfbEGjvrRQzFajR9XIyzxnaMMGP/view)


#maturita/prova #area/analisi #cluster/derivate_massimi_e_minimi
