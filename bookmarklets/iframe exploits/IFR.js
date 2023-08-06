javascript:(
  function() {
    let quitted = false;
    const iframe = document.createElement('iframe'); 
    const quitButton = document.createElement('button');
    const ncYtButton = document.createElement('button');
    const setButton = document.createElement('button');
    const input = prompt('Input a link or leave blank to go search. YouTube links will be automatically converted into YouTube NC.'); 
    if (input === '') {
      iframe.src = 'https://you.com/';
    } else if (input.startsWith('https://www.youtube.com/watch?v=' || 'https://youtu.be/')) {
      iframe.src = ncYt1(input);
    } else if (input.startsWith('http')) {
      iframe.src = input;
    } else {
      iframe.src = 'https://' + input;
    } 
    function ncYt1(oldYt) {
      if (oldYt.startsWith('https://www.youtube.com/watch?v=')) {
        let yt = input.split('=');
        let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
        return newYt;
      } else if (oldYt.startsWith('https://youtu.be/')) {
        let yt = input.split('/');
        let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[3];
        return newYt;
      } else {
        alert('⛔ ERROR | There was an error with the YTNC1 function.');
      }
    }
    function ncYt2() {
      let oldYt = prompt('Input a YouTube video link to turn into YouTube NC.');
      if (oldYt.startsWith('https://www.youtube.com/watch?v=')) {
        let yt = input.split('=');
        let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
        iframe.src = newYt;
      } else if (oldYt.startsWith('https://youtu.be/')) {
        let yt = input.split('/');
        let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[3];
        iframe.src = newYt;
      } else {
        alert('⛔ ERROR | There was an error with the YTNC2 function.');
      }
    }
    function settings() {
      let title = prompt('What do you want to rename the tab to?');
      document.title = title;
    }
    function hover1(item) {
      item.style.backgroundColor = '#F25022';
    }
    function unhover1(item) {
      item.style.backgroundColor = '#010101';
    }
    function hover2(item) {
      item.style.backgroundColor = '#0D0D0C';
    }
    function unhover2(item) {
      item.style.backgroundColor = '#010101';
    }
    function quit() {
      iframe.remove();
      quitButton.remove();
      ncYtButton.remove();
      setButton.remove();
      quitted = true;
    }

    iframe.style.width = '100%'; 
    iframe.style.height = '100%'; 
    iframe.style.position = 'fixed';
    iframe.style.top = '0'; 
    iframe.style.left = '0'; 
    iframe.style.zIndex = '1000'; 
    iframe.style.border = 'none'; 
    document.body.appendChild(iframe);

    quitButton.textContent = '✖';
    quitButton.style.width = '2%'; 
    quitButton.style.height = '3%'; 
    quitButton.style.position = 'fixed';
    quitButton.style.top = '0'; 
    quitButton.style.left = '0'; 
    quitButton.style.zIndex = '1001';
    quitButton.style.float = 'right';
    quitButton.style.margin = '0.25%';
    quitButton.style.color = '#EDEBEA';
    quitButton.style.backgroundColor = '#010101';
    quitButton.style.border = 'none';
    quitButton.style.boxShadow = '2px 2px 4px #000000';
    quitButton.style.transitionDuration = '0.1s';
    quitButton.onmouseover = function(){hover1(quitButton)};
    quitButton.onmouseout = function(){unhover1(quitButton)};
    document.body.appendChild(quitButton);
    quitButton.onclick = function(){quit()};

    ncYtButton.textContent = '▶';
    ncYtButton.style.width = '2%'; 
    ncYtButton.style.height = '3%'; 
    ncYtButton.style.position = 'fixed';
    ncYtButton.style.top = '0'; 
    ncYtButton.style.left = '0'; 
    ncYtButton.style.zIndex = '1001';
    ncYtButton.style.float = 'right';
    ncYtButton.style.margin = '0.25%';
    ncYtButton.style.marginLeft = '2.5%';
    ncYtButton.style.color = '#EDEBEA';
    ncYtButton.style.backgroundColor = '#010101';
    ncYtButton.style.border = 'none';
    ncYtButton.style.boxShadow = '2px 2px 4px #000000';
    ncYtButton.style.transitionDuration = '0.1s';
    ncYtButton.onmouseover = function(){hover2(ncYtButton)};
    ncYtButton.onmouseout = function(){unhover2(ncYtButton)};
    document.body.appendChild(ncYtButton);
    ncYtButton.onclick = function(){ncYt2()};

    setButton.textContent = '✎';
    setButton.style.width = '2%'; 
    setButton.style.height = '3%'; 
    setButton.style.position = 'fixed';
    setButton.style.top = '0'; 
    setButton.style.left = '0'; 
    setButton.style.zIndex = '1001';
    setButton.style.float = 'right';
    setButton.style.margin = '0.25%';
    setButton.style.marginLeft = '4.75%';
    setButton.style.color = '#EDEBEA';
    setButton.style.backgroundColor = '#010101';
    setButton.style.border = 'none';
    setButton.style.boxShadow = '2px 2px 4px #000000';
    setButton.style.transitionDuration = '0.1s';
    setButton.onmouseover = function(){hover2(setButton)};
    setButton.onmouseout = function(){unhover2(setButton)};
    document.body.appendChild(setButton);
    setButton.onclick = function(){settings()};

    if (quitted = false) {
      window.onbeforeunload = confirmExit;
      function confirmExit() {
        return 'Are you sure you want to exit?';
      }
    }
  }
)();
