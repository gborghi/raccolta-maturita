

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_10|2004 PNI Straordinaria — Questionario — Quesito 10]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Nel piano cartesiano $(Oxy)$ è assegnata la famiglia di affinità di equazioni

$$\begin{cases} X = mx + 2y - m \\ Y = -x - y + m \end{cases}$$

con $m$ parametro reale. Si chiede il luogo geometrico dei punti uniti al variare di $m$.

## Condizione di affinità

Le equazioni date individuano effettivamente un'affinità solo se il determinante della matrice dei coefficienti della parte lineare è diverso da zero:

$$\det \begin{pmatrix} m & 2 \\ -1 & -1 \end{pmatrix} = -m + 2 \ne 0 \;\Rightarrow\; m \ne 2.$$

Per $m = 2$ la trasformazione degenera e non è biunivoca, quindi va esclusa.

## Ricerca dei punti uniti

Un punto è unito se coincide con la propria immagine, cioè se $X = x$ e $Y = y$. Imponiamo queste condizioni:

$$\begin{cases} x = mx + 2y - m \\ y = -x - y + m \end{cases}$$

Dalla seconda equazione ricaviamo il parametro:

$$2y = -x + m \;\Rightarrow\; m = x + 2y.$$

Sostituendo $m = x + 2y$ nella prima equazione:

$$x = (x + 2y)(x - 1) + 2y.$$

Sviluppando il prodotto,

$$x = x^2 - x + 2xy - 2y + 2y = x^2 - x + 2xy,$$

da cui

$$x^2 - 2x + 2xy = 0 \;\Rightarrow\; x\,(x + 2y - 2) = 0.$$

Il prodotto si annulla quando

$$x = 0 \qquad \text{oppure} \qquad x + 2y - 2 = 0.$$

## Discussione e conclusione

La retta $x + 2y - 2 = 0$ è formata dai punti in cui $m = x + 2y = 2$: essendo $m = 2$ escluso dalla condizione di affinità, questa retta va scartata.

Rimane la retta $x = 0$ (l'asse $y$). Su di essa il parametro vale $m = x + 2y = 2y$, quindi il valore proibito $m = 2$ si presenta per $y = 1$: il punto $(0,1)$ va allora tolto dal luogo, perché appartiene anche alla retta scartata $x + 2y - 2 = 0$.

Il luogo geometrico dei punti uniti è dunque la **retta di equazione $x = 0$ privata del punto di ordinata $1$**, cioè privata del punto $(0,1)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="244.664" height="230.735" viewBox="-72 -72 183.498 173.051"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 43.276H98.246"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M96.366 40.876c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="13.288" y="43.276" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.891 2.153)">x</text><path fill="none" d="M13.288 100.181V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10.888-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="13.288" y="43.276" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -107.907)">y</text><path fill="none" stroke="#00f" stroke-width="1.2" d="M13.288 100.181V-53.463"/><path fill="#fff" stroke="none" d="M16.288 14.823a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-3 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M16.288 14.823a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-3 0"/><g stroke="none" font-size="10"><text x="13.288" y="43.276" font-family="cmr10" transform="translate(9.223 -27.375)">(0</text><text x="22.177" y="43.276" font-family="cmmi10" transform="translate(9.223 -27.375)">;</text><text x="26.622" y="43.276" font-family="cmr10" transform="translate(9.223 -27.375)">1)</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="13.288" y="43.276" font-family="cmmi10" transform="translate(-37.632 48.747)">x</text><text x="21.781" y="43.276" font-family="cmr10" transform="translate(-37.632 48.747)">=</text><text x="32.337" y="43.276" font-family="cmr10" transform="translate(-37.632 48.747)">0</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.142](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
