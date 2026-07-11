---
title: 2016 Straordinaria — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2016_sessione_straordinaria_2016_problema2_159_1
of_item: prob_2016_sessione_straordinaria_2016_problema2_159_1
prova_id: prova_2016_sessione_straordinaria_2016_problema2_159
anno: '2016'
pdf: Prova_Maturita_2016.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2016
---

**Problema:** [[Problemi/prob_2016_sessione_straordinaria_2016_problema2_159_1|2016 Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2016_sessione_straordinaria_2016_problema2_159|2016 Straordinaria — Problema 2]]

Sessione straordinaria 2016 - Problema $2$

$1\$

LICEO SCIENTIFICO SESSIONE STRAORDINARIA 2016 - PROBLEMA $2$

La funzione $f: R \to R$ è così definita: f(x) = sen(x) $-x∙cos (x)$

Dimostra che $f$ è una funzione dispari, che per $x\in ]0, \pi$ ] si ha f(x) $> 0$ e che esiste un
solo valore $x^{0} \in ]0,2\pi$ ] tale che $f(x^{0}) = 0.$ Traccia inoltre il grafico della funzione per
$x\in [0,5\pi$ ].

La funzione è definita su tutto l’asse reale e risulta:

$f(-x) = sen(-x) + x∙cos(-x) = -sen(x) +$ x∙cos(x) $= -f(x)$

Quindi la funzione è dispari.

Verifichiamo che per $0< x\le \pi$ si ha f(x) $> 0$ .

sen(x) $-x∙cos(x) > 0$

Se $0 < x<$
$\pi$
$2,$ essendo cos(x) $> 0$ si ha: tg(x) $> x,$ che è sempre verificata:

Se $x=$
$\pi$
$2$ si ha $1 > 0$ e quindi la disequazione è verificata.
Se $x= \pi$ si ha $\pi > 0$ e quindi la disequazione è verificata.
$$ Se $$
$\pi$
$2 < x< \pi$ , essendo sen(x) $> 0$ e xcos(x) $< 0$ risulta sen(x) $-x∙cos(x) > 0$

Quindi per $0 < x\le \pi$ si ha f(x) $> 0$ .

Sessione straordinaria 2016 - Problema $2$

Metodo alternativo.

Consideriamo la funzione f(x) = sen(x) $-x∙cos(x)$ e notiamo che $limx\to 0+$ f(x) $= 0$ ed
$f(\pi ) = \pi > 0$ .

Analizziamo la derivata prima:

f'(x) = cos(x) $-cos(x) +$ x∙sen(x) $> 0$ se x∙sen(x) $> 0$ , che è sempre verificata se
$0 < x< \pi$ ; quindi la funzione è sempre crescente nell’intervallo $]0, \pi$ ]. Quanto detto
permette di concludere che la funzione è sempre positiva in tale intervallo.

Dimostriamo ora che esiste un solo valore $x^{0}\in ]0, 2\pi$ ] tale che $f(x^{0}) = 0.$

Abbiamo già verificato che f'(x) = x∙sen(x) e risulta x∙sen(x) $> 0$ se $0 < x< \pi$ e
x∙sen(x) $< 0$ se $\pi < x< 2\pi$ ; pertanto la funzione è crescente in $]0, \pi$ ] (come già
verificato) e decrescente in $]\pi , 2 \pi$ [; ma risulta $f(\pi ) = \pi > 0$ ed $f(2\pi ) = -2\pi$ , quindi
(essendo la funzione continua nell’intervallo $[\pi , 2 \pi$ ]) essa si annulla una sola volta
nell’intervallo aperto $(\pi , 2 \pi$ ); siccome in $]0, \pi$ ] la funzione è sempre positiva, possiamo
concludere che esiste un solo valore $x^{0} \in ]0,2\pi$ ] tale che $f(x^{0}) = 0.$

Dobbiamo ora tracciare, per $x\in [0, 5\pi$ ], il grafico della funzione

f(x) = sen(x) $-x∙cos(x)$

Per far ciò, in base a quanto già verificato, è sufficiente studiare la derivata prima e la
derivata seconda, dopo aver osservato che nell’intervallo di studio la funzione è continua
e che agli estremi assume i valori: $f(0) = 0$ ed $f(5\pi ) = 5\pi$ .

f'(x) = cos(x) $-cos(x) +$ x∙sen(x) = x∙sen(x) $> 0$ se sen(x) $> 0,$ quindi la funzione è
crescente per:

$0 < x< \pi , 2\pi < x< 3\pi , 4\pi < x< 5\pi$ e decrescente nella parte rimanente. Inoltre:

$x= 0, 2\pi , 4\pi$ sono punti di minimo relativo e $x= \pi , 3\pi , 5\pi$ sono punti di massimo relativo.
Osserviamo che i massimi appartengono alla retta $y=x$ ed i minimi alla retta $y=-x.$

Troviamo gli zeri della derivata seconda

f''(x) = sen(x) + xcos(x) $= 0$ ; osserviamo che se cos(x) $= 0$ dovrebbe essere
sen(x) $= 0$ e ciò non può essere (il seno ed il coseno non si possono annullare
contemporaneamente).

Supponiamo ora cos(x) $\ne 0;$ si ha:

