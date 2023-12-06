SELECT 
  DISTINCT author_Id as id
FROM Views 
WHERE author_id = viewer_id
ORDER BY id ASC