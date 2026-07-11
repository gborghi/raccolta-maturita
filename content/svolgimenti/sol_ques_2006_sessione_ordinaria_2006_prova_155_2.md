

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_2|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Si deve dimostrare che i poliedri regolari (i solidi platonici) sono, a meno di similitudini, soltanto cinque: tetraedro, cubo, ottaedro, dodecaedro e icosaedro.

Ricordiamo la definizione: un poliedro si dice **regolare** quando tutte le sue facce sono poligoni regolari congruenti e in ogni vertice concorre lo stesso numero di facce (i vertici sono cioè tutti dello stesso tipo). Indichiamo con

- $p$ il numero di lati di ciascuna faccia (quindi $p \ge 3$),
- $q$ il numero di facce che concorrono in ogni vertice (quindi $q \ge 3$, perché in un vertice di un solido devono incontrarsi almeno tre facce).

La coppia di interi $(p,\,q)$, con $p\ge 3$ e $q\ge 3$, individua completamente il tipo combinatorio del poliedro. Dimostriamo che tali coppie sono soltanto cinque.

## Conteggio di spigoli, vertici e facce

Siano $V$, $E$, $F$ rispettivamente il numero di vertici, di spigoli e di facce del poliedro.

Ogni faccia è delimitata da $p$ spigoli e ogni spigolo è comune a esattamente due facce; contando gli spigoli faccia per faccia ciascuno viene contato due volte, quindi

$$pF = 2E \qquad\Rightarrow\qquad F = \frac{2E}{p}.$$

Analogamente, in ogni vertice concorrono $q$ spigoli e ogni spigolo ha due estremi; contando gli spigoli vertice per vertice ciascuno viene di nuovo contato due volte, quindi

$$qV = 2E \qquad\Rightarrow\qquad V = \frac{2E}{q}.$$

## La relazione di Eulero

Per ogni poliedro convesso vale la **formula di Eulero**

$$V - E + F = 2.$$

Sostituendo le espressioni di $V$ e $F$ trovate sopra si ottiene

$$\frac{2E}{q} - E + \frac{2E}{p} = 2,$$

e, dividendo tutto per $2E$ (che è positivo):

$$\frac{1}{q} - \frac{1}{2} + \frac{1}{p} = \frac{1}{E}.$$

Poiché il numero di spigoli è positivo, il secondo membro è positivo, e quindi

$$\frac{1}{p} + \frac{1}{q} > \frac{1}{2}.$$

## Risoluzione della disequazione

Cerchiamo tutte le coppie di interi con $p \ge 3$ e $q \ge 3$ che soddisfano $\dfrac{1}{p} + \dfrac{1}{q} > \dfrac{1}{2}$.

Osserviamo anzitutto che non possono essere entrambi $p \ge 4$ e $q \ge 4$: in tal caso infatti si avrebbe $\dfrac{1}{p} + \dfrac{1}{q} \le \dfrac{1}{4} + \dfrac{1}{4} = \dfrac{1}{2}$, contro la disequazione. Almeno uno tra $p$ e $q$ deve dunque valere $3$.

**Caso $p = 3$** (facce triangolari). La disequazione diventa

$$\frac{1}{3} + \frac{1}{q} > \frac{1}{2} \quad\Rightarrow\quad \frac{1}{q} > \frac{1}{6} \quad\Rightarrow\quad q < 6,$$

da cui $q = 3,\,4,\,5$.

**Caso $q = 3$** (tre facce per vertice). Per la simmetria della disequazione nei ruoli di $p$ e $q$, si ottiene analogamente

$$\frac{1}{p} > \frac{1}{6} \quad\Rightarrow\quad p < 6,$$

da cui $p = 3,\,4,\,5$.

Mettendo insieme i due casi (e ricordando che la coppia $(3,3)$ è comune) restano esattamente **cinque** coppie ammissibili:

$$(p,q) = (3,3),\ (3,4),\ (3,5),\ (4,3),\ (5,3).$$

## Le cinque soluzioni

Per ciascuna coppia ricaviamo $E$ da $\dfrac{1}{E} = \dfrac{1}{p} + \dfrac{1}{q} - \dfrac{1}{2}$ e poi $F = \dfrac{2E}{p}$, $V = \dfrac{2E}{q}$. Si ottiene:

| $p$ | $q$ | $V$ | $E$ | $F$ | Poliedro |
|---|---|---|---|---|---|
| 3 | 3 | 4 | 6 | 4 | tetraedro |
| 4 | 3 | 8 | 12 | 6 | cubo (esaedro) |
| 3 | 4 | 6 | 12 | 8 | ottaedro |
| 5 | 3 | 20 | 30 | 12 | dodecaedro |
| 3 | 5 | 12 | 30 | 20 | icosaedro |

Ciascuna di queste cinque configurazioni si realizza effettivamente con un poliedro regolare, e per ognuna si verifica la formula di Eulero (ad esempio per il dodecaedro $20 - 30 + 12 = 2$).

## Osservazione: un metodo alternativo

Alla stessa disequazione si arriva anche con un ragionamento sugli angoli. In un vertice concorrono $q$ facce, ciascuna delle quali è un $p$-gono regolare con angolo interno $\dfrac{(p-2)\cdot 180^\circ}{p}$. Perché il vertice possa "chiudersi" nello spazio formando un angoloide, la somma degli angoli delle facce che vi concorrono deve essere **strettamente minore** di $360^\circ$:

$$q\cdot \frac{(p-2)\cdot 180^\circ}{p} < 360^\circ \quad\Rightarrow\quad q\,(p-2) < 2p \quad\Rightarrow\quad (p-2)(q-2) < 4.$$

Con $p\ge 3$ e $q\ge 3$ i due fattori $(p-2)$ e $(q-2)$ sono interi positivi: il loro prodotto è minore di $4$ solo nelle cinque coppie già elencate.

In conclusione, i poliedri regolari esistenti sono esattamente **cinque**, come si voleva dimostrare.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
