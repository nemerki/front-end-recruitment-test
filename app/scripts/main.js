/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function () {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function () {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set:
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            var installingWorker = registration.installing;

            installingWorker.onstatechange = function () {
              switch (installingWorker.state) {
                case 'installed':
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in the page's interface.
                  break;

                case 'redundant':
                  throw new Error('The installing ' +
                    'service worker became redundant.');

                default:
                // Ignore
              }
            };
          }
        };
      }).catch(function (e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
  $(document).ready(function () {

    //Pul clonlama kodları başlanğıc
    $("body").on("click", ".addMoney", function () {

      var newMoney = $(".money:first").clone();
      $(".money:last").after(newMoney);

      //sweetalert ile ekrana verilen mesaj kodları
      swal({
        type: 'success',
        title: 'Good job!',
        text: 'You won more',
        timer: 1000
      });
    });
    // Pul clonlama kodları /


    // input focus oldukda label deyişiklik kodları
    $('input,select').on('blur', function () {
      if (!$(this).val() == "") {
        $(this).next().addClass('stay');
      } else {
        $(this).next().removeClass('stay');
      }
    });
    // input focus oldukda label deyişiklik kodları/



    // Telefon nömresi üçün mask
    $('.phone').on('focus', function () {
      $('.phone').mask('(000) 000-00-00', {placeholder: "(___) ___-__-__"});
    });
    $('.phone').on('blur', function () {
      if ($(this).val() == "") {
        $('.phone').removeAttr('placeholder').unmask();
      }
    });
    // Telefon nömresi üçün mask/

    // Kredi kartı üçün mask
    $('#creditCard').on('focus', function () {
      $('#creditCard').mask('0000-0000-0000-0000', {placeholder: "____-____-____-____"});
    });
    $('#creditCard').on('blur', function () {
      if ($(this).val() == "") {
        $('#creditCard').removeAttr('placeholder').unmask();
      }
    });
    //Kredi kartı üçün mask/

    // securityCode üçün mask
    $('#securityCode').on('focus', function () {
      $('#securityCode').mask('000', {placeholder: "- - - "});
    });
    $('#securityCode').on('blur', function () {
      if ($(this).val() == "") {
        $('#securityCode').removeAttr('placeholder').unmask();
      }
    });
    //securityCode üçün mask/

    // expDate üçün mask
    $('#expDate').on('focus', function () {
      $('#expDate').mask('00/00', {placeholder: "MM/YY"});
    });
    $('#expDate').on('blur', function () {
      if ($(this).val() == "") {
        $('#expDate').removeAttr('placeholder').unmask();
      }
    });
    //expDate üçün mask/



  });

})();
