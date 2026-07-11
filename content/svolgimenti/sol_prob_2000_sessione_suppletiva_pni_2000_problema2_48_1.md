

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_pni_2000_problema2_48_1|2000 Suppletiva PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_pni_2000_problema2_48|2000 Suppletiva PNI — Problema 2]]

Il triangolo rettangolo non isoscele $ABC$ (retto in $A$) è la base di una piramide di vertice $V$ e altezza $VO = 3a\sqrt[3]{2}$. I due cateti $AB$ e $AC$ sono due delle tre radici dell'equazione
$$4x^{3} - 11ax^{2} + 10a^{2}x - 3a^{3} = 0.$$

## a)

**Misure dei cateti.** Si verifica subito che $x = a$ è radice, perché $4a^{3} - 11a^{3} + 10a^{3} - 3a^{3} = 0$. Abbassando di grado con la regola di Ruffini:
$$4x^{3} - 11ax^{2} + 10a^{2}x - 3a^{3} = (x-a)^{2}(4x - 3a) = 0,$$
le cui radici sono $x = a$ (doppia) e $x = \dfrac{3a}{4}$. Le due radici distinte sono le misure dei cateti:
$$AB = a, \qquad AC = \frac{3a}{4}.$$

**Distanza del piano di sezione.** Sia $EFG$ la sezione ottenuta con un piano parallelo alla base $ABC$, e sia $k = VH$ la sua distanza dal vertice $V$; poniamo $h = VO = 3a\sqrt[3]{2}$. Le piramidi $VEFG$ e $VABC$ sono simili con rapporto di similitudine $\dfrac{k}{h}$, quindi
$$\frac{\text{Area}(EFG)}{\text{Area}(ABC)} = \frac{k^{2}}{h^{2}}, \qquad \frac{V(VEFG)}{V(VABC)} = \frac{k^{3}}{h^{3}}.$$

Il piano deve dividere la piramide in due parti equivalenti: la piramide $VEFG$ e il tronco $ABCEFG$ devono avere lo stesso volume, cioè
$$V(VEFG) = \frac{1}{2}\,V(VABC) \quad\Rightarrow\quad \frac{k^{3}}{h^{3}} = \frac{1}{2}.$$

Da qui
$$k^{3} = \frac{h^{3}}{2} \quad\Rightarrow\quad k = \frac{h}{\sqrt[3]{2}} = \frac{3a\sqrt[3]{2}}{\sqrt[3]{2}} = 3a.$$

Si osservi che il valore di $k$ dipende soltanto dall'altezza $h$ della piramide e **non** dalle misure dei cateti:
$$\boxed{k = 3a.}$$

## b)

Si chiede $k$ nel caso in cui un cateto misuri $a$ e l'altro sia una soluzione, approssimata a due cifre significative, dell'equazione
$$x^{3} + 4a^{2}x - 2a^{3} = 0.$$

Poiché, come visto al punto a), $k^{3} = \dfrac{h^{3}}{2}$ non dipende dalle misure dei cateti, anche in questo caso risulta $k = 3a$. Determiniamo comunque il secondo cateto come richiesto.

