

**Problema:** [[Problemi/prob_2009_scuole_italiane_allestero_americhe_2009_sessione_o_problema1_17_1|2009 Estero Americhe — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_americhe_2009_sessione_o_problema1_17|2009 Estero Americhe — Problema 1]]

Nel piano cartesiano $Oxy$ è data la circonferenza $\mathcal{C}$ di centro l'origine $O$ e raggio $r=3$, ossia $x^2+y^2=9$; sono inoltre assegnati i punti $A(-3;0)$ e $B(3;0)$, estremi del diametro orizzontale.

## a)

Si vuole determinare la corda $CD$, perpendicolare al diametro $AB$, in modo che l'area del triangolo $ACD$ sia massima.

Per una nota proprietà, fra tutti i triangoli inscritti in una circonferenza quello di area massima è equilatero. Dunque il triangolo $ACD$ cercato è equilatero e la corda $CD$ è il lato del triangolo equilatero inscritto in $\mathcal{C}$, la cui lunghezza è
$$CD = r\sqrt{3} = 3\sqrt{3}.$$

L'altezza del triangolo equilatero inscritto, condotta dal vertice $A$, misura $\dfrac{3r}{2}=\dfrac{9}{2}$. Poiché $A$ ha ascissa $-3$, il piede dell'altezza (e quindi la corda $CD$) si trova sulla retta di ascissa
$$x = -3 + \frac{9}{2} = \frac{3}{2}.$$

Sostituendo $x=\dfrac{3}{2}$ nell'equazione della circonferenza:
$$y^2 = 9 - \frac{9}{4} = \frac{27}{4}, \qquad y = \pm\frac{3\sqrt{3}}{2}.$$

I punti richiesti sono quindi
$$C=\left(\frac{3}{2};\,-\frac{3\sqrt{3}}{2}\right), \qquad D=\left(\frac{3}{2};\,\frac{3\sqrt{3}}{2}\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="275.015" height="275.728" viewBox="-72 -72 206.261 206.796"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 37.586h193.08"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M119.13 35.186c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(100.273 2.153)">x</text><path fill="none" d="M24.67 134.326v-193.08"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M22.27-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.217)">y</text><path fill="none" stroke-width=".8" d="M97.225 37.586c0-40.072-32.483-72.555-72.555-72.555S-47.885-2.486-47.885 37.586c0 40.071 32.483 72.555 72.555 72.555s72.555-32.484 72.555-72.555Zm-72.555 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-47.883 37.586 108.83 62.831V-25.246Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M60.948 100.419V-25.247"/><path stroke="none" d="M-46.183 37.586a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-83.586 3.417)">A</text><path stroke="none" d="M98.923 37.586a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(76.086 3.417)">B</text><path stroke="none" d="M62.647 100.417a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.81 73.198)">C</text><path stroke="none" d="M62.647-25.246a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.81 -66.364)">D</text><path stroke="none" d="M25.945 37.586a1.275 1.275 0 1 0-2.55 0 1.275 1.275 0 0 0 2.55 0m-1.275 0"/><text x="24.67" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 -3.533)">O</text></g></svg>
</figure>

**Verifica per via analitica.** Indichiamo con $h$ l'altezza $AH$ del triangolo isoscele $ACD$ relativa alla base $CD$, con $0\le h\le 6$. Il triangolo $ABD$ è rettangolo in $D$, perché $AB$ è un diametro; per il secondo teorema di Euclide, detta $DH$ metà della corda,
$$DH^2 = h(6-h), \qquad DH = \sqrt{h(6-h)}.$$

L'area del triangolo $ACD$ vale allora
$$\text{Area}(ACD) = \frac{1}{2}\,CD\cdot AH = DH\cdot AH = h\sqrt{h(6-h)}.$$

Tale area è massima quando lo è il suo quadrato $z = h^3(6-h)$, con $0\le h\le 6$. Derivando,
$$z' = 18h^2 - 4h^3 = 2h^2(9-2h) \ge 0 \iff h \le \frac{9}{2}.$$

Quindi $z$ cresce da $0$ a $\dfrac{9}{2}$ e decresce da $\dfrac{9}{2}$ a $6$: il massimo si ha per $h=\dfrac{9}{2}$. L'ascissa di $C$ e $D$ vale perciò $h-3 = \dfrac{9}{2}-3 = \dfrac{3}{2}$, in accordo con quanto trovato.

(In alternativa, $z = h^3(6-h)^1$ è il prodotto di due potenze le cui basi hanno somma costante $6$: è massimo quando le basi sono proporzionali agli esponenti, $\dfrac{h}{3}=\dfrac{6-h}{1}$, da cui $h=\dfrac{9}{2}$.)

## b)

Si cercano le tangenti a $\mathcal{C}$ nei suoi punti di ascissa $x=1$. Sostituendo nell'equazione:
$$1 + y^2 = 9 \implies y = \pm 2\sqrt{2},$$
quindi i punti sono $S(1;-2\sqrt{2})$ e $T(1;2\sqrt{2})$.

Con la regola dello sdoppiamento $x_0 x + y_0 y = 9$ si ottengono direttamente le tangenti:
$$\text{tangente in } S:\quad x - 2\sqrt{2}\,y = 9,$$
$$\text{tangente in } T:\quad x + 2\sqrt{2}\,y = 9.$$

## c)

Si vuole l'ampiezza dell'angolo $P\hat{O}Q$, con $P(0;3)$ e $Q(2;\sqrt{5})$ (si verifica che $Q\in\mathcal{C}$, essendo $4+5=9$).

Detto $\alpha$ l'angolo che $OQ$ forma con il semiasse positivo delle ordinate (cioè con $OP$), la proiezione di $Q$ sull'asse $x$ dà
$$x_Q = r\sin\alpha \implies \sin\alpha = \frac{x_Q}{r} = \frac{2}{3}, \qquad \alpha = \arcsin\!\left(\frac{2}{3}\right) \cong 41{,}81^\circ.$$

Convertendo la parte decimale in primi sessagesimali:
$$P\hat{O}Q \cong 41^\circ + (0{,}81\cdot 60)' = 41^\circ + 48{,}6' \cong 41^\circ 49'.$$

## d)

Si calcola il volume del solido ottenuto ruotando il settore circolare $POQ$ attorno all'asse $x$.

Per $x\in[0;2]$ il settore è delimitato superiormente dall'arco $PQ$, di equazione $y=\sqrt{9-x^2}$, e inferiormente dalla retta $OQ$, di equazione $y=\dfrac{\sqrt{5}}{2}\,x$. Con il metodo delle sezioni anulari:
$$V = \pi\int_0^2 \left[\left(\sqrt{9-x^2}\right)^2 - \left(\frac{\sqrt{5}}{2}\,x\right)^2\right] dx = \pi\int_0^2 \left[9 - x^2 - \frac{5}{4}x^2\right] dx.$$

Cioè
$$V = \pi\int_0^2 \left[9 - \frac{9}{4}x^2\right] dx = \pi\left[9x - \frac{3}{4}x^3\right]_0^2 = \pi\,(18 - 6) = 12\pi.$$

Il volume del solido è dunque $V = 12\pi\ \text{u}^3$.

*Fonte:* [📄 PDF p.17](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
