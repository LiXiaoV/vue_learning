export default {
    data(){
        return {
            commonData: "公共数据",
        }
    },
    methods:{
        commonMethod(){
            console.log("运行公共方法")
        }
    },
    mounted() {
        console.log("运行公共方法")
    }
}