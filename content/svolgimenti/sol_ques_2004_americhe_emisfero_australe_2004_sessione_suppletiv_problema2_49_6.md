

**Quesito:** [[Quesiti/ques_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49_6|2004 Americhe australe Suppletiva — Problema 2 e Quesiti — Quesito 6]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49|2004 Americhe australe Suppletiva — Problema 2 e Quesiti]]

Di una funzione $g(x)$, non costante, si sa che

$$\lim_{x \to 2} g(x) = 3 \qquad \text{e} \qquad g(2) = 4.$$

Si chiede di determinare una possibile espressione di $g(x)$.

**Idea risolutiva.** Le due condizioni impongono che il limite di $g$ per $x \to 2$ esista e valga $3$, mentre il valore assunto dalla funzione nel punto sia $g(2) = 4$. Poiché

$$\lim_{x \to 2} g(x) = 3 \neq 4 = g(2),$$

la funzione **non è continua** in $x = 2$: presenta in quel punto una **discontinuità eliminabile** (discontinuità di terza specie), cioè un punto isolato in cui il valore della funzione è "staccato" dall'andamento circostante. Basta quindi costruire una funzione che tenda a $3$ quando $x$ si avvicina a $2$, ma che in $x = 2$ valga esattamente $4$.

**Una possibile espressione.** Il modo più semplice è definire $g$ a tratti, scegliendo per $x \neq 2$ una funzione continua che in $2$ abbia limite $3$ (ad esempio la retta $y = x + 1$) e assegnando separatamente il valore in $x = 2$:

$$g(x) = \begin{cases} x + 1, & \text{se } x \neq 2, \\[4pt] 4, & \text{se } x = 2. \end{cases}$$

Si verifica che tutte le condizioni sono soddisfatte:

$$\lim_{x \to 2} g(x) = \lim_{x \to 2} (x+1) = 3, \qquad g(2) = 4,$$

e la funzione non è costante, come richiesto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="200.846" height="244.267" viewBox="-72 -72 150.634 183.2"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 94.917H65.383"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M63.503 92.517c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-58.555" y="94.917" stroke="none" font-family="cmmi10" font-size="10" transform="translate(127.871 2.153)">x</text><path fill="none" d="M-58.555 108.432V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.955-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-58.555" y="94.917" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -159.548)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.664 75.996 4.842-4.843 4.843-4.842 4.842-4.843 4.843-4.842 4.842-4.843 4.843-4.842 4.843-4.843 4.842-4.842 4.843-4.843 4.842-4.842 4.843-4.843 4.842-4.842 4.843-4.843L1.13 8.201l4.843-4.843 4.842-4.842 4.843-4.843 4.842-4.842 4.843-4.843 4.842-4.842 4.843-4.843 4.842-4.842 4.843-4.843 4.842-4.842"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-58.555 13.827h54.06v81.09M-58.555-13.203h54.06"/><path fill="#fff" stroke="none" d="M-1.645 13.827a2.85 2.85 0 1 0-5.7 0 2.85 2.85 0 0 0 5.7 0m-2.85 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-1.645 13.827a2.85 2.85 0 1 0-5.7 0 2.85 2.85 0 0 0 5.7 0Zm-2.85 0"/><path fill="#00f" stroke="none" d="M-1.645-13.203a2.85 2.85 0 1 0-5.7 0 2.85 2.85 0 0 0 5.7 0m-2.85 0"/><text x="-58.555" y="94.917" stroke="none" font-family="cmr10" font-size="10" transform="translate(51.56 12.68)">2</text><text x="-58.555" y="94.917" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -77.868)">3</text><text x="-58.555" y="94.917" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -104.898)">4</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-58.555" y="94.917" font-family="cmmi10" transform="translate(79.245 -108.573)">y</text><text x="-50.516" y="94.917" font-family="cmr10" transform="translate(79.245 -108.573)">=</text><text x="-39.96" y="94.917" font-family="cmmi10" transform="translate(79.245 -108.573)">x</text><text x="-32.023" y="94.917" font-family="cmr10" transform="translate(79.245 -108.573)">+</text><text x="-22.023" y="94.917" font-family="cmr10" transform="translate(79.245 -108.573)">1</text></g></g></g></svg>
</figure>

Nel grafico la retta $y = x + 1$ rappresenta l'andamento per $x \neq 2$: avvicinandosi a $x = 2$ le ordinate tendono a $3$ (punto vuoto in $(2,\,3)$), mentre il valore effettivo della funzione è il punto pieno in $(2,\,4)$.

**Osservazione.** La soluzione non è unica: il ramo per $x \neq 2$ può essere una qualunque funzione con limite $3$ in $x = 2$. Ad esempio va bene anche

$$g(x) = \begin{cases} 3, & \text{se } x \neq 2, \\[4pt] 4, & \text{se } x = 2, \end{cases}$$

che è comunque non costante (assume i due valori $3$ e $4$). Esistono dunque infinite funzioni che rispettano le richieste: ciò che conta è avere limite $3$ e valore $4$ nel punto $x = 2$.

*Fonte:* [📄 PDF p.55](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
