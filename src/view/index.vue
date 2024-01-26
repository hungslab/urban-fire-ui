<template>
    <div class="container">
        <Navbar></Navbar>
        <el-carousel  class="lunbo" height="500px">
            <el-carousel-item v-for="item in swiperList" :key="item" >
                <img :src="item.img" class="img"/>
                <div class="imgtitle current">
                    <p style="font-size: 24px; text-align: left">火灾演讲</p>
                    <p>消防局安全演练</p>
                </div>
            </el-carousel-item>  
        </el-carousel>
        <div class="service  g_mb clearfix">
             <div class="g_cw_a">
            <ul class="list">
                <li class="a">
                    <a href="javascript:;"  @click="topage('xfNews')">
                        <img class="se_ct_a" src="../assets/image/news_ac.svg">
                        <img class="se_ct_b" src="../assets/image/news.svg">
                        <p>消防新闻</p>
                    </a>
                </li>
                <li class="b">
                    <a href="javascript:;"  @click="topage('xfKnow')">
                        <img class="se_ct_a" src="../assets/image/know_ac.svg">
                        <img class="se_ct_b" src="../assets/image/know.svg">
                        <p>消防知识</p>
                    </a>
                </li>
                <li class="c">
                    <a href="javascript:;"  @click="topage('xfAnli')">
                        <img class="se_ct_a" src="../assets/image/plan_ac.svg">
                        <img class="se_ct_b" src="../assets/image/plan.svg">
                        <p>消防案例</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;"  @click="topage('fireData')">
                        <img class="se_ct_a" src="../assets/image/data_ac.svg">
                        <img class="se_ct_b" src="../assets/image/data.svg">
                        <p>火灾数据</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;"  @click="topage('fireAnli')">
                        <img class="se_ct_a" src="../assets/image/fire_ac.svg">
                        <img class="se_ct_b" src="../assets/image/fire.svg">
                        <p>火灾案例</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;"  @click="topage('fireYc')">
                        <img class="se_ct_a" src="../assets/image/yuce_ac.svg">
                        <img class="se_ct_b" src="../assets/image/yuce.svg">
                        <p>火灾预测</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="news g_mt g_mb clearfix">
        <div class="g_cw">
            <div class="g_title g_mt" style="margin-top:20px">
                <h3>新闻资讯</h3>
                <h4>NEWS CENTER</h4>
            </div>
            <div class="left">
                <div class="bt">
                    <h3><a href="javascript:;" :class="{'active':tabindex==0}" @click="tabindex=0">消防新闻</a></h3>
                    <h3><a href="javascript:;" :class="{'active':tabindex==1}"  @click="tabindex=1">消防案例</a></h3>
                </div>
                <ul class="list" v-if="tabindex==0">
                    <li v-for="items in 4" :key="items">
                        <a href="javascript:;" @click="topage('newsDetail')" >
                            <div class="rq">
                                <h4 class="t1">07</h4>
                                <p class="t2">2019-10</p>
                            </div>
                            <div class="ne_jj">
                                <h3 class="l1">【中国新闻】消防救援纪念章首次颁发，共设三类七种</h3>
                                <p class="l2">10月15日，由国家消防救援局举办的第七届全国消防搜救犬技术比武竞赛在济南圆满落下帷幕。经过3天激烈角逐，黑龙江省消防救援总队、甘肃省消防救援总队并列取得团体总分第一名。河南省消防救援总队、内蒙古消防救援总队分获团体总分第二、第三名。</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul class="list"  v-if="tabindex==1">
                     <li v-for="items in 4" :key="items">
                        <a href="javascript:;" @click="topage('anliDetail')">
                            <div class="rq">
                                <h4 class="t1">02</h4>
                                <p class="t2">2019-10</p>
                            </div>
                            <div class="ne_jj">
                                <h3 class="l1">山西吕梁市永聚煤矿一办公楼火灾事故</h3>
                                <p class="l2">新华社北京11月16日电 11月16日7时许，山西吕梁市永聚煤矿一办公楼发生火灾。截至目前，事故已造成26人死亡、38人受伤。

