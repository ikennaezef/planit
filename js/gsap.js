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
  duration: 1
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


whychoose1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.whychoose__reason:nth-child(1)',
    start: 'top 60%'
  }
})

whychoose1.from('.whychoose__reason:nth-child(1)', {
  y: 20,
  opacity: 0,
  duration: 1
})

whychoose2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.whychoose__reason:nth-child(2)',
    start: 'top 60%'
  }
})

whychoose2.from('.whychoose__reason:nth-child(2)', {
  y: 20,
  opacity: 0,
  duration: 1
})

whychoose3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.whychoose__reason:nth-child(3)',
    start: 'top 60%'
  }
})

whychoose3.from('.whychoose__reason:nth-child(3)', {
  y: 20,
  opacity: 0,
  duration: 1
})

whychoose4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.whychoose__reason:nth-child(4)',
    start: 'top 60%'
  }
})

whychoose4.from('.whychoose__reason:nth-child(4)', {
  y: 20,
  opacity: 0,
  duration: 1
})


satisfaction = gsap.timeline({
  scrollTrigger: {
    trigger: '#satisfaction',
    start: 'top 60%'
  }
})

satisfaction.from('#satisfaction .satisfaction__image', {
  opacity: 0,
  duration: 1
})
.from('#satisfaction .satisfaction__text', {
  duration: 1,
  opacity: 0,
  x: 40
})


answer1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.answers__answer:nth-child(1)',
    start: 'top 60%'
  }
})

answer1.from('.answers__answer:nth-child(1)', {
  y: 20,
  opacity: 0,
  duration: 1
})

answer2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.answers__answer:nth-child(2)',
    start: 'top 60%'
  }
})

answer2.from('.answers__answer:nth-child(2)', {
  y: 20,
  opacity: 0,
  duration: 1
})

answer3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.answers__answer:nth-child(3)',
    start: 'top 60%'
  }
})

answer3.from('.answers__answer:nth-child(3)', {
  y: 20,
  opacity: 0,
  duration: 1
})

answer4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.answers__answer:nth-child(4)',
    start: 'top 60%'
  }
})

answer4.from('.answers__answer:nth-child(4)', {
  y: 20,
  opacity: 0,
  duration: 1
})