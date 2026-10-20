+++
# TOML Frontmatter
+++

# Analysis I — Sheet 6

1. We have
   
   $$
   \begin{align*}
\lim_{n \to \infin} \left( 1 - \frac 1 n \right)^n
\lim_{n \to \infin} \left( 1 + \frac 1 n \right)^n
&= \lim_{n \to \infin}
\left(  \left( 1 - \frac 1 n \right)
\left( 1 + \frac 1 n \right)
\right)^n
\\ & = \lim_{n \to \infin} \left( 1- \frac 1 {n^2} \right)^n
\end{align*}
   $$
   
   Obviously this is less than $1$ . Also, by Bernoulli's inequality,
   
   $$
   \lim_{n \to \infin} \left( 1 - \frac 1 {n^2} \right)^n
\ge \lim_{n \to \infin } \left( 1 - \frac{1}{n^2} \times n \right)
= 1
   $$
   
   Therefore the limit is $1$ , and $\lim_{n \to \infin} ( 1 - \frac 1 n) ^ n = \frac{1}{ \lim_{n \to \infin} (1 + \frac 1 n)^n  } = \frac{1}{\mathrm e}$ . $\square$ 

2. (i) Convergent.
   
   $$
   \begin{align*}
\lim_{n \to \infin} \frac{|a_{n+1}|}{ |a_n| }
& = \lim_{n \to \infin} \frac{
\frac{ (n + 1)^4 + \sin(n + 1) }{ 2^{n + 1} }
}{
\frac{n^4 + \sin n}{2^n}
}
\\ & = \lim_{n \to \infin}
\frac{
\frac{ \Omicron(n^4) }{ \Omicron(2^{n + 1}) }
}{
\frac{ \Omicron(n^4) }{\Omicron(2^n)}
}
\\ & = \frac 1 2
\\ & < 1
\end{align*}
   $$
   
   Therefore convergent by Ratio Test.
   
   (ii) Divergent. Because $\frac{n + 2^n}{n2^n} = \frac 1 n + \frac {1}{2^n}$ the series is harmonic series plus some non-negative terms and the harmonic series diverges.
   
   (iii) Convergent.
   
   $$
   \begin{align*}
\lim_{n \to \infin} \frac{|a_{n + 1}| }{ |a_n|} 
& = \lim_{n \to \infin} \frac{
\frac{(n + 1)!}{ (n + 1)^{n + 1}}
}{
\frac{n!}{n^n}
}
\\ & = \lim_{n \to \infin} \left(
\frac{n}{ n + 1 }
\right)^n
\end{align*}
   $$
   
   By problem 1 the ratio converges to $\frac 1 {\mathrm e} < 1$ , therefore $\sum a_n$ converges.
   
   (iv) Convergent.
   
   $$
   \left| \frac{\ln n}{\sqrt n} \right|' = 
\frac{ \frac 1 n \sqrt n -\frac{1}{2 \sqrt n} \ln n }
{n}
= \frac{2 - \ln n}{2n \sqrt n}
   $$
   
   For $n \ge 10 > \mathrm e^2$ , $a_n$ is monotonously decreasing and therefore convergent by Alternating Series Test.
   
   (v) $\frac{1}{n}\sin(\frac 1 n) < \frac{1}{n^2}$ and therefore convergent.
   
   (vi) TODO: Convergent for being less than $(1 - \frac 1 n)^n$ which is proved convergent to $\frac 1 {\mathrm e}$ in problem 1.

