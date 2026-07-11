

**Quesito:** [[Quesiti/ques_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49_3|2004 Americhe australe Suppletiva — Problema 2 e Quesiti — Quesito 3]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49|2004 Americhe australe Suppletiva — Problema 2 e Quesiti]]

**Quesito.** Esiste una funzione $f(x)$ che presenta un massimo relativo nel punto $(1,\,2)$ e un minimo relativo nel punto $(-1,\,3)$? In caso affermativo, se ne può fornire un esempio?

## a) Esistenza

La risposta è affermativa. Il punto essenziale è che il massimo e il minimo richiesti sono *relativi* (cioè locali), non assoluti: essi descrivono il comportamento di $f$ soltanto in un intorno del punto considerato. Non c'è quindi alcun vincolo che imponga al valore di un massimo relativo di essere maggiore del valore di un minimo relativo, quando i due estremi cadono in punti distinti.

Nel nostro caso il massimo relativo vale $f(1)=2$ e il minimo relativo vale $f(-1)=3$: la disuguaglianza $2<3$ (valore del massimo minore del valore del minimo) è del tutto compatibile con la natura locale dei due estremi. È infatti sufficiente che risulti $f(x)\le 2$ in un intorno di $x=1$ e $f(x)\ge 3$ in un intorno di $x=-1$. I due intorni sono disgiunti e nulla impedisce che, passando dall'uno all'altro, la funzione superi un dislivello.

## b) Un esempio

Una funzione continua che soddisfa le richieste si costruisce facilmente come *spezzata*, congiungendo con segmenti di retta i punti

$$(-2,\,4),\quad (-1,\,3),\quad \left(-\tfrac{1}{2},\,\tfrac{7}{2}\right),\quad \left(\tfrac{1}{2},\,\tfrac{3}{2}\right),\quad (1,\,2),\quad (2,\,1).$$

In $x=-1$ la spezzata forma una "valle" (a sinistra scende, a destra sale): dunque $(-1,\,3)$ è un minimo relativo. In $x=1$ forma una "cresta" (a sinistra sale, a destra scende): dunque $(1,\,2)$ è un massimo relativo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="238.216" height="230.395" viewBox="-72 -72 178.662 172.796"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 84.818H93.41"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M91.53 82.418c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="9.305" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.038 2.153)">x</text><path fill="none" d="M9.305 94.207V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M6.905-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="9.305" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -149.45)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.29-40.375 31.297 31.298 15.65-15.649L24.954 37.87l15.649-15.649L71.902 53.52"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-21.993 84.818V-9.077H9.305M40.604 84.818V22.22H9.305"/><path stroke="none" d="M-20.232999999999997-9.077a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0M42.364 22.221a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="9.305" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(-51.498 -97.428)">min</text><text x="9.305" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(34.831 -66.13)">max</text><g stroke="none" font-size="10"><text x="9.305" y="84.818" font-family="cmsy10" transform="translate(-37.687 11.542)">¡</text><text x="17.083" y="84.818" font-family="cmr10" transform="translate(-37.687 11.542)">1</text></g><text x="9.305" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(28.798 11.542)">1</text><text x="9.305" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -90.672)">3</text><text x="9.305" y="84.818" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -59.374)">2</text></g></svg>
</figure>

Si osservi che, poiché il minimo si trova più in alto ($y=3$) del massimo ($y=2$) e alla sua sinistra, una funzione *continua* non può passare direttamente dall'uno all'altro rimanendo monotòna: uscendo dal minimo essa deve salire, mentre per raggiungere il massimo da sinistra deve nuovamente salire. È perciò inevitabile la comparsa, nel tratto intermedio, di un ulteriore massimo relativo e di un ulteriore minimo relativo (qui nei punti $\left(-\tfrac{1}{2},\,\tfrac{7}{2}\right)$ e $\left(\tfrac{1}{2},\,\tfrac{3}{2}\right)$). Ciò non contraddice la richiesta, che domanda soltanto la presenza degli estremi assegnati.

Esplicitando le equazioni delle rette che la compongono, la funzione si scrive:

$$f(x)=\begin{cases} -x+2 & x\le -1\\[2pt] x+4 & -1\le x\le -\tfrac{1}{2}\\[2pt] -2x+\tfrac{5}{2} & -\tfrac{1}{2}\le x\le \tfrac{1}{2}\\[2pt] x+1 & \tfrac{1}{2}\le x\le 1\\[2pt] -x+3 & x\ge 1 \end{cases}$$

Si verifica immediatamente che $f$ è continua nei punti di raccordo e che $f(-1)=3$ è un minimo relativo, mentre $f(1)=2$ è un massimo relativo, come richiesto.

*Fonte:* [📄 PDF p.53](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
