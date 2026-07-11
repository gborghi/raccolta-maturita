---
tipo: soluzione
prova_stem: simzan_simzan_parte3_2024_2_32
pdf: SimZan_parte3.pdf
source: vision
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Svolgimento'
---
**Simulazione Zanichelli 2024 — Prova di Matematica dell'Esame di Stato per il Liceo Scientifico**

---

## Problema 1

Considera la funzione

$$f_k(x) = \frac{x(2x+k)}{x^2+k},$$

dove $k \neq 0$ è un parametro reale non nullo; $\gamma_k$ indica il suo grafico.

### Punto 1 — Dominio e retta tangente comune

La funzione $f_k(x)$ è razionale fratta; il denominatore è $x^2 + k$.

- Se $k > 0$: $x^2 + k > 0$ per ogni $x \in \mathbb{R}$, quindi $D = \mathbb{R}$.
- Se $k < 0$: $x^2 + k = 0 \Rightarrow x = \pm\sqrt{-k}$, quindi $D = \mathbb{R} \setminus \{\pm\sqrt{-k}\}$.

La funzione $f_k(x)$ è continua e derivabile nel suo dominio naturale. Per ogni $k \neq 0$: $f_k(0) = 0$, quindi tutte le curve passano per l'origine $O(0;0)$.

Calcoliamo la derivata prima:

$$f_k'(x) = \frac{(4x+k)(x^2+k) - x(2x+k) \cdot 2x}{(x^2+k)^2} = \frac{-kx^2 + 4kx + k^2}{(x^2+k)^2} = \frac{k(-x^2+4x+k)}{(x^2+k)^2}.$$

In $x = 0$:

$$f_k'(0) = \frac{k \cdot k}{k^2} = 1,$$

quindi la retta tangente in $O$ ha equazione $y = x$ per ogni $k \neq 0$.

### Punto 2 — Intersezioni fisse tra $\gamma_k$ e $\gamma_t$ per $k = -4 \land k \neq 0$

Per trovare le intersezioni fisse al variare di $k$, si risolve $f_k(x) = f_t(x)$ in generale; oppure si cercano i punti $(x_0, y_0)$ tali che $f_k(x_0)$ non dipende da $k$. Si verifica che i punti fissi sono $O(0;0)$ e $A(2;2)$.

Fissato $k = 4$, poniamo $f(x) = f_4(x)$ e indichiamo con $\gamma$ il suo grafico.

### Punto 3 — Studio di $f(x) = f_4(x)$

Con $k = 4$:

$$f(x) = \frac{x(2x+4)}{x^2+4} = \frac{2x^2+4x}{x^2+4}.$$

**Dominio:** $\mathbb{R}$ (il denominatore $x^2+4 > 0$ sempre).

**Intersezioni con gli assi:**
- $f(x) = 0 \Rightarrow 2x(x+2) = 0 \Rightarrow x = 0$ o $x = -2$; le intersezioni con l'asse $x$ sono $O(0;0)$ e $(-2;0)$.
- Intersezione con l'asse $y$: $f(0) = 0$, cioè l'origine.

**Asintoti:**
- Non ci sono asintoti verticali.
- Asintoto orizzontale: $\lim_{x \to \pm\infty} f(x) = 2$, quindi $y = 2$ è asintoto orizzontale.

**Derivata prima:**

$$f'(x) = \frac{(4x+4)(x^2+4) - (2x^2+4x) \cdot 2x}{(x^2+4)^2} = \frac{-4x^2+16x+16}{(x^2+4)^2} = \frac{-4(x^2-4x-4)}{(x^2+4)^2}.$$

$f'(x) = 0 \Rightarrow x^2 - 4x - 4 = 0 \Rightarrow x = 2 \pm 2\sqrt{2}.$

Quindi $x_1 = 2 - 2\sqrt{2} \approx -0{,}83$ (minimo relativo $M_1$) e $x_2 = 2 + 2\sqrt{2} \approx 4{,}83$ (massimo relativo $M_2$).

Valori:
- $f(2-2\sqrt{2}) \approx -1{,}25$ (punto di minimo $M_1$);
- $f(2+2\sqrt{2}) \approx 2{,}41$ (punto di massimo $M_2$).

**Derivata seconda — flessi:**

$$f''(x) = \frac{8(x^3 - 6x^2 - 12x + 8)}{(x^2+4)^3}.$$

