

**Problema:** [[Problemi/prob_2003_america_latina_2003_sessione_ordinaria_problema1_30_1|2003 America Latina Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_america_latina_2003_sessione_ordinaria_problema1_30|2003 America Latina Ordinaria — Problema 1]]

Nel piano cartesiano ortogonale $Oxy$ studiamo la curva $\Gamma$ di equazione
$$y=\frac{x^{3}}{(2x-1)^{2}}.$$

## a) Studio della funzione e grafico

**Dominio, simmetrie, segno.** La funzione è razionale fratta, quindi definita e continua per tutti i valori che non annullano il denominatore: $x\ne\frac12$. Non è né pari né dispari. Poiché il denominatore è sempre positivo (dove definito), il segno di $y$ coincide con quello di $x^{3}$: dunque $y>0$ per $x>0$ (con $x\ne\frac12$) e $y<0$ per $x<0$.

**Intersezioni con gli assi.** Ponendo $x=0$ si ha $y=0$: l'unica intersezione con gli assi è l'origine $O=(0,0)$.

**Limiti e asintoti.** Il grado del numeratore supera di $1$ quello del denominatore, quindi non c'è asintoto orizzontale ma un asintoto obliquo. Si ha
$$\lim_{x\to\pm\infty}\frac{x^{3}}{(2x-1)^{2}}=\lim_{x\to\pm\infty}\frac{x^{3}}{4x^{2}}=\pm\infty,\qquad
\lim_{x\to\frac12}\frac{x^{3}}{(2x-1)^{2}}=+\infty.$$
La retta $x=\frac12$ è quindi **asintoto verticale**. Per l'asintoto obliquo $y=mx+q$:
$$m=\lim_{x\to\pm\infty}\frac{x^{3}}{x(2x-1)^{2}}=\lim_{x\to\pm\infty}\frac{x^{2}}{(2x-1)^{2}}=\frac14,$$
$$q=\lim_{x\to\pm\infty}\left[\frac{x^{3}}{(2x-1)^{2}}-\frac{x}{4}\right]=\lim_{x\to\pm\infty}\frac{4x^{3}-x(2x-1)^{2}}{4(2x-1)^{2}}=\lim_{x\to\pm\infty}\frac{4x^{2}-x}{4(2x-1)^{2}}=\frac14.$$
L'asintoto obliquo è dunque
$$s:\ y=\frac14x+\frac14.$$

**Monotonia.** Derivando,
$$f'(x)=\frac{x^{2}(2x-3)}{(2x-1)^{3}},$$
che si annulla per $x=0$ e $x=\frac32$. Studiandone il segno si ottiene $f'(x)\ge 0$ per $x<\frac12$ e per $x\ge\frac32$. La funzione è quindi crescente su $\left(-\infty,\frac12\right)$ e su $\left(\frac32,+\infty\right)$, decrescente su $\left(\frac12,\frac32\right)$. In $x=0$ vi è un **flesso a tangente orizzontale** (la derivata non cambia segno per il fattore $x^{2}$); in $x=\frac32$ vi è un **minimo relativo** di ordinata
$$f\!\left(\tfrac32\right)=\frac{(3/2)^{3}}{(2\cdot\frac32-1)^{2}}=\frac{27/8}{4}=\frac{27}{32}.$$

