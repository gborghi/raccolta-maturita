

**Problema:** [[Problemi/prob_2005_scuole_italiane_allestero_americhe_2005_sessione_s_problema1_29_1|2005 Americhe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_s_problema1_29|2005 Americhe Suppletiva — Problema 1]]

In un piano riferito a un sistema di assi cartesiani ortogonali $Oxy$ sono assegnate le curve di equazione

$$y = \frac{1}{3}x^3 + kx - 3,$$

dove $k$ è un parametro reale. Osserviamo subito che

$$y' = x^2 + k, \qquad y'' = 2x.$$

## a)

**Tutte le curve passano per uno stesso punto $A$, che per ciascuna è flesso e centro di simmetria.**

Il termine con $k$ è $kx$: per $x=0$ esso si annulla qualunque sia $k$, e si ottiene $y=-3$. Dunque il punto $A=(0;-3)$ appartiene a tutte le curve.

Poiché $y''=2x$ si annulla soltanto in $x=0$ cambiando segno (negativa per $x<0$, positiva per $x>0$), il punto $A=(0;-3)$ è un flesso per ogni valore di $k$. Come è noto, ogni cubica ha uno e un solo flesso, che ne è anche centro di simmetria.

Verifichiamolo direttamente. La simmetria di centro $A=(0;-3)$ è

$$\begin{cases} x' = -x \\ y' = -6 - y \end{cases} \Rightarrow \begin{cases} x = -x' \\ y = -6 - y' \end{cases}$$

Sostituendo nell'equazione della curva:

$$-6 - y' = \frac{1}{3}(-x')^3 + k(-x') - 3 = -\frac{1}{3}(x')^3 - kx' - 3,$$

da cui

$$y' = \frac{1}{3}(x')^3 + kx' - 3,$$

che è di nuovo l'equazione di partenza. Quindi $A$ è centro di simmetria per tutte le curve.

## b)

**Ogni curva ha un massimo e un minimo relativi, oppure non ha né l'uno né l'altro.**

La funzione è derivabile ovunque, quindi gli eventuali estremi relativi annullano la derivata prima:

$$y' = x^2 + k = 0 \quad\Rightarrow\quad x = \pm\sqrt{-k},$$

soluzioni reali solo se $k \le 0$. Si distinguono tre casi:

- se $k < 0$: la derivata è positiva per $x < -\sqrt{-k}$ e per $x > \sqrt{-k}$, negativa in mezzo; in $x=-\sqrt{-k}$ c'è un **massimo** relativo e in $x=\sqrt{-k}$ un **minimo** relativo;
- se $k = 0$: $y'=x^2 \ge 0$ e si annulla solo in $x=0$, quindi la funzione è sempre crescente e in $x=0$ ha un flesso a tangente orizzontale;
- se $k > 0$: $y'>0$ per ogni $x$, la funzione è sempre crescente (in $x=0$ flesso a tangente obliqua) e non vi sono estremi.

In ogni caso, dunque, o si presentano insieme un massimo e un minimo relativi, oppure non se ne presenta alcuno.

## c)

**Valore di $k$ per cui la curva è tangente all'asse $x$.**

La curva è tangente all'asse $x$ quando il suo massimo relativo appartiene a tale asse; ciò richiede $k<0$, con massimo in $x=-\sqrt{-k}$. Imponiamo $y\big(-\sqrt{-k}\big)=0$. Poiché

$$\left(-\sqrt{-k}\right)^3 = k\sqrt{-k},$$

si ha

$$y\left(-\sqrt{-k}\right) = \frac{1}{3}\,k\sqrt{-k} - k\sqrt{-k} - 3 = -\frac{2}{3}\,k\sqrt{-k} - 3 = 0,$$

cioè $k\sqrt{-k} = -\dfrac{9}{2}$. Elevando al quadrato:

$$k^2(-k) = \frac{81}{4} \quad\Rightarrow\quad k^3 = -\frac{81}{4},$$

da cui

$$k = -\sqrt[3]{\frac{81}{4}} = -\frac{3\sqrt[3]{6}}{2} \approx -2{,}73.$$

## d)

