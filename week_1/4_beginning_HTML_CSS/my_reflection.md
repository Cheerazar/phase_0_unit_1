<h1>## 4.[Beginning HTML and CSS](4_beginning_HTML_CSS/readme.mc) Reflection</h1>


* What makes sense to your about HTML? What doesn't? 
* What seems good and bad about HTML?
* Did you have an "aha" moments or were any concepts solidified?
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

<div class="answers">
	
	<p class="question1">
		Right now most things about HTML makes sense. One of my main challanges seems to be how to properly lay everything out that will actually encourage people to use the sites I develop. Another challange is selecting the right piece of HTML for the job. I understand very basic CSS, but I can't do the fancy stuff quite yet. I'm sure it will come with more practice and research. 
	</p>

	<p class="question2">
		A great thing about HTML's design and how it works, is that you can design and implement relatively simple web pages in a few hours. The syntax is straightforward and there is a vast treasure trove of knowledge out there waiting for me to return. HTML is quite ugly on its own and really requires styling via CSS to get a pretty looking layout. 
	</p>

	<p class="question3">
		There was definitely an "Aha!" moment when I was first trying to get the background image to load, and I realized that my relative path was wrong. Luckily the entire process only took a few minutes to isolate, as I had forgotten to go up a directory from the stylesheets directory and then into the images folder. This reminded me that my relative path will be based on the folder the file you are working in, eg if you are working in the file dbc1.css in <code>unit1_projects/stylesheets/dbc1.css</code> and you want to link an image from <code>unit1_projects/images</code>, you cannot link to the file with the following code <code>images/example_image.jpg</code>, you must instead go up a directory in the tree first and then over to the folder you want like this <code>../images/example_image.jpg</code>. <br />

		Prior to watching the Treehouse video on <a href="http://teamtreehouse.com/library/build-a-simple-website/creating-a-website-structure/working-with-grids">Working with Grids</a>, the concept of cascading style sheets were a bit fuzzy in my mind. I knew how to alter the styles of various elements in a page, but the specific wording of <em>cascading style sheets</em> eluded me. Now I understand that attributes in css files are loaded in order from top to bottom, thus the cascading in cascading style sheets. <br />

		Also while watching the Treehouse Working with Grids video, I was floored to see how quickly the use of grids cleaned up the layout of the page. The layout for the page became streamlined once they added the css file they created based on the calculations from <a href="http://gridulator.com">gridulator.com</a> and added the appropriate classes to the HTML file. It was like watching magic happen right before my eyes as the unorganized jumble of the original page quickly fell into organized sections in the span of a few minutes. 
	</p>
	
	<p class="question4">
		A resource that I've been quite pleased with is <a href="https://kuler.adobe.com">Adobe's Kular</a> web application. The background pattern that I used for this challenge at <a href="http://subtlepatterns.com">subtlepatterns.com</a>. When I needed a quick reference to lookup some CSS properties I wasn't familiar with I used the book CSS Pocket Reference. If that book didn't provide a sufficient explanation for a property or setting I would look up those items at the <a href="developer.mozilla.org">Mozilla Developer Network</a> site.
	</p>
</div>

