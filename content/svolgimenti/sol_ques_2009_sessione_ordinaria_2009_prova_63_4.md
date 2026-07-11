

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_63_4|2009 Sessione Ordinaria Estero Europa — Prova — Quesito 4]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_63|2009 Sessione Ordinaria Estero Europa — Prova]]

**Quesito.** Qual è il periodo della funzione $f(x)=\cos(3x+1)$? Si dia ragione della risposta.

## Soluzione

Ricordiamo che una funzione $f$ è **periodica di periodo $T$** se $T$ è il più piccolo numero positivo tale che

$$f(x+T)=f(x) \qquad \text{per ogni } x\in\mathbb{R}.$$

La funzione coseno "elementare" $g(t)=\cos t$ è periodica di periodo fondamentale $2\pi$, cioè $\cos(t+2\pi)=\cos t$ per ogni $t$.

Nel nostro caso l'argomento del coseno è $t=3x+1$. Imponiamo la condizione di periodicità:

$$f(x+T)=\cos\big(3(x+T)+1\big)=\cos\big((3x+1)+3T\big).$$

Questa espressione coincide con $f(x)=\cos(3x+1)$ per ogni $x$ se e solo se l'incremento $3T$ dell'argomento è un multiplo intero del periodo del coseno, cioè

$$3T = 2\pi\,k, \qquad k\in\mathbb{Z}.$$

Il più piccolo valore positivo di $T$ si ottiene per $k=1$:

$$3T = 2\pi \;\Rightarrow\; T=\frac{2\pi}{3}.$$

## Interpretazione

Il termine additivo $+1$ produce soltanto una traslazione orizzontale del grafico e **non influisce** sul periodo. È invece il coefficiente $3$ della $x$ a "comprimere" la funzione: moltiplicando la variabile per $3$, il periodo fondamentale $2\pi$ del coseno si riduce di un fattore $3$, diventando appunto $\dfrac{2\pi}{3}$.

$$\boxed{\,T=\dfrac{2\pi}{3}\,}$$

Il grafico seguente mostra l'andamento di $f(x)=\cos(3x+1)$: la distanza fra due massimi consecutivi è proprio $T=\dfrac{2\pi}{3}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="250.735" height="116.6pt" viewBox="-72 -72 188.051 116.6"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-2.817H102.8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M100.92-5.217c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-53.291" y="-2.817" stroke="none" font-family="cmmi10" font-size="10" transform="translate(160.024 2.153)">x</text><path fill="none" d="M-53.29 44.13V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-55.69-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-53.291" y="-2.817" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -61.814)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-65.81-33.49 1.341-.544 1.341-.029 1.341.487 1.341.993 1.341 1.486 1.341 1.952 1.341 2.386 1.341 2.782 1.341 3.13 1.341 3.429 1.341 3.669 1.341 3.849 1.341 3.967 1.341 4.016 1.341 4.003 1.341 3.922 1.341 3.776 1.341 3.569 1.341 3.3 1.341 2.981 1.341 2.61 1.341 2.196 1.342 1.748 1.34 1.267 1.342.768 1.34.257 1.342-.26 1.34-.773 1.342-1.27 1.34-1.752 1.342-2.198 1.34-2.613 1.342-2.983 1.34-3.303 1.342-3.57 1.34-3.778 1.342-3.923 1.34-4.003 1.342-4.017 1.34-3.965 1.342-3.849 1.341-3.667 1.341-3.426 1.341-3.128 1.341-2.78 1.341-2.383 1.341-1.948 1.341-1.483 1.341-.99 1.341-.483 1.341.033 1.341.548 1.341 1.052 1.341 1.544 1.341 2.005 1.341 2.435 1.341 2.826 1.341 3.168 1.341 3.46 1.341 3.694 1.341 3.866 1.341 3.976 1.341 4.019 1.341 3.996 1.342 3.908 1.34 3.755 1.342 3.54 1.34 3.266 1.342 2.938 1.34 2.563 1.342 2.145 1.34 1.69 1.342 1.211 1.34.708 1.342.195 1.34-.322 1.342-.832 1.34-1.33 1.342-1.805 1.34-2.25 1.342-2.659 1.34-3.024 1.342-3.338 1.341-3.598 1.341-3.798 1.341-3.936 1.341-4.008L52.2-6.438l1.341-3.955 1.341-3.83 1.341-3.642 1.341-3.394 1.341-3.089 1.341-2.734 1.341-2.334 1.341-1.894 1.341-1.425 1.341-.931 1.341-.422 1.341.093 1.341.61 1.341 1.112 1.341 1.599 1.341 2.059 1.341 2.484 1.341 2.868 1.342 3.206 1.34 3.49 1.342 3.718 1.34 3.883 1.342 3.985 1.34 4.02 1.342 3.989 1.34 3.893 1.342 3.732 1.34 3.51 1.342 3.23 1.34 2.897 1.342 2.515"/><path fill="none" stroke-dasharray="3.0,3.0" d="M1.825-2.817v-31.298M67.363-2.817v-31.298"/><path fill="none" d="M2.225-40.375h64.738"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M4.105-37.975c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M65.083-42.775c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><g stroke="none"><text x="-53.291" y="-2.817" font-family="cmmi10" font-size="10" transform="translate(71.946 -44.54)">T</text><text x="-43.281" y="-2.817" font-family="cmr10" font-size="10" transform="translate(71.946 -44.54)">=</text><text x="-31.525" y="-6.755" font-family="cmr7" font-size="7" transform="translate(71.946 -44.54)">2</text><text x="-27.539" y="-6.755" font-family="cmmi7" font-size="7" transform="translate(71.946 -44.54)">¼</text><path d="M40.42-50.056h8.915v.4H40.42z"/><text x="-29.061" y=".631" font-family="cmr7" font-size="7" transform="translate(71.946 -44.54)">3</text></g><text x="-53.291" y="-2.817" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.76](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
