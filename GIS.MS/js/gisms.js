window.onload = function() {
    {
        var bgImg = document.getElementsByClassName('bgImg')[0];
        var fgImg = document.getElementsByClassName('figure')[0];
        var barGadget = document.getElementsByClassName('barGadget')[0];
        var preE, currentE;
        var movementX = 0,
            movementY = 0,
            movementBoth = 0;
        document.documentElement.addEventListener('mousemove', function(e) {
            bgImg.style.transform = 'scale(1.1)' + 'rotateY(' + (e.x - parseInt(getComputedStyle(document.documentElement, null).width) / 2) / 80 + 'deg) ' + 'rotateX(' + (-(e.y - document.documentElement.clientHeight / 2) / 40) + 'deg)';
            fgImg.style.transform = 'scale(1.1)' + 'rotateY(' + (e.x - parseInt(getComputedStyle(document.documentElement, null).width) / 2) / 180 + 'deg) ' + 'rotateX(' + (-(e.y - document.documentElement.clientHeight / 2) / 120) + 'deg)';
            currentE = e;
        }, false);

        // 获取速度，currentE是html的e,preE是0.1s之前的html的e
        setInterval(() => {
            if (preE && currentE) {
                movementX = Math.abs(currentE.screenX - preE.screenX);
                movementY = Math.abs(currentE.screenY - preE.screenY);
                movementBoth = Math.sqrt(Math.pow(movementX, 2) + Math.pow(movementY, 2));
            }
            preE = currentE;
        }, 100);
    }

    {
        //设置小标题闪烁
        let sTitle = document.getElementsByClassName('sTitle')[0];
        let op = 0.9;
        setTimeout(() => {
            // sTitle.style.display = 'block';
            setInterval(() => {
                switch (op) {
                    case 0.9:
                        sTitle.style.opacity = 1;
                        op = 1;
                        break;
                    case 0.8:
                        sTitle.style.opacity = 0.9;
                        op = 0.9;
                        break;
                    case 1:
                        sTitle.style.opacity = 0.8;
                        op = 0.8;
                        break;
                }
            }, 100);
        }, 500);
    }

    {
        // 设置地图闪烁
        let sMap = document.getElementsByClassName('map')[0];
        let op = 0.9;
        setTimeout(() => {
            // sTitle.style.display = 'block';
            setInterval(() => {
                switch (op) {
                    case 0.9:
                        sMap.style.opacity = 0.8;
                        op = 0.8;
                        break;
                    case 0.8:
                        sMap.style.opacity = 0.9;
                        op = 0.9;
                        break;
                }
            }, 100);
        }, 500);
    }
}