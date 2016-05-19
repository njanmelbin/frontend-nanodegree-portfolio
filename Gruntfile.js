module.exports=function(grunt){
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		browserSync: {
    			files: {
        			src : ['*.html',
        			        'css/*.css',
                            'images/img/*.{png,gif,jpg}'
        			]
    			},
    			options: {
        			server: {
            			baseDir: "./"
  	     		}
			 }  		 
		},
        responsive_images:{
            dev :{
                    
                    options:{
                        engine : "im",
                        newFilesOnly :false,
                        sizes :[{
                            name: "small",
                            width: 150,
                            height: 100,
                            aspectRatio:false
                        },{
                            name: "medium",
                            width: 350,
                            height: 350,
                            upscale: true,
                            aspectRatio: false

                        },{
                            name :"large",
                            upscale: true,
                            width: 1000,
                            height: 600,
                            aspectRatio:false

                        }]
                    },
                    files :[{
                        expand: true,
                        src : ['img/**/*.{gif,jpg,png}'],
                        cwd : './',
                        dest: 'images/'
                    }]
            }
        }

	});
	grunt.registerTask('default',[
           'browserSync',
           'responsive_images'
		]);
}