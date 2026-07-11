

**Problema:** [[Problemi/prob_2009_scuole_italiane_allestero_americhe_2009_sessione_o_problema2_20_1|2009 Estero Americhe — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_americhe_2009_sessione_o_problema2_20|2009 Estero Americhe — Problema 2]]

Scuole italiane all'estero (Americhe) 2009 — Sessione ordinaria, Problema 2.

## a) Espressione generale del polinomio

Si cerca un polinomio di quarto grado $P(x)=ax^4+bx^3+cx^2+dx+e$ tale che $P(-2)=P(2)=0$ e $P(x)\ge 0$ per ogni $x\in\mathbb{R}$.

Imponendo le condizioni sugli zeri:
$$P(2)=16a+8b+4c+2d+e=0,\qquad P(-2)=16a-8b+4c-2d+e=0.$$

Sommando e sottraendo membro a membro le due equazioni si ottiene
$$16a+4c+e=0\ \Rightarrow\ e=-16a-4c,\qquad d=-4b.$$

Sostituendo, il polinomio si fattorizza:
$$P(x)=ax^4+bx^3+cx^2-4bx-16a-4c=(x^2-4)\big(ax^2+bx+4a+c\big).$$

Il fattore $x^2-4$ cambia segno in $x=\pm 2$, mentre deve essere $P(x)\ge 0$ ovunque: occorre allora che il secondo fattore abbia gli stessi zeri, cioè si annulli in $x=2$ e $x=-2$. Imponendo queste due condizioni su $ax^2+bx+4a+c$ si ricava $b=0$ e $c=-8a$, da cui
$$ax^2+bx+4a+c=ax^2-4a=a(x^2-4).$$

Pertanto
$$P(x)=a(x^2-4)^2,$$
e la condizione $P(x)\ge 0$ per ogni $x$ è soddisfatta se e solo se $a>0$.

## b) Studio del grafico di $P(x)=(x^2-4)^2$

Poniamo ora $a=1$, cioè $P(x)=(x^2-4)^2$. È una funzione razionale intera, definita su tutto $\mathbb{R}$, pari e mai negativa; si annulla in $x=-2$ e $x=2$, che sono quindi minimi assoluti: $m_1=(-2,0)$, $m_2=(2,0)$. Inoltre
$$\lim_{x\to -\infty}P(x)=\lim_{x\to +\infty}P(x)=+\infty.$$

**Derivata prima:**
$$P'(x)=2(x^2-4)\cdot 2x=4x(x-2)(x+2).$$
$P'(x)\ge 0$ per $-2\le x\le 0$ e $x\ge 2$: la funzione è crescente in $(-2,0)$ e in $(2,+\infty)$, decrescente in $(-\infty,-2)$ e in $(0,2)$. Dunque $x=\pm 2$ sono minimi (assoluti) e $x=0$ è un massimo relativo, con $P(0)=16$.

