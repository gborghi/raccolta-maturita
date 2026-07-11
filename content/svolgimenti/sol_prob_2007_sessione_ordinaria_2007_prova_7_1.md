

**Problema:** [[Problemi/prob_2007_sessione_ordinaria_2007_prova_7_1|2007 Ordinaria — Prova — Problema 1]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Si considerano i triangoli di base $\overline{AB}=1$ il cui vertice $C$ varia in modo che l'angolo in $A$ si mantenga doppio dell'angolo in $B$, cioè $\widehat{BAC}=2\,\widehat{ABC}$. Posto $\alpha=\widehat{ABC}$, si ha $\widehat{BAC}=2\alpha$ e, poiché la somma degli angoli interni vale $\pi$, $\widehat{ACB}=\pi-3\alpha$. La condizione $\widehat{ACB}>0$ impone

$$0<\alpha<\frac{\pi}{3}.$$

## a) Equazione del luogo $\gamma$

Riferiamo il piano a un sistema di assi cartesiani con $A=(0,0)$ e $B=(1,0)$, in modo che $C$ vari nel semipiano $y>0$ (il caso $y<0$ si ottiene per simmetria).

La retta $AC$ passa per l'origine e forma con il semiasse positivo delle $x$ l'angolo $2\alpha$:

$$AC:\quad y=\tan(2\alpha)\,x .$$

La retta $BC$ passa per $B=(1,0)$ e forma l'angolo interno $\alpha$, quindi ha inclinazione $\pi-\alpha$:

$$BC:\quad y=-\tan\alpha\,(x-1).$$

Poniamo $t=\tan\alpha$, così che $\tan(2\alpha)=\dfrac{2t}{1-t^2}$. Dalla retta $BC$ si ricava

$$t=\frac{y}{1-x},$$

e sostituendo nella retta $AC$:

$$y=\frac{2t}{1-t^2}\,x \;\Rightarrow\; y\left(1-\frac{y^2}{(1-x)^2}\right)=\frac{2y}{1-x}\,x .$$

Semplificando $y\neq0$ e moltiplicando per $(1-x)^2$:

$$(1-x)^2-y^2=2x(1-x)\;\Rightarrow\;(1-x)(1-3x)-y^2=0,$$

da cui l'equazione del luogo $\gamma$:

$$\boxed{\,3x^2-4x+1-y^2=0\,}$$

## b) Rappresentazione di $\gamma$

Completando il quadrato:

$$3\left(x-\frac{2}{3}\right)^2-y^2=\frac{1}{3}\;\Longleftrightarrow\;\frac{\left(x-\frac{2}{3}\right)^2}{\frac{1}{9}}-\frac{y^2}{\frac{1}{3}}=1 .$$

Si tratta di un'**iperbole traslata** di centro $O'=\left(\dfrac{2}{3},\,0\right)$, con semiassi $a=\dfrac{1}{3}$ e $b=\dfrac{1}{\sqrt3}$; i vertici sono nei punti di ascissa $x=\dfrac{1}{3}$ e $x=1$, e gli asintoti hanno equazione

$$y=\pm\frac{b}{a}\left(x-\frac{2}{3}\right)=\pm\sqrt3\left(x-\frac{2}{3}\right).$$

**Limitazioni geometriche.** Per il teorema dei seni,

$$\frac{AC}{\sin\alpha}=\frac{BC}{\sin 2\alpha}\;\Rightarrow\;\frac{AC}{BC}=\frac{\sin\alpha}{\sin 2\alpha}=\frac{1}{2\cos\alpha}.$$

Quando $\alpha\to 0^+$ si ha $\dfrac{AC}{BC}\to\dfrac12$, quindi $AC\to\dfrac13$ (essendo $AB=1$): il vertice $C$ tende al punto $\left(\dfrac13,0\right)$, che va escluso (triangolo degenere). Quando $\alpha\to\dfrac{\pi}{3}$ le rette $AC$ e $BC$ diventano parallele e il punto $C$ non esiste. Pertanto l'ascissa di $C$ soddisfa $x\le\dfrac13$: il luogo $\gamma$ è il **ramo sinistro** dell'iperbole (privato del vertice), e il vertice $C$ può trovarsi in uno qualsiasi dei quattro quadranti.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="171.825" height="309.111" viewBox="-72 -72 128.869 231.833"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 50.105H43.618"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M41.738 47.705c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-21.993" y="50.105" stroke="none" font-family="cmmi10" font-size="10" transform="translate(69.543 2.153)">x</text><path fill="none" d="M-21.993 159.363V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-24.393-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-21.993" y="50.105" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -114.736)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-44.755 142.096 39.465-3.778M-44.755-41.887l84.22 145.874"/><path fill="none" stroke="#00f" stroke-width="1.2" d="m-47.031-42.16.508.917.509.916.508.918.509.918.508.919.509.92.508.92.509.922.508.922.508.924.509.924.508.925.509.926.508.928.509.928.508.93.509.93.508.932.509.933.508.934.509.936.508.937.509.938.508.94.509.942.508.943.509.945.508.945.509.95.508.95.509.953.508.954.509.957.508.958.509.962.508.964.509.966.508.97.508.972.509.976.508.978.509.983.508.985.509.99.508.994.509.998.508 1.002.509 1.008.508 1.013.509 1.018.508 1.025.509 1.03.508 1.038.509 1.045.508 1.054.509 1.061.508 1.072.509 1.081.508 1.093.509 1.105.508 1.118.509 1.133.508 1.15.509 1.168.508 1.189.509 1.213.508 1.238.508 1.27.509 1.307.508 1.347.509 1.399.508 1.46.509 1.537.508 1.636.509 1.768.508 1.958.509 2.262.508 2.845.509 5.17M-47.031 142.369l.508-.917.509-.916.508-.918.509-.918.508-.919.509-.92.508-.92.509-.922.508-.922.508-.923.509-.925.508-.925.509-.926.508-.928.509-.928.508-.93.509-.93.508-.931.509-.934.508-.934.509-.935.508-.937.509-.939.508-.94.509-.942.508-.942.509-.946.508-.945.509-.95.508-.95.509-.952.508-.955.509-.956.508-.959.509-.961.508-.965.509-.966.508-.97.508-.972.509-.975.508-.978.509-.983.508-.986.509-.99.508-.993.509-1 .508-1 .509-1.009.508-1.013.509-1.018.508-1.025.509-1.03.508-1.038.509-1.045.508-1.054.509-1.061.508-1.071.509-1.082.508-1.093.509-1.105.508-1.118.509-1.133.508-1.15.509-1.168.508-1.189.509-1.213.508-1.238.508-1.27.509-1.307.508-1.347.509-1.399.508-1.46.509-1.537.508-1.636.509-1.768.508-1.958.509-2.262.508-2.844.509-5.171"/><path fill="none" stroke="#00f" stroke-dasharray="0.8,2.0" stroke-width=".8" d="m23.532 50.105.297-5.227.297-2.202.298-1.714.297-1.465.297-1.307.298-1.198.297-1.116.297-1.052.298-1 .297-.959.297-.921.298-.892.297-.865.297-.841.297-.82.298-.804.297-.787.297-.77.298-.76.297-.745.297-.735.298-.725.297-.715.297-.707.298-.699.297-.69.297-.685.298-.677.297-.671.297-.667.297-.66.298-.655.297-.65.297-.646.298-.642.297-.638.297-.633.298-.631.297-.627.297-.623.298-.62.297-.618.297-.615.297-.611.298-.609.297-.606.297-.606.298-.601.297-.6M23.532 50.105l.297 5.226.297 2.202.298 1.714.297 1.465.297 1.307.298 1.198.297 1.116.297 1.052.298 1 .297.959.297.921.298.892.297.865.297.841.297.82.298.804.297.787.297.771.298.759.297.746.297.735.298.724.297.716.297.706.298.699.297.691.297.684.298.677.297.672.297.666.297.66.298.655.297.65.297.647.298.641.297.638.297.634.298.63.297.627.297.623.298.62.297.618.297.615.297.612.298.608.297.607.297.605.298.601.297.6"/><path stroke="none" d="M-20.627 50.105a1.366 1.366 0 1 0-2.731 0 1.366 1.366 0 0 0 2.731 0m-1.366 0"/><text x="-21.993" y="50.105" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><path stroke="none" d="M24.898 50.105a1.366 1.366 0 1 0-2.732 0 1.366 1.366 0 0 0 2.732 0m-1.366 0"/><text x="-21.993" y="50.105" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.058 10.366)">B</text><path stroke="none" d="M9.496 50.105a1.138 1.138 0 1 0-2.275 0 1.138 1.138 0 0 0 2.275 0m-1.137 0"/><g stroke="none"><text x="-21.993" y="50.105" font-family="cmmi10" font-size="10" transform="translate(33.884 -3.533)">O</text><text x="-14.087" y="46.476" font-family="cmsy7" font-size="7" transform="translate(33.884 -3.533)">0</text></g><path fill="none" d="M-6.82 52.38v-4.552"/><g stroke="none"><text x="-20.793" y="46.167" font-family="cmr7" font-size="7" transform="translate(11.98 14.713)">1</text><path d="M-8.813 62.118h3.986v.4h-3.986z"/><text x="-20.793" y="53.553" font-family="cmr7" font-size="7" transform="translate(11.98 14.713)">3</text></g></g></svg>
</figure>

