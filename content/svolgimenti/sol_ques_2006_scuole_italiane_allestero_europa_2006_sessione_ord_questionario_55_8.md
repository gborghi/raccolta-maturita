

**Quesito:** [[Quesiti/ques_2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55_8|2006 Estero Europa — Questionario — Quesito 8]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55|2006 Estero Europa — Questionario]]

Consideriamo la funzione
$$f(x) = 3\arctan x - \arctan\frac{3x - x^3}{1 - 3x^2}.$$
Per comodità poniamo $u(x) = \dfrac{3x - x^3}{1 - 3x^2}$, così che $f(x) = 3\arctan x - \arctan u(x)$.

## Dominio

L'arcotangente è definita su tutto $\mathbb{R}$, quindi l'unica condizione riguarda l'argomento $u(x)$: occorre che il denominatore non si annulli,
$$1 - 3x^2 \ne 0 \quad\Rightarrow\quad x \ne \pm\frac{1}{\sqrt{3}}.$$
Il dominio è dunque l'unione dei tre intervalli
$$\left(-\infty,\, -\tfrac{1}{\sqrt{3}}\right) \cup \left(-\tfrac{1}{\sqrt{3}},\, \tfrac{1}{\sqrt{3}}\right) \cup \left(\tfrac{1}{\sqrt{3}},\, +\infty\right).$$

## La derivata è identicamente nulla

Deriviamo i due addendi. Il primo è immediato:
$$\frac{d}{dx}\big(3\arctan x\big) = \frac{3}{1 + x^2}.$$

Per il secondo serve la derivata di $u$. Al numeratore:
$$(3 - 3x^2)(1 - 3x^2) - (3x - x^3)(-6x) = \big(3 - 12x^2 + 9x^4\big) + \big(18x^2 - 6x^4\big) = 3 + 6x^2 + 3x^4 = 3\,(1 + x^2)^2,$$
quindi
$$u'(x) = \frac{3\,(1 + x^2)^2}{(1 - 3x^2)^2}.$$

Calcoliamo poi $1 + u^2$, riducendo allo stesso denominatore:
$$1 + u^2 = \frac{(1 - 3x^2)^2 + (3x - x^3)^2}{(1 - 3x^2)^2} = \frac{1 + 3x^2 + 3x^4 + x^6}{(1 - 3x^2)^2} = \frac{(1 + x^2)^3}{(1 - 3x^2)^2}.$$

