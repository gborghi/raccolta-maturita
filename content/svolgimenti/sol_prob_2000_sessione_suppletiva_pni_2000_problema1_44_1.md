

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_pni_2000_problema1_44_1|2000 Suppletiva PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_pni_2000_problema1_44|2000 Suppletiva PNI — Problema 1]]

È assegnata la curva di equazione $y=e^{-\left(\frac{x}{a}\right)^2}$, con $a>0$ costante. Si chiede di: studiarne e disegnarne il grafico; verificare che ammette due flessi $F_1$ e $F_2$; stimare col metodo dei trapezi l'area della regione delimitata dal grafico sull'intervallo di estremi le ascisse dei flessi e dal segmento $F_1F_2$; stabilire se tale stima è per difetto o per eccesso; illustrare il legame con la curva normale di Gauss.

## a) Studio e grafico della funzione

Poniamo $f(x)=e^{-\frac{x^2}{a^2}}$.

- **Dominio:** tutto $\mathbb{R}$.
- **Simmetrie:** $f(-x)=f(x)$, la funzione è pari, quindi il grafico è simmetrico rispetto all'asse $y$.
- **Segno:** $f(x)>0$ per ogni $x$; non ci sono intersezioni con l'asse $x$. Per $x=0$ si ha $f(0)=1$, dunque il grafico passa per $(0,\,1)$.
- **Limiti:** $\lim_{x\to\pm\infty} e^{-\frac{x^2}{a^2}}=0^+$, perciò l'asse $x$ è asintoto orizzontale. Non ci sono asintoti obliqui.

**Derivata prima:**
$$f'(x)=-\frac{2x}{a^2}\,e^{-\frac{x^2}{a^2}}.$$
Poiché l'esponenziale è sempre positivo, si ha $f'(x)>0$ per $x<0$, $f'(x)=0$ per $x=0$ e $f'(x)<0$ per $x>0$: la funzione cresce per $x<0$, decresce per $x>0$ e presenta un massimo assoluto in $M=(0,\,1)$.

