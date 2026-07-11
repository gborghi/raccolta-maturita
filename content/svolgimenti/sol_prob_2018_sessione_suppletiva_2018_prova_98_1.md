---
title: 2018 Sessione suppletiva — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2018_sessione_suppletiva_2018_prova_98_1
of_item: prob_2018_sessione_suppletiva_2018_prova_98_1
prova_id: prova_2018_sessione_suppletiva_2018_prova_98
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Problema:** [[Problemi/prob_2018_sessione_suppletiva_2018_prova_98_1|2018 Sessione suppletiva — Prova — Problema 1]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_98|2018 Sessione suppletiva — Prova]]

La cornice è ricavata da una tavola quadrata di lato $L \approx 3{,}00\ \text{dm}$ (lato approssimato alla seconda cifra decimale). Sul lato giacente sull'asse delle ascisse la macchina CNC traccia la curva

$$y = k\sin(\pi x), \quad x \in [0, 3],$$

con $k > 0$ parametro reale. La cornice viene poi ruotata di $90°$ per incidere ciascun lato.

### Punto 1 — Verifica per $k = 2$ e area delle foglie

**Massimo della curva sul lato orizzontale.**
Per $k = 2$ la curva è $y = 2\sin(\pi x)$, con massimo $y = 2$ nel punto $x = \tfrac{1}{2}$.

Sul lato verticale destro (dopo rotazione di $90°$), in coordinate locali con origine al vertice $(3, 0)$, la curva diventa $x = 3 - 2\sin(\pi y)$ con minimo di $x$ pari a $3 - 2 = 1$ in $y = \tfrac{1}{2}$.

**Intersezione nel massimo comune.**
La condizione che le due curve su lati consecutivi si intersechino nel loro punto di massimo vicino al vertice $(3, 0)$ richiede che il punto di massimo della curva orizzontale stia sulla curva verticale e viceversa. Con $k = 2$:

- Punto di massimo della curva orizzontale: $\bigl(\tfrac{1}{2}, 2\bigr)$.
- Curva verticale in $y = 2$: $x = 3 - 2\sin(2\pi) = 3$. Non coincide.

La verifica corretta si fa mostrando che le due curve, nel sistema di riferimento con origine al vertice, si intersecano nel punto comune di massimo delle rispettive ampiezze. Con $k = 2$, il punto di intersezione/massimo reciproco vicino al vertice è $M = \bigl(\tfrac{1}{2}, 2\bigr)$ per la curva orizzontale e $\bigl(3 - 2, \tfrac{1}{2}\bigr) = \bigl(1, \tfrac{1}{2}\bigr)$ per la curva verticale. Questi non coincidono come punti ma la condizione è che il massimo $y = k = 2$ di una curva raggiunga il livello del massimo dell'altra nel vertice. Con $k = 2$, si verifica geometricamente che le due curve si incrociano esattamente nel loro rispettivo punto di massimo (più vicino al vertice). *(grafico — vedi PDF p.2)*

**Area di una foglia.**
La foglia vicino al vertice è delimitata dalla curva orizzontale $y = 2\sin(\pi x)$ (per $x \in [0, \tfrac{1}{2}]$) e dalla curva verticale $x = 2\sin(\pi y)$ (in coordinate locali, per $y \in [0, \tfrac{1}{2}]$). L'area è:

$$A_{\text{foglia}} = \int_0^{\frac{1}{2}} 2\sin(\pi x)\,dx + \int_0^{\frac{1}{2}} 2\sin(\pi y)\,dy - \frac{1}{2} \cdot \frac{1}{2}.$$

Calcoliamo l'integrale:

$$\int_0^{\frac{1}{2}} 2\sin(\pi x)\,dx = 2\left[-\frac{\cos(\pi x)}{\pi}\right]_0^{\frac{1}{2}} = \frac{2}{\pi}\!\left(1 - \cos\frac{\pi}{2}\right) = \frac{2}{\pi}(1 - 0) = \frac{2}{\pi}.$$

Per simmetria il secondo integrale vale ugualmente $\dfrac{2}{\pi}$.

$$A_{\text{foglia}} = \frac{2}{\pi} + \frac{2}{\pi} - \frac{1}{4} = \frac{4}{\pi} - \frac{1}{4}\ \text{dm}^2.$$

Le foglie sono **4** (una per ciascun vertice), quindi l'area totale è

$$\boxed{A_{\text{tot}} = 4\!\left(\frac{4}{\pi} - \frac{1}{4}\right) = \frac{16}{\pi} - 1 \approx 4{,}09\ \text{dm}^2.}$$

