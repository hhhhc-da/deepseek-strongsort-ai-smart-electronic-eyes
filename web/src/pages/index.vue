<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

const rootRef = useTemplateRef<HTMLElement>('root')
const loaderRef = useTemplateRef<HTMLElement>('loader')
const cursorDotRef = useTemplateRef<HTMLElement>('cursorDot')
const cursorRingRef = useTemplateRef<HTMLElement>('cursorRing')
const timeTagRef = useTemplateRef<HTMLElement>('timeTag')

const heroGridCells = Array.from({ length: 64 }, (_, index) => index)

const cleanupFns: Array<() => void> = []

function scrollToSection(id: string) {
  const target = rootRef.value?.querySelector<HTMLElement>(`#${id}`)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  const loaderEl = loaderRef.value
  const dotEl = cursorDotRef.value
  const ringEl = cursorRingRef.value

  let loaderTimeoutId: number | undefined
  const scheduleLoaderHide = () => {
    if (!loaderEl)
      return
    loaderTimeoutId = window.setTimeout(() => {
      loaderEl.classList.add('hidden')
    }, 1600)
  }

  const onWindowLoad = () => scheduleLoaderHide()
  if (document.readyState === 'complete')
    scheduleLoaderHide()
  else
    window.addEventListener('load', onWindowLoad, { once: true })

  cleanupFns.push(() => {
    window.removeEventListener('load', onWindowLoad)
    if (loaderTimeoutId !== undefined)
      window.clearTimeout(loaderTimeoutId)
  })

  if (dotEl) {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dotEl.style.left = `${mouseX - 4}px`
      dotEl.style.top = `${mouseY - 4}px`
    }

    document.addEventListener('mousemove', onMouseMove)
    cleanupFns.push(() => document.removeEventListener('mousemove', onMouseMove))

    let ringRafId = 0
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringEl) {
        ringEl.style.left = `${ringX - 20}px`
        ringEl.style.top = `${ringY - 20}px`
      }
      ringRafId = window.requestAnimationFrame(animateRing)
    }

    ringRafId = window.requestAnimationFrame(animateRing)
    cleanupFns.push(() => window.cancelAnimationFrame(ringRafId))

    if (ringEl) {
      const hoverTargets = rootRef.value?.querySelectorAll<HTMLElement>('a, .expertise-card, .work-item') ?? []
      const onHoverStart = () => ringEl.classList.add('hover')
      const onHoverEnd = () => ringEl.classList.remove('hover')
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', onHoverStart)
        el.addEventListener('mouseleave', onHoverEnd)
      })
      cleanupFns.push(() => {
        hoverTargets.forEach((el) => {
          el.removeEventListener('mouseenter', onHoverStart)
          el.removeEventListener('mouseleave', onHoverEnd)
        })
      })
    }
  }

  const reveals = rootRef.value?.querySelectorAll<HTMLElement>('.reveal') ?? []
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add('visible')
      })
    },
    { threshold: 0.15 },
  )
  reveals.forEach(el => revealObserver.observe(el))
  cleanupFns.push(() => revealObserver.disconnect())

  const counters = rootRef.value?.querySelectorAll<HTMLElement>('.counter') ?? []
  const counterIntervals = new Set<number>()
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting)
          return
        const el = entry.target as HTMLElement
        const targetValue = Number(el.dataset.target || '0')
        let current = 0
        const step = targetValue / 40
        const timerId = window.setInterval(() => {
          current += step
          if (current >= targetValue) {
            current = targetValue
            window.clearInterval(timerId)
            counterIntervals.delete(timerId)
          }
          el.textContent = Math.floor(current).toString()
        }, 30)
        counterIntervals.add(timerId)
        counterObserver.unobserve(el)
      })
    },
    { threshold: 0.5 },
  )
  counters.forEach(el => counterObserver.observe(el))
  cleanupFns.push(() => {
    counterObserver.disconnect()
    counterIntervals.forEach(id => window.clearInterval(id))
    counterIntervals.clear()
  })

  let timeRafId = 0
  const updateTime = () => {
    const now = new Date()
    if (timeTagRef.value)
      timeTagRef.value.textContent = `${now.toLocaleTimeString()} — UTC+8`
    timeRafId = window.requestAnimationFrame(updateTime)
  }
  timeRafId = window.requestAnimationFrame(updateTime)
  cleanupFns.push(() => window.cancelAnimationFrame(timeRafId))
})

