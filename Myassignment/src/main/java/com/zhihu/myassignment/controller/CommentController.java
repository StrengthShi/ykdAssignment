package com.zhihu.myassignment.controller;

import com.zhihu.myassignment.model.Comment;
import com.zhihu.myassignment.service.CommentService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Resource
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // 获取帖子的所有评论
    @GetMapping("/{postId}/comment")
    public List<Comment> getCommentsByPostId(@PathVariable Long postId) {
        return commentService.getCommentsByPostId(postId);
    }

    // 获取所有评论
    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    // 创建新评论
    @PostMapping
    public void addComment(@RequestBody Comment comment) {
        commentService.addComment(comment);
    }

    // 更新评论
    @PutMapping("/{commentId}")
    public void updateComment(@PathVariable Long commentId, @RequestBody Comment comment) {
        comment.setCommentId(commentId);
        commentService.updateComment(comment);
    }

    // 删除评论
    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
    }
}
