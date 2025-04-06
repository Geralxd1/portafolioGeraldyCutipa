import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Trail } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// 🌠 Estrella fugaz animada con estela
function ShootingStar() {
    const ref = useRef(null);

    // Ajustar posición inicial para cubrir mejor la pantalla
    const [position, setPosition] = useState([
        (Math.random() - 0.5) * 40, // Aumentamos el rango en X
        Math.random() * 15 + 10, // Y alto para que caiga desde más arriba
        (Math.random() - 0.5) * 40 // Aumentamos el rango en Z
    ]);

    useFrame(() => {
        if (!ref.current) return;

        // Movimiento en diagonal
        ref.current.position.x -= 0.15; // Velocidad mayor para mejor efecto
        ref.current.position.y -= 0.1;

        // Si sale de la pantalla, reiniciar posición
        if (ref.current.position.y < -10 || ref.current.position.x < -20) {
            const newPosition = [
                (Math.random() - 0.5) * 40, // Más distribución en X
                Math.random() * 15 + 10, // Más arriba
                (Math.random() - 0.5) * 40 // Más profundidad
            ];
            setPosition(newPosition);
            ref.current.position.set(...newPosition);
        }
    });

    return (
        <>
            {/* 🌠 Estela */}
            <Trail
                local
                width={2} // Reduce el grosor para más realismo
                length={7} // Aumenta el largo de la estela
                color={"#ffffff"} // Color blanco puro
                attenuation={(t) => t * t * t} // Desvanecimiento más suave
            >
                {/* 🌟 Estrella fugaz */}
                <mesh ref={ref} position={position}>
                    <sphereGeometry args={[0.08, 8, 8]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            </Trail>
        </>
    );
}

// 🌌 Escena completa con estrellas fugaces
export default function Background() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas camera={{ position: [0, 0, 20] }}> {/* Cámara más alejada */}
                {/* Fondo de estrellas */}
                <Stars radius={80} depth={80} count={7000} factor={4} fade />

                {/* Más estrellas fugaces */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <ShootingStar key={i} />
                ))}
            </Canvas>
        </div>
    );
}
