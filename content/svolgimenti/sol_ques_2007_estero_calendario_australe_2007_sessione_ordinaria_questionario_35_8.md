

**Quesito:** [[Quesiti/ques_2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35_8|2007 Estero Australe Ordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35|2007 Estero Australe Ordinaria — Questionario]]

**Quesito.** La risoluzione di un problema conduce all'equazione
$$2\sin x + k\cos x = 1,\qquad k>0,\quad 0 \le x \le \frac{\pi}{3}.$$
Si discutano, al variare di $k$, le soluzioni del problema.

## Impostazione geometrica

Poniamo $X=\cos x$ e $Y=\sin x$. Al variare di $x$ in $\left[0,\dfrac{\pi}{3}\right]$ il punto $P=(X,Y)$ descrive un arco della circonferenza goniometrica, e l'equazione data equivale al sistema
$$\begin{cases} 2Y + kX = 1 \\ X^2 + Y^2 = 1 \\ k>0 \\ \dfrac{1}{2} \le X \le 1,\quad 0 \le Y \le \dfrac{\sqrt{3}}{2}. \end{cases}$$

Le ultime disuguaglianze traducono il vincolo $0 \le x \le \dfrac{\pi}{3}$: infatti $\cos x$ varia da $\cos\dfrac{\pi}{3}=\dfrac{1}{2}$ a $\cos 0 = 1$, mentre $\sin x$ varia da $0$ a $\sin\dfrac{\pi}{3}=\dfrac{\sqrt{3}}{2}$.

L'equazione $2Y + kX = 1$ rappresenta, al variare di $k$, un **fascio proprio di rette**. Due sue rette particolari sono $2Y-1=0$ (per $k=0$) e $X=0$ (per $k\to\infty$): il loro punto comune è il centro del fascio
$$S=\left(0,\;\frac{1}{2}\right).$$

L'arco di circonferenza che le rette possono intersecare ha per estremi
$$A=(1,0)\quad(\text{corrisponde a } x=0),\qquad B=\left(\frac{1}{2},\frac{\sqrt{3}}{2}\right)\quad\left(\text{corrisponde a } x=\frac{\pi}{3}\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="303.425" height="274.607" viewBox="-72 -72 227.569 205.955"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-8.051 48.127h136.173"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M126.242 45.727c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="13.288" y="48.127" stroke="none" font-family="cmmi10" font-size="10" transform="translate(118.767 3.417)">X</text><path fill="none" d="M13.288 69.467V-58.171"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10.888-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08"/><text x="13.288" y="48.127" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.014 -110.23)">Y</text><path fill="none" stroke="#b3b3b3" d="M98.646 48.127c0-47.143-38.215-85.358-85.358-85.358S-72.07.984-72.07 48.127s38.216 85.358 85.358 85.358S98.646 95.27 98.646 48.127Zm-85.358 0"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M98.646 48.127a85.37 85.37 0 0 0-42.679-73.923"/><path stroke="none" d="M100.354 48.127a1.707 1.707 0 1 0-3.415 0 1.707 1.707 0 0 0 3.415 0m-1.708 0"/><g stroke="none" font-size="10"><text x="13.288" y="48.127" font-family="cmmi10" transform="translate(88.891 11.033)">A</text><text x="23.566" y="48.127" font-family="cmr10" transform="translate(88.891 11.033)">=</text><text x="34.121" y="48.127" font-family="cmr10" transform="translate(88.891 11.033)">(1</text><text x="43.01" y="48.127" font-family="cmmi10" transform="translate(88.891 11.033)">;</text><text x="47.455" y="48.127" font-family="cmr10" transform="translate(88.891 11.033)">0)</text></g><path stroke="none" d="M57.675-25.793a1.707 1.707 0 1 0-3.415 0 1.707 1.707 0 0 0 3.415 0m-1.708 0"/><g stroke="none"><text x="13.288" y="48.127" font-family="cmmi10" font-size="10" transform="translate(46.212 -83.953)">B</text><text x="24.153" y="48.127" font-family="cmr10" font-size="10" transform="translate(46.212 -83.953)">=</text><text x="34.708" y="37.027" font-family="cmex10" font-size="10" transform="translate(46.212 -83.953)">³</text><text x="41.88" y="44.19" font-family="cmr7" font-size="7" transform="translate(46.212 -83.953)">1</text><path d="M88.092-38.526h3.986v.4h-3.986z"/><text x="41.88" y="51.575" font-family="cmr7" font-size="7" transform="translate(46.212 -83.953)">2</text><text x="47.067" y="48.127" font-family="cmmi10" font-size="10" transform="translate(46.212 -83.953)">;</text><text x="52.711" y="38.354" font-family="cmsy7" font-size="7" transform="translate(46.212 -83.953)">p</text><path d="M105.493-45.94h3.986v.34h-3.986z"/><text x="59.281" y="44.19" font-family="cmr7" font-size="7" transform="translate(46.212 -83.953)">3</text><path d="M98.923-38.526h10.556v.4H98.923z"/><text x="55.996" y="51.575" font-family="cmr7" font-size="7" transform="translate(46.212 -83.953)">2</text><text x="64.467" y="37.027" font-family="cmex10" font-size="10" transform="translate(46.212 -83.953)">´</text></g><path stroke="none" d="M14.996 5.448a1.707 1.707 0 1 0-3.415 0 1.707 1.707 0 0 0 3.415 0m-1.708 0"/><g stroke="none"><text x="13.288" y="48.127" font-family="cmmi10" font-size="10" transform="translate(-48.572 -40.18)">S</text><text x="22.774" y="48.127" font-family="cmr10" font-size="10" transform="translate(-48.572 -40.18)">=</text><text x="33.33" y="40.027" font-family="cmex10" font-size="10" transform="translate(-48.572 -40.18)">¡</text><text x="37.913" y="48.127" font-family="cmr10" font-size="10" transform="translate(-48.572 -40.18)">0</text><text x="42.913" y="48.127" font-family="cmmi10" font-size="10" transform="translate(-48.572 -40.18)">;</text><text x="48.558" y="44.19" font-family="cmr7" font-size="7" transform="translate(-48.572 -40.18)">1</text><path d="M-.014 5.248h3.986v.4H-.014z"/><text x="48.558" y="51.575" font-family="cmr7" font-size="7" transform="translate(-48.572 -40.18)">2</text><text x="53.744" y="40.027" font-family="cmex10" font-size="10" transform="translate(-48.572 -40.18)">¢</text></g><g fill="red" stroke="red"><path fill="none" d="m.485-.954 115.233 57.617"/><g fill="red" stroke="none" font-size="10"><text x="13.288" y="48.127" font-family="cmmi10" transform="translate(105.963 12.009)">k</text><text x="21.587" y="48.127" font-family="cmr10" transform="translate(105.963 12.009)">=</text><text x="32.142" y="48.127" font-family="cmr10" transform="translate(105.963 12.009)">1</text></g></g><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M.485 5.448h115.233"/><g fill="red" stroke="none"><text x="13.288" y="48.127" font-family="cmmi10" font-size="10" transform="translate(105.963 -38.698)">k</text><text x="21.587" y="48.127" font-family="cmsy10" font-size="10" transform="translate(105.963 -38.698)">!</text><text x="34.365" y="48.127" font-family="cmr10" font-size="10" transform="translate(105.963 -38.698)">0</text><text x="39.365" y="44.498" font-family="cmr7" font-size="7" transform="translate(105.963 -38.698)">+</text></g></g><path fill="red" stroke="none" d="M88.488 5.448a1.28 1.28 0 1 0-2.56 0 1.28 1.28 0 0 0 2.56 0m-1.28 0"/></g></svg>
</figure>

