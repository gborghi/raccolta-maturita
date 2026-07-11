

**Problema:** [[Problemi/prob_2006_scuole_italiane_allestero_americhe_2006_sessione_o_problema2_18_1|2006 Estero Americhe — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_americhe_2006_sessione_o_problema2_18|2006 Estero Americhe — Problema 2]]

Nel piano cartesiano $(Oxy)$ è assegnata la parabola $p'$ di equazione $y=ax^2$, con $a$ reale positivo.

## a)

Il fuoco della parabola $y=ax^2$, che si scrive $x^2=\frac{1}{a}\,y$, ha coordinate
$$F=\left(0,\ \frac{1}{4a}\right).$$

Una generica retta $t$ per $F$, di pendenza $k$, ha equazione
$$y=kx+\frac{1}{4a}.$$

Le ascisse dei punti $A$ e $B$ in cui $t$ interseca $p'$ si ottengono da
$$ax^2=kx+\frac{1}{4a}\quad\Rightarrow\quad ax^2-kx-\frac{1}{4a}=0.$$

Per questa equazione di secondo grado la somma delle radici è $x_1+x_2=\frac{k}{a}$, quindi l'ascissa del punto medio $M$ del segmento $AB$ è
$$x_M=\frac{x_1+x_2}{2}=\frac{k}{2a}.$$

Poiché $M$ appartiene alla retta $t$, la sua ordinata è
$$y_M=k\cdot x_M+\frac{1}{4a}=\frac{k^2}{2a}+\frac{1}{4a}.$$

Le funzioni cercate sono dunque
$$x(k)=\frac{k}{2a},\qquad y(k)=\frac{k^2}{2a}+\frac{1}{4a}.$$

## b)

Dalla prima relazione si ricava $k=2ax$; sostituendo nella seconda:
$$y=\frac{(2ax)^2}{2a}+\frac{1}{4a}=2ax^2+\frac{1}{4a}.$$

Il luogo geometrico di $M$ è quindi la parabola
$$p'':\ y=2ax^2+\frac{1}{4a}.$$

## c)

Nell'intervallo $[0,\,2a]$ la parabola $p''$ sta sopra $p'$, poiché
$$\left(2ax^2+\frac{1}{4a}\right)-ax^2=ax^2+\frac{1}{4a}>0.$$

L'area della regione $R$ delimitata da $p'$, $p''$ e dalle rette $x=0$, $x=2a$ è
$$A=\int_0^{2a}\left(ax^2+\frac{1}{4a}\right)dx=\left[\frac{a}{3}x^3+\frac{1}{4a}x\right]_0^{2a}=\frac{a}{3}(2a)^3+\frac{1}{4a}(2a).$$

Svolgendo i calcoli:
$$A=\frac{8a^4}{3}+\frac{1}{2}.$$

## d)

Imponiamo $A=\frac{13}{24}$:
$$\frac{8a^4}{3}+\frac{1}{2}=\frac{13}{24}\quad\Rightarrow\quad \frac{8a^4}{3}=\frac{1}{24}\quad\Rightarrow\quad a^4=\frac{1}{64}.$$

Essendo $a>0$ si ottiene
$$a=\frac{1}{2\sqrt{2}}=\frac{\sqrt{2}}{4}.$$

