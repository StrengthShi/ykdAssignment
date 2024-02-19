document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function () {
        // 创建遮罩层
        var overlay = document.createElement('div');
        overlay.classList.add('custom-overlay');

        // 创建登录窗口容器
        var loginContainer = document.createElement('div');
        loginContainer.classList.add('custom-login-container');

        // 创建关闭按钮
        var closeButton = document.createElement('div');
        closeButton.classList.add('custom-close-button');

        // 关闭按钮点击事件，关闭窗口
        closeButton.addEventListener('click', function () {
            document.body.removeChild(overlay);
            document.body.removeChild(loginContainer);
        });

        // 创建密码登录文字
        var passwordLoginText = document.createElement('div');
        passwordLoginText.classList.add('custom-password-login-text');
        passwordLoginText.innerText = '密码登录';

        // 创建横线
        var line = document.createElement('div');
        line.classList.add('custom-line');

        // 创建登录窗口内容
        var loginContent = document.createElement('div');
        loginContent.classList.add('custom-login-content');

        // 创建用户名输入框
        var usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.classList.add('custom-input', 'custom-username-input');
        usernameInput.placeholder = '手机号或邮箱';

        // 创建密码输入框
        var passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.classList.add('custom-input', 'custom-password-input');
        passwordInput.placeholder = '密码';

        // 创建登录按钮
        var loginSubmitButton = document.createElement('button');
        loginSubmitButton.classList.add('custom-login-submit-button');
        loginSubmitButton.innerText = '登录/注册';

        // 登录按钮点击事件处理
        loginSubmitButton.addEventListener('click', function () {
            var username = usernameInput.value;
            var password = passwordInput.value;

            //  checkLogin 函数来验证登录
            var loginSuccessful = checkLogin(username, password);

            if (loginSuccessful) {
                alert('登录成功！');
            } else {
                alert('登录失败，请注册或检查输入信息！');
            }
        });

        var additionalText = document.createElement('div');
        additionalText.id = 'additional-text';
        additionalText.innerText = '未注册手机验证后自动登录，注册即代表同意《知乎协议》和《隐私保护政策》';

        loginContainer.appendChild(closeButton);
        loginContainer.appendChild(passwordLoginText);
        loginContainer.appendChild(line);
        loginContainer.appendChild(loginContent);
        loginContent.appendChild(usernameInput);
        loginContent.appendChild(passwordInput);
        loginContent.appendChild(loginSubmitButton);
        loginContainer.appendChild(additionalText);

        // 将遮罩层和登录窗口容器添加到 body 中
        document.body.appendChild(overlay);
        document.body.appendChild(loginContainer);

        // 遮罩层点击事件，关闭窗口
        overlay.addEventListener('click', function () {
            document.body.removeChild(overlay);
            document.body.removeChild(loginContainer);
        });
    });

    // 模拟登录验证
    function checkLogin(username, password) {
        // 假设用户名为 admin，密码为 123456
        return username === 'admin' && password === '123456';
    }
});
