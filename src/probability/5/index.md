+++
# TOML Frontmatter
+++

# Probability — Sheet 5

1. (a) $p_n = \frac 1 2(1-p_{n-1)}$ . $p_{n+1}-\frac 1 3 = -\frac 1 2 (p_n - \frac 1 3)$ .
   
   Therefore $p_n - \frac 1 3 = \frac{2}{3} (-\frac 1 2)^n$ and $p_n = \frac 1 3 + \frac 2 3 (-\frac 1 2)^n$ .
   
   (b) $p_n \to \frac 1 3$ .

2. TODO

3. (a) $\frac n M \times \pounds M + (1 - \frac n M) \times \pounds 0 = \pounds n$ .
   
   (b) Let $W_{n}$ be the event to win $\pounds M$ starting with $\pounds n$ , and $F$ being the event to win $\pounds 1$ on the first step.
   
   $$
   \begin{align*}
\mathbb P(A\mid W_n) \mathbb P(W_n)
&= \mathbb P(W_n \mid A) \mathbb P(A)
\\ & = \mathbb P(W_{n+1}) \mathbb P(A)
\\ \mathbb P(A\mid W_n) \times \frac n M
& = \frac{n + 1}{M} \times \frac 1 2
\\ \mathbb P(A\mid W_n) & = \frac{n+1}{2n}
\end{align*}
   $$
   
   (c) We have $e_0 = e_M = 0$ and $e_n = \frac 1 2(e_{n + 1} + 1) + \frac 1 2(e_{n-1} + 1)$ . Then
   
   $$
   \begin{align*}
e_{n + 2} - 2e_{n + 1} + e_n &= -1
\\ e_n + \Delta e_{n} + \Delta e_{n + 1} -2
(e_n + \Delta e_n) + e_n & = -1
\\ \Delta e_{n + 1} - \Delta e_n & = -1
\\ \Delta^2 e_n & = -1
\end{align*}
   $$
   
   Therefore,
   
   $$
   \Delta e_n = \Delta e_0 + \sum_{i=0}^{n-1} \Delta^2 e_i
= \Delta e_0 - n
\\
e_n = e_0 + \sum_{i = 0}^{n-1} \Delta e_n = n \Delta e_0 - 
\frac{n(n-1)}{2}
   $$
   
   Substitute with $e_M = 0$ we get $\Delta e_0 = \frac{M-1}{2}$ and $e_n = \frac{Mn-n^2}{2}$ . $e_n$ is largest when $n$ is closest to $\frac M 2$ .

4. (a) By definition,
   
   $$
   \begin{align*}
G_X(s) &= \sum_{n} s^n \mathbb P(X = n)
\\ & = \sum_{i=1}^\infin s^i p (1-p)^{i-1}
\\ & = ps \sum_{i=1}^\infin (s(1-p) )^{i-1}
\\ & = \frac{ps}{1-(1-p)s}
\end{align*}
   $$
   
   And $|s| < \frac{1}{1-p}$ because the geometric series $\sum_{i=1}^\infin (s(1-p) )^{i-1}$ converges only when $|s(1-p)| < 1$ .
   
   (b)
   
   $$
   \mathbb E[X] = G_X'(1) =
\frac{p(1-s+ps) +(1-p) ps }{(1-s + ps)^2} \big|_{s=1}
= \frac{1}{p}
\\
\operatorname{var} X = G_x''(1) + G_X'(1) - G_X'(1)^2
= \frac{1-p}{p^2}
   $$

5. (a) Let $R_n$ denote the event that the first $n$ tosses are valid.
   
   $$
   \begin{align*}
r_n &= \mathbb P(R_n \mid \text{head}(n) )
\mathbb P(\text{head}(n) )
+\mathbb P(R_n \mid \text{tail}(n) )
\mathbb P(\text{tail}(n) )
\\ &= \frac 1 2 \mathbb P( R_{n-2}, \text{head}(n-1) ) +
\frac 1 2 r_{n-1}
\\ & = \frac 1 2 r_{n-1} + \frac 1 4 r_{n-2}
\end{align*}
   $$
   
   $r_2 = \frac 1 2 r_1 + \frac 1 4 r_0 = \frac 3 4$ .
   
   (b)
   
   $$
   4r_{n + 2} - 2r_{n + 1} - r_n = 0
   $$
   
   Solving the auxiliary equation $4\lambda^2 - 2\lambda - 1 = 0$ gives $\lambda = \frac{1 \pm \sqrt{5} }{4}$ , and the general solution is $A(\frac{1+\sqrt 5}{4})^n + B(\frac{1 - \sqrt 5}{4})^n$ . By substituting $r_0 = r_1 = 1$ we have
   
   $$
   r_n = \frac{5 + 3 \sqrt 5}{10}(\frac{1+\sqrt 5}{4})^n + 
\frac{5 - 3 \sqrt 5}{10}(\frac{1-\sqrt 5}{4})^n
   $$
   
   And
   
   $$
   
   $$
   
   
   
   
   
   d
