import React, { useEffect } from 'react';
import '../../App.css';
import VisGraph, { GraphData } from 'react-vis-graph-wrapper';
import { useSearchUsersMutation } from './api';
import { GraphDataResponse } from './types';

function transformResponseToGraph(response: GraphDataResponse): GraphData {
  const nodes = response.nodes.map(({ id, name, followers }) => ({
    id,
    label: name,
    size: Math.sqrt(followers),
  }));

  const edges = response.edges.map(({ fromUserId, toUserId, retweets }) => ({
    from: fromUserId,
    to: toUserId,
    value: retweets,
  }));

  return { nodes, edges };
}

interface Props {
  names: string[];
}

export default function GraphWrapper({ names }: Props) {
  const [validate, graphDataResponse] = useSearchUsersMutation();
  useEffect(() => {
    validate({
      userNames: names,
    });
  }, [names, validate]);

  return (
    <VisGraph
      graph={transformResponseToGraph(
        graphDataResponse?.data || { nodes: [], edges: [] }
      )}
    />
  );
}
