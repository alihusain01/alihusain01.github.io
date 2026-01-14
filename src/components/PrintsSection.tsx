import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface Print {
  name: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const prints: Print[] = [
  {
    name: "Modular Cable Organizer",
    description: "When going on long runs, I needed a convenient and quick way to grab the gels I need. I designed this display case to solve that problem.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Print Time", value: "6hr" }
    ]
  }
];

const RotatingModel = () => {
  const { scene } = useGLTF('/models/gu-gel.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.5} 
      position={[0, 0, 0]} 
    />
  );
};

const Model3DViewer = () => {
  return (
    <div className="relative flex-shrink-0 w-32 h-32">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingModel />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

const PrintsSection = () => {
  return (
    <section id="prints" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">3D Prints</h2>
        
        <div className="space-y-12">
          {prints.map((print, index) => (
            <div key={index} className="flex items-start gap-8">
              <Model3DViewer />
              
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{print.name}</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {print.description}
                </p>
                
                <div className="flex gap-6 text-sm">
                  {print.specs.map((spec, i) => (
                    <div key={i}>
                      <p className="text-muted-foreground">{spec.label}</p>
                      <p className="text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintsSection;
