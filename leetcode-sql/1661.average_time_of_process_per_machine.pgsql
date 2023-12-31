-- I ran this in mysql. For some reason, postgres round() is not taking in the 2nd argument
-- even though the documentation says it should work
SELECT
  a1.machine_id, 
  ROUND(AVG(a2.timestamp-a1.timestamp), 3) as processing_time 
FROM
  Activity a1
INNER JOIN Activity a2 
ON 
  a1.process_id = a2.process_id AND 
  a1.machine_id = a2.machine_id
WHERE 
  a2.activity_type = 'end' AND
  a1.activity_type = 'start'
GROUP BY 
  a1.machine_id