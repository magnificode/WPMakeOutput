# WPMakeoutPut

# Requirements

## JS
* es6
	* Minified/non-midified compiled files
	* Don't commit compiled files :|
* webpack
* gulp
	* Do we need a task files with webpack?
* .eslint
	* Want to rely on airbnb as a primary plugin
* .jscs


# Questions
What are these tools providing us over just straight webpack?
 - It's worth keeping gulp... I've been playing with webpack and it's set up to add styles directly through JS. There is a way to process using webpack and then use an extraction system to pull it out into a file. In general, gulp is setting up for a super modularized web-app. We are some steps away from that. -LW
	- I agree that keeping gulp is a good tool for use and will help users ramp up quicker on the tools. - NS
 - The other thing that gulp gives us is the ability to run other things through gulp, such as a task to run testing. A task for running a clean build. These are some of the features of the old version that we _probably_ shouldn't just kill, but interested to chat about it. -LW
	- This is kinda the only other reason for keeping these commands - NS
