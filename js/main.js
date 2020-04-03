(() => {
	console.log('fired');

const  lyrics 	    = document.querySelector('.lyrics'),
       loveOpen = document.querySelector('.loveOpen'),
       loveClose = document.querySelector('.loveClose')
       trans 	    = document.querySelector('.transcript'),
       casaOpen = document.querySelector('.casaOpen'),
       casaClose = document.querySelector('.casaClose');

function openLyrics() {
	lyrics.classList.add('box-on');
}

function closeLyrics() {
    lyrics.classList.remove('box-on');
}

function openTrans() {
	trans.classList.add('show-trans');
}

function closeTrans() {
    trans.classList.remove('show-trans');
}

loveOpen.addEventListener('click', openLyrics);
loveClose.addEventListener('click', closeLyrics);
casaOpen.addEventListener('click', openTrans);
casaClose.addEventListener('click', closeTrans);

})();