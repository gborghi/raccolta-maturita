

**Problema:** [[Problemi/prob_2008_ordinamento_2008_sessione_suppletiva_problema1_64_1|2008 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2008_ordinamento_2008_sessione_suppletiva_problema1_64|2008 Ordinamento Suppletiva — Problema 1]]

Dato un quadrante $AOB$ di cerchio di centro $O$ e raggio $2$, si consideri sull'arco $\overline{AB}$ un punto $P$. Detti $M$ ed $N$ i punti medi dei raggi $OA$ e $OB$, si esprime l'area del quadrilatero $OMPN$ in funzione di $t=\tan\frac{x}{2}$ con $x=\widehat{BOP}$; si studia la funzione ottenuta, se ne traccia il grafico $\gamma$, si determina il valore di $x$ che rende massima l'area e si calcola l'area della regione compresa tra $\gamma$ e l'asse $x$.

## a) Area del quadrilatero in funzione di $t$

Fissiamo un sistema di riferimento con $O$ nell'origine, $B=(2,0)$ e $A=(0,2)$. I punti medi dei raggi sono allora
$$N=(1,0)\quad\text{(medio di } OB\text{)},\qquad M=(0,1)\quad\text{(medio di } OA\text{)}.$$
Un punto $P$ sull'arco $\overline{AB}$ si scrive $P=(2\cos x,\ 2\sin x)$ con $x=\widehat{BOP}\in\left(0,\frac{\pi}{2}\right)$.

Calcoliamo l'area del quadrilatero $OMPN$ (vertici nell'ordine $O$, $M$, $P$, $N$) con la formula di Gauss:
$$
\begin{aligned}
S &= \frac{1}{2}\bigl|\,x_O(y_M-y_N)+x_M(y_P-y_O)+x_P(y_N-y_M)+x_N(y_O-y_P)\,\bigr| \\
  &= \frac{1}{2}\bigl|\,0\cdot(1-0)+0\cdot(2\sin x-0)+2\cos x\cdot(0-1)+1\cdot(0-2\sin x)\,\bigr| \\
  &= \frac{1}{2}\,|-2\cos x-2\sin x| = \cos x+\sin x,\qquad x\in\left(0,\tfrac{\pi}{2}\right).
\end{aligned}
$$

Introduciamo ora la variabile $t=\tan\dfrac{x}{2}$ e le formule parametriche razionali
$$\cos x=\frac{1-t^2}{1+t^2},\qquad \sin x=\frac{2t}{1+t^2},$$
valide con $t\in(0,1)$ poiché $x\in\left(0,\frac{\pi}{2}\right)$. Otteniamo
$$
f(t)=\cos x+\sin x=\frac{1-t^2}{1+t^2}+\frac{2t}{1+t^2}=\frac{1-t^2+2t}{1+t^2}.
$$

## b) Studio della funzione e grafico

