import $ from 'jquery';

class MenuTabs {
  constructor() {

    this.events();
  }

  events() {
    $('.tab .tab__menu a').click(function(e){
      $('.tab .tab__menu a.current').removeClass('current');
      $(this).addClass('current');
      $('.tab section:not(:hidden)').hide();
      $(this.hash).fadeIn(600);
      e.preventDefault();
    }).first().click();

  }

}

export default MenuTabs;
