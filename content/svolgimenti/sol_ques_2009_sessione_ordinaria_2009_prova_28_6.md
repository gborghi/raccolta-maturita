

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_28_6|2009 Sessione Ordinaria Estero Americhe — Prova — Quesito 6]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_28|2009 Sessione Ordinaria Estero Americhe — Prova]]

Si disegni il grafico della funzione
$$y=|\log(x-1)|,$$
dove $\log$ indica il logaritmo naturale $\ln$.

## Dominio

L'argomento del logaritmo deve essere positivo:
$$x-1>0 \Rightarrow x>1.$$
Il dominio è quindi l'intervallo $(1,+\infty)$.

## Costruzione del grafico

Conviene procedere per trasformazioni successive a partire dal grafico noto di $a(x)=\ln x$.

**1. Traslazione.** Il grafico di
$$b(x)=\ln(x-1)$$
si ottiene da quello di $\ln x$ traslandolo di $1$ verso destra. In particolare la retta $x=1$ diventa asintoto verticale e il grafico interseca l'asse $x$ dove $x-1=1$, cioè in $x=2$.

**2. Valore assoluto.** Il grafico di
$$y=|\ln(x-1)|$$
si ottiene lasciando invariata la parte di $b(x)$ che sta sopra l'asse $x$ e ribaltando verso l'alto (per simmetria rispetto all'asse $x$) la parte che sta sotto. Poiché
$$\ln(x-1)<0 \quad\text{per } 1<x<2,\qquad \ln(x-1)\ge 0 \quad\text{per } x\ge 2,$$
si ha
$$y=\begin{cases} -\ln(x-1) & 1<x<2,\\[2pt] \ln(x-1) & x\ge 2.\end{cases}$$

## Comportamento e grafico

- Per $x\to 1^{+}$ si ha $\ln(x-1)\to -\infty$, quindi $y\to +\infty$: la retta $x=1$ è asintoto verticale.
- Nell'intervallo $1<x<2$ la funzione $y=-\ln(x-1)$ è decrescente e scende da $+\infty$ fino a $0$.
- In $x=2$ la funzione vale $0$ (punto angoloso, dove il grafico tocca l'asse $x$).
- Per $x>2$ la funzione $y=\ln(x-1)$ è crescente e tende a $+\infty$ per $x\to +\infty$.

La funzione è quindi sempre non negativa, con un unico zero in $x=2$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="295.978" height="172.947" viewBox="-72 -72 221.983 129.71"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.306 31.61h203.038"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M134.852 29.21c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-66.306" y="31.61" stroke="none" font-family="cmmi10" font-size="10" transform="translate(206.971 2.153)">x</text><path fill="none" d="M-66.306 44.13V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="31.61" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -96.242)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-35.008 44.13V-59.154"/><text x="-66.306" y="31.61" stroke="none" font-family="cmr10" font-size="10" transform="translate(28.798 22.496)">1</text><text x="-66.306" y="31.61" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 11.542)">2</text><path stroke="none" d="M-2.06 31.61a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-31.252-34.749 1.283 9.424 1.283 6.909 1.283 5.75 1.284 4.879 1.283 4.22 1.283 3.718 1.283 3.322 1.283 3.002 1.284 2.74 1.283 2.525 1.283 2.332 1.283 2.17 1.284 2.03 1.283 1.905 1.283 1.796 1.283 1.699 1.284 1.61 1.283 1.533 1.283 1.46 1.283 1.394 1.284 1.336 1.283-.075 1.283-1.23 1.283-1.186 1.284-1.14 1.283-1.102 1.283-1.064 1.283-1.029 1.283-.996 1.284-.965 1.283-.935 1.283-.91 1.283-.882 1.284-.86 1.283-.838 1.283-.813 1.283-.794 1.284-.773 1.283-.758 1.283-.735 1.283-.722 1.284-.701 1.283-.691 1.283-.671 1.283-.663 1.283-.65 1.284-.632 1.283-.621 1.283-.608 1.283-.597 1.284-.586 1.283-.575 1.283-.565 1.283-.555 1.284-.545 1.283-.536 1.283-.527 1.283-.518 1.284-.509 1.283-.502 1.283-.492 1.283-.486L49.592.49l1.283-.47 1.283-.465 1.283-.457 1.283-.45 1.284-.445 1.283-.439 1.283-.431 1.283-.426 1.284-.421 1.283-.415 1.283-.41 1.283-.403 1.284-.4 1.283-.394 1.283-.388 1.283-.383 1.284-.38 1.283-.377 1.283-.372 1.283-.363 1.284-.362 1.283-.358 1.283-.356 1.283-.348 1.283-.344 1.284-.345 1.283-.339 1.283-.335 1.283-.329 1.284-.327 1.283-.326 1.283-.326 1.283-.318 1.284-.314 1.283-.312 1.283-.309 1.283-.305 1.284-.302 1.283-.3 1.283-.298 1.283-.293 1.284-.292 1.283-.288 1.283-.287 1.283-.283 1.283-.28 1.284-.279 1.283-.276 1.283-.274 1.283-.27 1.284-.27 1.283-.267 1.283-.264 1.283-.262 1.284-.26 1.283-.258"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-66.306" y="31.61" font-family="cmmi10" transform="translate(114.669 -72.615)">y</text><text x="-58.267" y="31.61" font-family="cmr10" transform="translate(114.669 -72.615)">=</text><text x="-47.711" y="31.61" font-family="cmsy10" transform="translate(114.669 -72.615)">j</text><text x="-43.267" y="31.61" font-family="cmr10" transform="translate(114.669 -72.615)">ln</text><text x="-34.934" y="31.61" font-family="cmr10" transform="translate(114.669 -72.615)">(</text><text x="-31.045" y="31.61" font-family="cmmi10" transform="translate(114.669 -72.615)">x</text><text x="-23.107" y="31.61" font-family="cmsy10" transform="translate(114.669 -72.615)">¡</text><text x="-13.107" y="31.61" font-family="cmr10" transform="translate(114.669 -72.615)">1)</text><text x="-4.218" y="31.61" font-family="cmsy10" transform="translate(114.669 -72.615)">j</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
