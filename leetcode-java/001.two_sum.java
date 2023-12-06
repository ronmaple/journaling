class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hashMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
          int diff = target - nums[i];

          if (hashMap.containsKey(diff)) {
            int secondIndex = hashMap.get(diff);
            return new int[]{secondIndex, i};
          }
          if (!hashMap.containsKey(nums[i])) {
            hashMap.put(nums[i], i);
          }
        }
        return new int[]{-1, -1};
    }
}