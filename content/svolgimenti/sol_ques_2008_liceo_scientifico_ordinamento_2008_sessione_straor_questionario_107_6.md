

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_6|2008 Ordinamento Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si determini, in base alla definizione, la derivata della funzione $f(x)=\sin^2 x$ nel punto $x=\dfrac{\pi}{4}$.

## Soluzione

La derivata di una funzione in un punto $x_0$ è, per definizione, il limite del rapporto incrementale:

$$f'(x_0)=\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}.$$

Nel nostro caso $f(x)=\sin^2 x$ e $x_0=\dfrac{\pi}{4}$. Ricordando che $\sin\dfrac{\pi}{4}=\dfrac{\sqrt{2}}{2}$, si ha

$$f\!\left(\frac{\pi}{4}\right)=\sin^2\frac{\pi}{4}=\left(\frac{\sqrt{2}}{2}\right)^2=\frac{1}{2}.$$

Calcoliamo il numeratore del rapporto incrementale. Applicando la formula di addizione del seno,

$$\sin\!\left(\frac{\pi}{4}+h\right)=\sin\frac{\pi}{4}\cos h+\cos\frac{\pi}{4}\sin h=\frac{\sqrt{2}}{2}\,(\cos h+\sin h),$$

da cui, elevando al quadrato,

$$\sin^2\!\left(\frac{\pi}{4}+h\right)=\frac{1}{2}\,(\cos h+\sin h)^2=\frac{1}{2}\bigl(\cos^2 h+2\sin h\cos h+\sin^2 h\bigr)=\frac{1}{2}\bigl(1+\sin 2h\bigr).$$

Pertanto

$$f\!\left(\frac{\pi}{4}+h\right)-f\!\left(\frac{\pi}{4}\right)=\frac{1}{2}\bigl(1+\sin 2h\bigr)-\frac{1}{2}=\frac{1}{2}\sin 2h.$$

Il rapporto incrementale diventa allora

$$f'\!\left(\frac{\pi}{4}\right)=\lim_{h\to 0}\frac{\frac{1}{2}\sin 2h}{h}=\frac{1}{2}\lim_{h\to 0}\frac{\sin 2h}{h}.$$

Usando il limite notevole $\displaystyle\lim_{h\to 0}\frac{\sin 2h}{2h}=1$, si ottiene $\displaystyle\lim_{h\to 0}\frac{\sin 2h}{h}=2$, e quindi

$$f'\!\left(\frac{\pi}{4}\right)=\frac{1}{2}\cdot 2=1.$$

Il risultato è coerente con la regola di derivazione $f'(x)=2\sin x\cos x=\sin 2x$, che valutata in $x=\dfrac{\pi}{4}$ dà $\sin\dfrac{\pi}{2}=1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="325.848" height="144.835" viewBox="-72 -72 244.386 108.626"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 19.09h231.205"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M157.255 16.69c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.551" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(222.619 2.153)">x</text><path fill="none" d="M-59.551 28.48v-87.234"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.951-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-59.551" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -83.722)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.551 19.09 2.489-.098 2.49-.296 2.488-.492 2.49-.682 2.488-.872 2.49-1.054 2.489-1.23 2.489-1.398 2.489-1.556 2.489-1.706 2.489-1.846 2.49-1.97 2.488-2.087 2.49-2.186 2.488-2.275 2.49-2.346 2.488-2.406 2.49-2.45 2.489-2.475 2.489-2.486 2.489-2.485 2.489-2.465 2.489-2.429 2.49-2.377 2.488-2.314 2.49-2.233 2.488-2.137 2.49-2.032 2.489-1.91 2.489-1.777 2.489-1.633 2.489-1.48 2.489-1.316 2.489-1.14 2.49-.966 2.488-.78 2.49-.586 2.488-.395 2.49-.2h2.489l2.489.198 2.489.395 2.489.583 2.489.78 2.489.965 2.49 1.14 2.488 1.315 2.49 1.479 2.488 1.633 2.49 1.775 2.489 1.91 2.489 2.03 2.489 2.137 2.489 2.231 2.489 2.316 2.489 2.378 2.49 2.428 2.488 2.465 2.49 2.482 2.488 2.488 2.49 2.475 2.489 2.45 2.489 2.407L99.75-.669l2.489 2.274 2.489 2.187 2.489 2.088 2.49 1.97 2.488 1.847 2.49 1.706 2.488 1.558 2.49 1.398 2.489 1.231 2.489 1.055 2.489.873 2.489.685 2.489.491 2.489.298 2.49.099"/><path fill="none" stroke="red" stroke-width=".8" d="M-43.902 21.307 24.954-47.55"/><path stroke="none" d="M-8.636-12.207a1.753 1.753 0 1 0-3.505 0 1.753 1.753 0 0 0 3.505 0m-1.752 0"/><text x="-59.551" y="19.091" stroke="none" font-family="cmmi10" font-size="10" transform="translate(37.82 -34.83)">P</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-59.551" y="19.091" font-family="cmmi10" font-size="10" transform="translate(128.86 -49.82)">y</text><text x="-51.512" y="19.091" font-family="cmr10" font-size="10" transform="translate(128.86 -49.82)">=</text><text x="-40.956" y="19.091" font-family="cmr10" font-size="10" transform="translate(128.86 -49.82)">sin</text><text x="-28.678" y="14.884" font-family="cmr7" font-size="7" transform="translate(128.86 -49.82)">2</text><text x="-22.526" y="19.091" font-family="cmmi10" font-size="10" transform="translate(128.86 -49.82)">x</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-10.388 19.09v-31.297"/><g stroke="none"><text x="-58.351" y="15.154" font-family="cmmi7" font-size="7" transform="translate(45.5 10.484)">¼</text><path d="M-12.852 26.875h4.927v.4h-4.927z"/><text x="-57.88" y="22.539" font-family="cmr7" font-size="7" transform="translate(45.5 10.484)">4</text></g></g></svg>
</figure>

La retta tangente al grafico di $y=\sin^2 x$ nel punto $P\!\left(\dfrac{\pi}{4},\dfrac{1}{2}\right)$ ha dunque coefficiente angolare $1$.

*Fonte:* [📄 PDF p.110](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
