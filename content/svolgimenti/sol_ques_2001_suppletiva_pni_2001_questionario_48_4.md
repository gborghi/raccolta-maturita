

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_4|2001 Suppletiva PNI — Questionario — Quesito 4]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

Si chiede di calcolare, integrando per parti,
$$\int_0^1 \arcsin x\,dx.$$

Cerchiamo dapprima una primitiva di $\arcsin x$. Applichiamo l'integrazione per parti scegliendo come fattore da derivare $\arcsin x$ e come fattore da integrare $1$, cioè scriviamo $1 = (x)'$:
$$\int \arcsin x\,dx = \int (x)'\,\arcsin x\,dx = x\,\arcsin x - \int x\cdot \frac{1}{\sqrt{1-x^2}}\,dx.$$

Nell'ultimo integrale osserviamo che $\dfrac{x}{\sqrt{1-x^2}}$ è, a meno del segno, la derivata di $\sqrt{1-x^2}$. Infatti
$$\frac{d}{dx}\sqrt{1-x^2} = \frac{-2x}{2\sqrt{1-x^2}} = -\frac{x}{\sqrt{1-x^2}},$$
da cui
$$\int \frac{x}{\sqrt{1-x^2}}\,dx = -\sqrt{1-x^2} + k.$$

Sostituendo otteniamo la primitiva cercata:
$$\int \arcsin x\,dx = x\,\arcsin x + \sqrt{1-x^2} + k.$$

Possiamo ora calcolare l'integrale definito applicando il teorema fondamentale del calcolo:
$$\int_0^1 \arcsin x\,dx = \Big[\, x\,\arcsin x + \sqrt{1-x^2}\,\Big]_0^1.$$

Valutiamo negli estremi. Per $x=1$:
$$1\cdot \arcsin 1 + \sqrt{1-1} = 1\cdot \frac{\pi}{2} + 0 = \frac{\pi}{2}.$$
Per $x=0$:
$$0\cdot \arcsin 0 + \sqrt{1-0} = 0 + 1 = 1.$$

Pertanto
$$\int_0^1 \arcsin x\,dx = \frac{\pi}{2} - 1 \approx 0{,}571.$$

Il risultato rappresenta l'area della regione compresa tra il grafico di $y=\arcsin x$ e l'asse $x$ per $0 \le x \le 1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="152.131" height="190.647" viewBox="-72 -72 114.098 142.985"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#d9d9ff" stroke="none" d="m-55.258 56.649 1.665-1.667 1.666-1.667 1.663-1.666 1.659-1.667 1.654-1.667 1.649-1.667 1.64-1.666 1.635-1.667 1.624-1.667 1.614-1.666 1.6-1.667 1.59-1.667 1.576-1.667 1.559-1.667 1.543-1.667 1.526-1.667 1.51-1.666 1.488-1.667 1.469-1.667 1.447-1.666 1.425-1.667 1.4-1.667 1.376-1.667 1.351-1.666 1.324-1.668 1.297-1.667 1.268-1.666 1.24-1.667 1.208-1.667 1.179-1.667 1.146-1.666 1.116-1.667 1.079-1.667L-6.024-.02l1.011-1.667.976-1.667.938-1.668.905-1.666.863-1.667.828-1.667.787-1.666.75-1.667.707-1.667.67-1.667.625-1.666.589-1.667.543-1.667.502-1.666.46-1.668.417-1.667.375-1.667.33-1.666.288-1.667.241-1.667.2-1.666.154-1.667.112-1.667.065-1.667.025-1.666.001 98.34Z"/><path fill="none" d="M-64.647 56.649h93.494"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M26.967 54.249c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-55.258" y="56.649" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.038 2.153)">x</text><path fill="none" d="M-55.258 66.038V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-57.658-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-55.258" y="56.649" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -121.28)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-55.258 56.649 1.665-1.667 1.666-1.667 1.663-1.666 1.659-1.667 1.654-1.667 1.649-1.667 1.64-1.666 1.635-1.667 1.624-1.667 1.614-1.666 1.6-1.667 1.59-1.667 1.576-1.667 1.559-1.667 1.543-1.667 1.526-1.667 1.51-1.666 1.488-1.667 1.469-1.667 1.447-1.666 1.425-1.667 1.4-1.667 1.376-1.667 1.351-1.666 1.324-1.668 1.297-1.667 1.268-1.666 1.24-1.667 1.208-1.667 1.179-1.667 1.146-1.666 1.116-1.667 1.079-1.667L-6.024-.02l1.011-1.667.976-1.667.938-1.668.905-1.666.863-1.667.828-1.667.787-1.666.75-1.667.707-1.667.67-1.667.625-1.666.589-1.667.543-1.667.502-1.666.46-1.668.417-1.667.375-1.667.33-1.666.288-1.667.241-1.667.2-1.666.154-1.667.112-1.667.065-1.667.025-1.666"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-55.258" y="56.649" font-family="cmmi10" transform="translate(-7.029 -79.008)">y</text><text x="-47.218" y="56.649" font-family="cmr10" transform="translate(-7.029 -79.008)">=</text><text x="-36.663" y="56.649" font-family="cmr10" transform="translate(-7.029 -79.008)">arcsin</text><text x="-9.357" y="56.649" font-family="cmmi10" transform="translate(-7.029 -79.008)">x</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M7.338 56.649v-98.326"/><text x="-55.258" y="56.649" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 10.733)">1</text><g stroke="none"><text x="-54.058" y="52.711" font-family="cmmi7" font-size="7" transform="translate(-13.68 -96.574)">¼</text><path d="M-67.737-42.625h4.927v.4h-4.927z"/><text x="-53.587" y="60.097" font-family="cmr7" font-size="7" transform="translate(-13.68 -96.574)">2</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.50](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
