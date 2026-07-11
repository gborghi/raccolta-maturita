

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_108_6|2006 Sessione Ordinaria PNI — Prova (p.108) — Quesito 6]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Dopo aver enunciato il teorema di Rolle, si stabilisca se esso può essere applicato alla funzione $f(x)=\sqrt{x^2}$ nell'intervallo $[-1;\,1]$.

## Enunciato del teorema di Rolle

Sia $y=f(x)$ una funzione tale che:

1. $f$ è continua nell'intervallo chiuso e limitato $[a;\,b]$;
2. $f$ è derivabile nell'intervallo aperto $(a;\,b)$;
3. $f(a)=f(b)$.

Allora esiste almeno un punto $c\in(a;\,b)$ in cui la derivata prima si annulla, cioè $f'(c)=0$.

## Applicazione alla funzione data

Osserviamo anzitutto che

$$f(x)=\sqrt{x^2}=|x|=\begin{cases} -x & \text{se } x<0 \\[2pt] x & \text{se } x\ge 0 \end{cases}$$

Verifichiamo una per una le tre ipotesi del teorema nell'intervallo $[-1;\,1]$.

- **Continuità.** La funzione $|x|$ è continua su tutto $\mathbb{R}$, dunque in particolare è continua nell'intervallo chiuso $[-1;\,1]$: la prima ipotesi è soddisfatta.

- **Uguaglianza degli estremi.** Si ha $f(-1)=|-1|=1$ e $f(1)=|1|=1$, quindi $f(-1)=f(1)$: anche la terza ipotesi è soddisfatta.

- **Derivabilità.** Per $x\neq 0$ la funzione è derivabile e risulta

$$f'(x)=\begin{cases} -1 & \text{se } x<0 \\[2pt] +1 & \text{se } x>0 \end{cases}$$

Nel punto $x=0$, che appartiene all'intervallo aperto $(-1;\,1)$, la derivata sinistra e la derivata destra sono diverse:

$$f'_-(0)=-1 \neq +1 = f'_+(0),$$

perciò $f$ **non è derivabile** in $x=0$: il grafico presenta in tale punto un punto angoloso.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="205.21" height="121.325" viewBox="-72 -72 153.908 90.994"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 4.58H68.656"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M66.776 2.18c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-3.783" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(76.373 2.153)">x</text><path fill="none" d="M-3.783 18.238v-76.992"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.183-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.783" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -69.212)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-49.308-40.945-3.783 4.58 41.74-40.945"/><path stroke="none" d="M-2.183 4.58a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-3.783" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-49.308 4.58v-45.525M41.741 4.58v-45.525"/><g stroke="none" font-size="10"><text x="-3.783" y="4.58" font-family="cmsy10" transform="translate(-51.913 9.977)">¡</text><text x="3.995" y="4.58" font-family="cmr10" transform="translate(-51.913 9.977)">1</text></g><text x="-3.783" y="4.58" stroke="none" font-family="cmr10" font-size="10" transform="translate(43.025 9.977)">1</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-3.783" y="4.58" font-family="cmmi10" transform="translate(37.42 -54.406)">y</text><text x="4.256" y="4.58" font-family="cmr10" transform="translate(37.42 -54.406)">=</text><text x="14.812" y="4.58" font-family="cmsy10" transform="translate(37.42 -54.406)">j</text><text x="17.589" y="4.58" font-family="cmmi10" transform="translate(37.42 -54.406)">x</text><text x="23.305" y="4.58" font-family="cmsy10" transform="translate(37.42 -54.406)">j</text></g></g></g></svg>
</figure>

## Conclusione

Poiché la seconda ipotesi non è verificata (la funzione non è derivabile nell'intervallo aperto $(-1;\,1)$, in quanto non lo è in $x=0$), il **teorema di Rolle non può essere applicato** alla funzione $f(x)=\sqrt{x^2}$ nell'intervallo $[-1;\,1]$.

Si osservi che questo non contraddice il teorema: esso fornisce una condizione soltanto sufficiente, non necessaria, per l'esistenza di un punto interno a tangente orizzontale. In effetti, pur mancando l'ipotesi di derivabilità, non esiste alcun punto interno in cui $f'$ si annulli.

*Fonte:* [📄 PDF p.123](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
