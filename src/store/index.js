import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
	choosedImgArr:[],//选中的图片,
	book:{},//选中的记录本
	exp:{},//选中的实验
	showPreview:false,//是否预览,
	uid:'', //用户id
	remark:'',
	showLoading:false,
	showModalTip:false,
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	},
	addImg(state,img){
		state.choosedImgArr.push(img);
	},
	//选择记录本
	chooseBook(state,book){
		state.book = book;
	},
	//选择实验
	chooseExp(state,exp){
		state.exp = exp;
	},
	togglePreview(state,status){
		state.showPreview = status;
	},
	clearExp(state){
		state.exp = {};
	},
	setUid(state,uid){
		state.uid = uid;
	},
	//回到首页，重置vuex所有数据
	resetStore(state){
		state.choosedImgArr=[];
		state.book={};
		state.exp={};
		state.showPreview=false;
		state.remark ='';
		state.showLoading = false;
	},
	changeRemark(state,remark){
		state.remark = remark;
	},
	changeLoading(state,bool){
		state.showLoading = bool || false;
	},
	changeModalTip(state,bool){
		state.showModalTip = bool || false;
		//显示3s后再隐藏
		if(true == bool){
			setTimeout(function(){
				state.showModalTip = false;
			},3000)
		}
	},
}

const actions = {

}

export default new Vuex.Store({
	state,
	mutations,
})