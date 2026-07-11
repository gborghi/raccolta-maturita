

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_9|2008 Ordinamento Straordinaria — Questionario — Quesito 9]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si determini il campo di esistenza della funzione
$$y=\log\!\left(\sqrt{x^2-2x}-x+4\right).$$

La funzione è definita quando sono soddisfatte contemporaneamente due condizioni: il radicando della radice quadrata deve essere non negativo e l'argomento del logaritmo deve essere strettamente positivo. Si ottiene quindi il sistema
$$\begin{cases} x^2-2x\ge 0 \\[4pt] \sqrt{x^2-2x}-x+4>0. \end{cases}$$

**Prima condizione.** Studiamo la disequazione $x^2-2x\ge 0$, cioè $x(x-2)\ge 0$:
$$x\le 0 \quad\text{oppure}\quad x\ge 2.$$

**Seconda condizione.** Riscriviamo la disequazione irrazionale nella forma
$$\sqrt{x^2-2x}>x-4.$$
Essa equivale all'unione dei due sistemi seguenti:
$$\begin{cases} x^2-2x\ge 0 \\ x-4<0 \end{cases} \qquad \cup \qquad \begin{cases} x-4\ge 0 \\ x^2-2x>(x-4)^2. \end{cases}$$

Nel primo sistema, quando il secondo membro $x-4$ è negativo, la disequazione è verificata per ogni $x$ del dominio della radice: da $x^2-2x\ge 0$ e $x<4$ si ricava
$$x\le 0 \quad\text{oppure}\quad 2\le x<4.$$

Nel secondo sistema, con $x\ge 4$, si può elevare al quadrato:
$$x^2-2x>(x-4)^2=x^2-8x+16 \;\Rightarrow\; 6x>16 \;\Rightarrow\; x>\frac{8}{3}.$$
Insieme alla condizione $x\ge 4$ questo dà
$$x\ge 4.$$

Unendo le soluzioni dei due sistemi otteniamo la soluzione della seconda condizione:
$$x\le 0 \quad\text{oppure}\quad x\ge 2.$$

**Intersezione.** Confrontando le due condizioni (che coincidono), il campo di esistenza della funzione è
$$-\infty<x\le 0 \quad\text{oppure}\quad 2\le x<+\infty,$$
cioè $D=(-\infty,\,0]\cup[2,\,+\infty)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="359.008" height="46.792" viewBox="-72 -72 269.256 35.094"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.67-54.754h255.675"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M182.125-57.154c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="42.141" y="-54.754" stroke="none" font-family="cmmi10" font-size="10" transform="translate(145.797 2.153)">x</text><text x="42.141" y="-54.754" stroke="none" font-family="cmr10" font-size="10" transform="translate(-59.405 14.245)">0</text><text x="42.141" y="-54.754" stroke="none" font-family="cmr10" font-size="10" transform="translate(54.405 14.245)">2</text><path stroke="none" d="M-12.265-54.754a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M101.546-54.754a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m-2.5 0"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-71.67-54.754h56.905M99.046-54.754h85.359"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="42.141" y="-54.754" font-family="cmmi10" transform="translate(-97.382 -7.738)">x</text><text x="50.634" y="-54.754" font-family="cmsy10" transform="translate(-97.382 -7.738)">∙</text><text x="61.189" y="-54.754" font-family="cmr10" transform="translate(-97.382 -7.738)">0</text></g></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="42.141" y="-54.754" font-family="cmmi10" transform="translate(87.56 -7.738)">x</text><text x="50.634" y="-54.754" font-family="cmsy10" transform="translate(87.56 -7.738)">¸</text><text x="61.189" y="-54.754" font-family="cmr10" transform="translate(87.56 -7.738)">2</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.111](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