**Derivata seconda:**
$$P''(x)=12x^2-16=4(3x^2-4).$$
$P''(x)\ge 0$ per $x^2\ge \frac{4}{3}$, cioè $x\le -\sqrt{\tfrac{4}{3}}$ oppure $x\ge \sqrt{\tfrac{4}{3}}$: il grafico volge la concavità verso l'alto in questi intervalli e verso il basso per $-\sqrt{\tfrac{4}{3}}<x<\sqrt{\tfrac{4}{3}}$. I punti $x=\pm\sqrt{\tfrac{4}{3}}$ sono quindi flessi, con ordinata
$$P\!\left(\pm\sqrt{\tfrac{4}{3}}\right)=\left(\tfrac{4}{3}-4\right)^2=\frac{64}{9}.$$
I flessi hanno coordinate $F_{1,2}=\left(\mp\sqrt{\tfrac{4}{3}},\ \dfrac{64}{9}\right)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="322.815" height="143.657" viewBox="-72 -72 242.111 107.742"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 22.792h228.93"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M154.98 20.392c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="42.595" y="22.792" stroke="none" font-family="cmmi10" font-size="10" transform="translate(118.198 2.153)">x</text><path fill="none" d="M42.595 29.62v-88.374"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M40.195-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="42.595" y="22.792" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -87.423)">y</text><path fill="none" d="M-31.382 21.426v2.731"/><g stroke="none" font-size="10"><text x="42.595" y="22.792" font-family="cmsy10" transform="matrix(.8 0 0 .8 -70.57 13.906)">¡</text><text x="50.373" y="22.792" font-family="cmr10" transform="matrix(.8 0 0 .8 -70.57 13.906)">2</text></g><path fill="none" d="M5.606 21.426v2.731"/><g stroke="none" font-size="10"><text x="42.595" y="22.792" font-family="cmsy10" transform="matrix(.8 0 0 .8 -33.58 13.906)">¡</text><text x="50.373" y="22.792" font-family="cmr10" transform="matrix(.8 0 0 .8 -33.58 13.906)">1</text></g><path fill="none" d="M79.584 21.426v2.731"/><text x="42.595" y="22.792" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.8 0 0 .8 43.508 13.906)">1</text><path fill="none" d="M116.572 21.426v2.731"/><text x="42.595" y="22.792" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.8 0 0 .8 80.496 13.906)">2</text><path fill="none" d="M48.143-50.049H37.047"/><text x="42.595" y="22.792" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.8 0 0 .8 -7.855 -65.705)">16</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.973-44.339 2.621 13.003 2.622 11.324 2.622 9.751 2.621 8.28 2.622 6.906 2.622 5.631 2.621 4.45L-40 18.363l2.622 2.355 2.621 1.439 2.622.603 2.621-.15 2.622-.829 2.622-1.43 2.621-1.963 2.622-2.424 2.622-2.82 2.621-3.153 2.622-3.425 2.622-3.639L-5.92-.869l2.622-3.904 2.622-3.96 2.621-3.971 2.622-3.937L7.19-20.5l2.621-3.747 2.622-3.596 2.621-3.414 2.622-3.2 2.622-2.958 2.621-2.693 2.622-2.404 2.622-2.097 2.621-1.773 2.622-1.436 2.622-1.087 2.621-.73 2.622-.367 2.622-.002 2.621.364 2.622.726 2.622 1.084 2.621 1.431 2.622 1.77 2.621 2.095 2.622 2.4 2.622 2.69 2.621 2.956 2.622 3.198 2.622 3.411 2.621 3.595 2.622 3.745 2.622 3.86 2.621 3.936 2.622 3.97 2.622 3.961 2.621 3.905 2.622 3.799 2.622 3.64 2.621 3.428 2.622 3.155 2.621 2.824 2.622 2.429 2.622 1.967 2.621 1.437 2.622.834 2.622.158 2.621-.595 2.622-1.43 2.622-2.345 2.621-3.348 2.622-4.438 2.622-5.618 2.621-6.894 2.622-8.265 2.622-9.735 2.621-11.308 2.622-12.985"/><g fill="red" stroke="red"><path stroke="none" d="M-30.212 22.792c0-.08-.524-.144-1.17-.144s-1.17.064-1.17.144.524.144 1.17.144 1.17-.065 1.17-.144m-1.17 0"/><g fill="#000" stroke="#000"><g stroke="none"><text x="42.595" y="22.792" font-family="cmmi10" font-size="10" transform="matrix(.7 0 0 .7 -58.726 12.324)">m</text><text x="51.375" y="24.292" font-family="cmr7" font-size="7" transform="matrix(.7 0 0 .7 -58.726 12.324)">1</text></g></g></g><g fill="red" stroke="red"><path stroke="none" d="M117.742 22.792c0-.08-.524-.144-1.17-.144s-1.17.064-1.17.144.524.144 1.17.144 1.17-.065 1.17-.144m-1.17 0"/><g fill="#000" stroke="#000"><g stroke="none"><text x="42.595" y="22.792" font-family="cmmi10" font-size="10" transform="matrix(.7 0 0 .7 74.996 12.324)">m</text><text x="51.375" y="24.292" font-family="cmr7" font-size="7" transform="matrix(.7 0 0 .7 74.996 12.324)">2</text></g></g></g><g fill="red" stroke="red"><path stroke="none" d="M43.765-50.049c0-.08-.524-.144-1.17-.144s-1.17.064-1.17.144.524.144 1.17.144 1.17-.064 1.17-.144m-1.17 0"/><g fill="#000" stroke="#000"><g stroke="none" font-size="10"><text x="42.595" y="22.792" font-family="cmr10" transform="matrix(.7 0 0 .7 15.252 -70.226)">(0</text><text x="51.484" y="22.792" font-family="cmmi10" transform="matrix(.7 0 0 .7 15.252 -70.226)">;</text><text x="55.928" y="22.792" font-family="cmr10" transform="matrix(.7 0 0 .7 15.252 -70.226)">16)</text></g></g></g><path fill="red" stroke="none" d="M1.043-9.577c0-.08-.524-.144-1.17-.144s-1.17.065-1.17.144c0 .08.524.144 1.17.144s1.17-.064 1.17-.144m-1.17 0"/><g fill="red" stroke="red"><path stroke="none" d="M86.487-9.577c0-.08-.524-.144-1.17-.144s-1.17.065-1.17.144c0 .08.524.144 1.17.144s1.17-.064 1.17-.144m-1.17 0"/><g fill="#000" stroke="#000"><text x="42.595" y="22.792" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(.7 0 0 .7 57.973 -23.14)">F</text></g></g></g></svg>
</figure>

