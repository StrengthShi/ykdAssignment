document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('search-input');
    var dropdown = document.getElementById('dropdown');
    var userButton = document.getElementById('user-button');
    var comprehensiveButton = document.querySelector('.comprehensive-block');
    var userImageContainer = document.getElementById('user-image-container');
    var scrollToTopButton = document.getElementById('scroll-to-top');
    var postContainer = document.getElementById('postContainer')

    var searchResults = [
        '奥密克戎',
        '奥密克戎变异株ba.2进化分支',
        '奥密克戎变异株',
        '奥密克戎变异株潜伏期',
        '奥密克戎变异毒株有多厉害',
        '新手机发布',
        '《流浪地球》',
        '《1984》',
    ];

    // 搜索项为搜索数组中的第一个元素
    var defaultSearchItem = searchResults[0];
    searchInput.value = defaultSearchItem;

    // 获得焦点时显示下拉菜单
    searchInput.addEventListener('focus', function () {
        dropdown.style.display = 'block';
    });

    // 失去焦点时隐藏下拉菜单
    searchInput.addEventListener('blur', function () {
        dropdown.style.display = 'none';
    });

    searchInput.addEventListener('input', function () {
        var searchText = searchInput.value.trim();

        // 清空下拉菜单
        if(dropdown.innerHTML != ''){
            dropdown.innerHTML = '';
        }

        if (searchText !== '') {

            var firstItem = createDropdownItem(searchText, '#285094');

            // 将第一个菜单项添加到下拉菜单
            dropdown.appendChild(firstItem);

            // 创建后续的搜索项
            for (var i = 0; i < Math.min(searchResults.length, 10); i++) {
                var searchResult = searchResults[i];
                if (searchResult.toLowerCase().includes(searchText.toLowerCase())) {
                    var newItemText = searchResult;
                    var newItemColor = 'black';
                    var newItem = createDropdownItem(newItemText, newItemColor);

                    // 将后续菜单项添加到下拉菜单
                    dropdown.appendChild(newItem);
                }
            }

            // 创建查看搜索结果项
            var viewResultsItemText = '查看 [' + searchText + '] 的搜索结果';
            var viewResultsItem = createDropdownItem(viewResultsItemText, '#285094', true);

            // 将查看搜索结果添加到下拉菜单
            dropdown.appendChild(viewResultsItem);
        }
    });

    // 创建下拉菜单
    function createDropdownItem(text, color, isViewResults) {
        var item = document.createElement('div');
        item.style.width = '482px';
        item.style.height = '34px';
        item.style.background = (isViewResults) ? '#FFFFFF' : '#F4F4F4';
        item.style.borderRadius = '0px 0px 0px 0px';
        item.style.opacity = '1';
        item.style.color = color;
        item.style.lineHeight = '22px';
        item.innerText = text;

        return item;
    }

    userButton.addEventListener('click', function () {
        // 隐藏 post-container 内容，显示用户图片
        postContainer.style.display = 'none';
        userImageContainer.style.display = 'block';
    });

    comprehensiveButton.addEventListener('click', function () {
        // 显示 post-container 内容，隐藏用户图片
        postContainer.style.display = 'block';
        userImageContainer.style.display = 'none';
    });




    window.addEventListener('scroll', function () {
        // 计算1.5屏幕的高度
        var screenHeight = window.innerHeight * 0.5;

        // 如果页面滚动超过1.5屏幕高度，显示按钮
        if (window.scrollY > screenHeight) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // 点击按钮回到顶部
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
