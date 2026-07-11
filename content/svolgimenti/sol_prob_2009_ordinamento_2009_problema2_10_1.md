

**Problema:** [[Problemi/prob_2009_ordinamento_2009_problema2_10_1|2009 Ordinamento — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_ordinamento_2009_problema2_10|2009 Ordinamento — Problema 2]]

Sia $f(x)=\ln x$ (logaritmo naturale) e sia $G_f$ il suo grafico.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="194.587" height="165.709" viewBox="-72 -72 145.94 124.282"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#d9d9ff" stroke="none" d="M-57.275 3.727h36.989l.96-.949.985-.948 1.01-.948 1.038-.948 1.064-.948 1.092-.949 1.12-.948 1.15-.948 1.179-.948 1.208-.948 1.242-.949 1.273-.948L-5.66-8.6l1.34-.948 1.375-.948 1.412-.949 1.447-.948 1.484-.948 1.524-.948 1.563-.948 1.604-.949 1.646-.948 1.687-.948 1.732-.948 1.777-.948 1.823-.949 1.87-.948 1.92-.948 1.968-.948 2.02-.948 2.072-.949 2.127-.948 2.18-.948 2.238-.948 2.296-.948 2.356-.949 2.416-.948 2.478-.948 2.545-.948-100.516-.01Z"/><path fill="none" d="M-72.07 3.727H60.689"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M58.809 1.327c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.275" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.897 2.153)">x</text><path fill="none" d="M-57.275 51.812V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.675-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.275" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -68.358)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-43.59 40.504 1.65-4.205 1.648-3.776 1.649-3.431 1.648-3.137 1.649-2.89 1.649-2.682 1.648-2.5 1.649-2.34 1.648-2.202 1.649-2.079 1.649-1.965 1.648-1.867 1.649-1.778 1.648-1.7 1.65-1.624 1.648-1.554 1.648-1.492 1.649-1.434 1.649-1.38 1.648-1.33 1.649-1.285 1.648-1.24L-5.67-8.59l1.649-1.164 1.648-1.126 1.649-1.094 1.649-1.062 1.648-1.035 1.649-1.005 1.648-.979 1.649-.953 1.649-.926 1.648-.91 1.649-.886 1.648-.859 1.65-.844 1.648-.832 1.648-.807 1.649-.79 1.649-.773 1.648-.76 1.649-.741 1.648-.729 1.649-.714 1.649-.7 1.648-.689 1.649-.674 1.649-.663 1.648-.651 1.649-.641 1.648-.629 1.649-.617 1.649-.608 1.648-.599 1.649-.588 1.648-.58 1.65-.57 1.648-.563 1.648-.554"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-57.275-33.262H43.26"/><text x="-57.275" y="3.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(34.489 11.827)">1</text><text x="-57.275" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(98.207 7.839)">e</text><path fill="none" d="M43.26 5.576V1.877"/><text x="-57.275" y="3.727" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -33.766)">1</text><path fill="none" d="M-59.124-33.262h3.699"/><text x="-57.275" y="3.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(23.463 -13.228)">D</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-57.275" y="3.727" font-family="cmmi10" transform="translate(90.112 -40.037)">y</text><text x="-49.235" y="3.727" font-family="cmr10" transform="translate(90.112 -40.037)">=</text><text x="-38.68" y="3.727" font-family="cmr10" transform="translate(90.112 -40.037)">ln</text><text x="-28.68" y="3.727" font-family="cmmi10" transform="translate(90.112 -40.037)">x</text></g></g></g></svg>
</figure>

## 1)

Sia $P=(x_0,\ln x_0)$ con $x_0>0$. Poiché $f'(x)=\dfrac{1}{x}$, la tangente a $G_f$ in $P$ ha equazione

$$y-\ln x_0=\frac{1}{x_0}\,(x-x_0).$$

Intersecando con l'asse $y$ (cioè ponendo $x=0$) si ottiene $y_A=\ln x_0-1$, dunque $A=(0,\ln x_0-1)$. La parallela per $P$ all'asse $x$ ha equazione $y=\ln x_0$ e incontra l'asse $y$ nel punto $B=(0,\ln x_0)$. La lunghezza del segmento è

$$\overline{AB}=\bigl|\ln x_0-(\ln x_0-1)\bigr|=1,$$

costante e indipendente dalla posizione di $P$.

Per $g(x)=\log_a x$ (con $a>0$, $a\neq 1$) si ha $g'(x)=\dfrac{1}{x\ln a}$. Ripetendo il ragionamento con $P=(x_0,\log_a x_0)$, l'ordinata di $A$ è $\log_a x_0-\dfrac{1}{\ln a}$, mentre quella di $B$ è $\log_a x_0$; da cui

$$\overline{AB}=\frac{1}{|\ln a|},$$

ancora **costante** e indipendente da $P$. La proprietà vale dunque anche per il grafico $G_g$.

## 2)

L'inclinazione $\alpha$ della tangente a $G_g$ nel punto di ascissa $1$ soddisfa

$$\tan\alpha=g'(1)=\frac{1}{\ln a}.$$

Per $\alpha=45°$ si ha $\tan 45°=1$, quindi

$$\frac{1}{\ln a}=1 \implies \ln a=1 \implies a=e.$$

Per $\alpha=135°$ si ha $\tan 135°=-1$, quindi

$$\frac{1}{\ln a}=-1 \implies \ln a=-1 \implies a=\frac{1}{e}.$$

## 3)

Nel primo quadrante il grafico $G_f$ (cioè $y=\ln x$) parte dall'asse $x$ in $x=1$ e raggiunge la quota $y=1$ in $x=e$. La regione $D$ è delimitata a sinistra dall'asse $y$, in basso dall'asse $x$, in alto dalla retta $y=1$ e a destra dalla curva. Conviene integrare rispetto a $y$: per $y\in[0,1]$ l'ascissa varia da $x=0$ alla curva $x=e^{y}$ (inversa di $y=\ln x$). Dunque

$$\text{Area}(D)=\int_0^1 e^{y}\,dy=\bigl[e^{y}\bigr]_0^1=e-1\approx 1{,}718.$$

## 4)

Ruotando $D$ attorno alla retta $x=-1$, a ciascuna quota $y\in[0,1]$ corrisponde una corona circolare: il raggio esterno è la distanza dall'asse del bordo destro $x=e^{y}$, cioè $R=e^{y}+1$; il raggio interno è la distanza dell'asse $y$ (cioè $x=0$) dall'asse di rotazione, cioè $r=1$. Per il metodo dei dischi (corone circolari):

$$V=\pi\int_0^1\Bigl[(e^{y}+1)^2-1^2\Bigr]\,dy=\pi\int_0^1\bigl(e^{2y}+2e^{y}\bigr)\,dy.$$

Integrando,

$$V=\pi\left[\frac{e^{2y}}{2}+2e^{y}\right]_0^1=\pi\!\left[\left(\frac{e^{2}}{2}+2e\right)-\left(\frac{1}{2}+2\right)\right]=\pi\!\left(\frac{e^{2}}{2}+2e-\frac{5}{2}\right).$$

In forma compatta:

$$V=\frac{\pi}{2}\bigl(e^{2}+4e-5\bigr)\approx 20{,}83.$$

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
