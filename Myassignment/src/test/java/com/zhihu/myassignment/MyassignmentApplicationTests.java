package com.zhihu.myassignment;

import com.zhihu.myassignment.mapper.CommentMapper;
import com.zhihu.myassignment.mapper.PostMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MyAssignmentApplicationTests {


    @Autowired
    private PostMapper postMapper;

    @Autowired
    private CommentMapper commentMapper;
    @Test
    void contextLoads() {
        try {
//            System.out.println(commentMapper.getAllComments());
            System.out.println(postMapper.getAllPosts());
//            System.out.println(postMapper.getLikesCount(1L));
//            System.out.println(postMapper.getCommentCount(1l));
//            System.out.println(commentMapper.getCommentsByPostId(1L));
            System.out.println("测试成功");
        } catch (Exception e) {
            System.out.println("测试失败");
            e.printStackTrace();
        }
    }
}
