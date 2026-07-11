

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_2|2008 Ordinamento Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si determinino le equazioni degli asintoti della curva

$$f(x)=\arctan x-\frac{1}{1+x^{2}}.$$

## a) Dominio e asintoti verticali

La funzione è somma di $\arctan x$, definita e continua su tutto $\mathbb{R}$, e della funzione razionale $\dfrac{1}{1+x^{2}}$, il cui denominatore $1+x^{2}$ non si annulla mai. Dunque $f$ è definita e continua su tutto $\mathbb{R}$: **non esistono asintoti verticali**.

## b) Asintoti orizzontali

Poiché $\dfrac{1}{1+x^{2}}\to 0$ quando $x\to\pm\infty$, il comportamento all'infinito è governato dall'arcotangente, che tende a $\pm\dfrac{\pi}{2}$.

Per $x\to-\infty$:

$$\lim_{x\to-\infty}\left(\arctan x-\frac{1}{1+x^{2}}\right)=-\frac{\pi}{2}-0=-\frac{\pi}{2},$$

quindi la retta $y=-\dfrac{\pi}{2}$ è **asintoto orizzontale** per $x\to-\infty$.

Per $x\to+\infty$:

$$\lim_{x\to+\infty}\left(\arctan x-\frac{1}{1+x^{2}}\right)=+\frac{\pi}{2}-0=+\frac{\pi}{2},$$

quindi la retta $y=+\dfrac{\pi}{2}$ è **asintoto orizzontale** per $x\to+\infty$.

## c) Asintoti obliqui

Essendoci asintoti orizzontali sia per $x\to-\infty$ sia per $x\to+\infty$, la curva non può ammettere asintoti obliqui.

In conclusione, gli unici asintoti sono le due rette orizzontali $y=-\dfrac{\pi}{2}$ e $y=+\dfrac{\pi}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="491.385" height="161.156" viewBox="-72 -72 368.539 120.867"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-5.379h332.495"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M258.545-7.779c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="91.817" y="-5.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(172.541 2.153)">x</text><path fill="none" d="M91.817 48.397V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M89.417-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="91.817" y="-5.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -59.253)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-72.07-45.603h327.773"/><g stroke="none"><text x="91.817" y="-5.379" font-family="cmmi10" font-size="10" transform="translate(167.42 -38.473)">y</text><text x="99.856" y="-5.379" font-family="cmr10" font-size="10" transform="translate(167.42 -38.473)">=</text><text x="111.611" y="-9.316" font-family="cmmi7" font-size="7" transform="translate(167.42 -38.473)">¼</text><path d="M279.03-46.552h4.928v.4h-4.928z"/><text x="112.082" y="-1.93" font-family="cmr7" font-size="7" transform="translate(167.42 -38.473)">2</text></g><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-72.07 34.845h327.773"/><g stroke="none"><text x="91.817" y="-5.379" font-family="cmmi10" font-size="10" transform="translate(167.42 41.975)">y</text><text x="99.856" y="-5.379" font-family="cmr10" font-size="10" transform="translate(167.42 41.975)">=</text><text x="110.411" y="-5.379" font-family="cmsy10" font-size="10" transform="translate(167.42 41.975)">¡</text><text x="119.389" y="-9.316" font-family="cmmi7" font-size="7" transform="translate(167.42 41.975)">¼</text><path d="M286.809 33.896h4.926v.4h-4.927z"/><text x="119.86" y="-1.93" font-family="cmr7" font-size="7" transform="translate(167.42 41.975)">2</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-61.827 31.308 3.452-.062 3.453-.069 3.452-.069 3.453-.07 3.452-.073 3.453-.077 3.453-.078 3.452-.081 3.453-.088 3.452-.087 3.453-.09 3.452-.098 3.453-.097 3.452-.103 3.453-.107 3.452-.11 3.453-.113 3.453-.118 3.452-.124 3.453-.128 3.452-.13 3.453-.136 3.452-.139 3.453-.142 3.452-.146 3.453-.146 3.452-.148 3.453-.148 3.453-.145 3.452-.14 3.453-.13 3.452-.117 3.453-.1 3.452-.08 3.453-.052 3.452-.028 3.453-.008 3.453-.001 3.452-.05 3.453-.179 3.452-.446 3.453-.911 3.452-1.61 3.453-2.492 3.452-3.447 3.453-4.277 3.452-4.821 3.453-5.017 3.452-4.898L110.8-5.19l3.453-4.126 3.452-3.649 3.453-3.19 3.452-2.768 3.453-2.402 3.452-2.082 3.453-1.808 3.452-1.581 3.453-1.386 3.453-1.218 3.452-1.078 3.453-.958 3.452-.854 3.453-.768 3.452-.689 3.453-.625 3.452-.566 3.453-.514 3.452-.472 3.453-.433 3.452-.395 3.453-.366 3.453-.34 3.452-.313 3.453-.293 3.452-.272 3.453-.252 3.452-.237 3.453-.224 3.452-.208 3.453-.195 3.453-.187 3.452-.173 3.453-.166 3.452-.155 3.453-.147 3.452-.14 3.453-.134 3.452-.128"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.107](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
