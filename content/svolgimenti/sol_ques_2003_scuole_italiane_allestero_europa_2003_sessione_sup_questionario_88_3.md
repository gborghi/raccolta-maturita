

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88_3|2003 Europa Suppletiva — Questionario — Quesito 3]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88|2003 Europa Suppletiva — Questionario]]

Si deve provare che la curva di equazione

$$y=\frac{a_0 x^n + a_1 x^{n-1} + \cdots + a_{n-1}x + a_n}{b_0 x^n + b_1 x^{n-1} + \cdots + b_{n-1}x + b_n},$$

con $a_0$ e $b_0$ reali non nulli (numeratore e denominatore dello stesso grado $n$), ammette per asintoto orizzontale la retta

$$y=\frac{a_0}{b_0}.$$

Una retta orizzontale $y=\ell$ è asintoto per la curva se $\displaystyle\lim_{x\to\pm\infty} y = \ell$ con $\ell$ finito. Basta dunque calcolare il limite della funzione per $x\to\infty$.

Raccogliamo la potenza dominante $x^n$ sia al numeratore sia al denominatore:

$$y=\frac{x^n\left(a_0 + \dfrac{a_1}{x} + \cdots + \dfrac{a_{n-1}}{x^{n-1}} + \dfrac{a_n}{x^n}\right)}{x^n\left(b_0 + \dfrac{b_1}{x} + \cdots + \dfrac{b_{n-1}}{x^{n-1}} + \dfrac{b_n}{x^n}\right)}.$$

Semplificando il fattore $x^n$ (non nullo per $x\to\infty$):

$$y=\frac{a_0 + \dfrac{a_1}{x} + \cdots + \dfrac{a_n}{x^n}}{b_0 + \dfrac{b_1}{x} + \cdots + \dfrac{b_n}{x^n}}.$$

Quando $x\to\pm\infty$ ciascun termine del tipo $\dfrac{a_k}{x^k}$ e $\dfrac{b_k}{x^k}$ (con $k\ge 1$) tende a $0$. Poiché $b_0\neq 0$, il denominatore tende al valore finito e non nullo $b_0$, quindi il quoziente converge:

$$\lim_{x\to\pm\infty} y = \frac{a_0 + 0 + \cdots + 0}{b_0 + 0 + \cdots + 0} = \frac{a_0}{b_0}.$$

Il limite è finito e vale $\dfrac{a_0}{b_0}$ tanto per $x\to+\infty$ quanto per $x\to-\infty$: la retta

$$y=\frac{a_0}{b_0}$$

è pertanto asintoto orizzontale della curva, come si voleva dimostrare.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="468.628" height="155.254" viewBox="-72 -72 351.471 116.441"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 22.79h322.252"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M248.302 20.39c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="89.256" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(164.859 2.153)">x</text><path fill="none" d="M89.256 38.154v-96.908"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M86.856-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="89.256" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -87.42)">y</text><g fill="red" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8"><path fill="none" d="M-64.388-28.425H242.9"/><g fill="#000" stroke="#000"><g stroke="none"><text x="89.256" y="22.789" font-family="cmmi10" font-size="10" transform="translate(157.377 -49.882)">y</text><text x="97.295" y="22.789" font-family="cmr10" font-size="10" transform="translate(157.377 -49.882)">=</text><text x="109.051" y="18.689" font-family="cmmi7" font-size="7" transform="translate(157.377 -49.882)">a</text><text x="113.388" y="19.689" font-family="cmr5" font-size="5" transform="translate(157.377 -49.882)">0</text><path d="M266.428-29.793h8.24v.4h-8.24z"/><text x="109.461" y="26.238" font-family="cmmi7" font-size="7" transform="translate(157.377 -49.882)">b</text><text x="112.978" y="27.238" font-family="cmr5" font-size="5" transform="translate(157.377 -49.882)">0</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m98.219-5.61 1.831-1.07 1.831-1.142 1.832-1.183 1.831-1.188 1.832-1.168 1.831-1.132 1.831-1.075 1.832-1.017 1.831-.955 1.832-.888 1.83-.826 1.832-.76 1.832-.703 1.831-.647 1.831-.595 1.832-.545 1.831-.503 1.832-.462 1.831-.424 1.831-.39 1.832-.361 1.831-.333 1.831-.306 1.832-.284 1.831-.261 1.832-.244 1.831-.225 1.831-.21 1.832-.194 1.831-.181 1.832-.17 1.83-.157 1.832-.148 1.832-.137 1.831-.13 1.831-.121 1.832-.114 1.831-.107 1.832-.1 1.831-.095 1.831-.09 1.832-.083 1.831-.08 1.831-.075 1.832-.071 1.831-.068 1.832-.064 1.831-.06 1.831-.058 1.832-.055 1.831-.052 1.832-.05 1.83-.047 1.832-.045 1.832-.043 1.831-.04 1.831-.04 1.832-.037 1.831-.036 1.832-.034 1.831-.033 1.831-.031 1.832-.03 1.831-.03 1.831-.027 1.832-.027 1.831-.025 1.832-.025 1.831-.023 1.831-.023 1.832-.022 1.831-.02 1.832-.021 1.83-.02 1.832-.018 1.832-.019 1.831-.017 1.831-.017 1.832-.016M-64.388-27.733l1.832.016 1.831.017 1.831.017 1.832.019 1.831.019 1.832.019 1.83.02 1.832.021 1.832.022 1.831.023 1.831.023 1.832.025 1.831.025 1.832.027 1.831.028 1.831.029 1.832.03 1.831.031 1.831.033 1.832.034 1.831.036 1.832.037 1.831.039 1.831.041 1.832.043 1.831.045 1.832.047 1.83.05 1.832.052 1.832.055 1.831.057 1.831.06 1.832.065 1.831.067 1.832.072 1.831.075 1.831.08 1.832.084 1.831.089 1.832.094 1.83.101 1.832.107 1.832.114 1.831.121 1.831.13 1.832.137 1.831.148 1.832.157 1.83.17 1.832.18 1.832.195 1.831.21 1.831.225 1.832.243 1.831.262 1.832.283 1.831.307 1.831.333 1.832.36 1.831.39 1.832.424 1.83.463 1.832.502 1.832.546 1.831.594 1.831.647 1.832.702 1.831.762 1.832.826 1.83.888 1.832.953 1.832 1.019 1.831 1.075 1.831 1.132 1.832 1.168 1.831 1.186 1.832 1.183L78.46-6.68l1.831 1.068"/><text x="89.256" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 18.049)">O</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.89](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
