+++
# TOML Frontmatter
completed = 2026-10-21
+++

# Linear Algebra I — Sheet 4

1. (a) $3$ .
   
   (b) $2$ .
   
   (c) $3$ .

2. Because $\mathbf 0 \in W$ , $\mathbf 0 \notin U \backslash W$ . $\square$ 
   
   $U \cup W$ is a subspace iff. $U \subseteq W$ or $U \supseteq W$ .

3. (a) It suffices to show that $\dim U / (U \cap W) = \dim W / (U \cap W) = 1$ .
   
   Obviously, both dimensions are not zero, otherwise one of $U$ and $W$ is contained in the other. Let $U = (U \cap W) \oplus C$ for a complement space $C \cong U/(U \cap W)$ . Assume $\dim C \ge 2$ , then because $W \cap C = \left\{ \mathbf 0 \right\}$ ,
   
   $$
   \begin{align*}
\dim (W + C ) &= \dim(W \oplus C)
\\ & = \dim W + \dim C
\\ & \ge n + 1
\end{align*}
   $$
   
   But this is impossible since $W + C \subseteq V$ . $\square$ 
   
   (b) Not necessarily.
   
   Let $V = \R^3$ , $U_1 = \left\{ (x,y,z) \in \R^3 \mid x = 0 \right\}$ , $U_2 = \left\{ (x,y,z) \in \R^3 \mid y = 0 \right\}$ , and $U_3 = \left\{ (x,y,z) \in \R^3 \mid x = y \right\}$ , then
   
   $$
   \dim U_1 \cap U_2 \cap U_3 
= \dim \left\{ (x,y,z) \in \R^3 \mid x = y = 0 \right\}
= 1
   $$
   
   (c) Let $B$ be a basis of $U$ . Let $V = U \oplus C$ for a complement space $C\cong V/U$ and $\{ \mathbf v, \mathbf w, \cdots \}$ be a basis of $C$ . Then for all real $k \ne 0$ , $X = \langle B, \mathbf v + k \mathbf w \rangle$ satisfies $U < X < V$ . $\square$ 

4. | Subspace   | Basis                                     | Dimension |
   | ---------- | ----------------------------------------- | --------- |
   | $X$        | $\{ (1,0,0,0), (0,1,0,-1), (0,0,1,-1) \}$ | $3$       |
   | $Y$        | $\{ (1,-1,0,0), (0,0,2,1) \}$             | $2$       |
   | $X \cap Y$ | $\{ (3,-3,2,1) \}$                        | $1$       |
   | $X + Y$    | $\{ \hat i, \hat j, \hat k, \hat l \}$    | $4$       |

5. (a) Let $B = \{ \mathbf v_i \in V \mid 1 \le i \le n \}$ be a basis of $V$ . Then $W_i = \langle \{ \mathbf v_j \in B \mid 1 \le j \le i \} \rangle$ is a subspace of dimension $i$ . $\square$ 
   
   (b)
   
   > **Lemma** $U \subsetneq W \implies \dim U < \dim W$ .
   > 
   > **Proof** $W \cong (W/U) \oplus U \implies \dim W = \dim(U \oplus (W/U) ) = \dim U + \dim W/U$ . $\square$ 
   
   Then $\dim U_0 < \dim U_1 < \cdots < \dim U_k \le n$ . The strictly increasing chain of natural numbers below $n$ cannot be longer than $n+1$ , and the only way of length $n + 1$ is to have $\dim U_r = r$ . $\square$ 
   
   (c) Let $V / W \cong C \subseteq V$ for a complement space $C$ and let $X = C \oplus U$ . Obviously $W + X = V$ . $W \cap X = U$ because for every $\mathbf v + \mathbf u \in X$ , $\mathbf v \in C$ , $\mathbf u \in U$ , we have $\mathbf v \notin W$ (if nonzero) and $\mathbf u \in W$ , so $\mathbf v + \mathbf u \in W$ iff. $\mathbf v = 0$ then $\mathbf v + \mathbf u \in U$ . $\square$ 

6. (a) The forward direction of the proof follows from the definition of direct sum.
   
   Have $v = u + w$ , assume $U \cap W = X \ne \{ \mathbf 0 \}$ . Then let $x\in X$ be a nonzero vector, and $v = (u + x) + (w - x)$ will be another decomposition, which gives contradiction. $\square$ 
   
   (b)
   
   (i) False. $W \subseteq U$ and internal direct sum is undefined.
   
   (ii) True. $W \cap U = \{ \mathbf 0 \}$ and $\dim W + \dim U = 1 + 2 = 3$ . $\square$ 
   
   (iii) False. $\dim W + \dim U = 2 + 2 = 4$ .
