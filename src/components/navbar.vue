<template>
    <div class="topnav">
        <div class="navbar">
            <div style="display: flex; height: 70px; align-items: center">
                <div style="display: flex; align-items: center; cursor: pointer" @click="tonav(list[0])">
                    <img style="width: 48px; height: 48px" src="../assets/image/xf_logo.png" alt="" />
                    <h3>消防救援</h3>
                </div>
                <div class="nav">
                    <ul>
                        <li v-for="(item, index) in list" :key="index" @click="tonav(item)">
                            <a href="javascript:;">{{ item.title }}</a>
                            <ol v-if="item.child && item.child.length">
                                <li v-for="(childitem, childindex) in item.child" :key="childindex" @click="tonav(childitem)">
                                    <a href="javascript:;">{{ childitem.title }}</a>
                                </li>
                            </ol>
                        </li>

                        <!-- 这个元素来定义滑动的线条 -->
                        <li class="underline" :style="{ left: leftposi + 'px' }"></li>
                    </ul>
                </div>
            </div>
            <div class="userbox">
                <el-dropdown trigger="click" v-if="user" @command="handleCommand">
                    <span class="demonstration userbox">
                        <img class="userAvater" src="../assets/images/0harmzy9xt03qwo.jpg" />
                        user
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user" command="a">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-download" command="b">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span class="demonstration" v-else>登录</span>
            </div>
        </div>
    </div>
</template>

<script>
import { addPro } from '../api/index.js';
export default {
    props: ['leftposi'],
    data() {
        return {
            user: {},
            dialog: false,
            form: {
                content: '',
                userId: ''
            },
            list: [
                {
                    title: '首页',
                    path: 'index'
                },
                {
                    title: '消防信息',
                    path: '',
                    child: [
                        {
                            title: '消防新闻',
                            path: 'xfNews'
                        },
                        {
                            title: '消防知识',
                            path: 'xfKnow'
                        },
                        {
                            title: '消防案例',
                            path: 'xfAnli'
                        }
                    ]
                },
                {
                    title: '消防火灾',
                    path: '',
                    child: [
                        {
                            title: '火灾数据',
                            path: 'fireData'
                        },
                        {
                            title: '火灾案例',
                            path: 'fireAnli'
                        },
                        {
                            title: '火灾预测',
                            path: 'fireYc'
                        }
                    ]
                },
                {
                    title: '辅助决策',
                    path: '',
                    child: [
                        {
                            title: '火灾面积划分',
                            path: ''
                        },
                        {
                            title: '火灾多步决策',
                            path: ''
                        },
                        {
                            title: '救援方案推荐',
                            path: ''
                        }
                    ]
                }
            ]
        };
    },
    created() {
        this.user = localStorage.getItem('user');
    },
    methods: {
        handleCommand(command) {
            if (command == 'a') {
                this.$router.push('my');
            }
						 if (command == 'b') {
                this.$router.push('login');
            }
        },
        addPro() {
            if (!this.user) {
                this.$message.error('请先登录');
            } else {
                this.dialog = true;
            }
        },

        tonav(item) {
            if (item.child && item.child.length) {
                return;
            }
            this.$router.push(item.path);
        },
        logout() {
            this.user = null;
            localStorage.clear();
        }
    }
};
</script>

<style>
* {
    /* 页面初始化 清除元素的内外边距 */
    padding: 0;
    margin: 0;
}
body {
    /* 宽度占浏览器可视区域的高度 */
    width: 150vm;
}
li {
    /* 清除li元素前面的项目符号 */
    list-style: none;
}
a {
    /* 清除a元素的下划线 */
    text-decoration: none;
    color: #000;
}
.topnav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2000;
}
.navbar {
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: relative;
    z-index: 99;
    /* 盒子阴影 */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    padding: 0 28px;
    justify-content: space-between;
    box-sizing: border-box;
}
.navbar .nav {
    margin-left: 30px;
    width: 560px;
    height: 100%;
}
.navbar .nav ul {
    /* 相对定位 */
    position: relative;
    /* 弹性布局 */
    display: flex;
    /* 让子元素平均分配宽度 */
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
.navbar .nav ul > li {
    width: 100%;
    height: 100%;
}
.navbar .nav ul > li > a {
    /* 因为a元素是行内元素 必须将其转为行内块或者块级才能设置宽度和高度 */
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
    text-align: center;
}
.navbar .nav ul > li ol {
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    /* 让盒子先沿着y轴缩放到0 也就是隐藏了 */
    transform: scaleY(0);
    /* 我们需要将盒子从上面滑动下来 设置一下缩放的中心点即可 设置到最上面的中间位置 */
    transform-origin: 50% 0;
    /* 设置过渡 */
    transition: all 0.6s;
}
.navbar .nav ul > li ol li {
    height: 70px;
    border-bottom: 1px solid rgb(245, 245, 245);
}
.navbar .nav ul > li ol li a {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
    text-align: center;
}
.navbar .nav ul > li ol li:hover {
    background-color: rgba(0, 0, 0, 0.03);
}
.navbar .nav ul > li:hover ol {
    transform: scaleY(1);
}
/* 现在可以设置线条了 */
.navbar .nav ul .underline {
    /* 绝对定位 */
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140px;
    height: 6px;
    /* 设置一下盒子的左上角和右上角的圆角 */
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #cc3333;
    /* 加过渡 */
    transition: all 0.5s;
    /* 现在有个小问题 我们一起看看 ne
  /* 就是这个问题 这个线条有点影响鼠标移入li这个效果 */
    /* 这个属性就可以解决这个问题 就貌似这个元素你能看见 但是鼠标是点击不到了 现在鼠标放到线条也没事了 */
    pointer-events: none;
}
.navbar .nav ul .underline::before {
    content: '';
    /* 利用::before伪元素设置三角 */
    position: absolute;
    top: -10px;
    /* calc方法自动计算数值 让盒子居中 */
    left: calc(50% - 9px);
    width: 18px;
    height: 10px;
    /* inherit可以继承父元素的属性值 */
    background-color: inherit;
    /* 各位小伙伴可能对着属性比较陌生 我简单说一下这句话如何生成了三角形 这个属性可以绘制图案 polygon这个属性只需要提供最少三个点 就可以将三个点连接到一起 然后绘制一个图案  两个点的坐标位置(x,y) 0 100% 这个点就是说在x轴上为0px 在y轴是100% 就是盒子的高度 x轴的方向是向右 y轴的方向是向下 那么我们设置了三个点 然后将三个点连起来刚好绘制出一个三角形 不明白的小伙伴可以在纸上画一下 画出来就理解了 */
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
}
.navbar .nav ul > li:nth-child(2):hover ~ .underline {
    left: 140px !important;
    background-color: #ff9933;
}
/* 重复以上操作 */
.navbar .nav ul > li:nth-child(3):hover ~ .underline {
    left: 280px !important;
    background-color: #339933;
}
.navbar .nav ul > li:nth-child(4):hover ~ .underline {
    left: 420px !important;
    background-color: #0099cc;
}
.navbar .nav ul > li:nth-child(5):hover ~ .underline {
    left: 560px !important;
    background-color: #9966cc;
}
.userbox {
    display: flex;
    align-items: center;
}

.userAvater {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    font-size: 14px;
    cursor: pointer;
    color: #409eff;
}
</style>