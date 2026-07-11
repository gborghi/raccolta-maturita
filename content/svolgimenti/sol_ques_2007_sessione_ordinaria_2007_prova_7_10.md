

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_7_10|2007 Ordinaria — Prova — Quesito 10]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Rappresentiamo la Terra con una sfera $S$ di centro $O$ e raggio $R$, e sia $r$ l'asse di rotazione, retta passante per $O$. Tutti gli oggetti geografici (poli, equatore, meridiani, paralleli) si ottengono intersecando la sfera con opportune rette e piani legati a $r$.

## Poli ed equatore

L'asse $r$ interseca la superficie sferica in due punti diametralmente opposti: sono i **poli**, il polo Nord $N$ e il polo Sud $S$.

Il piano $\pi_0$ passante per il centro $O$ e **perpendicolare** all'asse $r$ taglia la sfera lungo una circonferenza massima (una circonferenza di raggio uguale a $R$): è l'**equatore**. L'equatore è equidistante dai due poli e divide la sfera in due emisferi, boreale e australe.

## Paralleli

Consideriamo i piani **perpendicolari all'asse** $r$, cioè paralleli al piano equatoriale $\pi_0$. Ciascuno di essi, se interseca la sfera, la taglia lungo una circonferenza: queste circonferenze sono i **paralleli**.

Un piano posto a distanza $d$ dal centro (con $0 \le d < R$) individua un parallelo di raggio $\sqrt{R^2 - d^2}$: il raggio è massimo per $d = 0$ (l'equatore stesso) e decresce fino ad annullarsi in corrispondenza dei poli. I paralleli sono dunque, tranne l'equatore, circonferenze *minori*, tutte tra loro parallele e con i centri allineati sull'asse $r$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="302.523" height="306.518" viewBox="-72 -72 226.892 229.889"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M154.222 48.16c0-50.286-40.763-91.049-91.05-91.049-50.285 0-91.048 40.763-91.048 91.05 0 50.285 40.763 91.048 91.049 91.048s91.049-40.763 91.049-91.049Zm-91.05 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M63.173 157.419V-61.1"/><text x="63.173" y="48.16" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.395 -112.792)">r</text><path stroke="none" d="M65.573-42.889a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="63.173" y="48.16" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -94.582)">N</text><path stroke="none" d="M65.573 139.21a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="63.173" y="48.16" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 101.415)">S</text><path fill="none" d="M-27.876 48.16h182.098"/><text x="63.173" y="48.16" stroke="none" font-family="cmr10" font-size="10" transform="translate(-132.11 2.103)">equatore</text><path stroke="none" d="M65.093 48.16a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="63.173" y="48.16" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><path fill="none" d="m63.173 48.16 74.602-52.237"/><path stroke="none" d="M140.175-4.077a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="63.173" y="48.16" stroke="none" font-family="cmmi10" font-size="10" transform="translate(78.135 -48.82)">P</text><path fill="none" stroke-dasharray="3.0,3.0" d="m-11.41-4.064 149.185-.013"/><text x="63.173" y="48.16" stroke="none" font-family="cmr10" font-size="10" transform="translate(-115.366 -57.701)">parallelo</text><path fill="none" d="M95.04 48.16a31.88 31.88 0 0 0-5.763-18.278"/><text x="63.173" y="48.16" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.977 -11.566)">&apos;</text></g></svg>
</figure>

## Meridiani

Consideriamo ora i piani che **contengono** l'asse $r$ (cioè che passano per entrambi i poli). Ognuno di essi taglia la sfera lungo una circonferenza massima passante per $N$ e per $S$; i due poli dividono tale circonferenza in due semicirconferenze. Ciascuna semicirconferenza da polo a polo è un **meridiano**.

Ogni meridiano incontra ciascun parallelo in un solo punto e lo fa perpendicolarmente: meridiani e paralleli formano quindi sulla sfera un reticolo di curve tra loro ortogonali.

## Coordinate geografiche

Per individuare in modo univoco un punto della superficie servono due riferimenti fissati:

- l'**equatore**, come parallelo di riferimento;
- un **meridiano fondamentale** (per convenzione quello di Greenwich), come meridiano di riferimento.

Dato un punto $P$ sulla sfera:

**Latitudine** $\varphi$: è l'angolo, misurato nel centro $O$, tra il segmento $OP$ e il piano equatoriale. Equivalentemente, è l'angolo tra $OP$ e la sua proiezione ortogonale sul piano equatoriale. Vale $\varphi = 0$ sull'equatore e cresce fino a $\pm 90^\circ$ ai poli; si assume positiva a Nord e negativa a Sud:
$$-90^\circ \le \varphi \le 90^\circ.$$
Tutti i punti di una stessa latitudine giacciono su uno stesso parallelo.

**Longitudine** $\lambda$: è l'angolo diedro tra il piano del meridiano fondamentale e il piano del meridiano passante per $P$ (equivalentemente, l'angolo tra le proiezioni dei due meridiani sul piano equatoriale). Si misura da $0^\circ$ a $180^\circ$ verso Est oppure verso Ovest:
$$-180^\circ < \lambda \le 180^\circ.$$
Tutti i punti di una stessa longitudine giacciono su uno stesso meridiano.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="313.356" height="243.864" viewBox="-72 -72 235.017 182.898"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M110.228 19.18c0-50.287-40.763-91.05-91.049-91.05S-71.87-31.107-71.87 19.18c0 50.285 40.763 91.048 91.05 91.048 50.285 0 91.048-40.763 91.048-91.049Zm-91.049 0"/><path stroke="none" d="M21.1 19.18a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="19.179" y="19.179" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" d="M19.18 19.18h91.048"/><g stroke="none" font-family="cmr10" font-size="10"><text x="19.179" y="19.179" transform="translate(94.582 3.472)">Green</text><text x="45.11" y="19.179" transform="translate(94.582 3.472)">wic</text><text x="59.276" y="19.179" transform="translate(94.582 3.472)">h</text></g><path fill="none" d="m19.18 19.18 58.54-69.765"/><path stroke="none" d="M80.12-50.585a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><g stroke="none"><text x="19.179" y="19.179" font-family="cmmi10" font-size="10" transform="translate(62.073 -73.297)">P</text><text x="26.988" y="15.55" font-family="cmsy7" font-size="7" transform="translate(62.073 -73.297)">0</text></g><path fill="none" d="M51.046 19.18A31.87 31.87 0 0 0 39.663-5.233"/><text x="19.179" y="19.179" stroke="none" font-family="cmmi10" font-size="10" transform="translate(31.227 -17.014)">¸</text></g></svg>
</figure>

La coppia ordinata $(\varphi, \lambda)$ costituisce le **coordinate geografiche** del punto: al variare della latitudine tra $-90^\circ$ e $90^\circ$ e della longitudine tra $-180^\circ$ e $180^\circ$ si raggiunge ogni punto della superficie terrestre, e ogni punto (esclusi i due poli, dove la longitudine resta indeterminata) è individuato da un'unica coppia. In termini analitici, ponendo l'origine in $O$, l'asse $z$ lungo $r$ verso $N$ e l'asse $x$ nella direzione del meridiano fondamentale sul piano equatoriale, il punto $P$ ha coordinate
$$\begin{cases} x = R\cos\varphi\,\cos\lambda \\ y = R\cos\varphi\,\sin\lambda \\ z = R\sin\varphi \end{cases}$$
che è la consueta parametrizzazione della sfera mediante latitudine e longitudine.

*Fonte:* [📄 PDF p.7](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
