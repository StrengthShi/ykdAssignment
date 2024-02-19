package com.zhihu.myassignment.service;

import com.zhihu.myassignment.mapper.CommentMapper;
import com.zhihu.myassignment.mapper.PostMapper;
import com.zhihu.myassignment.model.Comment;
import com.zhihu.myassignment.model.Post;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Resource
    private final PostMapper postMapper;
    @Resource
    private final CommentMapper commentMapper;

    @Autowired
    public PostService(PostMapper postMapper, CommentMapper commentMapper) {
        this.postMapper = postMapper;
        this.commentMapper = commentMapper;
    }

    // 获取所有帖子
    public List<Post> getAllPosts() {
        return postMapper.getAllPosts();
    }

    // 根据帖子 ID 获取帖子详情
    public Post getPostById(Long postId) {
        return postMapper.getPostById(postId);
    }

    // 添加帖子
    public Post addPost(Post post) {
        postMapper.addPost(post);
        return post;
    }

    // 更新帖子信息
    public Post updatePost(Long postId, Post post) {
        postMapper.updatePost(post);
        return post;
    }

    // 删除帖子
    public void deletePost(Long postId) {
        postMapper.deletePost(postId);
    }

    public int getLikesCount(Long postId) {
        return postMapper.getLikesCount(postId);
    }

    public int getCommentCount(Long postId) {
        return postMapper.getCommentCount(postId);
    }
}
