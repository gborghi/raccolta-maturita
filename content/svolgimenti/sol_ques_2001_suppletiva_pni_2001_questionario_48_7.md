

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_7|2001 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

Verificato che l'equazione $x^3-2x-5=0$ ammette una sola radice reale compresa tra $2$ e $3$, se ne calcoli un'approssimazione applicando uno dei metodi numerici studiati.

## Esistenza della radice

Consideriamo la funzione
$$f(x)=x^3-2x-5.$$
Essendo una funzione polinomiale, essa è continua e derivabile su tutto $\mathbb{R}$, in particolare nell'intervallo $[2;3]$. Agli estremi si ha:
$$f(2)=8-4-5=-1<0,\qquad f(3)=27-6-5=16>0.$$
Poiché $f$ è continua in $[2;3]$ e assume valori di segno opposto agli estremi, per il **teorema degli zeri** esiste almeno un punto $\alpha\in(2;3)$ in cui $f(\alpha)=0$: l'equazione data ammette dunque almeno una radice reale compresa tra $2$ e $3$.

## Unicità della radice

Studiamo il segno della derivata prima:
$$f'(x)=3x^2-2>0 \iff x<-\sqrt{\tfrac{2}{3}}\ \text{ oppure }\ x>\sqrt{\tfrac{2}{3}}.$$
Poiché $\sqrt{2/3}\approx 0{,}816<2$, nell'intervallo $(2;3)$ risulta $f'(x)>0$: la funzione è quindi strettamente crescente e la radice $\alpha$ è **unica** (il grafico interseca l'asse $x$ una sola volta).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="100.829" height="297.332" viewBox="-72 -72 75.622 222.999"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-51.474 65.455H-31.9"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-33.78 63.055c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-121.012" y="65.455" stroke="none" font-family="cmmi10" font-size="10" transform="translate(93.045 2.153)">x</text><path fill="none" d="M-48.885 150.529v-195.64"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-51.285-43.231c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-121.012" y="65.455" stroke="none" font-family="cmmi10" font-size="10" transform="translate(69.497 -116.443)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-48.885 120.39.27-2.545.269-2.567.269-2.59.27-2.613.268-2.638.27-2.66.269-2.684.27-2.706.268-2.73.27-2.755.269-2.778.269-2.802.27-2.826.268-2.85.27-2.874.269-2.898.269-2.923.27-2.948.268-2.97.27-2.997.269-3.02.27-3.045.268-3.071.27-3.094.269-3.121.269-3.145.27-3.17.268-3.196.27-3.22.269-3.247.27-3.271.268-3.297.27-3.324.269-3.349.269-3.374.27-3.4.268-3.427.27-3.453.269-3.479.27-3.504.268-3.532.27-3.557.269-3.585.269-3.61.27-3.638.268-3.664.27-3.693.269-3.717.27-3.746.268-3.772.27-3.8.269-3.827.269-3.853.27-3.882.268-3.91.27-3.937.269-3.964.269-3.992.27-4.02"/><path stroke="none" d="M-41.716 65.455a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><g stroke="none" font-size="10"><text x="-121.012" y="65.455" font-family="cmmi10" transform="translate(81.01 9.977)">®</text><text x="-111.801" y="65.455" font-family="cmsy10" transform="translate(81.01 9.977)">¼</text><text x="-101.245" y="65.455" font-family="cmr10" transform="translate(81.01 9.977)">2</text><text x="-96.245" y="65.455" font-family="cmmi10" transform="translate(81.01 9.977)">;</text><text x="-93.467" y="65.455" font-family="cmr10" transform="translate(81.01 9.977)">09</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-121.012" y="65.455" font-family="cmmi10" font-size="10" transform="translate(52.075 -85.675)">y</text><text x="-112.973" y="65.455" font-family="cmr10" font-size="10" transform="translate(52.075 -85.675)">=</text><text x="-102.418" y="65.455" font-family="cmmi10" font-size="10" transform="translate(52.075 -85.675)">x</text><text x="-96.702" y="61.826" font-family="cmr7" font-size="7" transform="translate(52.075 -85.675)">3</text><text x="-89.994" y="65.455" font-family="cmsy10" font-size="10" transform="translate(52.075 -85.675)">¡</text><text x="-79.994" y="65.455" font-family="cmr10" font-size="10" transform="translate(52.075 -85.675)">2</text><text x="-74.994" y="65.455" font-family="cmmi10" font-size="10" transform="translate(52.075 -85.675)">x</text><text x="-67.057" y="65.455" font-family="cmsy10" font-size="10" transform="translate(52.075 -85.675)">¡</text><text x="-57.057" y="65.455" font-family="cmr10" font-size="10" transform="translate(52.075 -85.675)">5</text></g></g></g></svg>
</figure>

## Approssimazione con il metodo delle tangenti (Newton)

Il metodo di Newton genera la successione
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.$$

Per garantire la convergenza si sceglie come punto iniziale l'estremo in cui $f$ ha lo stesso segno della derivata seconda. Poiché
$$f''(x)=6x>0 \quad\text{in } (2;3),$$
e $f(3)>0$, si ha $f(3)\cdot f''(x)>0$: assumiamo dunque
$$x_0=3.$$

Con $f(x)=x^3-2x-5$ e $f'(x)=3x^2-2$ otteniamo:

$$x_1=x_0-\frac{f(3)}{f'(3)}=3-\frac{16}{25}=2{,}3600,$$

$$x_2=x_1-\frac{f(2{,}3600)}{f'(2{,}3600)}\cong 2{,}1272,$$

$$x_3=x_2-\frac{f(2{,}1272)}{f'(2{,}1272)}\cong 2{,}0951,$$

$$x_4=x_3-\frac{f(2{,}0951)}{f'(2{,}0951)}\cong 2{,}0946.$$

Le ultime due approssimazioni coincidono già alla terza cifra decimale, quindi la radice, a meno di un centesimo, è
$$\boxed{\,\alpha\cong 2{,}09\,}.$$

Il valore esatto della radice è $\alpha=2{,}094551\ldots$, in accordo con l'approssimazione ottenuta.

*Fonte:* [📄 PDF p.51](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
