import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating shapes
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.TorusGeometry(0.7, 0.2, 16, 100),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0)
    ];

    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 50,
      emissive: 0x2563eb,
      emissiveIntensity: 200
    });

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      const scale = Math.random() * 0.5 + 0.2;
      mesh.scale.set(scale, scale, scale);
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));

    // Wireframe Net Background (Mat Style)
    const netGeometry = new THREE.PlaneGeometry(
      40,   // width
      25,   // height
      80,   // horizontal wires
      60    // vertical wires
    );

    const netMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    const net = new THREE.Mesh(netGeometry, netMaterial);

    net.position.z = -5; 
    net.rotation.x = -0.6;

    scene.add(net);
    
    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      
      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005;
      });
      net.rotation.z += 0.001;

      const pos = net.geometry.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        const y = Math.sin(i * 0.2 + Date.now() * 0.002) * 0.15;
        pos.setZ(i, y);
      }

      pos.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};
