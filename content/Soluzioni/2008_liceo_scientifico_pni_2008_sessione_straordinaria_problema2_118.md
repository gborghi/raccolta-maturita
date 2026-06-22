---
tipo: soluzione
prova_stem: 2008_liceo_scientifico_pni_2008_sessione_straordinaria_problema2_118
pdf: Prova_Maturita_2008.pdf
source: text
title: 2008 PNI Straordinaria — Problema 2 — Svolgimento
---


Liceo Scientifico PNI 2008
Sessione $Straordinaria-$ Problema $2$

PNI 2008 - SESSIONE STRAORDINARIA - PROBLEMA $2$

Si consideri la funzione

f(x) = {e
$(x^{2}-1)$ , se $|x| < 1;$
$0,$ se $|x| \ge 1;$

Si dica se questa funzione è continua nei punti in cui $|x| = 1.$

Analizziamo la continuità in $x=1:$

$$ lim $$
$x\to 1+$ f(x) = lim
$x\to 1+(0) = 0 = f(1)$ : continua da destra in $x= 1$

$$ lim $$
$x\to 1-f(x) =$ lim
$x\to 1-e$
$(x^{2}-1) = 0 = f(1)$ : continua da sinistra in $x= 1$

La funzione è continua in $x=1.$

Analizziamo la continuità in $x=-1:$

Essendo la funzione pari, la funzione è continua anche in $x=-1.$

Si studi tale funzione e si tracci il suo grafico $\gamma$ , su un piano riferito $ad$ un sistema di assi
cartesiani ortogonali Oxy.

f(x) = {e
$(x^{2}-1)$ , se $|x| < 1;$
$0,$ se $|x| \ge 1;$

Studiamo la funzione per $-1 < x< 1$ (in tutti gli altri punti coincide con l’asse $x)-$

f(x) = e
$(x^{2}-1)$ (per $-1 < x< 1).$

Liceo Scientifico PNI 2008
Sessione $Straordinaria-$ Problema $2$

Nell’intervallo di studio la funzione è continua e derivabile ed è sempre positiva. Abbiamo
già visto i limiti nel punto precedente. Abbiamo già notato che la funzione è pari.

Se $x=0$ risulta f(x) =
$e\cong 0.34$ ; se $y=0$ f(x) = mai.

Derivata prima:

f'(x) = -
$2x$ e
$x^{2}-1$
$(x^{2} -1)^{2} \ge 0$ se $x< 0;$ la funzione è crescente se $-1 < x< 0$ e decrescente
se $0 < x< 1; x=0$ è punto di minimo relativo (ed anche assoluto), con ordinata
$e\cong 0.34.$

Derivata seconda:

f''(x) =
$6x4e$
$x^{2}-1 -2e$
$x^{2}-1$
$x^{8} -4x^{6} + 6x^{4} -4x^{2} + 1 =$
$(6x^{4} -2)$
$(x^{2} -1)^{4}$ ∙e
$x^{2}-1 \ge 0$ se $3x^{4} \ge 1$ ,
$x\le -1$
$$ \sqrt{3} 4 $$
vel $x\ge 1$
$$ \sqrt{3} 4 $$

Quindi il grafico volge la concavità verso l’alto se $-1 < x< -$
$$ 1 \sqrt{3 $$
$4$ e
$$ 1 \sqrt{3} 4 $$
$< x< 1,$ e verso
il basso se -
$$ 1 \sqrt{3} 4 $$
$< x<$
$$ 1 \sqrt{3 $$
$4$ ; si hanno due flessi per $x= \pm$
$$ 1 \sqrt{3 $$
$4$ , con ordinata
$f(\pm$
$$ 1 \sqrt{3 $$
$4 ) =$ e
$$ 1 1 $$
$\sqrt{3}-1 =$ e
$$ \sqrt{3 $$
$1-\sqrt{3}.$

Il grafico completo della funzione è il seguente:

Si scriva l’equazione della normale a $\gamma$ nel punto di ascissa $x=$
$$ 1 \sqrt{2} . $$

Il punto di ascissa $x=$
$\sqrt{2}$ ha ordinata $y= f($
$\sqrt{2}) =$ e
$$ 1 1 $$
$2-1 = e-2$

Liceo Scientifico PNI 2008
Sessione $Straordinaria-$ Problema $2$

Cerchiamo il coefficiente della tangente nel punto di ascissa $x=$
$$ 1 \sqrt{2}: $$

f'(x) $= -2x$ e
$x^{2}-1$
$(x^{2} -1)^{2} , f' ( 1$
$$ \sqrt{2 $$
) $= -\sqrt{2}$
$$ 1 4 $$
$∙e-2 = -4\sqrt{2}$
$$ e^{2 $$
Il coefficiente angolare della normale è quindi:

$m=$
$$ e^{2 $$
$4\sqrt{2}$ . La normale ha equazione: $y-e-2 =$
$$ e^{2 $$
$4\sqrt{2} (x-$
$\sqrt{2}) ; y=$
$$ e^{2 $$
$4\sqrt{2} x-$
$$ e^{2 $$
$8 + e-2.$

Utilizzando uno dei metodi di integrazione numerica studiati, si calcoli un valore
approssimato dell’area della superficie piana, delimitata dalla curva $\gamma$ e dall’asse delle $x.$

Rappresentiamo graficamente la superficie indicata:

L’area richiesta è data da:

$Area= \int$ f(x)
$-1$
$dx= 2 \int$ f(x)
$$ 1 0 $$
$dx$ dove f(x) = {e
$(x^{2}-1)$ , se $|x| < 1;$
$0,$ se $|x| \ge 1;$

Calcoliamo con il metodo del trapezi l’integrale:

$I= \int$ f(x)
$$ 1 0 dx $$

Ricordiamo la formula dei trapezi:

$\int f(x)dx\cong b-a$
$[f(x^{0}) +$ f(xn)
$+ f(x^{1}) + f(x^{2}) + ⋯+ f(xn-1)]$
$$ b a $$

Liceo Scientifico PNI 2008
Sessione $Straordinaria-$ Problema $2$

Consideriamo la funzione f(x) = e
$(x^{2}-1)$ e l’intervallo $[0;1];$ dividiamo l’intervallo in $n=5$
parti.

$\int$ f(x)dx
$$ 1 0 $$
$\cong h[f(x^{0}) + f(x^{5})$
$+ f(x^{1}) + f(x^{2}) + f(x^{3}) + f(x^{4})]$

Dove: $h=$
$1-0$
$$ 5 = 1 $$
$5 = 0.2 x^{0} = 0, x^{1} = 0 + h= 0.2, x^{2} = 0.4, x^{3} = 0.6, x^{4} = 0.8, x^{5} = 1$

$\int$ f(x)dx
$$ 1 0 $$
$\cong 0.2 [f(0) + f(1)$
$+ f(0.2) + f(0.4) + f(0.6) + f(0.8)] =$

$= 0.2 [e-1 + 0$
+ e
$0.22-1 +$ e
$0.42-1 +$ e
$0.62-1 +$ e
$0.82-1] = 0.2 ∙1.1127 \cong 0.22$

Quindi:

$Area= 2 \int$ f(x)
$$ 1 0 $$
$dx \cong 0.44 u^{2}$

Con la collaborazione di Angela Santamaria