3. (i) True. Obviously $a_n < \frac{1}{n^2}$ for sufficiently large $n$ , otherwise $n^2 a_n$ does not tend to $0$ . Then $\sum a_n$ converges because $\sum \frac{1}{n^2}$ converges. $\square$ 
   
   (ii) False. $\sum\frac{1}{n \ln n}$ diverges.
   
   (iii) False. $\sum \frac{ (-1)^{n}}{ \sqrt{n + 1} }$ converges by Alternating Series Test, but the square is harmonic series and diverges.
   
   (iv) True. Obviously $|a_n| < 1$ for sufficiently large $n$ (otherwise $\sum |a_n|$ does not converge), then $\sum {a_n}^2$ converges because $|{a_n}^2| < |a_n|$ . $\square$ 
   
   (v) False. Define
   
   $$
   a_n = \begin{cases} 2^{1-m} & n = 2^m \\ 0 & \text{otherwise} \end{cases}
   $$
   
   Then $\sum a_n$ converges absolutely to $1$ but $|a_n| > \frac 1 n$ $\forall n = 2^m$ . 
   
   (vi) True. $(a_n)$ does not have infinite $0$ s for otherwise $\frac{a_n}{b_n} \to 1$ is impossible. Choose a tail of $(a_n)$ without $0$ . Since $\frac{a_n}{b_n} \to 1$ and $a_n \ne 0$ then, $\frac{b_n}{a_n} \to 1$ and $\sum b_n = \sum (a_n \times \frac{b_n}{a_n} )$ converges. $\square$ 

4. (i)
   
   $$
   \begin{align*}
\sum_{n = 2}^\infin \frac{1}{n^2 - 1} 
& = \sum_{n = 2}^\infin \frac{1}{(n + 1) (n - 1)}
\\ & = \sum_{n = 2}^\infin \frac 1 2 \left(
\frac{1}{n - 1} - \frac { 1} {n + 1}
\right)
\\ & = \frac{1}{2} ( \frac 1 1 + \frac 1 2 )
\\ & = \frac 3 4
\end{align*}
   $$
   
   (ii)
   
   $$
   \begin{align*}
\sum_{n=0}^\infin \frac { \cos n} {2^n}
& = \sum_{n = 0}^\infin \frac{ \operatorname{Re} \exp(n\mathrm i) }{2^n}
\\ & =
\operatorname{Re} \sum_{n = 0}^\infin 
\left( \frac{\exp \mathrm i}{2} \right)^n
\\ & = \operatorname{Re} \frac{1}{ 1 - \frac {\exp \mathrm i} 2 }
\\ & = \operatorname{Re}
\frac {1}{ 1 - \frac 1 2(\cos 1 + \mathrm i \sin 1) }
\\ & = \frac{1 - \frac 1 2 \cos 1}{\frac 5 4 - \cos 1}
\end{align*}
   $$
   
   (iii)
   
   a

5. (i) When $\alpha = 1$ this is half of the harmonic series, and when $\alpha<1$ it is greater, thus diverges. When $\alpha > 1$ ,
   
   $$
   \sum_{n=1}^\infin \frac{1}{n ^ \alpha ( 1 + \alpha ^{-n}) } <
\sum_{n=1}^\infin \frac{1}{n ^ \alpha  }
   $$
   
   And the series converges because the p-series $\sum \frac{1}{n^\alpha}$ converges.
   
   (ii) Ignoring the first term, and we have $\ln n > 1$ for all $n \ge 3$ . When $\alpha > 1$ , the series converges because it is strictly less than $\sum \frac{1}{n^\alpha}$ . When $\alpha < 1$ , $n^{1-\alpha} > (\ln n) ^ \beta$ for sufficiently large $n$ and the series is greater than the harmonic series, thus divergent.
   
   When $\alpha = 1$ ,
   
   $$
   \begin{align*}
\int_2^\infin \frac{1}{ x (\ln x)^\beta } \mathrm d x
& = \ln x \times \frac{1}{(\ln x)^\beta } \big | _2^\infin -
\int_{2}^\infin \ln x\times
\frac{-\beta}{(\ln x)^{\beta + 1} } \times \frac 1 x \mathrm d x
\\ & = \frac{1}{(\ln x)^{\beta - 1} } \big | _2^\infin + \beta
\int_2^\infin \frac{1}{ x (\ln x)^\beta } \mathrm d x
\end{align*}
   $$
   
   Let $I = I = \int_2^\infin \frac{1}{ x (\ln x)^\beta } \mathrm d x$ .
   
   If $\beta < 1$ , $\frac{1}{(\ln x)^{\beta - 1} } \big | _2^\infin$ tends to infinity and the integral diverges.
   
   If $\beta = 1$ , $I = I - 1$ and the integral diverges.
   
   If $\beta > 1$ , $(1-\beta) I = -\frac{1}{(\ln 2)^{\beta - 1} }$ and the integral converges.
   
   Therefore, the series converges iff. $\alpha > 1$ or $\alpha = 1$ and $\beta > 1$ .

