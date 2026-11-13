+++
# TOML Frontmatter
+++

# Groups and Group Actions — Sheet 3

1. (i) $G = \R^2$ , $H = \R \times \{ 0 \}$ .
   
   (ii) $G = \R \times \Z_2$ , $H = \{0\} \times \Z_2$ .
   
   (iii) $G = \mathrm{GL}(2, \R)$ , $H$ be the invertible diagonal matrices under multiplication.
   
   (iv) $G = \mathbb C^\times$ , $H = \R^\times$ .
   
   (v) $G = \mathrm{GL}(2, \R)$ , $H = \langle \operatorname{diag}(2,2) \rangle$ .

2. (i) For $x,y \in H \cap K$ , we have $xy \in H$ and $xy \in K$ and $xy \in H \cap K$ . Also $x^{-1} \in H$ and $x^{-1} \in K$ , and the inverses of $x$ in $H$ and $K$ are the same because they are both in $G$ . $\square$ 
   
   (ii) $\langle 1 \rangle \cup \langle \mathrm i \rangle \nleq \mathbb C^+$ since $1 + \mathrm i \notin \langle 1 \rangle \cup \langle \mathrm i \rangle$ .
   
   (iii) Let $G = \mathrm D_4$ , $h$ be reflection around one diagonal and $g$ be another. Let $H = \langle h \rangle$ and $K = \langle k \rangle$ , then $(hk)^2 \notin HK$ .
   
   (iv) For $h_1k_1, h_2 k_2 \in HK$ , $(h_1k_1)(h_2k_2) = (h_1h_2)(k_1k_2) \in HK$ and $(h_1k_1)^{-1} = {k_1}^{-1}{h_1}^{-1} = {h_1}^{-1}{k_1}^{-1}\in HK$ . $\square$ 

3. - $\Z^2$ is not cyclic. Because $\Z^2$ is infinite, it is cyclic only if isomorphic to $\Z$ , but $\Z^2 \cong \Z$ gives $\Z \cong \{* \}$ . $\square$ 
   
   - $\Z_2 \times \Z_4$ is not cyclic because every element has order $\le4$ while the group has order 8. $\square$ 
   
   - $\Z_3 \times \Z_4 \cong \Z_{12}$ is cyclic with 4 generators $1$ , $5$ , $7$ , $11$ .
   
   - $\langle (1\;2)(3\;4)(5\;6), (1\;4\;5)(2\;3\;6) \rangle = \langle (6\;5\;1\;2\;3\;4) \rangle$ is cyclic and isomorphic to $\Z_6$ with 2 generators $1$ and $5$ .
   
   - $\langle (1\;2\;3),(4\;5\;6)\rangle \cong {\Z_3}^2$ by $\phi: {\Z_3}^2 \to \langle (1\;2\;3),(4\;5\;6)\rangle = (m,n) \mapsto (1\;2\;3)^m(4\;5\;6)^n$ and not cyclic. $\square$ 

4. (i)
   
   $$
   {4 \choose 4} + {4 \choose 3} + \frac12 {4 \choose 2} + 
{4 \choose 2} + 1 = 15
   $$
   
   (ii) If the equivalence class of the $(n+1)$ -th element contain $k + 1$ elements, then there are ${n \choose k}$ choices of elements equal to the $(n + 1)$ -th and the remaining $n-k$ elements can have arbitrary equivalence relation, therefore $q_{n+1}=\sum_{k=0}^n{n \choose k}q_{n-k}$ . $\square$ 
   
   $q_0 = 1$ , $q_1 = 1$ , $q_2 = 2$ , $q_3 = 5$ , $q_4 = 15$ .

5. (i) $g = g^1$ . If $g=h^k$ and $h = i^j$ then $g = i^{jk}$ . $\square$ 
   
   (ii) If $|g|$ and $|h|$ are both prime, then $\langle g \rangle \cap \langle h \rangle = \{e \}$ and $g \sim h \implies g = h \implies h \sim g$ . On the other hand, if $|g|$ is not prime, let $|g| = mn$ where $m,n \ne 1$ and $\gcd(m,n) = 1$ . Then $g^m \sim g$ but $g$ is not a power of $g^m$ (otherwise $(g^m)^k = g\implies mn \mid mk-1$ but $m \nmid mk-1$ ). $\square$ 

6. (i) Let $g = \phi(h_0,k_0)$ . If $g = \phi(h_1,k_1)$ , let $h_1 = h_0h'$ and $k_1 =k'k_0$ , then $h_0k_0 = h_0h'k'k_0$ and $h'k' = 1$ , which gives a unique $h' \in H \cap K$ for every $h_1$ . On the other hand, given an $h' \in H \cap K$ , $(h_0h',{h'}^{-1}k_0)$ is distinct for different $h'$ s and $\phi(h_0h',{h'}^{-1}k_0) = \phi(h_0, k_0)$ , therefore we can construct a bijection between pairs of $(h,k)$ s such that $\phi(h,k) =\phi( h_0,k_0)$ and elements of $H \cap K$ , and $|\phi^{-1}(g)|= |H \cap K|$ $\forall g \in HK$ .
   
   Obviously $\phi$ is a surjection. Then
   
   $$
   |H||K| = |H \times K|
= \left| \bigcup_{g \in HK} \phi^{-1}(g) \right|
= \sum_{g \in HK} |\phi^{-1}(g)|
= |HK||H \cap K|
\space \square
   $$
   
   (ii) If $G$ is Abelian then $\phi$ is a homomorphism, and
   
   $$
   \begin{align*}
\ker \phi &= \{ (h,k) \in H \times K \mid hk = 1 \}
\\
&= \{ (h, h^{-1}) \mid h \in H, h^{-1} \in H \cap K  \}
\\
& = \{ (h, h^{-1}) \mid h \in H \cap K  \}
\\ 
& \cong H \cap K
\\
& = \{ e \}
\end{align*}
   $$
   
   Therefore $\phi$ is an isomorphism and $H \times K \cong HK$ . $\square$ 
