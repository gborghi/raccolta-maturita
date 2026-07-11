

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88_5|2003 Europa Suppletiva — Questionario — Quesito 5]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88|2003 Europa Suppletiva — Questionario]]

Si vuole provare che una qualsiasi curva di equazione
$$y = ax^3 + bx^2 + cx + d \qquad (a \neq 0)$$
possiede uno e un solo flesso e che tale flesso è il centro di simmetria della curva.

## a) Esistenza e unicità del flesso

La funzione è un polinomio, quindi è continua e derivabile infinite volte su tutto $\mathbb{R}$. Calcoliamo le prime due derivate:
$$y' = 3ax^2 + 2bx + c, \qquad y'' = 6ax + 2b.$$

La derivata seconda si annulla dove
$$6ax + 2b = 0 \quad\Rightarrow\quad x = -\frac{b}{3a}.$$

Poiché $a \neq 0$ (altrimenti la curva non sarebbe una cubica), questa equazione ha una e una sola soluzione. Inoltre $y'' = 6ax + 2b$ è una funzione lineare con coefficiente angolare $6a \neq 0$: essa cambia segno attraversando lo zero. Ad esempio, se $a > 0$ si ha
$$y'' > 0 \ \text{ per } \ x > -\frac{b}{3a}, \qquad y'' < 0 \ \text{ per } \ x < -\frac{b}{3a},$$
e viceversa se $a < 0$. In ogni caso la concavità cambia in corrispondenza di $x = -\dfrac{b}{3a}$: questo punto è quindi un punto di flesso, ed è l'unico.

La sua ordinata si ottiene sostituendo $x_F = -\dfrac{b}{3a}$ nell'equazione della curva:
$$y_F = a\left(-\frac{b}{3a}\right)^3 + b\left(-\frac{b}{3a}\right)^2 + c\left(-\frac{b}{3a}\right) + d = -\frac{b^3}{27a^2} + \frac{b^3}{9a^2} - \frac{bc}{3a} + d,$$
cioè, sommando i primi due termini,
$$y_F = \frac{2b^3}{27a^2} - \frac{bc}{3a} + d.$$

Il flesso ha dunque coordinate
$$F = \left(-\frac{b}{3a},\ \frac{2b^3}{27a^2} - \frac{bc}{3a} + d\right).$$

## b) Il flesso è centro di simmetria

Un punto $F=(x_F, y_F)$ è centro di simmetria della curva $y=f(x)$ se, per ogni $x$ del dominio, il punto simmetrico di $\big(x,\,f(x)\big)$ rispetto a $F$ appartiene ancora alla curva. Ponendo $x = x_F + t$, il simmetrico di $\big(x_F+t,\,f(x_F+t)\big)$ rispetto a $F$ è $\big(x_F - t,\ 2y_F - f(x_F+t)\big)$, e questo sta sulla curva se e solo se
$$f(x_F + t) + f(x_F - t) = 2\,f(x_F) \qquad \text{per ogni } t.$$

Verifichiamo tale identità. Posto $x_F = -\dfrac{b}{3a}$, sviluppiamo:
$$
\begin{aligned}
f(x_F+t) + f(x_F-t) &= a\big[(x_F+t)^3+(x_F-t)^3\big] + b\big[(x_F+t)^2+(x_F-t)^2\big] \\
&\quad + c\big[(x_F+t)+(x_F-t)\big] + 2d.
\end{aligned}
$$

Usando $(x_F\pm t)^3 = x_F^3 \pm 3x_F^2 t + 3x_F t^2 \pm t^3$ e $(x_F\pm t)^2 = x_F^2 \pm 2x_F t + t^2$, i termini con potenze dispari di $t$ si cancellano e resta:
$$f(x_F+t)+f(x_F-t) = 2\big(ax_F^3 + bx_F^2 + cx_F + d\big) + 2t^2\big(3a\,x_F + b\big).$$

Il primo addendo è $2f(x_F)=2y_F$. Il coefficiente di $t^2$ vale
$$3a\,x_F + b = 3a\left(-\frac{b}{3a}\right) + b = -b + b = 0.$$

Quindi il termine in $t^2$ scompare e si ottiene, per ogni $t$,
$$f(x_F+t) + f(x_F-t) = 2y_F.$$

Ciò prova che $F$ è centro di simmetria della cubica. In modo equivalente: traslando l'origine nel flesso con la sostituzione $x = t + x_F$, l'equazione diventa
$$y - y_F = a\,t^3 + \left(c - \frac{b^2}{3a}\right)t,$$
che è una funzione **dispari** di $t$ (il termine di secondo grado sparisce proprio per la scelta $x_F=-b/(3a)$): il suo grafico è simmetrico rispetto all'origine del nuovo sistema, cioè rispetto a $F$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="194.586" height="202.127" viewBox="-72 -72 145.939 151.595"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 9.986H60.688"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M58.808 7.586c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-5.491" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(70.112 2.153)">x</text><path fill="none" d="M-5.49 79.125v-137.88"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-7.89-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-5.491" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -74.617)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-56.705 61.2 1.736-14.926 1.736-13.562 1.736-12.246 1.736-10.976 1.736-9.755 1.736-8.583 1.736-7.458 1.736-6.38 1.736-5.35 1.736-4.37 1.736-3.436 1.736-2.55 1.736-1.713 1.736-.922 1.736-.18 1.736.513 1.736 1.16 1.736 1.759 1.736 2.31 1.736 2.811 1.736 3.267 1.736 3.674 1.736 4.033 1.737 4.344 1.736 4.608 1.736 4.823 1.736 4.99 1.736 5.11 1.736 5.183 1.736 5.207 1.736 5.182 1.736 5.11 1.736 4.991 1.736 4.824L4.056 37.3l1.736 4.344 1.736 4.034 1.736 3.674L11 52.62l1.736 2.812 1.736 2.31 1.736 1.76 1.736 1.161 1.736.515L21.416 61l1.736-.921 1.736-1.71 1.736-2.55 1.737-3.434 1.736-4.368 1.736-5.35 1.736-6.379 1.736-7.456 1.736-8.58 1.736-9.754L40.513-.477l1.736-12.243 1.736-13.56 1.736-14.924"/><path fill="red" stroke="none" d="M-3.51 9.986a1.98 1.98 0 1 0-3.96 0 1.98 1.98 0 0 0 3.96 0m-1.98 0"/><text x="-5.491" y="9.986" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -3.533)">F</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.90](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
