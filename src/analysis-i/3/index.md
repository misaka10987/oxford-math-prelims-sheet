+++
# TOML Frontmatter
completed = 2026-10-18
+++

# Analysis I — Sheet 3

In this sheet, for convenience, we use the notation $\Epsilon_\varepsilon(a)$ to express that, for a convergent sequence $(a_n)$ , given $\varepsilon > 0$ , the smallest $N \in \N$ s.t. $|a_n - \lim_{n \to \infin}a_n| < \varepsilon$ $\forall n \ge N$ , and $\Epsilon'_\varepsilon(a)$ for that of a Cauchy sequence. For a sequence $a_n \to \infin$ , let $\Epsilon_\varepsilon(a)$ denote the smallest $N$ s.t. $a_n > \varepsilon$ $\forall n \ge N$ , and vice versa for $a_n \to -\infin$ .

1. | Sequence                | $N$                                                 |
   | ----------------------- | --------------------------------------------------- |
   | $\frac 1 {n^2}$         | $\lceil \sqrt{\frac{1}{\varepsilon}} \rceil + 1000$ |
   | $\frac{1}{n(n-\pi)}$    | $\lceil \sqrt{\frac{1}{\varepsilon}} \rceil + 1000$ |
   | $\frac{\sin(n^2)}{2^n}$ | $\lceil \|-\log_2 \varepsilon \|\rceil + 1000$      |
   | $\sin \frac 1 n$        | $\lceil \frac 1 \varepsilon \rceil + 1000$          |

2. | $n$  | $a_n$              | $b_n$               |
   | ---- | ------------------ | ------------------- |
   | 1    | 1.0006933874625807 | 779.2213373128657   |
   | 2    | 1.0003468139278335 | -1199.9138533639125 |
   | 5    | 1.0001388699403801 | 2042.646412080179   |
   | 10   | 1.0000695555005672 | -12063.33822967647  |
   | 100  | 1.0000071773462536 | 120144.5272131941   |
   | 1000 | 1.000001           | 562379.0762907029   |
   
   $a_n$ tends to $1$ and $b_n$ diverges.

3. $$
   \begin{align*}
\left( 1 + \frac{2}{\sqrt n} \right)^n
& = \sum_{i=0}^n {n \choose i} \left( \frac{2}{\sqrt n} \right)^i
\\ & \ge 
\sum_{i=0}^3 {n \choose i} \left( \frac{2}{\sqrt n} \right)^i
\\ & = 1 + n \cdot \frac{2}{\sqrt n} + 
\frac{n(n-1)}{2} \cdot \frac{4}{n}
\\ & = 2n + 2\sqrt n - 1
\\ & \ge n
\end{align*}
   $$
   
   Then $1 \le n^{\frac 1 n} \le 1 + \frac {2}{\sqrt n}$ and $n^{\frac 1 n} \to 1$ since $1 + \frac {2}{\sqrt n} \to 1$ . $\square$ 

4. (i) Let $l$ and $u$ be lower and upper bound of $a_n$ . Then let $d = \max(|l|, |u|)$ .
   
   For given $\varepsilon >0$ , let $N = \Epsilon_{\frac \varepsilon d}(b)$ , then $a_nb_n \in (-\varepsilon, \varepsilon)$ $\forall n \ge N$ and $a_nb_n \to 0$ . $\square$ 
   
   (ii) As for $\frac {b_n}{a_n} \to 0$ , for given $\varepsilon > 0$ , let $N_b = \Epsilon_1(b)$ and $N_a = \Epsilon_{\frac 1 \varepsilon \max(|L-1|,|L+1|)}(a)$ , then $\frac{b_n}{a_n} \in (-\varepsilon, \varepsilon)$ $\forall n \ge \max(N_a,N_b)$ and $\frac{b_n}{a_n} \to 0$ .
   
   As for $a_n + b_n \to \infin$ , for given $\varepsilon > 0$ , let $N_b = \Epsilon_1(b)$ and $N_a=\Epsilon_{\varepsilon-L+1}(a)$ , then $a_n + b_n > \varepsilon$ $\forall n \ge \max(N_a,N_b)$ and $a_n + b_n \to \infin$ . $\square$ 

