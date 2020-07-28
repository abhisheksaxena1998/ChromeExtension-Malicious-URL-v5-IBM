

chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;
    theUrl="https://mudvfinalradar.eu-gb.cf.appdomain.cloud/api?query="+url;
    theUrl2="https://mudvfinalradar.eu-gb.cf.appdomain.cloud/result?url="+url;
    //console.log(url);
    //alert ("Hello")
  
    if (url!="chrome://newtab/")
    {
        fetch(theUrl2)

        //console.log("Script Started");
        var obj;

        fetch(theUrl)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                obj = myJson;
                //alert(obj.malware)
                if (obj.malware == true)
                {
                    function show() {
  
                        new Notification("Phishing Detected !!", {
                          icon: 'cyber.gif',
                          body: 'Malicious URL Detector Keeps you safe online\nClick to see detailed tracking information 🤓\n (Detailed information will not pop if you clicked OK)'
                        }).onclick = (e) => {
                          window.open(theUrl2);
                      }

                      
                     };
                      
                      
                      
                      // Conditionally initialize the options.
                      if (!localStorage.isInitialized) {
                        localStorage.isActivated = true;   // The display activation.
                        localStorage.frequency = 5;        // The display frequency, in minutes.
                        localStorage.isInitialized = true; // The option initialization.
                      }
                      
                      // Test for notification support.
                      if (window.Notification) {
                        // While activated, show notifications at the display frequency.
                        if (JSON.parse(localStorage.isActivated)) { show(); }
                      
                        
                      }
                      
                    alert("Malicious URL Detected !! \n"+url);
                    if (window.confirm("Do you want to leave this unsafe site? \n\nThis site is not safe!!")) { 
                        window.open("https://www.google.com/", "You have been re-directed to a safe site!!");
                      }
                }

            });
        //console.log(obj);

        
        
    }
    

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.runtime.reload();
    });
});







