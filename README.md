# Javascript Tests

### Second test for AJAX JS loading on page

This is a simple test to create a one pager website where all the content is loaded asynchronously, via AJAX calls.
I have provided 2 methods:

- First the divs are already in place but with a display attribute of none. The links in the HTML navabr are actually button
  that have a loadContent function triggered onclick. This convert the display to flex for one particular div specified in the data-target attribute of the
  button itself.

- Second, I have used another method. This time there is no data inside the content div, but instead the buttons make a call to the API that returns a JSON object
  with the necessary pieces of information. They are then put on the page via JS with createElement and innerHTML methods.

I am honestly a big fan o one-page websites, I think they are extremely efficent and elegant, however I also understand that for more complex website, one page is
a useless limitations. But I think that creating an entire one-page website would be very good exercise for working with AJAX, APIs etc.

Coming up next: One Page Website.

What could that be about?

@BeGeos