**Derivata seconda:**
$$f''(x)=-\frac{2}{a^2}\,e^{-\frac{x^2}{a^2}}\left(1-\frac{2x^2}{a^2}\right)=-\frac{2}{a^4}\,e^{-\frac{x^2}{a^2}}\left(a^2-2x^2\right).$$
Si ha $f''(x)>0$ quando $a^2-2x^2<0$, cioè per $x<-\frac{a\sqrt2}{2}$ oppure $x>\frac{a\sqrt2}{2}$ (concavità verso l'alto), mentre $f''(x)<0$ per $-\frac{a\sqrt2}{2}<x<\frac{a\sqrt2}{2}$ (concavità verso il basso).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="331.158" height="200.567" viewBox="-72 -72 248.369 150.425"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 57.388h235.187"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M161.237 54.988c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="45.724" y="57.388" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.327 2.153)">x</text><path fill="none" d="M45.724 71.045v-129.8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M43.324-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="45.724" y="57.388" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -122.02)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-69.51 56.813 2.59-.146 2.59-.178 2.59-.21 2.589-.257 2.589-.318 2.59-.373 2.589-.438 2.59-.518 2.589-.61 2.589-.711 2.59-.829 2.589-.947 2.59-1.093 2.589-1.238 2.589-1.394 2.59-1.575 2.589-1.758 2.59-1.949 2.589-2.149 2.59-2.359 2.588-2.56 2.59-2.768 2.59-2.977 2.589-3.17 2.59-3.342 2.589-3.515L.405 15.77l2.59-3.779 2.589-3.87 2.59-3.925L10.762.242l2.589-3.926 2.59-3.86 2.589-3.761 2.59-3.607 2.589-3.407 2.589-3.159 2.59-2.878 2.589-2.542 2.59-2.185 2.589-1.785 2.59-1.366 2.588-.92 2.59-.465h2.59l2.589.466 2.59.92 2.589 1.357 2.589 1.783 2.59 2.187 2.589 2.541 2.59 2.877 2.589 3.161 2.589 3.405 2.59 3.607 2.589 3.752 2.59 3.87L80.676.234l2.589 3.944 2.59 3.933 2.589 3.87 2.59 3.78 2.589 3.662 2.59 3.514 2.588 3.343 2.59 3.169 2.59 2.969 2.589 2.779 2.59 2.559 2.589 2.357 2.589 2.15 2.59 1.949 2.589 1.757 2.59 1.576 2.589 1.403 2.589 1.238 2.59 1.083 2.589.957 2.59.82 2.589.71 2.589.62 2.59.518 2.589.438 2.59.373 2.589.31 2.59.264 2.588.211 2.59.178 2.59.145"/><path fill="none" stroke="red" stroke-width=".8" d="M9.515 2.167h72.417"/><path stroke="none" d="M46.354-33.66c0-1.238-.282-2.24-.63-2.24s-.63 1.002-.63 2.24c0 1.236.282 2.24.63 2.24s.63-1.004.63-2.24m-.63 0"/><text x="45.724" y="57.388" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-5.396 -95.582)">M</text><path stroke="none" d="M82.562 2.167c0-1.238-.282-2.24-.63-2.24-.347 0-.63 1.002-.63 2.24 0 1.237.283 2.24.63 2.24s.63-1.003.63-2.24m-.63 0"/><g stroke="none"><text x="45.724" y="57.388" font-family="cmmi10" font-size="10" transform="translate(39.742 -60.255)">F</text><text x="52.154" y="58.888" font-family="cmr7" font-size="7" transform="translate(39.742 -60.255)">2</text></g><path stroke="none" d="M10.145 2.167c0-1.238-.282-2.24-.63-2.24s-.63 1.002-.63 2.24c0 1.237.282 2.24.63 2.24s.63-1.003.63-2.24m-.63 0"/><g stroke="none"><text x="45.724" y="57.388" font-family="cmmi10" font-size="10" transform="translate(-50.658 -60.255)">F</text><text x="52.154" y="58.888" font-family="cmr7" font-size="7" transform="translate(-50.658 -60.255)">1</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M9.515 57.388V2.167M81.932 57.388V2.167"/><g stroke="none"><text x="46.924" y="53.451" font-family="cmmi7" font-size="7" transform="translate(27.562 13.986)">a</text><text x="51.261" y="47.615" font-family="cmsy7" font-size="7" transform="translate(27.562 13.986)">p</text><path d="M85.393 61.26h3.986v.34h-3.986z"/><text x="57.831" y="53.451" font-family="cmr7" font-size="7" transform="translate(27.562 13.986)">2</text><path d="M74.486 68.674H89.38v.4H74.486z"/><text x="52.377" y="60.836" font-family="cmr7" font-size="7" transform="translate(27.562 13.986)">2</text></g><g stroke="none"><text x="45.724" y="57.388" font-family="cmsy10" font-size="10" transform="translate(-56.068 13.986)">¡</text><text x="54.701" y="53.451" font-family="cmmi7" font-size="7" transform="translate(-56.068 13.986)">a</text><text x="59.039" y="47.615" font-family="cmsy7" font-size="7" transform="translate(-56.068 13.986)">p</text><path d="M9.541 61.26h3.986v.34H9.541z"/><text x="65.609" y="53.451" font-family="cmr7" font-size="7" transform="translate(-56.068 13.986)">2</text><path d="M-1.367 68.674h14.893v.4H-1.367z"/><text x="60.155" y="60.836" font-family="cmr7" font-size="7" transform="translate(-56.068 13.986)">2</text></g></g></svg>
</figure>

## b) I due punti di flesso

Dallo studio del segno di $f''$ i flessi hanno ascisse
$$x_1=-\frac{a\sqrt2}{2},\qquad x_2=\frac{a\sqrt2}{2}.$$
L'ordinata comune è
$$f\!\left(\pm\frac{a\sqrt2}{2}\right)=e^{-\frac{1}{a^2}\cdot\frac{a^2}{2}}=e^{-\frac12}=\frac{1}{\sqrt e}.$$
Pertanto
$$F_1=\left(-\frac{a\sqrt2}{2},\;\frac{1}{\sqrt e}\right),\qquad F_2=\left(\frac{a\sqrt2}{2},\;\frac{1}{\sqrt e}\right).$$

## c) Stima dell'area col metodo dei trapezi

L'area richiesta è la differenza fra l'area del trapezoide sotteso dal grafico sull'intervallo $\left[-\frac{a\sqrt2}{2},\,\frac{a\sqrt2}{2}\right]$ e l'area del rettangolo di base $F_1F_2$ e altezza $\frac{1}{\sqrt e}$.

Dividiamo l'intervallo in $n=10$ parti uguali di ampiezza
$$h=\frac{a\sqrt2}{10}.$$
Nei nodi $x_k=k\,h$ si ha $\frac{x_k^2}{a^2}=\frac{k^2}{50}$, quindi $f(x_k)=e^{-\frac{k^2}{50}}$. La formula dei trapezi fornisce
$$\text{Area}(\text{trapezoide})\cong h\left[\frac{f(x_0)+f(x_{10})}{2}+\sum_{k=1}^{9} f(x_k)\right]\cong \int_{x_1}^{x_2} f(x)\,dx.$$
Sfruttando la simmetria della figura calcoliamo la somma da $0$ a $\frac{a\sqrt2}{2}$ (cioè per $k=0,1,\dots,5$) e raddoppiamo il risultato:
$$\frac{a\sqrt2}{10}\left[\frac{1+e^{-1/2}}{2}+e^{-1/50}+e^{-2/25}+e^{-9/50}+e^{-8/25}\right]\cong 0{,}6036\,a.$$
Perciò
$$\text{Area}(\text{trapezoide})\cong 2\cdot 0{,}6036\,a=1{,}2072\,a.$$
Il rettangolo ha area
$$\overline{F_1F_2}\cdot\frac{1}{\sqrt e}=a\sqrt2\cdot\frac{1}{\sqrt e}=a\sqrt{\frac{2}{e}}\cong 0{,}8578\,a.$$
L'area richiesta è quindi
$$\text{Area}\cong(1{,}2072-0{,}8578)\,a\cong 0{,}35\,a.$$

## d) Stima per difetto o per eccesso

Nell'intervallo considerato il grafico volge la concavità verso il basso, quindi i lati obliqui dei trapezi (le corde) stanno sempre al di sotto dell'arco di curva corrispondente: ogni trapezio ha area minore di quella del corrispondente trapezoide. La stima dell'area del trapezoide è dunque **per difetto** e, poiché il rettangolo sottratto ha area esatta, anche la stima dell'area richiesta risulta per difetto.

## e) Legame con la curva normale di Gauss

La densità di probabilità della distribuzione normale (di Gauss) è
$$f(x)=\frac{1}{\sqrt{2\pi}\,\sigma}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},\qquad \sigma>0.$$
Ponendo $\mu=0$ si ottiene
$$f(x)=\frac{1}{\sqrt{2\pi}\,\sigma}\,e^{-\left(\frac{x}{\sqrt2\,\sigma}\right)^2}.$$
Con la sostituzione $a=\sqrt2\,\sigma$ essa diventa
$$f(x)=\frac{1}{a\sqrt\pi}\,e^{-\left(\frac{x}{a}\right)^2}.$$
Pertanto la curva $y=e^{-(x/a)^2}$, a meno della costante moltiplicativa $\frac{1}{a\sqrt\pi}$, può essere vista come la funzione densità di probabilità di una distribuzione di Gauss con media nulla.

*Fonte:* [📄 PDF p.44](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
