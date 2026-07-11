

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_2|2006 Sessione Ordinaria — Prova (p.10) — Quesito 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

Si deve dimostrare che i poliedri regolari (i *solidi platonici*) sono, a meno di similitudini, esattamente cinque: **tetraedro, cubo (esaedro), ottaedro, dodecaedro, icosaedro**.

## Impostazione

Un poliedro si dice *regolare* quando:

- tutte le sue facce sono poligoni regolari fra loro congruenti;
- in ogni vertice concorre lo stesso numero di facce, disposte tutte allo stesso modo.

Indichiamo con $p$ il numero di lati di ciascuna faccia e con $q$ il numero di facce (equivalentemente, di spigoli) che si incontrano in ogni vertice. Poiché una faccia è un poligono e in un vertice devono concorrere almeno tre facce, deve essere
$$p \ge 3, \qquad q \ge 3.$$

Il problema si riduce quindi a stabilire per quali coppie di interi $(p,q)$ è possibile costruire effettivamente un poliedro regolare.

## Il vincolo sugli angoli ai vertici

L'angolo interno di un poligono regolare di $p$ lati misura
$$\frac{(p-2)\cdot 180^\circ}{p}.$$

In ogni vertice del poliedro si incontrano $q$ facce, quindi $q$ di questi angoli. Perché le facce possano *ripiegarsi* nello spazio formando un angoloide convesso (cioè una vera "punta" del solido), la somma di tali angoli deve essere **strettamente minore di un angolo giro**:
$$q\cdot\frac{(p-2)\cdot 180^\circ}{p} < 360^\circ.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="175.603" height="127.685" viewBox="-72 -72 131.702 95.764"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="M-6.419-15.19h65.451L26.307-71.87Z"/><path fill="#e1e1ff" stroke="none" d="m-6.419-15.19 32.726-56.68h-65.451ZM-6.419-15.19l-32.725-56.68-32.726 56.68Z"/><path fill="none" stroke-width=".8" d="M-71.87-15.19H59.032M59.032-15.19 26.307-71.87h-65.451L-71.87-15.19M-6.419-15.19l32.726-56.68M-6.419-15.19l-32.725-56.68"/><text x="-6.419" y="-15.19" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><g stroke="none"><text x="-6.419" y="-15.19" font-family="cmr10" font-size="10" transform="translate(13.104 -8.336)">60</text><text x="3.581" y="-18.818" font-family="cmsy7" font-size="7" transform="translate(13.104 -8.336)">±</text></g><g stroke="none"><text x="-6.419" y="-15.19" font-family="cmr10" font-size="10" transform="translate(-7.299 -20.116)">60</text><text x="3.581" y="-18.818" font-family="cmsy7" font-size="7" transform="translate(-7.299 -20.116)">±</text></g><g stroke="none"><text x="-6.419" y="-15.19" font-family="cmr10" font-size="10" transform="translate(-27.701 -8.336)">60</text><text x="3.581" y="-18.818" font-family="cmsy7" font-size="7" transform="translate(-27.701 -8.336)">±</text></g><g stroke="none"><text x="-6.419" y="-15.19" font-family="cmr10" font-size="10" transform="translate(-48.514 34.96)">somma</text><text x="27.526" y="-15.19" font-family="cmr10" font-size="10" transform="translate(-48.514 34.96)">=</text><text x="38.081" y="-15.19" font-family="cmr10" font-size="10" transform="translate(-48.514 34.96)">180</text><text x="53.081" y="-18.818" font-family="cmsy7" font-size="7" transform="translate(-48.514 34.96)">±</text><text x="60.456" y="-15.19" font-family="cmmi10" font-size="10" transform="translate(-48.514 34.96)">&lt;</text><text x="71.012" y="-15.19" font-family="cmr10" font-size="10" transform="translate(-48.514 34.96)">360</text><text x="86.012" y="-18.818" font-family="cmsy7" font-size="7" transform="translate(-48.514 34.96)">±</text></g></g></svg>
</figure>

