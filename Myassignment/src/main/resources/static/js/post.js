document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('search-input');
    var postTitles = document.querySelectorAll('.post-title');
    var postContents = document.querySelectorAll('.post-content-text, .post-content-no-video-text');
    var postContainer = document.getElementById('postContainer')

    searchInput.addEventListener('input', function() {
        var searchValue = searchInput.value.trim();

        postTitles.forEach(function(title) {
            var postTitleText = title.innerText.toLowerCase();

            title.innerHTML = '';
            for (var i = 0; i < postTitleText.length; i++) {
                var letter = postTitleText[i];

                var span = document.createElement('span');
                span.textContent = letter;

                if (searchValue.includes(letter)) {
                    span.style.color = '#FA4033';
                } else {
                    span.style.color = '#285094';
                }

                title.appendChild(span);
            }
        });
    });

    fetch('/api/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(posts => {
            renderPosts(posts);

        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

    function renderPosts(posts) {
        posts.forEach(post => {
            const postElement = createPostElement(post);
            postContainer.appendChild(postElement);
        });
    }

    function formatPostTime(timestamp) {
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString('zh-CN', options);
    }

    function formatPostTime2(timestamp) {
        const date = new Date(timestamp);
        const options = { month: 'short', day: 'numeric' }; // 仅包含月份和日期
        return date.toLocaleDateString('zh-CN', options);
    }



    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', post.videoUrl);
        imageElement.classList.add('video-block');
        if (post.videoUrl) {
            postElement.classList.add('post-content');
            postElement.appendChild(imageElement);
        } else {
            postElement.classList.add('post-content-no-video');
        }

        const titleElement = document.createElement('h2');
        titleElement.classList.add('post-title');
        titleElement.textContent = post.title;

        // const contentElement = document.createElement('div');
        // contentElement.classList.add(post.videoUrl ? 'post-content-text' : 'post-content-no-video-text'); // 根据视频内容添加不同的类
        // contentElement.textContent = post.content;

        const contentElement = document.createElement('pre');
        contentElement.classList.add(post.videoUrl ? 'post-content-text' : 'post-content-no-video-text');
        contentElement.textContent = post.content;


        const expandButton = document.createElement('button');
        expandButton.classList.add('expand-button');
        expandButton.textContent = '阅读全文';

        // 创建头像元素
        const postAvatar = document.createElement('img');
        postAvatar.src = 'images/14.png';
        postAvatar.classList.add('avatar');

        const postNickname = document.createElement('div');
        postNickname.classList.add('nickname');
        postNickname.innerText = post.nickName;


        const postTime = document.createElement('div');
        postTime.classList.add('post-time');
        const formattedTime = formatPostTime(post.postTime);
        postTime.textContent = `编辑于 ${formattedTime}`;

        const anotherImages = document.createElement('img');
        anotherImages.src = 'images/16.png';
        anotherImages.classList.add('post-another-images');

        const postContentTime = document.createElement('div');
        postContentTime.classList.add('post-content-time');
        const formattedTime2 = formatPostTime2(post.postTime);
        postContentTime.textContent = `${formattedTime2}`;
        postElement.appendChild(postContentTime);

        expandButton.addEventListener('click', function () {
            var maxLines = contentElement.classList.contains('post-content-text') ? 3 : 2;
            var lineHeight = parseFloat(window.getComputedStyle(contentElement).lineHeight);
            var maxHeight = maxLines * lineHeight;

            if (contentElement.style.maxHeight === 'none') {
                contentElement.style.maxHeight = 1.5 * maxHeight + 'px';
                expandButton.innerText = '阅读全文';
                if(post.videoUrl){
                    postElement.classList.add('post-content');
                    postElement.classList.remove('post-content-new');
                    contentElement.classList.add('post-content-text');
                    contentElement.classList.remove('post-content-text-new');
                    imageElement.classList.add('video-block');
                    imageElement.classList.remove('video-block-new');
                    postElement.style.height = '231px';
                    postElement.removeChild(postAvatar);
                    postElement.removeChild(postNickname);
                    postElement.removeChild(postTime);
                    postElement.removeChild(anotherImages);
                    postElement.appendChild(postContentTime);
                }
                else {
                    postElement.classList.add('post-content-no-video');
                    postElement.classList.remove('post-content-no-video-new');
                    contentElement.classList.add('post-content-no-video-text');
                    contentElement.classList.remove('post-content-no-video-text-new');
                    postElement.style.height = '168px';
                    postElement.removeChild(postAvatar);
                    postElement.removeChild(postNickname);
                    postElement.removeChild(postTime);
                    postElement.removeChild(anotherImages);
                    postElement.appendChild(postContentTime);
                }


            } else {
                contentElement.style.maxHeight = 'none';
                expandButton.innerText = '收起';
                if(post.videoUrl){
                    postElement.classList.remove('post-content')
                    postElement.classList.add('post-content-new');
                    contentElement.classList.add('post-content-text-new');
                    contentElement.classList.remove('post-content-text');
                    imageElement.classList.add('video-block-new');
                    imageElement.classList.remove('video-block');
                    const postContentNoVideoNewHeight = contentElement.clientHeight;
                    const newTopValue = postContentNoVideoNewHeight + 385;
                    postElement.style.height = `${newTopValue}px`;
                    postElement.appendChild(postAvatar);
                    postElement.appendChild(postNickname);
                    postElement.appendChild(postTime);
                    postElement.appendChild(anotherImages);
                    postElement.removeChild(postContentTime);
                }
                else {
                    postElement.classList.remove('post-content-no-video');
                    postElement.classList.add('post-content-no-video-new');
                    contentElement.classList.add('post-content-no-video-text-new');
                    contentElement.classList.remove('post-content-no-video-text');
                    const postContentNoVideoNewHeight = contentElement.clientHeight;
                    const newTopValue = postContentNoVideoNewHeight + 280;
                    postElement.style.height = `${newTopValue}px`;
                    postElement.appendChild(postAvatar);
                    postElement.appendChild(postNickname);
                    postElement.appendChild(postTime);
                    postElement.appendChild(anotherImages);
                    postElement.removeChild(postContentTime);

                }

            }


            // 重新判断是否需要显示展开按钮
            if (contentElement.scrollHeight > maxHeight) {
                expandButton.style.display = 'block';
            } else {
                expandButton.style.display = 'none';
            }
        });

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');

        const notLikeButton = document.createElement('button');
        notLikeButton.classList.add('not-like-button');

        const notLikeIcon = document.createElement('img');
        notLikeIcon.src = 'images/11.png'
        notLikeIcon.classList.add('not-like-icon');

        notLikeButton.appendChild(notLikeIcon)
        postElement.appendChild(notLikeButton)

        // 调用获取赞同数的函数
        fetchLikesCount(post.postId);

        function fetchLikesCount(postId) {
            // 发送 GET 请求
            fetch(`/api/posts/${postId}/likes`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // 在页面上显示帖子的赞同数
                    const likeText = document.createElement('span');
                    likeText.innerText = `赞同 ${post.likesCount}`;
                    const likeIcon = document.createElement('img');
                    likeIcon.src = 'images/10.png';

                    // 清空按钮内的内容
                    while (likeButton.firstChild) {
                        likeButton.removeChild(likeButton.firstChild);
                    }

                    // 添加图像和文本到按钮中
                    likeButton.appendChild(likeIcon);
                    likeButton.appendChild(likeText);
                })
                .catch(error => {
                    console.error('Error fetching likes count:', error);
                });
        }


        const commentIcon = document.createElement('img');
        commentIcon.src = 'images/12.png'
        commentIcon.classList.add('comment-icon');

        const commentCountButton = document.createElement("button");
        commentCountButton.classList.add("comment-count-button");
        commentCountButton.setAttribute("id", "comment-count-button");


            // 异步获取评论计数
            fetchCommentCount(post.postId);


        function fetchCommentCount(postId) {
            // 向后端发送 GET 请求
            fetch(`/api/posts/${postId}/comments`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    commentCountButton.textContent = `${data} 条评论`;

                    commentCountButton.addEventListener('click', function () {
                        var existingPopup = document.querySelector('.comments-popup');
                        if (existingPopup) {
                            return; // 如果存在弹窗，则不执行后续代码
                        }

                        const overlay = document.createElement('div');
                        overlay.classList.add('comments-overlay');
                        document.body.appendChild(overlay);

                        // 创建弹窗
                        const popup = document.createElement('div');
                        popup.classList.add('comments-popup');
                        document.body.appendChild(popup);

                        // 创建关闭按钮
                        const closeButton = document.createElement('button');
                        // closeButton.textContent = 'X';
                        closeButton.classList.add('comments-close-button');

                        // 点击关闭按钮关闭弹窗和遮罩层
                        closeButton.addEventListener('click', function () {
                            document.body.removeChild(popup);
                            document.body.removeChild(overlay);
                        });

                        const timeSortButton = document.createElement("button");
                        timeSortButton.classList.add('time-sort-button');
                        timeSortButton.textContent = "切换为时间排序";

                        const timeSortIcon = document.createElement("img");
                        timeSortIcon.classList.add('time-sort-icon');
                        timeSortIcon.src = "images/13.png";

                        const commentsCount = document.createElement('div');
                        commentsCount.classList.add('comments-count');
                        commentsCount.textContent = `${data} 条评论`;

                        const commentsContainer = document.createElement('div');
                        commentsContainer.classList.add('comments-container');

                        // 调用 fetchCommentsByPostId 方法获取评论
                        fetchCommentsByPostId(postId).then(comments => {
                            comments.forEach(comment => {
                                // 创建评论元素
                                const commentElement = document.createElement('div');
                                commentElement.classList.add('comment');


                                // 创建头像元素
                                const avatarElement = document.createElement('img');
                                avatarElement.src = 'images/14.png';
                                avatarElement.classList.add('comment-avatar');
                                commentElement.appendChild(avatarElement);

                                // 创建昵称元素
                                const nicknameElement = document.createElement('div');
                                nicknameElement.textContent = comment.commenterName;
                                nicknameElement.classList.add('comment-nickname');
                                commentElement.appendChild(nicknameElement);

                                // 创建评论内容元素
                                const contentElement = document.createElement('div');
                                contentElement.textContent = comment.commentContent;
                                contentElement.classList.add('comment-content');
                                commentElement.appendChild(contentElement);

                                // 创建评论时间元素
                                const timeElement = document.createElement('div');
                                // 将评论时间字符串转换为日期对象
                                const commentDate = new Date(comment.commentTime);
                                // 获取月份和日期部分，并使用字符串拼接显示
                                const month = commentDate.getMonth() + 1; // 月份是从0开始的，所以要加1
                                const date = commentDate.getDate();
                                timeElement.textContent = `${month}-${date}`;
                                timeElement.classList.add('comment-time'); // 添加评论时间的类名
                                commentElement.appendChild(timeElement);


                                const  commentLikeIcon = document.createElement('img');
                                commentLikeIcon.src = 'images/15.png';

                                if(comment.commentImageUrl){
                                    commentLikeIcon.classList.add('comment-image-like-icon');
                                }
                                else {
                                    commentLikeIcon.classList.add('comment-like-icon');
                                }
                                commentElement.appendChild(commentLikeIcon);
                                // 创建图片元素
                                if (comment.commentImageUrl) {
                                    const imageElement = document.createElement('img');
                                    imageElement.src = comment.commentImageUrl;
                                    imageElement.classList.add('comment-image');
                                    commentElement.appendChild(imageElement);
                                }

                                // 将评论元素添加到评论容器中
                                commentsContainer.appendChild(commentElement);

                            });
                        });

                        // 创建输入框的容器
                        const inputContainer = document.createElement('div');
                        inputContainer.classList.add('input-container');

                        // 创建输入框
                        const inputField = document.createElement('input');
                        inputField.setAttribute('type', 'text');
                        inputField.setAttribute('placeholder', '在此输入评论...');
                        inputField.classList.add('input-field');

                        // 将输入框添加到输入框容器中
                        inputContainer.appendChild(inputField);

                        // 将输入框容器添加到弹窗中
                        popup.appendChild(inputContainer);

                        // 创建发布按钮
                        const publishButton = document.createElement('button');
                        publishButton.textContent = '发布';
                        publishButton.classList.add('publish-button');

                        inputContainer.appendChild(publishButton);

                        const iconElement = document.createElement('img');
                        iconElement.classList.add('input-icon');
                        iconElement.src = 'images/4.png'
                        inputContainer.appendChild(iconElement);

                        // 将内容添加到弹窗中
                        popup.appendChild(commentsContainer);
                        popup.appendChild(commentsCount);
                        popup.appendChild(closeButton);
                        popup.appendChild(timeSortIcon);
                        popup.appendChild(timeSortButton);
                    });
                })
                .catch(error => {
                    console.error('Error fetching comment count:', error);
                });
        }

        function fetchCommentsByPostId(postId) {
            return fetch(`/api/comments/${postId}/comment`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(comments => {
                    return comments; // 返回评论数组
                })
                .catch(error => {
                    console.error('Error fetching comments:', error);
                    return [];
                });
        }


        postElement.appendChild(commentCountButton);
        postElement.appendChild(expandButton);
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(likeButton);
        postElement.appendChild(commentIcon);
        return postElement;
    }
});
