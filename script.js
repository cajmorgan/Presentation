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
    document.querySelector('.slideOne').style.opacity= "0";
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
