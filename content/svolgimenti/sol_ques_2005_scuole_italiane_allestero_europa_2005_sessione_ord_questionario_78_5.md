

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78_5|2005 Europa Ordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78|2005 Europa Ordinaria — Questionario]]

Quando una funzione $f$ è invertibile? Come si calcola la derivata della funzione $f^{-1}$? Fai un esempio.

## Quando $f$ è invertibile

Una funzione $f:A\to B$ è **invertibile** quando stabilisce una corrispondenza biunivoca fra il dominio $A$ e il codominio $B$, cioè quando è contemporaneamente iniettiva (a valori distinti dell'ingresso corrispondono valori distinti dell'uscita) e suriettiva (ogni elemento di $B$ è immagine di qualche elemento di $A$).

In tal caso resta definita la **funzione inversa** $f^{-1}:B\to A$, che ha per dominio il codominio di $f$ e per codominio il dominio di $f$, e che a ogni $y=f(x)$ associa l'unico $x$ da cui proviene:
$$y=f(x)\quad\Longleftrightarrow\quad x=f^{-1}(y).$$

Una condizione **sufficiente** di comodo impiego è la monotonìa: se $f$ è strettamente monotòna (crescente oppure decrescente) su un intervallo, allora è iniettiva e quindi invertibile sulla propria immagine. Non vale il viceversa: esistono funzioni invertibili non monotòne.

## Derivata della funzione inversa

Sia $f$ derivabile in un punto $x_0$ con
$$f'(x_0)\neq 0,$$
e poniamo $y_0=f(x_0)$. Allora l'inversa $g=f^{-1}$ è derivabile in $y_0$ e la sua derivata è il **reciproco** della derivata di $f$ nel punto corrispondente:
$$g'(y_0)=\frac{1}{f'(x_0)}=\frac{1}{f'\big(f^{-1}(y_0)\big)}.$$

Geometricamente ciò riflette il fatto che i grafici di $f$ e di $f^{-1}$ sono simmetrici rispetto alla bisettrice $y=x$: lo scambio dei ruoli di ascissa e ordinata trasforma il coefficiente angolare della tangente nel suo reciproco.

## Esempio

Consideriamo
$$f(x)=e^{x},\qquad f^{-1}(y)=\ln y.$$

Scegliamo $x_0=0$, cui corrisponde $y_0=f(0)=e^{0}=1$. Poiché $f'(x)=e^{x}$, si ha
$$f'(x_0)=f'(0)=e^{0}=1.$$

Applicando la formula:
$$g'(y_0)=\frac{1}{f'(x_0)}=\frac{1}{1}=1.$$

Il risultato si verifica direttamente derivando l'inversa: $g(y)=\ln y$ ha derivata $g'(y)=\dfrac{1}{y}$, da cui $g'(1)=\dfrac{1}{1}=1$, in perfetto accordo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="223.933" height="199.853" viewBox="-72 -72 167.95 149.89"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 9.133H64.104"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.224 6.733c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-3.783" y="9.133" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 2.153)">x</text><path fill="none" d="M-3.783 77.42V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.183-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.783" y="9.133" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -73.764)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 77.42 64.504-59.154"/><g fill="gray" stroke="none" font-size="10"><text x="-3.783" y="9.133" font-family="cmmi10" transform="translate(71.82 -67.106)">y</text><text x="4.256" y="9.133" font-family="cmr10" transform="translate(71.82 -67.106)">=</text><text x="14.812" y="9.133" font-family="cmmi10" transform="translate(71.82 -67.106)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.518 7.749 1.486-.094 1.485-.098 1.485-.107 1.485-.114 1.485-.12 1.485-.13 1.486-.139 1.485-.145 1.485-.16 1.485-.166 1.485-.18 1.485-.191 1.485-.205 1.486-.219 1.485-.232 1.485-.248 1.485-.264 1.485-.285 1.485-.3 1.486-.324 1.485-.343 1.485-.367 1.485-.394 1.485-.419 1.485-.446 1.486-.476 1.485-.51 1.485-.544 1.485-.58 1.485-.62 1.485-.66 1.486-.706 1.485-.754 1.485-.803 1.485-.858 1.485-.916 1.485-.977 1.486-1.045 1.485-1.113 1.485-1.189 1.485-1.27 1.485-1.355 1.485-1.44L-2.17-15.3l1.486-1.647L.8-18.706l1.485-1.876 1.485-2.004 1.485-2.138 1.485-2.283 1.486-2.437 1.485-2.6 1.485-2.776 1.485-2.964 1.485-3.164 1.485-3.376 1.486-3.604 1.485-3.846 1.485-4.107"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-3.783" y="9.133" font-family="cmmi10" font-size="10" transform="translate(15.448 -56.833)">y</text><text x="4.256" y="9.133" font-family="cmr10" font-size="10" transform="translate(15.448 -56.833)">=</text><text x="14.812" y="9.133" font-family="cmmi10" font-size="10" transform="translate(15.448 -56.833)">e</text><text x="19.468" y="5.504" font-family="cmmi7" font-size="7" transform="translate(15.448 -56.833)">x</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-2.417 73.171 1.056-13.058 1.057-8.453 1.057-5.842L1.81 41.08l1.057-3.94 1.057-3.357 1.057-2.925 1.057-2.59 1.057-2.325 1.057-2.114 1.056-1.931 1.057-1.78 1.057-1.652 1.057-1.538 1.057-1.443 1.057-1.356 1.057-1.276 1.057-1.214 1.057-1.149 1.057-1.096 1.057-1.045 1.057-1 1.056-.956 1.057-.919 1.057-.883 1.057-.85 1.057-.818 1.057-.79 1.057-.765L29.29.63l1.057-.717 1.057-.694 1.057-.674 1.056-.652 1.057-.636 1.057-.62 1.057-.602 1.057-.587 1.057-.572 1.057-.555 1.057-.546 1.057-.535 1.057-.52 1.056-.508 1.057-.497L46.2-8.77l1.057-.476 1.057-.467 1.057-.457 1.057-.448 1.057-.44 1.057-.431 1.057-.423 1.057-.416 1.057-.407 1.056-.402 1.057-.393 1.057-.387 1.057-.38"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="10"><text x="-3.783" y="9.133" font-family="cmmi10" transform="translate(42.027 -6.605)">y</text><text x="4.256" y="9.133" font-family="cmr10" transform="translate(42.027 -6.605)">=</text><text x="14.812" y="9.133" font-family="cmr10" transform="translate(42.027 -6.605)">ln</text><text x="24.812" y="9.133" font-family="cmmi10" transform="translate(42.027 -6.605)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.80](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
