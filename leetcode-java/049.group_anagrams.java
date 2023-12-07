class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
      Map<String, List<String>> anagramMap = new HashMap<>();

      for (String str : strs) {
        char[] freq = new char[26];

        for (char c : str.toCharArray()) {
          freq[c - 'a']++;
        }

        String freqStr = String.valueOf(freq);
        if (!anagramMap.containsKey(freqStr)) {
          anagramMap.put(freqStr, new ArrayList<>());
        }
        anagramMap.get(freqStr).add(str);
      }

      return new ArrayList<>(anagramMap.values());
    }
}