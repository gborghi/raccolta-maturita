---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte3_2024_2_32_2
of_item: prob_simzan_simzan_parte3_2024_2_32_2
prova_id: prova_simzan_simzan_parte3_2024_2_32
anno: '2024'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Problema:** [[Problemi/prob_simzan_simzan_parte3_2024_2_32_2|Simulazione Zanichelli 2024 — SimZan parte3 #2 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 #2]]

Elia vuole allestire un piccolo giardino rettangolare di dimensioni 6 m per 5 m. Il progetto illustrato in figura prevede una parte di manto erboso (la regione superiore in grigio scuro) e una zona (in grigio chiaro) coperta da aubretia (una specie tappezzante che produce dei piccoli fiori di colori vivaci), che circonda un piccolo stagno a forma di ellisse.

*(grafico — vedi PDF p.36)*

La curva che separa il prato dall'aiuola fiorita ha espressione analitica ha la forma seguente:

$$f(x) = (ax^2-x)e^{-x+b} + b, \quad a,b \in \mathbb{R},$$

e che il punto $F(1;2)$ è un punto di flesso.

### Punto 1 — Equazione della curva che separa il prato dall'aiuola

Determiniamo $f(x)$ indipendentemente dal problema reale, determinando dominio, limiti agli estremi del dominio, asintoti, massimi e minimi e l'ulteriore punto di flesso, e completiamo il grafico.

La funzione $f(x) = (x^2-x)e^{-x} + 2$ (con $a=1$, $b=2$, verificati tramite le condizioni del punto di flesso):

- **Dominio:** $\mathbb{R}$.

- **Intersezioni con gli assi:**
  - $f(x) = 0 \Rightarrow (x^2-x)e^{-x} + 2 = 0 \Rightarrow (x^2-x) = -2e^x$; questa equazione non ha soluzioni reali poiché per $x$ reale $(x^2-x)$ può essere negativo ma $-2e^x < 0$ sempre.
  - $f(0) = 0 + 2 = 2$, quindi $f$ interseca l'asse $y$ nel punto $(0; 2)$.

- **Limiti agli estremi:**

$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} [(x^2-x)e^{-x}] + 2 = 0 + 2 = 2$$

(la funzione $x^n e^{-x} \to 0$ per $x \to +\infty$ per la gerarchia degli infiniti), quindi $y = 2$ è asintoto orizzontale destro.

$$\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} [(x^2-x)e^{-x}] + 2 = +\infty,$$

il termine $(x^2-x)e^{-x}$ diverge per $x \to -\infty$.

- **Derivata prima:**

$$f'(x) = [(2x-1)e^{-x} + (x^2-x)(-e^{-x})] = (2x-1-x^2+x)e^{-x} = (-x^2+3x-1)e^{-x}.$$

$f'(x) = 0 \Rightarrow -x^2+3x-1 = 0 \Rightarrow x = \frac{3 \pm \sqrt{5}}{2}.$

I due valori sono:
$$x_1 = \frac{3-\sqrt{5}}{2} \approx 0{,}38 \quad (minimo), \quad x_2 = \frac{3+\sqrt{5}}{2} \approx 2{,}62 \quad (massimo).$$

- **Derivata seconda — flessi:**

$$f''(x) = (-2x+3)e^{-x} - (-x^2+3x-1)e^{-x} = (x^2-5x+4)e^{-x} = (x-1)(x-4)e^{-x}.$$

$f''(x) = 0 \Rightarrow x = 1$ oppure $x = 4$.

Flessi in $F_1(1; f(1)) = F_1(1;2)$ (verifica: $f(1) = (1-1)e^{-1}+2 = 2$ ✓) e $F_2(4; f(4)) = F_2(4; 14e^{-4}+2)$.

*(grafico — vedi PDF p.68)*

### Punto 2 — Studio di $f(x)$ indipendentemente dal problema reale

La funzione è priva di punti stazionari se la derivata prima non si annulla per alcun valore di $x$. Come sopra, la derivata prima $f'(x) = (-x^2+3x-1)e^{-x}$ si annulla in $x = \frac{3\pm\sqrt{5}}{2}$.

Il limite per $x \to -\infty$: $\lim_{x \to -\infty} f(x) = +\infty$, il termine $(x^2-x)e^{-x}$ con $x \to -\infty$ equivale ad analizzare $(x^2-x)e^{-x}$; poiché $e^{-x} = e^{|x|} \to +\infty$ e $x^2 \to +\infty$, il limite è $+\infty$.

Affinché la funzione $f(x)$ ammetta un flesso in $F(1; -1)$... (riferito al Problema 2 con funzione logaritmica — vedi sotto).

