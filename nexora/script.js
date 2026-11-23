/**
 * =============================================================================
 * NEXORA — WORLD-CLASS FUTURISTIC EDTECH PLATFORM
 * Core Engine & Interactive Presentation Architecture
 * =============================================================================
 */

(function () {
  'use strict';

  /* ===========================================================================
     01. COMPREHENSIVE COURSE CATALOG DATA REPOSITORY
     =========================================================================== */
  const COURSES_DATA = [
    {
      id: 'course-ai-01',
      category: 'ai',
      categoryLabel: 'ARTIFICIAL INTELLIGENCE',
      title: 'Autonomous AI Agents & Large Reasoning Models',
      instructor: 'Dr. Aris Vance',
      instructorTitle: 'Ex-DeepMind Fellow & Lead AI Researcher',
      duration: '12 Weeks',
      level: 'Advanced',
      rating: '4.98',
      reviewsCount: 1420,
      price: '$149',
      badge: 'FRONTIER // POPULAR',
      summary: 'Architect autonomous multi-agent swarms, tool-use execution loops, vector memory stores, and reasoning chains with PyTorch and LangGraph.',
      tags: ['PyTorch', 'Autonomous Agents', 'Vector Embeddings', 'Reasoning Chains', 'RLHF'],
      overview: 'An elite curriculum for engineers looking to build the next generation of autonomous computational intelligence. Implement agentic reasoning loops from first principles, master vector search topologies, evaluate hallucination boundaries, and deploy multi-agent swarms into real-world production sandboxes.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'Foundations of Foundation Models & Attention Mechanisms',
          desc: 'Transformer deep dive, multi-head self-attention mathematics, and rotary positional embeddings.'
        },
        {
          num: 'Module 02',
          title: 'Tool-Calling Schemas & Structured ReAct Loops',
          desc: 'Function-calling protocols, planner-actor state machines, dynamic JSON schema validation, and error recovery.'
        },
        {
          num: 'Module 03',
          title: 'Memory Vector Stores & Hybrid RAG Topologies',
          desc: 'HNSW graphs, dense-sparse hybrid retrieval, cross-encoder re-ranking pipelines, and semantic cache layers.'
        },
        {
          num: 'Module 04',
          title: 'Multi-Agent Collaboration & Production Capstone',
          desc: 'Orchestrating agent swarms with supervisor state machines and automated code verification environments.'
        }
      ]
    },
    {
      id: 'course-web-02',
      category: 'web',
      categoryLabel: 'WEB DEVELOPMENT',
      title: 'Distributed Web Architecture with Next.js & Go',
      instructor: 'Elena Rostova',
      instructorTitle: 'Principal Systems Architect',
      duration: '14 Weeks',
      level: 'Intermediate',
      rating: '4.95',
      reviewsCount: 2180,
      price: '$129',
      badge: 'HIGH DEMAND',
      summary: 'Build hyper-scalable full-stack architectures combining Next.js 15, Go microservices, distributed caching, and zero-latency Edge runtimes.',
      tags: ['Next.js', 'Go / Golang', 'PostgreSQL', 'Redis', 'gRPC', 'Docker'],
      overview: 'Master modern web engineering at true hyperscale. Bridge the gap between reactive frontend interfaces and rock-solid Go microservices capable of processing tens of thousands of requests per second with sub-millisecond overhead.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'React Server Components & Edge Streaming',
          desc: 'Streaming SSR, partial prerendering, cache invalidation protocols, and client bundle optimization.'
        },
        {
          num: 'Module 02',
          title: 'High-Throughput Go Microservices',
          desc: 'Goroutines, channels, gRPC unary and streaming contracts, and custom middleware design.'
        },
        {
          num: 'Module 03',
          title: 'Distributed Data Modeling & ACID Transactions',
          desc: 'PostgreSQL read-replicas, connection pooling, idempotency keys, and distributed locking with Redis.'
        },
        {
          num: 'Module 04',
          title: 'Global Edge Infrastructure & Observability',
          desc: 'Distributed tracing with OpenTelemetry, Cloudflare Workers routing, and zero-downtime blue-green deployments.'
        }
      ]
    },
    {
      id: 'course-prog-03',
      category: 'programming',
      categoryLabel: 'SYSTEMS & LOGIC',
      title: 'Systems Programming & Concurrency in Modern Rust',
      instructor: 'Marcus Chen',
      instructorTitle: 'Rust Core Contributor & Systems Engineer',
      duration: '10 Weeks',
      level: 'Advanced',
      rating: '4.97',
      reviewsCount: 980,
      price: '$119',
      badge: 'SYSTEMS CORE',
      summary: 'Unravel zero-cost abstractions, memory safety without garbage collection, unsafe internals, and lock-free concurrent data structures in Rust.',
      tags: ['Rust', 'Systems Programming', 'Memory Safety', 'Concurrency', 'WebAssembly'],
      overview: 'Delve into low-level systems engineering with the world’s most loved programming language. Craft memory-safe, ultra-low-latency software that scales across multi-core CPU architectures without garbage collector pauses.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'The Rust Ownership Model & Lifetimes Demystified',
          desc: 'Borrow checker internals, non-lexical lifetimes, zero-cost abstractions, and RAII memory management.'
        },
        {
          num: 'Module 02',
          title: 'Multi-Threaded Concurrency & Channel Paradigms',
          desc: 'Send & Sync traits, atomic memory operations, lock-free ring buffers, and Tokio async runtime.'
        },
        {
          num: 'Module 03',
          title: 'Unsafe Rust, FFI, & Hardware Interfacing',
          desc: 'Raw pointers, ABI compatibility, inline assembly, and C foreign function interface (FFI) bindings.'
        },
        {
          num: 'Module 04',
          title: 'High-Performance Asynchronous Network Engine',
          desc: 'Build an asynchronous HTTP/3 reverse proxy with epoll/kqueue from scratch.'
        }
      ]
    },
    {
      id: 'course-data-04',
      category: 'data',
      categoryLabel: 'DATA SCIENCE',
      title: 'Applied Data Engineering & Real-Time Streaming',
      instructor: 'Priya Nair',
      instructorTitle: 'Staff Data Architect & Lakehouse Specialist',
      duration: '12 Weeks',
      level: 'Intermediate',
      rating: '4.92',
      reviewsCount: 1140,
      price: '$139',
      badge: 'ENTERPRISE DATA',
      summary: 'Design resilient data lakehouses, event-driven Kafka streams, Apache Spark pipelines, and automated dbt transformations for real-time analytics.',
      tags: ['Apache Kafka', 'Apache Spark', 'dbt', 'Snowflake', 'Python', 'Lakehouse'],
      overview: 'Stop treating data as static tables. Build real-time stream processing architectures capable of transforming millions of raw events into actionable business intelligence with sub-second latencies and guaranteed data consistency.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'Event Streaming Architectures with Kafka',
          desc: 'Topic partitioning, consumer group rebalancing, schema registries, and exactly-once processing.'
        },
        {
          num: 'Module 02',
          title: 'Large-Scale Distributed ETL with Spark',
          desc: 'Resilient Distributed Datasets (RDDs), Catalyst optimizer, memory tuning, and PySpark execution.'
        },
        {
          num: 'Module 03',
          title: 'The Modern Analytics Lakehouse',
          desc: 'Delta Lake ACID tables, medallion architecture, schema evolution, and dbt data testing.'
        },
        {
          num: 'Module 04',
          title: 'End-to-End Real-Time Analytics Pipeline',
          desc: 'Continuous anomaly detection engine with Grafana telemetry and automated alerting.'
        }
      ]
    },
    {
      id: 'course-design-05',
      category: 'design',
      categoryLabel: 'UI/UX DESIGN',
      title: 'Spatial UI/UX Architecture & Micro-Interactions',
      instructor: 'Soren Kjaer',
      instructorTitle: 'Award-Winning Digital Product Director',
      duration: '8 Weeks',
      level: 'Intermediate',
      rating: '4.99',
      reviewsCount: 1860,
      price: '$129',
      badge: 'EDITOR CHOICE',
      summary: 'Craft Apple-inspired design systems, spatial layout ergonomics, tactile micro-animations, and fluid responsive design tokens that mesmerize users.',
      tags: ['Figma Design Systems', 'Spatial UX', 'Motion Design', 'Design Tokens', 'WCAG 2.2'],
      overview: 'Bridge the gap between visionary digital design and surgical frontend implementation. Learn how elite product studios produce interfaces that feel alive, intuitive, and effortlessly premium.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'Ergonomics of Spatial UI & Visual Hierarchy',
          desc: 'Z-index depth layering, dynamic lighting shaders, optical balance, and editorial typography.'
        },
        {
          num: 'Module 02',
          title: 'Design Tokens & Enterprise Component Systems',
          desc: 'Multi-brand token architectures, semantic color math, component variants, and state models.'
        },
        {
          num: 'Module 03',
          title: 'Fluid Motion Design & Micro-Interactions',
          desc: 'Spring physics curves, gestural choreographies, interactive prototypes, and tactile feedback.'
        },
        {
          num: 'Module 04',
          title: 'Production Handoff & Design Engineering Audit',
          desc: 'Specifying token exports for React and Tailwind CSS, plus accessibility conformance.'
        }
      ]
    },
    {
      id: 'course-sec-06',
      category: 'security',
      categoryLabel: 'CYBERSECURITY',
      title: 'Zero-Trust Architecture & Offensive Threat Modeling',
      instructor: 'Kaelen Voss',
      instructorTitle: 'Offensive Security Lead & Ethical Hacker',
      duration: '10 Weeks',
      level: 'Advanced',
      rating: '4.94',
      reviewsCount: 890,
      price: '$149',
      badge: 'HIGH SECURITY',
      summary: 'Protect cloud perimeters against modern state actors. Learn defensive red-teaming, identity boundaries, cryptography, and container sandboxing.',
      tags: ['Zero-Trust', 'Penetration Testing', 'Cryptography', 'OAuth 2.1', 'Kubernetes Hardening'],
      overview: 'In a world of constant digital conflict, traditional firewalls are obsolete. Master offensive threat modeling and zero-trust engineering to build systems that withstand sophisticated cyber attacks.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'Principles of Zero-Trust & Identity As Perimeters',
          desc: 'Continuous verification, mutual TLS (mTLS), SPIFFE/SPIRE identity, and network policy segmentation.'
        },
        {
          num: 'Module 02',
          title: 'Offensive Threat Modeling & Attack Surface Mapping',
          desc: 'MITRE ATT&CK framework, adversary simulation, privilege escalation, and container escapes.'
        },
        {
          num: 'Module 03',
          title: 'Applied Cryptography & Key Management',
          desc: 'Elliptic curve cryptography, post-quantum readiness, HSM integration, and envelope encryption.'
        },
        {
          num: 'Module 04',
          title: 'Cloud Perimeter Penetration Capstone',
          desc: 'Audit and patch a live vulnerable microservices cluster under simulated attack.'
        }
      ]
    },
    {
      id: 'course-biz-07',
      category: 'business',
      categoryLabel: 'BUSINESS & TECH',
      title: 'Tech Venture Engineering & Product Strategy',
      instructor: 'Sophia Sterling',
      instructorTitle: 'Y-Combinator Alum & Venture Partner',
      duration: '8 Weeks',
      level: 'All Levels',
      rating: '4.89',
      reviewsCount: 750,
      price: '$99',
      badge: 'LEADERSHIP',
      summary: 'Turn technical breakthroughs into viable tech businesses. Master unit economics, product-led growth loops, developer relations, and venture pitching.',
      tags: ['Product Strategy', 'Venture Capital', 'Unit Economics', 'GTM Execution', 'Growth Loops'],
      overview: 'The greatest technical innovation means nothing if no one uses it. Learn the mental models, commercial frameworks, and strategic execution tactics used by top Silicon Valley founders.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'De-Risking Deep Tech & Market Validation',
          desc: 'Customer discovery interviews, MVP scoping, defensibility moats, and technical differentiation.'
        },
        {
          num: 'Module 02',
          title: 'Software Unit Economics & Pricing Mechanics',
          desc: 'CAC, LTV, payback windows, gross margins, and usage-based pricing models.'
        },
        {
          num: 'Module 03',
          title: 'Developer-Led Growth & Open-Core Models',
          desc: 'Bottom-up adoption funnels, community flywheel engineering, and open-source monetization.'
        },
        {
          num: 'Module 04',
          title: 'Venture Pitch & Term Sheet Simulation',
          desc: 'Build an investor deck and model cap-table dilution under seed and Series-A rounds.'
        }
      ]
    },
    {
      id: 'course-cloud-08',
      category: 'cloud',
      categoryLabel: 'CLOUD COMPUTING',
      title: 'Cloud-Native Infrastructure & Kubernetes at Scale',
      instructor: 'Devon Thorne',
      instructorTitle: 'Principal Site Reliability Engineer',
      duration: '12 Weeks',
      level: 'Advanced',
      rating: '4.96',
      reviewsCount: 1310,
      price: '$139',
      badge: 'DEVOPS ELITE',
      summary: 'Master Kubernetes orchestration, Terraform GitOps pipelines, service meshes, auto-scaling, and multi-region chaos engineering.',
      tags: ['Kubernetes (k8s)', 'Terraform / IaC', 'GitOps / ArgoCD', 'Istio Mesh', 'Prometheus', 'AWS / GCP'],
      overview: 'Architect cloud platforms that never go down. From automated declarative infrastructure to sophisticated service meshes and multi-cloud resilience, gain deep operational competence in today’s most vital technologies.',
      syllabus: [
        {
          num: 'Module 01',
          title: 'Declarative Infrastructure with Terraform & OpenTofu',
          desc: 'State management, immutable modules, drift detection, and automated policy-as-code.'
        },
        {
          num: 'Module 02',
          title: 'Deep Kubernetes Pod Scheduling & Networking',
          desc: 'CNI plugins, ingress controllers, custom resource definitions (CRDs), and horizontal autoscaling.'
        },
        {
          num: 'Module 03',
          title: 'GitOps CD Pipelines with ArgoCD',
          desc: 'Automated reconciliation, progressive canary delivery with Flagger, and multi-cluster routing.'
        },
        {
          num: 'Module 04',
          title: 'Multi-Region Resilience & Chaos Injection',
          desc: 'Simulate datacenter outages using Chaos Mesh and verify zero-downtime automated recovery.'
        }
      ]
    }
  ];

  /* ===========================================================================
     02. STRUCTURED LEARNING PATHS DATA REPOSITORY
     =========================================================================== */
  const PATHS_DATA = {
    fullstack: {
      badge: 'FULL-STACK ROADMAP',
      title: 'Become a Production-Grade Full-Stack Developer',
      description: 'A 360-degree journey from foundational web architecture through reactive frontend design, robust microservice APIs, and automated cloud deployments.',
      duration: '28 Weeks',
      projects: '4 Major Capstones',
      level: 'Beginner → Advanced',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Modern Frontend Architecture',
          duration: '6 Weeks',
          desc: 'TypeScript mastery, semantic HTML5, modern CSS3 layout engines, and deep React 19 paradigms.',
          skills: ['TypeScript', 'React 19', 'Next.js', 'CSS Grid', 'Accessibility'],
          capstone: 'Interactive Distributed Analytics Dashboard'
        },
        {
          num: 'STAGE 02',
          title: 'High-Throughput Backend & APIs',
          duration: '8 Weeks',
          desc: 'Asynchronous server runtimes with Node.js & Go, RESTful API design, and gRPC microservice contracts.',
          skills: ['Go', 'Node.js', 'gRPC', 'Protobuf', 'Redis Caching'],
          capstone: 'Concurrent Real-Time Messaging Engine'
        },
        {
          num: 'STAGE 03',
          title: 'Distributed Databases & Persistence',
          duration: '6 Weeks',
          desc: 'ACID transactions in PostgreSQL, connection pooling, Prisma ORM, and query indexing optimizations.',
          skills: ['PostgreSQL', 'Prisma', 'Database Sharding', 'ACID Rules', 'Redis'],
          capstone: 'E-Commerce Inventory Engine with Idempotency'
        },
        {
          num: 'STAGE 04',
          title: 'Cloud Deployment & DevOps Pipeline',
          duration: '8 Weeks',
          desc: 'Containerization with Docker, Kubernetes cluster orchestration, and automated CI/CD deployment pipelines.',
          skills: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS / GCP', 'Monitoring'],
          capstone: 'Multi-Region Microservice Platform with Telemetry'
        }
      ]
    },
    ai: {
      badge: 'AI & REASONING ROADMAP',
      title: 'Enter the Frontier World of Artificial Intelligence',
      description: 'Journey from mathematical optimization and neural architectures to autonomous agent swarms, vector databases, and multi-modal reasoning models.',
      duration: '32 Weeks',
      projects: '4 Frontier Capstones',
      level: 'Intermediate → Advanced',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Mathematical & Python Foundations',
          duration: '6 Weeks',
          desc: 'Linear algebra, multivariable calculus, probability theory, vectorized NumPy, and PyTorch tensors.',
          skills: ['Python 3.12', 'NumPy', 'PyTorch', 'Linear Algebra', 'Gradient Descent'],
          capstone: 'Custom Neural Network from Raw Matrices'
        },
        {
          num: 'STAGE 02',
          title: 'Deep Learning & Transformers',
          duration: '8 Weeks',
          desc: 'Convolutional networks, attention mechanisms, Transformer encoders/decoders, and fine-tuning HuggingFace models.',
          skills: ['Transformers', 'HuggingFace', 'BERT / GPT', 'LoRA / PEFT', 'Attention'],
          capstone: 'Domain-Specialized Code Generation Transformer'
        },
        {
          num: 'STAGE 03',
          title: 'Vector Databases & Agentic RAG',
          duration: '8 Weeks',
          desc: 'High-dimensional embeddings, HNSW index construction, re-ranking pipelines, and structured tool-calling.',
          skills: ['Qdrant', 'LangGraph', 'RAG Topologies', 'Tool Calling', 'Function Schemas'],
          capstone: 'Autonomous Research Assistant with Citation Engine'
        },
        {
          num: 'STAGE 04',
          title: 'Autonomous Swarms & Reinforcement Learning',
          duration: '10 Weeks',
          desc: 'Policy gradient methods, PPO, multi-agent game theory, supervisor state machines, and sandbox evaluation.',
          skills: ['RLHF', 'Multi-Agent Swarms', 'Environment Modeling', 'PPO', 'Safety Evals'],
          capstone: 'Self-Improving Multi-Agent Software Development Team'
        }
      ]
    },
    python: {
      badge: 'SYSTEMS & LOGIC ROADMAP',
      title: 'Master Python for High-Performance Engineering',
      description: 'Transcend basic scripting. Master Python internals, asynchronous event loops, C extensions, high-throughput data processing, and production deployment.',
      duration: '22 Weeks',
      projects: '4 Systems Capstones',
      level: 'Beginner → Advanced',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Python Internals & OOP Mastery',
          duration: '5 Weeks',
          desc: 'Data model protocols, dunder methods, memory management, garbage collection, and custom metaclasses.',
          skills: ['CPython Internals', 'OOP Patterns', 'Dunder Methods', 'Generators', 'Memory Profiling'],
          capstone: 'Custom Python In-Memory Query Engine'
        },
        {
          num: 'STAGE 02',
          title: 'Asyncio & Concurrent Architectures',
          duration: '6 Weeks',
          desc: 'Event loops, coroutines, tasks, thread pools, multiprocessing, and non-blocking network I/O.',
          skills: ['Asyncio', 'Aiohttp', 'Multiprocessing', 'Thread Safety', 'Epoll'],
          capstone: 'High-Concurrency Web Crawler with Rate Limiting'
        },
        {
          num: 'STAGE 03',
          title: 'High-Performance APIs with FastAPI',
          duration: '5 Weeks',
          desc: 'Pydantic data contracts, dependency injection, async SQLAlchemy, database connection pooling, and JWT auth.',
          skills: ['FastAPI', 'Pydantic v2', 'Async SQLAlchemy', 'Alembic', 'Redis'],
          capstone: 'Production Enterprise REST API with OAuth2'
        },
        {
          num: 'STAGE 04',
          title: 'Data Pipelines & Distributed Tasks',
          duration: '6 Weeks',
          desc: 'Celery distributed queues, Redis brokers, PySpark distributed compute, and automated package distribution.',
          skills: ['Celery', 'PySpark', 'Docker', 'Pytest', 'Poetry Packaging'],
          capstone: 'Distributed Task Processing Engine'
        }
      ]
    },
    uiux: {
      badge: 'PRODUCT DESIGN ROADMAP',
      title: 'Master Spatial UI/UX Design & Design Engineering',
      description: 'Master the craft of Apple-grade digital interfaces, spatial typography, component design tokens, motion choreography, and design system engineering.',
      duration: '20 Weeks',
      projects: '4 Portfolio Capstones',
      level: 'All Levels → Advanced',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Design Foundations & Spatial Ergonomics',
          duration: '5 Weeks',
          desc: 'Color theory, optical grids, spatial visual hierarchy, editorial typography, and contrast mathematics.',
          skills: ['Figma Pro', 'Visual Hierarchy', 'Typography Systems', 'Optical Grids', 'Design Tokens'],
          capstone: 'Comprehensive Luxury Product Editorial Interface'
        },
        {
          num: 'STAGE 02',
          title: 'User Research & Wireframe Prototyping',
          desc: 'User journey mapping, cognitive load heuristics, interactive wireframes, and usability testing protocols.',
          duration: '5 Weeks',
          skills: ['User Interviews', 'Heuristic Audits', 'Wireframing', 'Information Architecture', 'FigJam'],
          capstone: 'End-to-End Fintech Mobile & Desktop Experience'
        },
        {
          num: 'STAGE 03',
          title: 'Enterprise Design Systems & Tokens',
          duration: '5 Weeks',
          desc: 'Component libraries, auto-layout variants, interactive state engines, and token synchronization for React.',
          skills: ['Design Tokens', 'Figma Variants', 'Variables & Modes', 'Component Architecture', 'Tokens Studio'],
          capstone: 'Multi-Brand Cross-Platform Design System'
        },
        {
          num: 'STAGE 04',
          title: 'Motion Choreography & Code Handoff',
          duration: '5 Weeks',
          desc: 'Micro-interactions, spring physics, dynamic CSS shaders, and pixel-perfect design engineering reviews.',
          skills: ['Framer', 'CSS Animations', 'Spring Physics', 'WCAG 2.2 AAA', 'Developer Handoff'],
          capstone: 'Living Interactive Design System with Production Code'
        }
      ]
    }
  };

  /* ===========================================================================
     03. DISCIPLINE VISUAL ICON GRAPHICS (INLINE SVGs)
     =========================================================================== */
  function getCategoryVisualSVG(cat) {
    switch (cat) {
      case 'ai':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="32" stroke="#7C3AED" stroke-width="2.5" stroke-dasharray="4 4" />
            <circle cx="50" cy="50" r="16" fill="rgba(124, 58, 237, 0.25)" stroke="#00D2FF" stroke-width="2" />
            <circle cx="26" cy="30" r="6" fill="#00D2FF" />
            <circle cx="74" cy="30" r="6" fill="#7C3AED" />
            <circle cx="30" cy="74" r="6" fill="#7C3AED" />
            <circle cx="70" cy="74" r="6" fill="#00D2FF" />
            <line x1="30" y1="33" x2="45" y2="45" stroke="#00D2FF" stroke-width="1.5" stroke-opacity="0.7"/>
            <line x1="70" y1="33" x2="55" y2="45" stroke="#7C3AED" stroke-width="1.5" stroke-opacity="0.7"/>
            <line x1="34" y1="71" x2="45" y2="55" stroke="#7C3AED" stroke-width="1.5" stroke-opacity="0.7"/>
            <line x1="66" y1="71" x2="55" y2="55" stroke="#00D2FF" stroke-width="1.5" stroke-opacity="0.7"/>
          </svg>`;
      case 'web':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="24" width="60" height="52" rx="8" stroke="#00D2FF" stroke-width="2.5" fill="rgba(0, 210, 255, 0.08)"/>
            <line x1="20" y1="38" x2="80" y2="38" stroke="#00D2FF" stroke-width="1.5" stroke-opacity="0.6"/>
            <circle cx="28" cy="31" r="2.5" fill="#00D2FF" />
            <circle cx="36" cy="31" r="2.5" fill="#7C3AED" />
            <circle cx="44" cy="31" r="2.5" fill="#94A3B8" />
            <path d="M40 50L34 56L40 62" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M60 50L66 56L60 62" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="53" y1="48" x2="47" y2="64" stroke="#00D2FF" stroke-width="2" stroke-linecap="round"/>
          </svg>`;
      case 'programming':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,18 80,35 80,65 50,82 20,65 20,35" stroke="#3B82F6" stroke-width="2.5" fill="rgba(59, 130, 246, 0.1)"/>
            <circle cx="50" cy="50" r="14" stroke="#00D2FF" stroke-width="2"/>
            <line x1="50" y1="18" x2="50" y2="36" stroke="#3B82F6" stroke-width="2"/>
            <line x1="50" y1="64" x2="50" y2="82" stroke="#3B82F6" stroke-width="2"/>
            <line x1="20" y1="35" x2="38" y2="45" stroke="#3B82F6" stroke-width="2"/>
            <line x1="80" y1="35" x2="62" y2="45" stroke="#3B82F6" stroke-width="2"/>
          </svg>`;
      case 'data':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="28" rx="28" ry="10" stroke="#10B981" stroke-width="2.5" fill="rgba(16, 185, 129, 0.15)"/>
            <path d="M22 28V50C22 55.5 34.5 60 50 60C65.5 60 78 55.5 78 50V28" stroke="#10B981" stroke-width="2.5"/>
            <path d="M22 50V72C22 77.5 34.5 82 50 82C65.5 82 78 77.5 78 72V50" stroke="#10B981" stroke-width="2.5"/>
            <line x1="50" y1="40" x2="50" y2="70" stroke="#00D2FF" stroke-width="1.5" stroke-dasharray="3 3"/>
          </svg>`;
      case 'design':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42" cy="42" r="22" stroke="#EC4899" stroke-width="2.5" fill="rgba(236, 72, 153, 0.15)"/>
            <circle cx="58" cy="58" r="22" stroke="#7C3AED" stroke-width="2.5" fill="rgba(124, 58, 237, 0.15)"/>
            <line x1="25" y1="75" x2="75" y2="25" stroke="#00D2FF" stroke-width="2" stroke-linecap="round"/>
            <circle cx="50" cy="50" r="4" fill="#FFFFFF"/>
          </svg>`;
      case 'security':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20L76 30V50C76 66.5 65 79 50 84C35 79 24 66.5 24 50V30L50 20Z" stroke="#F59E0B" stroke-width="2.5" fill="rgba(245, 158, 11, 0.12)"/>
            <circle cx="50" cy="48" r="7" stroke="#FFFFFF" stroke-width="2"/>
            <path d="M50 55V64" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`;
      case 'business':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 18L64 36L80 40L68 53L71 70L50 60L29 70L32 53L20 40L36 36L50 18Z" stroke="#8B5CF6" stroke-width="2.5" fill="rgba(139, 92, 246, 0.15)"/>
            <circle cx="50" cy="46" r="8" fill="#00D2FF"/>
          </svg>`;
      case 'cloud':
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 68H70C78 68 84 62 84 54C84 46.5 78.5 40.5 71 40C70 28 60 20 48 20C38 20 29 26 26 35C18 37 12 43 12 51C12 60 19 68 28 68" stroke="#06B6D4" stroke-width="2.5" fill="rgba(6, 182, 212, 0.15)"/>
            <line x1="40" y1="52" x2="60" y2="52" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
            <line x1="45" y1="60" x2="55" y2="60" stroke="#00D2FF" stroke-width="2" stroke-linecap="round"/>
          </svg>`;
      default:
        return `
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" stroke="#00D2FF" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="10" fill="#7C3AED"/>
          </svg>`;
    }
  }

  /* ===========================================================================
     04. THREE.JS 3D KNOWLEDGE SPHERE & 2D CANVAS FALLBACK
     =========================================================================== */
  function initKnowledgeSphere() {
    const canvas = document.getElementById('knowledge-sphere-canvas');
    if (!canvas) return;

    // Check if Three.js is loaded
    if (typeof THREE !== 'undefined') {
      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 240;

        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          alpha: true,
          antialias: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(canvas.parentElement.clientWidth || window.innerWidth, canvas.parentElement.clientHeight || window.innerHeight);

        // Group container for smooth unified rotations
        const sphereGroup = new THREE.Group();
        scene.add(sphereGroup);

        // 1. Geodesic Wireframe Sphere (Inner Knowledge Core)
        const coreGeo = new THREE.IcosahedronGeometry(70, 2);
        const coreMat = new THREE.MeshBasicMaterial({
          color: 0x00d2ff,
          wireframe: true,
          transparent: true,
          opacity: 0.18
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        sphereGroup.add(coreMesh);

        // 2. Vertex Node Points (Knowledge Nodes)
        const pointsMat = new THREE.PointsMaterial({
          color: 0x7c3aed,
          size: 3.2,
          transparent: true,
          opacity: 0.75,
          blending: THREE.AdditiveBlending
        });
        const pointsMesh = new THREE.Points(coreGeo, pointsMat);
        sphereGroup.add(pointsMesh);

        // 3. Orbital Rings
        const ringGeo1 = new THREE.TorusGeometry(88, 0.6, 16, 100);
        const ringMat1 = new THREE.MeshBasicMaterial({
          color: 0x00d2ff,
          transparent: true,
          opacity: 0.35,
          wireframe: true
        });
        const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
        ring1.rotation.x = Math.PI / 3;
        ring1.rotation.y = Math.PI / 6;
        sphereGroup.add(ring1);

        const ringGeo2 = new THREE.TorusGeometry(105, 0.5, 16, 100);
        const ringMat2 = new THREE.MeshBasicMaterial({
          color: 0x7c3aed,
          transparent: true,
          opacity: 0.28,
          wireframe: true
        });
        const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
        ring2.rotation.x = -Math.PI / 4;
        ring2.rotation.z = Math.PI / 5;
        sphereGroup.add(ring2);

        // 4. Ambient Starfield / Particle Cloud
        const particleCount = 200;
        const particleGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
          const radius = 95 + Math.random() * 55;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);

          positions[i] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i + 2] = radius * Math.cos(phi);
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
          color: 0x94a3b8,
          size: 1.8,
          transparent: true,
          opacity: 0.5,
          blending: THREE.AdditiveBlending
        });
        const particleCloud = new THREE.Points(particleGeo, particleMat);
        sphereGroup.add(particleCloud);

        // Interactive Mouse Tracking with Damping
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener('mousemove', function (e) {
          const halfW = window.innerWidth / 2;
          const halfH = window.innerHeight / 2;
          mouseX = (e.clientX - halfW) * 0.0006;
          mouseY = (e.clientY - halfH) * 0.0006;
        }, { passive: true });

        // Responsive Resizing
        function onResize() {
          if (!canvas.parentElement) return;
          const w = canvas.parentElement.clientWidth || window.innerWidth;
          const h = canvas.parentElement.clientHeight || window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
        window.addEventListener('resize', onResize);

        // Animation Loop
        let animId;
        function animate() {
          animId = requestAnimationFrame(animate);

          targetX += (mouseX - targetX) * 0.05;
          targetY += (mouseY - targetY) * 0.05;

          sphereGroup.rotation.y += 0.0035;
          sphereGroup.rotation.x = targetY * 0.8;
          sphereGroup.rotation.z = targetX * 0.8;

          ring1.rotation.z += 0.002;
          ring2.rotation.y -= 0.0025;
          particleCloud.rotation.y += 0.001;

          renderer.render(scene, camera);
        }
        animate();

        return; // Three.js succeeded cleanly
      } catch (err) {
        console.warn('Three.js initialization failed, deploying 2D Canvas fallback:', err);
      }
    }

    // Fallback: 2D Canvas Animated Knowledge Core
    initSphereCanvasFallback(canvas);
  }

  function initSphereCanvasFallback(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let angle = 0;
    const nodes = [];
    const nodeCount = 38;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        theta: Math.random() * Math.PI * 2,
        phi: Math.acos(2 * Math.random() - 1),
        radius: 110 + Math.random() * 30,
        speed: (Math.random() - 0.5) * 0.008,
        color: Math.random() > 0.4 ? '#00D2FF' : '#7C3AED',
        size: 2 + Math.random() * 2.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      angle += 0.004;

      // Central Atmospheric Radial Glow
      const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 180);
      glow.addColorStop(0, 'rgba(0, 210, 255, 0.12)');
      glow.addColorStop(0.5, 'rgba(124, 58, 237, 0.06)');
      glow.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.fill();

      // Orbital Ellipses
      ctx.lineWidth = 1.5;

      // Orbit 1 (Cyan)
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.3)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 130, 60, angle, 0, Math.PI * 2);
      ctx.stroke();

      // Orbit 2 (Violet)
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.25)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 150, 75, -angle * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      // Render 3D Projected Rotating Nodes
      nodes.forEach(node => {
        node.theta += node.speed;
        const x = cx + node.radius * Math.sin(node.phi) * Math.cos(node.theta + angle);
        const y = cy + node.radius * Math.cos(node.phi);
        const z = node.radius * Math.sin(node.phi) * Math.sin(node.theta + angle);

        const scale = (z + 180) / 360;
        const alpha = Math.max(0.15, Math.min(0.9, scale));

        ctx.fillStyle = node.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, node.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ===========================================================================
     05. DYNAMIC COURSE CATALOG & SEARCH / FILTER ARCHITECTURE
     =========================================================================== */
  let currentCategory = 'all';
  let searchQuery = '';

  function renderCourseCard(course) {
    const visualSVG = getCategoryVisualSVG(course.category);
    
    return `
      <article class="course-card" data-cat="${course.category}" data-id="${course.id}">
        <!-- Visual Presentation -->
        <div class="course-card-visual">
          <div class="visual-icon-glow"></div>
          <div class="visual-graphic-container">
            ${visualSVG}
          </div>
        </div>

        <!-- Card Body -->
        <div class="course-card-body">
          <div class="course-meta-top">
            <span class="course-cat-tag">${course.categoryLabel}</span>
            <span class="course-difficulty-badge">${course.level}</span>
          </div>

          <h3 class="course-title" title="${course.title}">${course.title}</h3>
          <p class="course-instructor">Lead: <strong>${course.instructor}</strong></p>

          <p class="course-summary" style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55; margin-bottom:1.25rem;">
            ${course.summary}
          </p>

          <div class="course-stats-bar">
            <span class="course-duration">⏱ ${course.duration}</span>
            <span class="course-rating">★ ${course.rating} <span style="font-size:0.75rem; color:var(--text-tertiary);">(${course.reviewsCount})</span></span>
          </div>

          <div class="course-footer-cta">
            <div class="course-price-tag">${course.price}</div>
            <button class="btn-card-details" type="button" data-course-id="${course.id}" aria-label="View syllabus for ${course.title}">
              View Syllabus &rarr;
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function filterAndRenderCourses() {
    const grid = document.getElementById('courses-grid');
    const emptyState = document.getElementById('no-courses-found');
    const countDisplay = document.getElementById('results-count-num');
    if (!grid) return;

    const query = searchQuery.trim().toLowerCase();

    const filtered = COURSES_DATA.filter(course => {
      // Category match
      const matchesCat = (currentCategory === 'all') || (course.category === currentCategory);
      if (!matchesCat) return false;

      // Search match
      if (!query) return true;

      const titleMatch = course.title.toLowerCase().includes(query);
      const descMatch = course.summary.toLowerCase().includes(query);
      const instructorMatch = course.instructor.toLowerCase().includes(query);
      const catMatch = course.categoryLabel.toLowerCase().includes(query);
      const tagsMatch = course.tags.some(tag => tag.toLowerCase().includes(query));

      return titleMatch || descMatch || instructorMatch || catMatch || tagsMatch;
    });

    // Update count display
    if (countDisplay) {
      countDisplay.textContent = filtered.length;
    }

    // Toggle Empty State vs Grid
    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      grid.innerHTML = filtered.map(renderCourseCard).join('');
    }

    // Attach click listeners to "View Syllabus" buttons
    grid.querySelectorAll('.btn-card-details').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const courseId = this.getAttribute('data-course-id');
        openCourseModal(courseId);
      });
    });

    // Also clicking the card opens details
    grid.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', function () {
        const courseId = this.getAttribute('data-id');
        openCourseModal(courseId);
      });
    });
  }

  function initCourseCatalog() {
    // 1. Initial Render
    filterAndRenderCourses();

    // 2. Category Tab Switching
    const tabs = document.querySelectorAll('.cat-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        currentCategory = this.getAttribute('data-category') || 'all';
        filterAndRenderCourses();
      });
    });

    // 3. Search Input & Clear
    const searchInput = document.getElementById('course-search-input');
    const clearBtn = document.getElementById('clear-search-btn');
    const resetBtn = document.getElementById('reset-filters-btn');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = this.value;
        if (clearBtn) {
          if (searchQuery.length > 0) {
            clearBtn.classList.remove('hidden');
          } else {
            clearBtn.classList.add('hidden');
          }
        }
        filterAndRenderCourses();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        this.classList.add('hidden');
        searchInput.focus();
        filterAndRenderCourses();
      });
    }

    if (resetBtn && searchInput) {
      resetBtn.addEventListener('click', function () {
        currentCategory = 'all';
        searchQuery = '';
        searchInput.value = '';
        if (clearBtn) clearBtn.classList.add('hidden');
        tabs.forEach(t => {
          if (t.getAttribute('data-category') === 'all') {
            t.classList.add('active');
            t.setAttribute('aria-selected', 'true');
          } else {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          }
        });
        filterAndRenderCourses();
      });
    }
  }

  /* ===========================================================================
     06. COURSE DETAILS MODAL SYSTEM
     =========================================================================== */
  let activeModalCourse = null;
  let previousActiveElement = null;

  function openCourseModal(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    activeModalCourse = course;
    previousActiveElement = document.activeElement;

    const modal = document.getElementById('course-modal');
    if (!modal) return;

    // Populate modal contents
    const catBadge = document.getElementById('modal-course-category');
    const title = document.getElementById('modal-course-title');
    const instructor = document.getElementById('modal-course-instructor');
    const duration = document.getElementById('modal-course-duration');
    const difficulty = document.getElementById('modal-course-difficulty');
    const overview = document.getElementById('modal-course-overview');
    const syllabusList = document.getElementById('modal-course-syllabus');
    const tagsCloud = document.getElementById('modal-course-tags');
    const price = document.getElementById('modal-course-price');

    if (catBadge) catBadge.textContent = course.categoryLabel;
    if (title) title.textContent = course.title;
    if (instructor) instructor.textContent = `${course.instructor} (${course.instructorTitle})`;
    if (duration) duration.textContent = course.duration;
    if (difficulty) difficulty.textContent = course.level;
    if (overview) overview.textContent = course.overview;
    if (price) price.textContent = course.price;

    // Populate syllabus list
    if (syllabusList) {
      syllabusList.innerHTML = course.syllabus.map(mod => `
        <li style="margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--electric-cyan); margin-bottom:0.25rem;">
            ${mod.num}
          </div>
          <strong style="color:#FFFFFF; font-size:0.95rem; display:block; margin-bottom:0.35rem;">
            ${mod.title}
          </strong>
          <span style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
            ${mod.desc}
          </span>
        </li>
      `).join('');
    }

    // Populate tags
    if (tagsCloud) {
      tagsCloud.innerHTML = course.tags.map(t => `
        <span class="skill-pill" style="display:inline-block; padding:0.25rem 0.65rem; background:rgba(255,255,255,0.04); border:1px solid var(--silver-border); border-radius:var(--border-radius-pill); font-family:var(--font-mono); font-size:0.75rem; color:var(--text-secondary); margin:0.25rem;">
          ${t}
        </span>
      `).join('');
    }

    // Open Modal
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Set focus to close button
    const closeBtn = document.getElementById('course-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeCourseModal() {
    const modal = document.getElementById('course-modal');
    if (!modal) return;

    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  function initCourseModal() {
    const modal = document.getElementById('course-modal');
    const closeBtn = document.getElementById('course-modal-close');
    const backdrop = document.getElementById('course-modal-backdrop');
    const enrollBtn = document.getElementById('modal-enroll-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeCourseModal);
    if (backdrop) backdrop.addEventListener('click', closeCourseModal);

    if (enrollBtn) {
      enrollBtn.addEventListener('click', function () {
        const courseTitle = activeModalCourse ? activeModalCourse.title : 'Selected Course';
        closeCourseModal();
        openDemoFeedbackModal(
          'Course Enrollment Simulated',
          `You have successfully initiated enrollment in "${courseTitle}". In the production architecture, your explorer profile would now receive automated access to the interactive playground and course repositories.`
        );
      });
    }

    // Escape Key Listener
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
        closeCourseModal();
      }
    });
  }

  /* ===========================================================================
     07. DEMO ACTION & SIMULATION FEEDBACK MODAL
     =========================================================================== */
  function openDemoFeedbackModal(title, message) {
    const modal = document.getElementById('demo-feedback-modal');
    if (!modal) return;

    const titleEl = document.getElementById('demo-modal-title');
    const messageEl = document.getElementById('demo-modal-message');

    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const dismissBtn = document.getElementById('demo-modal-dismiss');
    if (dismissBtn) dismissBtn.focus();
  }

  function closeDemoFeedbackModal() {
    const modal = document.getElementById('demo-feedback-modal');
    if (!modal) return;

    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initDemoModal() {
    const modal = document.getElementById('demo-feedback-modal');
    const closeBtn = document.getElementById('demo-modal-close');
    const dismissBtn = document.getElementById('demo-modal-dismiss');
    const backdrop = document.getElementById('demo-modal-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', closeDemoFeedbackModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeDemoFeedbackModal);
    if (backdrop) backdrop.addEventListener('click', closeDemoFeedbackModal);

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
        closeDemoFeedbackModal();
      }
    });

    // Sign In button in header
    const signinBtn = document.getElementById('header-signin-btn');
    if (signinBtn) {
      signinBtn.addEventListener('click', function () {
        openDemoFeedbackModal(
          'Explorer Authentication Gateway',
          'NEXORA features passwordless WebAuthn and OAuth2 passkey sign-in. In this frontend demonstration sandbox, your telemetry session is already authenticated as Explorer Alex.'
        );
      });
    }
  }

  /* ===========================================================================
     08. INTERACTIVE LEARNING PATHS CONTROLLER
     =========================================================================== */
  function renderPathStages(pathKey) {
    const path = PATHS_DATA[pathKey];
    if (!path) return;

    const badge = document.getElementById('path-category-badge');
    const title = document.getElementById('path-title');
    const desc = document.getElementById('path-description');
    const duration = document.getElementById('path-duration');
    const projects = document.getElementById('path-projects');
    const level = document.getElementById('path-level');
    const stagesList = document.getElementById('path-stages-list');

    if (badge) badge.textContent = path.badge;
    if (title) title.textContent = path.title;
    if (desc) desc.textContent = path.description;
    if (duration) duration.textContent = path.duration;
    if (projects) projects.textContent = path.projects;
    if (level) level.textContent = path.level;

    if (stagesList) {
      stagesList.innerHTML = path.stages.map((stage, idx) => `
        <div class="stage-step-card" style="animation:fadeInUp 0.4s ease forwards ${idx * 0.08}s;">
          <div class="stage-card-num">${stage.num} // ${stage.duration}</div>
          <h4 class="stage-card-title">${stage.title}</h4>
          <p class="stage-card-desc">${stage.desc}</p>
          
          <div class="stage-skills-list" style="margin-top:auto; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.06); display:flex; flex-wrap:wrap; gap:0.4rem;">
            ${stage.skills.map(s => `
              <span class="skill-pill" style="font-family:var(--font-mono); font-size:0.68rem; padding:0.2rem 0.5rem; background:rgba(0,210,255,0.06); border:1px solid rgba(0,210,255,0.2); border-radius:var(--border-radius-pill); color:var(--electric-cyan);">
                ${s}
              </span>
            `).join('')}
          </div>

          <div class="capstone-note" style="margin-top:0.85rem; font-family:var(--font-mono); font-size:0.68rem; color:var(--text-tertiary);">
            Capstone: <strong style="color:var(--text-secondary);">${stage.capstone}</strong>
          </div>
        </div>
      `).join('');
    }
  }

  function initLearningPaths() {
    const pathBtns = document.querySelectorAll('.path-nav-btn');
    if (!pathBtns.length) return;

    // Render initial full-stack roadmap
    renderPathStages('fullstack');

    pathBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        pathBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const pathKey = this.getAttribute('data-path') || 'fullstack';
        renderPathStages(pathKey);
      });
    });
  }

  /* ===========================================================================
     09. LEARNING COMMAND CENTER (TELEMETRY DASHBOARD)
     =========================================================================== */
  function initCommandCenter() {
    const continueBtn = document.getElementById('demo-continue-btn');
    const progressFill = document.getElementById('demo-course-progress-fill');
    const progressNum = document.getElementById('demo-progress-num');

    let currentProgress = 68;

    if (continueBtn && progressFill && progressNum) {
      continueBtn.addEventListener('click', function () {
        // Increment progress simulation
        if (currentProgress < 95) {
          currentProgress += 7;
        } else {
          currentProgress = 100;
        }

        progressFill.style.width = currentProgress + '%';
        progressNum.textContent = currentProgress + '% Complete';

        if (currentProgress >= 100) {
          openDemoFeedbackModal(
            'Module Completed!',
            'Outstanding achievement! Explorer Alex has completed Module 4 of "Neural Networks & Autonomous AI Agents". The "Deep RL Sovereign" badge is now unlocked in your command center telemetry.'
          );
          currentProgress = 68; // Reset for repeated testing
        } else {
          openDemoFeedbackModal(
            'Telemetry Sprint Synchronized',
            `Progress recorded at ${currentProgress}%! Your telemetry telemetry stream and 14-day momentum streak have been synchronized with the NEXORA learning engine.`
          );
        }
      });
    }

    // Animate radial progress ring
    const radialRing = document.querySelector('.radial-progress');
    if (radialRing) {
      const totalCircumference = 251.2;
      const targetPercent = 0.78;
      const targetOffset = totalCircumference * (1 - targetPercent);
      radialRing.style.strokeDashoffset = targetOffset.toString();
    }
  }

  /* ===========================================================================
     10. MEMBERSHIP & BILLING TOGGLE ARCHITECTURE
     =========================================================================== */
  function initPricingToggle() {
    const toggleBtn = document.getElementById('billing-toggle');
    const proPriceVal = document.getElementById('pro-price-val');
    const proPriceCycle = document.getElementById('pro-price-cycle');
    const monthlyLabel = document.getElementById('monthly-label');
    const annualLabel = document.getElementById('annual-label');

    let isAnnual = false;

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        isAnnual = !isAnnual;
        toggleBtn.setAttribute('aria-checked', isAnnual ? 'true' : 'false');
        toggleBtn.classList.toggle('active', isAnnual);

        if (isAnnual) {
          if (proPriceVal) proPriceVal.textContent = '23';
          if (proPriceCycle) proPriceCycle.textContent = '/ month (billed $276 annually)';
          if (annualLabel) annualLabel.style.color = '#FFFFFF';
          if (monthlyLabel) monthlyLabel.style.color = 'var(--text-tertiary)';
        } else {
          if (proPriceVal) proPriceVal.textContent = '29';
          if (proPriceCycle) proPriceCycle.textContent = '/ month';
          if (annualLabel) annualLabel.style.color = 'var(--text-secondary)';
          if (monthlyLabel) monthlyLabel.style.color = '#FFFFFF';
        }
      });
    }

    // Plan selection buttons
    const planButtons = document.querySelectorAll('.plan-select-btn');
    planButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const plan = this.getAttribute('data-plan');
        if (plan === 'free') {
          openDemoFeedbackModal(
            'Explorer Free Plan Activated',
            'Welcome to the NEXORA learning universe! Your foundational access includes 12 core courses, community forum access, and in-browser coding environments.'
          );
        } else {
          const billingMode = isAnnual ? 'Annual ($23/mo billed annually)' : 'Monthly ($29/mo)';
          openDemoFeedbackModal(
            'NEXORA Pro Membership Simulated',
            `You selected NEXORA Pro on the ${billingMode} tier! In production, this securely launches the payment checkout workflow with a 14-day unrestricted trial.`
          );
        }
      });
    });

    // Comparison Table Accordion Toggle
    const comparisonBtn = document.getElementById('toggle-comparison-btn');
    const comparisonTable = document.getElementById('comparison-table-wrapper');

    if (comparisonBtn && comparisonTable) {
      comparisonBtn.addEventListener('click', function () {
        const isExpanded = comparisonBtn.getAttribute('aria-expanded') === 'true';
        comparisonBtn.setAttribute('aria-expanded', !isExpanded);
        comparisonTable.classList.toggle('hidden');

        const arrow = comparisonBtn.querySelector('.toggle-arrow');
        if (arrow) {
          arrow.innerHTML = isExpanded ? '&darr;' : '&uarr;';
        }
      });
    }
  }

  /* ===========================================================================
     11. GLOBAL NAVIGATION, MOBILE DRAWER, & SCROLL BEHAVIOR
     =========================================================================== */
  function initNavigation() {
    const header = document.getElementById('site-header');
    const scrollProgress = document.getElementById('scroll-progress-line');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const quickSearchBtn = document.getElementById('quick-search-trigger');
    const searchInput = document.getElementById('course-search-input');

    // Header Scroll Glass State & Progress Indicator
    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

      if (scrollProgress) {
        scrollProgress.style.width = progressPercent + '%';
      }

      if (header) {
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (backToTopBtn) {
        if (scrollY > 600) {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.pointerEvents = 'auto';
        } else {
          backToTopBtn.style.opacity = '0.5';
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Back to top click
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Quick search trigger in header
    if (quickSearchBtn && searchInput) {
      quickSearchBtn.addEventListener('click', function () {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            searchInput.focus();
          }, 600);
        }
      });
    }

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const drawerClose = document.getElementById('drawer-close-btn');
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
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      };

      const sectionObserver = new IntersectionObserver((entries) => {
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
      }, observerOptions);

      sections.forEach(sec => sectionObserver.observe(sec));
    }
  }

  /* ===========================================================================
     12. NEWSLETTER SUBSCRIPTION FORM VALIDATION
     =========================================================================== */
  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const feedback = document.getElementById('newsletter-feedback');
    if (!form || !emailInput || !feedback) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        feedback.textContent = 'Please enter your email address.';
        feedback.style.color = '#F59E0B';
        emailInput.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        feedback.textContent = 'Please provide a valid email format (e.g. name@domain.com).';
        feedback.style.color = '#EF4444';
        emailInput.focus();
        return;
      }

      // Success Confirmation
      feedback.textContent = `Transmission confirmed! The Frontier Dispatch will be delivered to ${email}.`;
      feedback.style.color = 'var(--electric-cyan)';
      emailInput.value = '';

      setTimeout(() => {
        feedback.textContent = '';
      }, 7000);
    });
  }

  /* ===========================================================================
     13. SCROLL REVEAL OBSERVER & ACCESSIBILITY
     =========================================================================== */
  function initScrollReveal() {
    // Respect user motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ===========================================================================
     14. DOM READY ORCHESTRATION
     =========================================================================== */
  function onDOMContentLoaded() {
    initKnowledgeSphere();
    initCourseCatalog();
    initCourseModal();
    initDemoModal();
    initLearningPaths();
    initCommandCenter();
    initPricingToggle();
    initNavigation();
    initNewsletter();
    initScrollReveal();

    console.log('%c NEXORA %c Learning Universe active // Version 3.4', 'background:#00d2ff; color:#030712; font-weight:bold; padding:4px 8px; border-radius:4px;', 'color:#94a3b8; padding:4px;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  } else {
    onDOMContentLoaded();
  }

})();
