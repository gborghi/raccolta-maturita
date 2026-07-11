

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_9|2006 Sessione Ordinaria — Prova (p.10) — Quesito 9]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

Della funzione $f(x)$ si sa che è derivabile e diversa da zero in ogni punto del suo dominio e, inoltre, che

$$f'(x) = f(x) \qquad \text{e} \qquad f(0) = 1.$$

Si vuole determinare $f(x)$.

## Impostazione

La condizione $f'(x) = f(x)$ afferma che la funzione coincide in ogni punto con la propria derivata. Poiché per ipotesi $f(x) \neq 0$ su tutto il dominio, possiamo dividere entrambi i membri per $f(x)$:

$$\frac{f'(x)}{f(x)} = 1.$$

## Risoluzione

Il primo membro è la derivata del logaritmo del valore assoluto di $f$. Infatti, per la regola di derivazione della funzione composta,

$$\frac{d}{dx}\,\ln|f(x)| = \frac{f'(x)}{f(x)} = 1.$$

Integrando rispetto a $x$ i due membri si ottiene

$$\ln|f(x)| = x + c,$$

con $c$ costante reale arbitraria. Passando all'esponenziale,

$$|f(x)| = e^{\,x + c} = e^{c}\,e^{x},$$

e quindi

$$f(x) = k\,e^{x},$$

dove $k = \pm e^{c}$ è una costante non nulla (il segno è determinato dal fatto che $f$, essendo continua e mai nulla, mantiene segno costante).

## Determinazione della costante

Imponiamo la condizione iniziale $f(0) = 1$:

$$f(0) = k\,e^{0} = k = 1.$$

Dunque $k = 1$ e la funzione cercata è

$$\boxed{\,f(x) = e^{x}\,.}$$

## Verifica

La funzione $f(x) = e^{x}$ è derivabile su tutto $\mathbb{R}$, è sempre positiva (quindi diversa da zero), soddisfa $f'(x) = e^{x} = f(x)$ e vale $f(0) = e^{0} = 1$: tutte le condizioni richieste sono verificate. La soluzione è inoltre unica, poiché ponendo $g(x) = f(x)\,e^{-x}$ si ha

$$g'(x) = f'(x)\,e^{-x} - f(x)\,e^{-x} = \big(f'(x) - f(x)\big)e^{-x} = 0,$$

per cui $g(x)$ è costante e, con $g(0) = 1$, resta $f(x) = e^{x}$.

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
