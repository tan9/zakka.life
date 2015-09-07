$(document).ready(function() {
  $('#fullpage').fullpage({
    'verticalCentered': false,
    'css3': true,
    'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['雜貨生活', '婚禮佈置', '小戶沬光', '小戶人家'],

    afterLoad: function (anchorLink, index) {
    },

    onLeave: function (index, newIndex, direction) {
    },

    afterRender: function () {
    }
  });
});
