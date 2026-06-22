---
tipo: prova
prova_id: prova_2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64
anno: '2019'
pdf: Prova_Maturita_2019.pdf
cluster: Studio di Funzione
tags:
  - maturita/prova
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
title: 2019 Ordinaria Boreale 2 — Prova
---

Fonte: p.64 · [📄 Apri PDF](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)
**Cluster:** [[Clusters/Studio di Funzione|Studio di Funzione]]

## Problema 1

Si consideri la funzione
$$E(x)=\frac{-A\,x}{(1-x^2)^2}$$
dove $A$ è una costante positiva.

- Descrivere l'andamento della funzione $E(x)$ e rappresentarne il grafico, individuandone gli asintoti, la simmetria ed il punto di flesso $F$. Scrivere l'equazione della retta tangente al grafico in $F$.

- Determinare i valori dei seguenti integrali:
$$B=\int_{-\frac{1}{2}}^{0} E(x)\,dx \qquad C=\int_{-\frac{1}{2}}^{\frac{1}{4}} E(x)\,dx \qquad D=\int_{-\frac{1}{2}}^{\frac{1}{4}} |E(x)|\,dx$$
specificando il significato geometrico di ciascuno di essi.

- Considerato un sistema di riferimento ortogonale $Oxy$, dove le lunghezze sono espresse in metri (m), si pongono due cariche uguali positive puntiformi $q_1$ e $q_2$ nei punti $P_1(-1,0)$ e $P_2(1,0)$. Le quantità di carica sono espresse in coulomb (C). Dimostrare che il modulo del campo elettrico nei punti di coordinate $(x,0)$, con $-1<x<1$, è espresso da $|E(x)|$, per un'opportuna scelta della costante $A$. Effettuare un'analisi dimensionale di $A$ e spiegare qual è il significato fisico dell'integrale $B$ calcolato al punto 2.

- Determinare modulo, direzione e verso del campo elettrostatico generato dalle cariche $q_1$ e $q_2$ rispettivamente nei punti $S(0,1)$ e $T(0,\sqrt{3})$. Quali sono i valori del potenziale elettrostatico nei punti $S$ e $T$?

