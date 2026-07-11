

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_2|2004 Ordinamento Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Siano $\alpha$ e $\beta$ due piani perpendicolari. Si deve dimostrare che ogni retta perpendicolare a uno di essi è parallela all'altro oppure è contenuta in esso, e stabilire se vale l'implicazione inversa (ogni retta parallela a uno dei due piani è perpendicolare all'altro).

## a) Ogni retta perpendicolare a un piano è parallela all'altro

Poiché $\alpha$ e $\beta$ sono perpendicolari, possiamo fissare un riferimento cartesiano ortogonale nello spazio in modo che

$$\alpha:\ z=0,\qquad \beta:\ y=0.$$

I due piani si intersecano lungo l'asse $x$ (di equazioni $y=0,\ z=0$), e sono effettivamente perpendicolari, come richiesto.

Un vettore normale ad $\alpha$ è $\vec{n}_\alpha=(0,0,1)$. Una retta $r$ perpendicolare ad $\alpha$ ha come vettore direttore proprio la normale del piano, cioè $\vec{v}_r=(0,0,1)$; la sua equazione è quindi del tipo

$$r:\quad \begin{cases} x=a \\ y=b \\ z=c+t \end{cases}$$

Un vettore normale a $\beta$ è $\vec{n}_\beta=(0,1,0)$. Una retta è parallela a un piano (o vi è contenuta) se e solo se il suo vettore direttore è ortogonale al vettore normale del piano, cioè se il prodotto scalare è nullo:

$$\vec{v}_r\cdot\vec{n}_\beta=(0,0,1)\cdot(0,1,0)=0\cdot 0+0\cdot 1+1\cdot 0=0.$$

Dunque $r$ è parallela a $\beta$. Se inoltre il punto $(a,b,c)$ appartiene a $\beta$, cioè se $b=0$, la retta $r$ giace sul piano $\beta$. Questo dimostra la tesi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="293.048" height="182.631" viewBox="-72 -72 219.786 136.973"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#ffe1e1" stroke="none" d="M-37.927 13.288H132.79V-72.07H-37.927Z"/><path fill="none" stroke="#f66" d="M-37.927 13.288H132.79V-72.07H-37.927Z"/><path fill="#e1e1ff" stroke="none" d="M-37.927 13.288H132.79L98.646 64.503H-72.07Z"/><path fill="none" stroke="#66f" d="M-37.927 13.288H132.79L98.646 64.503H-72.07Z"/><path fill="none" stroke-width="1.2" d="M-37.927 13.288H132.79"/><text x="47.431" y="13.288" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.036 -2.969)">x</text><g fill="green" stroke="green" stroke-width=".8"><path fill="none" d="M30.36 38.896v-90.25"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M27.237-49.193c1.874-.468 2.758-1.51 3.123-2.56.364 1.05 1.249 2.092 3.122 2.56"/></g><path fill="green" stroke="none" d="M31.76 38.896a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><g fill="green" stroke="green"><text x="47.431" y="13.288" fill="green" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-9.508 -60.443)">r</text></g><g fill="#009" stroke="#009"><text x="47.431" y="13.288" fill="#009" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-97.111 41.986)">®</text></g><g fill="#b30000" stroke="#b30000"><text x="47.431" y="13.288" fill="#b30000" stroke="none" font-family="cmmi10" font-size="10" transform="translate(68.04 -74.322)">¯</text></g></g></svg>
</figure>

## b) L'implicazione inversa è falsa

No: non è vero che ogni retta parallela a uno dei due piani sia perpendicolare all'altro. Basta un controesempio. Consideriamo la retta

$$s:\quad \begin{cases} y=x \\ z=0 \end{cases}\ \Rightarrow\ \begin{cases} x=t \\ y=t \\ z=0 \end{cases}$$

il cui vettore direttore è $\vec{v}_s=(1,1,0)$.

Poiché

$$\vec{v}_s\cdot\vec{n}_\alpha=(1,1,0)\cdot(0,0,1)=0,$$

la retta $s$ è parallela ad $\alpha$ (in questo caso è addirittura contenuta in $\alpha$).

Perché $s$ fosse perpendicolare a $\beta$, il suo vettore direttore dovrebbe essere parallelo alla normale $\vec{n}_\beta=(0,1,0)$; ma $(1,1,0)$ non è proporzionale a $(0,1,0)$. Quindi $s$ non è perpendicolare a $\beta$.

Il controesempio prova che l'implicazione inversa non vale: la sola parallelismo a un piano non garantisce la perpendicolarità all'altro.

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
