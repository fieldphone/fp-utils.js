module.exports = (grunt) ->
  # env could be 'dev' or 'prod'
  env = grunt.option('env') or 'dev'

  grunt.initConfig

    coffee:
      src:
        options:
          bare: true
          join: true

        files:
          #FpUtils 
          'fp-utils.js': [
            'src/core.coffee', 
            'src/time_string.coffee',
            'src/minutes_past_midnight.coffee',
            'src/minutes.coffee',
            'src/hours.coffee',
            'src/string.coffee'
          ]

      test:
        options:
          bare: true
        expand: true
        files:
          'test/fp-utils-test.js': ['test/fp-utils/**/*.coffee']
    
    mocha:
      fp_utils:
        src: [ 'test/*.html' ]
        options:
          run: true
          log: true


    watch:
      coffee:
        files: [ "src/**/*.coffee", "test/**/*.coffee"]
        tasks: [ "coffee" ]


  # # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-mocha'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask 'default', ['coffee']

