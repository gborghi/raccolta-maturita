

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26_7|2005 Americhe Ordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26|2005 Americhe Ordinaria — Questionario]]

Si chiede di determinare, se esiste, la funzione $f(x)$ tale che

$$\int_0^t f(x)\,dx = t^2 + \sqrt{t}.$$

Poniamo

$$F(t) = \int_0^t f(x)\,dx = t^2 + \sqrt{t}.$$

Per il **teorema fondamentale del calcolo integrale**, se $f$ è continua allora $F$ è derivabile e la sua derivata coincide con la funzione integranda valutata nell'estremo superiore:

$$F'(t) = f(t).$$

Basta quindi derivare $F(t) = t^2 + \sqrt{t}$. Ricordando che $\sqrt{t} = t^{1/2}$ e che $D\!\left(t^{1/2}\right) = \dfrac{1}{2}t^{-1/2} = \dfrac{1}{2\sqrt{t}}$, otteniamo

$$f(t) = F'(t) = 2t + \frac{1}{2\sqrt{t}}.$$

La funzione cercata è pertanto

$$f(x) = 2x + \frac{1}{2\sqrt{x}},$$

definita e continua per $x > 0$ (dove esiste $\sqrt{x}$ e non si annulla il denominatore); per tali $x$ essa soddisfa effettivamente la condizione richiesta.

*Fonte:* [📄 PDF p.28](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
