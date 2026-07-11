

**Problema:** [[Problemi/prob_2007_ordinamento_2007_sessione_suppletiva_problema1_88_1|2007 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_ordinamento_2007_sessione_suppletiva_problema1_88|2007 Ordinamento Suppletiva — Problema 1]]

Rispetto a un sistema di assi cartesiani ortogonali $Oxy$ si consideri il punto $A(2,0)$.

## a)

Cerchiamo il luogo dei punti $P=(x,y)$ tali che $\overline{PO}^2 + 2\,\overline{PA}^2 = 8$. Essendo $O=(0,0)$ e $A=(2,0)$, la condizione diventa:

$$x^2+y^2+2\bigl[(x-2)^2+y^2\bigr] = 8 \Rightarrow 3x^2+3y^2-8x+8 = 8.$$

Dividendo per $3$ e completando il quadrato:

$$x^2+y^2-\frac{8}{3}x = 0 \Rightarrow \left(x-\frac{4}{3}\right)^2+y^2 = \frac{16}{9}.$$

Si tratta dunque di una circonferenza di centro $C\!\left(\dfrac{4}{3},\,0\right)$ e raggio $r=\dfrac{4}{3}$.

## b)

Il punto $B$ ha la stessa ascissa di $A$: sostituendo $x=2$ nell'equazione della circonferenza,

$$4+y^2-\frac{16}{3} = 0 \Rightarrow y^2 = \frac{4}{3} \Rightarrow y = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3} \quad (y>0).$$

Quindi $B=\!\left(2,\,\dfrac{2\sqrt{3}}{3}\right)$. La retta $OB$ ha coefficiente angolare

$$m_1 = \frac{2\sqrt{3}/3}{2} = \frac{\sqrt{3}}{3}.$$

La tangente alla circonferenza in $B$ è perpendicolare al raggio $CB$. Il vettore $\overline{CB} = B-C = \!\left(\dfrac{2}{3},\,\dfrac{2\sqrt{3}}{3}\right)$ ha pendenza $\sqrt{3}$, dunque la tangente ha coefficiente angolare $m_2 = -\dfrac{1}{\sqrt{3}}$.

Applicando la formula dell'angolo tra due rette:

$$\tan\alpha = \left|\frac{m_1-m_2}{1+m_1 m_2}\right| = \frac{\dfrac{\sqrt{3}}{3}+\dfrac{1}{\sqrt{3}}}{1-\dfrac{\sqrt{3}}{3}\cdot\dfrac{1}{\sqrt{3}}} = \frac{\dfrac{2\sqrt{3}}{3}}{\dfrac{2}{3}} = \sqrt{3},$$

da cui $\alpha = 60^\circ$.

## c)

La cubica $y = ax^3+bx^2+cx+d$ ha un flesso a tangente orizzontale nell'origine se $y(0)=0$, $y'(0)=0$ e $y''(0)=0$, ovvero $d=0$, $c=0$, $b=0$. Resta quindi $y=ax^3$. Imponendo il passaggio per $B=\!\left(2,\,\dfrac{2\sqrt{3}}{3}\right)$:

$$\frac{2\sqrt{3}}{3} = 8a \Rightarrow a = \frac{\sqrt{3}}{12}.$$

La cubica è dunque

$$y = \frac{\sqrt{3}}{12}x^3.$$

