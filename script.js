const $ = window.$

const periods = [{
  name: 'renaissance',
  id: 'show-renaissance',
  bar: 'renaissance-bar',
  box: 'renaissance-box',
  dates: 'renaissance-dates',
  start: 1400,
  end: 1599
}, {
  name: 'baroque',
  id: 'show-baroque',
  bar: 'baroque-bar',
  box: 'baroque-box',
  dates: 'baroque-dates',
  start: 1600,
  end: 1749
}, {
  name: 'classical',
  id: 'show-classical',
  bar: 'classical-bar',
  box: 'classical-box',
  dates: 'classical-dates',
  start: 1750,
  end: 1819
}, {
  name: 'romantic',
  id: 'show-romantic',
  bar: 'romantic-bar',
  box: 'romantic-box',
  dates: 'romantic-dates',
  start: 1820,
  end: 1909
}, {
  name: 'modern',
  id: 'show-modern',
  bar: 'modern-bar',
  box: 'modern-box',
  dates: 'modern-dates',
  start: 1910,
  end: 2017
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

$(function generateDates () {
  periods.map(period => {
    $('.ruler-' + period.name + '[data-items]').each(function () {
      let ruler = $(this).empty(),
          len = period.end || 0,
          item = $(document.createElement('li')),
          i = period.start
      for (i; i < len; i++) {
        if (i % 100 === 0) {
          ruler.append(item.clone().text('---' + i + '---'))
        } else if (i % 50 === 0) {
          ruler.append(item.clone().text('---' + i + '---'))
        } else {
          ruler.append(item.clone().text('-'))
        }
      }
    })
  })
})
