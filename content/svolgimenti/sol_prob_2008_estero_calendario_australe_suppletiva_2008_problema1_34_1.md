

**Problema:** [[Problemi/prob_2008_estero_calendario_australe_suppletiva_2008_problema1_34_1|2008 Estero Australe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2008_estero_calendario_australe_suppletiva_2008_problema1_34|2008 Estero Australe Suppletiva — Problema 1]]

Un'ellisse $\Sigma$ ha gli assi di lunghezza $4$ e $2$ e i fuochi sull'asse delle ascisse.

## a) Equazione dell'ellisse e rettangolo di area massima

Gli assi hanno lunghezza $4$ e $2$, quindi i semiassi sono $a=2$ e $b=1$; poiché i fuochi stanno sull'asse delle ascisse, il semiasse maggiore è quello orizzontale. L'equazione canonica è

$$\frac{x^2}{4}+y^2=1.$$

Sia $A=(x;\,y)$ il vertice del rettangolo inscritto posto nel primo quadrante, con $0\le x\le 2$ e $0\le y\le 1$. Per la simmetria dell'ellisse rispetto agli assi, i lati del rettangolo misurano $2x$ e $2y$, dunque

$$\text{Area}=2x\cdot 2y=4xy,\qquad y^2=1-\frac{x^2}{4}.$$

L'area è massima dove è massimo il suo quadrato (a meno del fattore $16$); poniamo

$$z=x^2y^2=x^2\left(1-\frac{x^2}{4}\right)=x^2-\frac{x^4}{4}.$$

Derivando:

$$z'=2x-x^3=x\,(2-x^2).$$

Per $x\ge 0$ si ha $z'\ge 0$ quando $x^2\le 2$, cioè $0\le x\le\sqrt2$: $z$ cresce su $[0,\sqrt2]$ e decresce su $[\sqrt2,2]$. Il massimo si ha quindi per

$$x=\sqrt2,\qquad y^2=1-\frac{2}{4}=\frac12,\qquad y=\frac{\sqrt2}{2}.$$

Il rettangolo di area massima ha vertice $A=\left(\sqrt2;\,\dfrac{\sqrt2}{2}\right)$ e area

$$\text{Area}_{\max}=4xy=4\cdot\sqrt2\cdot\frac{\sqrt2}{2}=4.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="303.844" height="203.645" viewBox="-72 -72 227.883 152.734"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 16.53h214.702"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M140.752 14.13c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="35.481" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(111.084 2.153)">x</text><path fill="none" d="M35.48 80.264V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M33.08-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="35.481" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -81.161)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M115.148 16.53c0-22-35.668-39.834-79.667-39.834S-44.187-5.47-44.187 16.53s35.668 39.833 79.668 39.833 79.667-17.834 79.667-39.833Zm-79.667 0"/><path fill="none" stroke="red" stroke-width=".8" d="M91.806-11.633v56.325h-112.65v-56.325Zm-112.65 56.325"/><path stroke="none" d="M93.766-11.633a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0m-1.96 0"/><text x="35.481" y="16.53" stroke="none" font-family="cmmi10" font-size="10" transform="translate(59.858 -31.695)">A</text><path stroke="none" d="M-18.884-11.633a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0M-18.884 44.692a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0M93.76599999999999 44.692a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0m-1.96 0"/><g fill="#00f" stroke="#00f"><text x="35.481" y="16.53" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(62.114 -34.425)">§</text></g></g></svg>
</figure>

## b) Somma delle coordinate: studio di $f(x)$

Sia $P=(x;\,y)$ un punto di $\Sigma$ con $y>0$: allora $y=\sqrt{1-\dfrac{x^2}{4}}=\dfrac{\sqrt{4-x^2}}{2}$. La somma delle coordinate è

$$f(x)=x+y=x+\frac12\sqrt{4-x^2}.$$

**Dominio.** Occorre $4-x^2\ge 0$, cioè $-2\le x\le 2$.

**Simmetrie.** $f(-x)=-x+\tfrac12\sqrt{4-x^2}$ non coincide né con $f(x)$ né con $-f(x)$: la funzione non è né pari né dispari.

**Intersezioni con gli assi.** Per $x=0$ si ha $f(0)=1$, punto $(0;1)$. Per $f(x)=0$:

$$\frac12\sqrt{4-x^2}=-x\quad(\text{richiede }x\le 0)\ \Rightarrow\ \frac{4-x^2}{4}=x^2\ \Rightarrow\ 5x^2=4\ \Rightarrow\ x=-\frac{2}{\sqrt5},$$

