# Ping Pong
This project is a Javascript web application that I developed for the purpose of mastering HTML, CSS and Javascript as a whole. It's a program that is bent on the needs of Behavior Driven Development strategies.

## Description
This is a web application that works on the following requirements:
1. Numbers divisible by 3 are replaced with "ping"
1. Numbers divisible by 5 are replaced with "pong"
1. Numbers divisible by 15 are replaced with "ping-pong"_


## Specifications for the application
|Behavior | input | output|
|--- | :---: | :---: |
|Do not allow user to input number 0 | 0 | Must Enter Value greater or equal to 1
|1 is the minimum number that can be entered | 1 | 1
|Once user Input the number, format Output number as  listing that range from 1 to the user’s Input number. | 2 | 1, 2 (in the listing form).
|Replace any Output numbers that can be divided by 3 with “ping” | 3 | 1, 2, PING
|Replace any Output numbers that can be divided by 5 with “pong” | 5 | 1, 2, 3, 4, PONG
|Replace any Output numbers that can be divided by 15 with “ping-pong” | 15 | 1, 2, PING, 4, PONG, PING, 7, 8, PING, PONG, 11, PING, 13, 14, PING-PONG
|When the user input new number and click "PING-PONG" button, the previous output will clear. The new output will show.| 7 | (Once "PING-PONG" button is click, the new output will show) 1, 2, PING, 4, PONG, PING, 7
|Do not allow user to input uppercase letters | A | Must Enter Value greater or equal to 1
|Do not allow user to input lowercase letters | a | Must Enter Value greater or equal to 1
|Do not allow user to input negative number | -1, | Must Enter Value greater or equal to 1

### Prequisites
1. You **need a Github account** to clone the project directory from my repository.

1. The webpage needs to be run on **Google Chrome** browser. It's okay to use any other web browser but I reccommend Chrome because of it's extensive extensions that allow some of the extra features I threw into the page to function well.

1. To view the raw code of the webpage you will probably need a text editor e..g **Atom** or **Brackets**

1. You will also need to obtain Bootstrap file css from [getbootstrap](http://getbootstrap.com/)

1. I have added an extra bootstrap file on fonts within the repo that enables me to use pre-edited icons. These can be obtained from [Fontawesome](http://fontawesome.io/get-started/)


### Installing
* Using your **Terminal**, you will need to clone/fork the repository containing the root folder to your computer using this command: $ git clone https://github.com/kurosakiaduma/pingpong

OR

* Directly download the root folder to your computer using [this link](https://github.com/kurosakiaduma/pingpong/archive/master.zip)

## Deployment
1. After unpacking the contents, use **Atom** to open the **HTML** **CSS** **JS** and **Bootstrap** to view the source code of the project.

1. Run the project in Google Chrome **(reccommended)** or any other web browser to view it in deployed version.

1. Test the project live by editing its source code using **Google Developer Tools**.

## Built with
* HTML
* CSS
* Bootstrap
* jQuery
* Javascript


## Author
The author of this project is Tevin Joel Aduma

You can reach me via my:
* [Facebook](https://facebook.com/taduma)

* [Outlook](mailto:tevin74@live.com)

* [Gmail](mailto:kurosakiaduma@gmail.com)

## License
MIT License

Copyright (c) 2017
Aduma Tevin Joel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
