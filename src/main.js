import './style.css'
import Prism from 'prismjs'

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

localStorage.theme = 'light'

function setPostScrollListener() {
  const navDom = document.querySelector('#moegi-header')
  const headerDom = document.querySelector('#article-header')
  if (navDom && headerDom) {
    var ticking = false

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update)
      }
      ticking = true
    }

    function update() {
      var trigger = headerDom.getBoundingClientRect().top + window.scrollY
      var triggerOffset = headerDom.offsetHeight - navDom.offsetHeight
      if (window.scrollY >= trigger + triggerOffset) {
        navDom.classList.add('moegi-header-in-post-view')
      } else {
        navDom.classList.remove('moegi-header-in-post-view')
      }
      ticking = false
    }
    window.addEventListener('scroll', requestTick, { passive: true })
    window.addEventListener('resize', requestTick, false)
    update() 
  }
}
setPostScrollListener()

function setHeaderListener() {
  function handleClick() {
    document.querySelector('#moegi-header').classList.toggle('moegi-header-menu-open')
  }
  document.querySelector('#moegi-header-menu-icon').addEventListener('click', handleClick, false)
  document.querySelector('.moegi-navigation-mpanel .mask').addEventListener('click', handleClick, false)
}
setHeaderListener()

function postRender() {
  const selector = 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code, pre > code';
  const container = document.getElementById('ghost-article')
  const nodes = container.querySelectorAll(selector)
  nodes.forEach(node => {
    Prism.highlightElement(node)
  })
}