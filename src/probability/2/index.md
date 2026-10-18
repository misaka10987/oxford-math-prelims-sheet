+++
# TOML Frontmatter
+++

# Probability — Sheet 2

1. (a) $\mathbb P(A) = \frac 1 6$ , $\mathbb P(B) = \frac 1 2$ , $\mathbb P(A \cap B) = \frac 1{12} = \mathbb P(A) \mathbb P(B)$ .
   
   (b) $\mathbb P(C) = \frac 1 2$ , $\mathbb P(B \cap C) = \frac 1 4 = \mathbb P(B) \mathbb P(C)$ .
   
   (c) $\mathbb P(A \cap C) = \frac{1}{12} = \mathbb P(A) \mathbb P(C)$ .
   
   (d) $\mathbb P(A \cap B \cap C) = 0 \ne \mathbb P(A) \mathbb P(B) \mathbb P(C)$ , so $A$ , $B$ , and $C$ are not independent.

2. $$
   \frac{95\% \times 0.5 \%}{ 95\% \times 0.5\% + 1\% \times (1-0.5\%) }
\approx 0.3
   $$

3. (a) $\frac{m}{m + n}$ .
   
   (b) $\frac{m}{m + n} \times \frac{m-1}{m+n-1} + \frac{n}{m+n} \times \frac{m}{m+n-1} = \frac{m^2 + mn - 1}{(m+n)(m+n-1)}$ .
   
   (c) Denote "first ball red" and "second ball red" as $R_1$ and $R_2$ .
   
   $$
   \mathbb P(R_1 \mid R_2) \mathbb P(R_2) = 
\mathbb P(R_2 \mid R_1) \mathbb P(R_1)
\\
\mathbb P(R_1 \mid R_2) = \frac{m^2 - m}{m^2 + mn - 1}
   $$

4. The probability of the member being a Conservative is
   
   $$
   \mathbb P(C) = \frac{p}{p + (1-p)(1-r)}
   $$
   
   And the probability of being a Labour is $\mathbb P(L) = 1-\mathbb P(C)$ . Then the probability of voting again the same way is
   
   $$
   \begin{align*}
& \mathbb P(C) + (1-r) \mathbb P(L)
\\ = & \frac{p}{p + (1-p)(1-r)} + (1-r)
\left(1-\frac{p}{p + (1-p)(1-r)}\right)
\\ =& \frac{(1-p)r^2 + (2p-2)r + 1}{(p-1)r + 1}
\end{align*}
   $$

5. (a) ${26 \choose 13} \times 2^{-26}$ .
   
   (b) $\frac{ {26 \choose 13} {26 \choose 13} }{ 52 \choose 26 }$ .
   
   The probability in (b) shall be greater than (a) because drawing more red cards will decrease the probability of drawing a red card and increase the probability of drawing a black card, vice versa.
   
   $$
   \begin{align*}
{26 \choose 13} \times 2^{-26}
& = \frac{26!}{ (13!)^2 \times 2^{26} }
\\ & \approx \frac{ 
\sqrt{2\pi}\mathrm e^{-26} \times 26^{26} \times \sqrt{26}
}{
2\pi \mathrm e^{-26} \times 13^{27} \times2^{26}
}
\\ & = \frac{ 
1
}{
\sqrt{13\pi}
}
\end{align*}
   $$
   
   $$
   \begin{align*}
\frac{ {26 \choose 13} {26 \choose 13} }{ 52 \choose 26 }
& = \frac{ 26! \times 26! \times 26! \times 26!}
{ 13! \times 13! \times 13! \times 13! \times 52!}
\\ & \approx \frac{
4\pi^2 \mathrm e^{-104} \times 26^{106}
}{
4 \pi^2 \mathrm e^{-52} \times 13^{54}
\times \sqrt{2\pi} \mathrm e^{-52} \times 52^{52} \times \sqrt{52}
}
\\ &= \frac{
2
}{
\sqrt{26\pi}
}
\end{align*}
   $$
   
   Which is $\sqrt 2$ the former.

6. (a) 
   
   $$
   \begin{align*}
\mathbb P(k \mid X) 
& = \sum_{n=1}^\infin p_X(kn)
\\ & = \sum_{n=1}^\infin \frac{1}{(kn)^s} \frac{1}{\zeta(s)}
\\ & =
\frac{1}{k^s}
\frac{1}{\zeta(s)}
\sum_{n=1}^\infin \frac{1}{n^s  }
\\ & = \frac{1}{k^s}
\end{align*}
   $$
   
   (b) For all finite set of primes $P$ ,
   
   $$
   \begin{align*}
\mathbb P \left( \bigcap_{p \in P} D_p \right )
& = \mathbb P (D _{ \prod_{p \in P}p })
\\ & = \frac{1}{(\prod_{p \in P}p)^s} 
\\ & = \prod_{p \in P} \frac{1}{p^s}
\\ & = \prod_{p \in P} \mathbb P(D_p) \space \square
\end{align*}
   $$
   
   (c) Let $\pi$ be the event that $X$ is prime. Let $P$ be the set of primes and $P_n$ be the $n$ -th prime. Then
   
   $$
   \begin{align*}
\mathbb P(X = 1) &= \mathbb P\left( 
\bigcap_{i=1}^\infin \overline {D_{P_i}}
\right)
\\ & = \prod_{i=1}^\infin \mathbb P(\overline {D_{P_i}})
\\ & = \prod_{p \in P} (1 - \mathbb P(D_{p}) )
\\ & = \prod_{p \in P}
\left(1 - \frac{1}{p^s} \right)
\end{align*}
   $$
   
   Also,
   
   $$
   \begin{align*}
\mathbb P(X=1) = \frac{1}{\zeta(s)}
\end{align*}
   $$
   
   Therefore,
   
   $$
   \prod_{p \in P}
\left(1 - \frac{1}{p^s} \right)
= \frac{1}{\zeta(s)}
\\
\zeta(s) = 
\prod_{p \in P}
\left(1 - \frac{1}{p^s} \right)^{-1}
   $$
