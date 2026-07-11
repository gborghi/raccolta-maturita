

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_s_questionario_37_7|2005 Americhe Suppletiva — Questionario — Quesito 7]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_s_questionario_37|2005 Americhe Suppletiva — Questionario]]

Fornire un esempio di funzione reale di variabile reale $f(x)$ tale che
$$f(0)=0,\qquad f'(1)=1,\qquad f''(2)=2.$$

## Idea

Il problema chiede *un* esempio, quindi possiamo costruire $f$ per integrazioni successive partendo dalla condizione sulla derivata seconda e fissando via via le costanti di integrazione con le altre due condizioni. Non si cerca l'unica soluzione (che non esiste): ogni scelta compatibile va bene.

## Costruzione

Partiamo dalla condizione $f''(2)=2$. La scelta più semplice è
$$f''(x)=x,$$
che infatti soddisfa $f''(2)=2$.

Integrando una prima volta:
$$f'(x)=\int x\,dx=\frac{x^2}{2}+a.$$

Imponiamo $f'(1)=1$:
$$\frac{1}{2}+a=1 \;\Rightarrow\; a=\frac{1}{2},$$
quindi
$$f'(x)=\frac{x^2}{2}+\frac{1}{2}.$$

Integrando una seconda volta:
$$f(x)=\int\left(\frac{x^2}{2}+\frac{1}{2}\right)dx=\frac{x^3}{6}+\frac{x}{2}+b.$$

Imponiamo infine $f(0)=0$:
$$b=0.$$

## Conclusione

Un esempio di funzione che soddisfa le tre condizioni è
$$f(x)=\frac{x^3}{6}+\frac{x}{2}.$$

**Verifica.**
$$f(0)=0,\qquad f'(x)=\frac{x^2}{2}+\frac{1}{2}\ \Rightarrow\ f'(1)=\frac{1}{2}+\frac{1}{2}=1,\qquad f''(x)=x\ \Rightarrow\ f''(2)=2.$$
Tutte e tre le condizioni sono verificate.

*Fonte:* [📄 PDF p.40](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