**Localizzazione della radice.** Scritta l'equazione nella forma $x^{3} = -4a^{2}x + 2a^{3}$, cerchiamo le intersezioni delle curve
$$y_{1} = x^{3}, \qquad y_{2} = -4a^{2}x + 2a^{3};$$
la retta $y_{2}$ interseca l'asse $y$ in $2a^{3}$ e l'asse $x$ in $x = \dfrac{a}{2}$. Le due curve si incontrano in un solo punto $A$, di ascissa compresa fra $0$ e $\dfrac{a}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="192.31" height="184.765" viewBox="-72 -72 144.232 138.574"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 13.4H58.981"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M57.101 11c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-8.336" y="13.4" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.25 2.153)">x</text><path fill="none" d="M-8.336 64.615v-123.37"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-10.736-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-8.336" y="13.4" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -78.032)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.112 65.904 1.89-5.345 1.891-4.968 1.89-4.608 1.89-4.258 1.89-3.925 1.891-3.603 1.89-3.296 1.89-3.003 1.891-2.723 1.89-2.457 1.89-2.204 1.891-1.966 1.89-1.74 1.89-1.53 1.89-1.332 1.891-1.147 1.89-.977 1.89-.82 1.891-.679 1.89-.548 1.89-.433 1.891-.33 1.89-.243 1.89-.168 1.89-.107 1.891-.06 1.89-.027 1.89-.007h1.891l1.89-.008 1.89-.03 1.891-.064 1.89-.113 1.89-.175 1.89-.25 1.891-.342 1.89-.444 1.89-.561 1.891-.692 1.89-.836 1.89-.994 1.891-1.166 1.89-1.352 1.89-1.55 1.89-1.763 1.891-1.99 1.89-2.23 1.89-2.484 1.891-2.752 1.89-3.032 1.89-3.327 1.891-3.636 1.89-3.958 1.89-4.294 1.89-4.644 1.891-5.008 1.89-5.384 1.89-5.774 1.891-6.18"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-8.336" y="13.4" font-family="cmmi10" font-size="10" transform="translate(39.378 -58.787)">y</text><text x="-.297" y="13.4" font-family="cmr10" font-size="10" transform="translate(39.378 -58.787)">=</text><text x="10.259" y="13.4" font-family="cmmi10" font-size="10" transform="translate(39.378 -58.787)">x</text><text x="15.974" y="9.771" font-family="cmr7" font-size="7" transform="translate(39.378 -58.787)">3</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-22.278-59.155 57.76 123.77"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-8.336" y="13.4" font-family="cmmi10" font-size="10" transform="translate(-58.836 -60.92)">y</text><text x="-.297" y="13.4" font-family="cmr10" font-size="10" transform="translate(-58.836 -60.92)">=</text><text x="10.259" y="13.4" font-family="cmsy10" font-size="10" transform="translate(-58.836 -60.92)">¡</text><text x="18.037" y="13.4" font-family="cmr10" font-size="10" transform="translate(-58.836 -60.92)">4</text><text x="23.037" y="13.4" font-family="cmmi10" font-size="10" transform="translate(-58.836 -60.92)">a</text><text x="28.323" y="9.771" font-family="cmr7" font-size="7" transform="translate(-58.836 -60.92)">2</text><text x="32.809" y="13.4" font-family="cmmi10" font-size="10" transform="translate(-58.836 -60.92)">x</text><text x="40.746" y="13.4" font-family="cmr10" font-size="10" transform="translate(-58.836 -60.92)">+</text><text x="50.746" y="13.4" font-family="cmr10" font-size="10" transform="translate(-58.836 -60.92)">2</text><text x="55.746" y="13.4" font-family="cmmi10" font-size="10" transform="translate(-58.836 -60.92)">a</text><text x="61.032" y="9.771" font-family="cmr7" font-size="7" transform="translate(-58.836 -60.92)">3</text></g></g><path stroke="none" d="M12.785 11.138c0-.663-1.003-1.2-2.24-1.2s-2.24.537-2.24 1.2 1.003 1.2 2.24 1.2 2.24-.537 2.24-1.2m-2.24 0"/><text x="-8.336" y="13.4" stroke="none" font-family="cmmi10" font-size="10" transform="translate(22.414 -5.795)">A</text><g stroke="none"><text x="-7.136" y="9.463" font-family="cmmi7" font-size="7" transform="translate(16.548 10.484)">a</text><path d="M9.412 21.184h4.338v.4H9.412z"/><text x="-6.96" y="16.849" font-family="cmr7" font-size="7" transform="translate(16.548 10.484)">2</text></g><path stroke="none" d="M13.12 13.4c0-.455-.689-.825-1.54-.825-.85 0-1.54.37-1.54.825 0 .456.69.825 1.54.825s1.54-.37 1.54-.825m-1.54 0"/></g></svg>
</figure>

**Metodo delle tangenti (Newton).** Poniamo $f(x) = x^{3} + 4a^{2}x - 2a^{3}$. Nell'intervallo $\left[0;\,\dfrac{a}{2}\right]$ si ha
$$f(0) = -2a^{3} < 0, \qquad f\!\left(\frac{a}{2}\right) = \frac{a^{3}}{8} > 0,$$
$$f'(x) = 3x^{2} + 4a^{2} > 0, \qquad f''(x) = 6x \ge 0.$$
La funzione è continua e monotòna crescente, quindi la radice è unica; poiché $f\!\left(\dfrac{a}{2}\right)$ e $f''$ hanno lo stesso segno, si assume come punto iniziale $x_{0} = \dfrac{a}{2}$. La formula iterativa
$$x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})} = \frac{2\,(x_{n}^{3} + a^{3})}{3x_{n}^{2} + 4a^{2}}$$
fornisce (con convergenza per valori decrescenti):
$$x_{1} = \frac{2\!\left(\frac{a^{3}}{8} + a^{3}\right)}{3\cdot\frac{a^{2}}{4} + 4a^{2}} = \frac{9}{19}\,a \cong 0{,}4737\,a,$$
$$x_{2} = \frac{2168}{4579}\,a \cong 0{,}4735\,a.$$

Il valore approssimato a due cifre significative è quindi
$$x \cong 0{,}47\,a.$$

Il secondo cateto misura circa $0{,}47\,a$, mentre la distanza cercata resta
$$\boxed{k = 3a.}$$

## c)

Il calcolo approssimato della radice è stato eseguito con il **metodo delle tangenti** (o metodo di Newton), descritto al punto b). A partire dagli estremi dell'intervallo $\left[0;\,\dfrac{a}{2}\right]$, in cui $f$ cambia segno ed è monotòna, si sceglie come primo valore l'estremo in cui $f$ e $f''$ hanno lo stesso segno; si costruisce poi la successione
$$x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})},$$
che geometricamente sostituisce a ogni passo la curva $y = f(x)$ con la sua retta tangente in $x_{n}$ e assume come nuova approssimazione l'ascissa dell'intersezione di tale tangente con l'asse $x$. Il procedimento converge rapidamente alla radice, arrestandosi quando due iterate successive coincidono nelle cifre significative richieste (qui $x_{1}$ e $x_{2}$ danno già $0{,}47\,a$).

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)


#maturita/soluzione #area/geometria #cluster/geometria
