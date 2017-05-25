/**
 * Created by Administrator on 2017/5/25 0025.
 */

//*************页面路由配置*******************/
function loadPanel() {
    var page = getHash('page');
    var curPageName = page;
    console.log(page);
    var mainbody =$('#container');
    console.log(mainbody);
    switch (page){
        case 'home':
        {
            modelPath = './pages/' + curPageName + '.js';
            break;
        }
    }

    if(isNotNull(modelPath)){
        /***********页面渲染并加载js*******************/
        seajs.use(modelPath, function(model){
            modelPage =modelPath;
            model.show({ body: mainbody });
        })
    }
}

/********url传参是不会调用hashchange  需要手动调用****************/
$(function () {
    $(window)
        .bind("hashchange", loadPanel)
        .trigger("hashchange");
});