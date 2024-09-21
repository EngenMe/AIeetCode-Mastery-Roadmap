<!DOCTYPE html>
<html>
<head>
    <title>AICode Mastery Roadmap - Level 1 Week 1</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
        h1 { color: #2E8B57; }
        h2 { color: #556B2F; }
        h3 { color: #6A5ACD; }
        pre { background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow: auto; }
        code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        ul { margin-left: 20px; }
        hr { border: none; height: 1px; background-color: #ccc; margin: 40px 0; }
        a { color: #2E8B57; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>

<h1>Level 1: Foundations (Easy)</h1>
<h2>Week 1: Arrays and Strings</h2>

<p>This week focuses on basic array and string manipulations, as well as the two-pointer technique.</p>

<h3>Practice Problems:</h3>
<ol>
    <li><a href="#problem1">Two Sum</a></li>
    <li><a href="#problem2">Reverse String</a></li>
    <li><a href="#problem3">Valid Anagram</a></li>
    <li><a href="#problem4">Implement strStr()</a></li>
    <li><a href="#problem5">Best Time to Buy and Sell Stock</a></li>
</ol>

<hr>

<h2 id="problem1">1. Two Sum</h2>

<h3>Objective:</h3>
<p>
Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices</em> of the two numbers such that they add up to <code>target</code>. You may assume that each input would have exactly one solution, and you may not use the same element twice.
</p>

<h3>Test Cases:</h3>

<pre><code><strong>Example 1:</strong>
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
<strong>Explanation:</strong> nums[0] + nums[1] = 2 + 7 = 9

<strong>Example 2:</strong>
Input: nums = [3,2,4], target = 6
Output: [1,2]
<strong>Explanation:</strong> nums[1] + nums[2] = 2 + 4 = 6

<strong>Example 3:</strong>
Input: nums = [3,3], target = 6
Output: [0,1]
<strong>Explanation:</strong> nums[0] + nums[1] = 3 + 3 = 6
</code></pre>

<h3>Constraints:</h3>
<ul>
    <li><code>2 ≤ nums.length ≤ 10<sup>4</sup></code></li>
    <li><code>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></code></li>
    <li><code>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></code></li>
    <li>Only one valid answer exists.</li>
</ul>

<hr>

<h2 id="problem2">2. Reverse String</h2>

<h3>Objective:</h3>
<p>
Write a function that reverses a string. The input string is given as an array of characters <code>s</code>. You must do this by modifying the input array <em>in-place</em> with <code>O(1)</code> extra memory.
</p>

<h3>Test Cases:</h3>

<pre><code><strong>Example 1:</strong>
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

<strong>Example 2:</strong>
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

<strong>Example 3:</strong>
Input: s = ["A"]
Output: ["A"]
</code></pre>

<h3>Constraints:</h3>
<ul>
    <li><code>1 ≤ s.length ≤ 10<sup>5</sup></code></li>
    <li><code>s[i]</code> is a printable ASCII character.</li>
</ul>

<hr>

<h2 id="problem3">3. Valid Anagram</h2>

<h3>Objective:</h3>
<p>
Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.
</p>

<p>
An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
</p>

<h3>Test Cases:</h3>

<pre><code><strong>Example 1:</strong>
Input: s = "anagram", t = "nagaram"
Output: true

<strong>Example 2:</strong>
Input: s = "rat", t = "car"
Output: false

<strong>Example 3:</strong>
Input: s = "aacc", t = "ccac"
Output: false
</code></pre>

<h3>Constraints:</h3>
<ul>
    <li><code>1 ≤ s.length, t.length ≤ 5 * 10<sup>4</sup></code></li>
    <li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>

<hr>

<h2 id="problem4">4. Implement strStr()</h2>

<h3>Objective:</h3>
<p>
Implement <code>strStr()</code>. Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.
</p>

<p>
<strong>Clarification:</strong> What should we return when <code>needle</code> is an empty string? This is a great question to ask during an interview. For the purpose of this problem, return <code>0</code> when <code>needle</code> is an empty string.
</p>

<h3>Test Cases:</h3>

<pre><code><strong>Example 1:</strong>
Input: haystack = "hello", needle = "ll"
Output: 2

<strong>Example 2:</strong>
Input: haystack = "aaaaa", needle = "bba"
Output: -1

<strong>Example 3:</strong>
Input: haystack = "", needle = ""
Output: 0

<strong>Example 4:</strong>
Input: haystack = "mississippi", needle = "issip"
Output: 4
</code></pre>

<h3>Constraints:</h3>
<ul>
    <li><code>0 ≤ haystack.length, needle.length ≤ 5 * 10<sup>4</sup></code></li>
    <li><code>haystack</code> and <code>needle</code> consist of only lower-case English characters.</li>
</ul>

<hr>

<h2 id="problem5">5. Best Time to Buy and Sell Stock</h2>

<h3>Objective:</h3>
<p>
You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
</p>

<h3>Test Cases:</h3>

<pre><code><strong>Example 1:</strong>
Input: prices = [7,1,5,3,6,4]
Output: 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6),
profit = 6 - 1 = 5.

<strong>Example 2:</strong>
Input: prices = [7,6,4,3,1]
Output: 0
<strong>Explanation:</strong> In this case, no transactions are done, and the max profit = 0.

<strong>Example 3:</strong>
Input: prices = [2,4,1]
Output: 2
<strong>Explanation:</strong> Buy on day 1 (price = 2) and sell on day 2 (price = 4),
profit = 4 - 2 = 2.
</code></pre>

<h3>Constraints:</h3>
<ul>
    <li><code>1 ≤ prices.length ≤ 10<sup>5</sup></code></li>
    <li><code>0 ≤ prices[i] ≤ 10<sup>4</sup></code></li>
</ul>

</body>
</html>
