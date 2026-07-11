

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_10|2004 Ordinamento Straordinaria — Questionario — Quesito 10]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Alla finale dei $200\text{ m}$ piani partecipano $8$ atleti, fra i quali figurano i nostri amici Antonio e Pietro. Si vuole calcolare il numero dei possibili ordini di arrivo dei primi tre classificati che registrino entrambi gli amici fra i primi tre posti.

## Impostazione

I posti che contano sono i primi tre (il podio). La condizione richiede che due di questi tre posti siano occupati da Antonio e Pietro; il terzo posto del podio deve quindi essere occupato da uno degli altri $8-2 = 6$ atleti.

Un ordine di arrivo dei primi tre classificati che soddisfa la richiesta è dunque individuato da due scelte successive:

- la scelta del terzo atleta sul podio (quello diverso da Antonio e Pietro);
- la disposizione dei tre atleti così individuati nelle tre posizioni.

## Conteggio

Il terzo atleta sul podio può essere scelto in $6$ modi (uno qualsiasi degli altri sei finalisti).

Una volta fissati i tre atleti che salgono sul podio (Antonio, Pietro e l'atleta scelto), essi possono disporsi nelle tre posizioni in tutti i modi possibili, cioè nelle permutazioni di $3$ elementi:
$$3! = 3 \cdot 2 \cdot 1 = 6.$$

Per il principio di moltiplicazione, il numero cercato è quindi:
$$6 \cdot 6 = 36.$$

## Verifica

Si giunge allo stesso risultato elencando le possibili collocazioni ordinate di Antonio ($A$) e Pietro ($P$) fra i primi tre posti, indicando con $-$ il posto occupato dal terzo atleta:
$$A\text{-}P\text{-}\_,\quad P\text{-}A\text{-}\_,\quad A\text{-}\_\text{-}P,\quad P\text{-}\_\text{-}A,\quad \_\text{-}A\text{-}P,\quad \_\text{-}P\text{-}A.$$
Vi sono $6$ schemi; in ciascuno il posto libero può essere occupato da uno qualsiasi dei $6$ atleti rimanenti, dando $6 \cdot 6 = 36$ possibilità, in accordo con il calcolo precedente.

*Fonte:* [📄 PDF p.126](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
