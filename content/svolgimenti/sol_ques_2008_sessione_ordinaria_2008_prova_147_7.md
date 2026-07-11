

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_7|2008 Ordinaria — Prova (PNI Informatica) — Quesito 7]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

**Testo.** Perché si parla di geometria "non" euclidea? Che cosa e come viene negato della geometria euclidea? Si illustri la questione con esempi adeguati.

## Il quinto postulato di Euclide

La geometria esposta da Euclide negli *Elementi* è costruita a partire da cinque postulati. I primi quattro (per due punti passa una retta, un segmento si può prolungare, si può tracciare una circonferenza di dato centro e raggio, tutti gli angoli retti sono uguali) hanno un carattere semplice e immediatamente evidente. Il quinto, il cosiddetto **postulato delle parallele**, è invece più complesso; nella formulazione equivalente di Playfair afferma:

> Data una retta $r$ e un punto $P$ non appartenente a $r$, esiste **una e una sola** retta passante per $P$ e parallela a $r$.

Per la sua minore evidenza, per oltre due millenni molti matematici (tra cui Saccheri e Legendre) tentarono di **dimostrarlo** a partire dagli altri quattro, ritenendolo un teorema nascosto. Tutti i tentativi fallirono.

## Che cosa viene negato e come

La svolta si ha nell'Ottocento con Gauss, Lobachevskij e Bolyai (e poi Riemann): invece di dimostrare il quinto postulato, essi lo **negano**, mantenendo i primi quattro, e costruiscono geometrie coerenti (prive di contraddizioni interne). Ciò dimostra che il quinto postulato è **indipendente** dagli altri: non è un teorema, ma una scelta.

L'affermazione "per $P$ passa **esattamente una** parallela a $r$" si può negare in due modi, che danno origine a due geometrie non euclidee:

- **Più di una parallela** (anzi, infinite): si ottiene la **geometria iperbolica** di Lobachevskij–Bolyai.
- **Nessuna parallela**: si ottiene la **geometria ellittica** di Riemann.

È importante sottolineare che *non* viene negato tutto l'impianto euclideo: si conservano i primi quattro postulati e si cambia soltanto il quinto (nella geometria ellittica va rivista anche l'illimitatezza della retta).

La conseguenza più visibile riguarda la **somma degli angoli interni di un triangolo**, che in geometria euclidea vale sempre $\pi$ (cioè $180°$):

$$\alpha+\beta+\gamma=\pi \quad(\text{euclidea}), \qquad \alpha+\beta+\gamma<\pi \quad(\text{iperbolica}), \qquad \alpha+\beta+\gamma>\pi \quad(\text{ellittica}).$$

Lo scarto rispetto a $\pi$ (difetto nel caso iperbolico, eccesso in quello ellittico) è proporzionale all'area del triangolo.

## Esempi

**Geometria ellittica — la sfera.** Un modello concreto è la superficie di una sfera, in cui il ruolo delle "rette" (le geodetiche, cioè i cammini di lunghezza minima) è svolto dai **cerchi massimi**. Due cerchi massimi si intersecano sempre in due punti diametralmente opposti: **non esistono parallele**. Un esempio numerico chiaro si ottiene sulla Terra prendendo un triangolo con un vertice al Polo Nord e gli altri due sull'equatore, distanti tra loro un quarto di equatore: i due lati che scendono dal polo incontrano l'equatore ad angolo retto e formano tra loro un angolo retto al polo, per cui

$$\alpha+\beta+\gamma = 90°+90°+90° = 270° > 180°.$$

**Geometria iperbolica — il disco di Poincaré.** Un modello è la pseudosfera di Beltrami, o più comodamente il disco di Poincaré: i punti sono quelli interni a un cerchio, le "rette" sono gli archi di circonferenza ortogonali al bordo. Data una retta e un punto esterno, per quel punto passano **infinite** rette che non la incontrano. In questo modello i triangoli hanno lati che si incurvano "verso l'interno" e somma degli angoli minore di $\pi$:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="213.513" height="213.513" viewBox="-72 -72 160.135 160.135"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" stroke-width=".8" d="M87.465 7.797c0-44-35.668-79.667-79.668-79.667S-71.87-36.202-71.87 7.797s35.668 79.668 79.667 79.668S87.465 51.797 87.465 7.797Zm-79.668 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-47.976 43.651c55.773-21.912 55.773-21.912 111.547 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M63.57 43.651C25.723-.169 25.723-.169 7.798-53.952M7.797-53.952C-10.128-.169-10.128-.169-47.976 43.651"/><path stroke="none" d="M-46.296 43.651a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="7.797" y="7.797" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-66.806 46.22)">A</text><path stroke="none" d="M65.25 43.651a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="7.797" y="7.797" stroke="none" font-family="cmmi10" font-size="10" transform="translate(59.306 46.22)">B</text><path stroke="none" d="M9.477-53.952a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="7.797" y="7.797" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 -65.282)">C</text><g stroke="none" font-size="10"><text x="7.797" y="7.797" font-family="cmmi10" transform="translate(-31.094 -11.442)">®</text><text x="16.454" y="7.797" font-family="cmr10" transform="translate(-31.094 -11.442)">+</text><text x="26.453" y="7.797" font-family="cmmi10" transform="translate(-31.094 -11.442)">¯</text><text x="34.86" y="7.797" font-family="cmr10" transform="translate(-31.094 -11.442)">+</text><text x="44.86" y="7.797" font-family="cmmi10" transform="translate(-31.094 -11.442)">°</text><text x="53.37" y="7.797" font-family="cmmi10" transform="translate(-31.094 -11.442)">&lt;</text><text x="63.926" y="7.797" font-family="cmmi10" transform="translate(-31.094 -11.442)">¼</text></g></g></svg>
</figure>

## Osservazione conclusiva

La scoperta delle geometrie non euclidee ha una portata che va oltre la matematica: mostra che la geometria euclidea non è l'unica logicamente possibile né una "verità assoluta" sullo spazio, ma un sistema tra i tanti, scelto in base ai suoi assiomi. Da questa idea nasce la geometria differenziale di Riemann, che fornirà a Einstein il linguaggio della relatività generale, in cui lo spazio-tempo fisico è effettivamente curvo.

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