**Concavità.** Derivando una seconda volta,
$$f''(x)=\frac{6x}{(2x-1)^{4}}\ge 0\ \text{se}\ x\ge 0.$$
Il grafico volge quindi la concavità verso l'alto per $x>0$ (nel dominio) e verso il basso per $x<0$; nell'origine si conferma il flesso a tangente orizzontale.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="344.816" height="250.63" viewBox="-72 -72 258.612 187.973"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 46.647h245.431"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M171.481 44.247c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="40.603" y="46.647" stroke="none" font-family="cmmi10" font-size="10" transform="translate(136.691 2.153)">x</text><path fill="none" d="M40.603 115.503v-168.61"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M38.203-51.227c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="40.603" y="46.647" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -105.632)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M57.674 115.503v-169.01"/><g fill="gray" stroke="gray"><g fill="gray" stroke="none"><text x="40.603" y="46.647" font-family="cmmi10" font-size="10" transform="translate(4.354 -107.135)">x</text><text x="49.096" y="46.647" font-family="cmr10" font-size="10" transform="translate(4.354 -107.135)">=</text><text x="60.851" y="42.71" font-family="cmr7" font-size="7" transform="translate(4.354 -107.135)">1</text><path d="M65.205-63.188h3.986v.4h-3.986z"/><text x="60.851" y="50.095" font-family="cmr7" font-size="7" transform="translate(4.354 -107.135)">2</text></g></g><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="m-72.07 64.643 10.243-2.347 10.242-2.347 10.243-2.348 10.242-2.347 10.243-2.347 10.242-2.347 10.243-2.348L9.87 45.865l10.243-2.347 10.242-2.347 10.243-2.348 10.243-2.346 10.242-2.348 10.243-2.347 10.242-2.347 10.243-2.348 10.242-2.347 10.243-2.347 10.242-2.347 10.243-2.348 10.242-2.347 10.243-2.347 10.243-2.347 10.242-2.348"/><g fill="red" stroke="red"><text x="40.603" y="46.647" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(136.691 -36.187)">s</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-61.827 63.892 1.312-.283 1.312-.283 1.312-.284 1.311-.282 1.312-.283 1.312-.281 1.312-.282 1.312-.28 1.312-.282 1.311-.28 1.312-.28 1.312-.278 1.312-.28 1.312-.277 1.312-.278 1.311-.277 1.312-.276 1.312-.276 1.312-.275 1.312-.274 1.312-.274 1.311-.273 1.312-.272 1.312-.272 1.312-.27 1.312-.27 1.312-.27 1.312-.268 1.311-.267 1.312-.266 1.312-.265 1.312-.264 1.312-.262 1.312-.262 1.311-.26 1.312-.26 1.312-.256 1.312-.257 1.312-.254 1.312-.253 1.311-.251 1.312-.25 1.312-.247 1.312-.246 1.312-.243 1.312-.241 1.311-.238 1.312-.237 1.312-.234 1.312-.23 1.312-.228 1.312-.225 1.311-.221 1.312-.217 1.312-.214 1.312-.21 1.312-.204 1.312-.2 1.311-.196 1.312-.19 1.312-.183 1.312-.177 1.312-.171 1.312-.163 1.312-.155 1.311-.146 1.312-.138 1.312-.127 1.312-.116 1.312-.105 1.312-.093 1.311-.078 1.312-.066 1.312-.05 1.312-.038 1.312-.022 1.312-.01h2.623l1.312-.016 1.312-.056 1.312-.145 1.312-.327 1.311-.692 1.312-1.444 1.312-3.07 1.312-6.967 1.312-17.924 1.312-58.566M66.21-6.169l1.093 5.766 1.093 4.25 1.093 3.23 1.093 2.508 1.093 1.988 1.093 1.598 1.093 1.3 1.093 1.063 1.093.885 1.093.73 1.093.61 1.093.5 1.093.426 1.093.35 1.093.292 1.093.237 1.093.193 1.093.154 1.094.118 1.093.09 1.093.062 1.093.038 1.093.018h1.093l1.093-.019 1.093-.033 1.093-.048 1.093-.06 1.093-.072L99 19.923l1.093-.091 1.093-.1 1.093-.109 1.093-.116 1.093-.123 1.093-.13 1.093-.134 1.093-.14 1.093-.146 1.093-.15 1.093-.157 1.093-.158 1.093-.163 1.093-.167 1.093-.17 1.093-.174 1.093-.176 1.093-.18 1.093-.181 1.093-.185 1.093-.187 1.093-.189 1.093-.191 1.093-.193 1.093-.196 1.093-.197 1.093-.2 1.093-.2 1.093-.202 1.094-.204 1.093-.205 1.093-.207 1.093-.207 1.093-.21 1.093-.21 1.093-.212 1.093-.212 1.093-.214 1.093-.215 1.093-.216 1.093-.216 1.093-.218 1.093-.218 1.093-.22 1.093-.22 1.093-.22 1.093-.222 1.093-.222 1.093-.223 1.093-.224 1.093-.224 1.093-.225 1.093-.225 1.093-.226 1.093-.226 1.093-.228 1.093-.227 1.093-.228 1.093-.229"/><path stroke="none" d="M42.523 46.647c0-.972-.86-1.76-1.92-1.76s-1.92.788-1.92 1.76.86 1.76 1.92 1.76 1.92-.788 1.92-1.76m-1.92 0"/><text x="40.603" y="46.647" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><path stroke="none" d="M93.737 20.231c0-.972-.86-1.76-1.92-1.76s-1.92.788-1.92 1.76.86 1.76 1.92 1.76 1.92-.788 1.92-1.76m-1.92 0"/><text x="40.603" y="46.647" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.748 -29.948)">m</text><g fill="#00f" stroke="#00f"><text x="40.603" y="46.647" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(95.89 -62.31)">¡</text></g></g></svg>
</figure>

## b) Triangolo $APQ$ di area massima

