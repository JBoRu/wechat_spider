'use strict';

const fs = require('fs');

const config = {
    read_mongo_count:0, //redis没有待爬去公众号列表，去读Mongo计数，为了防止一直没有了就读mongo
    mongodb: {
        db: 'mongodb://127.0.0.1:27017/wechat_spider'
    },
    redis: {
        port: 6379,
        host: '127.0.0.1',
        POST_LIST_KEY: 'wechat_spider:post_list',
        PROFILE_LIST_KEY: 'wechat_spider:profile_list'
    },
    // 是否用本地图片替换所有的图片请求 加快网络速度
    isReplaceImg: true,
    // 是否替换显示在手机上的微信文章正文内容 加快网路速度
    isReplacePostBody: true,
    insertJsToNextPage: {
        // 是否关闭自动跳转页面
        disable: false,
        // 跳转时间间隔 s
        jumpInterval: 3,
        // 跳转文章发布时间范围
        minTime: new Date(2018, 5, 1), // minTime跟 下面的 minTime 间隔2个月， 要不可能抓取到更早的文章链接，不去抓取，有没正文的情况
        maxTime: new Date(2050, 6, 14),
        // 已有数据的文章是否再抓取
        isCrawlExist: false,
        // if true updateNumAt - publishAt
        crawlExistInterval: 1000 * 60 * 60 * 24 * 3,
        // 抓取公众号biz范围
        targetBiz: [],
        // 是否保存文章内容
        isSavePostContent: true,
        // 保存内容的形式: html/text
        saveContentType: 'text',
    },
    insertJsToNextProfile: {
        // 是否关闭自动跳转页面
        disable: false,
        // 仅scroll 不跳转
        onlyScroll: true,
        // 跳转时间间隔 s
        jumpInterval: 5,
        // 抓取到minTime就跳转至下一公众号
        minTime: new Date(2018, 6, 1),
        // 自定义最近多久更新的公众号本次就不用抓取
        maxUpdatedAt: new Date(2050, 6, 7),
        // 抓取公众号biz范围
        targetBiz: [],
        // 程序开始时间
        beginTime: new Date()
    },
    // 是否抓取评论
    isCrawlComments: true
};

// try {
//  // 引入外部biz文件
//  fs.accessSync('./targetBiz.json');
//  config.insertJsToNextProfile.targetBiz = require('./targetBiz.json');
//  config.insertJsToNextPage.targetBiz = require('./targetBiz.json');
// } catch(e) {
//  // Do nothing
// }

module.exports = config;
