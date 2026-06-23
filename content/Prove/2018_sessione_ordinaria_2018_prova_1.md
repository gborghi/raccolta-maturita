---
tipo: prova
prova_id: prova_2018_sessione_ordinaria_2018_prova_1
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/prova
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
title: 2018 Sessione ordinaria — Prova
---

Fonte: p.1 · [📄 Apri PDF](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)
**Cluster:** [[Clusters/Derivate, Massimi e Minimi|Derivate, Massimi e Minimi]]

## Problema 1

Devi programmare il funzionamento di una macchina che viene adoperata nella produzione industriale di mattonelle per pavimenti. Le mattonelle sono di forma quadrata di lato 1 (in un'opportuna unità di misura) e le fasi di lavoro sono le seguenti:

- si sceglie una funzione $y = f(x)$ definita e continua nell'intervallo $[0,1]$, che soddisfi le condizioni:

  a) $f(0) = 1$;  b) $f(1) = 0$;  c) $0 < f(x) < 1$ per $0 < x < 1$.

- La macchina traccia il grafico $\Gamma$ della funzione $y = f(x)$ e i grafici simmetrici di $\Gamma$ rispetto all'asse $y$, all'asse $x$ e all'origine $O$, ottenendo in questo modo una curva chiusa $\Lambda$, passante per i punti $(1,0)$, $(0,1)$, $(-1,0)$, $(0,-1)$, simmetrica rispetto agli assi cartesiani e all'origine, contenuta nel quadrato $Q$ di vertici $(1,1)$, $(-1,1)$, $(-1,-1)$, $(1,-1)$.

- La macchina costruisce la mattonella colorando di grigio l'interno della curva chiusa $\Lambda$ e lasciando bianca la parte restante del quadrato $Q$; vengono quindi mostrate sul display alcune mattonelle affiancate, per dare un'idea dell'aspetto del pavimento.

Il manuale d'uso riporta un esempio del processo realizzativo di una mattonella semplice. *(figura nel PDF)*

1. Con riferimento all'esempio, determina l'espressione della funzione $y = f(x)$ e l'equazione della curva $\Lambda$, così da poter effettuare una prova e verificare il funzionamento della macchina.

Ti viene richiesto di costruire una mattonella con un disegno più elaborato che, oltre a rispettare le condizioni a), b) e c) descritte in precedenza, abbia $f'(0) = 0$ e l'area della parte colorata pari al 55% dell'area dell'intera mattonella. A tale scopo, prendi in considerazione funzioni polinomiali di secondo grado e di terzo grado.

2. Dopo aver verificato che non è possibile realizzare quanto richiesto adoperando una funzione polinomiale di secondo grado, determina i coefficienti $a, b, c, d$ della funzione $f(x)$ polinomiale di terzo grado che soddisfa le condizioni poste. Rappresenta infine in un piano cartesiano la mattonella risultante.

Vengono proposti a un cliente due tipi diversi di disegno, derivanti rispettivamente dalle funzioni $a_n(x) = 1 - x^n$ e $b_n(x) = (1 - x)^n$, considerate per $x \in [0,1]$ con $n$ intero positivo.

3. Verifica che al variare di $n$ tutte queste funzioni rispettano le condizioni a), b) e c). Dette $A(n)$ e $B(n)$ le aree delle parti colorate delle mattonelle ottenute a partire da tali funzioni $a_n$ e $b_n$, calcola $\lim_{n \to \infty} A(n)$ e $\lim_{n \to \infty} B(n)$ ed interpreta i risultati in termini geometrici.

Il cliente decide di ordinare 5.000 mattonelle con il disegno derivato da $a_2(x)$ e 5.000 con quello derivato da $b_2(x)$. La verniciatura viene effettuata da un braccio meccanico che, dopo aver depositato il colore, torna alla posizione iniziale sorvolando la mattonella lungo la diagonale. A causa di un malfunzionamento, durante la produzione delle 10.000 mattonelle si verifica con una probabilità del 20% che il braccio meccanico lasci cadere una goccia di colore in un punto a caso lungo la diagonale, macchiando così la mattonella appena prodotta.

