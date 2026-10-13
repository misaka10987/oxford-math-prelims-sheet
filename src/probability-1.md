+++
# TOML Frontmatter
+++

# Sheet 1

1. `ABSTEMIOUSLY` has 12 letters and no repeated letter except 'S'.
   
   $\mathrm P_{10}^{10} {11 \choose 2} = 199584000$ .
   
   $\mathrm P_9^9 \mathrm P_2^2 {11 \choose 2} = 39916800$ .
   
   $\mathrm P_{10}^{10} {11 \choose 2} \div \mathrm P_6^6 = 277200$ .

2. TODO

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
(\mathbb P(A \backslash B) + \mathbb P(A \cap B))
+ (\mathbb P(B \backslash A) + \mathbb P(A \cap B))
- \mathbb P(A \cap B)
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
\\ &= \mathbb P(B \cup C) 
- \mathbb P(B \cap A \cup C \cap A)
\\ &= \mathbb P(B)
+ \mathbb P(C) - \mathbb P(B \cap C)
- \mathbb P(B \cap A) - P (C \cap A)
+ \mathbb P(B \cap A \cap C)
\space \square
\end{align*}
   $$
   
   (c) $0.235$ by applying the result of (b) with $B$ , $C$ , and $A$ corresponds to divisibility by $5$ , $7$ , and non-divisibility by $4$ , respectively.

7. (a) ${n \choose 2} \frac{1}{365}$ , $n \ge 20$ .
   
   (b) $1 - (\frac{364}{365})^n$ , $n \ge 253$ .

8. (a) $\mathbb P(A_1) = \frac{(n-1)!}{n!}$ for there are $(n-1)!$ arrangements for the first key to be on the correct hook (since the subsequent keys can be arbitrarily arranged) and $n!$ total arrangements. $\mathbb P(A_1 \cap A_2) = \frac{(n-2)!}{n!}$ similarly because 
   
   
