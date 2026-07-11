

**Quesito:** [[Quesiti/ques_2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120_4|2006 Straordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120|2006 Straordinaria — Questionario]]

Il limite della funzione $f(x)=x-\ln x$ per $x\to +\infty$ è:

[A] $0$   [B] un valore finito diverso da $0$   [C] $+\infty$   [D] $-\infty$

Individuare l'unica alternativa corretta e fornire un'esauriente spiegazione della scelta.

## Svolgimento

Per $x\to +\infty$ si ha $x\to +\infty$ e $\ln x\to +\infty$, dunque il limite si presenta nella forma indeterminata $+\infty-\infty$:

$$\lim_{x\to +\infty}\left(x-\ln x\right)=+\infty-\infty.$$

Per rimuovere l'indeterminazione raccogliamo il termine $x$, che è quello di ordine di infinito maggiore:

$$x-\ln x = x\left(1-\frac{\ln x}{x}\right).$$

Ricordando il limite notevole sul confronto tra la funzione lineare e quella logaritmica,

$$\lim_{x\to +\infty}\frac{\ln x}{x}=0,$$

la parentesi tende a $1$:

$$\lim_{x\to +\infty}\left(1-\frac{\ln x}{x}\right)=1-0=1.$$

Pertanto

$$\lim_{x\to +\infty}\left(x-\ln x\right)=\lim_{x\to +\infty}x\left(1-\frac{\ln x}{x}\right)=(+\infty)\cdot 1=+\infty.$$

## Conclusione

L'infinito $x$ prevale sull'infinito $\ln x$: l'alternativa corretta è la **[C] $+\infty$**.

Graficamente, la retta $y=x$ cresce indefinitamente più in fretta della curva $y=\ln x$, così che la loro differenza $x-\ln x$ diverge a $+\infty$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="256.48" height="299.522" viewBox="-72 -72 192.36 224.642"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 91.646H86.866"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M84.986 89.246c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-63.534" y="91.646" stroke="none" font-family="cmmi10" font-size="10" transform="translate(154.333 2.153)">x</text><path fill="none" d="M-63.534 142.86V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-65.934-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-63.534" y="91.646" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -156.277)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-63.534 91.646 2.41-2.411 2.412-2.411 2.41-2.411 2.411-2.41 2.411-2.412 2.411-2.41 2.41-2.411 2.412-2.411 2.41-2.411 2.411-2.411 2.411-2.41 2.411-2.412 2.411-2.41 2.41-2.411 2.412-2.411 2.41-2.411 2.411-2.411 2.411-2.41 2.411-2.412 2.411-2.41 2.41-2.412 2.412-2.41 2.41-2.411 2.412-2.411 2.41-2.41 2.411-2.412 2.411-2.41L3.97 24.14l2.41-2.41 2.412-2.411 2.41-2.411 2.411-2.411 2.411-2.41 2.411-2.412 2.411-2.41 2.41-2.411 2.412-2.411 2.41-2.411 2.411-2.411 2.411-2.41L35.311-7.2l2.411-2.41 2.41-2.411 2.412-2.411 2.41-2.411 2.411-2.411 2.411-2.41 2.411-2.412 2.411-2.41 2.41-2.411 2.412-2.411 2.41-2.411 2.411-2.411 2.411-2.41 2.411-2.412 2.411-2.41 2.41-2.411 2.412-2.411 2.41-2.411"/><g fill="#00f" stroke="none" font-size="10"><text x="-63.534" y="91.646" font-family="cmmi10" transform="translate(145.974 -141.06)">y</text><text x="-55.495" y="91.646" font-family="cmr10" transform="translate(145.974 -141.06)">=</text><text x="-44.939" y="91.646" font-family="cmmi10" transform="translate(145.974 -141.06)">x</text></g></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-60.12 151.972 2.353-14.946 2.353-9.705 2.353-7.24 2.354-5.764 2.353-4.794 2.353-4.101 2.353-3.583 2.353-3.182 2.353-2.861 2.353-2.599 2.353-2.385 2.353-2.197 2.354-2.04 2.353-1.905 2.353-1.784 2.353-1.679 2.353-1.584 2.353-1.503 2.353-1.425 2.353-1.358 2.354-1.297 2.353-1.238 2.353-1.192 2.353-1.14 2.353-1.097 2.353-1.055 2.353-1.019 2.353-.982 2.353-.95 2.354-.92 2.353-.89 2.353-.863 2.353-.839 2.353-.814 2.353-.79 2.353-.771 2.353-.749 2.354-.73 2.353-.713 2.353-.695 2.353-.677 2.353-.663 2.353-.646 2.353-.634 2.353-.616 2.353-.61 2.354-.595 2.353-.58 2.353-.57 2.353-.559 2.353-.547 2.353-.538 2.353-.527 2.353-.518 2.354-.509 2.353-.5 2.353-.49 2.353-.483 2.353-.475"/><g fill="red" stroke="none" font-size="10"><text x="-63.534" y="91.646" font-family="cmmi10" transform="translate(145.981 -43.29)">y</text><text x="-55.495" y="91.646" font-family="cmr10" transform="translate(145.981 -43.29)">=</text><text x="-44.939" y="91.646" font-family="cmr10" transform="translate(145.981 -43.29)">ln</text><text x="-34.939" y="91.646" font-family="cmmi10" transform="translate(145.981 -43.29)">x</text></g></g><text x="-63.534" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(25.953 13.18)">1</text><path fill="none" d="M-35.081 90.223v2.845"/></g></svg>
</figure>
