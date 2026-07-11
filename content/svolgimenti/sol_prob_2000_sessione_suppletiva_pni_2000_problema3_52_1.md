

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_pni_2000_problema3_52_1|2000 Suppletiva PNI — Problema 3 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_pni_2000_problema3_52|2000 Suppletiva PNI — Problema 3]]

Si estraggono a caso $5$ palline, una dopo l'altra e senza reimbussolamento, da un sacchetto contenente $90$ palline numerate da $1$ a $90$ (gioco del Lotto).

## a)

**a1) Confronto tra due cinquine assegnate.** Ogni estrazione *ordinata* di $5$ palline distinte ha probabilità
$$\frac{1}{90}\cdot\frac{1}{89}\cdot\frac{1}{88}\cdot\frac{1}{87}\cdot\frac{1}{86}.$$
Prescindendo dall'ordine, una fissata cinquina (insieme di $5$ numeri) può presentarsi in $5!$ ordini diversi, quindi ha probabilità
$$\frac{5!}{90\cdot 89\cdot 88\cdot 87\cdot 86}=\frac{1}{\binom{90}{5}}.$$
Questo valore non dipende da *quali* siano i cinque numeri: la cinquina di numeri successivi $\{1,2,3,4,5\}$ e la cinquina di numeri non successivi $\{2,3,5,8,13\}$ hanno perciò **la stessa probabilità** di uscire.

**a2) Confronto tra le due categorie.** È invece più probabile che esca una qualunque cinquina di numeri *non successivi*.

Le cinquine di numeri successivi hanno come primo elemento uno tra $1,2,\dots,86$: sono quindi solo $86$, da $(1,2,3,4,5)$ a $(86,87,88,89,90)$. La probabilità di ottenere una qualunque cinquina successiva è
$$\frac{86}{\binom{90}{5}}.$$
Tutte le rimanenti $\binom{90}{5}-86$ cinquine sono formate da numeri non tutti successivi: essendo il loro numero enormemente maggiore di $86$, è molto più probabile ottenere una cinquina di numeri non successivi.

## b)

**Proposizione $A$** — «la probabilità che il $2^\circ$ numero estratto sia il $90$ è $1/89$». La probabilità effettiva è
$$P(2^\circ\text{ estratto}=90)=\frac{89}{90}\cdot\frac{1}{89}=\frac{1}{90}\neq\frac{1}{89}.$$
Quindi $A$ è **falsa** (e $\overline{A}$ vera).

**Proposizione $B$** — «la probabilità che nei $5$ numeri estratti ci sia il $90$ è $5/90$». I casi favorevoli sono le cinquine che contengono il $90$, cioè le quaterne di numeri scelti tra i restanti $89$: sono $\binom{89}{4}$. Perciò
$$P(90\in\text{cinquina})=\frac{\binom{89}{4}}{\binom{90}{5}}=\frac{5}{90}=\frac{1}{18}.$$
Quindi $B$ è **vera** (e $\overline{B}$ falsa).

Ricordando che un'implicazione $p\to q$ è falsa solo quando $p$ è vera e $q$ falsa:

- $(1)\ A\to B$: $A$ è falsa $\Rightarrow$ implicazione **vera**.
- $(2)\ B\to A$: $B$ vera e $A$ falsa $\Rightarrow$ **falsa**.
- $(3)\ \overline{A}\to\overline{B}$: $\overline{A}$ vera e $\overline{B}$ falsa $\Rightarrow$ **falsa**.
- $(4)\ \overline{B}\to\overline{A}$: $\overline{B}$ è falsa $\Rightarrow$ implicazione **vera**.

## c)

Si punta sul terno $14,\ 8,\ 42$. Le cinquine favorevoli contengono i tre numeri giocati e due qualunque degli altri $87$: sono $\binom{87}{2}$. La probabilità di vincita è quindi
$$P(\text{terno})=\frac{\binom{87}{2}}{\binom{90}{5}}=\frac{3741}{43\,949\,268}=\frac{1}{11748}\approx 8{,}5\cdot 10^{-5}\approx 0{,}0085\%.$$

In un gioco equo la probabilità di vincita eguaglia il rapporto $\dfrac{\text{puntata}}{\text{incasso}}$, da cui
$$\text{incasso}=\frac{\text{puntata}}{P(\text{terno})}=5\cdot 11748=58\,740\ \text{€}.$$
Con una puntata di $5$ € lo Stato dovrebbe quindi pagare $58\,740$ € affinché il gioco sia equo. In realtà il Lotto paga $4500$ volte la puntata, cioè $5\cdot 4500=22\,500$ €: il gioco **non è equo**.

## d)

In una singola estrazione di $5$ palline la probabilità che compaia il $90$ è (come al punto b)
$$p=\frac{5}{90}=\frac{1}{18},\qquad q=1-p=\frac{85}{90}=\frac{17}{18}.$$
Ripetendo l'esperimento $n$ volte in modo indipendente, il numero di volte in cui esce il $90$ segue una distribuzione binomiale di parametri $n$ e $p$.

**1) Al più $5$ volte.**
$$P(\text{al più }5)=\sum_{k=0}^{5}\binom{n}{k}\,p^{k}q^{\,n-k}=\sum_{k=0}^{5}\binom{n}{k}\left(\frac{5}{90}\right)^{k}\left(\frac{85}{90}\right)^{n-k}.$$

**2) Per la prima volta alla $n$-esima estrazione.** Servono $n-1$ insuccessi seguiti da un successo:
$$P=\left(\frac{85}{90}\right)^{n-1}\cdot\frac{5}{90}.$$
Imponendo $P\le 10^{-10}$:
$$\left(\frac{85}{90}\right)^{n-1}\le 10^{-10}\cdot\frac{90}{5}=1{,}8\cdot 10^{-9}.$$
Passando ai logaritmi (poiché $\ln\frac{85}{90}<0$ il verso si inverte):
$$n-1\ge\frac{\ln\!\left(1{,}8\cdot 10^{-9}\right)}{\ln\frac{85}{90}}\approx\frac{-20{,}135}{-0{,}05716}\approx 352{,}3,$$
cioè $n\ge 353{,}3$. Essendo $n$ intero positivo, il più piccolo valore per cui la probabilità richiesta non supera $10^{-10}$ è
$$\boxed{\,n=354\,}.$$

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/probabilita_e_combinatoria #cluster/probabilit_e_combinatoria
