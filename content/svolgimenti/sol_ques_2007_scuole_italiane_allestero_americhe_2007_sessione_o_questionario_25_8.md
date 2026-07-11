

**Quesito:** [[Quesiti/ques_2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25_8|2007 Estero Americhe Ordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25|2007 Estero Americhe Ordinaria — Questionario]]

Si vuole mostrare che

$$\int_0^1 \arccos x\,dx - \frac{1}{2}\int_0^1 (1 - 2\arcsin x)\,dx = \frac{\pi-1}{2}.$$

**Idea risolutiva.** Conviene riscrivere il primo integrale nella forma $\displaystyle \frac{1}{2}\int_0^1 2\arccos x\,dx$ e raccogliere tutto sotto un unico segno di integrale, così da poter sfruttare l'identità fondamentale

$$\arccos x + \arcsin x = \frac{\pi}{2}, \qquad x\in[-1,1].$$

**Calcolo.** Portando anche il primo integrale a coefficiente $\tfrac12$ si ottiene

$$\int_0^1 \arccos x\,dx - \frac{1}{2}\int_0^1 (1 - 2\arcsin x)\,dx = \frac{1}{2}\int_0^1 \big[\,2\arccos x - (1 - 2\arcsin x)\,\big]\,dx.$$

Riordinando l'integranda e mettendo in evidenza il fattore $2$:

$$= \frac{1}{2}\int_0^1 \big[\,2(\arccos x + \arcsin x) - 1\,\big]\,dx.$$

Per l'identità richiamata sopra $\arccos x + \arcsin x = \dfrac{\pi}{2}$, quindi $2(\arccos x + \arcsin x) = \pi$ e l'integranda diventa la costante $\pi - 1$:

$$= \frac{1}{2}\int_0^1 (\pi - 1)\,dx = \frac{1}{2}\,(\pi - 1)\,[x]_0^1 = \frac{\pi-1}{2}.$$

Il valore cercato è dunque $\displaystyle \frac{\pi-1}{2}$, come si voleva dimostrare.

**Verifica diretta.** Lo stesso risultato si ottiene calcolando separatamente i due integrali. Integrando per parti,

$$\int_0^1 \arccos x\,dx = \big[x\arccos x\big]_0^1 + \int_0^1 \frac{x}{\sqrt{1-x^2}}\,dx = 0 + \big[-\sqrt{1-x^2}\,\big]_0^1 = 1,$$

$$\int_0^1 \arcsin x\,dx = \big[x\arcsin x\big]_0^1 - \int_0^1 \frac{x}{\sqrt{1-x^2}}\,dx = \frac{\pi}{2} - 1.$$

Sostituendo:

$$1 - \frac{1}{2}\Big[\,1 - 2\Big(\frac{\pi}{2}-1\Big)\Big] = 1 - \frac{1}{2}\,(3-\pi) = \frac{\pi-1}{2}.$$

**N.B. — l'identità usata.** Poniamo $\arcsin x = z$ con $z\in\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$; allora $\sin z = x$. Poiché seno e coseno di angoli complementari coincidono, $\sin z = \cos\!\left(\dfrac{\pi}{2}-z\right) = x$, e dato che $\dfrac{\pi}{2}-z \in [0,\pi]$ questo significa proprio $\dfrac{\pi}{2}-z = \arccos x$. Ricordando che $z = \arcsin x$ si ottiene

$$\arccos x + \arcsin x = \frac{\pi}{2}.$$

*Fonte:* [📄 PDF p.29](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
