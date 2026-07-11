

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_10|2006 Sessione Ordinaria — Prova (p.10) — Quesito 10]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

La funzione $f(x) = a\,\operatorname{sen}x + b\cos x$ ha un estremo relativo per $x = \dfrac{\pi}{4}$ ed è $f\!\left(\dfrac{\pi}{3}\right) = 1$. Si trovino $a$ e $b$ e si dica qual è il periodo di $f(x)$.

## Condizione di estremo relativo

La funzione è derivabile su tutto $\mathbb{R}$ e la sua derivata è

$$f'(x) = a\cos x - b\,\operatorname{sen}x.$$

Condizione necessaria affinché $x = \dfrac{\pi}{4}$ sia punto di estremo relativo è che la derivata vi si annulli. Poiché $\cos\dfrac{\pi}{4} = \operatorname{sen}\dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2}$, si ha

$$f'\!\left(\frac{\pi}{4}\right) = a\cdot\frac{\sqrt{2}}{2} - b\cdot\frac{\sqrt{2}}{2} = \frac{\sqrt{2}}{2}\,(a - b) = 0 \;\Rightarrow\; a = b.$$

## Determinazione di $a$ e $b$

Imponiamo ora la seconda condizione. Essendo $\operatorname{sen}\dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}$ e $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$,

$$f\!\left(\frac{\pi}{3}\right) = a\cdot\frac{\sqrt{3}}{2} + b\cdot\frac{1}{2} = 1.$$

Sostituendo $b = a$:

$$a\left(\frac{\sqrt{3}}{2} + \frac{1}{2}\right) = 1 \;\Rightarrow\; a\cdot\frac{\sqrt{3}+1}{2} = 1 \;\Rightarrow\; a = \frac{2}{\sqrt{3}+1}.$$

Razionalizzando:

$$a = \frac{2}{\sqrt{3}+1}\cdot\frac{\sqrt{3}-1}{\sqrt{3}-1} = \frac{2(\sqrt{3}-1)}{3-1} = \sqrt{3}-1.$$

Quindi

$$\boxed{\,a = b = \sqrt{3}-1\,}.$$

Verifica della natura dell'estremo: la derivata seconda è $f''(x) = -a\,\operatorname{sen}x - b\cos x$, e in $x = \dfrac{\pi}{4}$ vale

$$f''\!\left(\frac{\pi}{4}\right) = -(\sqrt{3}-1)\left(\frac{\sqrt{2}}{2}+\frac{\sqrt{2}}{2}\right) = -(\sqrt{3}-1)\sqrt{2} < 0,$$

perciò in $x = \dfrac{\pi}{4}$ si ha effettivamente un **massimo** relativo.

## Periodo di $f(x)$

Con i valori trovati la funzione diventa

$$f(x) = (\sqrt{3}-1)(\operatorname{sen}x + \cos x).$$

Scrivendo la combinazione lineare in forma di una sola sinusoide, con ampiezza $\sqrt{1^2+1^2}=\sqrt{2}$,

$$\operatorname{sen}x + \cos x = \sqrt{2}\,\operatorname{sen}\!\left(x + \frac{\pi}{4}\right),$$

si ottiene

$$f(x) = (\sqrt{3}-1)\sqrt{2}\,\operatorname{sen}\!\left(x + \frac{\pi}{4}\right) = (\sqrt{6}-\sqrt{2})\,\operatorname{sen}\!\left(x + \frac{\pi}{4}\right).$$

Si tratta dunque di una sinusoide di pulsazione $1$; il suo periodo è

$$T = \frac{2\pi}{1} = 2\pi.$$

