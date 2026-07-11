

**Problema:** [[Problemi/prob_2004_liceo_scientifico_ordinamento_2004_sessione_straor_problema2_116_1|2004 Ordinamento Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_problema2_116|2004 Ordinamento Straordinaria — Problema 2]]

In un piano riferito a un sistema monometrico di assi cartesiani ortogonali $(Oxy)$ sono assegnate le curve di equazione
$$ y = \frac{1 + a\sin x}{\cos x}, \qquad a\in\mathbb{R}. $$

## a) Periodicità e punti comuni

Le funzioni $\sin x$ e $\cos x$ hanno periodo $2\pi$; poiché la funzione assegnata è il quoziente di due funzioni di periodo $2\pi$, essa ha anch'essa periodo $2\pi$.

Per determinare i punti comuni a tutte le curve al variare di $a$, scriviamo l'equazione nella forma
$$ y\cos x - 1 - a\sin x = 0, $$
che si può interpretare come un fascio di curve nel parametro $a$, di generatrici
$$ y\cos x - 1 = 0 \qquad\text{e}\qquad \sin x = 0. $$
I punti comuni alle due generatrici appartengono a tutte le curve del fascio. Da $\sin x = 0$ si ha $x = k\pi$ (con $k$ intero), da cui $\cos x = (-1)^k$; sostituendo in $y\cos x - 1 = 0$ si ottiene
$$ y = \frac{1}{\cos x} = (-1)^k = \pm 1. $$
Le curve hanno dunque in comune gli infiniti punti
$$ \bigl(k\pi,\ (-1)^k\bigr), \qquad k\in\mathbb{Z}, $$
indipendentemente da $a$; infatti $\displaystyle f(k\pi)=\frac{1+a\cdot 0}{(-1)^k}=(-1)^k$.

## b) Curve con tangente orizzontale $y=\frac{\sqrt{3}}{2}$

La funzione è derivabile per ogni $x$ reale tranne dove $\cos x = 0$, cioè per $x\neq \frac{\pi}{2}+k\pi$. La derivata prima è
$$ y' = \frac{a\cos x\cdot\cos x-(1+a\sin x)(-\sin x)}{\cos^2 x}=\frac{a\cos^2 x+\sin x+a\sin^2 x}{\cos^2 x}=\frac{a+\sin x}{\cos^2 x}. $$
La tangente è orizzontale dove $y'=0$, cioè per $\sin x = -a$. In tali punti l'ordinata vale
$$ y=\frac{1+a\sin x}{\cos x}=\frac{1-a^2}{\cos x}. $$
Imponendo che questa ordinata sia $\frac{\sqrt{3}}{2}$ si ottiene $\displaystyle \cos x = \frac{2(1-a^2)}{\sqrt{3}}$. Dalla relazione fondamentale $\sin^2 x+\cos^2 x=1$, con $\sin x=-a$, segue
$$ a^2+\frac{4(1-a^2)^2}{3}=1 \;\Longrightarrow\; 3a^2+4\bigl(1-2a^2+a^4\bigr)-3=0 \;\Longrightarrow\; 4a^4-5a^2+1=0. $$
Risolvendo come equazione biquadratica:
$$ a^2=\frac{5\pm\sqrt{25-16}}{8}=\frac{5\pm 3}{8}\;\Longrightarrow\; a^2=1 \ \text{ oppure }\ a^2=\frac{1}{4}. $$
Se $a=\pm 1$, da $\sin x=-a=\mp 1$ si ottiene $x=\frac{\pi}{2}+k\pi$, valori esclusi dal dominio: soluzioni non accettabili. Restano $a=\pm\frac{1}{2}$, cui corrispondono le due curve
$$ a=\tfrac{1}{2}:\ \ y=\frac{2+\sin x}{2\cos x}, \qquad\qquad a=-\tfrac{1}{2}:\ \ y=\frac{2-\sin x}{2\cos x}. $$

## c) Simmetria, studio e grafico

**Simmetria.** Poste
$$ f(x)=\frac{2+\sin x}{2\cos x}, \qquad g(x)=\frac{2-\sin x}{2\cos x}, $$
si ha
$$ f(-x)=\frac{2+\sin(-x)}{2\cos(-x)}=\frac{2-\sin x}{2\cos x}=g(x): $$
le due curve sono quindi simmetriche rispetto all'asse $y$. È perciò sufficiente studiare $f(x)$ nell'intervallo $-\pi\le x\le\pi$; il grafico di $g$ si ottiene per riflessione.

