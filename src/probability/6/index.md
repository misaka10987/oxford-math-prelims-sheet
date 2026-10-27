+++
# TOML Frontmatter
completed = 2026-10-27
+++

# Probability — Sheet 6

1. (a) $G_X(s) = s^a$ .
   
   (b) $G_Z(s) = G_Y(s)^m s^n$ .

2. (a) For there are $k-1 \choose m-1$ possible sequences of length $k-1$ that contain exactly $m-1$ successes, and each has a probability $p^{m-1}(1-p)^{k-m}$ , and the last trial has to be a success, which has probability $p$ .
   
   (b) Let random variable $X$ be the number of trials to get one success. Then $X \sim \mathrm{Geom}(p)$ and has generating function $G_X(s) = \frac{ps}{1-s + ps}$ . Because $Y = mX$ , its generating function
   
   $$
   G_Y(s) = G_X(s)^m = \left( \frac{ps}{1-s + ps} \right)^m
   $$

3. Let $g$ be the generating function of $X_1, X_2, \cdots$ and $h$ be the generating function of $n$ . Then by definition, the generating function of $Z$ 
   
   $$
   \begin{align*}
G_Z(s) &= \mathbb E[s^Z]
\\ & = \sum_n \mathbb E[s^Z \mid N = n] \mathbb P(N = n)
\\ & = \sum_n \mathbb E[s^{nZ}] \mathbb P(N = n)
\\ & = \sum_n g(s)^n \mathbb P(N = n)
\\ & = h(g(s))
\end{align*}
   $$
   
   Therefore,
   
   $$
   \mathbb E[Z] = G_Z'(1) = h'(g(1))g'(1) = \mathbb E[N] \mathbb E[X_1]
   $$
   
   And
   
   $$
   \begin{align*}
\operatorname{var}(Z) =& G_Z''(1) + G_Z'(1) - G_Z'(1)^2
\\ =& h''(g(1))g'(1)^2 + g''(1)h'(g(1)) 
\\ & + h'(g(1))g'(1) -( h'(g(1))g'(1))^2
\\ = & g'(1)^2 (h''(1) - h'(1)^2 ) + h'(1) (g''(1) + g'(1))
\\ = &g'(1)^2(h''(1) + h'(1) - h'(1)^2 )
\\ &+h'(1) (g''(1) + g'(1)-g'(1)^2 )
\\ = &\operatorname{var}(N) \mathbb E[X_1]^2 + \mathbb E[X_1]
\operatorname{var}X_1 \space \square
\end{align*}
   $$
   
   (b) With $h(s) = \exp(\lambda(s-1))$ and $g(s) = 1-p + ps$ , we have
   
   - $\mathbb E[X_1] = g'(1) = p$ .
   
   - $\operatorname{var} X_1 = g''(1) + g'(1) - g'(1)^2 = p-p^2$ .
   
   - $\mathbb E[N] = h'(1) = \lambda$ .
   
   - $\operatorname{var}N = h''(1) + h'(1) - h'(1)^2 = \lambda$ .
   
   Therefore by (a) $\operatorname{var}Z = \lambda p$ .

4. By definition,
   
   $$
   G_X(s) = \sum_{n} s^n \mathbb P(X = n)
   $$
   
   Then
   
   $$
   \begin{align*}
G_X(1) + G_X(-1) &=\sum_{n} \mathbb P(X = n) +
\sum_{n} (-1)^n \mathbb P(X = n)
\\ & = \sum_n (1 + (-1)^n )\mathbb P(X = n)
\\ & = \sum_n 2 \mathbb P(X = 2n)
\end{align*}
   $$
   
   And $\mathbb P(X \equiv 0 \mod 2) = \frac{G_X(1)+G_X(-1)}{2}$ .

5. By definition,
   
   $$
   G(s) = \frac{1}{12} + \frac 2 3 s + \frac 1 4 s^2
   $$
   
   After 2min the probability generating function is $G^2(s)$ and the die-out probability is $G^2(0) =\frac{9}{64}$ .

6. (a) $\mu = 2p$ . $G(s) = (1-p) + ps^2$ .
   
   (b) $s = G(s)$ gives $s = 1-p+ps^2$ and $s = \frac{1-p}{p}$ or $1$ . If $\mu \le 1$ then $\frac{1-p}{p} > 1$ and the die-out probability is $1$ .
   
   (c) $G(s) = \frac 1 2 + \frac 1 2 s^2$ . Because $\beta_n = 1- G^n(0)$ ,
   
   $$
   \begin{align*}
&\beta_n = \beta_{n-1} - \frac{ {\beta_{n-1}}^2 }{2}
\\ \iff & 1-G^n(0) = 1-G^{n-1}(0) - \frac{ (1-G^{n-1}(0))^2 }{2}
\\ \iff & 1 - \frac 1 2 - \frac 1 2 G^{n-1}(0)^2
\\ & = 1 - G^{n-1}(0) - \frac 1 2 + G^{n-1}(0) - \frac 1 2 G^{n-1}(0)^2
\\ \iff & \text{True}
\end{align*}
   $$
   
   By induction,
   
   - $\beta_0 = 1$ , $\beta_1 = \frac 1 2$ .
   
   - If $\beta_n \in (\frac{1}{n+1},\frac{2}{n+2})$ , since $\beta_{n+1} = \beta_{n} - \frac{{\beta_n}^2 }{2}$ , and the parabola $f(x) = x-\frac 1 2 x^2$ is strictly increasing for $x \le \frac{2}{n+2} \le 1$ ,
     
     $$
     \begin{align*}
\beta_{n+1} &\in f\left( \left(\frac{1}{n+1},\frac{2}{n+2}\right) \right) 
\\&= \left(f\left( \frac{1}{n+1}\right), f\left(\frac{2}{n+2}\right)\right)
\\ & = \left(\frac{2n+1}{n^2 + 2n + 1},  \frac{2n + 2}{n^2 + 4n + 4} \right)
\\ & \subseteq \left(\frac{n}{n^2 + 2n}, \frac{2n+2}{n^2 + 4n + 4 }+
\frac{2}{(n+2)^2(n+3)}\right)
\\ & = \left( \frac{1}{n + 2}, \frac{2}{n + 3} \right)
\space \square
\end{align*}
     $$
