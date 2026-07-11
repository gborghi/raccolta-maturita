

**Quesito:** [[Quesiti/ques_2002_suppletiva_ordinamento_2002_questionario_36_7|2002 Suppletiva Ordinamento — Questionario — Quesito 7]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_questionario_36|2002 Suppletiva Ordinamento — Questionario]]

Una primitiva della funzione
$$f(x)=\frac{1}{2x}+\frac{1}{2x+4}$$
è (una sola alternativa è corretta):

- **[A]** $\ln|x+2|$
- **[B]** $\ln|x+2|$
- **[C]** $\ln\sqrt{x^2+2x}$
- **[D]** $\ln\sqrt{2x^2+x}$

Individuare l'alternativa corretta e fornire una spiegazione della scelta operata.

## Svolgimento

Cerchiamo una primitiva integrando termine a termine. Osserviamo che
$$\frac{1}{2x}=\frac{1}{2}\cdot\frac{1}{x},\qquad \frac{1}{2x+4}=\frac{1}{2}\cdot\frac{1}{x+2},$$
quindi

$$\int\left(\frac{1}{2x}+\frac{1}{2x+4}\right)dx=\frac{1}{2}\int\frac{1}{x}\,dx+\frac{1}{2}\int\frac{1}{x+2}\,dx=\frac{1}{2}\ln|x|+\frac{1}{2}\ln|x+2|+C.$$

Raccogliendo i due logaritmi con le proprietà $\;a\ln b=\ln b^{a}\;$ e $\;\ln b+\ln c=\ln(bc)$:

$$\frac{1}{2}\ln|x|+\frac{1}{2}\ln|x+2|+C=\frac{1}{2}\ln\bigl|x(x+2)\bigr|+C=\ln\sqrt{\bigl|x(x+2)\bigr|}+C.$$

Supponendo $x>0$ (dominio in cui gli argomenti sono positivi) si ha $x(x+2)=x^2+2x>0$, dunque una primitiva di $f(x)$ è
$$F(x)=\ln\sqrt{x^2+2x}.$$

La risposta corretta è quindi la **[C]**.

**Osservazione.** Si poteva anche notare fin da subito che
$$\frac{d}{dx}\ln\sqrt{x^2+2x}=\frac{1}{\sqrt{x^2+2x}}\cdot\frac{2x+2}{2\sqrt{x^2+2x}}=\frac{x+1}{x^2+2x}=\frac{x+1}{x(x+2)}=\frac{1}{2x}+\frac{1}{2x+4},$$
dove nell'ultimo passaggio si è usata la decomposizione in fratti semplici $\dfrac{x+1}{x(x+2)}=\dfrac{1}{2x}+\dfrac{1}{2(x+2)}$. Questo conferma che $F(x)=\ln\sqrt{x^2+2x}$ è effettivamente una primitiva di $f(x)$.

*Fonte:* [📄 PDF p.40](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
