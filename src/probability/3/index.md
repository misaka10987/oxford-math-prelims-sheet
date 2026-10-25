+++
# TOML Frontmatter
completed = 2026-10-25
+++

# Probability — Sheet 3

1. By definition, 
   
   $$
   \begin{align*}
\sum_{i = 0}^n i {n \choose i} p^i(1-p)^{n-i}
& = \sum_{i=1}^ni \frac{n!}{(n-i)!i!} p^i (1-p)^{n-i}
\\ & = n\sum_{i=1}^n { n-1 \choose i-1 }p^i(1-p)^{n-i}
\\ & = n\sum_{i=0}^{n-1} {n-1 \choose i} p^{i + 1}(1-p)^{n-1-i}
\\ & = np \sum_{i=0}^{n-1} {n-1 \choose i} p^i(1-p)^{n-1-i}
\\ & = np(p + (1-p)  )^{n-1}
\\ & = np
\end{align*}
   $$

2. We have
   
   $$
   \begin{align*}
\mathbb E[X] &= \sum_{i=0}^\infin i \mathbb P(X=i)
\\ & = \sum_{i=0}^\infin \sum_{0 \le j < i} \mathbb P(X=i)
\\ & = \sum_{0 \le j < i} \mathbb P(X=i)
\\ & = \sum_{j=0}^\infin \sum_{i>j} \mathbb P(X=i)
\\ & = \sum_{j=0}^\infin \mathbb P(X > i) \space \square
\end{align*}
   $$

3. (a)
   
   $$
   \begin{align*}
\mathbb P(X > k) &= \sum_{i=k+1}^\infin \mathbb P(X = i)
\\ & = \sum_{i = k + 1}^\infin p(1-p)^{i-1}
\\ & = p(1-p)^k \sum_{i=0}^\infin (1-p)^i
\\ & = p(1-p)^k \frac{ 1 }{ 1 - (1-p) }
\\ & = (1-p)^k
\end{align*}
   $$
   
   (b) 
   
   $$
   \begin{align*}
&\mathbb P(X=k+r \mid X>k) \mathbb P(X > k)
\\ &= \mathbb P(X>k \mid X=k + r) \mathbb P(X = k + r)
\\ \implies & \mathbb P(X = k + r \mid X > k) (1-p)^k
\\ &= 1 \times p(1-p)^{k + r - 1}
\\ \implies & \mathbb P(X = k + r \mid X > k) =  p(1-p)^{r-1}
\\ & = \mathbb P(X = r) \space \square
\end{align*}
   $$

4. (a)
   
   $$
   \begin{align*}
\mathbb P(X = k) & = {n \choose k}
\left( \frac \lambda n \right)^k
\left(1- \frac \lambda n \right)^{n-k}
\\ & = {n \choose k}
\left( \frac \lambda n \right)^k
\left(1- \frac \lambda n \right)^{n}
\left(1 - \frac \lambda n\right)^{-k}
\\ & \approx \mathrm e^{-\lambda} {n \choose k}
\left( \frac \lambda n \right)^k
\left(1 - \frac \lambda n\right)^{-k}
\\ & = \mathrm e^{-\lambda} {n \choose k}
\left( \frac {\lambda} {n}
\times \frac{n}{n-\lambda} \right)^k
\\ & = \mathrm e^{-\lambda}
\frac{
n!\lambda^k
}{(n-k)!k! (n-\lambda)^k }
\\ & = \frac{\mathrm e^{-\lambda} \lambda^k }{k!}
\times \frac{n!}{ (n-k)! (n-\lambda)^k }
\\ & \approx \frac{\mathrm e^{-\lambda} \lambda^k }{k!}
\space \square
\end{align*}
   $$
   
   (b) In this case $\frac{\lambda}{n} = 10^{-3}$ and $\lambda = 1$ .
   
   Using a Poisson random variable $\mathbb P(X = 0) = \frac{\mathrm e^{-1} \times 1 }{0!} = \mathrm e^{-1}$ .
   
   Using a binomial random variable
   
   $$
   \begin{align*}
\mathbb P(X = 0) &= {1000 \choose 0} (10^{-3})^0 (1-10^{-3})^{1000}
\\ & = 0.999^{1000}
\end{align*}
   $$
   
   The former is around 0.36787944117144233 and the latter is 0.368, with an error of 0.0327%.

5. $$
   \begin{align*}
\mathbb E[f(X)] &= \sum_n f(n) \mathbb P(X=n)
\\ & = \sum_n \exp(\theta n)
\frac{\mathrm e^{-\lambda} \lambda^n}{n!}
\\ & = \mathrm e^{-\lambda} \sum_n
\frac{ (\mathrm e^\theta \lambda)^n }{n!}
\\ & = \mathrm e^{-\lambda} \exp (\mathrm e^\theta \lambda)
\\ & = \exp(\lambda(\mathrm e^\theta - 1)) \space \square
\end{align*}
   $$

6. We have
   
   $$
   \begin{align*}
\mathbb E[X] &= 1 \times \mathbb P(A_3) + 
(1 + \mathbb E[x]) \times \mathbb P(A_1) + 
(2 + \mathbb E[x]) \times \mathbb P(A_2)
\\ & = \frac 1 4 + \frac 1 2 + \frac 1 2 \mathbb E[x] +
\frac 1 2 + \frac 1 4 \mathbb E[x]
\\ \frac 1 4 \mathbb E[x] & = \frac 5 4
\\ \mathbb E[x] & = 5
\end{align*}
   $$

7. (a) $\frac{n-1}{n}$ . $\mathrm{Geom}(\frac{n-1}{n})$ .
   
   (b) $\mathrm{Geom}( \frac{n-k+1}{k} )$ .
   
   (c) We have
   
   $$
   \begin{align*}
\mathbb E[T] &= \sum_{i=1}^n \mathbb E[T_n]
\\ & = \sum_{i=1}^n \sum_{j=1}^\infin
j \times \frac{n-i+1}{n}
\times \left(\frac{i-1}{n} \right)^{j-1}
\\ & = \sum_{i=1}^n \frac{n-i+1}{n}
\sum_{j=1}^\infin 
\sum_{k=1}^j
\left(\frac{i-1}{n} \right)^{j-1}
\\ & = \sum_{i=1}^n \frac{n-i+1}{n}
\sum_{1 \le k \le j} \left(\frac{i-1}{n} \right)^{j-1}
\\ & = \sum_{i=1}^n \frac{n-i+1}{n}
\sum_{k=1}^\infin
\sum_{j=k}^\infin
\left(\frac{i-1}{n} \right)^{j-1}
\\ & = \sum_{i=1}^n \frac{n-i+1}{n}
\sum_{k=1}^\infin
\left(\frac{i-1}{n} \right)^{k-1}
\sum_{j=0}^\infin
\left(\frac{i-1}{n} \right)^{j}
\\ & = \sum_{i=1}^n \frac{n-i+1}{n}
\sum_{k=1}^\infin
\left(\frac{i-1}{n} \right)^{k-1}
\frac{1}{1-\frac{i-1}{n}}
\\ & = \sum_{i=1}^n \sum_{k=0}^\infin 
\left( \frac{i-1}{n} \right)^k
\\ & = \sum_{i=1}^n \frac{1}{1- \frac{i-1}{n} }
\\ & = n\sum_{i=1}^n \frac 1 i
\end{align*}
   $$
   
   Since $\ln x = \int_1^x \frac 1 y \mathrm d y$ we have $\mathbb E[T] \approx n \ln n$ .
   
   $\Omicron(n \ln n)$ .
