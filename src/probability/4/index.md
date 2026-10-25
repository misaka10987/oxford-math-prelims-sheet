+++
# TOML Frontmatter
+++

# Probability — Sheet 4

1. By definition,
   
   $$
   \mathbb E[X] = \sum_{i=1}^n i \mathbb P(X=i)
= \sum_{i=1}^n i \times \frac 1 n = 1
   $$
   
   $$
   \begin{align*}
\operatorname{var}X &= \mathbb E[(X-\mathbb E[X])^2]
\\ &= \mathbb E[(X-1)^2]
\\ & = \sum_{i=1}^n (i-1)^2 \mathbb P(X=i)
\\ & = \sum_{i=1}^n (i-1)^2 \times \frac 1 n
\\ & = \frac 1 n \sum_{i=0}^{n-1}i^2
\\ & = \frac 1 n \frac{(n-1)n(2n-1)}{6}
\\ & = \frac{(n-1)(2n-1)}{6}
\end{align*}
   $$

2. | $n$  | $\mathbb P(X=n)$ | $\mathbb P(Y = n)$ |
   | ---- | ---------------- | ------------------ |
   | $-1$ | $\frac 2 9$      | $\frac 1 3$        |
   | $0$  | $\frac{14}{27}$  | $\frac 1 3$        |
   | $1$  | $\frac{7}{27}$   | $\frac 1 3$        |
   
   $$
   \begin{align*}
\operatorname{cov}(X,Y)
& = \mathbb E( (X - \mathbb E[X]) (Y - \mathbb E[Y]) )
\\ & = \sum_{i,j \in \{-1,0,1 \} }
\left(i - \frac{1}{27}\right) 
\left(j - 0 \right)
\mathbb P(X=i,Y=j)
\\ & = 0
\end{align*}
   $$
   
   $X$ and $Y$ are not independent because $\mathbb P(X=-1,Y=-1) = \frac 1{27}$ but $\mathbb P(X=-1)\mathbb P(Y=-1) = \frac 2 9 \times \frac 1 3 = \frac 2{27}$ .

3. (a)
   
   $$
   \begin{align*}
\mathbb P(X=k, Y=m) &= \mathbb P(X = k) \mathbb P(Y=m)
\\ & = \frac{\mathrm e^{-\lambda}\lambda^k }{k!}
\times \frac{ \mathrm e^{-\mu}\mu^m }{m!}
\\ & = \frac{\mathrm e^{-\lambda-\mu} \lambda^k \mu^m }{k!m!}
\end{align*}
   $$
   
   (b)
   
   $$
   \begin{align*}
\mathbb P(X + Y = n) &= \sum_{i=0}^n \mathbb P(X = i, Y = n-i)
\\ & = \sum_{i=0}^n
\frac{\mathrm e^{-\lambda-\mu} \lambda^i \mu^{1-i} }{i!(n-i)!}
\\ & = \sum_{i=0}^n \frac{\mathrm e^{-\lambda-\mu}}{n!} {n \choose i}
\lambda^i\mu^{1-i}
\\ & =  \frac{\mathrm e^{-\lambda-\mu}}{n!} (\lambda + \mu)^n
\end{align*}
   $$
   
   This is also a Poisson distribution $\mathrm{Po}(\lambda + \mu)$ .
   
   (c)
   
   $$
   \begin{align*}
\mathbb P(X = k \mid X + Y = n)
& = \frac{\mathbb P(X=k, Y=n-k)}{\mathbb P(X + Y = n)}
\\ & = \frac{
    \frac{\mathrm e^ {-\lambda-\mu} \lambda^k \mu^{n-k} }{k!(n-k)!}
}{
    \frac{ \mathrm e^{-\lambda-\mu} (\lambda+\mu)^n }{n!}
}
\\ & = \frac{
    \lambda^k \mu^{n-k} n!
}{
    k! (n-k)!(\lambda+\mu)^n
}
\\ & =   {n \choose k}
\left( \frac{\lambda}{\lambda + \mu} \right)^k
\left( \frac{\mu}{\lambda + \mu} \right)^{n-k}
\end{align*}
   $$
   
   This is a binomial distribution $\mathrm{Bin}(n, \frac{\lambda}{\lambda + \mu})$ .
   
   (d) Let $p = \frac{\lambda}{\lambda + \mu}$ .
   
   $$
   \begin{align*}
\mathbb E[X \mid X + Y = n]
& = \sum_{i=0}^n i \mathbb P(X = i \mid X + Y = n)
\\ & = \sum_{i=0}^n i {n \choose i} p^i (1-p)^{n-i}
\\ & = np \sum_{i=1}^n {n-1 \choose i-1} p^{i-1}(1-p)^{n-i}
\\ & = np
\\ & = \frac{n\lambda}{\lambda + \mu}
\end{align*}
   $$

4. (a)
   
   $$
   \begin{align*}
\mathbb P(X = k \mid X + Y = n + 1)
& = \frac{ \mathbb P(X = k, Y = n + 1-k) }{ \mathbb P(X + Y = n + 1) }
\\ & = \frac{\mathbb P(X=k) \mathbb P(Y=n+1-k) }{
    \sum_{i=1}^n \mathbb P(X=i) \mathbb P(Y=n-i)
}
\\ & = \frac{ p(1-p)^{k-1} p(1-p)^{n-k} }{
    \sum_{i=1}^n p(1-p)^{i-1}p(1-p)^{n-i-1}
}
\\ & = \frac{ (1-p)^{n-1} }{
    \sum_{i=1}^n (1-p)^{n-2}
}
\\ & = \frac{1-p}{n}
\end{align*}
   $$
   
   (b) By question 3 (a) of sheet 3, $\mathbb P(X > k) = \mathbb P(Y > k) = (1-p)^k$ .
   
   $$
   \begin{align*}
\mathbb P(\min\{X,Y\} > k) 
& = \mathbb P(X > k, Y > k)
\\ & = \mathbb P(X>k) \mathbb P(Y>k)
\\ & = (1-p)^{2k}
\end{align*}
   $$
   
   Therefore,
   
   $$
   \begin{align*}
\mathbb P(\min\{X,Y\} = k) =&
\mathbb P(\min\{X,Y\} >k-1) \\ &- \mathbb P(\min\{X,Y\} > k)
\\ =& (1-p)^{2k-2} - (1-p)^{2k}
\end{align*}
   $$
   
   Let $q = 1-(1-p)^2$ . Then $\mathbb P(\min\{X,Y\}=k) = (1-q)^{k-1}q$ , and $\min\{X,Y\} \sim \mathrm{Geom}(q)$ .

5. For every page, $\mathbb P( \text{typo} = 0) = \mathrm e^{-\lambda}$ . Then the number of pages with no typos follows a Poisson distribution $\mathrm{Po}(\mathrm e^{-\lambda})$ .
   
   $$
   \begin{align*}
\mathbb E[\text{page}] &= \sum_{i=0}^n i \mathbb P(\text{page} = i)

\end{align*}
   $$
   
   
   
   a

6. s
