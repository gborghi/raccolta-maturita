

**Problema:** [[Problemi/prob_2008_sessione_ordinaria_2008_prova_147_1|2008 Ordinaria — Prova (PNI Informatica) — Problema 1]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Nel piano cartesiano si considerano i triangoli $ABC$ con $A(1,0)$, $B(3,0)$ e $C$ variabile sulla retta di equazione $y=2x$. Scriviamo dunque $C=(t,\,2t)$.

## a)

Cerchiamo le posizioni di $C$ per cui l'angolo al vertice $C$ è $A\hat{C}B=\dfrac{\pi}{4}$.

I punti del piano dai quali il segmento $AB$ è visto sotto un angolo (inscritto) di $\dfrac{\pi}{4}$ appartengono agli archi di circonferenza che hanno $AB$ come corda e per i quali l'angolo al centro corrispondente vale $2\cdot\dfrac{\pi}{4}=\dfrac{\pi}{2}$. Poiché $\overline{AB}=2$, il raggio $R$ soddisfa

$$\overline{AB}=2R\sin\frac{\pi}{4}\ \Rightarrow\ 2=2R\cdot\frac{\sqrt{2}}{2}\ \Rightarrow\ R=\sqrt{2}.$$

Il centro sta sull'asse di $AB$, cioè sulla retta $x=2$, a distanza $R$ da $A$: da $\sqrt{(2-1)^2+k^2}=\sqrt{2}$ si ricava $k=\pm 1$. Le due circonferenze sono

$$(x-2)^2+(y-1)^2=2\qquad\text{e}\qquad (x-2)^2+(y+1)^2=2.$$

Intersechiamo con $y=2x$. Per la prima:

$$(x-2)^2+(2x-1)^2=2\ \Rightarrow\ 5x^2-8x+3=0\ \Rightarrow\ x=1\ \ \text{oppure}\ \ x=\frac{3}{5}.$$

Per la seconda si ottiene $5x^2+3=0$, priva di soluzioni reali. Dunque le uniche posizioni sono

$$C_1=(1,\,2)\qquad\text{e}\qquad C_2=\left(\frac{3}{5},\,\frac{6}{5}\right),$$

come si voleva provare. (Verifica diretta: per $C_1$ i vettori $\vec{CA}=(0,-2)$, $\vec{CB}=(2,-2)$ danno $\cos A\hat{C}B=\dfrac{4}{2\cdot 2\sqrt{2}}=\dfrac{\sqrt{2}}{2}$; per $C_2$ si trova ancora $\cos A\hat{C}B=\dfrac{1}{\sqrt{2}}$, cioè in entrambi i casi $A\hat{C}B=\dfrac{\pi}{4}$.)

## b)

Determiniamo l'ortocentro $H$ del triangolo $ABC$ con $C=(t,2t)$.

Poiché $AB$ giace sull'asse $x$, l'altezza uscente da $C$ è la retta verticale $x=t$: quindi $x_H=t$.

L'altezza da $A$ è perpendicolare a $BC$. La retta $BC$ ha coefficiente angolare $\dfrac{2t}{t-3}$, dunque l'altezza da $A$ ha coefficiente $-\dfrac{t-3}{2t}$ e passa per $A(1,0)$:

$$y=-\frac{t-3}{2t}\,(x-1).$$

Ponendo $x=t$ si ottiene l'ordinata di $H$:

$$y_H=-\frac{(t-3)(t-1)}{2t}.$$

Eliminando il parametro ($x=t$) si ricava l'equazione del luogo $\gamma$:

$$\boxed{\,y=-\frac{(x-1)(x-3)}{2x}=2-\frac{x}{2}-\frac{3}{2x}\,}\qquad (x\neq 0).$$

È un'iperbole (asintoto verticale $x=0$ e asintoto obliquo $y=2-\dfrac{x}{2}$) che passa per $A(1,0)$ e $B(3,0)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="286.736" height="214.267" viewBox="-72 -72 215.052 160.7"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-68.968.596H129.8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M127.92-1.804c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.018" y=".596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(190.751 2.153)">x</text><path fill="none" d="M-57.018 88.23V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.418-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.018" y=".596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -65.228)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-37.1 50.388 1.744-8.755 1.745-7.321 1.745-6.182 1.745-5.266 1.745-4.517 1.745-3.903 1.745-3.379 1.745-2.943 1.745-2.569 1.745-2.25 1.746-1.968L-16.16-.39l1.745-1.515 1.745-1.325 1.745-1.161 1.745-1.008 1.745-.88 1.745-.76 1.745-.65 1.745-.556 1.745-.467 1.745-.387 1.745-.314 1.745-.244 1.745-.188 1.745-.128 1.745-.077 1.745-.027 1.745.017 1.745.056 1.745.096 1.745.132 1.745.167 1.745.194 1.745.225 1.745.253 1.745.278 1.745.304 1.745.324 1.745.347 1.745.365 1.746.386 1.745.404 1.745.42 1.745.436 1.745.451 1.745.467 1.745.48 1.745.491 1.745.505 1.745.516 1.745.53 1.745.536 1.745.55 1.745.558 1.745.568 1.745.577 1.745.585 1.745.595 1.745.6 1.745.608 1.745.617 1.745.622 1.745.63 1.745.636 1.745.642 1.745.647 1.745.655 1.745.658 1.745.664 1.745.67 1.746.673 1.745.68 1.745.683 1.745.687 1.745.693 1.745.695 1.745.701 1.745.704 1.745.707 1.745.71 1.745.716 1.745.718 1.745.72 1.745.724 1.745.728 1.745.73 1.745.733 1.745.735"/><g fill="#00f" stroke="#00f"><text x="-57.018" y=".596" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(164.435 31.056)">°</text></g><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="m-29.134 12.547 2.323-2.323 2.323-2.324 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.324-2.323 2.323-2.323 2.323-2.323L5.712-22.3l2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.324 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323 2.323-2.323"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M-1.25-20.648 3.395-19.1l4.647 1.55 4.646 1.548 4.647 1.549 4.647 1.55 4.647 1.548 4.646 1.549 4.647 1.549 4.647 1.549 4.647 1.548 4.646 1.55 4.647 1.548 4.647 1.55 4.646 1.548 4.647 1.55 4.647 1.548 4.647 1.55 4.646 1.548 4.647 1.549 4.647 1.549 4.647 1.549 4.646 1.548 4.647 1.55 4.647 1.548"/><path stroke="none" d="M-14.944.596a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><text x="-57.018" y=".596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(43.367 10.366)">A</text><path stroke="none" d="M64.723.596a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><text x="-57.018" y=".596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(115.458 13.366)">B</text><path stroke="none" d="M4.973-19.32a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><text x="-57.018" y=".596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(55.846 -23.45)">P</text><text x="-57.018" y=".596" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.92 11.383)">O</text></g></svg>
</figure>

## c)

Calcoliamo l'area $\Omega$ della regione delimitata da $\gamma$ e dalle tangenti a $\gamma$ nei punti $A$ e $B$.

Da $y=2-\dfrac{x}{2}-\dfrac{3}{2x}$ si ha $y'=-\dfrac{1}{2}+\dfrac{3}{2x^2}$. Quindi

$$y'(1)=1\ \Rightarrow\ \text{tangente in }A:\ y=x-1,$$
$$y'(3)=-\frac{1}{3}\ \Rightarrow\ \text{tangente in }B:\ y=1-\frac{x}{3}.$$

Le due tangenti si incontrano nel punto $P\left(\dfrac{3}{2},\,\dfrac{1}{2}\right)$. Nell'intervallo $[1,3]$ le tangenti stanno sopra la curva, perciò

$$\Omega=\int_{1}^{3/2}\!\big[(x-1)-\gamma(x)\big]\,dx+\int_{3/2}^{3}\!\Big[\Big(1-\frac{x}{3}\Big)-\gamma(x)\Big]\,dx.$$

I due integrali delle tangenti valgono rispettivamente $\dfrac{1}{8}$ e $\dfrac{3}{8}$, con somma $\dfrac{1}{2}$. Per la curva:

$$\int_{1}^{3}\Big(2-\frac{x}{2}-\frac{3}{2x}\Big)\,dx=\Big[\,2x-\frac{x^2}{4}-\frac{3}{2}\ln x\,\Big]_{1}^{3}=2-\frac{3}{2}\ln 3.$$

Pertanto

$$\Omega=\frac{1}{2}-\Big(2-\frac{3}{2}\ln 3\Big)=\frac{3}{2}\ln 3-\frac{3}{2}=\frac{3}{2}\big(\ln 3-1\big)\approx 0{,}148.$$

## d)

Dalla relazione appena verificata

$$\Omega=\frac{3}{2}\big(\ln 3-1\big)\ \Longrightarrow\ \ln 3=1+\frac{2}{3}\,\Omega,$$

il calcolo di $\ln 3$ si riconduce al calcolo (approssimato) dell'area, cioè dell'integrale che ha generato il termine logaritmico:

$$\ln 3=\int_{1}^{3}\frac{dx}{x}.$$

**Procedura numerica (regola dei trapezi).** Si divide $[1,3]$ in $n$ parti uguali di ampiezza $h=\dfrac{2}{n}$, con nodi $x_k=1+kh$ e $f(x)=\dfrac{1}{x}$; allora

$$\ln 3\approx h\left[\frac{f(x_0)+f(x_n)}{2}+\sum_{k=1}^{n-1}f(x_k)\right].$$

Con $n=4$ ($h=\tfrac12$; nodi $1,\ \tfrac32,\ 2,\ \tfrac52,\ 3$):

$$\ln 3\approx\frac{1}{2}\left[\frac{1+\tfrac13}{2}+\frac{2}{3}+\frac{1}{2}+\frac{2}{5}\right]\approx 1{,}117,$$

già vicino al valore vero $\ln 3\approx 1{,}0986$. Infittendo la suddivisione (o usando la più precisa regola di Simpson) l'approssimazione migliora rapidamente; il valore così ottenuto, inserito in $\ln 3=1+\dfrac{2}{3}\Omega$, fornisce coerentemente la stima dell'area $\Omega$.

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/geometria #cluster/geometria
