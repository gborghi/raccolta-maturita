

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_4|2003 Ordinaria — Prova (Ordinamento) — Quesito 4]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Si deve determinare il dominio di

$$f(x)=\ln\bigl\{\sqrt{x+1}-(x-1)\bigr\}.$$

Perché l'espressione abbia senso servono due condizioni: la radice quadrata richiede un radicando non negativo, e il logaritmo richiede un argomento strettamente positivo. Si imposta quindi il sistema

$$\begin{cases} x+1\ge 0 \\[2pt] \sqrt{x+1}-(x-1)>0. \end{cases}$$

La prima condizione dà $x\ge -1$. La seconda si riscrive come

$$\sqrt{x+1}>x-1,$$

disequazione irrazionale che va discussa a seconda del segno del secondo membro.

**Caso $-1\le x<1$.** Qui $x-1<0$, mentre il primo membro $\sqrt{x+1}$ è non negativo. Una quantità $\ge 0$ è sempre maggiore di una quantità negativa, quindi la disequazione è verificata per tutti questi valori. Tutto l'intervallo $-1\le x<1$ appartiene al dominio (in particolare per $x=-1$ l'argomento vale $0-(-2)=2>0$).

**Caso $x\ge 1$.** Ora $x-1\ge 0$: entrambi i membri sono non negativi e si può elevare al quadrato conservando il verso,

$$x+1>(x-1)^2=x^2-2x+1\;\Rightarrow\; x^2-3x<0\;\Rightarrow\; x(x-3)<0,$$

da cui $0<x<3$. Intersecando con $x\ge 1$ si ottiene $1\le x<3$.

**Unione dei casi.** Mettendo insieme $-1\le x<1$ e $1\le x<3$ si ricava il dominio

$$-1\le x<3.$$

L'estremo $x=-1$ è incluso (l'argomento del logaritmo vale $2$), mentre $x=3$ è escluso perché lì l'argomento si annulla: $\sqrt{4}-(3-1)=2-2=0$, e il logaritmo di $0$ non esiste.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="258.541" height="163.813" viewBox="-72 -72 193.906 122.86"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 25.35h178"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M104.05 22.95c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-18.863" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.726 2.153)">x</text><path fill="none" d="M-18.863 50.39V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-21.263-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-18.863" y="25.351" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -89.982)">y</text><path fill="none" d="M-50.161 23.473v3.756"/><g stroke="none" font-size="10"><text x="-18.863" y="25.351" font-family="cmsy10" transform="translate(-37.687 11.855)">¡</text><text x="-11.085" y="25.351" font-family="cmr10" transform="translate(-37.687 11.855)">1</text></g><path fill="none" d="M12.435 23.473v3.756"/><text x="-18.863" y="25.351" stroke="none" font-family="cmr10" font-size="10" transform="translate(28.798 11.855)">1</text><path fill="none" d="M43.733 23.473v3.756"/><text x="-18.863" y="25.351" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 11.855)">2</text><path fill="none" d="M75.031 23.473v3.756"/><text x="-18.863" y="25.351" stroke="none" font-family="cmr10" font-size="10" transform="translate(91.395 11.855)">3</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-50.161-37.245 1.703-5.599 1.704-1.32 1.703-.618 1.704-.253 1.703-.02 1.704.145 1.703.27 1.704.37 1.703.45 1.704.52 1.703.576 1.704.626 1.703.67 1.704.71 1.703.746 1.704.775 1.703.805 1.704.83 1.703.855 1.704.877 1.703.897 1.704.916 1.703.934 1.704.95 1.703.966 1.704.98 1.703.995 1.704 1.007 1.703 1.02 1.704 1.031 1.703 1.043 1.704 1.052 1.703 1.063 1.704 1.073 1.703 1.082 1.704 1.091 1.703 1.1 1.704 1.106 1.703 1.116 1.704 1.122 1.703 1.13 1.704 1.137 1.703 1.143 1.704 1.15 1.703 1.156L28.2-8.408l1.703 1.168 1.704 1.174 1.703 1.18 1.704 1.184 1.703 1.19 1.704 1.195 1.703 1.2 1.704 1.203 1.703 1.21 1.704 1.213 1.703 1.218 1.704 1.222 1.703 1.226 1.704 1.23 1.703 1.234 1.704 1.238 1.703 1.242 1.704 1.245 1.703 1.25 1.704 1.251 1.703 1.256 1.704 1.26 1.703 1.262 1.704 1.266 1.703 1.268 1.704 1.272 1.703 1.274 1.704 1.278 1.703 1.28 1.704 1.284 1.703 1.286 1.704 1.289 1.703 1.291"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-18.863" y="25.351" font-family="cmmi10" font-size="10" transform="translate(44.363 -47)">y</text><text x="-10.824" y="25.351" font-family="cmr10" font-size="10" transform="translate(44.363 -47)">=</text><text x="-.268" y="17.495" font-family="cmsy10" font-size="10" transform="translate(44.363 -47)">p</text><path d="M52.428-29.905h22.937v.4H52.428z"/><text x="8.065" y="25.351" font-family="cmmi10" font-size="10" transform="translate(44.363 -47)">x</text><text x="16.002" y="25.351" font-family="cmr10" font-size="10" transform="translate(44.363 -47)">+</text><text x="26.002" y="25.351" font-family="cmr10" font-size="10" transform="translate(44.363 -47)">1</text><text x="33.225" y="25.351" font-family="cmsy10" font-size="10" transform="translate(44.363 -47)">¡</text><text x="43.225" y="25.351" font-family="cmr10" font-size="10" transform="translate(44.363 -47)">(</text><text x="47.113" y="25.351" font-family="cmmi10" font-size="10" transform="translate(44.363 -47)">x</text><text x="55.051" y="25.351" font-family="cmsy10" font-size="10" transform="translate(44.363 -47)">¡</text><text x="65.051" y="25.351" font-family="cmr10" font-size="10" transform="translate(44.363 -47)">1)</text></g></g><path stroke="none" d="M76.791 25.35a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="-18.863" y="25.351" stroke="none" font-family="cmr10" font-size="10" transform="translate(102.35 -5.541)">0</text><path fill="none" stroke="gray" stroke-dasharray="3.0,2.0" d="M-50.161 25.35v-62.595"/><path stroke="none" d="M-48.621-37.245a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0m-1.54 0"/></g></svg>
</figure>

Il grafico dell'argomento $\,y=\sqrt{x+1}-(x-1)\,$ conferma il risultato: la funzione è positiva su tutto $[-1,3)$ e si annulla in $x=3$.

La risposta corretta è quindi la **B)** $\;-1\le x<3$.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
