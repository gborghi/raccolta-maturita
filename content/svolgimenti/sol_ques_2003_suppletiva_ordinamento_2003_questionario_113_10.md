

**Quesito:** [[Quesiti/ques_2003_suppletiva_ordinamento_2003_questionario_113_10|2003 Suppletiva Ordinamento — Questionario — Quesito 10]] · **Prova:** [[Prove/2003_suppletiva_ordinamento_2003_questionario_113|2003 Suppletiva Ordinamento — Questionario]]

Il quesito chiede di definire i tre tipi di asintoto di una curva e di esibire una funzione il cui grafico presenti un asintoto orizzontale e due asintoti verticali.

## a) Definizione degli asintoti

Sia $y=f(x)$ l'equazione di una curva. Una retta si dice **asintoto** della curva se la distanza tra il punto della curva e la retta tende a zero quando il punto si allontana indefinitamente lungo la curva. Si distinguono tre casi.

**Asintoto orizzontale.** La retta $y=l$ è asintoto orizzontale (per $x\to+\infty$ oppure per $x\to-\infty$) se
$$\lim_{x\to+\infty} f(x)=l \qquad \text{oppure} \qquad \lim_{x\to-\infty} f(x)=l,$$
con $l$ numero reale finito.

**Asintoto verticale.** La retta $x=c$ è asintoto verticale se, avvicinandosi a $c$, la funzione diverge, cioè
$$\lim_{x\to c^-} f(x)=\pm\infty \qquad \text{oppure} \qquad \lim_{x\to c^+} f(x)=\pm\infty.$$
Tipicamente $c$ è un punto in cui la funzione non è definita (per esempio uno zero del denominatore in una funzione razionale fratta).

**Asintoto obliquo.** La retta $y=mx+q$, con $m\neq 0$, è asintoto obliquo (per $x\to+\infty$ o per $x\to-\infty$) se esistono e sono finiti i due limiti
$$m=\lim_{x\to\pm\infty}\frac{f(x)}{x} \qquad (m\neq 0), \qquad q=\lim_{x\to\pm\infty}\bigl(f(x)-mx\bigr).$$
Si osservi che l'asintoto obliquo e quello orizzontale non possono coesistere per la stessa direzione di $x$: se il limite di $f(x)$ è finito si ha l'asintoto orizzontale, se è infinito si cerca l'obliquo.

## b) Esempio richiesto

Una funzione razionale fratta che soddisfa le condizioni richieste è
$$f(x)=\frac{2x^2}{x^2-1}.$$

**Asintoto orizzontale.** Per $x\to\pm\infty$ il rapporto è determinato dai termini di grado massimo:
$$\lim_{x\to\pm\infty}\frac{2x^2}{x^2-1}=2,$$
quindi la retta $y=2$ è asintoto orizzontale (sia a $+\infty$ sia a $-\infty$).

**Asintoti verticali.** Il denominatore si annulla per $x^2-1=0$, cioè $x=1$ e $x=-1$, punti in cui il numeratore è diverso da zero. In prossimità di tali valori la funzione diverge:
$$\lim_{x\to 1^{\pm}}\frac{2x^2}{x^2-1}=\pm\infty, \qquad \lim_{x\to -1^{\pm}}\frac{2x^2}{x^2-1}=\mp\infty,$$
perciò le rette $x=1$ e $x=-1$ sono asintoti verticali.

