

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_28_2|2009 Sessione Ordinaria Estero Americhe — Prova — Quesito 2]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_28|2009 Sessione Ordinaria Estero Americhe — Prova]]

Dopo aver illustrato il significato di funzione inversa, si dica, motivando la risposta, se è vero che
$$\arcsin\!\big(\sin(\tfrac{2}{3}\pi)\big) = \frac{2}{3}\pi .$$

## Il concetto di funzione inversa

Data una funzione $f:A\to B$, essa si dice **invertibile** se stabilisce una corrispondenza biunivoca fra il dominio e il codominio, cioè se è al tempo stesso iniettiva e suriettiva sul proprio codominio. In tal caso resta definita la **funzione inversa**
$$f^{-1}:B\to A,$$
che ha per dominio il codominio di $f$ e per codominio il dominio di $f$, e che a ogni $y=f(x)$ associa l'unico $x$ da cui $y$ proviene. Per costruzione valgono le identità
$$f^{-1}\big(f(x)\big)=x \quad\text{e}\quad f\big(f^{-1}(y)\big)=y .$$

Una condizione sufficiente per l'invertibilità è la **stretta monotonia**: se $f$ è strettamente crescente (o strettamente decrescente) in un intervallo, allora in quell'intervallo è iniettiva, dunque invertibile (il viceversa non è in generale garantito).

## La funzione arcoseno

La funzione $y=\sin x$ non è iniettiva su tutto $\mathbb{R}$, perché è periodica. Per poterla invertire occorre restringerla a un intervallo in cui sia strettamente monotona. La scelta **standard** (determinazione principale) è l'intervallo
$$\left[-\frac{\pi}{2},\,\frac{\pi}{2}\right],$$
in cui il seno è strettamente crescente e assume tutti i valori di $[-1,1]$. La sua inversa è la funzione $\arcsin$, con
$$\arcsin:[-1,1]\to\left[-\frac{\pi}{2},\,\frac{\pi}{2}\right].$$

