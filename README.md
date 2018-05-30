# TJBot Library Two Arms and Multiple LEDs in chain

> Node.js FORKED library that extends TJBot's basic capabilities with two arms and multiple LEDs support

First of all, read https://github.com/ibmtjbot/tjbot

![ASLTJBot](/ASLTJBot_2018_two_arms.gif)

Some details: 
* Edited tjbot.js adding new code without change current codes:  
* Added two additional hardware capabilities:
    -leftArm
    - rightArm
* Added additional TJBot API (and supporting functions):
    - tj.waveArms()
    - tj.waveLeftArm()
    - tj.waveRightArm()
    - tj.leftArmBack()
    - tj.rightArmBack()
    - tj.raiseRightArm()
    - tj.raiseLeftArm()
    - tj.lowerLeftArm()
    - tj.lowerRightArm()
    - tj.recognize()
    - tj.shineLeftRight()
* As original TJBot configuration, wired TJBot servo motor to PIN 26 (BCM 7) – Left Arm
* Wired a second servo motor to PIN 22 (BCM 25) – Right Arm
* Integrated @waugh code to support multiple LEDs and chained a second RGB LED (pay attention to LED pins layout. It can change!!!)
![Faccina (little face](/Images/Faccina.jpg)
P.S: I also added (not integrated) a HC-SR04 Ultrasonic sensor and played with physical layout.
 
PPSS: I'm collected a presentation about TJBot and this task is  born to support activities performed at I.I.S. Galileo Galilei di Crema (CR), a secondary state school with about 1,900 students aged 14-19 working in two fields of education: “Applied Sciences high school” and “Technological high school”.  

# 3D printing - tx to Aaron Cox
Here are the STL - 3D printing - files for the 3 parts you need to change.
![ASLTJBot 3D skeleton with two arms](/Images/TJBot%20with%20Two%20Arms%20skeleton.png)

3D Printed TJBot from Aaron Cox
![ASLTJBot 3D printed](/Images/Two_arms_TJBot_Aaron%20Cox.png)

New - altered - parts shown in orange here.
![ASLTJBot internal](/Images/Two_arms_TJBot_internal.png)

You’ll need to be careful with your cables, so that the arm does not swing into them! The arm will swing in front of the cable exit so users will have to watch their HDMI cable - keep it elevated - so that the arm can clear it.
![ASLTJBot right side](/Images/Two_arms_TJBot_right_side.png)

# STL files - tx to Aaron Cox
[link to STL files](https://github.com/fmanclossi/TwoArms_MultipleLEDsInChain/blob/master/TJbotFullTwoArms_20180505.zip)


# License  
This project uses the [Apache License Version 2.0](LICENSE) software license.  
