import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // بنتأكد إن المتصفح بيدعم الـ WebGL عشان الدنيا متبوظش لو مش مدعوم
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    if (!isWebGLAvailable()) return;

    // تعريف المتغيرات الأساسية للـ Three.js
    let renderer: THREE.WebGLRenderer | undefined;
    let scene: THREE.Scene | undefined;
    let camera: THREE.PerspectiveCamera | undefined;
    let animationId: number;
    let linesMesh: THREE.LineSegments | undefined;
    let pointCloud: THREE.Points | undefined;
    let gridPlane: THREE.Mesh | undefined;
    
    // هنا بنخزن بيانات حركة النقط (السرعة والاتجاه)
    const particlesData: { velocity: THREE.Vector3 }[] = [];
    let particlePositions: Float32Array;

    const init = () => {
      try {
        // --- 1. تجهيز المشهد (Scene Setup) ---
        scene = new THREE.Scene();
        // لون الضباب (Fog) لازم يبقى نفس لون الخلفية عشان التداخل يبقى ناعم وميبقاش فيه حواف حادة
        scene.fog = new THREE.FogExp2(0x050505, 0.0015);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 80;
        camera.position.y = 20;

        renderer = new THREE.WebGLRenderer({ 
          alpha: true, // عشان الخلفية تبقى شفافة وتبان ورا العناصر
          antialias: true, // عشان الحواف تبقى ناعمة ومش مشرشرة
          powerPreference: "high-performance"
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        if (containerRef.current) {
          containerRef.current.appendChild(renderer.domElement);
        }

        // --- 2. الأرضية الشبكة (Grid Terrain) ---
        // دي الشبكة اللي تحت اللي بتدي إحساس بالعمق (Depth)
        const planeGeometry = new THREE.PlaneGeometry(400, 400, 60, 60);
        const planeMaterial = new THREE.MeshBasicMaterial({
          color: 0x888888, // رمادي فاتح
          wireframe: true, // عشان تبان كخطوط مش مسطح كامل
          transparent: true,
          opacity: 0.25,
          side: THREE.DoubleSide
        });
        
        gridPlane = new THREE.Mesh(planeGeometry, planeMaterial);
        gridPlane.rotation.x = -Math.PI / 2; // بنقلبها 90 درجة عشان تبقى أرضية
        gridPlane.position.y = -50;
        scene.add(gridPlane);

        // --- 3. الشبكة العلوية (Points + Lines) ---
        const particleCount = 130; // عدد النقط اللي بتطير
        const r = 120; // المدى اللي النقط بتنتشر فيه
        
        // هندسة النقط (Geometry)
        const pGeometry = new THREE.BufferGeometry();
        particlePositions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
          const x = Math.random() * r * 2 - r;
          const y = Math.random() * r - r/2; 
          const z = Math.random() * r * 2 - r;

          particlePositions[i * 3] = x;
          particlePositions[i * 3 + 1] = y;
          particlePositions[i * 3 + 2] = z;

          // سرعة عشوائية لكل نقطة عشان تتحرك براحتها في كل الاتجاهات
          particlesData.push({
            velocity: new THREE.Vector3(
              -0.15 + Math.random() * 0.3,
              -0.15 + Math.random() * 0.3,
              -0.15 + Math.random() * 0.3
            )
          });
        }

        pGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        
        // خامة النقط (Material)
        const pMaterial = new THREE.PointsMaterial({
          color: 0xFFD60A, // اللون الأصفر
          size: 2.8,
          transparent: true,
          opacity: 0.9,
          sizeAttenuation: true
        });

        pointCloud = new THREE.Points(pGeometry, pMaterial);
        scene.add(pointCloud);

        // هندسة الخطوط اللي بتوصل بين النقط
        const segments = particleCount * particleCount;
        const lGeometry = new THREE.BufferGeometry();
        const lPositions = new Float32Array(segments * 3);
        
        lGeometry.setAttribute('position', new THREE.BufferAttribute(lPositions, 3).setUsage(THREE.DynamicDrawUsage));
        
        const lMaterial = new THREE.LineBasicMaterial({
          color: 0xFFD60A,
          transparent: true,
          opacity: 0.35,
          linewidth: 1
        });

        linesMesh = new THREE.LineSegments(lGeometry, lMaterial);
        scene.add(linesMesh);

        // --- التفاعل مع الماوس ---
        let mouseX = 0;
        let mouseY = 0;
        
        const handleMouseMove = (event: MouseEvent) => {
          // بنحسب مكان الماوس بالنسبة لنص الشاشة
          mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
          mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
        };
        
        document.addEventListener('mousemove', handleMouseMove);

        // --- اللوب بتاع الأنيميشن (The Loop) ---
        let time = 0;
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          time += 0.008;

          // --- تأثيرات النبض (Pulsing Effects) ---
          
          // 1. نبض الشبكة الأرضية (Opacity بتزيد وبتقل)
          if (gridPlane && gridPlane.material instanceof THREE.MeshBasicMaterial) {
             gridPlane.material.opacity = 0.25 + Math.sin(time * 1.5) * 0.08;
          }

          // 2. نبض حجم النقط
          if (pointCloud && pointCloud.material instanceof THREE.PointsMaterial) {
             pointCloud.material.size = 2.8 + Math.sin(time * 3) * 0.5;
          }

          // 3. نبض شفافية الخطوط
          if (linesMesh && linesMesh.material instanceof THREE.LineBasicMaterial) {
             linesMesh.material.opacity = 0.35 + Math.sin(time * 2) * 0.15;
          }

          // --- الحركة والديناميكية (Dynamics) ---

          // 4. حركة الشبكة الأرضية (زي الموجة)
          if (gridPlane) {
            const positionAttribute = gridPlane.geometry.attributes.position;
            for (let i = 0; i < positionAttribute.count; i++) {
                const x = positionAttribute.getX(i);
                const y = positionAttribute.getY(i);
                // بنعمل معادلة موجة بسيطة عشان الأرضية تتحرك بتموج
                const z = Math.sin(x / 30 + time) * 4 + Math.cos(y / 30 + time) * 4;
                positionAttribute.setZ(i, z);
            }
            positionAttribute.needsUpdate = true;
          }

          // 5. تحديث مكان النقط
          const positions = pointCloud!.geometry.attributes.position.array as Float32Array;
          
          for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += particlesData[i].velocity.x;
            positions[i * 3 + 1] += particlesData[i].velocity.y;
            positions[i * 3 + 2] += particlesData[i].velocity.z;

            // بنعمل حدود (Boundaries) عشان النقط متسرحش بعيد وترجع تاني (زي البلياردو)
            const limit = 100;
            if (positions[i * 3] < -limit || positions[i * 3] > limit) particlesData[i].velocity.x *= -1;
            if (positions[i * 3 + 1] < -50 || positions[i * 3 + 1] > 50) particlesData[i].velocity.y *= -1;
            if (positions[i * 3 + 2] < -limit || positions[i * 3 + 2] > limit) particlesData[i].velocity.z *= -1;
          }
          pointCloud!.geometry.attributes.position.needsUpdate = true;

          // 6. توصيل النقط بخطوط (Connections)
          let vertexIndex = 0;
          const connectionDistance = 35; // المسافة اللي لو نقطتين قربوا منها نوصلهم ببعض
          const linePosAttribute = linesMesh!.geometry.attributes.position as THREE.BufferAttribute;

          for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
              const dx = positions[i * 3] - positions[j * 3];
              const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
              const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
              
              const distSq = dx*dx + dy*dy + dz*dz;

              if (distSq < connectionDistance * connectionDistance) {
                linePosAttribute.setXYZ(vertexIndex++, positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                linePosAttribute.setXYZ(vertexIndex++, positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
              }
            }
          }

          linesMesh!.geometry.setDrawRange(0, vertexIndex);
          linePosAttribute.needsUpdate = true;

          // 7. الكاميرا بتتحرك مع الماوس ببطء (Parallax Effect)
          camera!.position.x += (mouseX - camera!.position.x) * 0.03;
          camera!.position.y += (-mouseY + 20 - camera!.position.y) * 0.03;
          camera!.lookAt(scene!.position);

          renderer!.render(scene!, camera!);
        };
        
        animate();

        // --- التعامل مع تغيير حجم الشاشة (Resize) ---
        const handleResize = () => {
          if (!camera || !renderer) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          document.removeEventListener('mousemove', handleMouseMove);
        };

      } catch (e) {
        console.warn("WebGL initialization failed:", e);
        return () => {};
      }
    };

    const cleanupListeners = init();

    // تنظيف الميموري لما الكومبوننت يتمسح (Cleanup)
    return () => {
      if (cleanupListeners) cleanupListeners();
      if (animationId) cancelAnimationFrame(animationId);
      
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
      if (gridPlane) gridPlane.geometry.dispose();
      if (pointCloud) pointCloud.geometry.dispose();
      if (linesMesh) linesMesh.geometry.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-10 opacity-100 pointer-events-none" 
      aria-hidden="true"
    />
  );
};

export default Background3D;