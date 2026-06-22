---
tipo: prova
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/prova
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
title: 'Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica)'
---

Fonte: p.46 · [📄 Apri PDF](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)
**Cluster:** [[Clusters/Studio di Funzione|Studio di Funzione]]

## Problema 1

<!--fig:start-->
![[_attachments/simzan_simzan_parte2_2019_2_46/simzan_simzan_parte2_2019_2_46_fig.svg]]
*Spira quadrata conduttrice immersa in un campo magnetico uniforme uscente dal piano del foglio (rappresentato dalla griglia di punti).*

<!--fig:end-->

Si consideri la funzione reale di variabile reale $i(t)$ così definita:
$$i(t)=\begin{cases} 2 & \text{se } 0\le t\le 2 \\ t^3+at^2+bt+c & \text{se } 2<t\le 5 \end{cases}$$
con $a$, $b$, $c$ parametri reali.

1. Ricavare i valori di $a$, $b$ e $c$ che rendono $i(t)$ continua e derivabile in tutto l'intervallo $[0;5]$, con $i(3)=0$. Avendo dimostrato che deve essere $a=-9$, $b=24$ e $c=-18$, sia $i(t)$ la funzione ottenuta in corrispondenza di tali valori.

2. Senza calcolare la derivata prima di $i(t)$, mostrare che $i'(t)$ si annulla in corrispondenza di almeno un valore $t^*$ con $2<t^*<5$. Studiare e rappresentare la funzione $i(t)$ in un riferimento cartesiano.

Si supponga che $i(t)$ rappresenti l'intensità (in mA) della corrente indotta all'istante $t$ (in s) in una spira conduttrice di forma quadrata, di lato $L$ (in m) e resistenza $R$ (in $\Omega$), immersa in un campo magnetico uniforme $\vec{B}$ come mostrato in figura.

*(figura nel PDF)*

Il campo magnetico è diretto perpendicolarmente al piano della spira e la sua componente $B$ (in mT) in tale direzione varia nel tempo secondo la funzione $B(t)$. Scegliamo il sistema di riferimento in modo che l'asse perpendicolare al piano del foglio abbia come verso positivo il verso uscente. In base a tale scelta, $B(t)>0$ se il campo magnetico $\vec{B}$ è uscente dal piano del foglio, e $B(t)<0$ se $\vec{B}$ è entrante. Inoltre, sempre in base alla scelta del verso degli assi del sistema di riferimento, $i(t)>0$ se la corrente percorre la spira in senso antiorario, $i(t)<0$ se la percorre in senso orario.

3. Giustificare, sulla base delle leggi di Maxwell dell'elettromagnetismo classico, il fatto che tra $B(t)$ e $i(t)$ sussiste una relazione del tipo
$$\frac{dB(t)}{dt}=-k\cdot i(t)$$
dove $k$ è una costante positiva. Considerato $L=40$ cm e $R=0{,}16\ \Omega$, determinare la dimensione e il valore di $k$.

