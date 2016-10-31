effectsDemo2 = 'fade';
var demoSlider_2 = Sliderman.slider({
  container: 'SliderName_2',
  width: 980,
  height: 350,
  effects: effectsDemo2,
  display: {
    autoplay: 5000,
    loading: {
      background: '#000000',
      opacity: 0.5
    },
    buttons: {
      hide: true,
      opacity: 1,
      prev: {className: 'SliderNamePrev_2', label: ''},
      next: {className: 'SliderNameNext_2', label: ''}
    },
    description: {
      hide: true,
      background: '#000000',
      opacity: 0.4,
      height: 50,
      position: 'bottom'
    },
    navigation: {
      container: 'SliderNameNavigation_2'
    }
  }
});
