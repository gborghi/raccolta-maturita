

**Quesito:** [[Quesiti/ques_2009_estero_australe_2009_sessione_ordinaria_questionario_34_2|2009 Estero Australe Ordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2009_estero_australe_2009_sessione_ordinaria_questionario_34|2009 Estero Australe Ordinaria — Questionario]]

Dopo aver illustrato il significato di funzione inversa, si stabilisca, motivando la risposta, se è vero che
$$\arcsin\!\left(\sin\frac{2\pi}{3}\right)=\frac{2\pi}{3}.$$

## Funzione inversa

Data una funzione $f:A\to B$, essa si dice **invertibile** quando stabilisce una corrispondenza biunivoca fra il dominio $A$ e il codominio $B$: a ogni elemento di $B$ corrisponde uno e un solo elemento di $A$. In tal caso resta definita la **funzione inversa** $f^{-1}:B\to A$, che ha per dominio il codominio di $f$ e per codominio il dominio di $f$, e per la quale valgono le identità
$$f^{-1}\big(f(x)\big)=x \quad \text{per ogni } x\in A, \qquad f\big(f^{-1}(y)\big)=y \quad \text{per ogni } y\in B.$$

Una funzione strettamente monotòna in un intervallo è ivi invertibile. La funzione $y=\sin x$ non è invertibile su tutto $\mathbb{R}$ (non è iniettiva), ma lo diventa se la si restringe a un intervallo in cui è strettamente monotòna. Per convenzione si sceglie l'intervallo $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$, dove il seno è strettamente crescente: la sua inversa è la funzione **arcoseno**,
$$\arcsin:[-1,1]\to\left[-\frac{\pi}{2},\frac{\pi}{2}\right].$$

## Verifica dell'uguaglianza

L'identità $\arcsin(\sin x)=x$ vale **soltanto** quando $x$ appartiene al codominio dell'arcoseno, cioè per $x\in\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$. Nel nostro caso
$$\frac{2\pi}{3}\notin\left[-\frac{\pi}{2},\frac{\pi}{2}\right] \qquad \left(\frac{2\pi}{3}>\frac{\pi}{2}\right),$$
quindi non possiamo semplificare direttamente e dobbiamo calcolare il valore passo per passo.

Poiché $\dfrac{2\pi}{3}=\pi-\dfrac{\pi}{3}$, per gli archi supplementari si ha
$$\sin\frac{2\pi}{3}=\sin\!\left(\pi-\frac{\pi}{3}\right)=\sin\frac{\pi}{3}=\frac{\sqrt{3}}{2}.$$

Ora si applica l'arcoseno, che restituisce l'unico angolo nell'intervallo $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$ avente quel seno:
$$\arcsin\frac{\sqrt{3}}{2}=\frac{\pi}{3}.$$

Di conseguenza
$$\arcsin\!\left(\sin\frac{2\pi}{3}\right)=\frac{\pi}{3}\neq\frac{2\pi}{3}.$$

L'uguaglianza proposta è dunque **falsa**. Geometricamente (figura) i due angoli $\dfrac{\pi}{3}$ e $\dfrac{2\pi}{3}$ hanno lo stesso seno $\dfrac{\sqrt{3}}{2}$, ma l'arcoseno seleziona solo quello appartenente al ramo principale, cioè $\dfrac{\pi}{3}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="351.155" height="181.643" viewBox="-72 -72 263.366 136.232"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.87 4.58h249.985"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M176.235 2.18c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="14.626" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(167.422 2.153)">x</text><path fill="none" d="M14.626 63.762V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M12.226-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="14.626" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -69.212)">y</text><path fill="none" stroke="red" stroke-width="1.2" d="m-56.884 50.104 2.424-.065 2.424-.193 2.423-.322 2.424-.45 2.424-.575 2.423-.699 2.424-.823 2.423-.942 2.424-1.059 2.424-1.175 2.423-1.284 2.424-1.393 2.424-1.496 2.423-1.595 2.424-1.69 2.423-1.78 2.424-1.866 2.424-1.945 2.423-2.019 2.424-2.087 2.424-2.15 2.423-2.207 2.424-2.257 2.424-2.3 2.423-2.338 2.424-2.368 2.423-2.393 2.424-2.409 2.424-2.42 2.423-2.422L18.25.962l2.424-2.41 2.423-2.393 2.424-2.368 2.423-2.338 2.424-2.301 2.424-2.257 2.423-2.207 2.424-2.151 2.424-2.09 2.423-2.018 2.424-1.945 2.424-1.867 2.423-1.781 2.424-1.69 2.423-1.597 2.424-1.498 2.424-1.394 2.423-1.286 2.424-1.175 2.424-1.06 2.423-.944 2.424-.823 2.423-.701 2.424-.577 2.424-.45 2.423-.324 2.424-.194 2.424-.067"/><path fill="none" stroke="#00f" stroke-width=".8" d="m86.136-40.944 2.135.052 2.135.15 2.134.248 2.135.35 2.135.448 2.134.543 2.135.64 2.135.737 2.134.827 2.135.92 2.135 1.01 2.134 1.095 2.135 1.18 2.135 1.263 2.134 1.342 2.135 1.418 2.135 1.492 2.134 1.562 2.135 1.627 2.135 1.691 2.134 1.75 2.135 1.805 2.135 1.857 2.134 1.904 2.135 1.947 2.134 1.986 2.135 2.021 2.135 2.05 2.134 2.076 2.135 2.097 2.135 2.114 2.134 2.125 2.135 2.131 2.135 2.134 2.134 2.132 2.135 2.125 2.135 2.113 2.134 2.097 2.135 2.076M-71.87 47.66l1.07.332 1.07.31 1.071.287 1.07.261 1.071.238 1.07.212 1.071.187 1.07.164 1.071.138 1.07.112 1.071.089 1.07.062 1.07.038 1.071.014"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-71.87-34.844h181.824M62.29 4.58v-39.424M109.954 4.58v-39.424"/><path stroke="none" d="M64.21-34.844a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M111.874-34.844a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none"><text x="15.826" y=".643" font-family="cmmi7" font-size="7" transform="translate(44 10.484)">¼</text><path d="M59.826 12.364h4.927v.4h-4.927z"/><text x="16.297" y="8.028" font-family="cmr7" font-size="7" transform="translate(44 10.484)">3</text></g><g stroke="none"><text x="15.826" y=".643" font-family="cmr7" font-size="7" transform="translate(89.671 11.981)">2</text><text x="19.812" y=".643" font-family="cmmi7" font-size="7" transform="translate(89.671 11.981)">¼</text><path d="M105.497 13.861h8.914v.4h-8.914z"/><text x="18.29" y="8.028" font-family="cmr7" font-size="7" transform="translate(89.671 11.981)">3</text></g><g stroke="none"><text x="15.826" y="-5.193" font-family="cmsy7" font-size="7" transform="translate(-16.489 -35.922)">p</text><path d="M5.907-41.455h3.986v.34H5.907z"/><text x="22.396" y=".643" font-family="cmr7" font-size="7" transform="translate(-16.489 -35.922)">3</text><path d="M-.663-34.042H9.893v.4H-.663z"/><text x="19.111" y="8.028" font-family="cmr7" font-size="7" transform="translate(-16.489 -35.922)">2</text></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="15.826" y=".643" font-family="cmmi7" font-size="7" transform="translate(75.043 12.76)">¼</text><path d="M90.869 14.64h4.927v.4h-4.927z"/><text x="16.297" y="8.028" font-family="cmr7" font-size="7" transform="translate(75.043 12.76)">2</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.34](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
