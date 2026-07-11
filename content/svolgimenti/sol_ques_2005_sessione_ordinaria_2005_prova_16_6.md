

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_6|2005 Ordinaria — Prova — Quesito 6]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Calcolare
$$\lim_{x\to +\infty}\frac{2x-\sin 3x}{3x+\cos 2x}$$
e stabilire se, per determinarlo, sia lecito ricorrere al teorema di De L'Hôpital, fornendo una spiegazione esauriente.

## a) Calcolo del limite

Al tendere di $x\to +\infty$ sia il numeratore sia il denominatore tendono a $+\infty$: si presenta la forma indeterminata $\frac{\infty}{\infty}$. Conviene raccogliere $x$ a numeratore e a denominatore:
$$\lim_{x\to +\infty}\frac{2x-\sin 3x}{3x+\cos 2x}=\lim_{x\to +\infty}\frac{x\left(2-\dfrac{\sin 3x}{x}\right)}{x\left(3+\dfrac{\cos 2x}{x}\right)}=\lim_{x\to +\infty}\frac{2-\dfrac{\sin 3x}{x}}{3+\dfrac{\cos 2x}{x}}.$$

Le funzioni $\sin 3x$ e $\cos 2x$ sono limitate, cioè $|\sin 3x|\le 1$ e $|\cos 2x|\le 1$; dividendo per $x\to +\infty$ si ha quindi
$$\frac{\sin 3x}{x}\to 0,\qquad \frac{\cos 2x}{x}\to 0.$$

Ne segue
$$\lim_{x\to +\infty}\frac{2x-\sin 3x}{3x+\cos 2x}=\frac{2-0}{3+0}=\frac{2}{3}.$$

## b) Applicabilità del teorema di De L'Hôpital

La forma è del tipo $\frac{\infty}{\infty}$, quindi la prima condizione del teorema è soddisfatta. Il teorema richiede però anche che **esista** il limite del rapporto delle derivate. Derivando numeratore e denominatore si ottiene
$$\frac{\dfrac{d}{dx}(2x-\sin 3x)}{\dfrac{d}{dx}(3x+\cos 2x)}=\frac{2-3\cos 3x}{3-2\sin 2x}.$$

Al tendere di $x\to +\infty$ questo rapporto **non ammette limite**: il numeratore oscilla continuamente tra $-1$ e $5$, il denominatore tra $1$ e $5$, e il loro quoziente continua a oscillare senza avvicinarsi ad alcun valore. Poiché
$$\lim_{x\to +\infty}\frac{2-3\cos 3x}{3-2\sin 2x}\quad\text{non esiste,}$$
viene a mancare l'ipotesi essenziale del teorema: **il teorema di De L'Hôpital non è applicabile**. È dunque **falso** che si possa ricorrere ad esso per calcolare il limite proposto.

È importante osservare che questo non contraddice il risultato del punto a): il teorema di De L'Hôpital fornisce una condizione **soltanto sufficiente**. Quando il limite del rapporto delle derivate non esiste, il teorema non permette di concludere nulla, ma il limite di partenza può ugualmente esistere ed essere calcolato con altri metodi, come si è fatto raccogliendo $x$. Nel nostro caso tale limite esiste e vale $\dfrac{2}{3}$.

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
