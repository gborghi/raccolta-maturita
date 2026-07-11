

**Problema:** [[Problemi/prob_2001_suppletiva_ordinamento_2001_problema2_27_1|2001 Suppletiva Ordinamento — Problema 2 — Problema 1]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_problema2_27|2001 Suppletiva Ordinamento — Problema 2]]

Una piramide retta di vertice $V$ ha per base il triangolo $ABC$, rettangolo in $A$, di area $24a^2$ (con $a$ lunghezza assegnata). Si sa che $\dfrac{AB}{BC}=\dfrac{3}{5}$ e che il piano della faccia $VAB$ forma con il piano della base un angolo $\varphi$ tale che $\operatorname{sen}\varphi=\dfrac{12}{13}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="198.427" height="173.105" viewBox="-72 -72 148.82 129.829"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 43.86H61.597L-26.606-4.51ZM-57.904 43.86l54.06-102.43M61.597 43.86-3.844-58.57M-26.606-4.51l22.762-54.06"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-3.844-58.57-18.07 28.21v15.65"/><path stroke="none" d="M-56.404 43.86a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m119.501 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M-25.106-4.51a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m22.762-54.06a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M-16.87 28.21a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m0 15.65a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><text x="-57.904" y="43.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="43.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(123.034 10.366)">B</text><text x="-57.904" y="43.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.831 -51.903)">C</text><text x="-57.904" y="43.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(50.032 -105.963)">V</text><text x="-57.904" y="43.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(43.367 -5.283)">O</text><text x="-57.904" y="43.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(35.271 10.366)">H</text></g></svg>
</figure>

## a)

Posto $BC=\ell$, dal rapporto $\dfrac{AB}{BC}=\dfrac{3}{5}$ segue $AB=\dfrac{3}{5}\ell$. Per il teorema di Pitagora, essendo il triangolo rettangolo in $A$:

$$AC=\sqrt{\ell^2-\frac{9}{25}\ell^2}=\frac{4}{5}\ell.$$

L'area del triangolo è quindi

$$\frac{AB\cdot AC}{2}=\frac{1}{2}\cdot\frac{3}{5}\ell\cdot\frac{4}{5}\ell=\frac{6}{25}\ell^2=24a^2,$$

da cui $\ell^2=100a^2$, cioè $\ell=10a$. I lati misurano dunque

$$AB=6a,\qquad AC=8a,\qquad BC=10a.$$

Poiché la piramide è retta, il piede $O$ dell'altezza è il centro della circonferenza inscritta nel triangolo di base. Detto $p$ il semiperimetro, il raggio inscritto vale

$$r=\frac{\text{Area}}{p}=\frac{24a^2}{12a}=2a.$$

Il diedro tra la faccia $VAB$ e la base ha sezione normale nel triangolo rettangolo $VOH$, dove $H$ è il piede della perpendicolare da $O$ ad $AB$ e $OH=r=2a$. Essendo $\varphi$ acuto, da $\operatorname{sen}\varphi=\dfrac{12}{13}$ si ricava

$$\cos\varphi=\sqrt{1-\frac{144}{169}}=\frac{5}{13},\qquad \tan\varphi=\frac{\operatorname{sen}\varphi}{\cos\varphi}=\frac{12}{5}.$$

L'altezza della piramide è pertanto

$$VO=OH\cdot\tan\varphi=r\tan\varphi=2a\cdot\frac{12}{5}=\frac{24}{5}\,a.$$

## b)

La distanza di $C$ dal piano della faccia $VAB$ coincide con l'altezza della piramide relativa alla base triangolare $AVB$. Il volume della piramide è

$$\mathcal{V}=\frac{1}{3}\,\text{Area}(ABC)\cdot VO=\frac{1}{3}\cdot 24a^2\cdot\frac{24}{5}a=\frac{192}{5}\,a^3.$$

Per l'area di $AVB$ calcoliamo $VH=\dfrac{r}{\cos\varphi}=\dfrac{2a}{5/13}=\dfrac{26}{5}\,a$, quindi

$$\text{Area}(AVB)=\frac{AB\cdot VH}{2}=\frac{6a\cdot\frac{26}{5}a}{2}=\frac{78}{5}\,a^2.$$

La distanza cercata $h$ è allora

$$h=\frac{3\mathcal{V}}{\text{Area}(AVB)}=\frac{3\cdot\frac{192}{5}a^3}{\frac{78}{5}a^2}=\frac{96}{13}\,a.$$

## c)

Sia $x$ la distanza del piano $\alpha$ dalla base, con $0<x<\dfrac{24}{5}a$. La distanza di $\alpha$ dal vertice $V$ è $\dfrac{24}{5}a-x$. Detto $EFG$ il triangolo sezione, per la similitudine tra sezioni parallele si ha

$$\text{Area}(ABC):\text{Area}(EFG)=VO^2:VK^2,$$

dove $VK=\dfrac{24}{5}a-x$. Dunque

$$\text{Area}(EFG)=24a^2\cdot\frac{\left(\frac{24}{5}a-x\right)^2}{\left(\frac{24}{5}a\right)^2}=\frac{25}{24}\left(\frac{24}{5}a-x\right)^2.$$

Il volume del prisma retto, avente per base $EFG$ e altezza $x$, è

$$V_p=\text{Area}(EFG)\cdot x=\frac{25}{24}\left(\frac{24}{5}a-x\right)^2\cdot x.$$

Tale volume è massimo quando lo è il prodotto $x^1\cdot\left(\dfrac{24}{5}a-x\right)^2$. Trattandosi del prodotto di potenze con somma delle basi costante, il massimo si ha quando le basi sono proporzionali agli esponenti:

$$\frac{x}{1}=\frac{\frac{24}{5}a-x}{2}\;\Rightarrow\;\frac{24}{5}a-x=2x\;\Rightarrow\;x=\frac{8}{5}\,a.$$

Il volume del prisma è dunque massimo quando la sua altezza è $\dfrac{8}{5}\,a$.

## d)

La superficie totale del prisma è

$$S=2\,\text{Area}(EFG)+\text{Perim}(EFG)\cdot x.$$

Il triangolo $EFG$ è simile ad $ABC$ con rapporto $k=\dfrac{VK}{VO}=\dfrac{\frac{24}{5}a-x}{\frac{24}{5}a}=\dfrac{24a-5x}{24a}$, quindi il perimetro della sezione vale

$$\text{Perim}(EFG)=k\cdot\text{Perim}(ABC)=\frac{24a-5x}{24a}\cdot 24a=24a-5x.$$

Pertanto

$$S(x)=\frac{25}{12}\left(\frac{24}{5}a-x\right)^2+(24a-5x)\,x=\frac{1}{12}(24a-5x)^2+x(24a-5x).$$

Sviluppando e semplificando si ottiene

$$S(x)=48a^2+4ax-\frac{35}{12}x^2.$$

Derivando: $S'(x)=4a-\dfrac{35}{6}x$, che si annulla per $x=\dfrac{24}{35}a$ (e $S'(x)\ge 0$ per $x\le\dfrac{24}{35}a$). Quindi $S$ è crescente per $0<x<\dfrac{24}{35}a$ e decrescente oltre: l'area totale è massima per $x=\dfrac{24}{35}a$.

Poiché $\dfrac{24}{35}a\neq\dfrac{8}{5}a$, il prisma di volume massimo **non** ha anche la massima area totale.

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/geometria #cluster/geometria
