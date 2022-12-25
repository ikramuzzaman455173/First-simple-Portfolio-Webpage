$(document).ready(function () {
  $('#menuBar').click(function () {
    $(this).toggleClass('fa-times')
    $('nav').toggleClass('toggle')
  })
  $(window).on('scroll load', function () {
    $('#menubar').removeClass('fa-times')
    $('nav').removeClass('toggle')
  })
})

const themeToggle = document.querySelector('#themeToggle')

themeToggle.onclick = () => {
  themeToggle.classList.toggle('fa-sun')
  if (themeToggle.classList.contains('fa-sun')) {
    document.body.classList.add('active')
  } else {
    document.body.classList.remove('active')
  }
}

window.onscroll = () => {
  if ($(window).scrollTop() > 0) {
    $('.top').show()
  } else {
    $('.top').hide()
  }
}

const loading = document.getElementById('loading')
preload = () => {
  loading.style.display = 'none'
}
