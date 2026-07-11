

**Problema:** [[Problemi/prob_2003_suppletiva_pni_2003_problema1_122_1|2003 Suppletiva PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_problema1_122|2003 Suppletiva PNI — Problema 1]]

Nel piano cartesiano è assegnata la famiglia di parabole $y=(a-1)x^{2}-2ax+a^{2}$, con $a\in\mathbb{R}$, $a\ne 1$.

## a)

**Intersezioni con l'asse $x$.** Imponendo $y=0$ si ottiene l'equazione

$$(a-1)x^{2}-2ax+a^{2}=0,\qquad \frac{\Delta}{4}=a^{2}-a^{2}(a-1)=a^{2}(2-a).$$

La condizione $\Delta\ge 0$ dà $a^{2}(2-a)\ge 0$, cioè $2-a\ge 0$. Tenendo conto di $a\ne 1$, la parabola ha punti in comune con l'asse $x$ se e solo se

$$a\le 2,\qquad a\ne 1.$$

## b)

**Vertice di ascissa $a$.** L'ascissa del vertice è

$$x_{V}=\frac{2a}{2(a-1)}=\frac{a}{a-1}.$$

Imponendo $x_{V}=a$:

$$\frac{a}{a-1}=a \Rightarrow a=a(a-1) \Rightarrow a(a-2)=0 \Rightarrow a=0 \ \text{ oppure } \ a=2.$$

Le due parabole richieste sono quindi

$$a=0:\ y=-x^{2}; \qquad a=2:\ y=x^{2}-4x+4=(x-2)^{2}.$$

## c)

**Studio delle due parabole.**

*Caso $a=0$:* $y=-x^{2}$. Parabola con la concavità verso il basso, vertice $O=(0,0)$, asse di simmetria $x=0$; interseca gli assi solo nell'origine.

*Caso $a=2$:* $y=x^{2}-4x+4=(x-2)^{2}$. Parabola con la concavità verso l'alto, vertice $(2,0)$ (tangente all'asse $x$), asse di simmetria $x=2$, intercetta sull'asse $y$ il punto $(0,4)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="264.117" height="325.651" viewBox="-72 -72 198.088 244.238"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.136 58.64h183.973"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M110.957 56.24c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-4.557" y="58.64" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.327 2.153)">x</text><path fill="none" d="M-4.557 171.312V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.957-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-4.557" y="58.64" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -123.271)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.332 171.568 1.822-7.526 1.823-7.266 1.823-7.007 1.823-6.748 1.823-6.488 1.822-6.228 1.823-5.969 1.823-5.71 1.823-5.45 1.823-5.19 1.822-4.931 1.823-4.671 1.823-4.412 1.823-4.153 1.822-3.893 1.823-3.633 1.823-3.374 1.823-3.115 1.823-2.855 1.822-2.595 1.823-2.336 1.823-2.077 1.823-1.817 1.823-1.557 1.822-1.298 1.823-1.038 1.823-.78 1.823-.52 1.822-.259h1.823l1.823.259 1.823.518 1.823.778 1.822 1.038 1.823 1.297 1.823 1.556 1.823 1.816 1.823 2.076 1.822 2.335 1.823 2.594 1.823 2.854 1.823 3.114 1.822 3.373 1.823 3.633 1.823 3.891 1.823 4.152 1.823 4.41 1.822 4.671 1.823 4.93 1.823 5.19 1.823 5.45 1.822 5.708 1.823 5.968 1.823 6.227 1.823 6.487 1.823 6.747 1.822 7.006 1.823 7.265 1.823 7.526"/><path fill="none" stroke="red" stroke-width=".8" d="m-5.837-48.975 1.78 7.172 1.779 6.925L-.5-28.201l1.78 6.43 1.779 6.183 1.78 5.935 1.779 5.688 1.779 5.441 1.78 5.194 1.779 4.946 1.78 4.7 1.779 4.45 1.78 4.205 1.778 3.957 1.78 3.71 1.78 3.462 1.779 3.216 1.78 2.967 1.779 2.721 1.779 2.473 1.78 2.226 1.779 1.98 1.78 1.73 1.779 1.485 1.779 1.237 1.78.989 1.779.742 1.78.495 1.779.248h1.78l1.779-.247 1.779-.494 1.78-.742 1.779-.989 1.78-1.236 1.779-1.483L60 51.687l1.78-1.978 1.779-2.225 1.78-2.473 1.779-2.72 1.78-2.967 1.778-3.215 1.78-3.462 1.78-3.709 1.779-3.956 1.78-4.204 1.779-4.45 1.779-4.7 1.78-4.945 1.779-5.193 1.78-5.44 1.779-5.688 1.779-5.935 1.78-6.181 1.779-6.43 1.78-6.676 1.779-6.925 1.78-7.17"/><path stroke="none" d="M-3.207 58.64a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="-4.557" y="58.64" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M48.008 58.64a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><g stroke="none" font-size="10"><text x="-4.557" y="58.64" font-family="cmr10" transform="translate(54.748 11.033)">(2</text><text x="4.332" y="58.64" font-family="cmmi10" transform="translate(54.748 11.033)">;</text><text x="8.776" y="58.64" font-family="cmr10" transform="translate(54.748 11.033)">0)</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-4.557" y="58.64" font-family="cmmi10" font-size="10" transform="translate(-64.38 77.359)">y</text><text x="3.482" y="58.64" font-family="cmr10" font-size="10" transform="translate(-64.38 77.359)">=</text><text x="14.038" y="58.64" font-family="cmsy10" font-size="10" transform="translate(-64.38 77.359)">¡</text><text x="21.816" y="58.64" font-family="cmmi10" font-size="10" transform="translate(-64.38 77.359)">x</text><text x="27.531" y="55.011" font-family="cmr7" font-size="7" transform="translate(-64.38 77.359)">2</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-4.557" y="58.64" font-family="cmmi10" font-size="10" transform="translate(65.288 -79.123)">y</text><text x="3.482" y="58.64" font-family="cmr10" font-size="10" transform="translate(65.288 -79.123)">=</text><text x="14.038" y="58.64" font-family="cmr10" font-size="10" transform="translate(65.288 -79.123)">(</text><text x="17.927" y="58.64" font-family="cmmi10" font-size="10" transform="translate(65.288 -79.123)">x</text><text x="25.864" y="58.64" font-family="cmsy10" font-size="10" transform="translate(65.288 -79.123)">¡</text><text x="35.864" y="58.64" font-family="cmr10" font-size="10" transform="translate(65.288 -79.123)">2)</text><text x="44.753" y="55.011" font-family="cmr7" font-size="7" transform="translate(65.288 -79.123)">2</text></g></g></g></svg>
</figure>

