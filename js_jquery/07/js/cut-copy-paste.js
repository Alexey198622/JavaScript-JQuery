﻿$(function() {  var $p = $('p');  // Клонируем элемент p и добавляем его после элемента h2.  var $clonedQuote = $p.clone();  $p.remove();  $clonedQuote.insertAfter('h2');  // Удаляем первый элемент и добавляем в конец списка.  var $moveItem = $('#one').detach();  $moveItem.appendTo('ul');});