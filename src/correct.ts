const customizeBtn = document.querySelector('#customize-btn')
let isPage1 = true

customizeBtn.addEventListener('click', () => {
  const firstPage = document.querySelector('.page-1')
  const secondPage = document.querySelector('.page-2')

  if (isPage1 === true) {
    firstPage.classList.add('hidden')
    secondPage.classList.remove('hidden')
    customizeBtn.innerHTML = 'Checkout'
  } else {
    secondPage.classList.add('hidden')
    firstPage.classList.remove('hidden')
    customizeBtn.innerHTML = 'Customize'
  }

  isPage1 = !isPage1
})

const options = document.querySelectorAll('.option')

const partsSummary = document.querySelectorAll('.part-summary')

const selectionRows = document.querySelectorAll('.selection-row')

for (
  let selectionIndex = 0;
  selectionIndex < selectionRows.length;
  selectionIndex++
) {
  const selectionRowOptions = selectionRows[selectionIndex].querySelectorAll(
    '.option'
  )

  for (let i = 0; i < selectionRowOptions.length; i++) {
    selectionRowOptions[i].addEventListener('click', () => {
      partsSummary[selectionIndex].innerHTML = selectionRowOptions[i].innerText
    })
  }
}

document.addEventListener('scroll', () => {
  console.log(window.scrollY)
  if (window.scrollY > 100) {
    selectionRows[0].classList.add('transparent')
  } else {
    selectionRows[0].classList.remove('transparent')
  }
})
