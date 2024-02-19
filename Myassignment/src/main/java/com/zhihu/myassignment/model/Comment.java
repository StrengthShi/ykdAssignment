package com.zhihu.myassignment.model;

import java.time.LocalDateTime;

public class Comment {

    private Long commentId;
    private Long postId;
    private String commenterName;
    private String commentContent;
    private String commentImageUrl;
    private LocalDateTime commentTime;

    public Comment() {
    }

    public Comment(Long commentId, Long postId, String commenterName, String commentContent, String commentImageUrl, LocalDateTime commentTime) {
        this.commentId = commentId;
        this.postId = postId;
        this.commenterName = commenterName;
        this.commentContent = commentContent;
        this.commentImageUrl = commentImageUrl;
        this.commentTime = commentTime;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", postId=" + postId +
                ", commenterName='" + commenterName + '\'' +
                ", commentContent='" + commentContent + '\'' +
                ", commentImageUrl='" + commentImageUrl + '\'' +
                ", commentTime=" + commentTime +
                '}';
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getCommenterName() {
        return commenterName;
    }

    public void setCommenterName(String commenterName) {
        this.commenterName = commenterName;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public String getCommentImageUrl() {
        return commentImageUrl;
    }

    public void setCommentImageUrl(String commentImageUrl) {
        this.commentImageUrl = commentImageUrl;
    }

    public LocalDateTime getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(LocalDateTime commentTime) {
        this.commentTime = commentTime;
    }
}
