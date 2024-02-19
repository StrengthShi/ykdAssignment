package com.zhihu.myassignment.mapper;

import com.zhihu.myassignment.model.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {

    List<Post> getAllPosts();

    // 根据ID获取
    Post getPostById(@Param("postId") Long postId);

    // 创建
    void addPost(Post post);

    // 更新
    void updatePost(Post post);

    // 删除
    void deletePost(@Param("postId") Long postId);

    int getLikesCount(@Param("postId") Long postId);

    int getCommentCount(@Param("postId") Long postId);

}
