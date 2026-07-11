

**Problema:** [[Problemi/prob_2006_estero_calendario_australe_2006_sessione_suppletiv_problema1_37_1|2006 Australe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2006_estero_calendario_australe_2006_sessione_suppletiv_problema1_37|2006 Australe Suppletiva — Problema 1]]

Scuole italiane all'estero (Calendario australe, sessione suppletiva) 2006 — Problema 1.

Il triangolo $ABC$, rettangolo in $C$, ha l'altezza relativa all'ipotenusa uguale a $1$. Posto $x$ l'ampiezza dell'angolo in $A$ (cioè $x=\widehat{CAB}$) e $t=\tan\dfrac{x}{2}$, si esprima il perimetro $p$ in funzione di $t$; si studi la funzione $p(t)$ ottenuta e se ne disegni il grafico; infine, se $p=6$, si determini il valore approssimato di $x$ in gradi sessagesimali.

## a) Il perimetro in funzione di $t$

Sia $CH$ l'altezza relativa all'ipotenusa $AB$, con $\overline{CH}=1$, e sia $H$ il piede sull'ipotenusa. Nel triangolo rettangolo $ACH$ l'angolo in $A$ vale $x$ e il cateto $CH$ è opposto a tale angolo, quindi

$$\overline{AC}=\frac{\overline{CH}}{\sin x}=\frac{1}{\sin x}.$$

Poiché l'angolo in $B$ vale $\dfrac{\pi}{2}-x$, in modo analogo si ricava

$$\overline{BC}=\frac{1}{\cos x},\qquad \overline{AB}=\frac{\overline{AC}}{\cos x}=\frac{1}{\sin x\,\cos x},$$

con $0<x<\dfrac{\pi}{2}$. Il perimetro è dunque

$$p=\frac{1}{\sin x}+\frac{1}{\cos x}+\frac{1}{\sin x\,\cos x}.$$

Utilizzando le formule parametriche con $t=\tan\dfrac{x}{2}$,

$$\sin x=\frac{2t}{1+t^2},\qquad \cos x=\frac{1-t^2}{1+t^2},$$

dove $0<t<1$ perché $0<\dfrac{x}{2}<\dfrac{\pi}{4}$, si ottiene

$$p=\frac{1+t^2}{2t}+\frac{1+t^2}{1-t^2}+\frac{(1+t^2)^2}{2t(1-t^2)}.$$

Riducendo allo stesso denominatore $2t(1-t^2)$, il numeratore diventa

$$(1-t^4)+(2t+2t^3)+(1+t^2)^2=2t^3+2t^2+2t+2=2(t+1)(t^2+1),$$

per cui

$$p=\frac{2(t+1)(t^2+1)}{2t(1-t)(1+t)}=\frac{t^2+1}{t(1-t)},\qquad 0<t<1.$$

## b) Studio della funzione

Studiamo $p(t)=\dfrac{t^2+1}{t(1-t)}$ prescindendo dai limiti geometrici.

**Dominio.** Occorre $t(1-t)\neq0$, quindi il dominio è $t<0$, oppure $0<t<1$, oppure $t>1$. Vista l'asimmetria del dominio, la funzione non è né pari né dispari.

**Intersezioni con gli assi.** Il valore $t=0$ è escluso; ponendo $p=0$ si avrebbe $t^2+1=0$, impossibile. Il grafico non interseca gli assi cartesiani.

**Segno.** Il numeratore $t^2+1$ è sempre positivo, quindi $p>0$ se e solo se $t(1-t)>0$, cioè per $0<t<1$.

**Limiti e asintoti.**

$$\lim_{t\to\pm\infty}\frac{t^2+1}{t(1-t)}=-1\;\Rightarrow\; y=-1 \text{ asintoto orizzontale};$$

$$\lim_{t\to 0^{\pm}}\frac{t^2+1}{t(1-t)}=\pm\infty\;\Rightarrow\; t=0 \text{ asintoto verticale};$$

$$\lim_{t\to 1^{\pm}}\frac{t^2+1}{t(1-t)}=\mp\infty\;\Rightarrow\; t=1 \text{ asintoto verticale}.$$

**Intersezione con l'asintoto orizzontale.** Da $\dfrac{t^2+1}{t(1-t)}=-1$ segue $t^2+1=-t+t^2$, cioè $t=-1$. La curva incontra l'asintoto orizzontale nel punto $(-1,\,-1)$.

**Derivata prima.** Scrivendo $p=\dfrac{t^2+1}{t-t^2}$,

$$p'=\frac{2t(t-t^2)-(t^2+1)(1-2t)}{(t-t^2)^2}=\frac{t^2+2t-1}{(t-t^2)^2}.$$

Poiché il denominatore è positivo, il segno di $p'$ è quello di $t^2+2t-1$, che si annulla per $t=-1\pm\sqrt{2}$. Dunque $p'\ge 0$ per $t\le -1-\sqrt{2}$ oppure $t\ge -1+\sqrt{2}$: in tali intervalli la funzione cresce, altrove decresce. Si hanno perciò un massimo relativo in $t=-1-\sqrt{2}$, con

$$p\bigl(-1-\sqrt{2}\bigr)=2-2\sqrt{2}\approx-0.83,$$

e un minimo relativo in $t=-1+\sqrt{2}=\sqrt{2}-1$, con

