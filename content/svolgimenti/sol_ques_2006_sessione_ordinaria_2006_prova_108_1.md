

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_108_1|2006 Sessione Ordinaria PNI — Prova (p.108) — Quesito 1]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

È assegnato un pentagono regolare $ABCDE$ di lato $L$. Recidendo cinque triangoli congruenti in corrispondenza dei cinque vertici si ottiene un decagono regolare: se ne calcoli il lato $s$, lasciando indicate le funzioni goniometriche degli angoli coinvolti.

## Impostazione

Da ciascun vertice del pentagono si asporta un triangolo congruente. In corrispondenza del vertice $D$ si taglia il triangolo $DNZ$, con $N$ sul lato $DE$ e $Z$ sul lato $DC$; poiché i cinque tagli sono congruenti, il triangolo è isoscele con

$$DN = DZ = x.$$

Il segmento $\overline{NZ}$ è uno dei lati del decagono, mentre il segmento centrale che rimane su ciascun lato del pentagono è anch'esso un lato del decagono: si hanno così $5$ lati "di taglio" e $5$ lati "residui", in tutto i $10$ lati richiesti.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="346.693" height="148.066" viewBox="-72 -72 260.02 111.05"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.446 25.08 57.788-58.57l115.234 83.65"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M11.752-25.11h92.072"/><path stroke="none" d="M59.988-58.57a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0M106.024-25.11a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0M13.952000000000002-25.11a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.278 -3.533)">D</text><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.57 36.877)">Z</text><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-58.694 36.877)">N</text><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(118.767 94.017)">C</text><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-126.725 94.017)">E</text><g stroke="none"><text x="57.788" y="-58.571" font-family="cmr10" font-size="10" transform="translate(-9.799 18.419)">108</text><text x="72.788" y="-62.2" font-family="cmsy7" font-size="7" transform="translate(-9.799 18.419)">±</text></g><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 41.413)">s</text><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(25.595 14.103)">x</text><text x="57.788" y="-58.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-31.31 14.103)">x</text></g></svg>
</figure>

## Gli angoli in gioco

La somma degli angoli interni di un pentagono è $3$ angoli piatti, quindi ciascun angolo interno vale

$$\hat D = \frac{3\cdot 180^\circ}{5} = 108^\circ.$$

Nel triangolo isoscele $DNZ$ l'angolo al vertice è $\hat D = 108^\circ$, perciò i due angoli alla base misurano

$$\frac{180^\circ - 108^\circ}{2} = 36^\circ.$$

Si verifica la regolarità del decagono: in un vertice residuo come $Z$ l'angolo interno del decagono è $180^\circ - 36^\circ = 144^\circ$, che è proprio l'angolo interno del decagono regolare.

## Relazione tra $s$, $x$ e $L$

Nel triangolo isoscele $DNZ$, tracciando l'altezza relativa alla base $\overline{NZ}$ dal vertice $D$, l'angolo al vertice si divide in due parti da $54^\circ$ e la base si dimezza; quindi

$$\frac{s}{2} = x\,\sin 54^\circ \quad\Rightarrow\quad s = 2x\,\cos 36^\circ,$$

avendo usato $\sin 54^\circ = \cos 36^\circ$.

Su ciascun lato del pentagono la lunghezza $L$ si ripartisce nei due tratti asportati (lunghi $x$ ciascuno, uno per ogni estremo) e nel tratto centrale residuo, lungo $s$:

$$L = 2x + s.$$

## Calcolo del lato

Ricavando $2x = \dfrac{s}{\cos 36^\circ}$ dalla prima relazione e sostituendo nella seconda:

$$L = \frac{s}{\cos 36^\circ} + s = s\,\frac{1 + \cos 36^\circ}{\cos 36^\circ}.$$

Quindi, lasciando indicate le funzioni goniometriche:

$$\boxed{\,s = \frac{L\,\cos 36^\circ}{1 + \cos 36^\circ} = \frac{L\,\sin 54^\circ}{1 + \sin 54^\circ}\,}.$$

Numericamente, poiché $\cos 36^\circ = \dfrac{1+\sqrt5}{4}$, si ottiene la forma esatta

$$s = \frac{L}{\sqrt5} = \frac{\sqrt5}{5}\,L \approx 0{,}447\,L.$$

*Fonte:* [📄 PDF p.120](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
