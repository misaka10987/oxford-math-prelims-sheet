+++
# TOML Frontmatter
completed = 2026-10-25
+++

# Linear Algebra I — Sheet 1

1. (i)
   
   $$
   \det \begin{pmatrix} 2 & 4 & -3 \\
1 & -4 & 3 \\
3 & -5 & 2
\end{pmatrix} = 21
   $$
   
   Invertible, therefore unique solution.
   
   $$
   (x,y,z) = \begin{pmatrix} 2 & 4 & -3 \\
1 & -4 & 3 \\
3 & -5 & 2
\end{pmatrix}^{-1} (0,0,1)
= \left(- \frac 1 3, \frac 1 3, \frac 1 2 \right)
   $$
   
   (ii)
   
   $$
   \det \begin{pmatrix} 
1& 2 &3 \\
2 & 3 & 4 \\
3 & 4 & 5
\end{pmatrix}
= 0
   $$
   
   Not invertible, infinitely many solutions.
   
   $$
   \begin{cases}
x = t \\
y = 3 - 2t \\
z = t
\end{cases}
   $$
   
   (iii)
   
   $$
   \det \begin{pmatrix} 
1& 2 &3 \\
2 & 3 & 4 \\
3 & 4 & 5
\end{pmatrix}
= 0
   $$
   
   Not invertible, no solution.

2. $(A, C)$ , $(C, A)$ , $(D, F)$ , and $(F, D)$ .
   
   The corresponding $(X - 2Y)$ s are $\begin{pmatrix} 3 & -8 \\ -5 & -4 \end{pmatrix}$ , $\begin{pmatrix} -3 & 8 \\ 5 & 4 \end{pmatrix}$ , $\begin{pmatrix} 3 & -6 & 9 \\ -4 & -4 & 0 \end{pmatrix}$ , and $\begin{pmatrix} -3 & 6 & -9 \\ 4 & 4 & 0 \end{pmatrix}$ .

3. $$
   \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}
\begin{pmatrix} x \\ y\end{pmatrix}
= \begin{pmatrix} x + 2y \\ 2x + 3y \end{pmatrix}
   $$
   
   $$
   \begin{pmatrix} 0 & 1 \\ 2 & 3 \\ 4 & 6\end{pmatrix}
\begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}
= \begin{pmatrix} 2 & 3 \\
8 & 13 \\
16 & 26
\end{pmatrix}
   $$
   
   $$
   \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5\end{pmatrix}^2
= \begin{pmatrix} 14 & 20 & 26
\\20 & 29 & 38 \\
26 & 38 & 50
\end{pmatrix}
   $$

4. (i)
   
   $$
   \begin{align*}
&A\begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix} 
= \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix} A
\\ \iff &
\begin{pmatrix} a & b \\ c & d\end{pmatrix}
\begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}
= 
\begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}
\begin{pmatrix} a & b \\ c & d\end{pmatrix}
\\ \iff &
\begin{pmatrix}  a & 0 \\ c & 0 \end{pmatrix}
= 
\begin{pmatrix} a & b \\ 0 & 0\end{pmatrix}
\\ \iff &b = c = 0
\end{align*}
   $$
   
   (ii)
   
   $$
   \left \{ \begin{pmatrix} a & b \\ 0 & a - b\end{pmatrix} \in \R^{2 \times 2}
\mid a, b \in \R
\right \}
   $$
   
   (iii)
   
   $$
   \left \{ k \mathbf 1 \mid k \in \Z \right\}
   $$

5. $$
   \begin{pmatrix}1 & 0 & 1 & \mathop{-}8 & 8 & 1\\
0 & 1 & \mathop{-}2 & 3 & \mathop{-}2 & 0\\
0 & 0 & 0 & 0 & 0 & 1\end{pmatrix}
   $$
   
   No solution because $0 \ne 1$ for the third equation.

6. (i) False.
   
   Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 0\end{pmatrix}$ , $B = \begin{pmatrix}0 & 0 \\ 1 & 1\end{pmatrix}$ .
   
   (ii) False.
   
   Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}$ , $B = \begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix}$ .
   
   (iii) True.
   
   $$
   \begin{align*}
& AB =0
\\ \implies & \det(AB) = 0
\\ \iff & \det A \det B = 0
\\ \iff & \det A = 0 \lor \det B = 0 \space \square
\end{align*}
   $$
   
   (iv) False.
   
   Let $A = \mathbf 1$ and $B = -\mathbf 1$ .
   
   (v) False.
   
   Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}$ , $B = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$ .
