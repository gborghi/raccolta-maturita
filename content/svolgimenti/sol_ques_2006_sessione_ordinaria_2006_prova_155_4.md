

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_4|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 4]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Si deve dimostrare che l'equazione
$$\sin x = x - 1$$
ammette una e una sola soluzione reale $\alpha$, se ne deve dare una stima numerica e descrivere una procedura che ne consenta l'approssimazione con la precisione voluta.

Conviene studiare la funzione ausiliaria
$$g(x) = x - 1 - \sin x,$$
continua e derivabile su tutto $\mathbb{R}$: le radici dell'equazione data coincidono con gli zeri di $g$.

## Esistenza e unicità della radice

La derivata è
$$g'(x) = 1 - \cos x \ge 0 \quad \text{per ogni } x \in \mathbb{R},$$
poiché $\cos x \le 1$. L'uguaglianza $g'(x) = 0$ vale solo nei punti isolati $x = 2k\pi$ (con $k$ intero); di conseguenza $g$ è **strettamente crescente** su tutto $\mathbb{R}$. Una funzione strettamente crescente è iniettiva, quindi assume ogni valore al più una volta: l'equazione $g(x) = 0$ ha **al più una** soluzione.

Per l'esistenza si osservi che, essendo $-1 \le \sin x \le 1$, ogni eventuale soluzione soddisfa
$$x - 1 = \sin x \in [-1, 1] \;\Rightarrow\; x \in [0, 2],$$
sicché la radice va cercata nell'intervallo $[0,2]$. Calcoliamo $g$ agli estremi:
$$g(0) = 0 - 1 - \sin 0 = -1 < 0,$$
$$g(2) = 2 - 1 - \sin 2 = 1 - \sin 2 \approx 1 - 0{,}909 = 0{,}091 > 0.$$
La funzione $g$ è continua su $[0,2]$ e assume agli estremi valori di segno opposto: per il teorema degli zeri (Bolzano) esiste almeno un punto $\alpha \in (0,2)$ con $g(\alpha) = 0$.

Unendo esistenza e stretta monotonìa si conclude che $g$ ha **esattamente uno** zero: l'equazione $\sin x = x - 1$ ha una e una sola radice $\alpha$. Graficamente, ciò equivale a dire che la retta $y = x - 1$ e la sinusoide $y = \sin x$ si incontrano in un solo punto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="284.497" height="216.924" viewBox="-72 -72 213.373 162.693"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 30.472h200.192"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M126.242 28.072c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-16.587" y="30.472" stroke="none" font-family="cmmi10" font-size="10" transform="translate(148.642 2.153)">x</text><path fill="none" d="M-16.587 90.223V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-18.987-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-16.587" y="30.472" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -95.104)">y</text><path fill="none" d="M26.092 32.606v-4.268"/><text x="-16.587" y="30.472" stroke="none" font-family="cmr8" font-size="8" transform="translate(40.554 8.554)">1</text><path fill="none" d="M68.771 32.606v-4.268"/><text x="-16.587" y="30.472" stroke="none" font-family="cmr8" font-size="8" transform="translate(83.233 8.554)">2</text><path fill="none" d="M111.45 32.606v-4.268"/><text x="-16.587" y="30.472" stroke="none" font-family="cmr8" font-size="8" transform="translate(125.912 8.554)">3</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.802 70.249 1.94-.743 1.939-.825 1.94-.902 1.939-.981 1.939-1.054 1.94-1.128 1.939-1.2 1.94-1.265 1.938-1.332 1.94-1.394 1.94-1.454 1.939-1.512 1.939-1.564 1.94-1.615 1.939-1.662 1.94-1.706 1.938-1.746 1.94-1.782 1.94-1.815 1.939-1.845 1.939-1.87 1.94-1.891 1.939-1.909 1.939-1.922 1.94-1.932 1.939-1.937 1.94-1.938 1.938-1.937 1.94-1.93 1.94-1.92 1.939-1.906 1.939-1.887 1.94-1.866 1.939-1.84 1.939-1.808 1.94-1.777 1.939-1.738 1.94-1.698 1.938-1.655 1.94-1.605 1.94-1.556 1.939-1.5L15.59 1.26l1.94-1.383 1.939-1.32 1.94-1.255 1.938-1.185 1.94-1.114 1.94-1.042 1.939-.965 1.939-.89 1.94-.809 1.939-.728 1.939-.647 1.94-.562 1.939-.478 1.94-.392 1.938-.304 1.94-.219 1.94-.129 1.939-.043 1.939.047 1.94.135 1.939.22 1.94.31 1.938.396 1.94.482 1.94.566 1.939.65 1.939.733 1.94.813 1.939.893 1.939.97 1.94 1.043 1.939 1.12 1.94 1.188 1.938 1.257 1.94 1.324 1.94 1.385 1.939 1.447 1.939 1.503 1.94 1.558 1.939 1.608 1.939 1.656 1.94 1.7 1.939 1.74 1.94 1.779 1.939 1.81 1.939 1.84 1.94 1.868 1.939 1.887 1.939 1.908 1.94 1.92 1.939 1.93 1.94 1.938 1.938 1.938 1.94 1.937 1.94 1.931 1.939 1.922"/><path fill="none" stroke="red" stroke-width=".8" d="M-20.855 77.42 115.718-59.154"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-16.587" y="30.472" font-family="cmmi10" transform="translate(8.614 34.376)">y</text><text x="-8.548" y="30.472" font-family="cmr10" transform="translate(8.614 34.376)">=</text><text x="2.008" y="30.472" font-family="cmr10" transform="translate(8.614 34.376)">sin</text><text x="15.952" y="30.472" font-family="cmmi10" transform="translate(8.614 34.376)">x</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="10"><text x="-16.587" y="30.472" font-family="cmmi10" transform="translate(88.066 -42.563)">y</text><text x="-8.548" y="30.472" font-family="cmr10" transform="translate(88.066 -42.563)">=</text><text x="2.008" y="30.472" font-family="cmmi10" transform="translate(88.066 -42.563)">x</text><text x="9.945" y="30.472" font-family="cmsy10" transform="translate(88.066 -42.563)">¡</text><text x="19.945" y="30.472" font-family="cmr10" transform="translate(88.066 -42.563)">1</text></g></g><path stroke="none" d="M68.38-9.416a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="-16.587" y="30.472" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.1 -32.05)">®</text></g></svg>
</figure>

