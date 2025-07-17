document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter-text');
    
    // The exact phrase to be typed and looped.
    const fullPhrase = "Hey Everyone!<br>I'm Priyanshu";
    
    let charIndex = 0;   // Tracks the current character within the phrase
    const typingSpeed = 75; // Speed for typing characters (lower = faster)
    const pauseAfterTyping = 1500; // Pause duration after typing the full phrase (in ms)
    const deletingSpeed = 50;   // Speed of deleting characters (in ms)
    const pauseBeforeRetype = 500; // Pause after deleting, before re-typing

    function typeWriter() {
        if (charIndex < fullPhrase.length) {
            // Check for the line break tag
            if (fullPhrase.substring(charIndex, charIndex + 4) === '<br>') {
                textElement.innerHTML += '<br>';
                charIndex += 4; // Skip '<br>'
                // No extra pause here, keeps the flow continuous after line break
                setTimeout(typeWriter, typingSpeed); 
            } else {
                textElement.innerHTML += fullPhrase.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            }
        } else {
            // After the entire phrase is typed, wait, then start deleting
            setTimeout(deleteWriter, pauseAfterTyping);
        }
    }

    function deleteWriter() {
        if (charIndex > 0) {
            // Check for and delete the line break tag
            if (fullPhrase.substring(charIndex - 4, charIndex) === '<br>') {
                textElement.innerHTML = textElement.innerHTML.slice(0, -4);
                charIndex -= 4;
            } else {
                textElement.innerHTML = textElement.innerHTML.slice(0, -1); // Delete the last character
                charIndex--;
            }
            setTimeout(deleteWriter, deletingSpeed);
        } else {
            // After deleting the whole phrase, wait, then start re-typing it
            setTimeout(typeWriter, pauseBeforeRetype); 
        }
    }

    typeWriter(); // Initiate the typing animation
});