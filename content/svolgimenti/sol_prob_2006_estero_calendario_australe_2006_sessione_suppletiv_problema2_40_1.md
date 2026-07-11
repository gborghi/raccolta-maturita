

**Problema:** [[Problemi/prob_2006_estero_calendario_australe_2006_sessione_suppletiv_problema2_40_1|2006 Australe Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2006_estero_calendario_australe_2006_sessione_suppletiv_problema2_40|2006 Australe Suppletiva — Problema 2]]

Sia $f(x) = x - x^3$ sull'intervallo $[-2,\,2]$.

## a) Tangente $r$ nel punto $(-1,0)$

Il punto appartiene al grafico, poiché $f(-1) = -1 - (-1) = 0$. La retta $r\colon y = mx + n$ deve passare per $(-1,0)$, quindi
$$-m + n = 0 \quad\Rightarrow\quad n = m.$$

Il coefficiente angolare è la derivata nel punto di tangenza. Essendo $f'(x) = 1 - 3x^2$, si ha
$$m = f'(-1) = 1 - 3 = -2 = n.$$

La tangente cercata è dunque
$$r\colon\; y = -2x - 2.$$

## b) Seconda tangente $s$ per $(-1,0)$

Cerchiamo una retta $s$ passante per $(-1,0)$ e tangente al grafico in un punto $(a,\,b)$ con $a \neq -1$. Tale retta ha la forma $y = k(x+1) = g(x)$ e deve soddisfare le condizioni di tangenza
$$\begin{cases} f(a) = g(a) \\ f'(a) = g'(a) \end{cases} \quad\Rightarrow\quad \begin{cases} a - a^3 = k(a+1) = b \\ 1 - 3a^2 = k. \end{cases}$$

Sostituendo $k$ nella prima equazione:
$$a - a^3 = (1 - 3a^2)(a+1) \quad\Rightarrow\quad 2a^3 + 3a^2 - 1 = 0.$$

L'equazione ha la radice $a = -1$; abbassando di grado con la regola di Ruffini,
$$2a^3 + 3a^2 - 1 = (a+1)(2a^2 + a - 1) = (a+1)^2(2a - 1) = 0,$$
da cui $a = -1$ (soluzione doppia) e $a = \frac{1}{2}$.

Il valore $a = -1$ restituisce $b = 0$ e $k = -2$, cioè la retta $r$ già trovata. La soluzione nuova è $a = \frac{1}{2}$, per la quale
$$b = f\!\left(\tfrac{1}{2}\right) = \tfrac{1}{2} - \tfrac{1}{8} = \tfrac{3}{8}, \qquad k = f'\!\left(\tfrac{1}{2}\right) = 1 - \tfrac{3}{4} = \tfrac{1}{4}.$$

