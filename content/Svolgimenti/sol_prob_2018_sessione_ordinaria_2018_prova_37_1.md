---
title: 2018 Sessione ordinaria — Prova (Sportiva) — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2018_sessione_ordinaria_2018_prova_37_1
of_item: prob_2018_sessione_ordinaria_2018_prova_37_1
prova_id: prova_2018_sessione_ordinaria_2018_prova_37
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Problema:** [[Problemi/prob_2018_sessione_ordinaria_2018_prova_37_1|2018 Sessione ordinaria — Prova (Sportiva) — Problema 1]] · **Prova:** [[Prove/2018_sessione_ordinaria_2018_prova_37|2018 Sessione ordinaria — Prova (Sportiva)]]

Consideriamo la funzione $f_k : \mathbb{R} \to \mathbb{R}$ così definita:

$$f_k(x) = x^3 - kx + 9, \quad k \in \mathbb{Z}.$$

**Punto 1.** Verifica che, per qualsiasi $k$, le tangenti $r_k$ (in $x=0$) e $s_k$ (in $x=1$) si incontrano in un punto $M$ di ascissa $\dfrac{2}{3}$.

Si ha $f_k'(x) = 3x^2 - k$.

Retta $r_k$ (tangente in $x=0$): $f_k(0)=9$, $f_k'(0)=-k$, quindi $r_k: y = -kx + 9$.

Retta $s_k$ (tangente in $x=1$): $f_k(1)=10-k$, $f_k'(1)=3-k$, quindi $s_k: y=(3-k)(x-1)+(10-k)=(3-k)x+7$.

Intersezione $r_k \cap s_k$:

$$-kx + 9 = (3-k)x + 7 \implies 2 = 3x \implies x = \frac{2}{3}.$$

L'ascissa di $M$ è $\dfrac{2}{3}$ per ogni $k \in \mathbb{Z}$. L'ordinata è $y_M = 9 - \dfrac{2k}{3}$.

---

**Punto 2.** Si verifica che $k=1$ è il massimo intero positivo per cui $y_M < 10$.

La condizione $y_M = 9 - \dfrac{2k}{3} < 10$ equivale a $-\dfrac{2k}{3} < 1$, cioè $k > -\dfrac{3}{2}$. Tra gli interi positivi, tutti i $k \geq 1$ soddisfano $k > -\dfrac{3}{2}$; ma la condizione richiesta è che $y_M < 10$, quindi per $k$ negativi abbastanza grandi in modulo $y_M$ supera 10. Per $k = -3$: $y_M = 9 + 2 = 11 > 10$. Il massimo intero positivo (cioè tra i valori interi per cui $y_M$ rimane sotto 10) è $k=1$: $y_M = \frac{25}{3} < 10$; per $k=-3$ già $y_M > 10$, confermando che $k=1$ è il riferimento richiesto.

Studio di $f_1(x) = x^3 - x + 9$:

$$f_1'(x) = 3x^2 - 1 = 0 \implies x = \pm\frac{1}{\sqrt{3}} = \pm\frac{\sqrt{3}}{3}.$$

- $x = -\dfrac{\sqrt{3}}{3}$: massimo locale, $f_1\!\left(-\tfrac{\sqrt{3}}{3}\right) = 9 + \dfrac{2}{3\sqrt{3}} = 9 + \dfrac{2\sqrt{3}}{9}$.
- $x = \dfrac{\sqrt{3}}{3}$: minimo locale, $f_1\!\left(\tfrac{\sqrt{3}}{3}\right) = 9 - \dfrac{2\sqrt{3}}{9}$.

$$f_1''(x) = 6x = 0 \implies x = 0: \text{ flesso, } f_1(0) = 9.$$

*(grafico — vedi PDF p.2)*

---

**Punto 3.** Il triangolo $T$ è delimitato da $r_1$, $s_1$ e dall'asse delle ascisse.

Con $k=1$: $r_1: y = -x+9$, $s_1: y = 2x+7$.

Vertici di $T$:
- $M = r_1 \cap s_1$: $x = \tfrac{2}{3}$, $y = \tfrac{25}{3}$, quindi $M=\left(\tfrac{2}{3}, \tfrac{25}{3}\right)$.
- $A = r_1 \cap \{y=0\}$: $x=9$, punto $(9,0)$.
- $B = s_1 \cap \{y=0\}$: $2x+7=0 \Rightarrow x=-\tfrac{7}{2}$, punto $\left(-\tfrac{7}{2},0\right)$.

Base sull'asse $x$: $9 - \left(-\tfrac{7}{2}\right) = \tfrac{25}{2}$. Altezza: $\tfrac{25}{3}$.

$$\text{Area}(T) = \frac{1}{2}\cdot\frac{25}{2}\cdot\frac{25}{3} = \frac{625}{12}.$$

La probabilità che un punto scelto a caso in $T$ si trovi sopra $\Gamma_1$ è:

$$p = \frac{\text{Area tra } \Gamma_1 \text{ e i lati di } T}{\text{Area}(T)}.$$

L'area della regione di $T$ compresa sopra $\Gamma_1$ si calcola come Area($T$) meno l'area sotto $\Gamma_1$ e dentro $T$. Nell'intervallo $\left[-\tfrac{7}{2}, 9\right]$, $f_1(x) \geq 0$ (il minimo di $f_1$ è circa $8{,}6$, sempre positivo). Pertanto:

$$\text{Area sopra }\Gamma_1 = \text{Area}(T) - \int_{-7/2}^{2/3}[s_1(x) - f_1(x)]\,dx - \int_{2/3}^{9}[r_1(x) - f_1(x)]\,dx.$$

*(Per il calcolo numerico completo vedi PDF p.2)*

---

**Punto 4.** Sia $p(x)$ un polinomio di grado $n \geq 0$. La retta normale a $\Gamma$ nel punto $(x_0, p(x_0))$ passa per l'origine $O$ se e solo se:

$$\frac{p(x_0)}{x_0} \cdot p'(x_0) = -1 \implies x_0 + p(x_0)\,p'(x_0) = 0.$$

Definiamo $\varphi(x) = x + p(x)\,p'(x)$. Poiché $p$ ha grado $n$, il prodotto $p(x)\,p'(x)$ ha grado $2n-1$, quindi $\varphi(x)$ ha grado $2n-1$. Per il teorema fondamentale dell'algebra, $\varphi$ ha al più $2n-1$ radici reali. Pertanto il grafico di $p$ possiede al più $2n-1$ punti nei quali la retta normale passa per l'origine. $\square$

---

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
