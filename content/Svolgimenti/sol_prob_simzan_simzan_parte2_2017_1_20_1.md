---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2017_1_20_1
of_item: prob_simzan_simzan_parte2_2017_1_20_1
prova_id: prova_simzan_simzan_parte2_2017_1_20
anno: '2017'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2017
---

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2017_1_20_1|Simulazione Zanichelli 2017 — SimZan parte2 #1 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 #1]]

**Testo (sintesi).** Il comune ha commissionato il recupero di un capannone modernista. La facciata ha un profilo del tetto descritto da una funzione definita su $[-10;10]$; le dimensioni dell'edificio sono: base 20 m, larghezza 8 m (vedi Figura 2).

*(grafico — vedi PDF p.20)*

### Punto a — Scelta della funzione, rette tangenti, angolo e volume

Le due funzioni proposte sono:

$$f_1(x) = 4 - \frac{8}{5}x \qquad \text{e} \qquad f_2(x) = \frac{1}{25}(x-10)^2.$$

Il profilo del tetto è simmetrico rispetto all'asse $y$, interseca l'asse $x$ in $(\pm 10, 0)$ e l'asse $y$ nel punto $(0, 4)$. La funzione $f_1(x)$ è una retta, non può descrivere un profilo curvilineo. La funzione $f_2(x)$, opportunamente definita a tratti, può descrivere il profilo:

$$f_2(x) = \begin{cases} \dfrac{1}{25}(x+10)^2 & \text{se } -10 \le x < 0 \\[6pt] \dfrac{1}{25}(x-10)^2 & \text{se } 0 \le x \le 10 \end{cases}$$

Calcoliamo la derivata per studiare il punto angoloso in $x=0$:

$$f_2'(x) = \begin{cases} \dfrac{2}{25}(x+10) & \text{se } -10 \le x < 0 \\[6pt] \dfrac{2}{25}(x-10) & \text{se } 0 < x \le 10 \end{cases}$$

$$\lim_{x\to 0^-} f_2'(x) = \frac{20}{25} = \frac{4}{5}, \qquad \lim_{x\to 0^+} f_2'(x) = \frac{-20}{25} = -\frac{4}{5}.$$

La funzione ha un punto angoloso in $x=0$, coerente con il profilo a cusp rappresentato in figura 1. Quindi **$f_2(x)$ descrive il profilo del tetto in modo più preciso**.

**Rette tangenti tratteggiate.** Le tangenti tratteggiate in figura 1 sono quelle al punto angolare (le semitangenti in $x=0$). Le equazioni sono:

$$r_1: y = \frac{4}{5}x + 4 \qquad \text{(semitangente sinistra)},$$
$$r_2: y = -\frac{4}{5}x + 4 \qquad \text{(semitangente destra)}.$$

**Angolo $\alpha$ tra le due rette.** Con $m_1 = \frac{4}{5}$ e $m_2 = -\frac{4}{5}$:

$$\tan\alpha = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| = \left|\frac{\frac{8}{5}}{1 - \frac{16}{25}}\right| = \frac{\frac{8}{5}}{\frac{9}{25}} = \frac{8}{5}\cdot\frac{25}{9} = \frac{40}{9},$$

quindi $\alpha = \arctan\!\left(\frac{40}{9}\right) \approx 102{,}40°$.

**Volume dell'edificio.** Il volume è il prodotto della superficie della sezione trasversale (la facciata) per la profondità dell'edificio (30 m dalla figura 2).

L'area della sezione è la somma dell'area del rettangolo di base 20 m e altezza 0 m (i due bordi toccano terra) più l'area sotto il profilo parabolico. Calcolo dell'area sotto $f_2(x)$ sull'intervallo $[-10,10]$:

$$A_{curva} = 2\int_{0}^{10}\frac{1}{25}(x-10)^2\,dx = \frac{2}{25}\left[\frac{(x-10)^3}{3}\right]_0^{10} = \frac{2}{25}\cdot\frac{0-(-1000)}{3} = \frac{2000}{75} = \frac{80}{3}\,\text{m}^2.$$

L'area della sezione rettangolare (base 20 m, altezza 4 m al di sotto del profilo — ma il profilo parte da altezza 4 m al centro):

