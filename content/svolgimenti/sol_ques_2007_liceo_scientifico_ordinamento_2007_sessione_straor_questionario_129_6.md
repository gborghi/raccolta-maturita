

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_6|2007 LS Ordinamento Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si consideri la funzione

$$
f(x)=\begin{cases} \operatorname{sen}^2 x \cdot \operatorname{sen}\dfrac{1}{x} & x\ne 0 \\[2mm] 0 & x=0 \end{cases}
$$

e se ne studi la continuità nel punto $x=0$.

La funzione è definita per $x=0$ con $f(0)=0$; resta da verificare se

$$
\lim_{x\to 0} f(x) = f(0) = 0 .
$$

Calcoliamo dunque

$$
\lim_{x\to 0} \operatorname{sen}^2 x \cdot \operatorname{sen}\frac{1}{x}.
$$

Il fattore $\operatorname{sen}\dfrac{1}{x}$ non ammette limite per $x\to 0$, ma è **limitato**: per ogni $x\ne 0$ vale

$$
-1 \le \operatorname{sen}\frac{1}{x} \le 1 .
$$

Il fattore $\operatorname{sen}^2 x$ è invece un **infinitesimo** non negativo per $x\to 0$; anzi $\operatorname{sen}^2 x \sim x^2$. Moltiplicando la disuguaglianza per $\operatorname{sen}^2 x \ge 0$ si ottiene

$$
-\operatorname{sen}^2 x \le \operatorname{sen}^2 x \cdot \operatorname{sen}\frac{1}{x} \le \operatorname{sen}^2 x .
$$

Poiché

$$
\lim_{x\to 0}\big(-\operatorname{sen}^2 x\big)=0 \qquad\text{e}\qquad \lim_{x\to 0}\operatorname{sen}^2 x = 0,
$$

per il **teorema del confronto** (o dei due carabinieri) anche la funzione compresa tende a $0$:

$$
\lim_{x\to 0} \operatorname{sen}^2 x \cdot \operatorname{sen}\frac{1}{x} = 0 .
$$

In generale, se $g(x)$ è limitata, con $A\le g(x)\le B$, e $h(x)\to 0$ è un infinitesimo (di segno costante), allora $A\,h(x)\le h(x)\,g(x)\le B\,h(x)$; poiché $A\,h(x)\to 0$ e $B\,h(x)\to 0$, ne segue $h(x)\,g(x)\to 0$. È proprio la situazione presente, con $h(x)=\operatorname{sen}^2 x$ e $g(x)=\operatorname{sen}\frac{1}{x}$.

Essendo

$$
\lim_{x\to 0} f(x) = 0 = f(0),
$$

la funzione è **continua** nel punto $x=0$.

*Fonte:* [📄 PDF p.132](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
