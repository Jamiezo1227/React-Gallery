'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

// 获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function getImagesURL(imagesDataArr){

    for(var i = 0,j = imagesDataArr.length ; i < j; i++ ){

        var singleImageData = imagesDataArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imagesDataArr[i] = singleImageData;

    }

    return imagesDataArr;

})(imageDatas);

var GallaryByReactApp = React.creatClass({
    
    render:function(){
        <section className = "stage">

        </section>
    }
});

React.render(<GallaryByReactApp/>,document.getElementById('content'));

module.exports = GallaryByReactApp ;