4. Fornisci una stima motivata del numero di mattonelle che, avendo una macchia nella parte non colorata, risulteranno danneggiate al termine del ciclo di produzione.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Calcolo Integrale]], [[Limiti e Continuita]], [[Probabilita]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Risoluzione di equazioni e disequazioni]], [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Calcolo di limiti e continuita]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Lettura e interpretazione di grafici e funzioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Polinomiale]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.1](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Problema 2

Consideriamo la funzione $f_k: \mathbb{R} \to \mathbb{R}$ così definita:

$$f_k(x) = -x^3 + kx + 9$$

con $k \in \mathbb{Z}$.

1. Detto $\Gamma_k$ il grafico della funzione, verifica che per qualsiasi valore del parametro $k$ la retta $r_k$, tangente a $\Gamma_k$ nel punto di ascissa 0, e la retta $s_k$, tangente a $\Gamma_k$ nel punto di ascissa 1, si incontrano in un punto $M$ di ascissa $\frac{2}{3}$.

2. Dopo aver verificato che $k = 1$ è il massimo intero positivo per cui l'ordinata del punto $M$ è minore di 10, studia l'andamento della funzione $f_1(x)$, determinandone i punti stazionari e di flesso e tracciandone il grafico.

3. Detto $T$ il triangolo delimitato dalle rette $r_1$, $s_1$ e dall'asse delle ascisse, determina la probabilità che, preso a caso un punto $P(x_P, y_P)$ all'interno di $T$, questo si trovi al di sopra di $\Gamma_1$ (cioè che si abbia $y_P > f_1(x)$ per tale punto $P$).

4. Nella figura è evidenziato un punto $N \in \Gamma_1$ e un tratto del grafico $\Gamma_1$. La retta normale a $\Gamma_1$ in $N$ (vale a dire la perpendicolare alla retta tangente a $\Gamma_1$ in quel punto) passa per l'origine degli assi $O$. Il grafico $\Gamma_1$ possiede tre punti con questa proprietà. Dimostra, più in generale, che il grafico di un qualsiasi polinomio di grado $n > 0$ non può possedere più di $2n - 1$ punti nei quali la retta normale al grafico passa per l'origine. *(figura nel PDF)*

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Derivate]], [[Massimi e Minimi]], [[Probabilita]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Studio di funzione completo]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Lettura e interpretazione di grafici e funzioni]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Polinomiale]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.1](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 1

1. Dimostrare che il volume di un cilindro inscritto in un cono è minore della metà del volume del cono.

**Topic:** [[Geometria Solida]], [[Massimi e Minimi]], [[Derivate]]
**Metodi:** [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Derivazione e calcolo di derivate]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Visualizzazione spaziale e geometrica]], [[Ottimizzazione e ricerca dell'ottimo]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.19](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 2

2. Si dispone di due dadi uguali non bilanciati a forma di tetraedro regolare con le facce numerate da 1 a 4. Lanciando ciascuno dei due dadi, la probabilità che esca 1 è il doppio della probabilità che esca 2, che a sua volta è il doppio della probabilità che esca 3, che a sua volta è il doppio della probabilità che esca 4. Se si lanciano i due dadi contemporaneamente, qual è la probabilità che escano due numeri uguali tra loro?

**Topic:** [[Probabilita]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Risoluzione di equazioni e disequazioni]], [[Sistemi di equazioni]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.20](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 3

3. Determinare i valori di $k$ tali che la retta di equazione $y = -4x + k$ sia tangente alla curva di equazione $y = x^3 - 4x^2 + 5$.

**Topic:** [[Derivate]], [[Geometria Analitica (piano)]], [[Equazioni e Disequazioni]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Lettura e interpretazione di grafici e funzioni]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.21](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 4

4. Considerata la funzione $f(x) = \dfrac{3x - e^{\mathrm{sen}\, x}}{5 + e^{-x} - \cos x}$, determinare, se esistono, i valori di $\lim_{x \to +\infty} f(x)$, $\lim_{x \to -\infty} f(x)$, giustificando adeguatamente le risposte fornite.

**Topic:** [[Limiti e Continuita]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Calcolo di limiti e continuita]], [[Studio di funzione completo]], [[Uso di relazioni e identita trigonometriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Ragionamento logico-deduttivo]], [[Applicazione consapevole di teoremi]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.21](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 5

5. Con una staccionata lunga 2 metri si vuole recintare una superficie avente la forma di un rettangolo sormontato da una semicirconferenza, come in figura. Determinare le dimensioni dei lati del rettangolo che consentono di recintare la superficie di area massima. *(figura nel PDF)*

**Topic:** [[Massimi e Minimi]], [[Derivate]], [[Geometria Euclidea]]
**Metodi:** [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Derivazione e calcolo di derivate]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Ottimizzazione e ricerca dell'ottimo]], [[Modellizzazione matematica di situazioni]], [[Calcolo simbolico e manipolazione algebrica]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.22](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 6

6. Determinare l'equazione della superficie sferica $S$, con centro sulla retta $r: \begin{cases} x = t \\ y = t \\ z = t \end{cases}$, $t \in \mathbb{R}$, tangente al piano $\pi: 3x - y - 2z + 14 = 0$ nel punto $T(-4, 0, 1)$.

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Sistemi di equazioni]]
**Competenze:** [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.23](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 7

7. Determinare $a$ in modo che

$$\int_a^{a+1} (3x^2 + 3)\, dx$$

sia uguale a 10.

**Topic:** [[Calcolo Integrale]], [[Equazioni e Disequazioni]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.24](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 8

8. In un gioco a due giocatori, ogni partita vinta frutta 1 punto e vince chi per primo raggiunge 10 punti. Due giocatori che in ciascuna partita hanno la stessa probabilità di vincere si sfidano. Qual è la probabilità che uno dei due giocatori vinca in un numero di partite minore o uguale a 12?

**Topic:** [[Probabilita]], [[Calcolo Combinatorio]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Calcolo combinatorio (disposizioni, permutazioni, combinazioni)]], [[Successioni, serie e ricorrenze]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.24](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 9

9. Sono dati, nello spazio tridimensionale, i punti $A(3,1,0)$, $B(3,-1,2)$, $C(1,1,2)$. Dopo aver verificato che $ABC$ è un triangolo equilatero e che è contenuto nel piano $\alpha$ di equazione $x + y + z - 4 = 0$, stabilire quali sono i punti $P$ tali che $ABCP$ sia un tetraedro regolare.

**Topic:** [[Geometria nello Spazio]], [[Geometria Solida]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Geometria euclidea sintetica (similitudine, teoremi su triangolicerchi)|Geometria euclidea sintetica (similitudine, teoremi su triangoli/cerchi)]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Visualizzazione spaziale e geometrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 9|📝 Svolgimento (LaTeX)]] · [📄 PDF p.25](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 10

10. Determinare quali sono i valori del parametro $k$ per cui la funzione $y(x) = 2e^{kx+2}$ è soluzione dell'equazione differenziale $y'' - 2y' - 3y = 0$.

Durata massima della prova: 6 ore.

**Topic:** [[Equazioni Differenziali]], [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Risoluzione di equazioni differenziali]], [[Derivazione e calcolo di derivate]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2018_sessione_ordinaria_2018_prova_1#Quesito 10|📝 Svolgimento (LaTeX)]] · [📄 PDF p.1](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/prova #area/analisi #cluster/derivate_massimi_e_minimi
