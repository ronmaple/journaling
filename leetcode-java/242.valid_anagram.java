class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }
    Map<Character, Integer> frequencies = new HashMap<>();
    for (char c : s.toCharArray()) {
      if (!frequencies.containsKey(c)) {
        frequencies.put(c, 0);
      }
      frequencies.put(c, frequencies.get(c) + 1);
    }

    for (char c : t.toCharArray()) {
      if (!frequencies.containsKey(c) || frequencies.get(c) <= 0) {
        return false;
      }
      frequencies.put(c, frequencies.get(c) - 1);
    }

    return true;
  }
}