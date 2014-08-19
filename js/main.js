require.config({
	paths:{
		jquery:'common/jquery-2.1.1'
	}
});
require(['jquery','imgs'],function($,imgs){
	new imgs.Imgs(data);
});
