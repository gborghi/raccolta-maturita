

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_7|2006 Sessione Ordinaria — Prova (p.10) — Quesito 7]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

Si consideri il limite

$$\lim_{x\to 0^+}\left(1-\frac{x}{2}\right)^{\frac{1}{x}}.$$

Esso è uguale a: [A] $e^{2}$; [B] $e^{-2}$; [C] $\sqrt{e}$; [D] $\dfrac{1}{\sqrt{e}}$, dove $e$ è il numero di Nepero. Individuare l'unica alternativa corretta e fornire una spiegazione esauriente.

## Impostazione

Ricordiamo il limite notevole

$$\lim_{t\to 0}\left(1+t\right)^{\frac{1}{t}}=e.$$

L'idea è ricondurre la base $1-\dfrac{x}{2}=1+\left(-\dfrac{x}{2}\right)$ alla forma $1+t$ con $t\to 0$, in modo da far comparire il fattore $\dfrac{1}{t}$ all'esponente.

## Riscrittura dell'esponente

Poniamo $t=-\dfrac{x}{2}$. Quando $x\to 0^+$ si ha $t\to 0^-$. Inoltre

$$\frac{1}{x}=\frac{1}{x}\cdot\frac{-\dfrac{x}{2}}{-\dfrac{x}{2}}=\left(-\frac{1}{2}\right)\cdot\frac{1}{\left(-\dfrac{x}{2}\right)}=\left(-\frac{1}{2}\right)\cdot\frac{1}{t}.$$

Pertanto

$$\left(1-\frac{x}{2}\right)^{\frac{1}{x}}=\left(1+t\right)^{-\frac{1}{2}\cdot\frac{1}{t}}=\left[\left(1+t\right)^{\frac{1}{t}}\right]^{-\frac{1}{2}}.$$

## Calcolo del limite

Poiché la funzione $y\mapsto y^{-1/2}$ è continua per $y>0$, possiamo passare al limite nella base:

$$\lim_{x\to 0^+}\left(1-\frac{x}{2}\right)^{\frac{1}{x}}=\left[\lim_{t\to 0^-}\left(1+t\right)^{\frac{1}{t}}\right]^{-\frac{1}{2}}=e^{-\frac{1}{2}}=\frac{1}{\sqrt{e}}.$$

## Conclusione

Il limite vale $\dfrac{1}{\sqrt{e}}=e^{-1/2}$: la risposta esatta è la **[D]**.

*Fonte:* [📄 PDF p.24](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
