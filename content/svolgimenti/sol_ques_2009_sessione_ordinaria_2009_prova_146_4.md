

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_4|2009 Sessione Ordinaria PNI — Prova — Quesito 4]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Si deve stabilire se sia vera o falsa l'affermazione: *"Esiste solo un poliedro regolare le cui facce sono esagoni"*.

## Risposta

L'affermazione è **falsa**. Non esiste **alcun** poliedro regolare le cui facce siano esagoni: non ce n'è uno solo, non ce n'è nessuno.

## Perché nessun poliedro regolare può avere facce esagonali

Un *poliedro regolare* (solido platonico) è un poliedro convesso le cui facce sono poligoni regolari fra loro congruenti e nel quale in ogni vertice concorre lo stesso numero di facce. Perché un vertice sia effettivamente lo spigolo di un angoloide (cioè "sporga" formando un vero vertice solido) devono valere due condizioni:

- in ogni vertice devono concorrere **almeno $3$ facce**;
- la somma degli angoli delle facce che concorrono nel vertice deve essere **strettamente minore di $360^\circ$**.

Quest'ultima è la condizione di esistenza di un angoloide convesso: se la somma degli angoli fosse esattamente $360^\circ$ i poligoni giacerebbero appiattiti nel piano (una tassellazione), e se superasse $360^\circ$ non potrebbero nemmeno disporsi attorno al vertice.

L'angolo interno di un poligono regolare di $n$ lati vale
$$\alpha_n = \frac{(n-2)\cdot 180^\circ}{n}.$$
Per l'esagono regolare $(n=6)$:
$$\alpha_6 = \frac{(6-2)\cdot 180^\circ}{6} = \frac{4\cdot 180^\circ}{6} = 120^\circ.$$

Facendo concorrere il numero minimo di facce, cioè $3$ esagoni, in un vertice si ottiene
$$3\cdot 120^\circ = 360^\circ,$$
che **non** è minore di $360^\circ$: i tre esagoni si dispongono esattamente attorno al punto ricoprendo il piano senza lasciare "difetto angolare", quindi non si chiudono a formare un angoloide. Con $4$ o più esagoni la somma supererebbe $360^\circ$, situazione ancora impossibile. Dunque gli esagoni regolari non possono in alcun modo essere le facce di un poliedro regolare.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="248.333" height="200.588" viewBox="-72 -72 186.249 150.441"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#ebebff" stroke-width=".8" d="m82.455-54.087-30.8-17.783-30.8 17.783v35.566l30.8 17.783 30.8-17.783Z"/><path fill="#ebffeb" stroke-width=".8" d="m20.855-54.087-30.8-17.783-30.8 17.783v35.566l30.8 17.783 30.8-17.783Z"/><path fill="#fff0e1" stroke-width=".8" d="m51.655-.738-30.8-17.783-30.8 17.783v35.566l30.8 17.783 30.8-17.783Z"/><path stroke="none" d="M22.855-18.521a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="20.855" y="-18.521" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.311 -5.311)">O</text><g stroke="none"><text x="20.855" y="-18.521" font-family="cmr10" font-size="10" transform="translate(6.206 -6.515)">120</text><text x="35.855" y="-22.15" font-family="cmsy7" font-size="7" transform="translate(6.206 -6.515)">±</text></g><g stroke="none"><text x="20.855" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-25.803 -6.515)">120</text><text x="35.855" y="-22.15" font-family="cmsy7" font-size="7" transform="translate(-25.803 -6.515)">±</text></g><g stroke="none"><text x="20.855" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-9.799 21.226)">120</text><text x="35.855" y="-22.15" font-family="cmsy7" font-size="7" transform="translate(-9.799 21.226)">±</text></g><g stroke="none"><text x="20.855" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">3</text><text x="28.077" y="-18.521" font-family="cmsy10" font-size="10" transform="translate(-89.792 91.415)">£</text><text x="38.077" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">120</text><text x="53.077" y="-22.15" font-family="cmsy7" font-size="7" transform="translate(-89.792 91.415)">±</text><text x="60.452" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">=</text><text x="71.007" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">360</text><text x="86.007" y="-22.15" font-family="cmsy7" font-size="7" transform="translate(-89.792 91.415)">±</text><text x="90.605" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">:</text><text x="97.827" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">il</text><text x="106.716" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">piano</text><text x="133.938" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">viene</text><text x="159.771" y="-18.521" font-family="cmr10" font-size="10" transform="translate(-89.792 91.415)">tassellato</text></g></g></svg>
</figure>

## Perché esistono soltanto i cinque solidi platonici

Lo stesso criterio spiega quali poligoni regolari possono fare da facce e conferma che i poliedri regolari sono in tutto cinque. Basta imporre che almeno $3$ facce diano somma degli angoli $< 360^\circ$:

- **Triangoli equilateri** $(\alpha_3 = 60^\circ)$: si può avere $3$, $4$ o $5$ triangoli per vertice, poiché $3\cdot 60^\circ,\ 4\cdot 60^\circ,\ 5\cdot 60^\circ$ sono tutti $< 360^\circ$, mentre $6\cdot 60^\circ = 360^\circ$ no. Si ottengono **tetraedro, ottaedro, icosaedro**.
- **Quadrati** $(\alpha_4 = 90^\circ)$: solo $3$ per vertice, perché $3\cdot 90^\circ = 270^\circ < 360^\circ$ ma $4\cdot 90^\circ = 360^\circ$. Si ottiene il **cubo**.
- **Pentagoni regolari** $(\alpha_5 = 108^\circ)$: solo $3$ per vertice, perché $3\cdot 108^\circ = 324^\circ < 360^\circ$ ma $4\cdot 108^\circ = 432^\circ > 360^\circ$. Si ottiene il **dodecaedro**.
- **Esagoni** $(\alpha_6 = 120^\circ)$ e ogni poligono con più lati: già $3$ facce danno $\ge 360^\circ$, quindi **nessun** poliedro regolare.

Si esauriscono così i **cinque** solidi platonici, nessuno dei quali ha facce esagonali. L'affermazione del quesito è pertanto falsa.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