## Rette per gli estremi dell'arco

Determiniamo i valori di $k$ per cui la retta del fascio passa per $A$ e per $B$.

- **Retta per $A=(1,0)$:** sostituendo, $2\cdot 0 + k\cdot 1 = 1$, da cui $k=1$.
- **Retta per $B=\left(\dfrac{1}{2},\dfrac{\sqrt{3}}{2}\right)$:** sostituendo, $2\cdot\dfrac{\sqrt{3}}{2} + k\cdot\dfrac{1}{2} = 1$, cioè $\sqrt{3} + \dfrac{k}{2} = 1$, da cui $k = 2 - 2\sqrt{3} < 0$.

Il valore relativo a $B$ è negativo, quindi **non compatibile** con la condizione $k>0$: al crescere di $k$ da $0$ la retta del fascio non raggiunge mai il punto $B$.

## Discussione analitica

Poniamo $g(x)=2\sin x + k\cos x$ e studiamo il numero di soluzioni di $g(x)=1$ in $\left[0,\dfrac{\pi}{3}\right]$. Ai valori estremi:
$$g(0)=k,\qquad g\!\left(\frac{\pi}{3}\right)=\sqrt{3}+\frac{k}{2}.$$

Poiché $k>0$, si ha sempre $g\!\left(\dfrac{\pi}{3}\right)=\sqrt{3}+\dfrac{k}{2} > 1$: nell'estremo destro la funzione è sopra il livello $1$.

Dalla derivata $g'(x)=2\cos x - k\sin x$ si ottiene $g'(x)=0$ per $\tan x = \dfrac{2}{k}$. Questo punto stazionario cade dentro l'intervallo solo se $\dfrac{2}{k}\le \tan\dfrac{\pi}{3}=\sqrt{3}$, cioè per $k \ge \dfrac{2\sqrt{3}}{3}$.

- Se $0<k<\dfrac{2\sqrt{3}}{3}$, allora $g'(x)>0$ su tutto l'intervallo e $g$ è **crescente**: passa da $g(0)=k$ a $g\!\left(\dfrac{\pi}{3}\right)>1$.
  - Per $k<1$: $g(0)=k<1<g\!\left(\dfrac{\pi}{3}\right)$, quindi la funzione attraversa il livello $1$ **una sola volta**.
  - Per $k=1$: $g(0)=1$, dunque la soluzione è l'estremo $x=0$ (una soluzione).
  - Per $1<k<\dfrac{2\sqrt{3}}{3}$: $g(0)=k>1$ e $g$ crescente, quindi $g(x)>1$ ovunque, **nessuna soluzione**.
- Se $k \ge \dfrac{2\sqrt{3}}{3}$ (quindi $k>1$), $g$ cresce fino al massimo e poi decresce, ma parte da $g(0)=k>1$ e torna a $g\!\left(\dfrac{\pi}{3}\right)>1$: resta sempre $g(x)>1$, **nessuna soluzione**.

## Conclusione

Tenendo presente il vincolo $k>0$, il problema ammette

$$\boxed{\;1\ \text{soluzione per } 0 < k \le 1,\qquad \text{nessuna soluzione per } k > 1.\;}$$

*Fonte:* [📄 PDF p.40](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
