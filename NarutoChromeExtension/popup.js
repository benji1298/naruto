// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
	//changeColor.onload = function(element) {

    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // chrome.tabs.executeScript(
      //     tabs[0].id,
      //     //{code: 'document.body.style.backgroundColor = "' + color + '";'});
      //     {code: 'document.body.innerHTML += "<img src="http://placehold.it/50x50" />";'});

    // });
    // chrome.tabs.executeScript({
    //       file: 'jquery-2.2.4.min.js'
    //     });
    // chrome.tabs.executeScript({
    //       file: 'contentScript.js'
    //     });
     
     chrome.tabs.executeScript(null,{file:'jquery-2.2.4.min.js'},function(){
     	chrome.tabs.executeScript(null,{
          file: 'contentScript.js'
        });
     });
  };