4. Verificare graficamente che la funzione
$$j(t)=\begin{cases} 2 & \text{se } 0\le t\le 2 \\ -2\cos\!\left(\dfrac{\pi}{2}t\right) & \text{se } 2<t\le 5 \end{cases}$$
approssima in una certa misura l'andamento di $i(t)$ nell'intervallo $[0;5]$ secondi. Assumendo $j(t)$ come valore della corrente, calcolare l'energia termica $W$ dissipata per effetto Joule nell'intervallo $[0;5]$ secondi, motivando la risposta.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Derivate]], [[Calcolo Integrale]], [[Topics/Fisica|Fisica]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni differenziali]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Problem solving (strategia risolutiva non immediata)]], [[Collegamento tra ambiti matematici diversi]], [[Dimostrazione e argomentazione rigorosa]]
**Tipo funzione:** [[Definita a tratti  per casi|Definita a tratti / per casi]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Problema 2

Si consideri un filo rettilineo infinito $t$, posto nel vuoto, che presenta una carica positiva distribuita in modo uniforme con densità lineare di carica $\lambda$. Al di fuori del filo, in un generico punto $P$ dello spazio, si osserva che il campo elettrico $\vec{E}$ generato dalla distribuzione lineare ha direzione radiale rispetto a $t$ ed è uscente da essa. Inoltre, il modulo del campo elettrico è costante nei punti posti alla stessa distanza dal filo.

1. Con riferimento alle caratteristiche geometriche di $\vec{E}$ esposte in precedenza, dimostrare che il modulo del campo elettrico generato dalla distribuzione lineare di carica in un punto $P$ che dista $r$ da $t$ è dato da:
$$E=\frac{1}{2\pi\varepsilon_0}\cdot\frac{\lambda}{r}.$$
Considerare ora tre fili rettilinei infiniti, vincolati a restare fissi, con la stessa densità lineare di carica positiva, perpendicolari al piano del foglio e passanti per i vertici di un triangolo equilatero $ABC$ di lato $2L$. Una carica puntiforme positiva $q$ è posta in un punto generico dell'altezza relativa al vertice $A$.

2. Verificare che la direzione della forza risultante $\vec{R}$ è quella dell'altezza considerata. Dopodiché definire, su tale altezza, un sistema di riferimento $Ox$ con l'origine $O$ coincidente con il baricentro del triangolo e il verso positivo delle $x$ rivolto verso il vertice $A$. Verificare che la componente di $\vec{R}$ rispetto $Ox$ è data da:
$$R(x)=\frac{27\lambda q}{2\pi\varepsilon_0}\cdot\frac{x^2}{9x^4-8\sqrt{3}\,L^3}.$$
Si definisca poi la seguente variabile adimensionale:
$$X\equiv\frac{\sqrt{3}\,x}{L},$$
e la seguente espressione adimensionale della variabile $X$:
$$f(X)\equiv\frac{R(X)}{a}\quad\text{con } a\equiv\frac{9\sqrt{3}\,\lambda q}{2\pi\varepsilon_0 L}.$$

3. Dopo aver verificato che risulta $f(X)=\dfrac{X^2}{X^4-2}$, studiare tale funzione su $\mathbb{R}$ (non è richiesta l'analisi dei flessi e della concavità) e tracciare il grafico qualitativo di $f(X)$.

4. La funzione $f(X)$ possiede un punto di minimo relativo in $X_1=-\sqrt[4]{2}$. Determinare allora l'area della regione di piano $XY$ limitata dall'asse delle ascisse, l'asse delle ordinate, il grafico della funzione $f(X)$ e la retta verticale passante per $(X_1;0)$. Calcolare, infine, il seguente limite:
$$\lim_{X\to-\infty}\frac{\int_X^{-2} f(z)\,dz}{\ln(-2X-1)}.$$

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Calcolo Integrale]], [[Topics/Fisica|Fisica]], [[Limiti e Continuita]]
**Metodi:** [[Studio di funzione completo]], [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Calcolo di limiti e continuita]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Problem solving (strategia risolutiva non immediata)]], [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]]
**Tipo funzione:** [[Razionale fratta]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 1

1. Verificare che il grafico della funzione
$$F(x)=2+12x-\int_0^x \ln\!\big(t^2+1+4\big)\,dt$$
ammette un punto di flesso di ascissa $x=0$ e ricavare l'equazione della retta tangente in tale punto.

**Topic:** [[Funzioni Integrali]], [[Derivate]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Derivazione e calcolo di derivate]], [[Studio di funzione completo]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]], [[Lettura e interpretazione di grafici e funzioni]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 2

2. Una scatola contiene 30 palline, numerate da 1 a 30. Le palline sono di due colori diversi: quelle il cui numero è multiplo di 3 sono nere, le rimanenti sono bianche. Si estraggono 3 palline simultaneamente. Determinare la probabilità degli eventi: $A$: «le palline sono di uno stesso colore»; $B$: «il più piccolo dei numeri estratti è 15»; $C$: «le palline sono di colori diversi».

**Topic:** [[Probabilita]], [[Calcolo Combinatorio]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Calcolo combinatorio (disposizioni, permutazioni, combinazioni)]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 3

3. Si consideri la funzione $f:\mathbb{R}\to\mathbb{R}$ definita ponendo:
$$f(x)=\begin{cases} ax^2+\dfrac{1}{2} & \text{se } x<1 \\ e^{b-x} & \text{se } x\ge 1 \end{cases}$$
Determinare i parametri reali $a$ e $b$ in modo che la funzione risulti derivabile in tutto il suo dominio. Dopo aver tracciato i grafici di $f(x)$ e di $f'(x)$, dire se esiste $f''(1)$.

**Topic:** [[Derivate]], [[Esponenziali e Logaritmi]], [[Topics/Studio di Funzione|Studio di Funzione]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Analisi qualitativa e deduzione di grafici]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Lettura e interpretazione di grafici e funzioni]], [[Ragionamento logico-deduttivo]]
**Tipo funzione:** [[Definita a tratti  per casi|Definita a tratti / per casi]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 4

4. Data la superficie sferica $\Gamma$ di equazione $x^2+y^2+z^2-2x+4y-4=0$ e le rette $r_1$ e $r_2$ di equazioni:
$$r_1:\begin{cases} x=3t \\ y=0 \\ z=-3t+2 \end{cases}\ (t\in\mathbb{R}),\qquad r_2:\begin{cases} x=3s+2 \\ y=-4 \\ z=-3s-2 \end{cases}\ (s\in\mathbb{R}),$$
siano $A$ e $B$ i punti di intersezione tra $\Gamma$ e la retta $r_1$ e $C$ e $D$ i punti di intersezione tra $\Gamma$ e la retta $r_2$. Dimostrare che i punti $A$, $B$, $C$ e $D$ appartengono a uno stesso piano $\alpha$ contenente il centro della superficie sferica e determinare l'equazione di tale piano.

**Topic:** [[Geometria nello Spazio]], [[Geometria Analitica (piano)]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Sistemi di equazioni]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Visualizzazione spaziale e geometrica]], [[Calcolo simbolico e manipolazione algebrica]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 5

5. Nel diagramma in figura è rappresentata una trasformazione ciclica di un particolare sistema termodinamico. *(figura nel PDF)* Il tratto $AB$ è lineare; lungo il tratto $BC$ il prodotto $p\cdot V$ è costante; infine nel tratto $CA$ sussiste tra $p$ e $V$ una relazione del tipo $p=\alpha V+\beta$ dove $\alpha$ e $\beta$ sono due costanti reali. Ricavare i valori di $\alpha$ e $\beta$, specificandone l'unità di misura. Utilizzando il calcolo integrale, calcolare poi il lavoro totale $W$, in joule, compiuto dal sistema in un ciclo specificandone il segno e approssimando il risultato alle unità.

**Topic:** [[Topics/Fisica|Fisica]], [[Calcolo Integrale]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 6

6. In un laboratorio posto sulla Terra, sotto una campana a vuoto uno ione Ag⁺ (carica pari a $+e$, massa $m=1{,}79\cdot10^{-25}$ kg) è lanciato obliquamente verso l'alto con una velocità iniziale di 1,53 m/s inclinata di 45° rispetto all'orizzontale e da un'altezza di 3,20 cm rispetto alla base della campana. La base stessa è elettrizzata con una carica negativa che genera un campo elettrico corrispondente a quello di una distribuzione piana e infinita di carica con densità superficiale di carica $\sigma=-7{,}92\cdot10^{-17}$ C/m². Determinare qual è la velocità con cui lo ione Ag⁺ colpisce la base della campana a vuoto e la durata del suo volo.

**Topic:** [[Topics/Fisica|Fisica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo numerico e stima]], [[Interpretazione e formalizzazione del testo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 7

7. Un fascio di radiazione infrarossa, che si propaga nel vuoto, in 4,16 s fornisce 1,97 J di energia a una superficie piana di area pari a 31,6 cm², posta perpendicolarmente all'onda elettromagnetica. Calcolare:
   a. la densità volumica media di energia dell'onda elettromagnetica infrarossa;
   b. i valori massimi del campo elettrico e del campo magnetico dell'onda.

**Topic:** [[Topics/Fisica|Fisica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo numerico e stima]], [[Interpretazione e formalizzazione del testo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)

## Quesito 8

8. Un esperimento sull'effetto Compton viene eseguito con raggi X che hanno una frequenza di $3{,}220\cdot10^{17}$ Hz. Determinare l'energia dei fotoni che hanno subito la diffusione Compton a un angolo di 130,3° e la corrispondente velocità iniziale dell'elettrone dopo la diffusione.

**Costanti fisiche.** Carica elementare $e=1{,}602\cdot10^{-19}$ C; costante di Planck $h=6{,}626\cdot10^{-34}$ J·s; costante dielettrica del vuoto $\varepsilon_0=8{,}854\cdot10^{-12}$ F/m; massa dell'elettrone $m_e=9{,}109\cdot10^{-31}$ kg; permeabilità magnetica del vuoto $\mu_0=4\pi\cdot10^{-7}$ N/A²; velocità della luce nel vuoto $c=2{,}998\cdot10^{8}$ m/s.

**Topic:** [[Topics/Fisica|Fisica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo numerico e stima]], [[Interpretazione e formalizzazione del testo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte2_2019_2_46#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/prova #area/analisi #cluster/studio_di_funzione
