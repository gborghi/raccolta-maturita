

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_2|2001 Suppletiva PNI — Questionario — Quesito 2]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

Si consideri la funzione

$$f(x) = \arctan x - \arctan\frac{x-1}{x+1}.$$

Occorre calcolarne la derivata e trarre le opportune conclusioni.

## a) Dominio e derivata

L'argomento del secondo arcotangente, $\dfrac{x-1}{x+1}$, non è definito per $x=-1$; l'arcotangente è invece definita ovunque. Il dominio di $f$ è quindi

$$D = \{x\in\mathbb{R} : x\neq -1\} = (-\infty,-1)\cup(-1,+\infty).$$

Deriviamo. Per il primo termine

$$\frac{d}{dx}\big(\arctan x\big) = \frac{1}{1+x^2}.$$

Per il secondo termine poniamo $u=\dfrac{x-1}{x+1}$, con

$$u' = \frac{(x+1)-(x-1)}{(x+1)^2} = \frac{2}{(x+1)^2}.$$

Inoltre

$$1+u^2 = 1 + \frac{(x-1)^2}{(x+1)^2} = \frac{(x+1)^2+(x-1)^2}{(x+1)^2} = \frac{2x^2+2}{(x+1)^2} = \frac{2(x^2+1)}{(x+1)^2}.$$

Quindi, per la regola di derivazione della funzione composta,

$$\frac{d}{dx}\left(\arctan\frac{x-1}{x+1}\right) = \frac{u'}{1+u^2} = \frac{\dfrac{2}{(x+1)^2}}{\dfrac{2(x^2+1)}{(x+1)^2}} = \frac{1}{x^2+1}.$$

In definitiva

$$f'(x) = \frac{1}{1+x^2} - \frac{1}{1+x^2} = 0 \qquad \text{per ogni } x\neq -1.$$

## b) Conclusioni

Poiché $f'(x)=0$ su tutto il dominio, $f$ è **costante su ciascuno dei due intervalli** in cui il dominio è suddiviso dal punto $x=-1$. I due valori costanti si possono ottenere calcolando $f$ in un punto opportuno di ciascun intervallo.

Per $x>-1$ scegliamo $x=0$:

$$f(0) = \arctan 0 - \arctan\frac{0-1}{0+1} = 0 - \arctan(-1) = 0 - \left(-\frac{\pi}{4}\right) = \frac{\pi}{4}.$$

Per $x<-1$ scegliamo $x=-\sqrt{3}$. Si ha $\arctan(-\sqrt{3}) = -\dfrac{\pi}{3}$ e

$$\frac{-\sqrt{3}-1}{-\sqrt{3}+1} = \frac{\sqrt{3}+1}{\sqrt{3}-1} = \frac{(\sqrt{3}+1)^2}{(\sqrt{3}-1)(\sqrt{3}+1)} = \frac{4+2\sqrt{3}}{2} = 2+\sqrt{3},$$

da cui, essendo $\arctan(2+\sqrt{3}) = \dfrac{5\pi}{12}$,

$$f(-\sqrt{3}) = -\frac{\pi}{3} - \frac{5\pi}{12} = -\frac{4\pi}{12} - \frac{5\pi}{12} = -\frac{9\pi}{12} = -\frac{3}{4}\pi.$$

In conclusione

$$f(x) = \arctan x - \arctan\frac{x-1}{x+1} = \begin{cases} -\dfrac{3}{4}\pi & \text{se } x<-1, \\[2mm] \dfrac{\pi}{4} & \text{se } x>-1. \end{cases}$$

La funzione è dunque una funzione a gradino: costante su ciascuno dei due intervalli del dominio, con una discontinuità di salto in $x=-1$ (dove peraltro non è definita).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="386.739" height="192.265" viewBox="-72 -72 290.054 144.199"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-50.872-13.63h255.675"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M202.923-16.03c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="77.166" y="-13.63" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.57 2.153)">x</text><path fill="none" d="M77.166 71.729V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M74.766-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="77.166" y="-13.63" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -51.002)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M48.713 71.729V-59.154"/><g stroke="none" font-size="10"><text x="77.166" y="-13.63" font-family="cmsy10" transform="translate(-34.842 11.4)">¡</text><text x="84.944" y="-13.63" font-family="cmr10" transform="translate(-34.842 11.4)">1</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="M-45.181 53.405h93.894"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="77.166" y="-13.63" font-family="cmsy10" font-size="10" transform="translate(-146.103 69.535)">¡</text><text x="86.144" y="-17.567" font-family="cmr7" font-size="7" transform="translate(-146.103 69.535)">3</text><path d="M-59.959 53.205h3.986v.4h-3.986z"/><text x="86.144" y="-10.181" font-family="cmr7" font-size="7" transform="translate(-146.103 69.535)">4</text><text x="91.33" y="-13.63" font-family="cmmi10" font-size="10" transform="translate(-146.103 69.535)">¼</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="M48.713-35.965h150.8"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="78.366" y="-17.567" font-family="cmmi7" font-size="7" transform="translate(125.88 -20.584)">¼</text><path d="M204.246-36.914h4.927v.4h-4.927z"/><text x="78.836" y="-10.181" font-family="cmr7" font-size="7" transform="translate(125.88 -20.584)">4</text></g></g><path fill="#fff" stroke="none" d="M50.713 53.405a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><path fill="none" stroke="#00f" d="M50.713 53.405a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-2 0"/><path fill="#fff" stroke="none" d="M50.713-35.965a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><path fill="none" stroke="#00f" d="M50.713-35.965a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-2 0"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.49](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
