## 2. [Open Source and Repo Setup](2_set_up_repo/readme.md) Reflection

* Explain how to create a repository on GitHub and clone the repository to your local computer to a non-technical person
* Describe what open source means
* What do you think about Open Source? Does it make you nervous or protective? Does it feel like utopia?
* Assess the importance of using licenses
* What concepts were solidified in the challenge? Did you have any "aha" moments? What did you struggle with?
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

<div class="answers">
	* Explain how to create a repository on GitHub and clone the repository to your local computer to a non-technical person

	<p class="question1">
		This question leaves open a large number of variables, so I'm going to assume that the 
		user is not familiar with the process, that they are going to be using a Mac with OS X 10.9.x, that they are an administrator on their computer, and finally that they will encounter no issues during these instructions. A tall order I know, but every now and again you get lucky and things work out as desired. 
	</p>

	<p class="question1">
		The first thing to do will be to create an account on <a href="http://github.com">GitHub</a>. On GitHub's homepage there is an easy account creation form on the right hand side, where you will enter a username, the email that you want associated with the account, and the password that you would like to use. Once the GitHub account is created and the user is logged into the site, they should see their username in the top right hand corner of the screen. From here you will want to click on the button that has crossed tools on it that says "Account Settings" when you hover your mouse above the button. On the left hand side of your screen, below your user name there will be a list of various account settings, including "SSH Keys", which you should click on now.
	</p>

	<p class="question1">
		Before entering more information in the "SSH Keys" page of your GitHub account, we will create a new SSH key on your Mac. If you're not familiar with SSH keys, they are used as a way to identify trusted computers, without the use of passwords. In this case we are setting up a key on your computer and then sharing that information with GitHub. This way when you go to pull repositories onto your computer or to push your commits from your computer to GitHub, you will not need to enter your password, as the SSH key that is stored on the GitHub server will be compared to the SSH on your computer.
	</p>
	
	<p class="question1">
		In order to generate a new SSH key we will need to use the Terminal application, which we will launch through Spotlight in this particular tutorial. To open Spotlight you will need to push the Command(⌘)+Spacebar at the same time to bring up Spotlight or click on the magnifying glass in the top right hand corner of your screen within your menubar. After Spotlight has been opened, you will see a blinking cursor in a text box where you will type in "Terminal", without the quotes. Once the Terminal application is visible in the Spotlight drop-down list, select it and hit return or left click on it with your mouse to initialize the application.
	</p>

	<p class="question1">
		Now type the following command in the Terminal to generate a new SSH key, substituting in your email address, and then press enter: <code>ssh-keygen -t rsa -C "your_email@example.com"</code>. After this command is entered you will be asked to enter a passphrase. It is recommended that you use a strong, secure passphrase. There will be a printout in the Terminal window indicating where your identification and public keys have been saved, as well as what is your key fingerprint. Next you will add the new key to the ssh-agent by typing <code>ssh-add ~/.ssh/id_rsa</code> into the Terminal. The ssh-agent will securely store the private key, as well as connect to another computer repeatedely without having to always enter the passphrase. Finally you will add the SSH key to your GitHub account, by first copying the contents of your <code>id_rsa.pub</code> file to your clipboard using this command in the Terminal: <code>pbcopy < ~/.ssh/id_rsa.pub</code>. 
	</p>

	<p class="question1">
		Now that you've copied your new SSH key to your clipboard, navigate back to your browser and GitHub Add SSH keys page from several paragraphs previous. Click on the "Add SSH Key" button, that will be on the right hand side of the page. Enter a descriptive title for the key within the "Add an SSH Key" form, eg "Username's Macbook". Then paste your SSH key into the Key field, click the green "Add Key" button and enter your GitHub password when prompted. At this point there are a couple of steps remaining to finalize your ability to SSH into GitHub. Switch back to the Terminal and type in <code>ssh -T git@github.com</code>. There is a chance that you will see the following warning: 
		<code>The authenticity of host 'github.com (207.97.227.239)' can't be established.
# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
# Are you sure you want to continue connecting (yes/no)?</code>
		This is normal though. You will want to make sure that fingerprint shown above matches what was output in your terminal or the similar warning located at <a href="https://help.github.com/articles/generating-ssh-keys">GitHub's generating ssh keys tutorial</a>. If it does match type "yes" and press return. 
	</p>

	<p class="question1">
		Once your SSH keys are configured on GitHub, make sure you're logged in and go to <a href="https://github.com">https://github.com</a>. Then look straight down along the right hand side of the page until you see a green button that says "New Repository" and click it to start the creation of a repository. That link will bring you to a form that will create a new repository once it is completed. Underneath the words "Repository name" you may enter any repository name you would like; GitHub will tell you if your name is already taken, as well as make suggestions for names in case you're stuck. In this tutorial we will be using the repository name "Hello-World", without the quotes. This initial repository will be public, so make sure that the radio button next to "Public" has a black dot in the center as well as a blue outer circle. It looks remarkably like a blue eye and black pupil. Check the next to "Initialize this repository with a README", which will allow the repository to be cloned to the local machine. After these steps are complete, click on the green "Create repository" button and viola your first repository has been created. Now the next step is to get that repository from GitHub onto your computer by installing git, which is open source version control software.
	</p>

	<p class="question1">
		The next steps to get a repository on your computer will take a bit of setup work, 
		but all of this hard work will be well worth it once you see the repository that you 
		created on GitHub get pulled down to your computer! The first thing that you are going to do is to install the Xcode standalone command line tools. This will be accomplished through the Terminal application that was described in previous paragraphs. Open the terminal application again to continue. 
	</p>

	<p class="question1">
		In the terminal application you will most likely see a line at the top of the window that tells you when you last logged in and then a line that will indicate the current working directory of the Terminal. Type the following command <code>xcode-select --install</code> into the Terminal window and press return. A pop-up window will then appear that states "The \"xcode-select\" command requires the command line developer tools. Would you like to install the tools now?", and click on "Install". Another pop-up window will then appear containing the License Agreement, at which point you should click "Agree" to contiue with the operation. At this point the software will download to your computer and then it will automatically install itself. Congratulations you've completed a big step towards getting your GitHub repository onto your computer!
	</p>

	<p class="question1">
		Now that the Xcode command line tools have been installed, we can move onto the next steps of the process. The next steps will be completed in the Terminal, so make sure that it is your current application, by either pressing Command(⌘)+Tab together to select or by intializing it from Spotlight as was descrbed in one of the previous paragraphs. In the Terminal the first command that you will type is <code>gcc --version</code>, which should create an output that will contain something similar to <code>Apple LLVM version 5.1 (clang-503.0.40) (based on LLVM 3.4svn)</code>. If your printout doesn't contain exactly the same output, it is not something to worry about. From here the next step is to install the package manager <a href="http://brew.sh">Homebrew</a>, which will allow you to install open source packages including git!
 </p>

 <p class="question1">
	 	The following command will be copied or typed into the Terminal to install Homebrew for
	 	you: <code>ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
	 	</code> Once installation script for Homebrew starts running in your Terminal window, 
	 	follow along as you will be prompted to complete certain instructions. The first prompt 
	 	should be for you to <code>Press enter to continue</code>. Following that there will be a 
	 	prompt <code>To proceed, enter your password, or type Ctrl-C to abort</code>. Note when 
	 	entering your password there will be no visual cue in the Terminal window as you type out 
	 	characters; once you have finished typing out your password press enter. Following all of 
	 	these steps Homebrew is now installed on your computer. The last step is to run this 
	 	command in the Terminal <code>brew doctor</code>, which should print out "Your system is 
	 	ready to brew".
 </p>

	<p class="question1">
		The setup process is almost complete and your GitHub repository will soon be on your computer in all its glory. One of the easiest steps is next; that's installing git using Homebrew. All that you need to type into the Terminal to install git is <code>brew install git</code>. After git has been installed you will want to run the command <code>brew doctor</code> in the Terminal to ensure everything is working properly. Now to let these changes take effect, you must quit and relaunch the Terminal application. The last thing to verify with the git installation is to make sure that it is installed in the expected location. Type <code>which git</code> in the Terminal and you will get printout of <code>/usr/local/bin/git</code>.
	</p>

	<p class="question1">
		You are just a few steps away from finishing all of the setup on your computer and pulling your repository from GitHub, so just bare with me for a few more minutes. There are just a few git configuration steps that must be completed prior to pulling your repository from GitHub. Go back to the Terminal again and type in the following commands: <code>git config --global user.name "Your Full Name"</code> and <code>git config --global user.email "Your Email Address"</code>. Where you will substitute your name for "Your Full Name" and your email address for "Your Email Address". These commands set what name and email address are attached to all of your various git repository commits(saves).
	</p>

	<p class="question1">
		You are now ready to pull your repository off of the internet at GitHub and pull it down to your computer! There are just a few more Terminal commands to finish this particular project. In this example we will install the repository on your desktop to keep things simple. Enter the command <code>cd ~/Desktop</code>	into the Terminal to change your working directory. Then type <code>git clone git@github.com:username/Hello-World.git</code> into the Terminal, substituting your GitHub username for the username field. Congratulations you've just finished the large task of installing git, creating a GitHub account, and cloning your first repository to your computer!
	</p>

	* Describe what open source means

	<p class="question2">
		Software is considered to be open source when you can download the program as well as the sourcecode, tinker with it to your hearts content, and use it for free. Software must specifically be liscensed as open source to be considered as such. There are many different types of open source licenses that can be used, with each of them granting a different set of permissions for how that software can be used by other end users. Additionally as open source software projects are available for anyone to use, many people can work on the project, that are not on the original development team, and they can create enhancements, bug fixes, etc. 
	</p>

	<p class="question2">
		Standardly when you buy non-open source software off the shelf, you are not able to see the inner workings (source code) of the program that you have purchased. This is due to the fact that that project's source code is part of that companies revenue stream and if they were to publically release it as open source, there is a chance that many people would no longer buy their software, as they could download it for free. 
	</p>

	* What do you think about Open Source? Does it make you nervous or protective? Does it feel like utopia?

	<p class="question3">
		The concept and execution of open source projects doesn't make me nervous or protective of my work, nor does it appear to be a utopia either. There are times and places for open source projects, just as there are times and places for closed projects. The beauty of both of these types of projects is that they represent a choice that you can make when you start a project. Open source is a wonderful concept for software development, as many people can work on a project, make improvements, and create unique and awesome utilities. The one potential downside that I can see is when someone elects to abuse your license, such as claiming your work as their own.
	</p>

	* Assess the importance of using licenses

	<p class="question4">
		Licensing is a critical part of any project, as it protects your your rights, including any patents granted to that particular work. Picking the appropriate license also allows you to not have to worry about granting permission to every individual that would like to use your product, thus removing some of the administrative book-keeping that might otherwise be necessary. 
	</p>

	* What concepts were solidified in the challenge? Did you have any "aha" moments? What did you struggle with?

	<p class="question5">
		This particular challange wasn't that difficult for me, but I found it to be quite time consuming. I most likely went overboard with the amount of detail within my git and GitHub tutorial, but it helped to reinforce my understanding of the overall process. The process of installing Homebrew to manage open source packages was very beneficial. Additionally I came to see how difficult this process could be to someone that is unfamiliar with the various applications and commands that are necessary to ensure a smooth installation. 
	</p>

	* Did you find any resources on your own that helped you better understand a topic? If so, please list it.
	<p class="question6">
		I did not end up doing any external research during this challange on open source, as the open source material provided in the challange was quite good, but I did use an excellent <a href="http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/#step-1">tutorial</a> to help me determine the exact steps I needed to install git. With the individual commands and steps in hand I was able to write my explanation for users that would not necessarily be familiar with this process in my own voice and flow. GitHub also had an excellent <a href="https://help.github.com/articles/generating-ssh-keys">tutorial</a> on how to generate SSH keys, that I gathered information from for my guide.
	</p>
</div>