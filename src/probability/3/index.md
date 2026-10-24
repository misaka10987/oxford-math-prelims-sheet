+++
# TOML Frontmatter
+++

# Probability — Sheet 3

1. 
   
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

2. 
   
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
   
   (b)
   
   a
   
   
