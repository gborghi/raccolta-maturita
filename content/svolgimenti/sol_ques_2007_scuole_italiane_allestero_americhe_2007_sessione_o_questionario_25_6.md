

**Quesito:** [[Quesiti/ques_2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25_6|2007 Estero Americhe Ordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25|2007 Estero Americhe Ordinaria — Questionario]]

Il coefficiente angolare della tangente al grafico della funzione $f(x)$ è, in ogni suo punto $P$, uguale al quadruplo della radice cubica dell'ascissa di $P$. Si determini $f(x)$, sapendo che il grafico passa per il punto $A(-1,\,0)$.

## a) Impostazione

Il coefficiente angolare della tangente in un punto è il valore della derivata prima in quel punto. La condizione assegnata si traduce quindi nell'equazione

$$f'(x) = 4\sqrt[3]{x} = 4\,x^{1/3}.$$

## b) Integrazione

La funzione $f(x)$ si ottiene integrando la sua derivata:

$$f(x) = \int 4\,x^{1/3}\,dx = 4\cdot\frac{x^{4/3}}{\tfrac{4}{3}} + C = 3\,x^{4/3} + C = 3\sqrt[3]{x^4} + C.$$

## c) Determinazione della costante

Imponiamo il passaggio per $A(-1,\,0)$, cioè $f(-1)=0$. Poiché

$$(-1)^{4/3} = \left((-1)^{1/3}\right)^4 = (-1)^4 = 1,$$

si ha

$$f(-1) = 3\cdot 1 + C = 3 + C = 0 \;\Rightarrow\; C = -3.$$

## d) Risultato

La funzione richiesta ha equazione

$$f(x) = 3\sqrt[3]{x^4} - 3 = 3\,x\sqrt[3]{x} - 3.$$

Si osservi che la funzione è pari (dato che $x\sqrt[3]{x}=x^{4/3}\ge 0$), presenta il minimo assoluto nel punto $(0,\,-3)$ e interseca l'asse $x$ nei punti $(-1,\,0)$ e $(1,\,0)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="209.468" height="309.871" viewBox="-72 -72 157.101 232.403"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-65.462 47.26H71.85"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M69.97 44.86c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="3.394" y="47.26" stroke="none" font-family="cmmi10" font-size="10" transform="translate(72.389 2.153)">x</text><path fill="none" d="M3.394 159.933V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M.994-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="3.394" y="47.26" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -111.891)">y</text><path fill="none" d="M-59.202 45.382v3.755"/><g stroke="none" font-size="10"><text x="3.394" y="47.26" font-family="cmsy10" transform="translate(-68.985 11.855)">¡</text><text x="11.172" y="47.26" font-family="cmr10" transform="translate(-68.985 11.855)">2</text></g><path fill="none" d="M-27.904 45.382v3.755"/><g stroke="none" font-size="10"><text x="3.394" y="47.26" font-family="cmsy10" transform="translate(-37.687 11.855)">¡</text><text x="11.172" y="47.26" font-family="cmr10" transform="translate(-37.687 11.855)">1</text></g><path fill="none" d="M34.692 45.382v3.755"/><text x="3.394" y="47.26" stroke="none" font-family="cmr10" font-size="10" transform="translate(28.798 11.855)">1</text><path fill="none" d="M65.99 45.382v3.755"/><text x="3.394" y="47.26" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 11.855)">2</text><path fill="none" d="M5.272 141.154H1.516"/><g stroke="none" font-size="10"><text x="3.394" y="47.26" font-family="cmsy10" transform="translate(-18.189 96.7)">¡</text><text x="11.172" y="47.26" font-family="cmr10" transform="translate(-18.189 96.7)">3</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m3.394 141.154.928-.86.928-1.309.928-1.567.928-1.73.928-2.018.928-1.953.928-2.113.928-2.235.927-2.34.928-2.441.928-2.518.928-2.592.928-2.657.928-2.742.928-2.8.928-2.864.928-2.93.928-2.977.928-3.043.928-3.09.928-3.147.927-3.193.928-3.25.928-3.286.928-3.334.928-3.382.928-3.428.928-3.466.928-3.503.928-3.55.928-3.588.928-3.633.928-3.663.928-3.697.927-3.738.928-3.773.928-3.807.928-3.846.928-3.88.928-3.91.928-3.952.928-3.967.928-4.012.928-4.04.928-4.07.928-4.105.928-4.117.927-4.167.928-4.187.928-4.216.928-4.24.928-4.27.928-4.314.928-4.32.928-4.357.928-4.376.928-4.412.928-4.417.928-4.486M3.394 141.154l-.928-.86-.928-1.309-.928-1.567-.927-1.73-.928-2.018-.928-1.953-.928-2.113-.928-2.235-.928-2.34-.928-2.441-.928-2.518-.928-2.592-.928-2.657-.928-2.742-.928-2.8-.928-2.864-.927-2.93-.928-2.977-.928-3.043-.928-3.09-.928-3.147-.928-3.193-.928-3.25-.928-3.286-.928-3.334-.928-3.382-.928-3.428-.928-3.466-.928-3.503-.927-3.55-.928-3.588-.928-3.633-.928-3.663-.928-3.697-.928-3.738-.928-3.773-.928-3.807-.928-3.846-.928-3.88-.928-3.91-.928-3.952-.928-3.967-.928-4.012-.927-4.04-.928-4.07-.928-4.105-.928-4.117-.928-4.167-.928-4.187-.928-4.216-.928-4.24-.928-4.27-.928-4.314-.928-4.32-.928-4.357-.928-4.376-.927-4.412-.928-4.417-.928-4.486"/><path stroke="none" d="M-26.144 47.26a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none" font-size="10"><text x="3.394" y="47.26" font-family="cmmi10" transform="translate(-72.331 -6.033)">A</text><text x="10.894" y="47.26" font-family="cmr10" transform="translate(-72.331 -6.033)">(</text><text x="14.783" y="47.26" font-family="cmsy10" transform="translate(-72.331 -6.033)">¡</text><text x="22.561" y="47.26" font-family="cmr10" transform="translate(-72.331 -6.033)">1</text><text x="27.561" y="47.26" font-family="cmmi10" transform="translate(-72.331 -6.033)">;</text><text x="32.005" y="47.26" font-family="cmr10" transform="translate(-72.331 -6.033)">0)</text></g><path stroke="none" d="M36.452 47.26a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0M5.154 141.154a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none" font-size="10"><text x="3.394" y="47.26" font-family="cmr10" transform="translate(3.533 104.928)">(0</text><text x="12.283" y="47.26" font-family="cmmi10" transform="translate(3.533 104.928)">;</text><text x="16.728" y="47.26" font-family="cmsy10" transform="translate(3.533 104.928)">¡</text><text x="24.505" y="47.26" font-family="cmr10" transform="translate(3.533 104.928)">3)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
