SELECT 
  DISTINCT author_Id as id
FROM Views 
WHERE author_id = viewer_id
ORDER BY id ASC

# This is faster:

SELECT 
  DISTINCT v.author_id as id
FROM Views v
JOIN Views on v.author_id = v.viewer_id
ORDER BY id ASC