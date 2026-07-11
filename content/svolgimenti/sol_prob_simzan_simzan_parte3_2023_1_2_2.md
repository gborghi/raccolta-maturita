---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte3_2023_1_2_2
of_item: prob_simzan_simzan_parte3_2023_1_2_2
prova_id: prova_simzan_simzan_parte3_2023_1_2
anno: '2023'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2023
---

**Problema:** [[Problemi/prob_simzan_simzan_parte3_2023_1_2_2|Simulazione Zanichelli 2023 — SimZan parte3 n.1 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 n.1]]

La cinciallegra è un piccolo uccello dalla caratteristica colorazione giallo-verde. L'andamento della popolazione di uno stormo isolato è descritto dal modello malthusiano continuo:

$$N(t) = N(t_0)\,e^{\left(k-\frac{1}{2}\right)(t-t_0)}, \quad t\geq t_0,$$

dove $k$ è il tasso di natalità annuo e $\dfrac{1}{2}$ è il tasso di mortalità annuo.

### Punto 1 — Calcolo della costante $k$

La metà degli esemplari sono femmine; ogni femmina depone 10 uova; l'84% si schiude; il 71% raggiunge tre mesi; il 10% sopravvive all'inverno.

Nuovi esemplari che sopravvivono per femmina all'anno:

$$10 \times 0{,}84 \times 0{,}71 \times 0{,}10 = 0{,}5964.$$

Poiché metà degli esemplari sono femmine, il contributo per esemplare è:

$$k = \frac{1}{2} \times 10 \times 0{,}84 \times 0{,}71 \times 0{,}10 = \frac{1}{2} \times 0{,}5964 = 0{,}2982.$$

### Punto 2 — Espressione analitica di $N(t)$, studio e rappresentazione grafica

Con $k=0{,}2982$, $t_0=0$, $N(0)=50$:

$$N(t) = 50\,e^{(0{,}2982-0{,}5)\,t} = 50\,e^{-0{,}2018\,t}, \quad t\geq 0.$$

**Studio di $N(t)$:**

- Dominio: $[0,+\infty)$.
- $N(t)$ è strettamente decrescente poiché $k-\tfrac{1}{2}=-0{,}2018<0$.
- $N(0)=50$ (valore iniziale).
- $\lim_{t\to+\infty}N(t)=0$: la popolazione tende all'estinzione.
- Non esistono punti stazionari in $(0,+\infty)$: $N'(t)=50\times(-0{,}2018)\,e^{-0{,}2018\,t}<0$ per ogni $t\geq0$.

Lo stormo è destinato all'estinzione in assenza di nuovi inserimenti o migrazioni.

*(grafico — vedi PDF p.17)*

**Tempo di dimezzamento:**

$$N(t^*)=25 \Rightarrow 50\,e^{-0{,}2018\,t^*}=25 \Rightarrow t^*=\frac{\ln 2}{0{,}2018}\approx 3{,}43\text{ anni}.$$

**Velocità di variazione del numero di esemplari in $t^*$:**

$$N'(t^*)=-0{,}2018\times 25\approx-5{,}045\text{ esemplari/anno}.$$

### Punto 3 — Identificazione del profilo del tetto

*(grafico — vedi PDF p.4 e p.19)*

Per proteggere le nidiate, l'ornitologo progetta casette in legno da distribuire sugli alberi. Ogni casetta è un cilindro di altezza $h$ coperto da un tetto impermeabilizzato. Le funzioni candidate per il profilo del tetto sono:

$$y=a\cos x, \quad y=a(1-|x|), \quad y=a(1-\sin(|x|)).$$

Dalle condizioni deducibili dal grafico (simmetria rispetto all'asse $y$, profilo che si annulla agli estremi $x=\pm\tfrac{\pi}{2}$, massimo in $x=0$ pari ad $a$, tangente non verticale al culmine):

La funzione $y=a\cos x$ su $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$ è continua, derivabile, simmetrica e soddisfa $y(\pm\tfrac{\pi}{2})=0$, $y(0)=a$. È il profilo del tetto.

La funzione profilo è:

$$\hat{y} = \frac{1}{2}(1-\sin x), \quad -\frac{\pi}{2}\leq x\leq\frac{\pi}{2}$$

oppure $y=a\cos x$. Dalla soluzione (PDF p.19), le tre funzioni si distinguono per la regolarità: la funzione $y=a(1-|x|)$ non è derivabile in $x=0$; la funzione $y=a(1-\sin|x|)$ vale $a$ in $x=0$ e non si annulla agli estremi (o presenta derivata non nulla). Il profilo selezionato è $y=a\cos x$.

### Punto 4 — Angolo al culmine del tetto

La tangente alla curva $y=a\cos x$ nel punto $C=\left(\tfrac{\pi}{2},0\right)$:

$$y'(x)=-a\sin x \Rightarrow y'\!\left(\tfrac{\pi}{2}\right)=-a.$$

Per simmetria, la tangente in $A=\left(-\tfrac{\pi}{2},0\right)$ ha coefficiente angolare $+a$.

L'angolo $\alpha$ formato da ciascuna tangente con l'orizzontale: $\tan\alpha=|a|$.

L'angolo al culmine del tetto $\theta$ è l'angolo tra le due rette tangenti:

$$\tan\alpha=\frac{m_1-m_2}{1+m_1 m_2}$$

con $m_1=a$ e $m_2=-a$:

$$\tan\theta=\frac{a-(-a)}{1+a\cdot(-a)}=\frac{2a}{1-a^2} \quad (\text{per }a<1).$$

Dal grafico (PDF p.20), con $\tan\alpha=\dfrac{12}{5}$ (coefficiente angolare della tangente):

$$\alpha=\arctan\frac{12}{5}\approx 67{,}38°, \quad \theta=180°-2\alpha\approx 180°-134{,}76°=45{,}24°.$$

*(grafico — vedi PDF p.20)*

### Punto 5 — Rapporto tra area della sezione del tetto e area della sezione del cilindro

La sezione del tetto è l'area sottesa dalla curva $y=a\cos x$ su $\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$:

$$A_{\text{tetto}} = \int_{-\pi/2}^{\pi/2} a\cos x\,dx = a\left[\sin x\right]_{-\pi/2}^{\pi/2} = a(1-(-1))=2a.$$

La sezione del cilindro è un rettangolo di base $\pi$ (il diametro della base, pari all'intervallo $[-\tfrac{\pi}{2},\tfrac{\pi}{2}]$) e altezza $h=a$ (il valore massimo del profilo del tetto):

$$A_{\text{cilindro}} = \pi \cdot a.$$

Il rapporto:

$$\frac{A_{\text{tetto}}}{A_{\text{cilindro}}} = \frac{2a}{\pi a} = \frac{2}{\pi}.$$

*(grafico — vedi PDF p.21)*

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
