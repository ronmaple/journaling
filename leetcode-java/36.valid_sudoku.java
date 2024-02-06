public class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int i = 0; i < board.length; i++) {
          HashSet<Character> rowSet = new HashSet<Character>();
          HashSet<Character> colSet = new HashSet<Character>();
          HashSet<Character> boxSet = new HashSet<Character>();

          for (int j = 0; j < board.length; j++) {
            char rowCell = board[i][j];
            char colCell = board[j][i];
            char boxCell = board[3*(i/3) + j/3][3*(i%3) + j%3];

            if (rowCell != '.' && !rowSet.add(rowCell)) {
              System.out.println('r');
              return false;
            } else {
              rowSet.add(rowCell);
            }
            if (colCell != '.' && !colSet.add(colCell)) {
              return false;
            }
            if (boxCell != '.' && !boxSet.add(boxCell)) {
              return false;
            }
          }
        }

        return true;
    }
} {
  
}
