+++
# TOML Frontmatter
+++

# Analysis I — Sheet 7

1. (i) $R=1$ , divergent at $\pm R$ .
   
   (ii) $R = 2$ , convergent at $\pm R$ .
   
   (iii) $R = 1$ , divergent at $\pm R$ .
   
   (iv) $R = \mathrm e^{-1}$ , divergent at $\pm R$ .
   
   (v) $R = 1$ , divergent at $\pm R$ .
   
   (vi) $R = \mathrm e^{-1}$ , convergent at $-R$ , divergent at $R$ .

2. (i) Let $s_n$ and $c_n$ denote the terms. Regardless of $z$ ,
   
   $$
   \frac{s_{n+1} }{ s_n } = \frac{z^2}{ (2n+2)(2n + 3) }< 1
   $$
   
   For all $n> |\frac z 2|$ , therefore $S(z)$ converges. Similarly
   
   $$
   \frac{c_{n+1} }{c_n} = \frac{z^2}{(2n+1)(2n+2) } < 1
   $$
   
   For all $n > |\frac z 2|$ and $C(z)$ converges. $\square$ 
   
   (ii)
   
   $$
   S'(z) = \left( \sum_{k} \frac{z^{2k+1} }{(2k+1)!} \right)'
= \sum_k \left( \frac{z^{2k+1} }{(2k+1)!} \right)'
= \sum_k \frac{ z^{2k} }{ (2k)! } = C(z)
   $$
   
   And
   
   $$
   \begin{align*}
C'(z) &=  \left( \sum_{k=0}^\infin \frac{z^{2k} }{(2k)!} \right)'
\\ &= \sum_{k=1}^\infin \left(\frac{z^{2k} }{(2k)!} \right)'
\\ &= \sum_{k=1}^\infin \frac{z^{2k-1} }{(2k-1)!}
\\ &= \sum_j \frac{z^{2j+1} }{(2j+1)!} 
\\ &= S(z) \space \square
\end{align*}
   $$
   
   (iii) Since $S'(z) = C(z)$ and $C'(z) = S(z)$ ,
   
   $$
   \begin{align*}
2C(z) C'(z) &= 2S(z) S'(z)
\\ \int 2C(z) C'(z) \mathrm dz &= \int 2S(z) S'(z) \mathrm dz
\\ C(z)^2 &= S(z)^2 + C
\end{align*}
   $$
   
   Substitute with $C(0)$ and $S(0)$ to get $C=1$ . $\square$ 
   
   (iv)
   
   $$
   \begin{align*}
