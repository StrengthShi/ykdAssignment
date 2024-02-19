package com.zhihu.myassignment.controller;

import com.zhihu.myassignment.model.Post;
import com.zhihu.myassignment.service.PostService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Resource
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    // 获取所有帖子
    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    // 获取单个帖子
    @GetMapping("/{postId}")
    public Post getPostById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    // 创建新帖子
    @PostMapping
    public Post addPost(@RequestBody Post post) {
        return postService.addPost(post);
    }

    // 更新帖子
    @PutMapping("/{postId}")
    public Post updatePost(@PathVariable Long postId, @RequestBody Post post) {
        return postService.updatePost(postId, post);
    }

    // 删除帖子
    @DeleteMapping("/{postId}")
    public void deletePost(@PathVariable Long postId) {
        postService.deletePost(postId);
    }


    // 获取帖子赞同数
    @GetMapping("/{postId}/likes")
    public int getLikesCount(@PathVariable Long postId) {
        return postService.getLikesCount(postId);
    }

    @GetMapping("/{postId}/comments")
    public int getCommentCount(@PathVariable Long postId) {
        return postService.getCommentCount(postId);
    }

}