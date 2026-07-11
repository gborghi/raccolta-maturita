

**Problema:** [[Problemi/prob_2001_suppletiva_ordinamento_2001_problema1_22_1|2001 Suppletiva Ordinamento — Problema 1 — Problema 1]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_problema1_22|2001 Suppletiva Ordinamento — Problema 1]]

Si consideri la funzione reale di variabile reale
$$
f_m(x) = \frac{x^2}{|x-2m| + m},
$$
dove $m$ è un parametro reale non nullo.

## a) Dominio, continuità e derivabilità

Analizziamo il denominatore $|x-2m| + m$. Poiché $|x-2m| \ge 0$, il denominatore si annulla soltanto se $|x-2m| = -m$, condizione possibile solo quando $m < 0$. In tal caso i punti da escludere sono
$$
x = 2m \pm |m| = 2m \pm (-m), \qquad \text{cioè } x = m \ \text{ e } \ x = 3m,
$$
entrambi negativi quando $m < 0$. Se invece $m > 0$ il denominatore è sempre strettamente positivo.

Trattandosi di una funzione razionale fratta, l'insieme di continuità coincide con quello di definizione. Riassumendo:

- se $m > 0$: dominio e insieme di continuità $= \mathbb{R}$;
- se $m < 0$: dominio e insieme di continuità $= \mathbb{R} \setminus \{m,\, 3m\}$ (in $m$ e $3m$ vi sono discontinuità di seconda specie, con limiti infiniti).

Per la derivabilità, la presenza del valore assoluto introduce un possibile punto di non derivabilità in $x = 2m$, dove $|x-2m|$ non è derivabile. In $x = 2m$ la funzione è comunque continua, ma le derivate laterali in generale non coincidono, quindi $x = 2m$ è un punto angoloso. Perciò:

- se $m > 0$: la funzione è derivabile su $\mathbb{R} \setminus \{2m\}$;
- se $m < 0$: la funzione è derivabile su $\mathbb{R} \setminus \{m,\, 2m,\, 3m\}$.

## b) Studio di $C_1$ per $m=1$

Con $m = 1$ la funzione diventa
$$
f(x) = \frac{x^2}{|x-2| + 1},
$$
definita su tutto $\mathbb{R}$; il punto critico è $x = 2$. Esplicitando il valore assoluto:
$$
f(x) = \begin{cases} \dfrac{x^2}{x-1} & \text{se } x \ge 2, \\[6pt] \dfrac{x^2}{3-x} & \text{se } x < 2. \end{cases}
$$

**Simmetrie e segno.** La funzione non è né pari né dispari. Il numeratore $x^2$ non è mai negativo e si annulla solo per $x = 0$, mentre il denominatore è sempre positivo: dunque $f(x) \ge 0$ ovunque, con $f(x) = 0$ solo per $x = 0$. L'unica intersezione con gli assi è l'origine.

**Limiti e asintoti.** Per $x \to +\infty$ si usa il ramo $\dfrac{x^2}{x-1} = x + 1 + \dfrac{1}{x-1}$, quindi
$$
\lim_{x \to +\infty} f(x) = +\infty, \qquad \text{asintoto obliquo } y = x + 1.
$$
Per $x \to -\infty$ si usa il ramo $\dfrac{x^2}{3-x} \sim -x \to +\infty$; il coefficiente angolare è $m = -1$ e
$$
q = \lim_{x \to -\infty}\left(\frac{x^2}{3-x} + x\right) = \lim_{x \to -\infty}\frac{3x}{3-x} = -3,
$$
quindi si ha l'asintoto obliquo $y = -x - 3$.

**Punto $A$ di ascissa $2$.** Risulta $f(2) = \dfrac{4}{|2-2|+1} = 4$, dunque $A = (2,\,4)$. Calcoliamo le derivate laterali. Per $x \ge 2$:
$$
f'(x) = \frac{2x(x-1) - x^2}{(x-1)^2} = \frac{x^2 - 2x}{(x-1)^2}, \qquad f'(2^+) = \frac{4-4}{1} = 0.
$$
Per $x < 2$:
$$
f'(x) = \frac{2x(3-x) + x^2}{(3-x)^2} = \frac{6x - x^2}{(3-x)^2}, \qquad f'(2^-) = \frac{12-4}{1} = 8.
$$
Poiché $f'(2^-) = 8 \ne 0 = f'(2^+)$, il punto $A = (2,4)$ è un **punto angoloso** (semitangente sinistra di coefficiente $8$, destra di coefficiente $0$).

