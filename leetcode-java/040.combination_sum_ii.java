  class Solution {
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
      Arrays.sort(candidates);

      List<List<Integer>> results = new ArrayList<List<Integer>>();
      backtrack(new ArrayList<>(), results, target, candidates, 0);
      return results;
  }

  private void backtrack(List<Integer> current,
                          List<List<Integer>> results,
                          int target,
                          int[] candidates,
                          int start)
  {
    if (target == 0) {
      results.add(new ArrayList<>(current));
    }
    else if (target < 0) {
      return;
    }
    else {
      for (int i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] == candidates[i-1]) {
          // skip duplicates (array is sorted)
          continue;
        }
        current.add(candidates[i]);
        backtrack(current, results, target - candidates[i], candidates, i + 1);
        current.remove(current.size() - 1);
      }
    }
  }
}