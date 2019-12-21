//find this

 _initThumbnailSlider: function()
 
 -------------------------------
 _initThumbnailSlider: function() {
      var options = {
        slidesToShow: 1, // change this from 4 to 1
        slidesToScroll: 1, // change this from 4 to 1
        infinite: false,
        prevArrow: '.thumbnails-slider__prev--' + this.settings.sectionId,
        nextArrow: '.thumbnails-slider__next--' + this.settings.sectionId,
        responsive: [
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1 // change this from 4 to 1
            }
          }
        ]
      };