## d)

**Luogo geometrico $L$ dei vertici.** L'ordinata del vertice è

$$y_{V}=-\frac{\Delta}{4(a-1)}=-\frac{a^{2}(2-a)}{a-1}=\frac{a^{2}(a-2)}{a-1}.$$

Le equazioni parametriche del luogo sono dunque

$$\begin{cases} x=\dfrac{a}{a-1}\\[2mm] y=\dfrac{a^{2}(a-2)}{a-1} \end{cases}\qquad (a\ne 1).$$

Da $x=\dfrac{a}{a-1}$ si ricava $a=\dfrac{x}{x-1}$ (con $x\ne 1$); sostituendo si ottiene l'equazione cartesiana

$$y=\frac{x^{2}(2-x)}{(x-1)^{2}},\qquad x\ne 1.$$

**Studio di $f(x)=\dfrac{x^{2}(2-x)}{(x-1)^{2}}$.**

- **Dominio:** $x\ne 1$. **Intersezioni con gli assi:** $x=0$ (con $y=0$) e $x=2$.
- **Simmetrie:** visto il dominio, la funzione non è né pari né dispari.
- **Asintoto verticale:** $\displaystyle\lim_{x\to 1}f(x)=+\infty$, quindi $x=1$ è asintoto verticale (destro e sinistro).
- **Asintoto obliquo:** essendo il grado del numeratore superiore di $1$ a quello del denominatore,

$$m=\lim_{x\to\pm\infty}\frac{f(x)}{x}=\lim_{x\to\pm\infty}\frac{-x^{3}}{x^{3}}=-1,\qquad q=\lim_{x\to\pm\infty}\bigl(f(x)+x\bigr)=0,$$

dunque l'asintoto obliquo è $y=-x$. Intersezione con esso: imponendo $f(x)=-x$ si trova solo il punto $(0,0)$.

- **Derivata prima:**

$$f'(x)=\frac{-x(x^{2}-3x+4)}{(x-1)^{3}}.$$

Poiché $x^{2}-3x+4>0$ per ogni $x$ (discriminante negativo), si ha $f'(x)\ge 0 \iff 0\le x<1$. Quindi $f$ è crescente in $[0,1)$ e decrescente in $(-\infty,0]\cup(1,+\infty)$: $x=0$ è punto di **minimo** relativo, con $f(0)=0$.

- **Derivata seconda:**

