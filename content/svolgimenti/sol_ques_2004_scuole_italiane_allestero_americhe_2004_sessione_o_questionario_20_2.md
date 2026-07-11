

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20_2|2004 Estero Americhe Ordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20|2004 Estero Americhe Ordinaria — Questionario]]

Sia $\alpha$ un parametro reale tale che la funzione

$$f(x) = \alpha x - \frac{x^{3}}{1+x^{2}}$$

risulti crescente (su tutto $\mathbb{R}$). Provare che $\alpha \ge \dfrac{9}{8}$.

## Impostazione

La funzione è definita e derivabile su tutto $\mathbb{R}$, poiché $1+x^{2}>0$. Essa è crescente su $\mathbb{R}$ se e solo se la sua derivata prima è non negativa per ogni $x$.

Calcoliamo la derivata. Per il termine $\dfrac{x^{3}}{1+x^{2}}$ usiamo la regola del quoziente:

$$\frac{d}{dx}\!\left(\frac{x^{3}}{1+x^{2}}\right) = \frac{3x^{2}(1+x^{2}) - x^{3}\cdot 2x}{(1+x^{2})^{2}} = \frac{3x^{2}+x^{4}}{(1+x^{2})^{2}}.$$

Dunque

$$f'(x) = \alpha - \frac{3x^{2}+x^{4}}{(1+x^{2})^{2}} = \frac{\alpha(1+x^{2})^{2} - 3x^{2} - x^{4}}{(1+x^{2})^{2}}.$$

## Condizione di crescenza

Il denominatore $(1+x^{2})^{2}$ è sempre positivo, quindi il segno di $f'(x)$ coincide con quello del numeratore. La funzione è crescente su $\mathbb{R}$ se e solo se

$$\alpha(1+x^{2})^{2} - 3x^{2} - x^{4} \ge 0 \qquad \text{per ogni } x\in\mathbb{R}.$$

Sviluppando $(1+x^{2})^{2} = 1 + 2x^{2} + x^{4}$:

$$\alpha\left(1 + 2x^{2} + x^{4}\right) - 3x^{2} - x^{4} \ge 0,$$

$$(\alpha - 1)\,x^{4} + (2\alpha - 3)\,x^{2} + \alpha \ge 0.$$

Ponendo $t = x^{2}\ge 0$, la condizione diventa: il trinomio

$$g(t) = (\alpha - 1)\,t^{2} + (2\alpha - 3)\,t + \alpha$$

deve essere non negativo per ogni $t \ge 0$.

## Risoluzione

Il modo più diretto è imporre che $g(t)\ge 0$ per **ogni** $t$ reale (condizione sufficiente che, come si verifica sotto, è anche necessaria qui). Questo richiede parabola rivolta verso l'alto e discriminante non positivo:

$$\alpha - 1 > 0 \qquad \text{e} \qquad \Delta = (2\alpha - 3)^{2} - 4(\alpha - 1)\alpha \le 0.$$

Sviluppiamo il discriminante:

$$(2\alpha - 3)^{2} - 4\alpha(\alpha - 1) = 4\alpha^{2} - 12\alpha + 9 - 4\alpha^{2} + 4\alpha = -8\alpha + 9.$$

Quindi

$$-8\alpha + 9 \le 0 \quad \Rightarrow \quad \alpha \ge \frac{9}{8}.$$

Poiché $\dfrac{9}{8} > 1$, la condizione $\alpha - 1 > 0$ è automaticamente soddisfatta.

## Verifica della necessità

Resta da controllare che non esistano valori più piccoli di $\alpha$ accettabili sfruttando il fatto che a noi basta $g(t)\ge 0$ solo per $t\ge 0$. Per $\alpha > 1$ la parabola $g(t)$ è rivolta verso l'alto, con $g(0) = \alpha > 0$; il vertice si trova in

$$t^{*} = \frac{3 - 2\alpha}{2(\alpha - 1)}.$$

Se $\alpha \ge \dfrac{3}{2}$ risulta $t^{*}\le 0$, quindi su $t\ge 0$ il minimo è $g(0)=\alpha>0$ e la condizione è verificata (e in tal caso $\alpha > \tfrac{9}{8}$). Se invece $1 < \alpha < \dfrac{3}{2}$ il vertice cade in $t^{*}>0$ e il minimo su $t\ge 0$ è il valore nel vertice: imporre che sia $\ge 0$ equivale nuovamente a $\Delta \le 0$, cioè $\alpha \ge \dfrac{9}{8}$.

In ogni caso la condizione vincolante è

$$\boxed{\ \alpha \ge \dfrac{9}{8}\ }$$

come si voleva dimostrare.

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
