class Solution {
    public int maxProduct(int[] nums) {
        int result = nums[0];
        int localMin = 1;
        int localMax = 1;

        for (int i = 0; i < nums.length; i++) {
          int currentMax = localMax;
          localMax = Math.max(Math.max(nums[i]*localMax, nums[i]*localMin), nums[i]);
          localMin = Math.min(Math.min(nums[i]*currentMax, nums[i]*localMin), nums[i]);
          
          result = Math.max(localMax, result);
          if (nums[i] == 0) {
            localMin = 1;
            localMax = 1;
          }
        }

        return result;
    }
}