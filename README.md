### Tabunn | Script for multiplying Google tables
![Tabunn](https://github.com/eduhund/Tabunn/assets/141957200/3d902bc9-dec7-4acf-b116-397bffcacc75)

Google does not allow you to make many copies of one table in one click. You can make one copy as many times as you like, but only one at a time, and only by hand.

### Tabunn helps you to:
1. Save time and increase productivity;
2. Automate document creation.

### Quickstart
1. Open [Google Apps Scripts page](https://script.google.com/).
2. Create a new project (or use an existing one), open it.
3. In the left panel, select "Libraries - Add Library".
4. Google will ask for an identification code (Script ID). Enter this one:1zvbXSUJNskKse8GiWSUskfUc1hI4q4Z-7oU0Oe-doWyUywwNuCLPlg9i.
5. Call the functions of this library from your script. There are two functions: 
- CopyFileById copies the file for which you need to specify an ID;
- CopyMyFiles copies a file for which the folder ID, where it is located, and the name are specified.
6. To call the function, enter

function myFunction() {
	Tabunn.CopyFileById(<function parameters>)
}

or

function myFunction() {
	Tabunn.CopyMyFiles(<function parameters>)
}

For more details please check our [Instruction](https://docs.google.com/document/d/1_e9qs5t4b_tw3eMTnyjpJznweuWR5PqHsI96moa6N8I/edit). 

### Pre-requisites
To use this script, you will need to have a Google account. 

### Support & Donation

Our team creates fully open-source tools and solutions for developers, designers, and those who teach these subjects. You can help us: share this tool, contribute to it, or donate to us to support future work. 

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=7Z9A2PABQU584)
