

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_8|2005 Ordinaria — Prova — Quesito 8]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Si considera un cubo di spigolo $\ell$ e si prendono come vertici di un ottaedro i centri delle sue sei facce. Si vuole stabilire se tale ottaedro è regolare e determinare il rapporto fra il volume del cubo e quello dell'ottaedro.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="184.905" height="178.076" viewBox="-72 -72 138.679 133.557"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#b3b3b3" stroke-dasharray="3.0,3.0" d="m-72.07 61.087 35.85-30.728M-36.22 30.359H66.209M-36.22 30.359V-72.07"/><path fill="none" stroke="#a6a6a6" d="M-72.07 61.087H30.359V-41.34H-72.07Z"/><path fill="none" stroke="#a6a6a6" d="M66.209 30.359V-72.07h-102.43M30.359 61.087l35.85-30.728M30.359-41.341l35.85-30.729M-72.07-41.341l35.85-30.729"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-2.93 45.723 48.283-5.491-2.931-56.706-54.145-5.49ZM14.994-20.856-2.93 45.723M14.994-20.856 48.284-5.49M14.994-20.856-2.93-56.706M14.994-20.856-54.146-5.49M-20.856 9.873l17.925 35.85M-20.856 9.873l69.14-15.364M-20.856 9.873-2.93-56.706M-20.856 9.873l-33.29-15.364"/><path fill="#00f" stroke="none" d="M-19.416 9.873a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0M16.434-20.856a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0M-1.4900000000000002 45.723a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0M-1.4900000000000002-56.706a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0M-52.705000000000005-5.491a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0M49.724-5.491a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/></g></svg>
</figure>

## Impostazione con le coordinate

Poniamo il cubo con uno spigolo di lunghezza $\ell$ e i suoi vertici nei punti di coordinate $(0,0,0)$ e $(\ell,\ell,\ell)$, con gli spigoli paralleli agli assi. I centri delle sei facce sono allora:

$$
\begin{aligned}
&P_1=\left(\tfrac{\ell}{2},\tfrac{\ell}{2},0\right), \quad P_2=\left(\tfrac{\ell}{2},\tfrac{\ell}{2},\ell\right) \quad (\text{facce orizzontali}),\\
&P_3=\left(\tfrac{\ell}{2},0,\tfrac{\ell}{2}\right), \quad P_4=\left(\tfrac{\ell}{2},\ell,\tfrac{\ell}{2}\right),\\
&P_5=\left(0,\tfrac{\ell}{2},\tfrac{\ell}{2}\right), \quad P_6=\left(\ell,\tfrac{\ell}{2},\tfrac{\ell}{2}\right).
\end{aligned}
$$

Tutti e sei i punti hanno distanza $\tfrac{\ell}{2}$ dal centro del cubo $O=\left(\tfrac{\ell}{2},\tfrac{\ell}{2},\tfrac{\ell}{2}\right)$ e sono disposti a due a due in modo simmetrico rispetto a $O$ lungo le tre direzioni degli assi: sono quindi i vertici di un ottaedro con centro in $O$.

## L'ottaedro è regolare

Due centri di facce adiacenti del cubo distano sempre della stessa quantità. Ad esempio:

$$
\overline{P_1P_3}=\sqrt{0+\left(\tfrac{\ell}{2}\right)^2+\left(\tfrac{\ell}{2}\right)^2}=\frac{\ell}{\sqrt{2}}=\frac{\ell\sqrt{2}}{2}.
$$

Lo stesso valore si ottiene per ognuno dei $12$ spigoli dell'ottaedro (ciascuno congiunge il centro di una faccia orizzontale, o di $P_2$/$P_1$, con il centro di una faccia laterale adiacente). Poiché tutti gli spigoli sono uguali, le otto facce sono triangoli equilateri congruenti; inoltre in ogni vertice concorrono quattro facce disposte simmetricamente. L'ottaedro è dunque **regolare**, con spigolo

$$
s=\frac{\ell\sqrt{2}}{2}.
$$

## Rapporto fra i volumi

Il volume del cubo è

$$
V_{\text{cubo}}=\ell^3.
$$

L'ottaedro si decompone in due piramidi rette uguali aventi per base comune il quadrato $P_3P_6P_4P_5$ (i quattro centri delle facce laterali, tutti alla quota $z=\tfrac{\ell}{2}$) e per vertici $P_1$ e $P_2$.

Il lato di tale quadrato è $s=\dfrac{\ell\sqrt{2}}{2}$, quindi la sua area è

$$
A_{\text{base}}=s^2=\left(\frac{\ell\sqrt{2}}{2}\right)^2=\frac{\ell^2}{2},
$$

mentre l'altezza di ciascuna piramide, distanza fra il piano $z=\tfrac{\ell}{2}$ e $P_1$ (o $P_2$), vale $\dfrac{\ell}{2}$. Perciò

$$
V_{\text{ott}}=2\cdot\frac{1}{3}\,A_{\text{base}}\cdot\frac{\ell}{2}
=2\cdot\frac{1}{3}\cdot\frac{\ell^2}{2}\cdot\frac{\ell}{2}
=\frac{\ell^3}{6}.
$$

Lo stesso risultato si ottiene dalla formula del volume dell'ottaedro regolare, $V=\dfrac{\sqrt{2}}{3}\,s^3$, con $s=\dfrac{\ell\sqrt{2}}{2}$:

$$
V_{\text{ott}}=\frac{\sqrt{2}}{3}\left(\frac{\ell\sqrt{2}}{2}\right)^3
=\frac{\sqrt{2}}{3}\cdot\frac{\ell^3}{2\sqrt{2}}=\frac{\ell^3}{6}.
$$

Il rapporto fra i volumi è quindi

$$
\frac{V_{\text{cubo}}}{V_{\text{ott}}}=\frac{\ell^3}{\ \ell^3/6\ }=6.
$$

**Conclusione.** L'ottaedro che ha per vertici i centri delle facce del cubo è regolare e il suo volume è $\dfrac{1}{6}$ del volume del cubo: il rapporto cubo : ottaedro vale $6:1$.

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
