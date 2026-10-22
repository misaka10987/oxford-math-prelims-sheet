+++
# TOML Frontmatter
+++

# Linear Algebra I — Sheet 5

1. (i) Yes.
   
   $$
   \begin{align*}
T(x_1 + x_2, y_1+ y_2, z_1+ z_2) &= (y_1 + y_2, z_1 + z_2, 0)
\\ &= (y_1, z_1, 0) + (y_2, z_2, 0)
\\ & = T(x_1, y_1,z_1) + T(x_2,y_2,z_2)
\end{align*}
   $$
   
   $$
   T(cx,cy,cz) = (cy,cz,0) = c(y,z,0) = cT(x,y,z)
   $$
   
   (ii) No.
   
   $$
   T(-1,0,0) + T(1,0,0) \ne T(0,0,0)
   $$
   
   (iii) No.
   
   $$
   T(0,0,0) + T(0,0,0) \ne T(0,0,0)
   $$
   
   (iv) No.
   
   $$
   2T(1,1,1) \ne T(2,2,2)
   $$

2. (i) $\ker T = \langle (1,-1,1,1), (0,3,-2,0) \rangle$ , $\operatorname{im} T = \langle (1,1,0), (-1,2,3) \rangle$ .
   
   $\operatorname{null} T = 2$ , $\operatorname{rank} T = 2$ .
   
   (ii) Let $A_i : \R^{n \times n}$ be the matrix where $(i,i)$ is $n-1$ , $(j,j)$ $\forall j \ne i$ is $-1$ , and $0$ elsewhere. Let $B_{i,j} : \R^{n \times n}$ be the matrix $(i,j)$ is $1$ and $0$ elsewhere.
   
   $\ker T = \langle \{ A_i \mid 1 \le i \le n \} \cup \{ B_{i,j} \mid 1 \le i,j \le n \land i \ne j \} \rangle$ , $\operatorname{im} T = \R$ .
   
   $\operatorname{null} T = \frac{n(n+1)}{2}$ , $\operatorname{rank} T = \frac{n(n-1)}{2}$ . 

3. Obviously $\operatorname{im} D = \R_{n-1}[x]$ .
   
   $\operatorname{rank} D = \dim \operatorname{im} D = n$ .
   
   $\operatorname{null} D = \dim \operatorname{dom} D - \operatorname{rank} D = 1$ .

4. (i) If $\mathbf v \in \operatorname{im} (S + T)$ , let $\mathbf v = (S+T) \mathbf u = S\mathbf u + T \mathbf u$ , then $S\mathbf u \in \operatorname{im} S$ and $T\mathbf u \in \operatorname{im}T$ , and, by definition, $\mathbf v = S \mathbf u + T \mathbf u \in \operatorname{im}S + \operatorname{im}T$ , thus $\operatorname{im}(S+T) \subseteq \operatorname{im}S + \operatorname{im} T$ .
   
   > **Lemma** $V \subseteq W \implies \dim V \le \dim W$ .
   > 
   > **Proof** A basis of $V$ is a set of linearly independent vectors in $W$ , and size of such set cannot exceed $\dim W$ by definition. $\square$ 
   
   Therefore $\operatorname{rank}(S + T ) \le \operatorname{rank}S + \operatorname{rank} T$ . $\square$ 
   
   (ii) $\ker (ST) = T^{-1}(\ker S)$ .

5. a
