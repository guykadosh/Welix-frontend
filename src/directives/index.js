export const focusDirective = {
  mounted: el => {
    el.focus()
  },
}

export const responsive = {
  mounted: el => {
    console.log(el.clientWidth)
    if (el.clientWidth < 400) {
      el.classList.add('tiny')
      el.classList.remove('small')
      el.classList.remove('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
    if (el.clientWidth < 600 && el.clientWidth > 400) {
      el.classList.remove('tiny')
      el.classList.add('small')
      el.classList.remove('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
    if (el.clientWidth < 700 && el.clientWidth > 600) {
      el.classList.remove('tiny')
      el.classList.remove('small')
      el.classList.add('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
  },
  updated: el => {
    console.log(el.clientWidth)
    if (el.clientWidth < 400) {
      el.classList.add('tiny')
      el.classList.remove('small')
      el.classList.remove('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
    if (el.clientWidth < 600 && el.clientWidth >= 400) {
      el.classList.remove('tiny')
      el.classList.add('small')
      el.classList.remove('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
    if (el.clientWidth < 700 && el.clientWidth >= 600) {
      el.classList.remove('tiny')
      el.classList.remove('small')
      el.classList.add('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
    if (el.clientWidth < 900 && el.clientWidth >= 700) {
      el.classList.remove('tiny')
      el.classList.remove('small')
      el.classList.remove('medium')
      el.classList.remove('large')
      el.classList.remove('wide')
    }
  },
}

export const rainbowDirective = {
  mounted(el) {
    el.onkeyup = () => {
      const color = _getRandomColor()
      el.style.backgroundColor = color
      el.style.color = _isDarkColor(color) ? 'white' : 'black'
    }
  },
}

export const customOnDirective = {
  mounted(el, binding) {
    console.log('binding', binding)
    const type = binding.arg
    const fn = binding.value
    el.addEventListener(type, fn)
  },
}

export const clickOutsideDirective = {
  mounted(el, { value: cb }) {
    el.clickOutside = ({ clientX, clientY }) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      if (
        !(
          clientX > left &&
          clientX < left + width &&
          clientY > top &&
          clientY < top + height
        )
      ) {
        cb()
        console.log('outside')
      } else {
        console.log('inside')
      }
    }
    setTimeout(() => {
      document.addEventListener('click', el.clickOutside)
    }, 0)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutside)
  },
}

export const close = {
  mounted(el, { value }, x) {
    console.log(x)
    el.onkeyup = () => {
      const color = _getRandomColor()
      el.style.backgroundColor = color
      el.style.color = _isDarkColor(color) ? 'white' : 'black'
    }
  },
}

function _isDarkColor(c) {
  c = c.substring(1) // strip #
  const rgb = parseInt(c, 16) // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >> 8) & 0xff // extract green
  const b = (rgb >> 0) & 0xff // extract blue
  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  return luma < 100
}

function _getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
