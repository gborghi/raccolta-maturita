

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_7|2003 Ordinaria — Prova (Ordinamento) — Quesito 7]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Si considerano i primi $n$ numeri naturali a partire da $1$, cioè $1,2,3,\dots,n$, e li si moltiplica combinandoli a due a due in tutti i modi possibili. Si vuole determinare a quale espressione è uguale la somma di tutti i prodotti così ottenuti.

**Impostazione.** I prodotti richiesti sono tutti e soli quelli della forma $i\cdot j$ con $1\le i<j\le n$: si tratta cioè di scegliere due indici distinti tra $1$ e $n$. La somma cercata è dunque

$$S=\sum_{1\le i<j\le n} i\,j .$$

**Calcolo con l'identità del quadrato di una somma.** Elevando al quadrato la somma dei numeri e separando i termini con indici uguali da quelli con indici distinti si ha

$$\left(\sum_{k=1}^{n} k\right)^{2}=\sum_{k=1}^{n} k^{2}+2\sum_{1\le i<j\le n} i\,j .$$

Da qui si ricava direttamente

$$S=\frac{1}{2}\left[\left(\sum_{k=1}^{n} k\right)^{2}-\sum_{k=1}^{n} k^{2}\right].$$

**Sostituzione delle somme note.** Usando le formule

$$\sum_{k=1}^{n} k=\frac{n(n+1)}{2},\qquad \sum_{k=1}^{n} k^{2}=\frac{n(n+1)(2n+1)}{6},$$

si ottiene

$$S=\frac{1}{2}\left[\frac{n^{2}(n+1)^{2}}{4}-\frac{n(n+1)(2n+1)}{6}\right].$$

Mettendo in evidenza il fattore comune $n(n+1)$ e riducendo allo stesso denominatore $12$ la parentesi:

$$S=\frac{n(n+1)}{2}\cdot\frac{3n(n+1)-2(2n+1)}{12}=\frac{n(n+1)\,\bigl(3n^{2}-n-2\bigr)}{24}.$$

Poiché $3n^{2}-n-2=(n-1)(3n+2)$, si arriva alla forma fattorizzata

$$S=\frac{1}{24}\,n(n-1)(n+1)(3n+2).$$

**Verifica su casi piccoli.**

- Per $n=2$ il solo prodotto è $1\cdot 2=2$; la formula dà $\dfrac{1}{24}\cdot 2\cdot 1\cdot 3\cdot 8=2$. $\checkmark$
- Per $n=3$ i prodotti sono $1\cdot2+1\cdot3+2\cdot3=11$; la formula dà $\dfrac{1}{24}\cdot 3\cdot 2\cdot 4\cdot 11=11$. $\checkmark$

**Conclusione.** La somma dei prodotti dei primi $n$ numeri naturali presi a due a due è

$$S=\frac{1}{24}\,n(n-1)(n+1)(3n+2),$$

che è l'unica tra le risposte proposte a contenere il fattore $(n-1)$: è quindi quella corretta.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
