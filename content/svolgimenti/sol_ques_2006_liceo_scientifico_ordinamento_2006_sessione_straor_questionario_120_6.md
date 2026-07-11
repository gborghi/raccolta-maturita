

**Quesito:** [[Quesiti/ques_2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120_6|2006 Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120|2006 Straordinaria — Questionario]]

Dopo aver enunciato il teorema di Rolle, stabilire se può essere applicato alla funzione $f(x)=\sqrt{x^{2}}$ nell'intervallo $[-1;\,1]$.

## Enunciato del teorema di Rolle

Sia $f$ una funzione tale che:

- sia continua nell'intervallo chiuso e limitato $[a;\,b]$;
- sia derivabile nell'intervallo aperto $(a;\,b)$;
- assuma valori uguali agli estremi, cioè $f(a)=f(b)$.

Allora esiste almeno un punto $c\in(a;\,b)$ in cui la derivata prima si annulla, cioè $f'(c)=0$.

## Analisi della funzione

Osserviamo anzitutto che

$$f(x)=\sqrt{x^{2}}=|x|=\begin{cases} x & \text{se } x\ge 0,\\ -x & \text{se } x<0.\end{cases}$$

Verifichiamo le tre ipotesi sull'intervallo $[-1;\,1]$.

- **Continuità.** La funzione $f(x)=|x|$ è continua su tutto $\mathbb{R}$, quindi in particolare è continua nell'intervallo chiuso $[-1;\,1]$: la prima ipotesi è soddisfatta.

- **Valori agli estremi.** Si ha $f(-1)=|-1|=1$ e $f(1)=|1|=1$, dunque $f(-1)=f(1)$: anche la terza ipotesi è soddisfatta.

- **Derivabilità.** Calcolando la derivata per $x\neq 0$ si ottiene

$$f'(x)=\begin{cases} 1 & \text{se } x>0,\\ -1 & \text{se } x<0.\end{cases}$$

Nel punto $x=0$ i due limiti del rapporto incrementale sono diversi:

$$\lim_{x\to 0^{-}}\frac{|x|-0}{x-0}=-1,\qquad \lim_{x\to 0^{+}}\frac{|x|-0}{x-0}=+1.$$

Poiché la derivata sinistra ($-1$) è diversa dalla derivata destra ($+1$), la funzione **non è derivabile in $x=0$**: il punto $O(0;0)$ è un punto angoloso. La seconda ipotesi non è quindi soddisfatta, perché $0\in(-1;\,1)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="217.678" height="120.943" viewBox="-72 -72 163.259 90.707"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-58.166 4.58H78.007"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M76.127 2.18c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="10.121" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 2.153)">x</text><path fill="none" d="M10.12 18.238v-76.992"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M7.72-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="10.121" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -69.212)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-35.404-40.945 10.121 4.58l45.524-45.525"/><path stroke="none" d="M11.485999999999999 4.58a1.366 1.366 0 1 0-2.731 0 1.366 1.366 0 0 0 2.731 0M-34.038000000000004-40.945a1.366 1.366 0 1 0-2.732 0 1.366 1.366 0 0 0 2.732 0m-1.366 0"/><g stroke="none" font-size="10"><text x="10.121" y="4.58" font-family="cmr10" transform="translate(-79.058 -51.558)">(</text><text x="14.009" y="4.58" font-family="cmsy10" transform="translate(-79.058 -51.558)">¡</text><text x="21.787" y="4.58" font-family="cmr10" transform="translate(-79.058 -51.558)">1</text><text x="26.787" y="4.58" font-family="cmmi10" transform="translate(-79.058 -51.558)">;</text><text x="31.232" y="4.58" font-family="cmr10" transform="translate(-79.058 -51.558)">1)</text></g><path stroke="none" d="M57.011-40.945a1.366 1.366 0 1 0-2.732 0 1.366 1.366 0 0 0 2.732 0m-1.366 0"/><g stroke="none" font-size="10"><text x="10.121" y="4.58" font-family="cmr10" transform="translate(49.058 -51.558)">(1</text><text x="19.009" y="4.58" font-family="cmmi10" transform="translate(49.058 -51.558)">;</text><text x="23.454" y="4.58" font-family="cmr10" transform="translate(49.058 -51.558)">1)</text></g><text x="10.121" y="4.58" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-35.404 4.58v-45.525M55.645 4.58v-45.525"/></g></svg>
</figure>

## Conclusione

Poiché $f(x)=\sqrt{x^{2}}=|x|$ non è derivabile in $x=0$, punto interno all'intervallo, **il teorema di Rolle non è applicabile** alla funzione data in $[-1;\,1]$: viene infatti a mancare l'ipotesi di derivabilità nell'intervallo aperto. Di conseguenza non è garantita l'esistenza di un punto a tangente orizzontale, e in effetti la derivata prima vale costantemente $-1$ oppure $+1$ e non si annulla in alcun punto.

*Fonte:* [📄 PDF p.123](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
