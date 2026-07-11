

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_1|2003 Ordinaria — Prova (Ordinamento) — Quesito 1]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

**Testo.** Data la definizione di *rette sghembe*, si consideri la proposizione: «comunque si prendano nello spazio tre rette $x,\ y,\ z$, a due a due distinte, se $x$ ed $y$ sono sghembe e, così pure, sono sghembe $y$ e $z$, allora anche $x$ e $z$ sono sghembe». Stabilire se è vera o falsa.

### Definizione

Due rette dello spazio si dicono **sghembe** quando non esiste alcun piano che le contenga entrambe. In modo equivalente: due rette sono sghembe se e solo se non hanno punti in comune e non sono parallele. Infatti due rette sono complanari precisamente quando sono *incidenti* (un punto comune) oppure *parallele*; l'assenza di entrambe queste condizioni equivale alla non complanarità.

### Analisi della proposizione

La proposizione afferma che la relazione «essere sghembe» è **transitiva**. Questo è **falso**: per smentirla è sufficiente esibire un controesempio, cioè tre rette $x,\ y,\ z$ in cui $x$ e $y$ siano sghembe, $y$ e $z$ siano sghembe, ma $x$ e $z$ **non** lo siano.

### Controesempio

Nello spazio riferito a un sistema cartesiano $Oxyz$ consideriamo le rette

$$x:\ \begin{cases} y=0 \\ z=0 \end{cases} \qquad z:\ \begin{cases} y=1 \\ z=0 \end{cases} \qquad y:\ \begin{cases} x=0 \\ z=1 \end{cases}$$

cioè $x=\{(t,0,0)\}$, $z=\{(t,1,0)\}$ e $y=\{(0,s,1)\}$, con $t,s\in\mathbb{R}$.

- **$x$ e $y$ sono sghembe.** Le direzioni sono rispettivamente $(1,0,0)$ e $(0,1,0)$, dunque le rette non sono parallele; inoltre non hanno punti comuni, perché ogni punto di $x$ ha $z=0$ mentre ogni punto di $y$ ha $z=1$.
- **$y$ e $z$ sono sghembe.** Le direzioni $(0,1,0)$ e $(1,0,0)$ non sono parallele; non vi sono punti comuni, poiché $y$ ha $z=1$ e $z$ ha $z=0$.
- **$x$ e $z$ NON sono sghembe.** Hanno la stessa direzione $(1,0,0)$: sono **parallele** (e distinte), quindi complanari — giacciono entrambe nel piano $z=0$.

Le tre rette si riconoscono, ad esempio, come spigoli di un cubo: $x$ e $z$ sono due spigoli opposti e paralleli di una faccia, mentre $y$ è uno spigolo sghembo rispetto a entrambi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="155.243" height="159.629" viewBox="-72 -72 116.432 119.722"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#b9b9b9" d="M-71.67 35.88H5.152l38.41-30.728h-76.821ZM-71.67-40.941H5.152l38.41-30.729h-76.821ZM-71.67 35.88V-40.94M5.152 35.88V-40.94m38.41 46.093V-71.67M-33.259 5.152V-71.67"/><g fill="red" stroke="red" stroke-width="1.2"><path fill="none" d="M-71.67 35.88H5.152"/><text x="-71.67" y="35.88" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(35.553 8.239)">x</text></g><g fill="#e67300" stroke="#e67300" stroke-width="1.2"><path fill="none" d="M-33.26 5.152h76.822"/><text x="-71.67" y="35.88" fill="#e67300" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.755 -22.49)">z</text></g><g fill="#00f" stroke="#00f" stroke-width="1.2"><path fill="none" d="m-71.67-40.941 38.41-30.729"/><text x="-71.67" y="35.88" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.01 -98.063)">y</text></g></g></svg>
</figure>

### Conclusione

Poiché $x$ e $z$ risultano parallele (e non sghembe) pur essendo ciascuna sghemba con $y$, la proposizione è **falsa**: la relazione di sghembezza non gode della proprietà transitiva. Osserviamo che il controesempio non è isolato — a partire da una retta $y$ e da un suo piano non contenente $y$, si possono trovare infinite rette di quel piano sghembe con $y$, tra loro parallele o incidenti: in nessuno di questi casi la conclusione della proposizione sussiste.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
