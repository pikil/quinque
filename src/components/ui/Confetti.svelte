<div class="fixed inset-0 pointer-events-none z-50 overflow-hidden">
  {#each particles as particle (particle.id)}
    <div
      class="absolute confetti-particle"
      style="
        left: {particle.x}%;
        top: {particle.y}%;
        width: {particle.size}px;
        height: {particle.size}px;
        background-color: {particle.color};
        transform: rotate({particle.rotation}deg);
        opacity: {particle.opacity};
        border-radius: {particle.borderRadius};
      "
    ></div>
  {/each}
</div>

<script>
  import { onMount } from 'svelte'

  /**
   * @typedef {Object} Props
   * @property {string} [primaryColor] - Primary color for confetti (color1 or color2)
   * @property {number} [particleCount] - Number of confetti particles
   * @property {number} [duration] - Animation duration in ms
   */

  /**
   * @typedef {Object} Particle
   * @property {number} id
   * @property {number} x
   * @property {number} y
   * @property {number} vx
   * @property {number} vy
   * @property {number} size
   * @property {number} rotation
   * @property {number} rotationSpeed
   * @property {string} color
   * @property {string} borderRadius
   * @property {number} opacity
   * @property {number} gravity
   * @property {number} drag
   */

  /** @type {Props} */
  let {
    primaryColor = '#818cf8',
    particleCount = 150,
    duration = 5000
  } = $props()

  /** @type {Particle[]} */
  let particles = $state([])

  /**
   * @param {string} primaryColor
   */
  const getColors = (primaryColor) => [
    primaryColor,
    primaryColor === '#818cf8' ? '#f472b6' : '#818cf8',
    '#fbbf24',
    '#34d399',
    '#60a5fa',
    '#a78bfa'
  ]

  /**
   * @param {number} id
   */
  const generateParticle = (id) => {
    const angle = Math.random() * Math.PI * 2
    const velocity = 2 + Math.random() * 6
    const colors = getColors(primaryColor)

    return {
      id,
      x: 50 + (Math.random() - 0.5) * 10,
      y: -10 - Math.random() * 20,
      vx: Math.cos(angle) * velocity * 0.05,
      vy: 0.1 + Math.random() * 0.3,
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: Math.random() > 0.5 ? '2px' : '50%',
      opacity: 1,
      gravity: 0.005 + Math.random() * 0.01,
      drag: 0.99 + Math.random() * 0.005
    }
  }

  /**
   * @param {number} startTime
   */
  const animate = (startTime) => {
    const elapsed = Date.now() - startTime
    const progress = elapsed / duration

    if (progress >= 1) {
      particles = []
      return
    }

    // Easing function for smooth deceleration
    const easeOut = 1 - Math.pow(1 - progress, 3)

    particles = particles.map((p) => {
      p.vy += p.gravity
      p.vx *= p.drag
      p.x += p.vx * (1 - easeOut * 0.5)
      p.y += p.vy
      p.rotation += p.rotationSpeed
      p.opacity = 1 - progress

      return { ...p }
    })

    // Remove particles that fall below viewport
    particles = particles.filter((p) => p.y < 120)

    if (particles.length > 0)
      requestAnimationFrame(() => animate(startTime))
  }

  onMount(() => {
    particles = Array.from({ length: particleCount }, (_, i) => generateParticle(i))
    requestAnimationFrame(() => animate(Date.now()))
  })
</script>

<style>
  .confetti-particle {
    will-change: transform, opacity;
  }
</style>
