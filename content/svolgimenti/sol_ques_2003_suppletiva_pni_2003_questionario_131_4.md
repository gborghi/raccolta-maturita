

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_4|2003 Suppletiva PNI — Questionario — Quesito 4]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Sia $P(x)$ un polinomio di grado $n \ge 2$ nella variabile reale $x$ con coefficienti reali. Dire che $P$ **ammette due zeri uguali ad $\alpha$** significa che $\alpha$ è uno zero di molteplicità almeno $2$, cioè che $P(x)$ è divisibile per $(x-\alpha)^2$:
$$P(x) = (x-\alpha)^2 \, Q(x),$$
con $Q(x)$ opportuno polinomio a coefficienti reali. Dobbiamo provare che ciò equivale a
$$P(\alpha) = 0 \quad \text{e} \quad P'(\alpha) = 0.$$

Ricordiamo che $P$, essendo una funzione razionale intera, è continua e derivabile su tutto $\mathbb{R}$; useremo inoltre il teorema di Ruffini: $\beta$ è zero di un polinomio se e solo se quel polinomio è divisibile per $(x-\beta)$.

## a) La condizione è necessaria

Supponiamo che $\alpha$ sia uno zero doppio, cioè
$$P(x) = (x-\alpha)^2 \, Q(x).$$
Valutando in $x = \alpha$ si ottiene immediatamente
$$P(\alpha) = (\alpha-\alpha)^2 \, Q(\alpha) = 0.$$
Derivando con la regola del prodotto,
$$P'(x) = 2(x-\alpha)\, Q(x) + (x-\alpha)^2 \, Q'(x) = (x-\alpha)\big[\,2Q(x) + (x-\alpha)Q'(x)\,\big],$$
e quindi
$$P'(\alpha) = (\alpha-\alpha)\big[\,2Q(\alpha) + 0\,\big] = 0.$$
Dunque sia il polinomio sia la sua derivata prima si annullano in $\alpha$.

## b) La condizione è sufficiente

Viceversa, supponiamo $P(\alpha) = 0$ e $P'(\alpha) = 0$.

Da $P(\alpha) = 0$, per il teorema di Ruffini, $P(x)$ è divisibile per $(x-\alpha)$:
$$P(x) = (x-\alpha)\, Q(x),$$
con $Q$ polinomio a coefficienti reali. Derivando,
$$P'(x) = Q(x) + (x-\alpha)\, Q'(x),$$
da cui, valutando in $x = \alpha$,
$$P'(\alpha) = Q(\alpha) + (\alpha-\alpha)\, Q'(\alpha) = Q(\alpha).$$
Poiché per ipotesi $P'(\alpha) = 0$, si ricava $Q(\alpha) = 0$. Applicando di nuovo il teorema di Ruffini a $Q$, esso è divisibile per $(x-\alpha)$:
$$Q(x) = (x-\alpha)\, R(x).$$
Sostituendo,
$$P(x) = (x-\alpha)\, Q(x) = (x-\alpha)^2 \, R(x),$$
cioè $\alpha$ è uno zero di molteplicità almeno $2$: il polinomio ammette due zeri uguali ad $\alpha$.

## Interpretazione geometrica

La condizione $P(\alpha) = 0$ dice che il grafico passa per il punto $(\alpha, 0)$; la condizione $P'(\alpha) = 0$ dice che in quel punto la tangente è orizzontale. Le due insieme esprimono il fatto che il grafico di $y = P(x)$ è **tangente all'asse $x$** nel punto di ascissa $\alpha$, come si vede nella figura seguente (dove $\alpha$ è zero doppio).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="200.658" height="287.436" viewBox="-72 -72 150.494 215.577"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 58.368H65.242"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M63.362 55.968c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-15.733" y="58.368" stroke="none" font-family="cmmi10" font-size="10" transform="translate(84.908 2.153)">x</text><path fill="none" d="M-15.733 108.445V-41.386"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-18.133-39.506c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-15.733" y="58.368" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -105.632)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-61.115 142.907 1.426-11.36 1.426-10.681 1.426-10.023 1.426-9.38 1.426-8.756 1.426-8.15 1.426-7.561 1.426-6.99 1.426-6.437 1.426-5.902 1.426-5.384 1.426-4.885 1.426-4.402 1.426-3.938 1.426-3.49 1.426-3.064 1.426-2.651 1.426-2.259 1.426-1.883 1.426-1.524L-31.169 23l1.426-.863 1.426-.558 1.426-.272 1.426-.003 1.426.249 1.426.481 1.426.697 1.426.895 1.426 1.076 1.427 1.238 1.426 1.382 1.426 1.509 1.426 1.618 1.426 1.71 1.426 1.782 1.426 1.839 1.426 1.877 1.426 1.897 1.426 1.9 1.426 1.884 1.426 1.851 1.426 1.8 1.426 1.732 1.426 1.646 1.426 1.541 1.426 1.42 1.426 1.28L8.76 55.73l1.426.948 1.426.754 1.426.544 1.426.315 1.426.07 1.426-.195 1.426-.476 1.426-.776 1.426-1.094 1.426-1.427 1.426-1.781 1.426-2.15 1.426-2.54 1.427-2.946 1.426-3.37 1.426-3.811 1.426-4.271 1.426-4.748 1.426-5.24 1.426-5.757 1.426-6.284 1.426-6.834 1.426-7.4 1.426-7.983 1.426-8.585 1.426-9.203 1.426-9.84 1.426-10.497 1.426-11.167 1.426-11.857"/><path stroke="none" d="M17.765 58.368a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M-21.993 58.368h75.116"/><text x="-15.733" y="58.368" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.831 7.839)">®</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-15.733" y="58.368" font-family="cmmi10" transform="translate(47.342 -78.875)">y</text><text x="-7.694" y="58.368" font-family="cmr10" transform="translate(47.342 -78.875)">=</text><text x="2.862" y="58.368" font-family="cmmi10" transform="translate(47.342 -78.875)">P</text><text x="10.671" y="58.368" font-family="cmr10" transform="translate(47.342 -78.875)">(</text><text x="14.56" y="58.368" font-family="cmmi10" transform="translate(47.342 -78.875)">x</text><text x="20.275" y="58.368" font-family="cmr10" transform="translate(47.342 -78.875)">)</text></g></g></g></svg>
</figure>

Avendo provato entrambe le implicazioni, la condizione $P(\alpha) = 0$ e $P'(\alpha) = 0$ è **necessaria e sufficiente** affinché $\alpha$ sia uno zero doppio del polinomio. $\quad\Rightarrow\quad$ tesi dimostrata.

*Fonte:* [📄 PDF p.133](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
