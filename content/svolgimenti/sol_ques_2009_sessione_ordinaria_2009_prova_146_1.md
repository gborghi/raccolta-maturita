

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_1|2009 Sessione Ordinaria PNI — Prova — Quesito 1]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Siano $a$ e $b$ due numeri reali con $0 < a < b$ e sia $x \in [-b,\,b]$. Si provi che
$$\int_{-b}^{b} \frac{a}{b}\sqrt{b^2 - x^2}\,dx = \frac{\pi a b}{2},$$
dandone l'interpretazione geometrica.

## Impostazione

Poiché $0 < a < b$, il fattore $\dfrac{a}{b}$ è una costante positiva e può essere portato fuori dal segno di integrale:
$$\int_{-b}^{b} \frac{a}{b}\sqrt{b^2 - x^2}\,dx = \frac{a}{b}\int_{-b}^{b} \sqrt{b^2 - x^2}\,dx.$$
Il problema si riduce quindi al calcolo di $\displaystyle\int_{-b}^{b}\sqrt{b^2 - x^2}\,dx$.

## Calcolo dell'integrale

Si opera la sostituzione $x = b\sin t$, con $t \in \left[-\dfrac{\pi}{2},\,\dfrac{\pi}{2}\right]$, intervallo su cui $\cos t \ge 0$. Allora
$$dx = b\cos t\,dt, \qquad \sqrt{b^2 - x^2} = \sqrt{b^2(1-\sin^2 t)} = b\,|\cos t| = b\cos t,$$
e gli estremi $x=-b$ e $x=b$ corrispondono a $t=-\dfrac{\pi}{2}$ e $t=\dfrac{\pi}{2}$. Quindi
$$\int_{-b}^{b}\sqrt{b^2 - x^2}\,dx = \int_{-\pi/2}^{\pi/2} b\cos t \cdot b\cos t\,dt = b^2\int_{-\pi/2}^{\pi/2}\cos^2 t\,dt.$$
Usando $\cos^2 t = \dfrac{1+\cos 2t}{2}$ si ottiene
$$b^2\int_{-\pi/2}^{\pi/2}\frac{1+\cos 2t}{2}\,dt = b^2\left[\frac{t}{2} + \frac{\sin 2t}{4}\right]_{-\pi/2}^{\pi/2} = b^2\left(\frac{\pi}{4} + \frac{\pi}{4}\right) = \frac{\pi b^2}{2}.$$

Pertanto
$$\int_{-b}^{b} \frac{a}{b}\sqrt{b^2 - x^2}\,dx = \frac{a}{b}\cdot\frac{\pi b^2}{2} = \frac{\pi a b}{2},$$
come si voleva dimostrare.

## Interpretazione geometrica

La funzione integranda $y = \dfrac{a}{b}\sqrt{b^2 - x^2}$ è non negativa e verifica
$$\frac{y^2}{a^2} = \frac{b^2 - x^2}{b^2} = 1 - \frac{x^2}{b^2} \quad\Longrightarrow\quad \frac{x^2}{b^2} + \frac{y^2}{a^2} = 1, \quad y \ge 0.$$
Il suo grafico è dunque la **metà superiore dell'ellisse** di semiassi $b$ (lungo l'asse $x$) e $a$ (lungo l'asse $y$).

L'integrale calcolato rappresenta l'area della regione $D$ compresa tra tale arco e l'asse delle ascisse, cioè l'area della semiellisse superiore. Il risultato $\dfrac{\pi a b}{2}$ è esattamente la metà dell'area dell'ellisse completa, che vale $\pi a b$: nel caso particolare $a=b$ si ritrova infatti l'area $\dfrac{\pi b^2}{2}$ del semicerchio di raggio $b$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="270.781" height="129.199" viewBox="-72 -72 203.085 96.899"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="m-53.335 9.986 1.945-11.45 1.945-4.64 1.944-3.487 1.945-2.88 1.945-2.482 1.945-2.195 1.944-1.972 1.945-1.794 1.945-1.642 1.944-1.515 1.945-1.402 1.945-1.303 1.944-1.215 1.945-1.134 1.945-1.06 1.945-.992 1.944-.93 1.945-.869 1.945-.813 1.944-.762 1.945-.712 1.945-.663 1.944-.619 1.945-.574 1.945-.532 1.944-.492 1.945-.452 1.945-.414 1.945-.376 1.944-.339 1.945-.304 1.945-.268 1.944-.233 1.945-.2 1.945-.165 1.944-.132 1.945-.1 1.945-.065 1.944-.033h1.945l1.945.033 1.945.065 1.944.099 1.945.132 1.945.165 1.944.2 1.945.232 1.945.269 1.944.303 1.945.339 1.945.376 1.945.413 1.944.452 1.945.491 1.945.532 1.944.574 1.945.618 1.945.664 1.944.71 1.945.762 1.945.814 1.944.869 1.945.928 1.945.992 1.945 1.06L75.015-28l1.945 1.214 1.945 1.303 1.944 1.402 1.945 1.513 1.945 1.642 1.944 1.792 1.945 1.97 1.945 2.195 1.944 2.48 1.945 2.876 1.945 3.483 1.945 4.627 1.944 10.55Z"/><path fill="none" d="M-71.26 9.986h189.094"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M115.954 7.586c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="23.487" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(98.28 2.153)">x</text><path fill="none" d="M23.487 20.228v-78.982"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M21.087-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="23.487" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -74.617)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.335 9.986 1.945-11.45 1.945-4.64 1.944-3.487 1.945-2.88 1.945-2.482 1.945-2.195 1.944-1.972 1.945-1.794 1.945-1.642 1.944-1.515 1.945-1.402 1.945-1.303 1.944-1.215 1.945-1.134 1.945-1.06 1.945-.992 1.944-.93 1.945-.869 1.945-.813 1.944-.762 1.945-.712 1.945-.663 1.944-.619 1.945-.574 1.945-.532 1.944-.492 1.945-.452 1.945-.414 1.945-.376 1.944-.339 1.945-.304 1.945-.268 1.944-.233 1.945-.2 1.945-.165 1.944-.132 1.945-.1 1.945-.065 1.944-.033h1.945l1.945.033 1.945.065 1.944.099 1.945.132 1.945.165 1.944.2 1.945.232 1.945.269 1.944.303 1.945.339 1.945.376 1.945.413 1.944.452 1.945.491 1.945.532 1.944.574 1.945.618 1.945.664 1.944.71 1.945.762 1.945.814 1.944.869 1.945.928 1.945.992 1.945 1.06L75.015-28l1.945 1.214 1.945 1.303 1.944 1.402 1.945 1.513 1.945 1.642 1.944 1.792 1.945 1.97 1.945 2.195 1.944 2.48 1.945 2.876 1.945 3.483 1.945 4.627 1.944 10.55"/><path stroke="none" d="M101.66 9.986a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="23.487" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.355 10.477)">b</text><path stroke="none" d="M-51.985 9.986a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><g stroke="none" font-size="10"><text x="23.487" y="9.986" font-family="cmsy10" transform="translate(-92.424 10.477)">¡</text><text x="31.265" y="9.986" font-family="cmmi10" transform="translate(-92.424 10.477)">b</text></g><path stroke="none" d="M24.837-41.23a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><text x="23.487" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -54.748)">a</text><text x="23.487" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.278 -19.63)">D</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
