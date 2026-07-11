

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_5|2004 Ordinamento Straordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Si deve dimostrare il teorema: «Condizione sufficiente ma non necessaria affinché la funzione reale di variabile reale $f(x)$ sia continua nel punto $a$ è che essa sia derivabile in $a$».

Il teorema si articola in due parti: la derivabilità in un punto è *sufficiente* per la continuità (cioè derivabile $\Rightarrow$ continua), ma non è *necessaria* (esistono funzioni continue in un punto senza esservi derivabili).

## La derivabilità implica la continuità

Sia $f$ derivabile nel punto $x_0$. Per definizione di derivata esiste finito il limite
$$\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}=f'(x_0).$$

Consideriamo allora l'incremento della funzione e moltiplichiamo e dividiamo per $h$:
$$\lim_{h\to 0}\big[f(x_0+h)-f(x_0)\big]=\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}\cdot h=f'(x_0)\cdot 0=0,$$

dove si è usato il fatto che il primo fattore tende al valore finito $f'(x_0)$ e il secondo fattore $h$ tende a $0$. Ne segue
$$\lim_{h\to 0}f(x_0+h)=f(x_0),$$

che è esattamente la condizione di continuità di $f$ nel punto $x_0$. Dunque ogni funzione derivabile in un punto è ivi continua: la derivabilità è condizione **sufficiente** per la continuità.

## Il viceversa non vale

La derivabilità non è invece condizione **necessaria**: una funzione può essere continua in un punto senza esservi derivabile. Un semplice controesempio è la funzione
$$y=f(x)=|x|,$$

che è continua in $x=0$ (infatti $\lim_{x\to 0}|x|=0=f(0)$) ma non è ivi derivabile. Calcolando separatamente i rapporti incrementali si ottiene infatti
$$f'_+(0)=\lim_{h\to 0^+}\frac{|h|}{h}=+1,\qquad f'_-(0)=\lim_{h\to 0^-}\frac{|h|}{h}=-1.$$

Le derivate destra e sinistra esistono finite ma sono diverse: in $x=0$ la funzione presenta un **punto angoloso**, quindi non è derivabile pur essendo continua.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="199.139" height="126.802" viewBox="-72 -72 149.354 95.102"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 9.132H64.103"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.223 6.732c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-3.784" y="9.132" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 2.153)">x</text><path fill="none" d="M-3.784 20.513v-79.267"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.184-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.784" y="9.132" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -73.764)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-60.69-47.773-3.783 9.132l56.906-56.905"/><path stroke="none" d="M-2.284 9.132a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-3.784" y="9.132" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-3.784" y="9.132" font-family="cmmi10" transform="translate(33.437 -37.334)">y</text><text x="4.256" y="9.132" font-family="cmr10" transform="translate(33.437 -37.334)">=</text><text x="14.811" y="9.132" font-family="cmsy10" transform="translate(33.437 -37.334)">j</text><text x="17.589" y="9.132" font-family="cmmi10" transform="translate(33.437 -37.334)">x</text><text x="23.304" y="9.132" font-family="cmsy10" transform="translate(33.437 -37.334)">j</text></g></g></g></svg>
</figure>

Questo mostra che la continuità non richiede la derivabilità, e conferma che quest'ultima è condizione sufficiente ma non necessaria per la continuità.

*Fonte:* [📄 PDF p.124](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