**Monotonia.** Per $x > 2$ si ha $f'(x) \ge 0 \iff x^2 - 2x \ge 0$, verificata per $x \ge 2$: la funzione è quindi sempre crescente. Per $x < 2$ si ha $f'(x) \ge 0 \iff 6x - x^2 \ge 0 \iff 0 \le x \le 6$: la funzione è crescente per $0 < x < 2$ e decrescente per $x < 0$. Perciò $x = 0$ è punto di minimo relativo e assoluto, con $f(0) = 0$.

**Concavità.** La derivata seconda vale
$$
f''(x) = \frac{2}{(x-1)^3} \ \text{se } x > 2, \qquad f''(x) = -\frac{18}{(3-x)^3} \ \text{se } x < 2.
$$
Per $x > 2$ risulta $(x-1)^3 > 0$, quindi la concavità è rivolta verso l'alto; per $x < 2$ si ha $(3-x)^3 > 0$ e il segno $-$ va compensato, dando anch'esso concavità verso l'alto. La curva volge dunque la concavità verso l'alto su entrambi i rami.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="279.02" height="171.643" viewBox="-72 -72 209.265 128.733"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-49.862 44.13h173.876"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M122.134 41.73c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><g fill="#000" stroke="#000"><text x="19.848" y="44.13" stroke="none" font-family="cmmi10" font-size="10" transform="translate(108.099 2.153)">x</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M19.848 50.39V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M17.448-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><g fill="#000" stroke="#000"><text x="19.848" y="44.13" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -108.761)">y</text></g></g><path fill="none" stroke="gray" d="M-39.904 46.008v-3.756M-19.986 46.008v-3.756M-.07 46.008v-3.756M39.765 46.008v-3.756M59.683 46.008v-3.756M79.6 46.008v-3.756M99.517 46.008v-3.756M119.434 46.008v-3.756"/><g fill="gray" stroke="gray"><path fill="none" d="M16.86 19.091h5.976"/><g fill="#000" stroke="#000"><text x="19.848" y="44.13" stroke="none" font-family="cmr8" font-size="8" transform="translate(-4.795 -22.46)">4</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M16.86-5.947h5.976"/><g fill="#000" stroke="#000"><text x="19.848" y="44.13" stroke="none" font-family="cmr8" font-size="8" transform="translate(-4.795 -47.5)">8</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M16.86-30.986h5.976"/><g fill="#000" stroke="#000"><text x="19.848" y="44.13" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.045 -72.538)">12</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M16.86-56.024h5.976"/><g fill="#000" stroke="#000"><text x="19.848" y="44.13" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.045 -97.576)">16</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-43.887 16.854 1.41.794 1.409.792 1.41.788 1.409.785 1.409.783 1.41.778 1.409.775 1.41.771 1.409.768 1.409.763 1.41.758 1.409.754 1.41.749 1.408.744 1.41.738 1.41.732 1.409.727 1.41.72 1.408.712 1.41.705 1.41.697 1.409.688 1.41.68 1.408.67 1.41.659 1.41.648 1.409.636 1.41.623 1.408.61 1.41.593 1.41.577 1.409.56 1.41.54 1.408.518 1.41.495 1.41.47 1.409.44 1.41.41 1.408.375 1.41.337 1.41.293 1.409.244 1.41.19 1.408.128 1.41.057 1.41-.024 1.409-.118 1.409-.227 1.41-.355 1.409-.506 1.41-.686 1.409-.905 1.409-1.17 1.41-1.504 1.409-1.92 1.41-2.46 1.409-3.17 1.409-4.134 1.41-5.488M40.263 19.077l1.258-.15 1.257-.275 1.258-.366 1.257-.435 1.258-.487 1.257-.53 1.257-.565 1.258-.592 1.257-.615 1.258-.634 1.257-.65 1.258-.665 1.257-.676 1.258-.686 1.257-.695 1.257-.703 1.258-.71 1.257-.716 1.258-.721 1.257-.727 1.258-.73 1.257-.735 1.257-.738 1.258-.741 1.257-.744 1.258-.748 1.257-.75 1.258-.75 1.257-.754 1.258-.756 1.257-.758 1.257-.759 1.258-.76 1.257-.762 1.258-.764 1.257-.764L86.79-5.3l1.257-.767 1.258-.768 1.257-.768 1.257-.77 1.258-.77 1.257-.772 1.258-.771 1.257-.773 1.258-.773 1.257-.774 1.258-.775 1.257-.775 1.257-.775 1.258-.776 1.257-.777 1.258-.777 1.257-.777 1.258-.778 1.257-.778 1.258-.779 1.257-.779 1.257-.779"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="m29.807 31.61 84.648-53.206"/><path fill="none" stroke="#008c00" stroke-dasharray="3.0,3.0" d="M-39.904 19.091h79.67"/><path stroke="none" d="M40.465 19.091c0-.243-.313-.44-.7-.44s-.7.197-.7.44.314.44.7.44c.387 0 .7-.197.7-.44m-.7 0"/><g stroke="none" font-size="8"><text x="19.848" y="44.13" font-family="cmmi8" transform="translate(-20.205 -30.572)">A</text><text x="28.576" y="44.13" font-family="cmr8" transform="translate(-20.205 -30.572)">=</text><text x="37.548" y="44.13" font-family="cmr8" transform="translate(-20.205 -30.572)">(2</text><text x="45.104" y="44.13" font-family="cmmi8" transform="translate(-20.205 -30.572)">;</text><text x="48.882" y="44.13" font-family="cmr8" transform="translate(-20.205 -30.572)">4)</text></g><path stroke="none" d="M-39.204 19.091c0-.243-.313-.44-.7-.44s-.7.197-.7.44.314.44.7.44c.387 0 .7-.197.7-.44m-.7 0"/><g stroke="none" font-size="8"><text x="19.848" y="44.13" font-family="cmr8" transform="translate(-88.785 -30.572)">(</text><text x="23.154" y="44.13" font-family="cmsy8" transform="translate(-88.785 -30.572)">¡</text><text x="29.765" y="44.13" font-family="cmr8" transform="translate(-88.785 -30.572)">6</text><text x="34.015" y="44.13" font-family="cmmi8" transform="translate(-88.785 -30.572)">;</text><text x="37.793" y="44.13" font-family="cmr8" transform="translate(-88.785 -30.572)">4)</text></g><path stroke="none" d="M20.548 44.13c0-.243-.313-.44-.7-.44s-.7.197-.7.44.314.44.7.44c.387 0 .7-.197.7-.44m-.7 0"/><text x="19.848" y="44.13" stroke="none" font-family="cmmi8" font-size="8" transform="translate(3.533 9)">O</text><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="8"><text x="19.848" y="44.13" font-family="cmmi8" transform="translate(62.046 -76.445)">y</text><text x="26.698" y="44.13" font-family="cmr8" transform="translate(62.046 -76.445)">=</text><text x="35.67" y="44.13" font-family="cmmi8" transform="translate(62.046 -76.445)">x</text><text x="42.344" y="44.13" font-family="cmr8" transform="translate(62.046 -76.445)">+</text><text x="50.844" y="44.13" font-family="cmr8" transform="translate(62.046 -76.445)">1</text></g></g></g></svg>
</figure>