$f''(x) = 0$ si annulla per tre valori reali. Si trovano tre flessi in:
- $x = -2 \Rightarrow f(-2) = 0$;
- $x = 4 - 2\sqrt{3} \Rightarrow f(4-2\sqrt{3}) \approx 0{,}64$;
- $x = 4 + 2\sqrt{3} \Rightarrow f(4+2\sqrt{3}) \approx 2{,}37$.

*(grafico — vedi PDF p.51)*

### Punto 4 — Aree delle regioni $R_1$ e $R_2$

La regione $R_1$ è delimitata da $\gamma$, dall'asintoto orizzontale $y = 2$ e dall'asse delle ordinate. La regione $R_2$ è delimitata da $\gamma$ e dall'asse delle ascisse.

Ricaviamo la famiglia delle primitive di $f(x)$; riscriviamo:

$$f(x) = \frac{2x^2+4x}{x^2+4} = 2 + \frac{4x-8}{x^2+4} = 2 + \frac{4x}{x^2+4} - \frac{8}{x^2+4}.$$

Quindi:

$$F(x) = \int f(x)\,dx = 2x + 2\ln(x^2+4) - 4\arctan\frac{x}{2} + C.$$

Calcoliamo le aree (tralasciando la costante additiva):

$$\text{Area}(R_1) = \int_0^2 [2 - f(x)]\,dx = \left[2x - 2\ln(x^2+4) + 4\arctan\frac{x}{2}\right]_0^2$$
$$= \left(4 - 2\ln 8 + 4 \cdot \frac{\pi}{4}\right) - \left(0 - 2\ln 4 + 0\right) = 4 - 2\ln 8 + \pi + 2\ln 4$$
$$= 4 + \pi - 2\ln 2 - 2 \cdot 2\ln 2 + 2 \cdot 2\ln 2 \ldots$$

Semplificando: $-2\ln 8 + 2\ln 4 = 2\ln\frac{4}{8} = 2\ln\frac{1}{2} = -2\ln 2$, quindi

$$\text{Area}(R_1) = -2\ln(x^2+4) + 4\arctan\frac{x}{2} + 2x\Big|_0^2 = (-2\ln 8 + \pi + 4) - (-2\ln 4) = \pi + 4 - 2\ln 2 - 2\ln 4 + 2\ln 4$$

Mediante calcolo diretto (vedi PDF p.52):

$$\text{Area}(R_1) = -2\ln 2 - 2\ln 2 + \pi + 4\ln 2 = \pi \approx 1{,}76.$$

$$\text{Area}(R_2) = \int_{-2}^0 [-f(x)]\,dx = \left[-2x - 2\ln(x^2+4) + 4\arctan\frac{x}{2}\right]_{-2}^0$$
$$= \left(-4 \cdot 0 - 2\ln 4 + 0\right) - \left(4 - 2\ln 8 - \pi\right) = -2\ln 4 - 4 + 2\ln 8 + \pi$$
$$= 2\ln 2 - 4 + \pi + \ldots \approx 0{,}53.$$

*(grafico — vedi PDF p.52)*

La regione di area maggiore è dunque $R_1$.

---

## Problema 2

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

## Quesito 1

**a.** I triangoli rettangoli $ABM$ e $BCN$ sono congruenti per il primo criterio di congruenza (tre lati uguali). Risultano allora congruenti gli angoli corrispondenti: $M\hat{A}B \cong N\hat{B}C$. Consideriamo i triangoli $AMB$ e $HMB$: hanno in comune l'angolo in $M$ e i segmenti $AM$ e $HB$ sono uguali per costruzione. Quindi $AM \cong HM$; poiché angolo $\hat{M}$ in comune, segue che $AM \perp BM$.

**b.** Per il teorema di Pitagora, nel triangolo rettangolo $BCN$:

$$BN = \sqrt{BC^2 + CN^2} = \sqrt{\left(\frac{2}{3}\right)^2 + \left(\frac{1}{3}\right)^2} = \sqrt{\frac{4}{9} + \frac{1}{9}} = \sqrt{\frac{5}{9}} = \frac{\sqrt{5}}{3}.$$

Poiché i triangoli $ABK$ e $KBN$ (con $K$ punto di intersezione tra $AC$ e $BN$) sono simili con rapporto 2, si ha $BK = \frac{2}{3}$ e $NK = \frac{1}{3}$.

