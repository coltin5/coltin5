   //Begining of code
    
 var pwaSupport = false;

if('serviceWorker' in navigator){
    pwaSupport = true;
    //register service worker
    navigator.serviceWorker.register('/sw.js').then(function(result){
        console.log('Service Worker Registered');
        console.log("Scope: " + result.scope);
        subscribeToPush();
        /*
        if('Notification' in window){
            console.log('Notications Supported');
            Notification.requestPermission(function(status){
                console.log('Notification Permission: ', status);
            });
        }
        var options = {
            body: 'See What\'s New!',
            icon: 'android-chrome-192x192.png',
            data: {
                timestamp: Date.now(),
                loc: 'index.html#info'
            },
            actions: [
                {action: 'go', title: 'Go Now'}
            ]
        };
        notify('NCC Computer Science',options);
        */
    }, function(error){
        console.log('Service Worker Registration Failed');
        console.log(error.toString());
    });
}else{
    console.log('Service Worker Not Supported');
}
//Chrome 68+
var installEvt;
window.addEventListener('beforeinstallprompt', function(evt){
    console.log('Before Install Prompt')
    //Store the event
    installEvt = evt;
    //Prevent chrome 67 or less from automatically showing prompt
    evt.preventDefault();
    //show the install ui
    document.getElementById('addToHomeScreen').style.display = 'block';
});
/*
window.beforeinstallprompt = function(evt){
    console.log("Before Install Prompt");
    //store the event
    installEvt = evt;
    //prevent Chrome 67 or less from automatically showing prompt
    evt.preventDefault();
    //show the install ui
    document.getElementById('addToHomeScreen').style.display = 'block';
};
*/
function hidePrompt(){
    //Set the CSS display property to none
    document.getElementById('addToHomeScreen').style.display = 'none';
}

function installApp(){
    //hide the install ui
    hidePrompt();
    //show the install prompt
    installEvt.prompt();
    //wait on prompt Promise to resolve
    installEvt.userChoice.then(function(result){
        if(result.outcome === 'accepted')
            console.log('App Installed');
        else
            console.log('App Not Installed');
    });
    //clear the saved event - it can't be used again anyway
    installEvt = null;
}

//We can also listen for the appinstalled event
window.addEventListener('appinstalled', function(evt){
    //The user installed the app
    console.log('App Installed');
});
function subscribeToPush(){
    //Make sure the Service Worker is ready to subscribe
    navigator.serviceWorker.ready.then(function(reg){
        //Tell the pushManager to subscribe
        //userVisible property means no background, invisible messages
        
        reg.pushManager.subscribe({userVisibleOnly: true}).then(function(sub){
            //Write the subscription and endpoint to the console
            //Here is where you would send the endpoint back to the server
            //So you could automate messages
            console.log(JSON.stringify(sub));
            console.log("Endpoint:", sub.endpoint);
            console.log("User Subscribed");
        });
    });
}
//Function to subscribe to push messages


function notify(title, options){
    //Check if permission is granted
    if(Notification.permission === 'granted'){
        //Get the Service Worker registration object then show the notification
        navigator.serviceWorker.ready.then(function(reg){
            reg.showNotification(title, options);
        });
    }
}

/*
 * 
 * Could be
 * window.addEventListener('load',function(){
 * do stuff here
 * });
 */
window.onload = function (){
    if(pwaSupport){
        //PWAs supported
        //Get the platform
        var p = navigator.platform;
        //Determine if we are on iOS
        if(p==='iPhone' || p==='iPad' || p==='iPod'){
            //Determine if we haven't already launched from Home Screen
            //Safari-only - check the navigator.standalone property
            if(!navigator.standalone){
                //Storing the last shown date in local storage. Retrieve it.
                var lastShown = parseInt(localStorage.getItem('lastShown'));
                //Get a reference to today's date
                var now = new Date().getTime();
                //If it's the first visit or it's been a week...
                if(isNaN(lastShown) || (lastShown + (1000*60*60*24*7)) <= now){
                    //Show the instructions.
                    document.getElementById('instructions').style.display = 'block';
                    //We showed the instructions, store the date.
                    localStorage.setItem('lastShown',now);
                }
            }
        }
    }
};

function hideInstructions(){
    //Set the CSS display property to none
    document.getElementById('instructions').style.display = 'none';
}