onBeforeUnmount(() => {
  cleanupFns.forEach(fn => fn())
  cleanupFns.length = 0
})
</script>

<template>
  <div ref="root" class="demo2c">
    <div id="loader" ref="loader" class="loader">
      <div class="loader-text">
        加载中
      </div>
      <div class="loader-bar" />
    </div>

    <div id="cursorDot" ref="cursorDot" class="cursor-dot" />
    <div id="cursorRing" ref="cursorRing" class="cursor-ring" />

    <span class="corner-tag top-right">创新计划 2025</span>
    <span id="timeTag" ref="timeTag" class="corner-tag bottom-left">—</span>

    <nav>
      <a href="/magic" class="nav-logo">AI.Traffic</a>
      <ul class="nav-links">
        <li>
          <a href="#about" @click.prevent="scrollToSection('about')">项目简介</a>
        </li>
        <li>
          <a href="#expertise" @click.prevent="scrollToSection('expertise')">技术栈</a>
        </li>
        <li>
          <a href="#works" @click.prevent="scrollToSection('works')">功能实现</a>
        </li>
        <li>
          <a href="#contact" @click.prevent="scrollToSection('contact')">团队联系</a>
        </li>
      </ul>
    </nav>

    <section id="hero" class="hero">
      <div class="hero-left">
        <h1 class="hero-name">
          电子眼<span>Eletric eyes</span>
        </h1>
        <p class="hero-title">
          DeepSeek+StrongSort 双AI赋能城市智慧交通电子眼 —
        </p>
      </div>
      <div class="hero-right">
        <div id="heroGrid" class="hero-grid">
          <div v-for="cell in heroGridCells" :key="cell" class="hero-grid-cell" />
        </div>
        <div class="hero-scroll">
          <span>下拉浏览</span>
          <div class="scroll-line" />
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="about-content reveal">
        <div class="section-label">
          <span class="section-number">01</span> 项目背景
        </div>
        <h2>以 <em>双AI技术</em> 驱动<br>重塑城市交通感知</h2>
        <p>
          本作品将 DeepSeek 融入决策判断，利用 StrongSort 多目标跟踪算法实现从行为检测到处理的闭环处理，为智慧交警系统提供全自动化、智能化的技术框架。
        </p>
      </div>
      <div class="about-stats reveal">
        <div class="stat">
          <div class="stat-number">
            <span class="counter" data-target="16">0</span>+
          </div>
          <div class="stat-label">
            团队已落地的竞赛项目
          </div>
        </div>
        <div class="stat">
          <div class="stat-number">
            <span class="counter" data-target="30000">0</span>+
          </div>
          <div class="stat-label">
            手写代码行数
          </div>
        </div>
        <div class="stat">
          <div class="stat-number">
            国家级
          </div>
          <div class="stat-label">
            大学生创新创业大赛
          </div>
        </div>
      </div>
    </section>

    <div class="marquee-wrapper">
      <div class="marquee">
        <span>DeepSeek</span><span class="filled">·</span>
        <span>StrongSort</span><span class="filled">·</span>
        <span>YOLOv12</span><span class="filled">·</span>
        <span>Vue3</span><span class="filled">·</span>
        <span>Nginx</span><span class="filled">·</span>
        <span>Smart Traffic</span><span class="filled">·</span>
      </div>
    </div>

    <section id="expertise" class="expertise">
      <div class="reveal">
        <div class="section-label">
          <span class="section-number">02</span> 核心技术
        </div>
        <h2>多模态 AI 感知与处理能力</h2>
      </div>
      <div class="expertise-grid">
        <div class="expertise-card reveal">
          <div class="card-num">
            001
          </div>
          <div class="card-title">
            多目标跟踪算法
          </div>
          <div class="card-desc">
            引入自适应特征融合机制，提升复杂路口场景下的目标关联精度与鲁棒性，筛选小价值目标，推动计算过程更加平稳、结果更准确。
          </div>
        </div>
        <div class="expertise-card reveal">
          <div class="card-num">
            002
          </div>
          <div class="card-title">
            数据模态转换接口
          </div>
          <div class="card-desc">
            自主研发物体行为预测算法，通过模长、方向归一化及一阶梯度数据训练轨迹分析模型，在极低的可用数据下仍然具备较好的鲁棒性。
          </div>
        </div>
        <div class="expertise-card reveal">
          <div class="card-num">
            003
          </div>
          <div class="card-title">
            智能体数据分析
          </div>
          <div class="card-desc">
            利用 DeepSeek-R1 作为 LLM 基座，结合结构化 Prompt 实现增强生成，进行违规行为法律判定，初步打造智慧交通智能体。
          </div>
        </div>
        <div class="expertise-card reveal">
          <div class="card-num">
            004
          </div>
          <div class="card-title">
            环境感知与视觉算法
          </div>
          <div class="card-desc">
            基于梯形区域检测智能分析车道信息，结合 YOLOv12、Inception 网络、三角形检测与形态学算法综合分析图像信息，为后续模型提供基础。
          </div>
        </div>
        <div class="expertise-card reveal">
          <div class="card-num">
            005
          </div>
          <div class="card-title">
            网络攻击检测与防御
          </div>
          <div class="card-desc">
            使用随机森林算法识别 DDOS 等网络攻击，即时通知运维人员，确保智慧交通系统的安全性与数据稳健。
          </div>
        </div>
        <div class="expertise-card reveal">
          <div class="card-num">
            006
          </div>
          <div class="card-title">
            稳健全面的后端一体化平台
          </div>
          <div class="card-desc">
            项目配有全面、完善的视频流媒体服务站、信息交换节点、网页后端服务，确保任务能够顺利紧性。
          </div>
        </div>
      </div>
    </section>

    <section id="works" class="works">
      <div class="reveal">
        <div class="section-label">
          <span class="section-number">03</span> 核心功能展示
        </div>
        <h2>功能实现场景</h2>
      </div>
      <div class="works-list">
        <a href="/magic" class="work-item reveal">
          <span class="work-year">违规</span>
          <span class="work-title">行为自动抓拍与违规判定</span>
          <span class="work-tag">Agent Analysis</span>
          <span class="work-arrow">→</span>
        </a>
        <a href="/magic" class="work-item reveal">
          <span class="work-year">追责</span>
          <span class="work-title">双层黄牌等多种复杂车牌实时识别</span>
          <span class="work-tag">Computer Vision</span>
          <span class="work-arrow">→</span>
        </a>
        <a href="/review" class="work-item reveal">
          <span class="work-year">审计</span>
          <span class="work-title">AI 审查结果二次复核</span>
          <span class="work-tag">Human Review</span>
          <span class="work-arrow">→</span>
        </a>
        <a href="/magic" class="work-item reveal">
          <span class="work-year">总结</span>
          <span class="work-title">一键导出 PDF 复核结果</span>
          <span class="work-tag">Work Summary</span>
          <span class="work-arrow">→</span>
        </a>
      </div>
    </section>

    <section class="philosophy reveal">
      <div class="section-label">
        <span class="section-number">04</span> 核心愿景
      </div>
      <blockquote>
        "利用国产大模型 <strong>DeepSeek</strong> 融入决策判定——<br>
        填补传统算法缺陷，让AI成为智慧交通的动力。"
      </blockquote>
      <cite>— DSASEE 研发团队</cite>
    </section>

    <section id="contact" class="contact">
      <div class="reveal">
        <h2>携手<br>共建<span>智慧</span><br>交通。</h2>
      </div>
      <div class="contact-info reveal">
        <div class="contact-item">
          <label>项目负责人</label>
          <a href="https://github.com/hhhhc-da">Nanoka</a>
        </div>
        <div class="contact-item">
          <label>GitHub 链接</label>
          <a href="https://github.com/hhhhc-da/deepseek-strongsort-ai-smart-electronic-eyes">https://github.com/hhhhc-da/deepseek-strongsort-ai-smart-electronic-eyes</a>
        </div>
      </div>
    </section>

    <footer>
      <span>© 2025 DeepSeek+StrongSort electric eyes</span>
      <span>计算机与信息工程学院</span>
    </footer>
  </div>
