

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20_1|2004 Estero Americhe Ordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20|2004 Estero Americhe Ordinaria — Questionario]]

La coppia $(1,\,2)$ è la soluzione di un sistema lineare di due equazioni in due incognite. Quale può essere il sistema?

## Svolgimento

Il problema è **indeterminato**: per un punto del piano passano infinite rette, quindi esistono infiniti sistemi lineari di due equazioni che ammettono $(1,\,2)$ come unica soluzione. Ne basta esibire uno.

Un modo semplice è combinare le due incognite con somma e differenza. Poiché

$$
1 + 2 = 3, \qquad 1 - 2 = -1,
$$

la coppia $(1,\,2)$ soddisfa entrambe le equazioni

$$
\begin{cases} x + y = 3 \\ x - y = -1 \end{cases}
$$

## Verifica

Sostituendo $x = 1$ e $y = 2$:

$$
\begin{cases} 1 + 2 = 3 \\ 1 - 2 = -1 \end{cases}
$$

entrambe le uguaglianze sono soddisfatte.

La soluzione è inoltre **unica**: il determinante dei coefficienti vale

$$
\det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = 1\cdot(-1) - 1\cdot 1 = -2 \ne 0,
$$

quindi il sistema è determinato (regola di Cramer) e ha come unica soluzione proprio la coppia $(1,\,2)$.

Geometricamente le due equazioni rappresentano due rette distinte, $y = 3 - x$ e $y = x + 1$, che si incontrano nell'unico punto $(1,\,2)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="253.114" height="205.541" viewBox="-72 -72 189.835 154.156"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-71.87 43.275H68.57"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M66.69 40.875c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-33.459" y="43.275" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.962 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-33.46 81.686v-140.44"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-35.86-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-33.459" y="43.275" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -107.907)">y</text></g><path fill="none" stroke="#ccc" d="M-59.066 76.565V-54.033M-7.852 76.565V-54.033M17.756 76.565V-54.033M43.363 76.565V-54.033M-66.749 68.882H63.85M-66.749 17.668H63.85M-66.749-7.94H63.85M-66.749-33.547H63.85"/><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-59.066-59.154 5.334 5.335 5.335 5.334 5.335 5.335 5.335 5.335 5.334 5.335 5.335 5.334 5.335 5.335 5.334 5.335 5.335 5.334 5.335 5.335L-.384-.472 4.95 4.863l5.335 5.334 5.335 5.335 5.334 5.335L26.29 26.2l5.335 5.335 5.335 5.335 5.334 5.335 5.335 5.334 5.335 5.335 5.335 5.335 5.334 5.335 5.335 5.334"/><g fill="#00f" stroke="none" font-size="10"><text x="-33.459" y="43.275" font-family="cmmi10" transform="translate(106.159 27.854)">x</text><text x="-25.522" y="43.275" font-family="cmr10" transform="translate(106.159 27.854)">+</text><text x="-15.522" y="43.275" font-family="cmmi10" transform="translate(106.159 27.854)">y</text><text x="-7.482" y="43.275" font-family="cmr10" transform="translate(106.159 27.854)">=</text><text x="3.073" y="43.275" font-family="cmr10" transform="translate(106.159 27.854)">3</text></g></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-71.87 56.079 4.801-4.802 4.802-4.801 4.801-4.801 4.801-4.802 4.802-4.801 4.801-4.801 4.802-4.802 4.8-4.801 4.802-4.802 4.802-4.8 4.801-4.802 4.801-4.802 4.802-4.801 4.801-4.801L.15-15.942l4.802-4.801 4.801-4.802 4.802-4.8 4.801-4.802 4.801-4.802 4.802-4.801 4.801-4.801 4.801-4.802 4.802-4.801"/><g fill="red" stroke="none" font-size="10"><text x="-33.459" y="43.275" font-family="cmmi10" transform="translate(80.555 -100.18)">x</text><text x="-25.522" y="43.275" font-family="cmsy10" transform="translate(80.555 -100.18)">¡</text><text x="-15.522" y="43.275" font-family="cmmi10" transform="translate(80.555 -100.18)">y</text><text x="-7.482" y="43.275" font-family="cmr10" transform="translate(80.555 -100.18)">=</text><text x="3.073" y="43.275" font-family="cmsy10" transform="translate(80.555 -100.18)">¡</text><text x="10.851" y="43.275" font-family="cmr10" transform="translate(80.555 -100.18)">1</text></g></g><path stroke="none" d="M-5.602-7.94a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m-2.25 0"/><g stroke="none" font-size="10"><text x="-33.459" y="43.275" font-family="cmr10" transform="translate(-.148 -57.248)">(1</text><text x="-24.57" y="43.275" font-family="cmmi10" transform="translate(-.148 -57.248)">;</text><text x="-20.126" y="43.275" font-family="cmr10" transform="translate(-.148 -57.248)">2)</text></g></g></svg>
</figure>

Qualsiasi altra coppia di rette distinte passanti per $(1,\,2)$ fornisce un sistema ugualmente valido: ad esempio $\{\,2x + y = 4;\ x - y = -1\,\}$.

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
