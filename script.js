/**
 * ============================================================================
 * BEYOND THE FRAME — MASTER SCRIPT
 * Personal Portfolio of Devarakonda Rakesh
 * Concept: A mind in motion. A future in creation.
 * Architecture: Vanilla JavaScript (ES6+), WebGL (Three.js), Web Audio API
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 01. STATE & DATA DICTIONARIES
  // --------------------------------------------------------------------------

  /**
   * Data repository for the Technical World capabilities inspector
   */
  const TECH_DETAILS_DATA = {
    html: {
      category: 'MARKUP & ARCHITECTURE',
      name: 'HTML5 Semantic Engineering',
      role: 'Structural Foundation & Accessible Document Trees',
      description: 'Crafting clean, accessible, and standards-compliant document structures. Prioritizing semantic tags (header, nav, main, section, article), rich Open Graph meta hierarchies, ARIA accessibility landmarks, and native Canvas graphics integration.',
      points: [
        'Semantic hierarchy ensuring optimal SEO and screen-reader accessibility.',
        'Integration of HTML5 Canvas API for high-performance interactive graphics.',
        'Modern multimedia embedding with responsive srcset and picture elements.',
        'Strict conformance to WCAG 2.1 AA accessibility guidelines.'
      ],
      tip: 'Editable in script.js: You can update your ongoing focus areas and projects as your knowledge grows.'
    },
    css: {
      category: 'STYLING & KINETIC DESIGN',
      name: 'CSS3 & Modern Design Systems',
      role: 'Spatial Layouts, Motion Choreography & Apple-Grade Aesthetics',
      description: 'Developing responsive, fluid UI design systems using modern CSS paradigms. Specializing in CSS Grid, Flexbox, custom CSS properties for dynamic theming, backdrop filters, and hardware-accelerated animations.',
      points: [
        'Responsive spatial engineering utilizing CSS Grid, Flexbox, and clamp() fluid scaling.',
        'Micro-interactions and kinetic transitions using cubic-bezier timing curves.',
        'Custom properties (variables) architecture for systematic token management.',
        'Strict support for prefers-reduced-motion to guarantee inclusive accessibility.'
      ],
      tip: 'Editable in script.js: Update layout methodologies and animations as you experiment with new techniques.'
    },
    javascript: {
      category: 'INTERACTION & LOGIC',
      name: 'JavaScript (ESNext)',
      role: 'Reactive State, Asynchronous Systems & DOM Manipulation',
      description: 'Building robust, framework-free browser experiences using pure vanilla JavaScript. Deeply practicing asynchronous execution (Promises, async/await), event delegation, Fetch API, LocalStorage persistence, and Web Audio API synthesis.',
      points: [
        'Modular ES6+ architecture (classes, modules, arrow functions, destructuring).',
        'Asynchronous data fetching, error handling, and robust DOM lifecycle control.',
        'Interactive graphics coordination via requestAnimationFrame and Canvas.',
        'Browser API integration: IntersectionObserver, Web Audio, and Clipboard APIs.'
      ],
      tip: 'Editable in script.js: Add specific algorithms or web APIs you are exploring.'
    },
    python: {
      category: 'ALGORITHMIC LOGIC & SCRIPTING',
      name: 'Python',
      role: 'Problem Solving, Algorithmic Analysis & Scripting Automation',
      description: 'Leveraging Python for algorithmic problem solving, clean scripting, and rapid prototyping. Practicing core computer science paradigms including sorting, graph traversals, dynamic programming, and file/data manipulation.',
      points: [
        'Algorithmic problem-solving on platforms like LeetCode and HackerRank.',
        'Data structure implementations (linked lists, stacks, trees, heaps).',
        'Automated utility scripts, file parsing, and web scraping experiments.',
        'Foundational knowledge for upcoming machine learning and backend studies.'
      ],
      tip: 'Editable in script.js: Add your current problem-solving milestones or coursework topics.'
    },
    c: {
      category: 'SYSTEMS & FOUNDATION',
      name: 'C Programming',
      role: 'Memory Architecture, Pointer Mechanics & Core Computing',
      description: 'Studying the lower levels of computer science to understand how software communicates with hardware. Practicing manual memory allocation (malloc, free), pointer arithmetic, custom struct data structures, and POSIX fundamentals.',
      points: [
        'Understanding memory layouts: Heap, Stack, Text, and BSS segments.',
        'Pointer mechanics, double pointers, and manual dynamic memory allocation.',
        'Implementing data structures (arrays, linked lists, hash tables) from scratch.',
        'Gaining deep architectural intuition for how higher-level languages execute.'
      ],
      tip: 'Editable in script.js: Document your systems programming assignments and low-level explorations.'
    },
    future: {
      category: 'THE HORIZON',
      name: 'Future Horizons & Emerging Tech',
      role: 'Continuous Roadmap: Modern Frameworks & Distributed Systems',
      description: 'A proactive development roadmap representing technologies currently being planned, researched, or introduced into upcoming academic and personal sprints.',
      points: [
        'Modern Frontend Frameworks: Exploring React, Next.js, and TypeScript.',
        'Backend Engineering: RESTful APIs, Node.js, Express, and Python Flask.',
        'Database Foundations: Relational SQL modeling and document storage.',
        'Cloud & DevOps: Docker containerization, Git workflows, and CI/CD pipelines.'
      ],
      tip: 'Editable in script.js: Update this roadmap as your academic semesters and projects advance.'
    }
  };

  /**
   * Data repository for Selected Works modal
   */
  const PROJECTS_DATA = {
    'beyond-the-frame': {
      number: 'PROJECT SPECIFICATION // 01',
      title: 'Beyond The Frame Portfolio',
      tagline: 'Award-Grade Personal Portfolio & Interactive Archive',
      description: 'A bespoke personal digital presentation designed and engineered from first principles without heavy third-party UI libraries. Developed with semantic HTML5, modern CSS3, and vanilla JavaScript. Features a custom WebGL 3D wireframe core, integrated Web Audio ambient synthesizer, magnetic controls, and full accessibility compliance.',
      features: [
        'Custom WebGL / Three.js 3D kinetic wireframe with smooth cursor inertia and 2D canvas fallback.',
        'Synthesized ambient soundscape engine using the browser native Web Audio API (zero external audio files).',
        'Kinetic cursor and magnetic physics applied to buttons and interactive targets.',
        'Responsive typography scale using clamp() and editorial layout inspired by premium digital product presentations.'
      ],
      tags: ['HTML5 Semantic', 'CSS3 Custom Tokens', 'Vanilla JavaScript', 'Three.js / WebGL', 'Web Audio API'],
      liveLink: '#home',
      sourceLink: 'https://github.com/rakeshdevarakonda870-wq'
    },
    'algo-lens': {
      number: 'PROJECT SPECIFICATION // 02',
      title: 'Algorithm Lens',
      tagline: 'Interactive Sorting & Graph Traversal Visualizer',
      description: 'An educational visualizer built to assist computer science students in comprehending algorithmic mechanics in real-time. Translates abstract theoretical complexity into interactive step-by-step visual transitions.',
      features: [
        'Real-time visualization of QuickSort, MergeSort, BubbleSort, and InsertionSort.',
        'Interactive controls for array size, execution speed, and custom dataset generation.',
        'Live comparison counter tracking comparisons and swaps against Big-O bounds.',
        'Clear asynchronous queue choreography preventing UI thread blocking.'
      ],
      tags: ['JavaScript (ES6)', 'HTML5 Canvas', 'Data Structures', 'Asynchronous Queues'],
      liveLink: 'https://github.com/rakeshdevarakonda870-wq',
      sourceLink: 'https://github.com/rakeshdevarakonda870-wq'
    },
    'pulse-engine': {
      number: 'PROJECT SPECIFICATION // 03',
      title: 'Pulse Focus Engine',
      tagline: 'Minimalist Developer Workflow & Task Manager',
      description: 'A focused, distraction-free productivity environment tailored for coding sprints and study sessions. Designed with rapid keyboard shortcuts, instant fuzzy search, and persistent local storage.',
      features: [
        'Keyboard-first design philosophy with command palette shortcuts.',
        'Persistent client-side state synchronized with Web Storage API.',
        'Dynamic categorization for coursework, coding challenges, and project milestones.',
        'Zero network latency with instant client-side query filtering.'
      ],
      tags: ['JavaScript', 'LocalStorage API', 'CSS Grid', 'Keyboard Shortcuts'],
      liveLink: 'https://github.com/rakeshdevarakonda870-wq',
      sourceLink: 'https://github.com/rakeshdevarakonda870-wq'
    },
    'campus-hub': {
      number: 'PROJECT SPECIFICATION // 04',
      title: 'Campus Hub & Resource Portal',
      tagline: 'Academic Collaboration & Peer Exchange Platform',
      description: 'A prototype student platform designed to address the fragmentation of university coursework materials, code review notes, and study group coordination across departments.',
      features: [
        'Modular departmental course repository with tags for syllabus and notes.',
        'Peer code review scratchpad for collaborative debugging sessions.',
        'Clean, accessible responsive dashboard layout with dark mode native aesthetic.',
        'Drafted RESTful API endpoints for future Python/Flask backend integration.'
      ],
      tags: ['UI/UX Prototyping', 'HTML5 / CSS3', 'JavaScript', 'Python Architecture Concept'],
      liveLink: 'https://github.com/rakeshdevarakonda870-wq',
      sourceLink: 'https://github.com/rakeshdevarakonda870-wq'
    }
  };

  // --------------------------------------------------------------------------
  // 02. PRELOADER & CINEMATIC INTRO SEQUENCE
  // --------------------------------------------------------------------------

  function triggerHeroReveals() {
    const revealElements = document.querySelectorAll('.hero-section .reveal-fade, .hero-section .reveal-text');
    revealElements.forEach((el, index) => {
      const delay = parseInt(el.getAttribute('data-delay') || (index * 150), 10);
      setTimeout(() => {
        el.classList.add('is-revealed');
      }, delay);
    });
  }

  function initIntroSequence() {
    const introScreen = document.getElementById('intro-screen');
    const skipBtn = document.getElementById('skip-intro-btn');
    const progressFill = document.getElementById('intro-progress-fill');
    const progressNum = document.getElementById('intro-progress-num');
    const actionContainer = document.getElementById('intro-action-container');
    const exploreBtn = document.getElementById('intro-explore-btn');

    if (!introScreen) return;

    let loaderTimer = null;

    function dismissIntro() {
      if (introScreen.classList.contains('fade-out')) return;
      
      if (loaderTimer) {
        clearInterval(loaderTimer);
        loaderTimer = null;
      }
      introScreen.classList.add('fade-out');
      document.body.classList.remove('is-loading');
      sessionStorage.setItem('dr_intro_seen', 'true');

      // Trigger hero reveals with natural stagger
      setTimeout(() => {
        triggerHeroReveals();
      }, 300);

      // Remove intro from DOM flow after fade
      setTimeout(() => {
        introScreen.style.display = 'none';
      }, 850);
    }

    // Check for reduced motion or previous dismissal in this session
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || sessionStorage.getItem('dr_intro_seen') === 'true') {
      introScreen.style.display = 'none';
      document.body.classList.remove('is-loading');
      triggerHeroReveals();
      return;
    }

    let progress = 0;
    const duration = 1600; // 1.6s smooth loading
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    loaderTimer = setInterval(() => {
      progress += step;
      if (progress >= 100) {
        progress = 100;
        clearInterval(loaderTimer);
        loaderTimer = null;
        onLoadingComplete();
      }

      if (progressFill) progressFill.style.width = `${progress}%`;
      if (progressNum) progressNum.textContent = `${Math.floor(progress)}%`;
    }, intervalTime);

    function onLoadingComplete() {
      if (actionContainer) {
        actionContainer.classList.remove('hidden');
      }
      // If user doesn't click explore within 2.5s, auto proceed gracefully
      setTimeout(() => {
        if (!introScreen.classList.contains('fade-out')) {
          dismissIntro();
        }
      }, 2500);
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', dismissIntro);
    }

    if (exploreBtn) {
      exploreBtn.addEventListener('click', dismissIntro);
    }

    // Keyboard support: Escape or Enter to skip/explore
    window.addEventListener('keydown', (e) => {
      if (introScreen.style.display !== 'none' && !introScreen.classList.contains('fade-out')) {
        if (e.key === 'Escape' || e.key === 'Enter') {
          dismissIntro();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 03. THREE.JS / WEBGL 3D KINETIC COMPOSITION (WITH 2D FALLBACK)
  // --------------------------------------------------------------------------

  function initHeroCanvas() {
    const canvas = document.getElementById('hero-webgl-canvas');
    if (!canvas) return;

    // Test Three.js availability
    if (typeof THREE !== 'undefined') {
      try {
        initThreeJsScene(canvas);
        return;
      } catch (err) {
        console.warn('WebGL initialization fallback to 2D Canvas:', err);
      }
    }

    // Graceful 2D Canvas Constellation Fallback
    initCanvas2DFallback(canvas);
  }

  /**
   * Three.js 3D kinetic architectural wireframe with shimmering particle matrix
   */
  function initThreeJsScene(canvas) {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || (window.innerHeight || 800);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    // Primary Kinetic Group
    const kineticGroup = new THREE.Group();
    scene.add(kineticGroup);

    // 1. Central Icosahedron Wireframe (Architectural Core)
    const geometryIcosahedron = new THREE.IcosahedronGeometry(7, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(geometryIcosahedron);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.35,
      linewidth: 1
    });
    const icosahedronLines = new THREE.LineSegments(wireframeGeometry, lineMaterial);
    kineticGroup.add(icosahedronLines);

    // 2. Secondary Inner Platinum Sphere
    const innerGeo = new THREE.SphereGeometry(4.2, 16, 16);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.18
    });
    const innerSphere = new THREE.LineSegments(innerWire, innerMat);
    kineticGroup.add(innerSphere);

    // 3. Surrounding Cosmic Particles
    const particlesCount = 280;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 9 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00d2ff,
      size: 0.18,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    kineticGroup.add(particleCloud);

    // Responsive position offset (position slightly right on desktop)
    function updateGroupPosition() {
      if (window.innerWidth > 991) {
        kineticGroup.position.set(4.5, 0, 0);
      } else {
        kineticGroup.position.set(0, 1.5, -4);
      }
    }
    updateGroupPosition();

    // Mouse Interaction Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;
      mouseX = (e.clientX - halfWidth) / halfWidth;
      mouseY = (e.clientY - halfHeight) / halfHeight;
    }, { passive: true });

    // Handle Window Resize
    function onWindowResize() {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || (window.innerHeight || 800);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      updateGroupPosition();
    }
    window.addEventListener('resize', onWindowResize, { passive: true });

    // Render Animation Loop
    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth damping mouse response
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Autonomous rotation
      icosahedronLines.rotation.x += 0.0018;
      icosahedronLines.rotation.y += 0.0025;

      innerSphere.rotation.x -= 0.0022;
      innerSphere.rotation.y -= 0.0015;

      particleCloud.rotation.y += 0.0008;

      // Interactive subtle tilt
      kineticGroup.rotation.y = targetX * 0.45;
      kineticGroup.rotation.x = -targetY * 0.35;

      renderer.render(scene, camera);
    }
    animate();
  }

  /**
   * 2D Canvas Fallback: Kinetic Constellation & Orbital Prism
   */
  function initCanvas2DFallback(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.clientHeight || (window.innerHeight || 800));

    const particles = [];
    const count = 48;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.45 ? 'rgba(0, 210, 255, 0.45)' : 'rgba(226, 232, 240, 0.25)'
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.clientWidth || window.innerWidth;
      height = canvas.height = canvas.clientHeight || (window.innerHeight || 800);
    }, { passive: true });

    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital rings on desktop/mobile
      const cx = window.innerWidth > 991 ? width * 0.68 : width * 0.5;
      const cy = window.innerWidth > 991 ? height * 0.5 : height * 0.4;
      const baseR = Math.min(width, height) * 0.24;

      angle += 0.005;

      ctx.save();
      ctx.translate(cx, cy);

      // Primary orbital ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, baseR * 1.1, baseR * 0.42, angle, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Secondary counter-orbital ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, baseR * 0.75, baseR * 0.28, -angle * 1.4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.16)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Center atmospheric glow
      const grad = ctx.createRadialGradient(0, 0, 4, 0, 0, baseR * 0.85);
      grad.addColorStop(0, 'rgba(0, 210, 255, 0.14)');
      grad.addColorStop(0.5, 'rgba(0, 102, 255, 0.05)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 0.85, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Connect particles within proximity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 210, 255, ${0.16 * (1 - dist / 125)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

  // --------------------------------------------------------------------------
  // 04. CUSTOM CURSOR & MAGNETIC CONTROLS
  // --------------------------------------------------------------------------

  function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Skip on touch/mobile devices
    if (window.matchMedia('(pointer: coarse), (max-width: 991px)').matches) {
      cursor.style.display = 'none';
      return;
    }

    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover interactions
    const interactiveSelectors = 'a, button, .magnetic-target, .tech-card, .timeline-node, input, textarea';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add('hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove('hovering');
      }
    });

    // Window exit
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  /**
   * Magnetic physics pull on buttons & targets
   */
  function initMagneticButtons() {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const magneticBtns = document.querySelectorAll('.magnetic-btn, .magnetic-target');

    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.22;
        const deltaY = (e.clientY - centerY) * 0.22;

        btn.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 05. AMBIENT AUDIO SYNTHESIZER (WEB AUDIO API)
  // --------------------------------------------------------------------------

  function initAmbientAudio() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    const soundStateText = document.getElementById('sound-state-text');
    if (!soundBtn) return;

    let audioCtx = null;
    let masterGain = null;
    let osc1 = null;
    let osc2 = null;
    let filter = null;
    let isPlaying = false;

    function createSoundEngine() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;

      audioCtx = new AudioContext();

      // Master Gain
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      // Lowpass Biquad Filter for ambient warmth
      filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, audioCtx.currentTime);
      filter.Q.setValueAtTime(1.5, audioCtx.currentTime);
      filter.connect(masterGain);

      // Oscillator 1: Root Drone (55Hz / A1)
      osc1 = audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, audioCtx.currentTime);
      osc1.connect(filter);
      osc1.start();

      // Oscillator 2: Harmonics (110Hz / A2)
      osc2 = audioCtx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110, audioCtx.currentTime);
      osc2.connect(filter);
      osc2.start();

      return true;
    }

    // Play subtle soft chime on interaction
    function playChime(freq = 440) {
      if (!audioCtx || !isPlaying) return;
      try {
        const chimeGain = audioCtx.createGain();
        chimeGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
        chimeGain.connect(audioCtx.destination);

        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.connect(chimeGain);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
      } catch (e) {
        // Safe ignore
      }
    }

    soundBtn.addEventListener('click', () => {
      if (!audioCtx) {
        const ok = createSoundEngine();
        if (!ok) {
          alert('Web Audio API is not supported in this browser environment.');
          return;
        }
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!isPlaying) {
        // Smooth Fade In to gentle background level (0.04)
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.2);
        isPlaying = true;
        soundBtn.classList.add('is-active');
        if (soundStateText) soundStateText.textContent = 'ON';
        soundBtn.setAttribute('aria-label', 'Toggle ambient atmospheric audio (Current: ON)');
        playChime(523.25); // C5 notification
      } else {
        // Smooth Fade Out
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        isPlaying = false;
        soundBtn.classList.remove('is-active');
        if (soundStateText) soundStateText.textContent = 'OFF';
        soundBtn.setAttribute('aria-label', 'Toggle ambient atmospheric audio (Current: OFF)');
      }
    });

    // Attach subtle chime to explore button & contact submit when sound is active
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (isPlaying) playChime(659.25); // E5
      });
    });
  }

  // --------------------------------------------------------------------------
  // 06. NAVIGATION, SCROLL PROGRESS & ACTIVE LINK OBSERVER
  // --------------------------------------------------------------------------

  function initNavigation() {
    const header = document.getElementById('site-header');
    const scrollIndicator = document.getElementById('scroll-progress-indicator');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const sections = document.querySelectorAll('main > section');

    // Scroll listener for Header blur & progress
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      if (header) {
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (scrollIndicator) {
        scrollIndicator.style.width = `${progressPercent}%`;
      }
    }, { passive: true });

    // Active link highlighting via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileClose = document.getElementById('mobile-menu-close');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const drawerBackdrop = document.querySelector('.drawer-backdrop');

    function openDrawer() {
      if (!mobileDrawer) return;
      mobileDrawer.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('modal-open');
    }

    function closeDrawer() {
      if (!mobileDrawer) return;
      mobileDrawer.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('modal-open');
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close mobile drawer on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 07. INTERACTIVE JOURNEY TIMELINE
  // --------------------------------------------------------------------------

  function initJourneyTimeline() {
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const progressFill = document.getElementById('timeline-progress-fill');
    const timelineSection = document.getElementById('journey');

    if (!timelineNodes.length) return;

    // Click or keyboard activation
    timelineNodes.forEach((node) => {
      node.addEventListener('click', () => {
        timelineNodes.forEach((n) => n.classList.remove('active'));
        node.classList.add('active');
      });

      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          timelineNodes.forEach((n) => n.classList.remove('active'));
          node.classList.add('active');
        }
      });
    });

    // Scroll progress fill for timeline spine
    window.addEventListener('scroll', () => {
      if (!timelineSection || !progressFill) return;
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const total = rect.height;
        const current = windowHeight - rect.top;
        const percentage = Math.min(Math.max((current / total) * 100, 0), 100);
        progressFill.style.height = `${percentage}%`;
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 08. TECHNICAL WORLD INSPECTOR MODAL
  // --------------------------------------------------------------------------

  function initTechModal() {
    const modal = document.getElementById('tech-modal');
    if (!modal) return;

    let lastFocusedElement = null;

    const cards = document.querySelectorAll('.tech-card');
    const titleEl = document.getElementById('modal-tech-title');
    const roleEl = document.getElementById('modal-tech-role');
    const badgeEl = document.getElementById('modal-tech-badge');
    const descEl = document.getElementById('modal-tech-desc');
    const pointsListEl = document.getElementById('modal-tech-points');
    const tipEl = document.getElementById('modal-tech-tip');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const backdrop = modal.querySelector('.modal-backdrop');

    function openModal(key) {
      const data = TECH_DETAILS_DATA[key];
      if (!data) return;

      lastFocusedElement = document.activeElement;

      badgeEl.textContent = data.category;
      titleEl.textContent = data.name;
      roleEl.textContent = data.role;
      descEl.textContent = data.description;
      tipEl.textContent = data.tip;

      pointsListEl.innerHTML = '';
      data.points.forEach((pt) => {
        const li = document.createElement('li');
        li.textContent = pt;
        pointsListEl.appendChild(li);
      });

      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    cards.forEach((card) => {
      const techKey = card.getAttribute('data-tech');
      card.addEventListener('click', () => openModal(techKey));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(techKey);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Escape key listener
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 09. SELECTED WORKS PROJECT MODAL
  // --------------------------------------------------------------------------

  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    let lastFocusedElement = null;

    const detailBtns = document.querySelectorAll('.project-detail-btn');
    const numEl = document.getElementById('modal-project-num');
    const titleEl = document.getElementById('modal-project-title');
    const taglineEl = document.getElementById('modal-project-tagline');
    const fullDescEl = document.getElementById('modal-project-full-desc');
    const featuresListEl = document.getElementById('modal-project-features');
    const tagsContainerEl = document.getElementById('modal-project-tags');
    const liveLinkEl = document.getElementById('modal-project-link');
    const sourceLinkEl = document.getElementById('modal-project-source');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const backdrop = modal.querySelector('.modal-backdrop');

    function openProjectModal(key) {
      const data = PROJECTS_DATA[key];
      if (!data) return;

      lastFocusedElement = document.activeElement;

      numEl.textContent = data.number;
      titleEl.textContent = data.title;
      taglineEl.textContent = data.tagline;
      fullDescEl.textContent = data.description;

      featuresListEl.innerHTML = '';
      data.features.forEach((feat) => {
        const li = document.createElement('li');
        li.textContent = feat;
        featuresListEl.appendChild(li);
      });

      tagsContainerEl.innerHTML = '';
      data.tags.forEach((t) => {
        const span = document.createElement('span');
        span.textContent = t;
        tagsContainerEl.appendChild(span);
      });

      liveLinkEl.setAttribute('href', data.liveLink);
      if (data.liveLink.startsWith('#')) {
        liveLinkEl.removeAttribute('target');
        liveLinkEl.removeAttribute('rel');
        liveLinkEl.onclick = () => {
          closeProjectModal();
        };
      } else {
        liveLinkEl.setAttribute('target', '_blank');
        liveLinkEl.setAttribute('rel', 'noopener noreferrer');
        liveLinkEl.onclick = null;
      }

      sourceLinkEl.setAttribute('href', data.sourceLink);

      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      if (closeBtn) closeBtn.focus();
    }

    function closeProjectModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    detailBtns.forEach((btn) => {
      const key = btn.getAttribute('data-project');
      btn.addEventListener('click', () => openProjectModal(key));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (backdrop) backdrop.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeProjectModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. CONTACT FORM VALIDATION & DEMO SUBMISSION MODAL
  // --------------------------------------------------------------------------

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const successModal = document.getElementById('form-success-modal');
    const closeSuccessBtn = document.getElementById('close-success-btn');
    const successCloseIcon = successModal ? successModal.querySelector('.modal-close-btn') : null;
    const successBackdrop = successModal ? successModal.querySelector('.modal-backdrop') : null;

    if (!form) return;

    let lastFocusedElement = null;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const charCurrent = document.getElementById('char-current');

    // Real-time character count
    if (messageInput && charCurrent) {
      messageInput.addEventListener('input', () => {
        charCurrent.textContent = messageInput.value.length;
      });
    }

    // Helper: validate email regex
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }

    // Field-level error validation helper
    function validateField(input, condition) {
      const parent = input.closest('.form-group');
      if (!condition) {
        parent.classList.add('has-error');
        return false;
      } else {
        parent.classList.remove('has-error');
        return true;
      }
    }

    // Live validation on blur
    if (nameInput) {
      nameInput.addEventListener('blur', () => {
        validateField(nameInput, nameInput.value.trim().length >= 2);
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        validateField(emailInput, isValidEmail(emailInput.value.trim()));
      });
    }

    if (subjectInput) {
      subjectInput.addEventListener('blur', () => {
        validateField(subjectInput, subjectInput.value.trim().length >= 3);
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', () => {
        validateField(messageInput, messageInput.value.trim().length >= 15);
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2);
      const isEmailValid = validateField(emailInput, isValidEmail(emailInput.value.trim()));
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3);
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 15);

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        lastFocusedElement = document.activeElement;

        // Form is valid! Open transparent demo response modal
        const senderName = nameInput.value.trim();
        const successMessageEl = document.getElementById('form-success-message');
        if (successMessageEl) {
          successMessageEl.textContent = `Thank you, ${senderName}! All form parameters were verified.`;
        }

        if (successModal) {
          successModal.classList.add('is-active');
          successModal.setAttribute('aria-hidden', 'false');
          document.body.classList.add('modal-open');
          if (closeSuccessBtn) closeSuccessBtn.focus();
        }

        // Reset inputs
        form.reset();
        if (charCurrent) charCurrent.textContent = '0';
      } else {
        // Focus on first invalid input
        const firstError = form.querySelector('.form-group.has-error .form-input, .form-group.has-error .form-textarea');
        if (firstError) firstError.focus();
      }
    });

    function closeSuccessModal() {
      if (!successModal) return;
      successModal.classList.remove('is-active');
      successModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccessModal);
    if (successCloseIcon) successCloseIcon.addEventListener('click', closeSuccessModal);
    if (successBackdrop) successBackdrop.addEventListener('click', closeSuccessModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successModal && successModal.classList.contains('is-active')) {
        closeSuccessModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. COPY EMAIL UTILITY WITH TOOLTIP FEEDBACK
  // --------------------------------------------------------------------------

  function initCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    const emailVal = document.getElementById('contact-email-val');
    const feedback = document.getElementById('copy-feedback');

    if (!copyBtn || !emailVal) return;

    copyBtn.addEventListener('click', async () => {
      const emailText = emailVal.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailText);
        } else {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = emailText;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        if (feedback) {
          feedback.textContent = 'Copied!';
          feedback.style.opacity = '1';
          setTimeout(() => {
            feedback.textContent = 'Copy';
            feedback.style.opacity = '';
          }, 2200);
        }
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 12. SCROLL REVEAL OBSERVER
  // --------------------------------------------------------------------------

  function initScrollReveals() {
    const revealTargets = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  // --------------------------------------------------------------------------
  // 13. DYNAMIC FOOTER YEAR
  // --------------------------------------------------------------------------

  function initFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // --------------------------------------------------------------------------
  // 14. APPLICATION INITIALIZATION LIFECYCLE
  // --------------------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', () => {
    initIntroSequence();
    initHeroCanvas();
    initCustomCursor();
    initMagneticButtons();
    initAmbientAudio();
    initNavigation();
    initJourneyTimeline();
    initTechModal();
    initProjectModal();
    initContactForm();
    initCopyEmail();
    initScrollReveals();
    initFooterYear();
  });

})();
