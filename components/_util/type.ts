import React from 'react';

export type LiteralUnion<T extends string> = T | (string & {});
export type AnyObject = Record<PropertyKey, any>;
export type CustomComponent<P = AnyObject> = React.ComponentType<P> | string;
