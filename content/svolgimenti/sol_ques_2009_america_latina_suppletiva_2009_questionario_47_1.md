

**Quesito:** [[Quesiti/ques_2009_america_latina_suppletiva_2009_questionario_47_1|2009 America Latina Suppletiva — Questionario — Quesito 1]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_questionario_47|2009 America Latina Suppletiva — Questionario]]

Provare che, per ogni intero $n>0$, vale la disuguaglianza
$$n! \ge 2^{\,n-1}.$$

Procediamo per **induzione** su $n$. Indichiamo con $P(n)$ la proprietà $n! \ge 2^{\,n-1}$.

## Base dell'induzione

Verifichiamo $P(1)$. Si ha
$$1! = 1 \ge 2^{\,0} = 1,$$
dunque $P(1)$ è vera.

## Passo induttivo

Supponiamo vera $P(n)$, cioè $n! \ge 2^{\,n-1}$ (ipotesi induttiva), e dimostriamo $P(n+1)$, ossia
$$(n+1)! \ge 2^{\,n}.$$

Utilizzando la definizione di fattoriale e l'ipotesi induttiva:
$$(n+1)! = n!\,(n+1) \ge 2^{\,n-1}(n+1),$$
dove la disuguaglianza segue da $n! \ge 2^{\,n-1}$ (moltiplicando ambo i membri per il fattore positivo $n+1$).

D'altra parte, poiché $n>0$ implica $n+1 \ge 2$, risulta
$$2^{\,n-1}(n+1) \ge 2^{\,n-1}\cdot 2 = 2^{\,n}.$$

Mettendo insieme le due disuguaglianze si ottiene
$$(n+1)! \ge 2^{\,n},$$
cioè $P(n+1)$.

## Conclusione

Per il principio di induzione, essendo vera la base $P(1)$ e valido il passo $P(n)\Rightarrow P(n+1)$, la proprietà $n! \ge 2^{\,n-1}$ è vera per ogni intero $n>0$.

*Fonte:* [📄 PDF p.47](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