2S(z) C(z) &= 2 \sum_{n} \sum_{i=0}^n s_i c_{n-i}
\\ &= 2\sum_n \sum_{i=0}^n \frac{z^{2i+1}}{(2i+1)!}
\times \frac{z^{2n-2i} }{(2n-2i)!}
\\ &= 2\sum_n \frac{z^{2n+1}}{(2n+1)!}
\sum_{i=0}^n  {2n+1 \choose 2i+1}
\\ &= 2\sum_n \frac{z^{2n+1}}{(2n+1)!} \sum_{i=0}^n
\frac12 \left( {2n+1\choose 2i+1} +
{2n+1 \choose(2n-2i} \right)
\\ &=2\sum_n \frac{z^{2n+1}}{(2n+1)!} \frac12 (1+1)^{2n + 1}
\\ &= \sum_n\frac{(2z)^{2n+1}}{(2n+1)!}
\\ &= S(2z) \space\square
\end{align*}
   $$

3. (i) Geometric, $\frac{1}{1-x}$ .
   
   (ii)
   
   $$
   \begin{align*}
\left( \sum_nx^n \right)' &= \sum_n nx^{n-1}
\\ \left( \frac{1}{1-x} \right)' &= \frac 1 x \sum_{n}nx^n
\\ \sum_{n}nx^n &= \frac{x}{(1-x)^2}
\end{align*}
   $$
   
   (iii)
   
   $$
   \begin{align*}
\left( \sum_nnx^n \right)' &= \sum_nn^2 x^{n-1}
\\ \left( \frac{x}{(1-x)^2} \right)' &= \frac 1 x \sum_{n}n^2x^n
\\ \sum_{n}n^2x^n &= \frac{x(1+x)}{(1-x)^3}
\end{align*}
   $$

4. Let $a_n$ denote the terms.
   
   $$
   \begin{align*}
\frac{ |a_{n+1}| }{|a_n|}
& = \left| \frac{(-1)(n!)^2}{((n+1)!)^2} \left( \frac x 2 \right)^2 \right|
\\ &= \frac{ \left(\frac x 2 \right)^2 }{(n+1)^2}
\end{align*}
   $$
   
   Therefore the radius of convergence is $\frac x 2 = n + 1$ and $x = 2n + 2$ . By calculation,
   
   $$
   J_0'(x) = \sum_n \frac{(-1)^n}{(n!)^2} n
\left(\frac x 2 \right)^{2n-1}
\\
J_0''(x) = \sum_n \frac{(-1)^n}{(n!)^2} n \frac{2n-1}{2}
\left( \frac x 2 \right)^{n-2}
   $$
   
   Therefore,
   
   $$
   \begin{align*}
xy'' + y'
& =
\sum_n \frac{(-1)^n}{(n!)^2} n
\left(\frac x 2 \right)^{2n-1} +
x\sum_n \frac{(-1)^n}{(n!)^2} n \frac{2n-1}{2}
\left( \frac x 2 \right)^{n-2}
\\ &=
\sum_n \frac{(-1)^n}{(n!)^2} n
\left(\frac x 2 \right)^{2n-1} +
\sum_n \frac{(-1)^n}{(n!)^2} n (2n-1)
\left( \frac x 2 \right)^{n-1}
\\ &= \sum_n \frac{(-1)^n}{(n!)^2} \left(\frac x 2 \right)^{2n-1}
2n^2
\\ &= x\sum_n \frac{(-1)^n}{((n-1)!)^2} \left(\frac x 2 \right)^{2n-2}
\\ &= x\sum_m \frac{(-1)^{m+1} }{(m!)^2}\left(\frac x 2 \right)^{2m}
\\ &=-xy \space \square
\end{align*}
   $$

5. > **Lemma** $\lim_{n\to \infin} \frac{F_{n+1}}{F_n} = \frac{\sqrt5 +1}{2}$ .
   > 
   > **Proof** Let $r_n = \frac{F_{n+1} }{F_n}$ . Then $r_{n+1} = 1 + \frac1{r_n}$ . Obviously $r_n \in[1,2]$ . Consider the function $f(x) = \frac{2x+1}{x+1}-x$ , $f(r_n) = r_{n+2} - r_n$ . $f(x)$ has a zero at $\frac{\sqrt5 +1}{2}$ , positive if less than $\frac{\sqrt5 +1}{2}$ , vice versa. Therefore since $r_1 > \frac{\sqrt5 +1}{2}$ and $r_2 < \frac{\sqrt5 +1}{2}$ , the sequences $(r_{2n+1})$ and $(r_{2n})$ converges because bounded and monotonous, and solving the equation $\frac{2L+1}{L+1}=L$ gives both limit equal to $\frac{\sqrt5 +1}{2}$ and therefore $(r_n) \to \frac{\sqrt5 +1}{2}$ . $\square$ 
   
   Let $a_n$ denote the terms of $F(x)$ , then $\frac{|a_{n+1}|}{|a_n|} = \frac{F_{n+1} }{F_n}x$ and the radius of convergence is $\lim_{n \to \infin} \frac{F_n}{F_{n+1} } = \frac{\sqrt5 - 1}{2}$ .
   
   $$
   \sum_n F_{n+2}x^n = \sum_{n} F_{n+1}x^n + \sum_n F_n x^n
\\
\frac{1}{x^2}(F(x)- x) = \frac1x F(x) + F(x)
\\
F(x) = \frac{x}{1-x-x^2}
   $$

6. (i)
   
   $$
   \begin{align*}
\pi_n  &= \prod_{i=1}^n \frac{1}{1-\frac{1}{p_i}}
\\ &= \prod_{i=1}^n \sum_m \frac{1}{ {p_i}^m }
\\ & = \sum_{m\in \N^n} \prod_{i=1}^n \frac{1}{p_i^{m_i}}
\end{align*}
   $$
   
   Because of unique factorization of integer, when $n \to \infin$ , every term in the harmonic series is covered exactly once, therefore $\pi_n$ diverges. $\square$ 
   
   (ii)
   
   $$
   \begin{align*}
-\ln\left( 1 - \frac 1 x \right) = \sum_{n=1}^\infin 
\frac{\left(\frac 1 x\right)^n}{n}
= \frac 1 x + \sum_{n=2}^\infin \frac{1}{nx^n}
\end{align*}
   $$
   
   And for $x \ge 2$ ,
   
   $$
   \sum_{n=2}^\infin \frac{1}{nx^n} < \sum_{n=2}^\infin \frac{1}{x^n}
= \frac {1}{x^2} \times \frac{1}{1-\frac 1 x } =
\frac{1}{x(x-1)} < \frac 1 x \space\square
   $$
   
   (iii)
   
   $$
   \begin{align*}
\sum_n \frac{1}{p_n} & > \frac 1 2 \sum_n -
\ln\left(1 - \frac{1}{p_n}\right)
\\ &= \frac 1 2 \sum_n \ln\left(1 - \frac{1}{p_n}\right)^{-1}
\\ &= \frac 1 2 \ln \prod_n \left(1 - \frac{1}{p_n}\right)^{-1}
\\ &= \frac 1 2 \ln \pi_n
\\ &\to \infin \space \square
\end{align*}
   $$