**Dominio.** $\cos x\neq 0$, cioè $x\neq\pm\frac{\pi}{2}$.

**Intersezioni con gli assi.** Per $x=0$ si ha $y=1$, quindi il punto $(0,1)$. L'equazione $2+\sin x=0$ non ha soluzioni (il numeratore $2+\sin x\ge 1>0$), dunque non vi sono intersezioni con l'asse $x$.

**Segno.** Essendo il numeratore sempre positivo, $f(x)$ ha il segno di $\cos x$: $f(x)>0$ per $-\frac{\pi}{2}<x<\frac{\pi}{2}$, negativa altrove. Agli estremi $f(\pm\pi)=\dfrac{2}{-2}=-1$.

**Limiti e asintoti.**
$$ \lim_{x\to (-\pi/2)^-} f(x)=-\infty, \quad \lim_{x\to (-\pi/2)^+} f(x)=+\infty; \qquad \lim_{x\to (\pi/2)^-} f(x)=+\infty, \quad \lim_{x\to (\pi/2)^+} f(x)=-\infty. $$
Le rette $x=-\frac{\pi}{2}$ e $x=\frac{\pi}{2}$ sono asintoti verticali.

**Monotonia.** Con $a=\frac{1}{2}$,
$$ f'(x)=\frac{\frac{1}{2}+\sin x}{\cos^2 x}=\frac{1+2\sin x}{2\cos^2 x}\ge 0 \iff \sin x\ge -\frac{1}{2}. $$
Nell'intervallo $[-\pi,\pi]$ ciò accade per $-\pi\le x\le-\frac{5\pi}{6}$ e per $-\frac{\pi}{6}\le x\le \pi$. La funzione è quindi crescente in tali tratti (esclusi gli asintoti) e decrescente in $-\frac{5\pi}{6}\le x\le-\frac{\pi}{6}$. Si hanno:
$$ \text{massimo relativo in } \Bigl(-\tfrac{5\pi}{6},\,-\tfrac{\sqrt{3}}{2}\Bigr), \qquad \text{minimo relativo in } \Bigl(-\tfrac{\pi}{6},\,\tfrac{\sqrt{3}}{2}\Bigr). $$
Il minimo ha ordinata $\frac{\sqrt{3}}{2}$: è proprio il punto di tangenza con la retta orizzontale trovata al punto b).

**Concavità e flessi.** La derivata seconda è
$$ f''(x)=\frac{\sin^2 x+\sin x+1}{\cos^3 x}. $$
Il numeratore, come trinomio in $\sin x$, ha discriminante $1-4=-3<0$, quindi è sempre positivo: il segno di $f''$ coincide con quello di $\cos^3 x$, cioè di $\cos x$. Perciò il grafico volge la concavità verso l'alto per $-\frac{\pi}{2}<x<\frac{\pi}{2}$ e verso il basso nella parte rimanente del dominio. Poiché $f''(x)$ non si annulla mai, **non esistono punti di flesso**.

