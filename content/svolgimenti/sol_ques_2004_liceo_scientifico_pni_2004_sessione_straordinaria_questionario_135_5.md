

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_5|2004 PNI Straordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Si considera l'implicazione: «Se la funzione reale di variabile reale $f(x)$ è derivabile nel punto $a$, allora è continua in $a$». Poniamo
$$p = \text{«}f(x)\ \text{è derivabile in } a\text{»}, \qquad q = \text{«}f(x)\ \text{è continua in } a\text{»},$$
così che l'implicazione data è $p \Rightarrow q$.

## Premessa: dimostrazione dell'implicazione diretta

Sebbene non richiesto, verifichiamo che $p \Rightarrow q$ è effettivamente un teorema, cioè che la derivabilità in $a$ implica la continuità in $a$. Per definizione di derivabilità esiste finito il limite
$$\lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = f'(a).$$
Allora
$$\lim_{h \to 0} \big[ f(a+h) - f(a) \big] = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} \cdot h = f'(a) \cdot 0 = 0,$$
da cui $\displaystyle \lim_{h \to 0} f(a+h) = f(a)$, che è appunto la condizione di continuità di $f$ in $a$. Dunque l'implicazione diretta è un teorema.

## Implicazione inversa

Si scambiano ipotesi e tesi: si ottiene $q \Rightarrow p$, cioè
«Se la funzione reale di variabile reale $f(x)$ è continua nel punto $a$, allora è derivabile in $a$».

Questa proposizione **non è un teorema**. Infatti la continuità in un punto non garantisce la derivabilità: un controesempio è la funzione
$$y = f(x) = |x|,$$
che è continua in $x = 0$ ma ivi non derivabile. In $x = 0$ si ha infatti un punto angoloso, con derivata destra pari a $1$ e derivata sinistra pari a $-1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="217.35" height="135.908" viewBox="-72 -72 163.012 101.931"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 15.961H77.76"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M75.88 13.561c.38 1.44 1.228 2.12 2.08 2.4-.852.28-1.7.96-2.08 2.4"/><text x="3.045" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(78.648 2.153)">x</text><path fill="none" d="M3.045 28.48v-87.234"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M.645-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="3.045" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -80.593)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-59.55-46.635 3.044 15.961l62.597-62.596"/><path stroke="none" d="M4.695 15.961a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="3.045" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="3.045" y="15.961" font-family="cmmi10" transform="translate(28.884 -49.85)">y</text><text x="11.085" y="15.961" font-family="cmr10" transform="translate(28.884 -49.85)">=</text><text x="21.64" y="15.961" font-family="cmsy10" transform="translate(28.884 -49.85)">j</text><text x="24.418" y="15.961" font-family="cmmi10" transform="translate(28.884 -49.85)">x</text><text x="30.133" y="15.961" font-family="cmsy10" transform="translate(28.884 -49.85)">j</text></g></g></g></svg>
</figure>

## Implicazione contronominale

Si negano e si scambiano ipotesi e tesi: si ottiene $\lnot q \Rightarrow \lnot p$, cioè
«Se la funzione reale di variabile reale $f(x)$ non è continua nel punto $a$, allora non è derivabile in $a$».

La contronominale è logicamente equivalente all'implicazione diretta $p \Rightarrow q$: essendo quest'ultima vera, **anche la contronominale è un teorema**.

## Implicazione contraria

Si negano ipotesi e tesi lasciandole nell'ordine originario: si ottiene $\lnot p \Rightarrow \lnot q$, cioè
«Se la funzione reale di variabile reale $f(x)$ non è derivabile nel punto $a$, allora non è continua in $a$».

La contraria è logicamente equivalente all'implicazione inversa $q \Rightarrow p$: essendo quest'ultima falsa, **la contraria non è un teorema**. Vale lo stesso controesempio: $f(x) = |x|$ non è derivabile in $x = 0$ e tuttavia in quel punto è continua.

*Fonte:* [📄 PDF p.138](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
