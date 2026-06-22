---
tipo: prova
prova_id: prova_2022_sessione_ordinaria_2022_prova_95
anno: '2022'
pdf: Prova_Maturita_2022.pdf
cluster: Studio di Funzione
tags:
  - maturita/prova
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2022
title: 2022 Ordinaria — Prova
---

Fonte: p.95 · [📄 Apri PDF](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)
**Cluster:** [[Clusters/Studio di Funzione|Studio di Funzione]]

## Problema 1

Un'influenza si diffonde molto rapidamente in un paese, e i contagi (in migliaia) evolvono seguendo un andamento descritto dalla seguente funzione

$$y = f(t) = \frac{Ae^{-kt}}{(1 + Be^{-kt})^2}, \qquad \text{con } A, B \in \mathbb{N}, \ t \ge 0 \ \text{e} \ k = \frac{1}{10}.$$

La variabile $t$ rappresenta il tempo, misurato in giorni, con $t = 0$ corrispondente al giorno in cui sono stati registrati 10000 contagi. I virologi, analizzando i dati in loro possesso, prevedono che il picco della curva dei contagi si raggiungerà il ventiduesimo giorno.

1. Determinare i valori dei parametri $A$ e $B$ in modo che siano verificate le condizioni sopra descritte. Se necessario, approssimare i risultati ai valori naturali più prossimi.

2. Considerando $A = 1000$ e $B = 9$, tracciare un grafico qualitativo della funzione $f$, prescindendo dal problema (cioè considerando $t$ una variabile reale) ed effettuando lo studio fino alla derivata prima. Secondo il modello proposto, determinare la velocità di crescita dei nuovi contagi giornalieri nel nono giorno di epidemia.

3. Dedurre con sole considerazioni logiche, a partire dal grafico della funzione $f$, un grafico qualitativo della funzione $y = f'(t)$. Determinare il significato della funzione $f'$ nel contesto del problema, cioè in relazione all'evoluzione dell'epidemia.

4. Si consideri ora la funzione integrale:

$$F(t) = \int_0^t f(x)\,dx, \qquad \text{con } t \ge 0$$

Determinare la sua espressione analitica e tracciarne un grafico qualitativo. Determinare il significato della funzione $F$ nel contesto del problema. Secondo il modello espresso dalla funzione $F$, determinare quanti contagi vengono registrati complessivamente nei primi 30 giorni di epidemia. Determinare il significato dell'asintoto orizzontale della funzione $F$ in relazione all'evoluzione dell'epidemia.

5. Il governo interviene con misure drastiche di contenimento dell'epidemia a partire dal decimo giorno. Grazie ad esse la funzione che descrive l'evoluzione dei contagi giornalieri diviene

$$y = g(t) = \frac{t + 10}{1 + (t - 10)^2}, \qquad t \ge 10.$$

Determinare il numero di contagi totali nei primi 30 giorni di epidemia, tenendo conto delle misure adottate dal governo.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Esponenziali e Logaritmi]], [[Funzioni Integrali]], [[Calcolo Integrale]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Analisi qualitativa e deduzione di grafici]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Lettura e interpretazione di grafici e funzioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Esponenziale]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Problema 2

La figura mostra il grafico $G$ della funzione derivabile $y = f(x)$ per $x \in [-1; 4]$. $G$ presenta due punti stazionari in $O$ e $B$ e le aree delle regioni di piano $A_1$, $A_2$, $A_3$ e $A_4$ sono rispettivamente $\frac{5}{4}$; $4$; $\frac{11}{4}$ e $\frac{27}{4}$.

*(figura nel PDF: punti $A(-1; 4)$, $B(2; 4)$, $C(3; 0)$, $D(4; -16)$)*

Sia $F$ la funzione integrale di $f$ relativa al punto $x = 0$:

$$F(x) = \int_0^x f(t)\,dt$$

1. Calcolare $F(-1)$, $F(0)$, $F(2)$, $F(3)$ e $F(4)$. Individuare i punti di massimo, di minimo e di flesso della funzione $F$ e tracciarne il grafico probabile. Determinare quindi la retta tangente al grafico della funzione $F$ nel suo punto di ascissa 2.

2. Verificare che la funzione $F$ soddisfa le ipotesi del teorema di Rolle nell'intervallo $[0; 4]$ e si determinino il o i valori $c$ che soddisfano la tesi del teorema stesso.

3. Assumendo da ora in poi che la funzione $f(x)$ sia descritta da un polinomio di terzo grado, determinare l'espressione analitica della funzione $F$ e determinare l'area della regione finita di piano delimitata dal grafico di $F$, dalla retta $t$ e dall'asse $y$.

