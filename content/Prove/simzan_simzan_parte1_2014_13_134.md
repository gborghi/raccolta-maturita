---
tipo: prova
prova_id: prova_simzan_simzan_parte1_2014_13_134
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/prova
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
title: 'Simulazione Zanichelli 2014 #13'
---

Fonte: p.134 · [📄 Apri PDF](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)
**Cluster:** [[Clusters/Studio di Funzione|Studio di Funzione]]

## Problema 1

Al termine di un'escursione di trekking in montagna, Giulia ha raggiunto un rifugio. Grazie alla nuova app che ha scaricato, ha potuto rilevare con esattezza alcuni dati relativi al percorso effettuato, riassunti nella seguente tabella.

| Distanza percorsa (km) | 0 | 3 | 12 | 20 | 27 | 30 |
|---|---|---|---|---|---|---|
| Tempo trascorso (h) | 0 | 1 | 3 | 5 | 6 | 7 |
| Altitudine s.l.m. (m) | 1000 | 1640 | 1800 | 1460 | 1900 | 2350 |

Velocità min/max: $v_{\min}=3$ km/h, $v_{\max}=\dfrac{17}{3}$ km/h.

a) Supponiamo che negli intervalli di cui conosciamo gli estremi la pendenza sia costante; disegna il grafico a tratti che rappresenta l'altitudine raggiunta sul livello del mare (in metri) in funzione della distanza percorsa (in chilometri). La pendenza relativa al percorso $AB$ della figura è data dal rapporto $\dfrac{h}{l}$. *(figura nel PDF)*

Per calcolare la pendenza del suo percorso, Giulia decide di approssimare, in ognuno dei tratti, la lunghezza in orizzontale $l$ con la distanza $d$ percorsa sul terreno.

b) Se accettiamo questa approssimazione, considerando solo l'altitudine del punto di partenza e di quello d'arrivo, qual è la pendenza percentuale media del percorso di Giulia?

c) Possiamo perfezionare il nostro modello pensando che, come avviene nella realtà, il grafico negli estremi dei tratti non abbia punti angolosi e la funzione sia quindi derivabile in ogni punto. In questa ipotesi, giustifica che deve esistere almeno un punto del cammino, distinto dalla partenza e dall'arrivo, in cui la pendenza del sentiero è $4{,}5\%$.

d) Ricava l'altitudine media sul livello del mare a cui si svolge la camminata, con la precisione di una cifra decimale, mostrando dettagliatamente il procedimento seguito.

Ora Giulia decide di ricavare una funzione $v(t)$ che approssimi la velocità istantanea in funzione del tempo trascorso.

e) Dimostra che esiste una sola funzione polinomiale di terzo grado $v(t)=at^3+bt^2+ct+d$ (dove $t$ è il tempo trascorso espresso in ore) che presenta nell'intervallo $0\le t\le 7$ un minimo e un massimo relativi corrispondenti a quelli indicati in tabella e ricava i valori dei coefficienti $a$, $b$, $c$, $d$. Una volta mostrato che la funzione cercata è:
$$v(t)=-\frac{1}{12}t^3+\frac{3}{4}t^2-\frac{5}{4}t+\frac{43}{12},$$
rappresentala nell'intervallo $0\le t\le 7$.

f) Spiega cosa rappresenta l'area sottesa dal grafico di $v(t)$ nell'intervallo $0\le t\le 7$, calcolane la misura e utilizzala per stimare la velocità media tenuta da Giulia durante la camminata, approssimando il risultato ai centesimi. Qual è l'errore relativo percentuale che si compie utilizzando il grafico di $v(t)$ per calcolare la stima della distanza percorsa da Giulia rispetto al dato reale riportato in tabella?

**Topic:** [[Calcolo Integrale]], [[Derivate]], [[Topics/Studio di Funzione|Studio di Funzione]], [[Statistica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Integrazione (calcolo di integrali)]], [[Studio di funzione completo]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Interpretazione e formalizzazione del testo]], [[Calcolo numerico e stima]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Polinomiale]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Problema 2

Nell'ambito di uno studio epidemiologico riguardante la diffusione di una patologia influenzale in presenza di determinate strategie di prevenzione e cura, alcuni ricercatori hanno elaborato un semplice modello matematico per esprimere l'andamento temporale del numero di persone infette in un dato campione.

