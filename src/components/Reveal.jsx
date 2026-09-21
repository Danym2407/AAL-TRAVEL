import { useReveal } from '../hooks/useReveal.js';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const { ref, inView } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
