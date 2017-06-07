let Config = {
	api:{
		detail:'http://127.0.0.1:8080/'
	}
}

if(__DEV__){
	Config = {
		api:{
			detail:'http://127.0.0.1:8080/mock/detail.json'
		}
	}
}
export default Config;