## c) Area della regione delimitata da $C_1$ e dalla retta per $A$

La retta parallela all'asse $x$ condotta per $A$ ha equazione $y = 4$. Cerchiamo le sue intersezioni con $C_1$.

Per $x \ge 2$: $\dfrac{x^2}{x-1} = 4 \Rightarrow x^2 - 4x + 4 = 0 \Rightarrow (x-2)^2 = 0$, cioè $x = 2$ (il punto $A$ stesso: la retta è tangente al ramo destro).

Per $x < 2$: $\dfrac{x^2}{3-x} = 4 \Rightarrow x^2 + 4x - 12 = 0 \Rightarrow x = \dfrac{-4 \pm 8}{2}$, da cui $x = 2$ (escluso) e $x = -6$. Il punto $B$ ha quindi ascissa $-6$.

La regione finita è compresa fra $x = -6$ e $x = 2$, delimitata in alto dalla retta $y = 4$ e in basso dalla curva $f(x) = \dfrac{x^2}{3-x}$:
$$
S = \int_{-6}^{2}\left(4 - \frac{x^2}{3-x}\right)dx.
$$
Effettuando la divisione, $\dfrac{x^2}{3-x} = -x - 3 + \dfrac{9}{3-x}$, quindi
$$
4 - \frac{x^2}{3-x} = x + 7 - \frac{9}{3-x}.
$$
Integrando:
$$
S = \left[\frac{x^2}{2} + 7x + 9\ln|3-x|\right]_{-6}^{2} = (2 + 14 + 9\ln 1) - (18 - 42 + 9\ln 9) = 40 - 9\ln 9.
$$

L'area richiesta vale dunque
$$
S = 40 - 9\ln 9 \cong 20{,}22 \ \text{u}^2.
$$

*Fonte:* [📄 PDF p.22](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
