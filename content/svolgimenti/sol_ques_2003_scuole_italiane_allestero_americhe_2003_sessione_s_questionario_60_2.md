

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_americhe_2003_sessione_s_questionario_60_2|2003 Americhe Suppletiva — Questionario — Quesito 2]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_americhe_2003_sessione_s_questionario_60|2003 Americhe Suppletiva — Questionario]]

Di triangoli in cui due lati hanno lunghezze rispettivamente $b = 2\sqrt{3}-2$ e $c = 4$, e in cui l'angolo opposto al primo di essi ha ampiezza $\beta = 15^\circ$, ci si chiede quanti ne esistano: nessuno, uno, due o più di due.

## Impostazione

Indichiamo con $a$, $b$, $c$ le misure dei lati e con $\alpha$, $\beta$, $\gamma$ le ampiezze degli angoli opposti rispettivamente ad $a$, $b$, $c$. È noto il lato $b$ con il suo angolo opposto $\beta$, ed è noto il lato $c$: si tratta del cosiddetto caso ambiguo (dati due lati e l'angolo opposto a uno di essi).

Per il teorema dei seni:

$$\frac{b}{\sin\beta} = \frac{c}{\sin\gamma} \quad\Rightarrow\quad \sin\gamma = \frac{c\,\sin\beta}{b}.$$

## Calcolo di $\sin\gamma$

Ricordando che $\sin 15^\circ = \dfrac{\sqrt{6}-\sqrt{2}}{4}$, si ha:

$$\sin\gamma = \frac{4\,\sin 15^\circ}{2\sqrt{3}-2} = \frac{4\cdot\dfrac{\sqrt{6}-\sqrt{2}}{4}}{2\sqrt{3}-2} = \frac{\sqrt{6}-\sqrt{2}}{2(\sqrt{3}-1)}.$$

Raccogliendo $\sqrt{2}$ al numeratore, $\sqrt{6}-\sqrt{2} = \sqrt{2}\,(\sqrt{3}-1)$, quindi:

$$\sin\gamma = \frac{\sqrt{2}\,(\sqrt{3}-1)}{2(\sqrt{3}-1)} = \frac{\sqrt{2}}{2}.$$

## Discussione delle soluzioni

L'equazione $\sin\gamma = \dfrac{\sqrt{2}}{2}$, con $0^\circ < \gamma < 180^\circ$, ammette due soluzioni:

$$\gamma_1 = 45^\circ \qquad \text{oppure} \qquad \gamma_2 = 135^\circ.$$

Occorre verificare che ciascuna sia compatibile con l'esistenza del triangolo, cioè che $\beta + \gamma < 180^\circ$ (in modo che rimanga un angolo $\alpha > 0$):

- per $\gamma_1 = 45^\circ$: $\ \beta + \gamma_1 = 15^\circ + 45^\circ = 60^\circ < 180^\circ$, da cui $\alpha_1 = 120^\circ$;
- per $\gamma_2 = 135^\circ$: $\ \beta + \gamma_2 = 15^\circ + 135^\circ = 150^\circ < 180^\circ$, da cui $\alpha_2 = 30^\circ$.

Entrambe le soluzioni sono accettabili: esistono quindi **due** triangoli che soddisfano le condizioni date. Ciò è coerente con il fatto che il lato $b \approx 1{,}46$ noto è opposto all'angolo $\beta$ ed è minore del lato $c = 4$: geometricamente l'arco di raggio $b$ interseca la retta di base in due punti distinti.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="225.33" height="115.526" viewBox="-72 -72 168.997 86.645"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-65.853-.824h162.18"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.317-.824 52.51-30.415M52.51-30.415 23.204-.825"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M52.51-30.415 82.101-.825"/><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M94.165-30.415c0-23.006-18.649-41.655-41.655-41.655-23.005 0-41.655 18.65-41.655 41.655S29.505 11.24 52.51 11.24 94.165-7.41 94.165-30.415Zm-41.655 0"/><path stroke="none" d="M-55.717-.824a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M54.11-30.415a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M24.804000000000002-.824a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M83.701-.824a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-57.317" y="-.824" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.62 10.366)">B</text><text x="-57.317" y="-.824" stroke="none" font-family="cmmi10" font-size="10" transform="translate(106.078 -33.124)">A</text><g stroke="none"><text x="-57.317" y="-.824" font-family="cmmi10" font-size="10" transform="translate(74.705 10.366)">C</text><text x="-50.17" y=".676" font-family="cmr7" font-size="7" transform="translate(74.705 10.366)">1</text></g><g stroke="none"><text x="-57.317" y="-.824" font-family="cmmi10" font-size="10" transform="translate(133.602 10.366)">C</text><text x="-50.17" y=".676" font-family="cmr7" font-size="7" transform="translate(133.602 10.366)">2</text></g><g stroke="none"><text x="-57.317" y="-.824" font-family="cmmi10" font-size="10" transform="translate(8.55 -2.621)">¯</text><text x="-48.356" y="-.824" font-family="cmr10" font-size="10" transform="translate(8.55 -2.621)">=</text><text x="-37.8" y="-.824" font-family="cmr10" font-size="10" transform="translate(8.55 -2.621)">15</text><text x="-27.8" y="-4.453" font-family="cmsy7" font-size="7" transform="translate(8.55 -2.621)">±</text></g><g stroke="none" font-size="10"><text x="-57.317" y="-.824" font-family="cmmi10" transform="translate(97.427 -19.182)">c</text><text x="-50.212" y="-.824" font-family="cmr10" transform="translate(97.427 -19.182)">=</text><text x="-39.656" y="-.824" font-family="cmr10" transform="translate(97.427 -19.182)">4</text></g><text x="-57.317" y="-.824" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.903 -14.168)">b</text></g></svg>
</figure>

## Conclusione

La risposta corretta è la **c) due**.

*Fonte:* [📄 PDF p.61](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
