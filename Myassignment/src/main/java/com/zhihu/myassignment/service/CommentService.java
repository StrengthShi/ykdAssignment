package com.zhihu.myassignment.service;

import com.zhihu.myassignment.mapper.CommentMapper;
import com.zhihu.myassignment.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentMapper commentMapper;

    @Autowired
    public CommentService(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    // 获取帖子的所有评论
    public List<Comment> getCommentsByPostId(Long postId) {
        return commentMapper.getCommentsByPostId(postId);
    }

    // 获取所有评论
    public List<Comment> getAllComments() {
        return commentMapper.getAllComments();
    }

    // 创建新评论
    public void addComment(Comment comment) {
        commentMapper.addComment(comment);
    }

    // 更新评论
    public void updateComment(Comment comment) {
        commentMapper.updateComment(comment);
    }

    // 删除评论
    public void deleteComment(Long commentId) {
        commentMapper.deleteComment(commentId);
    }
}
