

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_108_4|2006 Sessione Ordinaria PNI — Prova (p.108) — Quesito 4]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Si deve determinare il valore di

$$\lim_{x\to +\infty}\bigl(x-\ln x\bigr)$$

scegliendo tra le alternative: [A] $0$; [B] un valore finito diverso da $0$; [C] $+\infty$; [D] $-\infty$.

## Analisi della forma

Per $x\to +\infty$ si ha $x\to +\infty$ e $\ln x\to +\infty$, quindi il limite si presenta nella forma indeterminata $+\infty-\infty$. Non è dunque possibile concludere immediatamente: occorre confrontare i due infiniti.

## Risoluzione

Raccogliamo $x$ (che è positivo per $x\to +\infty$):

$$x-\ln x = x\left(1-\frac{\ln x}{x}\right).$$

Ricordando la gerarchia degli infiniti, il logaritmo è un infinito di ordine inferiore rispetto a qualunque potenza positiva di $x$; in particolare

$$\lim_{x\to +\infty}\frac{\ln x}{x}=0.$$

Pertanto il fattore tra parentesi tende a $1$:

$$1-\frac{\ln x}{x}\;\longrightarrow\;1,$$

mentre il fattore $x$ tende a $+\infty$. Per il prodotto si ottiene

$$\lim_{x\to +\infty}\bigl(x-\ln x\bigr)=\lim_{x\to +\infty} x\left(1-\frac{\ln x}{x}\right)=(+\infty)\cdot 1=+\infty.$$

La risposta corretta è quindi **[C] $+\infty$**: pur presentandosi la forma indeterminata $+\infty-\infty$, l'infinito lineare $x$ prevale sull'infinito logaritmico $\ln x$.

## Verifica alternativa

Si può giungere alla stessa conclusione studiando la funzione $y=x-\ln x$. La sua derivata è

$$y'=1-\frac{1}{x},$$

che è positiva per $x>1$: la funzione è quindi strettamente crescente per $x>1$ e non ammette asintoto orizzontale, poiché la differenza tra le due funzioni cresce illimitatamente. Il confronto grafico tra $y=x$ e $y=\ln x$ rende evidente il fenomeno: al crescere di $x$ la retta $y=x$ si distanzia sempre più dalla curva $y=\ln x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="279.72" height="311.385" viewBox="-72 -72 209.79 233.539"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-65.18 102.172h168.608"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M101.548 99.772c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-57.499" y="102.172" stroke="none" font-family="cmmi10" font-size="10" transform="translate(164.859 2.153)">x</text><path fill="none" d="M-57.499 161.069V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="102.172" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -166.803)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-57.499 102.172 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604L44.052.621l2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604 2.603-2.604 2.604-2.604 2.604-2.604 2.604-2.604 2.604-2.603 2.604-2.604 2.604-2.604"/><g fill="#00f" stroke="none" font-size="10"><text x="-57.499" y="102.172" font-family="cmmi10" transform="translate(157.361 -152.448)">y</text><text x="-49.459" y="102.172" font-family="cmr10" transform="translate(157.361 -152.448)">=</text><text x="-38.904" y="102.172" font-family="cmmi10" transform="translate(157.361 -152.448)">x</text></g></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-53.658 150.47 2.54-12.712 2.538-8.578 2.54-6.412 2.538-5.128 2.54-4.27 2.538-3.656 2.54-3.2 2.538-2.84 2.54-2.564 2.538-2.327 2.54-2.133 2.538-1.968 2.54-1.829 2.538-1.706 2.54-1.599 2.538-1.506 2.54-1.42 2.539-1.35 2.539-1.28 2.539-1.218 2.539-1.163L2.2 80.497 4.74 79.43l2.539-1.023 2.539-.984 2.539-.949 2.539-.914 2.539-.882 2.539-.852L22.513 73l2.539-.801 2.539-.774 2.539-.755 2.539-.731 2.539-.71 2.539-.69 2.539-.675 2.539-.656 2.539-.643 2.539-.624 2.539-.61 2.539-.594 2.539-.583 2.539-.568 2.539-.558 2.539-.544 2.539-.533 2.539-.523 2.539-.512 2.539-.502 2.539-.493 2.539-.482 2.539-.474 2.539-.465 2.539-.457 2.539-.45 2.539-.441 2.539-.434 2.539-.426"/><g fill="red" stroke="none" font-size="10"><text x="-57.499" y="102.172" font-family="cmmi10" transform="translate(157.375 -43.38)">y</text><text x="-49.459" y="102.172" font-family="cmr10" transform="translate(157.375 -43.38)">=</text><text x="-38.904" y="102.172" font-family="cmr10" transform="translate(157.375 -43.38)">ln</text><text x="-28.904" y="102.172" font-family="cmmi10" transform="translate(157.375 -43.38)">x</text></g></g><text x="-57.499" y="102.172" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-31.891 102.172V76.565"/><text x="-57.499" y="102.172" stroke="none" font-family="cmr10" font-size="10" transform="translate(23.107 9.977)">1</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
