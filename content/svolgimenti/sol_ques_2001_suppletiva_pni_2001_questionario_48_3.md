

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_3|2001 Suppletiva PNI — Questionario — Quesito 3]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

Data la funzione
$$f(x) = x^{\pi} - \pi^{x},$$
si chiede di determinarne il dominio e di stabilire il segno della derivata prima e della derivata seconda nel punto $x = \pi$.

## a) Dominio

La funzione è differenza di due termini:

- $\pi^{x}$ è una funzione esponenziale di base $\pi > 0$, definita per ogni $x \in \mathbb{R}$;
- $x^{\pi}$ è una potenza a esponente reale (irrazionale) $\pi$; una potenza $x^{\alpha}$ con $\alpha$ irrazionale è definita, nel campo reale, solo per base non negativa, ponendo $x^{\pi} = e^{\pi \ln x}$ per $x > 0$ e $0^{\pi} = 0$.

Il termine più restrittivo è dunque $x^{\pi}$, che impone $x \ge 0$. Il dominio è quindi
$$D = [0,\, +\infty), \qquad \text{cioè } x \ge 0.$$

## b) Segno della derivata prima in $x = \pi$

Derivando (per $x > 0$), con $D\big(x^{\pi}\big) = \pi\, x^{\pi-1}$ e $D\big(\pi^{x}\big) = \pi^{x}\ln \pi$:
$$f'(x) = \pi\, x^{\pi-1} - \pi^{x}\ln \pi.$$

Calcoliamo nel punto $x = \pi$:
$$f'(\pi) = \pi \cdot \pi^{\pi-1} - \pi^{\pi}\ln \pi = \pi^{\pi} - \pi^{\pi}\ln \pi = \pi^{\pi}\big(1 - \ln \pi\big).$$

Poiché $\pi^{\pi} > 0$ e, essendo $\pi \approx 3{,}14 > e$, risulta $\ln \pi \approx 1{,}145 > 1$, si ha $1 - \ln \pi < 0$. Dunque
$$f'(\pi) = \pi^{\pi}\big(1 - \ln \pi\big) < 0.$$

La derivata prima in $x = \pi$ è **negativa**: nel punto $x = \pi$ la funzione è decrescente.

## c) Segno della derivata seconda in $x = \pi$

Derivando ancora:
$$f''(x) = \pi(\pi-1)\, x^{\pi-2} - \pi^{x}(\ln \pi)^{2}.$$

Nel punto $x = \pi$:
$$f''(\pi) = \pi(\pi-1)\, \pi^{\pi-2} - \pi^{\pi}(\ln \pi)^{2} = (\pi-1)\, \pi^{\pi-1} - \pi^{\pi}(\ln \pi)^{2}.$$

Raccogliendo il fattore positivo $\pi^{\pi-1}$:
$$f''(\pi) = \pi^{\pi-1}\Big[(\pi-1) - \pi\,(\ln \pi)^{2}\Big].$$

Valutiamo la parentesi quadra: $\pi - 1 \approx 2{,}14$, mentre $\pi\,(\ln \pi)^{2} \approx 3{,}14 \cdot (1{,}145)^{2} \approx 4{,}12$. Quindi
$$(\pi-1) - \pi\,(\ln \pi)^{2} \approx 2{,}14 - 4{,}12 = -1{,}98 < 0.$$

Essendo $\pi^{\pi-1} > 0$, si conclude
$$f''(\pi) < 0.$$

La derivata seconda in $x = \pi$ è **negativa**: nel punto $x = \pi$ la funzione volge la concavità verso il basso.

## Conclusione

Il dominio di $f(x) = x^{\pi} - \pi^{x}$ è $x \ge 0$. Nel punto $x = \pi$ si ha $f'(\pi) < 0$ e $f''(\pi) < 0$: la funzione è ivi decrescente e concava.

*Fonte:* [📄 PDF p.49](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
