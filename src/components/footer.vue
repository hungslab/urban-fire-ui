<template>
    <div class="footer">
        <div class="bq g_mt clearfix">
            <div class="g_cw tb">
                <div class="bq_a">
                    <div class="bt">
                        <h3>网站导航</h3>
                        <div class="xh">
                            <p class="xh_a"></p>
                            <p class="xh_b"></p>
                        </div>
                    </div>
                    <ul class="list right">
                        <li v-for="(item,index) in list" :key="index">
                          {{item.title}}
                        </li>
                       
                    </ul>
                </div>

                <div class="bq_a">
                    <div class="bt">
                        <h3>联系我们</h3>
                        <div class="xh">
                            <p class="xh_a"></p>
                            <p class="xh_b"></p>
                        </div>
                    </div>
                    <ul class="list width">
                        <li>
                            <p><img class="" src="../assets/images/co_a.svg" />咨询热线：XXX</p>
                        </li>
                        <li>
                            <p><img class="bq_tb" src="../assets/images/co_d.svg" />联系地址：XXX</p>
                        </li>
                        <li>
                            <p><img class="" src="../assets/images/co_c.svg" />联系邮箱：XXX</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { addPro } from '../api/index.js';
export default {
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
                    title: '消防新闻',
                    path: ''
                },
                {
                    title: '消防知识',
                    path: ''
                },
                {
                    title: '消防案例',
                    path: ''
                },
                {
                    title: '火灾数据',
                    path: ''
                },
                {
                    title: '火灾案例',
                    path: ''
                },
                {
                    title: '火灾预测',
                    path: ''
                },

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
        };
    },
    created() {
        this.user = localStorage.getItem('user');
    },
    methods: {
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
</style>