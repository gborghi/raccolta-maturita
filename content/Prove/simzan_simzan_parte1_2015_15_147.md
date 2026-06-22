---
tipo: prova
prova_id: prova_simzan_simzan_parte1_2015_15_147
anno: '2015'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/prova
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15'
---

Fonte: p.147 · [📄 Apri PDF](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)
**Cluster:** [[Clusters/Studio di Funzione|Studio di Funzione]]

## Problema 1

È stata condotta un'indagine su un gruppo di studenti di una scuola superiore; a ciascuno studente è stato chiesto di registrare, nel corso di una settimana, la durata totale di tutte le conversazioni telefoniche effettuate e ricevute tramite il proprio cellulare. I dati raccolti sono stati riassunti nell'istogramma sottostante, in cui l'altezza di ogni rettangolo rappresenta il numero di studenti che hanno dichiarato una durata totale delle conversazioni settimanali maggiore di $t$ ore e minore o uguale di $t+1$ ore. La spezzata in colore, che congiunge i punti corrispondenti ai valori centrali di ogni classe, è il grafico di una funzione di $t$, lineare a tratti, detta *poligono delle frequenze*.

*(figura nel PDF)*

Si vuole cercare una funzione del tempo $t$, definita, continua e derivabile per ogni $t\ge 0$, che approssimi l'andamento del poligono delle frequenze dell'istogramma.

a) Dimostra che, comunque si scelgono le costanti reali positive $A$ e $B$, la funzione
$$f(t)=Ate^{-Bt}$$
ristretta al dominio $0\le t<\infty$ manifesta un andamento qualitativamente simile a quello del poligono delle frequenze.

Osservando l'istogramma si deduce che le classi hanno tutte la stessa ampiezza, pari a un'ora. La quantità $S(t)$ = «somma delle aree dei rettangoli le cui basi sono comprese nell'intervallo $[0;t]$», con $t$ intero positivo, corrisponde quindi al numero di studenti che hanno dichiarato un tempo totale di conversazioni settimanali minore o uguale a $t$ ore. $S(14)=S(\infty)=153$ rappresenta allora il numero totale degli studenti coinvolti nell'indagine.

b) Ricava i valori delle costanti $A$ e $B$ in modo che siano soddisfatte le seguenti due condizioni:
- il massimo relativo di $f(t)$ si verifichi in corrispondenza della stessa ascissa del massimo $M$ dell'istogramma;
- l'area del sottografico della funzione $f(t)$ nell'intervallo $[0;\infty)$ sia uguale a $S(14)$.

c) Verificato che i valori delle costanti che soddisfano le richieste precedenti sono $A=68$ e $B=\dfrac{2}{3}$, studia e rappresenta la corrispondente funzione $f(t)$. In particolare, determina il valore massimo di $f(t)$.

d) Calcola $\displaystyle\int_0^4 f(t)\,dt$ e spiega che cosa rappresenta per la situazione in contesto.

e) Che significato ha il rapporto $\displaystyle p=\frac{\int_0^4 f(t)\,dt}{S(14)}$?

f) Calcola la percentuale di studenti che hanno dichiarato una durata delle conversazioni maggiore di 2 ore e minore o uguale a 3 ore, sia secondo i dati dell'istogramma sia secondo il modello della funzione $f(t)$.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Calcolo Integrale]], [[Esponenziali e Logaritmi]], [[Statistica]]
**Metodi:** [[Studio di funzione completo]], [[Integrazione (calcolo di integrali)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Statistica e analisi dati]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Analisi e interpretazione di dati e probabilita]], [[Interpretazione e formalizzazione del testo]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Mista  trascendente composita|Mista / trascendente composita]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Problema 2

Nel sito web della stazione meteorologica cittadina sono stati pubblicati, come ogni giorno, due grafici. Il primo grafico visualizza la distribuzione locale della pressione atmosferica al suolo mediante linee di livello (isobare) che uniscono i punti aventi la stessa pressione (misurata in kilopascal, kPa). Le linee di livello corrispondono a valori consecutivi della pressione atmosferica $(100, 101, 102, \dots)$. La diagonale $AB$ passa per i punti $L$ e $H$, dove la pressione assume rispettivamente un minimo (100 kPa) e un massimo (120 kPa). Il secondo grafico rappresenta l'andamento della pressione $p(x)$ in funzione della posizione $x$ lungo la diagonale $AB$ ($x$ è espresso in kilometri, con origine in $A$).