</template>

<style scoped>
.demo2c,
.demo2c *,
.demo2c *::before,
.demo2c *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.demo2c {
  --black: #0a0a0a;
  --white: #f5f5f0;
  --red: #e63226;
  --grey: #888;
  --light-grey: #e0e0dc;
  --font-sans: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 16px;
  font-family: var(--font-sans);
  background: var(--white);
  color: var(--black);
  overflow-x: hidden;
  cursor: default;
}
.demo2c ::selection {
  background: var(--red);
  color: var(--white);
}
.demo2c .cursor-dot {
  width: 8px;
  height: 8px;
  background: var(--red);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  mix-blend-mode: difference;
}
.demo2c .cursor-ring {
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--red);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition:
    width 0.3s,
    height 0.3s,
    border-color 0.3s;
  mix-blend-mode: difference;
}
.demo2c .cursor-ring.hover {
  width: 60px;
  height: 60px;
  border-color: var(--white);
}
.demo2c .loader {
  position: fixed;
  inset: 0;
  background: var(--black);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition:
    opacity 0.6s ease,
    visibility 0.6s ease;
}
.demo2c .loader.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.demo2c .loader-bar {
  width: 200px;
  height: 2px;
  background: #222;
  position: relative;
  overflow: hidden;
}
.demo2c .loader-bar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--red);
  animation: loading 1.5s ease-in-out forwards;
}
.demo2c .loader-text {
  color: var(--white);
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 300;
}
@keyframes loading {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.demo2c nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 28px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;
}
.demo2c .nav-logo {
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
}
.demo2c .nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}
.demo2c .nav-links a {
  color: var(--white);
  text-decoration: none;
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;
  padding-bottom: 4px;
}
.demo2c .nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--white);
  transition: width 0.3s ease;
}
.demo2c .nav-links a:hover::after {
  width: 100%;
}
.demo2c .hero {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  overflow: hidden;
}
.demo2c .hero-left {
  background: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px;
  position: relative;
}
.demo2c .hero-left::before {
  content: '创';
  position: absolute;
  top: -80px;
  left: -30px;
  font-size: 42vw;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  line-height: 1;
  pointer-events: none;
}
.demo2c .hero-name {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 0.95;
  letter-spacing: -0.03em;
  opacity: 0;
  transform: translateY(60px);
  animation: slideUp 0.8s ease forwards 1.8s;
}
.demo2c .hero-name span {
  display: block;
  color: var(--red);
}
.demo2c .hero-title {
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--grey);
  margin-top: 24px;
  font-weight: 300;
  opacity: 0;
  animation: fadeIn 1s ease forwards 2.3s;
}
.demo2c .hero-right {
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.demo2c .hero-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  opacity: 0;
  animation: fadeIn 1.5s ease forwards 2s;
}
.demo2c .hero-grid-cell {
  border: 0.5px solid rgba(0, 0, 0, 0.06);
}
.demo2c .hero-grid-cell:nth-child(12) {
  background: var(--red);
}
.demo2c .hero-grid-cell:nth-child(44) {
  background: var(--black);
}
.demo2c .hero-scroll {
  position: absolute;
  bottom: 48px;
  right: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: fadeIn 1s ease forwards 2.8s;
}
.demo2c .hero-scroll span {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  color: var(--grey);
}
.demo2c .scroll-line {
  width: 1px;
  height: 60px;
  background: var(--light-grey);
  position: relative;
  overflow: hidden;
}
.demo2c .scroll-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--red);
  animation: scrollDown 2s ease-in-out infinite;
}
@keyframes scrollDown {
  0% {
    top: -100%;
  }
  50% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
.demo2c section {
  padding: 140px 48px;
  position: relative;
}
.demo2c .section-label {
  font-size: 0.65rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--grey);
  font-weight: 400;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.demo2c .section-label::before {
  content: '';
  width: 40px;
  height: 1px;
  background: var(--grey);
}
.demo2c .section-number {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--red);
  margin-right: 4px;
}
.demo2c .reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}
.demo2c .reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.demo2c .about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  background: var(--white);
}
.demo2c .about-content h2 {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 36px;
}
.demo2c .about-content h2 em {
  font-style: italic;
  color: var(--red);
}
.demo2c .about-content p {
  font-size: 1rem;
  line-height: 1.85;
  color: #444;
  font-weight: 300;
  max-width: 480px;
}
.demo2c .about-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
}
.demo2c .stat {
  border-left: 2px solid var(--black);
  padding-left: 24px;
}
.demo2c .stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
}
.demo2c .stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--grey);
  margin-top: 8px;
  font-weight: 400;
}
.demo2c .marquee-wrapper {
  overflow: hidden;
  padding: 60px 0;
  background: var(--black);
  position: relative;
}
.demo2c .marquee {
  display: flex;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}
