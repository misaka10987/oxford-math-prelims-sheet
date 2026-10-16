+++
# TOML Frontmatter
completed = 2026-10-16
+++

# Sheet 1

1. `ABSTEMIOUSLY` has 12 letters and no repeated letter except 'S'.
   
   $\mathrm P_{12}^{12} \div \mathrm P_2^2 = 239500800$ .
   
   $\mathrm P_{11}^{11} \div \mathrm P_2^2 \cdot \mathrm P_2^2 = 39916800$ .
   
   $\mathrm P_{12}^{12} \div \mathrm P_2^2 \div \mathrm P_6^6 = 332640$ .

2. $\frac{200!}{2^{100}}$ .

3. $(\frac{1}{6})^3 (\frac{1}{6})^2(\frac{1}{6})^2\frac{1}{6}  \cdot \frac{1}{6} \cdot {9 \choose 3}{6 \choose 2}{4 \choose 2}{2 \choose 1}{1 \choose 1} = \frac{35}{3888}$ .

4. $k \choose r$ .
   
   The right-hand side ${n + 1 \choose r + 1}$ , or the number of $(r+1)$ - subsets, is the sum of number of $(r+1)$ - subsets with $k+1$ as their largest element for all possible $k$ s, which is equal to the left-hand side.

5. (a) $\mathbb P(\empty) + \mathbb P(\Omega) = \mathbb P(\empty \cup \Omega) = \mathbb P(\Omega)$ , therefore $\mathbb P(\empty) = 0$ .
   
   (b) $\mathbb P(A \backslash B) + \mathbb P(A \cap B) = \mathbb P(A \backslash B \cup A \cap B) = \mathbb P(A)$ because $A \backslash B$ and $A \cap B$ are disjoint.
   
   (c) 
   
   $$
   \begin{align*}
\mathbb P(A \cup B) 
& = \mathbb P(A \backslash B \cup A \cap B \cup B \backslash A)
\\ &= \mathbb P(A \backslash B) + \mathbb P(A \cap B) + \mathbb P(B \backslash A)
\\ &=
(\mathbb P(A \backslash B) + \mathbb P(A \cap B)) + (\mathbb P(B \backslash A) + \mathbb P(A \cap B)) - \mathbb P(A \cap B)
\\ &= \mathbb P(A) + \mathbb P(B) - \mathbb P(A \cap B)
\space \square
\end{align*}
   $$

6. (a) $(B \cup C) \cap \overline A$ .
   
   (b) 
   
   $$
   \begin{align*}
\mathbb P((B \cup C) \cap \overline A )
& = \mathbb P((B \cup C) \backslash A)
\\ & = \mathbb P(B \cup C) - \mathbb P((B \cup C) \cap A)
\\ &= \mathbb P(B \cup C)  - \mathbb P(B \cap A \cup C \cap A)
\\ &= \mathbb P(B) + \mathbb P(C) - \mathbb P(B \cap C) - \mathbb P(B \cap A) - P (C \cap A) + \mathbb P(B \cap A \cap C)
\space \square
\end{align*}
   $$
   
   (c) $0.235$ by applying the result of (b) with $B$ , $C$ , and $A$ corresponds to divisibility by $5$ , $7$ , and non-divisibility by $4$ , respectively.

7. (a) $1 - \frac{\mathrm P_{365}^n}{365^n}$ , $n \ge 23$ .
   
   (b) $1 - (\frac{364}{365})^n$ , $n \ge 253$ .

8. (a) $\mathbb P(A_1) = \frac{(n-1)!}{n!}$ for there are $(n-1)!$ arrangements for the first key to be on the correct hook (since the subsequent keys can be arbitrarily arranged) and $n!$ total arrangements. $\mathbb P(A_1 \cap A_2) = \frac{(n-2)!}{n!}$ similarly because there are $(n-2)!$ arrangements and subsequent keys can still be arbitrarily arranged.
   
   (b) $n \choose 2$ .
   
   (c)
   
   $$
   \begin{align*}
\mathbb P \left( \bigcup _{i=1}^n A_i \right) 
& = 
\sum_{\empty \ne I \subseteq \N^*_{\le n}}
(-1)^{|I| + 1}
\mathbb P\left(
\bigcap_{i \in I}A_i
\right)
\\
& = \sum_{i = 1}^n(-1)^{i + 1} {n \choose i} \frac{(n - i)!}{n!}
\\
& = \sum_{i = 1}^n (-1)^{i + 1} \frac{n!}{(n-i)!i!}
\frac{(n - i)!}{n!}
\\
& = \sum_{i = 1}^n (-1)^{i + 1} \frac{1}{i!}
\end{align*}
   $$
   
   For a sufficiently large $n$ , this would be close to the Taylor expansion of $- \mathrm e^{- x}$ at $x = 0$ except for missing the first term $-1$ .
   
   $$
   \mathbb P \left( \bigcup _{i=1}^n A_i \right)  \approx 1 - \mathrm e^{-1}
   $$
   
   (d)
   
   $$
   p_n(0) = 1 - \mathbb P \left( \bigcup _{i=1}^n A_i \right)
\approx \mathrm e^{-1}
   $$
   
   $$
   \begin{align*}
p_n(r) & = {n \choose r} p_r(r) p_{n-r}(0)
\\ & = { n \choose r} \left( \frac{1}{\mathrm P_r^r} \right) 
\left(1 -
\sum_{i=1}^{n - r} (-1)^{i + 1} \frac{1}{i!} \right )
\\ & = \frac{1}{r!}
\sum_{k = 0}^{n - r}\frac{(-1)^k}{k!} \space \square
\end{align*}
   $$
