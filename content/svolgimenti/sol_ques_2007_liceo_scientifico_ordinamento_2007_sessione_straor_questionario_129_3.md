

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_3|2007 LS Ordinamento Straordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si calcoli, in base alla definizione di derivata, la derivata della funzione
$$f(x) = \frac{1-x^{2}}{1+x^{2}}$$
nel punto $x = -1$.

## Impostazione

Per definizione, la derivata di $f$ nel punto $x_0$ è

$$f'(x_0) = \lim_{h\to 0} \frac{f(x_0 + h) - f(x_0)}{h}.$$

Nel nostro caso $x_0 = -1$. Calcoliamo anzitutto il valore della funzione nel punto:

$$f(-1) = \frac{1-(-1)^{2}}{1+(-1)^{2}} = \frac{1-1}{1+1} = 0.$$

## Calcolo del rapporto incrementale

Valutiamo $f(-1+h)$. Poiché $(-1+h)^{2} = 1 - 2h + h^{2}$, si ha:

$$f(-1+h) = \frac{1-(-1+h)^{2}}{1+(-1+h)^{2}} = \frac{1-(1-2h+h^{2})}{1+(1-2h+h^{2})} = \frac{2h-h^{2}}{2-2h+h^{2}}.$$

Il rapporto incrementale, tenendo conto che $f(-1)=0$, diventa:

$$\frac{f(-1+h) - f(-1)}{h} = \frac{1}{h}\cdot\frac{2h-h^{2}}{2-2h+h^{2}} = \frac{h(2-h)}{h\,(2-2h+h^{2})} = \frac{2-h}{2-2h+h^{2}}.$$

## Passaggio al limite

$$f'(-1) = \lim_{h\to 0} \frac{2-h}{2-2h+h^{2}} = \frac{2-0}{2-0+0} = \frac{2}{2} = 1.$$

Dunque
$$f'(-1) = 1.$$

*Fonte:* [📄 PDF p.130](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
