/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TJBot = require('tjbot');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['led', 'leftArm', 'rightArm'];

// instantiate our TJBot!
var tj = new TJBot(hardware, {log: {level: 'debug'}}, {});

tj.shine('orange');
tj.waveArms();
tj.sleep(500);
tj.shine('blue');
tj.leftArmBack();
tj.rightArmBack();
tj.sleep(500);
tj.shine('green');
tj.raiseRightArm();
tj.raiseLeftArm();
tj.sleep(500);
tj.shine('red');
tj.lowerLeftArm();
tj.lowerRightArm();
tj.sleep(500);
tj.shine('violet');
tj.sleep(500);
tj.shine('off');

