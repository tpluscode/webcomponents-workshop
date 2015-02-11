# Part one - problems of web dev

* CSS style wars
* Div-soup pages (seen [GMail][soup]?)
  * No semantics of page structure
* HTML isn't DRY
  * JavaScript has multiple ways for addressing that
* Related JS and HTML in multiple places

# Part two - custom elements

* Registered with the document
  * meaningful and beautiful tags
* This inline HTML isn't cool
* Still vulnerable to external styles
* What if it depends on external code

# Part three - html import

* HTML and javascript can com in one package
  * and more nested imports
* uh oh, doesn't work with `file://` (CORS)
  * `node app.js`

# Part four - templates

* templates are "normal" HTML, and not strings
* Unfortunately no declarative databinding
* Still vulnerable to external styles

# Part five - shadow DOM

* Encapsulates parts of page
  * Think HTML5 video player
* Gotcha: shadow root cannot be used alongside light DOM

[soup]: http://www.html5rocks.com/en/tutorials/webcomponents/customelements/gmail.png
