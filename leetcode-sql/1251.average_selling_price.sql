-- left join for prices without any UnitsSold
-- this would eval to null
-- which is why ifnull is used

select 
  p.product_id,
  ifnull(round(sum(p.price * u.units) / sum(u.units), 2), 0) as average_price
from 
  Prices p
left join UnitsSold u
on 
  u.product_id = p.product_id
and
  u.purchase_date between p.start_date and p.end_date
group by p.product_id