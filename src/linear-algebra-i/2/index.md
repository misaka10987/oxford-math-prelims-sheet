+++
# TOML Frontmatter
+++

# Linear Algebra I — Sheet 2

1. $\alpha  \ne 0$ .
   
   $$
   A = \begin{pmatrix} 
3 & 2 & 2 & 2\\
2 & 3 & 2 & 2\\
2 & 2 & 3 & 2\\
2 & 2 & 2 & 3
\end{pmatrix}
= \mathrm 1_4 + 2 J_4
   $$
   
   $$
   \begin{align*}
A\left( 1_4 - \frac 2 9 J_4  \right) &=
1_4 + 2J_4  - \frac 2 9 J_4 - \frac 4 9 {J_4}^2
\\ & = 1_4 + 2J_4 - \frac 2 9 J_4 - \frac {16} 9 J_4
\\ & = 1_4
\end{align*}
   $$
   
   $$
   A^{-1} = 1_4 - \frac 2 9 J_4  =
\begin{pmatrix}
\frac 7 9 & 1 & 1 & 1 \\
1 & \frac 7 9 & 1 & 1 \\
1 & 1 & \frac 7 9 & 1 \\
1 & 1 & 1 & \frac 7 9
\end{pmatrix}
   $$

2. (a) $\begin{pmatrix}1 & 0 & 0 & 0\\
   0 & 1 & 0 & - \frac{3}{7} \\
   0 & 0 & 1 & - \frac{4}{7} \end{pmatrix}$ .
   
   (b) $\begin{pmatrix}1 & 0 & -1 & 2\\
   0 & 1 & 2 & -1\\
   0 & 0 & 0 & 0\end{pmatrix}$ .
   
   (c) $\begin{pmatrix}1 & 0 & -1 & 4\\
   0 & 1 & 2 & -2\\
   0 & 0 & 0 & 1\end{pmatrix}$ .

3. (i)
   
   $$
   (A+B)^\mathrm T_{i,j} = (A+B)_{j,i} = A_{j,i} + B_{j,i} 
= A^\mathrm T_{i, j} + B^\mathrm T_{i,j}
= (A^\mathrm T + B ^ \mathrm T)_{i,j}
   $$
   
   Therefore $(A+B)^\mathrm T = A^\mathrm T + B^\mathrm T$ because they have the same entries. $\square$ 
   
   (ii) We use $A_{i,-}$ and $A_{-,j}$ to denote row and column vectors.
   
   $$
   (AC)^\mathrm T_{i,j} = (AC)_{j,i} = A_{j,-} C_{-,i}
=C^\mathrm T_{i,-}  A^\mathrm T_{-, j}
= C^\mathrm T A^\mathrm T_{i,j}
   $$
   
   Therefore $(AC)^\mathrm T = C^\mathrm T A^\mathrm T$ because they have the same entries. $\square$ 
   
    (iii) By (ii), $A^\mathrm T (A^{-1})^\mathrm T = (A^{-1}A)^\mathrm T = 1_n$ , $(A^{-1})^\mathrm T A^\mathrm T = (AA^{-1})^\mathrm T = 1_m$ , therefore the inverse is defined and $(A^\mathrm T)^{-1} = (A^{-1})^\mathrm T$ .

4. $$
   \begin{align*}
\operatorname{tr}(AB) &= \sum_{i=1}^m (AB)_{i,i}
\\ & = \sum_{i = 1}^ m A_{i, -} B_{-, i}
\\ & = \sum_{i = 1}^m \sum_{j = 1}^n A_{i,j} B_{j,i}
\\ & = \sum_{j = 1}^n \sum_{i = 1}^m B_{j,i} A_{i,j}
\\ & = \sum_{j = 1}^n B_{j,-}A_{-,j}
\\ & = \sum_{j=1}^n (BA)_{j,j}
\\ & = \operatorname{tr}(BA) \space \square
\end{align*} 
   $$

5. $$
   \begin{pmatrix}2 & 3\\
3 & 2\end{pmatrix}^{-1} = 
\begin{pmatrix}-\frac{2}{5}& \frac{3}{5}\\
\frac{3}{5} & -\frac{2}{5}\end{pmatrix}
   $$
   
   $$
   \begin{pmatrix}1 & 1 & 0\\
1 & 0 & 1\\
0 & 1 & 1\end{pmatrix}^{-1}
= 
\begin{pmatrix}\frac{1}{2} & \frac{1}{2} &-\frac{1}{2}\\
\frac{1}{2} &-\frac{1}{2}& \frac{1}{2}\\
- \frac{1}{2}  & \frac{1}{2} & \frac{1}{2}
\end{pmatrix}
   $$
   
   $$
   \begin{pmatrix}1 &-1 & 0 & 0\\
1 & 0 & -1 & 0\\
1 & 0 & 0 & -1\\
0 & 1 & 1 & 1\end{pmatrix}^{-1}
=
\begin{pmatrix}
\frac{1}{3} & \frac{1}{3} & \frac{1}{3} & \frac{1}{3}\\
-\frac{2}{3} & \frac{1}{3} & \frac{1}{3} & \frac{1}{3}\\
\frac{1}{3} & -\frac{2}{3}  & \frac{1}{3} & \frac{1}{3}\\
\frac{1}{3} & \frac{1}{3} & -\frac{2}{3}  & \frac{1}{3}
\end{pmatrix}
   $$

6. (i) Every elementary row operation is invertible (swapping by swapping back, $\mathbf r_1 \mapsto \mathbf r_1 + \lambda \mathbf r_2$ by $\mathbf r_1 \mapsto \mathbf r_1 - \lambda \mathbf r_2$ , and $\mathbf r \mapsto \lambda \mathbf r$ by $\mathbf r \mapsto \frac 1 \lambda \mathbf r$ ).
   
   Therefore, have EROs $f_A : A \to E$ and $f_B : B \to E$ , $g : A \to B = {f_B}^{-1} \circ f_A$ is also ERO. TODO
   
   (ii) Use S, M, and A short for EROs as described in the lecture notes.
   
   Algorithm:
   
   1. Starting from the first column:
      
      - If the column is all-zero, skip this column.
      
      - Otherwise:
        
        1. Choose a non-zero row.
        
        2. Use it to eliminate other elements in that column (at most $n-1$ As). Note that there is no need to eliminate rows that have been previously chosen.
        
        3. Scale the leading coefficient to $1$ if not so (at most $1$ M).
   
   2. Repeat 1 to all columns (at most $\frac{n(n+1)}{2}$ EROs).
   
   3. Sort the rows using at most $n$ Ss.
   
   Total number of EROs is $\frac{n(n+1)}{2} + n = \frac{n^2 + 3n}{2}$ . For $n \ge 3$ this satisfy our $n^2$ constraint.
   
   For $n=1$ , simply scaling with one M.
   
   For $n = 2$ , use 1 A for elimination and at most 2 Ms to scale leading coefficients to 1. $\square$ 
