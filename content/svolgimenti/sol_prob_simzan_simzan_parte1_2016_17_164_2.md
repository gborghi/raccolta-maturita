---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2016_17_164_2
of_item: prob_simzan_simzan_parte1_2016_17_164_2
prova_id: prova_simzan_simzan_parte1_2016_17_164
anno: '2016'
pdf: SimZan_parte1.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2016
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2016_17_164_2|Simulazione Zanichelli 2016 — SimZan parte1 n.17 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 n.17]]

Nella figura sottostante è riportato il grafico della funzione $f'(x)$, derivata prima della funzione reale $f(x)$ definita e continua nell'intervallo $[0, 8]$.

*(grafico — vedi PDF p.165)*

Dal grafico di $f'(x)$ si osservano le seguenti caratteristiche:
- i tratti $AB$, $CD$, $FG$ sono segmenti di retta;
- i punti $B$, $E$, $F$ non appartengono al grafico;
- ciascuno degli archi $BC$, $CD$, $DE$ individua un ortogonale la cui area misura $S$;
- il tratto $BF$ ha andamento sinusoidale e si raccorda con $FG$ presentando un punto tangenziale.

### Punto a) — Traccia dei grafici di $f'(x)$ e $f(x)$

Si tracciano in due distinti riferimenti cartesiani i grafici plausibili di $f'(x)$ e $f(x)$, indicando in particolare il dominio, gli zeri, il segno e le coordinate dei punti evidenziati.

**Analisi del segno di $f'(x)$:**

- Per $x \in [0, 1]$: $f'(x) < 0$ (tratto $AB$ sotto l'asse), $f$ è **decrescente**.
- Per $x \in [1, 2]$: $f'(x)$ cresce da negativo a zero, $f$ ha un punto di **flesso discendente** e poi passa al crescente.
- Per $x \in [2, 4]$: $f'(x) > 0$, $f$ è **crescente** — raggiunge un massimo locale in $x = 4$.
- Per $x \in [4, 6]$: $f'(x) < 0$, $f$ è **decrescente** — raggiunge un minimo locale in $x = 6$.
- Per $x \in [6, 8]$: $f'(x) > 0$ (tratto sinusoidale raccordato con $FG$), $f$ è di nuovo **crescente**.

**Massimo valore di $f(x)$:**

Il massimo di $f$ si trova in $x = 4$ (cambio di segno di $f'$ da $+$ a $-$). Con $f(0) = 0$:
$$f(4) = f(0) + \int_0^4 f'(x)\,dx.$$

L'integrale tiene conto dell'area algebrica sotto $f'(x)$: la parte negativa su $[0,1]$ (area $= -S$) e la parte positiva su $[1,4]$ (area $= +3S$, se ogni arco ha area $S$):
$$f(4) = 0 + (-S + 3S) = 2S.$$

*(grafico — vedi PDF p.165)*

---

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
