

**Problema:** [[Problemi/prob_2002_pni_2002_sessione_straordinaria_problema1_81_1|2002 Straordinaria PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2002_pni_2002_sessione_straordinaria_problema1_81|2002 Straordinaria PNI — Problema 1]]

Considerato il sistema lineare nelle incognite $x,\,y,\,z$:

$$\begin{cases} x+ay+a^{2}z=1 \\ x+ay+abz=a \\ bx+a^{2}y+a^{2}bz=a^{2}b \end{cases}$$

## a)

Discutiamo il sistema al variare dei parametri reali $a,\,b$. Il determinante della matrice dei coefficienti è

$$\det A=\begin{vmatrix} 1 & a & a^{2} \\ 1 & a & ab \\ b & a^{2} & a^{2}b \end{vmatrix}=a^{2}(a-b)^{2}.$$

Distinguiamo i casi:

- **$a\ne 0$ e $a\ne b$:** $\det A\ne 0$, quindi per il teorema di Cramer il sistema è **determinato**.
- **$a=0$:** le prime due equazioni diventano $x=1$ e $x=0$, incompatibili tra loro. Il rango di $A$ vale $1$, mentre quello della matrice completa $B$ vale $2$: per il teorema di Rouché–Capelli il sistema è **impossibile**.
- **$a=b$ (con $a\ne 0$):** le colonne di $A$ risultano proporzionali. Se $a=b=1$ anche la colonna dei termini noti è proporzionale alle altre, dunque $\operatorname{rango}A=\operatorname{rango}B=1$: il sistema è **indeterminato** con $\infty^{\,n-r}=\infty^{\,3-1}=\infty^{2}$ soluzioni. Se invece $a=b\ne 0,1$ si ha $\operatorname{rango}A=1$ e $\operatorname{rango}B=2$, quindi il sistema è **impossibile**.

In sintesi:

$$\begin{cases} a\ne 0 \text{ e } a\ne b: & \text{determinato} \\ a=0: & \text{impossibile} \\ a=b=1: & \text{indeterminato, } \infty^{2}\text{ soluzioni} \\ a=b\ne 1: & \text{impossibile} \end{cases}$$

## b)

Supponiamo che la terna $(x,\,y,\,z)$ sia soluzione del sistema, quindi ci poniamo nel caso determinato $a\ne 0$, $a\ne b$. Applicando il teorema di Cramer, con $D=\det A=a^{2}(a-b)^{2}$, si ottengono

$$x=\frac{a^{2}(1-b)}{a-b},\qquad y=\frac{b(a^{2}-1)}{a(a-b)},\qquad z=\frac{1-a}{a(a-b)}.$$

Sostituendo nell'equazione della curva $y-\dfrac{b}{a(a-b)}=\dfrac{x}{a}+z$ ricaviamo

$$\frac{b(a^{2}-1)}{a(a-b)}-\frac{b}{a(a-b)}=\frac{a(1-b)}{a-b}+\frac{1-a}{a(a-b)}.$$

Da cui $b(a^{2}-1)-b=a^{2}(1-b)+1-a$, cioè $b\big(a^{2}-1-1+a^{2}\big)=a^{2}+1-a$, e infine l'equazione della curva nel piano $(a,b)$:

$$b=f(a)=\frac{a^{2}-a+1}{2(a^{2}-1)}$$

