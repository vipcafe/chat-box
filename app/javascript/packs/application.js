// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import('jquery')
import("bootstrap")
import('../stylesheets/application.scss')
//= require_tree ./channels
Rails.start()
Turbolinks.start()
ActiveStorage.start()


$(function() {
    $('#new_room_message').on('ajax:success', function(a, b,c ) {
      $(this).find('input[type="text"]').val('');
    });
  });


  