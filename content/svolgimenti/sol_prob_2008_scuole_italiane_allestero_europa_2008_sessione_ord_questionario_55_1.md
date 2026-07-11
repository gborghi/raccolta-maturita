

**Problema:** [[Problemi/prob_2008_scuole_italiane_allestero_europa_2008_sessione_ord_questionario_55_1|2008 Estero Europa Ordinaria — Questionario — Problema 1]] · **Prova:** [[Prove/2008_scuole_italiane_allestero_europa_2008_sessione_ord_questionario_55|2008 Estero Europa Ordinaria — Questionario]]

La regione $R$, delimitata dal grafico di $y=7\sqrt[3]{x}$, dall'asse $x$ e dalla retta $x=2$, è la base di un solido $S$ le cui sezioni con piani perpendicolari all'asse $x$ sono tutte dei quadrati. Si calcoli il volume di $S$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="199.14" height="141.458" viewBox="-72 -72 149.355 106.094"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 20.513H64.104"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.224 18.113c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-58.413" y="20.513" stroke="none" font-family="cmmi10" font-size="10" transform="translate(126.45 2.153)">x</text><path fill="none" d="M-58.413 25.293v-84.047"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.813-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-58.413" y="20.513" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -85.145)">y</text><path fill="#e1e1ff" stroke="none" d="m-58.413 20.513 1.543-18.161 1.543-4.72 1.543-3.163 1.543-2.788 1.543-2.087 1.542-1.89 1.543-1.718 1.543-1.574 1.543-1.444 1.543-1.344 1.542-1.255 1.543-1.183 1.543-1.116 1.543-1.06 1.543-1.014 1.543-.966 1.542-.931 1.543-.893 1.543-.86 1.543-.83 1.543-.803 1.542-.775 1.543-.76 1.543-.73 1.543-.714 1.543-.692 1.543-.68 1.542-.659 1.543-.646 1.543-.618 1.543-.616 1.543-.603 1.542-.591 1.543-.58 1.543-.566 1.543-.558 1.543-.546 1.543-.537 1.542-.527 1.543-.52 1.543-.508 1.543-.502 1.543-.494 1.542-.486 1.543-.48 1.543-.472 1.543-.464 1.543-.458 1.542-.454 1.543-.447 1.543-.438 1.543-.436 1.543-.428 1.543-.424 1.542-.416 1.543-.414 1.543-.408 1.543-.405 1.543-.399.023 70.251z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.413 20.513 1.543-18.161 1.543-4.72 1.543-3.163 1.543-2.788 1.543-2.087 1.542-1.89 1.543-1.718 1.543-1.574 1.543-1.444 1.543-1.344 1.542-1.255 1.543-1.183 1.543-1.116 1.543-1.06 1.543-1.014 1.543-.966 1.542-.931 1.543-.893 1.543-.86 1.543-.83 1.543-.803 1.542-.775 1.543-.76 1.543-.73 1.543-.714 1.543-.692 1.543-.68 1.542-.659 1.543-.646 1.543-.618 1.543-.616 1.543-.603 1.542-.591 1.543-.58 1.543-.566 1.543-.558 1.543-.546 1.543-.537 1.542-.527 1.543-.52 1.543-.508 1.543-.502 1.543-.494 1.542-.486 1.543-.48 1.543-.472 1.543-.464 1.543-.458 1.542-.454 1.543-.447 1.543-.438 1.543-.436 1.543-.428 1.543-.424 1.542-.416 1.543-.414 1.543-.408 1.543-.405 1.543-.399"/><path fill="none" stroke-dasharray="3.0,3.0" d="M32.637 20.513v-70.257"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-58.413" y="20.513" font-family="cmmi10" font-size="10" transform="translate(42.324 -72.085)">y</text><text x="-50.373" y="20.513" font-family="cmr10" font-size="10" transform="translate(42.324 -72.085)">=</text><text x="-39.818" y="20.513" font-family="cmr10" font-size="10" transform="translate(42.324 -72.085)">7</text><text x="-32.04" y="17.15" font-family="cmr5" font-size="5" transform="translate(42.324 -72.085)">3</text><text x="-34.193" y="13.31" font-family="cmsy10" font-size="10" transform="translate(42.324 -72.085)">p</text><path d="M16.465-59.174h5.715v.4h-5.715z"/><text x="-25.859" y="20.513" font-family="cmmi10" font-size="10" transform="translate(42.324 -72.085)">x</text></g></g><text x="-58.413" y="20.513" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.861 -22.077)">R</text><text x="-58.413" y="20.513" stroke="none" font-family="cmr10" font-size="10" transform="translate(88.55 9.977)">2</text></g></svg>
</figure>

Fissato $x\in[0,2]$, la sezione di $S$ con il piano perpendicolare all'asse $x$ è un quadrato il cui lato coincide con l'ordinata del grafico che delimita la regione $R$, cioè

$$\ell(x)=7\sqrt[3]{x}.$$

L'area di tale sezione quadrata è quindi

$$A(x)=\ell^2(x)=\left(7\sqrt[3]{x}\right)^2=49\,x^{2/3}.$$

Il volume di $S$ si ottiene integrando l'area delle sezioni al variare di $x$ tra $0$ e $2$:

$$V=\int_0^2 A(x)\,dx=\int_0^2 49\,x^{2/3}\,dx=49\left[\frac{x^{5/3}}{\tfrac{5}{3}}\right]_0^2=\frac{147}{5}\,2^{5/3}.$$

Poiché $2^{5/3}=2\cdot 2^{2/3}=2\sqrt[3]{4}$, si ottiene

$$V=\frac{147}{5}\cdot 2\sqrt[3]{4}=\frac{294}{5}\sqrt[3]{4}\approx 93{,}34\ \text{u}^3.$$

*Fonte:* [📄 PDF p.55](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
