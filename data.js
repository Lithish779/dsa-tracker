const SHEETS = [
  {
    id: "arrays",
    title: "Arrays",
    days: "Days 1–5",
    icon: "⬛",
    color: "#f97316",
    days_data: [
      {
        day: 1,
        problems: [
          { id: 1920, title: "Build Array from Permutation", difficulty: "Easy", url: "https://leetcode.com/problems/build-array-from-permutation/" },
          { id: 1929, title: "Concatenation of Array", difficulty: "Easy", url: "https://leetcode.com/problems/concatenation-of-array/" },
          { id: 1480, title: "Running Sum of 1D Array", difficulty: "Easy", url: "https://leetcode.com/problems/running-sum-of-1d-array/" },
          { id: 1470, title: "Shuffle the Array", difficulty: "Easy", url: "https://leetcode.com/problems/shuffle-the-array/" },
          { id: 1672, title: "Richest Customer Wealth", difficulty: "Easy", url: "https://leetcode.com/problems/richest-customer-wealth/" },
          { id: 1295, title: "Find Numbers with Even Number of Digits", difficulty: "Easy", url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" },
        ]
      },
      {
        day: 2,
        problems: [
          { id: 485, title: "Max Consecutive Ones", difficulty: "Easy", url: "https://leetcode.com/problems/max-consecutive-ones/" },
          { id: 283, title: "Move Zeroes", difficulty: "Easy", url: "https://leetcode.com/problems/move-zeroes/" },
          { id: 26, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
          { id: 27, title: "Remove Element", difficulty: "Easy", url: "https://leetcode.com/problems/remove-element/" },
          { id: 905, title: "Sort Array By Parity", difficulty: "Easy", url: "https://leetcode.com/problems/sort-array-by-parity/" },
          { id: 1089, title: "Duplicate Zeros", difficulty: "Easy", url: "https://leetcode.com/problems/duplicate-zeros/" },
        ]
      },
      {
        day: 3,
        problems: [
          { id: 88, title: "Merge Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/merge-sorted-array/" },
          { id: 977, title: "Squares of a Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
          { id: 217, title: "Contains Duplicate", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
          { id: 136, title: "Single Number", difficulty: "Easy", url: "https://leetcode.com/problems/single-number/" },
          { id: 268, title: "Missing Number", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/" },
          { id: 448, title: "Find All Numbers Disappeared in an Array", difficulty: "Easy", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
        ]
      },
      {
        day: 4,
        problems: [
          { id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
          { id: 169, title: "Majority Element", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/" },
          { id: 53, title: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
          { id: 724, title: "Find Pivot Index", difficulty: "Easy", url: "https://leetcode.com/problems/find-pivot-index/" },
          { id: 414, title: "Third Maximum Number", difficulty: "Easy", url: "https://leetcode.com/problems/third-maximum-number/" },
          { id: 66, title: "Plus One", difficulty: "Easy", url: "https://leetcode.com/problems/plus-one/" },
        ]
      },
      {
        day: 5,
        problems: [
          { id: 189, title: "Rotate Array", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-array/" },
          { id: 238, title: "Product of Array Except Self", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
          { id: 560, title: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
          { id: 41, title: "First Missing Positive", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/" },
          { id: 73, title: "Set Matrix Zeroes", difficulty: "Medium", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
          { id: 54, title: "Spiral Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" },
        ]
      }
    ]
  },
  {
    id: "two-pointers",
    title: "Two Pointers & Sliding Window",
    days: "Days 6–10",
    icon: "⟺",
    color: "#06b6d4",
    days_data: [
      {
        day: 6,
        problems: [
          { id: 167, title: "Two Sum II", difficulty: "Medium", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
          { id: 11, title: "Container With Most Water", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
          { id: 15, title: "3Sum", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
          { id: 18, title: "4Sum", difficulty: "Medium", url: "https://leetcode.com/problems/4sum/" },
          { id: 125, title: "Valid Palindrome", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" },
        ]
      },
      {
        day: 7,
        problems: [
          { id: 643, title: "Maximum Average Subarray I", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-average-subarray-i/" },
          { id: 219, title: "Contains Duplicate II", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate-ii/" },
          { id: 209, title: "Minimum Size Subarray Sum", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
          { id: 1456, title: "Maximum Number of Vowels in a Substring", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/" },
          { id: 713, title: "Subarray Product Less Than K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-product-less-than-k/" },
        ]
      },
      {
        day: 8,
        problems: [
          { id: 1004, title: "Max Consecutive Ones III", difficulty: "Medium", url: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
          { id: 1493, title: "Longest Subarray of 1's After Deleting One Element", difficulty: "Medium", url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/" },
          { id: 904, title: "Fruit Into Baskets", difficulty: "Medium", url: "https://leetcode.com/problems/fruit-into-baskets/" },
          { id: 487, title: "Max Consecutive Ones II", difficulty: "Medium", url: "https://leetcode.com/problems/max-consecutive-ones-ii/" },
          { id: 2024, title: "Maximize the Confusion of an Exam", difficulty: "Medium", url: "https://leetcode.com/problems/maximize-the-confusion-of-an-exam/" },
        ]
      },
      {
        day: 9,
        problems: [
          { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { id: 567, title: "Permutation in String", difficulty: "Medium", url: "https://leetcode.com/problems/permutation-in-string/" },
          { id: 438, title: "Find All Anagrams in a String", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
          { id: 76, title: "Minimum Window Substring", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
          { id: 159, title: "Longest Substring with At Most Two Distinct Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/" },
        ]
      },
      {
        day: 10,
        problems: [
          { id: 424, title: "Longest Repeating Character Replacement", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
          { id: 930, title: "Binary Subarrays With Sum", difficulty: "Medium", url: "https://leetcode.com/problems/binary-subarrays-with-sum/" },
          { id: 992, title: "Subarrays with K Different Integers", difficulty: "Hard", url: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
          { id: 1248, title: "Count Number of Nice Subarrays", difficulty: "Medium", url: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
          { id: 1358, title: "Number of Substrings Containing All Three Characters", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/" },
        ]
      }
    ]
  },
  {
    id: "binary-search",
    title: "Binary Search",
    days: "Days 11–15",
    icon: "⌕",
    color: "#a855f7",
    days_data: [
      {
        day: 11,
        problems: [
          { id: 704, title: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
          { id: 35, title: "Search Insert Position", difficulty: "Easy", url: "https://leetcode.com/problems/search-insert-position/" },
          { id: 69, title: "Sqrt(x)", difficulty: "Easy", url: "https://leetcode.com/problems/sqrtx/" },
          { id: 374, title: "Guess Number Higher or Lower", difficulty: "Easy", url: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
          { id: 278, title: "First Bad Version", difficulty: "Easy", url: "https://leetcode.com/problems/first-bad-version/" },
        ]
      },
      {
        day: 12,
        problems: [
          { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { id: 81, title: "Search in Rotated Sorted Array II", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
          { id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { id: 154, title: "Find Minimum in Rotated Sorted Array II", difficulty: "Hard", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/" },
          { id: 162, title: "Find Peak Element", difficulty: "Medium", url: "https://leetcode.com/problems/find-peak-element/" },
        ]
      },
      {
        day: 13,
        problems: [
          { id: 34, title: "Find First and Last Position of Element", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
          { id: 74, title: "Search a 2D Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
          { id: 240, title: "Search a 2D Matrix II", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
          { id: 540, title: "Single Element in a Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
          { id: 852, title: "Peak Index in a Mountain Array", difficulty: "Medium", url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/" },
        ]
      },
      {
        day: 14,
        problems: [
          { id: 875, title: "Koko Eating Bananas", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" },
          { id: 1283, title: "Find the Smallest Divisor Given a Threshold", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
          { id: 1011, title: "Capacity To Ship Packages Within D Days", difficulty: "Medium", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
          { id: 1482, title: "Minimum Number of Days to Make m Bouquets", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/" },
        ]
      },
      {
        day: 15,
        problems: [
          { id: 410, title: "Split Array Largest Sum", difficulty: "Hard", url: "https://leetcode.com/problems/split-array-largest-sum/" },
          { id: 1552, title: "Magnetic Force Between Two Balls", difficulty: "Medium", url: "https://leetcode.com/problems/magnetic-force-between-two-balls/" },
          { id: 1870, title: "Minimum Speed to Arrive on Time", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/" },
          { id: 2226, title: "Maximum Candies Allocated to K Children", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/" },
        ]
      }
    ]
  },
  {
    id: "hashing",
    title: "Hashing & Prefix Sum",
    days: "Days 16–20",
    icon: "#",
    color: "#22c55e",
    days_data: [
      {
        day: 16,
        problems: [
          { id: 242, title: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
          { id: 383, title: "Ransom Note", difficulty: "Easy", url: "https://leetcode.com/problems/ransom-note/" },
          { id: 349, title: "Intersection of Two Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/intersection-of-two-arrays/" },
          { id: 350, title: "Intersection of Two Arrays II", difficulty: "Easy", url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/" },
          { id: 205, title: "Isomorphic Strings", difficulty: "Easy", url: "https://leetcode.com/problems/isomorphic-strings/" },
        ]
      },
      {
        day: 17,
        problems: [
          { id: 290, title: "Word Pattern", difficulty: "Easy", url: "https://leetcode.com/problems/word-pattern/" },
          { id: 49, title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
          { id: 1, title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
          { id: 202, title: "Happy Number", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/" },
          { id: 2192, title: "Contains Duplicate II", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate-ii/" },
        ]
      },
      {
        day: 18,
        problems: [
          { id: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
          { id: 525, title: "Contiguous Array", difficulty: "Medium", url: "https://leetcode.com/problems/contiguous-array/" },
          { id: 5600, title: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
          { id: 523, title: "Continuous Subarray Sum", difficulty: "Medium", url: "https://leetcode.com/problems/continuous-subarray-sum/" },
          { id: 974, title: "Subarray Sums Divisible by K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
        ]
      },
      {
        day: 19,
        problems: [
          { id: 9300, title: "Binary Subarrays With Sum", difficulty: "Medium", url: "https://leetcode.com/problems/binary-subarrays-with-sum/" },
          { id: 12480, title: "Count Number of Nice Subarrays", difficulty: "Medium", url: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
          { id: 325, title: "Maximum Size Subarray Sum Equals k", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/" },
          { id: 1590, title: "Make Sum Divisible by P", difficulty: "Medium", url: "https://leetcode.com/problems/make-sum-divisible-by-p/" },
          { id: 454, title: "4Sum II", difficulty: "Medium", url: "https://leetcode.com/problems/4sum-ii/" },
        ]
      },
      {
        day: 20,
        problems: [
          { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
          { id: 451, title: "Sort Characters By Frequency", difficulty: "Medium", url: "https://leetcode.com/problems/sort-characters-by-frequency/" },
          { id: 692, title: "Top K Frequent Words", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-words/" },
          { id: 36, title: "Valid Sudoku", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/" },
          { id: 1280, title: "Longest Consecutive Sequence (Revision)", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        ]
      }
    ]
  },
  {
    id: "strings",
    title: "Strings",
    days: "Days 21–24",
    icon: "Aa",
    color: "#f43f5e",
    days_data: [
      {
        day: 21,
        problems: [
          { id: 344, title: "Reverse String", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-string/" },
          { id: 58, title: "Length of Last Word", difficulty: "Easy", url: "https://leetcode.com/problems/length-of-last-word/" },
          { id: 14, title: "Longest Common Prefix", difficulty: "Easy", url: "https://leetcode.com/problems/longest-common-prefix/" },
          { id: 28, title: "Find the Index of First Occurrence", difficulty: "Easy", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
          { id: 387, title: "First Unique Character in a String", difficulty: "Easy", url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
        ]
      },
      {
        day: 22,
        problems: [
          { id: 796, title: "Rotate String", difficulty: "Easy", url: "https://leetcode.com/problems/rotate-string/" },
          { id: 443, title: "String Compression", difficulty: "Medium", url: "https://leetcode.com/problems/string-compression/" },
          { id: 151, title: "Reverse Words in a String", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-words-in-a-string/" },
          { id: 1768, title: "Merge Strings Alternately", difficulty: "Easy", url: "https://leetcode.com/problems/merge-strings-alternately/" },
          { id: 1071, title: "Greatest Common Divisor of Strings", difficulty: "Easy", url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/" },
        ]
      },
      {
        day: 23,
        problems: [
          { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
          { id: 647, title: "Palindromic Substrings", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/" },
          { id: 680, title: "Valid Palindrome II", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome-ii/" },
          { id: 131, title: "Palindrome Partitioning", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/" },
          { id: 516, title: "Longest Palindromic Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-subsequence/" },
        ]
      },
      {
        day: 24,
        problems: [
          { id: 394, title: "Decode String", difficulty: "Medium", url: "https://leetcode.com/problems/decode-string/" },
          { id: 8, title: "String to Integer (atoi)", difficulty: "Medium", url: "https://leetcode.com/problems/string-to-integer-atoi/" },
          { id: 71, title: "Simplify Path", difficulty: "Medium", url: "https://leetcode.com/problems/simplify-path/" },
          { id: 227, title: "Basic Calculator II", difficulty: "Medium", url: "https://leetcode.com/problems/basic-calculator-ii/" },
          { id: 224, title: "Basic Calculator", difficulty: "Hard", url: "https://leetcode.com/problems/basic-calculator/" },
        ]
      }
    ]
  },
  {
    id: "linked-list",
    title: "Linked List",
    days: "Days 25–26",
    icon: "⬤→",
    color: "#eab308",
    days_data: [
      {
        day: 25,
        problems: [
          { id: 206, title: "Reverse Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
          { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
          { id: 83, title: "Remove Duplicates from Sorted List", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
          { id: 141, title: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" },
          { id: 876, title: "Middle of the Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
          { id: 160, title: "Intersection of Two Linked Lists", difficulty: "Easy", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
        ]
      },
      {
        day: 26,
        problems: [
          { id: 234, title: "Palindrome Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/palindrome-linked-list/" },
          { id: 19, title: "Remove Nth Node From End", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
          { id: 92, title: "Reverse Linked List II", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-linked-list-ii/" },
          { id: 328, title: "Odd Even Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/odd-even-linked-list/" },
          { id: 2, title: "Add Two Numbers", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" },
          { id: 61, title: "Rotate List", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-list/" },
        ]
      }
    ]
  },
  {
    id: "stack-queue",
    title: "Stack & Queue",
    days: "Days 27–28",
    icon: "⧉",
    color: "#ec4899",
    days_data: [
      {
        day: 27,
        problems: [
          { id: 20, title: "Valid Parentheses", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" },
          { id: 155, title: "Min Stack", difficulty: "Medium", url: "https://leetcode.com/problems/min-stack/" },
          { id: 232, title: "Implement Queue Using Stacks", difficulty: "Easy", url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
          { id: 225, title: "Implement Stack Using Queues", difficulty: "Easy", url: "https://leetcode.com/problems/implement-stack-using-queues/" },
          { id: 496, title: "Next Greater Element I", difficulty: "Easy", url: "https://leetcode.com/problems/next-greater-element-i/" },
        ]
      },
      {
        day: 28,
        problems: [
          { id: 503, title: "Next Greater Element II", difficulty: "Medium", url: "https://leetcode.com/problems/next-greater-element-ii/" },
          { id: 739, title: "Daily Temperatures", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
          { id: 150, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
          { id: 402, title: "Remove K Digits", difficulty: "Medium", url: "https://leetcode.com/problems/remove-k-digits/" },
          { id: 735, title: "Asteroid Collision", difficulty: "Medium", url: "https://leetcode.com/problems/asteroid-collision/" },
        ]
      }
    ]
  },
  {
    id: "trees",
    title: "Trees",
    days: "Day 29",
    icon: "🌳",
    color: "#10b981",
    days_data: [
      {
        day: 29,
        problems: [
          { id: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
          { id: 100, title: "Same Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" },
          { id: 101, title: "Symmetric Tree", difficulty: "Easy", url: "https://leetcode.com/problems/symmetric-tree/" },
          { id: 226, title: "Invert Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" },
          { id: 543, title: "Diameter of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
          { id: 110, title: "Balanced Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/balanced-binary-tree/" },
          { id: 111, title: "Minimum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
          { id: 112, title: "Path Sum", difficulty: "Easy", url: "https://leetcode.com/problems/path-sum/" },
          { id: 257, title: "Binary Tree Paths", difficulty: "Easy", url: "https://leetcode.com/problems/binary-tree-paths/" },
          { id: 235, title: "Lowest Common Ancestor of BST", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        ]
      }
    ]
  },
  {
    id: "trees-heap-dp",
    title: "Trees + Heap + DP",
    days: "Day 30",
    icon: "∑",
    color: "#6366f1",
    days_data: [
      {
        day: 30,
        label: "Trees",
        problems: [
          { id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
          { id: 230, title: "Kth Smallest Element in a BST", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
          { id: 236, title: "Lowest Common Ancestor of Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
        ]
      },
      {
        day: "30b",
        label: "Heap",
        problems: [
          { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
          { id: 703, title: "Kth Largest Element in a Stream", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
          { id: 1046, title: "Last Stone Weight", difficulty: "Easy", url: "https://leetcode.com/problems/last-stone-weight/" },
          { id: 3470, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        ]
      },
      {
        day: "30c",
        label: "DP",
        problems: [
          { id: 70, title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
          { id: 509, title: "Fibonacci Number", difficulty: "Easy", url: "https://leetcode.com/problems/fibonacci-number/" },
          { id: 746, title: "Min Cost Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
          { id: 198, title: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
          { id: 213, title: "House Robber II", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber-ii/" },
          { id: 322, title: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
          { id: 300, title: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { id: 1143, title: "Longest Common Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
        ]
      }
    ]
  }
];
