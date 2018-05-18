--Given a table of random numbers as follows:

--numbers table schema

--id
--number1
--number2
--Your job is to return table with similar structure and headings, where if the sum of a column is odd, the column shows the minimum value for that column, and when the sum is even, it shows the max value. You must use a case statement.

--output table schema

--number1
--number2

SELECT DISTINCT
    CASE 1
      WHEN MOD((SELECT SUM(number1) FROM numbers), 2)
      THEN (SELECT MIN(number1) FROM numbers)
      ELSE (SELECT MAX(number1) FROM numbers)
    END AS number1,
    
    CASE 1
      WHEN MOD((SELECT SUM(number2) FROM numbers), 2)
      THEN (SELECT MIN(number2) FROM numbers)
      ELSE (SELECT MAX(number2) FROM numbers)
    END AS number2
FROM numbers