$$p\bigl(\sqrt{2}-1\bigr)=2+2\sqrt{2}\approx 4.83.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="446.11" height="226.253" viewBox="-72 -72 334.582 169.69"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-37.53 77.422h288.965"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M249.555 75.022c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-29.849" y="77.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(285.217 3.075)">t</text><path fill="none" d="M-29.849 82.885v-141.64"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-32.248-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-29.849" y="77.422" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.516 -142.054)">p</text><path fill="none" stroke-dasharray="3.0,3.0" d="M226.226 80.154V-59.154"/><text x="-29.849" y="77.422" stroke="none" font-family="cmr10" font-size="10" transform="translate(253.575 12.709)">1</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-9.362-47.08 2.227 10.972 2.227 8.964 2.227 7.471 2.228 6.306 2.227 5.38 2.227 4.64L6.228.7l2.228 3.539 2.227 3.125 2.227 2.766 2.227 2.47 2.227 2.216 2.228 1.984 2.227 1.79 2.227 1.613 2.227 1.457 2.227 1.32 2.228 1.201 2.227 1.093 2.227.988 2.227.902 2.228.815 2.227.739 2.227.672 2.227.606 2.227.54 2.228.492 2.227.437 2.227.385 2.227.34 2.227.296 2.228.25 2.227.215 2.227.17 2.227.137 2.228.102 2.227.066 2.227.03 2.227-.002 2.227-.035 2.228-.07 2.227-.098 2.227-.13 2.227-.165 2.227-.192 2.228-.227 2.227-.26 2.227-.292 2.227-.323 2.227-.356 2.228-.39 2.227-.429 2.227-.465 2.227-.497 2.228-.54 2.227-.576 2.227-.621 2.227-.662 2.227-.708 2.228-.757 2.227-.804 2.227-.86 2.227-.914 2.227-.976 2.228-1.035 2.227-1.105 2.227-1.174 2.227-1.253 2.228-1.334 2.227-1.42 2.227-1.518 2.227-1.626 2.227-1.733 2.228-1.857 2.227-1.985 2.227-2.14 2.227-2.303L164.36-.86l2.228-2.675 2.227-2.905 2.227-3.147 2.227-3.421 2.228-3.739 2.227-4.11 2.227-4.51 2.227-4.976 2.227-5.517 2.228-6.169 2.227-6.904"/><path fill="none" stroke-dasharray="3.0,3.0" d="M76.217 77.422v-43.96M-29.849 33.463H76.217"/><path stroke="none" d="M77.915 33.463a1.697 1.697 0 1 0-3.395 0 1.697 1.697 0 0 0 3.395 0m-1.698 0"/><g stroke="none"><text x="-29.849" y="69.15" font-family="cmsy10" font-size="10" transform="translate(90.788 15.337)">p</text><path d="M69.273 84.087h5v.4h-5z"/><text x="-21.515" y="77.422" font-family="cmr10" font-size="10" transform="translate(90.788 15.337)">2</text><text x="-14.293" y="77.422" font-family="cmsy10" font-size="10" transform="translate(90.788 15.337)">¡</text><text x="-4.293" y="77.422" font-family="cmr10" font-size="10" transform="translate(90.788 15.337)">1</text></g><g stroke="none"><text x="-29.849" y="77.422" font-family="cmr10" font-size="10" transform="translate(-39.089 -40.087)">2</text><text x="-22.626" y="77.422" font-family="cmr10" font-size="10" transform="translate(-39.089 -40.087)">+</text><text x="-12.626" y="77.422" font-family="cmr10" font-size="10" transform="translate(-39.089 -40.087)">2</text><text x="-7.626" y="69.15" font-family="cmsy10" font-size="10" transform="translate(-39.089 -40.087)">p</text><path d="M-38.382 28.663h5v.4h-5z"/><text x=".707" y="77.422" font-family="cmr10" font-size="10" transform="translate(-39.089 -40.087)">2</text></g></g></svg>
</figure>

**Interpretazione geometrica.** Solo il ramo $0<t<1$ ha significato per il problema: qui $p$ decresce da $+\infty$ (per $t\to 0^+$) fino al minimo $2+2\sqrt{2}$, raggiunto in $t=\sqrt{2}-1$, per poi crescere di nuovo verso $+\infty$ (per $t\to 1^-$). Il minimo corrisponde a $\dfrac{x}{2}=\arctan(\sqrt{2}-1)=22.5^\circ$, cioè $x=45^\circ$: il perimetro è minimo quando il triangolo è rettangolo isoscele.

## c) Il caso $p=6$

Imponendo $p=6$:

$$\frac{t^2+1}{t-t^2}=6\;\Rightarrow\; t^2+1=6t-6t^2\;\Rightarrow\; 7t^2-6t+1=0,$$

da cui

$$t=\frac{3\pm\sqrt{2}}{7}.$$

Entrambe le soluzioni cadono in $(0,1)$. Poiché $t=\tan\dfrac{x}{2}$:

$$\tan\frac{x}{2}=\frac{3+\sqrt{2}}{7}\;\Rightarrow\; \frac{x}{2}=\arctan\frac{3+\sqrt{2}}{7}\approx 32^\circ 14',\qquad x\approx 64^\circ 28';$$

$$\tan\frac{x}{2}=\frac{3-\sqrt{2}}{7}\;\Rightarrow\; \frac{x}{2}=\arctan\frac{3-\sqrt{2}}{7}\approx 12^\circ 46',\qquad x\approx 25^\circ 32'.$$

I due valori di $x$ sono complementari ($64^\circ 28'+25^\circ 32'=90^\circ$), come ci si aspetta per la simmetria della figura rispetto allo scambio dei due cateti.

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/geometria #cluster/geometria
