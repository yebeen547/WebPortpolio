window.onload = function () {
  alert('예빈이의 웹사이트에 오신 걸 환영해요 :)')
}

function updateClock() {
  const clock = document.getElementById('clock')
  const now = new Date()
  const timeString = now.toLocaleTimeString()
  clock.textContent = '현재 시간 : ' + timeString
}

setInterval(updateClock, 1000)
updateClock()

const techBoxes = document.querySelectorAll('.tech-box')

window.addEventListener('scroll', () => {
  techBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (boxTop < windowHeight - 100) {
      box.classList.remove('hidden')
    }
  })
})
