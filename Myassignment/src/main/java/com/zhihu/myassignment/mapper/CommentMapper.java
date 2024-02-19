package com.zhihu.myassignment.mapper;

import com.zhihu.myassignment.model.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CommentMapper {

    List<Comment> getCommentsByPostId(@Param("postId") Long postId);

    List<Comment> getAllComments();
    // 创建新评论
    void addComment(Comment comment);

    // 更新评论
    void updateComment(Comment comment);

    // 删除评论
    void deleteComment(@Param("commentId") Long commentId);
}
