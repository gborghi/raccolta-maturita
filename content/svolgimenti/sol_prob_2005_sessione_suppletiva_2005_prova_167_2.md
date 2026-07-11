

**Problema:** [[Problemi/prob_2005_sessione_suppletiva_2005_prova_167_2|2005 Suppletiva PNI — Prova — Problema 2]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

È assegnata la funzione $f_a(x)=\dfrac{a}{1+x^2}$, con $a\in\mathbb{R}\setminus\{0\}$.

## 1) Limitatezza

Una funzione si dice **limitata** se esiste un numero $M>0$ tale che $|f(x)|\le M$ per ogni $x$ del suo dominio.

Il dominio di $f_a$ è tutto $\mathbb{R}$ e, poiché $1+x^2\ge 1>0$, si ha
$$0<\frac{1}{1+x^2}\le 1 .$$
Di conseguenza $|f_a(x)|=\dfrac{|a|}{1+x^2}\le |a|$ per ogni $x$: la funzione è limitata. Più precisamente, per $a>0$
$$0<f_a(x)\le a,\qquad \sup f_a=a\ \text{(in }x=0\text{)},\qquad \inf f_a=0\ \text{(per }|x|\to\infty\text{)},$$
mentre per $a<0$ risulta $a\le f_a(x)<0$.

## 2) Circonferenza $\gamma$

Per $a>0$ il massimo di $f_a$ è nel punto $A=(0,a)$. La circonferenza $\gamma$ di diametro $OA$ ha centro nel punto medio $\left(0,\tfrac{a}{2}\right)$ e raggio $\tfrac{a}{2}$:
$$x^2+\left(y-\frac{a}{2}\right)^2=\frac{a^2}{4}\iff x^2+y^2-ay=0 .$$

## 3) Punti comuni a $\gamma$ e $G$

Sostituendo $y=\dfrac{a}{1+x^2}$ nell'equazione $x^2+y^2-ay=0$:
$$x^2+\frac{a^2}{(1+x^2)^2}-\frac{a^2}{1+x^2}=0 .$$
Moltiplicando per $(1+x^2)^2$ e semplificando:
$$x^2(1+x^2)^2-a^2x^2=0\iff x^2\big[(1+x^2)^2-a^2\big]=0 .$$
Quindi $x=0$ (sempre) oppure $(1+x^2)^2=a^2$, cioè, essendo $a>0$, $1+x^2=a$ e dunque $x^2=a-1$. Si distinguono due casi:

- se $0<a\le 1$: unica soluzione $x=0$, ossia un solo punto in comune, il vertice $A=(0,a)$;
- se $a>1$: **tre** punti in comune, $A=(0,a)$ e $P_\pm=\big(\pm\sqrt{a-1},\,1\big)$ (poiché $y=\dfrac{a}{1+(a-1)}=1$).

## 4) Triangolo equilatero

Per $a>1$ i tre punti $A,\ P_+,\ P_-$ formano un triangolo isoscele, simmetrico rispetto all'asse $y$. Le lunghezze dei lati sono
$$|AP_\pm|=\sqrt{(a-1)+(a-1)^2}=\sqrt{a(a-1)},\qquad |P_+P_-|=2\sqrt{a-1}.$$
Il triangolo è equilatero quando $|AP_\pm|=|P_+P_-|$:
$$a(a-1)=4(a-1)\ \Longrightarrow\ a=4\quad(a>1).$$
Dunque $\bar a=4$. Verifica: $A=(0,4)$, $P_\pm=(\pm\sqrt{3},1)$ e ogni lato misura $\sqrt{3+9}=\sqrt{12}=2\sqrt{3}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="269.7" height="198.713" viewBox="-72 -72 202.275 149.035"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 61.2h189.094"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M115.144 58.8c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="22.677" y="61.2" stroke="none" font-family="cmmi10" font-size="10" transform="translate(98.28 2.153)">x</text><path fill="none" d="M22.677 76.565v-135.32"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M20.277-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="22.677" y="61.2" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -125.832)">y</text><path fill="none" d="M-54.145 59.152v4.097"/><g stroke="none" font-size="8"><text x="22.677" y="61.2" font-family="cmsy8" transform="translate(-82.253 10.737)">¡</text><text x="29.288" y="61.2" font-family="cmr8" transform="translate(-82.253 10.737)">3</text></g><path fill="none" d="M-28.538 59.152v4.097"/><g stroke="none" font-size="8"><text x="22.677" y="61.2" font-family="cmsy8" transform="translate(-56.645 10.737)">¡</text><text x="29.288" y="61.2" font-family="cmr8" transform="translate(-56.645 10.737)">2</text></g><path fill="none" d="M-2.93 59.152v4.097"/><g stroke="none" font-size="8"><text x="22.677" y="61.2" font-family="cmsy8" transform="translate(-31.038 10.737)">¡</text><text x="29.288" y="61.2" font-family="cmr8" transform="translate(-31.038 10.737)">1</text></g><path fill="none" d="M48.284 59.152v4.097"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(23.482 10.737)">1</text><path fill="none" d="M73.891 59.152v4.097"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(49.09 10.737)">2</text><path fill="none" d="M99.499 59.152v4.097"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(74.697 10.737)">3</text><path fill="none" d="M24.726 35.593h-4.098"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.832 -23.03)">1</text><path fill="none" d="M24.726 9.986h-4.098"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.832 -48.637)">2</text><path fill="none" d="M24.726-15.622h-4.098"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.832 -74.244)">3</text><path fill="none" d="M24.726-41.23h-4.098"/><text x="22.677" y="61.2" stroke="none" font-family="cmr8" font-size="8" transform="translate(-9.832 -99.851)">4</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.388 53.045 1.957-.348 1.956-.37 1.957-.394 1.956-.418 1.956-.448 1.957-.478 1.956-.511 1.957-.548 1.956-.586 1.956-.63 1.957-.678 1.956-.729 1.957-.787 1.956-.848 1.957-.917 1.956-.994 1.956-1.076 1.957-1.17 1.956-1.272 1.957-1.383 1.956-1.508 1.956-1.647 1.957-1.799 1.956-1.966 1.957-2.15 1.956-2.354 1.957-2.574 1.956-2.816 1.956-3.075 1.957-3.352 1.956-3.64 1.957-3.942L.174 3.404 2.13-1.11l1.957-4.768 1.956-4.955L8-15.898l1.956-5.055 1.957-4.894 1.956-4.548 1.956-3.992 1.957-3.231 1.956-2.28 1.957-1.18 1.956-.003 1.956 1.176 1.957 2.274L29.52-34.4l1.957 3.99 1.956 4.543 1.956 4.893 1.957 5.053 1.956 5.065L41.26-5.9l1.956 4.768 1.957 4.517 1.956 4.236 1.956 3.94 1.957 3.641 1.956 3.354 1.957 3.077 1.956 2.816 1.956 2.576 1.957 2.355 1.956 2.15 1.957 1.967 1.956 1.8 1.957 1.648 1.956 1.508 1.956 1.384 1.957 1.271 1.956 1.171 1.957 1.077 1.956.993 1.956.918 1.957.85 1.956.785 1.957.73 1.956.678 1.957.63 1.956.587 1.956.547 1.957.512 1.956.478 1.957.448 1.956.42 1.956.393 1.957.37 1.956.347"/><path fill="none" stroke="red" stroke-width=".8" d="M73.891 9.986c0-28.286-22.929-51.215-51.214-51.215S-28.538-18.3-28.538 9.986-5.608 61.2 22.677 61.2 73.89 38.27 73.89 9.986Zm-51.214 0"/><path stroke="none" d="M24.117-41.23a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><g stroke="none" font-size="8"><text x="22.677" y="61.2" font-family="cmmi8" transform="translate(3.533 -107.962)">A</text><text x="31.405" y="61.2" font-family="cmr8" transform="translate(3.533 -107.962)">=</text><text x="40.377" y="61.2" font-family="cmr8" transform="translate(3.533 -107.962)">(0</text><text x="47.933" y="61.2" font-family="cmmi8" transform="translate(3.533 -107.962)">;</text><text x="51.711" y="61.2" font-family="cmr8" transform="translate(3.533 -107.962)">4)</text></g><path stroke="none" d="M68.469 35.593a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><g stroke="none"><text x="22.677" y="61.2" font-family="cmmi8" font-size="8" transform="translate(47.885 -31.051)">P</text><text x="28.066" y="62.278" font-family="cmr6" font-size="6" transform="translate(47.885 -31.051)">+</text></g><path stroke="none" d="M-20.235 35.593a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><g stroke="none"><text x="22.677" y="61.2" font-family="cmmi8" font-size="8" transform="translate(-59.551 -31.051)">P</text><text x="28.066" y="62.278" font-family="cmsy6" font-size="6" transform="translate(-59.551 -31.051)">¡</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="22.677" y="61.2" font-family="cmmi8" font-size="8" transform="translate(65.015 -26.168)">f</text><text x="26.76" y="62.311" font-family="cmr6" font-size="6" transform="translate(65.015 -26.168)">4</text></g></g></g></svg>
</figure>

## 5) Densità di probabilità

$f_{a'}$ è densità di probabilità su $\mathbb{R}$ se è non negativa (vero per $a'>0$) e se il suo integrale su tutto $\mathbb{R}$ vale $1$:
$$\int_{-\infty}^{+\infty}\frac{a'}{1+x^2}\,dx=a'\big[\arctan x\big]_{-\infty}^{+\infty}=a'\cdot\pi .$$
Imponendo $a'\pi=1$ si ottiene
$$a'=\frac{1}{\pi}.$$
Si tratta della **distribuzione di Cauchy** standard. La funzione di distribuzione è
$$F(x)=\int_{-\infty}^{x}\frac{1}{\pi(1+t^2)}\,dt=\frac{1}{\pi}\left(\arctan x+\frac{\pi}{2}\right)=\frac{\arctan x}{\pi}+\frac{1}{2}.$$

*Fonte:* [📄 PDF p.167](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