4. Si consideri ora la funzione $f(x)$ e si costruisca un triangolo avente i vertici, rispettivamente, nell'origine degli assi cartesiani, nel punto della funzione di ascissa $k$, e nel punto $P$ sua proiezione sull'asse $x$. Determinare il valore $0 \le k \le 3$ per cui la sua area risulta massima.

5. Volendo approssimare il grafico di $f(x)$ con una funzione della forma

$$y = x^A e^{B-x}, \qquad A, B > 1$$

determinare i valori di $A$ e $B$ in modo che presenti gli stessi punti stazionari.

**Topic:** [[Funzioni Integrali]], [[Calcolo Integrale]], [[Massimi e Minimi]], [[Derivate]]
**Metodi:** [[Studio di funzione completo]], [[Integrazione (calcolo di integrali)]], [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Analisi qualitativa e deduzione di grafici]]
**Competenze:** [[Lettura e interpretazione di grafici e funzioni]], [[Applicazione consapevole di teoremi]], [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 1

1. Determinare per quale valore del parametro reale positivo $k$ la funzione
$$f(x) = \frac{1}{e} + \frac{3}{2}xe^{kx^2}$$
ha minimo assoluto uguale a zero.

**Topic:** [[Massimi e Minimi]], [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Ottimizzazione e ricerca dell'ottimo]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 2

2. Calcolare il seguente limite:
$$\lim_{x \to 0} \frac{\cos x - \cos 2x}{1 - \cos x}$$

**Topic:** [[Limiti e Continuita]], [[Trigonometria]]
**Metodi:** [[Calcolo di limiti e continuita]], [[Uso di relazioni e identita trigonometriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 3

3. Si consideri la funzione:
$$f(x) = \begin{cases} ax^2 + \frac{3}{2} & \text{se } x < 1 \\ e^{b-x} & \text{se } x \ge 1 \end{cases}$$
Determinare i parametri reali $a$ e $b$ in modo che la funzione risulti continua e derivabile in tutto il suo dominio.

**Topic:** [[Limiti e Continuita]], [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Calcolo di limiti e continuita]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 4

4. Si consideri la funzione:
$$f(x) = \begin{cases} x^2 - 5x + 6 & \text{se } x \le 3 \\ \ln(x - 2) & \text{se } x > 3 \end{cases}$$
Dimostrare che $f(x)$ soddisfa le ipotesi del teorema di Lagrange nell'intervallo $[2; 4]$ e determinare l'ascissa del o dei punti che ne soddisfano la tesi.

**Topic:** [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]], [[Derivazione e calcolo di derivate]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Applicazione consapevole di teoremi]], [[Calcolo simbolico e manipolazione algebrica]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 5

5. Dimostrare che l'equazione:
$$\arctan(-x) = 2x^3$$
ha una e una sola soluzione reale.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Derivate]], [[Equazioni e Disequazioni]]
**Metodi:** [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Derivazione e calcolo di derivate]], [[Teoremi di esistenza (continuita, Weierstrass, valori intermedi, zeri)]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Applicazione consapevole di teoremi]], [[Ragionamento logico-deduttivo]]
**Tipo funzione:** [[Mista  trascendente composita|Mista / trascendente composita]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 6

6. Data la funzione
$$y = \frac{ax^2 + bx + c}{x + 2}$$
determinare il valore dei parametri $a$, $b$ e $c$ in modo tale che la retta $y = 3x - 8$ sia un suo asintoto obliquo per $x \to +\infty$ e la retta tangente al grafico della funzione nel suo punto di ascissa $x = 0$ formi un angolo di $45°$ con la direzione positiva dell'asse $x$.

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Derivate]], [[Limiti e Continuita]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Calcolo di limiti e continuita]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Collegamento tra ambiti matematici diversi]]
**Tipo funzione:** [[Razionale fratta]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 7

7. La funzione $y = \ln x$ divide in due parti il rettangolo di vertici $A(1; 0)$, $B(e^2; 0)$, $C(e^2; 2)$ e $D(1; 2)$. Determinare la differenza tra le aree delle due parti.

**Topic:** [[Calcolo Integrale]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Lettura e interpretazione di grafici e funzioni]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)

## Quesito 8

8. Dimostrare che le curve di equazione $y = x^2 + kx + k$ passano tutte per uno stesso punto.

**Topic:** [[Geometria Analitica (piano)]], [[Equazioni e Disequazioni]]
**Metodi:** [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Sistemi di equazioni]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Ragionamento logico-deduttivo]], [[Astrazione e generalizzazione]]
**Soluzione:** [[Soluzioni/2022_sessione_ordinaria_2022_prova_95#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.95](https://drive.google.com/file/d/1V_wgAuSmeJCjjXhGqk4gv1aIb9rsuWmj/view)


#maturita/prova #area/analisi #cluster/studio_di_funzione
