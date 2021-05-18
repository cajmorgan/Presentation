function slideOne() {
    document.querySelector('.slideOne').style.display = "initial";
    setTimeout(() => {
        document.querySelector('.profilePic').style.opacity = "1";
    }, 11000)
    function setupTypewriter(t) {
        var HTML = t.innerHTML;
  
        t.innerHTML = "";
  
        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 20,
          tempTypeSpeed = 0;
  
        var type = function() {
          
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }
  
            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }
  
            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }
  
        };
  
        return {
            type: type
        };
    }
  
    var typer = document.getElementById('typewriter');
  
    typewriter = setupTypewriter(typewriter);
  
    typewriter.type();
}

function slideTwo() {
    document.querySelector('.slideOne').style.opacity = "0";
    document.querySelector('.slideTwo').style.opacity = "1";
    const current = document.querySelectorAll('.current');
    let i = 0;
    const popper = setInterval(() => {
        current[i].style.opacity = "1";
        i++;
        if(i === 4) {
            clearInterval(popper);
        }
    }, 300)
}

function slideThree() {
    document.querySelector('.slideTwo').style.opacity = "0";
    document.querySelector('.slideThree').style.opacity = "1";
    const current = document.querySelectorAll('.projImg');
    let i = 0;
    const popper = setInterval(() => {
        current[i].style.opacity = "1";
        i++;
        if(i === 4) {
            clearInterval(popper);
        }
    }, 300)
}

function slideFour() {
    document.querySelector('.slideThree').style.opacity = "0";
    document.querySelector('.slideFour').style.opacity = "1";
    const whyme = document.querySelectorAll('.whyme');
    let i = 0;
    const popper = setInterval(() => {
        whyme[i].style.opacity = "1";
        i++;
        if(i === 4) {
            clearInterval(popper);
        }
    }, 300)
}
function theEnd() {
    document.querySelector('.slideFour').style.opacity = "0";
    document.querySelector('.theEnd').style.opacity = "1";
    let color = function() {
        let value = Math.floor(Math.random() * (10 - 1) + 1);
        if(value === 1) {
            return "red";
        } else if (value === 2) {
            return "green";
        }
        else if (value === 3) {
            return "blue";
        }
        else if (value === 4) {
            return "orange";
        }
        else if (value === 5) {
            return "yellow";
        }
        else if (value === 6) {
            return "white";
        }
        else if (value === 7) {
            return "cyan";
        }
        else if (value === 8) {
            return "pink";
        }
        else if (value === 9) {
            return "purple";
        }
        else if (value === 10) {
            return "brown";
    }
    }
    
    const colorChanger = setInterval(() => {
        document.querySelector('body').style.color = `${color()}`;
    }, 300)

}
const button = document.querySelector('.clickme');
button.addEventListener('click', theEnd);