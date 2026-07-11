

**Quesito:** [[Quesiti/ques_2002_suppletiva_ordinamento_2002_questionario_36_3|2002 Suppletiva Ordinamento — Questionario — Quesito 3]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_questionario_36|2002 Suppletiva Ordinamento — Questionario]]

Di una funzione reale di variabile reale $f(x)$ si sa che: è derivabile su tutto $\mathbb{R}$; $f(x)=0$ soltanto per $x=0$; $f(x)\to 0$ per $x\to\pm\infty$; $f'(x)=0$ soltanto per $x=-2$ e $x=1$; inoltre $f(-2)=1$ ed $f(1)=-2$. Si vuole stabilire quali proprietà di $f$ restino univocamente determinate da queste informazioni.

## Dominio e continuità

Se $f$ è derivabile su tutto $\mathbb{R}$, allora è in particolare definita e continua su tutto $\mathbb{R}$: la derivabilità in un punto implica infatti la continuità in quel punto. Dominio e insieme di continuità sono quindi determinati con certezza e coincidono con $\mathbb{R}$.

## Segno della funzione

La funzione è continua su $\mathbb{R}$ e si annulla soltanto in $x=0$. Per il teorema degli zeri, il segno di $f$ può cambiare unicamente attraversando uno zero: di conseguenza $f$ mantiene segno costante su ciascuno dei due intervalli $(-\infty,0)$ e $(0,+\infty)$. Poiché $f(-2)=1>0$ e $-2$ appartiene al primo intervallo, mentre $f(1)=-2<0$ e $1$ appartiene al secondo, si conclude:

$$f(x)>0 \quad \text{per } x<0, \qquad f(x)<0 \quad \text{per } x>0.$$

In accordo con questo, i limiti all'infinito risultano orientati: $f(x)\to 0^{+}$ per $x\to-\infty$ e $f(x)\to 0^{-}$ per $x\to+\infty$.

## Monotonìa

La derivata si annulla solo in $x=-2$ e $x=1$; per il teorema di Darboux (proprietà dei valori intermedi della derivata), $f'$ mantiene segno costante su ciascuno degli intervalli $(-\infty,-2)$, $(-2,1)$ e $(1,+\infty)$.

- Su $(-\infty,-2)$ la funzione passa dal valore limite $0^{+}$ (per $x\to-\infty$) al valore $f(-2)=1$: essendo il valore finale maggiore di quello iniziale, deve essere $f'>0$, quindi $f$ è **crescente**.
- Su $(-2,1)$ la funzione passa da $f(-2)=1$ a $f(1)=-2$: il valore diminuisce, dunque $f'<0$ e $f$ è **decrescente**.
- Su $(1,+\infty)$ la funzione passa da $f(1)=-2$ al valore limite $0^{-}$ (per $x\to+\infty$): il valore aumenta, quindi $f'>0$ e $f$ è **crescente**.

Pertanto $x=-2$ è un punto di **massimo relativo** con $f(-2)=1$ e $x=1$ è un punto di **minimo relativo** con $f(1)=-2$. Riassumendo: $f$ cresce per $x<-2$ e per $x>1$, decresce per $-2<x<1$.

Un andamento qualitativo compatibile con tutte le informazioni è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="474.558" height="173.134" viewBox="-72 -72 355.919 129.85"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-10.5h342.738"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M268.788-12.9c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="99.499" y="-10.5" stroke="none" font-family="cmmi10" font-size="10" transform="translate(175.102 2.153)">x</text><path fill="none" d="M99.499 56.079V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M97.099-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="99.499" y="-10.5" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -54.131)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-54.145-12.549s18.501-1.58 25.607-3.073 18.502-5.373 25.608-7.682 18.501-7.186 25.607-8.963 18.501-4.303 25.607-3.84c7.106.461 18.502 3.616 25.607 7.17C80.997-25.386 94.17-16.79 99.5-10.5c5.33 6.288 9.25 19.781 12.803 26.887s8.896 22.55 12.804 24.327 9.68-7.97 15.365-11.523c5.684-3.553 17.08-10.353 25.607-14.084s23.77-9.961 35.85-12.804 51.215-7.682 51.215-7.682"/><path stroke="none" d="M49.724-36.108a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><g stroke="none" font-size="10"><text x="99.499" y="-10.5" font-family="cmr10" transform="translate(-86.414 -31.64)">(</text><text x="103.388" y="-10.5" font-family="cmsy10" transform="translate(-86.414 -31.64)">¡</text><text x="111.165" y="-10.5" font-family="cmr10" transform="translate(-86.414 -31.64)">2</text><text x="116.166" y="-10.5" font-family="cmmi10" transform="translate(-86.414 -31.64)">;</text><text x="122.277" y="-10.5" font-family="cmr10" transform="translate(-86.414 -31.64)">1)</text></g><path stroke="none" d="M126.546 40.714a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><g stroke="none" font-size="10"><text x="99.499" y="-10.5" font-family="cmr10" transform="translate(29.14 62.248)">(1</text><text x="108.388" y="-10.5" font-family="cmmi10" transform="translate(29.14 62.248)">;</text><text x="114.499" y="-10.5" font-family="cmsy10" transform="translate(29.14 62.248)">¡</text><text x="122.277" y="-10.5" font-family="cmr10" transform="translate(29.14 62.248)">2)</text></g><path stroke="none" d="M100.939-10.5a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><text x="99.499" y="-10.5" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -3.533)">O</text></g></svg>
</figure>

## Flessi

Sui flessi si può dare solo un'informazione qualitativa. Analizziamo l'andamento della derivata $f'$:

- Su $(-\infty,-2)$ si ha $f'>0$, con $f'\to 0$ per $x\to-\infty$ (la curva tende all'asintoto orizzontale $y=0$) e $f'(-2)=0$. Dunque $f'$ parte da $0$, diventa positiva e ritorna a $0$: assume perciò un massimo interno, in corrispondenza del quale $f''$ cambia segno. Esiste quindi **almeno un flesso** per $x<-2$.
- Su $(-2,1)$ si ha $f'<0$, con $f'(-2)=0$ e $f'(1)=0$: la derivata scende sotto zero e risale a $0$, assumendo un minimo interno. Vi è dunque **almeno un flesso** per $-2<x<1$.
- Su $(1,+\infty)$ si ha $f'>0$, con $f'(1)=0$ e $f'\to 0$ per $x\to+\infty$: analogamente $f'$ ha un massimo interno, quindi esiste **almeno un flesso** per $x>1$.

Si conclude che la funzione possiede **almeno tre flessi**, uno in ciascuno dei tre intervalli. Le informazioni fornite non consentono però di individuarne l'ascissa esatta, né di escludere l'esistenza di ulteriori flessi: la posizione dei flessi non è quindi univocamente determinata.

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
