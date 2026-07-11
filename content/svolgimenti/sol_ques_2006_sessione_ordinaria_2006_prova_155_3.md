

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_3|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 3]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Sono dati una retta $r$ e due punti $A$ e $B$ esterni a $r$ ma situati nello stesso semipiano di origine $r$. Si cerca il punto $P$ su $r$ che rende minima la lunghezza del cammino spezzato $A \to P \to B$, cioè che minimizza la somma $\overline{AP} + \overline{PB}$.

## Il principio di riflessione

L'idea risolutiva consiste nel sostituire uno dei due segmenti con uno ad esso congruente, ma disposto in modo da poter applicare la disuguaglianza triangolare.

Sia $B'$ il simmetrico di $B$ rispetto alla retta $r$. Poiché $r$ è asse di simmetria del segmento $\overline{BB'}$, ogni suo punto è equidistante da $B$ e da $B'$; in particolare, per un qualunque punto $P$ appartenente a $r$ risulta
$$\overline{PB} = \overline{PB'}.$$

Di conseguenza la lunghezza del cammino si può riscrivere come
$$\overline{AP} + \overline{PB} = \overline{AP} + \overline{PB'}.$$

## Determinazione del minimo

Il secondo membro è la lunghezza della spezzata $A \to P \to B'$, i cui estremi $A$ e $B'$ sono fissi (si trovano ora in semipiani opposti rispetto a $r$). Per la disuguaglianza triangolare, per ogni punto $P$ del piano vale
$$\overline{AP} + \overline{PB'} \ge \overline{AB'},$$
e l'uguaglianza sussiste se e solo se $P$ appartiene al segmento $\overline{AB'}$, cioè quando $A$, $P$, $B'$ sono allineati.

Poiché $A$ e $B'$ stanno in semipiani opposti, il segmento $\overline{AB'}$ interseca effettivamente la retta $r$ in un punto, che è proprio il punto $P$ cercato. Il cammino più breve è dunque $A \to P \to B$ e la sua lunghezza minima vale
$$\overline{AP} + \overline{PB} = \overline{AB'}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="266.725" height="189.192" viewBox="-72 -72 200.044 141.894"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g stroke-width=".8"><path fill="none" d="M-71.87 12.561h187.788"/><text x="-63.334" y="12.561" stroke="none" font-family="cmmi10" font-size="10" transform="translate(182.985 2.153)">r</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-34.881-58.57 78.929 55.24M78.93-30.118V55.24"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-34.881-58.57 36.25 12.56l42.68-42.679"/><path stroke="none" d="M-32.881-58.57a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-63.334" y="12.561" stroke="none" font-family="cmmi10" font-size="10" transform="translate(17.42 -74.665)">A</text><path stroke="none" d="M80.93-30.118a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-63.334" y="12.561" stroke="none" font-family="cmmi10" font-size="10" transform="translate(145.797 -46.212)">B</text><path stroke="none" d="M80.93 55.24a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none"><text x="-63.334" y="12.561" font-family="cmmi10" font-size="10" transform="translate(145.797 53.73)">B</text><text x="-55.247" y="8.932" font-family="cmsy7" font-size="7" transform="translate(145.797 53.73)">0</text></g><path stroke="none" d="M38.25 12.561a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-63.334" y="12.561" stroke="none" font-family="cmmi10" font-size="10" transform="translate(95.68 10.366)">P</text></g></svg>
</figure>

## Proprietà angolare (riflessione)

Nella configurazione ottimale gli angoli che $\overline{PA}$ e $\overline{PB}$ formano con la retta $r$ sono uguali. Infatti l'angolo che $\overline{PB}$ forma con $r$ è congruente a quello formato da $\overline{PB'}$ (per la simmetria rispetto a $r$), e quest'ultimo è opposto al vertice rispetto all'angolo formato da $\overline{PA}$, essendo $A$, $P$, $B'$ allineati. Il punto ottimo è quindi quello per cui *l'angolo di incidenza è uguale all'angolo di riflessione*: è la stessa legge che governa la riflessione di un raggio luminoso su uno specchio.

## Verifica analitica

Si può confermare il risultato con le coordinate. Si prenda $r$ come asse $x$ e siano $A=(a,\,h_A)$ e $B=(b,\,h_B)$, con $h_A>0$ e $h_B>0$. Il simmetrico di $B$ è $B'=(b,\,-h_B)$ e la retta $AB'$ incontra l'asse $x$ nel punto
$$P=\left(a+(b-a)\,\frac{h_A}{h_A+h_B},\ 0\right).$$

La lunghezza minima del cammino è la distanza $\overline{AB'}$:
$$\overline{AB'}=\sqrt{(b-a)^2+(h_A+h_B)^2}.$$

In corrispondenza di questo $P$ i coefficienti angolari di $\overline{PA}$ e $\overline{PB}$ sono opposti, il che esprime analiticamente l'uguaglianza degli angoli di incidenza e riflessione già ottenuta per via sintetica.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