6. Because
   
   $$
   \begin{align*}
\gamma_n & = \sum_{k = 1}^ n \frac 1 k - \ln n
\\ & = \sum_{k = 1}^ n \frac 1 k - \ln x \big| ^n_1
\\ & = \sum_{k = 1}^ n \frac 1 k -
\int_1^n \frac 1 x \mathrm d x
\\ & > \sum_{k = 1}^ n \frac 1 k -
\int_1^{n + 1} \frac 1 x \mathrm d x
\\ & = \sum_{k = 1}^n \left(
\frac 1 k - \int_k^{k + 1} \frac 1 x \mathrm d x
\right)
\\ & > \sum_{k = 1}^n \left(
\frac 1 k - \int_k^{k + 1} \frac 1 k \mathrm d x
\right)
\\ & = 0
\end{align*}
   $$
   
   And
   
   $$
   \begin{align*}
\gamma_{n + 1} - \gamma_n 
&= \frac{1}{n + 1} - \ln ( n + 1) + \ln n
\\ & = \frac{1}{n + 1} - \ln x \big | _n ^{n + 1}
\\ & = \frac{1}{n + 1} - \int_n^{n + 1} \frac 1 x \mathrm d x
\\ & < \frac{1}{n + 1} - \int_n^{n + 1} \frac 1 {n + 1} \mathrm d x
\\ & = 0
\end{align*}
   $$
   
   Therefore $0 <\gamma_{n + 1} < \gamma_n$ , and $(\gamma_n)$ converges because it is bounded and monotonous.
   
   $$
   \begin{align*}
t_{2n}  &= \sum_{k = 1}^{2n} \frac{(-1)^{k - 1} }{k}
\\ & = \sum_{k = 1}^{2n} \frac 1 k - 
2 \sum_{k = 1}^ n \frac{1}{2k}
\\ & = \gamma_{2n} + \ln(2n) - \gamma_n  - \ln n
\\ & = \gamma_{2n} - \gamma_n + \ln 2
\end{align*}
   $$
   
   $$
   \begin{align*}
\sum_{r = 1}^\infin \frac{(-1)^{k - 1} }{k} &= \lim_{n \to \infin}
t_{2n}
\\ & = \lim_{n \to \infin} (\gamma_{2n} - \gamma_n + \ln 2)
\\ & = \ln 2 +
\lim_{n \to \infin} (\gamma_{2n} - \gamma_n)
\end{align*}
   $$
   
   And because $(\gamma_n)$ is Cauchy, $\lim_{n \to \infin} (\gamma_{2n} - \gamma_n) = 0$ .
   
   Let $s_n$ be the partial sum to $n$ .
   
   $$
   \begin{align*}
s_{4n} & = \sum_{i = 0}^{n - 1}
\left( \frac 1 {6i + 1} + \frac 1 {6i + 3} + 
\frac 1 {6i + 5} - \frac{1}{2i + 2} \right)
\\ & = t_{4n} + \sum_{i = n + 1}^{2n} \frac{1}{2i}
\\ & = t_{4n} + \frac 1 2 (\gamma_{2n} + \ln(2n) - 
\gamma_n -\ln n )
\\ & = t_{4n} + \frac 1 2 t_{2n}
\end{align*}
   $$
   
   Therefore,
   
   $$
   \lim_{n \to \infin} s_{4n} = \lim_{n \to \infin}
\left( t_{4n} + \frac 1 2 t_{2n} \right)
= \frac 3 2 \ln 2
   $$
