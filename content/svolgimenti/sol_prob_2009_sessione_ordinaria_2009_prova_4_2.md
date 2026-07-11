

**Problema:** [[Problemi/prob_2009_sessione_ordinaria_2009_prova_4_2|2009 Sessione Ordinaria — Prova — Problema 2]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_4|2009 Sessione Ordinaria — Prova]]

Si considera $f(x)=\ln x$, con grafico $G_f$.

## 1)

Sia $P=(t,\ \ln t)$ un punto di $G_f$ (con $t>0$). Poiché $f'(x)=\dfrac{1}{x}$, la tangente a $G_f$ in $P$ ha equazione

$$y=\frac{1}{t}(x-t)+\ln t.$$

Il punto $A$ è l'intersezione di questa tangente con l'asse $y$: ponendo $x=0$ si ottiene

$$y_A=\frac{1}{t}(0-t)+\ln t=\ln t-1,\qquad A=(0,\ \ln t-1).$$

Il punto $B$ è l'intersezione con l'asse $y$ della parallela per $P$ all'asse $x$, cioè della retta $y=\ln t$: dunque $B=(0,\ \ln t)$.

La lunghezza del segmento è quindi

$$\overline{AB}=y_B-y_A=\ln t-(\ln t-1)=1,$$

che è **costante** (uguale a $1$) al variare di $P$ su $G_f$.

**Caso $g(x)=\log_a x$**, con $a>0$ e $a\ne 1$. Si ha $g'(x)=\dfrac{1}{x\ln a}$, quindi la tangente in $P=(t,\ \log_a t)$ interseca l'asse $y$ nel punto

$$y_A=\log_a t-\frac{1}{\ln a}=\log_a t-\log_a e,$$

mentre la parallela per $P$ all'asse $x$ dà $B=(0,\ \log_a t)$. Perciò

$$\overline{AB}=|y_B-y_A|=\left|\log_a e\right|,$$

che è ancora **costante** al variare di $P$: la proprietà vale anche per $G_g$.

## 2)

L'inclinazione $\delta$ della tangente a $G_g$ nel punto di ascissa $1$ soddisfa $\tan\delta=g'(1)$. Essendo $g'(x)=\dfrac{1}{x\ln a}$, si ha

$$\tan\delta=g'(1)=\frac{1}{\ln a}.$$

- Per $\delta=45°$ si ha $\tan\delta=1$, quindi

$$\frac{1}{\ln a}=1\ \Rightarrow\ \ln a=1\ \Rightarrow\ a=e.$$

- Per $\delta=135°$ si ha $\tan\delta=-1$, quindi

$$\frac{1}{\ln a}=-1\ \Rightarrow\ \ln a=-1\ \Rightarrow\ a=\frac{1}{e}.$$

## 3)

