

**Problema:** [[Problemi/prob_2007_estero_calendario_australe_2007_sessione_ordinaria_problema1_30_1|2007 Estero Australe — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_ordinaria_problema1_30|2007 Estero Australe — Problema 1]]

Sia $f$ la funzione definita da
$$f(x)=a\log_{10} x+1,$$
con $a$ parametro reale.

## a) Campo di esistenza e crescenza

La funzione contiene $\log_{10} x$, definito solo per argomento positivo: il campo di esistenza è quindi
$$x>0.$$

La derivata prima è
$$f'(x)=\frac{a}{x\ln 10}.$$
Poiché per $x>0$ si ha $x\ln 10>0$, il segno di $f'(x)$ coincide con quello di $a$. Pertanto:

- se $a>0$ risulta $f'(x)>0$ per ogni $x>0$, quindi $f$ è **crescente** su tutto il dominio;
- se $a<0$ risulta $f'(x)<0$, quindi $f$ è sempre decrescente;
- se $a=0$ si ha $f(x)=1$, funzione costante.

In conclusione, $f$ è crescente per $a>0$.

## b) I grafici $F$ e $G$ e le intersezioni con l'asse $x$

**Caso $a=2$.** Il grafico $F$ di $f(x)=2\log_{10} x+1$ si ottiene da $y=\log_{10} x$ mediante una dilatazione verticale di fattore $2$ seguita da una traslazione verticale di $1$. La sua intersezione $b$ con l'asse $x$ si trova ponendo
$$2\log_{10} x+1=0 \;\Rightarrow\; \log_{10} x=-\tfrac12 \;\Rightarrow\; b=10^{-1/2}=\frac{1}{\sqrt{10}}.$$

**Caso $a=-2$.** Il grafico $G$ di $f(x)=-2\log_{10} x+1$ si ottiene da $y=\log_{10} x$ con un ribaltamento rispetto all'asse $x$, una dilatazione verticale di fattore $2$ e una traslazione verticale di $1$. La sua intersezione $c$ con l'asse $x$ è data da
$$-2\log_{10} x+1=0 \;\Rightarrow\; \log_{10} x=\tfrac12 \;\Rightarrow\; c=10^{1/2}=\sqrt{10}.$$

## c) Area del triangolo mistilineo

I due grafici si intersecano dove
$$2\log_{10} x+1=-2\log_{10} x+1 \;\Rightarrow\; \log_{10} x=0 \;\Rightarrow\; x=1,\quad y=1,$$
cioè nel punto $A(1,1)$. Il triangolo mistilineo ha base sull'asse $x$ nell'intervallo $\left[\tfrac{1}{\sqrt{10}},\,\sqrt{10}\right]$, lato sinistro l'arco di $F$ da $b$ ad $A$ e lato destro l'arco di $G$ da $A$ a $c$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="214.314" height="195.3" viewBox="-72 -72 160.736 146.475"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 25.92H75.485"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M73.605 23.52c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-64.672" y="25.92" stroke="none" font-family="cmmi10" font-size="10" transform="translate(144.09 2.153)">x</text><path fill="none" d="M-64.672 74.005v-132.76"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-67.072-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-64.672" y="25.92" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -90.551)">y</text><path fill="#e6e6ff" stroke="none" d="m-52.977 25.922.516-1.385.516-1.328.516-1.278.516-1.226.515-1.184.516-1.14.516-1.1.516-1.064.516-1.03.516-1.002.516-.966.515-.94.516-.91.516-.896.516-.864.516-.84.516-.821.516-.801.516-.78.515-.763.516-.743.516-.729.516-.709.516-.697.516-.681.516-.666.515-.654.516-.64.516-.628.516-.615.516-.604.516-.593.516-.581.515-.574.516-.563.516-.549.516-.545.516-.533.516-.526.516-.517.516-.506.515-.503.516-.492.516-.486.516-.477.516-.47.516-.465.516-.455.515-.453.016-.019 1.633 1.386 1.632 1.33 1.632 1.277 1.632 1.229 1.632 1.183 1.633 1.142 1.632 1.101 1.632 1.066 1.633 1.03 1.632.998 1.632.968 1.632.941 1.633.913 1.632.888 1.632.866 1.632.841 1.633.822 1.632.8 1.632.777 1.632.765 1.633.742 1.632.726 1.632.717 1.632.697 1.633.68 1.632.667 1.632.654 1.632.64 1.633.629 1.632.616 1.632.604 1.632.593 1.633.583 1.632.572 1.632.563 1.632.552 1.633.543 1.632.533 1.632.525 1.632.517 1.633.508 1.632.502 1.632.492 1.632.486 1.633.477 1.632.474 1.632.462 1.632.46 1.633.45Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-55.425 33.47 1.795-5.702 1.795-4.839 1.796-4.204 1.795-3.717 1.796-3.328 1.795-3.025 1.795-2.76 1.796-2.541 1.795-2.355 1.795-2.192 1.796-2.054 1.795-1.93 1.795-1.819 1.796-1.721 1.795-1.637 1.796-1.557 1.795-1.485 1.795-1.418 1.796-1.36 1.795-1.302 1.795-1.253 1.796-1.205 1.795-1.162 1.795-1.122 1.796-1.084 1.795-1.047 1.796-1.016 1.795-.982 1.795-.957 1.796-.925 1.795-.902 1.795-.876 1.796-.852 1.795-.835 1.795-.806 1.796-.79 1.795-.776 1.796-.754 1.795-.736 1.795-.719 1.796-.704 1.795-.689 1.795-.674 1.796-.661 1.795-.647 1.795-.634 1.796-.622 1.795-.61 1.796-.598 1.795-.588 1.795-.578 1.796-.566 1.795-.557 1.795-.548 1.796-.54 1.795-.53 1.795-.52 1.796-.512 1.795-.506 1.796-.496 1.795-.489 1.795-.484 1.796-.473 1.795-.47 1.795-.458 1.796-.458 1.795-.446 1.795-.442 1.796-.437"/><path fill="none" stroke="red" stroke-width=".8" d="m-55.425-55.607 1.795 5.701 1.795 4.84 1.796 4.203 1.795 3.717 1.796 3.33 1.795 3.024 1.795 2.759 1.796 2.542 1.795 2.354 1.795 2.192 1.796 2.055 1.795 1.929 1.795 1.82 1.796 1.721 1.795 1.636 1.796 1.557 1.795 1.485 1.795 1.419 1.796 1.359 1.795 1.303 1.795 1.253 1.796 1.204 1.795 1.163 1.795 1.122 1.796 1.083 1.795 1.047 1.796 1.017 1.795.982 1.795.957 1.796.925 1.795.901 1.795.876 1.796.853 1.795.835 1.795.806 1.796.79 1.795.776 1.796.753 1.795.736 1.795.72 1.796.704 1.795.688 1.795.675 1.796.66 1.795.648 1.795.634 1.796.621 1.795.61 1.796.599 1.795.588 1.795.577 1.796.567 1.795.557 1.795.548 1.796.54 1.795.53 1.795.52 1.796.512 1.795.506 1.796.495 1.795.49 1.795.484 1.796.472 1.795.47 1.795.459 1.796.458 1.795.446 1.795.441 1.796.437"/><path stroke="none" d="M-25.604-11.069a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><g stroke="none" font-size="10"><text x="-64.672" y="25.92" font-family="cmmi10" transform="translate(40.522 -43.022)">A</text><text x="-57.172" y="25.92" font-family="cmr10" transform="translate(40.522 -43.022)">(1</text><text x="-48.283" y="25.92" font-family="cmmi10" transform="translate(40.522 -43.022)">;</text><text x="-43.839" y="25.92" font-family="cmr10" transform="translate(40.522 -43.022)">1)</text></g><path stroke="none" d="M-50.897 25.92a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><text x="-64.672" y="25.92" stroke="none" font-family="cmmi10" font-size="10" transform="translate(9.55 10.477)">b</text><path stroke="none" d="M54.377 25.92a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><text x="-64.672" y="25.92" stroke="none" font-family="cmmi10" font-size="10" transform="translate(114.805 7.839)">c</text><g fill="#00f" stroke="#00f"><text x="-64.672" y="25.92" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(120.002 -68.711)">F</text></g><g fill="red" stroke="red"><text x="-64.672" y="25.92" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(119.981 38.556)">G</text></g></g></svg>
</figure>