Il punto $A$, intersezione di $s$ con l'asse $y$, è $A=\left(0,\frac14\right)$. Il punto $B$, intersezione di $s$ con $\Gamma$, si trova risolvendo
$$\frac14x+\frac14=\frac{x^{3}}{(2x-1)^{2}}\ \Rightarrow\ (x+1)(2x-1)^{2}=4x^{3}\ \Rightarrow\ -3x+1=0\ \Rightarrow\ x=\frac13,$$
da cui $B=\left(\frac13,\frac13\right)$.

Preso $P=\left(x,\ \frac14x+\frac14\right)$ sul segmento $AB$ (con $0\le x\le\frac13$) e $Q=\left(x,\ \frac{x^{3}}{(2x-1)^{2}}\right)$, il segmento $PQ$ è verticale e misura
$$PQ=y_{P}-y_{Q}=\frac14x+\frac14-\frac{x^{3}}{(2x-1)^{2}}=\frac{1-3x}{4(2x-1)^{2}}.$$
Assunto $PQ$ come base, l'altezza relativa è la distanza di $A$ dalla retta verticale $PQ$, cioè $h=x$. L'area è
$$\text{Area}(APQ)=\frac12\cdot\frac{1-3x}{4(2x-1)^{2}}\cdot x=\frac{x(1-3x)}{8(2x-1)^{2}}.$$
Tale area è massima quando lo è la funzione
$$g(x)=\frac{x-3x^{2}}{(2x-1)^{2}},\qquad g'(x)=\frac{4x-1}{(2x-1)^{3}}.$$
Per $0\le x\le\frac13$ si ha $g'(x)\ge 0$ se $x\le\frac14$ e $g'(x)\le 0$ se $x\ge\frac14$: la funzione è quindi massima per $x=\frac14$. L'ordinata corrispondente è $\frac14\cdot\frac14+\frac14=\frac{5}{16}$, dunque
$$P=\left(\frac14,\ \frac{5}{16}\right).$$

## c) Area tra $\Gamma$ e la bisettrice $y=x$

Le intersezioni fra $\Gamma$ e la retta $y=x$ si ottengono da
$$x=\frac{x^{3}}{(2x-1)^{2}}\ \Rightarrow\ x\big[(2x-1)^{2}-x^{2}\big]=0\ \Rightarrow\ x=0,\quad 3x^{2}-4x+1=0\ \Rightarrow\ x=1,\ x=\frac13.$$
I punti che delimitano la regione finita sono $O=(0,0)$ e $\left(\frac13,\frac13\right)$ (la soluzione $x=1$ è oltre l'asintoto verticale). Su $\left[0,\frac13\right]$ la retta sta sopra la curva, quindi
$$\text{Area}=\int_{0}^{1/3}\left[x-\frac{x^{3}}{(2x-1)^{2}}\right]dx=\int_{0}^{1/3}\frac{3x^{3}-4x^{2}+x}{(2x-1)^{2}}\,dx.$$
Eseguendo la divisione,
$$\frac{3x^{3}-4x^{2}+x}{(2x-1)^{2}}=\frac34x-\frac14-\frac14\cdot\frac{3x-1}{(2x-1)^{2}}.$$
Per la parte polinomiale,
$$\int_{0}^{1/3}\left(\frac34x-\frac14\right)dx=\left[\frac38x^{2}-\frac14x\right]_{0}^{1/3}=\frac{1}{24}-\frac{1}{12}=-\frac{1}{24}.$$
Per la parte fratta, decomponendo $\dfrac{3x-1}{(2x-1)^{2}}=\dfrac{3/2}{2x-1}+\dfrac{1/2}{(2x-1)^{2}}$,
$$\int_{0}^{1/3}\frac{3x-1}{(2x-1)^{2}}\,dx=\left[\frac34\ln|2x-1|-\frac{1}{4(2x-1)}\right]_{0}^{1/3}=\left(-\frac34\ln 3+\frac34\right)-\frac14=-\frac34\ln 3+\frac12.$$
Pertanto
$$\text{Area}=-\frac{1}{24}-\frac14\left(-\frac34\ln 3+\frac12\right)=\frac{3\ln 3}{16}-\frac16\cong 0{,}04\ \text{u}^{2}.$$

## d) Curva simmetrica $S$

La simmetria rispetto alla bisettrice del secondo e quarto quadrante $y=-x$ trasforma il punto $(x,y)$ in $(-y,-x)$. Sostituendo $x\to -y$ e $y\to -x$ nell'equazione di $\Gamma$:
$$-x=\frac{(-y)^{3}}{(-2y-1)^{2}}=\frac{-y^{3}}{(2y+1)^{2}}\ \Rightarrow\ x=\frac{y^{3}}{(2y+1)^{2}}.$$
L'equazione della curva simmetrica è dunque
$$S:\ x=\frac{y^{3}}{(2y+1)^{2}}.$$

*Fonte:* [📄 PDF p.30](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