L'identità $\arcsin(\sin x)=x$ vale **soltanto** quando $x$ appartiene a $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$; per gli altri valori di $x$ occorre prima ricondursi a un angolo di tale intervallo che abbia lo stesso seno.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="417.597" height="137.852" viewBox="-72 -72 313.197 103.389"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-53.337-12.207h281.283"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M226.066-14.607c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="9.259" y="-12.207" stroke="none" font-family="cmmi10" font-size="10" transform="translate(222.62 2.153)">x</text><path fill="none" d="M9.259 28.48v-87.234"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M6.859-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="9.259" y="-12.207" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -52.425)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-47.078 18.272 3.328.583 3.328.232 3.327-.123 3.328-.474 3.328-.82 3.327-1.158 3.328-1.482 3.328-1.79 3.328-2.078 3.327-2.34 3.328-2.58 3.328-2.786L-3.818.492-.49-2.615l3.328-3.216L6.166-9.12l3.327-3.322 3.328-3.32 3.328-3.28 3.328-3.202 3.327-3.09 3.328-2.94 3.328-2.76 3.327-2.548 3.328-2.305 3.328-2.038 3.328-1.747 3.327-1.438 3.328-1.11 3.328-.773 3.328-.424 3.327-.072 3.328.281 3.328.63 3.327.976 3.328 1.307 3.328 1.623 3.328 1.924 3.327 2.199 3.328 2.452 3.328 2.677 3.327 2.871 3.328 3.033 3.328 3.16 3.328 3.254 3.327 3.308 3.328 3.325 3.328 3.306 3.328 3.25 3.327 3.155 3.328 3.027 3.328 2.863L129.29 7.8l3.328 2.441 3.328 2.188 3.328 1.91 3.327 1.608 3.328 1.292 3.328.96 3.328.614 3.327.265 3.328-.087 3.328-.44 3.327-.789 3.328-1.125 3.328-1.453 3.328-1.76 3.327-2.052 3.328-2.317 3.328-2.558 3.328-2.768L192.518.78l3.328-3.095 3.328-3.207 3.327-3.283 3.328-3.32 3.328-3.321 3.328-3.285 3.327-3.212"/><path fill="none" stroke="red" stroke-width="1.2" d="m-39.904 19.09 2.52-.102 2.522-.304 2.521-.503 2.521-.701 2.521-.894 2.521-1.08 2.521-1.261 2.522-1.43 2.52-1.595 2.522-1.746 2.52-1.886 2.522-2.016 2.521-2.13 2.521-2.231 2.521-2.319 2.521-2.39 2.521-2.448 2.522-2.487 2.52-2.513 2.522-2.519 2.52-2.512 2.522-2.488 2.521-2.447 2.521-2.39 2.521-2.32 2.521-2.232 2.521-2.13 2.522-2.014 2.52-1.887 2.522-1.746 2.52-1.595 2.522-1.431 2.521-1.26 2.521-1.081 2.521-.894 2.521-.702 2.522-.504 2.52-.303 2.522-.104"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmr9" font-size="9"><text x="9.259" y="-12.207" transform="translate(-19.107 38.243)">ramo</text><text x="32.918" y="-12.207" transform="translate(-19.107 38.243)">principale</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-53.337-39.311h281.683"/><g stroke="none"><text x="10.459" y="-20.922" font-family="cmsy6" font-size="6" transform="translate(-78.196 -23.963)">p</text><path d="M-61.737-45.195h3.667v.31h-3.667z"/><text x="16.459" y="-15.894" font-family="cmr6" font-size="6" transform="translate(-78.196 -23.963)">3</text><path d="M-67.737-38.62h9.667v.4h-9.667z"/><text x="13.459" y="-9.153" font-family="cmr6" font-size="6" transform="translate(-78.196 -23.963)">2</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M42.028-12.207V-39.31M74.797-12.207V-39.31"/><path stroke="none" d="M43.788-39.311a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0M76.557-39.311a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none"><text x="10.459" y="-15.894" font-family="cmmi6" font-size="6" transform="translate(29.281 9.804)">¼</text><path d="M39.74-4.853h4.576v.4H39.74z"/><text x="10.913" y="-9.153" font-family="cmr6" font-size="6" transform="translate(29.281 9.804)">3</text></g><g stroke="none"><text x="10.459" y="-15.894" font-family="cmr6" font-size="6" transform="translate(60.217 11.087)">2</text><text x="14.126" y="-15.894" font-family="cmmi6" font-size="6" transform="translate(60.217 11.087)">¼</text><path d="M70.676-3.57h8.242v.4h-8.242z"/><text x="12.747" y="-9.153" font-family="cmr6" font-size="6" transform="translate(60.217 11.087)">3</text></g></g></svg>
</figure>

## Verifica dell'uguaglianza

L'argomento $\dfrac{2}{3}\pi$ **non** appartiene all'intervallo $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$ (infatti $\frac{2}{3}\pi>\frac{\pi}{2}$), quindi non possiamo semplificare direttamente. Calcoliamo prima il seno:
$$\sin\!\left(\frac{2}{3}\pi\right)=\sin\!\left(\pi-\frac{\pi}{3}\right)=\sin\frac{\pi}{3}=\frac{\sqrt{3}}{2}.$$

Applichiamo ora l'arcoseno, il cui valore deve cadere in $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$:
$$\arcsin\!\left(\frac{\sqrt{3}}{2}\right)=\frac{\pi}{3}.$$

Pertanto
$$\arcsin\!\big(\sin(\tfrac{2}{3}\pi)\big)=\frac{\pi}{3}\neq\frac{2}{3}\pi .$$

**L'uguaglianza proposta è dunque falsa.** Il valore corretto è $\dfrac{\pi}{3}$: geometricamente, $\dfrac{\pi}{3}$ e $\dfrac{2}{3}\pi$ sono angoli supplementari, con lo stesso seno, ma solo il primo appartiene al ramo principale scelto per definire l'arcoseno.

## Osservazione

Se, invece della determinazione principale, si assumesse come intervallo di invertibilità del seno l'intervallo
$$\left[\frac{\pi}{2},\,\frac{3}{2}\pi\right],$$
in cui il seno è strettamente **decrescente** e assume ancora tutti i valori di $[-1,1]$, allora l'inversa così definita assocerebbe a $\dfrac{\sqrt{3}}{2}$ proprio l'angolo $\dfrac{2}{3}\pi$, che a questo intervallo appartiene. Con tale (non usuale) scelta di ramo l'uguaglianza risulterebbe vera. L'uguaglianza dipende quindi dalla determinazione fissata: con quella standard è falsa.

*Fonte:* [📄 PDF p.34](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
