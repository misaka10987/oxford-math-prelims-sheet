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

5. (a) For every page, $\mathbb P( \text{typo} = 0) = \mathrm e^{-\lambda}$ . Then the number of pages with no typos follows a binomial distribution $\mathrm{Bin}(n,\mathrm e^{-\lambda})$ and the expectation is $n\mathrm e^{-\lambda}$ .
   
   (b) $\mathbb P(D=k \mid M = m) = {m \choose k} p^k(1-p)^{m-k}$ .
   
   $$
   \begin{align*}
\mathbb P(D = k) & = \sum_{i = k}^\infin \mathbb P(D = k \mid M = i)
\mathbb P(M = i)
\\ & = \sum_{i = k}^\infin {i \choose k} p^k(1-p)^{i-k}
\frac{ \mathrm e^{-\lambda} \lambda^i }{i!}
\\ & = \frac{\mathrm e^{-\lambda}p^k\lambda^k}{k!} \sum_j
\frac{ ((1-p)\lambda)^j }{ j! }
\\ & = \frac{ \mathrm e^{-p\lambda} (p\lambda)^k }{k!}
\end{align*}
   $$

6. (ii) to (i) is obvious by setting $A = \{x \}$ and $B = \{y\}$ . As for (i) to (ii), let $\alpha = \operatorname{im} X \cap A$ and $\beta = \operatorname{im} X \cap B$ . Obviously $\alpha$ and $\beta$ are countable.
   
   $$
   \begin{align*}
\mathbb P(X \in A, Y \in B) &=
\mathbb P( X^{-1}(\alpha) \cap Y^{-1}(\beta) )
\\ & = \mathbb P\left( 
\left( \bigcup_{x \in \alpha }
X = x \right)
\cap
\left( \bigcup_{y \in \beta }
Y = y \right)
\right)
\\ & = \mathbb P \left( 
\bigcup_{x \in \alpha, y \in \beta}
X = x \cap Y = y
\right)
\\ & = \sum_{x \in \alpha, y \in \beta} \mathbb P(X = x \cap Y = y)
\\ & = \sum_{x \in \alpha, y \in \beta}
\mathbb P(X = x) \mathbb P(Y = y)
\end{align*}
   $$
   
   Also,
   
   $$
   \begin{align*}
\mathbb P(X \in A) \mathbb P(Y \in B)
& = \mathbb P(X^{-1}(\alpha)) \mathbb P(Y^{-1}(\beta))
\\ & = \mathbb P\left( \bigcup_{x \in \alpha} X = x \right)
\mathbb P\left( \bigcup_{y \in \beta} Y = y \right)
\\ & = \left( \sum_{x \in \alpha} \mathbb P(X=x) \right)
\left( \sum_{y \in \beta} \mathbb P(Y=y) \right)
\\ & = \sum_{x \in \alpha, y \in \beta}
\mathbb P(X = x) \mathbb P(Y = y)
\end{align*}
   $$
   
   Therefore (i) and (ii) are equivalent.
   
   $\forall A, B \subseteq \R$ ,
   
   $$
   \begin{align*}
\mathbb P(f(X) \in A, g(Y) \in B)
& = \mathbb P(X \in f^{-1}(A), Y \in g^{-1}(B) )
\\ & = \mathbb P(X \in f^{-1}(A)) \mathbb P(Y \in g^{-1}(B)) 
\\ & = \mathbb P(f(X) \in A) \mathbb P(g(Y) \in B)
\space \square
\end{align*}
   $$

7. 1. $(u_{n+1}+1) = 3(u_n + 1)$ , thus $(u_n + 1)$ is a geometric sequence starting from $1$ and $u_n + 1 = 3^n$ , $u_n = 3^n - 1$ .
   
   2. $(u_{n+1}+n) = 2(u_n + n)$ , thus $(u_n + n)$ is a geometric sequence and $u_n + n = (1+n)2^n$ , $u_n = (1+n)2^n - n$ .
   
   3. $u_n = 1$ .
   
   4. $u_{n + 2}-3u_{n+1}+2u_n = 1$ .
      
      $(u_n + \Delta u_n +\Delta u_{n+1}) - 3(u_n + \Delta u_n) + 2u_n = 1$ .
      
      $\Delta u_{n + 1} = 2\Delta u_n + 1$ .
      
      Since $\Delta u_0 = 0$ , $\Delta u_n = 2^n - 1$ .
      
      $$
      \begin{align*}
u_n &= u_0 + \sum_{i=0}^{n-1} \Delta u_i
\\ & = \sum_{i=0}^{n-1} (2^i - 1)
\\ & = \sum_{i=0}^{n-1} 2^i - \frac{(n-1)n}{2}
\\ & = 2^n - 1 - \frac{(n-1)n}{2}
\end{align*}
      $$
