

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_5|2003 Ordinaria — Prova (Ordinamento) — Quesito 5]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Si consideri la funzione
$$ f(x) = 2x^3 - 3x^2 + 2. $$
Si vuole dimostrare che il suo grafico interseca l'asse delle ascisse una sola volta (cioè che $f$ ha un unico zero reale) e stabilire se tale zero è positivo o negativo.

## Studio della monotonia

La funzione è un polinomio, quindi è continua e derivabile su tutto $\mathbb{R}$. Calcoliamo la derivata prima:
$$ f'(x) = 6x^2 - 6x = 6x(x-1). $$

Si ha $f'(x) = 0$ per $x = 0$ e $x = 1$. Studiando il segno di $f'$:

$$
\begin{cases}
f'(x) > 0 & \text{per } x < 0 \ \text{oppure}\ x > 1,\\[2pt]
f'(x) < 0 & \text{per } 0 < x < 1.
\end{cases}
$$

Dunque $f$ è crescente su $(-\infty,0)$, decrescente su $(0,1)$ e nuovamente crescente su $(1,+\infty)$. Il punto $x=0$ è un massimo relativo, il punto $x=1$ è un minimo relativo.

## Unicità dello zero

Calcoliamo i valori della funzione nei due punti stazionari:
$$ f(0) = 2, \qquad f(1) = 2 - 3 + 2 = 1. $$

Il valore del massimo relativo è $2 > 0$ e quello del minimo relativo è $1 > 0$: entrambi gli estremi relativi sono **positivi**.

Poiché il coefficiente del termine di grado massimo è positivo, si ha inoltre
$$ \lim_{x\to -\infty} f(x) = -\infty, \qquad \lim_{x\to +\infty} f(x) = +\infty. $$

Ragioniamo sul grafico intervallo per intervallo:

- Su $(-\infty,0)$ la funzione cresce con continuità da $-\infty$ fino a $f(0)=2$: per il teorema degli zeri (o dei valori intermedi), essendo strettamente crescente, essa attraversa il valore $0$ **una e una sola volta**.
- Su $(0,1)$ la funzione decresce da $2$ a $1$, restando quindi sempre positiva: nessuno zero.
- Su $(1,+\infty)$ la funzione cresce da $1$ a $+\infty$, restando sempre positiva: nessuno zero.

Complessivamente il grafico interseca l'asse delle ascisse **una sola volta**: la funzione ha un unico zero reale.

## Segno dello zero

Lo zero cade nell'intervallo in cui $f$ passa da valori negativi al massimo relativo $f(0)=2$, cioè per $x<0$. Verifichiamolo con un cambiamento di segno:
$$ f(-1) = -2 - 3 + 2 = -3 < 0, \qquad f(0) = 2 > 0. $$

Poiché $f(-1)<0$ e $f(0)>0$ e la funzione è continua e crescente su $(-1,0)$, lo zero è compreso tra $-1$ e $0$ (numericamente $x \approx -0{,}68$).

Lo **zero della funzione è quindi negativo**.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="262.113" height="230.582" viewBox="-72 -72 196.585 172.937"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 44.13h183.404"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M109.454 41.73c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-4.353" y="44.13" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(119.62 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-4.353 100.467V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.753-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-4.353" y="44.13" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -108.762)">y</text></g><path fill="none" d="M-52.722 45.695v-3.13"/><g stroke="none" font-size="10"><text x="-4.353" y="44.13" font-family="cmsy10" transform="translate(-54.758 11.412)">¡</text><text x="3.425" y="44.13" font-family="cmr10" transform="translate(-54.758 11.412)">1</text></g><path fill="none" d="M44.017 45.695v-3.13"/><text x="-4.353" y="44.13" stroke="none" font-family="cmr10" font-size="10" transform="translate(45.87 11.412)">1</text><path fill="none" d="M92.386 45.695v-3.13"/><text x="-4.353" y="44.13" stroke="none" font-family="cmr10" font-size="10" transform="translate(94.24 11.412)">2</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-52.722 91.077 2.459-9.188 2.459-8.485 2.46-7.805 2.458-7.151 2.46-6.522 2.459-5.917 2.46-5.338 2.458-4.78 2.46-4.253 2.459-3.744 2.459-3.264 2.46-2.807 2.458-2.375 2.46-1.968 2.459-1.585 2.459-1.227 2.46-.894 2.458-.586 2.46-.301 2.459-.042 2.46.192 2.458.402 2.46.588 2.459.747 2.459.884 2.46.995 2.458 1.08 2.46 1.144 2.459 1.18 2.46 1.192 2.458 1.18 2.46 1.143 2.459 1.082 2.459.995 2.46.885 2.458.748 2.46.589 2.459.403 2.46.193 2.458-.04 2.46-.3 2.459-.584 2.459-.892 2.46-1.225 2.458-1.583 2.46-1.966 2.459-2.372L65.32 16.7l2.46-3.26 2.458-3.743 2.46-4.247L75.157.67l2.46-5.333 2.458-5.913 2.46-6.519 2.459-7.147 2.459-7.801 2.46-8.48 2.458-9.184"/><path stroke="none" d="M-1.973 12.832c0-.425-1.065-.77-2.38-.77s-2.38.345-2.38.77 1.066.77 2.38.77c1.315 0 2.38-.345 2.38-.77m-2.38 0"/><g stroke="none" font-size="10"><text x="-4.353" y="44.13" font-family="cmr10" transform="translate(3.533 -37.331)">(0</text><text x="4.536" y="44.13" font-family="cmmi10" transform="translate(3.533 -37.331)">;</text><text x="10.647" y="44.13" font-family="cmr10" transform="translate(3.533 -37.331)">2)</text></g><path stroke="none" d="M46.397 28.48c0-.424-1.066-.769-2.38-.769-1.315 0-2.38.345-2.38.77s1.065.77 2.38.77 2.38-.345 2.38-.77m-2.38 0"/><g stroke="none" font-size="10"><text x="-4.353" y="44.13" font-family="cmr10" transform="translate(51.903 -21.682)">(1</text><text x="4.536" y="44.13" font-family="cmmi10" transform="translate(51.903 -21.682)">;</text><text x="10.647" y="44.13" font-family="cmr10" transform="translate(51.903 -21.682)">1)</text></g><g fill="red" stroke="red"><path stroke="none" d="M-34.524 44.13c0-.486-1.218-.88-2.72-.88s-2.72.394-2.72.88 1.218.88 2.72.88 2.72-.394 2.72-.88m-2.72 0"/><text x="-4.353" y="44.13" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(-54.23 7.839)">zero</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
