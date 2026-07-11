

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_28_7|2009 Sessione Ordinaria Estero Americhe — Prova — Quesito 7]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_28|2009 Sessione Ordinaria Estero Americhe — Prova]]

Si determini, motivando la risposta, il periodo della funzione
$$y=\sin(2x+3).$$

Una funzione $f$ si dice periodica di periodo $T>0$ se $f(x+T)=f(x)$ per ogni $x$ del dominio, e $T$ è il più piccolo numero positivo con questa proprietà.

Ricordiamo la regola generale: se una funzione $g$ è periodica di periodo $T$, allora la funzione $g(kx)$, con $k\neq 0$, è periodica di periodo
$$T'=\frac{T}{|k|}.$$
Infatti moltiplicare la variabile per $k$ "comprime" (o dilata) il grafico orizzontalmente del fattore $\frac{1}{|k|}$, e con esso il periodo. Una traslazione orizzontale, invece, non modifica il periodo.

Applichiamo questo alla nostra funzione. La funzione seno di base
$$h(x)=\sin(x)$$
ha periodo $T=2\pi$. Aggiungere la costante $3$ all'argomento corrisponde a una traslazione orizzontale: la funzione $h(x+3)=\sin(x+3)$ ha ancora periodo $2\pi$. Il coefficiente $2$ che moltiplica la $x$ è invece l'unico responsabile della variazione del periodo.

Verifichiamo direttamente dalla definizione. Cerchiamo il più piccolo $T>0$ tale che
$$\sin\big(2(x+T)+3\big)=\sin(2x+3)\quad\text{per ogni }x.$$
Sviluppando l'argomento a primo membro si ha $\sin(2x+3+2T)$. Poiché il seno è periodico di periodo $2\pi$, l'uguaglianza vale per ogni $x$ se e solo se
$$2T=2\pi \;\Rightarrow\; T=\pi.$$

Il periodo cercato è dunque
$$T=\frac{2\pi}{|2|}=\pi.$$

Il grafico conferma il risultato: due massimi consecutivi (o due qualsiasi punti corrispondenti) distano esattamente $\pi$ lungo l'asse $x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="300.812" height="142.947" viewBox="-72 -72 225.609 107.21"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-9.077h212.428"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M138.478-11.477c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-34.512" y="-9.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(178.803 2.153)">x</text><path fill="none" d="M-34.512 34.74v-93.494"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-36.912-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-34.512" y="-9.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -55.555)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-68.94-31.528 2.023-2.623 2.023-2.205 2.023-1.751 2.023-1.265 2.023-.76 2.023-.242 2.023.281 2.023.798 2.023 1.304 2.022 1.784 2.023 2.238 2.023 2.653 2.023 3.024 2.023 3.345 2.023 3.61 2.023 3.815 2.023 3.955 2.023 4.03 2.023 4.038 2.023 3.978 2.023 3.852 2.023 3.662 2.023 3.41 2.023 3.102 2.023 2.742 2.023 2.336 2.023 1.89 2.023 1.415 2.023.914 2.023.4 2.023-.123 2.023-.643 2.023-1.152 2.023-1.643 2.023-2.104 2.023-2.532 2.023-2.917 2.023-3.254 2.023-3.536L11.98.539l2.023-3.92 2.023-4.015 2.023-4.042 2.023-4.003 2.023-3.897 2.023-3.726 2.023-3.493 2.023-3.2 2.023-2.856 2.023-2.463 2.023-2.029 2.023-1.562 2.023-1.067 2.023-.555 2.023-.035 2.023.486 2.023.999 2.023 1.498 2.023 1.967 2.023 2.408 2.023 2.806 2.023 3.157 2.023 3.457 2.023 3.698 2.023 3.878 2.023 3.993 2.023 4.04 2.023 4.023L70.646.022l2.023 3.785 2.023 3.57 2.023 3.294 2.023 2.965 2.023 2.587 2.023 2.163 2.023 1.706 2.023 1.22 2.023.71 2.023.195 2.023-.331 2.023-.846 2.023-1.349 2.023-1.83 2.023-2.276 2.023-2.692 2.023-3.056 2.023-3.372 2.023-3.632 2.023-3.83 2.023-3.965 2.023-4.034 2.023-4.035L119.198-17l2.023-3.837 2.023-3.64 2.023-3.385 2.023-3.07 2.023-2.705 2.023-2.296"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-56.734 28.48v-75.115M41.542 28.48v-75.115"/><path fill="none" d="M-56.334-51.33h97.476"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-54.454-48.93c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M39.262-53.73c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><g stroke="none" font-size="10"><text x="-34.512" y="-9.077" font-family="cmmi10" transform="translate(13.604 -45.786)">T</text><text x="-24.502" y="-9.077" font-family="cmr10" transform="translate(13.604 -45.786)">=</text><text x="-13.946" y="-9.077" font-family="cmmi10" transform="translate(13.604 -45.786)">¼</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