## c) Massimo della somma dei quadrati delle altezze

L'altezza relativa al lato $BC$ (condotta da $A$) e quella relativa al lato $AC$ (condotta da $B$) valgono, avendo $AB=1$ come ipotenusa nei rispettivi triangoli rettangoli:

$$AH=AB\sin\alpha=\sin\alpha,\qquad BK=AB\sin 2\alpha=\sin 2\alpha .$$

La somma dei loro quadrati è

$$z=\sin^2\alpha+\sin^2 2\alpha=\sin^2\alpha+4\sin^2\alpha\cos^2\alpha=\sin^2\alpha\,(5-4\sin^2\alpha).$$

Posto $x=\sin\alpha>0$:

$$z=x^2(5-4x^2)=5x^2-4x^4 .$$

**Metodo delle derivate.** $z'=10x-16x^3=2x(5-8x^2)$, che si annulla (per $x>0$) in

$$x^2=\frac{5}{8}\;\Rightarrow\;\sin\alpha=\sqrt{\frac{5}{8}}=\frac{\sqrt{10}}{4},$$

punto di massimo (poiché $z'>0$ prima e $z'<0$ dopo). Il valore massimo è $z_{\max}=\dfrac{25}{16}$, e

$$\alpha=\arcsin\frac{\sqrt{10}}{4}\approx 52^\circ 14' ,$$