Se la somma fosse uguale a $360^\circ$ le facce giacerebbero su un piano (tassellazione piana), se fosse maggiore non potrebbero chiudersi in modo convesso. Semplificando la disuguaglianza:
$$q\,(p-2) < 2p \;\Rightarrow\; pq-2q-2p < 0 \;\Rightarrow\; pq-2p-2q+4 < 4,$$

ossia, raccogliendo,
$$(p-2)(q-2) < 4.$$

## I cinque casi possibili

Cerchiamo le coppie di interi con $p\ge 3$ e $q\ge 3$ (quindi $p-2\ge 1$ e $q-2\ge 1$) che soddisfano $(p-2)(q-2) < 4$. Il prodotto di due interi positivi è minore di $4$ solo nei casi seguenti:

| $p$ | $q$ | $(p-2)(q-2)$ | facce | poliedro |
|:---:|:---:|:---:|:---|:---|
| $3$ | $3$ | $1$ | triangoli | tetraedro |
| $3$ | $4$ | $2$ | triangoli | ottaedro |
| $3$ | $5$ | $3$ | triangoli | icosaedro |
| $4$ | $3$ | $2$ | quadrati | cubo (esaedro) |
| $5$ | $3$ | $3$ | pentagoni | dodecaedro |

Ogni altra scelta viola il vincolo: per esempio $p=3,\ q=6$ dà $(1)(4)=4$ (sei triangoli attorno a un vertice riempiono esattamente $360^\circ$: tassellazione piana), $p=4,\ q=4$ dà $(2)(2)=4$, $p=6,\ q=3$ dà $(4)(1)=4$. Non esistono dunque altre possibilità.

## Conferma con la relazione di Eulero

La stessa conclusione si ottiene per via combinatoria. Siano $V$, $E$, $F$ i numeri di vertici, spigoli e facce. Contando gli spigoli una volta per ciascuna delle due facce che condividono e una volta per ciascuno dei due vertici estremi:
$$pF = 2E, \qquad qV = 2E \;\Rightarrow\; F=\frac{2E}{p},\quad V=\frac{2E}{q}.$$

Sostituendo nella relazione di Eulero $V-E+F=2$:
$$\frac{2E}{q}-E+\frac{2E}{p}=2 \;\Rightarrow\; E\left(\frac{1}{p}+\frac{1}{q}-\frac{1}{2}\right)=1.$$

Essendo $E>0$, il fattore fra parentesi deve essere positivo, cioè
$$\frac{1}{p}+\frac{1}{q}>\frac{1}{2}.$$

Con $p,q\ge 3$ questa disuguaglianza è verificata solo dalle cinque coppie già trovate:

- $p=3:\ \dfrac{1}{q}>\dfrac{1}{6}\Rightarrow q=3,4,5$;
- $p=4:\ \dfrac{1}{q}>\dfrac{1}{4}\Rightarrow q=3$;
- $p=5:\ \dfrac{1}{q}>\dfrac{3}{10}\Rightarrow q=3$;
- $p\ge 6:\ \dfrac{1}{q}>\dfrac{1}{3}$ è impossibile con $q\ge 3$.

## Conclusione

Le uniche configurazioni $(p,q)$ compatibili con la convessità sono cinque, e a ciascuna corrisponde effettivamente un poliedro regolare costruibile:

$$
\begin{aligned}
&(3,3)\ \text{tetraedro}, \quad (3,4)\ \text{ottaedro}, \quad (3,5)\ \text{icosaedro},\\
&(4,3)\ \text{cubo}, \quad\ \ (5,3)\ \text{dodecaedro}.
\end{aligned}
$$

Esistono pertanto, a meno di similitudini, **esattamente cinque poliedri regolari**, come si voleva dimostrare. $\;\Rightarrow\;$ q.e.d.

*Fonte:* [📄 PDF p.21](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