La regione $D$ appartiene al primo quadrante ed è delimitata dagli assi coordinati, dal grafico $G_f$ di $y=\ln x$ e dalla retta $y=1$. L'intersezione tra la curva e la retta è data da $\ln x=1$, cioè $x=e$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="255.696" height="157.363" viewBox="-72 -72 191.772 118.022"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 18.238H91.419"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M89.539 15.838c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-58.413" y="18.238" stroke="none" font-family="cmmi10" font-size="10" transform="translate(153.764 2.153)">x</text><path fill="none" d="M-58.413 45.553V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.813-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-58.413" y="18.238" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -82.869)">y</text><path fill="#d9d9ff" stroke="none" d="M-58.413 18.238h45.525l2.005-1.961 2.005-1.882 2.004-1.806 2.005-1.737 2.005-1.673L-.86 7.565l2.004-1.558L3.15 4.499 5.155 3.04 7.16 1.628 9.164.256l2.005-1.331 2.005-1.293 2.005-1.256 2.004-1.224 2.005-1.19L21.193-7.2l2.005-1.132 2.004-1.103 2.005-1.078 2.005-1.057 2.005-1.03 2.004-1.01 2.005-.985 2.005-.964 2.005-.945 2.005-.923 2.004-.908 2.005-.89 2.005-.87 2.005-.857 2.004-.84 2.005-.825 2.005-.81 2.005-.795 2.004-.781 2.005-.77 2.005-.756 2.005-.742-123.71-.017Z"/><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-31.098 41.492 1.852-2.985 1.85-2.801 1.852-2.64 1.851-2.494 1.852-2.363 1.85-2.246 1.852-2.143 1.851-2.045 1.852-1.96 1.85-1.879 1.852-1.803 1.851-1.733 1.852-1.67 1.85-1.613 1.852-1.555 1.851-1.506L.374 6.6l1.85-1.41 1.852-1.37 1.851-1.33L7.78 1.2l1.85-1.255 1.852-1.224 1.851-1.189 1.851-1.158 1.852-1.131 1.851-1.102 1.851-1.08 1.851-1.053 1.852-1.026 1.851-1.01 1.851-.978 1.851-.963 1.852-.94 1.85-.934 1.852-.906 1.851-.887 1.852-.872 1.85-.855 1.852-.84 1.851-.823 1.852-.81 1.85-.796 1.852-.782 1.851-.767 1.852-.757 1.85-.742 1.852-.731 1.851-.72 1.852-.708 1.85-.698 1.852-.686 1.851-.677 1.852-.668 1.85-.655 1.852-.649 1.851-.64 1.851-.628 1.852-.62"/><g fill="#00f" stroke="none" font-size="10"><text x="-58.413" y="18.238" font-family="cmmi10" transform="translate(140.271 -47.498)">y</text><text x="-50.373" y="18.238" font-family="cmr10" transform="translate(140.271 -47.498)">=</text><text x="-39.818" y="18.238" font-family="cmr10" transform="translate(140.271 -47.498)">ln</text><text x="-29.818" y="18.238" font-family="cmmi10" transform="translate(140.271 -47.498)">x</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-58.413-27.287H65.323"/><g stroke="none" font-size="10"><text x="-58.413" y="18.238" font-family="cmmi10" transform="translate(3.533 -51.002)">y</text><text x="-50.373" y="18.238" font-family="cmr10" transform="translate(3.533 -51.002)">=</text><text x="-39.818" y="18.238" font-family="cmr10" transform="translate(3.533 -51.002)">1</text></g><text x="-58.413" y="18.238" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.76 -19.346)">D</text><path stroke="none" d="M67.243-27.287a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none" font-size="10"><text x="-58.413" y="18.238" font-family="cmr10" transform="translate(98.324 -51.558)">(</text><text x="-54.524" y="18.238" font-family="cmmi10" transform="translate(98.324 -51.558)">e;</text><text x="-45.423" y="18.238" font-family="cmr10" transform="translate(98.324 -51.558)">1)</text></g><path stroke="none" d="M-10.968 18.238a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-58.413" y="18.238" stroke="none" font-family="cmr10" font-size="10" transform="translate(43.025 9.977)">1</text></g></svg>
</figure>

Conviene integrare rispetto a $y$: per $y\in[0,1]$ la regione si estende da $x=0$ (asse $y$) fino alla curva $x=e^{y}$. Dunque

$$\text{Area}(D)=\int_0^1 e^{y}\,dy=\left[e^{y}\right]_0^1=e-1.$$

## 4)

Si ruota $D$ di un giro completo attorno alla retta $x=-1$. Alla quota $y\in[0,1]$ la sezione è una corona circolare: il raggio esterno è la distanza dall'asse del punto della curva, $R=e^{y}-(-1)=e^{y}+1$, mentre il raggio interno è la distanza dall'asse dell'asse $y$, $r=0-(-1)=1$. Con il metodo delle sezioni (dischi/corone) rispetto a $y$:

$$V=\pi\int_0^1\left[(e^{y}+1)^2-1^2\right]dy.$$

Sviluppando il quadrato,

$$\int_0^1 (e^{y}+1)^2\,dy=\int_0^1\left(e^{2y}+2e^{y}+1\right)dy=\left[\frac{e^{2y}}{2}+2e^{y}+y\right]_0^1$$

$$=\left(\frac{e^{2}}{2}+2e+1\right)-\left(\frac{1}{2}+2\right)=\frac{e^{2}}{2}+2e-\frac{3}{2}.$$

Sottraendo il termine $\displaystyle\int_0^1 1\,dy=1$ si ottiene

$$V=\pi\left(\frac{e^{2}}{2}+2e-\frac{3}{2}\right)-\pi=\pi\left(\frac{e^{2}}{2}+2e-\frac{5}{2}\right).$$

---

*Fonte:* [📄 PDF p.4](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
