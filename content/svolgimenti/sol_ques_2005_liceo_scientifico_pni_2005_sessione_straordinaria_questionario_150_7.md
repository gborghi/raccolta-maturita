

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_7|2005 PNI Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Dobbiamo calcolare la derivata rispetto a $x$ della funzione integrale
$$F(x)=\int_{-x}^{2x}\frac{dt}{\sin t}\ .$$

La funzione integranda $f(t)=\dfrac{1}{\sin t}$ è continua in ogni intervallo che non contenga i punti in cui $\sin t=0$, cioè i punti $t=k\pi$ con $k$ intero. Supponiamo dunque che gli estremi $-x$ e $2x$ appartengano a uno stesso intervallo di continuità (in modo che $F(x)$ sia definita) e ricordiamo i due strumenti che servono:

- il **teorema fondamentale del calcolo integrale**, per cui, se $f$ è continua e $\displaystyle G(u)=\int_{a}^{u} f(t)\,dt$, allora $G'(u)=f(u)$;
- il **teorema di derivazione della funzione composta**, per cui la derivata di $\displaystyle \int_{a}^{g(x)} f(t)\,dt$ rispetto a $x$ vale $f\big(g(x)\big)\cdot g'(x)$.

Fissiamo un punto $a$ compreso fra $-x$ e $2x$ e spezziamo l'integrale sfruttando l'additività:
$$F(x)=\int_{-x}^{2x}\frac{dt}{\sin t}=\int_{-x}^{a}\frac{dt}{\sin t}+\int_{a}^{2x}\frac{dt}{\sin t}=-\int_{a}^{-x}\frac{dt}{\sin t}+\int_{a}^{2x}\frac{dt}{\sin t}\ .$$

Deriviamo i due termini rispetto a $x$. Per il secondo integrale, con estremo superiore $g(x)=2x$ e $g'(x)=2$:
$$\frac{d}{dx}\int_{a}^{2x}\frac{dt}{\sin t}=\frac{1}{\sin(2x)}\cdot 2=\frac{2}{\sin(2x)}\ .$$

Per il primo termine, con estremo superiore $h(x)=-x$ e $h'(x)=-1$:
$$\frac{d}{dx}\left(-\int_{a}^{-x}\frac{dt}{\sin t}\right)=-\,\frac{1}{\sin(-x)}\cdot(-1)=\frac{1}{\sin(-x)}=-\frac{1}{\sin x}\ ,$$
avendo usato $\sin(-x)=-\sin x$.

Sommando i due contributi otteniamo la derivata cercata:
$$F'(x)=\frac{2}{\sin(2x)}-\frac{1}{\sin x}\ .$$

Il risultato si può semplificare con la formula di duplicazione $\sin(2x)=2\sin x\cos x$, da cui $\dfrac{2}{\sin(2x)}=\dfrac{1}{\sin x\cos x}$. Quindi
$$F'(x)=\frac{1}{\sin x\cos x}-\frac{1}{\sin x}=\frac{1-\cos x}{\sin x\cos x}\ .$$

La derivata è definita per $\sin x\cos x\neq 0$, cioè per $x\neq k\dfrac{\pi}{2}$, in accordo con il fatto che l'integranda $\dfrac{1}{\sin t}$ presenta discontinuità nei multipli di $\pi$.

*Fonte:* [📄 PDF p.154](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