Indicato con $t$ il tempo trascorso, in giorni, dall'inizio della diffusione della patologia nel campione, secondo il modello il numero $n(t)$ di persone infette al giorno $t$ è espresso da una funzione del tipo:
$$n(t)=\frac{ae^t}{(b+e^t)^2},$$
con $a$ e $b$ costanti reali positive e $t$ variabile reale positiva.

a) Dimostra che, comunque si scelgono le costanti $a$ e $b$, il modello prevede l'estinzione della patologia nel campione.

b) Dimostra che, se $b>1$, vi è comunque un picco di massima diffusione in un momento $\bar t$ e che il numero di malati è nuovamente quello iniziale per $t=2\bar t$.

c) Sempre con $b>1$, supponi che il numero iniziale di malati sia $n_0=16$ e che il numero massimo di malati si verifichi per $\bar t=2\ln 2$. Dimostra che i valori delle costanti sono allora $a=400$ e $b=4$, quindi rappresenta la funzione $n(t)$ così ottenuta per $t\ge 0$, tralasciando lo studio della derivata seconda.

Assumi ora che $n(t)$ sia la funzione determinata al punto precedente.

d) Qual è stato il numero medio di persone infette in un giorno nel periodo $0\le t\le 2\bar t$? Mostra in dettaglio il procedimento seguito.

e) La funzione $n(t)$ si riferisce a un campione che mappa l'$1\unicode{x2030}$ dell'intera popolazione. Se ogni ammalato è rimasto infettato in media due giorni, qual è stato approssimativamente il numero totale di ammalati fra la popolazione nei primi 100 giorni di studio?

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Esponenziali e Logaritmi]], [[Calcolo Integrale]], [[Massimi e Minimi]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Problem solving (strategia risolutiva non immediata)]], [[Interpretazione e formalizzazione del testo]], [[Dimostrazione e argomentazione rigorosa]]
**Tipo funzione:** [[Mista  trascendente composita|Mista / trascendente composita]], [[Dipendente da un parametro]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 1

1. Considera la curva $\gamma$ di equazione $y=-x^2+4x$ e il fascio di rette di equazione $y=mx$, con $m\in\mathbb{R}$. Ricava i valori di $m$ per i quali la corrispondente retta del fascio e la curva $\gamma$ delimitano una regione piana di area $\dfrac{9}{2}$.

**Topic:** [[Calcolo Integrale]], [[Geometria Analitica (piano)]]
**Metodi:** [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Integrazione (calcolo di integrali)]], [[Discussione di famiglie di curvefunzioni parametriche|Discussione di famiglie di curve/funzioni parametriche]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Problem solving (strategia risolutiva non immediata)]], [[Lettura e interpretazione di grafici e funzioni]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 2

2. Per decidere la meta del fine settimana, Mario lancia un dado regolare a sei facce: se esce 1 o 3, sceglierà la località A, altrimenti la località B. Le previsioni meteo per il fine settimana indicano cielo nuvoloso con probabilità $30\%$ nella località A e $40\%$ nella località B. Al suo ritorno, Mario incontra Lucia e le dice di aver trascorso un bel weekend di sole. Qual è la probabilità che Mario abbia trascorso il fine settimana nella località A?

**Topic:** [[Probabilita]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Modellizzazione matematica di situazioni]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 3

3. Un rubinetto versa acqua in un recipiente di capacità 20 litri, inizialmente vuoto, con una portata variabile (misurata in litri/minuto) espressa dalla legge $p(t)=\dfrac{10}{1+t}$. Calcola il tempo, in minuti e secondi, necessario per riempire il recipiente.

**Topic:** [[Calcolo Integrale]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 4

4. Assegnata la funzione $f(x)=3\ln x+2x^2$, ricava l'equazione della retta tangente al grafico della funzione $F(x)=f^{-1}(x)$, inversa di $f(x)$, nel suo punto di ascissa 2, dopo aver dimostrato che $f(x)$ è una funzione invertibile.

**Topic:** [[Derivate]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Derivazione e calcolo di derivate]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Studio di funzione completo]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]], [[Applicazione consapevole di teoremi]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 5

5. Anna e Berto si trovano sulla stessa riva di un fiume, a 50 m di distanza l'una dall'altro. Per guardare uno stesso albero che si trova sulla riva opposta, Anna deve girare lo sguardo di 45° rispetto alla perpendicolare alla riva, Berto di 60°. Le informazioni assegnate sono sufficienti per determinare in modo univoco la larghezza del fiume? Motiva adeguatamente la risposta.

**Topic:** [[Trigonometria]]
**Metodi:** [[Uso di relazioni e identita trigonometriche]], [[Impostazione con geometria analitica (coordinate, coniche)]], [[Sistemi di equazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Ragionamento logico-deduttivo]], [[Problem solving (strategia risolutiva non immediata)]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 6

6. Un contenitore di assegnata capacità $V$ ha la forma di un cilindro sormontato alle basi da due coni equilateri aventi le basi coincidenti con quelle del cilindro. Determina per quale valore del raggio di base del cilindro la superficie totale del contenitore risulta minima.

**Topic:** [[Massimi e Minimi]], [[Geometria Solida]]
**Metodi:** [[Ottimizzazione ricerca di massimi e minimi|Ottimizzazione: ricerca di massimi e minimi]], [[Derivazione e calcolo di derivate]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Ottimizzazione e ricerca dell'ottimo]], [[Modellizzazione matematica di situazioni]], [[Visualizzazione spaziale e geometrica]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 7

7. In un riferimento cartesiano $Oxyz$ sono assegnate una sfera di centro l'origine $O$ e raggio 5 e la retta $r$ rappresentata dal sistema parametrico:
$$\begin{cases} x=-4t\\ y=-3, & \text{con } t\in\mathbb{R}.\\ z=3t \end{cases}$$
Ricava le coordinate dei punti $A$ e $B$ in cui la retta interseca la superficie sferica, la lunghezza del segmento $AB$ e la misura in gradi sessagesimali, minuti e secondi dell'angolo acuto $\alpha$ che la retta $r$ forma con il piano $xy$.

**Topic:** [[Geometria nello Spazio]], [[Trigonometria]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Sistemi di equazioni]], [[Uso di relazioni e identita trigonometriche]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Visualizzazione spaziale e geometrica]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 8

8. $f(x)$ è una funzione continua nell'intervallo $[2;4]$, derivabile nell'intervallo aperto $]2;4[$ e tale che:
   - a) $f(2)=1$;
   - b) $2\le f'(x)\le 3$ $\forall x\in[2;4]$.

   Stabilisci se è possibile che sia $f(4)=8$, motivando adeguatamente la risposta.