## Stima di $\alpha$

Con una calcolatrice si restringe progressivamente l'intervallo valutando il segno di $g$:
$$g(1{,}9) = 0{,}9 - \sin 1{,}9 \approx -0{,}046 < 0,$$
$$g(1{,}95) = 0{,}95 - \sin 1{,}95 \approx +0{,}021 > 0,$$
dunque $\alpha \in (1{,}9;\, 1{,}95)$. Affinando ancora:
$$g(1{,}93) \approx -0{,}006 < 0, \qquad g(1{,}935) \approx +0{,}001 > 0,$$
da cui la stima
$$\boxed{\;\alpha \approx 1{,}93\;}$$
(un valore più accurato è $\alpha \approx 1{,}9346$).

## Procedura di approssimazione (metodo di bisezione)

Poiché $g$ è continua e cambia segno, si può approssimare $\alpha$ con precisione arbitraria con il **metodo di bisezione**. Partendo da un intervallo $[a_0, b_0]$ con $g(a_0) < 0 < g(b_0)$ — per esempio $[a_0,b_0] = [1,2]$, dato che $g(1) = -\sin 1 \approx -0{,}841 < 0$ e $g(2) \approx 0{,}091 > 0$ — si ripete il passo:

1. si calcola il punto medio $c = \dfrac{a+b}{2}$ e il valore $g(c)$;
2. se $g(c) = 0$ si è trovata la radice; altrimenti si sostituisce con $c$ l'estremo in cui $g$ ha lo stesso segno di $g(c)$, mantenendo così un intervallo che contiene $\alpha$.

Ad ogni passo l'ampiezza dell'intervallo si dimezza: dopo $n$ iterazioni l'errore che si commette assumendo come valore di $\alpha$ il punto medio è minore di
$$\frac{b_0 - a_0}{2^{\,n+1}}.$$
Per ottenere una precisione $\varepsilon$ prefissata basta scegliere $n$ tale che $\dfrac{b_0 - a_0}{2^{\,n+1}} < \varepsilon$, e la successione dei punti medi converge ad $\alpha$.

In alternativa, sfruttando la derivabilità di $g$, si può usare il **metodo di Newton (delle tangenti)**, che converge più rapidamente:
$$x_{n+1} = x_n - \frac{g(x_n)}{g'(x_n)} = x_n - \frac{x_n - 1 - \sin x_n}{1 - \cos x_n},$$
partendo da un valore iniziale vicino ad $\alpha$ (ad esempio $x_0 = 2$); già poche iterazioni forniscono $\alpha \approx 1{,}9346$.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
