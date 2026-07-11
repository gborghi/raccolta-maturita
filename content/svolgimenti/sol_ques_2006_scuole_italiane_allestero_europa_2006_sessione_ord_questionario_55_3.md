

**Quesito:** [[Quesiti/ques_2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55_3|2006 Estero Europa — Questionario — Quesito 3]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55|2006 Estero Europa — Questionario]]

La funzione $f(x) = 10^{x+8}$ è invertibile? Perché? Quali sono le derivate di $f$ e di $f^{-1}$? In generale, come si calcola la derivata della funzione inversa?

## Invertibilità

La funzione $f(x) = 10^{x+8}$ è una funzione esponenziale di base $10 > 1$ composta con la funzione lineare crescente $x \mapsto x+8$: è quindi definita su tutto $\mathbb{R}$ e strettamente crescente. Essendo strettamente monotona, è iniettiva e perciò **invertibile** (la sua immagine è l'intervallo $(0,+\infty)$, su cui è definita l'inversa).

## Derivata di $f$

Ricordando che $D\big(a^{g(x)}\big) = a^{g(x)}\cdot \ln a \cdot g'(x)$, con $a = 10$ e $g(x) = x+8$ (per cui $g'(x)=1$) si ottiene

$$f'(x) = 10^{x+8}\cdot \ln 10.$$

Poiché $10^{x+8} > 0$ e $\ln 10 > 0$, risulta $f'(x) > 0$ per ogni $x$, confermando che $f$ è ovunque crescente.

## Espressione dell'inversa

Per determinare $f^{-1}$ ricaviamo $x$ dall'equazione $y = 10^{x+8}$. Passando al logaritmo in base $10$ (indicato con $\log$):

$$x + 8 = \log y \quad\Rightarrow\quad x = \log y - 8.$$

Scambiando i nomi delle variabili, l'inversa è

$$f^{-1}(x) = \log x - 8, \qquad x > 0.$$

## Derivata dell'inversa

Derivando direttamente, poiché $D(\log x) = \dfrac{1}{x\,\ln 10}$, si ha

$$\big(f^{-1}\big)'(x) = \frac{1}{x\,\ln 10}.$$

## Regola generale per la derivata della funzione inversa

Se $f$ è derivabile e invertibile con $f'\big(f^{-1}(y)\big) \neq 0$, allora l'inversa è derivabile e

$$\big(f^{-1}\big)'(y) = \frac{1}{f'\big(f^{-1}(y)\big)}.$$

Verifichiamolo nel nostro caso. Posto $x = f^{-1}(y) = \log y - 8$, si ha

$$f'\big(f^{-1}(y)\big) = 10^{(\log y - 8)+8}\cdot \ln 10 = 10^{\log y}\cdot \ln 10 = y\,\ln 10,$$

da cui

$$\big(f^{-1}\big)'(y) = \frac{1}{y\,\ln 10},$$

in perfetto accordo con la derivata calcolata direttamente.

*Fonte:* [📄 PDF p.56](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