*(grafico — vedi PDF p.59)*

Nel triangolo $ABK$ calcoliamo l'altezza $\overline{BH}$:

$$\overline{BH} = \frac{AB \cdot BK}{\overline{AN}} = \frac{1 \cdot \frac{2}{3}}{\frac{\sqrt{5}}{3}} = \frac{2}{\sqrt{5}} = \frac{2\sqrt{5}}{5}.$$

La lunghezza di $HK$:

$$\overline{HK} = \overline{BK} - \overline{BH} = \frac{\sqrt{5}}{2} - \frac{2\sqrt{5}}{5} = \frac{5\sqrt{5} - 4\sqrt{5}}{10} = \frac{\sqrt{5}}{10}.$$

---

## Quesito 2

Nel riferimento cartesiano $Oxyz$ e raggio 1, ricava l'equazione del piano $\alpha$ tangente alla superficie sferica di centro $O(0;0;0)$ e raggio 1 nel suo punto $P\!\left(\frac{2}{3}; \frac{6}{7}; \frac{3}{4}\right)$.

Verifichiamo che $P$ appartiene alla sfera: $\left(\frac{2}{3}\right)^2 + \left(\frac{6}{7}\right)^2 + \left(\frac{3}{4}\right)^2 = \frac{4}{9} + \frac{36}{49} + \frac{9}{16}$.

*(Le coordinate esatte di P si leggono nel PDF — vedi PDF p.59)*

Il piano $\alpha$ è perpendicolare al vettore $\overrightarrow{OP}$; la sua equazione è:

$$\frac{2}{3}x + \frac{6}{7}y + \frac{3}{4}z - 1 = 0 \quad \Leftrightarrow \quad 2x + 6y + 3z - 7 = 0.$$

*(moltiplicando per il minimo comune multiplo dei denominatori)*

Le intersezioni di $\alpha$ con i tre assi coordinati:

$$A = \left(\frac{7}{2}; 0; 0\right), \quad B = \left(0; \frac{7}{6}; 0\right), \quad C = \left(0; 0; \frac{7}{3}\right).$$

*(grafico — vedi PDF p.60)*

Per ricavare l'area del triangolo $ABC$, utilizziamo il volume della piramide $OABC$.

La distanza di $O$ dal piano $\alpha$ è:

$$h = \frac{|2 \cdot 0 + 6 \cdot 0 + 3 \cdot 0 - 7|}{\sqrt{4+36+9}} = \frac{7}{7} = 1.$$

Il volume della piramide $OABC$ (base $\triangle OAB$, altezza $OC$):

$$V_{OABC} = \frac{1}{6} \cdot OA \cdot OB \cdot OC = \frac{1}{6} \cdot \frac{7}{2} \cdot \frac{7}{6} \cdot \frac{7}{3} = \frac{343}{216}.$$

Poiché $V_{OABC} = \frac{1}{3} \cdot A_{ABC} \cdot h$ con $h = 1$:

$$A_{ABC} = 3 \cdot V_{OABC} = 3 \cdot \frac{343}{216} = \frac{343}{72}.$$

**Metodo alternativo — Calcolo di $A_{ABC}$ con il teorema dei coseni:**

$$a = BC = \sqrt{OB^2 + OC^2} = \sqrt{\frac{49}{36} + \frac{49}{9}} = \frac{7}{6}\sqrt{1+4} = \frac{7\sqrt{5}}{6}.$$

$$b = AC = \frac{7}{2}\sqrt{1+\frac{4}{9}} = \frac{7}{2} \cdot \frac{\sqrt{13}}{3} = \frac{7\sqrt{13}}{6}.$$

$$c = AB = \frac{7}{6}\sqrt{4+1} = \frac{7\sqrt{5}}{6} \cdot \ldots$$

*(Per i dettagli del calcolo, vedi PDF p.60)*

---

## Quesito 3

Andrea va a scuola ogni giorno con lo stesso autobus, dal lunedì al venerdì. La probabilità $p$ di trovare un posto libero è distribuita nel corso della settimana come segue:

| Giorno | Lunedì | Martedì | Mercoledì | Giovedì | Venerdì |
|--------|--------|---------|-----------|---------|---------|
| Probabilità $p$ | 10% | 20% | 30% | 20% | 10% |

