
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

var interval;
for(var i=0;i<navMenuAnchorTags.length; i++)
{
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        // console.log(targetSection);
    //     var interval = setInterval(function(){
    //         var targetSectionCoordinates = targetSection.getBoundingClientRect();
    //         if(targetSectionCoordinates.y<=0)
    //         {
    //             clearInterval(interval);
    //             return;
    //         }
    //         // targetSectionCoordinates.top-=50;
    //         window.scrollBy(0,50);
    //     }, 20);

    // });

    // we can use above commented piece of code in place of below code

    interval = setInterval(scrollFunction, 20, targetSection);
    });

    // or we can also use thebelow code

    //     interval = setInterval(function(){
    //         scrollFunction(targetSection)
    //     }, 20);

    // });
}

function scrollFunction(targetSection){

    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.y<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);

};

var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-percentage");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 10);

}

// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);

