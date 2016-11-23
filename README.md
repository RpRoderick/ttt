Tic-Tac-Toe
by: Ryan Roderick

Find the Game @: https://rproderick.github.io/ttt/

This is a simple Tic Tac Toe game.  Sign in to be assigned as Player X and compete
against Player O.  First three matching X or O symbols declares a winner!  Game will store win data to logged in Player account and recall games played data on command.  Players can sign in, log in, change password and reset to begin new game.

Try it out!


Link to wireframes:

http://i.imgur.com/LMOzrps.jpg

http://i.imgur.com/pQ2JDw3.jpg

http://i.imgur.com/2ROSuYZ.jpg



I used Javascript/jquery, html, CSS, and AJAX w/Json.  I documented User Stories and
went through a list of what I needed, keeping the steps in order from how a User would begin on the front end to how that user would end the experience after playing through the game.

Things that I would like to get to in future:

1:
Html/css, make it pretty (it needs to be visually appealing)  NOTE:  reset button needs tweaking with mobile version, also the win box is a little off.  NOTE: separate modals for {sign up}{sign in, sign out, change password}{stats}

2:
It would be nice if the game board reset upon sign in, maybe do a pop-up saying the current game would be lost if you sign in.  Would still like to be able to play without signing in, just to increase usability.  (I wouldn’t want to sign in just to play ttt)

3:
Can I make the winning squares background color pop! when the winner is declared?  Shut off hover color when winner is declared? Some animation upon win?

4:
Animate the board upon page load, twirl in or something

5:
Animate the click events

6:
Player 2 sign in, ability to play across internet

7:
visually - have 2 modal navs on each side, representing player 1 and player 2, connecting to separate API calls

8:
Have sign in sign out, etc go away when correct action is applied, declare a problem when wrong values are entered


User stories I used:

1: User needs to be able to log in and be assigned to player 1
***Javascript
How do I assign player 1 = a? player 2=b?
How do I toggle between players a + b on click?

2:  User needs to be able to change password

3:  User needs to be able to click on baord, show x or o

4:  User needs to be able to be declared winner or loser at the end of nine clicks or
on 3 in a row
****Javascript
How do I use tc class=aa, ab, ac to determine an array and match up x and o positions to declare winner?

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