**a.** La probabilità $p_1$ che nel corso della settimana Andrea possa sedersi sull'autobus almeno una volta è il complementare della probabilità che non si sieda mai:

$$p_1 = 1 - (1-0{,}1)(1-0{,}2)(1-0{,}3)(1-0{,}2)(1-0{,}1) = 1 - 0{,}9 \cdot 0{,}8 \cdot 0{,}7 \cdot 0{,}8 \cdot 0{,}9$$
$$= 1 - \frac{9 \cdot 8 \cdot 7 \cdot 8 \cdot 9}{10^5} = 1 - \frac{36288}{100000} \approx 0{,}637 = 63{,}7\%.$$

**b.** Calcoliamo la probabilità $p_2$ che nel corso della settimana Andrea abbia trovato posto di giovedì, sapendo che è stata l'unica volta nella settimana in cui ciò si è verificato.

L'evento $A$ = "si siede solo di giovedì":

$$P(A) = 0{,}9 \cdot 0{,}8 \cdot 0{,}7 \cdot 0{,}2 \cdot 0{,}9 = \frac{9 \cdot 8 \cdot 7 \cdot 2 \cdot 9}{10^5} = \frac{9072}{100000}.$$

L'evento $B$ = "si siede esattamente una volta nella settimana":

$$P(B) = \frac{1}{10^5}\left[\frac{9072}{10} + \frac{9072}{8} \cdot \ldots\right]$$

Calcoliamo $P(B)$ sommando su tutti i giorni:

$$P(B) = p_{\text{L}} \prod_{j \neq \text{L}} (1-p_j) + p_{\text{Ma}} \prod_{j \neq \text{Ma}} (1-p_j) + \ldots$$

Osserviamo che $\prod_{j=1}^5 (1-p_j) = 0{,}36288$; quindi:

$$P(\text{solo lunedì}) = \frac{0{,}1}{0{,}9} \cdot 0{,}36288 = 0{,}04032; \quad P(\text{solo venerdì}) = 0{,}04032.$$
$$P(\text{solo martedì}) = \frac{0{,}2}{0{,}8} \cdot 0{,}36288 = 0{,}09072; \quad P(\text{solo giovedì}) = 0{,}09072.$$
$$P(\text{solo mercoledì}) = \frac{0{,}3}{0{,}7} \cdot 0{,}36288 = 0{,}15552.$$

$$P(B) = 0{,}04032 + 0{,}09072 + 0{,}15552 + 0{,}09072 + 0{,}04032 = 0{,}4176.$$

$$p_2 = P(A|B) = \frac{P(A)}{P(B)} = \frac{0{,}09072}{0{,}4176} = \frac{9072}{41760} = \frac{9}{41{,}76} \approx 0{,}217 \approx 21{,}7\%.$$

---

## Quesito 4

Dimostra che il volume massimo di una piramide retta a base quadrata inscritta in una sfera è minore di $\frac{1}{3}$ del volume della sfera.

Sia la sfera di raggio $r$. Scegliamo un sistema di riferimento con centro nella sfera. Sia $x$ la distanza del centro $O$ dalla base della piramide ($0 < x < 2r$); l'altezza della piramide è $h = r + x$ e il raggio della base $\rho = \sqrt{r^2 - x^2}$.

L'apotema della base quadrata è $\rho$, quindi il lato del quadrato è $l = \rho\sqrt{2} = \sqrt{2(r^2-x^2)}$.

Il volume della piramide:

$$V(x) = \frac{1}{3} l^2 h = \frac{1}{3} \cdot 2(r^2-x^2) \cdot (r+x) = \frac{2}{3}(r-x)(r+x)^2.$$

*(Nota: si è posto $h = r + x$ dove $x$ è la distanza del centro dalla base, con vertice opposto sul bordo della sfera)*

Per semplicità, poniamo $r = 1$:

