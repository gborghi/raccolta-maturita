---
tipo: prova
prova_id: prova_2018_sessione_suppletiva_2018_prova_98
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/prova
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
title: 2018 Sessione suppletiva — Prova
---

Fonte: p.98 · [📄 Apri PDF](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)
**Cluster:** [[Clusters/Derivate, Massimi e Minimi|Derivate, Massimi e Minimi]]

## Problema 1

Un artigiano deve realizzare una cornice in cui inscrivere uno specchio di forma circolare. A partire da una tavola quadrata di lato $3\pi$ decimetri (approssimato alla seconda cifra decimale), adoperando una macchina a controllo numerico (CNC), incide su ciascun lato una decorazione che rappresenta una porzione di curva goniometrica come si vede in figura 1.

*(figura nel PDF)*

La macchina traccia sul lato giacente sull'asse delle ascisse la curva descritta dalla funzione $y=k\operatorname{sen}(x)$ con $x\in[0,3\pi]$ e $k$ parametro reale positivo. La cornice viene ruotata per realizzare la decorazione su ciascun lato. (La precisione della macchina è di $10^{-4}\,\mathrm{m}$, quindi al di sopra della precisione richiesta dalle misure della cornice.)

1. Per ottenere la decorazione, occorre che le curve su due lati consecutivi si intersechino nel loro punto di massimo più vicino al vertice della cornice. Verifica che tale richiesta è soddisfatta per $k=\frac{\pi}{2}$. La decorazione presenta delle "foglie" (colorate in grigio in figura 2) in corrispondenza dei quattro vertici. L'artigiano vuole rivestire queste quattro regioni con una polvere ceramica. Determina l'area, espressa in $\mathrm{dm}^2$, della superficie da ricoprire.

*(figure 2 e 3 nel PDF)*

Volendo offrire ai clienti la possibilità di inserire nella cornice uno specchio di dimensioni maggiori, l'artigiano ne realizza un'altra con il lato delle stesse misure della precedente, ma con le quattro curve goniometriche che hanno in comune solo i vertici della cornice, così come in figura 3.

2. Verifica che per ottenere una decorazione di questo tipo occorre impostare nella macchina CNC un valore di $k$ compreso tra 0 e 1 e che per $k=1$ due decorazioni consecutive sono tangenti nel vertice della cornice. Determina inoltre, in funzione di $k\in[0;1]$, l'area della parte di cornice compresa tra i lati e le quattro curve goniometriche, esprimendola in $\mathrm{dm}^2$.

3. L'artigiano ha ovviamente l'esigenza di offrire la cornice a clienti che hanno specchi circolari di dimensioni diverse. Determina in funzione del parametro $k$ l'area dello specchio tangente alle quattro curve goniometriche e stabilisci quindi l'area minima e massima possibile dello specchio. Un cliente, per cui è stata realizzata una cornice con $k=1$, chiede che la regione compresa tra lo specchio e le quattro curve venga dipinta con una vernice di cui l'artigiano possiede un flacone da $125\ \mathrm{ml}$.

4. Dal momento che con 1 litro di vernice è possibile coprire $6\ \mathrm{m}^2$ di superficie, la quantità a disposizione è sufficiente per passare due mani di vernice? Per quale valore di $k$ la quantità di vernice richiesta è massima?

