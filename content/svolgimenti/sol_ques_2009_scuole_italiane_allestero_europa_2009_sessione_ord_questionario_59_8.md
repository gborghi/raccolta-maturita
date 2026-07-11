

**Quesito:** [[Quesiti/ques_2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59_8|2009 Estero Europa — Questionario — Quesito 8]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59|2009 Estero Europa — Questionario]]

Si determini il cilindro di massimo volume che si può inscrivere in una sfera di raggio $R = 60\ \text{cm}$ e se ne calcoli la capacità in litri.

Indichiamo con $R$ il raggio della sfera, con $r$ il raggio di base del cilindro e con $h$ la sua altezza. Considerando la sezione assiale (un rettangolo inscritto nel cerchio massimo della sfera), la diagonale del rettangolo coincide con il diametro della sfera; per il teorema di Pitagora vale quindi

$$r^2 + \left(\frac{h}{2}\right)^2 = R^2 \quad\Rightarrow\quad r^2 = R^2 - \frac{h^2}{4}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="238.163" height="228.688" viewBox="-72 -72 178.622 171.516"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M98.846 13.488c0-47.143-38.215-85.358-85.358-85.358S-71.87-33.655-71.87 13.488s38.215 85.358 85.358 85.358 85.358-38.215 85.358-85.358Zm-85.358 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-54.798 64.703v-102.43H81.774v102.43ZM81.774-37.727"/><path fill="none" stroke-dasharray="3.0,3.0" d="M13.488 98.846V-71.87"/><path stroke="none" d="M15.288 13.488a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="13.488" y="13.488" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" stroke="red" stroke-width=".8" d="m13.488 13.488 68.286-51.215"/><text x="13.488" y="13.488" stroke="none" font-family="cmmi10" font-size="10" transform="translate(22.94 -29.14)">R</text><path fill="none" d="M-54.398 80.067h67.486"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-52.518 82.467c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M11.208 77.667c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="13.488" y="13.488" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-36.538 74.418)">r</text><path fill="none" d="M93.725 64.303v-101.63"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M96.125 62.423c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08M91.325-35.447c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="13.488" y="13.488" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.77 3.472)">h</text></g></svg>
</figure>

Il volume del cilindro è

$$V(h) = \pi r^2 h = \pi\left(R^2 - \frac{h^2}{4}\right)h, \qquad 0 \le h \le 2R.$$

Il volume è massimo dove lo è la funzione $y = \left(R^2 - \dfrac{h^2}{4}\right)h = R^2 h - \dfrac{h^3}{4}$. Calcoliamo la derivata prima:

$$y' = R^2 - \frac{3}{4}h^2.$$

Si ha $y' \ge 0$ quando

$$h^2 \le \frac{4}{3}R^2 \quad\Rightarrow\quad 0 \le h \le \frac{2R}{\sqrt{3}}.$$

Dunque, nell'intervallo $[0,\,2R]$, la funzione è crescente per $0 < h < \dfrac{2R}{\sqrt{3}}$ e decrescente per $\dfrac{2R}{\sqrt{3}} < h < 2R$: essa presenta perciò un massimo assoluto in

$$h = \frac{2R}{\sqrt{3}} = \frac{2\sqrt{3}}{3}R.$$

Con $R = 60\ \text{cm}$:

$$h = \frac{2\sqrt{3}}{3}\cdot 60 = 40\sqrt{3}\ \text{cm} \approx 69{,}3\ \text{cm}.$$

Per tale valore di $h$ il raggio di base vale

$$r^2 = R^2 - \frac{h^2}{4} = R^2 - \frac{1}{4}\cdot\frac{4}{3}R^2 = R^2 - \frac{R^2}{3} = \frac{2R^2}{3},$$

$$r = R\sqrt{\frac{2}{3}} = \frac{R\sqrt{6}}{3} = \frac{60\sqrt{6}}{3} = 20\sqrt{6}\ \text{cm} \approx 49{,}0\ \text{cm}.$$

Il cilindro di volume massimo inscritto nella sfera di raggio $R = 60\ \text{cm}$ ha quindi altezza $h = 40\sqrt{3}\ \text{cm}$ e raggio di base $r = 20\sqrt{6}\ \text{cm}$.

Il volume massimo è

$$V_{\max} = \pi r^2 h = \pi\,(20\sqrt{6})^2\,(40\sqrt{3}) = \pi\cdot 2400 \cdot 40\sqrt{3} = 96000\sqrt{3}\,\pi\ \text{cm}^3.$$

Numericamente

$$V_{\max} \approx 522374{,}22\ \text{cm}^3 \approx 522{,}374\ \text{dm}^3 \approx 522\ \text{litri}.$$

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
