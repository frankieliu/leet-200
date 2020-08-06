class Solution:
    def smallestSufficientTeam(self, rq: List[str], pl: List[List[str]]) -> List[int]:
        rq = set(rq)
        pl = [set(p)&rq for p in pl]
        plmap = {tuple(v):i for i,v in enumerate(pl)}
        plsort = sorted(pl,key=lambda x: -len(x))
        
        removed = set()
        smallset = set()
        for i in range(len(plsort)):
            if i in removed: continue
            smallset.add(i)
            for j in range(i+1,len(plsort)):
                if j in removed: continue
                if plsort[j] <= plsort[i]:
                    removed.add(j)

        pls = [plsort[i] for i in smallset] 
     
        rtmp = rq.copy()
        pltmp = pls.copy() 
        count = 0
        visited = set()
        while rtmp:
            mx = -1
            mxi = None
            for i,p in enumerate(pltmp):
                if i not in visited:
                    inter = len(p & rtmp)
                    if inter > mx:
                        mx = inter
                        mxi = i
            rtmp -= pltmp[mxi]
            visited.add(mxi) 
            count += 1
    
        def GospersHack(k, n):
            st = (1 << k) - 1
            limit = (1 << n)
            while (st < limit):
                yield st
                c = st & - st;
                r = st + c;
                st = (((r ^ st) >> 2) // c) | r;
    
        def sol(k):
            for subset in GospersHack(k,len(pls)):
                out = set()
                a = subset
                idx = []
                for i in range(len(pls)):
                    if a & 1:
                        idx.append(i)
                        out |= pls[i]
                    a >>= 1
                if out == rq:
                    return idx
            return False
            
        save = list(visited)
        l,r = 1, count
        while l<=r:
            mid = (l+r)//2
            ans = sol(mid)
            if ans:
                save = ans
                r = mid-1
            else:
                l = mid+1
        return [plmap[tuple(pls[i])] for i in save]