{ cos(x) $\ne 0$
tg(x) $= -x$ ; risolviamo questo sistema graficamente:

Sessione straordinaria 2016 - Problema $2$

Abbiamo dei flessi nei punti di ascissa:

$x= \alpha$ , con
$\pi$
$2 < \alpha < \pi , x= \beta$ , con
$2 \pi < \beta < 2\pi , x= \gamma$ , con
$2 \pi < \gamma < 3\pi$
$x= \delta$ ,
con $7$
$2 \pi < \delta < 4\pi$ ,
$x= \varepsilon$ ,
con $9$
$2 \pi < \varepsilon < 5\pi$

Il grafico della funzione, nell’intervallo richiesto, è il seguente:

Determina il valore dell’integrale definito: $\int$ f(x)dx
$\pi$
$$ 2 0 $$
e, sapendo che risulta:
$\int f^{2}(x)dx= \pi 3$
$48 -\pi$
$\pi$
$$ 2 0 $$

prova che risulta verificata la disequazione: $\pi 3 + 18\pi < 96$ anche non conoscendo il
valore di $\pi$ .

Sessione straordinaria 2016 - Problema $2$

Cerchiamo una primitiva di f(x):

$\int$ (sen(x) $-x∙cos(x))dx= -cos(x) -\int$ x∙cos(x) $dx$

Integrando per parti si ha:

$\int$ x∙cos(x) $dx= \int$ x∙(sen(x))' $dx=$ xsen(x) $-\int sen(x)dx=$ xsen(x) + cos(x) $+ k$

Pertanto:
$\int$ (sen(x) $-x∙cos(x))dx= -cos(x) -\int$ x∙cos(x) $dx= -cos(x) -xsen(x) -cos(x) + k$
Possiamo ora calcolare l’integrale definito:
$\int$ f(x)dx
$\pi$
$$ 2 0 $$
$= \int$ (sen(x) $-x∙cos(x))dx$
$\pi$
$$ 2 0 $$
$= [-2$ cos(x) $-xsen(x)]0$
$\pi$
$= {-\pi$
$2 -[-2]} = 2 -\pi$
$2 = \int$ f(x)dx
$\pi$
$$ 2 0 $$

Dobbiamo ora dedurre da $\int f^{2}(x)dx=$
$\pi 3$
$48 -$
$\pi$
$\pi$
$$ 2 0 $$
che $\pi 3 + 18\pi < 96$ immaginando di non
conoscere il valore di $\pi$ .

Osserviamo che nell’intervallo $]0; \pi /2]$ risulta f(x) $\le 1;$ infatti:

sen(x) $-x∙cos(x) \le 1: 1 -sen(x) \ge -x∙cos(x)$ che risulta verificato nell’intervallo in
questione essendo $1 -sen(x) \ge 0$ e - x∙cos(x) $\le 0.$

Risulta pertanto, in $]0; \pi /2], f^{2}(x) \le$ f(x) e perciò:

$\int f^{2}(x)dx= \pi 3$
$48 -\pi$
$8 \le$
$\pi$
$$ 2 0 $$
$\int$ f(x)dx
$\pi$
$$ 2 0 $$
$= 2 -\pi$

Segue che:

$\pi 3$
$48 -\pi$
$8 \le 2 -\pi$
$2 \Rightarrow \pi 3 + 18\pi < 96 c. v. d.$

Verifica che, qualsiasi sia $n\in N,$ risulta:

$$ \int $$
$f(x)dx= 4$
$(2n+1)\pi$
, $\int$
$f(x)dx= 0$
$2n\pi$

Sessione straordinaria 2016 - Problema $2$

Risulta:

$$ \int $$
f(x)dx
$(2n+1)\pi$
$= [-2$ cos(x) $-xsen(x)]0$
$\pi +2n\pi = -2 cos(\pi + 2n\pi ) -0 -(-2)) = 2 + 2 = 4$

$$ \int $$
$f(x)dx=$
$2n\pi$
$[-2$ cos(x) $-xsen(x)]0$
$2n\pi = -2 -0 -(-2) = 0$

Dimostra che i massimi della funzione $f^{2}(x)$ giacciono su una parabola e i minimi su
una retta, e scrivi l’equazione della parabola e della retta.

Osserviamo che la funzione $f^{2}(x)$ è sempre $\ge 0,$ ed in particolare vale zero dove si
annulla f(x): quindi i minimi di $f^{2}(x)$ appartengono tutti all’asse $x (y=0).$

Siccome i massimi e minimi di f(x), come osservato precedentemente, appartengono
alle rette $y=x$ e $y=-x,$ possiamo dedurre che i massimi di $f^{2}(x)$ appartengono alla
parabola $y= x^{2}.$

Dimostriamo quest’ultimo risultato in modo più analitico.
Studiamo la derivata di $f^{2}(x).$
$D(f^{2}(x)) = 2f(x)$ ∙f'(x)

Essendo $f^{2}(x)$ continua e derivabile in tutto il suo dominio, i punti di massimo e di
minimo sono da ricercarsi fra i valori che annullano $2f(x)$ ∙f'(x), quindi fra i punti in cui
si annulla f(x) oppure f'(x). Dove si annulla f(x) abbiamo già notato che ci sono i
minimi; i massimi sono da ricercarsi quindi fra i punti per cui f'(x) $= 0,$ xsen(x) $= 0.$
Escludendo $x=0$ (in cui c’è un minimo) i massimi soddisfano l’equazione sen(x) $= 0,$
quindi $x= k\pi$ , con $k\varepsilon Z;$ per tale $x$ si ha $f^{2}(k\pi ) = (f(k\pi$ ))
$2 = (0 -k\pi cos(k\pi ))^{2} = (k\pi )^{2}:$

i massimi hanno quindi coordinate $(k\pi ; k^{2}\pi 2),$ quindi appartengono alla parabola di
equazione $y= x^{2}.$

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.159](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
