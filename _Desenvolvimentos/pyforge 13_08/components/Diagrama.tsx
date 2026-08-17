type DiagramaStep = {
  titulo: string;
  descricao?: string;
};

const CORES = [
  { border: "#2563EB", bg: "rgba(37,99,235,0.08)" }, // azul
  { border: "#A855F7", bg: "rgba(168,85,247,0.08)" }, // roxo
  { border: "#FACC15", bg: "rgba(250,204,21,0.08)" }, // amarelo
  { border: "#22C55E", bg: "rgba(34,197,94,0.08)" }, // verde
  { border: "#F97316", bg: "rgba(249,115,22,0.08)" }, // laranja
];

/**
 * Diagrama de fluxo vertical, desenhado em SVG puro (sem imagens externas),
 * seguindo o padrão visual do Design System: caixas arredondadas, linhas
 * suaves, cores consistentes por posição no fluxo.
 */
export function Diagrama({
  titulo,
  passos,
}: {
  titulo?: string;
  passos: DiagramaStep[];
}) {
  const boxHeight = 64;
  const gap = 40;
  const width = 340;
  const totalHeight = passos.length * boxHeight + (passos.length - 1) * gap + 16;

  return (
    <div className="my-4x flex flex-col items-center rounded-2xl border border-zinc-800 bg-bg-dark-elevated p-4x light:border-zinc-200 light:bg-bg-light-elevated">
      {titulo && (
        <p className="mb-3x text-sm font-semibold text-zinc-300 light:text-zinc-700">
          {titulo}
        </p>
      )}
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${totalHeight}`}
        className="max-w-sm"
      >
        {passos.map((passo, i) => {
          const y = 8 + i * (boxHeight + gap);
          const cor = CORES[i % CORES.length];
          return (
            <g key={i}>
              <rect
                x={20}
                y={y}
                width={width - 40}
                height={boxHeight}
                rx={14}
                fill={cor.bg}
                stroke={cor.border}
                strokeWidth={1.5}
              />
              <text
                x={width / 2}
                y={y + boxHeight / 2 - (passo.descricao ? 8 : 0)}
                textAnchor="middle"
                fontSize={14}
                fontWeight={600}
                fill={cor.border}
                fontFamily="Inter, sans-serif"
              >
                {passo.titulo}
              </text>
              {passo.descricao && (
                <text
                  x={width / 2}
                  y={y + boxHeight / 2 + 14}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#a1a1aa"
                  fontFamily="Inter, sans-serif"
                >
                  {passo.descricao}
                </text>
              )}
              {i < passos.length - 1 && (
                <>
                  <line
                    x1={width / 2}
                    y1={y + boxHeight}
                    x2={width / 2}
                    y2={y + boxHeight + gap - 8}
                    stroke="#52525b"
                    strokeWidth={1.5}
                  />
                  <polygon
                    points={`${width / 2 - 5},${y + boxHeight + gap - 8} ${width / 2 + 5},${y + boxHeight + gap - 8} ${width / 2},${y + boxHeight + gap}`}
                    fill="#52525b"
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
