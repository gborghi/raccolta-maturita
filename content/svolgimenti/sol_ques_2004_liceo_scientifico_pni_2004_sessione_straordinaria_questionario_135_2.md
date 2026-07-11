

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_2|2004 PNI Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Dimostrare che, se due piani sono perpendicolari, ogni retta perpendicolare a uno di essi è parallela all'altro oppure è contenuta in esso. Si può concludere che ogni retta parallela a uno dei due piani è perpendicolare all'altro? Fornire un'esauriente spiegazione della risposta.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="205.926" height="130.319" viewBox="-72 -72 154.445 97.739"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="M-71.67 24.87H42.141l39.834-42.68H-31.836Z"/><path fill="none" stroke="#66f" d="M-71.67 24.87H42.141l39.834-42.68H-31.836Z"/><g fill="#4c4cff" stroke="#4c4cff"><text x="-71.67" y="24.869" fill="#4d4dff" stroke="none" font-family="cmmi10" font-size="10" transform="translate(139.047 -14.919)">®</text></g><path fill="#ffe6e6" stroke="none" d="M-71.67 24.87H42.141v-85.36H-71.67Z"/><path fill="none" stroke="#f66" d="M-71.67 24.87H42.141v-85.36H-71.67Z"/><g fill="#ff4c4c" stroke="#ff4c4c"><text x="-71.67" y="24.869" fill="#ff4d4d" stroke="none" font-family="cmmi10" font-size="10" transform="translate(11.134 -71.477)">¯</text></g><path fill="none" stroke-width="1.2" d="M-71.67 24.87H42.141"/><path fill="none" stroke="green" stroke-width=".8" d="M13.688-.738V-71.87"/><path fill="green" stroke="none" d="M15.188-.738a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><g fill="green" stroke="green"><text x="-71.67" y="24.869" fill="green" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.5 -88.896)">r</text></g></g></svg>
</figure>

## a) Ogni retta perpendicolare a un piano è parallela all'altro o vi è contenuta

Siano $\alpha$ e $\beta$ due piani perpendicolari. Scegliamo un sistema di assi cartesiani ortogonali nello spazio in modo che i due piani coincidano rispettivamente con il piano $xy$ e con il piano $xz$; le loro equazioni sono quindi

$$\alpha:\ z=0, \qquad \beta:\ y=0.$$

I due piani hanno in comune l'asse $x$, di equazioni

$$\begin{cases} y=0 \\ z=0 \end{cases}$$

Consideriamo una generica retta $r$ perpendicolare a uno dei due piani, per esempio ad $\alpha$. Una terna di parametri direttori della normale ad $\alpha$ è $(0,0,1)$: la retta $r$ ha parametri direttori proporzionali a questi, quindi la sua equazione è del tipo

$$\begin{cases} x=a \\ y=b \\ z=c+t \end{cases}$$

Dobbiamo dimostrare che $r$ è parallela al piano $\beta$ oppure vi appartiene. Una terna di parametri direttori della normale a $\beta$ è $(0,1,0)$. La condizione di parallelismo fra retta e piano richiede che la direzione della retta sia ortogonale alla normale del piano, cioè che la somma dei prodotti dei corrispondenti parametri direttori sia nulla:

$$0\cdot 0 + 0\cdot 1 + 1\cdot 0 = 0.$$

Questo dimostra che $r$ è parallela a $\beta$. In particolare, se il punto $(a,b,c)$ appartiene a $\beta$, cioè se $b=0$, la retta $r$ giace sul piano $\beta$. Resta così provata la tesi.

## b) Non vale il viceversa

Non è vero, invece, che ogni retta parallela a uno dei due piani sia perpendicolare all'altro. Consideriamo per esempio la retta $s$ di equazioni

$$\begin{cases} y=x \\ z=0 \end{cases} \qquad\Rightarrow\qquad \begin{cases} x=t \\ y=t \\ z=0 \end{cases}$$

La retta $s$ è parallela ad $\alpha$: una terna di parametri direttori della normale ad $\alpha$ è $(0,0,1)$, mentre una terna di parametri direttori di $s$ è $(1,1,0)$; poiché

$$0\cdot 1 + 0\cdot 1 + 1\cdot 0 = 0,$$

la direzione di $s$ è ortogonale alla normale di $\alpha$ e quindi $s$ è parallela ad $\alpha$.

Tuttavia $s$ non è perpendicolare a $\beta$: una retta perpendicolare a $\beta$ dovrebbe avere parametri direttori proporzionali alla normale di $\beta$, cioè a $(0,1,0)$, mentre i parametri direttori di $s$ sono $(1,1,0)$, che non sono proporzionali a $(0,1,0)$.

Si conclude quindi che la risposta al secondo quesito è **negativa**: il parallelismo di una retta a uno dei due piani non implica la sua perpendicolarità all'altro.

*Fonte:* [📄 PDF p.136](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
