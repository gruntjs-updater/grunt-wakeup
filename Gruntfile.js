/*
 * grunt-wakeup
 * https://github.com/dominikwilkowski/grunt-wakeup
 *
 * Copyright (c) 2014-2015 Dominik Wilkowski
 * Licensed under the GNU GPLv2 license.
 */

'use strict';

module.exports = function(grunt) {

	//Dependencies
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.initConfig({

		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// JSHINT
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		jshint: {
			options: {
				jshintrc: '.jshintrc',
			},

			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// WAKEUP
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		wakeup: {
			test1: {
				options: {},
			},

			// deviate from defaults
			test2: {
				options: {
					sound: 'bloom', //differten build in sound
					randomize: true, //randomize build in sounds
					custom: './sounds/nudge.mp3', //run your own
					notifications: true,
				},
			},

			test3: {
				options: {
					sound: 'bloom', //differten build in sound
					randomize: [ //randomize below sounds
						'./sounds/hollow.mp3',
						'./sounds/realization.mp3',
					],
					custom: './sounds/nudge.mp3', //run your own
					notifications: true,
				},
			},

			test4: {
				options: { //deviate from defaults
					sound: false, //turn sound off
					notifications: true,
				},
			},
		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// UNIT TESTS
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		nodeunit: {
			tests: ['test/*_test.js'], //not sure how I'll test this yet :)
		},

	});


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// TASKS
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	grunt.registerTask('test', ['wakeup'/*, 'nodeunit'*/]);

	grunt.registerTask('default', ['jshint', 'test']);
};