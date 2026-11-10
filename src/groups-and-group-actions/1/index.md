+++
# TOML Frontmatter
+++

# Groups and Group Actions — Sheet 1

1. | Item  | Associative | Commutative | Exist Identity | Exist Inverse |
   | ----- | ----------- | ----------- | -------------- | ------------- |
   | (i)   | Yes         | Yes         | Yes            | No            |
   | (ii)  | Yes         | Yes         | Yes            | Yes           |
   | (iii) | No          | Yes         | Yes            | No            |
   | (iv)  | Yes         | No          | Yes            | No            |

2. | $e$ | $a$ | $b$ | $c$ | $d$ |
   | --- | --- | --- | --- | --- |
   | $a$ | $b$ | $c$ | $d$ | $e$ |
   | $b$ | $c$ | $d$ | $e$ | $a$ |
   | $c$ | $d$ | $e$ | $a$ | $b$ |
   | $d$ | $e$ | $a$ | $b$ | $c$ |
   
   This is the cyclic group $\Z_5$ .
   
   | $e$ | $a$ | $b$ | $c$ | $d$ |
   | --- | --- | --- | --- | --- |
   | $a$ | $e$ | $d$ | $b$ | $c$ |
   | $b$ | $d$ | $c$ | $e$ | $a$ |
   | $c$ | $b$ | $a$ | $d$ | $e$ |
   | $d$ | $c$ | $e$ | $a$ | $b$ |
   
   This is not a group because $aa= e$ but the only $5$ -order group $\Z_5$ does not have an element of order $2$ .

3. By definition,
   
   $$
   \begin{align*}
( {\overline{A+B}})_{i,j} &= \overline{(A+B)_{i,j} }
\\ &= \overline{A_{i,j} + B_{i,j} }
\\ &= \overline{A_{i,j} } + \overline{B_{i,j} }
\\ &= (\overline{A})_{i,j} + (\overline{B})_{i,j}
\\ &= (\overline A + \overline B) _{i,j}
\end{align*}
   $$
   
   Let $A_{i,-}$ and $A_{-,i}$ denote the row and column vectors.
   
   $$
   \begin{align*}
(\overline{AB})_{i,j} &= \overline{(AB)_{i,j} }
\\ &=\overline{A_{i,-} \cdot B_{-,j} }
\\ &=\overline{ \sum_{k=1}^n A_{i,k} B_{k,j} }
\\ &= \sum_{k=1}^n \overline{A_{i,k}} \times \overline{B_{k,j}}
\\ &= (\overline A)_{i,-} \cdot (\overline B)_{-,j}
\\ &= (\overline A \overline B)_{i,j}
\end{align*}
   $$
   
   
   
   s

4. d
