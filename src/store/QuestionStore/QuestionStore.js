import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuestionStore=defineStore('question',()=>{
	const id= ref('')
	const  getCurrentDateTime=()=> {
	    const now = new Date();
	    // 获取年份、月份、日期
	    const year = now.getFullYear();
	    const month = String(now.getMonth() + 1).padStart(2, '0');
	    const day = String(now.getDate()).padStart(2, '0');
	    // 获取小时、分钟、秒钟
	    const hours = String(now.getHours()).padStart(2, '0');
	    const minutes = String(now.getMinutes()).padStart(2, '0');
	    const seconds = String(now.getSeconds()).padStart(2, '0');
	    // 格式化时间
	    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	    return formattedDateTime;
	}
	const outcomeColor=(outcome)=>{
		if(outcome==='Accepted')
		return 'success'
		else if(outcome==='Compile Error')
		return 'info'
		else if(outcome==='Wrong Answer')
		return 'danger'
		else if(outcome==='Time Limit Exceeded')
		return 'warning'
		return ''
	}
	
	
	
	return{
		id,
		getCurrentDateTime,
		outcomeColor
	}
},{
	persist: true
})