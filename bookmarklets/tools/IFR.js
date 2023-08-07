javascript:(
    function() {
        let qtd = false;
        let mzd = false;
        const ifr = document.createElement('iframe'); 
        const btnX = document.createElement('button');
        const btnMin = document.createElement('button');
        const btnMenu = document.createElement('button');
        const menu = document.createElement('div');
        const btnNC = document.createElement('button');
        const btnAB = document.createElement('button');
        const btnTC = document.createElement('button');
        const btnHF = document.createElement('button');
        const btn = document.createElement('button');
        const input = prompt('Input a link or leave blank to go search. YouTube links will be automatically converted into YouTube NC.'); 

        if (input === '') {
            ifr.src = 'https://www.google.com/';
        } else if (input.startsWith('https://www.youtube.com/watch?v=' || 'https://youtu.be/')) {
            ifr.src = checkYt(input);
        } else if (input.startsWith('http')) {
            ifr.src = input;
        } else {
            ifr.src = 'https://' + input;
        }

        function checkYt(oldYt) {
            if (oldYt.startsWith('https://www.youtube.com/watch?v=')) {
                let yt = input.split('=');
                let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
                return newYt;
            } else if (oldYt.startsWith('https://youtu.be/')) {
                let yt = input.split('/');
                let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[3];
                return newYt;
            } else {
                ifr.src = oldYt
            }
        }
        function hover(item) {
            if (item === btnX) {
                item.style.backgroundColor = '#F25022';
            } else if (item === btnNC || item === btnAB || item === btnTC || item === btnHF || item === btn) {
                item.style.backgroundColor = '#181818';
            } else {
                item.style.backgroundColor = '#0D0D0C';
            }
        }
        function unhover(item) {
            if (item === btnNC || item === btnAB || item === btnTC || item === btnHF || item === btn) {
                item.style.backgroundColor = '#121212';
            } else {
                item.style.backgroundColor = 'black';
            }
        }
        function quit() {
            ifr.remove();
            btnX.remove();
            btnMin.remove();
            btnMenu.remove();
            menu.remove();
            btnNC.remove();
            btnAB.remove();
            btnHF.remove();
            qtd = true;
        }
        function minimize() {
            if (mzd === false) {
                mzd = true;
                ifr.style.width = '0%'; 
                ifr.style.height = '0%'; 
                ifr.style.opacity = '0';
            } else {
                mzd = false;
                ifr.style.width = '100%'; 
                ifr.style.height = '100%'; 
                ifr.style.opacity = '1';
            }
        }
        function menuOpen() {
            menu.style.display = 'block';
            btnNC.style.display = 'block';
            btnAB.style.display = 'block';
            btnTC.style.display = 'block';
            btnHF.style.display = 'block';
            btn.style.display = 'block';
        }
        function menuClose() {
            menu.style.display = 'none';
            btnNC.style.display = 'none';
            btnAB.style.display = 'none';
            btnTC.style.display = 'none';
            btnHF.style.display = 'none';
            btn.style.display = 'none';
        }
        function ncYt() {
            let oldYt = prompt('Input a YouTube video link to turn into YouTube NC.');
            if (oldYt.startsWith('https://www.youtube.com/watch?v=')) {
            let yt = input.split('=');
            let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
            ifr.src = newYt;
            } else if (oldYt.startsWith('https://youtu.be/')) {
            let yt = input.split('/');
            let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[3];
            ifr.src = newYt;
            } else {
                if (oldYt != null || oldYt != '') {
                    alert('⛔ ERROR | Did you put a valid YouTube link?');
                }
            }
        }
        function embedder() {
            let site = prompt('What website do you want to embed into an about:blank page? Leave empty to search.');
            if (site === '') {
                site = 'https://www.google.com';
            }
            if (site != null) {
            const page = window.open("about:blank");  
            page.document.write('<iframe src="'+ site +'" style="width:100%;height:100%;border:none"></ifr>');
            }
        }
        function cloaker() {
            let title = prompt('What do you want to rename the tab to?');
            if (title != null || title != '') {
                document.title = title;
            }
            let favicon = prompt('Please add the image address of what you want to set the favicon to.');
            if (favicon != null | favicon != '') {
                let link = document.querySelector('link[rel~="icon"]');
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'icon';
                    document.head.appendChild(link);
                }
                link.href = favicon;
            }
        }
        function flooder() {
            let amount = prompt("History flood amount: "); 
            done = false; 
            x = window.location.href; 
            for (var i = 1; i <= amount; i++) {
                history.pushState(0, 0, i == amount?x:i.toString()); 
                if (i == amount) {
                    done = true
                }
            }
            if (done === true) {
                alert('History flood successful! "' + window.location.href + '" now appears in your history ' + amount + (amount == 1?" time.":" times. Credit to JonasFlynn for this tool."))
            }
        }
        function placeholder() {
          
        }

        ifr.style.width = '100%'; 
        ifr.style.height = '100%'; 
        ifr.style.position = 'fixed';
        ifr.style.top = '0'; 
        ifr.style.left = '0'; 
        ifr.style.zIndex = '1000'; 
        ifr.style.border = 'none'; 

        btnX.textContent = '✕';
        btnX.style.fontSize = '1.2vw';
        btnX.style.width = '2.5%'; 
        btnX.style.height = '4%'; 
        btnX.style.position = 'fixed';
        btnX.style.top = '0'; 
        btnX.style.left = '0'; 
        btnX.style.zIndex = '1001';
        btnX.style.margin = '0.25%';
        btnX.style.color = 'white';
        btnX.style.backgroundColor = 'black';
        btnX.style.border = 'none';
        btnX.style.boxShadow = '2px 2px 4px black';
        btnX.style.transitionDuration = '0.1s';
    
        btnMin.textContent = '–';
        btnMin.style.fontSize = '1.5vw';
        btnMin.style.width = '2.5%'; 
        btnMin.style.height = '4%'; 
        btnMin.style.position = 'fixed';
        btnMin.style.top = '0'; 
        btnMin.style.left = '0'; 
        btnMin.style.zIndex = '1001';
        btnMin.style.margin = '0.25%';
        btnMin.style.marginLeft = '2.7%';
        btnMin.style.color = 'white';
        btnMin.style.backgroundColor = 'black';
        btnMin.style.border = 'none';
        btnMin.style.boxShadow = '2px 2px 4px black';
        btnMin.style.transitionDuration = '0.1s';

        btnMenu.textContent = '+';
        btnMenu.style.fontSize = '1.5vw';
        btnMenu.style.width = '2.5%'; 
        btnMenu.style.height = '4%'; 
        btnMenu.style.position = 'fixed';
        btnMenu.style.top = '0';
        btnMenu.style.left = '0';
        btnMenu.style.zIndex = '1001';
        btnMenu.style.margin = '0.25%';
        btnMenu.style.marginLeft = '5.2%';
        btnMenu.style.color = 'white';
        btnMenu.style.backgroundColor = 'black';
        btnMenu.style.border = 'none';
        btnMenu.style.boxShadow = '2px 2px 4px black';
        btnMenu.style.transitionDuration = '0.1s';

        menu.style.width = '13.5%'; 
        menu.style.height = '29.3%'; 
        menu.style.position = 'fixed';
        menu.style.top = '0'; 
        menu.style.left = '0'; 
        menu.style.zIndex = '1002'; 
        menu.style.margin = '2%';
        menu.style.marginLeft = '5.3%';
        menu.style.border = 'none'; 
        menu.style.display = 'none';
        menu.style.backgroundColor = 'black';
        menu.style.transitionDuration = '0.1s';

        btnNC.textContent = 'YouTube NC';
        btnNC.style.fontFamily = 'arial';
        btnNC.style.fontSize = '1vw';
        btnNC.style.width = '7%'; 
        btnNC.style.height = '3.8%'; 
        btnNC.style.position = 'fixed';
        btnNC.style.top = '0'; 
        btnNC.style.left = '0'; 
        btnNC.style.zIndex = '1003';
        btnNC.style.margin = '2.7%';
        btnNC.style.marginLeft = '6%';
        btnNC.style.color = 'white';
        btnNC.style.backgroundColor = '#121212';
        btnNC.style.border = 'none';
        btnNC.style.display = 'none';
        btnNC.style.transitionDuration = '0.1s';

        btnAB.textContent = 'About:Blank Embedder';
        btnAB.style.fontFamily = 'arial';
        btnAB.style.fontSize = '1vw';
        btnAB.style.width = '12%'; 
        btnAB.style.height = '3.8%'; 
        btnAB.style.position = 'fixed';
        btnAB.style.top = '0'; 
        btnAB.style.left = '0'; 
        btnAB.style.zIndex = '1003';
        btnAB.style.margin = '5.3%';
        btnAB.style.marginLeft = '6%';
        btnAB.style.color = 'white';
        btnAB.style.backgroundColor = '#121212';
        btnAB.style.border = 'none';
        btnAB.style.display = 'none';
        btnAB.style.transitionDuration = '0.1s';

        btnTC.textContent = 'Tab Cloak';
        btnTC.style.fontFamily = 'arial';
        btnTC.style.fontSize = '1vw';
        btnTC.style.width = '6%'; 
        btnTC.style.height = '3.8%'; 
        btnTC.style.position = 'fixed';
        btnTC.style.top = '0'; 
        btnTC.style.left = '0'; 
        btnTC.style.zIndex = '1003';
        btnTC.style.margin = '7.9%';
        btnTC.style.marginLeft = '6%';
        btnTC.style.color = 'white';
        btnTC.style.backgroundColor = '#121212';
        btnTC.style.border = 'none';
        btnTC.style.display = 'none';
        btnTC.style.transitionDuration = '0.1s';

        btnHF.textContent = 'History Flooder';
        btnTC.style.fontFamily = 'arial';
        btnHF.style.fontSize = '1vw';
        btnHF.style.width = '8.5%'; 
        btnHF.style.height = '3.8%'; 
        btnHF.style.position = 'fixed';
        btnHF.style.top = '0'; 
        btnHF.style.left = '0'; 
        btnHF.style.zIndex = '1003';
        btnHF.style.margin = '10.5%';
        btnHF.style.marginLeft = '6%';
        btnHF.style.color = 'white';
        btnHF.style.backgroundColor = '#121212';
        btnHF.style.border = 'none';
        btnHF.style.display = 'none';
        btnHF.style.transitionDuration = '0.1s';

        btn.textContent = 'Placeholder';
        btn.style.fontFamily = 'arial';
        btn.style.fontSize = '1vw';
        btn.style.width = '7%'; 
        btn.style.height = '3.8%'; 
        btn.style.position = 'fixed';
        btn.style.top = '0'; 
        btn.style.left = '0'; 
        btn.style.zIndex = '1003';
        btn.style.margin = '13.1%';
        btn.style.marginLeft = '6%';
        btn.style.color = 'white';
        btn.style.backgroundColor = '#121212';
        btn.style.border = 'none';
        btn.style.display = 'none';
        btn.style.transitionDuration = '0.1s';

        document.body.appendChild(ifr);

        document.body.appendChild(btnX);
        btnX.onmouseover = function(){hover(btnX)};
        btnX.onmouseout = function(){unhover(btnX)};
        btnX.onclick = function(){quit()};
        
        document.body.appendChild(btnMin);
        btnMin.onmouseover = function(){hover(btnMin)};
        btnMin.onmouseout = function(){unhover(btnMin)};
        btnMin.onclick = function(){minimize()};

        document.body.appendChild(btnMenu);
        btnMenu.onmouseover = function(){hover(btnMenu)};
        btnMenu.onmouseout = function(){unhover(btnMenu)};
        btnMenu.onpointerenter = function(){menuOpen()};
        btnMenu.onpointerleave = function(){menuClose()};

        document.body.appendChild(menu);
        menu.onpointerenter = function(){menuOpen()};
        menu.onpointerleave = function(){menuClose()};

        document.body.appendChild(btnNC);
        btnNC.onclick = function(){ncYt()};
        btnNC.onpointerenter = function(){menuOpen()};
        btnNC.onpointerleave = function(){menuClose()};
        btnNC.onmouseover = function(){hover(btnNC)};
        btnNC.onmouseout = function(){unhover(btnNC)};

        document.body.appendChild(btnAB);
        btnAB.onclick = function(){embedder()};
        btnAB.onpointerenter = function(){menuOpen()};
        btnAB.onpointerleave = function(){menuClose()};
        btnAB.onmouseover = function(){hover(btnAB)};
        btnAB.onmouseout = function(){unhover(btnAB)};

        document.body.appendChild(btnTC);
        btnTC.onclick = function(){cloaker()};
        btnTC.onpointerenter = function(){menuOpen()};
        btnTC.onpointerleave = function(){menuClose()};
        btnTC.onmouseover = function(){hover(btnTC)};
        btnTC.onmouseout = function(){unhover(btnTC)};

        document.body.appendChild(btnHF);
        btnHF.onclick = function(){flooder()};
        btnHF.onpointerenter = function(){menuOpen()};
        btnHF.onpointerleave = function(){menuClose()};
        btnHF.onmouseover = function(){hover(btnHF)};
        btnHF.onmouseout = function(){unhover(btnHF)};

        document.body.appendChild(btn);
        btn.onclick = function(){placeholder()};
        btn.onpointerenter = function(){menuOpen()};
        btn.onpointerleave = function(){menuClose()};
        btn.onmouseover = function(){hover(btn)};
        btn.onmouseout = function(){unhover(btn)};

        if (qtd != true) {
            window.onbeforeunload = confirmExit;
            function confirmExit() {
                return 0;
            }
        }
    }
)();
