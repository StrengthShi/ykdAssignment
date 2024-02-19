package com.zhihu.myassignment.model;

import java.time.LocalDateTime;
import java.util.List;

public class Post {

    private Long postId;
    private String title;
    private String content;
    private String videoUrl;
    private int likesCount;
    private LocalDateTime postTime;
    private String nickName;

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nikeName) {
        this.nickName = nikeName;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }

    private int commentCount;
    private List<Comment> comments;

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public Post() {
    }

    public Post(Long postId, String title, String content, String videoUrl, int likesCount, LocalDateTime postTime, String nickName, int commentCount, List<Comment> comments) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.videoUrl = videoUrl;
        this.likesCount = likesCount;
        this.postTime = postTime;
        this.nickName = nickName;
        this.commentCount = commentCount;
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", videoUrl='" + videoUrl + '\'' +
                ", likesCount=" + likesCount +
                ", postTime=" + postTime +
                ", nickName='" + nickName + '\'' +
                ", commentCount=" + commentCount +
                ", comments=" + comments +
                '}';
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public int getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(int likesCount) {
        this.likesCount = likesCount;
    }

    public LocalDateTime getPostTime() {
        return postTime;
    }

    public void setPostTime(LocalDateTime postTime) {
        this.postTime = postTime;
    }
}
