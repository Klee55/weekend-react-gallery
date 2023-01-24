# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

DOM display all pictures in the gallery. Each photo has the ability to like and toggle to see description of the photo. It also show how many likes each photo has.

Problem to solve:
    -display gallery onto DOM
    -add like button
    -show description when picture is clicked
    -show likes count

Solution:
    -use GET function to get gallery array then share it with GalleryList component. Use child GalleryItem component to map out gallery array and return it to DOM.
    -use add GalleryItem to create button and send data to App, then use PUT function to put data in gallery array.
    -use GalleryItem to map out gallery array and display description as p tag.
    -same as photo description, also use conditional rendering to display if there are likes or no likes yet.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