$$f''(x)=\frac{2(x+2)}{(x-1)^{4}}\ge 0 \iff x\ge -2.$$

Quindi la concavità è rivolta verso l'alto per $x>-2$ (con $x\ne 1$) e verso il basso per $x<-2$: $x=-2$ è punto di **flesso**, con $f(-2)=\dfrac{4\cdot 4}{9}=\dfrac{16}{9}$, cioè $F=\left(-2,\dfrac{16}{9}\right)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="295.529" height="338.776" viewBox="-72 -72 221.646 254.082"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 25.038 68.286)"><clipPath id="pgf8130068fd1ed6aa464233541baf00558cp1"><path d="M-97.308-113.526v254.082h221.646v-254.082Zm221.646 254.082"/></clipPath><g clip-path="url(#pgf8130068fd1ed6aa464233541baf00558cp1)"><path fill="none" d="M-97.308 0h221.246"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M122.058 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="25.038" y="68.286" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 102.833 66.133)">x</text><path fill="none" d="M0-113.526v253.682"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 138.276c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="25.038" y="68.286" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -27.669 214.32)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M27.03-113.526v254.082"/><g stroke="none" font-size="10"><text x="25.038" y="68.286" font-family="cmmi10" transform="matrix(1 0 0 -1 5.525 212.375)">x</text><text x="33.531" y="68.286" font-family="cmr10" transform="matrix(1 0 0 -1 5.525 212.375)">=</text><text x="44.087" y="68.286" font-family="cmr10" transform="matrix(1 0 0 -1 5.525 212.375)">1</text></g></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="m-97.308 97.308 221.646-221.646"/><g fill="gray" stroke="none" font-size="10"><text x="25.038" y="68.286" font-family="cmmi10" transform="matrix(1 0 0 -1 102.833 -57.997)">y</text><text x="33.078" y="68.286" font-family="cmr10" transform="matrix(1 0 0 -1 102.833 -57.997)">=</text><text x="43.633" y="68.286" font-family="cmsy10" transform="matrix(1 0 0 -1 102.833 -57.997)">¡</text><text x="51.411" y="68.286" font-family="cmmi10" transform="matrix(1 0 0 -1 102.833 -57.997)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-97.308 92.71 1.013-1.04 1.013-1.04 1.013-1.042 1.013-1.04 1.013-1.042 1.013-1.041 1.013-1.043 1.013-1.041 1.012-1.043 1.013-1.043 1.013-1.043 1.013-1.043 1.013-1.044 1.013-1.043 1.013-1.045 1.013-1.044 1.013-1.045 1.013-1.045 1.013-1.045 1.013-1.046 1.013-1.046 1.013-1.046 1.013-1.047 1.013-1.046 1.013-1.048 1.013-1.047 1.013-1.048 1.013-1.047 1.013-1.049 1.013-1.048 1.013-1.049 1.013-1.049 1.013-1.049 1.013-1.05 1.013-1.05 1.013-1.049 1.013-1.05 1.012-1.05 1.013-1.05 1.013-1.05 1.013-1.05 1.013-1.051 1.013-1.05 1.013-1.051 1.013-1.05 1.013-1.05 1.013-1.05 1.013-1.05 1.013-1.051 1.013-1.05 1.013-1.048 1.013-1.049 1.013-1.048 1.013-1.048 1.013-1.046 1.013-1.046 1.013-1.045 1.013-1.044 1.013-1.042 1.013-1.041 1.013-1.04 1.013-1.037 1.013-1.036 1.013-1.034 1.013-1.03 1.013-1.029 1.013-1.024 1.012-1.021 1.013-1.017 1.013-1.013 1.013-1.006 1.013-1.002 1.013-.995 1.013-.988 1.013-.98 1.013-.971 1.013-.961 1.013-.95 1.013-.937 1.013-.923 1.013-.906 1.013-.888 1.013-.867 1.013-.847 1.013-.816 1.013-.79 1.013-.753 1.013-.714 1.013-.668 1.013-.619 1.013-.56 1.013-.488 1.013-.409L-2.09.287l1.013-.209L-.063 0 .949.07l1.013.248 1.013.463 1.013.718 1.013 1.028 1.013 1.407 1.013 1.87L8.04 8.248l1.013 3.165 1.013 4.076 1.013 5.246 1.013 6.764 1.013 8.775 1.013 11.478 1.013 15.195 1.013 20.44 1.013 28.064 1.013 39.49 1.013 57.507 1.013 87.305 1.013 140.407 1.013 244.148 1.013 475.274M30.814 1542.11l.786-468.057.786-281.346.785-183.274.786-126.313.786-91.057.785-68.178.786-52.376.786-41.285.786-33.22.785-27.173.786-22.605.786-19.048.785-16.225.786-13.99.786-12.173.786-10.673.785-9.45.786-8.416.786-7.551.785-6.81.786-6.184.786-5.641.785-5.175.786-4.767.786-4.409.786-4.095.785-3.82.786-3.572.786-3.354.785-3.157.786-2.987.786-2.824.786-2.687.785-2.56.786-2.435.786-2.338.785-2.236.786-2.151.786-2.068.786-1.995.785-1.927.786-1.863.786-1.805.785-1.752.786-1.7.786-1.657.786-1.612.785-1.574.786-1.534.786-1.5.785-1.468.786-1.438.786-1.408.785-1.381.786-1.357.786-1.333.786-1.311.785-1.29.786-1.27.786-1.251.785-1.233.786-1.217.786-1.2.786-1.186.785-1.17.786-1.159.786-1.145.785-1.133.786-1.12.786-1.11.785-1.1.786-1.09.786-1.08.786-1.07.785-1.061.786-1.053.786-1.046.785-1.038.786-1.03.786-1.024.786-1.016.785-1.01.786-1.003.786-.999.785-.991.786-.987.786-.98.786-.978.785-.97.786-.967.786-.962.785-.958.786-.953.786-.95.785-.944.786-.942.786-.938.786-.934.785-.93.786-.928.786-.925.785-.92.786-.92.786-.914.786-.913.785-.91.786-.907.786-.905.785-.902.786-.9.786-.897.786-.895.785-.893.786-.89.786-.89.785-.886.786-.885.786-.883.785-.88"/><path stroke="none" d="M1.425 0a1.425 1.425 0 1 1-2.85 0 1.425 1.425 0 0 1 2.85 0M0 0"/><text x="25.038" y="68.286" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -21.505 57.92)">O</text><path stroke="none" d="M55.485 0a1.425 1.425 0 1 1-2.85 0 1.425 1.425 0 0 1 2.85 0M54.06 0"/><g stroke="none" font-size="10"><text x="25.038" y="68.286" font-family="cmr10" transform="matrix(1 0 0 -1 32.555 74.319)">(2</text><text x="33.927" y="68.286" font-family="cmmi10" transform="matrix(1 0 0 -1 32.555 74.319)">;</text><text x="38.372" y="68.286" font-family="cmr10" transform="matrix(1 0 0 -1 32.555 74.319)">0)</text></g><path stroke="none" d="M-52.635 48.032a1.425 1.425 0 1 1-2.85 0 1.425 1.425 0 0 1 2.85 0m-1.425 0"/><text x="25.038" y="68.286" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -90.45 119.851)">F</text></g></g></svg>
</figure>