Dalla regola di derivazione $\dfrac{d}{dx}\arctan u = \dfrac{u'}{1 + u^2}$ otteniamo
$$\frac{d}{dx}\Big(\arctan u\Big) = \frac{u'}{1 + u^2} = \frac{3\,(1 + x^2)^2}{(1 - 3x^2)^2}\cdot\frac{(1 - 3x^2)^2}{(1 + x^2)^3} = \frac{3}{1 + x^2}.$$

Pertanto, in ogni punto del dominio,
$$f'(x) = \frac{3}{1 + x^2} - \frac{3}{1 + x^2} = 0.$$

Poiché la derivata è nulla su tutto il dominio, $f$ è **costante su ciascuno dei tre intervalli** (una funzione con derivata nulla su un intervallo è ivi costante). Si osservi che i tre valori possono comunque essere diversi tra loro, perché il dominio non è un unico intervallo.

*Osservazione.* L'argomento $\dfrac{3x - x^3}{1 - 3x^2}$ è esattamente la formula di triplicazione della tangente: posto $x = \tan\theta$, esso vale $\tan(3\theta)$. Ciò spiega perché $\arctan u$ coincide con $3\arctan x$ a meno di multipli di $\pi$, e quindi perché la differenza è costante a tratti.

## Valore della costante su ciascun intervallo

Basta valutare $f$ in un punto comodo di ogni intervallo.

**Primo intervallo** $\left(-\infty,\, -\tfrac{1}{\sqrt{3}}\right)$: scegliamo $x = -\sqrt{3}$. Qui $3x - x^3 = -3\sqrt{3} - (-3\sqrt{3}) = 0$, dunque $u(-\sqrt{3}) = 0$ e, poiché $\arctan(-\sqrt{3}) = -\dfrac{\pi}{3}$,
$$f(-\sqrt{3}) = 3\left(-\frac{\pi}{3}\right) - \arctan 0 = -\pi.$$

**Secondo intervallo** $\left(-\tfrac{1}{\sqrt{3}},\, \tfrac{1}{\sqrt{3}}\right)$: scegliamo $x = 0$, ottenendo
$$f(0) = 3\arctan 0 - \arctan 0 = 0.$$

**Terzo intervallo** $\left(\tfrac{1}{\sqrt{3}},\, +\infty\right)$: la funzione è dispari, poiché $\arctan(-x) = -\arctan x$ implica $f(-x) = -f(x)$; quindi il valore è l'opposto di quello del primo intervallo,
$$f(x) = \pi \qquad \left(\text{si verifica anche direttamente con } x = \sqrt{3}:\ f(\sqrt{3}) = 3\cdot\frac{\pi}{3} - 0 = \pi\right).$$

## Conclusione

$$f(x) = \begin{cases} -\pi & \text{se } -\infty < x < -\dfrac{1}{\sqrt{3}}, \\[2mm] 0 & \text{se } -\dfrac{1}{\sqrt{3}} < x < \dfrac{1}{\sqrt{3}}, \\[2mm] \pi & \text{se } \dfrac{1}{\sqrt{3}} < x < +\infty. \end{cases}$$

Il grafico è quindi costituito da tre segmenti orizzontali, con salti in corrispondenza dei punti $x = \pm\dfrac{1}{\sqrt{3}}$ esclusi dal dominio.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="275.013" height="298.488" viewBox="-72 -72 206.26 223.866"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 46.121h193.078"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M119.128 43.721c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="24.669" y="46.121" stroke="none" font-family="cmmi10" font-size="10" transform="translate(100.272 2.153)">x</text><path fill="none" d="M24.67 151.396v-210.15"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M22.27-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="24.669" y="46.121" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -110.752)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-60.69-43.22h170.717M-60.69 135.463h170.717"/><path fill="none" d="M8.252 43.276v5.69M41.086 43.276v5.69"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-60.69 135.463H8.253M8.252 46.121h32.834M41.086-43.22h68.941"/><path fill="#fff" stroke="#00f" stroke-width=".8" d="M10.252 135.463a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10.252 46.121a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM43.086 46.121a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM43.086-43.22a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-2 0"/><text x="24.669" y="46.121" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-9.592 -87.189)">¼</text><g stroke="none" font-size="10"><text x="24.669" y="46.121" font-family="cmsy10" transform="translate(-17.37 91.842)">¡</text><text x="32.447" y="46.121" font-family="cmmi10" transform="translate(-17.37 91.842)">¼</text></g><g stroke="none"><text x="24.669" y="46.121" font-family="cmsy10" font-size="10" transform="translate(-35.974 16.25)">¡</text><text x="36.932" y="42.184" font-family="cmr7" font-size="7" transform="translate(-35.974 16.25)">1</text><path d="M-2.327 59.67H8.229v.4H-2.327z"/><text x="33.647" y="44.901" font-family="cmsy7" font-size="7" transform="translate(-35.974 16.25)">p</text><path d="M4.242 60.81h3.986v.34H4.242z"/><text x="40.216" y="50.736" font-family="cmr7" font-size="7" transform="translate(-35.974 16.25)">3</text></g><g stroke="none"><text x="29.154" y="42.184" font-family="cmr7" font-size="7" transform="translate(20.552 16.25)">1</text><path d="M46.421 59.67h10.556v.4H46.421z"/><text x="25.869" y="44.901" font-family="cmsy7" font-size="7" transform="translate(20.552 16.25)">p</text><path d="M52.991 60.81h3.986v.34h-3.986z"/><text x="32.439" y="50.736" font-family="cmr7" font-size="7" transform="translate(20.552 16.25)">3</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.59](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
