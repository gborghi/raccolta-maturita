

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_10|2008 Ordinamento Straordinaria — Questionario — Quesito 10]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si calcoli il limite della funzione

$$\lim_{x\to 0}\frac{e^{\sin x}-\cos x}{e^{\cos x}-e\,\ln(x+e)},$$

intendendo il logaritmo nella base $e$.

Per $x\to 0$ il numeratore vale $e^{0}-\cos 0 = 1-1 = 0$ e il denominatore vale $e^{\cos 0}-e\,\ln(e) = e - e\cdot 1 = 0$: il limite si presenta nella forma indeterminata $\frac{0}{0}$.

Conviene riscrivere numeratore e denominatore in modo da poter usare i limiti notevoli, ricordando gli sviluppi asintotici validi quando $f(x)\to 0$:

$$e^{f(x)}-1\sim f(x),\qquad 1-\cos x\sim \tfrac{1}{2}x^{2},\qquad \ln\bigl(1+f(x)\bigr)\sim f(x).$$

## Numeratore

Aggiungendo e togliendo $1$:

$$e^{\sin x}-\cos x = \bigl(e^{\sin x}-1\bigr) + \bigl(1-\cos x\bigr).$$

Per $x\to 0$ si ha $e^{\sin x}-1\sim \sin x\sim x$ e $1-\cos x\sim \tfrac{1}{2}x^{2}$, quindi

$$e^{\sin x}-\cos x \sim x + \tfrac{1}{2}x^{2}\sim x.$$

## Denominatore

Poiché $\ln(x+e)=\ln\!\Bigl(e\bigl(1+\tfrac{x}{e}\bigr)\Bigr)=1+\ln\!\bigl(1+\tfrac{x}{e}\bigr)$, si ha $e\,\ln(x+e)=e+e\,\ln\!\bigl(1+\tfrac{x}{e}\bigr)$, e dunque

$$e^{\cos x}-e\,\ln(x+e) = \bigl(e^{\cos x}-e\bigr) - e\,\ln\!\Bigl(1+\tfrac{x}{e}\Bigr) = e\bigl(e^{\cos x-1}-1\bigr) - e\,\ln\!\Bigl(1+\tfrac{x}{e}\Bigr).$$

Per $x\to 0$: $\;e^{\cos x-1}-1\sim \cos x-1\sim -\tfrac{1}{2}x^{2}$, mentre $e\,\ln\!\bigl(1+\tfrac{x}{e}\bigr)\sim e\cdot\tfrac{x}{e}=x$. Perciò

$$e^{\cos x}-e\,\ln(x+e) \sim e\Bigl(-\tfrac{1}{2}x^{2}\Bigr) - x \sim -x,$$

essendo $-x$ il termine dominante (infinitesimo di ordine inferiore rispetto a $x^{2}$).

## Conclusione

Il rapporto è quindi asintotico a

$$\frac{e^{\sin x}-\cos x}{e^{\cos x}-e\,\ln(x+e)} \sim \frac{x}{-x} = -1.$$

Dunque

$$\lim_{x\to 0}\frac{e^{\sin x}-\cos x}{e^{\cos x}-e\,\ln(x+e)} = -1.$$

*Fonte:* [📄 PDF p.111](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
