const _0x8b0406=_0x3d67;function _0x3d67(_0x2d7680,_0x359e18){const _0x5a6328=_0x5a63();return _0x3d67=function(_0x3d67bf,_0x4668ec){_0x3d67bf=_0x3d67bf-0x1a8;let _0x16e98c=_0x5a6328[_0x3d67bf];return _0x16e98c;},_0x3d67(_0x2d7680,_0x359e18);}(function(_0x5b82b7,_0x3cdf5e){const _0x372dc1=_0x3d67,_0x164dd5=_0x5b82b7();while(!![]){try{const _0x596c04=-parseInt(_0x372dc1(0x1b5))/0x1*(-parseInt(_0x372dc1(0x1ab))/0x2)+-parseInt(_0x372dc1(0x1bf))/0x3+parseInt(_0x372dc1(0x1af))/0x4*(parseInt(_0x372dc1(0x1a8))/0x5)+parseInt(_0x372dc1(0x1ac))/0x6+parseInt(_0x372dc1(0x1bc))/0x7+parseInt(_0x372dc1(0x1aa))/0x8*(-parseInt(_0x372dc1(0x1b2))/0x9)+-parseInt(_0x372dc1(0x1b4))/0xa;if(_0x596c04===_0x3cdf5e)break;else _0x164dd5['push'](_0x164dd5['shift']());}catch(_0x433ee){_0x164dd5['push'](_0x164dd5['shift']());}}}(_0x5a63,0x4318c),document['getElementById']('loginButton')[_0x8b0406(0x1b8)](_0x8b0406(0x1ae),function(){const _0x297807=_0x8b0406,_0x4df89d=document['getElementById'](_0x297807(0x1b3))['value'][_0x297807(0x1bb)]()[_0x297807(0x1b9)](),_0x20e6cf=[_0x297807(0x1b1)];_0x20e6cf[_0x297807(0x1bd)](_0x4df89d)?(console[_0x297807(0x1b7)]('Activation\x20key\x20is\x20valid.\x20Displaying\x20main\x20page.'),document[_0x297807(0x1b6)](_0x297807(0x1c1))[_0x297807(0x1b0)][_0x297807(0x1a9)]=_0x297807(0x1ad),document[_0x297807(0x1b6)](_0x297807(0x1be))[_0x297807(0x1b0)][_0x297807(0x1a9)]=_0x297807(0x1c0)):(console[_0x297807(0x1b7)](_0x297807(0x1ba)),alert(_0x297807(0x1ba)));}));function _0x5a63(){const _0xb54fea=['20368nSxFhJ','style','power-family','60057zXQRHO','activationKey','90580zWDKVD','7LPtEuW','getElementById','log','addEventListener','toLowerCase','Invalid\x20activation\x20key.','trim','775313YfQSlp','includes','main-page','675849YPZeDE','flex','login-page','195Ksrdlf','display','152GOcqiU','14642LYjlsD','1652172soyBfX','none','click'];_0x5a63=function(){return _0xb54fea;};return _0x5a63();}

document.getElementById('startButton').addEventListener('click', function() {
  const inputElement = document.getElementById('inputNumber');
  const inputValue = inputElement.value.trim();
  if (!inputValue || isNaN(inputValue)) {
    alert('Please enter a valid number.');
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: clickTargetElement,
      args: [parseInt(inputValue)] 
    });
  });
});

// /html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div[2]/div/div/div[4]/div/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[13]/div/div/div[5]/div/div/div[2]/div[3]/div[13]/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div/div/span[1]/span/a
// 
// 
function clickTargetElement(inputValue) {

  window.scrollTo(0, document.body.scrollHeight);

  let allLinks = []; 

  const primaryXPath = (index) => `/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div[2]/div/div/div[4]/div/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[13]/div/div/div[5]/div/div/div[2]/div[3]/div[${index}]/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div/div/span[1]/span/a`;
  const secondaryXPath = (index) => `/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/div[3]/div[${index}]/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div/div/span/span/a`;
  
  const tertiaryXPath = (index) => `/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/div[3]/div[${index}]/div/div/div/div[1]/div[2]/div[2]/div[1]/div[1]/div/div/span/a`;
  const tertiaryXPath4 = (index) => `/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/div[3]/div[${index}]/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div/div/span/a`;


  for (let i = 0; i <= inputValue; i++) {
    let elementFound = false; 

    const resultPrimary = document.evaluate(primaryXPath(i), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (resultPrimary.snapshotLength > 0) {
      const element = resultPrimary.snapshotItem(0); 
      const href = element.getAttribute('href');
      processHref(href); 
      elementFound = true; 
    } else {
      console.log(`Primary XPath element at index ${i} not found or no href attribute`); 
    }

    if (!elementFound) {
      const resultSecondary = document.evaluate(secondaryXPath(i), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      if (resultSecondary.snapshotLength > 0) {
        const element = resultSecondary.snapshotItem(0); 
        const href = element.getAttribute('href'); 
        processHref(href); 
        elementFound = true; 
        console.log(`Secondary XPath element at index ${i} not found or no href attribute`); 
      }
    }

    if (!elementFound) {
      const resultTertiary = document.evaluate(tertiaryXPath(i), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      if (resultTertiary.snapshotLength > 0) {
        const element = resultTertiary.snapshotItem(0); 
        const href = element.getAttribute('href'); 
        processHref(href); 
        elementFound = true; 
      } else {
        console.log(`Tertiary XPath element at index ${i} not found or no href attribute`); 
      }
    }


    if (!elementFound) {
      const resultTertiary = document.evaluate(tertiaryXPath4(i), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      if (resultTertiary.snapshotLength > 0) {
        const element = resultTertiary.snapshotItem(0); 
        const href = element.getAttribute('href'); 
        processHref(href); 
        elementFound = true; 
      } else {
        console.log(`Tertiary XPath element at index ${i} not found or no href attribute`); 
      }
    }


  }




  if (allLinks.length === 0) {
    alert("Please go to the post first"); 
  } else {
    const content = allLinks.join('\n'); 
    const blob = new Blob([content], { type: 'text/plain' }); 
    const url = URL.createObjectURL(blob); 
    const a = document.createElement('a');
    a.href = url; 
    a.download = 'comments-id.txt'; 
    document.body.appendChild(a); 
    a.click(); 
    document.body.removeChild(a); 
    URL.revokeObjectURL(url); 
  }

  function processHref(href) {
    if (href) {
      let value; 
      if (href.includes('/user/')) {
        value = href.split('/user/')[1].split('/')[0]; 
      } else if (href.includes('https://www.facebook.com/')) {
        const profileMatch = href.match(/profile\.php\?id=(\d+)/); 
        if (profileMatch) {
          value = profileMatch[1]; 
        } else {
          const facebookMatch = href.match(/https:\/\/www\.facebook\.com\/([^\/]+)/); 
          if (facebookMatch) {
            value = facebookMatch[1].split('?')[0]; 
          }
        }
      }

      if (value) {
        allLinks.push(value); 
        console.log(`Extracted value:`, value); 
      } else {
        console.log(`No valid value found for link`); 
      }
    }
  }




  
  
}