*(figure nel PDF)*

a) Utilizzando i dati del primo grafico, individua sul secondo grafico il punto corrispondente ad $H$, fornendone ascissa e ordinata.

b) Una delle seguenti funzioni rappresenta la funzione $p(x)$ nell'intervallo $0\le x\le 30$, con $a$, $b$ costanti reali non nulle. Stabilisci quale, in base ai dati forniti nei grafici.
$$y_1(x)=500\left(a+be^{-x}\right)$$
$$y_2(x)=\frac{300(2x+a)}{(2x+a)^2+225}+b$$
Per la funzione così determinata, ricava i valori delle costanti $a$ e $b$.

c) Verificato che è la seconda funzione a rappresentare i dati riportati nel grafico, con $a=-25$ e $b=110$, studia la corrispondente funzione $p(x)$ nel suo dominio naturale, indicando in particolare quanti punti di flesso ammette senza ricorrere allo studio della derivata seconda.

d) Ricava il valore medio della pressione atmosferica lungo il tratto $AB$.

Considera ora il riferimento cartesiano $Oxyz$ avente origine nel vertice in basso a sinistra della mappa delle isobare, l'asse passante per $B$ come asse $x$, quello passante per $A$ come asse $y$ e asse $z$ uscente dal foglio. Un programma di grafica permette di rappresentare tridimensionalmente l'andamento della pressione $z=p(x;y)$ in funzione della posizione $(x;y)$ nel piano della mappa delle isobare.

e) In tale riferimento ricava le equazioni parametriche e quelle cartesiane della retta $r$ congiungente i punti $L'\big(x_L;y_L;p(x_L;y_L)\big)$ e $H'\big(x_H;y_H;p(x_H;y_H)\big)$.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Calcolo Integrale]], [[Geometria nello Spazio]], [[Geometria Analitica (piano)]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Lettura e interpretazione di grafici e funzioni]], [[Problem solving (strategia risolutiva non immediata)]], [[Collegamento tra ambiti matematici diversi]]
**Tipo funzione:** [[Razionale fratta]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 1

1. Esiste un valore della costante reale $a$ per il quale l'equazione differenziale $xy''+ay'=2x-1$ abbia come soluzione la funzione $y(x)=x\ln x$? Motiva la risposta.

**Topic:** [[Equazioni Differenziali]], [[Derivate]]
**Metodi:** [[Risoluzione di equazioni differenziali]], [[Derivazione e calcolo di derivate]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]], [[Applicazione consapevole di teoremi]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 2

2. Una vasca cubica di 2 m per lato contiene inizialmente 2 m³ d'acqua. A un istante $t=0$ si apre un rubinetto che immette acqua nella vasca al ritmo costante di 10 m³ all'ora e nello stesso istante si apre lo scarico della vasca. Sapendo che l'acqua defluita dallo scarico dopo $t$ ore è pari a $10\left(t-1+e^{-t}\right)$ m³, qual è il massimo livello raggiunto dall'acqua nella vasca? La vasca finirà per svuotarsi?

**Topic:** [[Massimi e Minimi]], [[Limiti e Continuita]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Integrazione (calcolo di integrali)]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Lettura e interpretazione di grafici e funzioni]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 3

3. Dato nel riferimento $Oxyz$ il piano $\alpha$ di equazione $2x+2\sqrt{3}\,y+2\sqrt{2}\,z-4=0$ e dette $A$, $B$, $C$ le sue intersezioni con gli assi $x$, $y$ e $z$, calcola l'area del triangolo $ABC$ e la distanza di $O$ dal piano $\alpha$, poi determina il volume della piramide $ABCO$.

**Topic:** [[Geometria nello Spazio]], [[Geometria Solida]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Visualizzazione spaziale e geometrica]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 4

