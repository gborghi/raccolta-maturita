

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_5|2002 Suppletiva PNI — Questionario — Quesito 5]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Utilizzando il teorema di Rolle, si deve provare che tra due radici reali dell'equazione $e^{x}\sin x = 1$ vi è almeno una radice reale dell'equazione $e^{x}\cos x = -1$.

Siano $a$ e $b$ due radici reali dell'equazione $e^{x}\sin x = 1$; possiamo supporre $a < b$. Esse sono dunque soluzioni dell'equazione equivalente
$$e^{x}\sin x - 1 = 0.$$

Moltiplicando entrambi i membri per $e^{-x}$, che è una quantità sempre positiva e quindi mai nulla, l'insieme delle soluzioni non cambia e si ottiene
$$e^{-x}\left(e^{x}\sin x - 1\right) = 0 \Rightarrow \sin x - e^{-x} = 0.$$

Pertanto $a$ e $b$ sono radici dell'equazione $\sin x - e^{-x} = 0$. Consideriamo allora la funzione
$$f(x) = \sin x - e^{-x}.$$

Questa funzione è continua e derivabile su tutto $\mathbb{R}$, in quanto somma di funzioni continue e derivabili; in particolare è continua nell'intervallo chiuso e limitato $[a;b]$ e derivabile nell'intervallo aperto $(a;b)$. Inoltre, per quanto osservato,
$$f(a) = f(b) = 0.$$

Sono quindi soddisfatte tutte le ipotesi del **teorema di Rolle** nell'intervallo $[a;b]$: esiste almeno un punto $c$, interno all'intervallo $(a;b)$, in cui la derivata prima si annulla, cioè $f'(c) = 0$.

Calcoliamo la derivata:
$$f'(x) = \cos x + e^{-x}.$$

Imponendo $f'(c) = 0$ si ottiene
$$\cos c + e^{-c} = 0.$$

Moltiplicando entrambi i membri per $e^{c}$, che è diverso da zero, si ricava
$$e^{c}\cos c + 1 = 0 \Rightarrow e^{c}\cos c = -1.$$

Dunque il punto $c$, compreso tra le due radici $a$ e $b$, annulla l'espressione $e^{x}\cos x + 1$, cioè è una radice reale dell'equazione
$$e^{x}\cos x = -1.$$

Resta così provato che tra due radici reali di $e^{x}\sin x = 1$ esiste sempre almeno una radice reale di $e^{x}\cos x = -1$.

*Fonte:* [📄 PDF p.54](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
