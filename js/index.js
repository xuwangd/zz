

(function () {
    const img_box = document.getElementsByClassName('img_box');
    const mask_box = document.getElementsByClassName('mask_box');
    const len = mask_box.length;
    const start_btn = document.getElementsByClassName('start_btn')[0];
    const prize_text = document.getElementById('prize_text');
    const prize_img = document.getElementById('prize_img');
    const result_mask = document.getElementsByClassName('result_mask')[0];
    const btn = document.getElementById('btn');
    let index = Math.floor( Math.random()*len );
    let resultIndex;
    const range = [
        {
            from:0,
            to:5,//6%
            text:'一等奖',
            image:'',
        },
        {
            from:6,
            to:15,//10%
            text:'二等奖',
            image:'',
        },
        {
            from:16,
            to:35,//20%
            text:'三等奖',
            image:'',
        },
        {
            from:36,
            to:100,//64%
            text:'噢，没中奖',
            image:'',
        },
    ];
    let timmer_01;
    let timmer_02;

    function initData() {
        mask_box[index].style.display = 'none';
        index = Math.floor( Math.random()*len );
        mask_box[index].style.display = 'block';
    }


    function result() { 
        resultIndex = Math.floor( Math.random()*101 );
        range.some((item, key)=>{
            if( item.from <= resultIndex && resultIndex <= item.to ){
                resultIndex = key;
                return true;
            }
        })
        prize_text.innerText = range[resultIndex].text;
        prize_img.src = img_box[index].getElementsByTagName('img')[0].src;
        result_mask.style.display = 'block';
    }

    function move() {
        clearInterval(timmer_01)
        clearInterval(timmer_02)
        timmer_01 = setInterval(() => {
            initData()
        }, 200)

        timmer_02 = setTimeout(()=>{
            result()
            clearInterval(timmer_01)
            clearInterval(timmer_02)
        }, 3000)
    }

    start_btn.onclick = function () {
        this.style.display = 'none';
        move()
    }
    btn.onclick = function () {
        result_mask.style.display = 'none';
        move()
    }
}())