**Curva $\gamma$ la cui tangente in $A$ delimita con gli assi un triangolo di area $\dfrac{9}{4}$ e che presenta un massimo e un minimo relativi.**


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="290.188" height="220.888" viewBox="-72 -72 217.641 165.666"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-24.726h204.46"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M130.51-27.126c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="30.36" y="-24.726" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.963 2.153)">x</text><path fill="none" d="M30.36 78.558V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M27.96-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="30.36" y="-24.726" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -39.905)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.689 92.996 2.305-10.12 2.305-9.48 2.305-8.855 2.305-8.248 2.305-7.658 2.305-7.083 2.305-6.526 2.305-5.985 2.305-5.461 2.305-4.954 2.305-4.462 2.304-3.989 2.305-3.53 2.305-3.09 2.305-2.666 2.305-2.258 2.305-1.867 2.305-1.492 2.305-1.135 2.305-.794 2.305-.469 2.305-.161 2.305.13 2.305.405 2.304.662 2.305.904 2.305 1.128L3.85-2.722l2.305 1.528L8.46.51l2.305 1.86 2.305 2.002 2.305 2.127 2.305 2.236 2.305 2.326 2.305 2.402 2.305 2.46 2.305 2.5 2.304 2.527 2.305 2.535 2.305 2.526 2.305 2.502 2.305 2.46 2.305 2.402 2.305 2.327 2.305 2.235 2.305 2.127 2.305 2.003 2.305 1.861 2.305 1.703 2.305 1.529 2.304 1.337 2.305 1.129 2.305.904 2.305.664 2.305.405 2.305.131 2.305-.16 2.305-.468 2.305-.792 2.305-1.134 2.305-1.49 2.305-1.866 2.305-2.257 2.305-2.664 2.304-3.088 2.305-3.53 2.305-3.986 2.305-4.461 2.305-4.952 2.305-5.46 2.305-5.983 2.305-6.523 2.305-7.082 2.305-7.655 2.305-8.246 2.305-8.854 2.305-9.477 2.304-10.117"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M-18.01-30.986 78.73 75.428"/><path stroke="none" d="M32.86 22.221c0-.76-1.12-1.375-2.5-1.375s-2.5.616-2.5 1.375c0 .76 1.12 1.375 2.5 1.375s2.5-.615 2.5-1.375m-2.5 0"/><text x="30.36" y="-24.726" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 50.364)">A</text><g fill="#00f" stroke="#00f"><text x="30.36" y="-24.726" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(79.646 -20.728)">°</text></g><g fill="red" stroke="red"><text x="30.36" y="-24.726" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-55.866 -17.268)">t</text></g></g></svg>
</figure>

La seconda condizione impone $k<0$. La tangente in $A=(0;-3)$ ha coefficiente angolare $y'(0)=k$, quindi equazione

$$y + 3 = k\,x \quad\Rightarrow\quad y = kx - 3.$$

Essa incontra l'asse $x$ nel punto $B=\left(\dfrac{3}{k};\,0\right)$. Il triangolo rettangolo $OAB$ ha cateti $OA=3$ e $OB=\left|\dfrac{3}{k}\right|$, dunque

$$\text{Area}(OAB) = \frac{1}{2}\cdot 3 \cdot \left|\frac{3}{k}\right| = \frac{9}{2\,|k|} = \frac{9}{4},$$

da cui $|k|=2$ e, poiché $k<0$, $\;k=-2$. La curva richiesta è

$$\gamma:\quad y = \frac{1}{3}x^3 - 2x - 3.$$

## e)

**Rettangoli inscritti nella regione delimitata da $\gamma$ e dagli assi, con un lato sull'asse $x$ e il lato opposto (estremi su $\gamma$) a distanza $\dfrac{95}{24}$ dall'asse $x$.**

Il lato opposto all'asse $x$ giace sulla retta $y=-\dfrac{95}{24}$; le ascisse dei suoi estremi risolvono

$$\frac{1}{3}x^3 - 2x - 3 = -\frac{95}{24} \quad\Rightarrow\quad 8x^3 - 48x + 23 = 0.$$

Si verifica che $x=\dfrac{1}{2}$ è radice: $\;8\cdot\frac{1}{8} - 48\cdot\frac{1}{2} + 23 = 1 - 24 + 23 = 0$. Con la regola di Ruffini:

$$8x^3 - 48x + 23 = \left(x - \tfrac{1}{2}\right)\left(8x^2 + 4x - 46\right) = 0.$$

Dall'equazione $8x^2 + 4x - 46 = 0$, cioè $4x^2 + 2x - 23 = 0$, si ottiene

$$x = \frac{-1 \pm \sqrt{93}}{4}, \qquad x \approx -2{,}66 \;\text{ oppure }\; x \approx 2{,}16.$$

Nella regione considerata l'ascissa utile è $x=\dfrac{-1+\sqrt{93}}{4}\approx 2{,}16$. I vertici del rettangolo sono quindi

$$P=\left(\frac{1}{2};\,-\frac{95}{24}\right),\quad Q=\left(\frac{-1+\sqrt{93}}{4};\,-\frac{95}{24}\right),$$

$$R=\left(\frac{-1+\sqrt{93}}{4};\,0\right),\quad S=\left(\frac{1}{2};\,0\right).$$

*Fonte:* [📄 PDF p.29](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
