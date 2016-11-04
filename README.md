Tic-Tac-Toe
by: Ryan Roderick


This is a simple Tic Tac Toe game.  Sign in to be assigned as Player X and compete
against Player O.  First three matching X or O symbols declares a winner!  Game will store win data to logged in Player account and recall data on command.  Players can sign it, log in, change password and reset to begin new game.

Try it out!


Link to wireframes:

<!-- http://i.imgur.com/LMOzrps.jpg

http://i.imgur.com/pQ2JDw3.jpg

http://i.imgur.com/2ROSuYZ.jpg -->



I used Javascript/jquery, html, CSS, and AJAX w/Json.  I documented User Stories and
went through a list of what I needed, keeping the steps in order from how a User would begin on the front end to how that user would end the experience after playing through the game.

Things that I would like to get to in future:

-Styling, I need to get to styling and make the page prettier.  Also need to make a colors.scss page to fix linter errors on my style page
-modals, to clean it up
-the reset button never got finished.  I couldn't fix the stop play function,
which stopped click events after winCheck executed.  My reset was the next step after this.
-need to finish API and backend stuff, would like to combine signup with sign in to auto sign in and clean up button actions to use enter and dismiss fields after click
-




User stories I used:

<!-- 1: User needs to be able to log in and be assigned to player 1
***Javascript
How do I assign player 1 = a? player 2=b?  WORKS!
How do I toggle between players a + b on click? WORKS! -->

<!-- 2:  User needs to be able to change password

WORKS!

3:  User needs to be able to click on baord, show x or o

AAHHHHHHHH! can't work it out, will come back later -->

<!-- Works! -->

<!-- 4:  User needs to be able to be declared winner or loser at the end of nine clicks or
on 3 in a row
****Javascript
How do I use tc class=aa, ab, ac to determine an array and match up x and o positions to declare winner?

WORKS!! -->

5:  game baord needs to be able to reset and start fresh (button)
****javascript
Game board needs to reset after nine SUCCESSFUL clicks (better way to say it is to
have 9 full td cells) or WIN,

OR
just reset when button is pushed, regardless of board fill

6: game needs to use AJAX to

a:Visually display the results of retrieving game statistics, such as total games won by a user. (READ)

b:Create new games on the server. (CREATE)

c:Update a game by storing new moves. (UPDATE)
