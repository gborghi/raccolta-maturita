

**Quesito:** [[Quesiti/ques_2009_estero_australe_2009_sessione_ordinaria_questionario_34_6|2009 Estero Australe Ordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2009_estero_australe_2009_sessione_ordinaria_questionario_34|2009 Estero Australe Ordinaria — Questionario]]

Si disegni il grafico della funzione
$$y=|\ln(x-1)|,$$
dove con $\log$ si intende il logaritmo naturale $\ln$.

## Dominio e struttura della funzione

La funzione è definita dove l'argomento del logaritmo è positivo:
$$x-1>0 \Rightarrow x>1.$$
Il dominio è quindi $(1,+\infty)$.

Conviene ottenere il grafico per passi successivi:

- si parte dal grafico di $a(x)=\ln x$;
- si trasla di $1$ verso destra ottenendo $b(x)=\ln(x-1)$;
- si applica il valore assoluto: si conserva la parte in cui $b(x)\ge 0$ e si ribalta rispetto all'asse $x$ la parte in cui $b(x)<0$.

## Studio del segno di $\ln(x-1)$

L'argomento $x-1$ vale $1$ quando $x=2$, dunque
$$\ln(x-1)=0 \iff x=2.$$
Inoltre:
$$\ln(x-1)<0 \quad\text{per } 1<x<2, \qquad \ln(x-1)>0 \quad\text{per } x>2.$$

Applicando il valore assoluto si ottiene quindi
$$y=|\ln(x-1)|=\begin{cases} -\ln(x-1) & 1<x<2,\\[2pt] \ln(x-1) & x\ge 2. \end{cases}$$

## Asintoto e comportamento

Per $x\to 1^{+}$ si ha $x-1\to 0^{+}$, quindi $\ln(x-1)\to -\infty$ e di conseguenza
$$\lim_{x\to 1^{+}} |\ln(x-1)| = +\infty,$$
cioè la retta $x=1$ è asintoto verticale.

Nel tratto $1<x<2$ la funzione $y=-\ln(x-1)$ è decrescente e scende da $+\infty$ fino a $0$, raggiunto in $x=2$. Per $x\ge 2$ la funzione $y=\ln(x-1)$ è crescente e tende (lentamente) a $+\infty$ per $x\to +\infty$. Il punto $(2,0)$ è un minimo assoluto, in cui il grafico presenta un punto angoloso dovuto al valore assoluto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="279.947" height="177.12" viewBox="-72 -72 209.96 132.84"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 47.26h196.779"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M122.829 44.86c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-72.07" y="47.26" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(200.712 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-40.772 56.65V-58.755"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-43.172-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-72.07" y="47.26" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.667 -111.891)">y</text></g><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-40.772 56.65V-59.155"/><text x="-72.07" y="47.26" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 9.977)">2</text><text x="-72.07" y="47.26" stroke="none" font-family="cmr10" font-size="10" transform="translate(22.765 9.977)">1</text><path stroke="none" d="M-7.824 47.26a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-38.894-40.794 1.299 16.486 1.299 11.142 1.299 7.614 1.299 6.274 1.299 5.269 1.299 4.514 1.299 3.943 1.299 3.501 1.299 3.15 1.299 2.86 1.299 2.625 1.299 2.418 1.299 2.246 1.299 2.095 1.299 1.962 1.299 1.848 1.299 1.743 1.299 1.653 1.299 1.57 1.299 1.493 1.299 1.427 1.299 1.363 1.299.405 1.299-1.255 1.299-1.206 1.299-1.162 1.299-1.12 1.299-1.081 1.299-1.046 1.299-1.011 1.299-.98 1.299-.95 1.299-.921 1.299-.895 1.299-.872 1.299-.846 1.299-.825 1.299-.804 1.299-.783 1.299-.764 1.299-.748 1.299-.728 1.299-.713 1.299-.694 1.299-.683 1.299-.667 1.299-.654 1.299-.64 1.299-.626 1.299-.614 1.299-.603 1.299-.59 1.299-.58 1.299-.571 1.299-.559 1.299-.55 1.299-.54 1.299-.531 1.299-.523 1.299-.513 1.299-.505 1.299-.497 1.299-.489 1.299-.483 1.299-.473 1.299-.469 1.299-.46 1.299-.454 1.299-.447 1.299-.442 1.299-.434 1.299-.43 1.299-.422 1.299-.416 1.299-.413 1.299-.407 1.299-.402 1.299-.396 1.299-.392 1.299-.384 1.299-.385 1.299-.375 1.299-.374 1.299-.368 1.299-.365 1.299-.36 1.299-.356 1.299-.349 1.299-.35 1.299-.343 1.299-.34 1.299-.338 1.299-.333 1.299-.327 1.299-.332 1.299-.323 1.299-.32 1.299-.315 1.299-.314 1.299-.31 1.299-.307 1.299-.303 1.299-.302 1.299-.298L97.5.762 98.8.469l1.299-.29 1.299-.287 1.299-.285 1.299-.282 1.299-.28 1.299-.277 1.299-.275 1.299-.272 1.299-.27 1.299-.267 1.299-.266 1.299-.263 1.299-.26"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-72.07" y="47.26" font-family="cmmi10" transform="translate(130.318 -60.096)">y</text><text x="-64.031" y="47.26" font-family="cmr10" transform="translate(130.318 -60.096)">=</text><text x="-53.475" y="47.26" font-family="cmsy10" transform="translate(130.318 -60.096)">j</text><text x="-49.031" y="47.26" font-family="cmr10" transform="translate(130.318 -60.096)">ln</text><text x="-40.697" y="47.26" font-family="cmr10" transform="translate(130.318 -60.096)">(</text><text x="-36.809" y="47.26" font-family="cmmi10" transform="translate(130.318 -60.096)">x</text><text x="-28.871" y="47.26" font-family="cmsy10" transform="translate(130.318 -60.096)">¡</text><text x="-18.871" y="47.26" font-family="cmr10" transform="translate(130.318 -60.096)">1)</text><text x="-9.982" y="47.26" font-family="cmsy10" transform="translate(130.318 -60.096)">j</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