(con l'esclusione del punto di ascissa $a=0$, dove $b=-\tfrac12$, e dei punti della retta $b=a$, bisettrice del primo e terzo quadrante).

Studiamo la funzione $f$.

**Dominio.** Deve essere $a\ne\pm 1$, dunque $-\infty<a<-1$, $-1<a<1$, $1<a<+\infty$. La funzione non è né pari né dispari.

**Intersezioni con gli assi.** Per $a=0$ si ha $b=-\tfrac12$; non vi sono zeri reali, poiché $a^{2}-a+1>0$ per ogni $a$ (discriminante negativo).

**Segno.** Essendo $a^{2}-a+1>0$ sempre, risulta $b>0$ dove $a^{2}-1>0$, cioè per $a<-1$ oppure $a>1$.

**Limiti e asintoti.**

$$\lim_{a\to\pm\infty}\frac{a^{2}-a+1}{2(a^{2}-1)}=\frac12,$$

quindi $b=\tfrac12$ è asintoto orizzontale. Inoltre

$$\lim_{a\to(-1)^{\mp}}f(a)=\pm\infty,\qquad \lim_{a\to(1)^{\mp}}f(a)=\mp\infty,$$

perciò $a=-1$ e $a=1$ sono asintoti verticali.

**Derivata prima.**

$$f'(a)=\frac{a^{2}-4a+1}{2(a^{2}-1)^{2}}.$$

Il segno dipende dal numeratore: $f'(a)\ge 0$ se $a^{2}-4a+1\ge 0$, cioè per $a\le 2-\sqrt{3}$ oppure $a\ge 2+\sqrt{3}$. La funzione è quindi crescente per $a<2-\sqrt{3}$ e per $a>2+\sqrt{3}$, decrescente per $2-\sqrt{3}<a<2+\sqrt{3}$. Ne segue che $a=2-\sqrt{3}$ è punto di massimo relativo, con ordinata $-\dfrac{\sqrt{3}}{4}$, e $a=2+\sqrt{3}$ è punto di minimo relativo, con ordinata $\dfrac{\sqrt{3}}{4}$. Poiché $\dfrac{\sqrt{3}}{4}<\dfrac12$, la curva interseca l'asintoto orizzontale.

Il grafico della curva è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="309.568" height="199.93" viewBox="-72 -72 232.176 149.947"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 31.726 2.704)"><clipPath id="pgfd3116c7d08af9dafd89a6547e761660bcp1"><path d="M-103.996-74.974V74.974h232.177V-74.974ZM128.181 74.974"/></clipPath><g clip-path="url(#pgfd3116c7d08af9dafd89a6547e761660bcp1)"><path fill="none" d="M-103.996 0h231.777"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M125.9 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="31.726" y="2.704" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 99.988 .55)">a</text><path fill="none" d="M0-74.974V74.574"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 72.694c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="31.726" y="2.704" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -33.871 81.21)">b</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-24.185-74.974V74.974M24.185-74.974V74.974"/><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-103.996 12.093h232.177"/><g fill="gray" stroke="none"><text x="31.726" y="2.704" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 68.911 21.778)">b</text><text x="38.795" y="2.704" font-family="cmr10" font-size="10" transform="matrix(1 0 0 -1 68.911 21.778)">=</text><text x="50.551" y="-1.234" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 68.911 21.778)">1</text><path d="M119.462 21.774h3.986v-.4h-3.986z"/><text x="50.551" y="6.152" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 68.911 21.778)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-96.74 16.93.894.066.894.068.893.07.894.072.894.074.894.076.894.078.893.08.894.083.894.085.894.088.894.09.893.094.894.096.894.1.894.101.894.106.893.11.894.112.894.117.894.121.894.125.893.13.894.135.894.14.894.144.894.15.893.157.894.162.894.17.894.175.894.184.893.192.894.2.894.209.894.22.894.228.893.24.894.253.894.265.894.278.894.294.893.308.894.327.894.345.894.365.894.388.893.412.894.437.894.467.894.5.894.534.893.573.894.616.894.666.894.718.894.78.893.85.894.926.894 1.018.894 1.118.894 1.24.893 1.377.894 1.54.894 1.734.894 1.966.894 2.247.893 2.59.894 3.025.894 3.567.894 4.278.894 5.217.893 6.501.894 8.32.894 11.03.894 15.317.894 22.665.893 36.954.894 71.007M-22.25-217.773l.563 51.064.563 32.273.563 22.215.563 16.236.564 12.38.563 9.746.563 7.869.563 6.48.563 5.428.563 4.614.563 3.966.564 3.444.563 3.019.563 2.662.563 2.368.563 2.116.563 1.901.563 1.717.564 1.555.563 1.418.563 1.291.563 1.183.563 1.088.563.999.563.921.564.85.563.788.563.728.563.672.563.626.563.583.564.537.563.498.563.465.563.428.563.396.563.366.563.336.564.307.563.286.563.253.563.23.563.208.563.184.563.157.564.136.563.11.563.09.563.063.563.037.563.014.563-.012.564-.041.563-.07.563-.1.563-.132.563-.17.563-.205.563-.252.564-.295.563-.348.563-.407.563-.474.563-.551.563-.634.563-.74.564-.86.563-1.012.563-1.182.563-1.401.563-1.678.563-2.029.563-2.49.564-3.118.563-3.988.563-5.27.563-7.246.563-10.557.563-16.737M26.12 78.95l1.2-28.72 1.2-12.724 1.199-7.13 1.2-4.53 1.2-3.115 1.2-2.258 1.199-1.703 1.2-1.322 1.2-1.05 1.2-.852 1.199-.698 1.2-.583 1.2-.489 1.2-.414 1.199-.355 1.2-.306 1.2-.265 1.199-.23 1.2-.202 1.2-.176 1.2-.156 1.199-.137 1.2-.122 1.2-.108 1.2-.096 1.199-.085 1.2-.076 1.2-.069 1.199-.06 1.2-.054 1.2-.05 1.2-.043 1.199-.038 1.2-.035 1.2-.03 1.2-.028 1.199-.025 1.2-.021 1.2-.02 1.199-.017 1.2-.015 1.2-.013 1.2-.01 1.199-.01 1.2-.01 1.2-.006 1.2-.006 1.199-.005 1.2-.004 1.2-.002 1.2-.003h1.199l1.2-.002h1.2l1.199.001 1.2.001 1.2.002 1.2.002 1.199.003 1.2.002 1.2.004 1.2.004 1.199.003 1.2.004 1.2.005 1.199.004 1.2.005 1.2.005 1.2.006 1.199.005 1.2.005 1.2.006 1.2.005 1.199.006 1.2.006 1.2.006 1.199.006 1.2.007 1.2.006"/><path stroke="none" d="M56.5-10.472a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0M91.80999999999999 10.472a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0m-1.6 0"/></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/algebra #cluster/algebra