Per tale valore le due parabole diventano
$$f(x)=\frac{\sqrt{2}}{4}\,x^2,\qquad g(x)=\frac{\sqrt{2}}{2}\,x^2+\frac{\sqrt{2}}{2},$$
dove si è usato $\frac{1}{4a}=\frac{1}{4\cdot\frac{\sqrt{2}}{4}}=\frac{1}{\sqrt{2}}=\frac{\sqrt{2}}{2}$, e l'estremo destro è $x=2a=\frac{\sqrt{2}}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="183.964" height="149.752" viewBox="-72 -72 137.973 112.314"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 25.35H52.722"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M50.842 22.95c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-9.474" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.129 2.153)">x</text><path fill="none" d="M-9.474 31.61v-90.364"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-11.874-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-9.474" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -89.982)">y</text><path fill="#d9d9ff" fill-opacity=".7" stroke="none" stroke-opacity=".7" d="m-9.474 25.35 1.135-.006 1.134-.022 1.135-.036 1.135-.05 1.134-.067 1.135-.08 1.135-.094 1.135-.11 1.134-.123 1.135-.138 1.135-.153 1.134-.167 1.135-.181 1.135-.197 1.134-.211 1.135-.226 1.135-.24 1.135-.254 1.134-.269 1.135-.284 1.135-.298 1.134-.312 1.135-.328 1.135-.341 1.135-.357 1.134-.37 1.135-.386 1.135-.4 1.134-.414 1.135-.43 1.135-.443 1.134-.458 1.135-.473 1.135-.487 1.135-.502 1.134-.517 1.135-.53 1.135-.545 1.134-.56.009-55.333m0 0-1.135 1.12-1.134 1.092-1.135 1.062-1.135 1.033-1.135 1.004-1.134.974-1.135.946-1.135.917-1.134.887-1.135.859-1.135.829-1.134.799-1.135.772-1.135.742-1.135.712-1.134.684-1.135.655-1.135.625-1.134.597-1.135.568-1.135.538-1.135.51-1.134.479-1.135.452-1.135.422-1.134.392-1.135.364-1.135.335-1.134.306-1.135.276-1.135.248-1.135.218-1.134.19-1.135.16-1.135.13-1.134.103-1.135.073-1.135.043-1.134.015Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-68.94 5.379 2.015 1.33 2.016 1.286 2.015 1.239 2.015 1.193 2.016 1.147 2.015 1.101 2.015 1.057 2.016 1.01 2.015.963 2.015.918 2.016.872 2.015.826 2.015.78 2.016.734 2.015.689 2.015.642 2.016.597 2.015.551 2.016.505 2.015.46 2.015.413 2.016.367 2.015.321 2.015.276 2.016.23 2.015.183 2.015.139 2.016.091 2.015.046 2.015.001 2.016-.046 2.015-.091 2.015-.137 2.016-.183 2.015-.23 2.015-.275 2.016-.32 2.015-.367 2.015-.413 2.016-.459 2.015-.504 2.015-.55 2.016-.596 2.015-.642 2.015-.688 2.016-.734 2.015-.78 2.015-.825 2.016-.872 2.015-.917 2.015-.962 2.016-1.01 2.015-1.055 2.015-1.1 2.016-1.147 2.015-1.193 2.015-1.239 2.016-1.283 2.015-1.331"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-9.474" y="25.351" font-family="cmmi10" font-size="10" transform="translate(52.418 -23.503)">p</text><text x="-4.443" y="21.722" font-family="cmsy7" font-size="7" transform="translate(52.418 -23.503)">0</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-54.543-41.856 1.527 1.529 1.527 1.476 1.528 1.423 1.527 1.371 1.527 1.318 1.527 1.265 1.528 1.213 1.527 1.16 1.527 1.106 1.527 1.056 1.528 1 1.527.95 1.527.897 1.528.843 1.527.791 1.527.739 1.527.685 1.528.633 1.527.58 1.527.528 1.527.474 1.528.423 1.527.37 1.527.315 1.527.265 1.528.211 1.527.159 1.527.106 1.528.052 1.527.001 1.527-.052 1.527-.106 1.528-.157 1.527-.21 1.527-.263 1.527-.316 1.528-.368 1.527-.421 1.527-.474 1.527-.526 1.528-.58 1.527-.631 1.527-.685 1.527-.737 1.528-.79 1.527-.843 1.527-.895 1.528-.948 1.527-1.001 1.527-1.054 1.527-1.106 1.528-1.158 1.527-1.211 1.527-1.265 1.527-1.317 1.528-1.37 1.527-1.422 1.527-1.475 1.527-1.528"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-9.474" y="25.351" font-family="cmmi10" font-size="10" transform="translate(39.998 -71.076)">p</text><text x="-4.443" y="21.722" font-family="cmsy7" font-size="7" transform="translate(39.998 -71.076)">00</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M34.788 25.35v-66.392"/><g stroke="none" font-size="10"><text x="-9.474" y="25.351" font-family="cmmi10" transform="translate(29.595 11.36)">x</text><text x="-.981" y="25.351" font-family="cmr10" transform="translate(29.595 11.36)">=</text><text x="9.574" y="25.351" font-family="cmr10" transform="translate(29.595 11.36)">2</text><text x="14.574" y="25.351" font-family="cmmi10" transform="translate(29.595 11.36)">a</text></g><path stroke="none" d="M-8.222-18.911a1.252 1.252 0 1 0-2.504 0 1.252 1.252 0 0 0 2.504 0m-1.252 0"/><text x="-9.474" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.352 -40.845)">F</text><text x="-9.474" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(18.7 -35.392)">R</text></g></svg>
</figure>

Il volume del solido generato dalla rotazione di $R$ attorno all'asse $y$ si calcola comodamente con il metodo dei gusci cilindrici:
$$V=2\pi\int_0^{\sqrt{2}/2} x\,[\,g(x)-f(x)\,]\,dx.$$

La differenza delle due funzioni è
$$g(x)-f(x)=\left(\frac{\sqrt{2}}{2}-\frac{\sqrt{2}}{4}\right)x^2+\frac{\sqrt{2}}{2}=\frac{\sqrt{2}}{4}x^2+\frac{\sqrt{2}}{2},$$
quindi
$$V=2\pi\int_0^{\sqrt{2}/2}\left(\frac{\sqrt{2}}{4}x^3+\frac{\sqrt{2}}{2}x\right)dx=2\pi\left[\frac{\sqrt{2}}{16}x^4+\frac{\sqrt{2}}{4}x^2\right]_0^{\sqrt{2}/2}.$$

Poiché $x=\frac{\sqrt{2}}{2}$ dà $x^2=\frac{1}{2}$ e $x^4=\frac{1}{4}$:
$$V=2\pi\left(\frac{\sqrt{2}}{16}\cdot\frac{1}{4}+\frac{\sqrt{2}}{4}\cdot\frac{1}{2}\right)=2\pi\left(\frac{\sqrt{2}}{64}+\frac{\sqrt{2}}{8}\right)=2\pi\cdot\frac{9\sqrt{2}}{64}.$$

In definitiva
$$V=\frac{9}{32}\,\pi\sqrt{2}\ \ \text{u}^3.$$

*Fonte:* [📄 PDF p.18](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/geometria #cluster/geometria
