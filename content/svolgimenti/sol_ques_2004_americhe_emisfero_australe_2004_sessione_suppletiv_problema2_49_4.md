

**Quesito:** [[Quesiti/ques_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49_4|2004 Americhe australe Suppletiva — Problema 2 e Quesiti — Quesito 4]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49|2004 Americhe australe Suppletiva — Problema 2 e Quesiti]]

Si chiede se l'equazione
$$e^x + 3x = 0$$
ammetta soluzioni reali e con quale ragionamento sia possibile stabilirlo.

## Metodo grafico

Portando il termine $3x$ a secondo membro, l'equazione si riscrive nella forma
$$e^x = -3x.$$
Le eventuali soluzioni reali sono quindi le ascisse dei punti di intersezione dei grafici delle due funzioni
$$f(x) = e^x \qquad \text{e} \qquad g(x) = -3x.$$

Il grafico di $f(x)=e^x$ è la curva esponenziale, sempre positiva e crescente; il grafico di $g(x)=-3x$ è la retta per l'origine con coefficiente angolare $-3$, decrescente. Le due curve si incontrano in un solo punto, situato nel secondo quadrante (per $x<0$, dove $-3x>0$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="210.137" height="195.3" viewBox="-72 -72 157.603 146.475"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 62.909H60.69"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M58.81 60.509c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="13.004" y="62.909" stroke="none" font-family="cmmi10" font-size="10" transform="translate(51.618 2.153)">x</text><path fill="none" d="M13.004 74.005v-132.76"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10.604-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="13.004" y="62.909" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -127.54)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-60.973 57.903 1.88-.259 1.88-.277 1.881-.289 1.881-.303 1.88-.322 1.881-.337 1.88-.352 1.881-.373 1.881-.392 1.88-.415 1.881-.433 1.88-.458 1.881-.481 1.88-.503 1.882-.533 1.88-.559 1.88-.592 1.881-.617 1.88-.652 1.881-.688 1.881-.722 1.88-.758 1.881-.799 1.88-.844 1.881-.884 1.881-.928 1.88-.98 1.881-1.033 1.88-1.084 1.881-1.14 1.88-1.202 1.882-1.262 1.88-1.328 1.88-1.399 1.881-1.472 1.88-1.547 1.881-1.627 1.881-1.713 1.88-1.806 1.881-1.887 1.88-1.995 1.881-2.1 1.88-2.208 1.882-2.324 1.88-2.445 1.88-2.573 1.881-2.706 1.88-2.848 1.881-2.997 1.881-3.154 1.88-3.317 1.881-3.49 1.88-3.673 1.881-3.864 1.881-4.066 1.88-4.278 1.881-4.5 1.88-4.734 1.881-4.983"/><g fill="#00f" stroke="none"><text x="13.004" y="62.909" font-family="cmmi10" font-size="10" transform="translate(40.71 -98.161)">y</text><text x="21.043" y="62.909" font-family="cmr10" font-size="10" transform="translate(40.71 -98.161)">=</text><text x="31.599" y="62.909" font-family="cmmi10" font-size="10" transform="translate(40.71 -98.161)">e</text><text x="36.255" y="59.28" font-family="cmmi7" font-size="7" transform="translate(40.71 -98.161)">x</text></g></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="M-23.985-48.057 13.004 62.909"/><g fill="red" stroke="none" font-size="10"><text x="13.004" y="62.909" font-family="cmmi10" transform="translate(-40.82 -5.677)">y</text><text x="21.043" y="62.909" font-family="cmr10" transform="translate(-40.82 -5.677)">=</text><text x="31.599" y="62.909" font-family="cmsy10" transform="translate(-40.82 -5.677)">¡</text><text x="39.377" y="62.909" font-family="cmr10" transform="translate(-40.82 -5.677)">3</text><text x="44.377" y="62.909" font-family="cmmi10" transform="translate(-40.82 -5.677)">x</text></g></g><path stroke="none" d="M5.578 34.39a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><text x="13.004" y="62.909" stroke="none" font-family="cmr8" font-size="8" transform="translate(-5.973 -19.43)">soluzione</text></g></svg>
</figure>

Dal grafico si deduce che l'equazione ha **una sola soluzione reale**, compresa tra $-0.5$ e $0$.

## Conferma analitica

Consideriamo la funzione
$$h(x) = e^x + 3x.$$
Essa è continua e derivabile su tutto $\mathbb{R}$, con
$$h'(x) = e^x + 3 > 0 \quad \text{per ogni } x,$$
quindi $h$ è **strettamente crescente** su $\mathbb{R}$: può annullarsi al più una volta.

Poiché
$$h(-0.5) = e^{-0.5} - 1.5 \approx 0.607 - 1.5 < 0, \qquad h(0) = 1 > 0,$$
per il teorema degli zeri esiste (ed è unico) uno zero di $h$ nell'intervallo $(-0.5,\,0)$. L'equazione ammette dunque **esattamente una soluzione reale**, di valore approssimato $x \approx -0.257$.

*Fonte:* [📄 PDF p.54](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
