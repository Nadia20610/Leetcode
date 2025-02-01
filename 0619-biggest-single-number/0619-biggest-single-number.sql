# Write your MySQL query statement below
select
    IFNULL(
        (
            select 
                num 
            from 
                MyNumbers
            group by num 
            having count(num) = 1
            ORDER BY num DESC
            limit 1
        ),
        null
    ) AS num;


