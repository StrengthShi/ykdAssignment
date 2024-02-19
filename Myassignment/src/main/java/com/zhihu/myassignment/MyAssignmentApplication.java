package com.zhihu.myassignment;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = {"com/zhihu/myassignment/mapper"})
public class MyAssignmentApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyAssignmentApplication.class, args);
    }

}
