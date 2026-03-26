import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion, AccordionGroup, Tip, Update } from '@/components/docs/mintlify';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    AccordionGroup,
    Tip,
    Update,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;
