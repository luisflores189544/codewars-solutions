#Scenario
#You're saying good-bye your best friend , See you next happy year .

#Happy Year is the year with only distinct digits , (e.g) 2018

#Task
#Given a year, Find The next happy year or The closest year You'll see your best friend

def next_happy_year(year):
  year += 1
  while True:
    if len(set(str(year))) == 4:
      break
    else:
      year += 1
  return year