È una funzione definita su tutto $\mathbb{R}$, dispari e sempre crescente: la derivata $y'=\dfrac{\sqrt{3}}{4}x^2\ge 0$ si annulla solo in $x=0$, dove la funzione ha un flesso a tangente orizzontale. La concavità è rivolta verso l'alto per $x>0$ e verso il basso per $x<0$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="282.599" height="211.179" viewBox="-72 -72 211.95 158.385"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 24.497h198.768"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M124.818 22.097c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="23.531" y="24.497" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(107.1 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M23.53 76.28V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M21.13-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="23.531" y="24.497" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -89.128)">y</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-56.137 26.489v-3.984"/><g fill="gray" stroke="none" font-size="8"><text x="23.531" y="24.497" font-family="cmsy8" transform="translate(-85.098 8.697)">¡</text><text x="30.142" y="24.497" font-family="cmr8" transform="translate(-85.098 8.697)">2</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-16.303 26.489v-3.984"/><g fill="gray" stroke="none" font-size="8"><text x="23.531" y="24.497" font-family="cmsy8" transform="translate(-45.264 8.697)">¡</text><text x="30.142" y="24.497" font-family="cmr8" transform="translate(-45.264 8.697)">1</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M63.364 26.489v-3.984"/><text x="23.531" y="24.497" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(37.709 8.697)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M103.198 26.489v-3.984"/><text x="23.531" y="24.497" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(77.542 8.697)">2</text></g><g fill="gray" stroke="gray"><path fill="none" d="M21.539-15.337h3.983"/><text x="23.531" y="24.497" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-6.791 -37.256)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M21.539-55.17h3.983"/><text x="23.531" y="24.497" fill="gray" stroke="none" font-family="cmr8" font-size="8" transform="translate(-6.791 -77.09)">2</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.103 85.715 3.003-6.082 3.004-5.665 3.004-5.263 3.004-4.876 3.004-4.503 3.003-4.147 3.004-3.803 3.004-3.475 3.004-3.162 3.004-2.863 3.004-2.58 3.003-2.311 3.004-2.057 3.004-1.818 3.004-1.593 3.004-1.383 3.003-1.19 3.004-1.008 3.004-.843 3.004-.693 3.004-.557 3.004-.436 3.003-.33 3.004-.24 3.004-.161 3.004-.1L17 24.521l3.003-.022 3.004-.003 3.004-.001 3.004-.014 3.004-.04 3.003-.083 3.004-.139 3.004-.21 3.004-.297 3.004-.397 3.004-.514 3.003-.643 3.004-.79 3.004-.95 3.004-1.123 3.004-1.314 3.003-1.519 3.004-1.737 3.004-1.973 3.004-2.22 3.004-2.485 3.003-2.763 3.004-3.056 3.004-3.364 3.004-3.687 3.004-4.025 3.004-4.378 3.003-4.744 3.004-5.127 3.004-5.523 3.004-5.934 3.004-6.362"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="m23.53 24.497 85.643-49.445"/><path stroke="none" d="M25.35 24.497a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="24.497" stroke="none" font-family="cmmi8" font-size="8" transform="translate(3.533 9)">O</text><path stroke="none" d="M105.018-21.499a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="23.531" y="24.497" stroke="none" font-family="cmmi8" font-size="8" transform="translate(69.329 -49.529)">B</text><g fill="#00f" stroke="#00f"><text x="23.531" y="24.497" fill="#00f" stroke="none" font-family="cmsy10" font-size="10" transform="translate(90.685 -66.292)">C</text></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmmi8" font-size="8"><text x="23.531" y="24.497" transform="translate(62.963 -27.142)">O</text><text x="30.216" y="24.497" transform="translate(62.963 -27.142)">B</text></g></g></g></svg>
</figure>

## d)

La retta $OB$ ha equazione $y = \dfrac{\sqrt{3}}{3}x$. Per $x\in(0,2)$ la cubica sta al di sotto della retta: infatti $\dfrac{\sqrt{3}}{12}x^3 < \dfrac{\sqrt{3}}{3}x$ equivale a $x^2 < 4$. L'area della regione delimitata dal segmento $OB$ e dall'arco $OB$ della cubica è quindi:

$$\text{Area} = \int_0^2\!\left(\frac{\sqrt{3}}{3}x-\frac{\sqrt{3}}{12}x^3\right)dx = \sqrt{3}\left[\frac{x^2}{6}-\frac{x^4}{48}\right]_0^2 = \sqrt{3}\left(\frac{2}{3}-\frac{1}{3}\right) = \frac{\sqrt{3}}{3} \approx 0{,}58\ u^2.$$

*Fonte:* [📄 PDF p.88](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