Il grafico delle due curve $f(x)=\dfrac{2+\sin x}{2\cos x}$ e $g(x)=\dfrac{2-\sin x}{2\cos x}$, simmetriche rispetto all'asse $y$, nell'intervallo $-\pi\le x\le\pi$ è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="286.805" height="342.572" viewBox="-72 -72 215.104 256.929"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 35.282 56.195)"><clipPath id="pgfbf72fbd19aad87e3cb2c15a22617fa32cp1"><path d="M-107.552-128.465v256.93h215.104v-256.93Zm215.104 256.93"/></clipPath><g clip-path="url(#pgfbf72fbd19aad87e3cb2c15a22617fa32cp1)"><path fill="none" d="M-104.564 0h208.728"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M102.284 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="35.282" y="56.195" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 72.815 54.042)">x</text><path fill="none" d="M0-122.49v244.58"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 120.21c1.44.38 2.12 1.226 2.4 2.08.28-.854.96-1.7 2.4-2.08"/><text x="35.282" y="56.195" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -37.913 184.162)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-46.928-128.465v256.93M46.928-128.465v256.93"/><g fill="gray" stroke="gray"><g fill="gray" stroke="none"><text x="35.282" y="56.195" font-family="cmsy10" font-size="10" transform="matrix(1 0 0 -1 -100.848 42.723)">¡</text><text x="44.26" y="52.257" font-family="cmmi7" font-size="7" transform="matrix(1 0 0 -1 -100.848 42.723)">¼</text><path d="M-56.588-10.772h4.927v-.4h-4.927z"/><text x="44.73" y="59.643" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -100.848 42.723)">2</text></g></g><g fill="gray" stroke="gray"><g fill="gray" stroke="none"><text x="36.482" y="52.257" font-family="cmmi7" font-size="7" transform="matrix(1 0 0 -1 15.18 42.723)">¼</text><path d="M51.662-10.772h4.927v-.4h-4.927z"/><text x="36.953" y="59.643" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 15.18 42.723)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-93.857-29.875.674.328.674.314.674.302.673.284.674.271.674.26.674.242.673.23.674.215.674.203.674.191.673.174.674.164.674.147.674.134.673.12.674.107.674.09.674.077.674.063.673.045.674.027.674.015.674-.01.673-.02.674-.042.674-.063.674-.08.673-.108.674-.125.674-.152.674-.18.673-.209.674-.233.674-.269.674-.302.674-.34.673-.383.674-.424.674-.469.674-.529.673-.588.674-.649.674-.717.674-.803.673-.897.674-.99.674-1.11.674-1.244.674-1.394.673-1.572.674-1.779.674-2.022.674-2.305.673-2.659.674-3.083.674-3.609.674-4.264.673-5.103.674-6.222.674-7.706.674-9.782.673-12.793.674-17.399.674-24.994.674-38.79.674-68.225.673-151.338.674-615.848M-46.486 1010.473l.669-608.145.668-150.855.669-68.351.669-38.874.669-25.09.668-17.464.67-12.854.668-9.84.669-7.75.668-6.254.67-5.143.668-4.29.669-3.633.668-3.106.67-2.678.668-2.326.669-2.034.668-1.797.67-1.584.668-1.403.669-1.256.668-1.123.67-1.004.668-.903.669-.81.668-.73.67-.658.668-.595.669-.534.668-.479.67-.43.668-.388.669-.353.668-.304.67-.275.668-.245.669-.212.668-.185.67-.16.668-.13.669-.11.668-.09.67-.07.668-.044.669-.027.668-.012.67.003.668.024.669.039.668.054.67.071.668.087.669.102.668.11.67.132.668.14.669.152.668.17.67.183.668.194.669.206.668.224.67.236.668.251.669.263.668.275.67.29.668.308.669.316.668.335.67.35.668.364.669.382.668.397.67.413.668.433.669.448.668.47.67.486.668.508.669.526.668.553.67.573.668.598.669.621.668.648.67.679.668.702.669.734.668.769.67.803.668.837.669.875.668.917.67.959.668 1.004.669 1.055.668 1.108.67 1.165.668 1.222.669 1.29.668 1.357.67 1.437.668 1.518.669 1.604.668 1.706.67 1.801.668 1.927.669 2.053.668 2.186.67 2.343.668 2.516.669 2.706.668 2.91.67 3.152.668 3.418.669 3.723.668 4.06.67 4.469.668 4.91.669 5.438.668 6.063.67 6.78.668 7.66.669 8.679.668 9.969.67 11.537.668 13.504.669 16.04.668 19.336.67 23.82.668 29.995.669 38.962.669 52.72.668 75.174.669 115.952.669 202.508.668 442.84.67 1736.314M47.353-3154.6l.674 1934.807.673 464.288.674 208.087.674 118.202.674 76.225.673 53.233.674 39.277.674 30.209.674 23.912.673 19.406.674 16.07.674 13.523.674 11.548.674 9.979.673 8.681.674 7.643.674 6.773.674 6.055.673 5.43.674 4.903.674 4.454.674 4.06.673 3.706.674 3.408.674 3.144.674 2.9.673 2.695.674 2.507.674 2.333.674 2.181.674 2.043.673 1.915.674 1.802.674 1.694.674 1.6.673 1.507.674 1.428.674 1.353.674 1.282.673 1.219.674 1.159.674 1.1.674 1.048.674.998.673.956.674.911.674.87.674.833.673.797.674.763.674.729.674.702.673.668.674.646.674.618.674.589.673.57.674.547.674.526.674.502.674.484.673.463.674.445.674.428.674.409.673.394.674.376.674.36.674.346"/><path fill="none" stroke="red" stroke-width=".8" d="m-93.857-29.875.674-.344.674-.362.674-.376.673-.391.674-.41.674-.427.674-.445.673-.463.674-.48.674-.506.674-.523.673-.546.674-.565.674-.595.674-.618.673-.643.674-.672.674-.699.674-.729.674-.762.673-.794.674-.834.674-.87.674-.91.673-.95.674-1.001.674-1.049.674-1.1.673-1.155.674-1.216.674-1.282.674-1.35.673-1.431.674-1.503.674-1.598.674-1.691.674-1.799.673-1.912.674-2.04.674-2.178.674-2.33.673-2.504.674-2.69.674-2.897.674-3.137.673-3.406.674-3.7.674-4.045.674-4.444.674-4.893.673-5.421.674-6.039.674-6.763.674-7.616.673-8.672.674-9.935.674-11.511.674-13.487.673-15.99.674-19.344.674-23.803.674-30.033.673-39.042.674-52.874.674-75.67.674-117.007.674-205.335.673-454.683.674-1848.162M-46.486 3030.864l.669-1825.032.668-453.252.669-205.699.669-117.27.669-75.946.668-53.07.67-39.221.668-30.19.669-23.938.668-19.433.67-16.106.668-13.554.669-11.584.668-9.996.67-8.723.668-7.67.669-6.798.668-6.08.67-5.456.668-4.919.669-4.47.668-4.078.67-3.73.668-3.424.669-3.157.668-2.922.67-2.707.668-2.521.669-2.349.668-2.19.67-2.052.668-1.927.669-1.813.668-1.703.67-1.608.668-1.52.669-1.437.668-1.36.67-1.29.668-1.225.669-1.165.668-1.112.67-1.054.668-1.004.669-.96.668-.919.67-.878.668-.837.669-.804.668-.767.67-.736.668-.704.669-.676.668-.651.67-.621.668-.598.669-.577.668-.55.67-.525.668-.511.669-.49.668-.466.67-.45.668-.434.669-.412.668-.398.67-.382.668-.365.669-.35.668-.334.67-.32.668-.304.669-.29.668-.278.67-.263.668-.25.669-.237.668-.224.67-.206.668-.197.669-.183.668-.17.67-.152.668-.14.669-.132.668-.11.67-.102.668-.087.669-.072.668-.053.67-.04.668-.023.669-.009.668.012.67.027.668.048.669.069.668.086.67.114.668.13.669.16.668.182.67.212.668.242.669.275.668.308.67.34.668.388.669.437.668.477.67.532.668.592.669.657.668.726.67.81.668.899.669 1.003.668 1.116.67 1.256.668 1.4.669 1.58.668 1.79.67 2.028.668 2.323.669 2.663.668 3.095.67 3.62.668 4.27.669 5.123.668 6.22.67 7.713.668 9.774.669 12.765.669 17.35.668 24.831.669 38.437.669 67.286.668 147.391.67 578.555M47.353-1051.726l.674 644.748.673 154.533.674 69.144.674 39.185.674 25.18.673 17.517.674 12.87.674 9.845.674 7.741.673 6.244.674 5.129.674 4.276.674 3.62.674 3.099.673 2.662.674 2.314.674 2.025.674 1.786.673 1.573.674 1.398.674 1.248.674 1.114.673.994.674.893.674.807.674.72.673.65.674.593.674.522.674.475.674.43.673.38.674.34.674.302.674.272.673.233.674.206.674.182.674.153.673.125.674.11.674.084.674.057.674.045.673.024.674.006.674-.015.674-.027.673-.045.674-.063.674-.074.674-.09.673-.107.674-.12.674-.131.674-.153.673-.158.674-.176.674-.191.674-.204.674-.212.673-.23.674-.245.674-.257.674-.271.673-.284.674-.302.674-.314.674-.325"/><path stroke="none" d="M1.68 29.875a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0m-1.68 0"/><g stroke="none" font-size="10"><text x="35.282" y="56.195" font-family="cmr10" transform="matrix(1 0 0 -1 -31.749 92.103)">(0</text><text x="44.171" y="56.195" font-family="cmmi10" transform="matrix(1 0 0 -1 -31.749 92.103)">;</text><text x="48.615" y="56.195" font-family="cmr10" transform="matrix(1 0 0 -1 -31.749 92.103)">1)</text></g><path fill="#00f" stroke="none" d="M-14.173 25.872a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0M-76.744-25.872a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0m-1.47 0"/><g fill="#00f" stroke="#00f"><text x="35.282" y="56.195" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 39.408 155.271)">f</text></g><g fill="red" stroke="red"><text x="35.282" y="56.195" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -115.522 156.59)">g</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.116](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
