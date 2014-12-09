'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var RemarkSlides = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../../package.json');
  },

  prompting: function () {
    var done = this.async();

    if (!this.options['skip-welcome-message']) {
      this.log(this.yeoman);
      this.log( 'This is tool to create automatically building remark.js slides by just editing your markdown');
    }

    var prompts = [
      {
        name: 'projectName',
        type: String,
        message: 'Whats the name of the project you wish to generate?',
      },
      {
        name: 'projectDescription',
        type: String,
        message: 'Brief overview of the project?'
      },
      { name: 'projectAuthor',
        type: String,
        message: 'Whats your name',
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.projectDescription = props.projectDescription;
      this.projectAuthor = props.projectAuthor;
      done();
    }.bind(this));
  },

  configuring: function() {
    this.config.save();
  },

  writing: {
    app: function () {
      var context = {
        projectDescription: this.projectDescription,
        projectName: this.projectName,
        projectAuthor: this.projectAuthor,
      };
      var files = { 
        '_package.json': 'package.json',
        '_slideware.md': 'slideware.md'
      };
      for (var source in files) {
        this.template(source, files[source], context);
      }
    },

    projectfiles: function () {
      var files = { 
        '_Gruntfile.js': 'Gruntfile.js',
        '_slideware.tmpl': 'slideware.tmpl',
        '_slideware.css': 'slideware.css'
      };
      for (var source in files) {
        this.src.copy(source, files[source]);
      }
    }
  },

  end: function () {
    if (this.options['install']) {
      this.npmInstall();
    }
  }
});

module.exports = RemarkSlides;

