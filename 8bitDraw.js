var table = document.querySelector('.board table')
var draw = true

table.addEventListener('click', e => {
  if (draw) {
    var cell = e.target
    cell.style.backgroundColor = colorCodeValue
    cell.style.border = `1px solid ${colorCodeValue}`
    if (table.style.backgroundColor != 'transparent')
      table.style.backgroundColor = 'transparent'
  } else {
    var cell = e.target
    cell.style.backgroundColor = 'transparent'
    cell.style.border = '1px solid rgba(0, 0, 0, .5)'
    // if (table.style.backgroundColor != 'transparent')
    //   table.style.backgroundColor = 'transparent'
  }
})

var colorCode = document.querySelector('#color-picker')
var colorCodeValue = document.querySelector('#color-picker').value

colorCode.addEventListener('input', e => {
  colorCodeValue = e.target.value
})

var colorCodeType = document.querySelector('#color-code')

colorCodeType.addEventListener('input', e => {
  document.querySelector('.color-template').style.backgroundColor = e.target.value
})

var row = document.querySelector('#grid-row')
var column = document.querySelector('#grid-column')

var width = document.querySelector('.board table').offsetWidth
var height = document.querySelector('.board table').offsetHeight

row.addEventListener('input', e => {
  var rowValue = parseInt(e.target.value)
  if (rowValue > 100) {
    rowValue = 100
    row.value = 100
  }
  column.value = Math.floor(rowValue * (width / height))

})

var generateGrid = () => {
  var columnValue = document.querySelector('#grid-column').value
  var rowValue = document.querySelector('#grid-row').value
  columnValue = parseInt(columnValue)
  var cells = ''
  for (var i = 0; i <= rowValue; i++) {
    cells += '<tr>'
    for (var j = 0; j <= columnValue; j++) {
      cells += '<td></td>'
    }
    cells += '</tr>'
  }
  document.querySelector('.board table').innerHTML = cells
}

var getColorCode = () => {
  colorCodeValue = document.querySelector('#color-code').value
  console.log(colorCodeValue)
}

var reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
  var tds = document.querySelectorAll('td')
  tds.forEach(td => {
    td.style.backgroundColor = 'transparent'
    td.style.border = '1px solid rgba(0, 0, 0, .5)'
  })
})

var eraser = document.querySelector('.eraser')
eraser.addEventListener('click', () => {
  draw = false
})

var draw = document.querySelector('.draw')
draw.addEventListener('click', () => {
  draw = true
})