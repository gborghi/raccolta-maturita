

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_americhe_2003_sessione_o_questionario_50_6|2003 Americhe Ordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_americhe_2003_sessione_o_questionario_50|2003 Americhe Ordinaria — Questionario]]

La funzione reale di variabile reale $f(x)$ è derivabile per ogni $x$ tale che $1.0 \le x \le 1.1$; inoltre $f(1.1) = 0$ e $1.0 \le f'(x) \le 1.1$ in ogni $x$ dell'intervallo $[1.0;\, 1.1]$. Dimostrare che risulta $-0.11 \le f(1.0) \le -0.10$.

## Applicazione del teorema di Lagrange

La funzione $f$ soddisfa le ipotesi del teorema di Lagrange (o del valor medio) nell'intervallo chiuso e limitato $[1.0;\, 1.1]$: essa è infatti derivabile su tutto l'intervallo, dunque in particolare è continua in $[1.0;\, 1.1]$ e derivabile nell'intervallo aperto $(1.0;\, 1.1)$.

Esiste quindi almeno un punto $c \in (1.0;\, 1.1)$ tale che

$$f'(c) = \frac{f(1.1) - f(1.0)}{1.1 - 1.0}.$$

Poiché $f(1.1) = 0$ e $1.1 - 1.0 = 0.1$, si ottiene

$$f'(c) = \frac{0 - f(1.0)}{0.1} = \frac{-f(1.0)}{0.1}.$$

## Stima tramite la limitazione della derivata

Per ipotesi $1.0 \le f'(x) \le 1.1$ in ogni punto dell'intervallo; in particolare ciò vale nel punto $c$, quindi

$$1.0 \le \frac{-f(1.0)}{0.1} \le 1.1.$$

Moltiplicando tutti i membri per $0.1 > 0$ (il verso delle disuguaglianze non cambia):

$$0.10 \le -f(1.0) \le 0.11.$$

Moltiplicando ora per $-1$ (il verso delle disuguaglianze si inverte):

$$-0.11 \le f(1.0) \le -0.10,$$

che è proprio la tesi da dimostrare.

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