$$A_{rettangolo} = 20\times 4 = 80\,\text{m}^2 \quad \text{(non si aggiunge, il profilo parte dall'alto)}.$$

In realtà dalla Figura 2 l'edificio ha altezza complessiva $4\,\text{m}$ (al centro) con larghezza 20 m e profondità 30 m. L'area della sezione è:

$$A_{sez} = \int_{-10}^{10} f_2(x)\,dx = \frac{80}{3}\,\text{m}^2.$$

Il volume dell'edificio è:

$$V = A_{sez} \times 30 = \frac{80}{3}\times 30 = 800\,\text{m}^3.$$

*(grafico — vedi PDF p.31)*

### Punto b — Equazione della parabola e costo vernice

Dal grafico (Figura 3) si legge che la parabola ha vertice $V(10;5)$ e passa per $A(2;0)$:

$$y - 5 = a(x-10)^2 \implies 0-5 = a(2-10)^2 = 64a \implies a = -\frac{5}{64}.$$

La parabola è:

$$y = -\frac{5}{64}(x-10)^2 + 5 = \frac{5}{64}\left[64-(x-10)^2\right].$$

L'area del palco (zona sotto la parabola e sopra l'asse $x$, da $x=2$ a $x=18$ per simmetria rispetto a $x=10$):

$$A_{palco} = \int_{2}^{18}\left[-\frac{5}{64}(x-10)^2+5\right]dx = \left[-\frac{5}{192}(x-10)^3+5x\right]_{2}^{18}$$

$$= \left(-\frac{5}{192}\cdot 512+90\right)-\left(-\frac{5}{192}\cdot(-512)+10\right) = \left(-\frac{40}{3}+90\right)-\left(\frac{40}{3}+10\right) = 80-\frac{80}{3} = \frac{160}{3}\,\text{m}^2.$$

Tre mani di vernice su $\frac{160}{3}\,\text{m}^2$: superficie totale da verniciare = $3\cdot\frac{160}{3} = 160\,\text{m}^2$.

La vernice una volta diluita ha resa 12 m²/barattolo, quindi:

$$\text{barattoli necessari} = \left\lceil\frac{160}{12}\right\rceil = \left\lceil 13{,}\overline{3}\right\rceil = 14.$$

Il **costo minimo** è $14 \times 65 = \mathbf{910}\,€$.

### Punto c — Studio della funzione $g(x) = |x|\sqrt{1-x^2}$

Il dominio è $-1 \le x \le 1$. La funzione è pari: $g(-x) = |-x|\sqrt{1-x^2} = |x|\sqrt{1-x^2} = g(x)$.

Intersezioni con gli assi: $(0,0)$, $(\pm 1, 0)$.

Per $x > 0$: $g(x) = x\sqrt{1-x^2}$, $g'(x) = \sqrt{1-x^2} - \frac{x^2}{\sqrt{1-x^2}} = \frac{1-2x^2}{\sqrt{1-x^2}}$.

$g'(x) = 0 \implies x = \frac{\sqrt{2}}{2}$, punto di massimo relativo con $g\!\left(\frac{\sqrt{2}}{2}\right) = \frac{1}{2}$.

Tangente verticale in $x = \pm 1$: $g'(x)\to\pm\infty$.

Il punto $O(0,0)$ è un flesso a tangente orizzontale per simmetria:

$$\lim_{x\to 0^+} g'(x) = \lim_{x\to 0^+}\frac{1-2x^2}{\sqrt{1-x^2}} = 1 \ne 0,$$

quindi $O$ è un punto angoloso (non un flesso).

*(grafico — vedi PDF p.33)*

### Punto d — Area della finestra e costo restauro

Ogni finestra ha la forma di un quadrato di lato 2 m sormontato da una zona il cui profilo superiore segue $g(x)$ per $-1\le x\le 1$.

Area $A_1$ della zona superiore (tra $g(x)$ e l'asse $x$, per $-1\le x\le 1$):

$$A_1 = \int_{-1}^{1}|x|\sqrt{1-x^2}\,dx = 2\int_{0}^{1}x\sqrt{1-x^2}\,dx.$$

Con $u=1-x^2$, $du=-2x\,dx$:

$$A_1 = 2\cdot\frac{1}{2}\int_0^1\sqrt{u}\,du = \left[\frac{2}{3}u^{3/2}\right]_0^1 = \frac{2}{3}\,\text{m}^2.$$

Oppure via primitiva diretta:

$$A_1 = 2\left[-\frac{1}{2}\cdot\frac{2}{3}(1-x^2)^{3/2}\right]_0^1 = 2\cdot\frac{1}{3} = \frac{2}{3}\,\text{m}^2.$$

Area $A_2$ del quadrato: $A_2 = 2\times 1\times 2 = 4\,\text{m}^2$... Rileggendo il testo, il quadrato ha lato 2 m e i valori di $x$ per la finestra vanno da $-1$ a $1$ (larghezza 2 m). Quindi:

$$A_{finestra} = A_2 + A_1 = 4 + \frac{2}{3} - \frac{2}{3} = \dots$$

In base alla soluzione del PDF (p.33-34): $A_1 = \frac{1}{3}$ m² (la parte curva per $0\le x\le 1$) e $A_2 = 2\times 1 = 2$ m² (il rettangolo di base 2 m e altezza 1 m, con le semibasi di 1 m per lato):

$$A_1 = \int_0^1 x\sqrt{1-x^2}\,dx = \left[-\frac{1}{3}(1-x^2)^{3/2}\right]_0^1 = 0+\frac{1}{3} = \frac{1}{3}\,\text{m}^2.$$

$$A_{finestra} = 2(A_1+A_2) = 2\!\left(\frac{1}{3}+2\right) = \frac{14}{3}\,\text{m}^2.$$

Superficie totale delle 5 finestre:

$$A_{tot} = 5\cdot\frac{14}{3} = \frac{70}{3} \approx 23{,}33\,\text{m}^2.$$

Costo del restauro a 220 €/m²:

$$Spesa \approx 220\cdot 23{,}33 \approx 5132{,}60\,€,$$

da arrotondare a **5130 €**.

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