Studiamo $f(t)=\dfrac{1-t^2+2t}{1+t^2}$ per $t\in(0,1)$. Derivando e imponendo $f'(t)=0$ si trova che il massimo si raggiunge per $x=\dfrac{\pi}{4}$, cioè per
$$t_0=\tan\frac{\pi}{8}=\sqrt{2}-1.$$
Il valore massimo dell'area è
$$
f(t_0)=\cos\frac{\pi}{4}+\sin\frac{\pi}{4}=\frac{\sqrt{2}}{2}+\frac{\sqrt{2}}{2}=\sqrt{2}.
$$
Come verifica diretta, con $t_0=\sqrt{2}-1$ si ha $1+t_0^2=4-2\sqrt{2}$ e $1-t_0^2+2t_0=4\sqrt{2}-4$, quindi
$$
f(t_0)=\frac{4\sqrt{2}-4}{4-2\sqrt{2}}=\frac{4(\sqrt{2}-1)}{2(2-\sqrt{2})}=\frac{2}{\sqrt{2}}=\sqrt{2}.
$$
Agli estremi dell'intervallo si ha inoltre $f(0)=1$ e $f(1)=1$. Il grafico $\gamma$ di $f$ su $[0,1]$ è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="240.216" height="187.71" viewBox="-72 -72 180.162 140.783"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-58.505 50.389h155.52"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M95.135 47.989c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-44.849" y="50.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(145.797 3.075)">t</text><path fill="none" d="M-44.849 59.778V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-47.249-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-44.849" y="50.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -115.02)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-44.849-12.207 1.928-2.084 1.928-2.004 1.927-1.928 1.928-1.853 1.928-1.758 1.927-1.684 1.928-1.584 1.928-1.502 1.927-1.409 1.928-1.314 1.927-1.22 1.928-1.128 1.928-1.032 1.927-.94 1.928-.838 1.928-.764 1.927-.657 1.928-.576 1.928-.488 1.927-.395 1.928-.313 1.928-.225 1.927-.157 1.928-.062h1.927l1.928.076 1.928.143 1.927.213 1.928.276 1.928.344 1.927.387 1.928.464 1.928.501 1.927.55 1.928.608 1.928.639 1.927.682 1.928.726 1.928.764 1.927.801 1.928.82 1.927.857 1.928.876 1.928.909 1.927.926 1.928.945 1.928.97 1.927.976 1.928 1.002 1.928 1.008 1.927 1.014 1.928 1.033 1.928 1.039 1.927 1.045 1.928 1.046 1.927 1.057 1.928 1.058 1.928 1.059 1.927 1.057"/><g fill="#00f" stroke="#00f"><text x="-44.849" y="50.389" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.962 -95.843)">°</text></g><path stroke="none" d="M3.892-38.134c0-.486-.717-.88-1.6-.88s-1.6.394-1.6.88.716.88 1.6.88c.883 0 1.6-.394 1.6-.88m-1.6 0"/><g stroke="none"><text x="-44.849" y="50.389" font-family="cmr9" font-size="9" transform="translate(50.673 -94.306)">(</text><text x="-41.251" y="42.929" font-family="cmsy9" font-size="9" transform="translate(50.673 -94.306)">p</text><path d="M17.13-51.757h4.625v.38H17.13z"/><text x="-33.543" y="50.389" font-family="cmr9" font-size="9" transform="translate(50.673 -94.306)">2</text><text x="-26.863" y="50.389" font-family="cmsy9" font-size="9" transform="translate(50.673 -94.306)">¡</text><text x="-17.613" y="50.389" font-family="cmr9" font-size="9" transform="translate(50.673 -94.306)">1</text><text x="-12.988" y="50.389" font-family="cmmi9" font-size="9" transform="translate(50.673 -94.306)">;</text><text x="-5.793" y="42.929" font-family="cmsy9" font-size="9" transform="translate(50.673 -94.306)">p</text><path d="M52.588-51.757h4.625v.38h-4.625z"/><text x="1.915" y="50.389" font-family="cmr9" font-size="9" transform="translate(50.673 -94.306)">2</text><text x="6.54" y="50.389" font-family="cmr9" font-size="9" transform="translate(50.673 -94.306)">)</text></g><path stroke="none" d="M-43.249-12.207c0-.486-.716-.88-1.6-.88-.883 0-1.6.394-1.6.88s.717.88 1.6.88 1.6-.394 1.6-.88m-1.6 0"/><g stroke="none" font-size="9"><text x="-44.849" y="50.389" font-family="cmr9" transform="translate(-24.088 -68.379)">(0</text><text x="-36.626" y="50.389" font-family="cmmi9" transform="translate(-24.088 -68.379)">;</text><text x="-32.515" y="50.389" font-family="cmr9" transform="translate(-24.088 -68.379)">1)</text></g><path stroke="none" d="M70.562-12.207c0-.486-.716-.88-1.6-.88-.883 0-1.6.394-1.6.88s.717.88 1.6.88 1.6-.394 1.6-.88m-1.6 0"/><g stroke="none" font-size="9"><text x="-44.849" y="50.389" font-family="cmr9" transform="translate(117.344 -52.313)">(1</text><text x="-36.626" y="50.389" font-family="cmmi9" transform="translate(117.344 -52.313)">;</text><text x="-32.515" y="50.389" font-family="cmr9" transform="translate(117.344 -52.313)">1)</text></g><path fill="none" d="M2.292 52.267V48.51"/><g stroke="none"><text x="-44.849" y="42.929" font-family="cmsy9" font-size="9" transform="translate(33.009 13.63)">p</text><path d="M-4.131 56.18H.494v.38h-4.625z"/><text x="-37.14" y="50.389" font-family="cmr9" font-size="9" transform="translate(33.009 13.63)">2</text><text x="-30.46" y="50.389" font-family="cmsy9" font-size="9" transform="translate(33.009 13.63)">¡</text><text x="-21.21" y="50.389" font-family="cmr9" font-size="9" transform="translate(33.009 13.63)">1</text></g><path fill="none" d="M68.962 52.267V48.51"/><text x="-44.849" y="50.389" stroke="none" font-family="cmr9" font-size="9" transform="translate(111.498 11.21)">1</text></g></svg>
</figure>

## c) Valore di $x$ per l'area massima

Dallo studio precedente l'area del quadrilatero $OMPN$ è massima quando $t=t_0=\sqrt{2}-1$, cioè quando
$$
\tan\frac{x}{2}=\sqrt{2}-1 \;\Rightarrow\; \frac{x}{2}=\frac{\pi}{8} \;\Rightarrow\; x=\frac{\pi}{4}.
$$
Il valore massimo dell'area è pari a $\sqrt{2}$.

## d) Area tra la curva e l'asse $x$

Per calcolare l'area della regione compresa tra il grafico $\gamma$ e l'asse $t$ per $t\in[0,1]$, scomponiamo il numeratore:
$$
\int_0^1 f(t)\,dt=\int_0^1\frac{1-t^2+2t}{1+t^2}\,dt
=\int_0^1\left(-1+\frac{2}{1+t^2}+\frac{2t}{1+t^2}\right)dt.
$$
Integrando termine a termine:
$$
\int_0^1 f(t)\,dt=\Bigl[\,-t+2\arctan t+\ln(1+t^2)\,\Bigr]_0^1=-1+\frac{\pi}{2}+\ln 2\cong 1.26\ \text{u}^2.
$$

*Fonte:* [📄 PDF p.64](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
