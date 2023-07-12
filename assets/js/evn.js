$(document).ready(function () {
    
    var hoverColors = ['teaser--exhibition-4661', 'teaser--exhibition-4450', 'teaser--exhibition-4409', 'teaser--exhibition-4409', 'teaser--exhibition-4404', 'teaser--exhibition-440', 'teaser--exhibition-441', 'teaser--exhibition-442', 'teaser--exhibition-643', 'teaser--exhibition-705', 'teaser--exhibition-1217', 'teaser--exhibition-1324', 'teaser--exhibition-1383', 'teaser--exhibition-1393', 'teaser--exhibition-1397','teaser--exhibition-1399', 'teaser--exhibition-1408', 'teaser--exhibition-2009', 'teaser--exhibition-2012', 'teaser--exhibition-2013', 'teaser--exhibition-2022'];
    // Add more hover-color classes to the array if desired
  
    $('.teaser_link').each(function() {
      var link = $(this);
      var parent = link.parent('div')
      var randomColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];
  
      parent.addClass(randomColor);
    });
});