compatibile con la limitazione $\alpha<60^\circ$.

**Metodo sintetico.** Scrivendo $z=\dfrac{1}{4}\big[4x^2\,(5-4x^2)\big]$, i due fattori $4x^2$ e $(5-4x^2)$ hanno somma costante $5$; il loro prodotto è massimo quando sono uguali, cioè $4x^2=5-4x^2=\dfrac{5}{2}$, ossia $x^2=\dfrac{5}{8}$, ritrovando $z_{\max}=\dfrac14\left(\dfrac52\right)^2=\dfrac{25}{16}$.

## d) Il caso $\widehat{ABC}=36^\circ$

Per il teorema dei seni $\dfrac{AB}{\sin\widehat{ACB}}=\dfrac{AC}{\sin\widehat{ABC}}$, con $\widehat{ACB}=\pi-3\alpha$ e $AB=1$, si ha

$$AC=\frac{\sin\alpha}{\sin 3\alpha}.$$

Per $\alpha=36^\circ$ risulta $\sin 3\alpha=\sin 108^\circ=\sin 72^\circ=2\sin 36^\circ\cos 36^\circ$, quindi

$$AC=\frac{\sin 36^\circ}{2\sin 36^\circ\cos 36^\circ}=\frac{1}{2\cos 36^\circ}.$$

Poiché $\cos 36^\circ=\dfrac{1+\sqrt5}{4}$, si ottiene

$$AC=\frac{2}{1+\sqrt5}=\frac{2(\sqrt5-1)}{(\sqrt5+1)(\sqrt5-1)}=\frac{\sqrt5-1}{2}.$$

Dunque, se $\widehat{ABC}=36^\circ$ allora $AC=\dfrac{\sqrt5-1}{2}$ (e, essendo $AC=\dfrac{1}{2\cos\alpha}$ funzione strettamente crescente di $\alpha$, vale anche il viceversa).

*Fonte:* [📄 PDF p.7](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