Il punto di tangenza è quindi $\left(\frac{1}{2},\,\frac{3}{8}\right)$ e la seconda tangente è
$$s\colon\; y = \tfrac{1}{4}(x+1).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="214.642" height="257.022" viewBox="-72 -72 160.982 192.767"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-67.271 28.48H75.73"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M73.85 26.08c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="4.43" y="28.48" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.234 2.153)">x</text><path fill="none" d="M4.43 116.114V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M2.03-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="4.43" y="28.48" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -93.111)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.329-35.198 1.462 7.527 1.462 7.073 1.461 6.629 1.462 6.197 1.462 5.779 1.462 5.37 1.462 4.975 1.461 4.59 1.462 4.22 1.462 3.858 1.462 3.51 1.461 3.172 1.462 2.848 1.462 2.535 1.462 2.233 1.462 1.945 1.461 1.666 1.462 1.4 1.462 1.146 1.462.904 1.462.673 1.461.455 1.462.248 1.462.053 1.462-.13 1.462-.302 1.461-.462 1.462-.609 1.462-.745 1.462-.87 1.461-.98 1.462-1.083 1.462-1.171 1.462-1.248 1.462-1.313 1.461-1.366L.757 32.12l1.462-1.437 1.462-1.455 1.462-1.462 1.461-1.456 1.462-1.438 1.462-1.408 1.462-1.368 1.462-1.314 1.461-1.25 1.462-1.173 1.462-1.084 1.462-.985 1.462-.872 1.461-.747 1.462-.613 1.462-.466 1.462-.305 1.461-.135 1.462.048 1.462.243 1.462.45 1.462.668 1.461.898 1.462 1.14 1.462 1.394 1.462 1.66 1.462 1.936 1.461 2.227 1.462 2.527 1.462 2.84 1.462 3.165 1.462 3.5 1.461 3.85 1.462 4.21 1.462 4.582 1.462 4.965 1.461 5.36 1.462 5.77 1.462 6.186 1.462 6.619 1.462 7.06 1.461 7.516"/><path fill="none" stroke="red" stroke-width=".8" d="m-49.346.596 59.75 119.5"/><path fill="none" stroke="#008c00" stroke-width=".8" d="M-47.354 31.467 62.188 4.082"/><path stroke="none" d="M-33.164 28.48a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><g stroke="none" font-size="10"><text x="4.43" y="28.48" font-family="cmr10" transform="translate(-73.367 11.033)">(</text><text x="8.319" y="28.48" font-family="cmsy10" transform="translate(-73.367 11.033)">¡</text><text x="16.096" y="28.48" font-family="cmr10" transform="translate(-73.367 11.033)">1</text><text x="21.096" y="28.48" font-family="cmmi10" transform="translate(-73.367 11.033)">;</text><text x="25.541" y="28.48" font-family="cmr10" transform="translate(-73.367 11.033)">0)</text></g><path stroke="none" d="M26.586 13.542a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><g stroke="none"><text x="4.43" y="28.48" font-family="cmr10" font-size="10" transform="translate(-8.61 -21.919)">(</text><text x="9.519" y="24.543" font-family="cmr7" font-size="7" transform="translate(-8.61 -21.919)">1</text><path d="M.908 3.861h3.986v.4H.908z"/><text x="9.519" y="31.928" font-family="cmr7" font-size="7" transform="translate(-8.61 -21.919)">2</text><text x="14.705" y="28.48" font-family="cmmi10" font-size="10" transform="translate(-8.61 -21.919)">;</text><text x="20.349" y="24.543" font-family="cmr7" font-size="7" transform="translate(-8.61 -21.919)">3</text><path d="M11.738 3.861h3.986v.4h-3.986z"/><text x="20.349" y="31.928" font-family="cmr7" font-size="7" transform="translate(-8.61 -21.919)">8</text><text x="25.535" y="28.48" font-family="cmr10" font-size="10" transform="translate(-8.61 -21.919)">)</text></g><g fill="red" stroke="red"><text x="4.43" y="28.48" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-64.137 -39.673)">r</text></g><g fill="#008c00" stroke="#008c00"><text x="4.43" y="28.48" fill="#008c00" stroke="none" font-family="cmmi10" font-size="10" transform="translate(57.407 -26.528)">s</text></g><g fill="#00f" stroke="#00f"><text x="4.43" y="28.48" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(42.822 64.242)">f</text></g></g></svg>
</figure>

## c) Angolo tra le rette $r$ ed $s$

Detto $\alpha$ il minore degli angoli formati da $r$ ed $s$, con $m_r = -2$ e $m_s = \frac{1}{4}$ si ha
$$\tan\alpha = \left|\frac{m_r - m_s}{1 + m_r m_s}\right| = \left|\frac{-2 - \frac{1}{4}}{1 + (-2)\cdot\frac{1}{4}}\right| = \left|\frac{-\frac{9}{4}}{\frac{1}{2}}\right| = \frac{9}{2},$$
da cui
$$\alpha = \arctan\!\left(\tfrac{9}{2}\right) = \arctan(4{,}5) \cong 77{,}5^\circ.$$

## d) Area tra la curva e la retta $s$

La curva $f(x) = x - x^3$ è una cubica dispari (simmetrica rispetto all'origine, che è punto di flesso), che interseca l'asse $x$ in $x = -1$, $x = 0$, $x = 1$; per $x \to \pm\infty$ si ha $f(x) \to \mp\infty$.

Le intersezioni tra la retta $s$ e la curva si ottengono da
$$\tfrac{1}{4}(x+1) = x - x^3 \quad\Rightarrow\quad 4x^3 - 3x + 1 = 0 \quad\Rightarrow\quad (x+1)(2x-1)^2 = 0,$$
cioè $x = -1$ e $x = \frac{1}{2}$ (radice doppia, punto di tangenza). Sull'intervallo $\left[-1,\,\frac{1}{2}\right]$ la retta sta sopra la curva, poiché
$$s(x) - f(x) = x^3 - \tfrac{3}{4}x + \tfrac{1}{4} = \tfrac{1}{4}(x+1)(2x-1)^2 \geq 0.$$

L'area richiesta è quindi
$$A = \int_{-1}^{1/2}\left[\tfrac{1}{4}(x+1) - (x - x^3)\right]dx = \int_{-1}^{1/2}\left(x^3 - \tfrac{3}{4}x + \tfrac{1}{4}\right)dx.$$

Calcolando la primitiva $\frac{x^4}{4} - \frac{3}{8}x^2 + \frac{1}{4}x$ e valutandola agli estremi:
$$A = \left[\frac{x^4}{4} - \frac{3}{8}x^2 + \frac{1}{4}x\right]_{-1}^{1/2} = \frac{3}{64} - \left(-\frac{3}{8}\right) = \frac{3}{64} + \frac{24}{64} = \frac{27}{64}.$$

L'area della regione delimitata dalla curva e dalla retta $s$ è pertanto
$$A = \frac{27}{64} \cong 0{,}42 \ \text{u}^2.$$

*Fonte:* [📄 PDF p.40](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
