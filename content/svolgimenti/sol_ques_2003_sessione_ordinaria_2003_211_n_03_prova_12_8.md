

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_8|2003 Ordinaria — Prova (Ordinamento) — Quesito 8]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

$x$ e $y$ sono due numeri naturali dispari tali che $x-y=2$. Si vuole stabilire se il numero $x^3-y^3$ sia divisibile per $2$ e per $3$, scegliendo tra le opzioni:

- A) è divisibile per $2$ e per $3$;
- B) è divisibile per $2$ ma non per $3$;
- C) è divisibile per $3$ ma non per $2$;
- D) non è divisibile né per $2$ né per $3$.

## Fattorizzazione

Scomponiamo la differenza di cubi:

$$x^3-y^3=(x-y)(x^2+xy+y^2).$$

Poiché $x-y=2$, otteniamo

$$x^3-y^3=2\,(x^2+xy+y^2).$$

## Divisibilità per 2

Il fattore $2$ garantisce che $x^3-y^3$ sia pari. Esaminiamo il fattore $x^2+xy+y^2$: essendo $x$ e $y$ dispari, anche $x^2$, $xy$ e $y^2$ sono dispari. La somma di tre numeri dispari è dispari, quindi $x^2+xy+y^2$ è dispari.

Di conseguenza

$$x^3-y^3=2\cdot(\text{numero dispari}),$$

cioè $x^3-y^3$ è divisibile per $2$ (e in particolare non per $4$).

## Divisibilità per 3

Ricordiamo che per ogni intero $n$ vale $n^3\equiv n \pmod 3$ (piccolo teorema di Fermat). Perciò

$$x^3-y^3\equiv x-y \equiv 2 \pmod 3.$$

Il resto della divisione per $3$ è $2\neq 0$: dunque $x^3-y^3$ **non** è divisibile per $3$.

## Conclusione

Il numero $x^3-y^3$ è divisibile per $2$ ma non per $3$: la risposta corretta è la **B**.

A titolo di verifica, con $x=3$ e $y=1$ si ha $x^3-y^3=27-1=26=2\cdot 13$, pari e non multiplo di $3$; con $x=5$ e $y=3$ si ha $125-27=98=2\cdot 49$, ancora pari e non multiplo di $3$.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
