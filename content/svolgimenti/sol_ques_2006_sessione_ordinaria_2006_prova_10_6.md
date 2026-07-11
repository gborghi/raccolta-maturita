

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_6|2006 Sessione Ordinaria — Prova (p.10) — Quesito 6]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

La funzione reale di variabile reale $f(x)$ ammette derivata nulla in tutti i punti di un intervallo $J$, tranne che nel punto $a$ di $J$, dove la funzione non è continua. Si può concludere che $f(x)$ è costante in $J$? Fornire una spiegazione esauriente della risposta.

## Risposta

La risposta è **NO**: non è lecito concludere che $f$ sia costante in $J$.

## Perché il teorema non si applica

Il risultato «se $f'(x)=0$ in ogni punto di un intervallo, allora $f$ è costante in quell'intervallo» è un corollario del teorema di Lagrange e richiede in modo essenziale che $f$ sia **continua su tutto l'intervallo**. Nel nostro caso l'ipotesi di continuità cade nel punto $a$: la discontinuità in $a$ spezza $J$ nei due sottointervalli che stanno a sinistra e a destra di $a$. Su ciascuno di essi $f$ è continua e ha derivata nulla, dunque è costante; ma i due valori costanti possono essere **diversi**, perché nessun legame di continuità li obbliga a coincidere in $a$.

## Controesempio

Basta esibire una funzione che soddisfa le ipotesi ma non è costante. Poniamo $J=[0,3)$ e $a=2$, e consideriamo la funzione a gradino

$$f(x)=\begin{cases} 1 & \text{se } 0\le x<2,\\[4pt] -1 & \text{se } 2\le x<3. \end{cases}$$

Verifichiamo le ipotesi:

- per ogni $x\in[0,2)$ e per ogni $x\in(2,3)$ la funzione è costante, quindi $f'(x)=0$;
- nel punto $a=2$ la funzione è discontinua, perché
$$\lim_{x\to 2^-} f(x)=1 \neq -1 = f(2)=\lim_{x\to 2^+} f(x);$$
in $x=2$ la derivata non esiste, coerentemente con l'enunciato.

Dunque $f$ ha derivata nulla in tutti i punti di $J$ tranne che in $a=2$, dove non è continua, eppure $f$ **non è costante** in $J$ (assume i valori $1$ e $-1$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="220.512" height="185.436" viewBox="-72 -72 165.384 139.077"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-63.723 3.727H80.133"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M78.253 1.327c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-52.626" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(136.692 2.153)">x</text><path fill="none" d="M-52.626 66.607V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-55.026-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-52.626" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -68.358)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-52.626-33.262H21.35M-52.626 40.715H58.34"/><text x="-52.626" y="3.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -33.766)">1</text><g stroke="none" font-size="10"><text x="-52.626" y="3.727" font-family="cmsy10" transform="translate(-16.31 39.794)">¡</text><text x="-44.848" y="3.727" font-family="cmr10" transform="translate(-16.31 39.794)">1</text></g><text x="-52.626" y="3.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(71.477 9.977)">2</text><text x="-52.626" y="3.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(108.466 9.977)">3</text><text x="-52.626" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" stroke="#00f" stroke-width="1.2" d="M-52.626-33.262H21.35"/><path fill="#00f" stroke="none" d="M-50.676-33.262a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><path fill="#fff" stroke="#00f" stroke-width="1.2" d="M23.431-33.262a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0Zm-2.08 0"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M21.351 40.715H58.34"/><path fill="#00f" stroke="none" d="M23.301 40.715a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><path fill="#fff" stroke="#00f" stroke-width="1.2" d="M60.42 40.715a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0Zm-2.08 0"/></g></svg>
</figure>

## Conclusione

L'esempio mostra che la sola annullamento della derivata nei punti in cui essa esiste non garantisce la costanza: senza la continuità su tutto $J$ la funzione può restare costante «a tratti» e saltare da un valore all'altro attraversando il punto di discontinuità. La conclusione richiesta è quindi ingiustificata, e la risposta al quesito è **NO**.

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