**Topic:** [[Trigonometria]], [[Calcolo Integrale]], [[Massimi e Minimi]], [[Geometria Euclidea]]
**Metodi:** [[Uso di relazioni e identita trigonometriche]], [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo numerico e stima]], [[Ottimizzazione e ricerca dell'ottimo]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Problema 2

Fissato un numero reale $k>0$, si definiscono le funzioni:
$$f_k(x)=k\ln(x) \qquad e \qquad g_k(x)=e^{\frac{x}{k}},$$
i cui grafici sono indicati, rispettivamente, con $F_k$ e $G_k$.

1. Verifica che, qualunque sia $k>0$, le due funzioni $f_k$ e $g_k$ sono tra loro inverse; definite inoltre le funzioni:
   $$a(x)=f_k\big(g_k(x)\big) \qquad e \qquad b(x)=g_k\big(f_k(x)\big),$$
   stabilisci se si verifica $a(x)=b(x), \ \forall x$.

2. Indicata con $r$ la retta di equazione $y=x$, determina l'equazione della retta $s_2$, parallela a $r$ e tangente al grafico $F_2$ della funzione $f_2(x)=2\ln(x)$. Determina inoltre l'equazione della retta $t_2$, parallela a $r$ e tangente al grafico $G_2$ della funzione $g_2(x)=e^{\frac{x}{2}}$. Rappresenta i grafici $F_2$ e $G_2$ insieme alle rette $s_2$ e $t_2$ e stabilisci qual è la distanza minima tra un punto di $F_2$ e un punto di $G_2$.

3. Verifica che l'equazione $f_3(x)=g_3(x)$ possiede due soluzioni sapendo che, qualunque sia $k>0$, gli eventuali punti d'intersezione tra il grafico $F_k$ e il grafico $G_k$ coincidono con i punti di intersezione tra uno qualsiasi di tali grafici e la retta di equazione $y=x$. Stabilisci inoltre per quali valori $k>0$ i grafici $F_k$ e $G_k$ sono secanti, per quali valori sono disgiunti e per quale valore essi sono tangenti.

4. Sia $A$ la regione limitata compresa tra i grafici $F_e$ e $G_e$ e gli assi cartesiani. Determina l'area di $A$ ed il volume del solido generato ruotando $A$ attorno a uno degli assi cartesiani.

**Topic:** [[Esponenziali e Logaritmi]], [[Topics/Studio di Funzione|Studio di Funzione]], [[Derivate]], [[Calcolo Integrale]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Analisi qualitativa e deduzione di grafici]]
**Competenze:** [[Lettura e interpretazione di grafici e funzioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Dimostrazione e argomentazione rigorosa]], [[Collegamento tra ambiti matematici diversi]]
**Tipo funzione:** [[Logaritmica]], [[Esponenziale]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 1

1. Considerati nel piano cartesiano i punti $A(0,0)$ e $B(\pi,0)$, sia $R$ la regione piana delimitata dal segmento $AB$ e dall'arco di curva avente equazione $y=4\operatorname{sen} x$, con $0\le x\le\pi$. Calcolare il massimo perimetro che può avere un rettangolo inscritto in $R$ avente un lato contenuto nel segmento $AB$.

**Topic:** [[Massimi e Minimi]], [[Trigonometria]], [[Derivate]]
**Metodi:** [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Derivazione e calcolo di derivate]], [[Uso di relazioni e identita trigonometriche]], [[Integrazione (calcolo di integrali)]]
**Competenze:** [[Ottimizzazione e ricerca dell'ottimo]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 2

2. Si consideri la funzione $f(x)=\frac{1}{x}$ nell'intervallo $[p,2p]$ e, detto $\gamma$ il suo grafico, sia $t$ la retta tangente a $\gamma$ nel suo punto di ascissa $p$. Determinare, al variare di $p$, le aree delle due parti in cui la retta $t$ divide la regione finita di piano compresa fra $\gamma$ e l'asse delle ascisse.

**Topic:** [[Calcolo Integrale]], [[Derivate]], [[Geometria Analitica (piano)]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Derivazione e calcolo di derivate]], [[Impostazione con geometria analitica (coordinate, coniche)]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Collegamento tra ambiti matematici diversi]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 3

3. Determinare l'equazione della superficie sferica di centro $C(1,1,2)$ tangente al piano di equazione $x+y-z=10$ e le coordinate del punto di contatto tra la superficie sferica e il piano.

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Sistemi di equazioni]]
**Competenze:** [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 4

4. Verificare che
$$\int_0^{\frac{\pi}{2}}\cos^n(x)\,dx=\frac{n-1}{n}\int_0^{\frac{\pi}{2}}\cos^{n-2}(x)\,dx$$
per $n>1$ e usare questo risultato per calcolare $\int_0^{\frac{\pi}{2}}\cos^4(x)\,dx$.

**Topic:** [[Calcolo Integrale]], [[Trigonometria]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Uso di relazioni e identita trigonometriche]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 5

5. Si lancia $n$ volte un dado regolare a sei facce. Qual è il più piccolo valore di $n$ tale che la probabilità che non esca mai il numero 3 sia minore dello $0{,}01\%$?

**Topic:** [[Probabilita]], [[Equazioni e Disequazioni]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Risoluzione di equazioni e disequazioni]], [[Successioni, serie e ricorrenze]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 6

6. Data la funzione $y=x^2+ax+b-3$, determinare il valore dei coefficienti $a$ e $b$ per i quali il grafico della funzione è tangente nel punto di ascissa $x=1$ alla retta di equazione $y=7x-9$.

**Topic:** [[Derivate]], [[Geometria Analitica (piano)]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Sistemi di equazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Lettura e interpretazione di grafici e funzioni]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 7

7. Date le curve $\gamma_1$ e $\gamma_2$ di equazioni rispettivamente $y=x^2+1$ e $y=x^2-8x+9$, sia $t$ la retta che è tangente a entrambe. Stabilire l'area della regione piana di area finita che è delimitata da $\gamma_1$, $\gamma_2$ e $t$.

**Topic:** [[Calcolo Integrale]], [[Derivate]], [[Geometria Analitica (piano)]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Lettura e interpretazione di grafici e funzioni]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 8

8. Una variabile casuale, a valori nell'intervallo $[0,10]$, è distribuita secondo la densità di probabilità data dalla funzione
$$f(x)=\begin{cases}\dfrac{1}{3}-\dfrac{1}{4}x, & 0\le x\le 1\\[2mm] \dfrac{1}{12}, & 1<x\le 10\end{cases}$$
Stabilire il valore medio e il valore mediano di questa variabile casuale.

**Topic:** [[Probabilita]], [[Statistica]], [[Calcolo Integrale]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Integrazione (calcolo di integrali)]], [[Statistica e analisi dati]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 9

9. Determinare il luogo geometrico dei punti $P(x,y,z)$ equidistanti dai punti $A(0,1,2)$ e $B(3,2,0)$.

**Topic:** [[Geometria nello Spazio]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 9|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)

## Quesito 10

10. Verificare che la funzione $y=e^{-x}\operatorname{sen} x$ è soluzione dell'equazione differenziale $y''+2y'+2y=0$.

**Topic:** [[Equazioni Differenziali]], [[Derivate]]
**Metodi:** [[Risoluzione di equazioni differenziali]], [[Derivazione e calcolo di derivate]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]]
**Soluzione:** [[Soluzioni/2018_sessione_suppletiva_2018_prova_98#Quesito 10|📝 Svolgimento (LaTeX)]] · [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/prova #area/analisi #cluster/derivate_massimi_e_minimi
