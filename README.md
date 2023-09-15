
# Course Registration 
This project helps students take the right course and stops them from taking too many credits. It also stops students from taking the same course multiple times.

## Features

- This project can add courses without duplication.
I have used an if condition to check if this course has been taken before or not. If the course is not taken then the property selected will be false. If the course has been already taken then it will be false.


- This program makes sure no one can take more than 20 credits.
The credit limit is 20 here so if someone takes a course when his credit is 20 or will be more than 20 after taking this course then our program will stop him from taking that course.

- This program is responsive.Our program is respinsive So it is functionable in Mobile, Tablet and PC all divices.



#### How I managed the state in this assignment?

I managed my project by using the ' useState' hook. I assigned value to remaningTime, credits, and price with  ' useState' in App.jsx. I have used handleAddToCredits to update values like redingTime, price, remainingTime. Whenever anyone pushes any button data gets updated. Child components have received this data as props. 

