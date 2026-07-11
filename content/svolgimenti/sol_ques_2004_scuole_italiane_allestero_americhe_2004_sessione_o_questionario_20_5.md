

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20_5|2004 Estero Americhe Ordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_o_questionario_20|2004 Estero Americhe Ordinaria — Questionario]]

Calcolare
$$\int_0^\pi e^x\cos x\,dx.$$

## Integrale indefinito

Calcoliamo dapprima l'integrale indefinito $I=\displaystyle\int e^x\cos x\,dx$ integrando per parti due volte. Prendiamo $e^x$ come fattore da derivare (scrivendolo come $(e^x)'$):

$$I=\int (e^x)'\cos x\,dx=e^x\cos x-\int e^x\,(-\sin x)\,dx=e^x\cos x+\int e^x\sin x\,dx.$$

Integriamo di nuovo per parti il secondo integrale, sempre con $e^x=(e^x)'$:

$$\int e^x\sin x\,dx=e^x\sin x-\int e^x\cos x\,dx=e^x\sin x-I.$$

Sostituendo:

$$I=e^x\cos x+e^x\sin x-I=e^x(\cos x+\sin x)-I.$$

Ricaviamo $I$ portando l'incognita a primo membro:

$$2I=e^x(\cos x+\sin x)\;\Rightarrow\; I=\frac{1}{2}\,e^x(\cos x+\sin x)+C.$$

## Integrale definito

Applichiamo il teorema fondamentale del calcolo integrale tra $0$ e $\pi$:

$$\int_0^\pi e^x\cos x\,dx=\left[\frac{1}{2}\,e^x(\cos x+\sin x)\right]_0^\pi.$$

Ricordando che $\cos\pi=-1$, $\sin\pi=0$, $\cos 0=1$, $\sin 0=0$:

$$=\frac{1}{2}\,e^\pi(-1+0)-\frac{1}{2}\,e^0(1+0)=-\frac{1}{2}\,e^\pi-\frac{1}{2}.$$

Pertanto

$$\int_0^\pi e^x\cos x\,dx=-\frac{1}{2}\,(e^\pi+1).$$

*Fonte:* [📄 PDF p.21](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
