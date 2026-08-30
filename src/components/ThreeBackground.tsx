import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const createTextTexture = (text: string, color: string = '#fb4617'): THREE.CanvasTexture => {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 26px "Fira Code", "Courier New", monospace';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 1. Engineering 3D Coordinate Grid
    const gridHelper = new THREE.GridHelper(100, 50, 0xfb4617, 0x1e293b);
    gridHelper.position.y = -22;
    gridHelper.rotation.x = Math.PI / 6;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.22;
    scene.add(gridHelper);

    // 2. High-Density Java, SQL & Engineering Mathematics Sprites List
    const codeAndMathItems = [
      // JAVA CODE SNIPPETS (Orange / Gold / Cyan)
      { text: 'public static void main(String[] args)', color: '#fb4617' },
      { text: 'List<Integer> list = new ArrayList<>();', color: '#f59e0b' },
      { text: 'Map<String, Object> map = new HashMap<>();', color: '#fb4617' },
      { text: 'class Node<T> { T val; Node<T> next; }', color: '#eab308' },
      { text: 'ExecutorService pool = Executors.newFixedThreadPool(4);', color: '#f97316' },
      { text: 'DriverManager.getConnection(url, user, pass);', color: '#fb4617' },
      { text: 'System.out.println("Oracle Certified Java SE 11");', color: '#eab308' },
      { text: 'Optional<User> user = userRepository.findById(id);', color: '#f59e0b' },
      { text: 'stream().filter(x -> x > 0).collect(Collectors.toList());', color: '#fb4617' },
      { text: 'class StudentDAO { public List<Student> findAll() }', color: '#f97316' },

      // SQL QUERIES & DATABASE STATEMENTS (Emerald / Cyan / Blue)
      { text: 'SELECT id, name, cgpa FROM students WHERE status = "ACTIVE";', color: '#10b981' },
      { text: 'CREATE TABLE users (id INT PRIMARY KEY, email VARCHAR(255));', color: '#38bdf8' },
      { text: 'INSERT INTO achievements (title, date) VALUES ("Oracle SE 11", 2024);', color: '#34d399' },
      { text: 'SELECT s.name, c.course FROM students s JOIN courses c ON s.id = c.sid;', color: '#0EA5E9' },
      { text: 'UPDATE portfolio SET status = "PRODUCTION" WHERE dev = "Bharath";', color: '#10b981' },
      { text: 'CREATE INDEX idx_user_email ON users(email);', color: '#38bdf8' },
      { text: 'ALTER TABLE records ADD CONSTRAINT fk_user FOREIGN KEY (user_id);', color: '#34d399' },
      { text: 'SELECT COUNT(*), dept FROM employees GROUP BY dept;', color: '#0EA5E9' },

      // MATHEMATICS & ENGINEERING FORMULAS (Purple / Rose / Amber / Sky)
      { text: 'f(x) = σ(Wᵀx + b)', color: '#fb4617' },
      { text: 'O(N log N)', color: '#38bdf8' },
      { text: '∫₀^∞ e^{-x²} dx = √π / 2', color: '#a855f7' },
      { text: '∇ × E = -∂B/∂t', color: '#f43f5e' },
      { text: 'det(A - λI) = 0', color: '#38bdf8' },
      { text: 'P(A|B) = P(B|A)P(A) / P(B)', color: '#a855f7' },
      { text: '∑_{n=1}^∞ 1/n² = π²/6', color: '#f43f5e' },
      { text: 'e^(iπ) + 1 = 0', color: '#a855f7' },
      { text: 'Aᵀ A x = Aᵀ b', color: '#fb4617' },
      { text: 'L = ½ m v² - V(x)', color: '#38bdf8' },
      { text: 'H |Ψ⟩ = E |Ψ⟩', color: '#a855f7' },
      { text: 'd/dx (u · v) = u\'v + uv\'', color: '#f43f5e' },
      { text: 'lim_{x→0} sin(x)/x = 1', color: '#38bdf8' },
      { text: 'cos²(θ) + sin²(θ) = 1', color: '#10b981' },
      { text: 'H(X) = -∑ P(x) log₂ P(x)', color: '#a855f7' },
      { text: 'L(θ) = ∏ P(xᵢ | θ)', color: '#fb4617' },
    ];

    const spriteGroup = new THREE.Group();
    const sprites: {
      sprite: THREE.Sprite;
      initialX: number;
      initialY: number;
      initialZ: number;
      floatSpeed: number;
      bobSpeed: number;
      bobOffset: number;
    }[] = [];

    codeAndMathItems.forEach((item, index) => {
      const texture = createTextTexture(item.text, item.color);
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.42,
      });
      const sprite = new THREE.Sprite(spriteMaterial);

      const angle = (index / codeAndMathItems.length) * Math.PI * 2;
      const radius = 22 + (index % 5) * 5;
      const initialX = Math.cos(angle) * radius;
      const initialY = ((index % 7) - 3) * 7;
      const initialZ = Math.sin(angle) * radius - 8;

      sprite.position.set(initialX, initialY, initialZ);
      sprite.scale.set(14, 3.2, 1);

      spriteGroup.add(sprite);
      sprites.push({
        sprite,
        initialX,
        initialY,
        initialZ,
        floatSpeed: 0.003 + (index % 4) * 0.002,
        bobSpeed: 1.2 + (index % 3) * 0.4,
        bobOffset: index * 0.5,
      });
    });

    scene.add(spriteGroup);

    // 3. Wireframe Engineering Geometries
    const icosaGeo = new THREE.IcosahedronGeometry(8, 1);
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0xfb4617,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
    icosaMesh.position.set(18, -8, -12);
    scene.add(icosaMesh);

    const octaGeo = new THREE.OctahedronGeometry(7, 1);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(-20, 12, -14);
    scene.add(octaMesh);

    // 4. Binary & Engineering Particle Stream
    const particleCount = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.38,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Continuous 3D Orbiting Motion of Java & SQL & Math Sprites Group
      spriteGroup.rotation.y = elapsedTime * 0.04 + targetX * 0.25;
      spriteGroup.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05 + targetY * 0.15;
      spriteGroup.position.y = -scrollY * 0.007;

      // Continuous Upward / Downward Wave Motion for Each Individual Code Snippet & Formula
      sprites.forEach((item, i) => {
        item.sprite.position.y = item.initialY + Math.sin(elapsedTime * item.bobSpeed + item.bobOffset) * 1.2;
        item.sprite.position.x = item.initialX + Math.cos(elapsedTime * 0.5 + i) * 0.8;
      });

      // Rotate 3D Polyhedra
      icosaMesh.rotation.x = elapsedTime * 0.12;
      icosaMesh.rotation.y = elapsedTime * 0.18;
      icosaMesh.position.y = -8 - scrollY * 0.009;

      octaMesh.rotation.x = elapsedTime * -0.15;
      octaMesh.rotation.z = elapsedTime * 0.1;
      octaMesh.position.y = 12 - scrollY * 0.006;

      gridHelper.position.z = -12 - scrollY * 0.005;
      particleSystem.rotation.y = elapsedTime * 0.02;
      particleSystem.position.y = -scrollY * 0.004;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      icosaGeo.dispose();
      icosaMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ThreeBackground;