**Topic:** [[Topics/Studio di Funzione|Studio di Funzione]], [[Calcolo Integrale]], [[Topics/Fisica|Fisica]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Dimostrazione e argomentazione rigorosa]], [[Lettura e interpretazione di grafici e funzioni]], [[Calcolo simbolico e manipolazione algebrica]]
**Tipo funzione:** [[Razionale fratta]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Problema 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Problema 2

In uno dei possibili modelli per descrivere l'effetto della resistenza dell'aria in un moto di caduta libera, si suppone che il modulo della forza di attrito $F$, opposta alla forza peso, risulti
$$F=k\cdot[v(t)]^2$$
dove $v(t)$ indica la velocità di caduta all'istante $t$ e $k$ è una costante positiva. Tutte le grandezze fisiche presenti sono espresse nelle unità di misura del S.I. Nell'ipotesi che tale modello sia applicabile, il modulo della velocità di caduta in ciascun istante è esprimibile con una funzione della forma
$$v(t)=h\,\frac{e^{bt}-1}{e^{bt}+1}$$
dove $h$ e $b$ sono opportune costanti positive.

- Determinare le unità di misura della costante $k$. Verificare che, in questo modello, l'accelerazione istantanea del corpo è espressa dalla funzione
$$a(t)=\frac{2hb\,e^{bt}}{(e^{bt}+1)^2}$$
mentre una legge oraria che può descrivere il moto del corpo è
$$s(t)=\frac{2h}{b}\cdot\ln(1+e^{bt})-ht$$
Utilizzando, per valori molto grandi di $t$, l'approssimazione $1+e^{bt}\simeq e^{bt}$, mostrare che si ha $s(t)\simeq ht$. Inoltre, provare che la velocità è crescente e tende al valore limite $h$.

- Dopo aver verificato che l'accelerazione è decrescente e tende a $0$ al trascorrere del tempo, fornire un'interpretazione fisica della situazione fin qui descritta. Posto $h=\sqrt{mg/k}$ e $b=2\sqrt{kg/m}$, dove $m$ indica la massa del corpo e $g$ l'accelerazione di gravità, verificare che viene rispettato il 2° principio della dinamica. Dedurre, da quanto posto, che $h$ e $b$ hanno, rispettivamente, le dimensioni di una velocità e del reciproco di un tempo.

- Tracciare, indipendentemente dalla situazione fisica, il grafico $\Gamma$ della funzione $v(t)$ per $t\in\mathbb{R}$, specificandone la simmetria. Dedurre da esso, in modo qualitativo, il grafico della sua primitiva passante per il punto $\left(0;\dfrac{2h}{b}\ln 2\right)$. In particolare, stabilire se la primitiva ammette asintoti obliqui e, in caso affermativo, scriverne le equazioni, sempre considerando che, per $t\to+\infty$, si può ricorrere all'approssimazione $1+e^{bt}\simeq e^{bt}$.

- Preso $t_0>0$, calcolare l'area $A$ della regione $R$ nel 1° quadrante che è delimitata dal grafico $\Gamma$, dall'asse delle ascisse e dalla retta di equazione $t=t_0$. Stabilire se, per $t_0\to+\infty$, l'area $A$ tende o meno ad un valore finito. Infine, preso $\tau>0$, calcolare il valore dell'integrale
$$\int_{-\tau}^{+\tau} a(t)\,dt$$
e stabilire il suo comportamento per $\tau\to+\infty$.

**Topic:** [[Topics/Fisica|Fisica]], [[Topics/Studio di Funzione|Studio di Funzione]], [[Esponenziali e Logaritmi]], [[Calcolo Integrale]]
**Metodi:** [[Studio di funzione completo]], [[Derivazione e calcolo di derivate]], [[Integrazione (calcolo di integrali)]], [[Calcolo di limiti e continuita]], [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Lettura e interpretazione di grafici e funzioni]], [[Calcolo simbolico e manipolazione algebrica]], [[Dimostrazione e argomentazione rigorosa]]
**Tipo funzione:** [[Irrazionale]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Problema 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 1

1. Assegnata la funzione $f(x)=x^2+3x-\dfrac{3}{x}$, mostrare che esiste un solo valore $b>-3$ tale che nell'intervallo $[-3,b]$ siano rispettate tutte le ipotesi del teorema di Rolle. Determinare tale valore $b$.

**Topic:** [[Derivate]], [[Topics/Studio di Funzione|Studio di Funzione]]
**Metodi:** [[Teoremi del calcolo (Rolle, Lagrange, valor medio, T. fond. calcolo integrale)]], [[Derivazione e calcolo di derivate]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Applicazione consapevole di teoremi]], [[Ragionamento logico-deduttivo]], [[Problem solving (strategia risolutiva non immediata)]]
**Tipo funzione:** [[Razionale fratta]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 1|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 2

2. Dopo aver verificato che la curva di equazione $|y|+|x|^3=1$ è simmetrica sia rispetto all'asse $x$ sia rispetto all'asse $y$, determinare l'area della regione piana delimitata da tale curva.

**Topic:** [[Calcolo Integrale]], [[Geometria Analitica (piano)]]
**Metodi:** [[Integrazione (calcolo di integrali)]], [[Calcolo di aree e volumi con integrali (solidi di rotazione)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Calcolo simbolico e manipolazione algebrica]], [[Dimostrazione e argomentazione rigorosa]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 2|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 3

3. Dimostrare che, se in un parallelogramma si tracciano le due diagonali, esso viene suddiviso in quattro triangoli di area uguale. Discutere la validità o meno dell'affermazione inversa: se un quadrilatero convesso viene suddiviso dalle sue diagonali in quattro triangoli di area uguale, allora esso è un parallelogramma.

**Topic:** [[Geometria Euclidea]]
**Metodi:** [[Geometria euclidea sintetica (similitudine, teoremi su triangolicerchi)|Geometria euclidea sintetica (similitudine, teoremi su triangoli/cerchi)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Dimostrazione e argomentazione rigorosa]], [[Ragionamento logico-deduttivo]], [[Visualizzazione spaziale e geometrica]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 3|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 4

4. Sono assegnati, nello spazio tridimensionale, i punti $A(-1,3,2)$, $B(3,4,2)$, $C(5,1,4)$, $D(1,0,4)$. Dopo aver dimostrato che $ABCD$ è un rombo, determinare l'area di tale rombo ed il raggio della circonferenza in esso inscritta.

**Topic:** [[Geometria nello Spazio]], [[Geometria Euclidea]]
**Metodi:** [[Impostazione con geometria analitica (coordinate, coniche)]], [[Geometria solida nello spazio (volumi, superfici, sezioni)]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]]
**Competenze:** [[Visualizzazione spaziale e geometrica]], [[Dimostrazione e argomentazione rigorosa]], [[Calcolo simbolico e manipolazione algebrica]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 4|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 5

5. Alberto e Barbara fanno un gioco: ognuno lancia contemporaneamente 5 dadi, con facce numerate da 1 a 6. Ciascun dado fa guadagnare un punto a chi lo ha lanciato se esce il numero 5 o il 6; le facce da 1 a 4 non fanno guadagnare punti. Vince chi, con i 5 dadi lanciati, realizza più punti. Qual è la probabilità che pareggino?

**Topic:** [[Probabilita]], [[Calcolo Combinatorio]]
**Metodi:** [[Probabilita (classica, condizionata, Bayes, distribuzioni)]], [[Calcolo combinatorio (disposizioni, permutazioni, combinazioni)]]
**Competenze:** [[Analisi e interpretazione di dati e probabilita]], [[Calcolo numerico e stima]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 5|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 6

6. Un elettrone, un protone e una particella $\alpha$ sono accelerati, da fermi, da una differenza di potenziale $\Delta V$ e in seguito penetrano, nello stesso punto, in un campo magnetico $\vec{B}$, uniforme e perpendicolare alle velocità. Esprimere i raggi di curvatura delle traiettorie del protone e della particella $\alpha$ in funzione del raggio di curvatura dell'elettrone. A parte l'entità dei raggi di curvatura, in cosa differiranno le traiettorie?

**Topic:** [[Topics/Fisica|Fisica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Ragionamento logico-deduttivo]], [[Calcolo numerico e stima]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 6|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 7

7. Due conduttori rettilinei, paralleli e complanari sono percorsi da correnti concordi di intensità $I_1=4$ A e $I_2=6$ A. I due conduttori sono fissati ad una distanza di 2 cm uno dall'altro. Determinare modulo, direzione e verso del campo magnetico nei punti del piano equidistanti dai due conduttori. Un terzo conduttore rettilineo, attraversato da una corrente $I_3$, libero di muoversi lateralmente, viene posto tra i primi due come in figura. Calcolare la posizione nella quale quest'ultimo conduttore resta in equilibrio. Determinare il verso della corrente $I_3$ in modo che la precedente posizione di equilibrio sia stabile. *(figura nel PDF)*

**Topic:** [[Topics/Fisica|Fisica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Sistemi di equazioni]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Calcolo numerico e stima]], [[Ragionamento logico-deduttivo]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 7|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)

## Quesito 8

8. Considerare due sistemi di riferimento inerziali $\mathcal{R}$ e $\mathcal{R}'$ con assi paralleli. $\mathcal{R}'$ si muove con velocità $v>0$, rispetto a $\mathcal{R}$, lungo l'asse $x$. Inoltre, quando $t=t'=0$, le origini $O,O'$ dei due sistemi di riferimento coincidono. Si dimostra che la velocità $\vec{w}'=(w'_x,w'_y,w'_z)$ di una particella rispetto a $\mathcal{R}'$ è legata alla velocità $\vec{w}=(w_x,w_y,w_z)$ della medesima particella rispetto a $\mathcal{R}$ attraverso le seguenti relazioni (trasformazioni delle velocità):
$$w'_x=\frac{w_x-v}{1-\dfrac{w_x v}{c^2}},\qquad w'_y=\frac{w_y\sqrt{1-v^2/c^2}}{1-\dfrac{w_x v}{c^2}},\qquad w'_z=\frac{w_z\sqrt{1-v^2/c^2}}{1-\dfrac{w_x v}{c^2}}.$$
Mostrare, utilizzando le trasformazioni delle velocità, che se $\vec{w}\equiv(0,c,0)$ o $\vec{w}\equiv(c,0,0)$, dove $c$ è la velocità di un raggio luminoso nel vuoto, allora il modulo della velocità $\vec{w}'$ vale $c$. Questo risultato poteva essere dedotto a priori senza effettuare alcun calcolo?

**Topic:** [[Topics/Fisica|Fisica]]
**Metodi:** [[Modellizzazione matematica di un problema realeapplicato|Modellizzazione matematica di un problema reale/applicato]], [[Dimostrazioneprova rigorosa di una proprieta|Dimostrazione/prova rigorosa di una proprieta]], [[Risoluzione di equazioni e disequazioni]]
**Competenze:** [[Modellizzazione matematica di situazioni]], [[Ragionamento logico-deduttivo]], [[Calcolo simbolico e manipolazione algebrica]]
**Soluzione:** [[Soluzioni/2019_sessione_ordinaria_2019_calendario_boreale_2_prova_64#Quesito 8|📝 Svolgimento (LaTeX)]] · [📄 PDF p.64](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)


#maturita/prova #area/analisi #cluster/studio_di_funzione