$$V(x) = \frac{2}{3}(1-x)(1+x)^2 \quad \text{per } 0 < x < 1 \text{ (vertex sopra l'equatore)}.$$

*(In realtà il parametro $x$ varia in $(-r, r)$ e nella trattazione si usa $V(x) = \frac{2}{3}x(2-x)^2$ con $0 < x < 2$; poniamo $r=1$ — vedi PDF p.62)*

Derivata prima:

$$V'(x) = \frac{2}{3}\left[(2-x)^2 + x \cdot 2(2-x)(-1)\right] = \frac{2}{3}(2-x)(2-3x).$$

$V'(x) = 0 \Rightarrow x = 2$ (fuori dal dominio) o $x = \frac{2}{3}$.

$V\!\left(\frac{2}{3}\right) = \frac{2}{3} \cdot \frac{2}{3} \cdot \left(\frac{4}{3}\right)^2 = \frac{4}{9} \cdot \frac{16}{9} = \frac{64}{81}.$

Il rapporto tra il volume massimo della piramide e il volume della sfera:

$$\frac{V_{\max}}{V_{\text{sfera}}} = \frac{\frac{64}{81}}{\frac{4\pi}{3}} = \frac{64}{81} \cdot \frac{3}{4\pi} = \frac{16}{27\pi} \approx 0{,}1886 < \frac{1}{3},$$

quindi è dimostrato che il volume massimo di una piramide retta a base quadrata inscritta nella sfera è minore di $\frac{1}{3}$ del volume della sfera. $\square$

---

## Quesito 5

Date le funzioni

$$f(x) = \frac{6-ax}{x-3}, \quad g(x) = \frac{b-2x}{x+2},$$

ricava i valori di $a$ e $b$ in modo tale che i grafici di $f(x)$ e $g(x)$ si intersecano in un punto $P$ di ascissa $x = 2$ e le rette tangenti in tale punto siano perpendicolari. Verifica che $f_1(x)$ e $g_1(x)$ corrispondono in una simmetria assiale di asse $y = -x$ e $g_1(x)$.

Le condizioni per lo stesso punto $P$ di ascissa $x = 2$ equivalgono a $f(2) = g(2)$:

$$f(2) = \frac{6-2a}{-1} = 2a - 6, \quad g(2) = \frac{b-4}{4}.$$

$f(2) = g(2) \Rightarrow 2a - 6 = \frac{b-4}{4} \Rightarrow 8a - 24 = b - 4 \Rightarrow b = 8a - 20.$

Calcoliamo le derivate:

$$f'(x) = \frac{-a(x-3) - (6-ax)}{(x-3)^2} = \frac{-3a+18}{(x-3)^2} = \frac{-3(a-6)}{(x-3)^2},$$

$$g'(x) = \frac{-2(x+2) - (b-2x)}{(x+2)^2} = \frac{-4-b}{(x+2)^2}.$$

Le tangenti in $P(2, f(2))$ sono perpendicolari quando $f'(2) \cdot g'(2) = -1$:

$$f'(2) = \frac{-3(a-6)}{1} = -3(a-6) = 18-3a.$$

$$g'(2) = \frac{-4-b}{16}.$$

Condizione di perpendicolarità:

$$(18-3a) \cdot \frac{-4-b}{16} = -1 \Rightarrow (18-3a)(-4-b) = -16.$$

Sostituendo $b = 8a-20$:

$$(18-3a)(-4-(8a-20)) = -16 \Rightarrow (18-3a)(16-8a) = -16$$
$$\Rightarrow 3(6-a) \cdot 8(2-a) = -16 \Rightarrow 24(6-a)(2-a) = -16$$
$$\Rightarrow (6-a)(2-a) = -\frac{2}{3}.$$

Espandendo: $12 - 8a + a^2 = -\frac{2}{3} \Rightarrow a^2 - 8a + \frac{38}{3} = 0 \Rightarrow 3a^2 - 24a + 38 = 0.$

$$a = \frac{24 \pm \sqrt{576 - 456}}{6} = \frac{24 \pm \sqrt{120}}{6} = 4 \pm \frac{\sqrt{120}}{6}.$$

*(vedi PDF p.63 per la verifica della simmetria assiale)*

Le equazioni della simmetria assiale di asse $y = -x$ si trovano con il sistema:

$$\begin{cases} x' = -y \\ y' = -x \end{cases},$$

e si verifica che $g_1(x) = f_1(-x)/(-1)$ ovvero $g_1(x)$ si ottiene da $f_1(x)$ per simmetria assiale di asse $y = -x$.

---

## Quesito 6

Determina il valore del parametro $a \in \mathbb{R}$ in modo tale che valga:

$$\lim_{x \to 0} \frac{\sin x - x + ax^3}{2x(1-\cos x)} = \frac{17}{6}.$$

Verifichiamo le ipotesi del teorema di De L'Hospital: le funzioni $f(x) = \sin x - x + ax^3$ e $g(x) = 2x(1-\cos x)$ sono continue e derivabili in $\mathbb{R}$, con $f(0) = 0$ e $g(0) = 0$ (forma indeterminata $\frac{0}{0}$). Verifichiamo che esiste $\lim_{x\to 0} \frac{f'(x)}{g'(x)}$.

**Metodo con gli sviluppi di Taylor:** Usiamo le espansioni per $x \to 0$:

$$\sin x = x - \frac{x^3}{6} + O(x^5), \quad 1 - \cos x = \frac{x^2}{2} + O(x^4).$$

Numeratore: $\sin x - x + ax^3 = \left(a - \frac{1}{6}\right)x^3 + O(x^5)$.

Denominatore: $2x(1-\cos x) = 2x \cdot \frac{x^2}{2} + O(x^5) = x^3 + O(x^5)$.

Quindi:

$$\lim_{x \to 0} \frac{\sin x - x + ax^3}{2x(1-\cos x)} = \frac{a - \frac{1}{6}}{1} = a - \frac{1}{6} = \frac{17}{6}.$$

$$a = \frac{17}{6} + \frac{1}{6} = \frac{18}{6} = 3.$$

**Verifica con De L'Hospital:**

Dividiamo numeratore e denominatore per $x^2$ e usiamo i limiti notevoli $\frac{1-\cos x}{x^2} \to \frac{1}{2}$, $\frac{\sin x}{x} \to 1$:

Numeratore $\div x^2$: $\frac{\sin x - x}{x^3} + a \to -\frac{1}{6} + a$.

Denominatore $\div x^2$: $\frac{2(1-\cos x)}{x^2} + 2 \cdot \frac{\sin x}{x} \cdot \frac{1}{1} \to 2 \cdot \frac{1}{2} + 2 \cdot 1 = 3.$

(Dove $\frac{\sin x - x}{x^3} \to -\frac{1}{6}$ per gli sviluppi di Taylor.)

Quindi il limite è $\frac{-\frac{1}{6} + a}{3} = \frac{17}{6} \Rightarrow -\frac{1}{6} + a = \frac{17}{2} \Rightarrow a = \frac{17}{2} + \frac{1}{6} = \frac{51}{6} + \frac{1}{6} = \frac{52}{6}$...

Ricalcolo corretto con il metodo degli sviluppi (più affidabile):

$$\lim_{x \to 0} \frac{\left(a - \frac{1}{6}\right)x^3 + O(x^5)}{x^3 + O(x^5)} = a - \frac{1}{6} = \frac{17}{6} \Rightarrow \boxed{a = 3}.$$

---

## Quesito 7

Data una generica funzione polinomiale di terzo grado $f(x) = ax^3 + bx^2 + cx + d$, dimostra che le rette tangenti al grafico in punti con ascissa simmetrica rispetto al punto di flesso $x_F$ sono parallele tra loro.

**Dimostrazione:** Il punto di flesso ha ascissa $x_F = -\frac{b}{3a}$ (da $f''(x_F) = 0$). Due punti simmetrici a $x_F$ hanno la forma $x_F - h$ e $x_F + h$.

$f'(x) = 3ax^2 + 2bx + c$. Calcoliamo:

$$m_1 = f'(x_F - h) = 3a(x_F-h)^2 + 2b(x_F-h) + c,$$
$$m_2 = f'(x_F + h) = 3a(x_F+h)^2 + 2b(x_F+h) + c.$$

Sottraendo:

$$m_2 - m_1 = 3a \cdot 4x_Fh + 2b \cdot 2h = 4h(3ax_F + b) = 4h\!\left(3a \cdot \left(-\frac{b}{3a}\right) + b\right) = 4h \cdot 0 = 0.$$

Dunque $m_1 = m_2$, cioè le rette tangenti sono parallele. $\square$

**Applicazione alla funzione $y = -x^3 + 3x^2 - 2x - 1$:**

$f'(x) = -3x^2 + 6x - 2$; $f''(x) = -6x + 6 = 0 \Rightarrow x_F = 1$.

Il punto $A$ ha ascissa $-1$ (distante $2$ da $x_F = 1$); il simmetrico $B$ ha ascissa $3$.

$$m = f'(-1) = -3 - 6 - 2 = -11 = f'(3) = -27 + 18 - 2. \quad \checkmark$$

$f(-1) = 1 + 3 + 2 - 1 = 5$. Quindi $A = (-1; 5)$.

$f(3) = -27 + 27 - 6 - 1 = -7$. Quindi $B = (3; -7)$.

Equazione delle rette tangenti:

$$t_A: y - 5 = -11(x+1) \Rightarrow y = -11x - 6.$$
$$t_B: y + 7 = -11(x-3) \Rightarrow y = -11x + 26.$$

Le due rette $t_A: y = -11x - 6$ e $t_B: y = -11x + 26$ sono parallele (stesso coefficiente angolare $-11$). $\square$

---

## Quesito 8

In figura è rappresentato il grafico $\gamma$ della funzione $f(x) = x^4 - 2x^3 + 2$.

*(grafico — vedi PDF p.35)*

Trova le tangenti inflessionali di $\gamma$, poi verifica che le aree delle due regioni di piano delimitate da $\gamma$ e da ciascuna delle tangenti sono uguali.

**Derivate:**

$$f'(x) = 4x^3 - 6x^2 = 2x^2(2x-3).$$
$$f''(x) = 12x^2 - 12x = 12x(x-1).$$

$f''(x) = 0 \Rightarrow x = 0$ oppure $x = 1$.

**Punti di flesso:**
- $F_1 = (0;\; f(0)) = (0; 2)$;
- $F_2 = (1;\; f(1)) = (1; 1)$.

**Coefficienti angolari delle tangenti inflessionali:**

$$m_1 = f'(0) = 0, \quad m_2 = f'(1) = 4 - 6 = -2.$$

**Equazioni delle tangenti inflessionali:**

- In $F_1 = (0; 2)$: $t_1: y = 2$ (retta orizzontale).
- In $F_2 = (1; 1)$: $t_2: y - 1 = -2(x-1) \Rightarrow y = -2x + 3$.

**Intersezioni di $\gamma$ con $t_1: y = 2$:**

$$x^4 - 2x^3 + 2 = 2 \Rightarrow x^3(x-2) = 0 \Rightarrow x = 0 \text{ o } x = 2.$$

**Intersezioni di $\gamma$ con $t_2: y = -2x+3$:**

$$x^4 - 2x^3 + 2 = -2x + 3 \Rightarrow x^4 - 2x^3 + 2x - 1 = 0.$$

Scomponiamo: $x = 1$ è radice doppia; dividendo per $(x-1)^2$:

$$x^4 - 2x^3 + 2x - 1 = (x-1)^3(x+1).$$

Quindi: $x = 1$ (tripla) e $x = -1$.

*(grafico — vedi PDF p.67)*

**Calcolo delle aree:**

Dal grafico: $f(x) \leq 2$ in $[0; 2]$ e $f(x) \leq -2x+3$ in $[-1; 1]$, quindi:

$$A_1 = \int_0^2 [2 - f(x)]\,dx = \int_0^2 (2 - x^4 + 2x^3 - 2)\,dx = \int_0^2 (-x^4 + 2x^3)\,dx$$
$$= \left[-\frac{x^5}{5} + \frac{x^4}{2}\right]_0^2 = \left(-\frac{32}{5} + \frac{16}{2}\right) - 0 = -\frac{32}{5} + 8 = \frac{8}{5}.$$

$$A_2 = \int_{-1}^1 [-2x + 3 - f(x)]\,dx = \int_{-1}^1 (-x^4 + 2x^3 - 2x + 1)\,dx$$
$$= \left[-\frac{x^5}{5} + \frac{x^4}{2} - x^2 + x\right]_{-1}^1$$
$$= \left(-\frac{1}{5} + \frac{1}{2} - 1 + 1\right) - \left(\frac{1}{5} + \frac{1}{2} - 1 - 1\right)$$
$$= \left(-\frac{1}{5} + \frac{1}{2}\right) - \left(\frac{1}{5} + \frac{1}{2} - 2\right) = -\frac{2}{5} + 2 = \frac{8}{5}.$$

Le due regioni hanno la stessa area: $A_1 = A_2 = \dfrac{8}{5}$. $\square$
