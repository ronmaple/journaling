-- https://datalemur.com/questions/sql-histogram-tweets
SELECT
  user_tweets as tweet_bucket,
  COUNT(user_tweets) as users_num
FROM (
  SELECT 
    user_id,
    COUNT(tweet_id) as user_tweets
  FROM tweets
  WHERE tweet_date BETWEEN
    '01/01/2022 00:00:00' AND
    '12/31/2022 23:59:59'
  GROUP BY user_id
) as tweets_per_user
GROUP BY user_tweets