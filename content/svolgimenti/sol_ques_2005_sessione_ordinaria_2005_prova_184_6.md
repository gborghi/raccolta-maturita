

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_6|2005 Ordinaria PNI — Prova — Quesito 6]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Le due rette hanno equazioni
$$r:\ y = 2x - 4, \qquad s:\ y = 2x - 1.$$

Entrambe hanno coefficiente angolare $2$, quindi sono **parallele**. Un'omotetia di centro $O$ trasforma ogni retta in una retta ad essa parallela, dunque è lecito cercare $\sigma$ che porti $r$ in $s$.

Un'omotetia di centro l'origine $O$ e rapporto $k$ agisce così:
$$\sigma:\quad x' = kx, \qquad y' = ky,$$
da cui, invertendo, $x = \dfrac{x'}{k}$ e $y = \dfrac{y'}{k}$.

Sostituendo nell'equazione di $r$ le coordinate del generico punto e delle sue immagini, si ottiene l'equazione della retta immagine $\sigma(r)$:
$$\frac{y'}{k} = 2\cdot\frac{x'}{k} - 4 \ \Rightarrow\ y' = 2x' - 4k.$$

Imponiamo che $\sigma(r)$ coincida con $s: y = 2x - 1$. I coefficienti angolari sono già uguali; basta uguagliare i termini noti:
$$-4k = -1 \ \Rightarrow\ k = \frac{1}{4}.$$

L'omotetia cercata è dunque quella di centro $O$ e rapporto $k = \dfrac{1}{4}$:
$$\sigma:\quad x' = \frac{1}{4}\,x, \qquad y' = \frac{1}{4}\,y.$$

**Verifica.** La distanza di $O$ da $r$ è $\dfrac{|-4|}{\sqrt{5}} = \dfrac{4}{\sqrt5}$, quella di $O$ da $s$ è $\dfrac{|-1|}{\sqrt5} = \dfrac{1}{\sqrt5}$. Il loro rapporto vale $\dfrac{1}{4}$ e le due rette stanno dalla stessa parte rispetto a $O$: coerentemente il rapporto di omotetia è positivo e uguale a $\dfrac{1}{4}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="209.929" height="293.934" viewBox="-72 -72 157.447 220.451"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 44.413H70.931"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M69.051 42.013c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-12.32" y="44.413" stroke="none" font-family="cmmi10" font-size="10" transform="translate(87.184 2.153)">x</text><path fill="none" d="M-12.32 147.98V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-14.72-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-12.32" y="44.413" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -109.045)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-22.278 143.998 3.983-7.967 3.984-7.967 3.983-7.966 3.983-7.967 3.984-7.967 3.983-7.966 3.983-7.967 3.984-7.966 3.983-7.967 3.983-7.967 3.983-7.966 3.984-7.967 3.983-7.966 3.983-7.967 3.984-7.967 3.983-7.966 3.983-7.967L49.422.6l3.983-7.967 3.983-7.967 3.983-7.966 3.984-7.967 3.983-7.967 3.983-7.966"/><text x="-12.32" y="44.413" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(89.374 -89.462)">r</text></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-52.153 143.998 4.15-8.299 4.148-8.298 4.15-8.299 4.149-8.298 4.149-8.299 4.15-8.298 4.149-8.299 4.149-8.298 4.149-8.299 4.15-8.298 4.148-8.299 4.15-8.298 4.149-8.299 4.15-8.298 4.148-8.299 4.15-8.298 4.149-8.299 4.15-8.298 4.148-8.299 4.15-8.298 4.149-8.298 4.15-8.299 4.148-8.298 4.15-8.299"/><text x="-12.32" y="44.413" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(63.481 -103.312)">s</text></g><path stroke="none" d="M-10.92 44.413a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><text x="-12.32" y="44.413" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><g stroke="none"><text x="-12.32" y="44.413" font-family="cmmi10" font-size="10" transform="translate(27.214 12.458)">k</text><text x="-4.021" y="44.413" font-family="cmr10" font-size="10" transform="translate(27.214 12.458)">=</text><text x="7.735" y="40.476" font-family="cmr7" font-size="7" transform="translate(27.214 12.458)">1</text><path d="M34.949 54.171h3.986v.4h-3.986z"/><text x="7.735" y="47.862" font-family="cmr7" font-size="7" transform="translate(27.214 12.458)">4</text></g></g></svg>
</figure>

Osserviamo infine che, se si vuole l'omotetia che porta $s$ in $r$, essa è l'inversa di $\sigma$ e ha rapporto $k' = \dfrac{1}{k} = 4$.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
