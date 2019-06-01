console.log("加载成功");

/*
	配置引入的模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola": "parabola",
		"index": "index",
		"slide": "slide"
	},
	//jquery-cookie模块依赖jquery开发，在这里声明依赖关系
	shim: {
		//配置jquery-cookie依赖于jquery
		"jquery-cookie": ["jquery"],
		//声明不适用AMD规范的模块
		"parabola": {
			exports: "_"
		}

	}
})

require(["index", "slide"], function(index, slide){
	index.index();
	slide.banner();
	// slide.tab();
})