La funzione presenta dunque un asintoto orizzontale $y=2$ e due asintoti verticali $x=1$ e $x=-1$, come richiesto. Il suo grafico è riportato qui sotto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="327.682" height="437.347" viewBox="-72 -72 245.762 328.01"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 109.873h214.701"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M140.751 107.473c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="35.481" y="109.873" stroke="none" font-family="cmmi10" font-size="10" transform="translate(111.084 2.153)">x</text><path fill="none" d="M35.48 219.985V.162"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M33.08 2.042c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="35.481" y="109.873" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -115.589)">y</text><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 58.659h215.101"/><g fill="#000" stroke="#000"><g stroke="none" font-size="10"><text x="35.481" y="109.873" font-family="cmmi10" transform="translate(111.084 -48.965)">y</text><text x="43.52" y="109.873" font-family="cmr10" transform="translate(111.084 -48.965)">=</text><text x="54.075" y="109.873" font-family="cmr10" transform="translate(111.084 -48.965)">2</text></g></g></g><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M9.873 219.985V-.238M61.088 219.985V-.238"/><g stroke="none" font-size="10"><text x="35.481" y="109.873" font-family="cmsy10" transform="translate(-31.996 12.538)">¡</text><text x="43.258" y="109.873" font-family="cmr10" transform="translate(-31.996 12.538)">1</text></g><text x="35.481" y="109.873" stroke="none" font-family="cmr10" font-size="10" transform="translate(29.14 12.538)">1</text><path fill="none" stroke="#00f" stroke-width=".8" d="m13.458 255.34.557-24.448.558-18.596.557-14.624.557-11.781.557-9.686.557-8.094.558-6.858.557-5.87.557-5.085.557-4.436.557-3.898.558-3.448.557-3.064.557-2.737.557-2.454.557-2.206.557-1.992.558-1.8.557-1.632.557-1.48.557-1.345.557-1.22.558-1.11.557-1.008.557-.913.557-.827.557-.747.558-.673.557-.601.557-.536.557-.474.557-.414.558-.357.557-.303.557-.249.557-.198.557-.148.558-.099.557-.05h.557l.557.047.557.096.557.145.558.196.557.247.557.3.557.355.557.411.558.47.557.534.557.598.557.67.557.742.557.824.558.909.557 1.003.557 1.104.557 1.215.557 1.338.558 1.474.557 1.624.557 1.792.557 1.982.557 2.197.558 2.44.557 2.722.557 3.049.557 3.427.557 3.875.558 4.408.557 5.05.557 5.835.557 6.8.557 8.028.557 9.602.558 11.665.557 14.469.557 18.366.557 24.112M65.697-71.87l.914 23.355.914 16.663.914 12.497.914 9.693.914 7.736.914 6.315.913 5.234.914 4.412.914 3.772.914 3.252.914 2.833.914 2.486.914 2.202.914 1.96.914 1.753.914 1.58.914 1.427.914 1.294.914 1.183.914 1.081.914.993.913.914.914.843.914.78.914.724.914.674.914.627.914.586.914.549.914.514.914.483.914.453.914.427.914.403.914.38.914.36.913.34.914.323.914.306.914.29.914.277.914.264.914.25.914.239.914.228.914.218.914.208.914.199.914.19.914.182.913.176.914.168.914.16.914.156.914.148.914.143.914.138.914.132.914.128.914.122.914.119.914.114.914.11.914.107.914.103.913.1.914.095.914.093.914.09.914.087.914.084.914.082.914.08.914.076.914.074.914.073.914.07.914.068.914.066M-66.949 55.245l.914-.066.914-.067.914-.072.914-.07.914-.073.914-.08.914-.078.914-.082.914-.085.914-.086.914-.09.914-.093.913-.096.914-.1.914-.103.914-.103.914-.112.914-.115.914-.117.914-.124.914-.127.914-.133.914-.137.914-.144.914-.147.914-.153.914-.163.913-.168.914-.175.914-.183.914-.19.914-.2.914-.207.914-.22.914-.227.914-.237.914-.25.914-.264.914-.278.914-.288.914-.305.914-.327.913-.336.914-.362.914-.378.914-.404.914-.425.914-.453.914-.479.914-.515.914-.549.914-.591.914-.62.914-.675.914-.728.914-.774.914-.843.913-.911.914-.995.914-1.076.914-1.19.914-1.284.914-1.427.914-1.58.914-1.752.914-1.953.914-2.199.914-2.483.914-2.83.914-3.252.914-3.76.913-4.406.914-5.213.914-6.3.914-7.708.914-9.67.914-12.45.914-16.59.914-23.243"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.119](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
