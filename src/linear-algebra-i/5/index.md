+++
# TOML Frontmatter
completed = 2026-10-23
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
   
   (ii) Let $T' : V/\ker T \to \operatorname{im} T = \mathbf v + \ker T \mapsto T(\mathbf v)$ be a linear isomorphism.
   
   $$
   \begin{align*}
\ker(ST) &= T^{-1}(\ker S) 
\\ &= (T^{-1}(\ker S) / \ker T) \oplus \ker T
\\ &= (T^{-1}(\ker S \cap \operatorname{im}T) / \ker T) \oplus \ker T
\\ &= {T'}^{-1}(\ker S \cap \operatorname{im}T) \oplus \ker T
\\ &\cong (\ker S \cap \operatorname{im}T) \oplus \ker T
\\ &\subseteq \ker S \oplus \ker T
\end{align*}
   $$
   
   Therefore $\operatorname{null}(ST) \le \operatorname{null}S + \operatorname{null}T$ . $\square$ 

5. (a)
   
   (i) $\forall \mathbf v \in V$ , let $\mathbf v = \mathbf u + \mathbf w$ where $\mathbf u \in U $ and $\mathbf w \in W$ . Then
   
   $$
   Q\mathbf v = \mathbf w = \mathbf v - \mathbf u =
\operatorname{id}_V(\mathbf v) - P\mathbf v
   $$
   
   Thus $Q = \operatorname{id}_V - P$ by function extensionality. $\square$ 
   
   (ii) $\forall \mathbf v \in V$ , let $\mathbf v = \mathbf u + \mathbf w$ where $\mathbf u \in U$ and $\mathbf w \in W$ . Then
   
   $$
   P\mathbf v = \mathbf u
   $$
   
   $$
   P^2\mathbf v = P\mathbf u = P(\mathbf 0_W+\mathbf u) = \mathbf u
= P\mathbf v
   $$
   
   Thus $P^2 = P$ by function extensionality. Similarly $Q^2 = Q$ .
   
   $$
   PQ\mathbf v = P \mathbf w = P(\mathbf w + \mathbf 0_U) = \mathbf 0_U
= \mathbf 0
   $$
   
   Therefore $PQ = 0_{V \to V}$ by function extensionality. Similarly $QP = 0_{V \to V}$ and $PQ=QP=0_{V \to V}$ . $\square$ 
   
   (b)
   
   (i)
   
   $u \in \operatorname{im}T$ by definition.
   
   $$
   Tw = T(v-Tv)=Tv-T^2v = Tv-T^2v = 0
   $$
   
   Therefore $w \in \ker T$ .
   
   $$
   u + w = Tv + v - Tv = v \space \square
   $$
   
   (ii)
   
   Let $u = Tv \in \operatorname{im} T$ . Then $u \in \ker T$ iff. $Tu= 0$ , but then $u=Tv=T^2v=Tu=0$ . $\square$ 
   
   (iii)
   
   By (i) $U+W=V$ . By (ii) $U \cap W = \{0\}$ . Thus $V = U \oplus W$ by definition.
   
   $\forall v \in V$ , let $v = u + w$ where $u \in U$ and $w \in W$ . Then $Tv=T(u+w)=Tu$ and by definition $T$ is the projection onto $U$ along $W$ . $\square$ 

6. As for (a) to (b):
   
   $$
   T^2(V)=T(\operatorname{im}T)=T(\ker T) = \{0\}
   $$
   
   And because $\operatorname{im}T = \ker T$ , $\operatorname{rank}T = \operatorname{null}T$ . Since $\operatorname{rank}T + \operatorname{null}T = n$ , $\operatorname{rank}T = \frac 1 2 n$ .
   
   As for (b) to (a):
   
   $\operatorname{null} T = \operatorname{rank} T$ since $\operatorname{rank}T = \frac 1 2 n$ and $\operatorname{null}T + \operatorname{rank}T = n$ .
   
   $T^2 = 0\implies \operatorname{im}T \subseteq \ker T$ . But their dimensions are equal and the only possible case is $\operatorname{im}T = \ker T$ . $\square$ 
