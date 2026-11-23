/**
 * =============================================================================
 * ORBITAL — THE KNOWLEDGE GALAXY
 * Interactive Engine & Digital Universe Architecture
 * =============================================================================
 */

(function () {
  'use strict';

  /* ===========================================================================
     01. GALAXY DESTINATIONS DATA REPOSITORY
     =========================================================================== */
  const GALAXY_DATA = {
    code: {
      id: 'code',
      sector: 'SECTOR 01 // ORBIT ACTIVE',
      coordinates: 'COORD: 34.2°N 118.4°W',
      title: 'Code Galaxy',
      desc: 'Master the computational engines and foundational languages powering the modern universe. From core C memory logic to full-stack reactive cloud architecture.',
      subjects: [
        'Python Programming',
        'C Programming',
        'JavaScript & TypeScript',
        'Data Structures & Algorithms',
        'Full-Stack Distributed Systems'
      ],
      featuredCourseId: 'mission-code-01',
      featuredCourseTitle: 'High-Performance C & Embedded Systems for Spacecraft',
      featuredCourseMeta: '10 Weeks • Advanced • 4.97 ★'
    },
    ai: {
      id: 'ai',
      sector: 'SECTOR 02 // ORBIT ACTIVE',
      coordinates: 'COORD: 51.5°N 0.12°W',
      title: 'AI Galaxy',
      desc: 'Explore the cognitive frontier. Architect autonomous multi-agent reasoning swarms, deep neural networks, multimodal vision models, and generative diffusion latents.',
      subjects: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Generative AI & LLMs',
        'Computer Vision & Diffusion'
      ],
      featuredCourseId: 'mission-ai-02',
      featuredCourseTitle: 'Autonomous Neural Agents & Large Multimodal Models',
      featuredCourseMeta: '12 Weeks • Frontier • 4.98 ★'
    },
    creative: {
      id: 'creative',
      sector: 'SECTOR 03 // ORBIT ACTIVE',
      coordinates: 'COORD: 40.7°N 74.0°W',
      title: 'Creative Galaxy',
      desc: 'Formulate spatial digital aesthetics, fluid micro-interactions, responsive design token systems, and tactile human-computer interfaces.',
      subjects: [
        'UI/UX Design',
        'Graphic Design',
        'Motion & Animation',
        'Digital Creativity & 3D'
      ],
      featuredCourseId: 'mission-creative-03',
      featuredCourseTitle: 'Spatial Interface Architecture & Tactile UI/UX',
      featuredCourseMeta: '8 Weeks • Intermediate • 4.99 ★'
    },
    data: {
      id: 'data',
      sector: 'SECTOR 04 // ORBIT ACTIVE',
      coordinates: 'COORD: 35.6°N 139.6°E',
      title: 'Data Galaxy',
      desc: 'Transform raw galactic telemetry into actionable intelligence. Real-time distributed Kafka streaming, advanced SQL optimization, and analytical data lakehouses.',
      subjects: [
        'Advanced SQL',
        'Data Analytics',
        'Data Science & Modeling',
        'Data Visualization'
      ],
      featuredCourseId: 'mission-data-04',
      featuredCourseTitle: 'Real-Time Planetary Streaming & SQL Engines',
      featuredCourseMeta: '12 Weeks • Intermediate • 4.93 ★'
    },
    business: {
      id: 'business',
      sector: 'SECTOR 05 // ORBIT ACTIVE',
      coordinates: 'COORD: 37.7°N 122.4°W',
      title: 'Business Galaxy',
      desc: 'Bridge profound deep-tech innovation with strategic commercial execution, product flywheels, scalable unit economics, and venture leadership.',
      subjects: [
        'Entrepreneurship & Startups',
        'Product Strategy',
        'Software Finance & Unit Economics',
        'Developer-Led Marketing'
      ],
      featuredCourseId: 'mission-biz-05',
      featuredCourseTitle: 'Frontier Venture Strategy & Deep Tech Commercialization',
      featuredCourseMeta: '8 Weeks • All Levels • 4.91 ★'
    }
  };

  /* ===========================================================================
     02. MISSION COURSES DATA REPOSITORY
     =========================================================================== */
  const MISSIONS_DATA = [
    {
      id: 'mission-code-01',
      sector: 'code',
      sectorLabel: 'CODE GALAXY',
      title: 'High-Performance C & Embedded Systems for Spacecraft',
      instructor: 'Commander Marcus Vance',
      instructorTitle: 'Principal Avionics Systems Architect',
      difficulty: 'Advanced',
      duration: '10 Weeks',
      rating: '4.97',
      reviewsCount: 1240,
      price: '$129',
      badge: 'MISSION ESSENTIAL',
      summary: 'Build bare-metal systems, real-time memory kernels, interrupt service routines, and low-latency spacecraft flight telemetry in modern C.',
      skills: ['C17 Standard', 'Memory Management', 'Embedded Avionics', 'RTOS', 'Interrupts'],
      overview: 'Transcend abstract high-level languages and take direct command of hardware silicon. Construct memory-safe RTOS threads, program real-time peripheral buses, and develop telemetry control loops for simulated deep-space probes.',
      syllabus: [
        { num: 'Stage 01', title: 'Bare-Metal Memory Layout & Registers', desc: 'Pointers, volatile qualifiers, bitwise register masks, and custom linker scripts.' },
        { num: 'Stage 02', title: 'Real-Time Operating Systems (RTOS) Scheduling', desc: 'Preemptive multitasking, task priority inversion, mutexes, and message queues.' },
        { num: 'Stage 03', title: 'Serial Communication & Bus Protocols', desc: 'I2C, SPI, CAN bus telemetry packets, and packet checksum validation.' },
        { num: 'Stage 04', title: 'Orbital Flight Telemetry Capstone', desc: 'Build an autonomous spacecraft sensor fusion and attitude determination module.' }
      ]
    },
    {
      id: 'mission-ai-02',
      sector: 'ai',
      sectorLabel: 'AI GALAXY',
      title: 'Autonomous Neural Agents & Large Multimodal Models',
      instructor: 'Dr. Lyra Sterling',
      instructorTitle: 'Frontier AI Research Fellow',
      difficulty: 'Frontier',
      duration: '12 Weeks',
      rating: '4.98',
      reviewsCount: 1680,
      price: '$149',
      badge: 'POPULAR MISSION',
      summary: 'Orchestrate autonomous agent swarms, tool-use execution loops, multimodal vision-language embeddings, and hierarchical reasoning chains.',
      skills: ['PyTorch', 'Autonomous Agents', 'Multimodal LLMs', 'LangGraph', 'Vector Search'],
      overview: 'An elite curriculum for engineers looking to construct cognitive agent architectures capable of independent decision-making, code synthesis, and multi-step tool verification in production environments.',
      syllabus: [
        { num: 'Stage 01', title: 'Multimodal Attention & Cross-Attention Math', desc: 'Vision Transformers (ViT), patch projections, and projection layers.' },
        { num: 'Stage 02', title: 'ReAct Agentic Loops & Structured Schemas', desc: 'Dynamic JSON schemas, planner-actor orchestration, and self-reflection loops.' },
        { num: 'Stage 03', title: 'Memory Vector Topologies & Hybrid RAG', desc: 'HNSW graphs, sparse-dense hybrid retrieval, and semantic reranking.' },
        { num: 'Stage 04', title: 'Autonomous Multi-Agent Mission Capstone', desc: 'Deploy an autonomous software development swarm with automated unit test verification.' }
      ]
    },
    {
      id: 'mission-creative-03',
      sector: 'creative',
      sectorLabel: 'CREATIVE GALAXY',
      title: 'Spatial Interface Architecture & Tactile UI/UX',
      instructor: 'Kaelen Thorne',
      instructorTitle: 'Award-Winning Digital Product Director',
      difficulty: 'Intermediate',
      duration: '8 Weeks',
      rating: '4.99',
      reviewsCount: 1950,
      price: '$119',
      badge: 'EDITOR CHOICE',
      summary: 'Craft Apple-grade spatial design systems, spring-physics micro-interactions, editorial typography, and fluid design tokens.',
      skills: ['Spatial UX', 'Design Tokens', 'Figma Pro', 'Spring Physics', 'WCAG AAA'],
      overview: 'Learn how premier creative studios design digital experiences that feel intuitive, tactile, and unforgettable. Master optical balance, spatial depth layers, and motion choreography.',
      syllabus: [
        { num: 'Stage 01', title: 'Spatial Hierarchy & Visual Ergonomics', desc: 'Z-axis depth layering, dynamic lighting shaders, and optical layout grids.' },
        { num: 'Stage 02', title: 'Multi-Brand Token Architectures', desc: 'Semantic color math, typography scales, and token export pipelines for React.' },
        { num: 'Stage 03', title: 'Fluid Motion Design & Micro-Interactions', desc: 'Spring physics curves, gestural interactions, and tactile state feedback.' },
        { num: 'Stage 04', title: 'Living Design System Capstone', desc: 'Deliver an interactive, enterprise-ready design system specification.' }
      ]
    },
    {
      id: 'mission-data-04',
      sector: 'data',
      sectorLabel: 'DATA GALAXY',
      title: 'Real-Time Planetary Streaming & SQL Engines',
      instructor: 'Priya Narayanan',
      instructorTitle: 'Staff Data Infrastructure Architect',
      difficulty: 'Intermediate',
      duration: '12 Weeks',
      rating: '4.93',
      reviewsCount: 1120,
      price: '$139',
      badge: 'ENTERPRISE DATA',
      summary: 'Design distributed data lakehouses, event-driven Kafka streams, Apache Spark batch pipelines, and advanced SQL query optimizers.',
      skills: ['Apache Kafka', 'Apache Spark', 'Advanced SQL', 'Delta Lake', 'dbt'],
      overview: 'Process millions of events per second with sub-second latencies. Learn the architectural principles behind real-time event streaming and analytical data lakehouses.',
      syllabus: [
        { num: 'Stage 01', title: 'Event Streaming Topology with Kafka', desc: 'Partitioning, consumer groups, schema registries, and exactly-once processing.' },
        { num: 'Stage 02', title: 'Distributed Compute with Apache Spark', desc: 'Catalyst optimizer internals, memory partition tuning, and PySpark transformations.' },
        { num: 'Stage 03', title: 'The Modern Analytics Lakehouse', desc: 'Delta Lake ACID tables, medallion data layout, and automated dbt modeling.' },
        { num: 'Stage 04', title: 'Real-Time Anomaly Detection Engine', desc: 'Deploy an end-to-end stream processing pipeline with Grafana alerts.' }
      ]
    },
    {
      id: 'mission-biz-05',
      sector: 'business',
      sectorLabel: 'BUSINESS GALAXY',
      title: 'Frontier Venture Strategy & Deep Tech Commercialization',
      instructor: 'Sophia Sterling',
      instructorTitle: 'Y-Combinator Alum & Venture Partner',
      difficulty: 'Novice',
      duration: '8 Weeks',
      rating: '4.91',
      reviewsCount: 890,
      price: 'Free Access',
      badge: 'ZERO BARRIER',
      summary: 'Transform profound technical breakthroughs into enduring commercial technology businesses. Master unit economics, growth loops, and venture pitch decks.',
      skills: ['Product Strategy', 'Venture Capital', 'Unit Economics', 'GTM Execution', 'Pitch Modeling'],
      overview: 'A founder-led masterclass on validating deep technology, navigating early-stage enterprise sales, and modeling investor term sheets and cap table dilution.',
      syllabus: [
        { num: 'Stage 01', title: 'De-Risking Deep Tech & Market Discovery', desc: 'Customer interviews, MVP technical scoping, and defensibility moats.' },
        { num: 'Stage 02', title: 'Software Unit Economics & Pricing Mechanics', desc: 'CAC, LTV, payback windows, gross margins, and usage-based pricing.' },
        { num: 'Stage 03', title: 'Developer-Led Growth & Open-Core Models', desc: 'Bottom-up adoption funnels and community flywheel engineering.' },
        { num: 'Stage 04', title: 'Venture Pitch Simulation & Cap Table Audit', desc: 'Construct a seed-stage investor deck and financial simulation.' }
      ]
    },
    {
      id: 'mission-code-06',
      sector: 'code',
      sectorLabel: 'CODE GALAXY',
      title: 'Distributed Full-Stack Cloud with Next.js & Go',
      instructor: 'Elena Rostova',
      instructorTitle: 'Principal Cloud Systems Engineer',
      difficulty: 'Intermediate',
      duration: '14 Weeks',
      rating: '4.96',
      reviewsCount: 2240,
      price: '$139',
      badge: 'HIGH DEMAND',
      summary: 'Architect hyper-scalable web platforms combining Next.js 15, Go microservices, PostgreSQL ACID replication, and edge CDNs.',
      skills: ['Next.js 15', 'Go / Golang', 'PostgreSQL', 'Docker', 'gRPC', 'Redis'],
      overview: 'Build production web systems that scale effortlessly to tens of thousands of requests per second. Connect reactive React interfaces to rock-solid Go microservices.',
      syllabus: [
        { num: 'Stage 01', title: 'React Server Components & Edge Streaming', desc: 'Streaming SSR, partial prerendering, and client bundle optimization.' },
        { num: 'Stage 02', title: 'High-Throughput Go Microservices', desc: 'Goroutines, channels, gRPC contracts, and custom middleware design.' },
        { num: 'Stage 03', title: 'Distributed Data Modeling & Transactions', desc: 'PostgreSQL read-replicas, connection pooling, and Redis locking.' },
        { num: 'Stage 04', title: 'Global Edge Cloud Deployment Capstone', desc: 'Deploy an automated multi-region microservice cluster with OpenTelemetry.' }
      ]
    },
    {
      id: 'mission-ai-07',
      sector: 'ai',
      sectorLabel: 'AI GALAXY',
      title: 'Generative Diffusion & Latent Cinema Synthesis',
      instructor: 'Dr. Aris Vance',
      instructorTitle: 'Senior Generative Media Researcher',
      difficulty: 'Advanced',
      duration: '10 Weeks',
      rating: '4.95',
      reviewsCount: 1410,
      price: '$149',
      badge: 'FRONTIER TECH',
      summary: 'Explore score-based diffusion mathematics, latent diffusion transformers (DiT), spatial cross-attention control, and neural video generation.',
      skills: ['Diffusion Models', 'PyTorch', 'Latent Transformers', 'LoRA', 'ControlNet'],
      overview: 'Dive into the mathematics and code behind state-of-the-art visual generative AI. Implement denoising score matching, condition latent transformers, and fine-tune adapters.',
      syllabus: [
        { num: 'Stage 01', title: 'Stochastic Calculus & Diffusion Mathematics', desc: 'Forward SDEs, reverse probability flows, and DDPM/DDIM samplers.' },
        { num: 'Stage 02', title: 'Latent Diffusion Architecture & DiT', desc: 'Autoencoder latents, patchify projections, and adaptive layer normalization.' },
        { num: 'Stage 03', title: 'Controllable Synthesis & Adapter Tuning', desc: 'ControlNet architectures, IP-Adapter conditioning, and LoRA checkpoints.' },
        { num: 'Stage 04', title: 'Real-Time Neural Video Generator Capstone', desc: 'Build an interactive temporal latent video generation pipeline.' }
      ]
    },
    {
      id: 'mission-code-08',
      sector: 'code',
      sectorLabel: 'CODE GALAXY',
      title: 'Python Astrophysics & Orbital Simulation Engines',
      instructor: 'Dr. Alexei Moros',
      instructorTitle: 'Computational Physicist & Systems Modeler',
      difficulty: 'Frontier',
      duration: '12 Weeks',
      rating: '4.99',
      reviewsCount: 960,
      price: '$149',
      badge: 'MATHEMATICAL CORE',
      summary: 'Model N-body planetary gravitational interactions, orbital mechanics, symplectic integrators, and high-performance physics engines in Python.',
      skills: ['Python 3.12', 'NumPy / SciPy', 'Symplectic Integrators', 'N-Body Physics', 'Matplotlib 3D'],
      overview: 'Harness Python for high-performance physics simulation. Implement symplectic numerical integration methods that conserve energy over millions of orbital cycles.',
      syllabus: [
        { num: 'Stage 01', title: 'Classical Orbital Mechanics & Keplers Laws', desc: 'Two-body problem math, orbital state vectors, and coordinate transformations.' },
        { num: 'Stage 02', title: 'Numerical Integration & Symplectic Solvers', desc: 'Euler vs Verlet vs Runge-Kutta 4, energy conservation, and drift prevention.' },
        { num: 'Stage 03', title: 'N-Body Gravitational Cluster Simulation', desc: 'Barnes-Hut quadtree algorithm, gravitational softening, and vectorization.' },
        { num: 'Stage 04', title: 'Interactive Solar System Engine Capstone', desc: 'Simulate planetary trajectories and spacecraft gravity assists.' }
      ]
    }
  ];

  /* ===========================================================================
     03. LEARNING EXPEDITIONS DATA REPOSITORY
     =========================================================================== */
  const EXPEDITIONS_DATA = {
    webdev: {
      badge: 'EXPEDITION ROADMAP // MISSION 01',
      title: 'Become a Production-Grade Web Developer',
      description: 'From foundational HTML/CSS/JS through reactive client frameworks, high-throughput microservices, and distributed cloud deployments.',
      level: 'Novice (Zero to Hero)',
      duration: '26 Standard Weeks',
      capstones: '4 Major Flight Projects',
      destination: 'Full-Stack Cloud Engineer',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Frontend Foundations & React 19',
          duration: '6 Weeks',
          desc: 'TypeScript type theory, CSS modern layout engines, accessibility standards, and reactive component models.',
          skills: ['TypeScript', 'React 19', 'CSS Grid', 'Tailwind', 'WCAG AAA'],
          capstone: 'Interactive Space Mission Dashboard'
        },
        {
          num: 'STAGE 02',
          title: 'Asynchronous Services & Go APIs',
          duration: '8 Weeks',
          desc: 'High-concurrency servers with Go and Node.js, RESTful contracts, and gRPC streaming protocols.',
          skills: ['Go / Golang', 'Node.js', 'gRPC', 'Protobuf', 'Redis Caching'],
          capstone: 'Real-Time Flight Telemetry WebSocket Hub'
        },
        {
          num: 'STAGE 03',
          title: 'Databases & Distributed Transactions',
          duration: '6 Weeks',
          desc: 'Relational data modeling with PostgreSQL, ACID properties, connection pooling, and distributed locking.',
          skills: ['PostgreSQL', 'Prisma', 'ACID Rules', 'Query Indexing', 'Redis'],
          capstone: 'Mission Payload Logistics Engine'
        },
        {
          num: 'STAGE 04',
          title: 'Cloud Orchestration & CI/CD Pipelines',
          duration: '6 Weeks',
          desc: 'Docker containerization, Kubernetes pod routing, automated GitHub Actions, and edge deployments.',
          skills: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS / GCP', 'OpenTelemetry'],
          capstone: 'Multi-Region High-Availability Web Cluster'
        }
      ]
    },
    ai: {
      badge: 'EXPEDITION ROADMAP // MISSION 02',
      title: 'Explore the Frontier World of Artificial Intelligence',
      description: 'Journey from mathematical foundations and neural networks to autonomous agent swarms, vector databases, and multimodal reasoning.',
      level: 'Intermediate → Frontier',
      duration: '30 Standard Weeks',
      capstones: '4 Frontier AI Capstones',
      destination: 'Autonomous AI Systems Architect',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Mathematical & PyTorch Tensor Core',
          duration: '6 Weeks',
          desc: 'Linear algebra, matrix calculus, computational graphs, and autograd mechanics in PyTorch.',
          skills: ['Python 3.12', 'NumPy', 'PyTorch', 'Calculus', 'Autograd'],
          capstone: 'Deep Neural Classifier from Raw Matrices'
        },
        {
          num: 'STAGE 02',
          title: 'Transformers & Self-Attention Architectures',
          duration: '8 Weeks',
          desc: 'Self-attention mechanisms, Transformer encoders/decoders, RoPE embeddings, and parameter-efficient fine-tuning (LoRA).',
          skills: ['Transformers', 'Attention Math', 'HuggingFace', 'LoRA', 'Tokenizers'],
          capstone: 'Domain-Specialized Code Transformer'
        },
        {
          num: 'STAGE 03',
          title: 'Vector Databases & Agentic RAG Systems',
          duration: '8 Weeks',
          desc: 'Vector embeddings, HNSW graph search, re-ranking pipelines, and structured tool-calling loops.',
          skills: ['Qdrant', 'LangGraph', 'Vector Search', 'Tool Use', 'Function Schemas'],
          capstone: 'Autonomous Space Operations Research Assistant'
        },
        {
          num: 'STAGE 04',
          title: 'Autonomous Swarms & Multi-Agent Systems',
          duration: '8 Weeks',
          desc: 'Multi-agent coordination, supervisor state machines, sandbox code execution, and automated evaluation metrics.',
          skills: ['Multi-Agent Swarms', 'State Machines', 'Safety Evals', 'PPO', 'RLHF'],
          capstone: 'Autonomous Multi-Agent Flight Planning Station'
        }
      ]
    },
    python: {
      badge: 'EXPEDITION ROADMAP // MISSION 03',
      title: 'Master Python for High-Performance Systems & Physics',
      description: 'Transcend basic scripting. Master CPython internals, asynchronous event loops, concurrent data pipelines, and computational physics simulations.',
      level: 'Novice → Advanced',
      duration: '22 Standard Weeks',
      capstones: '4 Systems Capstones',
      destination: 'Staff Python Engineer & Modeler',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Python Internals & Data Model Protocols',
          duration: '5 Weeks',
          desc: 'Object data model, dunder protocols, custom iterators, generators, and memory garbage collection.',
          skills: ['CPython Internals', 'Dunder Methods', 'Generators', 'Memory Profiling', 'Metaclasses'],
          capstone: 'Custom In-Memory Query & Indexing Engine'
        },
        {
          num: 'STAGE 02',
          title: 'Asyncio & Non-Blocking Event Loops',
          duration: '5 Weeks',
          desc: 'Coroutines, event loop scheduling, non-blocking network I/O, thread pools, and process synchronization.',
          skills: ['Asyncio', 'Aiohttp', 'Epoll / Kqueue', 'Multiprocessing', 'Thread Safety'],
          capstone: 'High-Concurrency Telemetry Scraper & Dispatcher'
        },
        {
          num: 'STAGE 03',
          title: 'High-Throughput APIs with FastAPI',
          duration: '6 Weeks',
          desc: 'Pydantic v2 schemas, asynchronous SQLAlchemy, connection pooling, and automated Swagger OpenAPI contracts.',
          skills: ['FastAPI', 'Pydantic v2', 'Async SQLAlchemy', 'Alembic', 'Redis'],
          capstone: 'Enterprise Mission Control REST & WebSocket API'
        },
        {
          num: 'STAGE 04',
          title: 'Computational Simulation & Physics Engines',
          duration: '6 Weeks',
          desc: 'Vectorized NumPy algorithms, symplectic numerical solvers, and multi-threaded simulation rendering.',
          skills: ['NumPy Vectorization', 'Symplectic Solvers', 'Numba JIT', 'Physics Engines', 'Matplotlib'],
          capstone: 'Planetary Gravitational Orbital Engine'
        }
      ]
    },
    uiux: {
      badge: 'EXPEDITION ROADMAP // MISSION 04',
      title: 'Master Spatial UI/UX Design & Design Engineering',
      description: 'Craft Apple-grade spatial digital experiences, typographic hierarchy, design token systems, and tactile motion choreographies.',
      level: 'All Levels → Advanced',
      duration: '20 Standard Weeks',
      capstones: '4 Portfolio Flight Capstones',
      destination: 'Principal Product & Motion Designer',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Design Foundations & Spatial Ergonomics',
          duration: '5 Weeks',
          desc: 'Spatial visual hierarchy, color theory, optical grids, contrast ratios, and editorial typography scales.',
          skills: ['Figma Mastery', 'Visual Hierarchy', 'Typography Systems', 'Optical Balance', 'WCAG AAA'],
          capstone: 'Luxury Spacecraft Cockpit Editorial Interface'
        },
        {
          num: 'STAGE 02',
          title: 'User Research & Wireframe Prototypes',
          duration: '5 Weeks',
          desc: 'Cognitive load analysis, user journey mapping, low-fidelity wireframing, and interactive usability testing.',
          skills: ['User Research', 'Cognitive Load', 'Wireframing', 'FigJam', 'Usability Audits'],
          capstone: 'End-to-End Astronaut Flight Planner'
        },
        {
          num: 'STAGE 03',
          title: 'Enterprise Design Systems & Tokens',
          duration: '5 Weeks',
          desc: 'Multi-mode design tokens, auto-layout variants, interactive state engines, and token export synchronization.',
          skills: ['Design Tokens', 'Figma Variants', 'Variables & Modes', 'Component Architecture', 'Tokens Studio'],
          capstone: 'Cross-Platform Orbital Component Library'
        },
        {
          num: 'STAGE 04',
          title: 'Fluid Motion Design & Code Handoff',
          duration: '5 Weeks',
          desc: 'Spring physics micro-interactions, CSS shaders, interactive prototypes, and production code audit reviews.',
          skills: ['Framer', 'CSS Animations', 'Spring Physics', 'Tactile Motion', 'Frontend Handoff'],
          capstone: 'Living Interactive Design System with Production Code'
        }
      ]
    }
  };

  /* ===========================================================================
     04. DISCIPLINE PLANETARY SVG BADGE GENERATOR
     =========================================================================== */
  function getSectorVisualSVG(sector) {
    switch (sector) {
      case 'code':
        return `
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="38" ry="16" stroke="#00E5FF" stroke-width="2" stroke-dasharray="4 4" transform="rotate(-20 50 50)" opacity="0.6"/>
            <circle cx="50" cy="50" r="26" fill="url(#codeSphereGrad)"/>
            <path d="M42 43L35 50L42 57" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M58 43L65 50L58 57" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="53" y1="41" x2="47" y2="59" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
            <defs>
              <radialGradient id="codeSphereGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="60%" stop-color="#0284c7"/>
                <stop offset="100%" stop-color="#02040a"/>
              </radialGradient>
            </defs>
          </svg>`;
      case 'ai':
        return `
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="36" stroke="#A855F7" stroke-width="1.8" stroke-dasharray="3 5" opacity="0.5"/>
            <circle cx="50" cy="50" r="26" fill="url(#aiSphereGrad)"/>
            <circle cx="40" cy="42" r="3.5" fill="#FFFFFF"/>
            <circle cx="60" cy="42" r="3.5" fill="#FFFFFF"/>
            <circle cx="50" cy="60" r="4" fill="#00E5FF"/>
            <line x1="40" y1="42" x2="60" y2="42" stroke="#FFFFFF" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="42" x2="50" y2="60" stroke="#00E5FF" stroke-width="1.5" opacity="0.7"/>
            <line x1="60" y1="42" x2="50" y2="60" stroke="#00E5FF" stroke-width="1.5" opacity="0.7"/>
            <defs>
              <radialGradient id="aiSphereGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#c084fc"/>
                <stop offset="60%" stop-color="#7c3aed"/>
                <stop offset="100%" stop-color="#02040a"/>
              </radialGradient>
            </defs>
          </svg>`;
      case 'creative':
        return `
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="36" stroke="#F43F5E" stroke-width="1.8" stroke-dasharray="5 3" opacity="0.5"/>
            <circle cx="50" cy="50" r="26" fill="url(#creativeSphereGrad)"/>
            <circle cx="44" cy="44" r="14" stroke="#FFFFFF" stroke-width="2" opacity="0.8"/>
            <circle cx="56" cy="56" r="14" stroke="#00E5FF" stroke-width="2" opacity="0.8"/>
            <defs>
              <radialGradient id="creativeSphereGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fb7185"/>
                <stop offset="60%" stop-color="#e11d48"/>
                <stop offset="100%" stop-color="#02040a"/>
              </radialGradient>
            </defs>
          </svg>`;
      case 'data':
        return `
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="36" stroke="#10B981" stroke-width="1.8" stroke-dasharray="4 4" opacity="0.5"/>
            <circle cx="50" cy="50" r="26" fill="url(#dataSphereGrad)"/>
            <rect x="36" y="52" width="6" height="14" rx="2" fill="#FFFFFF"/>
            <rect x="47" y="42" width="6" height="24" rx="2" fill="#34D399"/>
            <rect x="58" y="34" width="6" height="32" rx="2" fill="#00E5FF"/>
            <defs>
              <radialGradient id="dataSphereGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#34d399"/>
                <stop offset="60%" stop-color="#059669"/>
                <stop offset="100%" stop-color="#02040a"/>
              </radialGradient>
            </defs>
          </svg>`;
      case 'business':
        return `
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="36" stroke="#F59E0B" stroke-width="1.8" stroke-dasharray="4 4" opacity="0.5"/>
            <circle cx="50" cy="50" r="26" fill="url(#bizSphereGrad)"/>
            <path d="M50 32L62 50H38L50 32Z" fill="#FFFFFF" opacity="0.9"/>
            <line x1="36" y1="62" x2="64" y2="62" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round"/>
            <defs>
              <radialGradient id="bizSphereGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fbbf24"/>
                <stop offset="60%" stop-color="#d97706"/>
                <stop offset="100%" stop-color="#02040a"/>
              </radialGradient>
            </defs>
          </svg>`;
      default:
        return `
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="26" fill="#00E5FF"/>
          </svg>`;
    }
  }

  /* ===========================================================================
     05. SIGNATURE FEATURE: THE KNOWLEDGE GALAXY CONTROLLER
     =========================================================================== */
  let activeGalaxySector = 'code';

  function updateGalaxyHUD(sectorKey) {
    const data = GALAXY_DATA[sectorKey];
    if (!data) return;

    activeGalaxySector = sectorKey;

    const sectorBadge = document.getElementById('hud-galaxy-sector');
    const coordEl = document.getElementById('hud-galaxy-coordinates');
    const titleEl = document.getElementById('hud-galaxy-title');
    const descEl = document.getElementById('hud-galaxy-desc');
    const subjectsList = document.getElementById('hud-galaxy-subjects');
    const courseTitle = document.getElementById('hud-galaxy-course-title');
    const courseMeta = document.getElementById('hud-galaxy-course-meta');

    if (sectorBadge) sectorBadge.textContent = data.sector;
    if (coordEl) coordEl.textContent = data.coordinates;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (courseTitle) courseTitle.textContent = data.featuredCourseTitle;
    if (courseMeta) courseMeta.textContent = data.featuredCourseMeta;

    if (subjectsList) {
      subjectsList.innerHTML = data.subjects.map(s => `
        <li class="hud-subject-pill">${s}</li>
      `).join('');
    }

    // Highlight corresponding planetary node
    const nodes = document.querySelectorAll('.planet-node');
    nodes.forEach(node => {
      if (node.getAttribute('data-galaxy') === sectorKey) {
        node.classList.add('active');
        node.setAttribute('aria-selected', 'true');
      } else {
        node.classList.remove('active');
        node.setAttribute('aria-selected', 'false');
      }
    });

    // Highlight orbital ellipse ring
    const orbitMap = { code: '.orbit-1', ai: '.orbit-2', creative: '.orbit-3', data: '.orbit-4', business: '.orbit-5' };
    document.querySelectorAll('.orbit-path').forEach(p => p.classList.remove('highlighted'));
    const targetOrbit = document.querySelector(orbitMap[sectorKey]);
    if (targetOrbit) targetOrbit.classList.add('highlighted');
  }

  function renderTacticalList() {
    const container = document.getElementById('tactical-destinations-grid');
    if (!container) return;

    const sectors = Object.values(GALAXY_DATA);
    container.innerHTML = sectors.map(sec => `
      <article class="tactical-card" data-galaxy="${sec.id}">
        <div class="tactical-header">
          <span class="tactical-sector">${sec.sector}</span>
          <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--text-tertiary);">${sec.coordinates}</span>
        </div>
        <h4 class="tactical-title">${sec.title}</h4>
        <p class="tactical-desc">${sec.desc}</p>
        <ul style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.25rem;">
          ${sec.subjects.map(sub => `
            <li style="font-family:var(--font-mono); font-size:0.7rem; padding:0.2rem 0.55rem; background:rgba(255,255,255,0.03); border:1px solid var(--silver-border); border-radius:var(--radius-pill); color:var(--text-secondary);">
              ${sub}
            </li>
          `).join('')}
        </ul>
        <button class="btn-primary-sm btn-select-tactical" type="button" data-sector="${sec.id}">
          <span>Explore ${sec.title} &rarr;</span>
        </button>
      </article>
    `).join('');

    container.querySelectorAll('.btn-select-tactical').forEach(btn => {
      btn.addEventListener('click', function () {
        const sector = this.getAttribute('data-sector');
        // Switch back to map view and focus
        const mapBtn = document.getElementById('view-mode-map-btn');
        if (mapBtn) mapBtn.click();
        updateGalaxyHUD(sector);
      });
    });
  }

  function initGalaxyMap() {
    // 1. Initial State
    updateGalaxyHUD('code');
    renderTacticalList();

    // 2. Planet Node Clicks
    const nodes = document.querySelectorAll('.planet-node');
    nodes.forEach(node => {
      node.addEventListener('click', function () {
        const sector = this.getAttribute('data-galaxy');
        updateGalaxyHUD(sector);
      });
    });

    // 3. Featured course action in HUD
    const hudActionBtn = document.getElementById('hud-galaxy-action-btn');
    if (hudActionBtn) {
      hudActionBtn.addEventListener('click', function () {
        const curr = GALAXY_DATA[activeGalaxySector];
        if (curr && curr.featuredCourseId) {
          openMissionBriefModal(curr.featuredCourseId);
        }
      });
    }

    // 4. View Mode Switcher (Orbital Map vs Tactical Index)
    const mapBtn = document.getElementById('view-mode-map-btn');
    const listBtn = document.getElementById('view-mode-list-btn');
    const viewport = document.getElementById('galaxy-viewport');
    const hudPanel = document.getElementById('galaxy-hud-panel');
    const listView = document.getElementById('galaxy-list-view');

    if (mapBtn && listBtn && viewport && hudPanel && listView) {
      mapBtn.addEventListener('click', function () {
        mapBtn.classList.add('active');
        mapBtn.setAttribute('aria-selected', 'true');
        listBtn.classList.remove('active');
        listBtn.setAttribute('aria-selected', 'false');

        viewport.classList.remove('hidden');
        hudPanel.classList.remove('hidden');
        listView.classList.add('hidden');
      });

      listBtn.addEventListener('click', function () {
        listBtn.classList.add('active');
        listBtn.setAttribute('aria-selected', 'true');
        mapBtn.classList.remove('active');
        mapBtn.setAttribute('aria-selected', 'false');

        viewport.classList.add('hidden');
        hudPanel.classList.add('hidden');
        listView.classList.remove('hidden');
      });
    }
  }

  /* ===========================================================================
     06. MISSION CONTROL: CATALOG, FILTERING, & SEARCH
     =========================================================================== */
  let activeSectorFilter = 'all';
  let activeDifficultyFilter = 'all';
  let missionSearchTerm = '';

  function renderMissionCard(mission) {
    const visualSVG = getSectorVisualSVG(mission.sector);

    return `
      <article class="mission-card" data-sector="${mission.sector}" data-id="${mission.id}">
        <div class="mission-visual-header">
          <div class="mission-icon-halo"></div>
          <span class="mission-badge-chip">${mission.badge}</span>
          <div class="mission-svg-container" style="position:relative; z-index:2;">
            ${visualSVG}
          </div>
        </div>

        <div class="mission-card-body">
          <div class="mission-meta-top">
            <span class="mission-sector-tag">${mission.sectorLabel}</span>
            <span class="mission-diff-badge">${mission.difficulty}</span>
          </div>

          <h3 class="mission-card-title">${mission.title}</h3>
          <p class="mission-instructor">Lead: <strong>${mission.instructor}</strong></p>

          <p class="mission-summary-text">${mission.summary}</p>

          <div class="mission-skills-pills">
            ${mission.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
          </div>

          <div class="mission-stats-bar">
            <span class="mission-duration">⏱ ${mission.duration}</span>
            <span class="mission-rating">★ ${mission.rating} <span style="font-size:0.75rem; color:var(--text-tertiary);">(${mission.reviewsCount})</span></span>
          </div>

          <div class="mission-card-footer">
            <span class="mission-price">${mission.price}</span>
            <button class="btn-card-brief" type="button" data-mission-id="${mission.id}" aria-label="View brief for ${mission.title}">
              Mission Brief &rarr;
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function filterAndRenderMissions() {
    const grid = document.getElementById('missions-grid');
    const emptyState = document.getElementById('no-missions-found');
    const countBadge = document.getElementById('mission-count-badge');
    if (!grid) return;

    const term = missionSearchTerm.trim().toLowerCase();

    const filtered = MISSIONS_DATA.filter(mission => {
      // Sector match
      const sectorMatch = (activeSectorFilter === 'all') || (mission.sector === activeSectorFilter);
      if (!sectorMatch) return false;

      // Difficulty match
      const diffMatch = (activeDifficultyFilter === 'all') || (mission.difficulty.toLowerCase() === activeDifficultyFilter.toLowerCase());
      if (!diffMatch) return false;

      // Keyword match
      if (!term) return true;

      const titleMatch = mission.title.toLowerCase().includes(term);
      const descMatch = mission.summary.toLowerCase().includes(term);
      const instructorMatch = mission.instructor.toLowerCase().includes(term);
      const sectorLabelMatch = mission.sectorLabel.toLowerCase().includes(term);
      const skillMatch = mission.skills.some(s => s.toLowerCase().includes(term));

      return titleMatch || descMatch || instructorMatch || sectorLabelMatch || skillMatch;
    });

    if (countBadge) {
      countBadge.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      grid.innerHTML = filtered.map(renderMissionCard).join('');
    }

    // Bind click events on cards and buttons
    grid.querySelectorAll('.btn-card-brief').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const missionId = this.getAttribute('data-mission-id');
        openMissionBriefModal(missionId);
      });
    });

    grid.querySelectorAll('.mission-card').forEach(card => {
      card.addEventListener('click', function () {
        const missionId = this.getAttribute('data-id');
        openMissionBriefModal(missionId);
      });
    });
  }

  function initMissionCatalog() {
    // Initial Render
    filterAndRenderMissions();

    // Sector Filter Tabs
    const sectorTabs = document.querySelectorAll('.sector-tab');
    sectorTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        sectorTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        activeSectorFilter = this.getAttribute('data-sector') || 'all';
        filterAndRenderMissions();
      });
    });

    // Difficulty Dropdown
    const diffSelect = document.getElementById('difficulty-select');
    if (diffSelect) {
      diffSelect.addEventListener('change', function () {
        activeDifficultyFilter = this.value;
        filterAndRenderMissions();
      });
    }

    // Search Input & Clear
    const searchInput = document.getElementById('mission-search-input');
    const clearBtn = document.getElementById('clear-mission-search');
    const resetBtn = document.getElementById('reset-mission-filters');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        missionSearchTerm = this.value;
        if (clearBtn) {
          if (missionSearchTerm.length > 0) {
            clearBtn.classList.remove('hidden');
          } else {
            clearBtn.classList.add('hidden');
          }
        }
        filterAndRenderMissions();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        missionSearchTerm = '';
        this.classList.add('hidden');
        searchInput.focus();
        filterAndRenderMissions();
      });
    }

    if (resetBtn && searchInput) {
      resetBtn.addEventListener('click', function () {
        activeSectorFilter = 'all';
        activeDifficultyFilter = 'all';
        missionSearchTerm = '';
        searchInput.value = '';
        if (clearBtn) clearBtn.classList.add('hidden');
        if (diffSelect) diffSelect.value = 'all';

        sectorTabs.forEach(t => {
          if (t.getAttribute('data-sector') === 'all') {
            t.classList.add('active');
            t.setAttribute('aria-selected', 'true');
          } else {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          }
        });

        filterAndRenderMissions();
      });
    }
  }

  /* ===========================================================================
     07. MISSION BRIEF MODAL SYSTEM
     =========================================================================== */
  let activeModalMission = null;
  let previousFocusElement = null;

  function openMissionBriefModal(missionId) {
    const mission = MISSIONS_DATA.find(m => m.id === missionId);
    if (!mission) return;

    activeModalMission = mission;
    previousFocusElement = document.activeElement;

    const modal = document.getElementById('mission-brief-modal');
    if (!modal) return;

    const sectorTag = document.getElementById('modal-mission-sector');
    const title = document.getElementById('modal-mission-title');
    const instructor = document.getElementById('modal-mission-instructor');
    const duration = document.getElementById('modal-mission-duration');
    const difficulty = document.getElementById('modal-mission-difficulty');
    const overview = document.getElementById('modal-mission-overview');
    const syllabusList = document.getElementById('modal-mission-syllabus');
    const skillsCluster = document.getElementById('modal-mission-skills');
    const priceVal = document.getElementById('modal-mission-price');

    if (sectorTag) sectorTag.textContent = `${mission.sectorLabel} // ${mission.badge}`;
    if (title) title.textContent = mission.title;
    if (instructor) instructor.textContent = `${mission.instructor} (${mission.instructorTitle})`;
    if (duration) duration.textContent = mission.duration;
    if (difficulty) difficulty.textContent = mission.difficulty;
    if (overview) overview.textContent = mission.overview;
    if (priceVal) priceVal.textContent = mission.price;

    if (syllabusList) {
      syllabusList.innerHTML = mission.syllabus.map(mod => `
        <li style="padding:1rem; background:rgba(255,255,255,0.02); border:1px solid var(--silver-border); border-radius:var(--radius-sm);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--electric-blue); margin-bottom:0.25rem;">
            ${mod.num}
          </div>
          <strong style="font-family:var(--font-tech); color:#FFFFFF; font-size:1.05rem; display:block; margin-bottom:0.35rem;">
            ${mod.title}
          </strong>
          <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">
            ${mod.desc}
          </p>
        </li>
      `).join('');
    }

    if (skillsCluster) {
      skillsCluster.innerHTML = mission.skills.map(s => `
        <span style="display:inline-block; padding:0.25rem 0.65rem; background:rgba(0,229,255,0.06); border:1px solid rgba(0,229,255,0.25); border-radius:var(--radius-pill); font-family:var(--font-mono); font-size:0.75rem; color:var(--electric-blue);">
          ${s}
        </span>
      `).join('');
    }

    // Open modal
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('mission-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeMissionBriefModal() {
    const modal = document.getElementById('mission-brief-modal');
    if (!modal) return;

    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previousFocusElement && typeof previousFocusElement.focus === 'function') {
      previousFocusElement.focus();
    }
  }

  function initMissionBriefModal() {
    const modal = document.getElementById('mission-brief-modal');
    const closeBtn = document.getElementById('mission-modal-close');
    const backdrop = document.getElementById('mission-modal-backdrop');
    const enrollBtn = document.getElementById('modal-enroll-action-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeMissionBriefModal);
    if (backdrop) backdrop.addEventListener('click', closeMissionBriefModal);

    if (enrollBtn) {
      enrollBtn.addEventListener('click', function () {
        const title = activeModalMission ? activeModalMission.title : 'Selected Mission';
        closeMissionBriefModal();
        openOrbitalSimModal(
          'Mission Flight Coordinates Initialized',
          `You have initiated flight registration for "${title}". In a production deployment, this synchronizes with your personal explorer spacecraft telemetry and downloads sandbox starter repositories.`
        );
      });
    }

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
        closeMissionBriefModal();
      }
    });
  }

  /* ===========================================================================
     08. ORBITAL SIMULATION ACTION MODAL
     =========================================================================== */
  function openOrbitalSimModal(title, message) {
    const modal = document.getElementById('orbital-sim-modal');
    if (!modal) return;

    const titleEl = document.getElementById('sim-modal-title');
    const messageEl = document.getElementById('sim-modal-message');

    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const dismissBtn = document.getElementById('sim-modal-dismiss');
    if (dismissBtn) dismissBtn.focus();
  }

  function closeOrbitalSimModal() {
    const modal = document.getElementById('orbital-sim-modal');
    if (!modal) return;

    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initOrbitalSimModal() {
    const modal = document.getElementById('orbital-sim-modal');
    const closeBtn = document.getElementById('sim-modal-close');
    const dismissBtn = document.getElementById('sim-modal-dismiss');
    const backdrop = document.getElementById('sim-modal-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', closeOrbitalSimModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeOrbitalSimModal);
    if (backdrop) backdrop.addEventListener('click', closeOrbitalSimModal);

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
        closeOrbitalSimModal();
      }
    });

    // Enter Orbit button in header
    const loginBtn = document.getElementById('nav-login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', function () {
        openOrbitalSimModal(
          'Explorer Authentication Gateway',
          'ORBITAL uses cryptographic passkey credentials. In this frontend demonstration experience, your flight session is already authenticated as Commander Alex Vance.'
        );
      });
    }
  }

  /* ===========================================================================
     09. LEARNING EXPEDITIONS CONTROLLER
     =========================================================================== */
  function renderExpedition(expKey) {
    const exp = EXPEDITIONS_DATA[expKey];
    if (!exp) return;

    const badge = document.getElementById('exp-badge');
    const title = document.getElementById('exp-title');
    const desc = document.getElementById('exp-desc');
    const level = document.getElementById('exp-level');
    const duration = document.getElementById('exp-duration');
    const capstones = document.getElementById('exp-capstones');
    const destination = document.getElementById('exp-destination');
    const stagesList = document.getElementById('expedition-stages-list');

    if (badge) badge.textContent = exp.badge;
    if (title) title.textContent = exp.title;
    if (desc) desc.textContent = exp.description;
    if (level) level.textContent = exp.level;
    if (duration) duration.textContent = exp.duration;
    if (capstones) capstones.textContent = exp.capstones;
    if (destination) destination.textContent = exp.destination;

    if (stagesList) {
      stagesList.innerHTML = exp.stages.map((stage, idx) => `
        <div class="stage-voyage-card" style="animation: fadeInUp 0.4s ease forwards ${idx * 0.08}s;">
          <div class="stage-order-num">${stage.num} // ${stage.duration}</div>
          <h4 class="stage-title">${stage.title}</h4>
          <p class="stage-desc">${stage.desc}</p>

          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:auto; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.06);">
            ${stage.skills.map(s => `
              <span style="font-family:var(--font-mono); font-size:0.68rem; padding:0.2rem 0.5rem; background:rgba(0,229,255,0.06); border:1px solid rgba(0,229,255,0.2); border-radius:var(--radius-pill); color:var(--electric-blue);">
                ${s}
              </span>
            `).join('')}
          </div>

          <div style="margin-top:0.85rem; font-family:var(--font-mono); font-size:0.68rem; color:var(--text-tertiary);">
            Capstone: <strong style="color:var(--text-secondary);">${stage.capstone}</strong>
          </div>
        </div>
      `).join('');
    }
  }

  function initExpeditions() {
    const tabs = document.querySelectorAll('.expedition-btn');
    if (!tabs.length) return;

    // Initial render
    renderExpedition('webdev');

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const key = this.getAttribute('data-expedition') || 'webdev';
        renderExpedition(key);
      });
    });
  }

  /* ===========================================================================
     10. MY ORBIT DASHBOARD CONTROLLER
     =========================================================================== */
  function initOrbitDashboard() {
    const continueBtn = document.getElementById('btn-continue-flight');
    const fill = document.getElementById('flight-progress-fill');
    const text = document.getElementById('flight-progress-text');

    let currentVal = 74;

    if (continueBtn && fill && text) {
      continueBtn.addEventListener('click', function () {
        if (currentVal < 94) {
          currentVal += 6;
        } else {
          currentVal = 100;
        }

        fill.style.width = currentVal + '%';
        text.textContent = currentVal + '% Synchronized';

        if (currentVal >= 100) {
          openOrbitalSimModal(
            'Mission Milestone Achieved!',
            'Commander Alex, you have completed all stages of "Deep Reinforcement Agents & Autonomous Swarms"! The milestone badge "Autonomous Pioneer" is now permanently certified in your flight records.'
          );
          currentVal = 74; // Reset for testing
        } else {
          openOrbitalSimModal(
            'Telemetry Stream Synchronized',
            `Flight progress synchronized to ${currentVal}%! Your 21 Sol streak and flight logs have been updated on the ORBITAL telemetry relay.`
          );
        }
      });
    }
  }

  /* ===========================================================================
     11. NAVIGATION & SCROLL BEHAVIOR
     =========================================================================== */
  function initNavigation() {
    const header = document.getElementById('orbital-header');
    const progressBar = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const searchTrigger = document.getElementById('nav-search-trigger');
    const missionSearchInput = document.getElementById('mission-search-input');

    // Header scroll glass & progress bar
    function handleScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = progress + '%';
      }

      if (header) {
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Back to top
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Quick search trigger
    if (searchTrigger && missionSearchInput) {
      searchTrigger.addEventListener('click', function () {
        const missionsSec = document.getElementById('missions');
        if (missionsSec) {
          missionsSec.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            missionSearchInput.focus();
          }, 600);
        }
      });
    }

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-action-btn');

    function openDrawer() {
      if (!drawer) return;
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Active Navigation Link Highlighting via IntersectionObserver
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if ('IntersectionObserver' in window && sections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      });

      sections.forEach(sec => observer.observe(sec));
    }
  }

  /* ===========================================================================
     12. NEWSLETTER FORM VALIDATION
     =========================================================================== */
  function initNewsletter() {
    const form = document.getElementById('orbital-newsletter-form');
    const input = document.getElementById('dispatch-email');
    const feedback = document.getElementById('dispatch-feedback');
    if (!form || !input || !feedback) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        feedback.textContent = 'Please enter an explorer email address.';
        feedback.style.color = '#F59E0B';
        input.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        feedback.textContent = 'Please enter a valid email format (e.g. explorer@station.space).';
        feedback.style.color = '#EF4444';
        input.focus();
        return;
      }

      feedback.textContent = `Transmission confirmed! The Orbital Dispatch will be routed to ${email}.`;
      feedback.style.color = 'var(--electric-blue)';
      input.value = '';

      setTimeout(() => {
        feedback.textContent = '';
      }, 7000);
    });
  }

  /* ===========================================================================
     13. SCROLL REVEAL OBSERVER
     =========================================================================== */
  function initScrollReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -70px 0px',
      threshold: 0.1
    });

    revealItems.forEach(el => observer.observe(el));
  }

  /* ===========================================================================
     14. DOM READY INITIALIZATION
     =========================================================================== */
  function onReady() {
    initGalaxyMap();
    initMissionCatalog();
    initMissionBriefModal();
    initOrbitalSimModal();
    initExpeditions();
    initOrbitDashboard();
    initNavigation();
    initNewsletter();
    initScrollReveal();

    console.log('%c ORBITAL %c Knowledge has no boundaries // Online Galaxy Active', 'background:#00E5FF; color:#02040A; font-weight:bold; padding:4px 8px; border-radius:4px;', 'color:#94A3B8; padding:4px;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();
