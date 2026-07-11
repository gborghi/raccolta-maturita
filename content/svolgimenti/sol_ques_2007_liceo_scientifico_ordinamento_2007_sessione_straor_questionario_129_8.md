

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_8|2007 LS Ordinamento Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Si determinino i coefficienti $a$ e $b$ dell'equazione

$$y=\frac{ax^2+6}{bx+3}$$

affinché la curva rappresentativa ammetta l'asintoto obliquo di equazione $y=x+3$.

Un asintoto obliquo $y=mx+q$ (per $x\to\infty$) esiste se e solo se sono finiti i due limiti

$$m=\lim_{x\to\infty}\frac{f(x)}{x},\qquad q=\lim_{x\to\infty}\big[f(x)-mx\big].$$

Poiché l'asintoto richiesto è $y=x+3$, dovrà risultare $m=1$ e $q=3$.

**Coefficiente angolare $m$.**

$$m=\lim_{x\to\infty}\frac{f(x)}{x}=\lim_{x\to\infty}\frac{ax^2+6}{x\,(bx+3)}=\lim_{x\to\infty}\frac{ax^2+6}{bx^2+3x}=\frac{a}{b}.$$

Imponendo $m=1$ si ottiene

$$\frac{a}{b}=1\;\Rightarrow\; a=b.$$

**Termine noto $q$.**

$$q=\lim_{x\to\infty}\big[f(x)-x\big]=\lim_{x\to\infty}\left[\frac{ax^2+6}{bx+3}-x\right]=\lim_{x\to\infty}\frac{ax^2+6-x(bx+3)}{bx+3}=\lim_{x\to\infty}\frac{(a-b)x^2-3x+6}{bx+3}.$$

Tenendo conto che $a=b$, il termine di secondo grado si annulla e resta

$$q=\lim_{x\to\infty}\frac{-3x+6}{bx+3}=-\frac{3}{b}.$$

Imponendo $q=3$ si ricava

$$-\frac{3}{b}=3\;\Rightarrow\; b=-1,$$

e di conseguenza $a=b=-1$.

**Conclusione.** I coefficienti cercati sono

$$a=-1,\qquad b=-1.$$

Con tali valori la funzione diventa

$$f(x)=\frac{-x^2+6}{-x+3}=\frac{x^2-6}{x-3}=x+3+\frac{3}{x-3},$$

da cui si legge immediatamente l'asintoto obliquo $y=x+3$ (oltre all'asintoto verticale $x=3$), come richiesto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="349.328" height="256.76" viewBox="-72 -72 261.996 192.57"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 64.617h221.534"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M147.584 62.217c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-12.319" y="64.617" stroke="none" font-family="cmmi10" font-size="10" transform="translate(165.715 2.153)">x</text><path fill="none" d="M-12.319 120.1V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-14.719-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-12.319" y="64.617" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -129.248)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M38.897 115.832V-54.886"/><g stroke="none" font-size="10"><text x="-12.319" y="64.617" font-family="cmmi10" transform="translate(39.191 -123.036)">x</text><text x="-3.826" y="64.617" font-family="cmr10" transform="translate(39.191 -123.036)">=</text><text x="6.73" y="64.617" font-family="cmr10" transform="translate(39.191 -123.036)">3</text></g></g><g fill="red" stroke="red" stroke-dasharray="3.0,3.0"><path fill="none" d="M-63.534 64.617 141.328-37.814"/><g fill="red" stroke="none" font-size="10"><text x="-12.319" y="64.617" font-family="cmmi10" transform="translate(157.18 -100.18)">y</text><text x="-4.279" y="64.617" font-family="cmr10" transform="translate(157.18 -100.18)">=</text><text x="6.276" y="64.617" font-family="cmmi10" transform="translate(157.18 -100.18)">x</text><text x="14.214" y="64.617" font-family="cmr10" transform="translate(157.18 -100.18)">+</text><text x="24.214" y="64.617" font-family="cmr10" transform="translate(157.18 -100.18)">3</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-63.534 68.885 1.24-.568 1.24-.567 1.24-.565 1.24-.564 1.241-.562 1.24-.56 1.24-.56 1.24-.557 1.24-.556 1.241-.555 1.24-.552 1.24-.55 1.24-.549 1.241-.546 1.24-.544 1.24-.542 1.24-.54 1.24-.536 1.241-.534 1.24-.532 1.24-.529 1.24-.525 1.24-.523 1.241-.519 1.24-.516 1.24-.512 1.24-.507 1.241-.504 1.24-.5 1.24-.495 1.24-.49 1.24-.485 1.241-.48 1.24-.474 1.24-.467 1.24-.462 1.241-.454 1.24-.447 1.24-.438 1.24-.43 1.24-.421 1.241-.412 1.24-.4 1.24-.39 1.24-.377 1.24-.364 1.241-.35 1.24-.333 1.24-.317 1.24-.298 1.241-.278 1.24-.255 1.24-.23 1.24-.205 1.24-.173 1.241-.139 1.24-.102 1.24-.06 1.24-.013 1.241.042 1.24.102 1.24.173 1.24.253 1.24.348 1.241.457 1.24.59 1.24.741 1.24.93 1.24 1.157 1.241 1.44L24.521 51l1.24 2.251 1.24 2.85 1.241 3.658 1.24 4.785 1.24 6.425 1.24 8.946 1.24 13.113 1.241 20.76M45.725-54.037l1.21 9.036 1.21 6.503 1.21 4.862 1.21 3.734 1.21 2.92 1.21 2.309 1.21 1.848 1.21 1.492 1.21 1.203 1.21.97 1.21.785 1.21.624 1.21.495 1.21.38 1.21.287 1.21.203 1.21.133 1.21.069 1.21.015 1.21-.033 1.21-.076 1.21-.115 1.21-.148 1.21-.18 1.21-.208 1.21-.232 1.21-.255 1.21-.276 1.21-.295 1.21-.312 1.21-.329 1.21-.343 1.21-.356 1.21-.37 1.21-.38 1.21-.392 1.21-.402 1.21-.41 1.21-.42 1.21-.428 1.21-.435 1.21-.443 1.21-.449 1.21-.455 1.21-.461 1.21-.467 1.21-.472 1.21-.477 1.21-.482 1.21-.486 1.21-.49 1.21-.495 1.21-.498 1.21-.502 1.21-.505 1.21-.508 1.21-.512 1.21-.514 1.21-.517 1.21-.52 1.21-.522 1.21-.525 1.21-.527 1.21-.53 1.21-.532 1.21-.533 1.21-.536 1.21-.537 1.21-.54 1.21-.54 1.21-.543 1.21-.544 1.21-.546 1.21-.548 1.21-.548 1.21-.55 1.21-.552 1.21-.553 1.21-.554"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.133](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
