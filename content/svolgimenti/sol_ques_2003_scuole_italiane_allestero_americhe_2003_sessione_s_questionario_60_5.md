

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_americhe_2003_sessione_s_questionario_60_5|2003 Americhe Suppletiva — Questionario — Quesito 5]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_americhe_2003_sessione_s_questionario_60|2003 Americhe Suppletiva — Questionario]]

Determinare il campo di esistenza della funzione

$$f(x) = \log\left(2x - \sqrt{4x-1}\right).$$

## Condizioni di esistenza

La funzione è definita quando sono soddisfatte contemporaneamente due condizioni: il radicando della radice quadrata deve essere non negativo e l'argomento del logaritmo deve essere strettamente positivo. Si deve quindi imporre

$$\begin{cases} 4x-1 \ge 0 \\ 2x - \sqrt{4x-1} > 0. \end{cases}$$

La prima condizione dà $x \ge \dfrac{1}{4}$.

## Risoluzione della disequazione irrazionale

La seconda condizione si riscrive come

$$\sqrt{4x-1} < 2x.$$

Una disequazione del tipo $\sqrt{A} < B$ equivale al sistema

$$\begin{cases} A \ge 0 \\ B > 0 \\ A < B^2. \end{cases}$$

Nel nostro caso $A = 4x-1$ e $B = 2x$, quindi

$$\begin{cases} 4x-1 \ge 0 \\ 2x > 0 \\ 4x-1 < (2x)^2. \end{cases}$$

La prima disuguaglianza dà nuovamente $x \ge \dfrac{1}{4}$; la seconda dà $x > 0$. La terza si sviluppa in

$$4x-1 < 4x^2 \;\Rightarrow\; 4x^2 - 4x + 1 > 0 \;\Rightarrow\; (2x-1)^2 > 0,$$

che è verificata per ogni $x$ tranne il valore che annulla il quadrato, cioè $x \ne \dfrac{1}{2}$.

## Conclusione

Intersecando tutte le condizioni ottenute ($x \ge \dfrac{1}{4}$, $x > 0$ e $x \ne \dfrac{1}{2}$) si ricava il campo di esistenza

$$D = \left[\frac{1}{4},\, \frac{1}{2}\right) \cup \left(\frac{1}{2},\, +\infty\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="305.363" height="36.884" viewBox="-72 -72 229.022 27.663"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-66.784h215.841"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M141.891-69.184c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-54.998" y="-66.784" stroke="none" font-family="cmmi10" font-size="10" transform="translate(202.702 2.153)">x</text><path fill="none" stroke="#00f" stroke-width="1.2" d="M-26.545-66.784H1.907M1.907-66.784H127.1"/><path fill="#00f" stroke="none" d="M-24.045-66.784a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m-2.5 0"/><path fill="#fff" stroke="#00f" stroke-width=".8" d="M4.407-66.784a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm-2.5 0"/><g stroke="none"><text x="-53.798" y="-70.722" font-family="cmr7" font-size="7" transform="translate(25.26 15.396)">1</text><path d="M-28.538-54.088h3.986v.4h-3.986z"/><text x="-53.798" y="-63.336" font-family="cmr7" font-size="7" transform="translate(25.26 15.396)">4</text></g><g stroke="none"><text x="-53.798" y="-70.722" font-family="cmr7" font-size="7" transform="translate(53.712 15.396)">1</text><path d="M-.086-54.088H3.9v.4H-.086z"/><text x="-53.798" y="-63.336" font-family="cmr7" font-size="7" transform="translate(53.712 15.396)">2</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