**Topic:** [[Derivate]]
**Metodi:** [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Applicazione consapevole di teoremi]], [[Ragionamento logico-deduttivo]], [[Dimostrazione e argomentazione rigorosa]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 9

9. Una pallina, lasciata cadere da un'altezza di 1 m, rimbalza verticalmente sul pavimento. Nell'urto (anelastico) si perde parte dell'energia cinetica, pertanto la pallina risale fino a un'altezza pari ai $\dfrac{9}{10}$ di quella da cui era caduta, e così via per ogni rimbalzo. Ipotizzando infiniti rimbalzi, stabilisci se la distanza (complessivamente) percorsa dalla pallina nei suoi rimbalzi è infinita o finita e in tal caso a quanto ammonta tale distanza. Motiva la risposta con un opportuno modello matematico.

**Topic:** [[Successioni e Serie]]
**Metodi:** [[Successioni, serie e ricorrenze]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Ragionamento logico-deduttivo]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 9|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)

## Quesito 10

10. Determina gli eventuali asintoti verticali, orizzontali e obliqui della funzione:
$$f(x)=3x-4\ln x.$$

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Limiti e Continuita]], [[Esponenziali e Logaritmi]]
**Metodi:** [[Calcolo di limiti e continuita]], [[Studio di funzione completo]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Lettura e interpretazione di grafici e funzioni]], [[Ragionamento logico-deduttivo]]
**Tipo funzione:** [[Mista  trascendente composita|Mista / trascendente composita]]
**Soluzione:** [[Soluzioni/simzan_simzan_parte1_2014_13_134#Quesito 10|📝 Svolgimento (LaTeX)]] · [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/prova #area/analisi #cluster/studio_di_funzione
