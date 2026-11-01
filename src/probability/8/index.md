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

5. By Chebyshev's inequality,
   
   $$
   \mathbb P(|\overline X - \mathbb E[X] | \ge 2\sigma)
\le \frac{\operatorname{var}\overline X }{4\sigma^2}
= \frac{1}{4n}
   $$
   
   We need to make this probability less than 0.01 then $\frac{1}{4n}<0.01$ and $n > 25$ .

6. (a) Obviously $\mathbb P(A_i = 1) = \frac14$ and $\mathbb P(A_i = 0) = \frac34$ . Then $\mathbb E[A_i] = \frac14$ and $\operatorname{var}A_i = \frac{3}{16}$ .
   
   (b) For $j = i + 1$ , consider the coins $i$ , $i+1$ , $i + 2$ :
   
   | Coin      | Probability | $A_i$ | $A_j$ |
   | --------- | ----------- | ----- | ----- |
   | HHH       | $\frac18$   | 1     | 1     |
   | HHT       | $\frac18$   | 1     | 0     |
   | THH       | $\frac18$   | 0     | 1     |
   | Any other | $\frac58$   | 0     | 0     |
   
   And by direct calculation $\operatorname{cov}(A_i,A_j) = \frac{5}{32}$ .
   
   Obviously when $|i-j|>1$ the two events are independent and $\operatorname{cov}(A_i,A_j) = 0$ .
   
   (c)
   
   $$
   \mathbb E[M] = \sum_{i=1}^n \mathbb E[A_i] = \frac14 n
   $$
   
   $$
   \begin{align*}
\operatorname{var}M
&= \sum_{i=1}^n \operatorname{var}A_i +
2\sum_{1 \le i < j \le n} \operatorname{cov}(A_i, A_j)
\\ &= \frac{3}{16}n + 2(n-1) \times \frac{5}{32}
\\ &= \frac12 n- \frac{5}{16}
\end{align*}
   $$
   
   (d) Let $B_i$ for the occurrence of TH. Similarly $\mathbb E[B_i] = \frac14$ , $\operatorname{var}B_i = \frac{3}{16}$ , and the $B$ s are independent unless adjacent. Similar to (b),
   
   | Coin      | Probability | $B_i$ | $B_j$ |
   | --------- | ----------- | ----- | ----- |
   | TH?       | $\frac14$   | 1     | 0     |
   | ?TH       | $\frac14$   | 0     | 1     |
   | Any other | $\frac12$   | 0     | 0     |
   
   And $\operatorname{cov}(B_i,B_j) = \frac18$ . By applying the calculation in (c), $\mathbb E[\sum B] = \frac14 n$ and $\operatorname{var}\sum B = \frac{7}{16}n-\frac14$ .

7. Binomial distribution $\text{Bin}(n,p)$ .
   
   Let $X_i$ , $i \in \N$ be a sequence of $\text{Ber}(p)$ random variables.
   
   $$
   \begin{align*}
&\lim_{n \to \infin} \sum_{r \in \N, an<r<bn} {n \choose r}
p^r(1-p)^{n-r}
\\ &= \lim_{n \to \infin}
\mathbb P\left( \sum_{m} X_m \in (an, bn) \right)
\\ &= \lim_{n \to \infin}
\mathbb P\left( \frac{1}{n} \sum_{m} X_m \in (a, b) \right)
\end{align*}
   $$
   
   By the weak law of large numbers, the limit is 1 when $a < p < b$ and 0 when $p<a$ or $p > b$ .
