

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20_3|2004 Estero Americhe Ordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20|2004 Estero Americhe Ordinaria — Questionario]]

Mostrare che le tangenti alla curva

$$y=\frac{\pi\sin x}{x}$$

nei punti di ascissa $x=\pi$ e $x=-\pi$ si intersecano ad angolo retto.

**Coefficienti angolari delle tangenti.** Due rette sono perpendicolari se il prodotto dei loro coefficienti angolari vale $-1$. I coefficienti angolari delle tangenti sono i valori della derivata prima nei due punti.

Deriviamo la funzione con la regola del quoziente:

$$y'=\pi\cdot\frac{x\cos x-\sin x}{x^{2}}.$$

Calcoliamo la derivata in $x=\pi$, ricordando che $\cos\pi=-1$ e $\sin\pi=0$:

$$m=y'(\pi)=\pi\cdot\frac{\pi\cos\pi-\sin\pi}{\pi^{2}}=\pi\cdot\frac{-\pi}{\pi^{2}}=-1.$$

Calcoliamo ora la derivata in $x=-\pi$, con $\cos(-\pi)=-1$ e $\sin(-\pi)=0$:

$$m'=y'(-\pi)=\pi\cdot\frac{(-\pi)\cos(-\pi)-\sin(-\pi)}{(-\pi)^{2}}=\pi\cdot\frac{\pi}{\pi^{2}}=1.$$

**Conclusione.** Il prodotto dei coefficienti angolari vale

$$m\cdot m'=(-1)\cdot(1)=-1,$$

quindi le due tangenti sono perpendicolari e si intersecano ad angolo retto.

Si osservi inoltre che nei punti di tangenza è $y(\pi)=y(-\pi)=0$; le due tangenti hanno equazioni $y=-(x-\pi)$ e $y=x+\pi$ e si incontrano nel punto $(0,\pi)$, dove effettivamente formano un angolo retto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="305.362" height="176.33" viewBox="-72 -72 229.021 132.248"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 46.263h215.84"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M141.89 43.863c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="36.05" y="46.263" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(111.653 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M36.05 59.778V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M33.65-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="36.05" y="46.263" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -110.894)">y</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="M-48.824 46.263s15.195-17.908 21.083-25.408C-21.853 13.354-12.275-.71-6.387-7.797s15.195-18.16 21.084-22.435c5.888-4.276 15.428-8.38 21.353-8.38s15.465 4.104 21.354 8.38c5.888 4.275 15.195 15.347 21.083 22.435s15.466 21.15 21.354 28.652c5.888 7.5 21.083 25.408 21.083 25.408"/><path fill="none" stroke="red" stroke-width=".8" d="M133.358 58.697 26.59-48.073M-61.258 58.697 45.51-48.073"/><path fill="none" d="m41.727-32.935-5.677 5.676-5.676-5.676"/><path stroke="none" d="M122.444 46.263a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="36.05" y="46.263" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.407 7.839)">¼</text><path stroke="none" d="M-47.304 46.263a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><g stroke="none" font-size="10"><text x="36.05" y="46.263" font-family="cmsy10" transform="translate(-102.244 9.366)">¡</text><text x="43.828" y="46.263" font-family="cmmi10" transform="translate(-102.244 9.366)">¼</text></g><path stroke="none" d="M37.57-38.611a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><g stroke="none" font-size="10"><text x="36.05" y="46.263" font-family="cmr10" transform="translate(3.533 -90.907)">(0</text><text x="44.939" y="46.263" font-family="cmmi10" transform="translate(3.533 -90.907)">;</text><text x="49.383" y="46.263" font-family="cmmi10" transform="translate(3.533 -90.907)">¼</text><text x="55.442" y="46.263" font-family="cmr10" transform="translate(3.533 -90.907)">)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