事故发生后，党中央、国务院高度重视。正在国外访问的中共中央总书记、国家主席、中央军委主席习近平立即作出重要指示，山西吕梁市永聚煤矿一办公楼发生火灾，造成重大人员伤亡，教训十分深刻！要全力救治受伤人员，做好伤亡人员及家属善后安抚工作，尽快查明原因，严肃追究责任。</p>
                            </div>
                        </a>
                    </li>

                  

                </ul>
            </div>
            <div class="right">
                <div class="ne_ct_a">
                    <img class="" src="../assets/image/xiaofan.webp">
                </div>
            </div>
        </div>
          <div class="extend">
                    <button type="button"><a href="javascript:;"  @click="topage('xfNews')">查看更多</a></button>
                </div>
    </div>


    <!-- <div class="about g_mt g_mb clearfix">
        <div class="g_cw">
            <div class="g_title">
                <h3>酒店概况 / </h3>
                <h4>HOTEL OVERVIEW</h4>
            </div>
        </div>
        <div class="about_bj g_mb">
            <div class="g_cw">
                <div class="left">
                    <h3 class="l1">关于我们商务酒店</h3>
                    <p class="xh"></p>
                    <p class="l2">
                        我们商务酒店，创立于2006年，定位于豪华商务连锁酒店。以打造“城央、商务、雅致”的精品商务连锁酒店为产品理念；驻足于重要商旅城市中心，专 注于宾客需求与体验；倾力打造以品质、高雅、时尚、智能为主题，以快捷准确、尊贵礼遇的对客服务的特点以塑造精品商务型酒店的典范；为中产白领人士提供优质的酒店住宿服务，打造精品商务连锁酒店品牌。
                    </p>
                    <button type="button"><a href="about.html?_ct">进一步了解</a></button>
                </div>
                <div class="right">
                    <img src="../assets/images/about_ct.jpg">
                </div>
            </div>
        </div>
        <div class="js g_cw">
            <div class="js_xq">
                <ul class="list">
                    <li>
                        <a>
                            <div class="tb_bj_a">
                                <img class="pic" src="../assets/images/ab_dw_b.svg">
                            </div>
                            <div class="tb_bj_b">
                                <img class="pic" src="../assets/images/ab_dw_a.svg">
                            </div>
                            <h3 class="l1">地理位置优越</h3>
                            <p class="l2">酒店位于市中心CBD商圈区域，交通便利出行方便，四周临近银行、大型商场、地铁、医院等</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="tb_bj_a">
                                <img class="" src="../assets/images/ab_zx_b.svg">
                            </div>
                            <div class="tb_bj_b">
                                <img class="" src="../assets/images/ab_zx_a.svg">
                            </div>
                            <h3 class="l1">室内豪华装修</h3>
                            <p class="l2">酒店位于市中心CBD商圈区域，交通便利出行方便，四周临近银行、大型商场、地铁、医院等</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="tb_bj_a">
                                <img class="" src="../assets/images/ab_aq_b.svg">
                            </div>
                            <div class="tb_bj_b">
                                <img class="" src="../assets/images/ab_aq_a.svg">
                            </div>
                            <h3 class="l1">高级安全系数</h3>
                            <p class="l2">酒店位于市中心CBD商圈区域，交通便利出行方便，四周临近银行、大型商场、地铁、医院等</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="tb_bj_a">
                                <img class="" src="../assets/images/ab_hj_b.svg">
                            </div>
                            <div class="tb_bj_b">
                                <img class="" src="../assets/images/ab_hj_a.svg">
                            </div>
                            <h3 class="l1">住宿环境良好</h3>
                            <p class="l2">酒店位于市中心CBD商圈区域，交通便利出行方便，四周临近银行、大型商场、地铁、医院等</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->


      <div class="distribution clearfix" style="margin-top:80px">
        <div class="g_cw">
            <div class="g_title">
                <h3>火灾数据</h3>
                <h4>Fire Data</h4>
            </div>
            <div class="xq">
                <ul class="list">

                    <li>
                        <a class="box" href="javascript:;"  @click="topage('fireDetail')">
                            <div class="di_a">
                                <img class="ct_a" src="../assets/image/fire1.png" />
                            </div>
                            <div class="di_b">
                                <h6 class="l1">厦门</h6>
                            </div>
                            <div class="di_c">
                                <p class="l2">有爆裂声响!厦门一高层住宅突发大火!</p>
                                <button type="button">查看更多>></button>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="box" href="javascript:;"  @click="topage('fireDetail')">
                            <div class="di_a">
                                <img class="ct_a" src="../assets/image/fire2.png" />
                            </div>
                            <div class="di_b">
                                <h6 class="l1">厦门</h6>
                            </div>
                            <div class="di_c">
                                <p class="l2">有爆裂声响!厦门一高层住宅突发大火!</p>
                                <button type="button">查看更多>></button>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="box" href="javascript:;"  @click="topage('fireDetail')">
                            <div class="di_a">
                                <img class="ct_a" src="../assets/image/fire3.png" />
                            </div>
                            <div class="di_b">
                                <h6 class="l1">厦门</h6>
                            </div>
                            <div class="di_c">
                                <p class="l2">有爆裂声响!厦门一高层住宅突发大火!</p>
                                <button type="button">查看更多>></button>
                            </div>
                        </a>
                    </li>

                </ul>
                <div class="extend" >
                    <button type="button"><a href="javascript:;"  @click="topage('fireAnli')">查看更多</a></button>
                </div>
            </div>
        </div>
    </div>
    <div class="hotel_xq g_mt g_mb clearfix">
        <div class="g_cw">
            <div class="g_title">
                <h3>消防知识</h3>
                <h4>knowledge of fire fighting</h4>
            </div>
            <ul class="list_a">
                <li><a :class="{'active':knowindex=='0'}" @click="knowindex=0" href="javascript:;" class="">火灾预防</a></li>
                <li><a :class="{'active':knowindex=='1'}" @click="knowindex=1" href="javascript:;" class="">自救逃生</a></li>
                <li><a :class="{'active':knowindex=='2'}" @click="knowindex=2" href="javascript:;" class="">消防器械</a></li>
            </ul>
        </div>
        <div class="hotel_list">
            <div class="right">
                <ul class="list">
                    <li v-for="item in 8" :key="item" style="border:10px solid  #ffffff ">
                        <a class="box" href="javascript:;"  @click="topage('knowDetail')">
                            <div class="ct"><img style="width:100%;height:200px" src="../assets/image/fire1.png" /></div>
                            <div class="tb">
                                <img class="tb_a" src="../assets/images/rm_tb.png">
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
              <div class="extend">
                    <button type="button"><a href="javascript:;"  @click="topage('xfKnow')">查看更多</a></button>
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
            tabindex:0,
            knowindex:0,
            swiperList:[
                {img:require('../assets/image/swiper0.webp')},
                  {img:require('../assets/image/swiper1.webp')},
                    {img:require('../assets/image/swiper2.webp')}
            ]
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
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
        topage(item){
            this.$router.push(item)
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
    margin:0;
    text-align: center;
    box-sizing:content-box;
       position: relative;
    display: inline-block;

}
 

.lunbo  .img {
  
    width: 100%;
  
}
.lunbo  .imgtitle{

    position: absolute;
    left:200px;
    top: 40%;
    transform: translate(0,-50%);
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}
.lunbo .current {
    display: block;
}

 

</style>
