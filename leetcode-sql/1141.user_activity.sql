select
  activity_date as day,
  COUNT(distinct user_id) as active_users
from activity a
where
  activity_date  <= '2019-07-27'
and
  activity_date > '2019-07-27' - interval 30 day
group by activity_date
