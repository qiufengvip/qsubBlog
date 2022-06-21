<template>
  <div class="body">
    <div class="main">
      <div class="left">
        <div class="left-main">
          <!--  展示 -->
          <div class="article-top">
            <div></div>
            <div></div>
          </div>
          <v-md-editor
              :model-value="data.text" @copy-code-success="handleCopyCodeSuccess"

          ></v-md-editor>
        </div>
<!--        评论 -->
        <div class="comment">
          <comment></comment>
        </div>


      </div>
      <div class="right">
        <div class="right-main">
          <hot-post></hot-post>
          <hot-comments></hot-comments>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import HotPost from "@/components/HotPost";
import HotComments from "@/components/HotComments";
import Comment from "@/components/Comment";

export default {
  name: "ArticleHome",
  components: {HotComments, HotPost,Comment},
  data() {
    return {
      data:{
        img: "http://file.luanshiliunian.cn/11111_1637034086344.jpg",
        title: "",
        content: "夜深了，世界安静了，风不再呼喊，树也不再摇曳，更像是睡着了。是否你也和树做了一个同样的梦，向往着星辰大海，向往着盛世繁华。",
        date: "2021-11-26",
        look: 51,
        comment: 85,
        text: `
# SpringCloud微服务框架

## 什么是微服务

### 特征

- 通过服务实现组件化

开发者不再需要协调其它服务部署对本服务的影响（张三负责的A子系统，不需要关注李四负责的B子系统）

- 按业务能力来划分服务和开发团队

开发者可以自由选择开发技术，提供 API 服务（张三负责的A子系统，因为都是牛人，所以他们最了springbbot2.0+mybatis+mp+mysql,李四服务的B子系统,因为都是一般的人，所以他们用的是Springboot+springdata+jpa+mysql）

- 去中心化

每个微服务有自己私有的数据库持久化业务数据  每个微服务只能访问自己的数据库，而不能访问其它服务的数据库 某些业务场景下，需要在一个事务中更新多个数据库。这种情况也不能直接访问其它微服务的数据库，而是通过对于微服务进行操作。 数据的去中心化，进一步降低了微服务之间的耦合度，不同服务可以采用不同的数据库技术（SQL、NoSQL等）。在复杂的业务场景下，如果包含多个微服务，通常在客户端或者中间层（网关）处理。

- 基础设施自动化（devops、自动化部署）

Java EE部署架构，通过展现层打包WAR包，业务层划分到JARs最后部署为EAR一个大包，而微服务则打开了这个黑盒子，把应用拆分成为一个一个的单个服务，应用Docker技术，不依赖任何服务器和数据模型，是一个全栈应用，可以通过自动化方式独立部署，每个服务运行在自己的进程中，通过轻量的通讯机制联系，经常是基于HTTP资源API，这些服务基于业务能力构建，能实现集中化管理（因为服务太多啦，不集中管理就无法DevOps啦）。

\`\`\`
简而言之 就是多个项目相互协作共同实现某个项目的所有功能
\`\`\`



## 初始微服务

- 我们先创建一个常规的项目

### pom文件

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>springcloud01Root</artifactId>
        <groupId>org.example</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <groupId>pro.qsub.usermodule</groupId>
    <artifactId>springcloud01UserModule</artifactId>

    <dependencies>
        <dependency>
            <groupId>pro.qsub.common</groupId>
            <artifactId>springcloud01common</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
        </dependency>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus</artifactId>
        </dependency>
        <!--test-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-test</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jetty</artifactId>
        </dependency>
        <!--热部署-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
        </dependency>
    </dependencies>
</project>
\`\`\`

- dao层代码

\`\`\`java
package pro.qsub.usermodule.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import pro.qsub.common.dao.User;


public interface UserMapper extends BaseMapper<User> {

}
\`\`\`



- service层代码

\`\`\`java
package pro.qsub.usermodule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pro.qsub.common.dao.User;
import pro.qsub.common.utils.Putdata;
import pro.qsub.usermodule.dao.UserMapper;

import java.util.Map;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserMapper userMapper;

    /**
     * 查询所有用户
     * @return 用户的请求信息
     */
    public Map<String, Object> selectUser(){
        return Putdata.printf(0,"请求成功",userMapper.selectList(null));
    }
}

\`\`\`

- service层接口

\`\`\`java
package pro.qsub.usermodule.service;

import pro.qsub.common.dao.User;

import java.util.Map;

public interface IUserService {

    /**
     * 查询所有用户
     * @return 用户的请求信息
     */
    public Map<String, Object> selectUser();
}

\`\`\`



- Controller层代码

\`\`\`java
没写
\`\`\`



- 启动类

\`\`\`java
没写
\`\`\`

## 服务降级    Hystrix

第一步 创建新项目 springcloud01-personnel-hystrix-8001


`
      },
    };
  },
  methods: {
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
    handleUploadImage(event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);

      // 此处只做示例
      insertImage({
        url:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
        desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
    },
  },
}
</script>

<style lang="less">
.vuepress-markdown-body {
  color: @font-color !important;
  background-color: @background-color3 !important;
}


</style>

<style lang="less" scoped>
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  background: @background-color2;
}
.v-md-editor{
  background-color: #00000000 !important;
}
.vuepress-markdown-body{
  background-color: #00000000 !important;
}

.main {
  width: 1300px;
  display: flex;
  background-color: @background-color3;
}


.left {
  width: 900px;
}

.right {
  width: 400px;
}
.right-main{
  padding: 10px;
}
.left-main{
  padding: 10px;
}
.comment{
  padding: 10px;
}
@media screen and (max-width: 1400px) {
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
    /*display: none;*/
  }

  .main{
    flex-direction:column;
  }
}


</style>