4. Sia $f(x)$ una funzione definita e continua in $\mathbb{R}$ tale che $\displaystyle\lim_{x\to 0}\frac{f(x)-1}{x}=2$. Calcola, giustificando il procedimento, il seguente limite:
$$\lim_{x\to 0}\frac{\int_0^{x^2} f(t)\,dt}{x^2}.$$

**Topic:** [[Limiti e Continuita]], [[Funzioni Integrali]]
**Metodi:** [[Calcolo di limiti e continuita]], [[Integrazione (calcolo di integrali)]], [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]]
**Competenze:** [[Applicazione consapevole di teoremi]], [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 5

5. Data la funzione $f(x)=\dfrac{4}{x^2+1}$, ricava le equazioni di tutte le rette tangenti al suo grafico passanti per il punto $A(0;4)$.

**Topic:** [[Derivate]], [[Geometria Analitica (piano)]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Lettura e interpretazione di grafici e funzioni]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 6

6. Data la funzione $f(x)=a\sqrt{x^2-9}$, determina per quale valore della costante reale positiva $a$ i solidi ottenuti ruotando di 360° il sottografico di $f(x)$ compreso tra le ascisse $x=0$ e $x=4$ prima intorno all'asse $x$ poi intorno all'asse $y$ risultano equivalenti.

**Topic:** [[Calcolo Integrale]]
**Metodi:** [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Integrazione (calcolo di integrali)]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Visualizzazione spaziale e geometrica]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 7

7. Considera la funzione $f(x)=x\sqrt{1-x}$.
   a) Stabilisci se $f(x)$ soddisfa le ipotesi del teorema di Rolle nell'intervallo $[-1;1]$.
   b) Stabilisci se $f(x)$ ammette punti di flesso nell'intervallo $[-1;1]$.

**Topic:** [[Derivate]], [[Topics/Studio di Funzione|Studio di Funzione]]
**Metodi:** [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]], [[Derivazione e calcolo di derivate]], [[Studio di funzione completo]]
**Competenze:** [[Applicazione consapevole di teoremi]], [[Ragionamento logico-deduttivo]], [[Calcolo simbolico e manipolazione algebrica]]
**Tipo funzione:** [[Irrazionale]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 8

8. Nella figura a fianco sono riportati i grafici di una funzione $f(x)$, della sua derivata prima $f'(x)$ e della derivata seconda $f''(x)$. Associa $f(x)$, $f'(x)$ e $f''(x)$ al giusto grafico. Se uno dei tre grafici ha equazione
$$y=\frac{2(1-x^2)}{(x^2+1)^2},$$
determina le equazioni degli altri due. *(figura nel PDF)*

**Topic:** [[Derivate]], [[Topics/Studio di Funzione|Studio di Funzione]]
**Metodi:** [[Analisi qualitativa e deduzione di grafici]], [[Derivazione e calcolo di derivate]], [[Studio di funzione completo]]
**Competenze:** [[Lettura e interpretazione di grafici e funzioni]], [[Collegamento tra ambiti matematici diversi]], [[Calcolo simbolico e manipolazione algebrica]]
**Tipo funzione:** [[Razionale fratta]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 9

9. In un quiz televisivo un concorrente deve rispondere a 10 domande, ciascuna delle quali ha 4 risposte possibili fra cui una sola è corretta. Rispondendo a caso, qual è la probabilità che il concorrente dia la risposta corretta a esattamente 6 domande, sufficienti per passare al gioco successivo?

**Topic:** [[Probabilita]], [[Calcolo Combinatorio]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Calcolo combinatorio (disposizioni, permutazioni, combinazioni)]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 9|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 10

10. Si lanciano 5 dadi regolari a sei facce. Detto $x$ il numero di dadi che presentano un valore maggiore o uguale a 3, si compili la tabella della distribuzione di probabilità della variabile casuale $X=x$ e se ne ricavino il valore medio e la deviazione standard.

**Topic:** [[Probabilita]], [[Statistica]], [[Calcolo Combinatorio]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Statistica e analisi dati]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Modellizzazione matematica di situazioni]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2015_15_147#Quesito 10|📝 Svolgimento (LaTeX)]] · [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/prova #area/analisi #cluster/studio_di_funzione
