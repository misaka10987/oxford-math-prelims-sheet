+++
# TOML Frontmatter
+++

# Probability — Sheet 8

1. (a) $C_1 = 1$ .
   
   - $f_X(x) = \int_0^2 f_{X,Y} (x,y) \mathrm dy = \frac{6x^2 + 2x}{3}$ .
   
   - $f_Y(x) = \int_0^1 f_{X,Y}(x,y) \mathrm dx = \frac{y+2}{6}$ .
   
   - $f_X(x)f_Y(y) \ne f_{X,Y}(x,y)$ , not independent.
   
   - $\mathbb P(X \le \frac12, Y \le 1 ) = \int_0^1\int_0^{\frac12} f_{X,Y}(x,y) \mathrm dx\mathrm dy = \frac{1}{16}$ .
   
   (b) $C_2 = 1$ .
   
   - $f_X(x) =\int_x^\infin f_{X,Y}(x,y) \mathrm d y = \exp(-2x)$ .
   
   - $f_Y(y) = \int_0^y f_{X,Y}(x,y) \mathrm dx = \exp(-y)-\exp(-2y)$ .
   
   - $f_X(x)f_Y(y) \ne f_{X,Y}(x,y)$ , not independent.
   
   - $\mathbb P(X \le \frac12 , Y \le 1 ) = \int_0^{\frac12}\int_x^1 f_{X,Y}(x,y) \mathrm dy\mathrm dx = \frac12 + \mathrm e^{-\frac32} - \frac32 \mathrm e^{-1}$ .
   
   If the region is $0 < x,y < \infin$ then $x$ and $y$ would be independent.

2. (a)
   
   $$
   \begin{align*}
\mathbb P(X > t) &= \prod_{i=1}^n \mathbb P(T_i > t)
\\ &= \prod_{i=1}^n \int_t^\infin \lambda \exp(-\lambda_i x) \mathrm dx
\\ &= \prod_{i=1}^n \exp(-\lambda_i t)
\\ &= \exp(-\sum_{i=1}^n \lambda_it)
\end{align*}
   $$
   
   Let $\lambda' = \sum_{i=1}^n \lambda_i$ . Then the density of $X$ is $\frac{\mathrm d}{\mathrm dx}\mathbb P(X > t) = -\lambda'\exp(-\lambda't)$ and $X \sim \text{Exp}(\lambda')$ . $\square$ 
   
   (b)
   
   $$
   \begin{align*}
\mathbb E[\text{unseen}] &=
\sum_{i=1}^n \mathbb P(\text{unseen}(i))
\\ &= \sum_{i=1}^n \int_1^\infin (-\lambda_i\exp(-\lambda_i x)) \mathrm dx
\\ &= \sum_{i=1}^n \mathrm e^{-\lambda_i}
\end{align*}
   $$
   
   (c)
   
   $$
   \begin{align*}
\mathbb P(M \le t) &= \prod_{i=1}^n \mathbb P(T_i \le t)
\\ &= \prod_{i=1}^n \int_0^t \exp(-x) \mathrm d x
\\ &= (1- \exp(-t))^n
\end{align*}
   $$
   
   Then solving the equation $\mathbb P(M \le t) = \frac12$ gives the median $m = -\ln(1-(\frac12)^{\frac1n})$ . And $m \approx -\ln (-\frac1n \ln\frac12) = \Omicron(\ln n)$ .

3. The quadratic equation has two real solution iff. $U^2-V >0$ and $V < U^2$. And
   
   $$
   \mathbb P(V < U^2) = \int_0^1 \int_0^{u^2}\mathrm dv\mathrm du=\frac13
   $$

4. Let $X$ be the number of 6s. Then $X \sim \text{Bin}(n, \frac16)$ . By Chebyshev's inequality,
   
   $$
   \mathbb P(|X - \mathbb E[X] | \ge \sqrt n)
\le \frac{\operatorname{var} X }{n}
= \frac{n \times \frac16 (1-\frac16)}{n} = \frac{5}{36}
   $$
   
   And
   
   $$
   \mathbb P\left(X \in\left(\frac n 6 - \sqrt n, 
\frac n 6 + \sqrt n\right)\right )
= 1 - \mathbb P(|X - \mathbb E[X] | \ge \sqrt n) \ge \frac{31}{36}
\space \square
   $$

5. 
   
   s

6. d
