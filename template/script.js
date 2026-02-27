(() => {
    const input = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const outputZone = document.getElementById('outputZone');
    const btnReverse = document.getElementById('btnReverse');
    const btnCopy = document.getElementById('btnCopy');
    const charCount = document.getElementById('charCount');

    let typingTimeout = null;
    let currentAnimFrame = null;
    let lastReversed = '';

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function updateCharCount(len) {
        charCount.textContent = `${len} char${len !== 1 ? 's' : ''}`;
        charCount.classList.toggle('active', len > 3);
    }

    function toggleButton(btn, show) {
        btn.classList.toggle('visible', show);
    }

    function animateTyping(text, callback) {
        if (currentAnimFrame) cancelAnimationFrame(currentAnimFrame);

        outputText.textContent = '';
        let cursor = document.createElement('span');
        cursor.className = 'cursor-blink';
        outputZone.appendChild(cursor);

        let i = 0;
        const speed = Math.max(20, 120 - text.length * 2);

        function typeChar() {
            if (i < text.length) {
                outputText.textContent += text[i];
                i++;
                currentAnimFrame = setTimeout(typeChar, speed);
            } else {
                if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
                if (callback) callback();
            }
        }

        typeChar();
    }

    function handleInput() {
        const value = input.value;
        const len = value.length;

        updateCharCount(len);
        toggleButton(btnReverse, len > 3);

        if (len === 0) {
            clearOutput();
            return;
        }

        const reversed = reverseString(value);
        lastReversed = reversed;

        if (typingTimeout) clearTimeout(typingTimeout);
        if (currentAnimFrame) {
            clearTimeout(currentAnimFrame);
            currentAnimFrame = null;
        }

        // Remove any leftover cursor
        const cursors = outputZone.querySelectorAll('.cursor-blink');
        cursors.forEach(c => c.remove());

        // Small delay to simulate "thinking"
        outputText.textContent = '';
        let cursor = document.createElement('span');
        cursor.className = 'cursor-blink';
        outputZone.appendChild(cursor);

        typingTimeout = setTimeout(() => {
            if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
            animateTyping(reversed, () => {
                toggleButton(btnCopy, reversed.length > 0);
            });
        }, 200);
    }

    function clearOutput() {
        if (typingTimeout) clearTimeout(typingTimeout);
        if (currentAnimFrame) {
            clearTimeout(currentAnimFrame);
            currentAnimFrame = null;
        }
        outputText.textContent = '';
        lastReversed = '';
        const cursors = outputZone.querySelectorAll('.cursor-blink');
        cursors.forEach(c => c.remove());
        toggleButton(btnCopy, false);
    }

    function handleReverse() {
        const value = input.value;
        if (value.length <= 3) return;

        const reversed = reverseString(value);
        lastReversed = reversed;

        if (typingTimeout) clearTimeout(typingTimeout);
        if (currentAnimFrame) {
            clearTimeout(currentAnimFrame);
            currentAnimFrame = null;
        }
        const cursors = outputZone.querySelectorAll('.cursor-blink');
        cursors.forEach(c => c.remove());
        outputText.textContent = '';

        animateTyping(reversed, () => {
            toggleButton(btnCopy, true);
        });

        input.focus();
    }

    function handleCopy() {
        if (!lastReversed) return;

        navigator.clipboard.writeText(lastReversed).then(() => {
            btnCopy.classList.add('copied');
            btnCopy.textContent = 'Copied!';
            setTimeout(() => {
                btnCopy.classList.remove('copied');
                btnCopy.textContent = 'Copy';
            }, 1500);
        });

        input.focus();
    }

    // Event listeners
    input.addEventListener('input', handleInput);
    btnReverse.addEventListener('click', handleReverse);
    btnCopy.addEventListener('click', handleCopy);
})();