cioè il punto $\left(-\dfrac{2}{\sqrt5};\,0\right)$.

**Valori agli estremi.** La funzione è continua sull'intervallo chiuso e limitato $[-2,2]$, quindi non vi sono limiti da calcolare; agli estremi $f(-2)=-2$ e $f(2)=2$.

**Derivata prima.**

$$f'(x)=1+\frac{-2x}{2\cdot 2\sqrt{4-x^2}}=1-\frac{x}{2\sqrt{4-x^2}}.$$

Studiamo $f'(x)\ge 0$, cioè $x\le 2\sqrt{4-x^2}$:

- se $-2\le x<0$ la disuguaglianza è sempre verificata (primo membro negativo, secondo non negativo);
- se $x\ge 0$ si può elevare al quadrato: $x^2\le 4(4-x^2)$, cioè $5x^2\le 16$, da cui $0\le x\le\dfrac{4}{\sqrt5}$.

Quindi $f'(x)\ge 0$ per $-2\le x\le\dfrac{4}{\sqrt5}$: la funzione è **crescente** su $\left[-2,\dfrac{4}{\sqrt5}\right]$ e **decrescente** su $\left[\dfrac{4}{\sqrt5},2\right]$.

Pertanto:

- $x=-2$ è punto di **minimo assoluto**, con $f(-2)=-2$;
- $x=\dfrac{4}{\sqrt5}$ è punto di **massimo** (relativo e assoluto), con ordinata

$$f\!\left(\frac{4}{\sqrt5}\right)=\frac{4}{\sqrt5}+\frac12\sqrt{4-\frac{16}{5}}=\frac{4}{\sqrt5}+\frac12\cdot\frac{2}{\sqrt5}=\frac{4}{\sqrt5}+\frac{1}{\sqrt5}=\frac{5}{\sqrt5}=\sqrt5.$$

