<template>
    <div class="container">
        <Navbar :leftposi="3000"></Navbar>
        <div class="news g_mt g_mb clearfix" style="margin-bottom: 20px">
            <div class="g_cw">
                <div class="left" style="width: 100%">
                    <ul class="list" style="padding: 20px 40px 40px; box-sizing: border-box">
                        <div class="g_title g_mt" style="margin-top: 20px">
                            <h3>山西吕梁市永聚煤矿一办公楼发生火灾 应急管理部持续调度指导救援处置工作 派出工作组和医疗专家组赶赴现场</h3>
                            <h4>2020.11.3</h4>
                        </div>
                        <div style="font-size: 18px; line-height: 24px">
                            　11月16日7时许，山西吕梁市永聚煤矿一办公楼发生火灾，造成重大人员伤亡。
                            　　接报后，应急管理部部长王祥喜持续调度了解情况，要求抓紧核清人数，全力科学搜救；调集医疗专家力量，全力救治伤员，最大限度减少伤亡。应急管理部已派出由副部长宋元明和国家矿山安监局局长黄锦生带队的工作组赴现场指导事故救援和应急处置工作，同时调派应急总医院呼吸重症医疗救援专家组前往支援。
                            　　目前，大火已经扑灭，伤员救治、现场清理、善后处置和原因调查等工作正在进行中。
                        </div>
                          <div class="g_title g_mt" style="margin-top: 60px">
                            <h3>案例分析</h3>
                            <h4>ANYLYSE</h4>
                        </div>
                        <div style="font-size: 18px; line-height: 24px">
                            　11月16日7时许，山西吕梁市永聚煤矿一办公楼发生火灾，造成重大人员伤亡。
                            　　接报后，应急管理部部长王祥喜持续调度了解情况，要求抓紧核清人数，全力科学搜救；调集医疗专家力量，全力救治伤员，最大限度减少伤亡。应急管理部已派出由副部长宋元明和国家矿山安监局局长黄锦生带队的工作组赴现场指导事故救援和应急处置工作，同时调派应急总医院呼吸重症医疗救援专家组前往支援。
                            　　目前，大火已经扑灭，伤员救治、现场清理、善后处置和原因调查等工作正在进行中。
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../components/common/bus';
import { getHot } from '../api/index.js';
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            activeName: 'first',
            data: [
                {
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            hotknow: [],
            tabindex: 0,
            knowindex: 0,
            query: {},
            EChart: null
        };
    },
    components: {
        Footer,
        Navbar
    },

    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    created() {},

    methods: {}
};
</script>


<style scoped>
/deep/ .el-pager li.active {
    color: #fff;
}
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
.lunbo {
    height: 500px;
    width: 100%;
    margin: 0;
    text-align: center;
    box-sizing: content-box;
    position: relative;
    display: inline-block;
}

.lunbo .img {
    width: 100%;
}
.lunbo .imgtitle {
    position: absolute;
    left: 200px;
    top: 40%;
    transform: translate(0, -50%);
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}
.lunbo .current {
    display: block;
}
</style>
