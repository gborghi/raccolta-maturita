---
tipo: soluzione
prova_stem: 2013_ordinamento_2013_problema2_10
pdf: Prova_Maturita_2013.pdf
source: text
title: 2013 Ordinamento — Problema 2 — Svolgimento
---


### Punto 1)

La funzione è

$$f(x) = \frac{8}{x^2 + 4}$$

La funzione è definita su tutto $\mathbb{R}$, è pari, è sempre positiva, non interseca l'asse $x$, interseca l'asse $y$ in $y = 2$.
I limiti a $+\infty$ e $-\infty$ sono uguali a $0^+$ (l'asse $x$ è asintoto).

La derivata prima è

$$y' = \frac{-16x}{(x^2 + 4)^2}$$

che è positiva per $x < 0$, negativa per $x > 0$ e nulla per $x = 0$ (quindi la funzione cresce fino a $0$, ha un massimo assoluto in $x = 0$, decresce da $0$ in poi).

La derivata seconda è

$$y'' = \frac{16(3x^2 - 4)}{(x^2 + 4)^3}$$

che è positiva quando $3x^2 - 4 > 0$, cioè quando $x < -\dfrac{2}{\sqrt{3}}$ oppure $x > \dfrac{2}{\sqrt{3}}$; quindi la concavità della curva è rivolta verso l'alto in tali intervalli, verso il basso per $-\dfrac{2}{\sqrt{3}} < x < \dfrac{2}{\sqrt{3}}$; in $x = \pm\dfrac{2}{\sqrt{3}}$ abbiamo dei flessi, di ordinata $\dfrac{3}{2}$.

*(grafico — vedi PDF)*

Cerchiamo ora le tangenti nei punti $P = (-2;\, 1)$ e $Q = (2;\, -1)$.

Risulta $f'(-2) = \dfrac{1}{2}$ e $f'(2) = -\dfrac{1}{2}$, quindi le rette tangenti in $P$ e $Q$ sono rispettivamente:

- tangente in $P$: $y = \dfrac{1}{2}x + 2$
- tangente in $Q$: $y = -\dfrac{1}{2}x + 2$

La distanza $OQ$, uguale per simmetria alla distanza $OP$, è uguale a $\sqrt{5}$. Le rette $OP$ e $OQ$ si intersecano sull'asse delle $y$ nel punto $M$ di ordinata $2$, quindi le distanze $PM$ e $QM$ sono uguali anch'esse a $\sqrt{5}$: il quadrilatero $OQMP$ è quindi un rombo.

Detto $\beta$ l'angolo che la retta $OQ$ forma con l'asse delle $x$, risulta $\tan\beta = \dfrac{1}{2}$. Per l'evidente simmetria della figura risulta che l'angolo $POQ$ è uguale a

$$\angle POQ = 180° - 2\beta = 180° - 2\arctan\!\left(\tfrac{1}{2}\right) \approx 126°52'$$

Quindi gli angoli $POQ$ e $PMQ$ misurano $126°52'$.
L'angolo $MQO$ (e $MPO$) è supplementare di $POQ$, quindi misura

$$\angle MQO = 2\arctan\!\left(\tfrac{1}{2}\right) = 2\beta \approx 53°08'$$

Gli angoli del rombo si possono trovare alternativamente nel seguente modo:

l'angolo $\alpha$ formato dalle rette $MP$ e $MQ$ è ottuso, poiché l'angolo che la retta $OQ$ forma con l'asse $x$ misura meno di $45°$; esso è tale che

$$\tan\alpha = \frac{\frac{1}{2} + \frac{1}{2}}{1 - \frac{1}{2}\cdot\frac{1}{2}} = \frac{1}{\frac{3}{4}} - 1 = -\frac{4}{3}$$

quindi

$$\alpha = \arctan\!\left(-\tfrac{4}{3}\right) \approx 126.87° \approx 126°52'$$

Quindi gli angoli $PMQ$ e $POQ$ misurano $126°52'$.
Gli angoli $MPO$ e $MQO$, supplementari di $\alpha$, misureranno $180° - 126°52' = 53°08'$.

---

### Punto 2)

La circonferenza richiesta ha equazione

$$x^2 + y^2 - y = 0 \implies x^2 + \left(y - \tfrac{1}{2}\right)^2 = \tfrac{1}{4}$$

La retta $t$ ha equazione del tipo $y = mx$ (se la retta è $x = 0$ troviamo il punto $(0;\, 2)$). Mettendo a sistema l'equazione della retta $t$ e della circonferenza otteniamo le coordinate di $A$:

$$A = \left(\frac{2m}{m^2 + 1};\; \frac{2m^2}{m^2 + 1}\right)$$

Mettendo a sistema l'equazione di $t$ con la retta di equazione $y = 2$ otteniamo le coordinate di $B$:

$$B = \left(\frac{2}{m};\; 2\right)$$

notiamo che per $m = 0$, $t$ non taglia la retta di equazione $y = 2$.

Il luogo richiesto (che ha l'ascissa di $B$ e l'ordinata di $A$) ha equazioni parametriche

$$\begin{cases} x = \dfrac{2}{m} \\[6pt] y = \dfrac{2m^2}{m^2 + 1} \end{cases}$$

Ricavando $m$ dalla prima equazione ($m = \dfrac{2}{x}$) e sostituendo nella seconda otteniamo l'equazione cartesiana del luogo:

$$y = \frac{8}{x^2 + 4}$$

che è l'equazione della funzione $f$ come richiesto.

---

### Punto 3)

Per trovare l'area della regione $R$ si calcola il seguente integrale:

$$A(R) = \int_0^2 \frac{8}{x^2 + 4}\,dx = 4\int_0^2 \frac{1}{1+\left(\frac{x}{2}\right)^2}\,\frac{dx}{2} \cdot 2 = 4\Big[\arctan\!\left(\tfrac{x}{2}\right)\Big]_0^2$$

$$= 4\!\left(\arctan 1 - \arctan 0\right) = 4 \cdot \frac{\pi}{4} = \pi$$

$$A(\Gamma) = \pi$$

Quindi le due aree sono uguali.

L'area della regione compresa tra $\Phi$ e tutto l'asse $x$ si ottiene dall'integrale improprio

$$\int_0^{+\infty} \frac{8}{x^2+4}\,dx = \lim_{k\to+\infty}\int_0^k \frac{8}{x^2+4}\,dx = \lim_{k\to+\infty} 4\Big[\arctan\!\left(\tfrac{x}{2}\right)\Big]_0^k = 4 \cdot \frac{\pi}{2} = 2\pi$$

che è appunto uguale a quattro volte l'area del cerchio in questione.

---

### Punto 4)

Notiamo che con $x = 2$ nella $f(x)$ si ottiene $y = 1$. Dall'equazione di $f$ ricavo

$$x^2 = \frac{8}{y} - 4$$

Il volume del solido $W$, ottenuto ruotando la regione $R$ attorno all'asse $y$, si ottiene sommando il volume del cilindro di raggio $2$ e altezza $1$ con il volume ottenuto dalla rotazione della regione delimitata dal grafico di $f$, dall'asse $y$ e dalla retta di equazione $y = 1$. L'ultimo volume può essere visto come somma di infiniti volumetti $dV$ di cilindri di raggio $x$ e altezza infinitesima $dy$:

$$dV = \pi x^2\,dy = \pi\!\left(\frac{8}{y} - 4\right)dy$$

Pertanto risulta:

$$V(W) = \int_0^1 \pi \cdot 4\,dy + \int_1^2 \pi\!\left(\frac{8}{y} - 4\right)dy$$

Il calcolo effettivo del volume è:

$$V(W) = \pi\Big[4y\Big]_0^1 + \pi\Big[8\ln y - 4y\Big]_1^2$$

$$= 4\pi + \pi\!\left[(8\ln 2 - 8) - (0 - 4)\right] = 4\pi + \pi(8\ln 2 - 4) = 8\pi\ln 2 \approx 17.42\,\pi$$