Coerentemente, il massimo si presenta quando $x + \dfrac{\pi}{4} = \dfrac{\pi}{2}$, cioè per $x = \dfrac{\pi}{4}$, come richiesto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="382.794" height="149.775" viewBox="-72 -72 287.095 112.332"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-70.901-6.232h272.745"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M199.964-8.632c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-26.515" y="-6.232" stroke="none" font-family="cmmi10" font-size="10" transform="translate(232.292 2.153)">x</text><path fill="none" d="M-26.515 39.861v-98.615"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-28.915-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-26.515" y="-6.232" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -58.4)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.487 8.006 2.916-2.811 2.915-2.894 2.915-2.956 2.916-2.998 2.915-3.016 2.916-3.011 2.915-2.988 2.916-2.941 2.915-2.872 2.915-2.783 2.916-2.675 2.915-2.544 2.916-2.396 2.915-2.232 2.915-2.05 2.916-1.854 2.915-1.645 2.916-1.423 2.915-1.191 2.916-.951 2.915-.703 2.915-.449 2.916-.193 2.915.064 2.916.321 2.915.576 2.916.827 2.915 1.07 2.915 1.307 2.916 1.535 2.915 1.75 2.916 1.955 2.915 2.142 2.916 2.316 2.915 2.473 2.915 2.61 2.916 2.73 2.915 2.83 2.916 2.91 2.915 2.967 2.916 3.002 2.915 3.017 2.915 3.01L60.792.82l2.915 2.927 2.916 2.856 2.915 2.763 2.916 2.648 2.915 2.516 2.915 2.363L81.2 19.09l2.915 2.01 2.916 1.813 2.915 1.599 2.916 1.376 2.915 1.141 2.915.9 2.916.65 2.915.396 2.916.14 2.915-.118 2.916-.375 2.915-.628 2.915-.878 2.916-1.12 2.915-1.356 2.916-1.58 2.915-1.794 2.915-1.994 2.916-2.18 2.915-2.35 2.916-2.503 2.915-2.638 2.916-2.753L151.17 4l2.915-2.924 2.916-2.976 2.915-3.007 2.916-3.016 2.915-3.006 2.916-2.97 2.915-2.915 2.915-2.838 2.916-2.74 2.915-2.623 2.916-2.485 2.915-2.33 2.916-2.157 2.915-1.97"/><path stroke="none" d="M2.1-41.58a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-26.515" y="-6.232" stroke="none" font-family="cmr10" font-size="10" transform="translate(30.349 -38.881)">max</text><path fill="none" stroke-dasharray="3.0,3.0" d="M.3-6.232V-41.58"/><g stroke="none"><text x="-25.315" y="-10.169" font-family="cmmi7" font-size="7" transform="translate(23.152 10.484)">¼</text><path d="M-2.163 1.552h4.927v.4h-4.927z"/><text x="-24.844" y="-2.784" font-family="cmr7" font-size="7" transform="translate(23.152 10.484)">4</text></g><text x="-26.515" y="-6.232" stroke="none" font-family="cmmi10" font-size="10" transform="translate(104.235 7.839)">¼</text><g stroke="none" font-size="10"><text x="-26.515" y="-6.232" font-family="cmr10" transform="translate(209 9.977)">2</text><text x="-21.515" y="-6.232" font-family="cmmi10" transform="translate(209 9.977)">¼</text></g><g stroke="none"><text x="-26.515" y="-14.504" font-family="cmsy10" font-size="10" transform="translate(-42.422 -31.476)">p</text><path d="M-60.604-46.38h5v.4h-5z"/><text x="-18.182" y="-6.232" font-family="cmr10" font-size="10" transform="translate(-42.422 -31.476)">6</text><text x="-10.96" y="-6.232" font-family="cmsy10" font-size="10" transform="translate(-42.422 -31.476)">¡</text><text x="-.96" y="-14.504" font-family="cmsy10" font-size="10" transform="translate(-42.422 -31.476)">p</text><path d="M-35.048-46.38h5v.4h-5z"/><text x="7.374" y="-6.232" font-family="cmr10" font-size="10" transform="translate(-42.422 -31.476)">2</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
