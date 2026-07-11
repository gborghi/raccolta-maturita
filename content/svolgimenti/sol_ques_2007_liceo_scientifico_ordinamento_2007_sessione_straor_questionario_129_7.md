

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_7|2007 LS Ordinamento Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si calcoli il volume del solido generato dalla rotazione completa, attorno all'asse delle $x$, della regione finita di piano delimitata dalla curva di equazione $y=\sqrt{\sin x}$ e dall'asse stesso nell'intervallo $0\le x\le \pi$.

## Impostazione

Nell'intervallo $[0,\pi]$ si ha $\sin x\ge 0$, quindi la funzione $y=\sqrt{\sin x}$ è ben definita e non negativa: essa si annulla agli estremi $x=0$ e $x=\pi$ ed è positiva in tutti i punti interni. La regione considerata è dunque quella compresa tra il grafico della curva e l'asse $x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="245.044" height="144.835" viewBox="-72 -72 183.783 108.626"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-69.509 19.09h168.04"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M96.652 16.69c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.404" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(162.869 2.153)">x</text><path fill="none" d="M-60.404 28.48v-87.234"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-62.804-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.404" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -83.722)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.404 19.09 1.81-12.476 1.81-5.164 1.81-3.952 1.811-3.317 1.81-2.908 1.81-2.61 1.81-2.382 1.811-2.196 1.81-2.04 1.81-1.906 1.81-1.788 1.811-1.68 1.81-1.584 1.81-1.496 1.81-1.413 1.811-1.335 1.81-1.264 1.81-1.194 1.81-1.126 1.811-1.06 1.81-1.002 1.81-.94 1.81-.882 1.811-.825 1.81-.768 1.81-.715 1.81-.659 1.811-.607 1.81-.554 1.81-.502 1.81-.45 1.811-.4 1.81-.35 1.81-.297 1.81-.249 1.811-.2 1.81-.147 1.81-.1 1.811-.05h1.81l1.81.05 1.81.099 1.811.148 1.81.198 1.81.249 1.81.298 1.811.348 1.81.4 1.81.45 1.81.502 1.811.554 1.81.606 1.81.66 1.81.713 1.811.769 1.81.824 1.81.882 1.81.94 1.811 1 1.81 1.062 1.81 1.126 1.81 1.193 1.811 1.263 1.81 1.335 1.81 1.412 1.81 1.496 1.811 1.585 1.81 1.68 1.81 1.787 1.81 1.903 1.811 2.04 1.81 2.194 1.81 2.382 1.81 2.61 1.811 2.906 1.81 3.315 1.81 3.946 1.811 5.156 1.81 11.622"/><path fill="#d9d9ff" fill-opacity=".6" stroke="none" stroke-opacity=".6" d="m-60.404 19.09 1.81-12.476 1.81-5.164 1.81-3.952 1.811-3.317 1.81-2.908 1.81-2.61 1.81-2.382 1.811-2.196 1.81-2.04 1.81-1.906 1.81-1.788 1.811-1.68 1.81-1.584 1.81-1.496 1.81-1.413 1.811-1.335 1.81-1.264 1.81-1.194 1.81-1.126 1.811-1.06 1.81-1.002 1.81-.94 1.81-.882 1.811-.825 1.81-.768 1.81-.715 1.81-.659 1.811-.607 1.81-.554 1.81-.502 1.81-.45 1.811-.4 1.81-.35 1.81-.297 1.81-.249 1.811-.2 1.81-.147 1.81-.1 1.811-.05h1.81l1.81.05 1.81.099 1.811.148 1.81.198 1.81.249 1.81.298 1.811.348 1.81.4 1.81.45 1.81.502 1.811.554 1.81.606 1.81.66 1.81.713 1.811.769 1.81.824 1.81.882 1.81.94 1.811 1 1.81 1.062 1.81 1.126 1.81 1.193 1.811 1.263 1.81 1.335 1.81 1.412 1.81 1.496 1.811 1.585 1.81 1.68 1.81 1.787 1.81 1.903 1.811 2.04 1.81 2.194 1.81 2.382 1.81 2.61 1.811 2.906 1.81 3.315 1.81 3.946 1.811 5.156 1.81 11.622.01.886z"/><text x="-60.404" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(139.99 7.839)">¼</text><g stroke="none"><text x="-59.204" y="15.154" font-family="cmmi7" font-size="7" transform="translate(67.846 10.484)">¼</text><path d="M8.642 26.875h4.927v.4H8.642z"/><text x="-58.733" y="22.539" font-family="cmr7" font-size="7" transform="translate(67.846 10.484)">2</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M11.106 19.09v-62.595"/><text x="-60.404" y="19.091" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -59.374)">1</text><path fill="none" d="M-61.77-43.505h2.732"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-60.404" y="19.091" font-family="cmmi10" font-size="10" transform="translate(94.582 -55.844)">y</text><text x="-52.365" y="19.091" font-family="cmr10" font-size="10" transform="translate(94.582 -55.844)">=</text><text x="-41.809" y="10.702" font-family="cmsy10" font-size="10" transform="translate(94.582 -55.844)">p</text><path d="M61.106-45.542h19.66v.4h-19.66z"/><text x="-33.476" y="19.091" font-family="cmr10" font-size="10" transform="translate(94.582 -55.844)">sin</text><text x="-19.531" y="19.091" font-family="cmmi10" font-size="10" transform="translate(94.582 -55.844)">x</text></g></g></g></svg>
</figure>

## Calcolo del volume

Ruotando tale regione attorno all'asse $x$, il volume del solido di rotazione si ottiene con la formula

$$V=\pi\int_a^b f^2(x)\,dx=\pi\int_0^\pi \left(\sqrt{\sin x}\right)^2 dx.$$

Poiché $\left(\sqrt{\sin x}\right)^2=\sin x$ (l'argomento è non negativo sull'intervallo), l'integrale si semplifica notevolmente:

$$V=\pi\int_0^\pi \sin x\,dx.$$

Una primitiva di $\sin x$ è $-\cos x$, quindi

$$V=\pi\Big[-\cos x\Big]_0^\pi=\pi\big(-\cos\pi+\cos 0\big)=\pi\big(1+1\big)=2\pi.$$

## Conclusione

Il volume del solido di rotazione è

$$V=2\pi$$

espresso in unità di volume.

*Fonte:* [📄 PDF p.132](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
