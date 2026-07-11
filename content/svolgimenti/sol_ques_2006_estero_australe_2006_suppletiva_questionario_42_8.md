

**Quesito:** [[Quesiti/ques_2006_estero_australe_2006_suppletiva_questionario_42_8|2006 Australe Suppletiva — Questionario — Quesito 8]] · **Prova:** [[Prove/2006_estero_australe_2006_suppletiva_questionario_42|2006 Australe Suppletiva — Questionario]]

La funzione $f(x)=a\sin x+bx$ è tale che $f\left(\dfrac{\pi}{6}\right)=1-\dfrac{\sqrt{3}}{6}\pi$ e presenta un massimo relativo nello stesso punto. Si trovino $a$ e $b$ e si dica se $f(x)$ è periodica.

## Impostazione delle condizioni

Dalla condizione sul valore assunto in $x=\dfrac{\pi}{6}$:

$$f\left(\frac{\pi}{6}\right)=a\sin\frac{\pi}{6}+b\cdot\frac{\pi}{6}=\frac{a}{2}+\frac{b\pi}{6}=1-\frac{\sqrt{3}}{6}\pi.$$

Moltiplicando per $6$ si ottiene la prima equazione:

$$3a+b\pi=6-\sqrt{3}\,\pi.$$

La funzione è continua e derivabile su tutto $\mathbb{R}$; le sue derivate sono

$$f'(x)=a\cos x+b,\qquad f''(x)=-a\sin x.$$

Affinché $x=\dfrac{\pi}{6}$ sia punto di massimo relativo devono valere

$$f'\left(\frac{\pi}{6}\right)=0\quad\text{e}\quad f''\left(\frac{\pi}{6}\right)<0.$$

La prima dà

$$a\cos\frac{\pi}{6}+b=\frac{\sqrt{3}}{2}\,a+b=0\ \Rightarrow\ b=-\frac{\sqrt{3}}{2}\,a,$$

mentre la seconda impone

$$f''\left(\frac{\pi}{6}\right)=-a\sin\frac{\pi}{6}=-\frac{a}{2}<0\ \Rightarrow\ a>0.$$

## Determinazione di $a$ e $b$

Sostituendo $b=-\dfrac{\sqrt{3}}{2}\,a$ nella prima equazione:

$$3a-\frac{\sqrt{3}}{2}\,a\,\pi=6-\sqrt{3}\,\pi.$$

Moltiplicando per $2$:

$$6a-\sqrt{3}\,a\,\pi=12-2\sqrt{3}\,\pi\ \Rightarrow\ a\left(6-\sqrt{3}\,\pi\right)=2\left(6-\sqrt{3}\,\pi\right).$$

Poiché $6-\sqrt{3}\,\pi\neq 0$, si ricava

$$a=2,\qquad b=-\frac{\sqrt{3}}{2}\cdot 2=-\sqrt{3},$$

valori compatibili con la condizione $a>0$. La funzione cercata è dunque

$$f(x)=2\sin x-\sqrt{3}\,x.$$

Una verifica diretta conferma il valore imposto: $f\left(\dfrac{\pi}{6}\right)=2\cdot\dfrac{1}{2}-\sqrt{3}\cdot\dfrac{\pi}{6}=1-\dfrac{\sqrt{3}}{6}\pi$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="221.523" height="318.217" viewBox="-72 -72 166.142 238.663"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 3.442H80.89"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M79.01 1.042c.381 1.44 1.228 2.12 2.08 2.4-.852.28-1.699.96-2.08 2.4"/><text x="-18.863" y="3.442" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(103.687 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-18.863 166.193V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-21.263-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-18.863" y="3.442" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -68.074)">y</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-65.81-15.435 1.782 2.733 1.783 2.533 1.783 2.336 1.783 2.136 1.782 1.94 1.783 1.753 1.783 1.567 1.783 1.384 1.783 1.209 1.782 1.04 1.783.879 1.783.72 1.783.573 1.782.435 1.783.304 1.783.18 1.783.067 1.783-.036 1.782-.128 1.783-.21 1.783-.282 1.783-.344 1.782-.392 1.783-.43 1.783-.457 1.783-.474 1.783-.475 1.782-.47 1.783-.45 1.783-.42 1.783-.377 1.782-.324 1.783-.259 1.783-.185 1.783-.097L-1.63.542.152.645l1.783.22 1.783.346 1.783.48 1.782.621 1.783.773 1.783.93 1.783 1.096 1.783 1.267 1.782 1.445L17.98 9.45l1.783 1.815 1.783 2.006 1.782 2.202 1.783 2.4 1.783 2.599 1.783 2.801 1.783 3.005 1.782 3.209 1.783 3.408 1.783 3.612 1.783 3.813 1.782 4.011 1.783 4.201 1.783 4.395 1.783 4.584 1.783 4.762 1.782 4.939 1.783 5.11 1.783 5.276 1.783 5.43 1.782 5.578 1.783 5.722 1.783 5.855 1.783 5.976 1.783 6.09 1.782 6.198 1.783 6.29 1.783 6.374 1.783 6.447 1.782 6.51 1.783 6.562 1.783 6.602"/><path fill="red" stroke="none" d="M-.275.529a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-18.863" y="3.442" stroke="none" font-family="cmmi10" font-size="10" transform="translate(19.92 -6.447)">M</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-2.475 3.442V.53"/><g stroke="none"><text x="-17.663" y="-.495" font-family="cmmi7" font-size="7" transform="translate(12.724 10.484)">¼</text><path d="M-4.939 11.226h4.927v.4h-4.927z"/><text x="-17.193" y="6.891" font-family="cmr7" font-size="7" transform="translate(12.724 10.484)">6</text></g></g></svg>
</figure>

## Periodicità

La funzione $f(x)=a\sin x+bx$ non è periodica quando $b\neq 0$. Infatti, se esistesse un periodo $T>0$ tale che $f(x)=f(x+T)$ per ogni $x$, si avrebbe

$$a\sin x+bx=a\sin(x+T)+b(x+T).$$

Poiché $\sin$ è periodico di periodo $2\pi$, scegliendo $T$ multiplo di $2\pi$ il termine $a\sin x$ resterebbe invariato, ma resterebbe il termine aggiuntivo $bT\neq 0$: l'uguaglianza non può valere per ogni $x$. In generale, il termine lineare $-\sqrt{3}\,x$ è illimitato e strettamente monotòno a meno delle oscillazioni sinusoidali, quindi impedisce ogni ripetizione periodica dei valori.

Nel nostro caso $b=-\sqrt{3}\neq 0$, perciò **$f(x)=2\sin x-\sqrt{3}\,x$ non è periodica**.

*Fonte:* [📄 PDF p.45](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
