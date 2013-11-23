module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,jshint: {
			files: [
				'Gruntfile.js'
				,'cli/**/*.js'
				,'test/**/*.js'
				,'!node_modules/**/*.*'
			]
			,options: {
				// options here to override JSHint defaults
				globals: {
					module : true
					,require : true
					,define : true
					,io		: true
					,google	: true
					// Testing
					,QUnit : true
					// Pavlov
					,before : true
					,after : true
					,it : true
					,assert : true
					,describe : true
					,sut : true
					,pavlov : true
					,sinon : true
				}
				,laxcomma : true
				,eqeqeq : true
				,trailing : true
				,curly : true
				,newcap : true
				,quotmark : 'single'
				,undef : true
				,unused : true
				// Exposes jQuery globals
				,jquery : true
				// Allows 'document' and 'window' globals
				,browser : true
				// Allows alert & console
				,devel : true
				,sub : true
			}
		}
		,qunit: {
			//files : ['test/client/index.html']
			all:{
				options:{
					urls: [
						'http://dignitas:3333/_test/'
					]
				}
			}
		}
		,watch: {
			// Run everything
			files: ['<%= jshint.files %>','client/_src/scss/**/*.scss', 'client/_src/templates/**/*.handlebars', 'client/_src/html/**/*.html']
			,tasks: ['jshint', 'qunit', 'compass', 'requirejs', 'handlebars', 'copy']

			// Watch Options
			,options: {
				interrupt: true		// If a file is updated during a build, stop and restart the process
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('dev', ['jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'qunit']);
};

