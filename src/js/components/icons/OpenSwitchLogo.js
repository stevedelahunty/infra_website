// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Grommet = React.createClass({

  propTypes: {
    small: React.PropTypes.bool,
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Open Switch' };
  },

  render: function() {

    var logoTitleId = 'openswitch-logo-title';// + uuid.v1();

    var logo = (
      <svg version="1.1" viewBox="0 0 205 140" fill="none"
        stroke="#fff" height="100%" width="120px"
        role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path style={{"fill" : "#fff", "stroke" : "none"}}
        d="M 50.324469,2.3e-4 25.162359,14.52758 2.5e-4,29.05297 l 25.162109,14.52734 25.16211,14.52539 0,-20.17187 6.480471,0 20.89453,20.89062 12.55859,-12.56054 -20.93164,-20.92969 -0.0137,0.0137 -5.17383,-5.17383 -13.814451,0 0,-20.17383 z m 74.724611,80.91016 -12.5586,12.56055 20.93164,20.93554 0.0137,-0.0137 5.17382,5.17383 13.81446,0 0,20.17383 25.16015,-14.53125 25.16407,-14.52734 -25.16407,-14.52735 -25.16015,-14.52734 0,20.17578 -6.48633,0 -20.88867,-20.89258 z"
         />
        <path style={{"fill" : "#FF6F3E", "stroke" : "none"}}
        d="m 112.897,45.856 -0.069,-0.07 -56.018,56.017 -6.486,0 0,-20.175 L 25.163,96.155 0,110.682 l 25.163,14.527 25.161,14.531 0,-20.173 13.814,0 5.174,-5.174 0.014,0.013 55.651,-55.653 0.072,0.071 20.893,-20.891 6.482,0 0,20.173 L 177.585,43.58 202.748,29.053 177.585,14.527 152.424,0 l 0,20.174 -13.814,0 -5.175,5.173 -0.013,-0.013 z"
         />
      </svg>
    );

    if (this.props.small) {
      logo = (
        <svg version="1.1" viewBox="0 0 205 140" fill="none"
          stroke="#fff" height="100%" width="36px"
          role="img" aria-labelledby={logoTitleId}>
          <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
          <path style={{"fill" : "#fff", "stroke" : "none"}}
          d="M 50.324469,2.3e-4 25.162359,14.52758 2.5e-4,29.05297 l 25.162109,14.52734 25.16211,14.52539 0,-20.17187 6.480471,0 20.89453,20.89062 12.55859,-12.56054 -20.93164,-20.92969 -0.0137,0.0137 -5.17383,-5.17383 -13.814451,0 0,-20.17383 z m 74.724611,80.91016 -12.5586,12.56055 20.93164,20.93554 0.0137,-0.0137 5.17382,5.17383 13.81446,0 0,20.17383 25.16015,-14.53125 25.16407,-14.52734 -25.16407,-14.52735 -25.16015,-14.52734 0,20.17578 -6.48633,0 -20.88867,-20.89258 z"
           />
          <path style={{"fill" : "#FF6F3E", "stroke" : "none"}}
          d="m 112.897,45.856 -0.069,-0.07 -56.018,56.017 -6.486,0 0,-20.175 L 25.163,96.155 0,110.682 l 25.163,14.527 25.161,14.531 0,-20.173 13.814,0 5.174,-5.174 0.014,0.013 55.651,-55.653 0.072,0.071 20.893,-20.891 6.482,0 0,20.173 L 177.585,43.58 202.748,29.053 177.585,14.527 152.424,0 l 0,20.174 -13.814,0 -5.175,5.173 -0.013,-0.013 z"
           />
        </svg>
      );
    }

    return (
      <div>
        {logo}
      </div>
    );
  }

});

module.exports = Grommet;