**Convessità.** Elevando al quadrato $y=f(x)-x=\tfrac12\sqrt{4-x^2}$ si ottiene $5x^2-8xy+4y^2-4=0$, che ha $b^2-4ac=64-80<0$: il grafico $\gamma$ è un arco di ellisse (centrata nell'origine e ruotata). Non essendoci flessi su un arco di ellisse, non occorre studiare la derivata seconda. Il grafico è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="257.828" height="236.111" viewBox="-72 -72 193.371 177.083"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 25.35H102.8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M100.92 22.95c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="15.565" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.168 2.153)">x</text><path fill="none" d="M15.565 100.466v-159.22"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M13.165-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="15.565" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -89.982)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-47.031 87.947 1.584-8.582 1.585-4.42 1.584-3.715 1.585-3.345 1.585-3.101 1.584-2.926 1.585-2.79 1.584-2.68 1.585-2.589 1.585-2.51 1.584-2.442 1.585-2.381 1.584-2.327 1.585-2.277 1.584-2.233 1.585-2.19 1.585-2.153 1.584-2.116 1.585-2.082 1.584-2.05 1.585-2.02 1.585-1.99 1.584-1.962L-9 21.13l1.584-1.91 1.585-1.885 1.584-1.86 1.585-1.837 1.585-1.815 1.584-1.792 1.585-1.77 1.584-1.749L5.26 4.785l1.585-1.706 1.584-1.686 1.585-1.666 1.584-1.644 1.585-1.625 1.584-1.605 1.585-1.585 1.585-1.564 1.584-1.545 1.585-1.524 1.584-1.504 1.585-1.484 1.585-1.462 1.584-1.443 1.585-1.42 1.584-1.4 1.585-1.377 1.584-1.355 1.585-1.332 1.585-1.308 1.584-1.285 1.585-1.259 1.584-1.234 1.585-1.207 1.585-1.179 1.584-1.15 1.585-1.12 1.584-1.086 1.585-1.054 1.584-1.017 1.585-.979 1.585-.937 1.584-.892 1.585-.843 1.584-.788 1.585-.728 1.585-.66 1.584-.58 1.585-.49 1.584-.38 1.585-.244 1.585-.069 1.584.173 1.585.544 1.584 1.243 1.585 4.863"/><path stroke="none" d="M72.988-44.632a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><g stroke="none"><text x="15.565" y="14.251" font-family="cmex10" font-size="10" transform="translate(59.525 -80.016)">³</text><text x="26.022" y="21.414" font-family="cmr7" font-size="7" transform="translate(59.525 -80.016)">4</text><path d="M82.262-57.365h10.556v.4H82.262z"/><text x="22.737" y="24.131" font-family="cmsy7" font-size="7" transform="translate(59.525 -80.016)">p</text><path d="M88.832-56.225h3.986v.34h-3.986z"/><text x="29.307" y="29.966" font-family="cmr7" font-size="7" transform="translate(59.525 -80.016)">5</text><text x="34.493" y="25.351" font-family="cmmi10" font-size="10" transform="translate(59.525 -80.016)">;</text><text x="38.937" y="17.079" font-family="cmsy10" font-size="10" transform="translate(59.525 -80.016)">p</text><path d="M106.796-63.337h5v.4h-5z"/><text x="47.271" y="25.351" font-family="cmr10" font-size="10" transform="translate(59.525 -80.016)">5</text><text x="52.271" y="14.251" font-family="cmex10" font-size="10" transform="translate(59.525 -80.016)">´</text></g><path stroke="none" d="M16.995-5.947a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><g stroke="none" font-size="10"><text x="15.565" y="25.351" font-family="cmr10" transform="translate(-25.755 -37.331)">(0</text><text x="24.454" y="25.351" font-family="cmmi10" transform="translate(-25.755 -37.331)">;</text><text x="28.898" y="25.351" font-family="cmr10" transform="translate(-25.755 -37.331)">1)</text></g><path stroke="none" d="M-10.985 25.35a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0M-45.601 87.947a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><g stroke="none" font-size="10"><text x="15.565" y="25.351" font-family="cmr10" transform="translate(-59.063 73.63)">(</text><text x="19.454" y="25.351" font-family="cmsy10" transform="translate(-59.063 73.63)">¡</text><text x="27.232" y="25.351" font-family="cmr10" transform="translate(-59.063 73.63)">2</text><text x="32.232" y="25.351" font-family="cmmi10" transform="translate(-59.063 73.63)">;</text><text x="36.676" y="25.351" font-family="cmsy10" transform="translate(-59.063 73.63)">¡</text><text x="44.454" y="25.351" font-family="cmr10" transform="translate(-59.063 73.63)">2)</text></g><path stroke="none" d="M79.591-37.245a1.43 1.43 0 1 0-2.86 0 1.43 1.43 0 0 0 2.86 0m-1.43 0"/><g stroke="none" font-size="10"><text x="15.565" y="25.351" font-family="cmr10" transform="translate(66.13 -51.563)">(2</text><text x="24.454" y="25.351" font-family="cmmi10" transform="translate(66.13 -51.563)">;</text><text x="28.898" y="25.351" font-family="cmr10" transform="translate(66.13 -51.563)">2)</text></g><g fill="#00f" stroke="#00f"><text x="15.565" y="25.351" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.424 -52.026)">°</text></g></g></svg>
</figure>

## c) Volume del solido di rotazione

Sia $R$ la regione delimitata da $\gamma$, dall'asse $x$ e dalle rette $x=0$ e $x=2$. Ruotando $R$ di un giro completo attorno all'asse $x$ si genera un solido di volume

$$V=\pi\int_0^2 [f(x)]^2\,dx=\pi\int_0^2\left(x+\frac12\sqrt{4-x^2}\right)^{2}dx.$$

Sviluppando il quadrato e usando $y^2=1-\dfrac{x^2}{4}$:

$$[f(x)]^2=x^2+y^2+2xy=\left(1+\frac34 x^2\right)+x\sqrt{4-x^2}.$$

Quindi

$$V=\pi\int_0^2\left(1+\frac34 x^2+x\sqrt{4-x^2}\right)dx.$$

Calcoliamo i tre contributi:

$$\int_0^2 1\,dx=2,\qquad \int_0^2\frac34 x^2\,dx=\frac34\cdot\frac{x^3}{3}\Big|_0^2=2,$$

$$\int_0^2 x\sqrt{4-x^2}\,dx=\left[-\frac13(4-x^2)^{3/2}\right]_0^2=0+\frac13\cdot 4^{3/2}=\frac{8}{3}.$$

Sommando:

$$V=\pi\left(2+2+\frac{8}{3}\right)=\pi\cdot\frac{20}{3}=\frac{20}{3}\pi\approx 20{,}944\ u^3.$$

*Fonte:* [📄 PDF p.34](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
