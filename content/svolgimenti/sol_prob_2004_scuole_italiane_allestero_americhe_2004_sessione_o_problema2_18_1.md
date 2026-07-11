

**Problema:** [[Problemi/prob_2004_scuole_italiane_allestero_americhe_2004_sessione_o_problema2_18_1|2004 Estero Americhe Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_o_problema2_18|2004 Estero Americhe Ordinaria — Problema 2]]

Sia $f$ la funzione definita da

$$f(x)=\frac{x+a}{bx^2+cx+2}\qquad(1)$$

con la condizione che i parametri $a$, $b$, $c$ valgano $0$ oppure $1$. Si determinino $a$, $b$, $c$ sapendo che il grafico $G$ di $f$ passa per $(-1;0)$ e che la retta $y=1$ è un asintoto; si tracci $G$ e si calcoli l'area della regione del primo quadrante compresa tra l'asintoto orizzontale, il grafico $G$ e le rette $x=0$ e $x=2$.

## a) Determinazione dei parametri

**Passaggio per $(-1;0)$.** Una funzione razionale si annulla dove si annulla il numeratore. Imponendo $f(-1)=0$ si ottiene

$$0=\frac{-1+a}{b-c+2}\ \Rightarrow\ -1+a=0\ \Rightarrow\ a=1.$$

**Asintoto orizzontale $y=1$.** Perché $f$ ammetta un asintoto orizzontale non nullo il numeratore e il denominatore devono avere lo stesso grado. Il numeratore $x+1$ è di primo grado, quindi il denominatore deve ridursi a un polinomio di primo grado: ciò accade solo se $b=0$. Con $b=0$ il denominatore è $cx+2$ e

$$\lim_{x\to\infty}\frac{x+1}{cx+2}=\frac{1}{c}.$$

Affinché tale limite valga $1$ deve essere $c=1$.

In conclusione $a=1$, $b=0$, $c=1$ e la funzione richiesta è la funzione omografica

$$f(x)=\frac{x+1}{x+2}.$$

## b) Grafico di $G$

Scrivendo

$$f(x)=\frac{x+1}{x+2}=\frac{(x+2)-1}{x+2}=1-\frac{1}{x+2},$$

si riconosce un'iperbole equilatera riferita ai propri asintoti, ottenuta da $y=-\tfrac{1}{x}$ mediante traslazione. Essa ha:

- asintoto verticale $x=-2$ e asintoto orizzontale $y=1$;
- centro di simmetria nel punto $C(-2;1)$;
- intersezioni con gli assi in $(-1;0)$ e $\left(0;\tfrac{1}{2}\right)$.

