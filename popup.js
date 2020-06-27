

chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;
    theUrl="https://mudvfinal.eu-gb.cf.appdomain.cloud/api?query="+url;
    theUrl2="https://mudvfinal.eu-gb.cf.appdomain.cloud/result?url="+url;
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







