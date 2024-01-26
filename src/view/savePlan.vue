<template>
    <div class="container">
        <Navbar :leftposi="280"></Navbar>
        <div class="news g_mt g_mb clearfix" style="margin-bottom: 20px">
            <div class="g_cw">
                <div class="left" style="width: 100%">
                    <ul class="list">
                        <div class="g_title g_mt" style="margin-top: 20px">
                            <h3>数量预测</h3>
                            <h4>FIRE Prediction</h4>
                        </div>
                        <div style="width: 100%">
                            <div id="EChart" style="width: 100%; height: 500px"></div>
                        </div>
                        <div class="g_title g_mt" style="margin-top: 20px">
                            <h3>等级预测</h3>
                            <h4>FIRE Prediction</h4>
                        </div>
                        <el-form inline label-width="80px">
                            <el-form-item label="火灾面积:" style="width: 100%">
                                <el-input v-model="query.area"></el-input>
                            </el-form-item>
                            <el-form-item label="被困人数:" style="width: 100%">
                                <el-input v-model="query.people"></el-input>
                            </el-form-item>
                            <el-form-item label="火灾属性:" style="width: 100%">
                                <el-input v-model="query.attribute"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="mini">确定</el-button>
                            </el-form-item>
                        </el-form>
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
    created() {
        this.getHot();
    },
    mounted() {
        this.getRenderer();
       
    },
    methods: {
        handleClick() {
            this.getRenderer();
        },
        getRenderer() {
            console.log(this.$echarts);
            // 基于准备好的dom，初始化echarts实例
            this.EChart = this.$echarts.init(document.getElementById('EChart'));
            // 配置参数
            let config = {
                title: { text: '火灾数量预测' },
                tooltip: {},
                xAxis: {
                    data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
                },
                yAxis: {},
                series: [
                    {
                        name: '往年数量',
                        type: 'line',
                        data: [25, 32, 14, 11, 31, 20]
                    },
                    {
                        name: '实际数量',
                        type: 'line',
                        data: [51, 26, 18, 15, 19, 20]
                    },
                    {
                        name: '预测数量',
                        type: 'line',
                        data: [5, 20, 36, 10, 10, 20, 31, 12, 11, 23, 12, 45, 11]
                    }
                ]
            };
            // 设置参数
            this.EChart.setOption(config);
             window.addEventListener('resize', () => {

    this.EChart.resize();

    })
        },
        getHot() {
            // getHot({
            //     type: 1,
            //     listtype: 1,
            //     pageIndex: 1,
            //     pageSize: 3
            // }).then((res) => {
            //     console.log(res);
            //     this.hotknow = res.data.list;
            //     for (let i in this.hotknow) {
            //         this.options.labels.push(this.hotknow[i].title);
            //         this.options.datasets[0].data.push(this.hotknow[i].prise);
            //     }
            // });
        },
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
        // handleListener() {
        //     bus.$on('collapse', this.handleBus);
        //     // 调用renderChart方法对图表进行重新渲染
        //     window.addEventListener('resize', this.renderChart);
        // },
        // handleBus(msg) {
        //     setTimeout(() => {
        //         this.renderChart();
        //     }, 200);
        // },
        // renderChart() {
        //     this.$refs.bar.renderChart();
        //     this.$refs.line.renderChart();
        // }
    }
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
