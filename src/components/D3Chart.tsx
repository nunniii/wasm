import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface D3ChartProps {
  dataArray: number[];
}

export const D3Chart: React.FC<D3ChartProps> = ({ dataArray }) => {
  const svgRef = useRef<SVGSVGElement | null>(null); // Ref para o elemento SVG

  useEffect(() => {
    if (dataArray.length === 0) return; // Se o array estiver vazio, não renderizar o gráfico

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Limpa o SVG a cada renderização para evitar sobreposição

    const width = 600;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // escala para o eixo X (usando o índice dos dados)
    const x = d3
      .scaleLinear()
      .domain([0, dataArray.length - 1]) // domínio começa no índice 0
      .range([margin.left, width - margin.right]);

    // escala eixo Y considerando valores negativos
    const y = d3
      .scaleLinear()
      .domain([d3.min(dataArray) as number, d3.max(dataArray) as number])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // -- para obter curvas suaves
    const line = d3
      .line<number>()
      .x((_, i) => x(i)) // Função para calcular a posição no eixo X
      .y((d) => y(d))    //   //    //    //   // /     //    //   Y
      .curve(d3.curveBasis); 

    // adiciona a linha ao gráfico:
    svg
      .append('path')
      .datum(dataArray) 
      .attr('fill', 'none')
      .attr('stroke', '#40ab8d') //cor 
      .attr('stroke-width', 2) // espessura
      .attr('d', line);

 
    svg
      .append('rect')
      .attr('x', margin.left)
      .attr('y', margin.top)
      .attr('width', width - margin.left - margin.right)
      .attr('height', height - margin.top - margin.bottom)
      .attr('fill', 'transparent'); 

  }, [dataArray]); // o gráfico deve atualizar sempre que o dataArray mudar

  return <svg ref={svgRef} width={600} height={300}></svg>;
};