La sua area si ottiene come somma di due integrali:
$$A=\int_{1/\sqrt{10}}^{1}\big(2\log_{10} x+1\big)\,dx+\int_{1}^{\sqrt{10}}\big(-2\log_{10} x+1\big)\,dx.$$

Serve una primitiva di $\log_{10} x=\dfrac{\ln x}{\ln 10}$. Integrando per parti,
$$\int \ln x\,dx=x\ln x-x+C,\qquad\text{quindi}\qquad \int \log_{10} x\,dx=\frac{x\ln x-x}{\ln 10}+C.$$

Calcolando i due contributi (e ricordando che $\dfrac{1}{\ln 10}=\log_{10} e$) si ottiene
$$\int_{1/\sqrt{10}}^{1}\big(2\log_{10} x+1\big)\,dx=1-\frac{2}{\ln 10}+\frac{2}{\sqrt{10}\,\ln 10},$$
$$\int_{1}^{\sqrt{10}}\big(-2\log_{10} x+1\big)\,dx=\frac{2\sqrt{10}}{\ln 10}-\frac{2}{\ln 10}-1.$$

Sommando, i termini costanti $+1$ e $-1$ si elidono e resta
$$A=\frac{1}{\ln 10}\left(-4+\frac{2}{\sqrt{10}}+2\sqrt{10}\right)=\left(\frac{11\sqrt{10}}{5}-4\right)\log_{10} e.$$

Numericamente,
$$A=\left(\frac{11\sqrt{10}}{5}-4\right)\log_{10} e\cong 1{,}28\ \text{u}^2.$$

## d) Tangente comune con $g(x)=x^2$

Le funzioni $g(x)=x^2$ e $f(x)=a\log_{10} x+1$ hanno la stessa tangente nel punto di ascissa $1$ se
$$\begin{cases} g(1)=f(1)\\[2pt] g'(1)=f'(1). \end{cases}$$

La prima condizione è sempre soddisfatta: $g(1)=1$ e $f(1)=a\log_{10} 1+1=1$. Per la seconda, da $g'(x)=2x$ e $f'(x)=\dfrac{a}{x\ln 10}$ si ottiene
$$g'(1)=2,\qquad f'(1)=\frac{a}{\ln 10},$$
e imponendo l'uguaglianza
$$\frac{a}{\ln 10}=2 \;\Rightarrow\; a=2\ln 10.$$

*Fonte:* [📄 PDF p.30](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