5. (i)
   
   - (a) $\exist L \in \R$ s.t. $\forall \varepsilon > 0$ , $\exist N \in \N$ s.t. $a_n \in (L - \varepsilon, L + \varepsilon)$ $\forall n \ge N$ .
   
   - (b) $\exist l, u \in \R$ s.t. $a_n \in (l, r)$ $\forall n \in \N$ .
   
   - (c) $\forall \varepsilon > 0$ , $\exist N \in \N$ s.t. $a_n > \varepsilon$ $\forall n \ge N$ .
   
   (ii)
   
   - (a) $\forall L \in \R$ , $\exist \varepsilon > 0$ s.t. $\forall N \in \N$ , $\exist n \ge N$ s.t. $a_n \notin (L - \varepsilon, L + \varepsilon)$ .
   
   - (b) $\forall l, u \in \R$ , $\exist n \in \N$ s.t. $a_n \notin (l, r)$ .
   
   - (c) $\exist \varepsilon > 0$ s.t. $\forall N \in \N$ , $\exist n \ge N$ s.t. $a_n \le \varepsilon$ .
   
   (iii) Let $a_n \to L$ . Let $N = \Epsilon_1(a)$ . If $N=0$ , $a_n$ is bounded by $L-1$ and $L+1$ . Otherwise, let $S = \left \{ a_i \mid i < N \right\}$ . Let $l = \inf S$ and $u = \sup S$ since $S$ is finite and therefore bounded. Then $a_n$ is bounded by $\min(L-1, l)$ and $\max(L+1, u)$ . $\square$ 
   
   $\sin(n)$ is bounded by $(-1,1)$ but divergent.
   
   (iv) If $a_n \to \infin$ is upper-bounded by $u$ , let $N = \Epsilon_{u}(a)$ and $a_N > u$ contradicts with that $u$ is an upper bound. $\square$ 
   
   $-n$ tends to $-\infin$ and is unbounded.
   
   (v) Assume $a_n \to L$ . Let $A_n := \left\{ a_i \mid i \le n \right\}$ .
   
   - If $a_n = L$ $\forall n\in\N$ , then $a_0$ is both the maximum and minimum.
   
   - If there exists $a_i > L$ , $\max A_{\Epsilon_{a_i - L}(a)}$ is the maximum.
   
   - If there exists $a_i < L$ , $\min A_{\Epsilon_{L-a_i}(a)}$ is the minimum. $\square$ 
   
   This is not true for bounded real sequences. As a counterexample, let $a_n = \tanh (-2)^n$ .

6. (i) Let $Z_c$ denote the set of all value of corresponding sequence $z_n$ . Then $Z_{-2} = \left\{ -2, 2 \right\}$ , $Z_{-1} = \left\{ -1, 0 \right\}$ , $Z_0 = \left \{ 0 \right\}$ , and $Z_{\mathrm i} = \left\{ \mathrm i, -1 + \mathrm i, -\mathrm i \right\}$ are all finite and therefore bounded.
   
   Obviously $z_n(1) \ge n^2$ for. Thus it tends to infinity and is therefore not bounded. $\square$ 
   
   (ii) By induction, $z_n(c) = \overline{z_{n}(\overline c)}$ .
   
   - $z_1(c) = c = \overline {\overline c}$ .
   
   - If $z_n(c) = \overline{z_{n}(\overline c)}$ , then $z_{n+1}(c) = z_n(c)^2 + c = (\overline{z_{n}(\overline c)})^2 + c = \overline{ z_n(\overline c)^2 + \overline c } = z_{n+1}(\overline c)$ .
   
   And obviously $z_n$ is bounded if and only if $\overline{z_n}$ is bounded. $\square$ 
   
   (iii) By induction.
   
   - $|z_1(c)| \le \frac 1 4 < \frac 1 2$ .
   
   - If $|z_n(c)| < \frac 1 2$ , then $|z_{n+1}(c)|=|z_n(c)^2 + c| \le |z_n(c)^2| + |c| < (\frac 1 2)^2 + \frac 1 4 = \frac 1 2$ . $\square$ 
   
   (iv) By induction.
   
   - $|z_1(c)| = 2 + \varepsilon = 2 + a_1 \varepsilon$ .
   
   - If $|z_n(c)| \ge 2 + a_n\varepsilon$ , then
     
     $$
     \begin{align*}
|z_{n+1}(c)| & = |z_n(c)^2 + c| 
\\ &\ge | |z_n(c)^2| - |c| |
\\ & \ge | 2 + (4a_n-1)\varepsilon + a_n \varepsilon^2 |
\\ & > |2 + (4a_n-1)\varepsilon|
\\ & = |2 + a_{n+1}\varepsilon|
\\ & = 2 + a_{n+1}\varepsilon
\end{align*}
     $$
   
   Therefore, $\forall m \in \R_{\ge0}$ , $z_{ \lceil \log_4 \frac{6|m-2|}{\varepsilon} \rceil }(c) > m$ and therefore $z_n(c)$ is unbounded. $\square$ 
