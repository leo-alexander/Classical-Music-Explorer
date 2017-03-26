const $ = window.$

const periods = [{
  id: 'show-renaissance',
  bar: 'renaissance-bar',
  box: 'renaissance-box',
  dates: 'renaissance-dates',
  start: 1400,
  range: 200
}, {
  id: 'show-baroque',
  bar: 'baroque-bar',
  box: 'baroque-box',
  dates: 'baroque-dates',
  start: 1600,
  range: 150
}, {
  id: 'show-classical',
  bar: 'classical-bar',
  box: 'classical-box',
  dates: 'classical-dates',
  start: 1750,
  range: 70
}, {
  id: 'show-romantic',
  bar: 'romantic-bar',
  box: 'romantic-box',
  dates: 'romantic-dates',
  start: 1820,
  range: 90
}, {
  id: 'show-modern',
  bar: 'modern-bar',
  box: 'modern-box',
  dates: 'modern-dates',
  start: 1910,
  range: 107
}]

function addListeners () {
  periods.map(period => {
    $('#' + period.id).click(function () {
      showPeriod(period)
      scrollToPeriod(period)
    })
  })
}
addListeners()

function showPeriod (selectedPeriod) {
  const hidePeriods = periods.filter(period => period.id !== selectedPeriod.id)
  hidePeriods.map(period => {
    $('.' + period.bar).removeClass('active-bar')
    $('.' + period.box).removeClass('active-info')
    $('.' + period.dates).removeClass('active-dates')
  })
  $('.' + selectedPeriod.bar).toggleClass('active-bar')
  $('.' + selectedPeriod.box).toggleClass('active-info')
  $('.' + selectedPeriod.dates).toggleClass('active-dates')
}

function scrollToPeriod (selectedPeriod) {
  console.log(selectedPeriod)
  $('html, body').animate({ scrollTop: $('#' + selectedPeriod.id).offset().top - 50 }, 400)
}


window.setTimeout(function () {
  var elements = document.getElementsByClassName('infobox')
  Array.prototype.map.call(elements, function (element) {
    element.style.visibility = 'visible'
  })
}, 1000)
