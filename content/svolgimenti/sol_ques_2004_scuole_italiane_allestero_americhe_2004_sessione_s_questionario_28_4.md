

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28_4|2004 Estero Americhe Suppletiva — Questionario — Quesito 4]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28|2004 Estero Americhe Suppletiva — Questionario]]

Sia $a$ un parametro reale e sia $f$ una funzione tale che

$$(a-x)\,f(x-a) + f(a-x) = a-x, \qquad \text{per ogni } x\in\mathbb{R}.$$

Si vuole determinare $f$.

**Una condizione particolare.** Ponendo $x=a$ la relazione diventa

$$(a-a)\,f(0) + f(0) = a-a \;\Rightarrow\; f(0) = 0.$$

**Riscrittura della relazione.** Per $x\ne a$ si può dividere entrambi i membri per $(a-x)$, ottenendo

$$f(x-a) + \frac{f(a-x)}{a-x} = 1.$$

Poniamo $t = a-x$, così che $x-a = -t$. La relazione diventa

$$f(-t) + \frac{f(t)}{t} = 1.$$

Moltiplicando per $t$ si ricava

$$f(t) = t - t\,f(-t). \qquad (*)$$

**Eliminazione di $f(-t)$.** Sostituendo $t$ con $-t$ nella $(*)$ si ottiene

$$f(-t) = -t + t\,f(t).$$

Rimpiazzando questa espressione di $f(-t)$ nella $(*)$:

$$f(t) = t - t\big(-t + t\,f(t)\big) = t + t^{2} - t^{2}f(t),$$

da cui

$$(1+t^{2})\,f(t) = t^{2} + t \;\Rightarrow\; f(t) = \frac{t^{2}+t}{1+t^{2}} = \frac{t(t+1)}{t^{2}+1}.$$

**Conclusione.** La funzione cercata è dunque

$$f(x) = \frac{x^{2}+x}{x^{2}+1},$$

che soddisfa anche la condizione $f(0)=0$ trovata inizialmente. La funzione non dipende dal parametro $a$: la relazione, valendo per ogni $x\in\mathbb{R}$, la determina in modo unico.

**Verifica.** Con $t=a-x$ si ha $f(-t) = \dfrac{t^{2}-t}{t^{2}+1}$ e $f(t) = \dfrac{t^{2}+t}{t^{2}+1}$, quindi

$$(a-x)\,f(x-a) + f(a-x) = t\,f(-t) + f(t) = \frac{t^{3}-t^{2}}{t^{2}+1} + \frac{t^{2}+t}{t^{2}+1} = \frac{t^{3}+t}{t^{2}+1} = t = a-x,$$

come richiesto.

*Fonte:* [📄 PDF p.29](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
