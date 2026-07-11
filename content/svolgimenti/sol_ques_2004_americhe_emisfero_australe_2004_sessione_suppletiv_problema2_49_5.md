

**Quesito:** [[Quesiti/ques_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49_5|2004 Americhe australe Suppletiva — Problema 2 e Quesiti — Quesito 5]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49|2004 Americhe australe Suppletiva — Problema 2 e Quesiti]]

Come si può trovare

$$\lim_{x\to 4} f(x)$$

sapendo che

$$\lim_{x\to 4}\frac{f(x)-5}{x-2}=1\,?$$

## Svolgimento

L'idea è ricondurre il limite richiesto a quello noto, isolando $f(x)$.

Dalla relazione data poniamo

$$g(x)=\frac{f(x)-5}{x-2},\qquad \lim_{x\to 4} g(x)=1.$$

Ricaviamo $f(x)$ moltiplicando per $x-2$ (lecito in un intorno di $x=4$, dove $x-2\neq 0$):

$$f(x)-5=g(x)\,(x-2)\quad\Rightarrow\quad f(x)=5+g(x)\,(x-2).$$

Passando al limite per $x\to 4$ e usando i teoremi sul limite di somma e prodotto:

$$\lim_{x\to 4} f(x)=5+\Big(\lim_{x\to 4} g(x)\Big)\cdot\Big(\lim_{x\to 4}(x-2)\Big)=5+1\cdot(4-2)=5+2.$$

Quindi

$$\lim_{x\to 4} f(x)=7.$$

In particolare, poiché il rapporto $\dfrac{f(x)-5}{x-2}$ tende a un limite finito mentre il denominatore tende a $2\neq 0$, anche il numeratore ha limite finito: $\lim_{x\to 4}\big(f(x)-5\big)=2$, da cui $\lim_{x\to 4} f(x)=7$.

*Fonte:* [📄 PDF p.54](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
