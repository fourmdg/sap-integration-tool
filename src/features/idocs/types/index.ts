/**
 * Tipos específicos para IDocs
 * Re-exporta tipos do core + adiciona específicos
 */

export type {
  IdocField,
  SegmentDefinition,
  IdocTreeNode,
  IdocData,
} from '@core/types';

/** Metadados de um IDoc para listagem */
export interface IdocMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  segmentCount: number;
}

/** Props do SegmentCard */
export interface SegmentCardProps {
  name: string;
  description: string;
  max: number;
  fields: Array<{
    name: string;
    desc: string;
    type: string;
    len: string;
  }>;
}
