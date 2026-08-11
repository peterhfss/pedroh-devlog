import type { MDXComponents } from "mdx/types";
import * as runtime from 'react/jsx-runtime';

const sharedCompents = {
    // Add your global components here
}

const useMDXComponent = ( code : string ) => {
    const fn = new Function(code)
    return fn({...runtime}). default
}

interface MDXProps {
    code: string
    components?: MDXComponents
}

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
    const Component = useMDXComponent(code)
    return < Component components={{ ...sharedCompents, ...components}} />
}