.demo2c .marquee span {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 40px;
}
.demo2c .marquee span.filled {
  color: var(--white);
  -webkit-text-stroke: none;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.demo2c .expertise {
  background: var(--white);
}
.demo2c .expertise h2 {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 72px;
}
.demo2c .expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}
.demo2c .expertise-card {
  border: 0.5px solid var(--light-grey);
  padding: 48px 36px;
  position: relative;
  overflow: hidden;
  transition:
    background 0.4s ease,
    color 0.4s ease;
}
.demo2c .expertise-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--red);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.demo2c .expertise-card:hover::before {
  transform: scaleX(1);
}
.demo2c .expertise-card:hover {
  background: var(--black);
  color: var(--white);
}
.demo2c .expertise-card:hover .card-desc {
  color: rgba(255, 255, 255, 0.6);
}
.demo2c .expertise-card:hover .card-num {
  color: var(--red);
}
.demo2c .card-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--light-grey);
  margin-bottom: 48px;
  transition: color 0.4s ease;
}
.demo2c .card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}
.demo2c .card-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #666;
  font-weight: 300;
  transition: color 0.4s ease;
}
.demo2c .works {
  background: var(--black);
  color: var(--white);
}
.demo2c .works h2 {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 80px;
}
.demo2c .works-list {
  display: flex;
  flex-direction: column;
}
.demo2c .work-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: center;
  gap: 48px;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: var(--white);
  transition: padding-left 0.4s ease;
}
.demo2c .work-item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.demo2c .work-item:hover {
  padding-left: 24px;
}
.demo2c .work-item:hover .work-title {
  color: var(--red);
}
.demo2c .work-item:hover .work-arrow {
  transform: translateX(8px);
  opacity: 1;
}
.demo2c .work-item:hover::before {
  transform: scaleX(1);
}
.demo2c .work-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--red);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s ease;
}
.demo2c .work-year {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--grey);
}
.demo2c .work-title {
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}
.demo2c .work-tag {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--grey);
  padding: 6px 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  white-space: nowrap;
}
.demo2c .work-arrow {
  font-size: 1.2rem;
  transform: translateX(-8px);
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  color: var(--red);
}
.demo2c .philosophy {
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.demo2c .philosophy blockquote {
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: -0.02em;
  max-width: 900px;
  margin: 0 auto;
}
.demo2c .philosophy blockquote strong {
  font-weight: 700;
  color: var(--red);
}
.demo2c .philosophy cite {
  display: block;
  font-style: normal;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--grey);
  margin-top: 40px;
  font-weight: 400;
}
.demo2c .contact {
  background: var(--black);
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}
.demo2c .contact h2 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}
.demo2c .contact h2 span {
  color: var(--red);
}
.demo2c .contact-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 32px;
}
.demo2c .contact-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.demo2c .contact-item label {
  font-size: 0.6rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--grey);
  font-weight: 400;
}
.demo2c .contact-item a {
  color: var(--white);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 300;
  position: relative;
  display: inline-block;
  width: fit-content;
}
.demo2c .contact-item a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--red);
  transition: width 0.3s ease;
}
.demo2c .contact-item a:hover::after {
  width: 100%;
}
.demo2c .social-links {
  display: flex;
  gap: 24px;
  margin-top: 48px;
}
.demo2c .social-links a {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white);
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}
.demo2c .social-links a:hover {
  background: var(--red);
  border-color: var(--red);
}
.demo2c footer {
  background: var(--black);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 32px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--grey);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.demo2c .corner-tag {
  position: fixed;
  font-size: 0.55rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--grey);
  z-index: 90;
  mix-blend-mode: difference;
  font-weight: 300;
}
.demo2c .corner-tag.top-right {
  margin-top: 3%;
  top: 36px;
  right: 48px;
  writing-mode: vertical-lr;
}
.demo2c .corner-tag.bottom-left {
  bottom: 12px;
  left: 48px;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 900px) {
  .demo2c nav {
    padding: 20px 24px;
  }
  .demo2c section {
    padding: 80px 24px;
  }
  .demo2c .hero {
    grid-template-columns: 1fr;
  }
  .demo2c .hero-right {
    display: none;
  }
  .demo2c .hero-left {
    justify-content: center;
    padding: 120px 24px;
  }
  .demo2c .about {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .demo2c .expertise-grid {
    grid-template-columns: 1fr;
  }
  .demo2c .contact {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
