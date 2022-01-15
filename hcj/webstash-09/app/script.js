const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopOtherAudio();
        document.getElementById(sound).play();
    });

    document.getElementById('button').appendChild(btn);

});

function stopOtherAudio() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}