## e)

**Area fra $L$ e la retta $y=\dfrac{3}{2}$.** Cerchiamo le intersezioni:

$$\frac{x^{2}(2-x)}{(x-1)^{2}}=\frac{3}{2} \Rightarrow 2x^{2}(2-x)=3(x-1)^{2} \Rightarrow 2x^{3}-x^{2}-6x+3=0.$$

Fattorizzando, $(2x-1)(x^{2}-3)=0$, da cui $x=\dfrac{1}{2}$ e $x=\pm\sqrt{3}$. Gli estremi della regione finita (l'arco di $L$ situato sotto la retta, sul ramo di sinistra) sono $A=\left(-\sqrt{3},\dfrac{3}{2}\right)$ e $B=\left(\dfrac{1}{2},\dfrac{3}{2}\right)$:

$$\text{Area}=\int_{-\sqrt{3}}^{1/2}\left[\frac{3}{2}-\frac{x^{2}(2-x)}{(x-1)^{2}}\right]dx=\frac{1}{2}\int_{-\sqrt{3}}^{1/2}\frac{2x^{3}-x^{2}-6x+3}{x^{2}-2x+1}\,dx.$$

Eseguendo la divisione, $\dfrac{2x^{3}-x^{2}-6x+3}{x^{2}-2x+1}=2x+3-\dfrac{2x}{(x-1)^{2}}$, e poi $\dfrac{2x}{(x-1)^{2}}=\dfrac{2}{x-1}+\dfrac{2}{(x-1)^{2}}$, quindi

$$\text{Area}=\frac{1}{2}\left[x^{2}+3x+\frac{2}{x-1}-2\ln|x-1|\right]_{-\sqrt{3}}^{1/2}=\ln(\sqrt{3}+1)+\ln 2+2\sqrt{3}-\frac{25}{8}\approx 2{,}04 \ \text{u.d.a.}$$

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