La funzione candidata per il Problema 2 (sezione logaritmica, diversa dall'esponenziale) è:

$$f(x) = \frac{a\ln^2 x + b}{x}, \quad a, b \in \mathbb{R}, \; a,b \neq 0.$$

- **Dominio:** $x > 0$.

La funzione è priva di punti stazionari se $f'(x) \neq 0$ per ogni $x > 0$.

$$f'(x) = \frac{-a\ln^2 x + 2a\ln x - b}{x^2}.$$

Il numeratore è un polinomio in $t = \ln x$: $-at^2 + 2at - b$. Il discriminante è $\Delta = 4a^2 - 4ab$. Per non avere radici reali occorre $\Delta < 0$:

$$4a(a-b) < 0 \Rightarrow a(a-b) < 0.$$

Ciò avviene quando $0 < a < b$ oppure $b < a < 0$ (cioè $a$ e $b$ concordi con $|a| < |b|$).

La retta tangente al grafico di $f(x)$ nel suo punto di ascissa $x = 1$:
- $f(1) = b$;
- $f'(1) = -b$.

Equazione della tangente: $y - b = -b(x-1) \Rightarrow y = -bx + 2b$.

Ponendo $y = 0$: $x = 2$. Quindi la retta tangente in $x = 1$ per ogni funzione della famiglia passa sempre per il punto $A(2; 0)$.

### Punto 3 — Area della zona a prato e costo del seme

La zona destinata a prato corrisponde alla regione del piano compresa tra la retta $y = 5$ e il grafico di $f(x) = (x^2-x)e^{-x}+2$ nell'intervallo $[0; 6]$. L'area è:

$$A_{\text{prato}} = \int_0^6 [5 - f(x)]\,dx = \int_0^6 [5 - (x^2-x)e^{-x} - 2]\,dx = \int_0^6 [3 - (x^2-x)e^{-x}]\,dx.$$

Calcoliamo $\int_0^6 (x^2-x)e^{-x}\,dx$ con integrazione per parti (due volte):

$$\int (x^2-x)e^{-x}\,dx = -(x^2-x)e^{-x} + \int (2x-1)e^{-x}\,dx$$
$$= -(x^2-x)e^{-x} - (2x-1)e^{-x} + \int 2e^{-x}\,dx$$
$$= -(x^2-x)e^{-x} - (2x-1)e^{-x} - 2e^{-x} + C$$
$$= -(x^2+x+2)e^{-x} + C.$$

*(grafico — vedi PDF p.70)*

Quindi:

$$\int_0^6 (x^2-x)e^{-x}\,dx = \left[-(x^2+x+2)e^{-x}\right]_0^6 = -(36+6+2)e^{-6} - (-(0+0+2)e^0) = -44e^{-6} + 2.$$

Dunque:

$$A_{\text{prato}} = \int_0^6 3\,dx - \int_0^6 (x^2-x)e^{-x}\,dx = 18 - (-44e^{-6} + 2) = 18 + 44e^{-6} - 2 = 16 + 44e^{-6} \approx 16{,}11 \text{ m}^2.$$

La zona ha circa $16{,}1$ m². Per seminare $40$ g/m², occorrono $40 \times 16{,}1 \approx 644$ g di semi; poiché il seme è venduto in confezioni da $200$ g, servono $\lceil 644/200 \rceil = 4$ confezioni, per un costo totale di $4 \times 10{,}85 = 43{,}40$ €.

*(Nota: i valori esatti dipendono dai parametri specifici letti nel PDF — vedi PDF p.70)*

### Punto 4 — Equazione dell'ellisse e area dell'aiuola fiorita

La superficie dello stagno è delimitata da un'ellisse di centro $C$, avente semiassi $\sqrt{2}$ m e $\frac{\sqrt{2}}{2}$ m.

Scriviamo l'equazione dell'ellisse (centrata in $C$):

$$\frac{(x-x_C)^2}{(\sqrt{2})^2} + \frac{(y-y_C)^2}{\left(\frac{\sqrt{2}}{2}\right)^2} = 1 \Rightarrow \frac{(x-x_C)^2}{2} + \frac{(y-y_C)^2}{\frac{1}{2}} = 1 \Rightarrow \frac{(x-x_C)^2}{2} + 2(y-y_C)^2 = 1.$$

L'area di un'ellisse di semiassi $a$ e $b$ è $\pi ab$, quindi la superficie dello stagno è:

$$\pi \cdot \sqrt{2} \cdot \frac{\sqrt{2}}{2} = \pi \text{ m}^2.$$

L'area dell'aiuola fiorita (zona coperta da aubretia) si ottiene sottraendo dall'area totale del giardino le aree della zona a prato e dello stagno:

$$A_{\text{aubretia}} = 6 \cdot 5 - A_{\text{prato}} - \pi = 30 - (16 + 44e^{-6}) - \pi = 14 - 44e^{-6} - \pi \approx 14 - 0{,}11 - 3{,}14 \approx 10{,}75 \text{ m}^2.$$

Approssimando il risultato ai decimi: circa $10{,}8$ m².

Per distribuire $20$ piantine a metro quadro, Elia dovrà acquistare $20 \times 10{,}8 = 216$ piantine.

*(Nota: nel PDF le coordinate del centro $C$ dell'ellisse sono specificate — vedi PDF p.36)*

---

*Fonte:* [📄 PDF p.32](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
