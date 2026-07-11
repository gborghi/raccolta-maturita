

**Quesito:** [[Quesiti/ques_2009_america_latina_suppletiva_2009_questionario_47_3|2009 America Latina Suppletiva — Questionario — Quesito 3]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_questionario_47|2009 America Latina Suppletiva — Questionario]]

Si vuole dimostrare che, dati due numeri reali positivi $a$ e $b$, la loro media geometrica non supera mai la loro media aritmetica, cioè:
$$\sqrt{ab}\;\le\;\frac{a+b}{2}.$$

## a) Dimostrazione algebrica

Poiché $a>0$ e $b>0$, entrambi i membri della disuguaglianza sono numeri non negativi; possiamo quindi elevare al quadrato conservando il verso della disuguaglianza. Si ha allora la catena di equivalenze:
$$\sqrt{ab}\le\frac{a+b}{2}\iff ab\le\frac{(a+b)^2}{4}\iff 4ab\le(a+b)^2.$$

Sviluppando il quadrato del binomio e portando tutto a un membro:
$$4ab\le a^2+2ab+b^2\iff 0\le a^2-2ab+b^2\iff 0\le(a-b)^2.$$

L'ultima disuguaglianza è vera per ogni scelta di $a$ e $b$, essendo il quadrato di un numero reale sempre non negativo. Ripercorrendo a ritroso le equivalenze si ottiene la tesi.

L'uguaglianza $\sqrt{ab}=\dfrac{a+b}{2}$ vale se e solo se $(a-b)^2=0$, cioè se e solo se $a=b$.

## b) Dimostrazione diretta

In modo del tutto equivalente si può partire dal fatto che il quadrato di un numero reale è non negativo. Poiché $a$ e $b$ sono positivi, esistono $\sqrt{a}$ e $\sqrt{b}$ e risulta:
$$\left(\sqrt{a}-\sqrt{b}\right)^2\ge 0\;\Rightarrow\; a-2\sqrt{a}\sqrt{b}+b\ge 0\;\Rightarrow\; a+b\ge 2\sqrt{ab},$$
da cui, dividendo per $2$:
$$\sqrt{ab}\le\frac{a+b}{2}.$$

## Interpretazione geometrica

La disuguaglianza ammette una lettura geometrica immediata. Si consideri una semicirconferenza di diametro $\overline{AB}=a+b$ e sia $H$ il punto del diametro tale che $\overline{AH}=a$ e $\overline{HB}=b$. La perpendicolare al diametro in $H$ incontra la semicirconferenza in un punto $P$: per il secondo teorema di Euclide l'altezza $\overline{PH}$ relativa all'ipotenusa del triangolo rettangolo $APB$ vale $\overline{PH}=\sqrt{ab}$ (media geometrica). Il raggio $\overline{OP}$ misura invece $\dfrac{a+b}{2}$ (media aritmetica). Poiché in un triangolo rettangolo un cateto non supera mai l'ipotenusa, si ha $\overline{PH}\le\overline{OP}$, cioè $\sqrt{ab}\le\dfrac{a+b}{2}$, con uguaglianza solo quando $P$ è il punto più alto della semicirconferenza, ossia quando $a=b$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="208.964" height="115.687" viewBox="-72 -72 156.723 86.765"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-65.187-.738c0-39.286 31.846-71.132 71.132-71.132 39.285 0 71.132 31.846 71.132 71.132M-65.187-.738H77.077"/><path fill="none" stroke="#00f" stroke-width=".8" d="M48.624-.738v-56.906"/><path fill="none" stroke="red" stroke-width=".8" d="m5.945-.738 42.679-56.906"/><path stroke="none" d="M-63.687-.738a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M78.577-.738a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M50.124-.738a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M7.445-.738a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M50.124-57.644a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.75 10.366)">A</text><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(138.22 10.366)">B</text><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(109.248 10.366)">H</text><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.18 10.366)">O</text><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(109.906 -60.438)">P</text><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.263 9.261)">a</text><text x="-65.187" y="-.738" stroke="none" font-family="cmmi10" font-size="10" transform="translate(125.892 11.9)">b</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-65.187" y="-9.26" font-family="cmsy10" font-size="10" transform="translate(117.344 -24.33)">p</text><path d="M60.49-33.99h9.578v.4H60.49z"/><text x="-56.854" y="-.738" font-family="cmmi10" font-size="10" transform="translate(117.344 -24.33)">ab</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-63.987" y="-4.675" font-family="cmmi7" font-size="7" transform="translate(72.545 -35.434)">a</text><text x="-59.649" y="-4.675" font-family="cmr7" font-size="7" transform="translate(72.545 -35.434)">+</text><text x="-53.51" y="-4.675" font-family="cmmi7" font-size="7" transform="translate(72.545 -35.434)">b</text><path d="M8.558-38.872h13.993v.4H8.558z"/><text x="-58.983" y="2.71" font-family="cmr7" font-size="7" transform="translate(72.545 -35.434)">2</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
