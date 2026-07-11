

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_6|2005 Ordinamento Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Si deve dimostrare, in base alla definizione di limite, che
$$\lim_{x\to 0}\cos x = 1.$$

**Ciò che si ammette.** Si assume la disuguaglianza fondamentale
$$|\sin t|\le |t|\qquad \forall\, t\in\mathbb{R},$$
con uguaglianza solo per $t=0$. Essa esprime il fatto geometrico che la semicorda associata a un arco non supera l'arco stesso.

**Impostazione.** Dimostrare il limite significa provare che
$$\forall\,\varepsilon>0\ \ \exists\ \text{un intorno } I \text{ di } x=0 \ \text{ tale che, } \forall x\in I\ (x\ne 0),\ \ |\cos x-1|<\varepsilon.$$

Osserviamo intanto che $\cos x\le 1$ per ogni $x$, dunque la disuguaglianza $\cos x<1+\varepsilon$ è sempre verificata: il cuore della dimostrazione consiste nel garantire $\cos x>1-\varepsilon$ in un opportuno intorno di $0$.

**Stima di $|\cos x-1|$.** Utilizziamo l'identità di bisezione $\cos x = 1-2\sin^2\dfrac{x}{2}$, da cui
$$\cos x-1=-2\sin^2\frac{x}{2}\ \Rightarrow\ |\cos x-1|=2\sin^2\frac{x}{2}.$$

Applicando la disuguaglianza ammessa con $t=\dfrac{x}{2}$ si ha $\left|\sin\dfrac{x}{2}\right|\le\left|\dfrac{x}{2}\right|$, quindi $\sin^2\dfrac{x}{2}\le\dfrac{x^2}{4}$ e perciò
$$|\cos x-1|=2\sin^2\frac{x}{2}\le 2\cdot\frac{x^2}{4}=\frac{x^2}{2}.$$

**Scelta dell'intorno.** Fissato $\varepsilon>0$, imponiamo $\dfrac{x^2}{2}<\varepsilon$, cioè $|x|<\sqrt{2\varepsilon}$. Scegliendo dunque l'intorno
$$I=\left(-\sqrt{2\varepsilon},\ \sqrt{2\varepsilon}\right),$$
per ogni $x\in I$ con $x\ne 0$ risulta
$$|\cos x-1|\le\frac{x^2}{2}<\varepsilon.$$

Poiché a ogni $\varepsilon>0$ corrisponde l'intorno $I$ richiesto, per definizione di limite si conclude che
$$\lim_{x\to 0}\cos x = 1.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="322.369" height="143.735" viewBox="-72 -72 241.777 107.801"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 22.22h212.426"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M138.476 19.82c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="34.343" y="22.221" stroke="none" font-family="cmmi10" font-size="10" transform="translate(109.946 2.153)">x</text><path fill="none" d="M34.343 28.48v-87.234"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M31.943-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="34.343" y="22.221" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -86.852)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.551 17.794 3.183-3.167 3.182-3.149 3.183-3.12 3.182-3.083 3.183-3.04 3.182-2.99 3.183-2.928 3.182-2.863 3.183-2.788 3.182-2.707 3.183-2.617 3.182-2.523 3.183-2.422 3.182-2.312 3.183-2.197 3.182-2.08 3.183-1.954 3.182-1.823 3.183-1.689 3.182-1.55 3.183-1.406 3.182-1.26 3.183-1.11 3.182-.955 3.183-.8 3.183-.644 3.182-.484 3.183-.322 3.182-.162 3.183-.001 3.182.162 3.183.321 3.182.483 3.183.642 3.182.799 3.183.956 3.182 1.109 3.183 1.259 3.182 1.405 3.183 1.549 3.182 1.688 3.183 1.822 3.182 1.953 3.183 2.079 3.182 2.196 3.183 2.312 3.182 2.42 3.183 2.523 3.182 2.617 3.183 2.706 3.183 2.789 3.182 2.861 3.183 2.93 3.182 2.987 3.183 3.04 3.182 3.085 3.183 3.118 3.182 3.148 3.183 3.168"/><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-40.375h212.826"/><text x="34.343" y="22.221" stroke="none" font-family="cmr10" font-size="10" transform="translate(109.946 -59.374)">1</text></g><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-21.596h212.826"/><g fill="red" stroke="none" font-size="10"><text x="34.343" y="22.221" font-family="cmr10" transform="translate(109.946 -41.011)">1</text><text x="41.565" y="22.221" font-family="cmsy10" transform="translate(109.946 -41.011)">¡</text><text x="51.565" y="22.221" font-family="cmmi10" transform="translate(109.946 -41.011)">&quot;</text></g></g><text x="34.343" y="22.221" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 9.977)">0</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="34.343" y="22.221" font-family="cmmi10" transform="translate(52.302 -33.247)">y</text><text x="42.382" y="22.221" font-family="cmr10" transform="translate(52.302 -33.247)">=</text><text x="52.938" y="22.221" font-family="cmr10" transform="translate(52.302 -33.247)">cos</text><text x="67.993" y="22.221" font-family="cmmi10" transform="translate(52.302 -33.247)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.138](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