Il grafico è quindi il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="399.767" height="265.338" viewBox="-72 -72 299.825 199.003"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 45.158h268.765"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M194.815 42.758c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="93.81" y="45.158" stroke="none" font-family="cmmi10" font-size="10" transform="translate(106.817 2.153)">x</text><path fill="none" d="M93.81 126.533v-184.26"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M91.41-55.846c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="93.81" y="45.158" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -108.762)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M31.214 126.533v-184.66"/><g fill="gray" stroke="none" font-size="10"><text x="93.81" y="45.158" font-family="cmmi10" transform="translate(-97.956 -107.65)">x</text><text x="102.303" y="45.158" font-family="cmr10" transform="translate(-97.956 -107.65)">=</text><text x="112.859" y="45.158" font-family="cmsy10" transform="translate(-97.956 -107.65)">¡</text><text x="120.637" y="45.158" font-family="cmr10" transform="translate(-97.956 -107.65)">2</text></g></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 13.86h269.165"/><g fill="gray" stroke="none" font-size="10"><text x="93.81" y="45.158" font-family="cmmi10" transform="translate(106.817 -29.048)">y</text><text x="101.85" y="45.158" font-family="cmr10" transform="translate(106.817 -29.048)">=</text><text x="112.405" y="45.158" font-family="cmr10" transform="translate(106.817 -29.048)">1</text></g></g><path fill="#d9d9ff" stroke="none" d="M93.81 29.509v-15.65h62.597v7.825l-1.605.102-1.604.103-1.605.108-1.605.11-1.604.112-1.605.116-1.605.12-1.604.123-1.605.126-1.605.13-1.604.13-1.605.142-1.605.142-1.604.147-1.605.15-1.604.157-1.605.162-1.605.167-1.604.171-1.605.18-1.605.184-1.604.19-1.605.2-1.605.205-1.604.212-1.605.222-1.605.229-1.604.24-1.605.25-1.604.257-1.605.272-1.605.282-1.604.295-1.605.308-1.605.322-1.604.338-1.605.354-1.605.372-1.604.391Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m43.733 92.107 1.823-9.944 1.822-7.699 1.822-6.142 1.823-5.01 1.822-4.166 1.823-3.52 1.822-3.011 1.823-2.607 1.822-2.278 1.822-2.008 1.823-1.781 1.822-1.594 1.823-1.433 1.822-1.296 1.822-1.18 1.823-1.073 1.822-.983 1.823-.908 1.822-.836 1.823-.772 1.822-.717 1.822-.67 1.823-.623 1.822-.582 1.823-.548 1.822-.513 1.822-.479 1.823-.46 1.822-.426 1.823-.41 1.822-.382 1.823-.367 1.822-.348 1.822-.328 1.823-.315 1.822-.299 1.823-.286 1.822-.274 1.822-.261 1.823-.25 1.822-.24 1.823-.227 1.822-.223 1.823-.212 1.822-.204 1.822-.195 1.823-.188 1.822-.183 1.823-.176 1.822-.17 1.822-.162 1.823-.157 1.822-.153 1.823-.148 1.822-.143 1.822-.138 1.823-.133 1.822-.13 1.823-.127 1.822-.122 1.823-.117 1.822-.115 1.822-.112 1.823-.109 1.822-.106 1.823-.102 1.822-.1 1.823-.097 1.822-.095 1.822-.093 1.823-.089 1.822-.086 1.823-.086 1.822-.083 1.822-.082 1.823-.079 1.822-.076 1.823-.077 1.822-.073M-62.68 3.427l1.01-.112 1.01-.117 1.01-.12 1.01-.12 1.01-.124 1.01-.127 1.01-.13 1.01-.132 1.01-.135 1.01-.139 1.01-.146 1.01-.145 1.01-.15 1.01-.153 1.01-.157 1.01-.162 1.01-.165 1.01-.17 1.01-.177 1.01-.18 1.01-.184 1.011-.189 1.01-.195 1.01-.2 1.01-.207 1.01-.213 1.01-.219 1.01-.229 1.01-.231 1.01-.241 1.01-.25 1.01-.257 1.01-.263 1.01-.275 1.01-.286 1.01-.29 1.011-.307 1.01-.316 1.01-.329 1.01-.338 1.01-.35 1.01-.367 1.01-.381 1.01-.398 1.01-.413 1.01-.43 1.01-.45 1.01-.466 1.01-.494 1.01-.51 1.01-.542 1.011-.56 1.01-.595 1.01-.623 1.01-.657 1.01-.689 1.01-.732 1.01-.773 1.01-.817 1.01-.864 1.01-.92 1.01-.976 1.01-1.045 1.01-1.124 1.01-1.195 1.01-1.286 1.011-1.388 1.01-1.496 1.01-1.627 1.01-1.762 1.01-1.927 1.01-2.107 1.01-2.32 1.01-2.559 1.01-2.854 1.01-3.184 1.01-3.585 1.01-4.052 1.01-4.647"/><path stroke="none" d="M64.712 45.158a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none" font-size="10"><text x="93.81" y="45.158" font-family="cmr10" transform="translate(-27.765 11.033)">(</text><text x="97.699" y="45.158" font-family="cmsy10" transform="translate(-27.765 11.033)">¡</text><text x="105.477" y="45.158" font-family="cmr10" transform="translate(-27.765 11.033)">1</text><text x="110.477" y="45.158" font-family="cmmi10" transform="translate(-27.765 11.033)">;</text><text x="114.922" y="45.158" font-family="cmr10" transform="translate(-27.765 11.033)">0)</text></g><path stroke="none" d="M96.01 29.509a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none"><text x="93.81" y="45.158" font-family="cmr10" font-size="10" transform="translate(-27.141 -22.63)">(0</text><text x="102.699" y="45.158" font-family="cmmi10" font-size="10" transform="translate(-27.141 -22.63)">;</text><text x="108.344" y="41.221" font-family="cmr7" font-size="7" transform="translate(-27.141 -22.63)">1</text><path d="M81.203 19.828h3.986v.4h-3.986z"/><text x="108.344" y="48.606" font-family="cmr7" font-size="7" transform="translate(-27.141 -22.63)">2</text><text x="113.53" y="45.158" font-family="cmr10" font-size="10" transform="translate(-27.141 -22.63)">)</text></g><path stroke="none" d="M32.864 13.86a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><g stroke="none" font-size="10"><text x="93.81" y="45.158" font-family="cmmi10" transform="translate(-59.063 -37.331)">C</text><text x="101.673" y="45.158" font-family="cmr10" transform="translate(-59.063 -37.331)">(</text><text x="105.562" y="45.158" font-family="cmsy10" transform="translate(-59.063 -37.331)">¡</text><text x="113.34" y="45.158" font-family="cmr10" transform="translate(-59.063 -37.331)">2</text><text x="118.34" y="45.158" font-family="cmmi10" transform="translate(-59.063 -37.331)">;</text><text x="122.784" y="45.158" font-family="cmr10" transform="translate(-59.063 -37.331)">1)</text></g></g></svg>
</figure>

## c) Area della regione

Nell'intervallo $[0;2]$ il grafico $G$ sta sotto l'asintoto orizzontale $y=1$, poiché $f(x)=1-\frac{1}{x+2}<1$. L'area richiesta è dunque

$$A=\int_0^2\left[\,1-\frac{x+1}{x+2}\,\right]dx=\int_0^2\frac{(x+2)-(x+1)}{x+2}\,dx=\int_0^2\frac{1}{x+2}\,dx.$$

Calcolando la primitiva,

$$A=\Big[\ln|x+2|\Big]_0^2=\ln 4-\ln 2=\ln 2\ \approx\ 0{,}69\ \text{u}^2.$$

*Fonte:* [📄 PDF p.18](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
