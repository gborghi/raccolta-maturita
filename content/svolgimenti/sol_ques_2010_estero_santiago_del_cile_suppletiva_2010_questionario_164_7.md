---
title: 2010 Estero Santiago Suppletiva — Questionario — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2010_estero_santiago_del_cile_suppletiva_2010_questionario_164_7
of_item: ques_2010_estero_santiago_del_cile_suppletiva_2010_questionario_164_7
prova_id: prova_2010_estero_santiago_del_cile_suppletiva_2010_questionario_164
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Quesito:** [[Quesiti/ques_2010_estero_santiago_del_cile_suppletiva_2010_questionario_164_7|2010 Estero Santiago Suppletiva — Questionario — Quesito 7]] · **Prova:** [[Prove/2010_estero_santiago_del_cile_suppletiva_2010_questionario_164|2010 Estero Santiago Suppletiva — Questionario]]

Estero (Santiago del Cile)

QUESITO $7$

Si dimostri che l’equazione $ex+ 3x= 0$ ammette una ed una sola soluzione $\alpha$ . Si
determini l’intervallo di ampiezza $10-1$ cui $\alpha$ appartiene.

Confrontiamo i grafici delle funzioni a(x) $= ex$ e b(x) $= -3x:$

Si osserva facilmente che le due curve si intersecano in un solo punto, quindi l’equazione
data ha una ed una sola soluzione.

La seconda richiesta equivale a trovare il valore della radice a meno di un decimo.
Isoliamo la radice. Essendo $b(-1) > a(-1)$ e $b(0) < a(0)$ , la radice richiesta appartiene
all’intervallo $[-1; 0].$

Possiamo quindi utilizzare il metodo delle tangenti.

Posto f(x) $= ex+ 3x$ ed [a; b] $= [-1; 0]$ osserviamo che $f(-1) < 0$ ed $f(0) > 0,$ inoltre
la funzione è continua e derivabile nell’intervallo in questione ed è f'(x) $= ex+ 3,$
f''(x) $= ex> 0$ nell'intervallo in questione. Pertanto: f(a) ∙f''(x) $< 0$ per ogni $x$
dell’intervallo, quindi dobbiamo assumere come punto iniziale nella formula iterativa di
Newton il punto $x^{0} = b= 0.$

$xn+1 = xn-f(xn)$
f'(xn)

f(x) $= ex+ 3x$ f'(x) $= ex+ 3$

$x^{1} = x^{0} -f(x^{0})$
$f'(x^{0}) = 0 -f(0)$
$f'(0) = -1$
$4 = -0.25$

Estero (Santiago del Cile)

$x^{2} = x^{1} -f(x^{1})$
$f'(x^{1}) = -0.25 -f(-0.25)$
$f'(-0.25) \cong -0.26$

$x^{3} = x^{2} -f(x^{2})$
$f'(x^{2}) = -0.26 -f(-0.26)$
$f'(-0.26) \cong -0.26$

Quindi la radice è compresa fra $-0.3$ e $-0.2$ .

Usiamo il metodo di bisezione:

f(x) $= ex+ 3x , a= -1, b= 0$ ,
[a; b] $= [-1; 0],$ f(a) $= -2.63,$
f(b) $= 1$
$c= a+ b$
$= -0.5$ , f(c) $= -0.89,$
$c\to$ a: $[-0.5; 0]$
$c= a+ b$
$= -0.25$ , f(c) $= 0.03,$
$c\to b: [-0.5; -0.25]$
$c= a+ b$
$= -0.38$ , f(c) $= -0.46,$
$c\to$ a: $[-0.38; -0.25]$
$c= a+ b$
$= -0.32$ , f(c) $= -0.23,$
$c\to$ a: $[-0.32; -0.25]$
$c= a+ b$
$= -0.29$ , f(c) $= -0.12,$
$c\to$ a: $[-0.29; -0.25]$

Quindi la radice richiesta, a meno di $1$ decimo, è $-0.2$ (è compresa fra $- 0.3$ e $- 0.2).$

*Fonte:* [📄 PDF p.168](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
