+++
# TOML Frontmatter
+++

# Problem Sheet 1

1. By induction.
   
   - If $n=1$ , trivially true.
   
   - If the statement holds $\forall i : \N \le n$ , let $y = x_n + x_{n+1}$ , then
     
     $$
     1-y = 1 - x_n - x_{n+1} < 1 - x_n - x_{n+1} + x_n x_{n+1} = (1-x_n) (1-x_{n+1})
     $$
     
     And
     
     $$
     \prod_{i=1}^{n+1}(1-x_i) = (1-x_n)(1-x_{n+1}) \prod_{i=1}^{n-1}(1-x_i) < (1-y)\prod_{i=1}^{n-1}(1-x_i)
     $$
     
     And $(1-y)\prod_{i=1}^{n-1}(1-x_i) \ge \frac 2 3$ because $x_1 + \cdots + x_{n-1} + y = \sum_{i=1}^{n+1}x_i \le \frac 1 3$ .
     
     Then the statement holds for $n+1$ . $\square$ 

2. (i) By induction.
   
   - If $x = 0$ , true by definition.
   
   - If the statement holds $\forall i : \N < x$ , let $x = x' + 1$ , then $x + y = x = x' + 1$ and $y + x = y + (x' + 1) = (y + x') + 1 = (x' + y) + 1 = x' + 1$ , and $x+ y = y + x$ . $\square$ 
   
   (ii) By induction.
   
   - If $x = 0$ , $x + y = y + x$ by applying (i).
   
   - If the statement holds $\forall i : \N < x$ , let $x = x' + 1$ , then $x + y = x' + 1 + y = x' + y + 1$ and $y + x = y + x' + 1 = x' + y + 1$ , and $x + y = y + x$ . $\square$ 
   
   (iii) Denote the proposition
   
   > $\forall y : \N \le n$ , $\forall x : \N$ , $x + y = y + x$ 
   
   as $P_{n}$ .
   
   By induction.
   
   - $P_0$ holds by applying (i).
   
   - If $P_i \space \forall i : \N < y$ , let $y = y' + 1$ , then $x + y = x + y' + 1$ and $y + x = y' + 1 + x = y' + x + 1 = x + y' + 1$ , and $x + y = y + x$ , which proves $P_y$ . $\square$ 

3. (i) By set extentionality, it suffices to show that
   
   $$
   x \in A \cap (B \cup C)
\iff x \in (A \cap B) \cup (A \cap C)
\space \forall x \in S
   $$
   
   By definition of set operations, this is equivalent to
   
   $$
   x \in A \land (x \in B \lor x \in C)
\iff (x \in A \land x \in B) \lor (x \in A \land x \in C)
\space \forall x \in S
   $$
   
   **Left-to-right:** 
   
   Given the left-hand side, we have $x \in A$ and $x \in B \lor x \in C$ . For the latter,
   
   - If $x \in B$ , we have $x \in A \land x \in B$ and then the right-hand side;
   
   - If $x\in C$ , we have $x \in A \land x \in C$ and similarly the right-hand side.
   
   **Right-to-left:** 
   
   Given the right-hand side,
   
   - If $x \in A \land x \in B$ , we know $x \in A$ and $x \in B$ , then $x \in B \lor x \in C$ and $x \in A \land (x \in B \lor x \in C)$ ;
   
   - If $x \in A \lor x \in C$ , we know $x \in A$ and $x \in C$  and similarly the left-hand side. $\square$ 
   
   (ii) Let $D = \overline A$ , $E = \overline B$ , and $F = \overline C$ , then
   
   $$
   \begin{align*}
D \cup (E \cap F) &= \overline A \cup (\overline B \cap \overline C)
\\ &= \overline A \cup \overline{B \cup C}
\\ &= \overline{A \cap (B \cup C)}
\end{align*}
   $$
   
   and
   
   $$
   \begin{align*}
(D \cup E ) \cap (D \cup F) &= (\overline A \cup \overline B) \cap (\overline A \cup \overline C)
\\ &= \overline{A \cap B} \cap \overline{A \cap C} 
\\ &= \overline{(A \cap B) \cup (A \cap C)}
\end{align*}
   $$
   
   By applying (i) these are equal. $\square$ 

4. (i) By induction.
   
   - If $A = \empty$ , obvious.
   
   - If $| S \cup B| = |S| + |B| \space \forall S$ s.t $|S| < |A|$ , let $A' = A \backslash \left\{a\right\}$ , then $|A| = |A'| + 1$ , and
     
     $$
     \begin{align*}
|A \cup B| &= |A' \cup \left\{ a \right\} \cup B|
\\ &= |A' \cup B \cup \left\{ a \right\}|
\\ &= |A' \cup B| + |\left\{ a \right\}|
\\ &= |A'| + |B| + 1
\\ &= |A| + |B| \space\square
\end{align*}
     $$
     
     (ii) By set extentionality.
     
     | $x \in A$ | $x \in B$ | $x \in A \cap B$ | $x \in A \backslash B$ | $x \in B \backslash A$ | $x \in \text{LHS}$ | $x \in \text{RHS}$ |
     | --------- | --------- | ---------------- | ---------------------- | ---------------------- | ------------------ | ------------------ |
     | F         | F         | F                | F                      | F                      | F                  | F                  |
     | F         | T         | F                | F                      | T                      | T                  | T                  |
     | T         | F         | F                | T                      | F                      | T                  | T                  |
     | T         | T         | T                | F                      | F                      | T                  | T                  |
     
     Therefore $A \cup B = (A \backslash B) \cup (A \cap B) \cup (B \backslash A)$ .
     
     Obviously $A\backslash B$ , $A \cap B$ , and $B \backslash A$ are disjoint.
     
     Then
     
     $$
     \begin{align*}
|A| + |B| &= |A \backslash B \cup A \cap B| + |B \backslash A \cup A \cap B|
\\ &= |A \backslash B| + |B \backslash A| + 2|A \cap B|
\\ &= |A \backslash B \cup B \backslash A \cup A \cap B| + |A \cap B|
\\ &= |A \cup B| + |A \cap B| \space \square
\end{align*}
     $$

5. | No.   | Reflexive | Symmetric | Transitive |
   | ----- | --------- | --------- | ---------- |
   | (i)   | Yes       | No        | Yes        |
   | (ii)  | No        | No        | No         |
   | (iii) | Yes       | Yes       | Yes        |
   | (iv)  | No        | Yes       | No         |

6. | $n$ | Number of Partitions |
   | --- | -------------------- |
   | 1   | 1                    |
   | 2   | 2                    |
   | 3   | 5                    |
   | 4   | 15                   |
   | 5   | 52                   |

7. (i) 
   
   - **Reflective:** $(m, n) \sim (m, n)$ because $mn = mn$ ;
   
   - **Symmetric:** $(m_1, n_1) \sim (m_2, n_2) \implies m_1 n_2 = m_2 n_1 \implies (m_2, n_2) \sim (m_1, n_1)$ ;
   
   - **Transitive:** 
     
     Because
     
     $$
     (m_1, n_1) \sim (m_2, n_2) \implies \frac{m_1}{n_1} = \frac{m_2}{n_2}
     $$
     
     and
     
     $$
     (m_2, n_2) \sim(m_3, n_3) \implies \frac{m_2}{n_2} = \frac{m_3} {n_3}
     $$
     
     We have
     
     $$
     \begin{align*}
&(m_1, n_1) \sim (m_2, n_2) \land (m_2, n_2) \sim (m_3, n_3) 
\\ \implies& \frac{m_1}{n_1} = \frac{m_3}{n_3} 
\\ \implies& m_1n_3 = m_3 n_1
\\ \implies& (m_1, n_1) \sim (m_3, n_3) \space \square
\end{align*}
     $$
   
   (ii)
   
   **$\oplus$ :** 
   
   If $(m_2, n_2) \sim (m_3, n_3)$ , then
   
   $$
   [(m_1, n_1)] \oplus [(m_2, n_2)] = [(m_1n_2 + m_2n_1, n_1n_2)]
   $$
   
   and
   
   $$
   [(m_1, n_1)] \oplus [(m_3, n_3)] = [(m_1n_3 + m_3n_1, n_1n_3)]
   $$
   
   are equal because
   
   $$
   (m_1n_2+ m_2n_1)n_1n_3 = (m_1n_3+m_3n_1)n_1n_2
   $$
   
   by expanding and appying the fact that $m_2n_3 = m_3n_2$ .
   
   **$\otimes$ :** 
   
   If $(m_2, n_2) \sim (m_3, n_3)$ , then
   
   $$
   [(m_1, n_1)] \otimes [(m_2, n_2)] = [(m_1m_2, n_1n_2)]
   $$
   
   and
   
   $$
   [(m_1, n_1)] \otimes [(m_3, n_3)] = [(m_1m_3, n_1n_3)]
   $$
   
   are equal becuse
   
   $$
   m_1m_2n_1n_3 = m_1m_3n_1n_2
   $$
   
   by simplifying using the fact that $m_2n_3 = m_3n_2$ . $\square$ 
   
   $S/\sim$ can be a model of $\mathbb Q$ .