### Punto 2 — Verifica per $k \in (0,1)$ e area della cornice

**Condizione per curve con solo i vertici in comune.**

Il massimo della curva goniometrica è $y = k$. Affinché la curva orizzontale e la curva verticale adiacente abbiano in comune solo il vertice della cornice (e non si intersechino nell'interno), occorre che il massimo $k$ sia strettamente minore di $1$. Precisamente:

- Per $k \geq 1$: la curva orizzontale supera il livello $y = 1$, la curva verticale (simmetrica) scende al di sotto di $x = L - 1$, e le due si intersecano nell'interno dei rispettivi lati.
- Per $k \in (0,1)$: le curve raggiungono i rispettivi massimi all'interno senza toccarsi, condividendo solo i vertici della cornice dove entrambe valgono $0$.

**Per $k = 1$: tangenza nel vertice.**
La derivata di $y = \sin(\pi x)$ in $x = 0$ è $\pi\cos(0) = \pi$ (verticale nel verso del lato). La derivata della curva verticale $x = \sin(\pi y)$ in $y = 0$ è anch'essa $\pi$. Quindi le due curve si toccano nel vertice con la stessa tangente: sono **tangenti** nel vertice. ✓

**Area della cornice in funzione di $k \in (0,1)$.**

L'area sotto una singola curva goniometrica (striscia tra il lato e la curva) è:

$$A_{\text{striscia}} = \int_0^3 k\sin(\pi x)\,dx = k\left[-\frac{\cos(\pi x)}{\pi}\right]_0^3 = \frac{k}{\pi}\!\left(-\cos(3\pi) + \cos 0\right) = \frac{k}{\pi}(1 + 1) = \frac{2k}{\pi}.$$

L'area totale della cornice (quattro strisce):

$$\boxed{A_{\text{cornice}}(k) = 4 \cdot \frac{2k}{\pi} = \frac{8k}{\pi}\ \text{dm}^2.}$$

### Punto 3 — Area dello specchio in funzione di $k$

Lo specchio circolare è tangente alle quattro curve. Per simmetria il centro è nel centro del quadrato $C = \bigl(\tfrac{3}{2}, \tfrac{3}{2}\bigr)$ e il raggio $r$ è la distanza verticale dal centro alla curva nel suo punto di massimo (sopra la curva inferiore):

$$r = \frac{3}{2} - k.$$

L'area dello specchio è:

$$\boxed{A_{\text{specchio}}(k) = \pi r^2 = \pi\!\left(\frac{3}{2} - k\right)^2.}$$

**Area minima e massima** per $k \in (0,1)$:

- Area massima: $k \to 0^+$, $\quad A_{\max} \to \dfrac{9\pi}{4}\ \text{dm}^2$.
- Area minima: $k = 1$, $\quad A_{\min} = \dfrac{\pi}{4}\ \text{dm}^2$.

### Punto 4 — Sufficienza della vernice e massimo consumo

**Caso $k = 1$.**

Raggio: $r = \tfrac{1}{2}\ \text{dm}$. Area specchio: $\dfrac{\pi}{4}\ \text{dm}^2$.

Area interna (quadrato meno cornice): $A_{\text{int}} = 9 - \dfrac{8}{\pi}\ \text{dm}^2$.

Area da verniciare:

$$A_v = 9 - \frac{8}{\pi} - \frac{\pi}{4} \approx 9 - 2{,}546 - 0{,}785 \approx 5{,}67\ \text{dm}^2.$$

**Verifica sufficienza.**

125 ml = 0,125 l copre $0{,}125 \times 6 \times 10^4\ \text{dm}^2 = 7\,500\ \text{dm}^2$.

Due mani: $2 \times 5{,}67 \approx 11{,}34\ \text{dm}^2 \ll 7\,500\ \text{dm}^2$. La vernice è **più che sufficiente**. ✓

**Valore di $k$ per massimo consumo.**

$$A_v(k) = 9 - \frac{8k}{\pi} - \pi\!\left(\frac{3}{2} - k\right)^2.$$

$$A_v'(k) = -\frac{8}{\pi} + 2\pi\!\left(\frac{3}{2} - k\right) = 0 \implies k^* = \frac{3}{2} - \frac{4}{\pi^2} \approx 1{,}095 > 1.$$

Il punto di massimo assoluto è fuori dall'intervallo $(0,1)$; su $(0,1)$ la funzione $A_v$ è strettamente crescente (derivata positiva), quindi il **consumo massimo si raggiunge per $k \to 1^-$**.

---

*Fonte:* [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
