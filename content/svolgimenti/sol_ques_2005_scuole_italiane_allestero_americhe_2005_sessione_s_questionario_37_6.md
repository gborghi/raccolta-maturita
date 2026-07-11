

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_s_questionario_37_6|2005 Americhe Suppletiva — Questionario — Quesito 6]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_s_questionario_37|2005 Americhe Suppletiva — Questionario]]

Trovare la funzione $f(x)$ avente come primitiva la funzione $\tan\sqrt{x}$.

Dire che $\tan\sqrt{x}$ è una primitiva di $f$ significa che

$$
F(x)=\tan\sqrt{x}
$$

è una funzione la cui derivata è $f$; basta quindi derivare $F$.

La funzione $\sqrt{x}$ è definita per $x\ge 0$, ma nel calcolo della derivata comparirà $\sqrt{x}$ a denominatore, per cui il dominio di $f$ è $x>0$ (con l'ulteriore esclusione dei punti in cui $\sqrt{x}=\dfrac{\pi}{2}+k\pi$, dove $\tan\sqrt{x}$ non è definita).

Applichiamo la regola di derivazione delle funzioni composte. Ricordando che

$$
\frac{d}{dt}\tan t = 1+\tan^2 t,\qquad \frac{d}{dx}\sqrt{x}=\frac{1}{2\sqrt{x}},
$$

si ottiene

$$
f(x)=F'(x)=\bigl(1+\tan^2\sqrt{x}\bigr)\cdot\frac{1}{2\sqrt{x}}.
$$

La funzione cercata è dunque

$$
f(x)=\frac{1+\tan^2\sqrt{x}}{2\sqrt{x}}=\frac{1}{2\sqrt{x}\,\cos^2\sqrt{x}}.
$$

*Fonte:* [📄 PDF p.40](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
