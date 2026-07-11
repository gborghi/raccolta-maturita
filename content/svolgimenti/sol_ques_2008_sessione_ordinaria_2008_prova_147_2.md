

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_2|2008 Ordinaria — Prova (PNI Informatica) — Quesito 2]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Ricordando che il lato del decagono regolare inscritto in un cerchio è sezione aurea del raggio, si provi che
$$\sin\frac{\pi}{10}=\frac{\sqrt{5}-1}{4}.$$

Sia $r$ il raggio del cerchio e sia $AB=\ell$ il lato del decagono regolare inscritto. I dieci lati sottendono al centro $O$ angoli uguali che, complessivamente, ricoprono l'angolo giro; ciascun lato sottende quindi l'angolo al centro
$$A\widehat{O}B=\frac{2\pi}{10}=\frac{\pi}{5}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="266.092" height="278.549" viewBox="-72 -72 199.569 208.912"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#c6c6c6" d="M127.099 27.515c0-55-44.585-99.585-99.584-99.585S-72.07-27.485-72.07 27.515s44.585 99.584 99.585 99.584 99.584-44.585 99.584-99.584Zm-99.584 0"/><path fill="none" stroke-width=".8" d="m27.515 27.515-30.774 94.71h61.547Z"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-3.26 122.226h61.548"/><path fill="none" d="M20.92 47.81a21.34 21.34 0 0 0 13.189 0"/><g stroke="none"><text x="27.515" y="27.515" font-family="cmr10" font-size="10" transform="translate(-7.299 34.741)">36</text><text x="37.515" y="23.886" font-family="cmsy7" font-size="7" transform="translate(-7.299 34.741)">±</text></g><path stroke="none" d="M29.015 27.515a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M-1.7599999999999998 122.226a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M59.788 122.226a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="27.515" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 -3.533)">O</text><text x="27.515" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-41.807 105.077)">A</text><text x="27.515" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.307 105.077)">B</text><text x="27.515" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-29.425 49.1)">r</text><text x="27.515" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.635 49.1)">r</text><text x="27.515" y="27.515" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.083 105.794)">`</text></g></svg>
</figure>

Il triangolo $AOB$ è isoscele sulla base $AB$, con $\overline{OA}=\overline{OB}=r$. L'altezza relativa alla base è anche bisettrice dell'angolo al vertice e mediana, quindi dimezza sia l'angolo $A\widehat{O}B$ sia il lato $AB$. Considerando il triangolo rettangolo che ha per ipotenusa un raggio e per cateto metà della base, si ottiene
$$\frac{\ell}{2}=r\,\sin\frac{A\widehat{O}B}{2}=r\,\sin\frac{\pi}{10},$$
ossia
$$\ell=2r\,\sin\frac{\pi}{10}. \qquad (1)$$

Per ipotesi il lato $\ell$ è la sezione aurea del raggio $r$: ciò significa che $\ell$ è medio proporzionale tra l'intero raggio e la parte rimanente $r-\ell$, cioè
$$r:\ell=\ell:(r-\ell)\quad\Longrightarrow\quad \ell^{2}=r(r-\ell).$$

Si tratta dell'equazione $\ell^{2}+r\ell-r^{2}=0$, di incognita $\ell$; scartando la radice negativa (priva di significato geometrico) si ricava
$$\ell=\frac{-r+\sqrt{r^{2}+4r^{2}}}{2}=\frac{-r+r\sqrt{5}}{2}=r\cdot\frac{\sqrt{5}-1}{2}. \qquad (2)$$

Uguagliando le espressioni $(1)$ e $(2)$ del medesimo lato $\ell$,
$$2r\,\sin\frac{\pi}{10}=r\cdot\frac{\sqrt{5}-1}{2},$$
e semplificando $r\neq 0$ si conclude
$$\sin\frac{\pi}{10}=\frac{\sqrt{5}-1}{4},$$
che è la tesi. Numericamente $\dfrac{\sqrt{5}-1}{4}\approx 0{,}30902$, in accordo con $\sin 18^\circ\approx 0{,}30902$.

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
