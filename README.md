# TJBot Library Two Arms and Multiple LEDs in chain

> Node.js FORKED library that extends TJBot's basic capabilities with two arms and multiple LEDs support

![ASLTJBot](/ASLTJBot_2018_two_arms.gif)

Some details: 
* Edited tjbot.js adding new code without change current codes:  
- Added two additional hardware capabilities:  
    leftArm  
    rightArm  
- Added additional TJBot API (and supporting functions):  
    tj.waveArms()  
    tj.leftArmBack()  
    tj.rightArmBack()  
    tj.raiseRightArm()  
    tj.raiseLeftArm()  
    tj.lowerLeftArm()  
    tj.lowerRightArm()  
* Rewired TJBot servo motor to PIN 24 (BCM 8 )– Left Arm  
* Wired a second servo motor to PIN 22 (BCM 25) – Right Arm  
PS: Also inserted @waugh code to support multiple LEDs.  
PPSS: I'm collected a presentation about TJBot and this task is  born to support activities performed at I.I.S. Galileo Galilei di Crema (CR), a secondary state school with about 1,900 students aged 14-19 working in two fields of education: “Applied Sciences high school” and “Technological high school”.  

# License  
This project uses the [Apache License Version 2.0](LICENSE) software license.  

# 3D printing (tx to Aaron Cox)
![ASLTJBot 3D skeleton with two arms](/Images/TJBot with Two Arms skeleton.png)
![ASLTJBot 3D printed](/Images/Two_arms_TJBot_Aaron Cox.png)
![ASLTJBot internal](/Images/Two_arms_TJBot_internal.png)
![ASLTJBot right side](/Images/Two_arms_TJBot_right_side.png)

# STL files (tx to Aaron Cox)
https://github.com/fmanclossi/TwoArms_MultipleLEDsInChain/blob/master/TJBot%20parts%20for%202nd%20arm/TJBot%20parts%20for%202nd%20arm.zip
