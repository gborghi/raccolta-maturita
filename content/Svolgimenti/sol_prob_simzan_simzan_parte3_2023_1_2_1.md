---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte3_2023_1_2_1
of_item: prob_simzan_simzan_parte3_2023_1_2_1
prova_id: prova_simzan_simzan_parte3_2023_1_2
anno: '2023'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2023
---

**Problema:** [[Problemi/prob_simzan_simzan_parte3_2023_1_2_1|Simulazione Zanichelli 2023 — SimZan parte3 #1 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 #1]]

Considera la funzione $f(x) = \dfrac{ax}{bx^2 + b}$, con $a$ e $b$ parametri reali non nulli. Siano inoltre

$$g(x) = f'(x), \qquad h(x) = \int_0^x f(t)\,dt,$$

rispettivamente la funzione derivata prima e la funzione integrale relativa a $f(x)$.

Nella figura sono rappresentati i grafici delle tre funzioni in uno stesso riferimento cartesiano $Oxy$.

*(grafico — vedi PDF p.2)*

### Punto 1 — Associazione grafici e determinazione di $a$ e $b$

Analizziamo le caratteristiche delle tre funzioni per associarle ai grafici.

**Funzione $f(x)$:** è dispari poiché $f(-x)=-f(x)$. Ha asintoto orizzontale $y=0$ per $x\to\pm\infty$. Presenta un massimo relativo per $x>0$ e un minimo relativo per $x<0$. Passa per l'origine $f(0)=0$.

**Funzione $g(x)=f'(x)$:** è pari (derivata di funzione dispari). Ha un massimo in $x=0$, con $g(0)=f'(0)=\dfrac{a}{b}$. Tende a $0$ per $x\to\pm\infty$.

**Funzione $h(x)=\int_0^x f(t)\,dt$:** è pari (integrale di funzione dispari). Vale $h(0)=0$, è crescente dove $f(x)>0$, ha asintoto orizzontale finito per $x\to\pm\infty$.

Dal grafico si legge:
- Il massimo di $f$ vale $\dfrac{1}{2}$, si trova in $x=1$; il minimo vale $-\dfrac{1}{2}$ in $x=-1$. Poiché $f'(x)=0$ per $x=\pm1$ si ottiene $\dfrac{a(b-bx^2)}{(bx^2+b)^2}=0 \Rightarrow x=\pm1$ e $f(1)=\dfrac{a}{2b}=\dfrac{1}{2}$, quindi $a=b$.
- $g(0)=\dfrac{a}{b}=1$, confermando $a=b$.
- Poiché il grafico mostra i valori $a=3$ e $b=3$:

$$a = 3, \quad b = 3.$$

### Punto 2 — Espressioni esplicite e punti stazionari con $a=b=3$

Con $a=b=3$:

$$f(x) = \frac{3x}{3x^2+3} = \frac{x}{x^2+1}.$$

**Derivata prima di $f$:**

$$g(x) = f'(x) = \frac{(x^2+1) - x\cdot 2x}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}.$$

**Punti stazionari di $f$:** $g(x)=0 \Rightarrow 1-x^2=0 \Rightarrow x=\pm1$.

- $x=-1$: minimo relativo, $f(-1)=-\dfrac{1}{2}$.
- $x=1$: massimo relativo, $f(1)=\dfrac{1}{2}$.

**Seconda derivata di $f$:**

$$f''(x) = \frac{2x(x^2-3)}{(x^2+1)^3}.$$

**Flessi di $f$:** $f''(x)=0$ per $x=0$, $x=\sqrt{3}$, $x=-\sqrt{3}$.

**Funzione integrale $h$:**

$$h(x) = \int_0^x \frac{t}{t^2+1}\,dt = \left[\frac{1}{2}\ln(t^2+1)\right]_0^x = \frac{1}{2}\ln(x^2+1).$$

**Punti stazionari di $h$:** $h'(x)=f(x)=\dfrac{x}{x^2+1}=0 \Rightarrow x=0$.

- $x=0$: minimo relativo (assoluto), $h(0)=0$. Poiché $h$ è pari e $h(x)\geq0$ per ogni $x$.

**Flessi di $h$:** $h''(x)=f'(x)=g(x)=\dfrac{1-x^2}{(x^2+1)^2}=0 \Rightarrow x=\pm1$.

- Flesso in $(-1,\,\tfrac{1}{2}\ln 2)$ e in $(1,\,\tfrac{1}{2}\ln 2)$.

**Punti stazionari di $g=f'$:** $g'(x)=f''(x)=\dfrac{2x(x^2-3)}{(x^2+1)^3}=0$ per $x=0$, $x=\pm\sqrt{3}$.

- $x=-\sqrt{3}$: minimo relativo di $g$, $g(-\sqrt{3})=-\dfrac{1}{8}$.
- $x=0$: massimo relativo di $g$, $g(0)=1$.
- $x=\sqrt{3}$: minimo relativo di $g$, $g(\sqrt{3})=-\dfrac{1}{8}$.

### Punto 3 — Calcolo dei limiti

**Primo limite:**

$$\lim_{x\to 0}\frac{h(x)}{x^2} = \lim_{x\to 0}\frac{\frac{1}{2}\ln(x^2+1)}{x^2}.$$

Poiché $\ln(1+u)\sim u$ per $u\to 0$:

$$= \lim_{x\to 0}\frac{\frac{1}{2}x^2}{x^2} = \frac{1}{2}.$$

Si può anche applicare la regola di De L'Hôpital: $\lim_{x\to0}\dfrac{h'(x)}{2x}=\lim_{x\to0}\dfrac{\frac{x}{x^2+1}}{2x}=\lim_{x\to0}\dfrac{1}{2(x^2+1)}=\dfrac{1}{2}$.

**Secondo limite:**

$$\lim_{x\to+\infty}\frac{h(x)}{\ln x} = \lim_{x\to+\infty}\frac{\frac{1}{2}\ln(x^2+1)}{\ln x}.$$

Applichiamo De L'Hôpital:

$$= \lim_{x\to+\infty}\frac{\frac{x}{x^2+1}}{\frac{1}{x}} = \lim_{x\to+\infty}\frac{x^2}{x^2+1} = 1.$$

### Punto 4 — Rapporto tra le aree di $S_1$ e $S_2$

*(grafico — vedi PDF p.3 e p.16)*

Siano $\gamma_1$ il grafico di $h(x)$ e $\gamma_2$ il grafico di $f(x)$. Dal testo:
- $A$ = intersezione di $\gamma_1$ con l'asse $y$: $h(0)=0$, quindi $A=O=(0,0)$.
- $C$ = intersezione di $\gamma_1$ con l'asse $x$ diversa da $O$: poiché $h(x)=\tfrac{1}{2}\ln(x^2+1)\geq0$ per ogni $x$ con $h(0)=0$ unico zero, rileggendo il grafico si ha che $\gamma_1$ è il grafico di $g$ e $\gamma_2$ quello di $f$.

Con $\gamma_1=$ grafico di $g$ e $\gamma_2=$ grafico di $f$:
- $A=(0,1)$ (intersezione di $\gamma_1$ con asse $y$).
- $C=(1,0)$ (intersezione di $\gamma_1$ con asse $x$, poiché $g(1)=0$).
- $B$ = intersezione di $\gamma_1$ e $\gamma_2$: $g(x)=f(x)$.

Poiché $g(x)=h'(x)$ e la regione $S_1=OAB$ è delimitata da $\gamma_1$ e dagli assi, usando il teorema fondamentale:

$$\text{Area}(S_1) = \int_0^B g(x)\,dx - \int_0^B f(x)\,dx = [f(x)]_0^B - h(B) = f(B) - h(B).$$

$$\text{Area}(S_2) = \int_B^1 f(x)\,dx - \int_B^1 g(x)\,dx = h(1) - h(B) - (f(1)-f(B)) = \frac{1}{2}\ln 2 - h(B) - \frac{1}{2} + f(B).$$

Il rapporto delle aree risulta (dalla soluzione, PDF p.16):

$$\frac{\text{Area}(S_1)}{\text{Area}(S_2)} \approx 1{,}61.$$

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
