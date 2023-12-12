select id, movie, description, rating from Cinema
where description not like '%boring%' and id % 2 != 0
order by rating desc