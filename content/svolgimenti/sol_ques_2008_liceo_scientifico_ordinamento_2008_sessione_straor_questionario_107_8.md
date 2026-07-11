

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_8|2008 Ordinamento Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si calcoli il valor medio della funzione
$$y=\frac{x^4+1}{x^2+1}$$
nell'intervallo $0\le x\le 1$.

## Impostazione

Il valor medio di una funzione $f$ continua su un intervallo $[a,b]$ è
$$m=\frac{1}{b-a}\int_a^b f(x)\,dx.$$
Nel nostro caso $a=0$ e $b=1$, quindi $b-a=1$ e
$$m=\int_0^1 \frac{x^4+1}{x^2+1}\,dx.$$

## Semplificazione dell'integranda

Eseguiamo la divisione fra i polinomi. Poiché
$$(x^2+1)(x^2-1)=x^4-1,$$
si ha $x^4+1=(x^2+1)(x^2-1)+2$, e dunque
$$\frac{x^4+1}{x^2+1}=x^2-1+\frac{2}{x^2+1}.$$

## Calcolo dell'integrale

$$m=\int_0^1\left(x^2-1+\frac{2}{x^2+1}\right)dx=\left[\frac{x^3}{3}-x+2\arctan x\right]_0^1.$$

Ricordando che $\arctan 1=\dfrac{\pi}{4}$:
$$m=\left(\frac{1}{3}-1+2\cdot\frac{\pi}{4}\right)-0=\frac{1}{3}-1+\frac{\pi}{2}.$$

## Conclusione

$$m=-\frac{2}{3}+\frac{\pi}{2}\cong 0{,}904.$$

Il grafico mostra la funzione sull'intervallo $[0,1]$ (vale $1$ agli estremi e scende sotto tale valore all'interno) e la retta orizzontale del valor medio.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="327.603" height="110.742" viewBox="-72 -72 245.702 83.057"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-49.041-2.817H141.76"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M139.88-5.217c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-49.041" y="125.22" stroke="none" font-family="cmmi10" font-size="10" transform="translate(194.735 -125.885)">x</text><path fill="none" d="M-49.041-2.817v-55.937"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-51.441-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-49.041" y="125.22" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -189.851)">y</text><path fill="none" d="M-49.041-1.111v-3.413"/><text x="-49.041" y="125.22" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 -117.766)">0</text><path fill="none" d="M36.317-1.111v-3.413"/><g stroke="none" font-size="10"><text x="-49.041" y="125.22" font-family="cmr10" transform="translate(78.97 -117.766)">0</text><text x="-44.041" y="125.22" font-family="cmmi10" transform="translate(78.97 -117.766)">:</text><text x="-41.263" y="125.22" font-family="cmr10" transform="translate(78.97 -117.766)">5</text></g><path fill="none" d="M121.675-1.111v-3.413"/><text x="-49.041" y="125.22" stroke="none" font-family="cmr10" font-size="10" transform="translate(168.216 -117.766)">1</text><path fill="none" d="M-52.456-19.89h6.83"/><g stroke="none" font-size="10"><text x="-49.041" y="125.22" font-family="cmr10" transform="translate(-19.896 -141.888)">0</text><text x="-44.041" y="125.22" font-family="cmmi10" transform="translate(-19.896 -141.888)">:</text><text x="-41.263" y="125.22" font-family="cmr10" transform="translate(-19.896 -141.888)">85</text></g><path fill="none" d="M-52.456-45.497h6.83"/><text x="-49.041" y="125.22" stroke="none" font-family="cmr10" font-size="10" transform="translate(-7.118 -167.494)">1</text><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M-49.041-29.109h170.716"/><g fill="#000" stroke="#000"><g stroke="none" font-size="10"><text x="-49.041" y="125.22" font-family="cmmi10" transform="translate(174.25 -151.107)">m</text><text x="-37.483" y="125.22" font-family="cmsy10" transform="translate(174.25 -151.107)">¼</text><text x="-26.928" y="125.22" font-family="cmr10" transform="translate(174.25 -151.107)">0</text><text x="-21.928" y="125.22" font-family="cmmi10" transform="translate(174.25 -151.107)">:</text><text x="-19.15" y="125.22" font-family="cmr10" transform="translate(174.25 -151.107)">904</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.041-45.497 2.891.053 2.892.169 2.891.24 2.892.323 2.891.445 2.892.495 2.891.649 2.891.648 2.892.784 2.891.84 2.892.903 2.891.938 2.892 1.026 2.891 1.058 2.892 1.143 2.891 1.11 2.892 1.177 2.891 1.178 2.892 1.18 2.891 1.211 2.892 1.178 2.891 1.177 2.891 1.144 2.892 1.161 2.891 1.092 2.892 1.026 2.891 1.006 2.892.956 2.891.872 2.892.837 2.891.698 2.892.685 2.891.544 2.892.48 2.891.39 2.892.258 2.891.154 2.892.068 2.891-.068 2.891-.138 2.892-.323 2.891-.427 2.892-.547 2.891-.683 2.892-.802 2.891-.956 2.892-1.092 2.891-1.23 2.892-1.349 2.891-1.503 2.892-1.654 2.891-1.792 2.892-1.93 2.891-2.084 2.891-2.22 2.892-2.37 2.891-2.511 2.892-2.68 2.891-2.801"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-49.041" y="125.22" font-family="cmmi10" font-size="10" transform="translate(99.722 -167.769)">y</text><text x="-41.002" y="125.22" font-family="cmr10" font-size="10" transform="translate(99.722 -167.769)">=</text><text x="-29.246" y="121.283" font-family="cmmi7" font-size="7" transform="translate(99.722 -167.769)">x</text><text x="-24.712" y="118.265" font-family="cmr5" font-size="5" transform="translate(99.722 -167.769)">4</text><text x="-20.809" y="121.283" font-family="cmr7" font-size="7" transform="translate(99.722 -167.769)">+1</text><path d="M70.476-45.249H89.04v.4H70.476z"/><text x="-29.246" y="128.668" font-family="cmmi7" font-size="7" transform="translate(99.722 -167.769)">x</text><text x="-24.712" y="126.668" font-family="cmr5" font-size="5" transform="translate(99.722 -167.769)">2</text><text x="-20.809" y="128.668" font-family="cmr7" font-size="7" transform="translate(99.722 -167.769)">+1</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.110](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
