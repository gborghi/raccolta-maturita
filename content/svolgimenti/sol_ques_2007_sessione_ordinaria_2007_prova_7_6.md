

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_7_6|2007 Ordinaria — Prova — Quesito 6]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Il coefficiente angolare della tangente al grafico della funzione $f(x)$ è, in ogni suo punto $P$, uguale al quadruplo della radice cubica dell'ascissa di $P$. Si determini $f(x)$, sapendo che il grafico passa per il punto $A(-1,\,0)$.

## a) Impostazione

Il coefficiente angolare della retta tangente in un punto $P$ di ascissa $x$ coincide con la derivata $f'(x)$. La condizione dell'enunciato si traduce quindi nell'equazione differenziale

$$f'(x) = 4\sqrt[3]{x} = 4\,x^{\frac{1}{3}}.$$

## b) Integrazione

Per ottenere $f(x)$ si integra $f'(x)$:

$$f(x) = \int 4\,x^{\frac{1}{3}}\,dx = 4\cdot\frac{x^{\frac{4}{3}}}{\frac{4}{3}} + C = 3\,x^{\frac{4}{3}} + C = 3x\sqrt[3]{x} + C,$$

dove $C$ è una costante da determinare.

## c) Condizione di passaggio

Il grafico passa per $A(-1,\,0)$, cioè $f(-1) = 0$. Poiché $\sqrt[3]{-1} = -1$, si ha $(-1)^{\frac{4}{3}} = \left(\sqrt[3]{-1}\right)^{4} = (-1)^{4} = 1$, quindi

$$f(-1) = 3\cdot 1 + C = 3 + C.$$

Imponendo $f(-1) = 0$ si ricava

$$3 + C = 0 \;\Rightarrow\; C = -3.$$

## d) Funzione richiesta

La funzione cercata ha dunque equazione

$$f(x) = 3x\sqrt[3]{x} - 3 = 3\,x^{\frac{4}{3}} - 3.$$

Si osservi che $f$ è definita su tutto $\mathbb{R}$, è una funzione pari (dipende da $x$ solo tramite $x^{\frac{4}{3}} \ge 0$) e presenta un punto di minimo in $x = 0$, dove $f(0) = -3$; inoltre si annulla in $x = -1$ e in $x = 1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="201.122" height="294.695" viewBox="-72 -72 150.841 221.021"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-64.893 46.121H65.59"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M63.71 43.721c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x=".549" y="46.121" stroke="none" font-family="cmmi10" font-size="10" transform="translate(68.974 2.153)">x</text><path fill="none" d="M.549 148.551V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-1.851-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x=".549" y="46.121" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -110.752)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-48.39-44.424.989 4.726.988 4.687.989 4.667.988 4.616.989 4.585.988 4.56.989 4.513.989 4.493.988 4.441.989 4.41.988 4.377.989 4.332.988 4.303.989 4.262.989 4.216.988 4.183.989 4.14.988 4.096.989 4.05.988 4.008.989 3.953.989 3.927.988 3.868.989 3.817.988 3.765.989 3.73.988 3.672.989 3.62.989 3.551.988 3.51.989 3.44.988 3.381.989 3.322.988 3.253.989 3.185.989 3.108.988 3.038.989 2.955.988 2.868.989 2.784.988 2.68.989 2.588.989 2.458.988 2.331.989 2.152.988 2.126.989 1.844.988 1.64.989 1.272.988.01.989-1.265.989-1.64.988-1.844.989-2.126.988-2.152.989-2.322.988-2.467.989-2.579.989-2.68.988-2.783.989-2.87.988-2.954.989-3.03.988-3.117.989-3.185.989-3.244.988-3.322.989-3.38.988-3.45.989-3.5.988-3.56.989-3.612.989-3.672.988-3.722.989-3.783.988-3.807.989-3.868.988-3.92.989-3.956.989-4.008.988-4.052.989-4.096.988-4.14.989-4.18.988-4.219.989-4.259.989-4.297.988-4.338.989-4.376.988-4.41.989-4.45.988-4.472.989-4.529.989-4.548.988-4.588.989-4.626.988-4.656.989-4.683.988-4.725"/><path stroke="none" d="M-25.904 46.121a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x=".549" y="46.121" font-family="cmmi10" transform="translate(-69.486 -6.033)">A</text><text x="8.049" y="46.121" font-family="cmr10" transform="translate(-69.486 -6.033)">(</text><text x="11.938" y="46.121" font-family="cmsy10" transform="translate(-69.486 -6.033)">¡</text><text x="19.715" y="46.121" font-family="cmr10" transform="translate(-69.486 -6.033)">1</text><text x="24.715" y="46.121" font-family="cmmi10" transform="translate(-69.486 -6.033)">;</text><text x="29.16" y="46.121" font-family="cmr10" transform="translate(-69.486 -6.033)">0)</text></g><path stroke="none" d="M31.001 46.121a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x=".549" y="46.121" font-family="cmr10" transform="translate(31.986 -6.033)">(1</text><text x="9.438" y="46.121" font-family="cmmi10" transform="translate(31.986 -6.033)">;</text><text x="13.882" y="46.121" font-family="cmr10" transform="translate(31.986 -6.033)">0)</text></g><path stroke="none" d="M2.549 131.48a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x=".549" y="46.121" font-family="cmr10" transform="translate(3.533 96.391)">(0</text><text x="9.438" y="46.121" font-family="cmmi10" transform="translate(3.533 96.391)">;</text><text x="13.882" y="46.121" font-family="cmsy10" transform="translate(3.533 96.391)">¡</text><text x="21.66" y="46.121" font-family="cmr10" transform="translate(3.533 96.391)">3)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
