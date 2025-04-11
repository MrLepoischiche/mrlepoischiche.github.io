export default function CircularCursor({timers}) {
    return (
        <div id="circular-cursor"
            onMouseMove={(e) => {
                const CIRCULAR_CURSOR = document.getElementById("circular-cursor");
                let circleSize = Number(CIRCULAR_CURSOR.style.width.slice(0, -2));
    
                CIRCULAR_CURSOR.style.opacity = '1';
                CIRCULAR_CURSOR.style.left = String(e.clientX+window.scrollX - (circleSize / 2)) + 'px';
                CIRCULAR_CURSOR.style.top = String(e.clientY+window.scrollY - (circleSize / 2)) + 'px';

                if (timers.cursorDisappearTimeout) {
                    clearTimeout(timers.cursorDisappearTimeout);
                }

                timers.cursorDisappearTimeout = setTimeout(() => {
                    timers.cursorFadeOutEffect = setInterval(
                        () => {
                            if (CIRCULAR_CURSOR.style.opacity > 0) {
                                CIRCULAR_CURSOR.style.opacity -= 0.1;
                            } else {
                                clearInterval(timers.cursorFadeOutEffect);
                            }
                        }, 25
                    );
                }, 500);
            }}
        ></div>
    );
}