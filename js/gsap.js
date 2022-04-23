gsap.registerPlugin(ScrollTrigger);

gsap.set('body', {visibility: 'visible'});

onload = gsap.timeline();

onload.from('.hero__text h1', {
  delay: 0.8,
  duration: 0.5,
  opacity: 0,
  x: -20
})
.from('.hero__text p', {
  opacity: 0,
  x: -20,
  stagger: 0.5
})
.from('.hero__text button', {
  opacity: 0,
  x: -20,
  stagger: 0.5
})
.from('.hero__image', {
  opacity: 0,
  x: 30,
  stagger: 0.2
})

convenient = gsap.timeline({
  scrollTrigger: {
    trigger: '#convenient',
    start: 'top 60%'
  }
})

convenient.from('#convenient .convenient__image', {
  opacity: 0,
  duration: 0.8
})
.from('#convenient .convenient__text', {
  duration: 1,
  opacity: 0,
  x: 40
})


flexible = gsap.timeline({
  scrollTrigger: {
    trigger: '#flexible',
    start: 'top 60%'
  }
})

flexible.from('.flexible__grid__text ul li', {
  opacity: 0,
  x: -20,
  duration: 0.8,
  stagger: 0.5
})
.from('.flexible__grid__image', {
  duration: 0.8,
  opacity: 0
})