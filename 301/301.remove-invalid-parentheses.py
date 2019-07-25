#
# @lc app=leetcode id=301 lang=python3
#
# [301] Remove Invalid Parentheses
#
# https://leetcode.com/problems/remove-invalid-parentheses/description/
#
# algorithms
# Hard (38.03%)
# Total Accepted:    104.9K
# Total Submissions: 275.8K
# Testcase Example:  '"()())()"'
#
# Remove the minimum number of invalid parentheses in order to make the input
# string valid. Return all possible results.
#
# Note: The input string may contain letters other than the parentheses ( and
# ).
#
# Example 1:
#
#
# Input: "()())()"
# Output: ["()()()", "(())()"]
#
#
# Example 2:
#
#
# Input: "(a)())()"
# Output: ["(a)()()", "(a())()"]
#
#
# Example 3:
#
#
# Input: ")("
# Output: [""]
#
#

from collections import deque


class Solution:

    def removeInvalidParentheses(self, ss):
        """
        @yu6 @dietpepsi

        1. Keep counting the discrepancy number
           +1 for opening parentheses
           -1 for closing parentheses

        2. When you encounter a below zero discrepancy a closing
           parentheses must be removed, therefore consider removing
           all possible closing parentheses up to "that" point, i

           [   (   (]
                   ^
                   i -> discrepancy encountered here
               ^
               j : find the closing parentheses candidate to remove

        3. \forall j reduce the string to [   ] - '('

        4. Important: now the [   ] has discrepancy of '0'

        5. Continue scanning from 'i'

        6. Question: where do you take the next 'j'
           Answer: you don't want to take the same j, otherwise you will have
                   a repeating subproblem, e.g.
                   ())())  j = 2 and 5, 5 and 2 are equivalent
                   so only allow looking forward, i.e. if you have picked 5
                   then you are not allowed to pick 2, since picking 2 will
                   eventually pick 5

        7. Optimization:
           If there are series of ')))))' the first in the series was picked,
           therefore it is not necessary to consider the remaining ones,
           that is within the i bracket [ ]

        8. After finishing the string, you may consider solving for positive
           discrepancies by reversing the string and solving for '(' in place
           ')'

        9. Summary:
           BFS with clever windowing algorithm:
           1. window increases until you hit a problem
           2. enqueue all possible solutions
              3. don't add stuff that you have seen before
           4. return the first solution because that is the minimum

           DFS also works, saying that the first solution is also the
           best solution... why?

        """

        ans = []         # answer
        dq = deque()     # bfs q

        # tuple (string to be considered,
        #        start location to scan,   'i'
        #        start location to remove  'j'
        #        'direction')              '(' or ')'

        dq.append((ss, 0, 0, '('))
        while dq:
            s, i, j, lch = dq.popleft()
            rch = ')'
            if lch == ')':
                rch = '('
            # print(s, i, j, lch)

            disc = 0
            for k in range(i, len(s)):
                if s[k] == lch:
                    disc += 1
                elif s[k] == rch:
                    disc -= 1
                if disc < 0:
                    for kk in range(j, k+1):
                        if s[kk] == rch and (kk == j or s[kk-1] != rch):
                            dq.append((s[0:kk] + s[kk+1:], k, kk, lch))
                    break

            # added new subproblems, need to finish level
            if disc < 0:
                continue

            # no negative discrepancies consider positive ones
            s = s[::-1]

            if lch == '(':
                dq.append((s, 0, 0, ')'))
            else:
                ans.append(s)
        return ans


test = True
if test:
    s = Solution()
    case = [False] * 2 + [True] + [False] * 2
    if case[0]:
        # Example 1:
        Input = "()())()"
        # Output: ["()()()", "(())()"]
        print(s.removeInvalidParentheses(Input))
    if case[1]:
        # Example 2:
        Input = "(a)())()"
        # Output: ["(a)()()", "(a())()"]
        print(s.removeInvalidParentheses(Input))
    if case[2]:
        # Example 3:
        Input = ")("
        # Output: [""]
        print(s.removeInvalidParentheses(Input))
