// 2ms - 98% of users.
// strings are represented as ASCII -- so c - 'a' represents the index of the character in the array.
class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }
    int[] frequencies = new int[26];

    for (char c : s.toCharArray()) {
      frequencies[c - 'a']++;
    }

    for (char c : t.toCharArray()) {
      frequencies[c - 'a']--;
      if (frequencies[c - 'a'] < 0) {
        return false;
      }
    }

    return true;
  }
}