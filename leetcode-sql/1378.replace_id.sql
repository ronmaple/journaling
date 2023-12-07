
SELECT
  eu.unique_id,
  name
FROM 
  Employees e
LEFT JOIN EmployeeUNI eu ON eu.id = e.id