## c) Area della regione tra il grafico e l'asse $x$

La regione finita $R$ è compresa tra il grafico e l'asse $x$ per $-2\le x\le 2$; sfruttando la simmetria pari:
$$\text{Area}=\int_{-2}^{2}(x^2-4)^2\,dx=2\int_{0}^{2}\big(x^4-8x^2+16\big)\,dx.$$
Poiché
$$\int_{0}^{2}\big(x^4-8x^2+16\big)\,dx=\left[\frac{x^5}{5}-\frac{8x^3}{3}+16x\right]_{0}^{2}=\frac{32}{5}-\frac{64}{3}+32=\frac{256}{15},$$
si ottiene
$$\text{Area}=2\cdot\frac{256}{15}=\frac{512}{15}\cong 34{,}13\ \text{u}^2.$$

## d) Rettangolo inscritto: area e volume massimi

Sia $C=(x,0)$ con $0\le x\le 2$ il vertice sul semiasse positivo delle ascisse; per la simmetria il rettangolo ha vertice opposto $B=(x,(x^2-4)^2)$, base $2x$ e altezza $(x^2-4)^2$.

**Area massima.** L'area è
$$\mathcal{A}(x)=2x(x^2-4)^2,\qquad 0\le x\le 2.$$
Basta massimizzare $f(x)=x(x^2-4)^2$. Si ha
$$f'(x)=(x^2-4)^2+x\cdot 2(x^2-4)(2x)=(x^2-4)\big(5x^2-4\big).$$
Nell'intervallo $[0,2]$ la derivata si annulla per $x=2$ (dove l'area è nulla) e per $x^2=\tfrac{4}{5}$. Il massimo dell'area si ha dunque per
$$x=\sqrt{\tfrac{4}{5}}=\frac{2}{\sqrt5}.$$

**Volume massimo.** Ruotando il rettangolo di mezzo giro attorno all'asse $y$ si genera un cilindro di raggio $x$ e altezza $(x^2-4)^2$:
$$V(x)=\pi x^2(x^2-4)^2.$$
Massimizziamo $g(x)=x^2(x^2-4)^2$:
$$g'(x)=2x(x^2-4)^2+x^2\cdot 2(x^2-4)(2x)=2x(x^2-4)(3x^2-4).$$
In $[0,2]$ i punti stazionari interni sono $x=0$ (minimo) e $x^2=\tfrac{4}{3}$. Poiché $g\!\left(\sqrt{\tfrac{4}{3}}\right)=\tfrac{4}{3}\cdot\tfrac{64}{9}>0$, il volume è massimo per
$$x=\sqrt{\tfrac{4}{3}}=\frac{2}{\sqrt3}.$$

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
