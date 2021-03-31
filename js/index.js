

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
    let resultIndex
    const range = [
        {
            from:0,
            to:1,//0%
            text:'一等奖',
            image:'',
        },
        {
            from:2,
            to:4,//1%
            text:'二等奖',
            image:'',
        },
        {
            from:5,
            to:8,//1%
            text:'三等奖',
            image:'',
        },
        { 
            from:9,
            to:100,
            text:'好好学习天天向上',
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


    function result(min,max) {
        resultIndex = Number.parseInt( Math.random()*(max - min) + min );
        resultItem = range.find((item,key)=>{
          if( item.from <= resultIndex && resultIndex <= item.to ){
              return true;
          }
          return false;
        })
        const { text } = resultItem || {}
        prize_text.innerText = text;
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
            result(0,100)
            clearInterval(timmer_01)
            clearInterval(timmer_02)
        }, 1000)
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

