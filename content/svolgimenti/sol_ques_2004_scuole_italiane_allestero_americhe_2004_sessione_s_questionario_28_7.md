

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28_7|2004 Estero Americhe Suppletiva — Questionario — Quesito 7]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_s_questionario_28|2004 Estero Americhe Suppletiva — Questionario]]

Si spieghi perché la derivata di $\sin x$ è $\cos x$ e si calcoli la derivata d'ordine $725$ di $\sin x$.

## a) Perché la derivata di $\sin x$ è $\cos x$

Sia $f(x)=\sin x$. Applichiamo la definizione di derivata come limite del rapporto incrementale:

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to 0}\frac{\sin(x+h)-\sin x}{h}.$$

Trasformiamo la differenza al numeratore con la formula di prostaferesi

$$\sin p-\sin q=2\,\sin\frac{p-q}{2}\,\cos\frac{p+q}{2},$$

dove $p=x+h$ e $q=x$. Si ottiene

$$\sin(x+h)-\sin x=2\,\sin\frac{h}{2}\,\cos\!\left(x+\frac{h}{2}\right).$$

Quindi

$$f'(x)=\lim_{h\to 0}\frac{2\,\sin\dfrac{h}{2}\,\cos\!\left(x+\dfrac{h}{2}\right)}{h}=\lim_{h\to 0}\frac{\sin\dfrac{h}{2}}{\dfrac{h}{2}}\cdot\cos\!\left(x+\frac{h}{2}\right).$$

Per il limite notevole $\displaystyle\lim_{t\to 0}\frac{\sin t}{t}=1$ (con $t=\tfrac{h}{2}\to 0$) il primo fattore tende a $1$, mentre per la continuità del coseno il secondo fattore tende a $\cos x$. Pertanto

$$f'(x)=1\cdot\cos x=\cos x.$$

## b) Derivata di ordine $725$

Calcoliamo le prime derivate successive di $f(x)=\sin x$:

$$
\begin{aligned}
f'(x)&=\cos x,\\
f''(x)&=-\sin x,\\
f'''(x)&=-\cos x,\\
f^{(4)}(x)&=\sin x.
\end{aligned}
$$

Con la quarta derivata si ritorna alla funzione di partenza: le derivate si ripetono dunque con periodo $4$. Per determinare la derivata di ordine $725$ basta considerare il resto della divisione di $725$ per $4$:

$$725=4\cdot 181+1.$$

La derivata di ordine $724=4\cdot 181$ riporta a $\sin x$; di conseguenza la derivata successiva, di ordine $725$, coincide con la derivata prima:

$$f^{(725)}(x)=f'(x)=\cos x.$$

*Fonte:* [📄 PDF p.31](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
