

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_americhe_2003_sessione_s_questionario_60_6|2003 Americhe Suppletiva — Questionario — Quesito 6]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_americhe_2003_sessione_s_questionario_60|2003 Americhe Suppletiva — Questionario]]

Considerata la funzione

$$f(x)=x^{\,1-x},$$

stabilire se esistono i suoi limiti per **a)** $x\to-\infty$, **b)** $x\to+\infty$, **c)** $x\to 1$ e, in caso affermativo, determinarli.

**Dominio.** La scrittura $x^{\,1-x}$ con esponente reale variabile richiede base positiva, quindi la funzione è definita solo per $x>0$: il dominio è $(0,+\infty)$. Per studiarne il comportamento conviene riscriverla in forma esponenziale

$$f(x)=x^{\,1-x}=e^{(1-x)\ln x}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="354.303" height="132.354" viewBox="-72 -72 265.727 99.266"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-60.404 13.685h240.88"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M178.596 11.285c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.404" y="13.685" stroke="none" font-family="cmmi10" font-size="10" transform="translate(244.813 2.153)">x</text><path fill="none" d="M-60.404 13.685v-72.44"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-62.804-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.404" y="13.685" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -78.317)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-60.404-31.84h227.623"/><text x="-60.404" y="13.685" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -42.302)">1</text><text x="-60.404" y="13.685" stroke="none" font-family="cmr10" font-size="10" transform="translate(43.025 9.977)">1</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.128 11.04 2.853-3.915 2.852-4.304 2.852-4.385 2.852-4.395 2.852-4.248 2.853-4.003 2.852-3.67 2.852-3.287 2.852-2.86 2.853-2.413 2.852-1.958 2.852-1.503 2.852-1.057 2.853-.641 2.852-.246 2.852.118 2.852.446 2.852.738 2.853.993 2.852 1.211 2.852 1.398 2.852 1.54 2.853 1.66 2.852 1.75 2.852 1.803 2.852 1.844 2.853 1.853 2.852 1.85 2.852 1.825 2.852 1.78 2.852 1.745 2.853 1.675 2.852 1.612 2.852 1.54L41.7-3l2.853 1.385 2.852 1.302 2.852 1.22 2.852 1.144 2.853 1.065 2.852.988 2.852.91 2.852.843 2.852.775 2.853.705 2.852.651 2.852.592 2.852.538 2.853.487 2.852.442 2.852.4 2.852.36 2.853.323 2.852.292 2.852.26 2.852.236 2.852.21 2.853.182 2.852.168 2.852.146 2.852.128 2.853.118 2.852.1 2.852.09 2.852.079 2.853.072 2.852.059 2.852.053 2.852.048 2.853.041 2.852.036 2.852.032 2.852.027 2.852.025 2.853.02 2.852.019 2.852.016 2.852.013 2.853.012"/><path stroke="none" d="M-12.96-31.84a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none" font-size="10"><text x="-60.404" y="13.685" font-family="cmr10" transform="translate(49.058 -51.558)">(1</text><text x="-51.515" y="13.685" font-family="cmmi10" transform="translate(49.058 -51.558)">;</text><text x="-45.404" y="13.685" font-family="cmr10" transform="translate(49.058 -51.558)">1)</text></g></g></svg>
</figure>

## a) $x\to-\infty$

Il valore $x\to-\infty$ non appartiene al dominio: la funzione non è definita per $x\le 0$. Il limite **non ha senso** e quindi non esiste.

## b) $x\to+\infty$

Studiamo l'esponente $(1-x)\ln x$ per $x\to+\infty$. Si ha $1-x\to-\infty$ e $\ln x\to+\infty$, dunque

$$\lim_{x\to+\infty}(1-x)\ln x=-\infty.$$

Di conseguenza

$$\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}e^{(1-x)\ln x}=e^{-\infty}=0.$$

Poiché $f(x)>0$ su tutto il dominio, il limite vale $0^{+}$.

## c) $x\to 1$

La funzione è continua in $x=1$, quindi il limite coincide con il valore assunto:

$$\lim_{x\to 1}f(x)=1^{\,1-1}=1^{0}=1.$$

**Osservazione.** Anche il punto $x=1$ è notevole: derivando $\ln f(x)=(1-x)\ln x$ si ottiene

$$\frac{f'(x)}{f(x)}=-\ln x+\frac{1-x}{x},$$

che si annulla in $x=1$; poiché $f$ passa da crescente a decrescente, in $x=1$ la funzione ha un massimo con $f(1)=1$. La curva sale da $0^{+}$ (per $x\to 0^{+}$) fino al valore $1$, poi decresce tendendo a $0^{+}$ per $x\to+\infty$.

*Fonte:* [📄 PDF p.63](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
