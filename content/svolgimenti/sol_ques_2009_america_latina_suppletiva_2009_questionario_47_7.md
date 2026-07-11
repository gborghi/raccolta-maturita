

**Quesito:** [[Quesiti/ques_2009_america_latina_suppletiva_2009_questionario_47_7|2009 America Latina Suppletiva — Questionario — Quesito 7]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_questionario_47|2009 America Latina Suppletiva — Questionario]]

Quante sono le diagonali di un poligono di $2009$ lati?

## Conteggio diretto

Consideriamo un poligono con $n$ vertici. Da ciascun vertice possiamo tracciare un segmento verso ogni altro vertice, ad eccezione dei due vertici adiacenti (i segmenti verso di essi sono lati, non diagonali) e del vertice stesso. Da ogni vertice escono quindi

$$n-3$$

diagonali. Poiché i vertici sono $n$, moltiplicando otterremmo $n(n-3)$ segmenti; in questo modo, però, ogni diagonale viene contata due volte, dato che la diagonale che unisce i vertici $A$ e $C$ coincide con quella che unisce $C$ e $A$. Dividendo per $2$ si ottiene il numero delle diagonali:

$$\frac{n(n-3)}{2}.$$

Per $n=2009$:

$$\frac{2009\cdot(2009-3)}{2}=\frac{2009\cdot 2006}{2}=\frac{4\,030\,054}{2}=2\,015\,027.$$

Il poligono ha dunque $2\,015\,027$ diagonali.

## Verifica con il calcolo combinatorio

Allo stesso risultato si arriva contando le coppie di vertici. Il numero di tutte le coppie di vertici di un poligono di $n$ lati è il numero delle combinazioni di $n$ oggetti presi a due a due:

$$\binom{n}{2}=\frac{n(n-1)}{2}.$$

Ogni coppia individua un segmento, ma tra questi segmenti sono compresi anche gli $n$ lati del poligono, cioè le coppie di vertici consecutivi (ad esempio, per $n=4$, le coppie $1\text{-}2,\ 2\text{-}3,\ 3\text{-}4,\ 4\text{-}1$). Sottraendo gli $n$ lati:

$$\frac{n(n-1)}{2}-n=\frac{n(n-1)-2n}{2}=\frac{n(n-3)}{2},$$

che è la stessa formula ottenuta in precedenza. La figura seguente illustra le $9$ diagonali di un esagono ($n=6$), per cui $\dfrac{6\cdot 3}{2}=9$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="191.466" height="167.945" viewBox="-72 -72 143.6 125.959"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#00f" d="m56.964-9.29-85.358-49.28M56.964-9.29H-56.847M56.964-9.29l-85.358 49.28M28.511-58.57-56.847-9.29M28.511-58.57l-56.905 98.56M28.511-58.57v98.56M-28.394-58.57v98.56M-28.394-58.57 28.51 39.99M-56.847-9.29 28.51 39.99"/><path fill="none" stroke-width=".8" d="M56.964-9.29 28.51-58.57h-56.905L-56.847-9.29l28.453 49.28H28.51Z"/><path stroke="none" d="M58.964-9.29a2 2 0 1 0-4 0 2 2 0 0 0 4 0M30.511-58.57a2 2 0 1 0-4 0 2 2 0 0 0 4 0M-26.394-58.57a2 2 0 1 0-4 0 2 2 0 0 0 4 0M-54.847-9.29a2 2 0 1 0-4 0 2 2 0 0 0 4 0M-26.394 39.99a2 2 0 1 0-4 0 2 2 0 0 0 4 0M30.511 39.99a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x=".058" y="-9.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.438 -3.533)">A</text><text x=".058" y="-9.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.41 -52.813)">B</text><text x=".058" y="-9.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-32.384 -52.813)">C</text><text x=".058" y="-9.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-68.995 -3.533)">D</text><text x=".058" y="-9.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-32.432 59.646)">E</text><text x=".058" y="-9.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.543 59.646)">F</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.50](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
